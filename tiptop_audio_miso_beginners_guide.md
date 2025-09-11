# Tiptop Audio Miso - Beginner's Guide

**The CV Laboratory and Signal Sculptor**

---

## Quick Start: Get Your First Mixed Signal in 5 Minutes

**What is Miso?** Think of it as a Swiss Army knife for CV and audio signals. The name stands for Mix, Invert, Scale, and Offset - the four core functions that make this module incredibly versatile. It's essentially four attenuverters with offset controls, grouped into two sections (1+2 and A+B), topped with a voltage-controlled crossfader. It's the kind of utility module that seems simple but becomes indispensable once you understand its power.

### Your First CV Mix
1. **Connect two CV sources** → **Inputs 1 and 2**
2. **Connect 1+2 MIX output** → **oscillator pitch or filter cutoff**
3. **Turn both attenuverter knobs** (channels 1 and 2) to different amounts
4. **Adjust offset knobs** to shift the combined signal up or down
5. **Watch the red/yellow LEDs** show signal strength and polarity
6. **Try the crossfader** to blend between the 1+2 and A+B sections

**Congratulations!** You've just created a complex CV signal from simple sources using mathematical signal processing!

---

## Essential Parameters (The MISO Toolkit)

### **1. Four Attenuverters - The Signal Shapers**
- **Channels 1, 2, A, B:** Each with dedicated input, output, and attenuverter control
- **Attenuverter function:** Controls signal strength and polarity
- **12 o'clock:** No signal (muted)
- **Clockwise from 12:** Positive signal (normal polarity)  
- **Counter-clockwise from 12:** Negative signal (inverted polarity)
- **Independent operation:** Each channel works separately or as part of groups

### **2. Offset Controls - The Voltage Shifters**
- **One offset control per channel:** Adds or subtracts DC voltage
- **Bipolar offset:** Can shift signals positive or negative
- **12 o'clock:** No offset
- **Clockwise:** Positive offset (raises voltage)
- **Counter-clockwise:** Negative offset (lowers voltage)  
- **CV generation:** With no input, offset control generates constant voltage
- **Bipolar conversion:** Convert unipolar to bipolar signals (and vice versa)

### **3. Group Mix Outputs - The Section Summers**
- **1+2 MIX:** Combines processed signals from channels 1 and 2
- **A+B MIX:** Combines processed signals from channels A and B
- **Polarizing mixer:** Inverted signals subtract from the mix
- **Independent use:** Each section can work as separate dual mixer
- **Crossfader sources:** These outputs feed the central crossfader

### **4. Voltage-Controlled Crossfader - The Dynamic Blender**
- **Manual control:** Knob blends between 1+2 MIX and A+B MIX
- **CV control:** External voltage controls the crossfade position
- **MAIN output:** Final output combining both sections
- **Smooth linear response:** Professional-quality crossfading
- **Performance tool:** Great for live mixing and automation

### **5. Visual Feedback System**
- **Red/Yellow LEDs:** Show signal strength and polarity for each section
- **Red:** Negative voltages
- **Yellow:** Positive voltages
- **Brightness:** Indicates signal strength
- **Instant feedback:** See what's happening with your signals visually

### **6. Flexible Signal Routing**
- **Individual outputs:** Each attenuverter has its own output
- **Group outputs:** 1+2 and A+B mix outputs
- **Main output:** Final crossfaded result
- **Internal routing:** Outputs can be patched to inputs for feedback
- **No normalling:** Everything requires explicit patching for maximum flexibility

---

## Beginner Patch Ideas

### **Patch 1: Dual LFO Mixer**
```
[LFO 1] ──→ [Miso Channel 1]
[LFO 2] ──→ [Miso Channel 2]  
[1+2 MIX] ──→ [Filter Cutoff CV]
```
**Setup:** Two different LFO shapes mixed into complex modulation
**Controls:** Attenuverters control how much of each LFO
**Result:** Complex filter movement combining multiple LFO shapes
**Performance:** Adjust mix in real-time for dynamic modulation

### **Patch 2: Envelope Crossfader**
```
[Envelope 1] ──→ [Miso Channel 1]
[Envelope 2] ──→ [Miso Channel A]
[Slow LFO] ──→ [Crossfader CV]
[MAIN out] ──→ [VCA CV input]
```
**Setup:** Two different envelopes automatically crossfaded by LFO
**Result:** Evolving envelope shapes that morph between two sources
**Creative:** Try different envelope shapes (fast attack vs slow attack)
**Advanced:** Use random CV instead of LFO for unpredictable morphing

### **Patch 3: Bipolar to Unipolar Converter**
```
[Bipolar LFO] ──→ [Miso Channel 1] (-5V to +5V input)
[Channel 1 Offset] ──→ +5V (fully clockwise)
[Channel 1 Attenuverter] ──→ 50% (halfway clockwise)
[Channel 1 out] ──→ [VCA CV] (now 0V to +5V)
```
**Setup:** Mathematical conversion of signal ranges
**Result:** Bipolar LFO becomes unipolar for VCA control
**Theory:** Offset shifts center, attenuverter scales range
**Essential skill:** Understanding voltage ranges in modular

### **Patch 4: Complex CV Sequencer**
```
[Step Sequence A] ──→ [Miso Channel 1]
[Step Sequence B] ──→ [Miso Channel 2]
[Gate Sequence] ──→ [Miso Crossfader CV]
[MAIN out] ──→ [Oscillator V/OCT]
```
**Setup:** Two different sequences crossfaded by third sequence
**Result:** Complex melodic patterns that switch between two sources
**Rhythmic:** Gate sequence creates rhythmic switching between melodies
**Expandable:** Add offset to transpose one sequence relative to other

