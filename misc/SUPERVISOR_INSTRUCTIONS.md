# Supervisor Instructions: PTECH Tech Plus Project (Website with a AI-Powered Chatbot)

## Pre-Project Preparation (Complete Before Day 1)

### Technical Setup

1. **Create IBM Cloud Account**
   - Sign up at https://cloud.ibm.com/
   - Set up Watson Assistant service
   - Familiarize yourself with the interface

2. **Prepare Development Environment**
   - Install Node.js, VS Code, Git on your machine
   - Clone the project repository
   - Test that the chatbot runs locally
   - Prepare installation files/links for students

3. **Prepare Materials**
   - Print/share project overview
   - Prepare example chatbots to show
   - Create GitHub organization for student repositories
   - Prepare domain examples (Gaming, Health, Career)

4. **Test Everything**
   - Run through the entire setup process
   - Test Watson Assistant connection
   - Test database setup
   - Ensure all links and resources work

---

## Week 1: Foundation & Setup

### Day 1 - Monday (1.5 hrs afternoon)

**Goal:** Get everyone set up and familiar with the project

#### Activity 1 (30 min): Project Introduction - ALL GROUPS TOGETHER

Facilitator(s): Ryan

**What to do:**

1. Show 2-3 examples of real chatbots (customer service, virtual assistants)
2. Explain: "You'll build your own AI chatbot in 3 weeks"
3. Show the tech stack diagram: HTML/CSS → Node.js → Watson AI → Database
4. Introduce the 3 groups: Team Alpha, Team Beta, Team Gamma
5. Explain: "Each group creates their own unique chatbot"

**Key Points:**

- Keep it high-level, don't dive into technical details yet
- Build excitement about what they'll create
- Emphasize creative freedom

#### Activity 2 (45 min): Environment Setup - EACH GROUP

Faciliator(s): Ryan / James / Omkar / Marcus

**What to do:**

1. Guide students through installations on their own laptops:
   - VS Code: https://code.visualstudio.com/
   - Git: https://git-scm.com/
   - Node.js: https://nodejs.org/
2. Help students create GitHub accounts
3. Share the project repository link
4. Guide them to clone the repository
5. Have them open the project in VS Code

**Circulate between groups:**

- Help with installation issues
- Verify each student has everything working
- Answer questions

**Troubleshooting:**

- Have offline installers ready
- Know common installation issues for each OS
- Pair students who finish early with those who need help

#### Activity 3 (15 min): Codebase Tour - ALL GROUPS TOGETHER)

Faciliator(s): Ryan

**What to do:**

1. Open the project in VS Code on the screen
2. Show the file structure
3. Point out key files:
   - `index.html` - "This is the webpage"
   - `style.css` - "This controls how it looks"
   - `server.js` - "This is the backend"
   - `schema.sql` - "This defines the database"
4. Explain: "Don't worry about understanding everything now"

**Key Points:**

- Just familiarize them with the structure
- Don't explain code in detail yet
- Answer "what does this file do?" questions

**End of Day 1:**

- Verify all students have environment set up
- Preview Day 2: "Tomorrow we'll customize the chatbot!"

---

### Day 2 - Tuesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Goal:** Students make their first code changes and start Watson

#### Morning Session (2 hrs)

**Activity 1 (30 min): Demo the Chatbot - ALL GROUPS TOGETHER**

Faciliator(s): Ryan

**What to do:**

1. On your machine, run:
   ```bash
   npm install
   node server.js
   ```
2. Open browser to `http://localhost:3000`
3. Show the chatbot working
4. Send some test messages
5. Explain: "This is what you'll customize"

**Key Points:**

- Show it's a real, working application
- Point out what can be customized (colors, text, responses)

**Activity 2 (15 min): Domain Selection - EACH GROUP**

Facilitator(s): Ryan

**What to do:**

1. Give groups 15 minutes to decide:
   - What domain? (Gaming, Health, Career, or custom)
   - What 10 questions should their chatbot answer?
   - What personality/tone?
2. Circulate and help groups brainstorm
3. Have each group share their choice briefly

**Facilitate:**

- Encourage creativity
- Help groups narrow down if they're stuck
- Ensure choices are feasible

