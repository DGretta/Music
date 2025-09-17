# Intellijel Stomp - Guide

**The Eurorack-to-Pedal Bridge with Expression Control**

---

## Quick Start: Get Your First Modular-to-Pedal Chain in 5 Minutes

**What is Stomp?** A specialized interface module that bridges the gap between Eurorack modular and guitar/bass pedal ecosystems, providing proper impedance matching, level conversion, and CV-controlled expression pedal automation.

### Your First Modular-to-Pedal Chain
1. **Connect modular source** - Patch your oscillator or voice to Stomp's ¼" SEND output
2. **Set level switch** - Use LINE mode for modular sources, INST for guitars/basses
3. **Connect pedal chain** - SEND → your pedal → pedal output back to Stomp's ¼" RETURN input
4. **Adjust MIX control** - Balance between dry modular signal and processed pedal return
5. **Monitor output** - Take mixed signal from Stomp's modular output back to your system

**Congratulations!** You've just processed modular synthesis through guitar pedals with proper impedance matching!

---

## Essential Parameters (The Bridge Controls)

### **1. LEVEL Switch - The Impedance Selector**
- **What it does:** Switches between instrument-level (INST) and line-level (LINE) operation
- **Character:** INST mode for guitars/basses, LINE mode for modular/synth sources
- **Settings:** INST (high-impedance guitar input), LINE (modular/synth levels)
- **CV controllable:** No - hardware switch only
- **Pro tip:** LINE mode is essential for proper modular signal levels

### **2. MIX Control - The Wet/Dry Balance**
- **What it does:** Blends between dry input signal and processed pedal return
- **Character:** CCW = full dry signal, CW = full pedal-processed signal, 12 o'clock = balanced mix
- **Range descriptions:** CCW (dry only), 12 o'clock (50/50 blend), CW (pedal only)
- **CV controllable:** Yes - CV input with attenuverter
- **Pro tip:** Use CV control for automated effect send amounts

### **3. EXPR LEVEL - The Expression Scaling**
- **What it does:** Controls the amount of CV sent to expression pedal outputs
- **Character:** Scales CV signals to proper expression pedal voltage ranges (0-3.3V)
- **Range descriptions:** CCW (no expression), 12 o'clock (moderate), CW (maximum expression range)
- **CV controllable:** No - manual control only
- **Pro tip:** Start at 12 o'clock and adjust based on pedal response

