# Intellijel Mixup - Guide

**The Chainable Stereo Audio Utility Mixer**

![Intellijel Mixup](https://github.com/DGretta/Music/raw/main/modular/images/intellijel_mixup/front_panel.jpg)
*6HP stereo audio mixer with expandable inputs, mute controls, and chainable back panel connectors for larger mixing systems*

---

## Quick Start: Get Your First Stereo Mix in 5 Minutes

**What is Mixup?** A versatile 6HP stereo mixer that combines multiple audio sources with independent level controls and mute switches. It can be chained with other Mixup modules to create larger mixing systems for complex modular patches.

### Your First Stereo Mix Setup
1. **Connect audio sources** - Patch your voices into IN 1, IN 2, and IN 3L/3R inputs
2. **Set input levels** - Use LEVEL 1, LEVEL 2, and LEVEL 3 knobs to balance your mix
3. **Use mute controls** - MUTE 1, MUTE 2, and MUTE 3 switches for performance control
4. **Take your mix** - Final stereo mix appears at MIX L and MIX R outputs
5. **Monitor levels** - Watch the CLIP LED to avoid overloading the mix bus

**Congratulations!** You've just created a professional stereo mix with independent channel control!

---

## Essential Parameters (The Mix Controls)

### **1. LEVEL 1 Knob - Input 1 Volume Control**
- **What it does:** Controls the volume of IN 1 (mono input) sent to both MIX L and MIX R outputs
- **Character:** Logarithmic audio taper for smooth volume control across entire range
- **Signal routing:** IN 1 appears at both left and right mix outputs (mono to stereo)
- **Input impedance:** Optimized for modular audio sources
- **Pro tip:** Start with moderate levels to leave headroom for additional sources

### **2. LEVEL 2 Knob - Input 2 Volume Control**
- **What it does:** Controls the volume of IN 2 (mono input) sent to both MIX L and MIX R outputs
- **Character:** Same logarithmic audio taper as LEVEL 1 for consistent feel
- **Signal routing:** IN 2 appears at both left and right mix outputs (mono to stereo)
- **Purpose:** Independent level control for second mono source
- **Pro tip:** Use for secondary voices or modulation sources that need separate level control

### **3. LEVEL 3 Knob - Input 3 Stereo Volume Control**
- **What it does:** Controls the volume of both IN 3L and IN 3R simultaneously
- **Character:** Shared control for stereo pair with logarithmic audio taper
- **Signal routing:** IN 3L → MIX L, IN 3R → MIX R (true stereo)
- **Mono usage:** If only IN 3L connected, signal appears at both MIX L and MIX R
- **Pro tip:** Perfect for stereo sources like reverb returns or stereo oscillators

### **4. MUTE 1 Switch - Input 1 On/Off Control**
- **What it does:** Completely removes IN 1 from both MIX outputs when engaged (down position)
- **Character:** Hard mute with no audio bleed-through
- **Usage:** Performance control for bringing voices in and out of mix
- **AC-coupled design:** Minimizes pops when muting/unmuting audio signals
- **Pro tip:** Essential for live performance and dynamic mix changes

### **5. MUTE 2 Switch - Input 2 On/Off Control**
- **What it does:** Completely removes IN 2 from both MIX outputs when engaged (down position)
- **Character:** Same hard mute behavior as MUTE 1
- **Purpose:** Independent performance control for second mono input
- **Operation:** Up = signal passes, Down = signal muted
- **Pro tip:** Combine with MUTE 1 for call-and-response performance techniques

### **6. MUTE 3 Switch - Input 3 Stereo On/Off Control**
- **What it does:** Simultaneously mutes both IN 3L and IN 3R when engaged (down position)
- **Character:** Shared mute control for stereo pair
- **Purpose:** Performance control for stereo sources
- **Behavior:** Affects both channels of stereo input simultaneously
- **Pro tip:** Great for dropping stereo effects or textural elements during performance

### **7. IN 4L/4R - Unity Gain Auxiliary Inputs**
- **What they do:** Direct stereo inputs to mix bus with no level or mute control
- **Character:** Unity gain (no amplification or attenuation)
- **Signal routing:** IN 4L → MIX L, IN 4R → MIX R, no front panel controls
- **Mono usage:** If only IN 4L connected, signal appears at both MIX L and MIX R
- **Pro tip:** Use for sources that need consistent level or quick patch additions

### **8. CLIP LED - Mix Level Indicator**
- **What it does:** Lights when the sum of all inputs causes MIX L or MIX R to clip
- **Character:** Indicates overload of internal mix bus before outputs
- **Sources monitored:** All front panel inputs plus any CHAIN-IN signals
- **Prevention:** Reduce LEVEL knobs when LED lights to maintain clean output
- **Pro tip:** Some LED activity is acceptable, but constant lighting indicates excessive levels

---

## Beginner Patch Ideas

### **Patch 1: Basic Stereo Mix Setup**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Voice 1 (Mono)  │    │ Intellijel      │    │ Audio Output    │
│ (Oscillator)    │    │ Mixup           │    │ Destination     │
│                 │    │                 │    │                 │
│ Audio Out ○─────┼────┼─▶ IN 1         │    │                 │
└─────────────────┘    │                 │    │                 │
                       │ LEVEL 1: 2      │    │                 │
┌─────────────────┐    │ MUTE 1: Up      │    │                 │
│ Voice 2 (Mono)  │    │                 │    │                 │
│ (Filter)        │    │ IN 2 ◀──────────┼────┼─ Audio In       │
│                 │    │                 │    │                 │
│ Audio Out ○─────┼────┼─▶ IN 2         │    │                 │
└─────────────────┘    │                 │    │                 │
                       │ LEVEL 2: 3      │    │                 │
┌─────────────────┐    │ MUTE 2: Up      │    │                 │
│ Stereo Source   │    │                 │    │                 │
│ (Reverb)        │    │ IN 3L ◀─────────┼────┼─ L Out          │
│                 │    │                 │    │                 │
│ L Out ○─────────┼────┼─▶ IN 3L        │    │ MIX L ○─────────┼────┼─ To Interface  │
│                 │    │                 │    │                 │    │                 │
│ R Out ○─────────┼────┼─▶ IN 3R        │    │ MIX R ○─────────┼────┼─ To Interface  │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ LEVEL 3: 2      │    │                 │    │                 │
                       │ MUTE 3: Up      │    │                 │    │                 │
                       │                 │    │                 │    │                 │
                       │ CLIP LED: Off   │    │                 │    │                 │
                       └─────────────────┘    └─────────────────┘    │                 │
```

**Setup:** Basic three-source stereo mixing with independent level control
**Controls:** LEVEL knobs balance sources, MUTE switches for performance control
**Result:** Clean stereo mix with individual source control and level monitoring
**Performance:** Real-time muting and level adjustment for dynamic mixing
**Applications:** Basic voice mixing, simple performance patches, submix creation

**Main Example:** Mutable Plaits + Make Noise QPAS + Intellijel Rainmaker → Mixup (classic voice + filter + reverb chain)
**Alternative Options:**
- **Budget:** Simple oscillator + basic filter + FX Aid Pro for affordable mixing setup
- **Different character:** Buchla complex oscillator + Morgasmatron + Magneto for West Coast mixing approach
- **Premium:** Make Noise DPO + Optomix + Strymon Magneto for high-end modular mixing chain

### **Patch 2: Advanced - Expandable Mixer Chain System**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Mixup #1        │    │ Mixup #2        │    │ Audio Interface │    │ Final Output    │
│ (Primary)       │    │ (Expansion)     │    │ or Mixer        │    │ Destination     │
│                 │    │                 │    │                 │    │                 │
│ Voice 1 → IN 1  │    │ Voice 4 → IN 1  │    │ Input L ◀───────┼────┼─ Final L        │
│                 │    │                 │    │                 │    │                 │
│ Voice 2 → IN 2  │    │ Voice 5 → IN 2  │    │ Input R ◀───────┼────┼─ Final R        │
│                 │    │                 │    │                 │    │                 │
│ Stereo FX→IN 3L/R│    │ Drums → IN 3L/R │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ CHAIN-OUT ○─────┼────┼─▶ CHAIN-IN      │    │                 │    │                 │
│                 │    │                 │    │                 │    │                 │
│ [No direct out] │    │ MIX L ○─────────┼────┼─▶ Line Input    │    │                 │
│                 │    │                 │    │                 │    │                 │
│ [Feeds Mixup #2]│    │ MIX R ○─────────┼────┼─▶ Line Input    │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ Combined Signal │    │                 │    │                 │
┌─────────────────┐    │ = All 6 voices  │    │                 │    │                 │
│ Performance     │    │ + Both FX       │    │                 │    │                 │
│ Control         │    │ + Individual    │    │                 │    │                 │
│                 │    │   Level/Mute    │    │                 │    │                 │
│ MUTE 1-3 ◀──────┼────┼─ Real-time Mix  │    │                 │    │                 │
│ LEVEL 1-3 ◀─────┼────┼─ Control        │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

**Module Integration:**
| Integration | Signal Flow | Purpose | Advanced Synergy |
|-------------|-------------|---------|------------------|
| **Mixup #1 → Mixup #2** | CHAIN-OUT → CHAIN-IN | **Serial expansion** | **Transparent signal flow** |
| **Individual Sources** | Voices → separate inputs | **Independent control** | **Performance flexibility** |
| **Combined Output** | All sources → final mix | **Unified output** | **Professional signal management** |
| **Live Control** | Mute/Level controls | **Real-time mixing** | **Performance-ready operation** |

**Setup Instructions:**
- **Mixup #1:** Primary voices and stereo effects with individual level control
- **Mixup #2:** Additional voices and drum sources for expanded mixing
- **Chain Connection:** 3-pin link cable from Mixup #1 CHAIN-OUT to Mixup #2 CHAIN-IN
- **Final Output:** Mixup #2 provides combined mix of all six voices plus effects
- **Performance Control:** All individual mute and level controls remain functional

**Advanced Mixing System:**
- **Expandable inputs:** Up to 6 independent mono sources plus 2 stereo sources
- **Independent control:** Each input maintains individual level and mute control
- **Clean signal path:** Audio-grade components throughout chain for professional quality
- **Performance ready:** Real-time mixing control for live performance applications
- **Studio integration:** Professional output suitable for recording or further processing

**Learning Objectives:**
- **Signal routing:** Understanding chainable mixer architecture and signal flow
- **System expansion:** Building larger mixing systems from modular components
- **Performance mixing:** Real-time control techniques for dynamic mixing
- **Professional audio:** Clean signal management and studio integration practices

**Main Example:** Two Mixup modules chained for 6-voice mixing system (standard expansion approach)
**Alternative Options:**
- **Budget:** Single Mixup + external submixer for basic expansion
- **Different character:** Happy Nerding 3xMIA + Doepfer A-138m for matrix mixing approach
- **Premium:** Multiple Intellijel Stereo Mix 1U modules in 7U case for integrated mixing system

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