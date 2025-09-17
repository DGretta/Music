# Behringer Dual Envelope Generator 1003 - Utility Guide

**Coordinated Dual ADSR System for Professional Voice Architecture**

---

## Quick Start: Essential Envelope Utility in 5 Minutes

**What is the 1003?** A dual ADSR envelope generator that triggers both envelopes simultaneously from a single gate input. Each envelope can have completely different timing characteristics, making it perfect for coordinated dual modulation - like controlling both amplitude and filter cutoff with synchronized but independent envelope shapes.

### Basic Utility Setup
1. **Connect single gate source** - Patch sequencer or keyboard gate to GATE input
2. **Set different envelope shapes** - Configure left and right envelopes with different ADSR timing
3. **Connect to destinations** - OUT L+ to VCA CV, OUT R+ to filter cutoff CV
4. **Use manual gate for testing** - Press manual gate button to test both envelopes simultaneously
5. **Observe coordinated response** - Both envelopes start together but evolve differently

**Key Insight:** This is a coordinated dual modulation utility, not two independent envelope generators.

---

## Essential Parameters (The Dual Controllers)

### **Shared Timing Control**

#### **Gate Input - The Master Trigger**
- **Function:** Single input triggers both envelopes simultaneously
- **Specifications:** >35kΩ impedance, +4V threshold, +12V max
- **Utility applications:** Keyboard gates, sequencer outputs, performance controllers
- **Integration:** Any gate source controls entire dual envelope system

#### **Trig Input - The Retrigger Utility**
- **Function:** Retriggering capability while gate signal is present
- **Operation:** Requires gate signal to be active for triggering to function
- **Trigger modes:** Single (standard ADSR) or Multiple (allows retriggering)
- **Applications:** Rhythmic subdivision, tremolo effects, performance techniques

### **Left Envelope Generator - Primary Modulation**

#### **Attack Time - Rise Characteristics**
- **Range:** 1ms to 2 seconds - from instant to gradual fade-ins
- **Utility applications:** Fast for percussion, slow for pads and sustained voices
- **Integration:** Amplitude control requires musical attack timing
- **Technical:** Exponential curve for natural-sounding envelope rise

#### **Initial Decay Time - Peak Shaping**
- **Range:** 5ms to 7 seconds - shapes the attack peak to sustain transition
- **Utility applications:** Quick decay for plucky sounds, long for evolving textures
- **System integration:** Works with sustain level to define envelope character
- **Professional use:** Critical for realistic acoustic instrument emulation

#### **Sustain Level - Hold Voltage**
- **Range:** 0 to 10 volts - continuous level control
- **Utility applications:** 0V for percussive, high levels for held notes
- **CV specifications:** Linear voltage control for precise level matching
- **Integration:** Must match destination module's CV range requirements

#### **Final Decay Time - Release Characteristics**
- **Range:** 6ms to 8 seconds - controls note-off behavior
- **Utility applications:** Fast for staccato, slow for natural fade-outs
- **System timing:** Critical for polyphonic voice management
- **Professional use:** Smooth transitions between notes in performance

### **Right Envelope Generator - Secondary Modulation**

#### **Independent Timing Control**
- **Operation:** Triggered simultaneously with left envelope but with separate ADSR settings
- **Utility applications:** Filter modulation, secondary parameter control, stereo processing
- **Professional technique:** Different timing creates complex, evolving sound character
- **Integration:** Coordinates with left envelope for sophisticated voice architecture

### **Output Configuration**

#### **Bipolar Outputs - Maximum Flexibility**
- **OUT L+/L-:** Positive and negative envelope voltages from left envelope
- **OUT R+/R-:** Positive and negative envelope voltages from right envelope
- **Specifications:** ±10V output, 1kΩ output impedance
- **Utility applications:** Positive for standard modulation, negative for inverted effects

---

## Core Utility Applications

### **Application 1: Professional Voice Architecture**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Performance     │    │ Behringer       │    │ Voice Chain     │    │ Audio Output    │
│ Control         │    │ 1003            │    │ Processing      │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Keyboard        │    │ Coordinated     │    │ Oscillator      │    │                 │
│ Gate Out ○──────┼────┼─ GATE           │    │                 │    │                 │
│                 │    │ (Triggers both) │    │ Audio Out ○─────┼────┼─ VCA Audio In  │
│ MIDI/CV         │    │                 │    │                 │    │                 │
│ Interface       │    │ Left Envelope:  │    │ VCA Module      │    │                 │
│                 │    │ A: 10ms         │    │                 │    │                 │
│ Expression      │    │ ID: 100ms       │    │ Audio In ◀──────┼────┼─ Oscillator     │
│ controls for    │    │ S: 70%          │    │                 │    │                 │
│ real-time       │    │ FD: 500ms       │    │ CV In ◀─────────┼────┼─ OUT L+ ○       │
│ performance     │    │                 │    │ (Amplitude)     │    │                 │
└─────────────────┘    │ Right Envelope: │    │                 │    │                 │
                       │ A: 200ms        │    │ Audio Out ○─────┼────┼─ Filter Audio   │
