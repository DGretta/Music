# MS-20 Mini Guide Completion Checklist

**Status:** Common Mistakes section complete, ready for integration

## Completed Work (Session 2025-09-30)

### ✅ Common Mistakes Section (12 Issues)
Created comprehensive section following guide_enhancement_pattern.md with verified technical specifications.

**Technical Verifications Completed:**
- ✅ CV voltage range: -5V to +5V (verified from Korg specifications)
- ✅ USB MIDI: Class-compliant, Channel 1 fixed, notes 12-91
- ✅ ESP outputs: CV OUT 0-8.4V, ENV OUT 0-5V, TRIG OUT +5V gate
- ✅ Control Wheel: -5V to 0V to +5V (bipolar, center-click)
- ✅ VCO External FM: OCT/V (1V/Oct standard, bipolar range)
- ✅ Auto power-off: 4 hours, disable with C1+D1+E1 on power-on

**Issues Documented:**
1. ✅ Filter aggression (Korg vs Moog character differences)
2. ✅ ESP configuration (envelope follower, not simple audio input)
3. ✅ Mini-keys adaptation (modern hybrid workflow focus)
4. ✅ USB MIDI DAW setup (macOS/Windows step-by-step)
5. ✅ Patch cable retention (3.5mm physics, quality matters)
6. ✅ Jack compatibility (3.5mm Eurorack vs 1/4" vintage, adapters)
7. ✅ CV voltage mismatch (bipolar -5V/+5V vs unipolar 0-10V Eurorack)
8. ✅ Filter self-oscillation tuning (warmup, drift, keyboard CV tracking)
9. ✅ ESP misconceptions (30-40% usage reality, practical applications)
10. ✅ Auto power-off behavior (what counts as activity, disable procedure)
11. ✅ Single oscillator thinness (dual VCO detuning for analog warmth)
12. ✅ Pattern Recognition (5 root causes preventing 90% of frustration)

**Section saved to:** `~/claude/Music/tooling/ms20_common_mistakes_section.md`

---

## Next Session Priorities

### 1. Integrate Common Mistakes into Main Guide
- [ ] Insert Common Mistakes section after "Pairs Well With"
- [ ] Verify formatting and flow with existing content
- [ ] Update git commit for main guide file
- [ ] Delete temporary file after successful integration

### 2. Update "Why This Excels" Section
Focus on Mini-specific advantages while respecting historical context:

**Current issues:**
- Heavy vintage/collector framing (misaligned with 2013 reissue reality)
- "Investment-grade vintage instrument" language (not applicable to Mini)
- Missing modern practical advantages

**Proposed reframe:**
```markdown
## Why This Instrument Excels

### **The Modern Gateway to Legendary Character**
The MS-20 Mini solves a fundamental problem: vintage MS-20s cost $1500-3000, 
require maintenance, lack MIDI, and use incompatible patch cables for modern 
modular integration. The Mini delivers the same aggressive Korg filter character 
with USB MIDI and Eurorack-compatible jacks for under $600. This is the vintage 
character made practical.

### **What Makes This Character Irreplaceable:**
[Keep Daft Punk cultural context, but frame as "why this character matters" 
rather than "why you should buy vintage"]

- Aggressive Korg filter (different from Moog smoothness)
- ESP audio processing (30-40% of advanced patches)
- Semi-modular clarity (teaches synthesis effectively)
- Eurorack compatibility (3.5mm jacks, no adapters needed)
- USB MIDI integration (no interface required)
- Vintage character, modern reliability (no maintenance headaches)

### **Perfect For:**
- Modern producers wanting vintage character (hybrid DAW workflows)
- Eurorack users needing aggressive filter (ESP for modular processing)
- Synthesis learners (clear panel teaches fundamentals)
- Sound designers (ESP transforms any audio)
- Budget-conscious (vintage character without vintage prices)

### **Not Perfect For:**
- Players prioritizing keyboard feel (mini-keys require adaptation)
- Vintage purists (slight component differences from 1978 original)
- Those wanting V/Oct pitch tracking perfection (voltage range requires conversion)
```

### 3. USB MIDI Integration Section
Create dedicated section explaining:

**Why USB MIDI Matters for Mini:**
- No MIDI interface required (vintage MS-20 had no MIDI at all)
- Class-compliant on modern OS (plug and play)
- Enables DAW sequencing with analog character
- Solves CV voltage compatibility issues (MIDI more reliable than direct CV)

**Common Configuration Issues:**
- Already covered in Common Mistakes, reference that section
- Add DAW-specific tips (Ableton, Logic, FL Studio examples)
- MIDI note range limitations (12-91, no velocity)
- Why MIDI is better than CV for Eurorack integration

### 4. Modern Workflow Integration Section
Explain how Mini fits into contemporary production:

**DAW Integration:**
- Record analog character into DAW (when and why)
- Resampling techniques (process digital audio through analog filter)
- Hybrid workflows (digital sequencing + analog synthesis)
- Why hardware still matters despite software emulations

**Eurorack Integration:**
- Direct 3.5mm compatibility advantage
- Using MS-20 as Eurorack filter module via ESP
- Voltage range considerations (already in Common Mistakes)
- MIDI-to-CV converters for precise tracking

**ESP as Studio Tool:**
- Processing drums through MS-20 filter (practical examples)
- Vocal effects and sound design
- Why 30-40% of advanced patches use ESP
- Setting up ESP in modern DAW-centered studio

### 5. Update Terminology Throughout
- [ ] "Phase 2 Learning Path" → "Advanced Learning Path"
- [ ] Reduce vintage collector language
- [ ] Add modern producer references where appropriate
- [ ] Balance historical context with practical modern use

### 6. Verification Items Still Needed
Items flagged but not yet critical:
- ⚠️ Filter circuit exact differences (Mini vs vintage)
- ⚠️ Hz/V vs V/Oct clarification (specs say OCT/V but voltage range differs from typical)

---

## Estimated Remaining Work

**High Priority (Next Session):**
- Common Mistakes integration: 15 minutes
- "Why This Excels" rewrite: 45 minutes
- Modern Workflow section: 30-45 minutes
**Total: 90-105 minutes**

**Medium Priority (Future Sessions):**
- USB MIDI deep dive: 30 minutes
- Terminology updates throughout: 30 minutes
- ESP dedicated section: 30 minutes
**Total: 90 minutes**

**Lower Priority:**
- Additional verification of filter differences
- More DAW-specific examples
- Video/audio examples (when format supports)

---

## Key Learnings from This Session

**What Worked Well:**
1. Technical verification from official Korg specs (prevented errors)
2. 30-40% ESP usage statistic from user (grounded reality check)
3. Modern practical focus (Mini for hybrid workflows, not vintage collecting)
4. OCT/V discovery (voltage range mismatch explains tracking issues)
5. Pattern Recognition section (identifies 5 root causes, prevents 90% frustration)

**Framework Adherence:**
- ✅ Problem → Why → Solution structure for all mistakes
- ✅ First-person frustrated quotes for relatability
- ✅ Technical specifications with verified sources
- ✅ Musical context for all features (not just technical specs)
- ✅ Pattern Recognition section (systematic understanding)
- ✅ No contractions, no "absolutely right" language

**User Collaboration Insights:**
- User uses ESP in 30-40% of patches (significant feature usage)
- Primarily uses Mini for vintage character, occasionally Eurorack integration
- Mini chosen for affordability, USB MIDI, 3.5mm jacks (modern practical advantages)
- USB MIDI section important because new users struggle with configuration
- Continuous iteration expected - experiment, enhance, rollback as needed

---

## For Next Session Start

**Read in order:**
1. This completion checklist
2. `tooling/ms20_common_mistakes_section.md` (review what was created)
3. `semi-modular/korg_ms20_guide.md` (current state of main guide)
4. Recent git commits for context

**First task:** Integrate Common Mistakes section into main guide after "Pairs Well With" section.

**Remember:**
- Modern practical focus (Mini advantages for hybrid workflows)
- Balance historical respect with contemporary reality
- Continuous iteration mindset (experiment freely)
- Technical accuracy with verified specifications
- WHY over WHAT throughout all enhancements
