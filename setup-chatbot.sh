#!/bin/bash

# Xhenvolt Chatbot Quick Start Setup Script
# This script helps set up the Gemini API key and verify the chatbot is working

set -e

echo "=============================================="
echo "Xhenvolt AI Chatbot - Quick Start Setup"
echo "=============================================="
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Step 1: Setting up environment variables"
    echo ""
    echo "A .env.local file was not found. Creating one..."
    cp .env.example .env.local
    echo "✓ Created .env.local"
    echo ""
    echo "Step 2: Add your Gemini API Key"
    echo ""
    echo "1. Visit: https://ai.google.dev"
    echo "2. Click 'Get API Key' in the left menu"
    echo "3. Create a new project or select existing"
    echo "4. Generate an API key"
    echo "5. Copy the key and add it to .env.local:"
    echo ""
    echo "   GEMINI_API_KEY=your_api_key_here"
    echo ""
    echo "Then run this script again."
    exit 0
fi

# Check if API key is set
if grep -q "GEMINI_API_KEY=your_gemini_api_key_here" .env.local; then
    echo "❌ Error: GEMINI_API_KEY not configured in .env.local"
    echo ""
    echo "Please update .env.local with your actual API key from https://ai.google.dev"
    exit 1
fi

if ! grep -q "GEMINI_API_KEY=" .env.local; then
    echo "❌ Error: GEMINI_API_KEY not found in .env.local"
    exit 1
fi

echo "✓ Environment variables configured"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Step 3: Installing dependencies..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
else
    echo "✓ Dependencies already installed"
    echo ""
fi

# Run build
echo "Step 4: Building the project..."
npm run build > /dev/null 2>&1
echo "✓ Build successful"
echo ""

echo "=============================================="
echo "✓ Setup Complete!"
echo "=============================================="
echo ""
echo "Next steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open http://localhost:3000 in your browser"
echo ""
echo "3. Click the chat button (bottom right)"
echo ""
echo "4. Test with these questions:"
echo "   - What is DRAIS?"
echo "   - Tell me about your pricing"
echo "   - How can I contact your team?"
echo ""
echo "For more information, see CHATBOT_SETUP.md"
echo ""
