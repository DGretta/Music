# Squarp Hermod+ - Beginner's Guide

**The Modular System Brain**

---

## Quick Start: Get Your First Sequence in 5 Minutes

**What is Hermod+?** Think of it as the central nervous system for your entire studio - modular and beyond. It's a 16-track sequencer (8 CV/Gate + 8 MIDI) that bridges the gap between your Eurorack system, MIDI gear, and computer. With high-resolution recording, real-time effects, and an intuitive workflow, it's like having a powerful DAW in 26HP.

### Your First Basic Sequence
1. **Connect CV/Gate outputs** → **Track 1 CV to oscillator V/OCT**, **Track 1 Gate to envelope**
2. **Press STEP button** to enter Step Mode (LED lights up)
3. **Press Track 1 button** to select it (LED lights up)
4. **Use grid buttons** to enter notes - press and hold while turning encoder
5. **Press PLAY** and watch your sequence come alive!
6. **Press TRACKS button** to mute/unmute and control levels

**Congratulations!** You've just programmed your first sequence in the brain of your modular system!

---

## Essential Parameters (The Four Modes System)

### **1. STEP Mode - Note Programming Central**
- **What it does:** Piano roll editor where you program notes, gates, and modulation
- **Grid buttons:** Each represents a step in time - press to select/edit
- **Main encoder:** Adjusts note pitch when step is selected
- **Zoom function:** Get ultra-precise with up to x8 magnification
- **Row edit:** Program chords and drum patterns quickly
- **Pro tip:** This is where the magic happens - spend most of your time here!

### **2. EFFECTS Mode - Real-Time Processing**
- **What it does:** Apply up to 8 MIDI effects per track in real-time
- **Available effects:** Quantize, Arpeggiator, Ratchet, Swing, Random, Euclidean, LFO, Delay
- **Stack effects:** Chain multiple effects for complex transformations
- **Live control:** Adjust effect parameters while sequence plays
- **Musical result:** Transform simple sequences into complex, evolving patterns

### **3. TRACKS Mode - Mix and Performance Control**
- **What it does:** Global track management - mutes, levels, and performance
- **Track muting:** Quickly mute/unmute tracks for live performance
- **Track selection:** Choose which track you're editing
- **Level control:** Adjust track volumes and CV amounts
- **Pattern switching:** Jump between different patterns per track (16 patterns each!)

### **4. SEQ Mode - Song Structure and Organization**
- **What it does:** Manage sequences, patterns, and song arrangements
- **64 sequence chains:** Build complete songs with verse/chorus structure
- **Pattern management:** Each track has 16 independent patterns
- **Project system:** Unlimited projects for different songs/patches
- **Live switching:** Change sequences seamlessly during performance

### **5. Recording Resolution - 96PPQ Precision**
- **What it does:** Captures your performance with incredible timing accuracy
- **96 pulses per quarter:** No more timing drift or note shifting
- **Real-time recording:** Play live and capture every nuance
- **Up to 16 bars:** Long pattern support for complex compositions

### **6. Dual Architecture - CV/Gate + MIDI**
- **8 CV/Gate tracks:** Direct control of Eurorack modules
- **8 MIDI tracks:** Control external gear, software, and computers
- **Voice flexibility:** Mono, poly, velocity, aftertouch - configure as needed
- **MIDI effects on CV:** Apply MIDI effects to CV tracks for hybrid processing

---

## Beginner Patch Ideas

### **Patch 1: Basic Eurorack Sequence**
```
[Hermod+ Track 1 CV] ──→ [Oscillator V/OCT]
[Hermod+ Track 1 GATE] ──→ [Envelope Generator GATE]
[Envelope out] ──→ [VCA CV input]
[Oscillator] ──→ [VCA Audio input]
```
**Mode:** STEP mode to program, TRACKS mode to play
**Setup:** Program 8-16 step melody, use grid buttons + encoder
**Visual:** Track 1 LED shows activity, grid shows current step
**Result:** Classic sequenced synthesizer voice with full control

### **Patch 2: Polyrhythmic Multi-Track**
```
[Hermod+ Track 1] ──→ [Bass Oscillator] (16 steps)
[Hermod+ Track 2] ──→ [Lead Oscillator] (12 steps)
[Hermod+ Track 3] ──→ [Drum Module] (8 steps)
[External Clock] ──→ [Hermod+ Clock input]
```
**Mode:** Use TRACKS mode to manage multiple tracks
**Setup:** Different track lengths create evolving polyrhythms
**Visual:** Multiple track LEDs show independent activity patterns
**Result:** Complex interlocking rhythms that phase in and out