**Activity 3 (60 min): Modify HTML/CSS - EACH GROUP**

Facilitator(s): Omkar

**What to do:**

1. Explain: "Now you'll customize the look of your chatbot"
2. Show where to find `index.html` and `style.css`
3. Demonstrate one change (e.g., changing title)
4. Let groups work independently:
   - Student 1: Change chatbot title
   - Student 2: Change colors
   - Student 3: Add welcome message
5. Circulate between groups

**For each group:**

- Help them find the right lines of code
- Show them: Save → Refresh browser → See change
- Encourage experimentation
- Help debug if something breaks

**Stretch Goals (for fast finishers):**

- Add custom logo
- Implement custom color scheme
- Add CSS animations
- Make responsive for mobile
- Add custom fonts
- Create background gradient
- Add hover effects

---

**Detailed Stretch Goal Examples:**

**Stretch Goal 1: Add Custom Logo**

**Location:** `index.html` (lines 19-22)

**Task:** Replace the emoji with a custom image logo

**Step 1: Find a logo image**

- Use a free logo from https://www.flaticon.com/ or create one
- Save it as `logo.png` in a new `images/` folder
- Or use an emoji/icon font

**Step 2: Update the HTML**

**Before:**

```html
<div class="logo">
  <span class="logo-icon">🤖</span>
  <span class="logo-text">P-TECH 2026</span>
</div>
```

**After (Option A - Image):**

```html
<div class="logo">
  <img src="images/logo.png" alt="Logo" class="logo-image" />
  <span class="logo-text">P-TECH 2026</span>
</div>
```

**Step 3: Add CSS styling**

Add to `css/style.css` (after line 84):

```css
.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: rotate(360deg);
}
```

**How to Guide:**

1. Help student create `images` folder in project root
2. Show them how to save/download an image
3. Guide them to update the HTML
4. Add the CSS styling together
5. Test: Refresh browser and see the logo
6. Bonus: Add hover rotation effect

---

**Stretch Goal 2: Add CSS Animations**

**Location:** `css/style.css`

**Task:** Add animated elements to make the page more dynamic

**Example 1: Fade-in Animation for Hero Section**

Add to `css/style.css` (at the end of file, before line 645):

```css
/* Fade-in Animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero-title {
  animation: fadeInUp 1.2s ease-out;
}

.hero-subtitle {
  animation: fadeInUp 1.4s ease-out;
}

.hero-buttons {
  animation: fadeInUp 1.6s ease-out;
}
```

**Example 2: Floating Animation for Stats**

Add to `css/style.css`:

```css
/* Floating Animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.stat-item {
  animation: float 3s ease-in-out infinite;
}

.stat-item:nth-child(2) {
  animation-delay: 0.5s;
}

.stat-item:nth-child(3) {
  animation-delay: 1s;
}
```

**Example 3: Pulse Animation for Buttons**

Add to `css/style.css`:

```css
/* Pulse Animation */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(0, 102, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 102, 255, 0.8);
  }
}

.btn-primary:hover {
  animation: pulse-glow 2s infinite;
}
```

**How to Guide:**

1. Explain: "Animations make the page feel alive"
2. Show: The `@keyframes` syntax defines the animation
3. Show: How to apply animation to elements
4. Let them choose which animation to add
5. Test: Refresh and watch the animations
6. Encourage: Try changing timing, delay, or effects

---

**Stretch Goal 3: Add Hover Effects**

**Location:** `css/style.css`

**Task:** Add interactive hover effects to various elements

**Example 1: Card Lift Effect**

Find the `.game-card` section (around line 337) and enhance it:

**Add to existing `.game-card:hover` (around line 345):**

```css
.game-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 102, 255, 0.4);
  border-color: var(--primary-color);
}
```

**Example 2: Button Glow Effect**

Find the `.btn-primary` section (around line 159) and enhance:

**Add to existing `.btn-primary:hover` (around line 169):**

```css
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 102, 255, 0.5);
  background: linear-gradient(135deg, #0052cc, #0066ff);
}
```

**Example 3: Nav Link Underline Animation**

Find the `.nav-link` section (around line 118) and enhance:

