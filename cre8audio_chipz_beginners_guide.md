# Cre8audio Chipz - Beginner's Guide

**The Lo-Fi Chiptune Powerhouse**

---

## Quick Start: Get Your First Chiptune Sound in 5 Minutes

**What is Chipz?** Think of it as three oscillators in one compact package - two chiptune-style VCOs inspired by classic 8-bit video game consoles (Commodore, Atari, NES) plus an LFO for modulation. Despite the nostalgic inspiration, it's capable of much more than just retro gaming sounds, offering everything from classic analog tones to digital noise textures.

### Your First Chiptune Beep
1. **Connect Chip1 output** → **your mixer or audio interface**
2. **Connect keyboard/sequencer CV** → **Chip1 CV input** (if available)
3. **Turn Chip1 TUNE knob** to set base pitch
4. **Turn Chip1 WAVE knob** slowly - hear it morph through 5 waveforms
5. **Adjust Chip1 FILTER knob** to brighten/darken the sound
6. **Play with the built-in character** - this is pure lo-fi magic!

**Congratulations!** You've just created your first chiptune sound worthy of any retro video game!

---

## Essential Parameters (The Chip Family)

### **1. Chip1 VCO - The Filtered Voice**
- **TUNE knob:** Coarse pitch control across audio range
- **CV input:** V/OCT pitch control (when patched, TUNE becomes transposer ±2 octaves)
- **WAVE knob:** Morphs between sine → triangle → saw → square → noise
- **FILTER knob + CV:** Built-in low-pass filter with voltage control
- **Character:** Lo-fi, crunchy, with that classic 8-bit digital aliasing
- **Sweet spot:** Filter around 12 o'clock for balanced brightness

### **2. Chip2 VCO - The PWM Voice**
- **TUNE knob:** Independent pitch control from Chip1
- **CV input:** V/OCT pitch control with same transposer behavior
- **WAVE knob:** Same 5 waveforms as Chip1 (sine → triangle → saw → square → noise)
- **WIDTH knob + CV:** Pulse width modulation - affects duty cycle/waveform shape
- **Character:** Complementary to Chip1 but with PWM shaping instead of filtering
- **Sweet spot:** WIDTH around 9-3 o'clock for interesting harmonic changes

### **3. LFO - The Modulation Engine**
- **RATE knob:** Speed control from very slow to audio rate
- **WAVE knob:** Same 5 waveforms - but sine/triangle = smooth, square/saw = stepped, noise = random
- **DEPTH knob:** Controls output level/intensity
- **RESET CV input:** Restart LFO cycle on trigger (great for synchronized modulation)
- **Two outputs:** Main output + **4X output** (same wave at 4× the speed!)
- **Pro tip:** Use 4X output for faster tremolo effects or audio-rate modulation

### **4. Morphing Waveforms - The Unique Feature**
- **Continuous morphing:** No stepped switching - smooth transitions between waves
- **5 waveforms each:** Sine (smooth), Triangle (warm), Saw (bright), Square (hollow), Noise (chaotic)
- **Lo-fi character:** All waveforms have intentional digital aliasing and bit-crushing
- **Musical use:** Morph during performance for evolving textures

### **5. CV Integration**
- **CV inputs affect TUNE behavior:** When patched, TUNE knobs become ±2 octave transposers
- **Filter CV (Chip1):** External control of built-in low-pass filter
- **Width CV (Chip2):** External pulse width modulation control
- **LFO Reset:** Sync LFO to external clocks or triggers

### **6. Power & Practicality**
- **12HP compact size:** Lot of functionality in small space
- **Hot outputs:** May need attenuation for some systems (especially NiftyCase direct out)
- **Affordable:** Great value for three oscillators worth of functionality

---

## Beginner Patch Ideas

### **Patch 1: Classic Chiptune Lead**
```
[Keyboard/Sequencer] ──1V/OCT──→ [Chip1 CV input]
[Chip1 out] ──→ [VCA] ──→ [Audio out]
[LFO out] ──→ [VCA CV] (for tremolo)
```
**Setup:** WAVE at triangle/saw position, FILTER around 12 o'clock
**LFO:** RATE slow, WAVE triangle, DEPTH moderate
**Result:** Classic video game lead with subtle tremolo
**Performance:** Adjust FILTER in real-time for expression

### **Patch 2: Dual Oscillator Fat Bass**
```
[Bass sequence] ──→ [Mult] ──┬──→ [Chip1 CV]
                             └──→ [Chip2 CV]
[Chip1 + Chip2] ──→ [Mixer] ──→ [Audio out]
```
**Setup:** Both chips tuned slightly different for beating/detuning effect
**Chip1:** WAVE square, FILTER closed for sub-bass
**Chip2:** WAVE saw, WIDTH modulated for harmonic movement
**Result:** Thick, evolving bass with rich harmonic content

### **Patch 3: LFO Modulation Showcase**
```
[Chip1 out] ──→ [Audio out]
[LFO main] ──→ [Chip1 FILTER CV] (filter sweep)
[LFO 4X] ──→ [Chip2 WIDTH CV] (fast PWM)
```
**Setup:** Static note on Chip1, LFO creates all the movement
**LFO:** RATE slow, WAVE triangle for smooth filter sweeps
**Result:** Static note becomes dynamic, evolving texture
**Experiment:** Try different LFO waveforms for different modulation characters

