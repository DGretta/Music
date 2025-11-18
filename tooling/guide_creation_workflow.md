# Guide Creation Workflow: System Navigation & Process

**Start here. This document routes you through the entire guide creation system.**

---

## Quick Navigation: Know Exactly Where to Go

### **I'm creating a new guide from scratch**
→ Read: "Before You Start" + "Stage 1: Plan Your Work" + Deep Reference to `guide_creation_framework.md` (module classifications + content structure)

### **I'm enhancing an existing guide**
→ Read: "Before You Start" + "Stage 2: Execute Enhancement" + Deep Reference to `guide_enhancement_pattern.md` (WHY approach + specific techniques)

### **I need to check framework compliance**
→ Read: "Quick Reference: Compliance Checklist" + Deep Reference to `guide_creation_framework.md` (mandatory framework compliance section)

### **I'm stuck or uncertain**
→ Read: "Quick Reference: Decision Trees" + relevant Deep Reference sections

### **I finished work and need to document it**
→ Read: "Stage 4: Commit & Record" + reference `accountability_tracking.md`

---

## Before You Start: Framework Understanding

### What Guides Must Accomplish

Guides teach **understanding and interconnection**, not procedures. This is not manufacturer documentation—it's knowledge transmission designed for generational learning.

**The core distinction:**
- **NOT:** "How to press buttons" (procedural)
- **YES:** "Why the design works this way" + "What goes wrong and why" + "How this teaches broader principles" (understanding)

### Non-Negotiables (All Guides, No Exceptions)

1. **Teach interconnection, not procedures** - Every significant feature shows how it connects to broader synthesis principles
2. **Verify or flag technical claims** - Specific numbers (voltage ranges, timing specs, firmware versions) must be verified or marked with ⚠️
3. **Include Common Mistakes section** - 3-5 issues with first-person frustrated quotes as headings, WHY explanations for each
4. **Use "Advanced," not "Phase 2"** - Consistent terminology throughout framework
5. **Enhanced format alternatives in all patches** - Budget/Premium/Different character options for every patch
6. **GitHub image integration** - Proper nested directory structure, descriptive captions

### Essential Vocabulary (Unified Definitions)

| Term | Meaning | Why It Matters |
|------|---------|---|
| **Teaching Obligation** | When you learn, you inherit duty to teach others correctly. Knowledge compounds across generations. | Guides outlast their creators. Accuracy matters for future users. |
| **Mise en Place** | Professional discipline: prep before service gets chaotic. Applied to knowledge work: complete steps before execution. | System integrity depends on process adherence. |
| **Interconnection** | Everything relates to everything. Guides show HOW. | Teaching understanding (not procedures) reveals connections that persist across tech changes. |
| **Enhanced Format** | Guides go beyond "how to use" to "why it works and what connections exist." | Transforms procedural documentation into deep understanding. |
| **Verification/Flagging** | Technical claims are verified against official docs or marked with ⚠️ if uncertain. | Wrong specs multiply across generations—accuracy is non-negotiable. |
| **Holistic vs. Tactical** | Holistic: maintain system integrity for ALL future work. Tactical: complete this task efficiently. | Choose holistic thinking. Shortcuts degrade the entire system. |

### Module Classifications (Choose One)

Your guide classification determines required sections and patch count:

| Classification | Examples | Required Patches | Focus |
|---|---|---|---|
| **Utility (2-3)** | Mixers, VCAs, Clocks | 2-3 | Technical operation, system integration |
| **Creative (4-5)** | Oscillators, Filters, Drums | 4-5 | Musical exploration, sound design |
| **Multi-Function (4-5)** | Disting, MetaModule, Hermod+ | 4-5 | Functional breadth, practical guidance |
| **Complete Synthesizer (4-5)** | Desktop synths, grooveboxes | 4-5 | Studio integration, performance |
| **Studio Equipment (3-4)** | Interfaces, processors | 3-4 | Workflow integration, professional techniques |

---

## Your Workflow: By Process Stage

### **Stage 1: Plan Your Work**

**What you decide here:**
- Is this a new guide or enhancement?
- Which module classification applies?
- How many patches will you create?
- What compliance requirements apply?

**Your reference checklist:**

