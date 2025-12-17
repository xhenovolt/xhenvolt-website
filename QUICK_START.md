# Quick Start Guide - Xhenvolt AI Chatbot

## 30-Second Setup

### 1. Get API Key
Visit https://ai.google.dev → Click "Get API Key" → Copy key

### 2. Configure
```bash
echo "GEMINI_API_KEY=your_key_here" > .env.local
```

### 3. Run
```bash
npm install
npm run dev
```

### 4. Test
Open http://localhost:3000, click chat button, ask anything about Xhenvolt!

---

## What You Get

✅ **Production-Ready Chatbot**
- Powered by Google Gemini AI
- Answers ONLY about Xhenvolt services
- Professional, knowledge-grounded responses
- No API keys exposed
- Rate limited and secure
- Mobile responsive

✅ **Knowledge Base Included**
- All 5 systems (DRAIS, XHETON, XHAIRA, CONSTY, JORC)
- Pricing information
- Team details
- Contact information
- FAQs

✅ **Security Built-In**
- API keys protected server-side
- Input sanitization
- Rate limiting (30 req/min)
- Error handling

---

## Files Structure

```
src/
├── components/
│   └── Chatbot.tsx              # Chat UI
├── app/
│   └── api/
│       └── chat/
│           └── route.ts          # Backend AI logic
└── lib/
    └── knowledge-base.ts         # Xhenvolt data

.env.example                       # Configuration template
CHATBOT_SETUP.md                   # Detailed setup guide
API_DOCUMENTATION.md               # API reference
IMPLEMENTATION_SUMMARY.md          # Full details
```

---

## Common Tasks

### Update Pricing
Edit `src/lib/knowledge-base.ts`:
```typescript
pricing: {
  tiers: [
    { name: "Professional", price: "1,000,000" },
    // ... rest of tiers
  ]
}
```

### Add New System
Edit `src/lib/knowledge-base.ts`:
```typescript
systems: {
  yourNewSystem: {
    name: "YOUR SYSTEM",
    fullName: "Your System Name",
    // ... details
  }
}
```

### Update Team
Edit `src/lib/knowledge-base.ts`:
```typescript
team: {
  members: [
    { name: "Person Name", role: "Role", bio: "...", specialties: [] }
  ]
}
```

---

## Testing Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Check for errors
npm run build
```

---

## Deployment

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Add environment variable: `GEMINI_API_KEY`
4. Deploy

### Railway
```bash
railway link
railway variables set GEMINI_API_KEY=your_key
railway up
```

### Any Node.js Host
1. Set `GEMINI_API_KEY` environment variable
2. Run `npm run build`
3. Run `npm start`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "GEMINI_API_KEY is not configured" | Check `.env.local` exists with your key |
| Build fails | Run `npm install` first |
| Chat not working | Check browser console for errors |
| Rate limit error | Wait 60 seconds, or increase limit |
| Slow responses | Check internet connection |

---

## How It Works

```
User asks → Frontend sends to /api/chat
                        ↓
              Backend receives message
                        ↓
         Extracts relevant knowledge sections
                        ↓
         Calls Gemini API (with hidden key)
                        ↓
         Returns professional response
                        ↓
        User sees answer about Xhenvolt
```

---

## Key Features

### ✅ Knowledge Grounded
The AI can ONLY answer using information provided in the knowledge base. It will never:
- Make up features
- Guess at pricing
- Provide incorrect contact info
- Use external knowledge

### ✅ Secure
- API keys never exposed to frontend
- Input sanitized
- Rate limiting prevents abuse
- Error messages are helpful but safe

### ✅ Professional
- No emojis or casual language
- Business-appropriate tone
- Clear, concise responses
- Always offers contact info when needed

---

## Cost

### Free Tier
- **15 requests/minute**
- **1 million tokens/month**
- **Enough for:** ~100 chats/day

### Typical Usage
- 100 chats/day = ~$0.15-0.30/month
- 1,000 chats/day = ~$1.50/month
- 10,000 chats/day = ~$15/month

---

## Next Steps

1. **Set up environment:** Add `GEMINI_API_KEY` to `.env.local`
2. **Test locally:** Run `npm run dev`
3. **Deploy:** Push to production
4. **Monitor:** Check usage at https://ai.google.dev
5. **Update:** Keep knowledge base current

---

## Support

- **Setup Help:** See CHATBOT_SETUP.md
- **API Reference:** See API_DOCUMENTATION.md
- **Full Details:** See IMPLEMENTATION_SUMMARY.md
- **Gemini Docs:** https://ai.google.dev/docs

---

**Status:** ✅ Ready to Use  
**Version:** 1.0
