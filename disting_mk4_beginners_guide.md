# Disting mk4 Beginner's Guide
*The Swiss Army Knife of Eurorack*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Disting mk4?** A **multi-algorithm utility module** that can function as 80+ different modules in one tiny 4HP package. Think of it as having an entire modular system that you can switch between instantly - oscillators, filters, delays, quantizers, LFOs, envelopes, and much more.

### Your First Algorithm - Precision Adder
1. **Power up** - watch the startup LED sequence (columns then rows)
2. **Press S knob once** to enter menu, **press again** to select "Algorithm"
3. **Turn S knob** to A-1 "Precision Adder", **press to confirm**
4. **Patch oscillator** → **X input** and **LFO** → **Y input** 
5. **Patch A output** → your next module's CV input
6. **Turn Z knob** - add/subtract voltage offset for transposition
7. **Display shows** voltage when Z changes

### Discover the Quantizer Magic
1. **Press S twice** to access algorithm menu
2. **Turn S to A-6** "Quantizer", **press to confirm**
3. **Patch oscillator CV** → **X input**
4. **Patch A output** → oscillator's 1V/Oct input  
5. **Turn Z knob** - cycle through musical scales (major, minor, triads, etc.)
6. **Listen** - your oscillator now plays only in-key notes!

---

## Essential Parameters (The Big 5)

### **1. Algorithm Selection (80+ Algorithms)**
- **What it does:** Completely changes the module's function
- **Access:** Press S twice, turn to select, press to confirm
- **Categories:** A-N series (A=CV utilities, B=modulation, C=audio processing, etc.)
- **Key concept:** Each algorithm is like swapping to a completely different module

### **2. Z Knob/CV Control**
- **What it does:** Main real-time parameter control (function depends on algorithm)
- **Examples:** Frequency, feedback, scale selection, resonance, mix
- **CV Input:** Dedicated Z CV input adds to knob position
- **Visual feedback:** Socket lights red (positive) or blue (negative) indicating voltage

### **3. S Knob & Parameters**
- **What it does:** Adjusts algorithm-specific parameters (up to 8 per algorithm)
- **Access:** Turn S knob to change current parameter
- **Parameter selection:** Press Z to cycle through parameters, or hold S + turn
- **Display:** Shows parameter values when changed

