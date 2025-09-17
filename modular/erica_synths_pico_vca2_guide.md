# Erica Synths Pico VCA2 - Guide

**The Compact Dual Linear VCA with Bias Control**

---

## Quick Start: Get Your First VCA Working in 5 Minutes

**What is Pico VCA2?** A 3HP dual linear VCA module based on the professional AS3330 chip, featuring two independent voltage-controlled amplifiers with bias control on VCA1, input normalling for signal splitting, and DC coupling for both audio and CV amplitude control.

### Your First VCA Setup
1. **Connect audio source** - Patch oscillator or audio to IN1 input
2. **Connect control voltage** - Patch envelope or LFO to CV1 input
3. **Connect output** - Patch OUT1 to your audio destination
4. **Test amplitude control** - Adjust CV source to hear volume changes
5. **Explore normalling** - Notice OUT2 also outputs the same signal (normalled from VCA1)

**Important:** VCAs control amplitude - they need both audio and CV to produce output!

---

## Essential Parameters (The Amplitude Controls)

### **1. IN1 (Gray Jack) - The Primary Audio Input**
- **What it does:** Audio input for first VCA - accepts audio signals and control voltages
- **Character:** DC-coupled input suitable for audio and CV amplitude control
- **Signal range:** Handles nominal 10Vptp audio signals
- **Normalling:** Automatically feeds IN2 when nothing patched to IN2
- **Pro tip:** Works for controlling amplitude of LFOs and other CV signals, not just audio

### **2. BIAS (Black Knob) - The CV Offset Controller**
- **What it does:** Manually adjusts CV offset for VCA1 to set desired amplitude modulation range
- **Character:** Essential for tremolo effects and CV ranging applications
- **Tremolo application:** Prevents VCA from closing completely during negative LFO swings
- **CV ranging:** Shifts CV from -5V/+5V range to 0V/+10V range for different modulation behavior
- **Pro tip:** For tremolo, set bias so LFO modulation creates volume variation without complete silence

### **3. CV1 (Gray Jack) - The Primary Control Voltage Input**
- **What it does:** Controls amplitude of VCA1 with linear response curve
- **Character:** Linear VCA response provides predictable amplitude control
- **Signal range:** Full span -5V to +5V, affected by BIAS knob offset
- **Normalling:** Automatically feeds CV2 when nothing patched to CV2
- **Pro tip:** Linear response makes it ideal for precise amplitude control and audio mixing

### **4. OUT1 (Gray Jack) - The Primary VCA Output**
- **What it does:** Outputs amplitude-controlled signal from VCA1
- **Character:** Clean, professional-grade VCA output with -110dB max attenuation
- **Signal level:** Maintains input signal level when CV is at maximum positive
- **Applications:** Final audio output, amplitude-controlled CV, tremolo effects
- **Pro tip:** Can drive multiple destinations simultaneously due to robust output stage

### **5. IN2 (Gray Jack) - The Secondary Audio Input**
- **What it does:** Audio input for second VCA, normalled from IN1 when nothing patched
- **Character:** Independent input that breaks normalling when cable inserted
- **Normalling behavior:** Automatically receives IN1 signal for dual output/processing
- **Applications:** Independent second VCA or automatic signal splitting from VCA1
- **Pro tip:** Use normalling for stereo processing or leave unpatched for signal doubling

### **6. CV2 (Gray Jack) - The Secondary Control Voltage Input**
- **What it does:** Controls amplitude of VCA2, normalled from CV1 when nothing patched
- **Character:** Same linear response as CV1, independent when patched
- **Normalling behavior:** Automatically receives CV1 signal for coordinated control
- **Applications:** Independent CV control or synchronized dual VCA operation
- **Pro tip:** Patch different CV here to break normalling for independent VCA2 control

