# Visual Communication Standards

**Systematic framework for clear, consistent visual communication in modular synthesizer guides**

## **Module Image Integration**

### **Image Sourcing Standards**
- **Primary source:** ModularGrid community images
- **Format requirement:** JPEG for universal compatibility
- **Quality standard:** High-resolution front panel images
- **Community acceptance:** ModularGrid sourcing is established practice in modular forums

### **Technical Specifications**
- **File format:** JPEG (.jpg)
- **Resolution target:** ~390px width for module panels (maintains detail while manageable file size)
- **File size limit:** Under 50KB for reasonable loading performance
- **Naming convention:** Use ModularGrid filename or descriptive module name
- **Storage location:** `~/claude/Music/modular/images/[module_name]/`

### **Integration Placement Strategy**

**Option A: Quick Start Integration**
```markdown
## Quick Start: Get Your First Sound in 5 Minutes

![Module Name Front Panel](images/module_name/front_panel.jpg)
*Module Name - Front Panel Reference showing key jacks and controls*

**What is the [Module Name]?** Module description...
```

**Option B: Reference Panel Section**
```markdown
## Module Reference

![Full Module Panel](images/module_name/full_panel.jpg)
*Click image for detailed view*

🔴 Audio │ 🔵 CV │ 🟡 Gate

**Interface Layout:**
🔴 Audio In (bottom left) → Signal processing
🔵 CV1 (top) → Primary control modulation  
🔵 CV2 (middle) → Secondary control modulation
```

**Option C: Combined Approach**
```markdown
![Module Panel](images/module_name/panel.jpg)
*Module front panel reference*

🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─VCO─────┐    ┌─Filter──┐
│ Out ○───┼────┼─▶Audio  │ 🔴
│     ║   │    │   ║     │
│ CV  ◀───┼────┼── CV1   │ 🔵
│     ║   │    │   ║     │
└─────║───┘    └───║─────┘
```

### **Image Integration Guidelines**

**Educational Enhancement:**
- **Visual verification:** Photos confirm ASCII diagram accuracy
- **Interface familiarization:** Users see actual jack locations and control layout
- **Learning support:** Combine visual + textual + diagrammatic instruction
- **Reference value:** Quick visual confirmation during patching

**Quality Standards:**
- **Interface accuracy:** Images must show clear jack names and control labels
- **Visual clarity:** All important controls must be clearly visible
- **Consistent lighting:** Professional appearance with good contrast
- **Orientation:** Standard front-panel view, properly aligned

**Implementation Protocol:**
1. **Source from ModularGrid:** Use established community resource
2. **Verify image quality:** Ensure clarity and proper resolution
3. **Test integration:** Apply to one guide first, evaluate effectiveness
4. **Systematic application:** Roll out to all guides using workflow checklist
5. **Documentation:** Track image sources and maintain file organization

### **File Organization Standards**
```
~/claude/Music/modular/images/
├── polyvoks/
│   ├── front_panel.jpg
│   └── detail_shots/ (if needed)
├── disting/
│   ├── front_panel.jpg
│   └── algorithm_display.jpg
└── [module_name]/
    ├── front_panel.jpg
    └── [additional images]
```

### **Integration with Existing Standards**
- **Emoji color coding:** Images work alongside 🔴🔵🟡 signal identification
- **ASCII diagrams:** Photos verify diagram accuracy and provide visual context
- **Enhanced format:** Images support budget/premium alternative visualization
- **Learning progression:** Visual complexity can match skill development levels

---

## **ASCII Symbol Library**

### **Core Symbols**
- **Output jack:** `○` (circle)
- **Input jack:** `◀` (left arrow)  
- **Module boundary:** `┌┐└┘` (box drawing characters)
- **Audio cable:** `──` (double dash, represents red cables)
- **CV cable:** `║` (double line, represents blue cables)
- **Gate/Trigger cable:** `┈┈` (dotted line, represents yellow cables)
- **Connection point:** `┼` (cross)
- **Signal flow direction:** `→` `←` `↑` `↓` (arrows)

