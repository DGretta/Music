# Guide Creation Framework

**Essential requirements for systematic guide creation**

---

## **Module Classifications & Requirements**

### **Utility Modules (2-3 Patches):**
- **What:** Signal routing, level control, interface modules (Mixers, VCAs, Clocks)
- **Structure:** Basic → Advanced (→ Expert for complex utilities)
- **Focus:** Technical operation, system integration

### **Creative Modules (4-5 Patches):**
- **What:** Sound generation, musical control modules (Oscillators, Filters, Effects, Drums)
- **Structure:** Basic → Intermediate → Advanced → Expert
- **Focus:** Musical exploration, sound design, performance

### **Multi-Function Modules (4-5 Patches):**
- **What:** Platform modules with 10+ modes (Disting mk4, MetaModule, Hermod+)
- **Structure:** Basic → Intermediate → Advanced → Expert
- **Focus:** Demonstrate functional breadth with practical guidance

### **Complete Synthesizers (4-5 Patches):**
- **What:** Self-contained instruments (Desktop synths, keyboard synths, grooveboxes)
- **Structure:** Basic → Intermediate → Advanced → Expert
- **Focus:** Studio integration, performance techniques, sound design mastery

### **Studio Equipment (3-4 Patches):**
- **What:** Recording/production gear (Interfaces, processors, controllers)
- **Structure:** Basic → Intermediate → Advanced (→ Expert for complex gear)
- **Focus:** Workflow integration, professional techniques

**Classification Decision:** Primary function + creative potential + parameter complexity

---

## **Synthesizer-Specific Framework Enhancements**

### **Content Structure for Complete Synthesizers**

**Required Sections (Adapted from Modular Standards):**
1. **Quick Start** - First sound in 5 minutes with preset recommendation
2. **Essential Parameters** - Core synthesis sections with signal flow diagram
3. **What This Unlocks From Your Existing Gear** - Studio/performance integration focus
4. **Patch Examples** - 4-5 programming tutorials with similar synthesizer alternatives
5. **Advanced Techniques** - Instrument-specific features (modulation matrix, alternative tunings, etc.)
6. **Common Use Cases** - Studio, live, sound design, learning applications
7. **Historical Context** - When educationally valuable (vintage reissues, influential designs)
8. **Troubleshooting** - Synthesizer-specific issues (calibration, MIDI, performance)
9. **Pairs Well With** - Studio gear, controllers, processing equipment

### **Synthesizer Alternative Format**

**Enhanced Format for Complete Synthesizers:**
```
**Main Example:** Take 5 hard sync lead technique
**Similar Synthesizer Options:**
- **Budget:** Behringer DeepMind 6, Korg Minilogue XD
- **Different character:** Moog Subsequent 37 (Moog filter), Novation Peak (digital algorithms)
- **Premium:** Sequential Prophet Rev2, Moog One
```

**Selection Criteria:**
- **Budget tier:** Under $800, accessible alternatives with similar capabilities
- **Different character:** Different synthesis approach (analog vs digital, different filter types)
- **Premium tier:** $1500+, flagship instruments with enhanced features

### **Studio Integration Focus**

**"What This Unlocks" for Synthesizers:**
- **MIDI Controllers:** Transform basic controllers into professional workstations
- **Audio Interfaces:** Add analog character to digital workflows
- **Expression Pedals:** Real-time performance control and filter sweeps
- **Hardware Sequencers:** Clock sync and bidirectional MIDI communication
- **Studio Effects:** External processing integration and auxiliary sends
- **Performance Setups:** Transform practice into professional performance rigs

### **Synthesizer-Specific Visual Standards**

**Internal Signal Flow Diagrams:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─OSCILLATORS─┐    ┌─FILTER──┐    ┌─AMPLIFIER─┐    ┌─EFFECTS─┐
│ OSC 1    ○──┼────┼─▶Cutoff │    │          │    │         │
│ OSC 2    ○──┼────┼─ Reso   ├────┼─▶VCA ○───┼────┼─▶Out ○──┼──🔴
│ Sub/Noise○──┼────┼─ Drive  │    │     ↑    │    │  ↑  ↑   │
└─────────────┘    └─────────┘    └─────┼────┘    └──┼──┼───┘
                                        │            │  │
                   ┌─MODULATION─────────┼────────────┘  │
                   │ LFO/ENV ○──────────┘               │
                   │ Mod Matrix ○───────────────────────┘ 🔵
                   └─────────────────────────────────────────┘
```

**Performance Control Integration:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─PERFORMANCE CONTROLS─┐    ┌─SYNTHESIZER─┐
│ Mod Wheel     ∼──────┼────┼─▶LFO Amount │  ∼ = Real-time control 🔵
│ Aftertouch    ∼──────┼────┼─▶Filter Cut │  
│ Expression    ∼──────┼────┼─▶Reverb Mix │  Performance expression 🔵
│ Sustain Pedal ∼──────┼────┼─▶Arp Hold   │
└──────────────────────┘    └─────────────┘
```

