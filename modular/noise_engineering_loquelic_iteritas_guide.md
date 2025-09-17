# Noise Engineering Loquelic Iteritas - Beginner's Guide

**The Three-Algorithm Digital Beast**

---

## Quick Start: Get Your First Complex Sound in 5 Minutes

**What is Loquelic Iteritas?** Think of it as three different synthesizers in one compact module. It's a digital complex oscillator that implements interpretations of three classic synthesis algorithms: VOSIM (vocal simulation), Summation Synthesis, and Phase Modulation. Each algorithm creates dramatically different sounds, from woody vocal textures to harsh metallic tones. It's designed for both musicians and sound designers who want access to unique, cutting-edge digital synthesis.

### Your First VOSIM Sound
1. **Connect Loquelic Iteritas OUT** → **your mixer or audio interface**
2. **Set mode switch** to **VO** (VOSIM mode)
3. **Connect keyboard/sequencer CV** → **1V/8VA input**
4. **Turn MORPH knob** slowly and listen to the timbral changes
5. **Try FOLD knob** to add harmonic complexity via wavefolding
6. **Experiment with MODULATE** to hear the oscillators interact

**Congratulations!** You've just experienced one of the most unique oscillators in Eurorack!

---

## Essential Parameters (The Algorithm Triad)

### **1. Three Synthesis Algorithms - The Core Magic**
- **VO (VOSIM):** Based on 1970s vocal simulation - creates woody, vocal-like tones
- **SS (Summation Synthesis):** Mathematical approach using harmonic series - complex spectra
- **PM (Phase Modulation):** Two-oscillator PM with amplitude modulation - metallic, bell-like sounds
- **Mode switch:** Changes the fundamental behavior of all controls
- **Each mode sounds completely different** with the same knob positions
- **No "normal" oscillator modes** - all three are specialized synthesis techniques

### **2. Dual Pitch Control - Independent Oscillator Control**
- **PITCH A (Coarse/Fine):** Controls primary oscillator frequency
- **PITCH B (Coarse/Fine):** Controls secondary oscillator frequency
- **1V/8VA & 1V/8VB inputs:** V/octave CV control for each oscillator
- **Cross-normalled:** By default, both oscillators track the same CV input
- **Independent control:** Patch different CVs for harmonic intervals or detuning
- **Extended range:** Covers wide frequency spectrum from bass to audio-rate

### **3. Four Tone Controls - The Sound Shaping Arsenal**
- **MORPH:** Changes waveform character (varies by algorithm)
- **FOLD:** Controls built-in "infinifold" wavefolder intensity
- **MODULATE:** Controls interaction between the two internal oscillators
- **DAMP:** Acts as crude filter/damping control (varies by algorithm)
- **All CV-controllable:** Each parameter has dedicated CV input and attenuator
- **Continuous control:** Designed for smooth, real-time manipulation

### **4. VOSIM Algorithm (VO Mode) - Vocal Textures**
- **Based on:** 1970s vocal simulation research
- **Character:** Amplitude modulation creates vocal-like formants
- **MORPH:** Carrier waveform complexity (sine to complex harmonics)
- **FOLD:** Wavefolder adds brightness and edge
- **MODULATE:** Oscillator interaction and AM depth
- **DAMP:** Decay/filtering characteristics
- **Best for:** Woody sounds, vocal textures, organic tones

### **5. Summation Synthesis (SS Mode) - Mathematical Complexity**
- **Based on:** James Moorer's mathematical approach
- **Character:** Three internal oscillators create complex harmonic relationships
- **MORPH:** Harmonic structure and oscillator relationships
- **FOLD:** Wavefolder adds saturation and harmonics
- **MODULATE:** Oscillator modulation and sum characteristics
- **DAMP:** Harmonic damping and spectral shaping
- **Best for:** Complex evolving tones, mathematical textures, rich harmonics

### **6. Phase Modulation (PM Mode) - Metallic Synthesis**
- **Based on:** Classic FM/PM synthesis techniques
- **Character:** Two oscillators with phase and amplitude modulation
- **MORPH:** Modulation index and character
- **FOLD:** Wavefolder for additional harmonic content
- **MODULATE:** PM depth and oscillator interaction
- **DAMP:** Filtering and harmonic damping
- **Best for:** Bell tones, metallic sounds, aggressive digital textures

---

## Beginner Patch Ideas

