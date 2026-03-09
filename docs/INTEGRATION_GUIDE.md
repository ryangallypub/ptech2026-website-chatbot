# Web Chat Integration Guide

This guide provides quick instructions for integrating the watsonx Assistant web chat into your gaming website.

## Quick Integration Steps

### 1. Get Your Credentials

After setting up your watsonx Assistant (see [WATSONX_SETUP.md](WATSONX_SETUP.md)), you'll need three credentials:

- **Integration ID**: Found in Web Chat settings → Embed tab
- **Region**: Your service region (e.g., us-south, eu-gb, eu-de, jp-tok)
- **Service Instance ID**: Your unique service identifier

### 2. Update index.html

Open `index.html` and locate the watsonx Assistant script section at the bottom (before `</body>`):

```javascript
<script>
    window.watsonAssistantChatOptions = {
        integrationID: "YOUR_INTEGRATION_ID", // Replace this
        region: "YOUR_REGION", // Replace this
        serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID", // Replace this
        onLoad: function(instance) {
            instance.render();
        },
        // Custom configuration for gaming theme
        carbonTheme: 'g100', // Dark theme
        hideCloseButton: false,
        showLauncher: true,
        openChatByDefault: false,
        namespaceClassNames: 'gaming-chat',
        launcher: {
            label: 'Chat with us',
            description: 'Need help? Chat with our support team'
        }
    };

    setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
              (window.watsonAssistantChatOptions.clientVersion || 'latest') +
              "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
    });
</script>
```

### 3. Replace Placeholder Values

Replace the three placeholder values with your actual credentials:

**Before:**

```javascript
integrationID: "YOUR_INTEGRATION_ID",
region: "YOUR_REGION",
serviceInstanceID: "YOUR_SERVICE_INSTANCE_ID",
```

**After (example):**

```javascript
integrationID: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
region: "us-south",
serviceInstanceID: "12345678-90ab-cdef-1234-567890abcdef",
```

### 4. Test the Integration

1. Save the `index.html` file
2. Open it in a web browser
3. Look for the chat launcher button in the bottom-right corner
4. Click to open the chat
5. Test your custom Q&A actions

## Configuration Options

### Theme Customization

The chat widget is pre-configured with a dark gaming theme. You can customize it further:

```javascript
window.watsonAssistantChatOptions = {
  // ... credentials
  carbonTheme: "g100", // Dark theme (g10, g90, g100)

  // Custom colors (optional)
  customCSS: `
        .WACLauncher__Button {
            background-color: #8b5cf6 !important;
        }
    `,
}
```

### Launcher Position

```javascript
launcher: {
    position: 'bottom-right', // or 'bottom-left'
    label: 'Chat with us',
    description: 'Need help? Chat with our support team'
}
```

### Auto-Open Chat

To open the chat automatically when the page loads:

```javascript
openChatByDefault: true
```

### Hide Close Button

To prevent users from closing the chat:

```javascript
hideCloseButton: true
```

## Verification Checklist

Before going live, verify:

- [ ] All three credentials are correctly entered
- [ ] Chat launcher appears in the correct position
- [ ] Chat opens when clicking the launcher
- [ ] Both Q&A pairs respond correctly
- [ ] Chat styling matches your gaming theme
- [ ] Chat works on mobile devices
- [ ] No JavaScript errors in browser console

## Troubleshooting

### Chat Widget Not Loading

**Problem**: Chat launcher doesn't appear

**Solutions**:

1. Check browser console for errors (F12 → Console tab)
2. Verify all three credentials are correct
3. Ensure you have internet connectivity
4. Check that the script is placed before `</body>` tag
5. Clear browser cache and reload

### Incorrect Responses

**Problem**: Bot gives wrong answers or doesn't understand questions

**Solutions**:

1. Verify actions are created in watsonx Assistant
2. Add more example phrases to your actions
3. Test in watsonx Assistant Preview first
4. Check that actions are saved and published

### Styling Issues

**Problem**: Chat widget doesn't match website theme

**Solutions**:

1. Use `carbonTheme` option to change theme
2. Add custom CSS using `customCSS` option
3. Check for CSS conflicts with your website styles

## Advanced Integration

### Custom Events

Listen to chat events:

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  onLoad: function (instance) {
    instance.render()

    // Listen for chat opened
    instance.on({
      type: "view:change",
      handler: function (event) {
        if (event.newViewState.mainWindow) {
          console.log("Chat opened")
        }
      },
    })
  },
}
```

### Pre-fill User Information

If you have user information, you can pre-fill it:

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  onLoad: function (instance) {
    instance.updateUserID("user123")
    instance.render()
  },
}
```

### Custom Launcher

Hide the default launcher and create your own:

```javascript
window.watsonAssistantChatOptions = {
  // ... other options
  showLauncher: false,
  onLoad: function (instance) {
    instance.render()

    // Your custom button
    document
      .getElementById("myCustomButton")
      .addEventListener("click", function () {
        instance.openWindow()
      })
  },
}
```

## Security Best Practices

1. **Never commit credentials**: Don't commit your credentials to public repositories
2. **Use environment variables**: Store credentials in environment variables for production
3. **Restrict domains**: In IBM Cloud, restrict web chat to specific domains
4. **Monitor usage**: Regularly check your IBM Cloud usage and logs
5. **Update regularly**: Keep the web chat version updated

## Performance Optimization

1. **Lazy loading**: The script already uses lazy loading with `setTimeout`
2. **CDN**: The web chat is served from IBM's global CDN
3. **Caching**: Browser caching is enabled by default
4. **Minimize custom CSS**: Keep custom CSS minimal for better performance

## Support

For integration issues:

- Review [WATSONX_SETUP.md](WATSONX_SETUP.md) for detailed setup
- Check [IBM Cloud Documentation](https://cloud.ibm.com/docs/watson-assistant)
- Contact IBM Cloud Support through your account

---

**Last Updated**: February 2026