### **Patch 3: MIDI + CV Hybrid System**
```
[Hermod+ MIDI Track 9] ──→ [External MIDI Synth]
[Hermod+ CV Track 1] ──→ [Eurorack Oscillator]
[USB] ──→ [Computer/DAW synchronization]
```
**Mode:** STEP mode programs both MIDI and CV simultaneously
**Setup:** Sequence external gear alongside modular - perfect hybrid setup
**Visual:** Different colored LEDs distinguish MIDI vs CV tracks
**Result:** Unified control of entire studio from one brain

### **Patch 4: Effects Processing Showcase**
```
[Hermod+ Track 1 CV] ──→ [Oscillator V/OCT]
[Hermod+ Track 1 GATE] ──→ [LPG GATE input]
Enable: [Ratchet + Swing + Random effects]
```
**Mode:** EFFECTS mode to add real-time processing
**Setup:** Simple 4-note pattern transformed by stacked effects
**Visual:** Effects LEDs show active processing
**Result:** Simple sequence becomes complex, groovy, and unpredictable

### **Patch 5: Expert - Complete Phase 2 Advanced Sequencing Hub**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ 4ms RCD v2  │
│    Ochd     │ │ Wogglebug   │ │  Marbles    │ │ (Phase 2)   │
│ (Organic)   │ │ (Chaos)     │ │ (Patterns)  │ │             │
│             │ │             │ │             │ │ Clock Out ○──┼─┼─Master Clock │
│ LFO 1 ○─────┼─┼─Stepped ○   │ │ X1 Out ○───┼─┼─             │
│       ║     │ │        ║    │ │       ║     │ │ Div 2 ○─────┼─┼─Polyrhythm  │
│ LFO 5 ○─────┼─┼─Smooth ○    │ │ X2 Out ○───┼─┼─             │
│       ║     │ │        ║    │ │       ║     │ │ Div 3 ○─────┼─┼─Timing      │
└───────║─────┘ └────────║────┘ └───────║─────┘ └─────────────┘
        ║                ║              ║              ║
        ▼                ▼              ▼              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                            Squarp                             │
│                          Hermod+                            │
│                (Phase 2 Advanced Sequencing Hub)              │
│                                                                        │
│ Phase 2 Source Integration & Advanced Sequencing:                      │
│                                                                        │
│ CLOCK IN ◀──────────────── RCD Clock Out (master timing synchronization)     │
│ CV IN 1 ◀───────────────── Ochd LFO1 (organic pitch modulation input)       │
│ CV IN 2 ◀───────────────── Wogglebug Stepped (chaos sequence variations)    │
│ CV IN 3 ◀───────────────── Marbles X1 (pattern-based sequence control)      │
│ CV IN 4 ◀───────────────── Ochd LFO5 (organic gate length modulation)       │
│                                                                        │
│ Advanced Phase 2 Sequencing Features:                                 │
│                                                                        │
│ 96PPQ Recording Resolution:                                            │
│ • Record all Phase 2 sources with perfect timing precision             │
│ • Capture organic breathing, chaos events, pattern evolution           │
│ • No quantization loss of Phase 2 module character                      │
│                                                                        │
│ Real-Time Effects Processing:                                          │
│ • Apply ratchet/swing/random effects to Phase 2 recorded material      │
│ • Euclidean rhythms enhance mathematical pattern generation             │
│ • LFO effects add additional organic modulation layers                  │
│                                                                        │
│ 16-Track Ecosystem Management:                                         │
│ • 8 CV/Gate tracks for Phase 2 Eurorack ecosystem control             │
│ • 8 MIDI tracks for external gear integration                          │
│ • Pattern per track (16 patterns each) for sophisticated arrangements   │
│ • Live performance control of complete Phase 2 systems                 │
│                                                                        │
│ Sequence Chain Architecture:                                           │
│ • 64 sequences for complete Phase 2 compositions                       │
│ • Song-level arrangement of sophisticated pattern evolution             │
│ • Performance switching between Phase 2 ecosystem states               │
│                                                                        │
│ Track Outputs (CV/Gate to Phase 2 Ecosystem):                         │
│ TRACK 1-8 CV/GATE ○─────────────────────────────────┼─── Complete
│ MIDI OUT 9-16 ○─────────────────────────────────────┼─── Phase 2
└──────────────────────────────────────────────────────────────────────────────┘   Advanced
                              ║                                 Sequencing
                     Advanced║
                      Sequencing║
                            Hub║
                              ▼
                    ┌─────────────────────┐
                    │    Sophisticated   │
                    │     Sequencing     │
                    │                     │
                    │ Organic + Chaos +   │
                    │ Patterns + Math =   │
                    │ Advanced            │
                    │ Musical Direction   │
                    │                     │
                    │ System Output ○─────┼─── Comprehensive
                    └─────────────────────┘       Phase 2 Direction