### **Patch 1: VOSIM Vocal Bass**
```
[Bass sequence] ──→ [Loquelic Iteritas 1V/8VA]
[Loquelic Iteritas OUT] ──→ [Low-pass filter] ──→ [Audio out]
Mode: VO
```
**Setup:** MORPH around 10 o'clock, FOLD at minimum, MODULATE at 12 o'clock
**Controls:** Use DAMP to control brightness, FOLD for grit
**Result:** Deep, woody bass tones with vocal-like character
**Performance:** Modulate MORPH with LFO for evolving timbres

### **Patch 2: Harmonic Bell Sequence**
```
[Melodic sequence] ──→ [Loquelic Iteritas 1V/8VA]
[Slow LFO] ──→ [MODULATE CV input]
[Loquelic Iteritas OUT] ──→ [Reverb] ──→ [Audio out]
Mode: PM
```
**Setup:** MORPH around 2 o'clock, FOLD at 25%, MODULATE at 12 o'clock
**Controls:** LFO creates automatic timbral evolution
**Result:** Bell-like tones with evolving metallic character
**Experiment:** Try different LFO speeds for different evolution rates

### **Patch 3: Complex Harmonic Drone**
```
[Loquelic Iteritas OUT] ──→ [Audio out]
[LFO 1] ──→ [MORPH CV] (slow)
[LFO 2] ──→ [FOLD CV] (medium speed)
Mode: SS
```
**Setup:** Set both PITCH knobs for drone notes, no external CV
**Controls:** Multiple LFOs create complex evolving spectra
**Result:** Rich harmonic drone perfect for ambient music
**Advanced:** Add third LFO to MODULATE for even more complexity

### **Patch 4: Independent Dual Oscillator**
```
[Sequence A] ──→ [Loquelic Iteritas 1V/8VA]
[Sequence B] ──→ [Loquelic Iteritas 1V/8VB] (detuned by fifth)
[Loquelic Iteritas OUT] ──→ [Audio out]
Mode: Any
```
**Setup:** Two different sequences control each oscillator independently
**Result:** Complex polyrhythmic interactions between algorithms
**Controls:** MODULATE controls how much the oscillators interact
**Experiment:** Try different musical intervals between the sequences

### **Patch 5: Expert - Complete Phase 2 Complex Synthesis Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ 4ms RCD v2  │
│    Ochd     │ │ Wogglebug   │ │  Marbles    │ │ (Phase 2)   │
│ (Organic)   │ │ (Chaos)     │ │ (Patterns)  │ │             │
│             │ │             │ │             │ │ Div 2 ○─────┼─┼─Clock Base  │
│ LFO 1 ○─────┼─┼─Stepped ○   │ │ X1 Out ○───┼─┼─             │
│       ║     │ │        ║    │ │       ║     │ │ Div 3 ○─────┼─┼─Polyrhythm  │
│ LFO 4 ○─────┼─┼─Smooth ○    │ │ X2 Out ○───┼─┼─             │
│       ║     │ │        ║    │ │       ║     │ │             │
└───────║─────┘ └────────║────┘ └───────║─────┘ └─────────────┘
        ║                ║              ║              ║
        ▼                ▼              ▼              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                          Noise Engineering                           │
│                        Loquelic Iteritas                          │
│                   (Phase 2 Complex Synthesis Hub)                 │
│                                                                        │
│ Algorithm: Dynamically Switched via Performance Control               │
│                                                                        │
│ PITCH A ◀───────────── Pattern-based pitch control (Marbles X1)        │
│ PITCH B ◀───────────── Independent harmonic relationships (Marbles X2)  │
│                                                                        │
│ MORPH CV ◀──────────── Organic algorithm character evolution (Ochd LFO1) │
│ FOLD CV  ◀──────────── Chaos-driven harmonic complexity (Wogglebug Step)│
│ MODULATE CV ◀────────── Organic oscillator interaction (Ochd LFO4)       │
│ DAMP CV  ◀──────────── Chaos-controlled filtering (Wogglebug Smooth)   │
│                                                                        │
│ Algorithm Behavior under Phase 2 Control:                             │
│                                                                        │
│ • VOSIM Mode: Organic breathing creates vocal-like evolution           │
│ • Summation Synthesis: Mathematical patterns drive harmonic complexity  │
│ • Phase Modulation: Chaos creates unpredictable metallic textures      │
│                                                                        │
│ Real-time Algorithm Switching:                                         │
│ • Manual mode switching reveals different algorithm characters          │
│ • Same Phase 2 sources create completely different results per mode     │
│ • Polyrhythmic triggers from RCD control algorithm changes             │
│                                                                        │
│ Audio OUTPUT ○─────────────────────────────────────────┼─── Complete
│                                                                        │
│ SYNC OUTPUT ○─────────────────────────────────────────┼─── Phase 2
└──────────────────────────────────────────────────────────────────────────────┘   Complex
                              ║                                 Digital
                         Complex║                                Synthesis
                        Digital║
                       Synthesis║
                              ▼
                    ┌─────────────────────┐
                    │   Impossible Sounds  │
                    │                     │
                    │ Organic + Chaos +   │
                    │ Patterns + Math =   │
                    │ Complex Digital     │
                    │ Algorithm Control   │
                    │                     │
                    │ System Output ○─────┼─── Sophisticated
                    └─────────────────────┘       Digital Synthesis
