# Batch Guide Verification Strategy

## High-Risk Patterns to Check First

### 1. Gate/Trigger Input Assumptions
**Search for:** `gate input`, `Gate input`, `trigger input`
**Priority modules:** Small/utility modules that often lack dedicated inputs
**Common culprits:** Pico series, utility modules, voice modules

### 2. CV Input Misconceptions  
**Search for:** Generic CV references without specifying assignable/dedicated
**Priority modules:** Modules with assignable CV (many modern modules)
**Common errors:** Assuming all CV inputs are the same

### 3. Output Naming Inconsistencies
**Search for:** `output` vs module-specific names (like `OUT`, `Audio Out`)
**Priority modules:** Any with non-standard output naming

## Efficiency Strategy

### Phase 1: Automated Scanning (1-2 hours)
1. Run guide_checker.js on all guides
2. Identify highest-error-count guides
3. Cross-reference with module manuals for guides with errors

### Phase 2: Manual Verification (Targeted)
1. Focus only on guides flagged by checker
2. Verify against official manuals/specs  
3. Update I/O reference database as you go

### Phase 3: Template Prevention (Future)
1. Use updated template for new guides
2. Pre-check new guides with updated checker
3. Build database of verified modules progressively

## Time Investment
- **Total time:** ~8-10 hours for all guides
- **ROI:** Prevents countless hours of user confusion
- **Alternative:** Continue getting reports like this one indefinitely

## Automation Opportunities
- GitHub Actions to run checker on guide updates
- Pre-commit hooks for new guides  
- Integration with module database APIs where available
