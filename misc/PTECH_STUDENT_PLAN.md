# PTECH Student Project Plan: AI-Powered Chatbot (REVISED)

## 3-Week Hands-On Engineering Experience

### Project Overview

**Duration:** 3 weeks (9 working days with irregular schedule)
**Total Hours:** 23 hours
**Team Size:** 9 students (3 independent groups of 3)
**Focus:** Maximum hands-on coding experience, each group creates their own unique chatbot

**Schedule:**

- **Week 1:** 8.5 hours (Mon 1.5h, Tue 3.5h, Wed 1.5h, Thu 2h)
- **Week 2:** 5.5 hours (Wed 3.5h, Thu 1.5h)
- **Week 3:** 9 hours (Mon 3.5h, Tue 3.5h, Wed 2h)

---

## Team Structure & Roles

**3 Independent Groups** - Each group creates their own chatbot project with their own creative choices:

### Group A (3 students) - "Team Alpha"

- **Student A1:** Team Lead & Full-Stack Developer
- **Student A2:** Backend & Watson AI Specialist
- **Student A3:** Frontend & Documentation

**Their Project:** Choose their own domain, style, questions, and features

### Group B (3 students) - "Team Beta"

- **Student B1:** Team Lead & Full-Stack Developer
- **Student B2:** Backend & Watson AI Specialist
- **Student B3:** Frontend & Documentation

**Their Project:** Choose their own domain, style, questions, and features

### Group C (3 students) - "Team Gamma"

- **Student C1:** Team Lead & Full-Stack Developer
- **Student C2:** Backend & Watson AI Specialist
- **Student C3:** Frontend & Documentation

**Their Project:** Choose their own domain, style, questions, and features

**Role Rotation:** Students rotate roles within their group each week

**Creative Freedom:** Each group chooses:

- Domain (Gaming, Health & Fitness, Career Guidance, or their own idea)
- Website color scheme and style
- Chatbot personality and tone
- Questions their chatbot will answer
- Special features to implement

**Collaboration:** Groups work independently but can share ideas, help each other debug, and learn from each other's approaches

---

## Week 1: Foundation & Setup (Days 1-4) - 8.5 Hours

### Day 1 - Monday (1.5 hrs afternoon)

**Afternoon Session (1.5 hrs): Project Kickoff & Environment Setup**

- **Activity 1 (30 min):** Introduction to the project (ALL GROUPS TOGETHER)
  - Show examples of chatbots in real applications
  - Explain the project goal: Each group creates their own chatbot
  - Explain the tech stack (overview only)
  - Introduce team structure: 3 independent groups
  - Explain that each group will make their own creative choices
- **Activity 2 (45 min):** Hands-on: Set up development environment (EACH GROUP)
  - Each student sets up on their own laptop:
    - Install VS Code, Git, Node.js
    - Create GitHub accounts
    - Clone the project repository
    - Open the project in VS Code
  - Supervisor circulates to help all groups
- **Activity 3 (15 min):** Quick codebase overview (ALL GROUPS TOGETHER)
  - Tour through all files together
  - See `index.html`, `style.css`, `chatbot-logger.js`
  - See `server.js`, `schema.sql`, backend structure
  - Understand how pieces connect

**Deliverable:** Environment set up for all 9 students, 3 groups ready to work

**Optional Stretch Goals (for students who finish early):**

- Explore additional files in the project
- Start brainstorming domain ideas
- Sketch initial design ideas

---

### Day 2 - Tuesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Morning Session (2 hrs): Understanding the UI & Git**

- **Activity 1 (30 min):** Demo the existing chatbot (ALL GROUPS TOGETHER)
  - Supervisor runs `npm install` and `node server.js`
  - Show the chatbot in browser
  - Test it together, observe how it works
  - Explain what each group will customize
