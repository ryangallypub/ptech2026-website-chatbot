/**
 * Gaming Chatbot Backend Server
 * Purpose: Log chatbot conversations to database
 * Database: SQLite (easily portable, no setup required)
 * Framework: Express.js
 */

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, '../'))); // Serve static files

// Database setup
const dbPath = path.join(__dirname, '../database/chatbot.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        initializeDatabase();
    }
});

/**
 * Initialize database with schema
 */
function initializeDatabase() {
    const schemaPath = path.join(__dirname, '../database/schema.sql');
    const fs = require('fs');
    
    fs.readFile(schemaPath, 'utf8', (err, sql) => {
        if (err) {
            console.error('Error reading schema file:', err);
            return;
        }
        
        db.exec(sql, (err) => {
            if (err) {
                console.error('Error initializing database:', err);
            } else {
                console.log('Database initialized successfully');
            }
        });
    });
}

// ============================================================================
// API ENDPOINTS
// ============================================================================

/**
 * POST /api/conversation/start
 * Start a new conversation session
 */
app.post('/api/conversation/start', (req, res) => {
    const { userId, userAgent, deviceType } = req.body;
    const conversationId = uuidv4();
    
    const sql = `
        INSERT INTO conversations (conversation_id, user_id, user_agent, device_type)
        VALUES (?, ?, ?, ?)
    `;
    
    db.run(sql, [conversationId, userId, userAgent, deviceType], function(err) {
        if (err) {
            console.error('Error starting conversation:', err);
            return res.status(500).json({ error: 'Failed to start conversation' });
        }
        
        res.json({
            success: true,
            conversationId: conversationId,
            message: 'Conversation started successfully'
        });
    });
});

/**
 * POST /api/conversation/end
 * End a conversation session
 */
app.post('/api/conversation/end', (req, res) => {
    const { conversationId } = req.body;
    
    const sql = `
        UPDATE conversations 
        SET session_end = CURRENT_TIMESTAMP 
        WHERE conversation_id = ?
    `;
    
    db.run(sql, [conversationId], function(err) {
        if (err) {
            console.error('Error ending conversation:', err);
            return res.status(500).json({ error: 'Failed to end conversation' });
        }
        
        res.json({
            success: true,
            message: 'Conversation ended successfully'
        });
    });
});

/**
 * POST /api/message/log
 * Log a message (user or bot)
 */
app.post('/api/message/log', (req, res) => {
    const { conversationId, messageType, messageText, intent, confidence } = req.body;
    
    // ADD THESE LOGS:
    console.log('📨 NEW MESSAGE RECEIVED');
    console.log('Type:', messageType);
    console.log('Text:', messageText);
    console.log('Conversation ID:', conversationId);
    console.log('---');

    // Validate required fields
    if (!conversationId || !messageType || !messageText) {
        return res.status(400).json({ 
            error: 'Missing required fields: conversationId, messageType, messageText' 
        });
    }
    
    const sql = `
        INSERT INTO messages (conversation_id, message_type, message_text, intent, confidence)
        VALUES (?, ?, ?, ?, ?)
    `;
    
    db.run(sql, [conversationId, messageType, messageText, intent, confidence], function(err) {
        if (err) {
            console.error('Error logging message:', err);
            return res.status(500).json({ error: 'Failed to log message' });
        }
        
        // Update common questions if it's a user message
        if (messageType === 'user') {
            updateCommonQuestions(messageText);
        }
        
        res.json({
            success: true,
            messageId: this.lastID,
            message: 'Message logged successfully'
        });
    });
});

/**
 * POST /api/feedback
 * Submit user feedback on a bot response
 */
app.post('/api/feedback', (req, res) => {
    const { messageId, rating, feedbackText, helpful } = req.body;
    
    if (!messageId) {
        return res.status(400).json({ error: 'Missing required field: messageId' });
    }
    
    const sql = `
        INSERT INTO user_feedback (message_id, rating, feedback_text, helpful)
        VALUES (?, ?, ?, ?)
    `;
    
    db.run(sql, [messageId, rating, feedbackText, helpful], function(err) {
        if (err) {
            console.error('Error submitting feedback:', err);
            return res.status(500).json({ error: 'Failed to submit feedback' });
        }
        
        res.json({
            success: true,
            feedbackId: this.lastID,
            message: 'Feedback submitted successfully'
        });
    });
});

