# Xhenvolt Chat API Documentation

## Endpoint: `/api/chat`

### Overview
Production-ready AI chat endpoint that provides knowledge-grounded responses about Xhenvolt services using Google Gemini API.

### Authentication
- **Type:** Environment variable based
- **Key:** `GEMINI_API_KEY`
- **Location:** Backend only (never exposed to client)

### Base URL
```
https://your-domain.com/api/chat
```

---

## POST /api/chat

Send a message to the AI assistant and receive a response.

### Request

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "message": "What is DRAIS?"
}
```

**Parameters:**
| Parameter | Type | Required | Max Length | Description |
|-----------|------|----------|-----------|-------------|
| message | string | Yes | 2000 chars | User's question or statement |

### Response

**Success (200 OK):**
```json
{
  "success": true,
  "response": "DRAIS is our comprehensive School Management System...",
  "rateLimitRemaining": 29
}
```

**Rate Limit Exceeded (429):**
```json
{
  "error": "Rate limit exceeded. Please try again in a moment.",
  "retryAfter": 60
}
```

**Bad Request (400):**
```json
{
  "error": "Message is required and must be a string"
}
```

**Server Error (500):**
```json
{
  "error": "Unable to process your message at this moment.",
  "suggestion": "Please contact our team directly at 0745 726 350 or +256 774 543 406."
}
```

### Response Headers
| Header | Value | Description |
|--------|-------|-------------|
| X-RateLimit-Limit | 30 | Requests per minute |
| X-RateLimit-Remaining | 0-30 | Requests remaining |

---

## GET /api/chat

Health check endpoint to verify API is running.

### Response

**Success (200 OK):**
```json
{
  "status": "ok",
  "service": "Xhenvolt Chat API",
  "timestamp": "2024-12-17T10:30:00.000Z"
}
```

**Error (500):**
```json
{
  "status": "error",
  "message": "GEMINI_API_KEY is not configured"
}
```

---

## Rate Limiting

### Limits
- **30 requests per minute** per IP address
- Resets every 60 seconds
- Identified by `X-Forwarded-For` or IP address

### Headers
- `X-RateLimit-Limit: 30`
- `X-RateLimit-Remaining: <count>`

### Handling Rate Limits

When limited (429 response):
```javascript
if (response.status === 429) {
  const retryAfter = data.retryAfter; // seconds
  setTimeout(() => {
    // Retry request
  }, retryAfter * 1000);
}
```

---

## Error Handling

### Common Errors

| Status | Error | Cause | Solution |
|--------|-------|-------|----------|
| 400 | Message is required | Empty or missing message | Send non-empty message |
| 400 | Message cannot be empty | Whitespace-only message | Provide actual text |
| 429 | Rate limit exceeded | Too many requests | Wait before retrying |
| 500 | API configuration error | GEMINI_API_KEY not set | Add API key to .env.local |
| 500 | Unable to process | Gemini API error | Retry or contact support |

---

## Examples

### JavaScript/TypeScript (Frontend)

```typescript
async function sendMessage(message: string) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data.error);
      return;
    }

    console.log("Response:", data.response);
    console.log("Requests remaining:", data.rateLimitRemaining);
  } catch (error) {
    console.error("Network error:", error);
  }
}

// Usage
sendMessage("What is DRAIS?");
```

### cURL

```bash
curl -X POST https://your-domain.com/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"Tell me about your pricing"}'
```

### Python

```python
import requests
import json

url = "https://your-domain.com/api/chat"
headers = {"Content-Type": "application/json"}
data = {"message": "How can I contact your team?"}

response = requests.post(url, headers=headers, json=data)
result = response.json()

if response.status_code == 200:
    print(result["response"])
else:
    print(f"Error: {result['error']}")
```

---

## Knowledge Base

The AI assistant responds using ONLY information from the knowledge base. It does NOT:
- Use general knowledge about Xhenvolt
- Make up pricing or features
- Browse the internet
- Access external APIs

### Knowledge Sections
- Company overview and contact info
- System details (DRAIS, XHETON, XHAIRA, CONSTY, JORC)
- Pricing tiers and payment options
- Team members and expertise
- Services and FAQs

### Missing Information
If the knowledge base doesn't contain information about something, the assistant will say:
```
"I don't have information about that. Please contact our team at 0745 726 350 or +256 774 543 406 for assistance."
```

---

## Security

### Input Sanitization
- Maximum 2000 characters per message
- Dangerous characters removed (`<`, `>`)
- Prevents injection attacks

### API Key Security
- Never exposed to frontend
- Read from environment variables only
- Not logged or transmitted
- Rotate periodically

### Rate Limiting
- Prevents abuse
- Keeps costs predictable
- Identified by IP address

---

## Performance

### Response Time
- **Average:** 2-5 seconds
- **Fast model used:** Optimized for speed
- **Network latency:** Depends on location to Google servers

### Token Usage
- **Average per request:** 100-300 tokens
- **Cost per month:** ~$0.15 for 100 chats/day
- **Free tier limit:** 1M tokens/month (15 requests/min)

---

## Monitoring

### Health Check
```bash
curl https://your-domain.com/api/chat
```

### Metrics to Track
1. **Response time** - Log `Date.now() - startTime`
2. **Error rate** - Monitor 500 responses
3. **Rate limiting** - Watch for 429 responses
4. **Token usage** - Check Google AI Studio dashboard

### Logging Example
```typescript
// In your frontend
fetch("/api/chat", {...})
  .then(r => {
    console.log({
      status: r.status,
      remaining: r.headers.get("X-RateLimit-Remaining"),
      timestamp: new Date().toISOString()
    });
    return r.json();
  });
```

---

## Deployment

### Environment Variables (Production)

Set on your hosting platform:
```
GEMINI_API_KEY=your_production_key
```

### Vercel
1. Go to Project Settings
2. Environment Variables
3. Add `GEMINI_API_KEY`

### Railway
```bash
railway link <project-id>
railway variables set GEMINI_API_KEY=<key>
railway up
```

### Docker
```dockerfile
FROM node:18
ENV GEMINI_API_KEY=${GEMINI_API_KEY}
# ... rest of setup
```

---

## Troubleshooting

### "GEMINI_API_KEY is not configured"
**Problem:** API key not set  
**Solution:** Add to .env.local and restart server

### "Rate limit exceeded"
**Problem:** Too many requests too fast  
**Solution:** Implement exponential backoff retry logic

### "No text response from Gemini"
**Problem:** Unexpected API response  
**Solution:** Check Gemini API status, verify API key

### "Slow responses"
**Problem:** API taking >5 seconds  
**Solution:** Check network, verify Google API status

---

## Future Enhancements

### Planned
- [ ] Redis-based rate limiting for scaling
- [ ] Conversation history (persistent storage)
- [ ] Analytics dashboard
- [ ] A/B testing framework
- [ ] Multi-language support
- [ ] Custom model fine-tuning

### Provider Switching
To migrate to OpenAI, Anthropic, etc., replace the Gemini API calls in `/api/chat/route.ts` with your preferred provider.

---

## Support

- **Documentation:** CHATBOT_SETUP.md
- **Issues:** Check GitHub repository
- **Gemini API Docs:** https://ai.google.dev/docs
- **Status Page:** https://status.google.com
- **Contact:** info@xhenvolt.com

---

**Last Updated:** December 2024  
**API Version:** 1.0  
**Status:** Production Ready
