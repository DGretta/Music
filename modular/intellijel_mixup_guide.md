# Intellijel Mixup - Guide

**The Modular Output Interface for Studio Integration**

---

## Quick Start: Get Your First Modular-to-Studio Connection in 5 Minutes

**What is Mixup?** A dedicated output interface module that routes your modular synthesizer audio to external mixers, audio interfaces, and monitoring systems with proper level matching and multiple output options.

### Your First Modular Output Setup
1. **Connect main mix** - Patch your final modular mix to Mixup's Main L/R inputs
2. **Set output levels** - Use the main output attenuators to match your external gear
3. **Connect to interface** - Route Main outputs to your audio interface line inputs
4. **Monitor setup** - Connect headphones to Mixup's headphone output
5. **Adjust headphone level** - Set comfortable monitoring level with headphone volume control

**Congratulations!** You've just created a professional modular-to-studio interface with proper level matching!

---

## Essential Parameters (The Output Controls)

### **1. Main L/R Inputs - The Primary Audio Inputs**
- **What it does:** Accepts your main modular mix for output routing
- **Character:** High-quality audio path designed for final mix processing
- **Signal type:** Eurorack audio levels, designed for mixed content
- **Input impedance:** Optimized for modular audio sources
- **Pro tip:** Use these for your final stereo mix or main mono output

### **2. Main L/R Attenuators - The Output Level Control**
- **What it does:** Adjusts the output level sent to external gear
- **Character:** CCW reduces level, CW increases level, 12 o'clock typically matches line level
- **Range descriptions:** CCW (very low), 12 o'clock (line level), CW (hot output)
- **Purpose:** Match modular levels to external mixer/interface requirements
- **Pro tip:** Start at 12 o'clock and adjust based on your external gear's input sensitivity

### **3. Aux L/R Inputs - The Secondary Audio Inputs**
- **What it does:** Additional audio inputs for separate sources or sends
- **Character:** Same high-quality audio path as main inputs
- **Signal type:** Eurorack audio levels, independent from main inputs
- **Typical usage:** Separate voice outputs, effect returns, or alternate mixes
- **Pro tip:** Use for individual voice outputs when you need separate control

### **4. Aux L/R Attenuators - The Secondary Level Control**
- **What it does:** Independent level control for auxiliary inputs
- **Character:** Same range and behavior as main attenuators
- **Range descriptions:** CCW (very low), 12 o'clock (line level), CW (hot output)
- **Purpose:** Independent level matching for secondary sources
- **Pro tip:** Allows different level settings for main mix vs individual voices

### **5. Main Outputs (¼" TRS) - The Studio Connection**
- **What it does:** Balanced TRS outputs for professional audio connections
- **Character:** Clean, low-noise outputs suitable for studio equipment
- **Signal type:** Line level, balanced for noise rejection over long cable runs
- **Typical usage:** Connect to audio interface, mixer line inputs, or monitoring system
- **Pro tip:** Use balanced TRS cables for best signal integrity

### **6. Aux Outputs (¼" TRS) - The Secondary Studio Connection**
- **What it does:** Additional balanced outputs for auxiliary audio paths
- **Character:** Same professional quality as main outputs
- **Signal type:** Line level, balanced, independent from main outputs
- **Typical usage:** Separate recording channels, effect sends, or alternate monitoring
- **Pro tip:** Enables multi-channel recording or separate processing chains

### **7. Headphone Output - The Personal Monitoring**
- **What it does:** Dedicated headphone amplifier for direct monitoring
- **Character:** Clean, powerful headphone amp suitable for studio monitoring
- **Signal source:** Monitors the main output signal
- **Output type:** ¼" TRS headphone jack with dedicated volume control
- **Pro tip:** Essential for monitoring modular output without external headphone amp

### **8. Headphone Volume - The Monitor Level Control**
- **What it does:** Controls headphone output level independently
- **Character:** CCW (silent), CW (maximum volume)
- **Range:** Wide range suitable for different headphone impedances
- **Safety feature:** Independent control prevents accidental loud monitoring
- **Pro tip:** Set conservatively to protect hearing, especially with efficient headphones

---

## Beginner Patch Ideas

### **Patch 1: Basic Studio Output Setup**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Your Modular   │    │ Intellijel      │    │ Audio Interface │
│  Final Mix      │    │ Mixup           │    │ or Mixer        │
│                 │    │                 │    │                 │
│ L Mix Out ○─────┼────┼─ Main L Input ◀ │    │ Line Input L ◀──┼──┐
│                 │    │                 │    │                 │  │
│ R Mix Out ○─────┼────┼─ Main R Input ◀ │    │ Line Input R ◀──┼──┼──┐
└─────────────────┘    │                 │    │                 │  │  │
                       │ Main Atten: 12  │    │                 │  │  │
                       │                 │    │                 │  │  │
                       │ Main L Out ○────┼────┼─ ¼" TRS         │  │  │
                       │                 │    │                 │  │  │
                       │ Main R Out ○────┼────┼─ ¼" TRS         │  │  │
                       │                 │    └─────────────────┘  │  │
