# Intellijel Stomp - Guide

**The Eurorack-to-Pedal Bridge with Expression Control**

![Intellijel Stomp](https://github.com/DGretta/Music/raw/main/modular/images/intellijel_stomp/front_panel.jpg)
*Intellijel Stomp - Effects pedal send/return module with expression control and built-in LFO for automated pedal parameter control*

---

## What This Unlocks From Your Existing Gear

### **Effects Pedals (The Big One):**
- **Guitar pedals collecting dust** - Distortion, overdrive, fuzz boxes suddenly become modular processors
- **Bass effects** - Deep, powerful processors perfect for modular's wide frequency range
- **Boutique pedals** - That expensive Chase Bliss or Empress pedal becomes a modular effect with CV automation
- **Vintage effects** - Classic analog choruses, phasers, delays gain new life in modular context
- **Expression-capable pedals** - Strymon, Boss, Walrus Audio pedals with expression inputs become fully automated

### **Audio Interfaces & Studio Gear:**
- **Multi-output interfaces** - Use line outputs as modular sends, inputs as returns
- **Mixing consoles** - Send modular to console channels, return processed signals to modular
- **Outboard processors** - Compressors, EQs, vintage gear becomes part of modular signal chain
- **Re-amping boxes** - Use with Stomp for professional re-amping workflows

### **Instruments:**
- **Electric guitars** - Process through modular filters, effects, sequenced patterns
- **Bass guitars** - Low-end perfect for modular processing, sub-oscillator territory
- **Electric pianos** - Vintage Fender Rhodes through modular effects creates new textures
- **Synthesizers with individual outputs** - Drum machines, analog synths become modular-processable
- **Acoustic instruments with pickups** - Kalimba, violin, sax with contact mics enter modular world

### **MIDI Gear:**
- **Controllers with expression pedals** - Become CV automation sources through Stomp's expression outputs
- **Keyboards with aftertouch** - Dynamic control over Stomp's expression parameters
- **Control surfaces** - Sliders and knobs can control multiple Stomp parameters via CV conversion

### **Forgotten Rack Gear:**
- **90s digital processors** - Lexicon, Yamaha, Alesis effects with character impossible to recreate
- **Vintage preamps** - Tube and solid-state character processing
- **Old samplers** - Individual outputs become modular sources
- **Drum machines** - Classic rhythm boxes processed through modular effects

**Discovery moment:** That pile of "guitar-only" gear suddenly becomes a modular effects library, and every expression-capable pedal becomes an automated modular processor.

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

**Alternative Module Options:**
- **Instead of Mutable Plaits:** Try Noise Engineering Loquelic Iteritas for complex harmonic content, or Erica Synths Pico Voice for compact 8-algorithm synthesis
- **Budget alternatives:** 2HP Pluck provides simple synthesis, Doepfer A-110-1 offers classic VCO tones
- **Different character:** Make Noise 0-Coast for West Coast synthesis, Instruo Cs-L for pure sine wave fundamentals
- **Instead of Boss RE-202:** Try Strymon El Capistan for premium tape echo, or TC Electronic Flashback for budget digital delay
- **Premium pedal:** Empress Echosystem for comprehensive delay algorithms, Chase Bliss Thermae for pitch-shifting delays

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

**Alternative Module Options:**
- **Instead of Erica Synths Black Polivoks VCF:** Try Make Noise STO for aggressive resonance, or Intellijel Morgasmatron for stereo filtering
- **Budget alternatives:** Doepfer A-120 provides classic Moog-style filtering, 2HP VCF offers compact lowpass filtering
- **Different character:** WMD/SSF Pole-Zero for unique filter topology, Rossum Electro-Music Evolution for digital precision
- **Premium options:** Mannequins Sisters for complex filter relationships, Verbos Electronics Multi-Delay for pristine analog filtering

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

**Alternative Module Options:**
- **Instead of Noise Engineering Loquelic Iteritas:** Try Mutable Instruments Braids for versatile synthesis algorithms, or Instruo Arbhar for granular textures
- **Budget alternatives:** Erica Synths Pico Voice provides 8 algorithms, 2HP Bell offers simple FM synthesis
- **Different character:** Make Noise STO for pure sine wave fundamentals, Verbos Complex Oscillator for West Coast approach
- **Instead of Strymon El Capistan:** Try Boss RE-202 for classic space echo, or TC Electronic Flashback for budget digital delay
- **Instead of Walrus Audio Julianna:** Try Boss CE-2W for vintage chorus, or EHX Small Clone for budget analog chorus
- **Premium pedal chain:** Empress Reverb + Chase Bliss Warped Vinyl for ultimate time-based processing

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

**Alternative Module Options:**
- **Instead of Make Noise Plaits:** Try Mutable Instruments Braids for algorithm variety, or Erica Synths Pico Voice for compact synthesis
- **Budget alternatives:** Doepfer A-110-1 provides classic VCO tones, 2HP Pluck offers simple synthesis
- **Different character:** Instruo Cs-L for pure sine fundamentals, Make Noise STO for aggressive harmonic content
- **Instead of Behringer FX600:** Try Boss RV-6 for expression-controlled reverb, or Zoom MS-50G for expression-controlled multi-effects
- **Premium pedal:** Strymon BigSky for comprehensive expression-controlled reverbs, Empress Zoia for programmable expression control



---

## Pairs Well With

### **Advanced Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Coordinated LFO automation for natural expression pedal timing - slow LFO rates create musical tape speed variations
- **Make Noise Wogglebug:** Chaos-controlled expression automation creates unpredictable but musical pedal parameter evolution - smooth and stepped outputs provide different automation characters
- **Mutable Marbles:** Learning circuits provide adaptive expression pedal automation that evolves with musical context
- **Squarp Hermod+:** Sequenced expression control with quantization enables precise, programmed pedal automation sequences - CV tracks can automate multiple pedal parameters simultaneously
- **Cre8audio Function Junction:** CV processing for expression voltage scaling, offsetting, and complex multi-source expression control - essential for multi-pedal automation ecosystems

### **Advanced Integration Concepts:**
- **Expression Pedal Automation:** Use Stomp's internal LFO or external CV sources to automate expression-capable pedals (Strymon, Boss, Walrus Audio)
- **Chaos Expression Mathematics:** Integrate Wogglebug chaos outputs for unpredictable but musical pedal parameter evolution
- **Complete Expression Ecosystems:** Combine Hermod+ sequencing, MetaModule synthesis, Function Junction CV processing, and multiple expression-capable pedals for comprehensive automated effect chains
- **Multi-Pedal Coordination:** Use Function Junction to scale and offset multiple CV sources for coordinated expression control across pedal chains

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

## Advanced Learning Path

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
- **Advanced ecosystem integration:** Complete system enabling sophisticated pedal automation within modular systems

### **Advanced Expression Control Concepts:**
- **Impedance Theory:** Understanding high-Z vs low-Z, instrument vs line levels, and proper signal matching
- **Expression Voltage Standards:** 0-3.3V unipolar signals, TRS wiring, and pedal compatibility considerations
- **CV Signal Processing:** Bipolar-to-unipolar conversion, scaling, offsetting, and multi-source coordination

---

**Bottom Line:** Stomp handles the technical barriers between modular and pedal worlds - impedance matching, level conversion, and expression automation - so you can focus on the creative connections between your sound sources and effects. It's an essential bridge that gets out of the way and lets your musical ideas flow between different gear ecosystems.