### **Synthesizer Programming Techniques**

**Essential Programming Skills:**
- **Two-oscillator fundamentals:** Detuning, sync, FM techniques
- **Filter envelope shaping:** Attack/decay/sustain/release relationships
- **Modulation matrix usage:** Advanced routing beyond front-panel controls
- **Performance integration:** Real-time expression techniques
- **Studio workflow:** MIDI integration, recording techniques

**Advanced Synthesizer Features:**
- **Alternative tunings:** Microtonal and historical temperaments
- **Unison/chord memory:** Monophonic stacking and chord triggering
- **Multi-timbral programming:** When applicable to specific instruments
- **External processing integration:** Auxiliary sends, effects loops

### **Educational Progression for Synthesizers**

**Basic Level:** Single-oscillator patches, basic filter sweeps, preset exploration
**Intermediate Level:** Multi-oscillator programming, envelope coordination, effects integration
**Advanced Level:** Modulation matrix, performance techniques, alternative tunings
**Expert Level:** Complex sound design, studio integration, advanced performance techniques

---

## **Content Structure & Quality**

### **Required Sections:**
1. **Quick Start** - 5-minute success path
2. **Essential Parameters** - Core controls with CV information
3. **Patch Examples** - Count per module classification above
4. **Common Use Cases** - Real-world applications
5. **Troubleshooting** - Common issues
6. **Pairs Well With** - Integration suggestions with alternatives
7. **What This Unlocks From Your Existing Gear** (Optional but Strongly Encouraged) - Include when module creates genuine new possibilities with commonly-owned equipment

### **"Existing Gear Integration" Section Guidelines:**
**Include this section when:**
- Module genuinely opens up integration possibilities with common existing gear
- There are specific, practical examples that would excite users about new workflows
- The connections aren't already obvious from the patch examples
- The integration actually enhances the module's utility (not random gear mentions)

**Examples of good fits:**
- Interface modules (Stomp, audio interfaces, MIDI converters) - unlock pedals, studio gear, controllers
- Utility modules with unique capabilities - clock dividers (unlock drum machines), sample & holds (unlock field recorders)
- Modules that bridge different signal types - envelope followers (unlock dynamic mics, instruments)

**Skip this section when:**
- Module function is self-contained (basic VCAs, simple LFOs)
- Integration possibilities are already covered in patch examples
- Would require forced content rather than genuine discovery

**Quality test:** Does this section make someone think "I never realized I could do that with equipment I already have!" If not, skip it.

### **Mandatory Framework Compliance Requirements:**
**Based on systematic testing findings (2025-09-22) - these gaps appeared in 100% of tested guides**

1. **GitHub Image Integration (MANDATORY):**
   - **Format:** `![Module Name](https://github.com/DGretta/Music/raw/main/modular/images/[module_name]/front_panel.jpg)`
   - **Caption:** Descriptive text about module interface and key elements
   - **Placement:** Immediately after title + tagline, before all content sections (provides immediate visual context)
   - **Non-negotiable:** Every guide must include proper GitHub image integration

2. **Enhanced Format Alternatives (MANDATORY - ALL PATCHES):**
   - **Required for EVERY patch:** Budget/Premium/Different character options
   - **Format:** Main Example + Alternative Options with specific module names
   - **Cannot be skipped:** Testing revealed systematic omission when not explicitly required
   - **All patches means ALL patches:** No exceptions for any patch in any guide

### **Quality Requirements:**
- **Interface accuracy** - Verify jack names against `comprehensive_interface_database.md`
- **No fabricated terminology** - Use actual module language
- **Educational progression** - Clear learning objectives
- **Module-specific language** - Honor manufacturer philosophy

---

## **Enhanced Format Standards**

### **Implementation Examples:**

**Modular Module Guide:**
```
**Main Example:** Maths Ch1 → filter cutoff (complex modulation)
**Alternative Options:**
- **Budget:** 2HP LFO, Doepfer A-143-3
- **Different character:** Batumi geometric patterns, Ochd organic breathing  
- **Premium:** Intellijel Quadrax complex envelopes
```

**Complete Synthesizer Guide:**
```
**Main Example:** Take 5 hard sync lead technique
**Similar Synthesizer Options:**
- **Budget:** Arturia MicroBrute, Korg MS-20 Mini
- **Different character:** Moog Matriarch (Moog sync), Novation Peak (digital sync)
- **Premium:** Sequential Prophet Rev2, Moog One
```

**Studio Equipment Guide:**
```
**Main Example:** Focusrite Scarlett 2i2 direct recording setup
**Alternative Options:**
- **Budget:** Behringer U-Phoria UM2, PreSonus AudioBox USB 96
- **Different character:** MOTU M2 (enhanced monitoring), Zoom PodTrak P4 (podcast focus)
- **Premium:** Universal Audio Apollo Twin, RME Babyface Pro FS
```