┌─────────────────┐    │ Headphone ○─────┼────────────────────────┼──┼──┐
│   Headphones    │    │ Volume: 10 o'cl │                        │  │  │
│                 │    │                 │                        │  │  │
│ L/R Input ◀─────┼────┼─ ¼" TRS         │                        │  │  │
└─────────────────┘    └─────────────────┘                        │  │  │
```

**Setup:** Basic stereo output routing from modular to studio equipment
**Controls:** Main attenuators at 12 o'clock for line level, headphone volume conservatively set
**Result:** Clean, professional audio routing with independent headphone monitoring
**Performance:** Real-time level adjustment without affecting headphone monitoring
**Applications:** Studio recording, live performance setup, basic monitoring needs

### **Patch 2: Advanced - Multi-Source Phase 2 Output Management**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Phase 2 Main    │    │ Intellijel      │    │ Audio Interface │    │ External Mixer  │
│ Ecosystem Mix   │    │ Mixup           │    │ Multi-Channel   │    │ or Monitoring   │
│                 │    │                 │    │                 │    │                 │
│ Ecosystem L ○───┼────┼─ Main L Input ◀ │    │ Input 1 ◀───────┼────┼─ Main L ○       │
│                 │    │                 │    │                 │    │                 │
│ Ecosystem R ○───┼────┼─ Main R Input ◀ │    │ Input 2 ◀───────┼────┼─ Main R ○       │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ Main Atten: 1   │    │ Input 3 ◀───────┼────┼─ Aux L ○        │
┌─────────────────┐    │                 │    │                 │    │                 │
│ Individual      │    │ Aux L Input ◀───┼────┼─ Lead Voice     │    │ Input 4 ◀───────┼────┼─ Aux R ○        │
│ Voice Outputs   │    │                 │    │ (Plaits)        │    │                 │    │                 │
│                 │    │ Aux R Input ◀───┼────┼─ Drum Voice     │    │                 │    │                 │
│ Lead Voice ○────┼────┼─ Aux L Input    │    │ (QD+QEX)        │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │    │                 │
│ Drum Voice ○────┼────┼─ Aux R Input    │    │ Aux Atten: 2    │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │    │                 │
                       │ Main L Out ○────┼────┼─ ¼" TRS         │    │                 │    │                 │
┌─────────────────┐    │                 │    │                 │    │                 │    │                 │
│   Studio        │    │ Main R Out ○────┼────┼─ ¼" TRS         │    │                 │    │                 │
│   Monitors      │    │                 │    │                 │    │                 │    │                 │
│                 │    │ Aux L Out ○─────┼────┼─ ¼" TRS         │    │                 │    │                 │
│ L Monitor ◀─────┼────┼─ From Mixer     │    │                 │    │                 │    │                 │
│                 │    │                 │    │ Aux R Out ○─────┼────┼─ ¼" TRS         │    │                 │
│ R Monitor ◀─────┼────┼─ From Mixer     │    │                 │    │                 │    │                 │
└─────────────────┘    │                 │    └─────────────────┘    │                 │    │                 │
                       │                 │                           │                 │    │                 │
┌─────────────────┐    │ Headphone ○─────┼──────────────────────────┼─ Monitor Mix    │    │                 │
│   Headphones    │    │ Volume: 11 o'cl │                          │                 │    │                 │
│                 │    │                 │                          │                 │    │                 │
│ L/R Input ◀─────┼────┼─ ¼" TRS         │                          │                 │    │                 │
└─────────────────┘    └─────────────────┘                          └─────────────────┘    │                 │
                                                                                            │                 │
                       ┌─────────────────────────────────────────────────────────────────┼─ Control Room   │
                       │                                                                 │  Monitoring      │
                       │ Professional Studio Integration:                                │                 │
                       │ • Main outputs: Complete Phase 2 ecosystem mix                 │                 │
                       │ • Aux outputs: Individual voices for separate processing       │                 │
                       │ • Multi-channel recording capability                           │                 │
                       │ • Independent headphone monitoring                             │                 │
                       │ • External mixer integration for advanced control              │                 │
                       └─────────────────────────────────────────────────────────────────┘                 │
```

**Module Integration:**
| Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------|-------------|---------|------------------|
| **Main Mix → Mixup** | Complete ecosystem → Main outputs | **Professional studio routing** | **Clean final output for complex patches** |
| **Individual Voices → Aux** | Separate sources → Aux outputs | **Multi-channel recording** | **Independent processing of Phase 2 elements** |
| **Mixup → Interface** | Balanced outputs → Recording system | **Professional signal integrity** | **Studio-quality capture of modular content** |
| **Mixup → Monitoring** | Headphone output → Direct monitoring | **Real-time feedback** | **Immediate assessment of complex patches** |

