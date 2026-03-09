# Database Setup Guide

Complete guide for setting up and using the chatbot conversation logging database.

## Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Database Schema](#database-schema)
5. [Backend API](#backend-api)
6. [Frontend Integration](#frontend-integration)
7. [Testing](#testing)
8. [Analytics & Reporting](#analytics--reporting)
9. [Troubleshooting](#troubleshooting)

---

## Overview

The database system logs all chatbot conversations, including:

- User messages and bot responses
- Conversation metadata (timestamps, device info)
- User feedback on responses
- Analytics and common questions

### Technology Stack

- **Database**: SQLite (portable, no setup required)
- **Backend**: Node.js + Express.js
- **Frontend**: Vanilla JavaScript
- **Integration**: watsonx Assistant Web Chat

---

## Prerequisites

Before you begin, ensure you have:

- ✅ Node.js (v14 or higher) installed
- ✅ npm (comes with Node.js)
- ✅ Your gaming website with watsonx Assistant set up
- ✅ Basic knowledge of JavaScript and REST APIs

### Check Node.js Installation

```bash
node --version  # Should show v14.0.0 or higher
npm --version   # Should show 6.0.0 or higher
```

If not installed, download from: https://nodejs.org/

---

## Installation

### Step 1: Install Backend Dependencies

Navigate to the backend directory and install packages:

```bash
cd gaming-website-chatbot/backend
npm install
```

This will install:

- `express` - Web server framework
- `sqlite3` - SQLite database driver
- `cors` - Cross-origin resource sharing
- `uuid` - Unique ID generation

### Step 2: Initialize Database

The database will be automatically created when you start the server. The schema is defined in `database/schema.sql`.

### Step 3: Start the Backend Server

```bash
npm start
```

You should see:

```
╔════════════════════════════════════════════════════════════╗
║                                                            ║
║   🎮 Gaming Chatbot Backend Server                        ║
║                                                            ║
║   Status: Running                                          ║
║   Port: 3000                                               ║
║   Database: SQLite                                         ║
║   API Docs: http://localhost:3000/api/health              ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

### Step 4: Verify Installation

Open your browser and visit:

```
http://localhost:3000/api/health
```

You should see:

```json
{
  "status": "healthy",
  "timestamp": "2026-02-05T22:00:00.000Z",
  "database": "connected"
}
```

---

## Database Schema

### Tables

#### 1. conversations

Stores conversation sessions.

| Column          | Type      | Description                           |
| --------------- | --------- | ------------------------------------- |
| conversation_id | TEXT      | Unique conversation identifier (UUID) |
| user_id         | TEXT      | User identifier                       |
| session_start   | TIMESTAMP | When conversation started             |
| session_end     | TIMESTAMP | When conversation ended               |
| user_agent      | TEXT      | Browser user agent                    |
| device_type     | TEXT      | desktop, mobile, or tablet            |

#### 2. messages

Stores individual messages.

| Column          | Type      | Description                         |
| --------------- | --------- | ----------------------------------- |
| message_id      | INTEGER   | Auto-incrementing ID                |
| conversation_id | TEXT      | Links to conversations table        |
| message_type    | TEXT      | 'user' or 'bot'                     |
| message_text    | TEXT      | The actual message content          |
| intent          | TEXT      | Detected intent (e.g., 'ask_games') |
| confidence      | REAL      | Confidence score (0-1)              |
| timestamp       | TIMESTAMP | When message was sent               |

#### 3. user_feedback

Stores user feedback on bot responses.

| Column        | Type    | Description             |
| ------------- | ------- | ----------------------- |
| feedback_id   | INTEGER | Auto-incrementing ID    |
| message_id    | INTEGER | Links to messages table |
| rating        | INTEGER | 1-5 star rating         |
| feedback_text | TEXT    | Optional text feedback  |
| helpful       | BOOLEAN | Thumbs up/down          |

#### 4. common_questions

Tracks frequently asked questions.

| Column        | Type      | Description          |
| ------------- | --------- | -------------------- |
| question_id   | INTEGER   | Auto-incrementing ID |
| question_text | TEXT      | The question         |
| count         | INTEGER   | How many times asked |
| last_asked    | TIMESTAMP | When last asked      |

### Views

The schema includes helpful views:

- `conversation_summary` - Summary of each conversation
- `daily_stats` - Daily statistics
- `intent_distribution` - Distribution of intents

---

## Backend API

### Endpoints

#### 1. Start Conversation

```http
POST /api/conversation/start
Content-Type: application/json

{
  "userId": "user_123",
  "userAgent": "Mozilla/5.0...",
  "deviceType": "desktop"
}
```

**Response:**

```json
{
  "success": true,
  "conversationId": "abc-123-def-456",
  "message": "Conversation started successfully"
}
```

#### 2. End Conversation

```http
POST /api/conversation/end
Content-Type: application/json

{
  "conversationId": "abc-123-def-456"
}
```

#### 3. Log Message

```http
POST /api/message/log
Content-Type: application/json

{
  "conversationId": "abc-123-def-456",
  "messageType": "user",
  "messageText": "Sample user question",
  "intent": "sample_intent",
  "confidence": 0.95
}
```

**Response:**

```json
{
  "success": true,
  "messageId": 42,
  "message": "Message logged successfully"
}
```

#### 4. Submit Feedback

```http
POST /api/feedback
Content-Type: application/json

{
  "messageId": 42,
  "rating": 5,
  "feedbackText": "Very helpful!",
  "helpful": true
}
```

#### 5. Get Conversations

```http
GET /api/conversations?page=1&limit=20
```

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "conversation_id": "abc-123",
      "user_id": "user_123",
      "session_start": "2026-02-05T10:00:00",
      "message_count": 6,
      "avg_confidence": 0.92
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

#### 6. Get Conversation Details

```http
GET /api/conversation/abc-123-def-456
```

#### 7. Get Analytics

```http
GET /api/analytics/daily?days=7
GET /api/analytics/intents
GET /api/analytics/common-questions?limit=10
```

---

## Frontend Integration

The chatbot logger is automatically integrated with your website.

### How It Works

1. **Automatic Initialization**: When the chat widget opens, a new conversation is created
2. **Message Logging**: All user messages and bot responses are logged automatically
3. **Conversation End**: When the chat closes, the conversation is marked as ended

### Manual Usage (Optional)

If you need manual control:

```javascript
// Create logger instance
const logger = new ChatbotLogger("http://localhost:3000/api")

// Initialize conversation
await logger.initialize()

// Log user message
const messageId = await logger.logUserMessage("Sample user question")

// Log bot response
await logger.logBotMessage("Sample bot response")

// Submit feedback
await logger.submitFeedback(messageId, 5, "Very helpful!", true)

// End conversation
await logger.endConversation()
```

### Configuration

Edit `js/chatbot-logger.js` to change the API URL:

```javascript
const logger = new ChatbotLogger("http://your-server.com/api")
```

---

## Testing

### Test the Backend API

#### 1. Health Check

```bash
curl http://localhost:3000/api/health
```

#### 2. Start a Conversation

```bash
curl -X POST http://localhost:3000/api/conversation/start \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test_user",
    "userAgent": "Test Agent",
    "deviceType": "desktop"
  }'
```

#### 3. Log a Message

```bash
curl -X POST http://localhost:3000/api/message/log \
  -H "Content-Type: application/json" \
  -d '{
    "conversationId": "YOUR_CONVERSATION_ID",
    "messageType": "user",
    "messageText": "Sample user question",
    "intent": "sample_intent",
    "confidence": 0.95
  }'
```

#### 4. Get Conversations

```bash
curl http://localhost:3000/api/conversations
```

### Test the Frontend Integration

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Open `index.html` in your browser

3. Open the chatbot and send messages

4. Check the browser console for logging messages:

   ```
   Chatbot logger initialized: abc-123-def-456
   User message logged: 42
   Bot message logged: 43
   ```

5. Verify in the database:
   ```bash
   sqlite3 database/chatbot.db "SELECT * FROM messages ORDER BY timestamp DESC LIMIT 5;"
   ```

---

## Analytics & Reporting

### View Conversation History

```bash
sqlite3 database/chatbot.db
```

```sql
-- Get recent conversations
SELECT * FROM conversation_summary
ORDER BY session_start DESC
LIMIT 10;

-- Get daily statistics
SELECT * FROM daily_stats
ORDER BY date DESC
LIMIT 7;

-- Get intent distribution
SELECT * FROM intent_distribution;

-- Get most common questions
SELECT * FROM common_questions
ORDER BY count DESC
LIMIT 10;
```

### Export Data

Export to CSV:

```bash
sqlite3 -header -csv database/chatbot.db "SELECT * FROM messages;" > messages.csv
```

### Create Custom Reports

```sql
-- Average conversation length by device type
SELECT
    device_type,
    AVG(message_count) as avg_messages,
    COUNT(*) as total_conversations
FROM conversation_summary
JOIN conversations USING (conversation_id)
GROUP BY device_type;

-- Most active hours
SELECT
    strftime('%H', timestamp) as hour,
    COUNT(*) as message_count
FROM messages
GROUP BY hour
ORDER BY message_count DESC;

-- User satisfaction (based on feedback)
SELECT
    AVG(rating) as avg_rating,
    COUNT(CASE WHEN helpful = 1 THEN 1 END) * 100.0 / COUNT(*) as helpful_percentage
FROM user_feedback;
```

---

## Troubleshooting

### Issue: Backend Server Won't Start

**Error**: `Cannot find module 'express'`

**Solution**:

```bash
cd backend
npm install
```

### Issue: Database File Not Found

**Error**: `Error opening database: SQLITE_CANTOPEN`

**Solution**: The database file will be created automatically. Ensure the `database/` directory exists:

```bash
mkdir -p database
```

### Issue: CORS Errors in Browser

**Error**: `Access to fetch at 'http://localhost:3000' has been blocked by CORS policy`

**Solution**: The backend already has CORS enabled. Ensure:

1. Backend server is running
2. You're accessing the website through a web server (not file://)
3. API URL in `chatbot-logger.js` is correct

### Issue: Messages Not Being Logged

**Symptoms**: No console logs, no database entries

**Solutions**:

1. Check browser console for errors
2. Verify backend server is running
3. Check API URL in `chatbot-logger.js`
4. Ensure watsonx Assistant is properly configured
5. Test API endpoints manually with curl

### Issue: Database Locked

**Error**: `SQLITE_BUSY: database is locked`

**Solution**: SQLite doesn't handle concurrent writes well. For production:

1. Use PostgreSQL or MySQL instead
2. Implement a queue system
3. Use connection pooling

---

## Production Deployment

### Using PostgreSQL (Recommended for Production)

1. Install PostgreSQL adapter:

   ```bash
   npm install pg
   ```

2. Update `server.js` to use PostgreSQL:

   ```javascript
   const { Pool } = require("pg")
   const pool = new Pool({
     connectionString: process.env.DATABASE_URL,
   })
   ```

3. Convert schema to PostgreSQL syntax

### Environment Variables

Create `.env` file:

```
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost/chatbot
NODE_ENV=production
```

### Security Considerations

1. **API Authentication**: Add API keys or JWT tokens
2. **Rate Limiting**: Prevent abuse
3. **Input Validation**: Sanitize all inputs
4. **HTTPS**: Use SSL/TLS in production
5. **Database Backups**: Regular automated backups

### Deployment Options

- **Heroku**: Easy deployment with PostgreSQL
- **AWS**: EC2 + RDS
- **IBM Cloud**: Cloud Foundry + Databases
- **DigitalOcean**: Droplets + Managed Databases

---

## Maintenance

### Regular Tasks

1. **Backup Database**:

   ```bash
   sqlite3 database/chatbot.db ".backup database/backup_$(date +%Y%m%d).db"
   ```

2. **Clean Old Data**:

   ```sql
   DELETE FROM conversations
   WHERE session_start < date('now', '-90 days');
   ```

3. **Optimize Database**:

   ```sql
   VACUUM;
   ANALYZE;
   ```

4. **Monitor Disk Space**:
   ```bash
   du -h database/chatbot.db
   ```

---

## Resources

### Documentation

- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [watsonx Assistant API](https://cloud.ibm.com/apidocs/assistant/assistant-v2)

### Tools

- [DB Browser for SQLite](https://sqlitebrowser.org/) - GUI for SQLite
- [Postman](https://www.postman.com/) - API testing
- [SQLite Studio](https://sqlitestudio.pl/) - Database management

---

## Support

For issues with the database system:

1. Check the troubleshooting section above
2. Review server logs in the console
3. Test API endpoints with curl
4. Check database file permissions

---

**Last Updated**: February 2026
**Version**: 1.0