┌─────────────────┐    │ ID: 1.5s        │    │ (Shaped vol)    │    │                 │
│ Envelope        │    │ S: 30%          │    │                 │    │                 │
│ Coordination    │    │ FD: 2s          │    │ Filter Module   │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Amplitude Env:  │    │ Single Mode     │    │ Audio In ◀──────┼────┼─ VCA Output     │
│ Fast attack,    │    │ (Standard ADSR) │    │                 │    │                 │
│ quick decay,    │    │                 │    │ Cutoff CV ◀─────┼────┼─ OUT R+ ○       │
│ moderate        │    │ Manual Gates:   │    │ (Filter mod)    │    │                 │
│ sustain, smooth │    │ Test both       │    │                 │    │                 │
│ release         │    │ envelopes       │    │ Audio Out ○─────┼────┼─ Final Audio    │
│                 │    │ together        │    │ (Shaped tone)   │    │ Output          │
│ Filter Env:     │    │                 │    │                 │    │                 │
│ Slower attack,  │    │ Professional    │    │ Result:         │    │ Audio Out ○─────┼────┼─ Mixer/Effects  │
│ long decay,     │    │ Application:    │    │ Coordinated     │    │ (Complete       │
│ low sustain,    │    │ Classic analog  │    │ amplitude and   │    │ voice)          │
│ very long       │    │ synthesizer     │    │ filter          │    │                 │
│ release         │    │ voice with      │    │ modulation from │    │                 │
└─────────────────┘    │ dual modulation │    │ single trigger  │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Utility Focus:** Single gate source controls complete voice envelope system with independent timing per parameter

### **Application 2: Cross-Parameter Envelope Modulation**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Modulation      │    │ Behringer       │    │ Advanced        │    │ Complex         │
│ Sources         │    │ 1003            │    │ Modulation      │    │ System Output   │
│                 │    │                 │    │ Processing      │    │                 │
│ Master Clock ○──┼────┼─ GATE           │    │                 │    │                 │
│ (System sync)   │    │ (Triggers both) │    │ Envelope        │    │                 │
│                 │    │                 │    │ Followers       │    │                 │
│ LFO Rate CV ◀───┼────┼─ OUT L+ ○       │    │                 │    │                 │
│ (Envelope       │    │ (Controls LFO   │    │ LFO Module      │    │                 │
│ controls LFO)   │    │ rate)           │    │                 │    │                 │
└─────────────────┘    │                 │    │ Rate CV In ◀────┼────┼─ OUT L+        │
                       │ Left Envelope:  │    │ (Envelope)      │    │                 │
┌─────────────────┐    │ A: 1s           │    │                 │    │                 │
│ Envelope        │    │ ID: 3s          │    │ LFO Out ○───────┼────┼─ Next Process  │
│ Configuration   │    │ S: 0%           │    │                 │    │                 │
│                 │    │ FD: 4s          │    │ VCA Module      │    │                 │
│ Left Env:       │    │ (Percussive)    │    │                 │    │                 │
│ Slow attack,    │    │                 │    │ Audio In ◀──────┼────┼─ Audio Source  │
│ long decay,     │    │ Right Envelope: │    │                 │    │                 │
│ zero sustain    │    │ A: 500ms        │    │ CV In ◀─────────┼────┼─ OUT R+ ○      │
│ for transient   │    │ ID: 2s          │    │ (Amplitude)     │    │                 │
│ LFO rate        │    │ S: 60%          │    │                 │    │                 │
│ modulation      │    │ FD: 3s          │    │ Audio Out ○─────┼────┼─ System Output │
│                 │    │ (Sustained)     │    │ (Modulated)     │    │ (Complex        │
│ Right Env:      │    │                 │    │                 │    │ evolving        │
│ Standard ADSR   │    │ Multiple Mode   │    │ Result:         │    │ texture)        │
│ for amplitude   │    │ (Enable retrig) │    │ LFO rate        │    │                 │
│ control with    │    │                 │    │ controlled by   │    │                 │
│ sustained       │    │ Professional    │    │ envelope,       │    │                 │
│ character       │    │ Application:    │    │ amplitude       │    │                 │
└─────────────────┘    │ Envelopes       │    │ controlled by   │    │                 │
                       │ control system  │    │ different       │    │                 │
                       │ parameters for  │    │ envelope =      │    │                 │
                       │ complex         │    │ complex         │    │                 │
                       │ modulation      │    │ evolution       │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Utility Focus:** Envelope generators as CV sources for complex system modulation and parameter control