### **Patch 4: Rhythmic Noise Generator**
```
[Clock/Trigger] ──→ [LFO RESET input]
[LFO 4X out] ──→ [Sample & Hold CV input]
[S&H out] ──→ [Chip2 WIDTH CV]
[Chip2 out] ──→ [Audio out] (WAVE set to noise)
```
**Setup:** Clock resets LFO, creates rhythmic random modulation
**Chip2:** WAVE at noise position, WIDTH randomly modulated
**Result:** Rhythmic digital noise textures perfect for hi-hats/percussion
**Bonus:** Clock divisions create polyrhythmic textures

---

## Common Use Cases

**🎮 **Chiptune Music:** Classic 8-bit video game soundtracks and modern chiptune**
**🎵 **Lead Synthesizer:** Cutting digital leads for electronic music**
**🔊 **Bass Synth:** Fat, detuned bass sounds with dual oscillator setup**
**🥁 **Percussion Elements:** Noise waveforms for digital drums and hi-hats**
**🌊 **Textural Sounds:** Lo-fi drones and ambient textures**
**🎛️ **Modulation Source:** LFO with unique 4X output for complex modulation**
**🔧 **Learning Tool:** Three oscillators to understand basic synthesis concepts**
**💰 **Budget Solution:** Affordable way to get multiple oscillators in small rack**

---

## Beginner "Gotchas"

### **Hot Output Levels**
- **Outputs can be very loud** - may cause distortion in some systems
- **NiftyCase users:** Definitely need attenuation before direct audio out
- **Solution:** Use VCAs, mixers, or attenuators to control levels
- **Not a flaw:** Just needs proper gain staging like any oscillator

### **Tuning Stability Issues**
- **V1 units had tuning drift** - not great for precise musical work
- **Octave tracking** may not be perfect across full range
- **Workaround:** Great for textures/effects where perfect pitch isn't critical
- **Or:** Use quantizers to force musical results despite drift

### **CV Input Behavior**
- **When CV input is patched:** TUNE knob becomes ±2 octave transposer
- **When nothing patched:** TUNE knob is absolute frequency control
- **Can be confusing** - behavior changes based on patching
- **Remember:** Check your patching if tuning behavior seems odd

### **Lo-Fi Character is Intentional**
- **Digital aliasing and bit-crushing** are features, not bugs
- **Don't expect pristine analog sounds** - this is deliberately crunchy
- **Embrace the character** - it's what makes Chipz special
- **If you want clean:** This isn't the module for you

### **Limited Filter Options**
- **Only Chip1 has filter** - Chip2 relies on WIDTH modulation for timbral changes
- **Simple low-pass only** - no resonance or different filter types
- **Workaround:** Use external filters for more complex filtering

---

## Next Steps

1. **Explore waveform morphing** - spend time with each WAVE knob to understand the sonic palette
2. **Experiment with modulation** - use the LFO's dual outputs creatively
3. **Try dual oscillator techniques** - detuning, harmonies, and beating effects
4. **Integrate with external gear** - sequence it, filter it, process it
5. **Embrace the lo-fi aesthetic** - work with the character, not against it
6. **Learn proper gain staging** - tame those hot outputs for musical results

**Remember:** Chipz rewards creative patching and embracing its lo-fi character. Don't fight the crunch - celebrate it!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **VCAs (2HP VCA, Intellijel uVCA):** Essential for controlling those hot output levels
- **Quantizers (Scales, 2HP Tune):** Compensate for tuning drift, ensure musical results
- **Mixer (2HP Mix, Intellijel Unity):** Blend the two oscillators and control levels
- **Clock Divider:** Feed the LFO reset input for rhythmic modulation

### **Next-Level Combinations:**
- **Cellz (Cre8audio):** Perfect companion - touchpad controller for expressive Chipz control
- **Filters (2HP MMF, Doepfer SEM):** Add filtering options beyond Chip1's basic LPF  
- **Sample & Hold:** Use LFO outputs to create stepped random modulation
- **Reverb/Delay (FX Aid):** Add space and depth to the lo-fi sounds

### **Advanced Processing:**
- **Bit-crushers (Bastl Cinnamon):** Double down on the digital aesthetic
- **Ring Modulators:** Create even more aggressive digital textures
- **Granular processors (Arbhar):** Turn simple Chipz sounds into complex textures
- **Multi-effects:** Modern processing on retro sounds creates interesting contrasts

### **Pro Tip:** Chipz excels in **hybrid setups** where lo-fi digital meets modern processing. Use it as raw material for more complex sound design, or keep it pure for authentic chiptune vibes.

### **Genre Applications:**
- **Synthwave/Retrowave:** Perfect for 80s-inspired electronic music
- **IDM/Glitch:** Lo-fi character fits perfectly with digital aesthetics  
- **Ambient/Drone:** Use filter and WIDTH modulation for evolving textures
- **Techno/House:** Digital bass sounds and percussive noise elements

---

*Need more inspiration? Check out classic Commodore 64 and NES soundtracks to hear what Chipz was designed to emulate!*