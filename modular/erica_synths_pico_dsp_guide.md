# Erica Synths Pico DSP - Guide

**Professional Effects Studio in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

![Erica Synths Pico DSP](https://github.com/DGretta/Music/raw/main/modular/images/erica_synths/pico_dsp/front_panel.jpg)  
*Erica Synths Pico DSP - Professional 8-algorithm stereo effects processor with CV parameter control*

**What is Pico DSP?** A complete stereo effects processor with 8 custom DSP algorithms in just 3HP. It's like having a professional effects rack that takes any mono signal and creates wide, spacious stereo textures with everything from delays to reverbs to granular processing.

**Key Specifications:**
- **Width:** 3 HP
- **Depth:** 35 mm
- **Power:** 82 mA @ +12V / 20 mA @ -12V / 0 mA @ +5V

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

## Historical Context

### **The Erica Synths Pico Series Innovation**
The Pico series revolutionized modular synthesis by proving that professional-grade processing could exist in ultra-compact 3HP modules. Launched in the mid-2010s, the series challenged the prevailing assumption that sophisticated DSP required large modules, instead demonstrating that careful engineering and focused design could deliver studio-quality effects in minimal rack space.

### **Effects Processing Evolution in Modular**
Effects processing in modular systems evolved from external rack units and simple analog delays to integrated DSP modules that think like modular synthesizers. Early modular effects were either basic analog circuits or required patching to external processors, breaking the modular workflow. The Pico DSP represents the culmination of this evolution - professional studio algorithms that integrate seamlessly with CV control and modular signal flow, bringing effects processing into the patch itself rather than as post-processing.

### **DSP Integration Philosophy**
The Pico series, particularly the DSP, introduced the concept that effects should be instruments, not just processors. By providing CV control over effect parameters and algorithm switching, Pico DSP transformed effects from static processing into dynamic, performable synthesis elements. This approach influenced the broader modular community's understanding that effects processing could be as expressive and controllable as sound generation, leading to the modern integration of effects as compositional tools rather than mixing utilities.

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

## Patch Examples

### **Patch 1: Ambient Pad Creation**
```
VCO (Plaits, Braids, Elements) → IN input (mono signal processing)
Granular Delay (Blue) → L & R outputs (stereo ambient processing)
```
**Setup:** Granular Delay algorithm with freeze mode capabilities
**Controls:** PAR1 full clockwise (freeze mode), PAR2 at 2 o'clock (medium delay time), DRY/WET at 3 o'clock (mostly wet)
**Result:** Frozen, evolving ambient textures from simple oscillator sources
**Performance:** Real-time freeze activation and parameter manipulation for live ambient creation
**Learning Objective:** Understanding granular processing and freeze mode for ambient texture generation

**Alternative Module Options:**
- **Budget:** 2HP OSC for basic waveforms, Doepfer A-110-1 for classic analog oscillation
- **Different character:** Make Noise STO for triangle core harmonics, Intellijel Dixie for West Coast synthesis
- **Premium:** Mutable Instruments Plaits for complex synthesis algorithms, Expert Sleepers Disting for algorithmic generation

### **Patch 2: Rhythmic Stereo Delays**
```
Drum Machine (Pico DRUM2, Squarp Rample, TR-8S) → IN input (rhythmic source)
Stereo Delay (Green) → L & R outputs (ping-pong delay processing)
LFO (Batumi, Ochd, Pamela's NEW) → CV input (delay time modulation)
```
**Setup:** Stereo Delay algorithm with LFO modulation for dynamic timing
**Controls:** PAR1 synced to tempo (1/8 or 1/16 note timing), PAR2 around 12 o'clock (moderate feedback)
**Result:** Dynamic ping-pong delays that move with rhythm and evolve with modulation
**Performance:** LFO rate adjustment and feedback control for rhythmic variation
**Learning Objective:** Musical delay timing, stereo effects processing, and CV parameter automation

**Alternative Module Options:**
- **Budget:** 2HP Clk for basic clock generation, Doepfer A-118-2 for simple noise/random
- **Different character:** Make Noise Wogglebug for chaotic modulation, Maths for complex envelope shapes
- **Premium:** Intellijel Quadrax for sophisticated envelope generation, Expert Sleepers Disting for algorithmic modulation

### **Patch 3: Vintage Organ Simulation**
```
Chord Source (Telharmonic, Chord Organ, Just Friends) → IN input (harmonic content)
Leslie Speaker (Cyan) → L & R outputs (rotating speaker simulation)
Expression (CV, Manual Control, Pedal) → CV input (rotation speed control)
```
**Setup:** Leslie Speaker algorithm with expression control for authentic organ feel
**Controls:** PAR1 around 1 o'clock (medium rotation), PAR2 at 10 o'clock (slight high-pass filtering)
**Result:** Classic Hammond organ with rotating speaker cabinet simulation
**Performance:** Expression control over rotation speed, DRY/WET balance for vintage character
**Learning Objective:** Vintage effects simulation, harmonic processing, and expression control integration

**Alternative Module Options:**
- **Budget:** 2HP TM for basic chord generation, Doepfer A-105 for simple filtering
- **Different character:** Make Noise DPO for complex harmonic content, Maths for envelope-based expression
- **Premium:** Mannequins Just Friends for sophisticated chord generation, Intellijel Metropolix for sequence-based harmony

### **Patch 4: Natural Effects Processing**
```
DivKid Ochd (Natural LFOs) → Erica Synths Pico DSP (Effects Processing)
Multiple LFOs modulating PAR1, PAR2, DRY/WET simultaneously for flowing effects
```
**Setup:** Multiple algorithm cycling with natural LFO modulation
**Controls:** Ochd Rate at 12 o'clock for musical timing, Pico DSP effects rotating through algorithms
**Result:** Effects processing that develops naturally with flowing parameter evolution
**Performance:** Real-time algorithm cycling and natural parameter modulation for organic effects
**Learning Objective:** Effects processing as a composable element, natural modulation applied to professional processing

**Alternative Module Options:**
- **Budget:** 2HP LFO + 2HP Rnd provides similar natural + variation functionality
- **Different character:** Batumi for more geometric effects development, Maths for mathematical effects relationships
- **Premium:** Quadrax for more discrete effects steps, Ochd for continuous development

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

## Pairs Well With

### **Multi-Function Module Synergies (Professional Effects Systems):**
- **DivKid Ochd & Expander:** Natural LFO modulation → Pico DSP for flowing effects parameter development
- **Make Noise Wogglebug:** Chaos CV generation → Pico DSP for controlled unpredictable effects processing
- **Squarp Hermod+:** Advanced sequencing + built-in quantization + live recording → Pico DSP for professional effects automation
- **Winterbloom MetaModule:** Plugin-based processing (Fundamental VCO + AS ADSR) → Pico DSP for sophisticated parameter control
- **Mordax Data:** Real-time FFT analysis + level monitoring → Pico DSP for visual effects processing feedback
- **Cross-Multi-Function Integration:** Pico DSP serves as effects processor for complete multi-function studio workstations

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

## Multi-Function Learning Path

### **Recommended Study Progression:**
1. **Start with Pico DSP fundamentals:** Master 8-effect operation, stereo processing, and effects synthesis concepts
2. **Add natural modulation:** Integrate DivKid Ochd for flowing effects parameter development with natural LFO evolution (see Ochd guide)
3. **Include controlled chaos:** Use Make Noise Wogglebug for chaotic effects processing with controlled unpredictability (see Wogglebug guide)
4. **Add professional sequencing:** Apply Squarp Hermod+ for advanced effects automation with live recording capabilities (see Hermod+ guide)
5. **Include plugin processing:** Use Winterbloom MetaModule for sophisticated parameter control via plugins (see MetaModule guide)
6. **Complete the workstation:** Add Mordax Data for real-time analysis and visual feedback of effects processing (see Data guide)

### **Cross-Module Learning Opportunities:**
- **Pico DSP + Ochd:** Learn natural modulation of effects parameters for flowing stereo processing development
- **Pico DSP + Wogglebug:** Master chaos-driven effects for controlled unpredictability in professional processing
- **Pico DSP + Hermod+:** Understand advanced effects automation with multi-track sequencing and live recording
- **Pico DSP + MetaModule:** Explore plugin-based effects parameter control with sophisticated modulation sources
- **All Multi-Function + Pico DSP:** Build complete professional effects workstations where each module serves multiple roles simultaneously

### **Skill Development Milestones:**
- **Beginner:** Use different effects algorithms and basic CV assignment for professional stereo processing
- **Intermediate:** Master parameter interaction and effect switching for complex processing relationships
- **Advanced:** Create multi-function integration patches with natural/chaos/plugin modulation of effects parameters
- **Expert:** Design complete effects workstations where Pico DSP serves as professional processing core for multiple modulation types

### **Advanced Effects Concepts:**
- **8-Algorithm Mastery:** Understand how different processing types create unique stereo characteristics
- **CV Integration Theory:** Master the relationship between modulation sources and professional effects parameters
- **Dynamic Effects Processing:** Explore how modulation affects algorithm character, stereo width, and processing quality
- **System Integration:** Design patches where Pico DSP processes multiple modulation types simultaneously with analysis feedback

### **Performance Applications:**
- **Live Effects Control:** Real-time algorithm switching and parameter control for dynamic processing performance
- **Generative Effects Systems:** Foundation for self-evolving processing systems with natural/chaos/plugin modulation
- **Professional Processing:** Bridge between traditional effects and advanced multi-function modulation processing
- **Studio Tool:** Complete effects workstation with analysis integration for professional results

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*
