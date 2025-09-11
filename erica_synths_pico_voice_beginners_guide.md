# Erica Synths Pico Voice - Beginner's Guide

**8 Complete Synthesizers in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Pico Voice?** A complete voice module packed into just 3HP with 8 different synthesis algorithms ranging from Karplus Strong string synthesis to TB-303 bassline emulation. It's like having 8 different synthesizers in the space of a single knob!

### Your First Voice (Chord Algorithm)
1. **Power up** - LED will show the current algorithm color
2. **Turn Tune knob** to around 12 o'clock (C4 range)
3. **Press the button** until LED shows **YELLOW** (Chord algorithm)
4. **Turn PAR1** (left knob) to select chord type (major, minor, 7th, etc.)
5. **Patch 1V/Oct from your sequencer** → **1V/Oct input**
6. **Patch output** → your mixer/VCA
7. **Play notes** - you should hear rich chords!

**Quick Algorithm Tour:**
- **Press button repeatedly** to cycle through 8 algorithms
- **Each color = different synthesis type** (RED=Karplus, YELLOW=Chords, etc.)
- **PAR1 and PAR2 knobs control different things** for each algorithm

---

## Essential Parameters (The Big 4)

### **1. Button + LED (Algorithm Selection)**
- **Short press:** Cycle through 8 algorithms
- **Hold 1 second:** Enter configuration mode (LED blinks)
- **LED colors:** Each algorithm has its own color coding
- **Pro tip:** Learn the colors - it's faster than counting button presses!

### **2. PAR1 Knob (Parameter 1)**
- **What it does:** Controls primary characteristic of each algorithm
- **Examples:** Chord type (Chords), Wave surfing (Wavetable), Resonance (Bassline)
- **Musical result:** Major creative control over the sound character
- **Range:** Full sweep changes the fundamental nature of each algorithm

### **3. PAR2 Knob (Parameter 2)**
- **What it does:** Usually controls Release time, but varies per algorithm
- **Creative use:** For sustained sounds without gates, turn fully clockwise
- **Configuration mode:** Selects waveforms/settings (when LED blinks)
- **Performance tip:** Great for real-time expression and dynamics

### **4. CV Input (Assignable Modulation)**
- **What it does:** Can control ANY of the three parameters (Tune, PAR1, or PAR2)
- **Assignment:** Set in configuration mode (RED=Tune, GREEN=PAR1, BLUE=PAR2)
- **Range:** -5V to +5V for full parameter sweep
- **Power move:** Change assignments per algorithm for complex modulation

---

## The 8 Algorithms Explained

### **🔴 RED - Karplus Strong (Plucked Strings)**
- **PAR1:** Distortion amount
- **PAR2:** Noise burst (initial pluck character)
- **Gate/Trigger:** Essential - initiates the "pluck"
- **Sound:** Realistic plucked strings, harps, guitar-like tones

### **🟡 YELLOW - Chords (Harmonic Stacks)**
- **PAR1:** Chord type (Major, minor, 7th, diminished, etc.)
- **PAR2:** Release time
- **Setting:** Waveform (Sine, Triangle, Saw, Square)
- **Sound:** Rich harmonic chords, perfect for pads and stabs

### **🟢 GREEN - Wavetable (Digital Wave Morphing)**
- **PAR1:** Wave surfing (morphs through wavetable)
- **PAR2:** Release time  
- **Setting:** 1 or 2 note operation
- **Sound:** Digital, evolving textures like classic wavetable synths

### **🟦 BLUE - Bassline (TB-303 Emulation)**
- **PAR1:** Resonance (filter resonance)
- **PAR2:** Release time
- **Setting:** Saw or Pulse waveform
- **Sound:** Classic acid house basslines and squelchy leads

### **🟣 PURPLE - PWM (Pulse Width Modulation)**
- **PAR1:** PWM amount (pulse width sweep)
- **PAR2:** Release time
- **Setting:** 1, 2, or 3 note operation
- **Sound:** Classic analog-style pulse waves with movement

### **🟠 ORANGE - Supersaw (Detuned Sawtooth Stack)**
- **PAR1:** Detune amount (spread between oscillators)
- **PAR2:** Release time
- **Setting:** Phase lock on/off
- **Sound:** Massive, wide sawtooth stacks like classic trance leads

### **🟦 CYAN - Wavefold (Harmonic Distortion)**
- **PAR1:** Fold amount (harmonic distortion)
- **PAR2:** Release time
- **Setting:** Sine, 2x Sine, Triangle, 2x Triangle base waves
- **Sound:** Complex harmonic textures from simple waveforms

### **🟢 LIME - Harmonic (Additive Synthesis)**
- **PAR1:** Add harmonics (builds harmonic content)
- **PAR2:** Release time
- **Setting:** Base waveform selection
- **Sound:** Rich, organ-like tones with controllable harmonic content

---

## Beginner Patch Ideas

### **Patch 1: Chord Progression Player**
- **Algorithm:** Chords (Yellow)
- **Your sequencer** → 1V/Oct input
- **PAR1 at different positions** for different chord types
- **LFO** → CV Input (assigned to PAR1 for changing chord types)
- **Gate from sequencer** → Gate input
- **Result:** Automatic chord progressions with evolving harmony

### **Patch 2: Acid Bassline**
- **Algorithm:** Bassline (Blue)
- **Bass sequence** → 1V/Oct input
- **PAR1 around 2 o'clock** (resonance sweet spot)
- **Envelope or LFO** → CV Input (assigned to PAR1 for filter sweeps)
- **Accent pattern** → Gate input
- **Result:** Classic TB-303 style acid sequences