### **Advanced Symbols**
- **Multiple output:** `○○○` (multiple circles)
- **Normalized connection:** `(○)` (parentheses around jack)
- **Optional connection:** `[○]` (brackets around jack)
- **Variable control:** `∼` (tilde for modulation)
- **Attention/Important:** `⚠` (warning symbol)

---

## **Signal Type Hierarchy**

### **Visual Priority System with Color Coding**
🔴 **Audio signals (Red):** Primary signal path - thickest representation
🔵 **CV signals (Blue):** Control voltage - medium representation  
🟡 **Gate/Trigger (Yellow):** Timing/Logic - lightest representation

### **Signal Labels with Color**
Always label signal types with colored indicators:
```
🔴 Audio (Red) ║
              ║
🔵 CV (Blue)  ║
              ║
🟡 Gate (Yellow) ┈┈
```

### **Recommended Signal Flow Format**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─VCO─────┐    ┌─Filter──┐
│ Out ○───┼────┼─▶Audio  │ 🔴
│     ║   │    │   ║     │
│ CV  ◀───┼────┼── CV1   │ 🔵
│     ║   │    │   ║     │
└─────║───┘    └───║─────┘
      ║            ║
   🔵 CV        🔵 CV
```

---

## **Module Representation Standards**

### **Standard Module Box Format**
```
┌─────────────────┐
│   Module Name   │
│                 │
│ Input1 ◀────────┼── Signal In
│        ║        │
│ Output ○────────┼── Signal Out
│        ║        │
└────────║────────┘
         ║
    Signal Type
```

### **Multi-Function Module Format**
```
┌─────────────────┐
│   Disting mk4   │
│ (Algorithm:     │
│  Quantizer)     │
│                 │
│ A Input ◀───────┼── CV In
│         ║       │
│ X Output ○──────┼── Quantized CV
│          ║      │
└──────────║──────┘
           ║
     CV (Blue)
```

### **Utility Module Format**
```
┌─────────────────┐
│ Function        │
│ Junction        │
│ (CV Processor)  │
│                 │
│ A In ◀──────────┼── CV Input
│      ║          │
│ Sum Out ○───────┼── Processed CV
│         ║       │
└─────────║───────┘
          ║
    CV (Blue)
```

---

## **Signal Flow Guidelines**

### **Left-to-Right Progression**
Always show signal flow from left (source) to right (destination):
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

Source → Process → Destination
  │        │        │
  VCO   → Filter → Output
```

### **Multi-Stage Processing**
For complex patches, use clear horizontal progression with color coding:
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─VCO─┐    ┌─Filter─┐    ┌─VCA─┐    ┌─Output─┐
│     ○────┼─ Audio ◀────┼─ Out ○───┼─ Mix   │ 🔴
│     ║    │        ║    │     ║    │        │
└─────║────┘        ║    └─────║────┘        │
      ║             ║          ║             │
  🔵 1V/Oct    🔵 CV Input  🔵 Env Input  🔴 Audio Out
```

### **Feedback Loops**
Show feedback clearly with return paths and color coding:
```
🔴 Audio │ 🔵 CV

┌─VCO─┐    ┌─Filter─┐
│ Out ○────┼─ Audio ◀─┐ 🔴
│     ║    │        ║ │
│ FM  ◀────┼─ CV Out ○─┘ 🔵
│     ║    │        ║
└─────║────┘        ║
      ║        🔵 Feedback
   🔵 1V/Oct
```

---

## **Patch Complexity Visualization**

### **Difficulty Indicators**

**Beginner (Basic):**
```
Simple: A → B → C
Source → Process → Output
```

**Intermediate:**
```
Moderate: A → B ← C
          ↓   ↑
          D → E
```

**Advanced:**
```
Complex:  A → B ← C
          ↓   ↑   ↓
          D → E → F
          ↑       ↓
          H ← G ←─┘