### **4. LFO RATE - The Internal Modulation Speed**
- **What it does:** Sets speed of internal LFO for expression pedal automation
- **Character:** Slow modulation to fast tremolo-like rates
- **Range descriptions:** CCW (very slow, ~30 seconds), 12 o'clock (musical rates), CW (audio rate)
- **CV controllable:** Yes - CV input overrides manual control when patched
- **Pro tip:** Musical rates (9-3 o'clock) work best for most expression applications

### **5. LFO SHAPE - The Waveform Selector**
- **What it does:** Selects waveform for internal LFO
- **Character:** Different mathematical curves for varied expression pedal automation
- **Range descriptions:** Triangle, Sine, Square, Random shapes available
- **CV controllable:** No - manual selection only
- **Pro tip:** Sine and triangle waves provide smoothest expression pedal control

### **6. Expression Outputs - The CV-to-Expression Bridge**
- **What it does:** Converts modular CV signals to expression pedal control voltages
- **Character:** Unipolar 0-3.3V range compatible with most expression pedal inputs
- **Signal type:** Unipolar CV, automatically scaled from bipolar modular sources
- **CV controllable:** These ARE the CV outputs for pedal expression control
- **Pro tip:** Use TRS cables for expression pedal connections

---

## Beginner Patch Ideas

### **Patch 1: Basic Modular-to-Pedal Processing**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Mutable Plaits │    │ Intellijel Stomp│    │ Boss RE-202     │
│                 │    │                 │    │ Space Echo      │
│ Audio Out ○─────┼────┼─ ¼" SEND ○──────┼────┼─ Input ◀        │
└─────────────────┘    │                 │    │                 │
                       │ LEVEL: LINE     │    │ Output ○────────┼──┐
                       │ MIX: 12 o'clock │    └─────────────────┘  │
                       │                 │                         │
                       │ ¼" RETURN ◀─────┼─────────────────────────┘
                       │                 │
                       │ Audio Out ○─────┼──▶ Back to Modular
                       └─────────────────┘
```
**Setup:** Plaits in LINE mode, MIX at 12 o'clock for balanced wet/dry
**Controls:** Adjust Plaits timbre, RE-202 time/feedback for space echo character
**Result:** Warm synthesis processed through vintage tape echo emulation
**Performance:** Real-time MIX control blends clean synthesis with processed echo

### **Patch 2: Guitar Input with Modular Processing**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Guitar      │    │ Intellijel Stomp│    │ Erica Synths    │
│                 │    │                 │    │ Black Polivoks  │
│ Output ○────────┼────┼─ ¼" Input ◀     │    │ VCF             │
└─────────────────┘    │                 │    │                 │
                       │ LEVEL: INST     │    │ Audio In ◀──────┼──┐
                       │ MIX: 2 o'clock  │    │                 │  │
                       │                 │    │ Audio Out ○─────┼──┼──┐
                       │ Modular Out ○───┼────┼─ Input ◀        │  │  │
                       │                 │    └─────────────────┘  │  │
                       │ ¼" RETURN ◀─────┼───────────────────────┘  │
                       │                 │                          │
                       │ Audio Out ○─────┼──────────────────────────┘
                       └─────────────────┘
```
**Setup:** Guitar in INST mode, process through modular filter, return to Stomp
**Controls:** Polivoks VCF cutoff and resonance for classic analog filtering
**Result:** Guitar processed through Soviet-style analog filtering
**Performance:** Live filter cutoff control transforms guitar tone in real-time

### **Patch 3: Dual Pedal Chain Integration**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Noise Eng.     │    │ Intellijel Stomp│    │ Strymon El      │    │ Walrus Audio    │
│  Loquelic       │    │                 │    │ Capistan        │    │ Julianna        │
│  Iteritas       │    │                 │    │                 │    │                 │
│ Audio Out ○─────┼────┼─ ¼" SEND ○──────┼────┼─ Input ◀        │    │ Input ◀─────────┼──┐
└─────────────────┘    │                 │    │                 │    │                 │  │
                       │ LEVEL: LINE     │    │ Output ○────────┼────┼─ Input ◀        │  │
                       │ MIX: 1 o'clock  │    └─────────────────┘    │                 │  │
                       │                 │                           │ Output ○────────┼──┼──┐
                       │ ¼" RETURN ◀─────┼───────────────────────────┼─ Output ○       │  │  │
                       │                 │                           └─────────────────┘  │  │
                       │ Audio Out ○─────┼──────────────────────────────────────────────┘  │
                       └─────────────────┘                                                 │
```
**Setup:** Loquelic synthesis → Stomp → El Capistan delay → Julianna chorus → back to modular
**Controls:** El Capistan time/feedback, Julianna rate/depth for layered time-based effects
**Result:** Complex synthesis processed through professional-grade time-based effect chain
**Performance:** Stomp MIX control balances dry synthesis against processed effect chain

### **Patch 4: Expression Pedal Integration**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Make Noise     │    │ Intellijel Stomp│    │ Behringer FX600 │
│  Plaits         │    │                 │    │ Multi Effect    │
│                 │    │ LFO Rate: Slow  │    │                 │
│ Audio Out ○─────┼────┼─ ¼" SEND ○──────┼────┼─ Input ◀        │
└─────────────────┘    │ LFO Shape: Sine │    │                 │
                       │ EXPR LEVEL: 12  │    │ Expr In ◀───────┼──┐
                       │                 │    │                 │  │
                       │ Expression ○────┼────┼─ Expression     │  │
                       │ Out (TRS)       │    │ Output ○────────┼──┼──┐
                       │                 │    └─────────────────┘  │  │
                       │ ¼" RETURN ◀─────┼───────────────────────┘  │
                       │                 │                          │
                       │ Audio Out ○─────┼──────────────────────────┘
                       └─────────────────┘
```
**Setup:** Use Stomp's internal LFO to automate FX600's expression-controlled parameters
**Controls:** LFO RATE for automation speed, EXPR LEVEL for modulation intensity
**Result:** Automated multi-effect processing with cyclical parameter changes
**Performance:** Real-time LFO rate adjustment creates different automation characters

---

### **Patch 5: Intermediate - Expression Pedal Automation**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   DivKid Ochd   │    │ Intellijel Stomp│    │ Strymon El      │    │  Take 5 Analog  │
│   & Expander    │    │                 │    │ Capistan        │    │  Synthesizer    │
│                 │    │ LEVEL: LINE     │    │ Tape Echo       │    │                 │
│ LFO 1 ○─────────┼────┼─ CV Input ◀     │    │                 │    │ Audio Out ○─────┼──┐
│ (Slow)          │    │                 │    │ Expression ◀────┼────┼─ Expression ○   │  │
└─────────────────┘    │ EXPR LEVEL: 10  │    │ (Tape Speed)    │    └─────────────────┘  │
                       │                 │    │                 │                         │
                       │ ¼" SEND ○───────┼────┼─ Input ◀        │                         │
                       │                 │    │                 │                         │
                       │ MIX: 2 o'clock  │    │ Output ○────────┼──┐                      │
                       │                 │    └─────────────────┘  │                      │
                       │ ¼" RETURN ◀─────┼───────────────────────┘                      │
                       │                 │                                                │
                       │ Audio Out ○─────┼────────────────────────────────────────────────┘
                       └─────────────────┘
```

**Module Integration:**
| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd → Stomp** | LFO CV → Expression scaling | **Automated tape speed control** | **Natural timing variations** |
| **Take 5 → Stomp** | Analog synthesis → Send | **Source signal processing** | **Rich analog tones for processing** |
| **Stomp → El Capistan** | Expression CV → Tape parameters | **Automated vintage effects** | **Musical timing automation** |

### **Patch 6: Advanced - Chaos Expression Mathematics**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Make Noise      │    │ Intellijel Stomp│    │ Walrus Audio    │    │ Boss RE-202     │
│ Wogglebug       │    │                 │    │ Julianna        │    │ Space Echo      │
│                 │    │ LEVEL: LINE     │    │ Chorus/Vibrato  │    │                 │
│ Smooth ○────────┼────┼─ CV Input ◀     │    │                 │    │ Input ◀─────────┼──┐
│                 │    │                 │    │ Expression ◀────┼────┼─ Expression ○   │  │
│ Stepped ○───────┼──┐ │ EXPR LEVEL: 1   │    │ (Rate/Depth)    │    └─────────────────┘  │
└─────────────────┘  │ │                 │    │                 │                         │
                     │ │ ¼" SEND ○───────┼────┼─ Input ◀        │                         │
┌─────────────────┐  │ │                 │    │                 │                         │
│  Noise Eng.     │  │ │ MIX: 3 o'clock  │    │ Output ○────────┼──┐                      │
│  Loquelic       │  │ │                 │    └─────────────────┘  │                      │
│  Iteritas       │  │ │ ¼" RETURN ◀─────┼───────────────────────┘                      │
│                 │  │ │                 │                                                │
│ Audio Out ○─────┼──┘ │ Audio Out ○─────┼────────────────────────────────────────────────┘
└─────────────────┘    └─────────────────┘
```

**Module Integration:**
| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Wogglebug → Stomp** | Chaos CV → Expression scaling | **Unpredictable modulation** | **Mathematical randomness control** |
| **Loquelic → Stomp** | Complex synthesis → Send | **Rich harmonic source** | **Chaos-processed complex tones** |
| **Stomp → Julianna** | Expression CV → Chorus parameters | **Chaotic modulation effects** | **Unpredictable texture evolution** |

### **Patch 7: Expert - Complete Expression Control Ecosystem**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Squarp Hermod+  │    │   MetaModule    │    │ Cre8audio       │    │ Intellijel Stomp│
│                 │    │                 │    │ Function        │    │                 │
│ CV Track 1 ○────┼────┼─ CV Input A ◀   │    │ Junction        │    │ LEVEL: LINE     │
│ (Sequences)     │    │                 │    │                 │    │                 │
│                 │    │ Fundamental     │    │ Input A ◀───────┼────┼─ CV A ○         │
│ CV Track 2 ○────┼──┐ │ VCO Plugin      │    │                 │    │                 │
│ (Quantized)     │  │ │                 │    │ Attenuvert A ○──┼────┼─ CV Input ◀     │
│                 │  │ │ CV Output ○─────┼────┼─ Input B ◀      │    │                 │
│ Trigger Out ○───┼──┼─┼─ Trig Input ◀   │    │                 │    │ EXPR LEVEL: 2   │
└─────────────────┘  │ │                 │    │ Sum Output ○────┼────┼─ CV B Input ◀   │
                     │ │ Audio Out ○─────┼──┐ │                 │    │                 │
                     │ └─────────────────┘  │ │ Offset ○────────┼────┼─ MIX CV ◀       │
                     │                      │ └─────────────────┘    │                 │
                     │ ┌─────────────────┐  │                        │ Expression A ○──┼──┐
                     │ │  Strymon El     │  │                        │                 │  │
                     │ │  Capistan       │  │                        │ Expression B ○──┼──┼──┐
                     │ │  Tape Echo      │  │                        │                 │  │  │
                     │ │                 │  │                        │ ¼" SEND ○───────┼──┼──┼──┐
                     │ │ Expression A ◀──┼──┼────────────────────────┼─ Expression A   │  │  │  │
                     │ │ (Tape Speed)    │  │                        │                 │  │  │  │
                     │ │                 │  │                        │ Audio Out ○─────┼──┼──┼──┼──▶
                     │ │ Input ◀─────────┼──┼────────────────────────┼─ ¼" SEND        │  │  │  │
                     │ │                 │  │                        └─────────────────┘  │  │  │
                     │ │ Output ○────────┼──┼──┐                                          │  │  │
                     │ └─────────────────┘  │  │                                          │  │  │
                     │                      │  │ ┌─────────────────┐                     │  │  │
                     │                      │  │ │ Walrus Audio    │                     │  │  │
                     │                      │  │ │ Julianna        │                     │  │  │
                     │                      │  │ │ Chorus/Vibrato  │                     │  │  │
                     │                      │  │ │                 │                     │  │  │
                     │                      │  │ │ Expression B ◀──┼─────────────────────┘  │  │
                     │                      │  │ │ (Rate & Depth)  │                        │  │
                     │                      │  │ │                 │                        │  │
                     │                      │  └─┼─ Input ◀        │                        │  │
                     │                      │    │                 │                        │  │
                     │                      │    │ Output ○────────┼────────────────────────┘  │
                     │                      │    └─────────────────┘                           │
                     │                      │                                                  │
                     └──────────────────────┼──────────────────────────────────────────────────┘
                                            │
                     ┌─────────────────┐    │
                     │ Intellijel Stomp│    │
                     │ (Return Path)   │    │
                     │                 │    │
                     │ ¼" RETURN ◀─────┼────┘
                     │                 │
                     │ MIX: CV Control │
                     │                 │
                     │ Final Out ○─────┼──▶ Back to Modular
                     └─────────────────┘
```

**Complete System Integration:**
| Layer | Function | Stomp Role | Musical Result |
|-------|----------|------------|----------------|
| **Sequencing (Hermod+)** | Programmed patterns | **CV source coordination** | **Structured expression automation** |
| **Synthesis (MetaModule)** | Fundamental VCO plugin | **Signal source processing** | **Controlled harmonic content** |
| **Processing (Function Junction)** | CV manipulation | **Expression scaling/offset** | **Precise parameter control** |
| **Expression (Stomp)** | Multi-pedal automation | **System brain** | **Coordinated pedal ecosystem** |

---

## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Coordinated LFO automation for natural expression pedal timing
- **Make Noise Wogglebug:** Chaos-controlled expression automation creates unpredictable but musical pedal parameter evolution
- **Mutable Marbles:** Learning circuits provide adaptive expression pedal automation that evolves with musical context
- **Squarp Hermod+:** Sequenced expression control with quantization enables precise, programmed pedal automation sequences
- **Cre8audio Function Junction:** CV processing for expression voltage scaling, offsetting, and complex multi-source expression control

### **Perfect Partners for Beginners:**
- **Mutable Plaits:** Rich synthesis source that benefits from pedal processing character
- **Make Noise Maths:** Provides envelopes and LFOs for basic expression pedal automation
- **Intellijel Quadrax:** Four independent envelopes create discrete expression pedal automation
- **Any expression-capable pedal:** Strymon, Boss, Walrus Audio, and other manufacturers with expression inputs

### **Advanced Expression Control Integration:**
- **Multiple expression pedals:** Chain multiple expression-capable pedals for complex automated effect scenarios
- **Re-amping workflows:** Use Stomp as professional re-amping interface for studio applications
- **Hybrid performance systems:** Combine modular synthesis generation with pedal processing for live performance

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Stomp fundamentals:** Understanding impedance matching, level conversion, and send/return concepts
2. **Add expression automation:** Integrate internal LFO for basic pedal parameter automation
3. **Include external CV control:** Use Ochd or other CV sources for sophisticated expression automation
4. **Add chaos mathematics:** Integrate Wogglebug or chaos sources for unpredictable expression control
5. **Include multi-function sequencing:** Add Hermod+ for programmed expression sequences
6. **Complete the ecosystem:** Integrate Function Junction for advanced CV processing and multi-pedal control

### **Cross-Module Learning Opportunities:**
- **Stomp + Ochd:** Natural timing automation for musical expression pedal control
- **Stomp + Wogglebug:** Mathematical chaos applied to expression pedal automation
- **Stomp + Hermod+:** Sequenced expression automation with quantization and programming capabilities
- **All Phase 2 + Stomp:** Complete ecosystem enabling sophisticated pedal automation within modular systems

### **Advanced Expression Control Concepts:**
- **Impedance Theory:** Understanding high-Z vs low-Z, instrument vs line levels, and proper signal matching
- **Expression Voltage Standards:** 0-3.3V unipolar signals, TRS wiring, and pedal compatibility considerations
- **CV Signal Processing:** Bipolar-to-unipolar conversion, scaling, offsetting, and multi-source coordination

---

**Bottom Line:** Stomp isn't just an interface - it's a **bridge processor** that transforms modular CV generation into expression pedal automation through proper impedance conversion and level management. Every patch teaches something new about how signal flow and impedance matching really work. As the **expression automation brain of Phase 2 ecosystems**, it transforms organic modulation, controlled chaos, and pattern learning into unified pedal expression control that bridges the modular and pedal worlds seamlessly.