**Update the `.nav-link::after` (around line 131):**

```css
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #0066ff, #00d4ff);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

**Example 4: Image Zoom Effect**

Add new hover effect for game images (add after line 356):

```css
.game-image {
  transition: transform 0.3s ease;
  overflow: hidden;
}

.game-card:hover .game-image {
  transform: scale(1.1);
}
```

**Example 5: Text Color Transition**

Add smooth color transitions to links (add after line 536):

```css
.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.footer-links a:hover {
  color: var(--primary-color);
  padding-left: 10px;
}

.footer-links a::before {
  content: "→ ";
  position: absolute;
  left: -15px;
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-links a:hover::before {
  opacity: 1;
  left: 0;
}
```

**How to Guide:**

1. Explain: "Hover effects give users feedback"
2. Show: The `transition` property makes changes smooth
3. Show: The `:hover` pseudo-class triggers on mouse over
4. Let students pick 2-3 elements to add hover effects to
5. Test: Hover over elements and see the effects
6. Encourage: Experiment with different transforms and colors

**Tips for All Stretch Goals:**

- Start simple, then add complexity
- Always test after each change
- Use browser DevTools to experiment live
- Save working code before trying new things
- Have fun and be creative!

**Activity 4 (15 min): Git Basics - ALL GROUPS TOGETHER**

Faciliator(s): Omkar / James

**What to do:**

1. Explain: "Git tracks changes to your code"
2. Demonstrate on screen:
   ```bash
   git status
   git add .
   git commit -m "Changed chatbot title"
   git push
   ```
3. Explain what each command does

**Activity 5 (30 min): Practice Git - EACH GROUP**

**What to do:**

1. Have each student commit their change
2. Guide them through the commands
3. Help with any errors
4. Verify commits appear on GitHub

**Troubleshooting:**

- Help with Git authentication
- Explain merge conflicts if they occur
- Show how to view commit history

#### Afternoon Session (1.5 hrs)

**Activity 1 (30 min): Watson Overview - ALL GROUPS TOGETHER**

Facilitator(s): Ryan

**What to do:**

1. Open Watson Assistant on screen
2. Show the interface
3. Demonstrate creating an intent:
   - Name: "greeting"
   - Examples: "hello", "hi", "hey there"
4. Show creating a dialog response
5. Test in the preview panel

**Key Points:**

- Explain: "This is the AI that understands questions"
- Keep it simple - they'll do more later
- Show it's user-friendly, not scary

**Activity 2 (60 min): Start Watson Workspace - EACH GROUP**

Facilitator(s): Ryan / James / Omkar / Marcus

**What to do:**

1. Help each group create IBM Cloud account
2. Guide them to create Watson Assistant instance
3. Have them create 3-4 intents based on their domain
4. Each student adds example phrases
5. Create simple dialog responses

**For each group:**

- Help with account creation
- Guide through Watson interface
- Suggest relevant intents for their domain
- Help test in preview panel

**Examples by domain:**

- Gaming: game_recommendation, game_info, genre_question
- Health: workout_suggestion, nutrition_info, fitness_goal
- Career: job_info, skill_requirement, salary_question

**End of Day 2:**

- Each group should have customized UI
- Each group should have Watson workspace started
- Preview Day 3: "Tomorrow we connect Watson to your chatbot!"

---

### Day 3 - Wednesday (1.5 hrs afternoon)

**Goal:** Connect Watson to the chatbot

#### Afternoon Session (1.5 hrs)

**Activity 1 (15 min): Watson Configuration - ALL GROUPS TOGETHER**

Facilitator: Ryan

**What to do:**

1. Show where Watson credentials go in the code
2. Explain environment variables
3. Demonstrate copying API key and URL

**Activity 2 (60 min): Connect Watson - EACH GROUP**

Facilitator: Ryan

**What to do:**

1. Help each group find their Watson credentials
2. Guide them to create `.env` file or config file
3. Help them paste credentials correctly
4. Have them restart the server
5. Test: Send message → See Watson response

**For each group:**

- Help locate credentials in IBM Cloud
- Verify credentials are correct
- Help debug connection issues
- Test different message types

**Troubleshooting:**

- Check credentials are correct
- Verify Watson instance is active
- Check for typos in config file
- Ensure server restarted after config change

**Activity 3 (15 min): Share Progress - ALL GROUPS TOGETHER**

Facilitator: Ryan / Marcus

**What to do:**

1. Have each group briefly demo their chatbot
2. Show it responding to messages
3. Celebrate the connection working!

**End of Day 3:**

- All groups should have Watson connected
- Chatbots should respond to basic questions

---

### Day 4 - Thursday (2 hrs morning)

**Goal:** Understand backend and review Week 1

#### Morning Session (2 hrs)

**Activity 1 (15 min): Backend Overview - ALL GROUPS TOGETHER**

Facilitator: James

**What to do:**

1. Open `server.js` on screen
2. Explain the flow:
   - Browser sends message
   - Server receives it
   - Server sends to Watson
   - Watson responds
   - Server sends back to browser
3. Draw diagram on whiteboard

**Detailed Walkthrough:**

**Step 1: Show the Server Startup (Lines 373-382)**

```javascript
app.listen(PORT, () => {
  console.log("Gaming Chatbot Backend Server")
  console.log(`Status: Running`)
  console.log(`Port: ${PORT}`)
})
```

- Explain: "This starts the server on port 3000"
- Show: "When you run `node server.js`, this is what prints to the terminal"

**Step 2: Show a Simple Endpoint (Lines 336-342)**

```javascript
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
  })
})
```

- Explain: "This is an API endpoint - like a door the frontend can knock on"
- Demo: Open browser to `http://localhost:3000/api/health`
- Show: The JSON response appears in the browser

