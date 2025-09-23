# Blue Lantern Modules BLM Looping Simple ADSR v2.1 - Guide

**The Digital ADSR Envelope Generator with Looping Capabilities**

---

## Quick Start: Get Your First Envelope Working in 5 Minutes

![Blue Lantern Modules BLM Looping Simple ADSR v2.1](https://github.com/DGretta/Music/raw/main/modular/images/blue_lantern/simple_adsr_v2/front_panel.jpg)  
*Blue Lantern Modules BLM Looping Simple ADSR v2.1 - Digital envelope generator with looping capabilities and CV level control*

**What is BLM Simple ADSR v2.1?** A 7HP digital envelope generator providing classic ADSR envelopes with three operational modes: standard 1-shot, loop activated gate, and continuous loop. Features CV-controllable output level, time adjustment, and both linear and exponential curves for versatile envelope shaping.

### Your First Envelope
1. **Connect gate source** - Patch sequencer or keyboard gate to green GATE input
2. **Set ADSR parameters** - Adjust blue knobs: Attack, Decay, Sustain, Release
3. **Select mode** - Set left switch to LIN or XPO, right switch to 1 SHOT
4. **Connect envelope output** - Patch orange OUT to VCA CV input
5. **Connect audio through VCA** - Audio source → VCA audio input → VCA output → speakers

**Important:** This module generates CV envelopes, not audio. Always use with a VCA for amplitude control.

---

## Essential Parameters (The Envelope Controls)

### **1. Attack (Blue Knob) - The Rise Time Control**
- **What it does:** Controls how quickly envelope rises from 0V to peak level
- **Character:** Longer attack = slower fade-in, shorter attack = immediate onset
- **Range:** Adjustable timing range via Time knob (see below)
- **Musical use:** Slow attacks for pads/strings, fast attacks for percussion/plucks
- **Pro tip:** Very short attacks still have slight rise time - true instantaneous attack requires hardware limitations

### **2. Decay (Blue Knob) - The Initial Fall Control**
- **What it does:** Controls how quickly envelope falls from peak level to sustain level
- **Character:** Sets the "bite" or initial character of the envelope
- **Interaction:** Works with sustain level to create envelope shape
- **Musical use:** Short decay for punchy sounds, long decay for evolving timbres
- **Pro tip:** Decay time affects perceived attack characteristics even with identical attack settings

### **3. Sustain (Blue Knob) - The Hold Level Control**
- **What it does:** Sets the level where envelope remains while gate is held high
- **Character:** Level control, not time - envelope stays at this level until gate goes low
- **Range:** 0V (no sustain) to full envelope level (no decay)
- **Musical use:** High sustain for pads, low sustain for percussive envelopes
- **Pro tip:** Sustain at 0V creates AD envelope behavior (no sustain phase)

### **4. Release (Blue Knob) - The Final Fall Control**
- **What it does:** Controls how quickly envelope falls from sustain level to 0V when gate ends
- **Character:** Determines tail behavior and natural decay of sounds
- **Timing:** Independent of other envelope stages
- **Musical use:** Short release for staccato, long release for natural instrument simulation
- **Pro tip:** Release continues even if new gate arrives before completion (retriggering behavior)

### **5. Time (Blue Knob) - The Global Timing Scaler**
- **What it does:** Adjusts overall timing range of all envelope stages simultaneously
- **Character:** Multiplier for Attack, Decay, and Release times (not sustain level)
- **Range:** Allows same knob positions to create very fast or very slow envelopes
- **Workflow:** Set envelope shape with ADSR knobs, then adjust overall speed with Time
- **Pro tip:** Essential for adapting same envelope shape to different musical contexts (fast drums vs slow pads)

### **6. Level (Violet Knob) - The Output Amplitude Control**
- **What it does:** Controls maximum output level of envelope (0-10V range scalable)
- **Character:** Scales entire envelope amplitude without changing shape
- **CV controllable:** Via violet CV input with attenuator knob below
- **Applications:** Volume automation, envelope scaling, dynamic expression
- **Pro tip:** Reduces full 0-10V range to 0-5V or other ranges as needed for different modules

### **7. CV Level Control (Violet CV Input + Attenuator)**
- **What it does:** CV control over envelope output level with variable amount
- **Character:** Attenuator knob controls how much CV affects output level
- **Signal range:** Accepts standard CV levels, scaled by attenuator
- **Musical use:** Expression control, velocity sensitivity, dynamic automation
- **Pro tip:** Enables velocity-sensitive envelopes when driven by velocity CV from sequencers

### **8. Mode Switches - The Envelope Behavior Controls**
- **Lin/Xpo Switch:** Linear vs Exponential envelope curves
  - **Linear:** Straight-line transitions, more electronic/digital character
  - **Exponential:** Natural curved transitions, more organic/analog character
- **1 Shot/Loop Gate/Loop Switch:** Envelope triggering behavior
  - **1 Shot:** Standard ADSR - one envelope cycle per gate
  - **Loop Gate:** Envelope loops continuously while gate is high
  - **Loop:** Envelope loops continuously, ignoring gate input
- **Pro tip:** Exponential curves sound more natural for most musical applications

### **9. Gate Input/Thru (Green Jacks) - The Trigger Interface**
- **What it does:** Gate input triggers envelope, Thru provides buffered gate output
- **Signal compatibility:** 0-5V, ±5V signals work (triangle, sine, ramp, saw waves accepted)
- **Thru output:** Buffered copy of gate input for chaining to other modules
- **Triggering:** Rising edge starts envelope, falling edge begins release phase
- **Pro tip:** Thru output allows single gate source to trigger multiple envelope modules

### **10. Envelope Outputs (Orange Jacks) - The CV Signal Outputs**
- **What it does:** Provides 0-10V envelope CV signal (scalable via Level knob)
- **Multiple outputs:** Parallel outputs for mult-free patching to multiple destinations
- **Signal type:** Smooth CV envelope suitable for VCA control, filter modulation, etc.
- **Load capacity:** Can drive multiple CV inputs simultaneously
- **Pro tip:** Use different outputs for amplitude (VCA) and filter modulation simultaneously

---

## Beginner Patch Ideas

### **Patch 1: Basic - Essential ADSR Operation with VCA Control**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Sequencer     │    │ Blue Lantern    │    │   VCA Module    │    │   Audio Out     │
│   Gate Output   │    │ BLM Simple      │    │                 │    │                 │
│                 │    │ ADSR v2.1       │    │                 │    │                 │
│ Gate Out ○──────┼────┼─ GATE ◀         │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Tempo: 120 BPM  │    │ Mode Switches:  │    │ Audio In ◀──────┼────┼─ Oscillator    │
│ Gate Length:    │    │ • LIN/XPO: XPO  │    │                 │    │ Audio Signal    │
│ 50%             │    │ • Mode: 1 SHOT  │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ Parameters:     │    │ CV In ◀─────────┼────┼─ OUT ○          │
┌─────────────────┐    │ • Attack: 9     │    │                 │    │                 │
│   Basic         │    │ • Decay: 11     │    │                 │    │                 │
│   Oscillator    │    │ • Sustain: 2    │    │ Audio Out ○─────┼────┼─ To Mixer       │
│                 │    │ • Release: 1    │    │                 │    │                 │
│ Audio Out ○─────┼────┼─ Time: 12       │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Frequency set   │    │ Level: 12       │    │                 │    │                 │
│ for musical     │    │ (full output)   │    │                 │    │                 │
│ pitch           │    │                 │    │                 │    │                 │
└─────────────────┘    │ OUT ○───────────┼────┼─────────────────┼────┘                 │
                       └─────────────────┘    └─────────────────┘

Basic ADSR Workflow:
1. Gate from sequencer triggers envelope on each step
2. ADSR generates 0-10V envelope: Attack rise → Decay fall → Sustain hold → Release fall
3. Envelope CV controls VCA amplitude, shaping audio signal dynamics
4. Exponential curves provide natural-sounding envelope characteristics
5. Time knob adjusts overall envelope speed to match musical tempo
```

**Setup:** Standard envelope generator operation controlling VCA for amplitude shaping
**Controls:** ADSR parameters for envelope shape, Time for tempo matching
**Result:** Understanding fundamental envelope generator operation and VCA control
**Technical Focus:** Reliable envelope generation with proper signal levels and timing
**Learning Objective:** Master essential envelope generator utility function in modular systems

### **Patch 2: Advanced - Looping Modes and CV Level Control for Dynamic Expression**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Performance     │    │ Blue Lantern    │    │   DivKid Ochd   │    │ Multiple        │
│ Controller      │    │ BLM Simple      │    │   LFO Bank      │    │ Destinations    │
│                 │    │ ADSR v2.1       │    │                 │    │                 │
│ Expression CV ○─┼────┼─ CV Level ◀     │    │                 │    │                 │
│ (Velocity or    │    │                 │    │ LFO1 ○──────────┼────┼─ Filter Cutoff  │
│ Manual Control) │    │ CV Amount: 2    │    │ (Slow)          │    │ Modulation      │
│                 │    │ (moderate)      │    │                 │    │                 │
│ Gate Pattern ○──┼────┼─ GATE ◀         │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
└─────────────────┘    │ Mode Switches:  │    │                 │    │                 │
                       │ • Curve: XPO    │    │                 │    │                 │
┌─────────────────┐    │ • Mode: LOOP    │    │                 │    │                 │
│ Make Noise      │    │   GATE          │    │                 │    │                 │
│ Maths           │    │                 │    │                 │    │                 │
│                 │    │ Parameters:     │    │                 │    │                 │
│ Ch1 Rise ○──────┼────┼─ (No Time CV   │    │                 │    │                 │
│ (Slow)          │    │  available)     │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ ADSR Settings:  │    │                 │    │                 │
                       │ • Attack: 10    │    │                 │    │ VCA CV ◀────────┼────┼─ OUT A ○        │
                       │ • Decay: 2      │    │                 │    │                 │
                       │ • Sustain: 8    │    │                 │    │                 │
                       │ • Release: 3    │    │                 │    │                 │
                       │ • Time: varies  │    │                 │    │ Filter CV ◀─────┼────┼─ OUT B ○        │
                       │                 │    │                 │    │                 │
                       │ Level: 10       │    │                 │    │                 │
                       │ (modulated by   │    │                 │    │                 │
                       │ expression CV)  │    │                 │    │ THRU ○──────────┼────┼─ Chain to       │
                       └─────────────────┘    │                 │    │ Additional      │
                                              │                 │    │ Envelopes       │
                                              └─────────────────┘    └─────────────────┘

Advanced Operation Modes:
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Loop Gate Mode Operation:                                                            │
│ • Gate HIGH: Envelope loops continuously (Attack→Decay→Sustain→Release→repeat)       │
│ • Gate LOW: Current envelope cycle completes Release phase and stops                │
│ • Musical Application: Rhythmic tremolo effects, tempo-synced amplitude modulation  │
│                                                                                      │
│ CV Level Control:                                                                    │
│ • Expression CV scales envelope output level in real-time                           │
│ • Enables velocity-sensitive envelopes for dynamic performance                      │
│ • CV Amount knob determines modulation depth                                        │
│                                                                                      │
│ Multiple Output Usage:                                                               │
│ • OUT A: VCA amplitude control (primary envelope function)                          │
│ • OUT B: Filter cutoff modulation (secondary envelope application)                  │
│ • THRU: Gate passthrough to additional envelope generators                          │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Module Integration:**
| Integration Type | Signal Flow | Purpose | Technical Benefit |
|-----------------|-------------|---------|------------------|
| **Expression Control** | Performance CV → Level CV input | **Dynamic envelope scaling** | **Velocity-sensitive amplitude control** |
| **Rhythmic Looping** | Gate pattern → Loop Gate mode | **Tempo-synced envelope cycles** | **Rhythmic modulation generation** |
| **Multiple Destinations** | Parallel outputs → VCA + Filter | **Multi-parameter envelope control** | **Efficient envelope distribution** |
| **Gate Chaining** | THRU output → Additional modules | **Synchronized envelope triggering** | **System-wide envelope coordination** |

**Advanced Techniques:**
- **Loop Gate Mode:** Creates rhythmic amplitude modulation when gate input provides rhythmic pattern
- **CV Level Control:** Real-time envelope scaling for dynamic performance expression
- **Multi-destination routing:** Single envelope controlling multiple parameters (amplitude + filter)
- **Envelope chaining:** THRU output enables multiple envelopes from single gate source

**Learning Objectives:**
- **Operational mode mastery:** Understanding 1-shot vs loop modes for different musical applications
- **CV level control:** Implementing dynamic envelope scaling for performance expression
- **System integration:** Efficient envelope distribution and gate chaining techniques
- **Professional envelope architecture:** Multiple envelope coordination in complex modular systems

---

## Pairs Well With

### **Phase 2 Module Synergies (Envelope Coordination):**
- **Erica Synths Quad VCA2:** Multiple VCAs for complex envelope-controlled amplitude relationships
- **Make Noise Maths:** Complex envelope generation that complements Simple ADSR's straightforward operation
- **DivKid Ochd & Expander:** LFO modulation of envelope parameters for evolving envelope characteristics
- **Squarp Hermod+:** Precise gate sequencing and velocity CV for sophisticated envelope triggering
- **Cross-Phase 2 Integration:** Simple ADSR provides reliable envelope generation within complex modulation ecosystems

### **Perfect Partners for Beginners:**
- **Basic VCAs:** Essential for amplitude control using ADSR envelopes
- **Simple oscillators:** Audio sources that benefit from envelope shaping
- **Gate sources:** Sequencers, keyboards, or clock dividers for envelope triggering
- **Mixers:** For combining multiple envelope-controlled signals
- **Audio interfaces:** For monitoring envelope-shaped audio signals

### **Advanced System Integration:**
- **Multiple ADSR modules:** Polyphonic envelope generation or complex envelope relationships
- **Quantized CV sources:** For musical envelope parameter modulation
- **Performance controllers:** Expression controls for real-time envelope level modulation
- **Complex gate generators:** Euclidean and algorithmic gate patterns for loop mode operation

### **Essential Utility Partnerships:**
- **VCA modules:** Primary application for amplitude envelope control
- **Filter modules:** Secondary application for timbral envelope control
- **Mixer modules:** Combining multiple envelope-controlled signals
- **Multiple modules:** Distributing single envelope to multiple destinations

### **Professional Workflow Integration:**
- **Multi-voice systems:** Providing reliable envelope generation for polyphonic patches
- **Performance setups:** Dynamic envelope control through CV level modulation
- **Studio systems:** Consistent envelope generation for recording and production
- **Educational applications:** Teaching fundamental envelope concepts through hands-on operation

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with basic ADSR operation:** Master fundamental envelope generation and VCA control
2. **Add operational mode exploration:** Understand 1-shot vs loop modes for different musical contexts
3. **Include CV level control:** Implement dynamic envelope scaling for performance applications
4. **Add system integration:** Coordinate multiple envelopes and efficient signal distribution
5. **Include professional techniques:** Complex envelope architecture in complete modular systems

### **Cross-Module Learning Opportunities:**
- **Simple ADSR + VCA modules:** Fundamental amplitude control and signal shaping techniques
- **Simple ADSR + Filter modules:** Timbral envelope control beyond amplitude applications
- **Simple ADSR + Sequencers:** Gate pattern coordination and rhythmic envelope triggering
- **Simple ADSR + Performance controllers:** Real-time envelope expression and dynamic control
- **All Phase 2 + Simple ADSR:** Reliable envelope generation within sophisticated modulation ecosystems

### **Skill Development Milestones:**
- **Beginner:** Basic ADSR operation, VCA control, understanding envelope stages
- **Intermediate:** Operational mode selection, CV level control, multi-destination routing
- **Advanced:** Complex envelope coordination, professional system integration
- **Expert:** Dynamic envelope architecture design, performance-oriented envelope systems

### **Advanced Envelope Concepts:**
- **Envelope Stage Theory:** Understanding Attack, Decay, Sustain, Release behavior and musical applications
- **Curve Characteristic Impact:** Linear vs Exponential envelope shapes and their musical effects
- **Loop Mode Applications:** Rhythmic modulation generation through envelope looping
- **System Integration Principles:** Efficient envelope distribution and coordination in complex systems

### **Performance Applications:**
- **Dynamic amplitude control:** Real-time envelope expression through CV level modulation
- **Rhythmic modulation:** Loop modes for tempo-synchronized amplitude and timbral effects
- **Multi-parameter envelope control:** Single envelope controlling multiple synthesis parameters
- **Professional envelope architecture:** Reliable envelope generation for studio and performance applications

---

**Bottom Line:** BLM Simple ADSR v2.1 isn't just an envelope generator - it's a **reliable envelope utility** that provides essential ADSR functionality with useful operational modes and CV control options. Every patch teaches something new about envelope generation fundamentals, from basic amplitude control to complex rhythmic modulation. As an **essential utility within Phase 2 ecosystems**, it provides dependable envelope generation that enables sophisticated amplitude and parameter control while maintaining the straightforward operation essential for efficient modular system workflow in 7HP of focused envelope utility.
