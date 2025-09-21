# Erica Synths Black Quad VCA2 - Guide

![Erica Synths Black Quad VCA2](https://github.com/DGretta/Music/raw/main/modular/images/erica_synths_black_quad_vca2/front_panel.jpg)
*Erica Synths Black Quad VCA2 - Front panel showing four VCA channels with controls*

## Classification
**Module Type:** Voltage Controlled Amplifier (VCA)  
**Manufacturer:** Erica Synths  
**Series:** Black Series  
**Format:** Eurorack (8HP)  
**Channels:** Four independent VCA channels  
**Unique Features:** Sequential output mixing, normalled CV inputs, selectable linear/logarithmic response  
**Key Innovation:** Automatic mixing with flexible routing eliminates external mixer requirements  

**The Four-Channel VCA with Sequential Mixing**

---

## Quick Start: Get Your First VCA Control in 5 Minutes

**What is Black Quad VCA2?** A versatile four-channel voltage-controlled amplifier with sequential output mixing, normalled CV inputs, and selectable linear/logarithmic response curves - designed for complex modular systems requiring sophisticated amplitude control.

### Your First VCA Setup
1. **Connect audio source** - Patch an oscillator or voice to IN1
2. **Set level switch** - Position LEVEL1 switch to upper position (gain 1)
3. **Select response** - Set LIN/LOG switch to LIN for linear response
4. **Connect CV source** - Patch an envelope generator to CV1
5. **Take output** - Connect OUT1 to your mixer or next module

**Congratulations!** You've created basic VCA amplitude control with CV modulation!

---

## Essential Parameters (The VCA Controls)

### **1. IN1/IN2/IN3/IN4 - The Audio Inputs**
- **What they do:** Accept audio signals for amplitude control
- **Character:** High-quality audio inputs optimized for modular levels
- **Signal type:** Audio signals, channel 4 also DC-coupled for CV processing
- **Input range:** Standard Eurorack audio levels
- **Pro tip:** Channel 4 can process both audio and CV signals

### **2. CV1/CV2/CV3/CV4 - The Control Voltage Inputs**
- **What they do:** Control amplitude of corresponding VCA channel
- **Character:** CV inputs normalled in series - CV1 feeds all unless interrupted
- **Voltage range:** -10V to +10V (0V = max attenuation, +10V = +3dB gain)
- **Normalling behavior:** CV1 → CV2 → CV3 → CV4 unless patch cable inserted
- **Pro tip:** Insert dummy cable to CV input to break normalling chain

### **3. LEVEL1/LEVEL2/LEVEL3/LEVEL4 - The Manual Level Controls**
- **What they do:** 3-position switches for manual signal level adjustment
- **Character:** Upper (gain 1), Middle (gain 0.5), Lower (audio off)
- **Purpose:** Manual amplitude control independent of CV input
- **Application:** Quick muting, level balancing, performance control
- **Pro tip:** Use middle position for half-level signals, lower for muting

### **4. LIN/LOG Switches - The Response Curve Selectors**
- **What they do:** Select between linear and logarithmic VCA response
- **LINEAR mode:** Even, predictable amplitude changes - ideal for CV processing
- **LOGARITHMIC mode:** Musical amplitude curves - ideal for audio applications
- **Character:** LOG mode also affects manual level potentiometer response
- **Pro tip:** Use LOG for audio VCAs, LIN for CV processing and precise control

### **5. OUT1/OUT2/OUT3/OUT4 - The Sequential Mixed Outputs**
- **What they do:** VCA outputs with automatic sequential mixing
- **Sequential mixing behavior:**
  - **OUT4 only patched:** All four VCAs mixed together
  - **OUT2 + OUT4 patched:** VCA1+VCA2 sum, VCA3+VCA4 sum
  - **All outputs patched:** Four independent VCAs
- **Flexibility:** Choose between mixing and independent operation
- **Pro tip:** Sequential mixing eliminates need for external mixer in many setups

### **6. Signal Level LEDs - The Visual Feedback**
- **What they do:** Indicate signal activity on each VCA channel
- **Character:** Real-time visual feedback of signal levels
- **Purpose:** Monitor signal flow, identify active channels, performance feedback
- **Brightness:** Reflects signal amplitude on corresponding channel
- **Pro tip:** Essential for live performance and complex patch monitoring

---

## Beginner Patch Ideas

### **Patch 1: Basic - Four-Voice VCA Control**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Voice Sources │    │ Erica Black     │    │   Envelope      │    │   Final Mix     │
│                 │    │ Quad VCA2       │    │   Generators    │    │                 │
│ Voice 1 ○───────┼────┼─ IN1 ◀          │    │                 │    │                 │
│                 │    │                 │    │ EG1 ○───────────┼────┼─ CV1 ◀          │
│ Voice 2 ○───────┼────┼─ IN2 ◀          │    │                 │    │                 │
│                 │    │                 │    │ EG2 ○───────────┼────┼─ CV2 ◀          │
│ Voice 3 ○───────┼────┼─ IN3 ◀          │    │                 │    │                 │
│                 │    │                 │    │ EG3 ○───────────┼────┼─ CV3 ◀          │
│ Voice 4 ○───────┼────┼─ IN4 ◀          │    │                 │    │                 │
└─────────────────┘    │                 │    │ EG4 ○───────────┼────┼─ CV4 ◀          │
                       │ LEVEL1: Upper   │    └─────────────────┘    │                 │
                       │ LEVEL2: Upper   │                           │                 │
                       │ LEVEL3: Upper   │                           │                 │
                       │ LEVEL4: Upper   │                           │                 │
                       │                 │                           │                 │
                       │ LIN/LOG: LOG    │                           │                 │
                       │ (all channels)  │                           │                 │
                       │                 │                           │                 │
                       │ OUT4 ○──────────┼───────────────────────────┼─ Mixed Output   │
                       └─────────────────┘                           └─────────────────┘
```

**Setup:** Four independent voices controlled by separate envelopes, mixed to single output
**Controls:** All LEVEL switches at upper position, LOG mode for musical response curves
**Result:** Complete four-voice system with envelope-controlled amplitudes
**Performance:** Individual voice level control through LEVEL switches
**Learning Objective:** Understanding basic VCA operation and sequential mixing behavior

### **Patch 2: Advanced - Complex Mixing and CV Control Techniques**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Main Voices    │    │ Erica Black     │    │   DivKid Ochd   │    │ External Mixer  │
│                 │    │ Quad VCA2       │    │   & Expander    │    │                 │
│ Lead Synth ○────┼────┼─ IN1 ◀          │    │                 │    │                 │
│                 │    │                 │    │ LFO1 (Slow) ○───┼────┼─ CV1 ◀          │
│ Pad Synth ○─────┼────┼─ IN2 ◀          │    │                 │    │                 │
└─────────────────┘    │                 │    │ LFO2 (Med) ○────┼────┼─ CV2 ◀          │
                       │ LEVEL1: Upper   │    │                 │    │                 │
┌─────────────────┐    │ LEVEL2: Middle  │    │                 │    │                 │
│  Rhythm Section │    │                 │    │                 │    │                 │
│                 │    │ LIN/LOG1: LOG   │    │                 │    │                 │
│ Kick Drum ○─────┼────┼─ IN3 ◀          │    │ LFO3 (Fast) ○───┼────┼─ CV3 ◀          │
│                 │    │ LIN/LOG2: LOG   │    │                 │    │                 │
│ Hi-Hat ○────────┼────┼─ IN4 ◀          │    │                 │    │                 │
└─────────────────┘    │                 │    │ LFO4 (Rand) ○───┼────┼─ CV4 ◀          │
                       │ LEVEL3: Upper   │    └─────────────────┘    │                 │
┌─────────────────┐    │ LEVEL4: Upper   │                           │                 │
│  Performance    │    │                 │                           │                 │
│  Control        │    │ LIN/LOG3: LIN   │                           │                 │
│                 │    │ LIN/LOG4: LIN   │                           │                 │
│ Manual LFO ○────┼────┼─ Dummy Cable    │                           │                 │
│ (Break norm)    │    │ to CV2          │                           │                 │
└─────────────────┘    │                 │    ┌─────────────────┐    │                 │
                       │ OUT2 ○──────────┼────┼─ Leads + Pads   │    │ Channel A ◀─────┼──┐
                       │                 │    │                 │    │                 │  │
                       │ OUT4 ○──────────┼────┼─ Rhythm Section │    │ Channel B ◀─────┼──┼──┐
                       └─────────────────┘    └─────────────────┘    │                 │  │  │
                                                                     │ Master Out ○────┼──┼──┼──▶
                                                                     └─────────────────┘  │  │
```

**Module Integration:**
| Module Integration | Signal Flow | Purpose | Advanced Technique |
|-------------------|-------------|---------|-------------------|
| **Main Voices → VCA** | Synth sources → IN1/2 | **Primary voice control** | **Different level settings for balance** |
| **Rhythm → VCA** | Drum sources → IN3/4 | **Percussion control** | **Linear response for precise drum control** |
| **Ochd → CV inputs** | Multiple LFOs → CV1-4 | **Organic amplitude automation** | **Breaking normalling for independent control** |
| **VCA → Mixer** | Two sum outputs → External | **Professional mixing** | **Grouped voice processing** |

**Setup Instructions:**
- **Voice Levels:** Lead at full level, Pad at half level for balance
- **Response Curves:** LOG for musical voices, LIN for precise drum control  
- **CV Normalling:** Manual LFO breaks normalling at CV2 for independent pad control
- **Output Grouping:** OUT2 (leads+pads), OUT4 (drums) for separate processing
- **Ochd Integration:** Different LFO rates create complex amplitude relationships

**Advanced Techniques:**
- **Selective normalling:** Breaking CV chain for independent channel control
- **Mixed response curves:** LOG for musical content, LIN for technical control
- **Grouped outputs:** Two-bus mixing for different processing chains
- **Level balancing:** Manual level controls for performance mixing
- **Visual monitoring:** LED feedback for real-time signal assessment

**Learning Objectives:**
- **CV normalling mastery:** Understanding and controlling CV distribution
- **Response curve selection:** Choosing appropriate curves for different applications
- **Sequential mixing:** Using automatic mixing for complex routing
- **Performance control:** Real-time level and amplitude control techniques

### **Patch 3: Expert - Phase 2 Amplitude Brain Ecosystem**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Complete Phase 2│    │   MetaModule    │    │ Make Noise      │    │ Erica Black     │
│ Ecosystem       │    │                 │    │ Wogglebug       │    │ Quad VCA2       │
│                 │    │ Fundamental     │    │                 │    │                 │
│ Main Mix ○──────┼────┼─ VCO Plugin     │    │ Smooth ○────────┼────┼─ CV1 ◀          │
│                 │    │                 │    │                 │    │                 │
│ Lead Voice ○────┼────┼─ Audio Input ◀  │    │ Stepped ○───────┼────┼─ CV2 ◀          │
│                 │    │                 │    │                 │    │                 │
│ Pad Voice ○─────┼────┼─ Trigger ◀      │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Rhythm ○────────┼──┐ │ Audio Out ○─────┼────┼─ IN1 ◀          │    │                 │
└─────────────────┘  │ └─────────────────┘    │                 │    │                 │
                     │                        │                 │    │                 │
┌─────────────────┐  │ ┌─────────────────┐    │                 │    │                 │
│ Squarp Hermod+  │  │ │ Mutable Marbles │    │                 │    │                 │
│                 │  │ │                 │    │                 │    │                 │
│ CV Track 1 ○────┼──┼─┼─ X1 CV ○        │    │                 │    │                 │
│                 │  │ │                 │    │                 │    │                 │
│ CV Track 2 ○────┼──┼─┼─ Y CV ○─────────┼────┼─ Chaos Control │    │                 │
│                 │  │ │                 │    │                 │    │                 │
│ Trigger Out ○───┼──┼─┼─ T1 Gate ○──────┼────┼─ Pattern Trig  │    │                 │
└─────────────────┘  │ │                 │    │                 │    │                 │
                     │ │                 │    │                 │    │                 │
┌─────────────────┐  │ │ X3 CV ○─────────┼────┼─ CV3 ◀          │    │                 │
│ Cre8audio       │  │ │                 │    │                 │    │                 │
│ Function        │  │ │                 │    │                 │    │                 │
│ Junction        │  │ │                 │    │                 │    │                 │
│                 │  │ │                 │    │                 │    │                 │
│ Input A ◀───────┼──┘ │                 │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Input B ◀───────┼────┼─ Lead Voice     │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Attenuvert ○────┼────┼─ CV4 ◀          │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Sum Out ○───────┼────┼─ IN2 ◀          │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Offset ○────────┼────┼─ IN3 ◀          │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ IN4 ◀───────────┼────┼─ Rhythm         │    │                 │
                       │                 │    │                 │    │                 │
                       │ LEVEL1: Upper   │    │                 │    │                 │
                       │ LEVEL2: Middle  │    │                 │    │                 │
                       │ LEVEL3: Upper   │    │                 │    │                 │
                       │ LEVEL4: Upper   │    │                 │    │                 │
                       │                 │    │                 │    │                 │
                       │ LIN/LOG1: LOG   │    │                 │    │                 │
                       │ LIN/LOG2: LOG   │    │                 │    │                 │
                       │ LIN/LOG3: LIN   │    │                 │    │                 │
                       │ LIN/LOG4: LIN   │    │                 │    │                 │
                       │                 │    │                 │    │                 │
┌─────────────────────┼─────────────────────┼─────────────────────┼─────────────────┐
│ Professional Output System:                                                        │
│                                                                                    │
│ OUT1: Main mix with organic chaos amplitude control                                │
│ OUT2: Lead + Pad voices with independent processing                                │
│ OUT3: Rhythmic elements with linear precision control                              │ 
│ OUT4: Complete system mix for final processing                                     │
└────────────────────────────────────────────────────────────────────────────────────┘
                       │                 │    │                 │    │                 │
                       │ OUT1 ○──────────┼────┼─ Main Mix       │    │                 │
                       │                 │    │                 │    │                 │
                       │ OUT2 ○──────────┼────┼─ Voices Mix     │    │                 │
                       │                 │    │                 │    │                 │
                       │ OUT3 ○──────────┼────┼─ Rhythm Mix     │    │                 │
                       │                 │    │                 │    │                 │
                       │ OUT4 ○──────────┼────┼─ Complete Mix   │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Complete System Integration:**
| Layer | Function | VCA Role | Musical Result |
|-------|----------|----------|----------------|
| **Sequencing (Hermod+)** | Programmed CV patterns | **Structured amplitude automation** | **Precise amplitude control sequences** |
| **Synthesis (MetaModule)** | Fundamental VCO plugin | **Primary voice processing** | **Controlled harmonic amplitude** |
| **Chaos (Wogglebug)** | Chaotic amplitude control | **Unpredictable level variations** | **Organic amplitude evolution** |
| **Patterns (Marbles)** | Adaptive amplitude patterns | **Learning amplitude behavior** | **Evolving amplitude relationships** |
| **Processing (Function Junction)** | CV scaling and mixing | **Amplitude parameter control** | **Precise amplitude coordination** |
| **Amplification (Quad VCA2)** | Master amplitude brain | **System amplitude coordinator** | **Professional amplitude management** |

**Advanced Integration Techniques:**
- **Multi-layer amplitude control:** Organic, chaotic, and pattern-based amplitude automation
- **Coordinated voice management:** Different amplitude treatments for different voice types
- **Sequential mixing mastery:** Four different output configurations for complex routing
- **Response curve optimization:** LOG for musical content, LIN for technical control
- **CV distribution control:** Strategic normalling breaks for independent channel control
- **Professional output management:** Multiple mix buses for different processing chains

**System Coordination:**
- **Hermod+ CV Tracks:** Programmed amplitude sequences and pattern coordination
- **MetaModule Fundamental VCO:** Stable synthesis source with triggered amplitude control
- **Wogglebug Chaos:** Smooth and stepped chaos for different amplitude character types
- **Marbles Pattern Learning:** Adaptive amplitude patterns that evolve with musical context
- **Function Junction Processing:** CV scaling, offsetting, and mixing for precise amplitude control
- **Quad VCA2 Master Control:** Four-channel amplitude brain coordinating complete ecosystem

**Output Configuration Strategy:**
- **OUT1 (Main):** Complete ecosystem with chaotic amplitude variations
- **OUT2 (Voices):** Lead and pad voices with independent musical amplitude control
- **OUT3 (Rhythm):** Rhythmic elements with precise linear amplitude control
- **OUT4 (Master):** Full system mix for final professional processing

**Learning Objectives:**
- **Multi-function VCA operation:** Using VCA as amplitude brain within complex modular ecosystems
- **Advanced mixing techniques:** Sequential mixing for sophisticated signal routing
- **CV distribution mastery:** Understanding and controlling normalled CV behavior
- **Response curve selection:** Choosing appropriate amplitude curves for different applications
- **System amplitude design:** Creating complete amplitude ecosystems with coordinated multi-module integration
- **Performance integration:** Real-time control over complex amplitude generation systems

**Alternative Multi-Function Approaches:**
- **Instead of Hermod+:** Try **Metropolix** (sequencer) + **Disting** (CV processing) for different sequenced amplitude approaches
- **Instead of MetaModule:** Try **Plaits** (multiple synthesis engines) for different source characteristics
- **Different chaos character:** **Turing Machine** for binary amplitude patterns or **Radio Music** for sample-based amplitude control
- **Simplified approach:** **Bloom** (generative sequencer) + **Maths** (function generator) for organic amplitude coordination

---

## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Organic amplitude automation creates natural volume variations - multiple LFO outputs enable complex multi-channel amplitude relationships
- **Make Noise Wogglebug:** Chaotic amplitude control creates unpredictable but musical volume variations and tremolo effects
- **Mutable Marbles:** Learning circuits provide adaptive amplitude patterns that evolve with musical context and performance
- **Squarp Hermod+:** Sequenced amplitude control with precise timing enables programmed volume automation and complex amplitude sequences
- **Cre8audio Function Junction:** CV processing for amplitude voltage scaling, offsetting, and complex multi-source amplitude control
- **Cross-Phase 2 Integration:** Quad VCA2 serves as amplitude brain transforming sophisticated modular CV generation into dynamic amplitude control

### **Perfect Partners for Beginners:**
- **Voice modules:** Plaits, Rings, any oscillator or voice module benefits from VCA amplitude control
- **Envelope generators:** Maths, Quadrax, any envelope generator provides musical amplitude control
- **Simple mixers:** VCAs reduce need for external mixing in many basic setups
- **Filter modules:** VCAs after filters provide final amplitude shaping
- **Multiple signal sources:** Any setup with multiple voices needs VCA amplitude control

### **Advanced VCA Integration:**
- **Multiple VCA modules:** Quad VCA stacking for complex amplitude processing systems
- **Envelope followers:** Amplitude-sensitive processing that responds to VCA-controlled signals
- **Compressor/limiter modules:** Professional dynamic control following VCA amplitude processing
- **Performance mixers:** External mixers receiving VCA-processed signals for live performance

### **Essential Amplitude Partners:**
- **Precision CV sources:** Modules requiring exact amplitude control benefit from linear VCA response
- **Musical amplitude applications:** Logarithmic VCA response provides natural volume control
- **Multi-channel systems:** Sequential mixing reduces patching complexity in multi-voice setups
- **Visual feedback systems:** LED indicators essential for performance and complex patch monitoring

### **Advanced System Integration:**
- **Performance systems:** Live amplitude control through CV automation and manual level adjustment
- **Recording systems:** Professional amplitude management for multi-channel recording setups
- **Mixing systems:** Complex amplitude relationships between multiple voices and processing chains
- **Educational applications:** Understanding amplitude fundamentals through hands-on VCA operation and mixing

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with VCA fundamentals:** Master basic amplitude control and response curve selection
2. **Add sequential mixing:** Explore automatic mixing and grouped output configurations
3. **Include CV normalling control:** Use normalled CV inputs and strategic breaking techniques
4. **Add organic amplitude automation:** Integrate natural CV sources for evolving amplitude control
5. **Include chaos and pattern learning:** Add chaotic and adaptive amplitude control for complex behavior
6. **Complete the amplitude ecosystem:** Integrate multiple amplitude sources for coordinated amplitude processing

### **Cross-Module Learning Opportunities:**
- **VCA + Ochd:** Natural amplitude automation through organic LFO amplitude control
- **VCA + Wogglebug:** Chaotic amplitude control creating unpredictable but musical volume variations
- **VCA + Marbles:** Adaptive amplitude patterns that evolve with musical context and input patterns
- **VCA + Hermod+:** Sequenced amplitude control with precise timing and pattern programming
- **All Phase 2 + VCA:** Complete ecosystem enabling sophisticated amplitude control within complex modular systems

### **Skill Development Milestones:**
- **Beginner:** Basic VCA operation, response curve selection, sequential mixing understanding
- **Intermediate:** CV normalling control, advanced mixing configurations, performance amplitude control
- **Advanced:** Multi-source amplitude control, chaos integration, adaptive amplitude behavior
- **Expert:** Complete amplitude ecosystem design with multi-module coordination and sophisticated amplitude brain operation

### **Advanced VCA Concepts:**
- **Response Curve Theory:** Understanding linear vs logarithmic amplitude curves for different applications
- **Sequential Mixing Behavior:** How automatic mixing creates flexible routing without external mixers
- **CV Normalling Networks:** Understanding series CV distribution and strategic interruption techniques
- **Amplitude Coordination:** Managing multiple amplitude sources within integrated modular systems

### **Performance Applications:**
- **Live Amplitude Control:** Real-time amplitude shaping during performance through CV automation and manual control
- **Dynamic Amplitude Systems:** Self-evolving amplitude behavior using chaos and learning circuits
- **Complex Amplitude Processing:** Sophisticated amplitude coordination for advanced musical applications
- **Professional Mixing:** Studio-quality amplitude management for multi-channel modular recording

---

**Bottom Line:** Quad VCA2 isn't just an amplifier - it's an **amplitude brain** that transforms multiple audio sources into professionally controlled signals through sequential mixing, selectable response curves, and sophisticated CV control. Every patch teaches something new about how amplitude control really works in modular systems. As the **amplitude coordination brain of Phase 2 ecosystems**, it transforms organic modulation, controlled chaos, and pattern learning into unified amplitude control that manages complex multi-voice modular environments with professional precision and musical sensitivity.