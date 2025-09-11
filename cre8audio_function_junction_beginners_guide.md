# Cre8audio Function Junction - Beginner's Guide

**The Modulation Command Center**

---

## Quick Start: Get Your First Modulated Sound in 5 Minutes

**What is Function Junction?** Think of it as four essential modules in one compact 16HP package: a full ADSR envelope, a flexible function generator, an LFO, and a 3-channel attenuverting mixer. Designed with Pittsburgh Modular, it's the Swiss Army knife of modulation that can handle everything from basic envelope duties to complex, evolving modulation scenarios.

### Your First Envelope-Controlled Sound
1. **Connect any audio source** → **VCA audio input**
2. **Connect Function Junction ADSR OUT** → **VCA CV input**
3. **Connect gate/trigger source** → **Function Junction A GATE input**
4. **Adjust ADSR knobs** - Attack, Decay, Sustain, Release to taste
5. **Trigger your gate** and hear the envelope shape your sound!
6. **Bonus:** Try the LOOP button to make it cycle like an LFO

**Congratulations!** You've just used one of the four powerful sections in this modulation powerhouse!

---

## Essential Parameters (The Four Section System)

### **1. ADSR Envelope - Your Dynamic Shaper**
- **A, D, S, R knobs:** Classic four-stage envelope control
- **A GATE input:** Trigger/gate input for envelope
- **ADSR OUT:** Standard envelope output (0V-10V)
- **LOOP button:** Makes envelope cycle continuously = instant LFO!
- **A LOOP jack:** External gate control for loop on/off
- **LONG button:** Doubles envelope times for ultra-slow movements
- **Pro tip:** The ADSR is also normalled to mixer channel 1 for extra flexibility

### **2. Function Generator - The Shape-Shifter**
- **ATTACK knob:** Rise time control
- **DECAY knob:** Fall time control  
- **CURVE knob:** Shape control - exponential (left) → linear (center) → logarithmic (right)
- **F IN jack:** Trigger input for function
- **F OUT jack:** Function output
- **F TRIG jack:** End-of-decay trigger output (great for chaining!)
- **MOD button + knob:** Assign modulation to attack, decay, or both
- **SUSTAIN button:** Hold at peak until gate goes low (creates ASR envelope)
- **LOOP button:** Cycle the function continuously

### **3. LFO - The Rhythm Master**
- **RATE knob:** Speed control from very slow to audio rate
- **Triangle output:** Smooth, curved modulation
- **Square output:** Stepped, on/off modulation
- **Simple but effective:** Sometimes you just need a solid LFO!
- **Normalled to mixer:** Channel 3 gets LFO automatically

### **4. Attenuverting Mixer - The Control Center**
- **Three channels:** Each with dedicated attenuverter knob
- **Channel 1 (1A):** Normalled to ADSR output
- **Channel 2 (2F):** Normalled to Function Generator output  
- **Channel 3 (3L):** Normalled to LFO output
- **Individual outputs:** Channels 1 & 2 have separate outs
- **MIX output:** Combines all three channels
- **OR+ output:** Outputs highest voltage among the three channels
- **Magic:** Can be 3 independent attenuverters OR a 3-channel mixer

### **5. Advanced Features**
- **Normalling system:** Modules automatically connect to mixer when nothing patched
- **End-of-decay trigger:** Function generator outputs trigger when cycle completes
- **Multiple loop modes:** Both envelope and function can loop independently
- **Modulation routing:** Function generator can be modulated in creative ways
- **Curve shaping:** Exponential, linear, and logarithmic response curves

### **6. Hidden Capabilities**
- **Slew limiting:** Function generator can smooth stepped CV
- **Envelope following:** Function responds to audio input levels
- **Clock source:** Function in loop mode becomes complex clock generator
- **Voltage processor:** Mixer can process any CV or audio signals

---

## Beginner Patch Ideas

### **Patch 1: Classic VCA Envelope**
```
[Gate source] ──→ [Function Junction A GATE]
[Function Junction ADSR OUT] ──→ [VCA CV input]
[Audio source] ──→ [VCA audio input] ──→ [Audio out]
```
**Setup:** Standard envelope control of amplitude
**Controls:** A/D/S/R knobs shape the volume envelope
**Visual:** Watch LED respond to gate triggers
**Result:** Classic synthesizer voice with proper amplitude shaping
**Experiment:** Try LOOP button to turn envelope into tremolo LFO

### **Patch 2: Dual Modulation Setup**
```
[Clock] ──→ [Function Junction F IN] (function generator)
[Function Junction F OUT] ──→ [Filter cutoff CV]
[Function Junction LFO Triangle] ──→ [Oscillator PWM]
```
**Setup:** Two independent modulation sources from one module
**Function:** Set to short attack, medium decay, loop mode for rhythmic filter
**LFO:** Slow rate for subtle pulse width modulation
**Result:** Rhythmic filter movement + subtle PWM = evolving texture

### **Patch 3: Complex Mixed Modulation**
```
[Function Junction MIX output] ──→ [Oscillator V/OCT input]
Use mixer to blend: ADSR + Function + LFO amounts
```
**Setup:** All three modulation sources combined into one complex CV
**Controls:** Each attenuverter controls how much each source contributes  
**Experiment:** Different combinations create different pitch movement patterns
**Result:** Complex, evolving pitch modulation impossible with single sources

### **Patch 4: Self-Patched Modulation**
```
[Function Junction F TRIG] ──→ [Function Junction A GATE] (trigger chaining)
[Function Junction ADSR OUT] ──→ [Function Junction F MOD] (self-modulation)
[Function Junction F OUT] ──→ [Audio destination]
```
**Setup:** Function triggers envelope, envelope modulates function attack/decay
**Result:** Complex, self-generating modulation patterns
**Controls:** Adjust F MOD knob to control how much envelope affects function
**Visual:** Watch the interplay between sections create organic movement

