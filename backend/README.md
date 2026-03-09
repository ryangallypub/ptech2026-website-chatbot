# Gaming Chatbot Backend

Node.js backend server for logging chatbot conversations to a SQLite database.

## Quick Start

```bash
# Install dependencies
npm install

# Start server
npm start

# Development mode (auto-restart on changes)
npm run dev
```

Server will start on `http://localhost:3000`

## API Endpoints

### Health Check

```
GET /api/health
```

### Conversations

```
POST /api/conversation/start    - Start new conversation
POST /api/conversation/end      - End conversation
GET  /api/conversations         - List all conversations
GET  /api/conversation/:id      - Get specific conversation
```

### Messages

```
POST /api/message/log           - Log a message (user or bot)
```

### Feedback

```
POST /api/feedback              - Submit user feedback
```

### Analytics

```
GET /api/analytics/daily        - Daily statistics
GET /api/analytics/intents      - Intent distribution
GET /api/analytics/common-questions - Most asked questions
```

## Database

- **Type**: SQLite
- **Location**: `../database/chatbot.db`
- **Schema**: `../database/schema.sql`

The database is automatically created on first run.

## Environment Variables

Create a `.env` file (optional):

```
PORT=3000
NODE_ENV=development
```

## Dependencies

- `express` - Web framework
- `sqlite3` - Database driver
- `cors` - CORS middleware
- `uuid` - UUID generation

## Documentation

See [DATABASE_SETUP.md](../docs/DATABASE_SETUP.md) for complete documentation.

## License

MIT