### **Application 3: Rhythmic Retriggering Utility**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Timing          │    │ Behringer       │    │ Rhythmic        │    │ Pattern         │
│ Sources         │    │ 1003            │    │ Processing      │    │ Outputs         │
│                 │    │                 │    │                 │    │                 │
│ Sequencer       │    │ Multiple Mode   │    │ Primary Voice   │    │                 │
│ Gate Out ○──────┼────┼─ GATE           │    │                 │    │                 │
│ (Long gates)    │    │ (Holds both     │    │ VCA 1           │    │                 │
│                 │    │ envelopes)      │    │                 │    │                 │
│ Clock Divider   │    │                 │    │ CV In ◀─────────┼────┼─ OUT L+ ○       │
│ ÷3 Output ○─────┼────┼─ TRIG           │    │ (Retriggered    │    │                 │
│ (Retrigger      │    │ (Restarts       │    │ amplitude)      │    │                 │
│ pulses)         │    │ envelopes)      │    │                 │    │                 │
└─────────────────┘    │                 │    │ Audio Out ○─────┼────┼─ Pattern A      │
                       │ Left Envelope:  │    │ (Rhythmic)      │    │ (Subdivided)    │
┌─────────────────┐    │ A: 20ms         │    │                 │    │                 │
│ Rhythmic        │    │ ID: 100ms       │    │ Secondary Voice │    │                 │
│ Configuration   │    │ S: 80%          │    │                 │    │                 │
│                 │    │ FD: 300ms       │    │ VCA 2           │    │                 │
│ Gate Pattern:   │    │ (Punchy)        │    │                 │    │                 │
│ Whole notes     │    │                 │    │ CV In ◀─────────┼────┼─ OUT R+ ○       │
│ (holds          │    │ Right Envelope: │    │ (Different      │    │                 │
│ envelopes       │    │ A: 5ms          │    │ retriggering)   │    │                 │
│ active)         │    │ ID: 50ms        │    │                 │    │                 │
│                 │    │ S: 90%          │    │ Audio Out ○─────┼────┼─ Pattern B      │
│ Retrigger:      │    │ FD: 200ms       │    │ (Steady)        │    │ (Consistent)    │
│ Triplet         │    │ (Consistent)    │    │                 │    │                 │
│ subdivision     │    │                 │    │ Result:         │    │                 │
│ creates         │    │ Professional    │    │ Left envelope   │    │                 │
│ complex         │    │ Application:    │    │ creates         │    │                 │
│ rhythmic        │    │ Rhythmic        │    │ triplet         │    │                 │
│ patterns within │    │ subdivision     │    │ subdivision     │    │                 │
│ sustained       │    │ utility for     │    │ pattern while   │    │                 │
│ gate periods    │    │ electronic      │    │ right provides  │    │                 │
└─────────────────┘    │ music           │    │ steady rhythm   │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Utility Focus:** Rhythmic subdivision and complex timing pattern generation through coordinated envelope retriggering

### **Application 4: System Timing and CV Utility**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ System          │    │ Behringer       │    │ CV Distribution │    │ System-Wide     │
│ Control         │    │ 1003            │    │ Network         │    │ Integration     │
│                 │    │                 │    │                 │    │                 │
│ Master Start ○──┼────┼─ GATE           │    │ CV Processor 1  │    │                 │
│ (System sync)   │    │ (System-wide    │    │                 │    │                 │
│                 │    │ envelope start) │    │ CV In ◀─────────┼────┼─ OUT L+ ○       │
│ Performance     │    │                 │    │ (Master timing) │    │                 │
│ Controller      │    │ Left Envelope:  │    │                 │    │                 │
│ Manual Gate ○───┼────┼─ Manual Gate    │    │ CV Out A ○──────┼────┼─ VCA Network    │
│ (Live control)  │    │ (Test/perform)  │    │ CV Out B ○──────┼────┼─ Filter Network │
└─────────────────┘    │                 │    │ CV Out C ○──────┼────┼─ Effect Network │
                       │ Settings:       │    │                 │    │                 │
