# Erica Synths Black Envelope Generator 2 - Guide

![Modular Synthesis](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

## Classification
**Module Type:** Envelope Generator  
**Manufacturer:** Erica Synths  
**Series:** Black Series  
**Format:** Eurorack (8HP)  
**Unique Features:** Internal gate generator, retriggering capability, full ADSR looping mode  
**Key Innovation:** Transforms trigger-only sequencers into full ADSR envelope sources  

**The Re-triggerable ADSR with Internal Gate Generator**

---

## Quick Start: Get Your First ADSR Envelope in 5 Minutes

**What is Black EG2?** A sophisticated ADSR envelope generator with an internal gate generator, retriggering capability, and full ADSR looping mode - designed for experimental setups where flexible envelope control is essential.

### Your First ADSR Envelope
1. **Connect trigger source** - Patch a clock or sequencer trigger to the TRIGGER input
2. **Enable internal gate** - Turn the GATE ON switch to engage internal gate generator
3. **Set gate length** - Adjust G. LENGTH knob to around 12 o'clock for moderate gate time
4. **Shape your envelope** - Set A/D/S/R knobs to taste (try A: 9 o'clock, D: 11 o'clock, S: 2 o'clock, R: 10 o'clock)
5. **Connect output** - Patch EG OUT to a VCA or filter CV input

**Congratulations!** You've created a full ADSR envelope from simple trigger inputs using the internal gate generator!

---

## Essential Parameters (The Envelope Controls)

### **1. A/D/S/R Knobs - The Envelope Shape**
- **What they do:** Control the four stages of the ADSR envelope
- **Attack (A):** Rise time from 0 to peak (0-7.4 seconds)
- **Decay (D):** Fall time from peak to sustain (0-19 seconds) 
- **Sustain (S):** Hold level during gate (0-10V)
- **Release (R):** Fall time from sustain to zero (0-17 seconds)
- **Character:** Full exponential curves for musical envelope shaping
- **Pro tip:** Longer decay times create more dramatic envelope shapes

### **2. GATE ON Switch - The Internal Gate Enable**
- **What it does:** Engages the internal gate generator
- **Character:** OFF = simple AD envelope from triggers, ON = full ADSR from triggers
- **Behavior:** When ON, transforms trigger inputs into gate signals of adjustable length
- **Essential feature:** Allows full ADSR operation with trigger-only sequencers
- **Pro tip:** This is what makes EG2 unique - full ADSR from simple triggers

### **3. G. LENGTH Knob - The Gate Duration Control**
- **What it does:** Sets the internal gate length (0-3.7 seconds)
- **Character:** CCW (very short gates), 12 o'clock (moderate), CW (long sustained gates)
- **Range descriptions:** Short for percussive, medium for pads, long for drones
- **CV controllable:** Yes, via LENGTH CV input with voltage addition
- **Pro tip:** Longer gates allow more of the Decay stage to be heard

### **4. LENGTH CV Input - The Gate Length Modulation**
- **What it does:** CV control over internal gate length
- **Character:** Voltage is added to the G. LENGTH knob position
- **Signal type:** Standard CV input, positive voltages extend gate length
- **Modulation potential:** Dynamic gate length control for evolving envelopes
- **Pro tip:** Use slow LFOs for natural gate length variation

### **5. LOOP/SINGLE Switch - The Cycle Mode**
- **What it does:** Selects between single-shot and looping operation
- **SINGLE mode:** Envelope triggers once per input trigger
- **LOOP mode:** Envelope continuously cycles full ADSR when gate is high
- **Unique feature:** LOOP mode outputs full ADSR cycles, not simple AD
- **Pro tip:** LOOP mode with internal gate creates continuous ADSR cycling

### **6. GATE Input - The External Gate**
- **What it does:** Traditional gate input for external gate control
- **Character:** Standard gate input (3-10V) for conventional operation
- **Usage:** Use when you have dedicated gate signals available
- **Relationship:** Independent from TRIGGER input and internal gate
- **Pro tip:** Use GATE input for traditional ADSR operation with gate sequencers

### **7. TRIGGER Input - The Retrigger Control**
- **What it does:** Accepts trigger signals for envelope initiation
- **Retriggering:** Can restart attack stage even during active gate
- **Internal gate link:** When GATE ON is active, triggers control internal gate
- **Flexibility:** Works with both gate and trigger-only sequencers
- **Pro tip:** Retriggering allows complex rhythmic envelope patterns

### **8. EG OUT - The Envelope Output**
- **What it does:** Main envelope output (0-10V)
- **Character:** Clean exponential ADSR suitable for all CV applications
- **Signal type:** Standard CV output for VCAs, filters, oscillator pitch
- **Quality:** High-quality envelope curves optimized for musical applications
- **Pro tip:** Multiple destinations can be patched simultaneously

---

## Beginner Patch Ideas

### **Patch 1: Basic - Internal Gate ADSR Generation**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Trigger       │    │ Erica Black EG2 │    │  Mutable Plaits │    │   Audio Out     │
│   Source        │    │                 │    │                 │    │                 │
│                 │    │ GATE ON: ON     │    │ TIMBRE CV ◀─────┼────┼─ EG OUT ○       │
│ Clock/Seq ○─────┼────┼─ TRIGGER ◀      │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ LOOP/SINGLE:    │    │                 │    │                 │
                       │ SINGLE          │    │                 │    │                 │
                       │                 │    │                 │    │                 │
                       │ G. LENGTH: 12   │    │                 │    │                 │
                       │                 │    │                 │    │                 │
                       │ A: 9 o'clock    │    │                 │    │                 │
                       │ D: 11 o'clock   │    │                 │    │                 │
                       │ S: 2 o'clock    │    │                 │    │                 │
                       │ R: 10 o'clock   │    │                 │    │                 │
                       │                 │    │ Audio Out ○─────┼────┼─ To Mixer       │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Setup:** Transform simple triggers into full ADSR envelopes using internal gate
**Controls:** A/D/S/R knobs shape envelope character, G. LENGTH sets gate duration
**Result:** Full ADSR envelope generation from trigger-only sequencers
**Performance:** Real-time envelope shaping while sequence plays
**Learning Objective:** Understanding how internal gate converts triggers to full ADSR

### **Patch 2: Advanced - Retriggering and CV Gate Length Control**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Complex Rhythm │    │ Erica Black EG2 │    │   Make Noise    │    │ Erica Polivoks  │
│  Generator      │    │                 │    │   Maths         │    │ VCF             │
│                 │    │ GATE ON: ON     │    │                 │    │                 │
│ Fast Triggers ○─┼────┼─ TRIGGER ◀      │    │ Ch1 (Slow) ○────┼────┼─ FREQ CV ◀      │
│                 │    │                 │    │                 │    │                 │
│ Slow Gates ○────┼────┼─ GATE ◀         │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ LOOP/SINGLE:    │    │                 │    │                 │
┌─────────────────┐    │ SINGLE          │    │                 │    │                 │
│   DivKid Ochd   │    │                 │    │                 │    │                 │
│                 │    │ G. LENGTH: 2    │    │                 │    │                 │
│ LFO 2 (Med) ○───┼────┼─ LENGTH CV ◀    │    │ EG OUT ○────────┼────┼─ VCA CV ◀       │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ A: 8 o'clock    │    │                 │    │                 │
                       │ D: 1 o'clock    │    │                 │    │                 │
                       │ S: 3 o'clock    │    │                 │    │                 │
                       │ R: 12 o'clock   │    │                 │    │ Audio Out ○─────┼──▶
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Module Integration:**
| Module Integration | Signal Flow | Purpose | Advanced Technique |
|-------------------|-------------|---------|-------------------|
| **Rhythm Gen → EG2** | Fast triggers + slow gates | **Retriggering control** | **Complex rhythmic envelope patterns** |
| **Ochd → LENGTH CV** | Slow LFO → Gate length | **Dynamic gate timing** | **Evolving envelope sustain periods** |
| **EG2 → Maths** | Envelope → Function gen | **Envelope processing** | **Secondary envelope generation** |
| **EG2 → Polivoks** | Envelope → Filter + VCA | **Dual modulation** | **Coordinated filter and amplitude control** |

**Setup Instructions:**
- **Rhythm Generator:** Fast triggers for retriggering, slow gates for traditional operation
- **EG2 Settings:** Internal gate ON, moderate gate length with CV modulation from Ochd
- **A/D/S/R:** Quick attack, medium decay, moderate sustain, quick release for rhythmic character
- **LENGTH CV:** Ochd LFO 2 adds natural variation to gate length
- **Dual outputs:** EG2 controls both filter frequency and VCA level

**Advanced Techniques:**
- **Retriggering patterns:** Fast triggers restart attack during slow gate periods
- **CV gate length:** Ochd creates natural gate length variation for organic timing
- **Dual modulation:** Single envelope controls multiple parameters simultaneously
- **Complex timing:** Mix of trigger and gate inputs creates sophisticated rhythmic patterns

**Learning Objectives:**
- **Retriggering mastery:** Using multiple trigger sources for complex envelope behavior
- **CV modulation:** Dynamic control of envelope timing parameters
- **Dual-input operation:** Understanding TRIGGER vs GATE input relationships
- **Performance control:** Real-time manipulation of envelope characteristics

### **Patch 3: Expert - Advanced Envelope Brain Ecosystem**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Squarp Hermod+  │    │   MetaModule    │    │ Make Noise      │    │ Erica Black EG2 │
│                 │    │                 │    │ Wogglebug       │    │                 │
│ Trig Track ○────┼──┐ │ AS ADSR Plugin  │    │                 │    │ GATE ON: ON     │
│                 │  │ │                 │    │ Smooth ○────────┼────┼─ LENGTH CV ◀    │
│ CV Track 1 ○────┼──┼─┼─ Trig Input ◀   │    │                 │    │                 │
│                 │  │ │                 │    │                 │    │ TRIGGER ◀───────┼──┐
│ CV Track 2 ○────┼──┼─┼─ CV Input ◀     │    │                 │    │                 │  │
└─────────────────┘  │ │                 │    │                 │    │ G. LENGTH: 1    │  │
                     │ │ CV Out ○────────┼──┐ │                 │    │                 │  │
┌─────────────────┐  │ └─────────────────┘  │ │                 │    │ A: 7 o'clock    │  │
│ Cre8audio       │  │                      │ │                 │    │ D: 3 o'clock    │  │
│ Function        │  │                      │ │                 │    │ S: 1 o'clock    │  │
│ Junction        │  │                      │ │                 │    │ R: 9 o'clock    │  │
│                 │  │ ┌─────────────────┐  │ │                 │    │                 │  │
│ Input A ◀───────┼──┘ │   Mutable       │  │ │ Stepped ○───────┼──┐ │ LOOP/SINGLE:    │  │
│                 │    │   Marbles       │  │ │                 │  │ │ SINGLE          │  │
│ Input B ◀───────┼────┼─ X1 CV ○        │  │ │                 │  │ │                 │  │
│                 │    │                 │  │ │                 │  │ │ EG OUT ○────────┼──┼──┐
│ Offset ○────────┼────┼─ GATE CV ◀       │  │ │                 │  │ └─────────────────┘  │  │
│                 │    │                 │  │ │                 │  │                      │  │
│ Sum Out ○───────┼────┼─ Secondary      │  │ │                 │  │ ┌─────────────────┐  │  │
└─────────────────┘    │ Control         │  │ │                 │  │ │  Final System   │  │  │
                       │                 │  │ │                 │  │ │  Processing     │  │  │
                       │ T1 Gate ○───────┼──┼─┼─ Retrigger     │  │ │                 │  │  │
                       │                 │  │ │ Control         │  │ │ Env Input ◀─────┼──┘  │
                       │                 │  │ │                 │  │ │                 │     │
                       │                 │  │ │                 │  │ │ Chaos CV ◀──────┼─────┘
                       │                 │  │ │                 │  │ │                 │
                       │                 │  │ │                 │  │ │ Pattern CV ◀────┼──┐
                       │                 │  │ │                 │  │ │                 │  │
                       │                 │  │ │                 │  │ │ Final Audio ○───┼──┼──▶
                       │                 │  │ │                 │  │ └─────────────────┘  │
                       │                 │  │ │                 │  │                      │
                       └─────────────────┘  │ │                 │  └──────────────────────┘
                                            │ │                 │
                       ┌─────────────────────┼─┼─────────────────┼─┐
                       │                     │ │                 │ │
                       │ Complete System Integration:            │ │
                       │ • Hermod+: Sequenced triggers + CV     │ │
                       │ • MetaModule: Secondary envelope gen   │ │
                       │ • Wogglebug: Chaotic gate length      │ │ 
                       │ • Marbles: Adaptive retrigger patterns │ │
                       │ • Function Junction: CV processing     │ │
                       │ • EG2: Master envelope brain          │ │
                       └─────────────────────────────────────────┘
```

**Complete System Integration:**
| Layer | Function | EG2 Role | Musical Result |
|-------|----------|----------|----------------|
| **Sequencing (Hermod+)** | Programmed triggers + CV | **Primary trigger source** | **Structured envelope timing** |
| **Synthesis (MetaModule)** | AS ADSR plugin secondary env | **Envelope coordination** | **Layered envelope processing** |
| **Chaos (Wogglebug)** | Chaotic gate length control | **Unpredictable timing** | **Organic gate length variation** |
| **Patterns (Marbles)** | Adaptive retriggering | **Learning retrigger behavior** | **Evolving envelope patterns** |
| **Processing (Function Junction)** | CV scaling and offset | **CV coordination** | **Precise envelope parameter control** |
| **Generation (EG2)** | Master envelope brain | **System envelope coordinator** | **Complex adaptive envelope generation** |

**Advanced Integration Techniques:**
- **Multi-source triggering:** Hermod+ provides primary triggers, Marbles adds adaptive retrigger patterns
- **Chaotic gate length:** Wogglebug smooth chaos modulates internal gate duration for organic timing
- **Coordinated envelopes:** EG2 and MetaModule AS ADSR work together for layered envelope processing
- **CV processing:** Function Junction scales and offsets multiple CV sources for precise envelope control
- **Adaptive behavior:** Marbles learns from trigger patterns and generates complementary retrigger events
- **System coordination:** EG2 serves as master envelope brain coordinating complex modular ecosystem

**System Coordination:**
- **Hermod+ Trigger Track:** Primary rhythmic trigger generation with programmed patterns
- **Hermod+ CV Tracks:** Secondary parameter control and envelope coordination signals
- **Wogglebug Smooth:** Chaotic but musical gate length modulation for organic envelope timing
- **Marbles T1 Gate:** Adaptive retrigger patterns that evolve with musical context
- **Function Junction:** Processes multiple CV sources for complex envelope parameter control
- **MetaModule AS ADSR:** Secondary envelope generation coordinated with EG2 master envelope

**Learning Objectives:**
- **Multi-function coordination:** Using EG2 as envelope brain within complex modular ecosystems
- **Advanced retriggering:** Coordinating multiple trigger sources for sophisticated envelope behavior
- **Chaos integration:** Musical application of chaotic modulation to envelope timing parameters
- **Pattern learning:** Using adaptive circuits to create evolving envelope behavior
- **System design:** Creating complete envelope ecosystems with coordinated multi-module integration
- **Performance integration:** Real-time control over complex envelope generation systems

**Alternative Multi-Function Approaches:**
- **Instead of Hermod+:** Try **Metropolix** (sequencer) + **Disting** (CV processing) for different sequenced trigger approaches
- **Instead of MetaModule AS ADSR:** Try **Maths** (function generator) for different secondary envelope characteristics
- **Different chaos character:** **Turing Machine** for binary chaos patterns or **Radio Music** for sample-based chaos
- **Simplified approach:** **Bloom** (generative sequencer) + **Quadrax** (quad envelope) for organic envelope coordination

---

## Pairs Well With

### **Advanced Module Integration (Modulation & CV Sources):**
• **DivKid Ochd & Expander:** Natural gate length automation creates organic envelope timing - multiple LFO outputs enable complex multi-parameter envelope modulation
• **Make Noise Wogglebug:** Chaotic gate length control creates unpredictable but musical envelope timing variations
• **Mutable Marbles:** Adaptive trigger generation provides evolving retrigger patterns that respond to musical context
• **Squarp Hermod+:** Sequenced trigger patterns with quantization enable precise, programmable envelope timing sequences
• **Cre8audio Function Junction:** CV processing for envelope parameter scaling, offsetting, and complex multi-source envelope control
• **Cross-System Integration:** EG2 serves as envelope brain transforming sophisticated modular CV generation into dynamic envelope control

### **Perfect Partners for Beginners:**
• **VCA modules:** Intellijel Quad VCA, Mutable Veils for amplitude control applications
• **Filter modules:** Any filter with CV input benefits from EG2's envelope control
• **Oscillator pitch:** Plaits, Rings, or any oscillator for envelope-controlled pitch sweeps
• **Trigger sources:** Simple clock dividers, basic sequencers, or manual trigger buttons
• **Multiple outputs:** Use EG2 output for simultaneous control of multiple parameters

### **Advanced Envelope Integration:**
• **Multiple envelope generators:** Quadrax, Maths, or other envelope generators for coordinated multi-stage envelope processing
• **Complex VCAs:** Optomix, LxD for more sophisticated amplitude control applications
• **Waveshaping:** Fold processors benefit from envelope-controlled waveshaping intensity
• **Effects processing:** Envelope control over effect parameters creates dynamic processing

### **Essential Envelope Partners:**
• **Precision timing:** Modules requiring exact envelope timing benefit from EG2's internal gate precision
• **Retriggering applications:** Drum modules, percussion generators that need complex retriggering patterns
• **Gate length sensitive:** Modules that respond differently to various gate lengths
• **CV processing:** Attenuators, offsets, and mixers for envelope signal conditioning

### **Advanced System Integration:**
• **Performance systems:** Live envelope control through CV sources and manual adjustment
• **Generative systems:** Self-evolving envelope behavior using chaos and learning circuits
• **Hybrid envelope processing:** Complex coordination between multiple envelope sources
• **Educational applications:** Understanding envelope fundamentals through hands-on internal gate operation

---

## Advanced Learning Path

### **Recommended Study Progression:**
1. **Start with EG2 fundamentals:** Master internal gate operation and basic ADSR envelope generation
2. **Add retriggering techniques:** Explore complex trigger patterns and envelope restart behavior
3. **Include CV gate length control:** Use external CV sources for dynamic envelope timing
4. **Add chaos and organic modulation:** Integrate chaotic and natural CV sources for evolving envelope behavior
5. **Include adaptive patterns:** Add learning circuits for evolving envelope characteristics
6. **Complete the envelope ecosystem:** Integrate multiple envelope sources for coordinated envelope processing

### **Cross-Module Learning Opportunities:**
- **EG2 + Ochd:** Natural envelope timing automation through organic LFO gate length control
- **EG2 + Wogglebug:** Chaotic envelope timing creating unpredictable but musical envelope behavior
- **EG2 + Marbles:** Adaptive envelope patterns that evolve with musical context and trigger input
- **EG2 + Hermod+:** Sequenced envelope control with precise timing and pattern programming
- **All Advanced Modules + EG2:** Complete ecosystem enabling sophisticated envelope control within complex modular systems

### **Skill Development Milestones:**
- **Beginner:** Internal gate operation, basic ADSR envelope shaping, loop vs single modes
- **Intermediate:** Retriggering techniques, CV modulation of envelope parameters, complex timing control
- **Advanced:** Multi-source envelope control, chaos integration, adaptive envelope behavior
- **Expert:** Complete envelope ecosystem design with multi-module coordination and sophisticated envelope brain operation

### **Advanced Envelope Concepts:**
- **Internal Gate Theory:** Understanding how trigger-to-gate conversion enables full ADSR operation
- **Retriggering Behavior:** How envelope restart during active periods creates complex rhythmic patterns
- **CV Envelope Control:** Dynamic modulation of envelope timing for evolving musical textures
- **Envelope Coordination:** Managing multiple envelope sources within integrated modular systems

### **Performance Applications:**
- **Live Envelope Control:** Real-time envelope shaping during performance through CV automation
- **Generative Envelope Systems:** Self-evolving envelope behavior using chaos and learning circuits
- **Complex Envelope Processing:** Sophisticated envelope coordination for advanced musical applications
- **Educational Tool:** Learning envelope fundamentals through hands-on internal gate and retriggering operation

---

**Bottom Line:** EG2 isn't just an envelope generator - it's an **envelope brain** that transforms simple triggers into sophisticated ADSR control through internal gate generation, retriggering capability, and CV-controlled timing. Every patch teaches something new about how envelope generation really works in modular systems. As the **envelope coordination brain of advanced modular ecosystems**, it transforms organic modulation, controlled chaos, and pattern learning into unified envelope control that responds dynamically to complex modular environments.