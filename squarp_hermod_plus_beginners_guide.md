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

---

## Common Use Cases

**🧠 **System Brain:** Central sequencer controlling entire modular system**
**🎹 **MIDI Hub:** Sequence external synths, drum machines, and software**
**💻 **DAW Integration:** USB connectivity for computer synchronization**
**🎵 **Live Performance:** Pattern switching, track muting, real-time control**
**📻 **Song Composition:** 64-sequence chains for complete song structures**
**🎛️ **CV Looper:** Record and loop control voltage performances**
**⚡ **Clock Master:** Rock-solid timing for entire studio synchronization**
**🔄 **Format Bridge:** Seamlessly convert between MIDI and CV domains**

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

### **Perfect Partners for Beginners:**
- **Clock Divider (4ms SCM, Pamela's):** Feed Hermod+ with complex clock patterns
- **MIDI Keyboard Controller:** Live input for recording and real-time control
- **Quantizer (Scales, O_C):** Additional quantization options beyond built-in effects
- **Multiple VCAs (Veils, QuadVCA):** Control the 8 CV outputs with proper dynamics

### **Next-Level Combinations:**
- **MIDI Gear (Synths, Drum Machines):** Hermod+ excels as MIDI sequencer hub
- **USB Controllers (Launchpad, Push):** Advanced control and grid-based input
- **Audio Interface with MIDI:** Complete studio integration via USB
- **Multiple Oscillators:** Take advantage of 8 independent CV/Gate tracks

### **Advanced Integration:**
- **Squarp xp32 Expander:** 32 additional CV outputs for massive modular control
- **Computer/DAW:** USB host/device for seamless studio integration
- **Multiple Hermod+ units:** Chain together for massive multi-track systems
- **MIDI Processing (Blokas midihub):** Advanced MIDI routing and processing

### **Pro Integration Tips:**
- **Use as master clock** for entire studio - rock-solid timing
- **MIDI tracks control external gear** while CV tracks handle modular
- **USB host mode** connects controllers without computer
- **Record everything** - both MIDI and CV performances with perfect timing

### **Studio Workflow Enhancement:**
- **Project per song** - organize your music properly
- **Pattern per song section** - verse/chorus/bridge variations ready
- **Sequence chains** - complete song arrangements
- **Live performance** - mute/unmute tracks, switch patterns, control effects

---

*Need the full technical manual? Visit squarp.net/hermodplus/manual/ for complete documentation*