### **4. X & Y Inputs**
- **What they do:** Main CV/audio inputs (function varies by algorithm)
- **Examples:** Signal input + control CV, left + right audio, pitch + gate
- **Voltage range:** ±5V (higher voltages won't damage but will be clipped)
- **Socket lighting:** Visual indication of input voltage levels

### **5. A & B Outputs**
- **What they do:** Main outputs (function varies by algorithm)
- **Examples:** Processed signal, dry + wet, left + right, CV + gate
- **Voltage range:** ±10V maximum before clipping
- **Socket lighting:** Shows output voltage in real-time

---

## Understanding the Algorithm Structure

### **The Philosophy:**
Instead of buying dozens of modules, Disting mk4 gives you **one module that can become any module you need**. Each algorithm is a complete reimplementation of a classic modular function, from simple utilities to complex effects.

### **Algorithm Categories:**
- **A Series (A1-A8):** CV utilities - mixers, quantizers, logic, arithmetic
- **B Series (B1-B8):** Modulation sources - LFOs, S&H, envelopes, VCOs  
- **C Series (C1-C8):** Audio processing - delays, filters, effects
- **D Series (D1-D8):** More filters and audio manipulation
- **E-F Series:** Envelopes, dynamics, format conversion
- **G Series:** References, clocks, MIDI/CV conversion
- **H-M Series:** Advanced processing, logic, sample playback
- **N Series:** Latest additions and specialized functions

### **SD Card Integration:**
- **Sample playback:** I & J series algorithms play WAV files
- **MIDI sequencing:** J series plays back MIDI files  
- **Wavetables:** K series loads custom wavetables
- **Scala support:** Microtonal scales from Scala software
- **Presets & help:** Store module presets and algorithm help on card

### **Menu System Navigation:**
- **Algorithm:** Select from 80+ functions
- **Save/Load:** 64 preset slots for storing complete module states
- **Settings:** Display brightness, MIDI channels, file behavior
- **Help:** Algorithm-specific information (loaded from SD card)
- **Calibrate:** Factory calibration (usually not needed)

---

## Progressive Patch Examples

### **Patch 1: First Steps - Musical CV Quantizer**
```
                    ┌─────────────────────┐
                    │   Disting mk4       │
                    │                     │
     Random CV ─────┼─▶ X Input           │
     Generator       │                     │
                    │ Algorithm: A-6      │
                    │ (Quantizer)         │
                    │                     │
                    │ Z Knob: Scale       │
                    │ (Turn for Major,    │
                    │  Minor, etc.)       │
                    │                     │
                    │ A Output ○─────────┼─── CV (Blue)
                    │ (Quantized CV)      │
                    │                     │
                    │ B Output ○─────────┼─── Gate (Yellow)
                    │ (Note Change Trig)  │
                    └─────────────────────┘
                             ║       ║
                        CV   ║  Gate ║
                        (Blue)║(Yellow)║
                             ▼       ▼
                    ┌──────────────────────┐
                    │   Oscillator         │
                    │                      │
                    │ 1V/Oct    ◀─────────┼─── Quantized Pitch
                    │                      │
                    │ Audio Out ○──────────────── To Envelope/VCA
                    │                      │
                    └──────────────────────┘
                             ║
                        Audio║
                             ▼
                    ┌──────────────────────┐
                    │   Envelope Generator │
                    │                      │
                    │ Trigger   ◀─────────┼─── Note Change Trigger
                    │                      │
                    │ CV Out    ○────────────── To VCA
                    └──────────────────────┘
```
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Random CV   │───▶│ Disting mk4  │───▶│ Oscillator  │
│ Generator   │    │ Algorithm:   │    │ 1V/OCT Input│
│ (or Slides) │    │ A-6 Quantizer│    └─────────────┘
└─────────────┘    │              │           │
                   │ X Input      │           ▼
                   │ A Output     │    ┌─────────────┐
                   │              │───▶│ Envelope    │
                   │ B Output     │    │ Generator   │
                   │ (Trigger)    │    │ Trigger In  │
                   │              │    └─────────────┘
                   │ Z Knob:      │
                   │ Scale Select │
                   │ [Display:    │
                   │  "Major"]    │
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Random CV → Disting X Input | CV (Blue) | Unquantized pitch CV |
| Disting A Out → Oscillator V/OCT | CV (Blue) | Quantized to musical scale |
| Disting B Out → Envelope Trigger | Gate (Yellow) | Fires on note changes |

**Module Settings:**
- **Disting:** Algorithm A-6 Quantizer
- **Z Knob:** Turn to select scale (Major, Minor, Pentatonic, etc.)
- **Display shows:** Current scale name when Z changes
- **Parameters:** Default settings work well for most applications

**Visual Feedback:**
- **Socket LEDs:** X input shows incoming CV, A/B outputs show processed signals
- **Display:** Shows "Quantizer" and current scale selection
- **B Output LED:** Flashes when note changes trigger
- **Result:** Random CV becomes musical melodies in any scale

### **Patch 2: Intermediate - Dual Function Hub**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   Audio Source      │      │   Disting mk4       │
   │                     │      │                     │
   │ Audio Out ○────────┼──────┼─▶ X Input (Audio)     │
   │                     │      │                     │
   └─────────────────────┘      │ Algorithm: C-5      │
                                │ (Resonator)         │
   ┌─────────────────────┐      │                     │
   │   Clock/LFO        │      │ Y Input         ◀──┼────── Modulation CV
   │                     │      │ (Frequency CV)      │
   │ Clock Out ○────────┼──────┘      │                     │
   │                     │              │ Z Knob: Resonance   │
   └─────────────────────┘              │ (Real-time control) │
                                      │                     │
                                      │ A Output ○────────┼─── Audio (Red)
                                      │ (Resonant Audio)    │
                                      │                     │
                                      │ B Output ○────────┼─── CV (Blue)
                                      │ (Envelope Follower) │
                                      └─────────────────────┘
                                               ║       ║
                                          Audio║  CV   ║
                                          (Red)║ (Blue)║
                                               ▼       ▼
                                      ┌─────────────────────┐
                                      │   Effects Chain     │
                                      │                     │
                                      │ Audio In     ◀───┼─── Resonant Audio
                                      │                     │
                                      │ Mod CV       ◀───┼─── Envelope Follow
                                      │                     │
                                      │ Audio Out ○──────┼─── Final Processing
                                      └─────────────────────┘
```

| Connection | Cable Type | Purpose | Advanced Function |
|------------|------------|---------|------------------|
| Audio Source → X Input | Audio (Red) | **Signal to be processed** | **Resonant filtering** |
| Clock/LFO → Y Input | CV (Blue) | **Frequency modulation** | **Dynamic resonance control** |
| A Output → Effects Audio | Audio (Red) | **Processed signal** | **Resonant audio character** |
| B Output → Effects Mod | CV (Blue) | **Envelope follower CV** | **Audio-reactive modulation** |

**Module Settings:**
- **Disting Algorithm:** C-5 (Resonator)
- **Z Knob:** Resonance amount (start at 12 o'clock)
- **Y Input:** Modulation for frequency sweeping
- **Real-time control:** Z knob for performance

**Learning Objectives:**
- Master dual-output algorithms
- Understand audio processing with CV outputs
- Learn resonant filtering concepts
- Experience envelope following techniques
### **Patch 3: Advanced - Phase 1 Integration Hub**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   Mutable Plaits    │      │   Disting mk4       │
   │    (Phase 1)        │      │   (Utility Hub)     │
   │                     │      │                     │
   │ Model CV        ◀───┼──────┼─ A Output           │
   │                     │      │                     │
   │ Timbre CV       ◀───┼──────┼─ Algorithm: K-3     │
   │                     │      │ (LFO + Quantizer)   │
   │ Audio Out ○─────────┼──────┼─▶ X Input           │
   │                     │      │                     │
   └─────────────────────┘      │ B Output ○──────────┼─── CV (Blue)
                                │ (Quantized CV)      │
   ┌─────────────────────┐      │                     │
   │   Make Noise Maths  │      │ Z Knob: Scale       │
   │    (Phase 1)        │      │ S Knob: LFO Rate    │
   │                     │      │                     │
   │ Ch1 Unity Out ○─────┼──────────────┐     └─────────────────────┘
   │                     │              │     ║
   │ Ch4 Variable Out○───┼──────────────┼─────╬═══════════▶ Multiple
   │                     │              │     ║ CV (Blue)   Destinations
   │ SUM Output ○────────┼──────────────┘     ▼
   │                     │              ┌──────────────┐
   └─────────────────────┘              │   Synthesis  │
                                        │   Network    │
                                        │              │
                                        │ Multi-module │
                                        │ Integration  │
                                        │              │
                                        │ Audio Out ○──┼─── Complex Music
                                        └──────────────┘
```

| Module Chain | Integration Role | Purpose | Phase 1 Synergy |
|-------------|------------------|---------|------------------|
| **Plaits → Disting** | Audio analysis | **Model switching intelligence** | **Synthesis drives utility functions** |
| **Disting LFO/Quantizer** | Dual utility | **Modulation + pitch processing** | **Single module, multiple functions** |
| **Maths → Multi-destinations** | Complex modulation | **Mathematical processing** | **Analog computation** |
| **System Integration** | Complete voice | **All modules working together** | **Phase 1 ecosystem** |

**Module Settings:**
- **Disting:** Algorithm K-3 (LFO + Quantizer combo)
- **Plaits:** Responds to Disting's intelligent CV processing
- **Maths:** Provides complex envelopes and mathematical relationships
- **Integration:** All Phase 1 modules enhance each other

**Learning Objectives:**
- **Phase 1 module integration:** All core modules working as unified system
- **Utility hub concept:** Disting as central processing for other modules
- **Complex signal routing:** Multiple modules, multiple functions, musical results
- **System-level thinking:** Design patches as integrated ecosystems

---

## Advanced Techniques

### **Favorites System:**
- **Create custom menu** of your 16 most-used algorithms (O1-P8)
- **Text file on SD card** named 'favourites.txt' 
- **Quick access** to personalized algorithm collection
- **Example:** "b5 LFO", "a6 quantizer", "c5 resonator"

### **Preset Management:**
- **64 preset slots** store complete algorithm states
- **Preset 0 special:** Loads at power-up, auto-saves on algorithm change
- **Save workflow:** Menu → Save → choose slot → confirm
- **Performance tip:** Use presets for complex algorithm configurations

### **Knob Recorder Function:**
- **Available on many algorithms** where Z doesn't have another function
- **Hold Z while turning** to record knob movements (up to 14 seconds)
- **Release Z** to loop playback of recorded movements
- **Turn knob slightly** to regain manual control
- **Perfect for:** Complex filter sweeps, rhythmic parameter changes

### **SD Card Advanced Features:**
- **Playlist files** control sample/MIDI file order and settings
- **Loop markers** in WAV files for complex sample playback
- **Scale files** for microtonal quantization using Scala format
- **Help files** can be customized or translated
- **Firmware updates** via audio file playback

### **MIDI Integration:**
- **MIDI/CV algorithms** (G-7, G-8) for full MIDI integration
- **MIDI input** affects quantizers, triggers envelopes
- **MIDI output** from quantizers and step sequencers
- **MIDI clock** sync for delay and LFO algorithms

---

## Common Use Cases

### **CV Processing & Logic:**
- **Precision math** on control voltages (add, multiply, compare)
- **Quantization** to musical scales with extensive scale library
- **Logic operations** for complex trigger processing
- **Format conversion** between different synthesizer standards

### **Modulation Generation:**
- **LFOs** with Hz/V or clockable operation
- **Envelopes** with various trigger modes and shapes
- **Sample & Hold** with multiple noise colors
- **Random CV generation** with shift register patterns

### **Audio Processing:**
- **Filters** in every configuration (LP, HP, BP, notch, state-variable)
- **Delays** with tape simulation, ping-pong, and SD card storage
- **Effects** including phaser, chorus, vocoder, granular processing
- **Dynamics** compression, limiting, and envelope following

### **Sample Playback & Sequencing:**
- **Audio playback** with pitch, speed, and scrub control
- **MIDI file playback** for complex sequences
- **Wavetable synthesis** with custom wavetables
- **Multi-sampling** for complete instruments

### **System Utilities:**
- **Clock generation** and division with complex patterns
- **References** for tuning and calibration
- **MIDI conversion** between CV and MIDI domains
- **Mixing** and crossfading of signals

---

## Pairs Well With

### **Essential Partners:**
- **SD Card (32GB SDHC recommended):** Unlocks sample playback, MIDI, wavetables
- **Clock Source:** Essential for rhythm-synced delays and LFOs
- **CV Sources:** Multiple inputs benefit from having various CV available
- **Audio Sources:** Brings life to the extensive audio processing algorithms

### **Perfect Combinations:**
- **Quantizers + Random CV:** Instant musical sequences from chaos
- **Filters + Audio Sources:** Classic synthesis signal chain
- **Sample Playback + Triggers:** Complete drum machine or melodic instruments
- **Delays + Feedback Loops:** Complex audio manipulation and sound design

### **System Integration:**
- **Small Systems:** Single module providing dozens of functions
- **Large Systems:** Fill gaps and provide specialized functions
- **Performance Rigs:** Quick algorithm changes for live flexibility
- **Studio Systems:** Recall-able setups via preset system

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"I can't hear any difference when I turn the Z knob!"**
- Check that you're using the right algorithm for your signal type
- **Solution:** A-6 Quantizer needs pitch CV input, B-4 Delay needs audio input

**"The algorithm menu is confusing!"**
- 80+ algorithms can be overwhelming at first
- **Solution:** Start with A1-A8 and B1-B8, learn a few well before exploring

**"My samples won't play!"**
- SD card must be FAT32 formatted, 16-bit WAV files only
- **Solution:** Use SD Association formatting tool, convert files to 16-bit WAV

**"Settings keep reverting when I power cycle!"**
- Preset 0 loads at startup and auto-saves when switching algorithms
- **Solution:** Save your settings to Preset 0 if you want them at startup

### **🎵 Pro Tips:**

**Algorithm Learning Strategy:**
- **Master one series first** - try all A-series (CV utilities) before moving on
- **Learn the classics:** A-1 (adder), A-6 (quantizer), B-5 (LFO), B-4 (delay)
- **Use favorites system** to create your personal "greatest hits" menu

**Z Knob Mastery:**
- **Different per algorithm** - Z might be frequency, feedback, scale, or resonance
- **Watch the display** when changing Z - it shows the current value
- **CV input adds to knob** - set knob to center for bipolar CV control

**Parameter Navigation:**
- **Press Z to cycle** through parameters instead of holding S + turn
- **Parameter names displayed** briefly when you switch
- **Parameter values shown** when you change them with S knob

**SD Card Organization:**
- **Separate folders** for different sample sets (drums, melodies, textures)
- **Use playlists** to control file order and loop settings
- **Keep it simple** - don't put 1000s of files on card (slows down loading)

**Performance Techniques:**
- **Save complex setups** to numbered presets for instant recall
- **Use knob recorder** for repeated complex movements
- **Learn algorithm numbers** for quick navigation (A1, B5, etc.)
- **Chain algorithms** by saving partial setups and switching between them

---

## Why This Module Rocks

### **The Philosophy:**
Disting mk4 proves that **one excellent module** can be more valuable than dozens of mediocre ones. Instead of buying a separate quantizer, delay, LFO, filter, and sample player, you get all of them in 4HP - and they're all excellent implementations.

### **The Innovation:**
- **80+ algorithms** covering every fundamental modular synthesis function
- **Consistent interface** means learning one algorithm helps with all others
- **SD card integration** extends functionality far beyond typical hardware limitations
- **Continuous development** with regular firmware updates adding new algorithms

### **The Practical Benefits:**
- **Space efficiency:** Entire studio functionality in 4HP
- **Cost effectiveness:** One module replaces dozens of specialized modules
- **Learning tool:** Explore modular synthesis concepts without buying everything
- **Problem solver:** Always have the right tool for any synthesis challenge

### **Perfect For:**
- **Beginners:** Learn modular synthesis without breaking the bank
- **Small system builders:** Maximum functionality in minimal space
- **Experimenters:** Try every type of synthesis and processing
- **Professionals:** Reliable, high-quality implementations of essential functions
- **Anyone needing:** That one specific function they don't have a module for

### **The Magic:**
Disting mk4 **democratizes modular synthesis** by making every function accessible to everyone. Whether you need a simple mixer or complex granular processing, it's all there, waiting to be discovered.

---

**Bottom Line:** Disting mk4 isn't just a module - it's an entire modular synthesis education and toolkit in 4HP. Every patch teaches you something new, and there's always another algorithm to explore.

---

*Visit [Expert Sleepers](https://www.expert-sleepers.co.uk/disting.html) for complete documentation, firmware updates, and the latest algorithm additions*