**Step 3: Show the Message Logging Flow (Lines 118-157)**

```javascript
app.post("/api/message/log", (req, res) => {
  const { conversationId, messageType, messageText } = req.body

  console.log("📨 NEW MESSAGE RECEIVED")
  console.log("Type:", messageType)
  console.log("Text:", messageText)

  // Save to database...
})
```

- Explain: "When you send a message in the chatbot, it comes here"
- Point out: "The `console.log()` statements show what's happening"
- Show: The terminal output when a message is sent

**Step 4: Draw the Flow Diagram on Whiteboard**

```
User Types Message
       ↓
Frontend (index.html)
       ↓
POST /api/message/log
       ↓
Backend (server.js)
       ↓
Database (SQLite)
       ↓
Response sent back
       ↓
Frontend displays it
```

**Key Points to Emphasize:**

- "The backend is like a middleman between the frontend and database"
- "Every `app.post()` or `app.get()` is a different endpoint"
- "The `req` (request) contains data from the frontend"
- "The `res` (response) sends data back to the frontend"

**Activity 2 (60 min): Backend Modifications - EACH GROUP**

**What to do:**

1. Show how to add `console.log()` statements
2. Have each student add logging to track messages
3. Guide them to modify a simple response
4. Have them test changes

**Detailed Examples for Each Student:**

**Example 1: Add Custom Logging (Student 1)**

Location: Lines 118-127 in `/api/message/log`

**Task:** Add personalized logging messages

**Before:**

```javascript
app.post('/api/message/log', (req, res) => {
    const { conversationId, messageType, messageText } = req.body;

    console.log('📨 NEW MESSAGE RECEIVED');
    console.log('Type:', messageType);
    console.log('Text:', messageText);
```

**After (Student adds):**

```javascript
app.post('/api/message/log', (req, res) => {
    const { conversationId, messageType, messageText } = req.body;

    console.log('📨 NEW MESSAGE RECEIVED');
    console.log('Type:', messageType);
    console.log('Text:', messageText);
    console.log('🎮 [TEAM ALPHA] Message logged at:', new Date().toLocaleTimeString());
    console.log('📊 Message length:', messageText.length, 'characters');
```

**How to Guide:**

1. Show them lines 118-127
2. Say: "Add your own console.log after line 126"
3. Suggest: "Add your team name and a timestamp"
4. Test: Have them send a message and watch the terminal

**Example 2: Add Message Counter (Student 2)**

Location: Top of file (after line 16)

**Task:** Count how many messages have been received

