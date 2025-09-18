# Pkhia MK2 Guide - Error Corrections

## Critical Errors Found

### 1. CV Input Labeling Errors
**INCORRECT in guide:** "1+2 CV input"
**CORRECT:** "1+2 1&2" (as shown in manual)

**INCORRECT in guide:** Generic "CV inputs" 
**CORRECT:** Need to specify "Cutoff CV" vs "VCA CV" inputs

### 2. Missing VCA Documentation
**MISSING:** Proper documentation of VCA CV inputs
**MANUAL STATES:** "Pre-filter VCA with CV input" and "CV input for left and right VCA (1+2 1&2)"

### 3. Patch Errors - Missing VCA Control
**ALL PATCHES MISSING:** VCA CV control examples
**IMPACT:** Users won't understand the full dual filter + VCA architecture

### 4. Ambiguous Input/Output Names
**NEED VERIFICATION:** Actual jack names on module panel
**CURRENT:** Generic "Left and Right inputs"
**NEEDED:** Exact panel markings

## Specific Corrections Needed

### Patch 1 Correction:
```
CURRENT:
[LFO] ──→ [1+2 CV input] (controls both filters)

SHOULD BE:
[LFO] ──→ [1+2 1&2 Cutoff CV] (controls both filter cutoffs)
[VCA CV Source] ──→ [1+2 1&2 VCA CV] (controls both VCAs)
```

### Essential Parameters Section:
**MISSING:** Clear documentation of:
- Pre-filter VCA architecture
- Separate cutoff vs VCA CV control
- Proper CV input labeling (1+2 1&2 notation)

### Architecture Description Error:
**CURRENT:** Focuses mainly on filtering
**SHOULD BE:** Equal emphasis on dual filter + VCA architecture

## Required Corrections:
1. Fix all "1+2 CV input" to "1+2 1&2" notation
2. Add VCA CV examples to all patches
3. Clarify cutoff CV vs VCA CV inputs
4. Add VCA-focused patch examples
5. Verify actual panel jack names from module image
