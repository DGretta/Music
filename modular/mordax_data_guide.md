# Mordax Data - Beginner's Guide

![Mordax Data](https://github.com/DGretta/Music/raw/main/modular/images/mordax/data/front_panel.jpg)
*Six-in-one analysis and generation module: oscilloscope, spectrum analyzer, tuner, waveform generator, voltmeter, and clock generator for complete system visualization and precision control*

**The Swiss Army Knife of Eurorack**

---

## Key Specifications

| Specification | Value |
|---|---|
| **Module Width** | 16 HP |
| **Depth** | 35 mm |
| **Current Draw (+12V)** | 250 mA |
| **Current Draw (-12V)** | 60 mA |
| **Current Draw (5V)** | 0 mA |

---

## Quick Start: See Your First Signal in 5 Minutes

**What is Data?** Think of it as a high-tech microscope for electricity - it lets you see what your CV and audio signals actually look like, plus it generates perfect signals when you need them. It's like having a whole electronics lab in one module.

### Your First Oscilloscope View
1. **Plug any audio/CV source** → **Input 1** (left input jack)
2. **Press the encoder** to wake up the screen 
3. **Turn encoder to navigate** to the **SCOPE** program icon
4. **Press encoder to select** - you should see your signal as a moving line!
5. **Turn encoder and click softkeys** to explore different settings

**Congratulations!** You've just visualized electricity - you can literally see your signals moving in real time!

---

## Essential Functions (The Big 6)

### **1. Oscilloscope (SCOPE)**
- **What it does:** Shows you the actual shape of your audio and CV signals
- **Why it matters:** See if your envelopes are actually working, check timing, spot problems
- **Visual:** Colorful wiggly lines that dance with your music
- **Pro tip:** Each input gets its own color - Input 1=Red, 2=Blue, 3=Green, 4=Yellow

### **2. Tuner (TUNE)** 
- **What it does:** Tells you the exact frequency/pitch of any audio signal
- **Why it matters:** Perfect tuning without guessing - shows you cents sharp/flat
- **When to use:** Tuning oscillators, checking intervals, calibrating V/Oct
- **Display:** Large frequency number + visual pitch deviation

### **3. Waveform Generator (WAVE)**
- **What it does:** Creates two precise digital oscillators/LFOs
- **Musical result:** Perfect sine/square/saw/triangle waves from 0.01Hz to 4kHz+
- **Special feature:** "Note Mode" - type in musical notes instead of frequencies
- **CV Control:** Inputs can modulate frequency and amplitude with precise control

### **4. Clock Generator (CLOCK)**
- **What it does:** Master clock that can divide/multiply to create complex rhythms
- **Musical result:** One tempo input becomes 4 different rhythmic outputs
- **Range:** From /48 (12 measures) to x48 (128th note triplets)
- **Sweet spot:** Perfect for creating polyrhythms and swing timing

### **5. Voltage Monitor (VOLT)**
- **What it does:** Shows exact voltage numbers + generates precise DC voltages
- **Why it's useful:** See what your CV is actually sending, create perfect offsets
- **Four outputs:** Each can be set to any voltage from +10V to -5V
- **Bonus:** Manual gates - press buttons to send triggers/gates

### **6. Spectrum Analyzer (SPEC)**
- **What it does:** Shows which frequencies are present in your audio
- **Visual result:** Like a graphic EQ display - tall bars = more of that frequency
- **Why it's useful:** See the harmonic content of complex sounds, spot problem frequencies
- **Musical application:** Perfect for analyzing FM tones, filter responses, distortion

---

## Beginner Patch Ideas

### **Patch 1: First Oscilloscope View**
```
[Any Oscillator] ──→ [Data INPUT 1]
[Data THRU 1] ──→ [Your usual audio path continues...]
```
**Mode:** SCOPE program
**Purpose:** Operational Mastery - Learn to see signals visually
**Visual:** Watch your waveforms in real-time - see how filters change wave shape, understand what your oscillators actually output
**Controls:** Adjust time scale to zoom in/out, voltage scale for amplitude
**Learning:** Visualization teaches understanding. See what different waveforms actually look like, recognize problems immediately.

**Practical Alternatives (You Probably Have):**
- **Don't have Data?** Use your **computer audio interface + free oscilloscope software** (Audacity, or browser-based tools)
- **Different approach:** Use **beat frequency method** - patch two oscillators together, listen to the beating to tune precisely
- **If you have Disting mk4:** Its oscilloscope algorithm works similarly, though Data is more polished

---

### **Patch 2: Tuning & Calibration**
```
[Oscillator] ──→ [Data INPUT 1] [Data TUNE program]

[Data OUTPUT 1] ──→ [Sequencer Clock]
[Data OUTPUT 2] ──→ [Drum Trigger] (/2 division)
[Data OUTPUT 3] ──→ [Hi-hat Trigger] (x4 multiplication)  
[Data OUTPUT 4] ──→ [Other Sequencer] (/3 division)
```
**Mode:** TUNE program (for calibration), then CLOCK program (for timing)
**Purpose:** Operational Mastery - Achieve precision through measurement

**Part A: Perfect Tuning**
- **Visual:** Frequency display + graphical pitch deviation (cents sharp/flat)
- **Use:** Tune multiple oscillators to perfect intervals, calibrate V/Oct tracking
- **Pro tip:** Tune one osc, then use Data's display to tune others to exact ratios
- **Why it matters:** Perfect tuning is foundation for all other work

**Part B: Precision Timing**
- **Setup:** Set internal clock to comfortable BPM, different divisions per output
- **Result:** Complex polyrhythmic patterns from one master tempo
- **Visual:** See all four clocks running at their different divisions
- **Why it matters:** Timing accuracy is invisible until it's wrong

**Practical Alternatives (You Probably Have):**
- **For tuning:** **Guitar tuner app** on your phone for basic pitch reference
- **For timing:** **Basic clock divider** (Doepfer A-160-2) + any clock source for simple rhythm generation
- **If you have RCD v2:** It does sophisticated polyrhythmic timing, though Data integrates tuning + timing in one

---

### **Patch 3: Phase 2 Ecosystem Analysis**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ 4ms RCD v2  │
│    Ochd     │ │ Wogglebug   │ │  Marbles    │ │ (Phase 2)   │
│ (Organic)   │ │ (Chaos)     │ │ (Patterns)  │ │             │
│             │ │             │ │             │ │ All Outputs │
│ All 8 LFOs  │ │ All Outputs │ │ All Outputs │ │ monitored   │
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘
        ║                ║              ║              ║
        ▼                ▼              ▼              ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│                              Mordax Data                               │
│                        (Phase 2 Analysis Hub)                        │
│                                                                        │
│ Complete Phase 2 Ecosystem Analysis via Program Switching:            │
│                                                                        │
│ SCOPE Program: Real-time Waveform Analysis                            │
│ • Input 1-4: Monitor all Phase 2 source waveforms simultaneously       │
│ • Visual comparison of organic vs chaos vs pattern characteristics      │
│ • Time relationships and phase analysis between sources                  │
│                                                                        │
│ TUNE Program: Musical Relationship Analysis                            │
│ • Verify musical intervals in pattern generation                        │
│ • Analyze pitch accuracy of controlled chaos                            │
│ • Confirm harmonic relationships in organic modulation                  │
│                                                                        │
│ SPEC Program: Harmonic Content Analysis                                │
│ • See how Phase 2 modulation affects final audio spectrum               │
│ • Analyze complex harmonic interactions in complete systems             │
│ • Understand frequency domain behavior of ecosystem outputs             │
│                                                                        │
│ VOLT Program: Precision CV Measurement                                 │
│ • Exact voltage readings of all Phase 2 CV sources                     │
│ • Calibration verification for musical accuracy                        │
│ • DC bias and scaling analysis                                          │
│                                                                        │
│ CLOCK Program: Timing Relationship Analysis                            │
│ • Polyrhythmic timing verification between all sources                  │
│ • Phase relationship analysis                                           │
│ • Master clock generation for ecosystem sync                           │
│                                                                        │
│ WAVE Program: Reference Signal Generation                              │
│ • Perfect test signals for system calibration                          │
│ • Reference LFOs for comparison with Phase 2 sources                   │
│ • Precision oscillators for testing system response                    │
│                                                                        │
│ THRU Outputs 1-4 ○─────────────────────────────────────┼─── Complete
│ (Pass-through for normal patching)                                     │
│                                                                        │
│ OUTPUT 1-4 ○─────────────────────────────────────────┼─── Phase 2
│ (Function varies by program)                                           │ Analysis
└──────────────────────────────────────────────────────────────────────────────┘
```

**Purpose:** Advanced Integration - Data as the analysis engine for sophisticated systems

| Analysis Layer | Function | Data Capability | Understanding Result |
|----------------|----------|-----------------|----------------------|
| **Organic (Ochd)** | Natural breathing | **SCOPE waveform analysis** | **See organic character visually** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **Real-time chaos visualization** | **Understand chaos generation patterns** |
| **Pattern (Marbles)** | Sophisticated sequences | **TUNE musical analysis** | **Verify pattern musical relationships** |
| **Mathematical (RCD)** | Polyrhythmic timing | **CLOCK timing analysis** | **Analyze polyrhythmic precision** |
| **Complete System** | Final audio result | **SPEC harmonic analysis** | **See Phase 2 ecosystem results** |

**Expert System Design:**
- **Data as analysis brain:** Complete visual understanding of Phase 2 ecosystem behavior
- **Program switching analysis:** Different analysis tools for different aspects of system behavior
- **Real-time system monitoring:** See exactly how sophisticated pattern generation actually works
- **Educational analysis:** Learn Phase 2 concepts through visual feedback
- **Troubleshooting mastery:** Spot problems and optimize system performance through analysis

**Why Phase 2 integration matters:**
Alone, Ochd breathes, Wogglebug chaoses, Marbles patterns. But *together* they create sophisticated musical systems. Data reveals what's actually happening—how the breathing affects the chaos, how the patterns guide the uncertainty, how it all combines into audio. This is interconnection made visible.



---

## Common Use Cases

1. **🔍 Signal Analysis:** See what your signals actually look like and troubleshoot problems
2. **🎵 Perfect Tuning:** Tune oscillators to exact frequencies and intervals
3. **📊 Spectrum Analysis:** Understand the harmonic content of complex sounds
4. **⏰ Master Clock:** Generate complex rhythmic patterns with divisions/multiplications
5. **🎛️ Precision CV:** Generate exact voltages for calibration and control
6. **📈 Learning Tool:** Understand how different modules affect your signals
7. **🧪 Experimentation:** Test ideas and see results immediately
8. **🔬 Phase 2 Analysis:** Visualize and understand organic, chaos, and pattern generation in real-time

---

## Beginner "Gotchas" 

### **Screen Navigation**
- **Encoder = Main control** - turn to navigate, press to select
- **Softkeys = Context menus** - four buttons below screen change function based on program
- **Programs are separate apps** - each does one main thing very well
- **Menu diving is minimal** - most controls are direct softkey access

### **Input/Output Routing**
- **THRU jacks are buffered** - signals pass through even when Data is doing something else
- **Each input can monitor different things** simultaneously in most programs
- **Outputs change function** depending on program - SCOPE uses them as DC voltages
- **AC/DC coupling matters** - DC shows full signal, AC filters out slow changes

### **Voltage Ranges and Scaling**
- **Eurorack standard is ±5V audio, 0-10V CV** - Data handles both
- **Scope voltage scale affects zoom** - 1V/div, 2V/div, 5V/div settings
- **Output range is +10V to -5V** - slightly asymmetrical but covers all Eurorack needs
- **Time scales are very flexible** - from microseconds to full minutes on screen

### **Program-Specific Behavior**
- **Each program uses inputs/outputs differently** - read the display carefully
- **Some programs multi-task** - SCOPE can also output DC voltages simultaneously
- **Memory slots save settings** - 8 slots per program for different configurations
- **Updates add features** - firmware updates via microSD add new capabilities

### **It's Not Making Sound (Usually)**
- **Data is mostly for measurement** - it shows you what's happening, doesn't make music directly
- **WAVE program is the exception** - it generates audio/CV signals
- **THRU jacks maintain signal flow** - your audio path continues through Data
- **Think "oscilloscope with benefits"** rather than "sound module"

---

## Next Steps

1. **Start with SCOPE mode** - get comfortable seeing your signals visually
2. **Use TUNE mode for calibration** - tune your oscillators precisely  
3. **Explore WAVE mode** for perfect LFOs and test signals
4. **Try VOLT mode** for troubleshooting - see exact CV values
5. **Master CLOCK mode** for complex rhythms and timing

**Remember:** Data is like having X-ray vision for your modular system. The more you use it, the better you'll understand what's really happening inside your patches!

---

## Pairs Well With

### **Phase 2 Module Synergies (Analysis & Monitoring):**
- **DivKid Ochd & Expander:** Data SCOPE reveals organic LFO characteristics and timing relationships
- **Make Noise Wogglebug:** Data VOLT/SCOPE shows exact chaos generation patterns and voltage behavior
- **Mutable Marbles:** Data TUNE/SPEC analyzes pattern generation musical relationships and harmonic content
- **4ms RCD v2:** Data CLOCK analyzes polyrhythmic timing precision and mathematical relationships
- **Cre8audio Function Junction:** Data monitors processed modulation and envelope characteristics
- **Cross-Phase 2 Analysis:** Data serves as analysis hub revealing behavior of complete Phase 2 ecosystems

### **Phase 1 Module Integration (Core Analysis):**
- **Make Noise Maths:** Data visualizes complex envelope shapes and mathematical relationships
- **Mutable Plaits:** Data SPEC analyzes synthesis model harmonic content and character
- **Complete Phase 1 systems:** Data as central analysis engine for synthesis networks
- **Disting mk4:** Complementary analysis - Data for visualization, Disting for processing

### **Essential Analysis Partners:**
- **All Oscillators:** Data TUNE ensures perfect tuning and interval relationships
- **Complex Modules:** Data SPEC reveals harmonic interactions in complex synthesis
- **Effects/Processors:** Data shows exactly how processing affects signals
- **Clock Sources:** Data CLOCK analyzes timing relationships and polyrhythmic precision

### **Advanced Analysis Integration:**
- **Multiple Data modules:** Some studios use multiple Data modules for comprehensive monitoring
- **Educational systems:** Data as teaching tool for understanding modular synthesis concepts
- **Professional analysis:** Studio-grade measurement and calibration capabilities
- **Live performance:** Real-time visual feedback for performance and troubleshooting

---

## Why This Module Rocks

### **The Philosophy:**
Mordax Data represents **visual understanding of electronic music** - transforming invisible electrical signals into comprehensible visual information. It proves that **seeing is understanding**, making the abstract world of voltage and frequency tangible and educational.

### **The Innovation:**
- **Six complete analysis tools** in one module - oscilloscope, spectrum analyzer, tuner, generator, voltmeter, clock
- **Real-time visual feedback** makes learning modular synthesis intuitive and immediate
- **Professional-grade measurement** with studio-quality precision and accuracy
- **Educational design** where every function teaches you something about your system
- **Dual functionality** - analysis and generation in one comprehensive package

### **The Practical Benefits:**
- **X-ray vision for your system:** See exactly what every module is actually doing
- **Perfect tuning and timing:** Achieve musical accuracy impossible with just your ears
- **Troubleshooting mastery:** Spot problems immediately through visual analysis
- **Learning acceleration:** Understand synthesis concepts through direct visual feedback
- **Professional results:** Studio-grade analysis and measurement capabilities

### **Perfect For:**
- **Anyone learning modular synthesis:** Visual feedback accelerates understanding
- **Electronic musicians:** Perfect tuning and timing for professional results
- **Sound designers:** Analyze complex harmonic interactions and spectral content
- **System builders:** Troubleshoot and optimize system performance
- **Educators:** Teach synthesis concepts through immediate visual demonstration
- **Phase 2 enthusiasts:** Understand how organic, chaos, and pattern generation actually work

### **The Magic:**
Data **democratizes professional analysis** - giving everyone access to studio-grade measurement and visualization tools. Whether you're learning your first patch or designing complex systems, Data reveals the invisible world of electronic music.

### **Phase 2 Integration Power:**
As the **analysis engine of Phase 2 ecosystems**, Data reveals the true behavior of organic breathing, controlled chaos, sophisticated pattern generation, and mathematical processing. **You see exactly how electronic intelligence actually works.**

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Data fundamentals:** Master all six programs and understand visual signal analysis
2. **Add organic analysis:** Use Data to analyze DivKid Ochd organic modulation characteristics (see Ochd guide)
3. **Include chaos analysis:** Apply Data to visualize Make Noise Wogglebug chaos generation (see Wogglebug guide)
4. **Add pattern analysis:** Use Data to analyze Mutable Marbles pattern generation and musical relationships (see Marbles guide)
5. **Include timing analysis:** Apply Data to 4ms RCD v2 polyrhythmic analysis (see RCD guide)
6. **Complete the analysis:** Use Data as central analysis hub for Cre8audio Function Junction (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Data + Ochd:** Learn to visualize organic modulation characteristics and timing relationships
- **Data + Wogglebug:** Master chaos analysis through real-time waveform and voltage monitoring
- **Data + Marbles:** Understand pattern generation through musical interval and harmonic analysis
- **Data + RCD:** Explore polyrhythmic precision through timing and phase relationship analysis
- **All Phase 2 + Data:** Build complete analysis systems where Data reveals behavior of entire ecosystems

### **Skill Development Milestones:**
- **Beginner:** Master individual programs and basic signal analysis
- **Intermediate:** Understand complex analysis and comparative monitoring
- **Advanced:** Create Phase 2 analysis patches revealing sophisticated pattern generation behavior
- **Expert:** Design analysis systems where Data serves as central intelligence for understanding complete ecosystems

### **Advanced Analysis Concepts:**
- **Multi-Modal Analysis:** Use different programs to analyze same signals from multiple perspectives
- **Phase 2 Intelligence Analysis:** Understand how sophisticated pattern generation actually works through visual feedback
- **System Understanding:** Use Data to reveal timing, harmonic, and voltage relationships in complex systems
- **Educational Analysis:** Learn synthesis concepts through direct visual demonstration

### **Performance Applications:**
- **Live Analysis:** Real-time visual feedback for performance optimization
- **Generative Analysis:** Foundation for understanding self-evolving systems
- **Educational Tool:** Visual demonstration of synthesis concepts and Phase 2 intelligence
- **Professional Measurement:** Studio-grade analysis and calibration capabilities

---

**Bottom Line:** Mordax Data isn't just an analysis module - it's a **window into the invisible world of electronic music**. Every patch teaches you something new about synthesis, and Phase 2 integration reveals how sophisticated pattern generation actually works. As the **analysis engine of Phase 2 ecosystems**, it transforms invisible electronic intelligence into visual understanding under your creative direction.

---

*Need the full technical manual? Find it at mordax.net*