---

## Common Use Cases

**🎚️ **Essential Envelopes:** ADSR for VCAs, filters, and any dynamic shaping**
**⚡ **Function Generation:** Attack/decay shapes for percussion, plucks, and accents**
**🌊 **LFO Duties:** Tremolo, vibrato, filter sweeps, and rhythmic modulation**
**🎛️ **CV Mixing:** Combine multiple modulation sources into complex shapes**
**🔄 **Looping Envelopes:** Turn any envelope into cycling LFO with loop buttons**
**⏱️ **Timing Control:** Use end-of-decay triggers for sequence timing**
**📈 **Slew Limiting:** Smooth out stepped CV with function generator**
**🎭 **Performance Tool:** Real-time modulation control with mixer attenuverters**

---

## Beginner "Gotchas"

### **Normalling Behavior Confusion**
- **When inputs are empty:** Mixer channels automatically get ADSR, Function, LFO signals
- **When you patch inputs:** The normalling disconnects and you get your patched signal
- **This is powerful:** Instant access to all three modulators through mixer
- **Can be confusing:** Why did my mixer behavior change when I patched something?
- **Remember:** Empty jacks = automatic signals, patched jacks = your signals

### **Loop Button Functions**
- **ADSR LOOP:** Makes envelope cycle continuously (becomes LFO)
- **Function LOOP:** Makes function cycle continuously (becomes complex LFO)
- **Independent:** Each can loop separately
- **Visual feedback:** LEDs show when loop modes are active
- **Don't forget:** Loop modes ignore new gate triggers until loop is disabled

### **Attenuverter Control Direction**
- **12 o'clock = no signal** (attenuverters start at zero)
- **Clockwise from 12 = positive amount**
- **Counter-clockwise from 12 = inverted/negative amount**
- **Full CW or CCW = maximum positive or negative**
- **Practice:** Turn knobs from 12 o'clock position to understand behavior

### **Function Generator Modulation Assignment**
- **MOD button cycles:** Attack only → Decay only → Both → Attack only...
- **Must press MOD button** to select what gets modulated
- **LED indicates:** Which parameter(s) the F MOD input affects
- **F MOD knob:** Controls amount of modulation (attenuverter)
- **Powerful feature:** Can create complex modulation interactions

### **OR+ Output vs MIX Output**
- **MIX output:** Sum of all three channels (can create complex shapes)
- **OR+ output:** Only the highest voltage among the three (peak selector)
- **Different uses:** MIX for blended modulation, OR+ for "winner takes all"
- **Don't ignore OR+:** Great for selecting strongest modulation signal

---

## Next Steps

1. **Master each section individually** - understand ADSR, Function, LFO, and Mixer separately first
2. **Explore normalling system** - see how sections automatically connect to mixer
3. **Experiment with loop modes** - turn envelopes into LFOs, functions into complex modulators
4. **Practice mixer workflows** - learn to blend multiple modulation sources creatively
5. **Try self-patching** - use trigger outputs to create feedback loops and interactions
6. **Combine with other modules** - use as modulation hub for entire patches

**Remember:** Function Junction rewards exploration - each section can work alone or in combination with the others for exponentially more possibilities!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **VCAs (2HP VCA, Veils):** Function Junction excels at providing envelope control for dynamics
- **Filters (SEM, MMF):** ADSR and Function sections perfect for filter modulation
- **Oscillators:** LFO section handles vibrato, tremolo, and PWM duties
- **Clock sources:** External clocks unlock rhythmic potential of Function Generator

### **Next-Level Combinations:**
- **Make Noise Maths:** Two function generators = incredible modulation possibilities when combined
- **Attenuators/Offset:** Fine-tune the modulation amounts beyond what mixer provides
- **Sample & Hold:** Use Function trigger outputs to clock S&H for stepped modulation
- **Multiple/Splitter:** Send Function Junction outputs to multiple destinations

### **Advanced Integration:**
- **Complex Oscillators:** Use multiple Function Junction outputs for FM, sync, and timbral control
- **Sequencers:** End-of-decay triggers perfect for advancing step sequences
- **Granular processors:** Complex modulation from mixer perfect for granular parameter control
- **Performance controllers:** Use as modulation source behind touch/expression interfaces

### **Modulation Hub Applications:**
- **Poly voices:** Multiple Function Junctions for independent voice modulation
- **West Coast synthesis:** Function generator pairs perfectly with low-pass gates
- **Ambient patches:** Long envelope times + loop modes = evolving soundscapes
- **Percussive sounds:** Function generator excels at pluck and strike envelopes

### **Pro Tips:**
- **Use as "modulation distributor":** One complex modulation (MIX) to multiple destinations
- **Rhythmic modulation:** Function in loop mode + clock division = polyrhythmic modulation
- **Modulate the modulators:** Patch LFO to Function MOD input for evolving shapes
- **Emergency utilities:** Each section can solve common patch problems independently

### **Creative Experiments:**
- **Audio rate modulation:** Push Function and LFO into audio range for FM synthesis
- **Trigger cascades:** Chain multiple Function Junction modules using TRIG outputs
- **Parallel processing:** Split audio, use different modulation on each path, recombine
- **Interactive modulation:** Use touch controllers to manipulate mixer levels in real-time

---

*Function Junction is designed to be immediately useful but endlessly deep - don't be afraid to experiment with unconventional patching!*