```

**Complete Phase 2 Advanced Sequencing Integration:**

| Phase 2 Module | Function | Hermod+ Control | Sequencing Result |
|-------------------|----------|-----------------|-------------------|
| **Organic (Ochd)** | Natural breathing | **CV input modulation + 96PPQ recording** | **Breathing sequence evolution** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **CV input + real-time effects processing** | **Chaotic sequence variations** |
| **Pattern (Marbles)** | Sophisticated sequences | **CV input + pattern recording + effects** | **Sophisticated sequence control** |
| **Mathematical (RCD)** | Polyrhythmic timing | **Master clock + polyrhythmic synchronization** | **Mathematical sequence precision** |
| **Advanced Sequencing** | 16-track coordination | **Multi-track effects + pattern management** | **Comprehensive musical direction** |

**Expert System Design:**
- **Hermod+ as advanced sequencing hub:** All Phase 2 sources recorded and coordinated with perfect timing
- **96PPQ precision recording:** Captures every nuance of Phase 2 module behavior without quantization loss
- **Real-time effects processing:** Ratchet, swing, euclidean, and LFO effects enhance Phase 2 material
- **Multi-track ecosystem control:** 16 tracks manage complete Phase 2 ecosystems with pattern sophistication
- **Performance control:** Live control and arrangement of sophisticated pattern generation systems

**Advanced Performance:**
1. **Phase 2 source recording:** All Phase 2 sources recorded with 96PPQ precision
2. **Real-time effects enhancement:** Apply sequencer effects to enhance Phase 2 material
3. **Multi-track ecosystem management:** Coordinate complete Phase 2 systems across 16 tracks
4. **Live performance direction:** Pattern switching and track control for dynamic Phase 2 performance
5. **Advanced sequencing:** Sophisticated sequencing direction of electronic pattern generation systems

**Philosophical Achievement:**
This represents the **ultimate advanced sequencing integration** - where organic breathing, controlled chaos, sophisticated pattern generation, and mathematical precision are all coordinated through advanced sequencing capabilities, creating comprehensive musical direction of Phase 2 ecosystems under your creative control.

---

## Common Use Cases

1. **🧠 System Brain:** Central sequencer controlling entire modular system
2. **🎹 MIDI Hub:** Sequence external synths, drum machines, and software
3. **💻 DAW Integration:** USB connectivity for computer synchronization
4. **🎵 Live Performance:** Pattern switching, track muting, real-time control
5. **📻 Song Composition:** 64-sequence chains for complete song structures
6. **🎛️ CV Looper:** Record and loop control voltage performances
7. **⚡ Clock Master:** Rock-solid timing for entire studio synchronization
8. **🔄 Format Bridge:** Seamlessly convert between MIDI and CV domains
9. **🌀 Phase 2 Sequencing Hub:** Central sequencing brain for sophisticated pattern generation systems

---

## Beginner "Gotchas"

### **Mode Confusion - The Four-Button System**
- **Only one mode active at a time** - check which mode button is lit
- **STEP mode = programming**, **TRACKS mode = performance**, **EFFECTS mode = sound design**, **SEQ mode = arrangement**
- **Different mode, different encoder function** - same knob does different things
- **Start in STEP mode** for programming, switch to TRACKS for performance
- **Mode buttons are your navigation** - learn to switch fluidly between them

### **Track vs Pattern vs Sequence Hierarchy**
- **Track:** One voice/instrument (like Track 1 = bass line)
- **Pattern:** Variation of a track (Track 1 can have 16 different bass patterns)
- **Sequence:** Collection of all track patterns playing together (like verse/chorus)
- **Project:** Complete song with multiple sequences
- **Think:** Track = instrument, Pattern = verse/chorus variation, Sequence = song section

### **CV/Gate Track Configuration**
- **Default:** Tracks 1-8 output CV/Gate for Eurorack
- **Can be reconfigured:** Add velocity, aftertouch, or make polyphonic
- **Voice grouping:** Multiple CV outputs can be combined for poly
- **MIDI tracks (9-16)** don't have CV outputs - they're MIDI only
- **Check track type** before patching - CV tracks have physical outputs

### **Recording vs Programming Confusion**
- **Two ways to get notes in:** Live recording or step programming
- **Recording:** Play live (keyboard/CV) while sequencer records
- **Programming:** Use STEP mode to manually place notes
- **Recording requires input source** - keyboard, CV, or MIDI controller
- **Programming uses built-in editor** - no external controller needed

### **Effects Apply Per Track**
- **Each track has independent effects** - Track 1 ratchet doesn't affect Track 2
- **Up to 8 effects per track** - can stack multiple effects
- **Effects work on both CV and MIDI tracks** - but behave differently
- **Effect order matters** - arpeggiator before ratchet = different result
- **Start with one effect** - understand each before stacking

---

## Next Steps

1. **Master the four modes** - understand when to use STEP vs TRACKS vs EFFECTS vs SEQ
2. **Explore track configurations** - try mono, poly, velocity, and modulation setups
3. **Experiment with effects** - start with quantize and ratchet, then explore combinations
4. **Build song structures** - use patterns and sequences for complete compositions
5. **Integrate external gear** - connect MIDI devices and use USB for DAW sync
6. **Learn advanced recording** - capture live performances with 96PPQ precision

**Remember:** Hermod+ is deep - it can replace multiple modules and be the brain of your entire setup. Start simple and gradually explore its vast capabilities!

---

## Pairs Well With

### **Phase 2 Module Synergies (Advanced Sequencing Coordination):**
- **DivKid Ochd & Expander:** Ochd organic LFOs provide natural breathing modulation inputs and organic sequence evolution
- **Make Noise Wogglebug:** Wogglebug chaos creates unpredictable sequence variations and chaotic performance control
- **Mutable Marbles:** Marbles patterns provide sophisticated sequence control and algorithmic composition capabilities
- **4ms RCD v2:** RCD polyrhythmic timing provides master clock synchronization and mathematical sequence precision
- **Cre8audio Function Junction:** Function Junction processed modulation perfect for dynamic sequence control
- **Cross-Phase 2 Integration:** All Phase 2 modules coordinated through advanced sequencing capabilities

### **Phase 1 Module Integration (Core Sequencing Control):**
- **Make Noise Maths:** Maths envelopes perfect for sequence dynamics and performance control
- **Mutable Plaits:** Plaits synthesis voices controlled by Hermod+ sequencing capabilities
- **Disting mk4:** Use Disting utilities alongside Hermod+ for comprehensive system coordination
- **Complete Phase 1 systems:** Hermod+ as central sequencing hub for synthesis networks

### **Essential Sequencing Partners:**
- **MIDI Keyboard Controllers:** Live input for recording Phase 2 performances with 96PPQ precision
- **Clock Sources:** External clocks for sophisticated timing coordination with Phase 2 systems
- **Multiple Synthesis Voices:** Take advantage of 8 independent CV/Gate tracks for complex arrangements
- **USB Controllers:** Advanced control surfaces for comprehensive Phase 2 ecosystem management

### **Advanced Sequencing Integration:**
- **Squarp xp32 Expander:** 32 additional CV outputs for massive Phase 2 ecosystem control
- **Computer/DAW Integration:** USB connectivity for complete studio coordination with Phase 2 systems
- **Multiple Hermod+ units:** Chain together for comprehensive multi-ecosystem sequencing control
- **External MIDI Gear:** Integrate synthesizers and drum machines with Phase 2 Eurorack ecosystems

---

## Why This Module Rocks

### **The Philosophy:**
Squarp Hermod+ represents **comprehensive advanced sequencing** - serving as the central nervous system that coordinates sophisticated pattern generation across entire musical ecosystems. It proves that advanced sequencing can enhance and direct electronic pattern generation rather than constraining it.

### **The Innovation:**
- **16-track hybrid architecture** with 8 CV/Gate and 8 MIDI tracks for complete system integration
- **96PPQ recording resolution** captures every nuance of sophisticated pattern generation without loss
- **Real-time effects processing** enhances recorded Phase 2 intelligence with additional complexity
- **Four-mode operation system** provides comprehensive sequencing, performance, and arrangement control
- **Pattern/sequence hierarchy** enables sophisticated song-level arrangement of intelligent systems

### **The Practical Benefits:**
- **Central nervous system:** Coordinates entire studios from modular to MIDI to computer integration
- **Pattern preservation:** 96PPQ recording maintains character of sophisticated pattern generation
- **Performance direction:** Live control and arrangement of complex electronic pattern generation systems
- **Format bridging:** Seamless integration between CV, MIDI, and computer domains
- **Composition architecture:** Complete song-level arrangement capabilities for sophisticated musical systems

### **Perfect For:**
- **Electronic composers:** Complete sequencing brain for sophisticated musical arrangements
- **Live performers:** Real-time control and performance direction of complex electronic systems
- **Studio producers:** Central coordination hub for hybrid modular/MIDI/computer workflows
- **System integrators:** Bridge between different musical domains and technologies
- **Phase 2 enthusiasts:** Central sequencing hub for coordinating sophisticated pattern generation
- **Anyone seeking musical direction:** Transform electronic pattern generation into comprehensive musical compositions

### **The Magic:**
Hermod+ **democratizes professional sequencing capabilities** - giving everyone access to studio-grade sequencing capabilities that can coordinate and enhance the most sophisticated pattern generation systems.

### **Phase 2 Integration Power:**
As the **advanced sequencing hub of Phase 2 ecosystems**, Hermod+ coordinates organic breathing, controlled chaos, sophisticated pattern generation, and mathematical precision into comprehensive musical direction. **You conduct electronic pattern generation toward complete musical transcendence.**

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Hermod+ fundamentals:** Master all four modes and understand advanced sequencing coordination
2. **Add organic sequence evolution:** Integrate DivKid Ochd for breathing sequence modulation and organic performance (see Ochd guide)
3. **Include chaos sequence variation:** Use Make Noise Wogglebug for chaotic sequence enhancement and unpredictable performance (see Wogglebug guide)
4. **Add pattern sequence control:** Apply Mutable Marbles for sophisticated algorithmic composition capabilities (see Marbles guide)
5. **Include mathematical sequence precision:** Use 4ms RCD v2 for polyrhythmic timing coordination and mathematical arrangement (see RCD guide)
6. **Complete the sequencing ecosystem:** Add Cre8audio Function Junction for processed sequence dynamics and performance control (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Hermod+ + Ochd:** Learn organic sequence evolution through natural breathing modulation and performance control
- **Hermod+ + Wogglebug:** Master chaotic sequence variation through unpredictable pattern enhancement
- **Hermod+ + Marbles:** Understand sophisticated algorithmic composition through pattern coordination
- **Hermod+ + RCD:** Explore polyrhythmic sequence precision through mathematical timing arrangement
- **All Phase 2 + Hermod+:** Build complete sequencing ecosystems where sophisticated pattern generation gains musical direction

### **Skill Development Milestones:**
- **Beginner:** Master individual modes and basic sequencing concepts
- **Intermediate:** Understand multi-track coordination and complex arrangement techniques
- **Advanced:** Create Phase 2 integration systems with sophisticated sequencing capabilities
- **Expert:** Design complete musical ecosystems where sophisticated pattern generation gains comprehensive direction

### **Advanced Sequencing Concepts:**
- **Multi-Track Coordination:** Understand how 16 tracks coordinate different Phase 2 module types
- **Phase 2 Sequence Control:** Use sophisticated pattern generation to control comprehensive musical arrangement
- **Advanced Performance:** Live direction and arrangement of sophisticated electronic pattern generation systems
- **Musical Direction Design:** Create compositions where sophisticated pattern generation serves comprehensive musical vision

### **Performance Applications:**
- **Live Performance Direction:** Real-time coordination and performance of sophisticated pattern generation systems
- **Generative Composition Systems:** Foundation for self-evolving musical arrangements with advanced direction
- **Educational Sequencing Tool:** Learn comprehensive arrangement through hands-on Phase 2 integration
- **Creative Musical Direction:** Guide sophisticated pattern generation toward complete musical transcendence

---

**Bottom Line:** Squarp Hermod+ isn't just a sequencer - it's a **comprehensive advanced coordination system** that serves as the central nervous system for sophisticated musical ecosystems. Every mode teaches you something new about musical direction and arrangement, and Phase 2 integration reveals how advanced sequencing can coordinate and enhance the most sophisticated pattern generation systems. As the **advanced sequencing hub of Phase 2 ecosystems**, it transforms electronic pattern generation into complete musical transcendence under your creative direction.

---

*Need the full technical manual? Visit squarp.net/hermodplus/manual/ for complete documentation*