- [ ] **Module classification identified** - Utility/Creative/Multi-Function/Complete Synth/Studio Equipment
- [ ] **Required patches determined** - 2-3, 3-4, or 4-5 patches based on classification
- [ ] **Existing guide read** (if enhancing) - Understand current state before planning changes
- [ ] **Required sections listed** - Quick Start, Essential Parameters, Patch Examples, Common Use Cases, Troubleshooting, Pairs Well With
- [ ] **Enhanced format alternatives planned** - Budget/Premium/Different character for each patch
- [ ] **GitHub images located/planned** - Proper nested directory structure (`modular/images/manufacturer/module_name/`)
- [ ] **Technical claims identified** - Which specs need verification vs. flagging

**When to read what:**
- New guide? → Read `guide_creation_framework.md` "Module Classifications & Requirements" section
- Enhancing? → Read `guide_enhancement_pattern.md` "Enhancement Pattern" section for methodology

---

### **Stage 2: Execute Enhancement**

**Your actual working process:**

**Step 1: Complete the Workflow Checklist** (from `workflow_checklist.md`)
- File analysis (current state, change scope, efficiency estimation)
- Pre-execution verification (requirements check, success criteria)
- User confirmation (show checklist, get approval before proceeding)

**Step 2: Know Your Enhancement Approach**

**For targeted edits (most work):**
- Use `edit_file` function calls (surgical precision, shows exactly what changed)
- Add one section or fix at a time
- Create clear git diffs for review
- Teach correct patterns to Future Claude

**NOT:** Avoid `write_file` rewrites unless:
- Creating completely new guides from scratch
- File is fundamentally broken
- User explicitly approves complete rewrite

**Step 3: Follow the WHY Approach** (from `guide_enhancement_pattern.md`)

For every significant feature or section, explain:
1. **What it does** (basic description)
2. **Why it exists** (design rationale)
3. **How it works technically** (mechanism)
4. **When to use it** (musical context)
5. **What goes wrong** (common mistakes)

**Step 4: Add Missing Sections**

Check your guide has:
- [ ] **Why This Instrument Excels** - Philosophy + practical benefits + magic (emotional essence)
- [ ] **Common Mistakes** - 3-5 issues with first-person frustrated quotes as headings, WHY explanations
- [ ] **Pattern Recognition** - Root causes that explain 90% of issues
- [ ] **Enhanced Format Alternatives** - Budget/Premium/Different character for ALL patches
- [ ] **Learning Objectives** - Each patch states what transferable principles are taught
- [ ] **GitHub images** - Proper integration with descriptive captions

**Step 5: Verify Technical Accuracy**

Technical claims that need verification (mark with ⚠️ if uncertain):
- Voltage ranges (e.g., "-5V to +5V")
- Timing specs (e.g., "500ms")
- Firmware features (e.g., "requires v1.1+")
- Compatibility specs (e.g., "32GB SD maximum")
- Specific knob positions

Safe to include without verification:
- Conceptual explanations
- General synthesis principles
- Common issues
- Musical context

**When to read what:**
- Need detailed techniques? → `guide_enhancement_pattern.md` "Specific Enhancement Areas" and "Examples from Enhanced Guides"
- Need to understand WHY approach? → `guide_enhancement_pattern.md` "Core Philosophy" section
- Need verification guidance? → `guide_enhancement_pattern.md` "Quality Checklist: Technical Accuracy Requirements"

---

### **Stage 3: Verify Compliance**

**Before considering a guide "complete," verify:**

#### **Content Requirements**
- [ ] Every significant feature has WHY explanation (not just WHAT)
- [ ] "Common Mistakes" section with 3-5 issues
- [ ] Each mistake includes WHY it happens
- [ ] "Pattern Recognition" identifies root causes
- [ ] "Why This Instrument Excels" section exists
- [ ] Learning objectives explicit in all patches

#### **Technical Accuracy**
- [ ] All voltage ranges verified or flagged with ⚠️
- [ ] Firmware features confirmed or flagged
- [ ] Timing specs checked or flagged
- [ ] Compatibility claims verified or flagged
- [ ] Manufacturer terminology used correctly
- [ ] No unverified numerical specifications

#### **Framework Compliance (Mandatory - ALL Items)**
- [ ] **GitHub images** - Present with proper URL format and descriptive captions
- [ ] **Enhanced alternatives** - In ALL patches (budget/premium/different character)
- [ ] **Terminology** - "Advanced" not "Phase 2" throughout entire guide
- [ ] **Required sections** - Complete per module classification
- [ ] **Interface accuracy** - Jack names verified against official manuals
- [ ] **Language standards** - Circuit-based descriptions, exact manufacturer terminology
- [ ] **Visual standards** - Signal coding (🔴 Audio │ 🔵 CV │ 🟡 Gate), ASCII symbols
- [ ] **Educational progression** - Clear learning objectives and milestones
- [ ] **Cross-references** - Links to other guides functional
- [ ] **Historical context** - Included when educationally valuable, properly integrated

