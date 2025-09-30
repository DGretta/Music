# Session Continuity Guide for Claude

**Purpose:** Help future Claude instances (or other collaborators) quickly understand this project and work effectively.

---

## First Steps in Any Session

### 1. Read These Documents (in order):
1. **`tooling/project_philosophy.md`** - WHY this project exists, what it really is
2. **`tooling/framework_overview.md`** - Standards, terminology, structure
3. **`tooling/guide_enhancement_pattern.md`** - HOW to enhance guides systematically

### 2. Check Recent Work:
```bash
git log --oneline -20
```
Look for:
- What was worked on last
- What's in progress
- Any completion checklists created

### 3. Ask Before Assuming:
- "What would you like to work on today?"
- "Which instrument jumped out when you walked by?"
- Don't assume priorities

---

## Understanding the Creator

### Communication Style
- **Direct and efficient** - "proceed, please" means execute
- **Specific feedback** - corrections are precise, praise is earned
- **No assumptions** - "Do not assume my intent"
- **Questions are information-seeking** - not calls to action

### Key Rules
1. Ask questions before searching for artifacts
2. Always use documented workflows
3. Close-ended questions = information only
4. Read framework docs every session

### What They Have
- **ALL the gear being documented** (and much more - ~500 instruments)
- **Deep technical knowledge** (paramedic, IT architect, chef backgrounds)
- **Cross-genre musical perspective** (house to drill to Marty Robbins)
- **Generational thinking** (lifetime to lifetime, geologic scales)

### What Drives Them
- **Daily creation imperative** ("I must create things, everyday")
- **Teaching children and mentees** (primary purpose of docs)
- **Systems thinking** (sees interconnections others miss)
- **Fundamental interconnectedness** (Douglas Adams principle)
- **Process over product** (creation itself is the point)

---

## Project Reality Check

### This Is Not:
- ❌ User manual collection
- ❌ Product marketing
- ❌ Quick reference cards
- ❌ Gear reviews
- ❌ Personal notes

### This Is:
- ✅ **Knowledge transmission architecture** for generations
- ✅ **Interconnection mapping** across 500+ instruments
- ✅ **Teaching understanding**, not just procedures
- ✅ **Living documentation** (always evolving)
- ✅ **Preserving methodology** across technology changes

### Scale Understanding:
- ~500 instruments to document (from gear tracking spreadsheet)
- Multiple major revisions per guide expected
- Generational timeframe (children, their children)
- Plain text for durability across tech changes

---

## The Enhancement Pattern

### Core Transformation:
**Before:** "HOW to press buttons"
**After:** "WHY it works this way and HOW to use it effectively"

### Every Guide Needs:

**1. Why This Instrument Excels**
- Design philosophy
- Innovation explanation
- Practical benefits
- Perfect for [user types]
- The Magic (emotional/artistic essence)

**2. Common Mistakes and How to Avoid Them**
- 8-12 issues minimum
- First-person frustrated quotes as headings
- **Problem** → **Why** → **Solution** structure
- Pattern Recognition section at end

**3. Patchbay/Connection Explanations** (if applicable)
- Why each jack exists
- What goes wrong commonly
- Musical applications
- Integration potential

**4. Technical Accuracy**
- ⚠️ Flag uncertain specifications
- Verify voltage ranges, timing specs, resistance values
- Document verification sources
- Don't make unfounded claims

**5. Advanced Learning Path** (not "Phase 2")
- Framework terminology compliance
- Progressive skill building
- Cross-instrument learning

### See `guide_enhancement_pattern.md` for complete details.

---

## Working With Technical Specifications

### What Needs Verification:
- ⚠️ Exact voltage ranges (e.g., "-5V to +5V")
- ⚠️ Timing thresholds (e.g., "500ms")
- ⚠️ Firmware features (e.g., "requires v1.1+")
- ⚠️ Compatibility specs (e.g., "32GB SD max")
- ⚠️ Resistance values (e.g., "1kΩ to 100kΩ")
- ⚠️ Specific knob positions (e.g., "30-50ms at 10-11 o'clock")

### What's Safe:
- ✅ Conceptual explanations (WHY three envelopes matter)
- ✅ General synthesis principles (LP filters remove highs)
- ✅ Standard protocols (1V/octave is modular standard)
- ✅ Common issues (loose clips create noise)
- ✅ Musical context (use for bass, leads, pads)

### Flag Format:
```markdown
⚠️ **Technical Specification - Verify:** Mother-32 uses bipolar 
CV range (-5V to +5V) for most inputs. [Verify in manual p.XX]
```

---

## Repetition Is Good

**Don't over-optimize with cross-references.**

**Why repeat core concepts:**
1. Each guide must work independently (generational use)
2. Repetition aids learning
3. Shows how principles manifest across instruments
4. Reveals interconnections through parallel structure

**Example:** Explain what 1V/octave means in EVERY modular guide, don't just say "see Mother-32 guide for CV explanation."

---

## Common Patterns Across Sessions

### Session Flow:
1. Creator identifies next instrument ("one jumped out")
2. Read existing guide, identify gaps
3. Discuss enhancement approach
4. Execute enhancements following pattern
5. Verify technical claims
6. Commit with descriptive messages
7. Create completion checklist if needed

### When to Stop:
- Token budget running low (~30k remaining)
- Natural completion point reached
- Creator satisfaction achieved
- Verification needed before continuing

### What to Document:
- Completion checklists for partial work
- Verification items flagged
- Pattern improvements discovered
- Framework updates needed

---

## Completed Guides (as of 2025-01-30)

