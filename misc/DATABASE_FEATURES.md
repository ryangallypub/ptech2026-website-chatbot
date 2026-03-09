# Database Features Overview

## 🎯 What's New

Your gaming chatbot now includes a complete database logging system that tracks all conversations, messages, and user interactions!

## ✨ Key Features

### 1. **Conversation Logging**

- Every chat session is automatically logged
- Tracks user ID, device type, and session duration
- Records when conversations start and end

### 2. **Message Storage**

- All user questions and bot responses are saved
- Includes intent detection and confidence scores
- Timestamps for every message

### 3. **User Feedback**

- Collect ratings (1-5 stars) on bot responses
- Track thumbs up/down feedback
- Store optional text feedback

### 4. **Analytics Dashboard**

- Daily conversation statistics
- Intent distribution analysis
- Most frequently asked questions
- Average confidence scores

## 📊 What Gets Logged

```
User asks a question
  ↓
Database stores:
  - Conversation ID
  - User message text
  - Detected intent (if available)
  - Confidence score
  - Timestamp
  ↓
Bot responds with answer
  ↓
Database stores:
  - Bot response text
  - Linked to conversation
  - Timestamp
```

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Start Backend Server

```bash
npm start
```

Server runs on `http://localhost:3000`

### 3. Open Your Website

The chatbot will automatically connect to the database and start logging!

## 📈 View Your Data

### Using SQLite Command Line

```bash
sqlite3 database/chatbot.db

# View recent conversations
SELECT * FROM conversation_summary LIMIT 10;

# View all messages
SELECT * FROM messages ORDER BY timestamp DESC LIMIT 20;

# View common questions
SELECT * FROM common_questions ORDER BY count DESC;
```

### Using DB Browser (GUI)

1. Download [DB Browser for SQLite](https://sqlitebrowser.org/)
2. Open `database/chatbot.db`
3. Browse tables and run queries visually

## 🔍 Example Queries

### Most Active Users

```sql
SELECT user_id, COUNT(*) as conversation_count
FROM conversations
GROUP BY user_id
ORDER BY conversation_count DESC
LIMIT 10;
```

### Average Conversation Length

```sql
SELECT AVG(message_count) as avg_messages
FROM conversation_summary;
```

### Questions by Hour

```sql
SELECT strftime('%H', timestamp) as hour, COUNT(*) as count
FROM messages
WHERE message_type = 'user'
GROUP BY hour
ORDER BY count DESC;
```

### Bot Accuracy

```sql
SELECT
    intent,
    AVG(confidence) as avg_confidence,
    COUNT(*) as count
FROM messages
WHERE intent IS NOT NULL
GROUP BY intent;
```

## 📱 API Endpoints

Your backend provides REST API endpoints:

- `POST /api/conversation/start` - Start new conversation
- `POST /api/conversation/end` - End conversation
- `POST /api/message/log` - Log a message
- `POST /api/feedback` - Submit feedback
- `GET /api/conversations` - List conversations
- `GET /api/conversation/:id` - Get conversation details
- `GET /api/analytics/daily` - Daily stats
- `GET /api/analytics/intents` - Intent distribution
- `GET /api/analytics/common-questions` - Top questions

## 🎨 Customization

### Change Database Location

Edit `backend/server.js`:

```javascript
const dbPath = path.join(__dirname, "../database/chatbot.db")
```

### Add Custom Fields

Edit `database/schema.sql` to add new columns:

```sql
ALTER TABLE messages ADD COLUMN sentiment TEXT;
```

### Export Data

```bash
# Export to CSV
sqlite3 -header -csv database/chatbot.db "SELECT * FROM messages;" > messages.csv

# Export to JSON
sqlite3 database/chatbot.db "SELECT json_group_array(json_object(...)) FROM messages;"
```

## 🔒 Privacy & Security

- User IDs are auto-generated and stored locally
- No personal information is collected by default
- Database is stored locally on your server
- Add authentication for production use

## 📚 Documentation

For complete documentation, see:

- [DATABASE_SETUP.md](docs/DATABASE_SETUP.md) - Full setup guide
- [backend/README.md](backend/README.md) - Backend API docs
- [database/schema.sql](database/schema.sql) - Database schema

## 🎯 Use Cases

### 1. Improve Your Chatbot

- Identify common questions not covered
- Find low-confidence responses
- Discover user pain points

### 2. Business Intelligence

- Track peak usage times
- Measure user engagement
- Analyze conversation patterns

### 3. Quality Assurance

- Review bot responses
- Monitor accuracy
- Collect user feedback

### 4. Reporting

- Generate daily/weekly reports
- Track KPIs
- Measure improvement over time

## 🚀 Next Steps

1. **Start collecting data** - Just use your chatbot normally
2. **Review conversations** - Check what users are asking
3. **Improve responses** - Add new Q&A pairs based on data
4. **Monitor trends** - Track usage patterns
5. **Optimize** - Use insights to improve user experience

## 💡 Pro Tips

- Run the backend server whenever you want to log conversations
- Check the database weekly to identify trends
- Export data regularly for backup
- Use analytics to improve your chatbot
- Consider upgrading to PostgreSQL for production

---

**Ready to start?** Just run `npm start` in the backend folder and your chatbot will begin logging all conversations automatically! 🎮
