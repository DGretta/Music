# Bizarre Jezabel Pkhia MK2 - Beginner's Guide

**The Analog Stereo Filter Sculptor**

---

## Quick Start: Get Your First Filtered Sound in 5 Minutes

**What is Pkhia MK2?** Think of it as two analog multi-mode filters in one module, designed specifically for stereo processing. It's a dual/stereo analog filter that can shape your sounds with surgical precision while maintaining that warm analog character. Each channel offers multiple filter modes (low-pass, band-pass, high-pass), and they can work independently as dual-mono filters or together as a true stereo processor.

### Your First Stereo Filter Sweep
1. **Connect audio source** → **Left and Right inputs** (or just Left for mono-to-stereo)
2. **Connect Pkhia outputs** → **Left and Right audio outputs** to your mixer
3. **Turn up both CUTOFF knobs** to around 12 o'clock
4. **Connect LFO** → **CV input for filter cutoff**
5. **Slowly adjust CUTOFF knobs** while audio plays to hear the filter response
6. **Try different filter outputs** (LP, BP, HP) to hear the different modes

**Congratulations!** You've just experienced high-quality analog stereo filtering with independent channel control!

---

## Essential Parameters (The Dual Filter System)

### **1. Dual Filter Architecture**
- **Two independent analog filters:** Left and Right channels with separate controls
- **Multi-mode outputs:** Low-pass (LP), Band-pass (BP), and High-pass (HP) per channel  
- **Stereo or dual-mono:** Use as true stereo processor or two separate mono filters
- **Mono-to-stereo:** Feed mono signal to Left, get processed stereo output
- **Independent cutoff control:** Each channel can have different cutoff frequencies
- **Linked or separate CV:** Control both together or independently

### **2. Filter Cutoff Controls**
- **Left CUTOFF knob:** Controls the cutoff frequency of the left filter
- **Right CUTOFF knob:** Controls the cutoff frequency of the right filter
- **Wide frequency range:** From deep bass filtering to bright treble emphasis
- **CV inputs:** Voltage control for dynamic filter movement
- **1+2 CV input:** Controls both filters simultaneously when patched
- **Separate CV inputs:** Independent control of left and right cutoffs

### **3. Multi-Mode Filter Outputs**
- **LP (Low-Pass):** Classic filter mode - removes high frequencies above cutoff
- **BP (Band-Pass):** Removes both highs and lows, leaves middle frequencies
- **HP (High-Pass):** Removes low frequencies below cutoff, emphasizes highs
- **Six total outputs:** LP, BP, HP for both left and right channels
- **Use multiple outputs:** Different modes simultaneously for complex processing
- **Analog character:** Warm, musical filtering with natural resonance

### **4. Signal Routing Flexibility**
- **Stereo processing:** Left input → Left filters, Right input → Right filters
- **Dual-mono mode:** Two separate mono signals through independent filters
- **Mono-to-stereo:** Single input creates stereo output with different filtering
- **Parallel processing:** Use different filter modes on same signal
- **Creative routing:** Mix and match inputs/outputs for unique processing

### **5. CV Control System**
- **1+2 CV input:** Controls both filter cutoffs simultaneously
- **Individual CV inputs:** Left and right filters controlled separately
- **CV response:** Responsive to standard 1V/octave and other CV sources
- **Modulation friendly:** Excellent for LFO sweeps, envelope control, sequencing
- **Attenuverter:** Built-in control over CV amount and polarity

### **6. Analog Filter Character**
- **Warm analog tone:** Classic analog filter sound and behavior
- **Musical resonance:** Natural self-oscillation at high resonance settings
- **Smooth cutoff response:** Musical filter curves, not harsh digital steps
- **Boutique quality:** Hand-built European craftsmanship
- **Low noise:** Clean signal path with minimal added noise

---

## Beginner Patch Ideas

### **Patch 1: Classic Stereo Filter Sweep**
```
[Stereo source] ──→ [Pkhia L&R inputs]
[LFO] ──→ [1+2 CV input] (controls both filters)
[Pkhia LP L&R] ──→ [Stereo mixer/output]
```
**Setup:** Use LP outputs for classic low-pass filtering
**Controls:** LFO creates automatic stereo filter sweeps
**Result:** Classic analog filter movement on stereo material
**Performance:** Adjust cutoff knobs for different sweep ranges

### **Patch 2: Dual-Mono Processing**
```
[Mono source 1] ──→ [Pkhia Left input]
[Mono source 2] ──→ [Pkhia Right input]  
[Envelope 1] ──→ [Left CV input]
[Envelope 2] ──→ [Right CV input]
```
**Setup:** Two different sources, independent envelope control
**Result:** Two mono sources with separate filter envelopes
**Creative:** Use different filter modes (LP vs HP) for contrast
**Performance:** Independent cutoff control for each voice

### **Patch 3: Parallel Multi-Mode Processing**
```
[Mono source] ──→ [Multiple/Splitter] ──┬──→ [Pkhia Left input]
                                        └──→ [Pkhia Right input]
[Pkhia LP Left] ──→ [Mixer channel 1]
[Pkhia HP Right] ──→ [Mixer channel 2]
```
**Setup:** Same source through different filter modes
**Result:** Parallel low-pass and high-pass processing
**Mix:** Blend LP and HP for frequency-splitting effects
**Advanced:** Try BP on one channel for three-way frequency split

### **Patch 4: Mono-to-Stereo Widening**
```
[Mono source] ──→ [Pkhia Left input only]
[LFO 1] ──→ [Left CV input] (slow)
[LFO 2] ──→ [Right CV input] (slightly faster)
[Pkhia LP L&R] ──→ [Stereo output]
```
**Setup:** Mono input, different LFO rates on each filter
**Result:** Mono source becomes wide stereo with moving filters
**Timing:** Use related but different LFO speeds (2:3 ratio)
**Width:** Different cutoff movements create stereo interest