```

**Complete Phase 2 Complex Digital Synthesis Integration:**

| Intelligence Layer | Function | Loquelic Iteritas Control | Digital Synthesis Result |
|-------------------|----------|---------------------------|---------------------------|
| **Organic (Ochd)** | Natural breathing | **MORPH + MODULATE modulation** | **Breathing vocal/harmonic evolution** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **FOLD + DAMP modulation** | **Unpredictable digital complexity** |
| **Pattern (Marbles)** | Sophisticated sequences | **Dual pitch control (A+B)** | **Musical harmonic relationships** |
| **Mathematical (RCD)** | Polyrhythmic timing | **Algorithm switching triggers** | **Rhythmic synthesis character changes** |
| **Digital Algorithms** | Complex synthesis | **Three synthesis engines** | **Impossible analog-defying textures** |

**Expert System Design:**
- **Loquelic Iteritas as digital complexity engine:** All Phase 2 intelligence controls sophisticated digital algorithms
- **Algorithm-specific behavior:** Each synthesis algorithm responds differently to same Phase 2 sources
- **Real-time algorithm switching:** Polyrhythmic triggers change synthesis character dynamically
- **Multi-algorithm exploration:** Same modulation sources create completely different results per algorithm
- **Digital transcendence:** Phase 2 intelligence controls impossible synthesis complexity

**Advanced Performance:**
1. **Phase 2 initialization:** All intelligence sources establish their character
2. **Algorithm exploration:** Manual switching reveals how different algorithms respond to same sources
3. **Real-time digital evolution:** Phase 2 sources drive impossible digital synthesis complexity
4. **Algorithm interaction:** Use polyrhythmic triggers to switch algorithms musically
5. **Digital complexity transcendence:** Sophisticated intelligence creates digital synthesis impossible with traditional methods

**Philosophical Achievement:**
This represents the **ultimate digital synthesis complexity** - where organic breathing, controlled chaos, sophisticated pattern generation, and mathematical precision all control impossible digital algorithms, creating synthesis textures that would be unachievable with traditional analog or simple digital methods under your creative direction.

---

## Common Use Cases

1. **🎭 Sound Design:** Unique textures impossible with traditional oscillators
2. **🎵 Experimental Music:** Complex algorithms for avant-garde compositions
3. **🔊 Bass Synthesis:** VOSIM mode excels at woody, vocal bass tones
4. **🔔 Bell/Metallic Sounds:** PM mode for realistic bell and metallic textures
5. **🌊 Ambient Drones:** SS mode with slow modulation for evolving soundscapes
6. **🎛️ Modulation Destination:** All four tone controls beg for CV modulation
7. **⚡ Hard Sync Source:** Built-in sync for classic sync lead sounds
8. **🧪 Algorithm Study:** Learn classic synthesis techniques in hardware form
9. **🌀 Phase 2 Complex Synthesis:** Transform sophisticated modulation into impossible digital textures

---

## Beginner "Gotchas"

### **Algorithm Mode Completely Changes Everything**
- **Same knob settings = totally different sounds** across VO/SS/PM modes
- **No "normal" oscillator sounds** - all three algorithms are specialized
- **Controls behave differently** in each mode (MORPH does different things)
- **Start with one algorithm** - master VO, then SS, then PM
- **Don't expect familiar behavior** - this isn't a traditional VCO

### **It's Not a Traditional Oscillator**
- **No sine/saw/square waves** - these are complex synthesis algorithms
- **Can be harsh and digital** - embrace the character, don't fight it
- **Not always "musical"** in traditional sense - designed for unique sounds
- **Tuning can be tricky** - algorithms may not track perfectly across all ranges
- **Loud output levels** - may need attenuation for some systems

### **CV Input Normalling Confusion**
- **1V/8VA and 1V/8VB are cross-normalled** by default
- **Both oscillators track same CV** when only one input patched
- **Patch both inputs** for independent oscillator control
- **This is intentional** - allows single CV to control both, or independent control
- **Check your patching** if harmonic relationships seem off

### **Continuous Tone Control Philosophy**
- **Designed for constant movement** - static sounds may seem boring
- **All four tone controls want CV modulation** for best results
- **Not a "set and forget" oscillator** - rewards active manipulation
- **LFOs are your friend** - multiple slow LFOs create evolving textures
- **Think like a sound designer** rather than traditional synthesist

### **Variable Sample Rate Technology**
- **Aliasing is intentionally musical** - not a bug, it's a feature
- **Digital artifacts are part of the sound** - embrace them
- **Sample rate changes with pitch** to make aliasing harmonically related
- **Can sound "broken" at extreme settings** - this is often desirable
- **Trust your ears** over technical expectations

---

## Next Steps

1. **Master one algorithm at a time** - spend sessions focusing on just VO, SS, or PM
2. **Learn the tone control behaviors** - understand what each knob does in each mode
3. **Experiment with independent pitch control** - explore harmonic relationships
4. **Add modulation sources** - LFOs and envelopes bring these algorithms to life
5. **Embrace the extreme settings** - the "broken" sounds are often the most interesting
6. **Study the source material** - research VOSIM, summation synthesis, and PM techniques

**Remember:** Loquelic Iteritas is designed to sound unique, not familiar. Let it teach you new approaches to synthesis!

---

## Pairs Well With

### **Phase 2 Module Synergies (Complex Digital Modulation):**
- **DivKid Ochd & Expander:** Ochd organic LFOs create breathing evolution in all three synthesis algorithms
- **Make Noise Wogglebug:** Wogglebug chaos drives unpredictable digital complexity and harmonic folding
- **Mutable Marbles:** Marbles patterns control dual pitch relationships and musical harmonic intervals
- **4ms RCD v2:** RCD polyrhythmic triggers enable musical algorithm switching and timing control
- **Cre8audio Function Junction:** Function Junction processed modulation adds sophisticated envelope control
- **Cross-Phase 2 Integration:** All Phase 2 modules transform into impossible digital synthesis complexity

### **Phase 1 Module Integration (Core Digital Synthesis):**
- **Make Noise Maths:** Maths envelopes perfect for controlling algorithm parameters and synthesis dynamics
- **Mutable Plaits:** Complementary synthesis - Plaits for traditional sounds, Loquelic for impossible textures
- **Disting mk4:** Use Disting utilities to process and analyze Loquelic's complex output
- **Complete Phase 1 systems:** Loquelic as complex digital synthesis engine for electronic networks

### **Essential Digital Synthesis Partners:**
- **Multiple LFOs:** Essential for bringing all four tone controls to life with continuous movement
- **Filters:** Tame harsh digital frequencies and add analog warmth to digital complexity
- **VCAs/Mixers:** Control dynamics and blend different algorithm outputs
- **Effects Processors:** Reverb and delay enhance the unique digital textures

### **Advanced Digital Integration:**
- **Multiple Loquelic Iteritas:** Layer different algorithms for incredibly rich digital complexity
- **Quantizers:** Ensure musical relationships when using independent pitch control
- **Performance Controllers:** Real-time algorithm switching and parameter control
- **Analysis Tools:** Mordax Data reveals the harmonic complexity of digital algorithms

---

## Why This Module Rocks

### **The Philosophy:**
Noise Engineering Loquelic Iteritas represents **impossible digital synthesis** - implementing three legendary synthesis algorithms that would be unachievable in analog hardware. It proves that digital synthesis can create textures and complexity impossible in the physical world.

### **The Innovation:**
- **Three complete synthesis algorithms** in one module - VOSIM, Summation Synthesis, and Phase Modulation
- **Algorithm-specific behavior** where each mode responds differently to the same modulation
- **Continuous parameter control** designed for real-time manipulation and evolution
- **Variable sample rate technology** where aliasing becomes musically useful
- **No traditional oscillator modes** - all three algorithms are specialized synthesis techniques

### **The Practical Benefits:**
- **Impossible analog textures:** Digital algorithms create sounds unachievable with traditional synthesis
- **Educational synthesis laboratory:** Learn three classic synthesis techniques in hardware
- **Compact complexity:** Three complete synthesizers in 10HP
- **Phase 2 integration power:** All four tone controls respond beautifully to sophisticated modulation
- **Algorithm exploration:** Same sources create completely different results per algorithm

### **Perfect For:**
- **Electronic producers:** Cutting-edge digital synthesis for modern electronic music
- **Sound designers:** Unique textures perfect for film scoring and experimental soundtracks
- **Synthesis students:** Learn VOSIM, summation synthesis, and phase modulation hands-on
- **Experimental musicians:** Algorithms encourage non-traditional musical thinking
- **Phase 2 enthusiasts:** Transform sophisticated modulation into impossible digital complexity
- **Anyone seeking unique sounds:** Textures impossible with traditional analog or simple digital synthesis

### **The Magic:**
Loquelic Iteritas **democratizes legendary synthesis algorithms** - giving everyone access to VOSIM vocal simulation, mathematical summation synthesis, and complex phase modulation in affordable hardware form.

### **Phase 2 Integration Power:**
As the **complex digital synthesis engine of Phase 2 ecosystems**, Loquelic Iteritas transforms organic breathing, controlled chaos, sophisticated pattern generation, and mathematical precision into impossible digital textures. **You conduct electronic intelligence toward digital synthesis transcendence.**

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Loquelic fundamentals:** Master all three algorithms and understand digital synthesis complexity
2. **Add organic digital evolution:** Integrate DivKid Ochd for breathing digital algorithm control (see Ochd guide)
3. **Include chaos digital complexity:** Use Make Noise Wogglebug for chaotic digital parameter control (see Wogglebug guide)
4. **Add pattern digital control:** Apply Mutable Marbles for sophisticated digital harmonic relationships (see Marbles guide)
5. **Include algorithmic switching:** Use 4ms RCD v2 for polyrhythmic algorithm changes (see RCD guide)
6. **Complete the digital ecosystem:** Add Cre8audio Function Junction for processed digital modulation (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Loquelic + Ochd:** Learn organic digital algorithm evolution across all three synthesis types
- **Loquelic + Wogglebug:** Master chaotic digital complexity through unpredictable parameter control
- **Loquelic + Marbles:** Understand sophisticated pattern-based digital harmonic relationships
- **Loquelic + RCD:** Explore polyrhythmic algorithm switching for dynamic synthesis character changes
- **All Phase 2 + Loquelic:** Build complete digital ecosystems where sophisticated intelligence controls impossible synthesis

### **Skill Development Milestones:**
- **Beginner:** Master individual algorithms and basic digital synthesis concepts
- **Intermediate:** Understand algorithm-specific behavior and complex parameter interaction
- **Advanced:** Create Phase 2 integration patches with sophisticated digital synthesis complexity
- **Expert:** Design digital ecosystems where sophisticated intelligence creates impossible synthesis textures

### **Advanced Digital Synthesis Concepts:**
- **Multi-Algorithm Control:** Understand how same modulation creates different results per synthesis algorithm
- **Phase 2 Digital Intelligence:** Use sophisticated pattern generation to control impossible digital complexity
- **Algorithm Performance:** Real-time algorithm switching for dynamic synthesis character changes
- **Digital Complexity Design:** Create patches where sophisticated intelligence controls legendary synthesis algorithms

### **Performance Applications:**
- **Live Digital Control:** Real-time algorithm switching and parameter control for dynamic performance
- **Generative Digital Systems:** Foundation for self-evolving digital synthesis complexity
- **Educational Digital Tool:** Learn classic synthesis algorithms through hands-on Phase 2 integration
- **Creative Digital Direction:** Guide sophisticated pattern generation toward impossible digital synthesis

---

**Bottom Line:** Noise Engineering Loquelic Iteritas isn't just a digital oscillator - it's an **impossible synthesis laboratory** that brings three legendary digital algorithms to modular synthesis. Every algorithm teaches you something new about digital synthesis possibilities, and Phase 2 integration reveals how sophisticated intelligence can control synthesis complexity impossible with traditional methods. As the **complex digital synthesis engine of Phase 2 ecosystems**, it transforms electronic intelligence into digital synthesis transcendence under your creative direction.

---

*Loquelic Iteritas rewards patience and experimentation - don't expect immediate gratification, but do expect sounds you've never heard before!*