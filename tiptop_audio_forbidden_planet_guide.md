# Tiptop Audio Forbidden Planet - Beginner's Guide

**The Steiner-Parker Synthacon Filter Reborn**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Forbidden Planet?** An analog multimode filter inspired by the legendary 1975 Steiner-Parker Synthacon, featuring three separate inputs (HP, BP, LP) instead of typical mode switching. It's famous for its crisp high-pass filtering, unique resonance behavior, and sci-fi self-oscillation capabilities.

### Your First Classic Lowpass Sweep
1. **Turn RESO** all the way down (counterclockwise)
2. **Patch sawtooth wave** → **LP IN** (lowpass input)
3. **Set VOLUME** to around 3 o'clock
4. **Connect output** → your mixer/amp
5. **Slowly turn FREQUENCY** knob full scale - hear the classic filter sweep
6. **Gradually increase RESO** - listen as it goes from smooth to self-oscillating madness!

### Discover the Signature High-Pass
1. **Unplug from LP IN** and **patch same signal** → **HP IN**
2. **Set FREQUENCY to minimum** (9 o'clock)
3. **Slowly turn FREQUENCY up** - notice how highs cut through with "no residue"
4. **Try on kick drums** - removes rumble while keeping punch!

---

## Essential Parameters (The Big 5)

### **1. Three Input Jacks (HP, BP, LP)**
- **HP IN:** High-pass input - "signature sound" with crisp, sharp cuts
- **BP IN:** Band-pass input - isolates "pie-slice" frequency ranges  
- **LP IN:** Low-pass input - classic "airy" 12dB/octave slope
- **Unique feature:** Can use all three simultaneously for complex filtering
- **Key difference:** Inputs, not outputs - each processes signal differently

### **2. FREQUENCY Control**
- **What it does:** Sets cutoff frequency for all active filter modes
- **Range:** Wide frequency sweep from bass to treble
- **Behavior:** Works in "reverse direction" for HP compared to LP
- **Performance control:** Primary real-time filter manipulation

### **3. RESO (Resonance)**
- **What it does:** Internal feedback path emphasizing cutoff frequencies
- **Low settings:** Smooth harmonic emphasis
- **Medium settings:** Self-oscillation begins (filter becomes sine oscillator)
- **Maximum settings:** "Aggressive and scattered" - chaotic, grainy sci-fi tones
- **Unique trait:** Volume doesn't drop when resonance increases (unlike many filters)

### **4. CV Inputs (Attenuated + Full)**
- **Attenuated CV:** Has dedicated attenuator knob for precise control
- **Full CV:** Direct CV input with no attenuation
- **Use both:** Combine envelope + LFO modulation simultaneously
- **Creative tip:** Manual suggests trying audio signals in CV inputs!

### **5. VOLUME Control**
- **What it does:** Master output level control
- **Necessity:** No input level controls, so output volume is your gain staging
- **Range:** Controls final output from filter circuit
- **Performance use:** Quick level adjustments during play

---

## Understanding the Steiner-Parker Heritage

### **What Made the Original Special:**
- **1975 Steiner-Parker Synthacon** - rare analog synthesizer with unique filter design
- **Opposite polarity** compared to Moog/ARP filters of the era
- **Volume retention** when resonance increases (most filters get quieter)
- **Aggressive self-oscillation** with complex harmonic content
- **Three separate inputs** for innovative signal routing

### **Forbidden Planet's Modern Adaptation:**
- **Same core circuit** adapted for Eurorack
- **Improved stability** while retaining character
- **Compact 8HP format** vs. original large format
- **CV control** added for modular integration
- **Affordable** access to legendary filter sound

### **The Sci-Fi Connection:**
- **Named after 1956 film** "Forbidden Planet" with 100% electronic soundtrack
- **"Electronic tonalities"** - what the Musician's Union called it (refusing to call it music!)
- **Aggressive resonance** perfect for laser zaps and sci-fi effects
- **Self-oscillation chaos** creates otherworldly textures

---

## Beginner Patch Ideas

### **Patch 1: Classic Analog Bass**
- **Sawtooth oscillator** → **LP IN**
- **Bass sequence** controls oscillator pitch
- **Envelope generator** → **Full CV Input**
- **FREQUENCY at 9 o'clock**, **RESO at 1 o'clock**
- **Result:** Classic analog bass with Synthacon character

### **Patch 2: Drum Processing Magic**
- **Kick drum** → **HP IN** (removes rumble, keeps punch)
- **Snare drum** → **BP IN** (isolates snare frequencies)
- **Hi-hats** → **LP IN** (smooths harsh highs)
- **Mix all three inputs** for complete drum processing
- **Result:** Multi-band drum processing in one module

### **Patch 3: Sci-Fi Sound Design**
- **Any oscillator** → **BP IN**
- **RESO at maximum** (chaotic self-oscillation)
- **LFO** → **Attenuated CV** (frequency sweeps)
- **Manual FREQUENCY tweaks** for alien textures
- **Result:** Perfect Forbidden Planet soundtrack sounds!

### **Patch 4: Expert - Complete Phase 2 Analog Character Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ 4ms RCD v2  │
│    Ochd     │ │ Wogglebug   │ │  Plaits     │ │ (Phase 2)   │
│ (Organic)   │ │ (Chaos)     │ │ (Synthesis) │ │             │
│             │ │             │ │             │ │ Div 2 ○─────┼─┼─Clock       │
│ LFO 2 ○─────┼─┼─Stepped ○   │ │ Main Out ○──┼─┼─             │
│       ║     │ │        ║    │ │         ║   │ │ Div 4 ○─────┼─┼─Polyrhythm  │
│ LFO 6 ○─────┼─┼─Smooth ○    │ │ Aux Out ○───┼─┼─             │
│       ║     │ │        ║    │ │         ║   │ │             │
└───────║─────┘ └────────║────┘ └─────────║───┘ └─────────────┘
        ║                ║              ║              ║
        ▼                ▼              ▼              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                          Tiptop Audio                            │
│                       Forbidden Planet                         │
│                 (Phase 2 Analog Character Hub)                │
│                                                                        │
│ Three Input Design for Phase 2 Intelligence Processing:               │
│                                                                        │
│ HP INPUT ◀────────────── Plaits Main Out (complex synthesis material)      │
│ • Crisp high-pass character processing                                │
│ • Signature Synthacon high-frequency clarity                         │
│                                                                        │
│ BP INPUT ◀────────────── Plaits Aux Out (alternative material)            │
│ • Band-pass isolation of synthesis harmonics                          │
│ • Focused frequency range processing                                  │
│                                                                        │
│ LP INPUT ◀────────────── Mixed/Processed Audio (traditional filtering)     │
│ • Classic low-pass warmth and character                               │
│ • Traditional analog filter behavior                                  │
│                                                                        │
│ CV Modulation via Phase 2 Intelligence:                               │
│                                                                        │
│ FREQUENCY CV ◀────────── Organic breathing filter movement (Ochd LFO2)     │
│ ATTENUATED CV ◀───────── Chaos-controlled filter sweeps (Wogglebug Stepped)│
│ FULL CV ◀─────────────── Organic resonance modulation (Ochd LFO6)          │
│                                                                        │
│ Legendary Analog Behavior:                                            │
│ • Volume-retaining resonance (unlike most filters)                    │
│ • Aggressive self-oscillation for Phase 2 chaos enhancement           │
│ • Three-input design allows simultaneous Phase 2 source processing    │
│ • 1975 Steiner-Parker Synthacon character with modern CV control       │
│                                                                        │
│ Performance Features:                                                  │
│ • Real-time input switching for dynamic analog character changes       │
│ • Polyrhythmic triggering of resonance sweeps via RCD timing           │
│ • Manual RESO control for live analog character expression             │
│                                                                        │
│ MAIN OUTPUT ○────────────────────────────────────────┼─── Complete
└──────────────────────────────────────────────────────────────────────────────┘   Phase 2
                              ║                                 Analog
                         Analog║                                Character
                       Character║
                       Processing║
                              ▼
                    ┌─────────────────────┐
                    │  Legendary Analog   │
                    │     Character       │
                    │                     │
                    │ Organic + Chaos +   │
                    │ Intelligence =      │
                    │ 1975 Synthacon     │
                    │ Filter Magic       │
                    │                     │
                    │ System Output ○─────┼─── Sophisticated
                    └─────────────────────┘       Analog Filtering
```

**Complete Phase 2 Analog Character Integration:**

| Intelligence Layer | Function | Forbidden Planet Control | Analog Character Result |
|-------------------|----------|---------------------------|-------------------------|
| **Organic (Ochd)** | Natural breathing | **FREQUENCY + Full CV modulation** | **Breathing analog filter evolution** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **Attenuated CV filter sweeps** | **Unpredictable analog character** |
| **Synthesis (Plaits)** | Complex material | **Dual input processing (Main+Aux)** | **Multi-band analog character** |
| **Mathematical (RCD)** | Polyrhythmic timing | **Performance trigger timing** | **Rhythmic analog filter expression** |
| **Analog Heritage** | 1975 Synthacon character | **Three-input legendary circuit** | **Impossible vintage analog behavior** |

**Expert System Design:**
- **Forbidden Planet as analog character engine:** All Phase 2 intelligence gains legendary Synthacon analog character
- **Three-input sophistication:** Different Phase 2 sources processed through different filter characteristics
- **Volume-retaining resonance:** Unique analog behavior enhances Phase 2 modulation without level loss
- **Real-time analog performance:** Manual controls and CV modulation for live analog character expression
- **Vintage-modern integration:** 1975 analog circuit enhanced by modern Phase 2 intelligence

**Advanced Performance:**
1. **Phase 2 initialization:** All intelligence sources establish their character
2. **Multi-input processing:** Different sources through HP/BP/LP inputs for complex analog character
3. **Real-time analog evolution:** Phase 2 sources drive legendary analog filter behavior
4. **Performance analog control:** Manual resonance and frequency control for live expression
5. **Analog transcendence:** Modern intelligence meets vintage analog character for impossible filter textures

**Philosophical Achievement:**
This represents the **ultimate analog-digital integration** - where organic breathing, controlled chaos, sophisticated synthesis, and mathematical precision all gain the legendary character of the 1975 Steiner-Parker Synthacon filter, creating impossible analog filter textures through the marriage of vintage analog circuit design and modern electronic intelligence under your creative direction.

---

## Advanced Techniques

### **Multiple Input Usage:**
- **Send same signal** to multiple inputs for parallel processing
- **Different signals** to each input for complex mixing
- **Crossfade between inputs** by varying their source levels
- **Creative routing:** Use inputs as a primitive mixer with filtering

### **Resonance Exploration:**
- **Self-oscillation mode:** Remove audio input, crank RESO, use as sine oscillator
- **Frequency tracking:** Use 1V/Oct into CV input for musical self-oscillation
- **Chaos mode:** Maximum RESO for grainy, unstable tones
- **Performance resonance:** Real-time RESO sweeps for dramatic effects

### **CV Modulation Strategies:**
- **Envelope + LFO:** Use both CV inputs for complex modulation
- **Audio rate CV:** Try audio signals in CV inputs for FM-like effects
- **Inverted envelopes:** Reverse filter movement for unusual effects
- **Random CV:** Create unpredictable filter movement

---

## Common Use Cases

1. **🎵 Analog Bass Synthesis:** LP input for classic bass lines with Synthacon character
2. **🥁 Drum Processing:** HP input removes unwanted low frequencies while keeping punch
3. **🎸 Lead Synthesis:** BP input for focused, cutting leads and vocal textures
4. **🎭 Sound Design:** Unique resonance for sci-fi and experimental textures
5. **🎚️ Mix Processing:** Clean up muddy mixes with surgical frequency control
6. **🎛️ Creative Effects:** Resonance sweeps for build-ups and breakdowns
7. **🎤 Live Performance:** Real-time filtering with immediate hands-on control
8. **🌀 Phase 2 Analog Character:** Transform sophisticated modulation into legendary analog filter textures

---

## Pairs Well With

### **Phase 2 Module Synergies (Analog Character Enhancement):**
- **DivKid Ochd & Expander:** Ochd organic LFOs create breathing analog filter evolution and natural resonance movement
- **Make Noise Wogglebug:** Wogglebug chaos drives unpredictable analog filter sweeps and chaotic resonance behavior
- **Mutable Plaits:** Plaits dual outputs perfect for multi-input processing through HP/BP/LP inputs simultaneously
- **4ms RCD v2:** RCD polyrhythmic triggers enable musical timing for resonance sweeps and filter performance
- **Cre8audio Function Junction:** Function Junction processed envelopes perfect for analog filter dynamics
- **Cross-Phase 2 Integration:** All Phase 2 modules gain legendary Synthacon analog character

### **Phase 1 Module Integration (Core Analog Processing):**
- **Make Noise Maths:** Maths envelopes perfect for classic analog filter envelope control and dynamics
- **Mutable Rings:** Forbidden Planet processes Rings acoustic modeling for analog-enhanced physical modeling
- **Disting mk4:** Use Disting utilities alongside Forbidden Planet for comprehensive analog signal processing
- **Complete Phase 1 systems:** Forbidden Planet as analog character engine for synthesis networks

### **Essential Analog Filter Partners:**
- **Synthesis Sources:** All oscillators and synthesis modules benefit from legendary Synthacon character
- **Envelope Generators:** Classic analog filter envelope control for dynamic filtering
- **LFOs:** Rhythmic and evolving analog filter movement
- **VCAs/Mixers:** Control levels and blend different input processing

### **Advanced Analog Integration:**
- **Multiple Forbidden Planets:** Different analog filter responses on different sources
- **Drum Machines:** HP input perfect for drum processing and mix cleanup
- **Performance Controllers:** Real-time analog filter control and input switching
- **Effects Processors:** Enhance the unique analog character with reverb and delay

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"The high-pass works backwards!"**
- HP frequency control is inverted compared to LP - this is normal
- **Solution:** For HP, low FREQUENCY = more highs, high FREQUENCY = less highs

**"I can't get the resonance to self-oscillate!"**
- Need to find the right frequency range for self-oscillation
- **Solution:** Try different FREQUENCY positions while increasing RESO

**"The filter doesn't have enough low-end when self-oscillating!"**
- Known limitation - self-oscillation cuts out below ~150Hz
- **Solution:** Use other filters for low-frequency self-oscillation, or layer with sub-oscillators

### **🎵 Pro Tips:**

**Input Selection Strategy:**
- **LP IN:** For traditional filter sweeps, bass synthesis, warm sounds
- **HP IN:** For crisp cuts, drum processing, removing mud
- **BP IN:** For focused leads, vocal textures, frequency isolation

**Resonance Sweet Spots:**
- **9-11 o'clock:** Subtle harmonic emphasis
- **12-2 o'clock:** Musical resonance without self-oscillation  
- **3-4 o'clock:** Self-oscillation begins - filter becomes oscillator
- **5 o'clock:** Maximum chaos - grainy, aggressive sci-fi tones

**CV Modulation Tips:**
- **Use both CV inputs:** Envelope for dynamics, LFO for movement
- **Attenuated CV:** Start with small amounts, increase gradually
- **Audio rate modulation:** Try audio signals in CV inputs for complex interactions
- **1V/Oct tracking:** When self-oscillating, filter tracks musically

**Performance Techniques:**
- **Resonance sweeps:** Classic build-up and breakdown technique
- **Input hopping:** Move signals between inputs for instant timbre changes
- **Self-oscillation mode:** Remove input, use filter as sound source
- **Multiple inputs:** Process different elements of your mix simultaneously

---

## Why This Module Rocks

### **The Heritage:**
Forbidden Planet brings the legendary Steiner-Parker Synthacon filter - one of the most distinctive filters in synthesizer history - into the affordable Eurorack format. This isn't just another filter; it's a piece of analog synthesis history.

### **The Unique Approach:**
- **Three inputs instead of mode switching** - completely different workflow
- **Volume-retaining resonance** - unusual behavior that sounds musical
- **Aggressive self-oscillation** - perfect for sound design and sci-fi effects
- **HP signature sound** - crisp, clean high-pass filtering unlike anything else

### **The Practical Benefits:**
- **Compact 8HP** - legendary filter sound in minimal space
- **Low power consumption** - 10mA on both rails
- **Affordable** - access to rare Synthacon character without vintage prices
- **Multiple uses** - filter, oscillator, processor, effect

### **Perfect For:**
- **Electronic musicians:** Seeking classic analog character with modern convenience
- **Sound designers:** Unique resonance and self-oscillation for sci-fi effects
- **Mix engineers:** Excellent high-pass filtering for cleaning up mixes
- **Vintage synth fans:** Experience legendary Synthacon sound in modular format
- **Anyone wanting distinctive filtering:** Sounds unlike Moog, ARP, or other common filters

---

**Bottom Line:** Forbidden Planet proves that some vintage designs are so good they deserve to be rediscovered. The Steiner-Parker Synthacon filter was ahead of its time in 1975, and it's still ahead of its time today.

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Forbidden Planet fundamentals:** Master all three inputs and understand legendary analog filter character
2. **Add organic analog evolution:** Integrate DivKid Ochd for breathing analog filter control (see Ochd guide)
3. **Include chaos analog character:** Use Make Noise Wogglebug for chaotic analog filter behavior (see Wogglebug guide)
4. **Add synthesis analog processing:** Apply Mutable Plaits for multi-input analog character enhancement (see Plaits guide)
5. **Include performance analog timing:** Use 4ms RCD v2 for polyrhythmic analog filter expression (see RCD guide)
6. **Complete the analog ecosystem:** Add Cre8audio Function Junction for processed analog filter dynamics (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Forbidden Planet + Ochd:** Learn organic analog filter evolution through natural breathing modulation
- **Forbidden Planet + Wogglebug:** Master chaotic analog character through unpredictable filter behavior
- **Forbidden Planet + Plaits:** Understand multi-input analog processing of complex synthesis materials
- **Forbidden Planet + RCD:** Explore polyrhythmic analog filter performance and timing control
- **All Phase 2 + Forbidden Planet:** Build complete analog ecosystems where sophisticated intelligence gains vintage character

### **Skill Development Milestones:**
- **Beginner:** Master individual inputs and basic analog filter concepts
- **Intermediate:** Understand multi-input processing and complex analog behavior
- **Advanced:** Create Phase 2 integration patches with sophisticated analog character enhancement
- **Expert:** Design analog ecosystems where sophisticated intelligence gains legendary vintage filter character

### **Advanced Analog Filter Concepts:**
- **Multi-Input Intelligence:** Understand how different inputs process different Phase 2 sources
- **Phase 2 Analog Character:** Use sophisticated pattern generation to control legendary analog behavior
- **Vintage-Modern Integration:** Combine 1975 analog circuit design with modern electronic intelligence
- **Analog Performance Design:** Create patches where sophisticated intelligence drives live analog expression

### **Performance Applications:**
- **Live Analog Control:** Real-time analog filter control and input switching for dynamic performance
- **Generative Analog Systems:** Foundation for self-evolving analog character enhancement
- **Vintage Analog Tool:** Experience legendary Synthacon character through hands-on Phase 2 integration
- **Creative Analog Direction:** Guide sophisticated pattern generation toward impossible analog filter textures

---

**Bottom Line:** Tiptop Audio Forbidden Planet isn't just an analog filter - it's a **legendary character laboratory** that brings the distinctive sound of the 1975 Steiner-Parker Synthacon to modular synthesis. Every input teaches you something new about analog filter design, and Phase 2 integration reveals how sophisticated intelligence can enhance vintage analog character. As the **analog character engine of Phase 2 ecosystems**, it transforms electronic intelligence into vintage analog transcendence under your creative direction.

---

*Visit [Tiptop Audio](http://tiptopaudio.com/) for complete documentation and more innovative Eurorack modules*