# Erica Synths Pico DSP - Beginner's Guide

**Professional Effects Studio in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Pico DSP?** A complete stereo effects processor with 8 custom DSP algorithms in just 3HP. It's like having a professional effects rack that takes any mono signal and creates wide, spacious stereo textures with everything from delays to reverbs to granular processing.

### Your First Stereo Effect (Stereo Delay)
1. **Power up** - LED will show the current effect color
2. **Press button** until LED shows **BLUE** (Stereo Delay)
3. **Patch your mono source** → **IN jack** (oscillator, drum, etc.)
4. **Patch Left and Right outputs** → your stereo mixer/interface
5. **Turn PAR1** (delay time) to around 1 o'clock
6. **Turn PAR2** (feedback) to around 11 o'clock  
7. **Set DRY/WET** to 12 o'clock (50/50 mix)
8. **Play your source** - instant professional stereo delay!

**Quick Effects Tour:**
- **Press button repeatedly** to cycle through 8 effects
- **Each color = different effect type** 
- **Watch clipping LED** - keep it off for clean processing
- **Stereo outputs create wide, immersive soundscapes**

---

## Essential Parameters (The Big 4)

### **1. Button + RGB LED (Effect Selection)**
- **Short press:** Cycle through 8 different effects
- **LED colors:** Each effect has its own color coding
- **No menu diving:** Direct access to all effects
- **Pro tip:** Learn the colors for instant effect switching during performance

### **2. PAR1 Knob + CV Input**
- **What it does:** Controls the primary parameter of each effect
- **Examples:** Delay time (delays), pitch shift amount, reverb time, rotation speed
- **CV control:** -5V to +5V for full parameter sweep via CV input
- **Performance use:** Most dramatic parameter for real-time control

### **3. PAR2 Knob (Parameter 2)**
- **What it does:** Controls secondary characteristic of each effect
- **Examples:** Feedback (delays), tone (reverbs), filter settings, bitcrush amount
- **Musical result:** Shapes the character and intensity of each effect
- **Sweet spots:** Often has musically tuned positions for different feels

### **4. DRY/WET Control**
- **What it does:** Blends original signal with processed signal
- **Range:** Full dry (no effect) to full wet (effect only)
- **Performance use:** Essential for balancing effect intensity
- **Creative tip:** Full wet settings turn Pico DSP into a signal generator

---

## The 8 Effects Explained

### **🔴 RED - Mono Delay**
- **PAR1:** Delay time (how long until echo)
- **PAR2:** Feedback (how many repeats)
- **Character:** Classic single-tap delay, mono processing
- **Use cases:** Slapback echo, rhythmic repeats, doubling

### **🟡 YELLOW - Pitch Shift Delay**
- **PAR1:** Pitch shift amount (up/down in semitones)
- **PAR2:** Delay time
- **Character:** Pitch-shifted echoes create harmonies
- **Use cases:** Harmonized delays, alien textures, pitch effects

### **🟢 GREEN - Stereo Delay**
- **PAR1:** Delay time (synchronized L/R timing)
- **PAR2:** Feedback amount
- **Character:** Wide stereo delays with spatial movement
- **Use cases:** Ping-pong delays, stereo echoes, rhythmic textures

### **🟦 BLUE - Granular Delay**
- **PAR1:** Feedback amount (FULL CW = freeze mode!)
- **PAR2:** Delay time
- **Character:** Grainy, textural delays with freezing capability
- **Use cases:** Ambient textures, frozen soundscapes, experimental processing

### **🟣 PURPLE - Reverb**
- **PAR1:** Reverb time (decay length)
- **PAR2:** Tone (bright/dark character)
- **Character:** Clean, spacious reverb algorithm
- **Use cases:** Room ambience, hall reverbs, spatial depth

### **🟠 ORANGE - Saturated Reverb**
- **PAR1:** Tone control (saturation character)
- **PAR2:** Reverb time
- **Character:** Warm, driven reverb with harmonic saturation
- **Use cases:** Vintage reverb sounds, colored spaces, musical distortion

### **🟦 CYAN - Leslie Speaker**
- **PAR1:** Rotation speed (slow/fast Leslie simulation)
- **PAR2:** High-pass filter (removes low frequencies)
- **Character:** Classic rotating speaker cabinet simulation
- **Use cases:** Organ sounds, vintage effects, psychedelic textures

### **🟢 LIME - Overdrive/Bitcrush**
- **PAR1:** Overdrive amount (analog-style distortion)
- **PAR2:** Bitcrush amount (digital decimation)
- **Character:** Hybrid analog/digital distortion
- **Use cases:** Lo-fi effects, distorted textures, digital artifacts

---

## Beginner Patch Ideas

### **Patch 1: Ambient Pad Creation**
- **Simple oscillator** → Pico DSP IN
- **Effect:** Granular Delay (Blue)
- **PAR1 full clockwise** (freeze mode)
- **PAR2 at 2 o'clock** (medium delay time)
- **DRY/WET at 3 o'clock** (mostly wet)
- **Result:** Frozen, evolving ambient textures from simple sources

### **Patch 2: Rhythmic Stereo Delays**
- **Drum pattern** → Pico DSP IN
- **Effect:** Stereo Delay (Green)
- **PAR1 synced to tempo** (1/8 or 1/16 note timing)
- **PAR2 around 12 o'clock** (moderate feedback)
- **LFO** → CV input (for delay time modulation)
- **Result:** Dynamic ping-pong delays that move with your rhythm

### **Patch 3: Vintage Organ Simulation**
- **Chord-playing oscillator** → Pico DSP IN
- **Effect:** Leslie Speaker (Cyan)
- **PAR1 around 1 o'clock** (medium rotation)
- **PAR2 at 10 o'clock** (slight high-pass)
- **DRY/WET at 2 o'clock** (effect-heavy)
- **Result:** Classic Hammond organ with rotating speaker feel