**Fully Enhanced:**
1. ✅ **DFAM** (Moog) - Percussion synthesis, 10 common mistakes
2. ✅ **Pulsar-23** (SOMA) - Organismic philosophy, SHAOS, 12 mistakes
3. ✅ **SP-404 MKII** (Roland) - Hip-hop culture, merged duplicates, 10 mistakes
4. ✅ **Mother-32** (Moog) - Sequencer, bipolar voltage (-5V/+5V), 14 mistakes
5. ✅ **EP-1320** (Teenage Engineering) - Medieval theme, 11 mistakes

**In Progress:**
6. 🔄 **MS-20 Mini** (Korg) - Mini vs vintage distinction started
   - See `tooling/ms20_mini_completion_checklist.md`

---

## Key Learnings from Past Sessions

### User Corrections That Improved Process:

**SHAOS terminology** (Pulsar-23):
- Not "chaos generator" - it's SHAOS (Sample & Hold And Organismic Source)
- Manufacturer terminology matters

**Phase 2 → Advanced** (framework):
- Framework uses "Advanced" not "Phase 2"
- Consistency across all guides required

**Bipolar voltage** (Mother-32):
- User verified: -5V to +5V for all jacks except gate
- Eurorack standard is 0-10V (mismatch causes issues)

**Mini vs Vintage** (MS-20):
- User owns MS-20 Mini (2013), not vintage (1978)
- 86% scale, 3.5mm jacks, USB MIDI
- Guides must specify which version

### Pattern Improvements Discovered:

**Verification workflow added** (v1.1):
- Technical specs need verification flags
- Document sources in commits
- Create verification logs per guide

**Common Mistakes structure refined:**
- First-person frustrated quotes work best
- Problem → Why → Solution is clear
- Pattern Recognition section identifies root causes

**Why This Excels section format:**
- Philosophy subsection explains design thinking
- Innovation subsection shows what's new/different
- Practical Benefits subsection shows real-world value
- The Magic subsection captures emotional essence

---

## Git Workflow

### Commit Messages Should Include:
- What was enhanced
- Why it matters (interconnection, verification, etc.)
- Technical claims verified or flagged
- Next steps if incomplete

### Example Good Commit:
```
Enhance Mother-32 guide with bipolar voltage explanation

Added comprehensive patchbay WHY section explaining all 32 jacks.
Verified bipolar voltage range (-5V/+5V) per user confirmation.
Added 14 common mistakes with technical WHY explanations.

Flagged for future verification:
- Gate length timing specs (30-50ms claim)
- Oscillator calibration procedures
```

### Create Checklists When:
- Work is incomplete due to token limits
- Technical verification pending
- Multi-session work needed
- Hand-off to future session required

---

## Watch For These Issues

### Common Traps:

**Assuming generic gear:**
- Always check if it's a specific model (Mini vs vintage)
- Different years/versions may have different specs

**Over-confident technical claims:**
- When adding specific numbers, flag for verification
- User will verify against manuals
- Better to flag than to claim incorrectly

**Forgetting the philosophy:**
- Not writing user manuals - teaching interconnection
- Process over product
- Generational timeframe
- Understanding transfers, procedures don't

**Breaking pattern:**
- Follow guide_enhancement_pattern.md structure
- Use established terminology (Advanced not Phase 2)
- Maintain verification workflow

### Good Habits:

**Ask first:**
- "Which instrument would you like to work on?"
- "Should I proceed with [approach]?"
- "Would you like me to [action]?"

**Verify understanding:**
- "I noticed [issue] - should we [solution]?"
- "This seems like [interpretation] - is that correct?"
- "I'm uncertain about [technical detail] - can you verify?"

**Document thoroughly:**
- Completion checklists for partial work
- Verification flags for uncertain specs
- Pattern improvements discovered
- Framework updates needed

---

## Success Indicators

### You're Doing Well When:

- ✅ User says "that is really quite good" or "well done"
- ✅ Technical corrections are minor (terminology, not concepts)
- ✅ User asks you to proceed without further questions
- ✅ Completion checklists are clear and actionable
- ✅ Philosophy is reflected in the work

### You Need Adjustment When:

- ❌ User questions your data sources frequently
- ❌ Technical corrections are major (wrong specs)
- ❌ User redirects approach multiple times
- ❌ Documentation feels like user manuals
- ❌ Forgetting interconnection focus

---

## Emergency Reference

**If you only remember three things:**

1. **Read tooling/*.md files at session start** - philosophy, framework, pattern
2. **Ask before assuming** - priorities, approaches, technical claims
3. **Teach interconnection, not buttons** - WHY over WHAT, understanding over procedures

**If you only remember one thing:**

**Everything is connected.** Document accordingly.

---

## Token Management

### Typical Enhancement Costs:
- Small guide enhancement: 30-40k tokens
- Major guide enhancement: 60-80k tokens
- Full guide from scratch: 100k+ tokens
- Pattern documentation: 20-30k tokens

### Smart Stopping Points:
- ~30k tokens remaining: Wrap up current work
- ~20k tokens remaining: Create completion checklist
- ~10k tokens remaining: Commit and summarize

### Don't:
- Push to token limits without wrapping up
- Leave work uncommitted
- Skip completion checklists for partial work

---

## Contact Continuity

**The Creator:**
- Experienced across many domains
- Sees interconnections others miss
- Thinks on generational timescales
- Creates daily, teaches constantly
- Owns ~500 instruments (and builds studio furniture)

**The Project:**
- Living documentation for generations
- ~500 instruments to document
- Plain text for durability
- Always evolving
- Teaching method, not just facts

**The Philosophy:**
- Fundamental interconnectedness of all things
- Process over product
- Understanding over procedures
- Method allows all other things

---

*Read this document at the start of each session.*
*Read `project_philosophy.md` to understand the deeper purpose.*
*Read `guide_enhancement_pattern.md` to know HOW to work.*

*Then ask: "What jumped out today?"*