**When to read what:**
- Need full compliance checklist? → `guide_creation_framework.md` "Framework Compliance Verification"
- Need quality standards? → `guide_enhancement_pattern.md` "Quality Checklist"
- Need to understand why each requirement matters? → Both docs have rationale

---

### **Stage 4: Commit & Record**

**Commit Guidelines:**

**Automatic commits (no approval needed):**
- Single file edits
- Corrections and fixes
- Guide enhancements
- Routine updates

**Approval required:**
- Framework changes
- Multiple file operations
- New patterns or major restructures

**Commit message format:**
```
[Module Name]: [What changed and why]

Changes:
- Added [section] with [specific content]
- Fixed [issue] to [improve what]
- Verified [specifications] against [source]

Compliance:
- Framework requirement: [which requirement completed]
- Verified against: [manual/documentation]
```

**Documentation:**

Record in `accountability_tracking.md`:
- What was completed
- Function calls used vs. estimated
- Efficiency analysis
- Framework compliance status
- Verification results

**When to read what:**
- Need commit best practices? → `workflow_checklist.md` "Repository Updates"
- Need tracking guidance? → `accountability_tracking.md`

---

## Quick Reference: Consolidated Checklists & Tools

### **Pre-Execution Workflow Checklist (Use This Every Session)**

**File Analysis:**
- [ ] Current state understood (lines, type, format, sections)
- [ ] Change scope defined (operation type, specific changes, reason for each)
- [ ] Efficiency estimated (expected calls + justification)

**Pre-Execution Verification:**
- [ ] User instructions understood
- [ ] File analyzed
- [ ] Changes planned specifically
- [ ] Efficiency target set

**Execution Authorization:**
- [ ] Checklist shown to user
- [ ] Explicit approval obtained
- [ ] Ready to proceed

**After Execution:**
- [ ] Record actual function calls used
- [ ] Document actual changes made
- [ ] Verify success criteria met
- [ ] Update accountability tracker

### **Framework Compliance Checklist (Critical - All Items)**

**Structure:**
- [ ] Module classification selected
- [ ] Required sections for classification included
- [ ] All patches have learning objectives
- [ ] Enhanced alternatives in every patch

**Content:**
- [ ] WHY explanations throughout (not just WHAT)
- [ ] Common Mistakes with 3-5 issues
- [ ] Pattern Recognition section identifies root causes
- [ ] Why This Instrument Excels section present

**Technical:**
- [ ] Voltage ranges verified or ⚠️ flagged
- [ ] Firmware features confirmed or ⚠️ flagged
- [ ] Timing specs verified or ⚠️ flagged
- [ ] Interface names verified against manuals
- [ ] Manufacturer terminology exact

**Presentation:**
- [ ] GitHub images integrated properly
- [ ] Signal coding used (🔴 Audio │ 🔵 CV │ 🟡 Gate)
- [ ] ASCII symbols consistent
- [ ] Terminology "Advanced" not "Phase 2"
- [ ] Cross-references functional

### **Decision Trees: Which Path Do I Take?**

**Should I create a new guide or enhance an existing one?**
```
Does a guide already exist for this module?
├─ Yes → Enhance it (start with Stage 2)
└─ No → Create new (start with Stage 1)
```

**Is this feature complicated enough to deserve its own section?**
```
Does it need more than one sentence to explain WHY it exists?
├─ Yes → Give it its own section with WHY/WHAT/HOW/WHEN/WHAT GOES WRONG
└─ No → Include in Essential Parameters with brief explanation
```

**Should I create a "Common Mistakes" section?**
```
Do users ask questions about this module?
├─ Yes (or: is it a creative/complex module?) → Comprehensive section with 3-5 issues
└─ No (utility module with single function?) → Minimal troubleshooting
```

**Do I need an "Interconnection Teaching" section?**
```
Does this module teach synthesis principles that appear elsewhere?
├─ Yes → Add interconnection teaching throughout
└─ No (very specialized module?) → Still include where it naturally appears
```

**Should I include Historical Context?**
```
Is the history educationally valuable?
├─ Yes (influential design, milestone module) → 2-3 paragraphs integrated into existing sections
└─ No (standard utility, recent design) → Skip it
```

