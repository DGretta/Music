# Module Guide Template

## Pre-Writing Checklist
- [ ] Module manual reviewed for exact I/O names
- [ ] Physical module inspected (or high-res photos analyzed)
- [ ] I/O reference sheet updated
- [ ] Common misconceptions noted

## Required Sections

### Module I/O Verification
**Verified Inputs:** [List exactly as they appear on module]
**Verified Outputs:** [List exactly as they appear on module]
**Does NOT have:** [List commonly assumed but absent I/O]

### Patch Examples Format
For each patch, use this format:
- **[Source]** → **[Exact Input Name]**
- **Note:** [Any special triggering/timing behavior]
- **Not:** [What this module doesn't do/have]

## Common Error Prevention

### Avoid These Assumptions:
1. **"All modules have gate inputs"** - Many don't
2. **"CV inputs are generic"** - Many are specific/assignable
3. **"Standard naming"** - Each manufacturer uses different terms

### Validation Questions:
- Does this input/output actually exist on the module?
- Is this the exact name printed on the module?
- Have I tested this connection or verified it exists?

## Post-Writing Checklist
- [ ] All patch examples use verified I/O only
- [ ] No references to non-existent inputs/outputs
- [ ] Guide checker script run with no errors
- [ ] Cross-referenced with module manual