### **7. OUT2 (Gray Jack) - The Secondary VCA Output**
- **What it does:** Outputs amplitude-controlled signal from VCA2
- **Character:** Identical performance to OUT1 with same specifications
- **Independent operation:** Separate output regardless of normalling configuration
- **Applications:** Second audio output, buffered signal splitting, parallel processing
- **Pro tip:** When inputs are normalled, acts as buffered mult of VCA1 output

---

## Beginner Patch Ideas

### **Patch 1: Basic - Essential VCA Operation and Signal Routing**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Audio Source  │    │ Erica Synths    │    │   Envelope      │    │   Audio Output  │
│                 │    │ Pico VCA2       │    │   Generator     │    │                 │
│ Oscillator ○────┼────┼─ IN1 ◀          │    │                 │    │                 │
│                 │    │                 │    │ Gate In ◀───────┼────┼─ Sequencer      │
│ Rich harmonic   │    │ Normalling:     │    │                 │    │                 │
│ content for     │    │ IN1 → IN2       │    │ Env Out ○───────┼────┼─ CV1 ◀          │
│ amplitude       │    │ CV1 → CV2       │    │                 │    │                 │
│ modulation      │    │                 │    │ ADSR Settings:  │    │                 │
└─────────────────┘    │ BIAS: 12 o'clock│    │ A: Fast         │    │                 │
                       │ (Neutral)       │    │ D: Medium       │    │                 │
┌─────────────────┐    │                 │    │ S: High         │    │                 │
│ Sequencer/Keys  │    │ VCA1 Operation: │    │ R: Medium       │    │                 │
│                 │    │ Input + CV =    │    │                 │    │                 │
│ Gate Out ○──────┼────┼─ Amplitude      │    │                 │    │                 │
│                 │    │ Control         │    │                 │    │                 │
│ Timing: 120 BPM │    │                 │    │                 │    │ Main Out ◀──────┼────┼─ OUT1 ○         │
└─────────────────┘    │ VCA2 Operation: │    │                 │    │                 │
                       │ Same signal     │    │                 │    │                 │
                       │ (normalled)     │    │                 │    │ Aux Out ◀───────┼────┼─ OUT2 ○         │
                       │ Same CV         │    │                 │    │ (Same signal)   │
                       │ (normalled)     │    │                 │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘

