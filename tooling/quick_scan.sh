#!/bin/bash

# Simple Interface Error Scanner
# Finds high-probability interface errors for manual review

echo "🔍 Scanning for common interface errors in modular guides..."
echo "=================================================="

cd ~/claude/Music/modular

# Look for obvious problematic patterns
echo "❌ GATE INPUT ERRORS:"
grep -n "gate input\|Gate input" *.md | head -10

echo ""
echo "❌ GENERIC CV REFERENCES (may need specificity):"  
grep -n "→.*CV input\|patch.*CV input" *.md | head -10

echo ""
echo "❌ TRIGGER INPUT VARIATIONS:"
grep -n "trigger input\|Trigger input" *.md | head -10

echo ""
echo "📊 SUMMARY:"
echo "Gate input refs: $(grep -c "gate input\|Gate input" *.md | awk -F: '{sum+=$2} END {print sum}')"
echo "CV input refs: $(grep -c "CV input" *.md | awk -F: '{sum+=$2} END {print sum}')" 
echo "Trigger refs: $(grep -c "trigger input\|Trigger input" *.md | awk -F: '{sum+=$2} END {print sum}')"

echo ""
echo "💡 NEXT STEPS:"
echo "1. Review flagged files above"
echo "2. Check module manuals for correct terminology"  
echo "3. Fix errors using find/replace"
echo "4. Run script again to verify fixes"