### **Visual Standards:**
- **Signal coding:** 🔴 Audio │ 🔵 CV │ 🟡 Gate
- **ASCII symbols:** ○ = output, ◀ = input, ── = audio, ║ = CV
- **Module boxes:** Standard format (see `visual_communication_standards.md` for details)
- **GitHub images:** `![Module](https://github.com/DGretta/Music/raw/main/modular/images/[module]/front_panel.jpg)`

---

## **Language & Terminology Standards**

### **Required Language:**
- **Circuit-based descriptions** - No AI/intelligence references
- **"Advanced"** not "Phase 2" throughout all guides
- **Exact manufacturer terminology** - Honor module-specific language
- **Manufacturer + Module naming** - Always use "Manufacturer Module" format for consistency and searchability

**Module Naming Standards:**
- ✅ **Correct:** "Intellijel Stomp", "4ms Listen IO", "Make Noise Maths", "Erica Synths Pico Voice"
- ❌ **Incorrect:** "Stomp", "Listen IO", "Maths", "Pico Voice" (manufacturer missing)
- **Rationale:** Searchability (users look under manufacturer sections), clarity (multiple manufacturers may have similar names), framework consistency

**Naming Guidelines:**
- **First reference:** Always include full manufacturer name
- **Cross-references:** Always use full manufacturer + module name for guide linking
- **Alternative suggestions:** Include manufacturer names in module alternatives

### **Progression Terminology:**
- **Patches:** Basic → Intermediate → Advanced → Expert
- **Integration:** "Advanced synergies" for multi-module coordination
- **System Design:** "Advanced integration" for complex networks

---

## **Historical Context (When Appropriate)**

### **Include Historical Context For:**
- **Historical significance** - Major synthesis milestones
- **Technical innovation** - Techniques that influenced the field
- **Cultural impact** - Widely adopted, influenced genres
- **Educational value** - Helps understand module importance

### **Examples:** Korg MS-20, Make Noise Maths, classic Moog modules, Buchla designs

### **Treatment:**
- **Factual information** about development/impact
- **2-3 paragraphs maximum**
- **Integrated into existing sections** not separate section
- **Educational focus** - module's place in synthesis history

---

## **Workflow Integration**

### **Mandatory Process:**
1. **Complete workflow checklist** from `workflow_checklist.md` before ANY guide work
2. **Show checklist to user** and get explicit approval
3. **Follow efficiency standards:** 1-2 function calls maximum for most operations
4. **Record performance** in `accountability_tracking.md`

### **Never:**
- Bypass workflow checklist
- Start operations without user approval  
- Exceed promised function call count
- Skip accountability documentation

---

## **Framework Application**

### **For New Guides:**
1. Determine module classification
2. Complete workflow checklist
3. Single comprehensive write with mandatory compliance elements
4. **Verify framework compliance** using systematic testing criteria
5. Document results

### **For Guide Updates:**
1. Read entire existing guide
2. Complete workflow checklist for specific changes
3. **Check for systematic gaps** (GitHub image + enhanced format alternatives)
4. Targeted edits for small changes OR comprehensive compliance update
5. Record efficiency

### **Framework Compliance Verification (Enhanced 2025-09-22):**
**Comprehensive verification checklist - systematic testing revealed tunnel vision failures when verification was incomplete**

**Mandatory Checklist (ALL Requirements):**
- [ ] **GitHub image integration present** with proper URL format and descriptive caption
- [ ] **Enhanced format alternatives in ALL patches** (budget/premium/different character)
- [ ] **Terminology consistency** - "Advanced" not "Phase 2" throughout entire guide
- [ ] **Required sections complete** per module classification (Quick Start, Essential Parameters, etc.)
- [ ] **Interface accuracy verified** against official manuals
- [ ] **Language standards applied** - circuit-based descriptions, exact manufacturer terminology
- [ ] **Visual standards compliance** - signal coding, ASCII symbols, module boxes
- [ ] **Historical context appropriateness** - included when educationally valuable, properly integrated
- [ ] **Cross-references functional** - links to other guides work correctly
- [ ] **Educational progression clear** - learning objectives and skill development milestones

**Testing Evidence & Tunnel Vision Prevention:**
- **Instruo Arbhar guide:** Missing image + enhanced alternatives + terminology violations
- **Instruo Cs-L guide:** Missing image + enhanced alternatives + terminology violations  
- **Pattern:** Tunnel vision on specific gaps missed comprehensive framework verification
- **Solution:** Complete checklist prevents partial compliance claims
- **Critical understanding:** "Framework compliance" means ALL requirements, not just targeted fixes

### **Emergency Protocols:**
- **File operation failure:** Stop immediately, diagnose, ask for guidance
- **Efficiency targets missed:** Document actual performance, analyze causes
- **Quality issues:** Address using quality system protocols
- **Framework compliance gaps:** Use systematic testing criteria to identify and resolve

---

**This framework provides essential requirements for systematic guide creation while integrating with established accountability systems.**

---

*Integrates with: `workflow_checklist.md`, `accountability_tracking.md`, `quality_system.md`, `visual_communication_standards.md`, `comprehensive_interface_database.md`*