- **Activity 2 (15 min):** Domain selection (EACH GROUP INDEPENDENTLY)
  - **Each group decides:**
    - What domain? (Gaming, Health, Career, or custom)
    - What questions should their chatbot answer? (list 10)
    - What personality/tone for their chatbot?
  - Document decisions in their own `PROJECT_DECISIONS.md`
- **Activity 3 (60 min):** Hands-on: Modify HTML/CSS (EACH GROUP INDEPENDENTLY)
  - **Each group on their own laptops:**
    - Student 1: Change the chatbot title in `index.html`
    - Student 2: Modify colors in `style.css` to match their domain
    - Student 3: Add a welcome message
    - All: Take turns making changes
    - Each change: Save → Refresh browser → See result
  - Groups work at their own pace
  - Supervisor circulates to help
- **Activity 4 (15 min):** Git basics (ALL GROUPS TOGETHER)
  - Explain: "Git tracks changes to code"
  - Demo: `git status`, `git add`, `git commit`, `git push`
- **Activity 5 (30 min):** Practice Git (EACH GROUP INDEPENDENTLY)
  - Each student commits their UI change
  - Practice: `git status`, `git add`, `git commit`, `git push`
  - Each group creates their own repository

**Optional Stretch Goals (for Activity 3 - students who finish HTML/CSS early):**

- Add a custom logo or header image
- Implement a custom color scheme with multiple colors
- Add CSS animations (fade-in, slide-in effects)
- Make the chatbot responsive for mobile devices
- Add custom fonts from Google Fonts
- Create a custom background pattern or gradient
- Add hover effects to buttons and interactive elements

**Afternoon Session (1.5 hrs): Watson Assistant Introduction**

- **Activity 1 (30 min):** IBM Watson Assistant overview (ALL GROUPS TOGETHER)
  - Supervisor demonstrates Watson Assistant interface
  - Show how to create intents, entities, dialog
  - Explain: "This is the AI that understands questions"
- **Activity 2 (60 min):** Hands-on: Start Watson workspace (EACH GROUP INDEPENDENTLY)
  - **Each group creates their own Watson Assistant:**
    - Create IBM Cloud account and Watson Assistant instance
    - Add 3-4 intents based on their chosen questions
    - Add sample user phrases for each intent
    - Create simple dialog responses
  - Each group works on their own domain
  - Test in Watson Assistant preview
  - Supervisor helps each group

**Deliverable:** Each group has modified UI, Git commits, Watson workspace started, domain chosen

**Optional Stretch Goals:**

- Add more example phrases to Watson intents
- Experiment with different CSS styles
- Create a conversation flowchart

---

### Day 3 - Wednesday (1.5 hrs afternoon)

**Afternoon Session (1.5 hrs): Connect Watson to Project**

- **Activity 1 (15 min):** Watson configuration overview (ALL GROUPS TOGETHER)
  - Supervisor shows where API keys go
  - Explain environment variables
- **Activity 2 (60 min):** Configuration hands-on (EACH GROUP INDEPENDENTLY)
  - **Each group on their own laptops:**
    - Copy their Watson credentials to config file
    - Test Watson connection
    - Send messages from UI → Watson → Response
    - Test different message types
    - Troubleshoot if issues arise
  - Supervisor circulates to help each group
- **Activity 3 (15 min):** Share progress (ALL GROUPS TOGETHER)
  - Each group briefly shows their chatbot working
  - Share any challenges encountered
  - Learn from each other's solutions

**Deliverable:** Each group has Watson connected to their project, basic conversation working

**Optional Stretch Goals:**

- Add more intents to Watson
- Test edge cases
- Add console.log statements to track data flow

---

### Day 4 - Thursday (2 hrs morning)

**Morning Session (2 hrs): Backend Basics & Week 1 Review**

- **Activity 1 (15 min):** Understanding the backend (ALL GROUPS TOGETHER)
  - Open `server.js` in VS Code
  - Supervisor explains data flow
  - Draw diagram: frontend ↔ backend ↔ Watson
