/**
 * Chatbot Logger - Client Side
 * Integrates watsonx Assistant with backend database logging
 */

class ChatbotLogger {
    constructor(apiBaseUrl = 'https://supreme-journey-5gwvgg4w5vvwc7v75-3000.app.github.dev/api') {
        this.apiBaseUrl = apiBaseUrl;
        this.conversationId = null;
        this.userId = this.generateUserId();
        this.isInitialized = false;
    }

    /**
     * Generate or retrieve user ID
     */
    generateUserId() {
        let userId = localStorage.getItem('chatbot_user_id');
        if (!userId) {
            userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('chatbot_user_id', userId);
        }
        return userId;
    }

    /**
     * Get device type
     */
    getDeviceType() {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return 'mobile';
        }
        return 'desktop';
    }

    /**
     * Initialize logging - start a new conversation
     */
    async initialize() {
        if (this.isInitialized) return;

        try {
            const response = await fetch(`${this.apiBaseUrl}/conversation/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: this.userId,
                    userAgent: navigator.userAgent,
                    deviceType: this.getDeviceType()
                })
            });

            const data = await response.json();
            
            if (data.success) {
                this.conversationId = data.conversationId;
                this.isInitialized = true;
                console.log('Chatbot logger initialized:', this.conversationId);
            } else {
                console.error('Failed to initialize chatbot logger:', data.error);
            }
        } catch (error) {
            console.error('Error initializing chatbot logger:', error);
        }
    }

    /**
     * Log a user message
     */
    async logUserMessage(messageText, intent = null, confidence = null) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        try {
            const response = await fetch(`${this.apiBaseUrl}/message/log`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversationId: this.conversationId,
                    messageType: 'user',
                    messageText: messageText,
                    intent: intent,
                    confidence: confidence
                })
            });

            const data = await response.json();
            
            if (data.success) {
                console.log('User message logged:', data.messageId);
                return data.messageId;
            } else {
                console.error('Failed to log user message:', data.error);
            }
        } catch (error) {
            console.error('Error logging user message:', error);
        }
        
        return null;
    }

    /**
     * Log a bot response
     */
    async logBotMessage(messageText, intent = null, confidence = null) {
        if (!this.isInitialized) {
            await this.initialize();
        }

        try {
            const response = await fetch(`${this.apiBaseUrl}/message/log`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversationId: this.conversationId,
                    messageType: 'bot',
                    messageText: messageText,
                    intent: intent,
                    confidence: confidence
                })
            });

            const data = await response.json();
            
            if (data.success) {
                console.log('Bot message logged:', data.messageId);
                return data.messageId;
            } else {
                console.error('Failed to log bot message:', data.error);
            }
        } catch (error) {
            console.error('Error logging bot message:', error);
        }
        
        return null;
    }

    /**
     * Submit feedback on a bot response
     */
    async submitFeedback(messageId, rating = null, feedbackText = null, helpful = null) {
        try {
            const response = await fetch(`${this.apiBaseUrl}/feedback`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messageId: messageId,
                    rating: rating,
                    feedbackText: feedbackText,
                    helpful: helpful
                })
            });

            const data = await response.json();
            
            if (data.success) {
                console.log('Feedback submitted:', data.feedbackId);
                return true;
            } else {
                console.error('Failed to submit feedback:', data.error);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
        
        return false;
    }

    /**
     * End the conversation
     */
    async endConversation() {
        if (!this.isInitialized) return;

        try {
            const response = await fetch(`${this.apiBaseUrl}/conversation/end`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversationId: this.conversationId
                })
            });

            const data = await response.json();
            
            if (data.success) {
                console.log('Conversation ended:', this.conversationId);
                this.isInitialized = false;
                this.conversationId = null;
            } else {
                console.error('Failed to end conversation:', data.error);
            }
        } catch (error) {
            console.error('Error ending conversation:', error);
        }
    }
}

/**
 * Integration with watsonx Assistant
 */
function integrateWithWatsonAssistant() {
    // Initialize logger
    const logger = new ChatbotLogger();

    // Wait for Watson Assistant to load
    window.watsonAssistantChatOptions = window.watsonAssistantChatOptions || {};
    
    const originalOnLoad = window.watsonAssistantChatOptions.onLoad;
    
    window.watsonAssistantChatOptions.onLoad = function(instance) {
        // Call original onLoad if it exists
        if (originalOnLoad) {
            originalOnLoad(instance);
        }

        // Initialize logger when chat opens
        instance.on({
            type: 'view:change',
            handler: function(event) {
                if (event.newViewState.mainWindow && !logger.isInitialized) {
                    logger.initialize();
                }
            }
        });

        // Log messages
        instance.on({
            type: 'send',
            handler: function(event) {
                // Log user message
                if (event.data && event.data.input && event.data.input.text) {
                    logger.logUserMessage(event.data.input.text);
                }
            }
        });

        instance.on({
            type: 'receive',
            handler: function(event) {
                // Log bot response
                if (event.data && event.data.output && event.data.output.generic) {
                    event.data.output.generic.forEach(item => {
                        if (item.response_type === 'text' && item.text) {
                            // Extract intent and confidence if available
                            const intent = event.data.output.intents && event.data.output.intents[0] 
                                ? event.data.output.intents[0].intent 
                                : null;
                            const confidence = event.data.output.intents && event.data.output.intents[0] 
                                ? event.data.output.intents[0].confidence 
                                : null;
                            
                            logger.logBotMessage(item.text, intent, confidence);
                        }
                    });
                }
            }
        });

        // End conversation when chat is closed
        instance.on({
            type: 'view:change',
            handler: function(event) {
                if (!event.newViewState.mainWindow && logger.isInitialized) {
                    logger.endConversation();
                }
            }
        });

        console.log('Chatbot logger integrated with Watson Assistant');
    };
}

// Auto-integrate when script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', integrateWithWatsonAssistant);
} else {
    integrateWithWatsonAssistant();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ChatbotLogger;
}

// Made with Bob