**Add at top:**

```javascript
const PORT = process.env.PORT || 3000

// ADD THIS:
let messageCount = 0
```

**Then modify in `/api/message/log` (after line 126):**

```javascript
console.log("Conversation ID:", conversationId)
console.log("---")

// ADD THIS:
messageCount++
console.log("💬 Total messages received this session:", messageCount)
```

**How to Guide:**

1. Say: "Let's count how many messages your chatbot receives"
2. Show: "First, create a variable at the top to store the count"
3. Show: "Then, increment it each time a message arrives"
4. Test: Send multiple messages and watch the counter increase

**Example 3: Add Custom Health Check Message (Student 3)**

Location: Lines 336-342 in `/api/health`

**Task:** Customize the health check endpoint

**Before:**

```javascript
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    database: "connected",
  })
})
```

**After:**

```javascript
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    database: "connected",
    teamName: "Team Alpha",
    chatbotDomain: "Gaming",
    customMessage: "Our gaming chatbot is ready to help! 🎮",
  })
})
```

**How to Guide:**

1. Say: "Let's customize the health check to show your team info"
2. Show: Lines 336-342
3. Say: "Add your team name and domain after line 340"
4. Test: Open browser to `http://localhost:3000/api/health`
5. Show: The new fields appear in the JSON response

**Example 4: Add Emoji Response Enhancer (Advanced)**

Location: Lines 118-157 in `/api/message/log`

**Task:** Add emojis based on message type

**Add after line 126:**

```javascript
console.log("---")

// ADD THIS:
let emoji = "💬"
if (messageType === "user") {
  emoji = "👤"
} else if (messageType === "bot") {
  emoji = "🤖"
}
console.log(`${emoji} Message from: ${messageType}`)
```

**How to Guide:**

1. Say: "Let's make the logs more visual with emojis"
2. Explain: "We'll use different emojis for user vs bot messages"
3. Show: How to use if/else statements
4. Test: Send messages and see different emojis in terminal

**Example 5: Add Request Timestamp Logger (Advanced)**

Location: Create new middleware after line 21

**Task:** Log every request that comes to the server

**Add after line 21:**

```javascript
app.use(express.static(path.join(__dirname, "../")))

// ADD THIS MIDDLEWARE:
app.use((req, res, next) => {
  const timestamp = new Date().toLocaleTimeString()
  console.log(`[${timestamp}] ${req.method} ${req.path}`)
  next()
})
```

**How to Guide:**

1. Explain: "Middleware runs before every request"
2. Say: "This will log every API call with a timestamp"
3. Show: Where to add it (after line 21)
4. Test: Refresh the page and watch all requests appear

**Testing Instructions for All Students:**

**Step 1: Save the file**

- Press Ctrl+S (Windows) or Cmd+S (Mac)

**Step 2: Restart the server**

- In terminal, press Ctrl+C to stop
- Run `node server.js` again

**Step 3: Test your changes**

- Open the chatbot in browser
- Send a test message
- Watch the terminal for your new logs

**Step 4: Verify it works**

- Check that your custom logs appear
- Make sure the chatbot still works normally
- If errors appear, help debug

**For each group:**

- Help them find the right functions
- Show them the terminal output
- Help them understand the data flow
- Encourage experimentation

**Common Issues & Solutions:**

**Issue 1: "My logs don't appear"**

- Solution: Did you restart the server? Changes only apply after restart

**Issue 2: "I get a syntax error"**

- Solution: Check for missing semicolons, brackets, or quotes

**Issue 3: "The server won't start"**

- Solution: Look at the error message - it usually tells you the line number

**Issue 4: "I don't see the terminal output"**

- Solution: Make sure you're looking at the terminal where you ran `node server.js`

**Stretch Goals (for fast finishers):**

1. **Add a custom endpoint** that returns your team's favorite games
2. **Create a message statistics function** that calculates average message length
3. **Add color to console logs** using npm package `chalk`
4. **Create a custom error handler** that logs errors in a special format
5. **Add request timing** to measure how long each request takes

**Activity 3 (45 min): Week 1 Demo - ALL GROUPS TOGETHER**

**What to do:**