---

## Advanced Techniques

### **CV Modulation Strategies:**
- **LFO → CV Input:** Animated parameter sweeps
- **Envelope → CV Input:** Dynamic effect changes
- **Sequencer → CV Input:** Rhythmic parameter changes
- **Random → CV Input:** Unpredictable effect variations

### **Freeze Mode (Granular Delay):**
- **PAR1 full clockwise** creates infinite feedback loop
- **Captures current audio** and loops it indefinitely
- **PAR2 controls loop length** when frozen
- **Performance technique:** Freeze interesting moments, then manipulate

### **Signal Chain Strategies:**
- **Early in chain:** Process oscillators before filters
- **Late in chain:** Process final mix for polish
- **Parallel processing:** Mix dry signal separately for blend control
- **Feedback loops:** Route outputs back through other modules

---

## Input/Output Management

### **Input Specifications:**
- **10Vpp maximum** before clipping (watch the LED!)
- **Mono to stereo conversion** - single input becomes stereo processing
- **High impedance input** - works with all Eurorack signal levels
- **Clipping protection** - LED warns before distortion

### **Output Characteristics:**
- **True stereo outputs** - L and R are processed independently
- **Eurorack levels** - compatible with all mixers and interfaces
- **Use both outputs** - effects are designed for stereo operation
- **Balanced mix bus** - safe to mix L and R if needed (but you lose stereo!)

---

## Common Use Cases

### **Studio Production:**
- **Mix bus processing:** Final polish on submixes
- **Send effects:** Dedicated effect returns in mixing console
- **Creative processing:** Transform simple sounds into complex textures
- **Space creation:** Add depth and width to mono sources

### **Live Performance:**
- **3HP effects rack:** Professional processing in minimal space
- **Real-time control:** CV and manual parameter automation
- **No latency:** Real-time processing for live input
- **Reliable operation:** Professional DSP algorithms

### **Sound Design:**
- **Texture creation:** Granular and pitch effects for unique sounds
- **Vintage emulation:** Leslie and saturated reverb for classic tones
- **Experimental processing:** Freeze modes and extreme settings
- **Stereo imaging:** Create wide, immersive soundscapes

---

## Pairs Well With

### **Essential Partners:**
- **Stereo Mixers:** Essential for hearing the full stereo processing
- **VCAs:** Control send levels to the effect
- **LFOs:** Animate effect parameters via CV input
- **Envelope Generators:** Dynamic effect parameter control

### **Advanced Combinations:**
- **Multiple Pico DSPs:** Chain different effects together
- **Quantizers:** Make CV modulation musical (for pitch shift delay)
- **Clock Dividers:** Sync delay times to musical subdivisions
- **Attenuverters:** Scale CV input for precise parameter control

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"I don't hear any stereo effect!"**
- Must use both L and R outputs to hear stereo processing
- **Solution:** Connect both outputs to a stereo mixer or interface

**"My signal is distorting!"**
- Input signal too hot, clipping LED is lighting up
- **Solution:** Reduce input level or use attenuator before Pico DSP

**"The effect doesn't sound right!"**
- Some effects need specific DRY/WET settings to sound their best
- **Solution:** Experiment with DRY/WET balance, many effects sound best with more wet signal

### **🎵 Pro Tips:**

**Effect Selection Strategy:**
- **Learn the LED colors** - much faster than button counting
- **Start with Stereo Delay and Reverb** - most immediately useful
- **Granular Delay freeze mode** - perfect for live looping and texture creation

**Parameter Sweet Spots:**
- **Delay times:** Set by ear or use clock dividers for musical timing
- **Feedback settings:** 50-75% for musical repeats, higher for chaos
- **DRY/WET balance:** 30-70% wet for most applications, 100% wet for creative processing

**CV Modulation Tips:**
- **Slow LFO on delay time** - creates warping, tape-like effects
- **Fast LFO on reverb time** - creates gated reverb effects
- **Random voltage on parameters** - organic, evolving effects
- **Envelope on DRY/WET** - effect intensity follows dynamics

**Performance Techniques:**
- **Effect switching** - instant texture changes during performance
- **Freeze mode tricks** - capture and manipulate live audio
- **CV automation** - pre-programmed effect changes
- **DRY/WET sweeps** - dramatic builds and breakdowns

---

## Why This Module Rocks

### **The Philosophy:**
Professional studio effects shouldn't require rack-mount units and multiple cables. Pico DSP proves that high-quality DSP processing can fit in 3HP while maintaining the flexibility and creativity of modular synthesis.

### **The Engineering:**
- **8 custom DSP algorithms** designed specifically for Eurorack
- **True stereo processing** with intelligent mono-to-stereo conversion
- **Professional signal handling** with clipping protection
- **CV integration** brings effects into the modular workflow

### **The Practical Benefits:**
- **Space efficient:** Complete effects studio in 3HP
- **Immediate results:** No programming or complex setup
- **Performance ready:** Real-time control and effect switching
- **Studio quality:** Professional algorithms in modular format
- **Creative potential:** Effects become part of the patch, not just post-processing

### **Perfect For:**
- **Every rack:** Essential processing for any modular system
- **Small cases:** Professional effects without space sacrifice
- **Performers:** Reliable, hands-on effects control
- **Producers:** Studio-quality processing in modular workflow
- **Sound designers:** Creative processing and texture generation

---

**Bottom Line:** Pico DSP brings professional effects processing into the modular world without compromise. 8 high-quality effects, stereo processing, and CV integration in 3HP - it's like having a complete effects studio that thinks like a modular synthesizer.

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*