/**
 * GET /api/conversations
 * Get all conversations (with pagination)
 */
app.get('/api/conversations', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    
    const sql = `
        SELECT * FROM conversation_summary
        ORDER BY session_start DESC
        LIMIT ? OFFSET ?
    `;
    
    db.all(sql, [limit, offset], (err, rows) => {
        if (err) {
            console.error('Error fetching conversations:', err);
            return res.status(500).json({ error: 'Failed to fetch conversations' });
        }
        
        // Get total count
        db.get('SELECT COUNT(*) as total FROM conversations', (err, countRow) => {
            res.json({
                success: true,
                data: rows,
                pagination: {
                    page: page,
                    limit: limit,
                    total: countRow ? countRow.total : 0
                }
            });
        });
    });
});

/**
 * GET /api/conversation/:id
 * Get a specific conversation with all messages
 */
app.get('/api/conversation/:id', (req, res) => {
    const conversationId = req.params.id;
    
    const conversationSql = 'SELECT * FROM conversations WHERE conversation_id = ?';
    const messagesSql = 'SELECT * FROM messages WHERE conversation_id = ? ORDER BY timestamp ASC';
    
    db.get(conversationSql, [conversationId], (err, conversation) => {
        if (err) {
            console.error('Error fetching conversation:', err);
            return res.status(500).json({ error: 'Failed to fetch conversation' });
        }
        
        if (!conversation) {
            return res.status(404).json({ error: 'Conversation not found' });
        }
        
        db.all(messagesSql, [conversationId], (err, messages) => {
            if (err) {
                console.error('Error fetching messages:', err);
                return res.status(500).json({ error: 'Failed to fetch messages' });
            }
            
            res.json({
                success: true,
                conversation: conversation,
                messages: messages
            });
        });
    });
});

/**
 * GET /api/analytics/daily
 * Get daily analytics
 */
app.get('/api/analytics/daily', (req, res) => {
    const days = parseInt(req.query.days) || 7;
    
    const sql = `
        SELECT * FROM daily_stats
        ORDER BY date DESC
        LIMIT ?
    `;
    
    db.all(sql, [days], (err, rows) => {
        if (err) {
            console.error('Error fetching analytics:', err);
            return res.status(500).json({ error: 'Failed to fetch analytics' });
        }
        
        res.json({
            success: true,
            data: rows
        });
    });
});

/**
 * GET /api/analytics/intents
 * Get intent distribution
 */
app.get('/api/analytics/intents', (req, res) => {
    const sql = 'SELECT * FROM intent_distribution';
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error('Error fetching intent distribution:', err);
            return res.status(500).json({ error: 'Failed to fetch intent distribution' });
        }
        
        res.json({
            success: true,
            data: rows
        });
    });
});

/**
 * GET /api/analytics/common-questions
 * Get most common questions
 */
app.get('/api/analytics/common-questions', (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    
    const sql = `
        SELECT * FROM common_questions
        ORDER BY count DESC
        LIMIT ?
    `;
    
    db.all(sql, [limit], (err, rows) => {
        if (err) {
            console.error('Error fetching common questions:', err);
            return res.status(500).json({ error: 'Failed to fetch common questions' });
        }
        
        res.json({
            success: true,
            data: rows
        });
    });
});

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        database: 'connected'
    });
});

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Update common questions table
 */
function updateCommonQuestions(questionText) {
    const sql = `
        INSERT INTO common_questions (question_text, count, last_asked)
        VALUES (?, 1, CURRENT_TIMESTAMP)
        ON CONFLICT(question_text)
        DO UPDATE SET
            count = count + 1,
            last_asked = CURRENT_TIMESTAMP
    `;
    
    db.run(sql, [questionText], (err) => {
        if (err) {
            console.error('Error updating common questions:', err);
        }
    });
}


// ============================================================================
// SERVER STARTUP
// ============================================================================

app.listen(PORT, () => {
    console.log('\n' + '='.repeat(60));
    console.log('  Gaming Chatbot Backend Server');
    console.log('='.repeat(60));
    console.log(`  Status: Running`);
    console.log(`  Port: ${PORT}`);
    console.log(`  Database: SQLite`);
    console.log(`  API Docs: http://localhost:${PORT}/api/health`);
    console.log('='.repeat(60) + '\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down server...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err);
        } else {
            console.log('Database connection closed');
        }
        process.exit(0);
    });
});

module.exports = app;

// Made with Bob