1. Have each group present (5 min each):
   - Show their domain choice
   - Demo their customized UI
   - Show their Watson intents
   - Demo their working chatbot
2. Facilitate discussion:
   - What worked well?
   - What was challenging?
   - What did you learn?
3. Preview Week 2: "Next week we add a database!"

**End of Week 1:**

- All groups have working chatbots
- Students understand basic architecture
- Ready for Week 2 features

---

## Week 2: Building Features

### Day 5 - Wednesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Goal:** Add database integration and enhance features

#### Morning Session (2 hrs)

**Activity 1 (30 min): Database Concepts - ALL GROUPS TOGETHER**

Facilitator: James / Ryan

**What to do:**

1. Explain: "Databases store information your chatbot can use"
2. Show `schema.sql` file
3. Explain tables and columns
4. Demonstrate a simple query
5. Show examples by domain:
   - Gaming: Store game titles, genres, ratings
   - Health: Store workouts, exercises, tips
   - Career: Store job roles, skills, salaries

**Activity 2 (90 min): Database Setup - EACH GROUP**

**What to do:**

1. Help groups set up SQLite database
2. Guide them to run `schema.sql`
3. Have them add sample data for their domain
4. Show how to modify backend to query database
5. Test: Ask chatbot about stored data

**For each group:**

- Help with database setup
- Suggest relevant data for their domain
- Show how to write simple SQL queries
- Help integrate queries into backend
- Test database responses

**Example data:**

- Gaming: 10-15 games with genres and ratings
- Health: 10-15 workouts with descriptions
- Career: 10-15 job roles with skills and salaries

#### Afternoon Session (1.5 hrs)

**Activity 1 (45 min): Expand Watson - EACH GROUP**

Facilitator: Ryan / James / Omkar / Marcus

**What to do:**

1. Have groups add 2-3 more intents
2. Guide them to add more example phrases
3. Help create detailed dialog responses
4. Test each new intent

**For each group:**

- Suggest relevant intents for their domain
- Help with response wording
- Ensure responses are user-friendly

**Activity 2 (45 min): UI Improvements - EACH GROUP**

Facilitator(s): Omkar / Marcus

**What to do:**

1. Have groups enhance their UI:
   - Add domain-specific images/icons
   - Improve chat bubble styling
   - Add typing indicator
   - Add timestamps
2. Circulate and help

**For each group:**

- Help find/add images
- Assist with CSS styling
- Show how to add UI features
- Test that changes work

**End of Day 5:**

- All groups have database integrated
- 5-6 Watson intents working
- Improved UI

---

### Day 6 - Thursday (1.5 hrs afternoon)

**Goal:** Test thoroughly and fix bugs

#### Afternoon Session (1.5 hrs)

**Activity 1 (45 min): Testing - EACH GROUP**

Facilitator(s): Omkar / James

**What to do:**

1. Have groups create test scenarios
2. Guide them to test:
   - All Watson intents
   - Database queries
   - UI on different browsers
   - Edge cases (empty input, long messages)
3. Have them log bugs in a document or GitHub Issues

**For each group:**

- Help create test scenarios
- Show how to test systematically
- Help identify bugs
- Prioritize bugs (must-fix vs nice-to-have)

**Detailed Testing Examples:**

**Example 1: Create a Test Checklist**

Have students create a simple checklist:

```markdown
## Our Chatbot Tests

### Watson Tests

- [ ] Greeting works ("hello", "hi")
- [ ] Main intent works (test 3 variations)
- [ ] Handles unknown questions gracefully

### UI Tests

- [ ] Chatbot opens and closes
- [ ] Messages display correctly
- [ ] Works on mobile (use DevTools)
- [ ] Colors look right

### Edge Cases

- [ ] Empty message → Shows error
- [ ] Very long message → Displays properly
- [ ] Special characters (emojis) → Work correctly
```

**Example 2: Browser DevTools Testing**

Show students how to use browser tools:

1. Press F12 to open DevTools
2. Click Console tab → Look for red errors
3. Click Network tab → Check for failed requests
4. Click Toggle Device Toolbar (Ctrl+Shift+M) → Test mobile view

**Example 3: Database Testing**

