-- ============================================================================
-- Fit n' Fire Chatbot Database Schema
-- Database: SQLite (can be adapted for PostgreSQL, MySQL, etc.)
-- Purpose: Store chatbot conversation logs and analytics
-- ============================================================================

-- Table: conversations
-- Stores individual conversation sessions
CREATE TABLE IF NOT EXISTS conversations (
    conversation_id TEXT PRIMARY KEY,
    user_id TEXT,
    session_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_end TIMESTAMP,
    user_agent TEXT,
    ip_address TEXT,
    device_type TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: messages
-- Stores individual messages in conversations
CREATE TABLE IF NOT EXISTS messages (
    message_id INTEGER PRIMARY KEY AUTOINCREMENT,
    conversation_id TEXT NOT NULL,
    message_type TEXT NOT NULL, -- 'user' or 'bot'
    message_text TEXT NOT NULL,
    intent TEXT, -- Detected intent (e.g., 'ask_games', 'ask_hours')
    confidence REAL, -- Confidence score (0-1)
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (conversation_id) REFERENCES conversations(conversation_id)
);

-- Table: user_feedback
-- Stores user feedback on bot responses
CREATE TABLE IF NOT EXISTS user_feedback (
    feedback_id INTEGER PRIMARY KEY AUTOINCREMENT,
    message_id INTEGER NOT NULL,
    rating INTEGER CHECK(rating >= 1 AND rating <= 5), -- 1-5 stars
    feedback_text TEXT,
    helpful BOOLEAN, -- thumbs up/down
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (message_id) REFERENCES messages(message_id)
);

-- Table: analytics
-- Stores aggregated analytics data
CREATE TABLE IF NOT EXISTS analytics (
    analytics_id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE NOT NULL,
    total_conversations INTEGER DEFAULT 0,
    total_messages INTEGER DEFAULT 0,
    avg_conversation_length REAL DEFAULT 0,
    most_common_intent TEXT,
    avg_confidence REAL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: common_questions
-- Tracks frequently asked questions
CREATE TABLE IF NOT EXISTS common_questions (
    question_id INTEGER PRIMARY KEY AUTOINCREMENT,
    question_text TEXT NOT NULL UNIQUE,
    count INTEGER DEFAULT 1,
    last_asked TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_conversations_user_id ON conversations(user_id);
CREATE INDEX IF NOT EXISTS idx_conversations_session_start ON conversations(session_start);
CREATE INDEX IF NOT EXISTS idx_messages_conversation_id ON messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_messages_timestamp ON messages(timestamp);
CREATE INDEX IF NOT EXISTS idx_messages_intent ON messages(intent);
CREATE INDEX IF NOT EXISTS idx_user_feedback_message_id ON user_feedback(message_id);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date);
CREATE INDEX IF NOT EXISTS idx_common_questions_count ON common_questions(count DESC);

-- Views for common queries

-- View: conversation_summary
-- Provides a summary of each conversation
CREATE VIEW IF NOT EXISTS conversation_summary AS
SELECT 
    c.conversation_id,
    c.user_id,
    c.session_start,
    c.session_end,
    COUNT(m.message_id) as message_count,
    COUNT(CASE WHEN m.message_type = 'user' THEN 1 END) as user_messages,
    COUNT(CASE WHEN m.message_type = 'bot' THEN 1 END) as bot_messages,
    AVG(m.confidence) as avg_confidence
FROM conversations c
LEFT JOIN messages m ON c.conversation_id = m.conversation_id
GROUP BY c.conversation_id;

-- View: daily_stats
-- Provides daily statistics
CREATE VIEW IF NOT EXISTS daily_stats AS
SELECT 
    DATE(session_start) as date,
    COUNT(DISTINCT conversation_id) as total_conversations,
    COUNT(*) as total_sessions,
    AVG(CAST((julianday(session_end) - julianday(session_start)) * 24 * 60 AS REAL)) as avg_duration_minutes
FROM conversations
WHERE session_end IS NOT NULL
GROUP BY DATE(session_start);

-- View: intent_distribution
-- Shows distribution of intents
CREATE VIEW IF NOT EXISTS intent_distribution AS
SELECT 
    intent,
    COUNT(*) as count,
    AVG(confidence) as avg_confidence,
    COUNT(*) * 100.0 / (SELECT COUNT(*) FROM messages WHERE intent IS NOT NULL) as percentage
FROM messages
WHERE intent IS NOT NULL
GROUP BY intent
ORDER BY count DESC;

-- Sample data for testing (optional)
-- Uncomment to insert sample data

/*
INSERT INTO conversations (conversation_id, user_id, device_type) VALUES
('conv_001', 'user_123', 'desktop'),
('conv_002', 'user_456', 'mobile');

INSERT INTO messages (conversation_id, message_type, message_text, intent, confidence) VALUES
('conv_001', 'user', 'Sample user question', 'sample_intent', 0.95),
('conv_001', 'bot', 'Sample bot response', NULL, NULL);

INSERT INTO common_questions (question_text, count) VALUES
('Sample question 1', 150),
('Sample question 2', 120);
*/

-- ============================================================================
-- End of Schema
-- ============================================================================

-- Made with Bob
