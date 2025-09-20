# EarthQuaker Devices Afterneath - Guide

**The Otherworldly Reverberation Machine - A Wizard in a Cave**

---

## Historical Context

**Pedal-to-Modular Innovation:** EarthQuaker Devices' transition of the Afterneath pedal into Eurorack format represents a significant bridge between guitar effects and modular synthesis. The unique "Drag" parameter, originally developed for the pedal format, proved that guitar effect innovations could translate into powerful modular synthesis tools.

**Algorithmic Innovation:** The Afterneath's approach to reverb processing - particularly the delay line separation via the Drag control - challenged conventional reverb design by making the internal structure manipulable in real-time. This educational transparency of reverb mechanics influenced how modular musicians understand and control spatial effects.

**CV Integration Significance:** By adding comprehensive CV control to every parameter, EQD demonstrated how traditional effects could become dynamic, evolving instruments rather than static processors, establishing a template for effects-as-instruments in modular synthesis.

---

## Quick Start: Get Your First Otherworldly Reverb Working in 5 Minutes

![EarthQuaker Devices Afterneath](https://github.com/DGretta/Music/raw/main/modular/images/earthquaker_devices_afterneath/front_panel.jpg)
*EarthQuaker Devices Afterneath - Front panel showing signature Drag control, 9 modes, and extensive CV inputs*

**What is Afterneath?** A 16HP digital reverb module that sounds like "a wizard in a cave" - featuring the unique **Drag** parameter that separates delay lines for stuttering, warped effects, plus 9 operational modes, extensive CV control, and self-oscillation capabilities.

### Your First Wizard Spell
1. **Connect audio input** - Patch audio source to Input jack, adjust Input knob for proper level
2. **Set basic reverb** - Start with Reflect at 12 o'clock, Length at 2 o'clock, Mix at 1 o'clock
3. **Engage the magic** - Slowly turn Drag knob while audio plays - witness the otherworldly warping
4. **Select curve type** - Toggle between Linear (LIN) and Exponential (XPO) - XPO sounds more natural
5. **Choose your realm** - Set Mode to position 1 (Unquantized) for smooth response

---

## Essential Parameters (The Wizard's Controls)

### **Core Reverb Controls:**
- **Input:** Adjusts level from instrument (CW) to modular (CCW)
- **Dampen:** Tone control - CW for darker, CCW for brighter reverb
- **Reflect:** Regeneration/feedback - push past 12 o'clock for self-oscillation
- **Mix:** Wet/dry balance - use with Dry Kill for 100% wet
- **Dry Kill (Switch):** Eliminates dry signal for send/return applications

### **The Magic Controls:**
- **Drag:** "The coolest control" - separates delay lines for warped, stuttering effects
- **Mode:** 9 different operational modes from smooth to quantized scales
- **Diffuse:** Smooths delay repeats - CCW sharp, CW ambient
- **Length:** Decay time - combines with Reflect for self-oscillation

### **CV Control:**
- **4 CV Inputs:** Drag, Mode, Diffuse, Length with dedicated inverting attenuators
- **Reflect Send/Return:** External processing loop for feedback path

---

## The 9 Operational Modes (The Realms of Response)

### **Unquantized Modes:**
- **Mode 1: Unquantized** - Smooth, natural response
- **Mode 2: Unquantized with Slew** - Tape delay-style lag behavior
- **Mode 3: Unquantized Volt/Octave** - 1V/oct scaling for VCO behavior

### **Quantized Scale Modes:**
- **Mode 4: Chromatic Scale** - All 12 semitones
- **Mode 5: Major Scale** - 7-note major scale tonality
- **Mode 6: Minor Scale** - 7-note minor scale tonality
- **Mode 7: Pentatonic Scale** - 5-note always-musical scale
- **Mode 8: Octaves & Fifths** - Only perfect consonances
- **Mode 9: Octaves** - Pure octave relationships only

---

## Beginner Patch Ideas

### **Patch 1: Basic - Essential Otherworldly Reverb**
```
Audio Source → Afterneath Input
Basic Settings: Reflect 12, Length 2, Mix 1, Mode 1, XPO curve
Slowly turn Drag while audio plays to experience signature warping
Output → Monitor system
```

**Setup:** Core otherworldly reverb operation with signature Drag control
**Learning:** Master the essential character and unique warping behavior

**Alternative Module Options:**
- **For audio sources:** Try **Make Noise STO** for clean analog tone, **Mutable Plaits** for varied synthesis models, or **2HP OSC** for budget synthesis
- **Budget alternatives:** **Doepfer A-111-4** provides quad VCO functionality, **AI Synthesis AI002** for DIY approach
- **Different character:** **Make Noise DPO** for complex dual oscillation, **Intellijel Dixie II+** for classic analog character
- **For monitoring:** **Intellijel Mixup** for performance mixing, **2HP Mix** for compact mixing, **Expert Sleepers ES-8** for computer integration

### **Patch 2: Advanced - CV Control and External Processing**
```
LFO → Drag CV (for melodic sequences with Mode 5+)
Envelope → Length CV (for dynamic reverb tails)
Filter in Reflect Send/Return loop (for colored feedback)
Multiple CV sources for evolving textures
```

**Setup:** Multi-parameter CV modulation with external feedback processing
**Learning:** Complex CV integration and external loop utilization

**Alternative Module Options:**
- **For LFO sources:** Try **Batumi** for quad LFO with phase relationships, **DivKid ochd** for organic modulation, or **2HP LFO** for compact modulation
- **Budget alternatives:** **Doepfer A-143-3** for quad LFO, **AI Synthesis AI003** for DIY envelope generation
- **For envelopes:** **Make Noise Maths** for complex function generation, **Intellijel Quadrax** for quad envelope generation
- **Filter processing:** **Mutable Ripples** for liquid analog filtering, **Make Noise MMG** for lowpass gate character, **2HP VCF** for compact filtering
- **Different character:** **Erica Synths modules** for diverse processing options, **FX Aid Pro** for additional effects in external loop

### **Patch 3: Expert - Self-Oscillating VCO Applications**
```
Keyboard CV → Drag CV (1V/octave tracking)
Setup: Drag CV att fully CW, Drag knob 12 o'clock, Mode 3-9
Calibration: Length + Reflect up for oscillation, find Drag upper limit
VCA for amplitude control of oscillator output
```

**Setup:** Volt/octave calibration for VCO-style operation
**Learning:** Self-oscillation setup and musical pitch tracking

**Alternative Module Options:**
- **For keyboard CV:** Try **Arturia Keystep** for budget keyboard control, **Make Noise Pressure Points** for touch control, or **Expert Sleepers FH-2** for MIDI-to-CV
- **Budget alternatives:** **Doepfer A-190-3** for USB MIDI interface, **2HP MIDI** for compact MIDI-to-CV conversion
- **For VCA control:** **Intellijel Quad VCA** for precision amplitude control, **2HP VCA** for budget solution, **Make Noise ModDemix** for mixing and VCA combined
- **Advanced control:** **Mutable Marbles** for probability-based control, **Pamela's New Workout** for algorithmic patterns, **Hermod+** for comprehensive sequencing

### **Patch 4: Professional - Ambient Stereo Ritual**
```
Main Output → Left channel
Reflect Send → Multiple → Right channel + External Processing
External processing returns via Reflect Return
Complex CV modulation of all parameters for evolving soundscapes
```

**Setup:** Pseudo-stereo effects with external processing chains
**Learning:** Professional ambient texture creation and stereo imaging

**Alternative Module Options:**
- **For stereo processing:** Try **Intellijel Stereo Mix** for professional stereo mixing, **ALM Busy Circuits Pamela's Pro** for stereo modulation, or **2HP Mix** for budget stereo combining
- **Budget alternatives:** **Doepfer A-138** series for mixing and multiples, **AI Synthesis AI006** for DIY mixing approach
- **External processing:** **FX Aid Pro** for comprehensive effects, **Mutable Clouds** for granular processing, **Erica Synths effects** for diverse character
- **Advanced routing:** **Expert Sleepers ES-9** for computer integration, **4ms Listen IO** for professional I/O, **Make Noise Rosie** for headphone monitoring

---

## Pairs Well With

### **Modulation & CV Source Integration:**
- **Mutable Marbles:** Random CV for melodic Drag modulation in quantized modes
- **Make Noise Maths:** Complex envelopes for Length and Diffuse control
- **DivKid ochd & Expander:** Multiple LFOs for evolving parameter automation
- **Erica Synths modules:** Audio sources and external processing in Reflect loop
- **4ms Listen IO:** Professional I/O for external processing integration

### **Perfect Partners:**
- **VCAs:** For amplitude control of self-oscillating applications
- **Filters:** In Reflect loop for spectral shaping of feedback
- **CV Sources:** LFOs, envelopes, sequencers for parameter modulation
- **Audio Sources:** Rich harmonic content brings out Drag character best

---

## Learning Path

### **Recommended Progression:**
1. **Master basic operation:** Core reverb parameters and signature Drag behavior
2. **Explore modes:** Understanding quantized vs unquantized responses
3. **Add CV control:** Multi-parameter modulation for dynamic textures
4. **External processing:** Reflect loop integration for enhanced character
5. **Advanced applications:** Self-oscillation and volt/octave tracking
6. **Professional integration:** Complex ambient systems and stereo processing

### **Performance Applications:**
- **Ambient texture generation** through complex CV modulation
- **Rhythmic modulation** via self-oscillation and drag effects
- **Experimental processing** through external feedback loops
- **Musical pitch control** using quantized modes with CV input

---

**Bottom Line:** Afterneath isn't just a reverb - it's an **otherworldly texture generator** that transforms any audio into ambient, warped, and musical textures through its signature Drag parameter and 9 operational modes. From basic reverb to self-oscillating VCO to complex ambient processor, it brings unique character that's impossible to achieve with conventional reverbs. The Drag control alone makes it worth the 16HP, but the extensive CV control and external processing capabilities make it a **complete ambient sound design powerhouse**.