Quick database check:

```bash
sqlite3 database/chatbot.db
SELECT * FROM games LIMIT 3;
.exit
```

Verify the data matches what chatbot returns.

**Activity 2 (30 min): Bug Fixing - EACH GROUP**

**What to do:**

1. Help groups prioritize bugs
2. Guide them to fix critical bugs
3. Have them test fixes
4. Verify fixes work

**For each group:**

- Help debug issues
- Show debugging techniques
- Encourage pair debugging
- Celebrate fixes!

**Common Bugs & Quick Fixes:**

**Bug 1: Chatbot Not Responding**

- Check: Browser console (F12) for errors
- Check: Watson credentials are correct
- Fix: Copy credentials from IBM Cloud again
- Test: Send a message and verify response

**Bug 2: CSS Not Applying**

- Check: File path in HTML `<link>` tag
- Check: CSS syntax (missing semicolons/braces)
- Fix: Hard refresh browser (Ctrl+Shift+R)
- Test: Inspect element to see applied styles

**Bug 3: Database Errors**

- Check: Database file exists (`ls database/chatbot.db`)
- Check: Data exists (`SELECT * FROM games;`)
- Fix: Re-run schema.sql if needed
- Test: Query returns expected data

**Bug 4: Server Won't Start**

- Check: Error message for line number
- Check: Port 3000 not already in use
- Fix: Run `npm install` if modules missing
- Test: Server starts without errors

**Bug 5: Git Push Fails**

- Check: Run `git status` to see changes
- Check: Committed changes (`git commit -m "message"`)
- Fix: Authenticate with GitHub
- Test: Changes appear on GitHub

**Debugging Tips:**

1. Read error messages carefully - they tell you what's wrong
2. Change one thing at a time, then test
3. Use `console.log()` to see what's happening
4. Google the exact error message
5. Ask teammates for help

**Activity 3 (15 min): Share Progress - ALL GROUPS TOGETHER**

Facilitator(s): Ryan / Marcus

**What to do:**

1. Have groups share their progress
2. Discuss common challenges
3. Share solutions
4. Preview Week 3: "Final week - polish and present!"

**End of Week 2:**

- All groups have stable, working chatbots
- Major bugs fixed
- Ready for final polish

---

## Week 3: Polish & Presentation

### Day 7 - Monday (3.5 hrs: 2h morning + 1.5h afternoon)

**Goal:** Add personality and special features

#### Morning Session (2 hrs)

**Activity 1 (60 min): Add Personality - EACH GROUP**

**What to do:**

1. Have groups brainstorm personality for their chatbot
2. Guide them to write 10 fun responses
3. Help them add personality to Watson dialog
4. Test responses

**For each group:**

- Help define personality that fits domain
- Suggest fun response ideas
- Help implement in Watson
- Ensure responses display well

**Examples:**

- Gaming: Enthusiastic gamer personality
- Health: Motivational coach personality
- Career: Professional mentor personality

**Activity 2 (60 min): Special Feature - EACH GROUP**

**What to do:**

1. Help each group choose a special feature:
   - Gaming: Game recommendations based on genre
   - Health: Workout suggestions based on goals
   - Career: Job role explorer based on skills
2. Guide implementation:
   - Backend logic
   - Database queries
   - UI elements
3. Test together

**For each group:**

- Help plan the feature
- Guide backend implementation
- Help with database queries
- Assist with UI integration
- Test thoroughly

#### Afternoon Session (1.5 hrs)

**Activity 1 (15 min): Deployment Overview - ALL GROUPS TOGETHER**

**What to do:**

1. Explain deployment options
2. Discuss local vs cloud deployment
3. Decide approach (likely local demo)

**Activity 2 (75 min): Documentation - EACH GROUP**

**What to do:**

1. Guide groups to write README:
   - Setup instructions
   - Feature list
   - Screenshots
   - How to use
2. Help them document their creative choices

**For each group:**

- Provide README template
- Help with screenshots
- Review documentation
- Ensure clarity

**End of Day 7:**

- All groups have personality added
- Special features implemented
- Documentation started

---

### Day 8 - Tuesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Goal:** Final testing and create presentations

