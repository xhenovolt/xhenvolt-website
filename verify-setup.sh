#!/bin/bash

# Xhenvolt Chatbot Verification Script
# This script verifies the chatbot setup is correct

echo "=================================================="
echo "Xhenvolt AI Chatbot - Setup Verification"
echo "=================================================="
echo ""

ERRORS=0
WARNINGS=0

# Check 1: Node.js
echo -n "✓ Checking Node.js... "
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "$NODE_VERSION"
else
    echo "❌ NOT FOUND"
    ((ERRORS++))
fi

# Check 2: npm
echo -n "✓ Checking npm... "
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm -v)
    echo "$NPM_VERSION"
else
    echo "❌ NOT FOUND"
    ((ERRORS++))
fi

# Check 3: .env.local
echo -n "✓ Checking .env.local... "
if [ -f .env.local ]; then
    if grep -q "GEMINI_API_KEY=" .env.local; then
        if grep -q "GEMINI_API_KEY=your_gemini_api_key_here" .env.local; then
            echo "⚠️  NOT CONFIGURED (needs actual key)"
            ((WARNINGS++))
        else
            echo "✓ Configured"
        fi
    else
        echo "❌ MISSING GEMINI_API_KEY"
        ((ERRORS++))
    fi
else
    echo "❌ NOT FOUND"
    ((ERRORS++))
fi

# Check 4: node_modules
echo -n "✓ Checking dependencies... "
if [ -d "node_modules" ]; then
    if [ -d "node_modules/@google/generative-ai" ]; then
        echo "✓ Installed"
    else
        echo "⚠️  Missing Gemini SDK"
        ((WARNINGS++))
    fi
else
    echo "❌ NOT INSTALLED"
    ((ERRORS++))
fi

# Check 5: Source files
echo -n "✓ Checking source files... "
MISSING=0
[ ! -f "src/lib/knowledge-base.ts" ] && ((MISSING++))
[ ! -f "src/app/api/chat/route.ts" ] && ((MISSING++))
[ ! -f "src/components/Chatbot.tsx" ] && ((MISSING++))

if [ $MISSING -eq 0 ]; then
    echo "✓ All found"
else
    echo "❌ $MISSING missing"
    ((ERRORS++))
fi

# Check 6: Documentation
echo -n "✓ Checking documentation... "
DOCS=0
[ -f "CHATBOT_SETUP.md" ] && ((DOCS++))
[ -f "API_DOCUMENTATION.md" ] && ((DOCS++))
[ -f "IMPLEMENTATION_SUMMARY.md" ] && ((DOCS++))
echo "✓ $DOCS documents"

# Check 7: No old endpoints
echo -n "✓ Checking old endpoints... "
if [ -d "src/app/api/ask" ]; then
    echo "⚠️  Old /api/ask directory still exists"
    ((WARNINGS++))
else
    echo "✓ Removed"
fi

# Summary
echo ""
echo "=================================================="
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "✅ Setup Complete and Verified!"
    echo ""
    echo "Next steps:"
    echo "  1. Add GEMINI_API_KEY to .env.local"
    echo "  2. Run: npm run dev"
    echo "  3. Open: http://localhost:3000"
    echo ""
    echo "For details, see QUICK_START.md"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo "⚠️  Mostly Ready (with $WARNINGS warnings)"
    echo ""
    echo "Warnings to address:"
    echo "  - Add actual GEMINI_API_KEY to .env.local"
    echo ""
    exit 0
else
    echo "❌ Setup Not Complete"
    echo ""
    echo "Issues to fix:"
    echo "  - Install Node.js if not found"
    echo "  - Run: npm install"
    echo "  - Create .env.local with GEMINI_API_KEY"
    echo ""
    echo "Then run this script again."
    exit 1
fi