- **Activity 2 (60 min):** Hands-on backend modifications (EACH GROUP INDEPENDENTLY)
  - **Each group on their own laptops:**
    - Each student adds console.log statements to track messages
    - Take turns modifying simple responses
    - Test changes from browser
    - Understand how backend receives and sends messages
  - Groups work at their own pace
  - Supervisor helps each group
- **Activity 3 (45 min):** Week 1 Demo & Planning (ALL GROUPS TOGETHER)
  - Each group presents (5 min each):
    - Show their domain choice
    - Demo their customized UI
    - Show their Watson intents
    - Demo their working chatbot
  - Discuss: What worked? What was challenging?
  - Plan for Week 2

**Deliverable:** Each group has a working chatbot with basic Watson integration

**Optional Stretch Goals:**

- Add error handling to backend
- Improve response formatting
- Add more console logging

---

## Week 2: Building Features (Days 5-6) - 5.5 Hours

### Day 5 - Wednesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Morning Session (2 hrs): Database Integration**

- **Activity 1 (30 min):** Database concepts (ALL GROUPS TOGETHER)
  - Explain: "Store domain-specific info, user preferences, chat history"
  - Show `schema.sql` - "This defines what data we store"
  - Demonstrate: Query database, see results
- **Activity 2 (90 min):** Hands-on: Add database features (EACH GROUP INDEPENDENTLY)
  - **Each group on their own laptops:**
    - Set up local SQLite database
    - Run schema.sql to create tables
    - Add sample data relevant to their domain:
      - Gaming: Game titles, genres, ratings
      - Health: Workouts, exercises, tips
      - Career: Job roles, skills, salaries
    - Modify backend to query database
    - Test: Ask chatbot about stored data
  - Each group customizes for their domain
  - Supervisor circulates to help

**Afternoon Session (1.5 hrs): Enhanced Watson & UI**