```

**Expert:**
```
Very Complex: Multiple interconnected modules with feedback loops,
              cross-modulation, and multi-function integration
```

### **Learning Progression Map**
```
Basic → Intermediate → Advanced → Expert
  │         │            │         │
  │    ┌────┴────┐       │         │
  │    │         │       │         │
  ▼    ▼         ▼       ▼         ▼
Tone  Mod      Sync   Complex   Multi-
      │         │      Routing  Module
      │         │        │      Systems
      └─────────┼────────┘
                │
         Performance
         Applications
```

---

## **Module Alternative Visualization**

### **Enhanced Format Integration**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

Main Example: Maths Ch1 → Filter CV1
     │
     ├─Budget: ┌─2HP LFO─┐ 
     │         │ LFO1 ○──┼─→ Filter CV1
     │         └─────────┘   🔵 CV
     │
     ├─Different: ┌─Batumi──┐ 
     │            │ Phase ○─┼─→ Filter CV1
     │            └─────────┘   🔵 CV
     │
     └─Premium: ┌─Quadrax─┐ 
                │ Ch1 ○───┼─→ Filter CV1
                └─────────┘   🔵 CV
```

### **Alternative Ecosystem View**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─────────────────────────────────────────────────┐
│              Alternative Ecosystem               │
│                                                 │
│ Budget    │ Main      │ Different  │ Premium    │
│ Tier      │ Example   │ Character  │ Tier       │
│           │           │            │            │
│ 2HP LFO   │   Maths   │  Batumi    │  Quadrax   │
│ Doepfer   │  Function │  Geometric │  Complex   │
│ A-143-3   │ Generator │   Phases   │ Functions  │
│           │           │            │            │
│ $40-80    │ $300-350  │ $250-300   │ $400-450   │
└─────────────────────────────────────────────────┘
```

---

## **System Integration Visualization**

### **Complete Signal Chain Context**
```
┌─Sequencer─┐  ┌─VCO─────┐  ┌─Filter──┐  ┌─VCA─┐  ┌─Output─┐
│ Gate ○────┼──┼─▶Gate   │  │         │  │     │  │       │
│      ║    │  │  ║      │  │ Audio◀──┼──┼─○Out│  │ ◀─────│
│ CV ○──────┼──┼─▶1V/Oct │  │      ║  │  │  ║  │  │   ║   │
│      ║    │  │  ║      │  │ CV1◀────┼──┼──┘  │  │   ║   │
└──────║────┘  └──║──────┘  └─────║───┘  └─────┘  └───║───┘
       ║          ║               ║                   ║
   CV (Blue)  Audio (Red)    CV (Blue)           Audio (Red)
```

### **Multi-Module Ecosystem**
```
┌─────────────────────────────────────────────────────────────┐
│           Complete Synthesis Ecosystem (26HP)               │
│                                                             │
│ ┌─Function─┐ ┌─Bloom──┐ ┌─Disting─┐ ┌─Polyvoks─┐           │
│ │Junction  │ │Generativ│ │mk4     │ │Filter   │           │
│ │(CV Proc) │ │e       │ │(Algo)  │ │(Acid)   │           │
│ │          │ │        │ │        │ │         │           │
│ │ Sum ○────┼─┼─CV1 ◀──┼─┼─X Out ○┼─┼─CV1 ◀───┼─── Mathematical Control │
│ │     ║    │ │    ║   │ │      ║ │ │     ║   │           │
│ │ A ◀──────┼─┼─Gate1  │ │ Y Out ○┼─┼─CV2 ◀───┼─── Generative Control   │
│ │     ║    │ │    ║   │ │      ║ │ │     ║   │           │
│ └─────║────┘ └────║───┘ └──────║─┘ └─────║───┘           │
│       ║          ║             ║         ║               │
│   CV (Blue)  CV (Blue)    CV (Blue)  Audio (Red)         │
│                                                           │
│ Mathematical + Generative + Algorithmic → Legendary Acid │
└─────────────────────────────────────────────────────────────┘
```

---

## **Performance and Real-Time Control**

### **Live Control Indicators**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─Controller─┐    ┌─Module─┐
│ Knob   ∼───┼────┼─▶CV In │  ∼ = Real-time control 🔵
│        ║   │    │   ║   │
│ Slider ∼───┼────┼─▶Mod  │  Manual performance control 🔵
│        ║   │    │   ║   │
└────────║───┘    └───║───┘
         ║            ║
    🔵 Performance   🔵 Module Response
```