### **Patch 3: Evolving Pad**
- **Algorithm:** Wavetable (Green)
- **Slow chord sequence** → 1V/Oct input
- **PAR2 fully clockwise** (sustained without gates)
- **Slow LFO** → CV Input (assigned to PAR1 for wave surfing)
- **Result:** Constantly evolving ambient pad textures

---

## Configuration Mode Deep Dive

### **Entering Configuration Mode:**
1. **Hold button for 1 second** - LED starts blinking
2. **Press button repeatedly** to assign CV input:
   - **Blinking RED:** CV controls Tune
   - **Blinking GREEN:** CV controls PAR1  
   - **Blinking BLUE:** CV controls PAR2
3. **Turn PAR2 knob** to change algorithm settings (waveforms, note modes, etc.)
4. **Hold button for 1 second** to exit - LED stops blinking

### **Algorithm Settings (PAR2 in Config Mode):**
- **Chords:** Choose waveform (Sine/Triangle/Saw/Square)
- **Wavetable:** 1 or 2 note operation
- **Bassline:** Saw or Pulse waveform
- **PWM:** 1, 2, or 3 note operation
- **Supersaw:** Phase lock on/off
- **Wavefold:** Base waveform selection
- **And more!**

---

## Common Use Cases

### **Studio Production:**
- **Lead synthesis:** Supersaw for trance leads, PWM for analog character
- **Bass programming:** Bassline algorithm for acid house and techno
- **Chord progressions:** Chords algorithm for instant harmonic content
- **Texture creation:** Wavetable and Wavefold for evolving sounds

### **Live Performance:**
- **3HP voice:** Perfect for small performance cases
- **Real-time control:** Algorithm switching and parameter control
- **No menu diving:** Everything accessible via knobs and button
- **Reliable tracking:** Solid 1V/Oct over 8 octaves (C1-C8)

### **Experimental Music:**
- **Karplus Strong:** Organic, physical modeling textures
- **Harmonic synthesis:** Custom harmonic content creation
- **CV assignment flexibility:** Different modulation per algorithm

---

## Pairs Well With

### **Essential Partners:**
- **Envelope Generators:** For shaping Karplus Strong and other algorithms
- **LFOs:** Modulate parameters via CV input for movement
- **Quantizers:** Ensure musical intervals when using random CV
- **VCAs:** Control amplitude and create dynamics

### **Advanced Combinations:**
- **Filters:** Further shape the Pico Voice output
- **Effects:** Reverb and delay enhance the 3HP sound
- **Sequencers:** Multi-track sequencing for chord progressions
- **Clock dividers:** Different timing for gate triggers

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My Karplus Strong doesn't make sound!"**
- Karplus Strong REQUIRES gate/trigger input to initiate the string
- **Solution:** Patch a gate/trigger signal to the Gate input

**"The pitch tracking seems off in the low end!"**
- Pico Voice tracks C1-C8, below 1V it doesn't track properly
- **Solution:** Stay within the C1-C8 range (1V-8V)

**"I can't get sustained sounds!"**
- Some algorithms depend on gate length for sustain
- **Solution:** Turn PAR2 fully clockwise for sustained operation without gates

### **🎵 Pro Tips:**

**Algorithm Workflow:**
- **Learn the LED colors** - much faster than counting button presses
- **Start with Chords or PWM** - most immediately musical
- **Experiment with configuration settings** - they dramatically change character

**CV Assignment Strategy:**
- **Assign CV to PAR1** for most dramatic changes
- **Assign to Tune** for pitch modulation and vibrato
- **Assign to PAR2** for expression and dynamics
- **Change assignments per algorithm** for complex patches

**Performance Techniques:**
- **Algorithm switching** creates instant texture changes
- **Parameter automation** via CV for evolving sounds
- **Configuration mode** allows real-time sound design
- **Gate pattern variations** especially important for Karplus Strong

**Sound Design Tips:**
- **Wavetable + slow LFO** = evolving pads
- **Bassline + envelope** = classic acid
- **Supersaw + detune** = massive leads
- **Wavefold + modulation** = complex harmonics

---

## Why This Module Rocks

### **The Philosophy:**
Erica Synths challenged themselves: "Can we make ANY superior functionality synth module 3HP wide and affordable?" The answer is yes, and Pico Voice proves it.

### **The Engineering:**
- **8 complete synthesis algorithms** in 3HP
- **Full 1V/Oct tracking** over 8 octaves
- **User memory** remembers your settings
- **Assignable CV control** for performance flexibility
- **Color-coded interface** for intuitive operation

### **The Practical Benefits:**
- **Space efficient:** Complete voice in minimal HP
- **Immediately musical:** No complex programming required
- **Versatile:** Covers bass, leads, pads, and experimental sounds
- **Performance ready:** Real-time control without menu diving
- **Affordable:** Professional synthesis algorithms at Pico prices

### **Perfect For:**
- **Small cases:** Maximum synthesis in minimum space
- **Beginners:** Easy to understand, immediately rewarding
- **Producers:** Quick access to classic synthesis methods
- **Performers:** Reliable, hands-on control
- **Everyone:** Sounds way bigger than its 3HP footprint!

---

**Bottom Line:** Pico Voice proves that great synthesis doesn't require massive modules. 8 professional algorithms, intuitive control, and that "bigger than it looks" sound make this the ultimate 3HP voice.

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*