---

## Common Use Cases

**🎛️ **CV Mixing:** Combine multiple modulation sources into complex shapes**
**🔄 **Signal Inversion:** Flip polarity for phase relationships and modulation**
**📊 **Voltage Scaling:** Attenuate strong signals or boost weak ones**
**⚡ **Voltage Offset:** Shift signal ranges for different module requirements**
**🎭 **Performance Mixing:** Live crossfading between different signal sources**
**🔧 **Format Conversion:** Bipolar ↔ unipolar, voltage range adjustments**
**🌊 **Wave Shaping:** Create new LFO shapes from simple sources**
**🎵 **Audio Crossfading:** Smooth transitions between audio sources**

---

## Beginner "Gotchas"

### **No Center Detents on Controls**
- **Precise centering difficult:** Hard to get exactly 12 o'clock positions
- **No mute indication:** Difficult to know when channel is perfectly muted
- **No zero offset confirmation:** Can't easily verify no offset is applied
- **Performance limitation:** Makes live use more challenging
- **Workaround:** Use visual LED feedback to gauge approximate settings

### **Small Knobs and Visual Confusion**
- **2HP-style small knobs:** Can be fiddly to adjust precisely
- **Light-dependent jack colors:** Yellow/green jacks hard to distinguish in some lighting
- **Cramped layout:** Easy to accidentally adjust wrong control
- **No CV control:** Attenuverters and offsets are manual only
- **Practice:** Develop muscle memory for control locations

### **Understanding Attenuverter Behavior**
- **12 o'clock = mute:** Not maximum - signal is completely off
- **Clockwise = positive:** Maintains signal polarity
- **Counter-clockwise = negative:** Inverts signal polarity
- **Common mistake:** Expecting maximum at 12 o'clock
- **Polarizing mixer:** Inverted signals subtract from mix, not add

### **No Input = Offset Generator**
- **Unplugged inputs:** Offset control generates constant DC voltage
- **Hidden CV source:** Each channel can be manual CV generator
- **Output still works:** Channel output provides the offset voltage
- **Useful feature:** Four manual CV sources when not used for processing
- **Don't forget:** Empty inputs still produce output if offset is turned

### **Group vs Individual Outputs**
- **Multiple output options:** Individual channel outs, group mix outs, main out
- **Different signal content:** Group mixes sum the channels, individuals are separate
- **Parallel processing:** Can use multiple outputs simultaneously
- **Routing complexity:** Easy to get confused about which output does what
- **Plan your patches:** Think about which outputs you need before patching

---

## Next Steps

1. **Master each function individually** - Mix, Invert, Scale, Offset separately
2. **Practice voltage math** - understand how offset and attenuation interact
3. **Explore feedback patching** - route outputs back to inputs creatively
4. **Experiment with crossfader CV** - automate the blending with different sources
5. **Try audio applications** - use for audio mixing and crossfading
6. **Learn signal conversion** - bipolar/unipolar, voltage range adjustments

**Remember:** Miso rewards experimentation - it's more powerful than it first appears!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Multiple LFOs (Ochd, Batumi):** Miso excels at combining modulation sources
- **Envelope Generators (Maths, Function):** Mix and morph different envelope shapes
- **Sequencers:** Combine step sequences or use crossfader for switching
- **VCAs:** Use processed CV to control dynamics and movement

### **Next-Level Combinations:**
- **Sample & Hold:** Use mixed CV to create complex stepped patterns
- **Clock dividers:** Rhythmic crossfader control for tempo-synced morphing
- **Random sources:** Add unpredictability to crossfader or offset controls
- **Multiple Misos:** Chain together for even more complex signal processing

### **Advanced Integration:**
- **Feedback patches:** Route main output back to crossfader CV for self-modulation
- **Audio processing:** Use with audio sources for creative mixing effects
- **Modulation matrices:** Central hub for complex CV routing and processing
- **Performance controllers:** External CV sources for real-time control

### **Signal Processing Applications:**
- **CV pre-processing:** Condition signals before sending to sensitive modules
- **Modulation mixing:** Combine multiple sources for complex modulation shapes
- **Voltage translation:** Convert between different CV standards and ranges
- **Performance mixing:** Live control over multiple signal sources

### **Pro Tips:**
- **Document your signal math:** Write down offset and attenuation calculations
- **Use LED feedback:** Visual indicators help understand signal flow
- **Experiment with feedback:** Route outputs to inputs for organic complexity
- **Multiple outputs:** Don't limit yourself to just the main output
- **Performance practice:** Learn to adjust controls smoothly during live use

### **Creative Experiments:**
- **Audio-rate crossfading:** Use audio-rate CV for tremolo and AM effects  
- **Rhythmic switching:** Use gate sequences to switch between signal sources
- **Voltage sequencing:** Use offset controls to create stepped CV sequences
- **Cross-modulation:** Use one section's output to control another's crossfader

### **Essential Techniques:**
- **Bipolar/unipolar conversion:** Master the math of voltage range conversion
- **Signal conditioning:** Prepare CV for modules with specific requirements
- **Modulation mixing:** Combine simple sources into complex modulation
- **Performance mixing:** Real-time control over signal blending and routing

---

*Miso may look like a simple utility module, but it's actually a laboratory for signal processing - don't underestimate its creative potential!*