### **Touch/Manual Control**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─Module─────┐
│ Touch   👆 │  👆 = Touch/tactile control
│ Pad     ║  │
│         ▼  │  Direct physical interaction
│ CV Out  ○──┼─→ Performance CV 🔵
│         ║  │
└─────────║──┘
          ║
   🔵 Performance CV
```

---

## **Implementation Guidelines**

### **1. Consistency Requirements**
- **Same symbols throughout guide:** Never mix symbol systems within a guide
- **Consistent spacing:** Maintain uniform spacing in all diagrams
- **Signal labeling:** Always label signal types (Audio/CV/Gate)
- **Module naming:** Use exact manufacturer terminology

### **2. Readability Standards**
- **Maximum width:** Keep diagrams under 80 characters for readability
- **Vertical alignment:** Align modules and connections cleanly
- **White space:** Use adequate spacing between elements
- **Visual hierarchy:** Most important signals should be most prominent

### **3. Educational Progression**
- **Start simple:** Basic patches use minimal visual complexity
- **Add complexity gradually:** Each patch level adds visual elements
- **Maintain clarity:** Never sacrifice understanding for visual appeal
- **Guide learning:** Visual complexity should match conceptual complexity

### **4. Integration Requirements**
- **Enhanced format compliance:** All visual elements must include specific alternatives
- **Cross-reference capability:** Diagrams should connect to other guide concepts
- **Framework adherence:** Follow all established quality and efficiency standards
- **Systematic application:** Standards must be replicable across all guides

---

## **Quality Verification**

### **Visual Standards Checklist**
- [ ] **Symbol consistency:** All symbols from approved library
- [ ] **Signal hierarchy:** Audio/CV/Gate properly differentiated
- [ ] **Module accuracy:** Real jack names and interface elements
- [ ] **Flow clarity:** Left-to-right signal progression
- [ ] **Alternative integration:** Budget/premium options visually clear
- [ ] **Complexity appropriate:** Visual complexity matches skill level
- [ ] **Educational value:** Diagrams enhance rather than confuse understanding

### **Before/After Comparison Protocol**
When implementing visual standards:
1. **Document current state:** Screenshot or copy existing visual approach
2. **Apply standards systematically:** Use this framework consistently
3. **Compare effectiveness:** Evaluate clarity improvement
4. **Document lessons learned:** Update standards based on implementation experience
5. **Replicate successful patterns:** Apply proven improvements to other guides

---

## **Cross-Reference Integration**

### **Framework Integration**
- **Quality System:** Visual standards are part of overall quality verification
- **Guide Creation Framework:** Visual requirements integrated into content standards
- **Efficiency Tracker:** Track time spent on visual implementation vs improvement
- **Failure Patterns:** Document visual communication failures and prevention

### **Implementation Process**
1. **Apply visual standards** using this framework
2. **Follow workflow checklist** for all visual implementation operations
3. **Track efficiency** of visual improvements vs. content clarity gains
4. **Document successes** in quality system for replication
5. **Update standards** based on real-world application experience

---

**This framework provides systematic visual communication standards for immediate implementation and long-term consistency across all modular synthesizer guides.**

---

*Integrates with: `guide_creation_framework.md`, `quality_system.md`, `workflow_checklist.md`, and all other tooling directory systems.*