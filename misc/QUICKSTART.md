# Quick Start Guide

Get your gaming website with watsonx Assistant chatbot up and running in minutes!

## 🚀 5-Minute Setup

### Step 1: Open the Website (1 minute)

1. Navigate to the `gaming-website-chatbot` folder
2. Open `index.html` in your web browser
3. You'll see the gaming portal (chatbot won't work yet - needs credentials)

### Step 2: Create watsonx Assistant (2 minutes)

1. Go to https://cloud.ibm.com and sign in
2. Search for "Watson Assistant" in the catalog
3. Click **Create** (choose Lite plan for free)
4. Click **Launch Watson Assistant**

### Step 3: Build Your Chatbot (2 minutes)

1. Click **Create assistant** → **Start from scratch**
2. Name it "Gaming Support Bot"
3. Click **Actions** → **Create action**
4. Add your custom Q&A pairs based on your gaming platform's needs
5. For each action:
   - Define the customer question
   - Add example phrases (variations of the question)
   - Configure the response
   - Click **Save**

### Step 4: Get Integration Code (30 seconds)

1. Click **Integrations** → **Web chat** → **Open**
2. Go to **Embed** tab
3. Copy these three values from the code:
   - `integrationID`
   - `region`
   - `serviceInstanceID`

### Step 5: Update Your Website (30 seconds)

1. Open `index.html` in a text editor
2. Scroll to the bottom (before `</body>`)
3. Find and replace:
   ```javascript
   integrationID: "YOUR_INTEGRATION_ID",
   region: "YOUR_REGION",
   serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID",
   ```
4. Save the file

### Step 6: Test! (30 seconds)

1. Refresh `index.html` in your browser
2. Look for the chat button in the bottom-right corner
3. Click it and test your custom Q&A pairs

## ✅ Success!

Your gaming website with AI chatbot is now live! 🎉

## 📚 Need More Help?

- **Detailed Setup**: See [docs/WATSONX_SETUP.md](docs/WATSONX_SETUP.md)
- **Integration Guide**: See [docs/INTEGRATION_GUIDE.md](docs/INTEGRATION_GUIDE.md)
- **Full Documentation**: See [README.md](README.md)

## 🎨 Customize

### Change Colors

Edit `css/style.css` - look for `:root` variables at the top

### Add More Q&A

1. Go to watsonx Assistant
2. Click **Actions** → **Create action**
3. Add your question and response
4. Save and test!

### Deploy Online

- **GitHub Pages**: Push to GitHub, enable Pages in settings
- **Netlify**: Drag and drop your folder at netlify.com
- **IBM Cloud**: Use Static Web Apps

## 🆘 Troubleshooting

**Chat not appearing?**

- Check credentials are correct
- Open browser console (F12) for errors
- Clear cache and reload

**Bot not responding?**

- Test in watsonx Assistant Preview first
- Add more example phrases
- Verify actions are saved

---

**That's it!** You now have a professional gaming website with an AI-powered chatbot. 🎮

For advanced features and customization, check out the full documentation in the [README.md](README.md).