**Enhanced Alternatives: Budget or Premium?**
```
Is this an expensive module?
├─ Yes → Include Budget alternative (under $800)
└─ No → Still include Budget if possible for accessibility

Are there modules with fundamentally different approaches?
├─ Yes → Include Different Character option
└─ No → Include Premium option for feature comparison
```

---

## Deep Reference: When to Read Specialist Documents

### **`guide_creation_framework.md` - Read This For:**

**Architecture and Requirements**
- Module classifications and what each requires
- Content structure details and required sections
- Synthesizer-specific framework enhancements
- Visual standards (diagrams, signal coding, image integration)
- Language & terminology standards
- Historical context guidelines
- Framework application workflow

**When to reference:**
- Creating a new guide (understand what you're building)
- Checking compliance (have I met all requirements?)
- Making visual diagrams (correct formatting)
- Deciding on historical context (is it appropriate?)

**Key sections for different scenarios:**
- New synthesizer guide? → "Synthesizer-Specific Framework Enhancements"
- Utility module? → "Utility Modules (2-3 Patches)" in Module Classifications
- Multi-function module? → "Multi-Function Modules (4-5 Patches)"
- Need visual standards? → "Synthesizer-Specific Visual Standards"

---

### **`guide_enhancement_pattern.md` - Read This For:**

**The "WHY" Approach and Specific Techniques**
- Core philosophy (transform from "HOW" to "WHY")
- Interconnection teaching methodology (how to identify and teach it)
- Specific enhancement areas (technical features, patchbays, workflows)
- Quality checklist details
- Anti-patterns to avoid
- Examples from successfully enhanced guides
- Voice and tone guidance

**When to reference:**
- Enhancing an existing guide (understand the methodology)
- Adding WHY explanations (don't know where to start?)
- Teaching interconnections (how do I find them?)
- Stuck or uncertain (see anti-patterns section)

**Key sections for different scenarios:**
- Need WHY explanations? → "Step 1: Identify Missing WHY Explanations"
- Adding Common Mistakes? → "Step 2: Add Common Mistakes Section"
- Teaching interconnection? → "Interconnection Teaching: The Core Differentiator"
- Need examples? → "Examples from Enhanced Guides" (DFAM, Pulsar-23, SP-404, Astroid)

---

### **`workflow_checklist.md` - Read This For:**

**Discipline and Process**
- Pre-execution checklist (mandatory before any file operation)
- File analysis requirements
- Efficiency estimation standards
- Execution authorization process
- Repository commit guidelines

**When to reference:**
- Before any file operation (non-negotiable)
- Estimating function calls (understand the standards)
- Questions about process discipline (why mise en place matters)
- Commit guidelines (what should my commit message say?)

---

### **`verification_strategy.md` - Read This For:**

**Technical Verification Details**
- How to verify specific claims
- What needs verification vs. what doesn't
- Flagging format and standards
- Sources for different claim types
- When to ask for help vs. proceeding

**When to reference:**
- Unsure whether a technical claim needs verification
- Multiple conflicting sources (how to resolve?)
- Need to add ⚠️ flags (proper format)

---

### **`accountability_tracking.md` - Read This For:**

**Recording and Learning**
- How to record completed work
- Efficiency analysis (estimate vs. actual)
- Pattern identification (what works, what doesn't?)
- Framework updates needed

**When to reference:**
- Finishing a guide (how to document it?)
- Analyzing efficiency (why did this take longer/shorter?)
- Learning from patterns (what patterns emerge?)

---

## System Summary

**Three Core Documents:**
1. **`guide_creation_framework.md`** - What guides must be (architecture + requirements)
2. **`guide_enhancement_pattern.md`** - How to build them (methodology + techniques)
3. **This document** - How to navigate the system (routing + consolidation)

**Three Supporting Documents:**
- **`workflow_checklist.md`** - Process discipline (must complete before file operations)
- **`verification_strategy.md`** - Technical accuracy (how to verify claims)
- **`accountability_tracking.md`** - Recording and learning (what to document)

**Your Process:**
1. Know what you're doing (new guide or enhancement?)
2. Plan your work (complete the pre-execution checklist)
3. Execute with methodology (reference appropriate specialist docs)
4. Verify compliance (use compliance checklist - all items)
5. Commit and record (document what changed and why)

**Key Principle:**
Never skip the workflow checklist. It's your mise en place—it maintains system integrity across all work. Process adherence teaches correct patterns to Future Claude.

---

*Last updated: November 2025*
*Integrates with: guide_creation_framework.md, guide_enhancement_pattern.md, workflow_checklist.md, verification_strategy.md, accountability_tracking.md*
