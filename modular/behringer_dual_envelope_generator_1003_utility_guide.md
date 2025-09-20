# Behringer Dual Envelope Generator 1003 - Utility Guide

**Coordinated Dual ADSR System for Professional Voice Architecture**

---

## Pairs Well With

### **Perfect Envelope Partners:**
- **Doepfer A-140-2:** Dual ADSR for expanded envelope count - **Alternative:** Intellijel Dual ADSR, 2HP ADSR
- **Make Noise Maths:** Complex envelope shaping and modulation - **Alternative:** Befaco Rampage, Frap Tools 321
- **Mutable Stages:** Advanced envelope sequencing and morphing - **Alternative:** Joranalogue Contour 1, Expert Sleepers Disting
- **Intellijel Quadrax:** Four-channel envelope generator with expansion - **Alternative:** Erica Synths Black Quad EG, WMD/SSF ADSRVCA

### **Essential Integration:**
- **VCA Modules:** Doepfer A-132-3, Intellijel uVCA, Make Noise QPAS for amplitude control
- **Filter Modules:** Doepfer A-120, Intellijel Polaris, Make Noise QMMG for cutoff modulation
- **Oscillators:** Any VCO with FM/PWM inputs benefits from envelope modulation
- **Effect Modules:** Reverb sends, delay feedback, chorus depth control via envelope CV

### **Budget-Friendly Partners:**
- **2HP modules:** ADSR, VCA, LPG for compact envelope/VCA combinations
- **Doepfer A-100 series:** A-140, A-141-2, A-131 for basic envelope and VCA functions
- **Erica Synths Pico series:** Black ADSR, Black VCA for space-efficient solutions
- **DIY options:** Befaco ADSR, Music Thing Modular EGs for hands-on builders

### **Premium Integration:**
- **Make Noise ecosystem:** Maths, Function, Contour for complex envelope processing
- **Mutable Instruments:** Stages, Veils for advanced modulation and mixing
- **Expert Sleepers:** Disting mk4 for multi-function envelope and utility processing
- **Intellijel system:** Quadrax + Qx expander for complete envelope workstation

---

## Quick Start: Essential Envelope Utility in 5 Minutes

![Behringer Dual Envelope Generator 1003](https://github.com/DGretta/Music/raw/main/modular/images/behringer_dual_envelope_generator_1003/front_panel.jpg)
*Behringer Dual Envelope Generator 1003 - Coordinated dual ADSR system with independent timing control*

**What is the 1003?** A dual ADSR envelope generator that triggers both envelopes simultaneously from a single gate input. Each envelope can have completely different timing characteristics, making it perfect for coordinated dual modulation - like controlling both amplitude and filter cutoff with synchronized but independent envelope shapes.

### Basic Utility Setup
1. **Connect single gate source** - Patch sequencer or keyboard gate to GATE input
2. **Set different envelope shapes** - Configure left and right envelopes with different ADSR timing
3. **Connect to destinations** - OUT L+ to VCA CV, OUT R+ to filter cutoff CV
4. **Use manual gate for testing** - Press manual gate button to test both envelopes simultaneously
5. **Observe coordinated response** - Both envelopes start together but evolve differently

**Key Insight:** This is a coordinated dual modulation utility, not two independent envelope generators.

---

## Essential Parameters (The Dual Controllers).

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

## Utility Patches

### **Patch 1: Coordinated Voice Control**
- **Clock/gate source** → 1003 Gate input
- **1003 Left envelope** → VCA CV input (amplitude control)
- **1003 Right envelope** → Filter cutoff CV (timbral control)
- **Oscillator audio** → VCA audio input
- **VCA output** → Filter audio input
- **Filter output** → Final audio output

**Settings:**
- **Left envelope:** Fast attack (10ms), short decay (100ms), moderate sustain (60%), quick release (200ms)
- **Right envelope:** Slower attack (50ms), longer decay (800ms), lower sustain (30%), extended release (1.5s)

**Result:** Classic analog synthesis voice with coordinated but independent amplitude and filter envelopes from single gate trigger. Amplitude envelope provides punchy attack while filter envelope creates evolving timbral character.

### **Patch 2: Retriggered Rhythmic Patterns**
- **Sequencer long gates** → 1003 Gate input (holds both envelopes active)
- **Clock divider ÷4** → 1003 Trig input (rhythmic retriggering)
- **1003 Left envelope** → Percussion VCA CV
- **1003 Right envelope** → Bass VCA CV
- **Switch to Multiple mode** for retriggering capability

**Settings:**
- **Left envelope:** Very fast attack (2ms), quick decay (30ms), high sustain (80%), short release (50ms)
- **Right envelope:** Fast attack (5ms), medium decay (150ms), moderate sustain (50%), medium release (300ms)

**Result:** Sequencer provides sustained gates while clock divider creates rhythmic retriggering. Left envelope generates rapid percussion hits, right envelope provides steady bass rhythm. Both envelopes restart together on each trigger but maintain different characteristics.

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