Basic VCA Operation Workflow:
1. Audio signal enters VCA1, automatically feeds VCA2 via normalling
2. Envelope CV controls both VCAs simultaneously via CV normalling
3. Both outputs provide identical amplitude-controlled audio
4. BIAS knob at neutral position for standard VCA operation
5. Result: Dual outputs of envelope-controlled audio with automatic signal splitting
```

**Setup:** Understanding fundamental VCA operation with automatic signal distribution via normalling
**Controls:** Envelope-based amplitude control, normalling behavior exploration
**Result:** Familiarity with VCA basics and efficient signal routing in 3HP
**Technical Focus:** Reliable amplitude control and understanding normalling for workflow efficiency
**Learning Objective:** Master essential VCA operation and normalling behavior for system integration

### **Patch 2: Advanced - Bias Control and Tremolo Effects**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Audio Sources   │    │ Erica Synths    │    │ Modulation      │    │ Audio Outputs   │
│                 │    │ Pico VCA2       │    │ Sources         │    │                 │
│ Oscillator A ○──┼────┼─ IN1 ◀          │    │                 │    │                 │
│ (Pad/Lead)      │    │                 │    │ LFO (Triangle)  │    │                 │
│                 │    │ BIAS: 2 o'clock │    │ Rate: 2 Hz      │    │                 │
│ Oscillator B ○──┼────┼─ IN2 ◀          │    │ Level: Bipolar  │    │                 │
│ (Different      │    │ (Breaks         │    │ ±5V output      │    │                 │
│ timbre)         │    │ normalling)     │    │                 │    │                 │
└─────────────────┘    │                 │    │ LFO Out ○───────┼────┼─ CV1 ◀          │
                       │ VCA1 Function:  │    │                 │    │                 │
┌─────────────────┐    │ Tremolo effect  │    │ Envelope        │    │                 │
│ Performance     │    │ via BIAS +      │    │ Generator       │    │                 │
│ Controls        │    │ LFO modulation  │    │                 │    │                 │
│                 │    │                 │    │ Env Out ○───────┼────┼─ CV2 ◀          │
│ Manual Tremolo  │    │ VCA2 Function:  │    │                 │    │                 │
│ Speed: LFO rate │    │ Standard VCA    │    │ Gate In ◀───────┼────┼─ Keyboard       │
│ Depth: BIAS     │    │ with envelope   │    │                 │    │                 │
│ amount          │    │ control         │    │                 │    │ Tremolo Out ○───┼────┼─ OUT1 ○         │
└─────────────────┘    │                 │    │                 │    │ (Modulated)     │
                       │ Result:         │    │                 │    │                 │
                       │ Two different   │    │                 │    │ Envelope Out ○──┼────┼─ OUT2 ○         │
                       │ VCA behaviors   │    │                 │    │ (Clean)         │
                       │ in 3HP          │    │                 │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘

Advanced Bias Control Applications:
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ BIAS Control Technique for Tremolo:                                                 │
│ • Standard LFO range: -5V to +5V (would completely close VCA on negative swing)     │
│ • BIAS at 2 o'clock: Offsets CV to approximately 0V to +10V range                  │
│ • Result: LFO creates volume variation without complete silence                     │
│ • Musical effect: Smooth tremolo rather than on/off gating                         │
│                                                                                      │
│ Independent VCA Applications:                                                        │
│ • VCA1: Tremolo-modulated pad sound with BIAS adjustment                           │
│ • VCA2: Envelope-controlled lead sound for performance                             │
│ • Workflow: Two different amplitude control methods in single 3HP module           │
│                                                                                      │
│ Performance Benefits:                                                                │
│ • Real-time tremolo depth control via BIAS knob                                    │
│ • Independent envelope control of second voice                                      │
│ • Efficient use of CV inputs through selective normalling breaking                 │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Module Integration:**
| Integration Type | Configuration | Musical Application | Technical Benefit |
|-----------------|---------------|-------------------|------------------|
| **Tremolo Effects** | BIAS + LFO modulation | **Smooth volume oscillation** | **CV ranging for musical tremolo** |
| **Independent VCAs** | Break normalling with patches | **Two separate amplitude controls** | **Dual functionality in 3HP** |
| **CV Processing** | DC coupling capability | **Control voltage amplitude control** | **Beyond audio applications** |
| **Signal Splitting** | Normalling + different CVs | **Distribute audio with different processing** | **Efficient signal routing** |

**Advanced Techniques:**
- **BIAS for tremolo:** Essential for preventing complete VCA closure during negative LFO swings
- **Normalling control:** Strategic patching to break normalling only when needed
- **Independent operation:** Using both VCAs for different functions simultaneously
- **CV amplitude control:** Controlling LFO or envelope amplitudes, not just audio

**Learning Objectives:**
- **BIAS control mastery:** Understanding CV offset applications for musical effects
- **Normalling manipulation:** Efficient signal routing through selective normalling breaking
- **Dual VCA coordination:** Managing two VCAs with different control methods
- **Performance technique:** Real-time tremolo and amplitude control applications

### **Patch 3: Expert - System Integration and CV Processing**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Complex CV      │    │ Erica Synths    │    │ Audio           │    │ System Outputs  │
│ Sources         │    │ Pico VCA2       │    │ Processing      │    │                 │
│                 │    │                 │    │ Chain           │    │                 │
│ LFO Bank ○──────┼────┼─ IN1 ◀          │    │                 │    │                 │
│ (Multiple       │    │ (CV Signal)     │    │ Filter Module   │    │                 │
│ frequencies)    │    │                 │    │                 │    │                 │
│                 │    │ BIAS: 3 o'clock │    │ Cutoff Mod ◀────┼────┼─ OUT1 ○         │
│ Main Audio ○────┼────┼─ IN2 ◀          │    │ (Controlled     │    │ (Scaled CV)     │
│ Signal          │    │ (Audio Signal)  │    │ LFO Amount)     │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ VCA1 Function:  │    │ Audio In ◀──────┼────┼─ OUT2 ○         │
┌─────────────────┐    │ CV amplitude    │    │                 │    │ (Processed      │
│ Control         │    │ control for     │    │ Audio Out ○─────┼────┼─ Audio)         │
│ Voltages        │    │ modulation      │    │                 │    │                 │
│                 │    │ depth scaling   │    │                 │    │                 │
│ Envelope ○──────┼────┼─ CV1 ◀          │    │                 │    │                 │
│ (For LFO        │    │                 │    │                 │    │                 │
│ depth control)  │    │ VCA2 Function:  │    │                 │    │                 │
│                 │    │ Audio amplitude │    │                 │    │ To Mixer ◀──────┼────┼─ Multiple       │
│ Performance ○───┼────┼─ CV2 ◀          │    │ control for     │    │ Channel 1       │    │ Destinations    │
│ Controller      │    │                 │    │ final output    │    │                 │    │                 │
│ (Manual         │    │                 │    │ level           │    │ To Effects ◀────┼────┼─ Send/Return    │
│ expression)     │    │                 │    │                 │    │ Channel 2       │    │ Chain           │
└─────────────────┘    │ Professional    │    │                 │    │                 │    │                 │
                       │ Applications:   │    │                 │    │                 │    │                 │
                       │ • CV scaling    │    │                 │    │                 │    │                 │
                       │ • Audio mixing  │    │                 │    │                 │    │                 │
                       │ • Modulation    │    │                 │    │                 │    │                 │
                       │   depth control │    │                 │    │                 │    │                 │
                       │ • System        │    │                 │    │                 │    │                 │
                       │   integration   │    │                 │    │                 │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘

Professional System Integration:
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ CV Processing Applications:                                                          │
│ • VCA1 scales LFO amplitude via envelope control                                   │
│ • BIAS adjustment optimizes CV range for target parameter                          │
│ • Result: Dynamic modulation depth control in real-time                           │
│ • Professional technique: CV VCAs for automation and expression                   │
│                                                                                      │
│ Audio Processing Integration:                                                        │
│ • VCA2 provides final amplitude control before external processing                 │
│ • Performance controller enables real-time expression                             │
│ • Clean signal path maintains audio quality through processing chain               │
│                                                                                      │
│ System Benefits:                                                                     │
│ • Dual-purpose module: CV processing + audio control                              │
│ • Space-efficient solution in compact systems                                      │
│ • Professional-grade performance in minimal HP                                     │
│ • Integration point for manual expression and automation                          │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Expert Integration Techniques:**
| System Function | VCA Application | Control Method | Professional Benefit |
|----------------|-----------------|----------------|---------------------|
| **CV Scaling** | VCA1 for modulation depth | Envelope + BIAS | **Dynamic modulation control** |
| **Audio Processing** | VCA2 for output level | Performance controller | **Real-time expression** |
| **System Hub** | Dual inputs/outputs | Selective normalling | **Efficient signal routing** |
| **Automation** | Both VCAs coordinated | Multiple CV sources | **Complex amplitude automation** |

**Professional Applications:**
- **CV amplitude processing:** Using VCAs to control the depth of modulation sources
- **Audio system integration:** Final level control before external processing
- **Performance interface:** Manual expression control in automated systems
- **Compact system solutions:** Maximum functionality in minimal space

**Learning Objectives:**
- **CV processing mastery:** Understanding VCAs beyond audio amplitude control
- **System integration:** Using VCAs as control and processing hubs
- **Professional workflow:** Combining automation with manual expression control
- **Advanced routing:** Complex signal paths using normalling and independent control

---

## Pairs Well With

### **Phase 2 Module Synergies (VCA Coordination):**
- **Blue Lantern ADSR:** Envelope control for standard VCA applications
- **DivKid Ochd & Expander:** Multiple LFOs for tremolo and modulation depth control
- **Make Noise Maths:** Complex CV generation for advanced VCA control applications
- **Erica Synths modules:** Audio sources that benefit from precise amplitude control
- **Cross-Phase 2 Integration:** Essential amplitude control enabling sophisticated dynamics in complex systems

### **Perfect Partners for VCA Applications:**
- **Envelope generators:** Primary control sources for musical amplitude shaping
- **LFO modules:** Tremolo effects and periodic amplitude modulation
- **Audio sources:** Oscillators and external audio requiring amplitude control
- **Mixers:** VCA outputs feeding mixing stages for level balancing
- **Performance controllers:** Manual expression control for real-time dynamics

### **Advanced System Integration:**
- **Multiple Pico VCA2s:** Expanded VCA count for complex mixing and routing
- **Filter modules:** Audio processing chain with VCA level control
- **CV processors:** Additional CV scaling and amplitude control applications
- **Audio interfaces:** Professional I/O with VCA level matching

### **Essential Utility Partnerships:**
- **Multiple modules:** Signal distribution and level matching
- **CV sources:** Voltage control for amplitude automation
- **Audio processors:** Level control before and after processing stages
- **Performance interfaces:** Manual control integration in automated systems

### **Professional Workflow Integration:**
- **Mixing systems:** Multiple VCA channels for audio level balancing
- **Automation systems:** CV-controlled amplitude automation in complex patches
- **Performance setups:** Real-time expression control through amplitude manipulation
- **Studio integration:** Professional-grade VCA performance in compact modular systems

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with basic VCA operation:** Master fundamental amplitude control and normalling behavior
2. **Add bias control:** Understand CV offset applications for tremolo and ranging
3. **Include independent operation:** Break normalling for dual VCA functionality
4. **Add CV processing:** Use VCAs for control voltage amplitude control beyond audio
5. **Include system integration:** Professional workflow applications and complex routing
6. **Complete professional techniques:** Advanced automation and expression control methods

### **Cross-Module Learning Opportunities:**
- **Pico VCA2 + Envelope generators:** Standard envelope-controlled amplitude shaping
- **Pico VCA2 + LFO modules:** Tremolo effects and periodic amplitude modulation
- **Pico VCA2 + Audio sources:** Essential amplitude control for oscillators and external audio
- **Pico VCA2 + Mixers:** Level control and signal routing in mixing applications
- **All Phase 2 + Pico VCA2:** Essential amplitude control enabling dynamic expression in complex modular systems

### **Skill Development Milestones:**
- **Beginner:** Basic VCA operation, normalling behavior, envelope control
- **Intermediate:** Bias control applications, tremolo effects, independent VCA operation
- **Advanced:** CV processing, system integration, professional workflow applications
- **Expert:** Complex automation, performance integration, advanced signal routing

### **Advanced VCA Concepts:**
- **Linear Response Theory:** Understanding predictable amplitude control characteristics
- **Bias Control Applications:** CV offset techniques for musical and technical applications
- **Normalling Strategy:** Efficient signal routing through selective normalling control
- **System Integration Principles:** VCAs as essential system components for dynamics and control

### **Performance Applications:**
- **Real-time amplitude control:** Manual expression through VCA manipulation
- **Automated dynamics:** CV-controlled amplitude automation for musical expression
- **Signal routing:** Efficient distribution and processing using VCA normalling
- **Professional level control:** Precision amplitude management in studio and performance applications

---

**Bottom Line:** Pico VCA2 isn't just a compact VCA - it's a **professional amplitude control solution** that provides dual linear VCAs with bias control and intelligent normalling in just 3HP. Every patch teaches something new about amplitude control, from basic envelope shaping to complex CV processing. As an **essential utility within Phase 2 ecosystems**, it enables sophisticated dynamics and signal routing while maintaining the professional performance standards essential for both studio and performance applications in the most space-efficient format possible.