┌─────────────────┐    │ A: 100ms        │    │ CV Processor 2  │    │                 │
│ CV Distribution │    │ ID: 500ms       │    │                 │    │                 │
│ Strategy        │    │ S: 50%          │    │ CV In ◀─────────┼────┼─ OUT R+ ○       │
│                 │    │ FD: 1s          │    │ (Secondary)     │    │                 │
│ Master Env:     │    │ (System timing) │    │                 │    │                 │
│ Moderate timing │    │                 │    │ CV Out A ○──────┼────┼─ LFO Rates     │
│ for general     │    │ Right Envelope: │    │ CV Out B ○──────┼────┼─ Delay Times   │
│ system control, │    │ A: 2s           │    │ CV Out C ○──────┼────┼─ Reverb Levels │
│ multiple        │    │ ID: 4s          │    │                 │    │                 │
│ destinations    │    │ S: 30%          │    │ Result:         │    │                 │
│                 │    │ FD: 6s          │    │ Coordinated     │    │                 │
│ Secondary Env:  │    │ (Macro timing)  │    │ system-wide     │    │                 │
│ Slow, evolving  │    │                 │    │ envelope        │    │                 │
│ for long-term   │    │ Single Mode     │    │ modulation      │    │                 │
│ system          │    │ (Standard)      │    │ from single     │    │                 │
│ modulation,     │    │                 │    │ trigger source  │    │                 │
│ macro control   │    │ Professional    │    │                 │    │                 │
│ of multiple     │    │ Application:    │    │                 │    │                 │
│ parameters      │    │ CV distribution │    │                 │    │                 │
└─────────────────┘    │ and system      │    │                 │    │                 │
                       │ coordination    │    │                 │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Utility Focus:** System-wide CV generation and distribution for coordinated modulation across complex modular systems

---

## Integration Guide

### **Essential Module Partnerships**

#### **VCA Modules - Primary Integration**
- **Function:** Envelope-controlled amplitude processing for voice architecture
- **Connections:** OUT L+/R+ to VCA CV inputs for voltage-controlled amplitude
- **Benefits:** Professional voice dynamics, musical amplitude shaping, performance expression

#### **Filter Modules - Timbral Control**
- **Function:** Envelope control of cutoff frequency for dynamic timbral shaping
- **Connections:** OUT L+/R+ to filter cutoff CV for frequency modulation
- **Benefits:** Classic analog synthesis techniques, evolving harmonic content, musical expression

#### **Effect Modules - Dynamic Processing**
- **Function:** Envelope control of reverb send, delay feedback, modulation depth
- **Connections:** OUT L+/R+ to effect parameter CV inputs
- **Benefits:** Musical effect evolution, performance expression, sophisticated processing

#### **LFO and Modulation Sources**
- **Function:** Envelope control of modulation rates and depths
- **Connections:** OUT L+/R+ to LFO rate CV, modulation depth CV
- **Benefits:** Organic modulation behavior, evolving synthesis parameters, complex textures

---

## Technical Specifications

| Parameter | Specification | Notes |
|-----------|--------------|-------|
| **Gate Input** | >35kΩ impedance, +4V threshold | Single input triggers both envelopes |
| **Trig Input** | >20kΩ impedance, +4V threshold | Retriggering function, requires active gate |
| **Output Voltage** | ±10V maximum | Bipolar operation for maximum flexibility |
| **Output Impedance** | 1kΩ | Professional specification for reliable driving |
| **Gate Delay** | 0 to 2.5 seconds | System timing, coordination delays |
| **Attack Time** | 1ms to 2 seconds | Percussive to gradual fade-ins |
| **Initial Decay** | 5ms to 6 seconds | Peak shaping, transient control |
| **Sustain Level** | 0 to 10 volts | Silent to full envelope strength |
| **Final Decay** | 5ms to 6 seconds | Note-off behavior, release characteristics |
| **Power** | 50mA (+12V), 20mA (-12V) | Standard Eurorack consumption |
| **Module Width** | 16 HP | Standard Eurorack spacing |

---

**Bottom Line:** The Behringer Dual Envelope Generator 1003 is a **coordinated dual ADSR utility** that provides synchronized but independent envelope control from a single gate source. Perfect for professional voice architecture, complex modulation routing, and system-wide envelope coordination. The simultaneous triggering of both envelopes with independent timing characteristics makes it ideal for amplitude/filter coordination, cross-parameter modulation, and sophisticated CV distribution in modular synthesis systems.