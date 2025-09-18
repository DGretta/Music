#!/bin/bash

# Quick Guide Verification Helper
# Usage: ./quick_verify.sh "module_name" "guide_file.md"

MODULE_NAME="$1"
GUIDE_FILE="$2"

if [ -z "$MODULE_NAME" ] || [ -z "$GUIDE_FILE" ]; then
    echo "Usage: ./quick_verify.sh 'module_name' 'guide_file.md'"
    exit 1
fi

echo "🔍 Quick verification for $MODULE_NAME"
echo "==============================================="

# Check for common problematic patterns
echo "❓ Checking for potential issues..."

# Gate input references
GATE_COUNT=$(grep -ci "gate input" "$GUIDE_FILE" 2>/dev/null || echo "0")
if [ "$GATE_COUNT" -gt 0 ]; then
    echo "⚠️  Found $GATE_COUNT 'gate input' references - verify module has gate input"
fi

# Generic trigger references  
TRIGGER_COUNT=$(grep -ci "trigger input" "$GUIDE_FILE" 2>/dev/null || echo "0")
if [ "$TRIGGER_COUNT" -gt 0 ]; then
    echo "⚠️  Found $TRIGGER_COUNT 'trigger input' references - verify exact input name"
fi

# CV input references
CV_COUNT=$(grep -ci "cv input" "$GUIDE_FILE" 2>/dev/null || echo "0")
if [ "$CV_COUNT" -gt 0 ]; then
    echo "ℹ️  Found $CV_COUNT 'CV input' references - verify if assignable or dedicated"
fi

echo ""
echo "📝 Manual verification checklist:"
echo "1. Check module manual for exact input/output names"
echo "2. Verify any 'gate input' references against actual module"
echo "3. Confirm CV input behavior (assignable vs dedicated)"
echo "4. Update module_io_references.md with verified info"

# Quick search for manual
echo ""
echo "🔗 Quick manual search suggestion:"
echo "Search: '$MODULE_NAME manual filetype:pdf site:ericasynths.lv'"

# Open guide in editor if available
if command -v code &> /dev/null; then
    echo ""
    echo "Opening guide in VS Code..."
    code "$GUIDE_FILE"
fi