#### Morning Session (2 hrs)

**Activity 1 (60 min): Final Testing - EACH GROUP**

**What to do:**

1. Have groups test everything thoroughly
2. Guide comprehensive testing
3. Help fix any critical bugs
4. Verify all features work

**For each group:**

- Create final test checklist
- Help test all features
- Assist with bug fixes
- Ensure stability

**Activity 2 (60 min): Start Presentations - EACH GROUP**

**What to do:**

1. Provide presentation outline:
   - Problem statement
   - Their solution
   - Domain choice and why
   - Technical overview
   - Features demo
   - Challenges & learnings
2. Help groups assign slides to students
3. Guide them to start creating slides

**For each group:**

- Help structure presentation
- Suggest what to include
- Ensure everyone has a part
- Review slide outlines

#### Afternoon Session (1.5 hrs)

**Activity 1 (90 min): Create Presentations - EACH GROUP**

**What to do:**

1. Have each student create their slides
2. Help them add:
   - Screenshots
   - Diagrams
   - Code snippets (simple ones)
3. Record demo video as backup
4. Review slides

**For each group:**

- Help with slide content
- Assist with screenshots
- Review for clarity
- Record demo video
- Give feedback

**End of Day 8:**

- All groups have tested chatbots
- Presentations created
- Demo videos recorded

---

### Day 9 - Wednesday (2 hrs morning)

**Goal:** Final presentations and celebration

#### Morning Session (2 hrs)

**Activity 1 (20 min): Rehearsal - EACH GROUP**

**What to do:**

1. Have each group practice their presentation
2. Time them (aim for 15-20 min)
3. Give feedback
4. Help with any last-minute issues

**For each group:**

- Watch full run-through
- Give constructive feedback
- Help with timing
- Ensure live demo works

**Activity 2 (100 min): Final Presentations - ALL GROUPS TOGETHER**

**What to do:**

1. Welcome stakeholders (leadership, teachers, parents)
2. Introduce the project
3. Have each group present (20 min each):
   - Introduction
   - Domain choice
   - Technical overview
   - Live demo
   - Challenges overcome
   - What they learned
4. Q&A after each (5 min)
5. Final reflection with all students
6. Certificates/recognition
7. Celebration!

## Success Checklist

### By End of Week 1:

- [ ] All students have development environment set up
- [ ] All groups have chosen their domain
- [ ] All groups have customized UI
- [ ] All groups have Watson connected
- [ ] All groups have working chatbot

### By End of Week 2:

- [ ] All groups have database integrated
- [ ] All groups have 5-6 Watson intents
- [ ] All groups have improved UI
- [ ] All groups have tested and fixed bugs

### By End of Week 3:

- [ ] All groups have added personality
- [ ] All groups have special feature
- [ ] All groups have documentation
- [ ] All groups have presentation ready
- [ ] All groups successfully present

### Overall Success:

- [ ] 3 unique chatbots created
- [ ] All 9 students participated actively
- [ ] Students gained hands-on coding experience
- [ ] Students understand full-stack development
- [ ] Students can explain their work
- [ ] Students are proud of their projects
- [ ] Students want to continue learning!

---

## Resources for Supervisors

### Documentation Links

- IBM Watson Assistant: https://cloud.ibm.com/docs/watson-assistant
- Node.js: https://nodejs.org/docs/
- Git: https://git-scm.com/doc
- HTML/CSS/JS: https://developer.mozilla.org/

### Quick Reference Commands

**Git:**

```bash
git status
git add .
git commit -m "message"
git push
```

**Node.js:**

```bash
npm install
node server.js
```

**Database:**

```bash
sqlite3 database.db < schema.sql
```

### Emergency Contacts

- IT Support: [Add contact]
- IBM Cloud Support: [Add contact]
- Project Lead: [Add contact]

---

## Final Notes

Remember: Your role is to **guide and facilitate**, not to do the work for students. Let them struggle a bit, make mistakes, and learn from them. The goal is hands-on experience and building confidence.

**Most importantly:** Make it fun! Celebrate their creativity, encourage experimentation, and help them see that they can build real, working applications.

Good luck! You've got this! 🚀
