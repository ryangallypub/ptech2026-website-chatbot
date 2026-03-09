# watsonx Assistant Setup Guide

This guide will walk you through setting up a watsonx Assistant chatbot with two Q&A pairs and integrating it into your gaming website.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Creating Your watsonx Assistant Instance](#creating-your-watsonx-assistant-instance)
3. [Building Your Assistant](#building-your-assistant)
4. [Creating Actions for Q&A Pairs](#creating-actions-for-qa-pairs)
5. [Configuring Web Chat](#configuring-web-chat)
6. [Getting Integration Credentials](#getting-integration-credentials)
7. [Testing Your Chatbot](#testing-your-chatbot)

---

## Prerequisites

Before you begin, ensure you have:

- An IBM Cloud account (sign up at https://cloud.ibm.com)
- Access to watsonx Assistant service
- Basic understanding of web development

---

## Creating Your watsonx Assistant Instance

### Step 1: Access IBM Cloud

1. Log in to your IBM Cloud account at https://cloud.ibm.com
2. Navigate to the **Catalog**
3. Search for "Watson Assistant" or "watsonx Assistant"

### Step 2: Create Service Instance

1. Click on **Watson Assistant** from the search results
2. Select your preferred region (e.g., Dallas, London, Frankfurt)
3. Choose a pricing plan:
   - **Lite Plan**: Free tier with limited features (good for testing)
4. Give your service instance a name (e.g., "gaming-chatbot")
5. Click **Create**

### Step 3: Launch watsonx Assistant

1. Once created, click **Launch Watson Assistant**
2. You'll be taken to the watsonx Assistant interface

---

## Building Your Assistant

### Step 1: Create a New Assistant

1. In the watsonx Assistant interface, click **Create assistant**
2. Choose **Start from scratch**
3. Name your assistant: "Gaming Support Bot"
4. Add a description: "Customer support chatbot for Epic Gaming Portal"
5. Click **Create assistant**

### Step 2: Set Up Environment

1. Your assistant will be created with a **Draft** environment by default
2. This is where you'll build and test your chatbot
3. Later, you can publish to a **Live** environment for production

---

## Creating Actions for Q&A Pairs

watsonx Assistant uses **Actions** to handle customer requests. Create custom actions based on your gaming platform's specific needs.

### Creating an Action

#### Step 1: Create the Action

1. In your assistant, click **Actions** in the left sidebar
2. Click **Create action**
3. Choose **Start from scratch**

#### Step 2: Define Customer Intent

1. In the "What does your customer say to start this action?" field, enter your main question
2. Click **Save**

#### Step 3: Add Example Phrases

Add variations of how customers might ask this question. Examples:

- Different phrasings of the same question
- Common synonyms
- Casual vs formal language
- Questions with different word orders

Click **Save** after adding each phrase.

#### Step 4: Configure the Response

1. In the action editor, you'll see "Step 1"
2. Under "Assistant says", click **Edit response**
3. Enter your response text
4. Optionally, add rich content like buttons, images, or links
5. Click **Save**

#### Step 5: End the Action

1. Under "And then", select **End the action**
2. Click **Save** to save the entire action

---

### Example Action Structure

**Customer Question:** Your main question here
**Example Phrases:**

- Variation 1
- Variation 2
- Variation 3

**Response:** Your answer here

- "What are your operating hours?"
- "When can I play?"
- "Are you available 24/7?"
- "What's your schedule?"

#### Step 4: Configure the Response

1. Under "Assistant says", click **Edit response**
2. Enter the response:
   ```
   We're available 24/7 online.
   ```
3. Optionally, add more detail:
   ```
   We're available 24/7 online! Our gaming platform never sleeps, so you can play your favorite games anytime, anywhere. Our support team is also available around the clock to help you.
   ```
4. Click **Save**

#### Step 5: End the Action

1. Under "And then", select **End the action**
2. Click **Save**

---

## Configuring Web Chat

### Step 1: Access Web Chat Settings

1. In the left sidebar, click **Integrations**
2. Find **Web chat** and click on it
3. Click **Open** to access web chat settings

### Step 2: Customize Appearance

1. Go to the **Style** tab
2. Customize the chatbot appearance:
   - **Primary color**: Choose a color that matches your gaming theme (e.g., #8b5cf6)
   - **Secondary color**: Complementary color (e.g., #06b6d4)
   - **Accent color**: For highlights (e.g., #f59e0b)

### Step 3: Configure Home Screen

1. Go to the **Home screen** tab
2. Enable the home screen
3. Set a greeting message:

   ```
   Welcome to Epic Gaming! 👋

   How can I help you today?
   ```

4. Add conversation starters based on your custom actions (optional)

### Step 4: Configure Suggestions

1. Go to the **Suggestions** tab
2. Enable suggestions to help users when the bot doesn't understand
3. This improves the user experience

---

## Getting Integration Credentials

### Step 1: Access Embed Code

1. In the Web chat integration settings, go to the **Embed** tab
2. You'll see a code snippet that looks like this:

```html
<script>
  window.watsonAssistantChatOptions = {
    integrationID: "abc123def456", // Your integration ID
    region: "us-south", // Your region
    serviceInstanceID: "xyz789uvw012", // Your service instance ID
    onLoad: function (instance) {
      instance.render()
    },
  }
  setTimeout(function () {
    const t = document.createElement("script")
    t.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js"
    document.head.appendChild(t)
  })
</script>
```

### Step 2: Copy Your Credentials

From the embed code, copy these three values:

- **integrationID**: The unique ID for your web chat integration
- **region**: The region where your service is hosted (e.g., us-south, eu-gb, eu-de)
- **serviceInstanceID**: Your service instance identifier

### Step 3: Update Your Website

1. Open `index.html` in your gaming website project
2. Find the watsonx Assistant script section at the bottom of the file
3. Replace the placeholder values:
   ```javascript
   integrationID: "YOUR_INTEGRATION_ID", // Replace with your actual integration ID
   region: "YOUR_REGION", // Replace with your region
   serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID", // Replace with your service instance ID
   ```

Example with real values:

```javascript
window.watsonAssistantChatOptions = {
  integrationID: "abc123def456",
  region: "us-south",
  serviceInstanceID: "xyz789uvw012",
  onLoad: function (instance) {
    instance.render()
  },
  carbonTheme: "g100",
  hideCloseButton: false,
  showLauncher: true,
  openChatByDefault: false,
}
```

---

## Testing Your Chatbot

### Step 1: Test in watsonx Assistant

1. In the watsonx Assistant interface, click **Preview** in the bottom right
2. A chat window will open
3. Test your Q&A pairs:
   - Type: "What games do you offer?"
   - Expected response: "We offer action, adventure, and strategy games."
   - Type: "What are your hours?"
   - Expected response: "We're available 24/7 online."

### Step 2: Test on Your Website

1. Save your `index.html` file with the updated credentials
2. Open `index.html` in a web browser
3. Look for the chat launcher button (usually in the bottom right corner)
4. Click the launcher to open the chat
5. Test both Q&A pairs

### Step 3: Verify Functionality

Ensure:

- ✅ Chat widget loads correctly
- ✅ Chat launcher appears in the bottom right
- ✅ Your custom actions respond correctly
- ✅ Chat widget matches your gaming theme
- ✅ Chat works on mobile devices

---

## Troubleshooting

### Chat Widget Not Appearing

- **Check credentials**: Ensure integrationID, region, and serviceInstanceID are correct
- **Check browser console**: Look for JavaScript errors
- **Verify network**: Ensure you have internet connectivity
- **Clear cache**: Try clearing your browser cache and reloading

### Bot Not Responding Correctly

- **Train more examples**: Add more example phrases to your actions
- **Check action logic**: Verify your actions are saved and published
- **Test in Preview**: Use the Preview feature in watsonx Assistant to debug

### Styling Issues

- **Check CSS conflicts**: Ensure your website CSS doesn't conflict with the chat widget
- **Use custom CSS**: Add custom CSS to override default styles if needed
- **Test on different browsers**: Verify appearance across browsers

---

## Advanced Configuration (Optional)

### Custom Styling

You can add custom CSS to style the chat widget:

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  customCSS: `
        .WACLauncher__Button {
            background-color: #8b5cf6 !important;
        }
        .WACContainer {
            font-family: 'Segoe UI', sans-serif !important;
        }
    `,
}
```

### Custom Launcher Position

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  launcher: {
    position: "bottom-right", // or 'bottom-left'
    label: "Chat with us",
    description: "Need help? Chat with our support team",
  },
}
```

### Open Chat by Default

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  openChatByDefault: true, // Opens chat automatically on page load
}
```

---

## Next Steps

1. **Add More Actions**: Create additional Q&A pairs or complex conversation flows
2. **Integrate with Backend**: Connect to your game database for dynamic responses
3. **Add Analytics**: Track chatbot usage and improve based on data
4. **Publish to Production**: Move from Draft to Live environment
5. **Monitor Performance**: Regularly review chatbot conversations and optimize

---

## Resources

- [watsonx Assistant Documentation](https://cloud.ibm.com/docs/watson-assistant)
- [Web Chat Integration Guide](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-web-chat-overview)
- [Building Actions](https://cloud.ibm.com/docs/watson-assistant?topic=watson-assistant-build-actions-overview)
- [IBM Cloud Support](https://cloud.ibm.com/unifiedsupport/supportcenter)

---

## Support

If you encounter issues:

1. Check the [IBM Cloud Status](https://cloud.ibm.com/status) page
2. Review the [watsonx Assistant documentation](https://cloud.ibm.com/docs/watson-assistant)
3. Contact IBM Cloud Support through your account
4. Visit the [IBM Developer Community](https://community.ibm.com/)

---

**Last Updated**: February 2026
**Version**: 1.0