**Setup Instructions:**
- **Main Inputs:** Complete Phase 2 ecosystem mix (organic + chaos + patterns + voices)
- **Main Attenuators:** 1 o'clock for slightly hot signal to interface
- **Aux Inputs:** Individual voice outputs for separate recording channels
- **Aux Attenuators:** 2 o'clock for individual voice prominence
- **Output Routing:** Main to primary recording, Aux to secondary channels
- **Monitoring:** Headphone mix from main outputs for real-time assessment

**Advanced Studio Integration:**
- **Multi-channel recording:** Capture both full mix and individual elements simultaneously
- **Separate processing chains:** Process complete mix and individual voices differently
- **Professional monitoring:** Clean headphone feed independent of recording levels
- **External mixer integration:** Route to professional mixer for additional control
- **Signal integrity:** Balanced outputs maintain quality over long cable runs

**Learning Objectives:**
- **Professional audio standards:** Understanding balanced signals and proper level matching
- **Multi-channel workflow:** Managing complex modular content in studio environment
- **Phase 2 system output:** Proper routing of sophisticated modular ecosystems
- **Studio integration:** Connecting modular systems to professional audio workflows
- **Monitoring best practices:** Safe and effective modular monitoring techniques

**Alternative Approaches:**
- **Simpler setup:** Use only main outputs for basic stereo recording
- **Expanded routing:** Add external patch bay for more complex routing options
- **Monitor mixing:** Use external monitor controller for advanced monitoring
- **Direct monitoring:** Connect some sources directly to interface for comparison

**Performance Applications:**
- **Studio Recording:** Professional capture of Phase 2 ecosystem performances
- **Live Performance:** Reliable output for live modular performances
- **Sound Design:** Clean monitoring for detailed sound design work
- **Mixing Integration:** Seamless integration with traditional mixing workflows

---

## Pairs Well With

### **Essential Studio Partners:**
- **Audio Interfaces:** Focusrite, RME, Universal Audio interfaces benefit from Mixup's clean level matching
- **Studio Monitors:** Genelec, Yamaha, KRK monitors receive proper line levels from main outputs
- **Headphones:** Professional studio headphones (Beyerdynamic, Sennheiser, Audio-Technica) work optimally with dedicated headphone amp
- **External Mixers:** Analog mixing consoles receive clean, balanced signals for further processing
- **Patch Bays:** Professional patch bays enable flexible routing with Mixup as central output hub

### **Phase 2 Module Integration:**
- **Complete Ecosystems:** Mixup serves as final output stage for complex Phase 2 patches combining organic modulation, chaos, and pattern generation
- **Multi-Voice Systems:** Essential for routing individual voices (Plaits, QD+QEX, Loquelic) to separate channels while maintaining complete mix
- **Performance Systems:** Enables live performance of Phase 2 ecosystems with professional audio standards
- **Recording Integration:** Professional capture of sophisticated modular content for studio production

### **Advanced System Integration:**
- **Monitor Controllers:** Professional monitor controllers receive clean signals for advanced monitoring workflows
- **Effect Processing:** External processors receive individual channels for separate treatment
- **Mix Bus Processing:** Analog mix bus compressors and EQs receive proper levels for professional processing
- **Mastering Integration:** Clean signals suitable for mastering chain integration

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with basic output:** Learn proper level matching and headphone monitoring
2. **Add multi-channel routing:** Understand separate voice outputs and recording techniques
3. **Include studio integration:** Connect to professional audio interfaces and monitoring
4. **Advanced signal flow:** Master complex routing for Phase 2 ecosystem recording
5. **Performance application:** Apply learned concepts to live performance scenarios

### **Cross-Module Learning Opportunities:**
- **Output Management:** Learn to route complex Phase 2 patches professionally
- **Studio Integration:** Understand how modular fits into professional audio workflows
- **Professional Standards:** Apply audio engineering principles to modular systems
- **Monitoring Techniques:** Develop proper monitoring habits for modular synthesis

### **Advanced Concepts:**
- **Balanced Signal Theory:** Understanding XLR and TRS balanced connections for noise rejection
- **Level Management:** Proper gain staging from modular through professional audio chain
- **Impedance Matching:** How Mixup bridges modular and professional audio impedances
- **Signal Integrity:** Maintaining audio quality through complex routing scenarios

### **Performance Applications:**
- **Studio Recording:** Professional techniques for capturing modular performances
- **Live Performance:** Reliable output management for stage performances  
- **Sound Design:** Clean monitoring for detailed sound design work
- **Broadcast Integration:** Meeting professional broadcast standards with modular content

---

**Bottom Line:** Mixup isn't just an output module - it's a **professional audio bridge** that transforms your modular synthesizer into a studio-ready instrument through proper level matching, balanced outputs, and dedicated monitoring. Every connection teaches something new about professional audio standards and signal flow. As the **output brain of Phase 2 ecosystems**, it ensures that sophisticated modular content reaches recording systems and monitors with studio-quality integrity and professional reliability.