- **Activity 1 (45 min):** Expand Watson capabilities (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Add 2-3 more intents (total 5-6 intents)
    - Add example phrases relevant to their domain
    - Create detailed dialog responses
    - Test each intent
  - Groups work independently
- **Activity 2 (45 min):** UI improvements (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Add domain-specific images/icons
    - Improve chat bubble styling
    - Add typing indicator
    - Add timestamps or other features
  - Each group makes their UI unique
  - Test all changes

**Deliverable:** Each group has database integrated, 5-6 Watson intents, improved UI

**Optional Stretch Goals:**

- Add more database tables
- Create more complex database queries
- Add animations to UI
- Implement additional Watson intents

---

### Day 6 - Thursday (1.5 hrs afternoon)

**Afternoon Session (1.5 hrs): Testing & Bug Fixes**

- **Activity 1 (45 min):** Comprehensive testing (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Create test scenarios for their chatbot
    - Test all Watson intents
    - Test database queries
    - Test UI/UX on different browsers
    - Test frontend-backend communication
    - Log bugs in GitHub Issues
  - Groups work independently
- **Activity 2 (30 min):** Bug fixing session (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Prioritize bugs: must-fix vs nice-to-have
    - Divide bugs among team members
    - Fix bugs
    - Cross-test all fixes
  - Supervisor helps each group
- **Activity 3 (15 min):** Share progress (ALL GROUPS TOGETHER)
  - Each group briefly shares their progress
  - Discuss common challenges
  - Share solutions

**Deliverable:** Each group has tested chatbot, bugs logged and fixed

**Optional Stretch Goals:**

- Fix additional bugs
- Add error handling
- Improve user feedback messages
- Test more edge cases

---

## Week 3: Polish & Presentation (Days 7-9) - 9 Hours

### Day 7 - Monday (3.5 hrs: 2h morning + 1.5h afternoon)

**Morning Session (2 hrs): Add Personality & Special Feature**

- **Activity 1 (60 min):** Add personality to chatbot (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Brainstorm personality that fits their domain
    - Write 10 fun responses
    - Add personality responses to Watson dialog
    - Test responses
    - Ensure responses display well in UI
  - Each group creates unique personality
- **Activity 2 (60 min):** Implement special feature (EACH GROUP INDEPENDENTLY)
  - **Each group chooses 1 feature for their domain:**
    - Gaming: Game recommendations based on genre
    - Health: Workout suggestions based on goals
    - Career: Job role explorer based on skills
  - **Each group:**
    - Plans the feature together
    - Implements backend logic
    - Adds UI elements for feature
    - Tests together
  - Groups work independently

**Afternoon Session (1.5 hrs): Documentation & Deployment Prep**

- **Activity 1 (15 min):** Understanding deployment (ALL GROUPS TOGETHER)
  - Explain: "Moving from your computer to the internet"
  - Overview of deployment options
- **Activity 2 (75 min):** Documentation (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Write README with setup instructions
    - Document their features
    - Add screenshots of their chatbot
    - Create user guide
    - Document their creative choices
  - Each group documents their unique project

**Deliverable:** Each group has enhanced chatbot with personality, special feature, documentation

**Optional Stretch Goals:**

- Add more personality responses
- Implement additional features
- Add emoji support
- Create deployment configuration
- Polish documentation

---

### Day 8 - Tuesday (3.5 hrs: 2h morning + 1.5h afternoon)

**Morning Session (2 hrs): Final Testing & Presentation Prep**

- **Activity 1 (60 min):** Final comprehensive testing (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Test all features thoroughly
    - Test backend functionality, database, Watson
    - Test UI/UX, user flows, responsiveness
    - Create final bug list
    - Fix must-fix items
  - Groups work independently
- **Activity 2 (60 min):** Start presentation development (EACH GROUP INDEPENDENTLY)
  - **Each group creates their own presentation:**
    - Outline structure:
      1. Problem statement
      2. Their solution
      3. Their domain choice and why
      4. Technical architecture
      5. Features demo
      6. Challenges & learnings
    - Assign slides to team members
    - Begin creating slides

**Afternoon Session (1.5 hrs): Presentation Development**

- **Activity 1 (90 min):** Create presentation materials (EACH GROUP INDEPENDENTLY)
  - **Each group:**
    - Each student creates 2-3 slides
    - Include screenshots of their chatbot
    - Include diagrams, code snippets
    - Practice explaining their choices
    - Record 2-3 minute demo video (backup)
  - Each group prepares their unique presentation

**Deliverable:** Each group has fully tested chatbot, presentation slides, demo video

**Optional Stretch Goals:**

- Polish presentation design
- Add more screenshots
- Create handouts
- Practice presentation more
- Add final UI polish

---

### Day 9 - Wednesday (2 hrs morning)

**Morning Session (2 hrs): Final Presentations**

- **Activity 1 (20 min):** Final presentation rehearsal (EACH GROUP INDEPENDENTLY)
  - Each group does complete run-through
  - Practice live demo
  - Prepare for Q&A
  - Make last-minute adjustments
- **Activity 2 (100 min):** Present to stakeholders (ALL GROUPS TOGETHER)
  - Invite company leadership, teachers, parents
  - **Each group presents (20 min each):**
    - Introduction and domain choice
    - Why they chose this domain
    - Technical overview
    - Live demo of their unique chatbot
    - Special features they implemented
    - Challenges overcome
    - What they learned
  - Q&A after each presentation (5 min)
  - Final reflection: What did you learn?
  - Certificates/recognition
  - Celebration!

**Deliverable:** 3 successful presentations, 3 completed unique chatbot projects

**Optional Stretch Goals:**

- Create portfolio page for the project
- Write blog post about experience
- Share on LinkedIn
- Plan future improvements

---

## Pedagogical Approach

### Learning Philosophy

1. **Learn by Doing:** All students code on their own laptops every day
2. **Creative Freedom:** Each group makes their own choices
3. **Independent Work:** Groups work on their own projects
4. **Peer Learning:** Groups can help each other and share ideas
5. **Fail Forward:** Bugs are learning opportunities
6. **Scaffolded:** Supervisor provides structure, groups execute
7. **Reflective:** Regular sharing and debriefs

### Supervisor's Role

- **Guide, not lecturer:** Show concepts, then let groups work independently
- **Circulate:** Move between groups to help each one
- **Provide context:** Explain "why" before "how"
- **Encourage experimentation:** "What happens if you change this?"
- **Normalize struggle:** "Debugging is part of engineering"
- **Facilitate sharing:** Bring groups together to share progress
- **Celebrate diversity:** Highlight unique choices each group makes
- **Adapt to irregular schedule:** Make each session count

### Hands-On Balance

- **70% hands-on coding/customizing/configuring** - Each student actively coding on their own laptop
- **15% testing/debugging** - Each group tests their project
- **15% planning/documentation/presenting** - Each group creates their materials

### Group Dynamics

- **Independent projects:** Each group creates their own chatbot
- **Creative ownership:** Groups make their own choices
- **Peer support:** Groups can help each other debug
- **Shared learning:** Groups learn from each other's approaches
- **Individual contribution:** Each student contributes to their group's project

### Optional Stretch Goals

For students who:

- Finish tasks early
- Want extra coding practice
- Are interested in going deeper

**Stretch goals include:**

- Adding more Watson intents
- Implementing additional UI features
- Creating more database queries
- Adding error handling
- Writing more documentation
- Testing more edge cases
- Adding animations and effects
- Implementing extra features

---

## Success Metrics

### Technical Outcomes (EACH GROUP)

- ✅ Working chatbot with 5-6 intents
- ✅ Database integration with domain-specific data
- ✅ Customized, professional UI
- ✅ Comprehensive documentation
- ✅ Successful frontend-backend integration
- ✅ Unique domain and personality

### Learning Outcomes (ALL STUDENTS)

Students will gain hands-on experience with:

- ✅ Version control (Git/GitHub)
- ✅ Frontend development (HTML/CSS/JavaScript)
- ✅ Backend development (Node.js)
- ✅ AI/ML concepts (Watson Assistant)
- ✅ Database basics (SQL)
- ✅ UI/UX design principles
- ✅ Full-stack integration
- ✅ Project planning and execution
- ✅ Technical communication (documentation, presentation)
- ✅ Creative decision-making

### Soft Skills Development (ALL STUDENTS)

- ✅ Teamwork within their group
- ✅ Problem-solving and debugging
- ✅ Time management with irregular schedule
- ✅ Technical communication
- ✅ Presentation skills
- ✅ Resilience (dealing with errors/bugs)
- ✅ Leadership opportunities
- ✅ Creative thinking
- ✅ Independent work

---

## Tips for Success

### For the Supervisor

1. **Pre-work:** Set up all accounts/environments beforehand
2. **Circulate constantly:** Move between groups to help each one
3. **Celebrate diversity:** Highlight unique choices each group makes
4. **Have backup plans:** If Watson is down, work on UI or database
5. **Celebrate small wins:** "Your chatbot just understood a question!"
6. **Use analogies:** "The backend is like a restaurant kitchen..."
7. **Provide stretch goals:** For students who want extra practice
8. **Document everything:** Take photos of each group's work
9. **Be patient:** First time coding can be overwhelming
10. **Make it fun:** Encourage creative, fun chatbot personalities
11. **Facilitate sharing:** Bring groups together to share progress
12. **Adapt to irregular schedule:** Make each session count

### For the Students

1. **Ask questions:** No question is too basic
2. **Experiment:** Try changing things and see what happens
3. **Help your teammates:** Best way to learn is to teach
4. **Be creative:** Make your chatbot unique and fun
5. **Take notes:** Document what you learn
6. **Don't fear errors:** They're how we learn
7. **Think like a user:** Would you want to use your chatbot?
8. **Share with other groups:** Learn from their approaches
9. **Try stretch goals:** If you want extra coding practice
10. **Have fun:** This is your project - make it yours!

### Within Each Group

- **Divide tasks:** Each person works on different parts
- **Communicate:** Keep teammates updated on progress
- **Help each other:** Debug together
- **Make decisions together:** Domain, style, features
- **Rotate keyboard time:** Everyone codes
- **Test each other's work:** Catch bugs early
- **Document together:** Everyone contributes to README

---

## Contingency Plans

### If Behind Schedule

- **Simplify scope:** Reduce number of intents to 4-5
- **Use templates:** Pre-built UI components
- **Focus on core features:** Skip optional stretch goals
- **Extend key sessions:** Use time wisely
- **Groups help each other:** Share solutions

### If Ahead of Schedule

- **Work on stretch goals:** Add extra features
- **Polish UI:** Refine design and styling
- **Add more intents:** Expand chatbot capabilities
- **Extra testing:** Test edge cases thoroughly
- **Practice presentation:** More rehearsal time

### Technical Issues

- **Watson down:** Work on database and UI
- **Deployment issues:** Demo locally
- **Code breaks:** Use Git to revert to working version
- **Student absent:** Teammates cover, catch up async
- **Group stuck:** Other groups or supervisor help

### Group Challenges

- **One group ahead:** Work on stretch goals, help other groups
- **One group behind:** Supervisor provides extra support, simplify scope
- **Conflict within group:** Supervisor mediates, refocus on project
- **Different skill levels:** Pair stronger with those who need help

---

## Post-Project Follow-Up

### Reflection Activities (ALL STUDENTS)

1. **Individual reflection:** "What surprised you most?"
2. **Group retrospective:** "What would we do differently?"
3. **Cross-group learning:** "What did you learn from other groups?"
4. **Skills assessment:** "What do you want to learn more about?"
5. **Career connections:** "What IT roles interest you now?"

### Continuing the Journey

- Share project on LinkedIn/portfolios
- Encourage continued learning (free online courses)
- Connect with college IT programs
- Provide recommendation letters highlighting contributions
- Suggest specialization paths based on interests
- Recommend coding practice platforms

---

## Resources & References

### Documentation

- IBM Watson Assistant: https://cloud.ibm.com/docs/watson-assistant
- Node.js Documentation: https://nodejs.org/docs/
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- HTML/CSS/JS: https://developer.mozilla.org/en-US/

### Tools

- VS Code: https://code.visualstudio.com/
- GitHub: https://github.com/
- IBM Cloud: https://cloud.ibm.com/
- Draw.io: https://draw.io/ (for diagrams)

### Learning Platforms (for after project)

- freeCodeCamp
- Codecademy
- IBM Skills Network
- Coursera (IBM courses)
- Frontend Masters
- Backend development courses
- Coding practice platforms like LeetCode, HackerRank

---

## Conclusion

This revised 3-week project (23 hours total) provides all 9 students with authentic engineering experience adapted to an irregular schedule. The **three independent groups** each create their own unique chatbot project with full creative freedom.

By the end, **all students** will:

- Have hands-on experience building a complete application
- Understand what software engineers do daily
- Have their own unique portfolio project to showcase
- Know if IT/Computer Science is a path they want to pursue
- Have practical experience with industry tools
- Understand collaborative software development within a team
- Have made creative decisions about their project

**Each group** will have:

- Their own unique chatbot with their chosen domain
- Their own customized UI and personality
- Their own set of features and capabilities
- Their own presentation showcasing their work

**Students wanting extra coding practice** can work on optional stretch goals throughout the project.

**Most importantly:** They'll all have fun building something real and unique that they can show friends and family, and they'll understand that software development combines technical skills with creativity and teamwork!