---

## Common Use Cases

**🎵 **Stereo Mix Processing:** Filter entire stereo mixes or submixes**
**🎹 **Synth Voice Filtering:** Classic subtractive synthesis filtering**  
**🥁 **Drum Processing:** Separate filtering for kick/snare vs hi-hats**
**🌊 **Ambient Processing:** Stereo filter sweeps for atmospheric sounds**
**🎛️ **Frequency Splitting:** Use different modes for multi-band processing**
**🔊 **Mix Enhancement:** Surgical frequency shaping of stereo sources**
**⚡ **Dynamic Filtering:** CV-controlled movement for evolving sounds**
**🎭 **Creative Effects:** Unusual routing for unique sonic textures**

---

## Beginner "Gotchas"

### **Version Confusion - MK2 vs Original**
- **Different versions exist:** Pkhia, Pkhia MK2, Pkhi, etc.
- **Feature differences:** Original has VCAs, MK2 may be filter-only
- **Check your version:** Features described may vary by model
- **ModularGrid listings:** Multiple entries for different versions
- **Manual important:** Refer to documentation for your specific version

### **Multiple Output Confusion**
- **Six outputs total:** LP, BP, HP for both left and right channels
- **Not all need to be used:** Start with just LP outputs
- **Different sonic characters:** Each filter mode sounds completely different
- **Patch organization:** Label your cables - easy to get confused
- **Start simple:** Use one filter mode at a time initially

### **CV Input Behavior**
- **1+2 input controls both:** When patched, affects left AND right filters
- **Individual inputs:** Left and right CV inputs work independently
- **Normalling behavior:** Check if individual inputs override 1+2 input
- **CV amount:** May need attenuation for subtle effects
- **Polarity:** Some CV sources may need inversion for desired effect

### **Stereo vs Dual-Mono Mindset**
- **Two different uses:** Stereo processing vs two separate mono processors
- **Input requirements:** Stereo needs L&R inputs, dual-mono can use either
- **Output expectations:** Don't expect automatic stereo from mono input
- **Routing flexibility:** Can be used in ways not immediately obvious
- **Experimentation required:** Try different input/output combinations

### **Boutique Module Characteristics**
- **Small company:** Bizarre Jezabel is a boutique European manufacturer
- **Limited documentation:** May have less online information than major brands
- **Build quality:** Hand-built modules with attention to analog detail
- **Availability:** May be harder to find than mainstream modules
- **Support:** Contact manufacturer directly for technical questions

---

## Next Steps

1. **Master each filter mode individually** - understand LP, BP, and HP responses
2. **Explore CV modulation** - try different LFO speeds and envelope shapes
3. **Experiment with routing** - stereo vs dual-mono vs mono-to-stereo
4. **Practice frequency splitting** - use different modes for multi-band effects
5. **Try parallel processing** - same source through multiple filter modes
6. **Study analog filter theory** - understand cutoff, resonance, and filter types

**Remember:** Pkhia MK2 rewards experimentation with routing - try unconventional input/output combinations!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **LFOs (Batumi, Ochd):** Essential for creating filter movement and sweeps
- **Envelope Generators (Maths, Function):** Dynamic filter control for synthesis voices
- **VCAs (Veils, 2HP VCA):** Control dynamics before or after filtering
- **Mixers:** Blend different filter outputs for complex frequency shaping

### **Next-Level Combinations:**
- **Oscillators (any analog VCO):** Classic subtractive synthesis with analog filtering
- **Attenuverters:** Fine-control the CV amounts for subtle modulation
- **Sample & Hold:** Create stepped filter sweeps and randomized cutoffs
- **Multiple/Splitters:** Route single sources to both channels for parallel processing

### **Advanced Integration:**
- **Sequencers:** Automate cutoff frequencies for rhythmic filter patterns
- **Complex modulation (Marbles):** Random and correlated filter movements
- **Other filters:** Chain multiple filters for steep roll-offs or complex responses
- **Effects processors:** Filter before reverb/delay for different spatial treatments

### **Stereo System Applications:**
- **Final mix processing:** Stereo filtering of complete mixes or submixes
- **Instrument processing:** Stereo keyboards, guitars, or other wide sources
- **Ambient systems:** Stereo filter sweeps for evolving soundscapes
- **Electronic music:** Dance music filter drops and buildups

### **Pro Tips:**
- **Use multiple outputs:** Don't limit yourself to one filter mode
- **CV sequencing:** Sequence cutoff frequencies for rhythmic effects  
- **Frequency splitting:** Low frequencies through LP, highs through HP
- **Stereo width:** Slightly different LFO rates create movement and width
- **Resonance sweet spots:** Find the musical resonance settings for self-oscillation

### **Creative Experiments:**
- **Cross-channel modulation:** Use left filter CV to control right filter
- **Rhythmic filtering:** Gate the CV inputs for rhythmic filter drops
- **Feedback loops:** Carefully route filter outputs back to inputs
- **Multi-mode mixing:** Blend LP, BP, and HP outputs for complex frequency shaping

### **Genre Applications:**
- **Electronic/Dance:** Classic filter sweeps and drops
- **Ambient/Drone:** Slow stereo filter movements for atmospheric textures
- **Industrial:** Harsh filtering and frequency manipulation
- **Classical/Acoustic:** Subtle frequency shaping of recorded material

---

*Pkhia MK2 brings boutique European analog filter quality to your modular system - embrace the warmth and explore the routing possibilities!*