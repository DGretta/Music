# Noise Engineering Loquelic Iteritas - Beginner's Guide

**The Three-Algorithm Digital Beast**

---

## Quick Start: Get Your First Complex Sound in 5 Minutes

**What is Loquelic Iteritas?** Think of it as three different synthesizers in one compact module. It's a digital complex oscillator that implements interpretations of three classic synthesis algorithms: VOSIM (vocal simulation), Summation Synthesis, and Phase Modulation. Each algorithm creates dramatically different sounds, from woody vocal textures to harsh metallic tones. It's designed for both musicians and sound designers who want access to unique, cutting-edge digital synthesis.

### Your First VOSIM Sound
1. **Connect Loquelic Iteritas OUT** → **your mixer or audio interface**
2. **Set mode switch** to **VO** (VOSIM mode)
3. **Connect keyboard/sequencer CV** → **1V/8VA input**
4. **Turn MORPH knob** slowly and listen to the timbral changes
5. **Try FOLD knob** to add harmonic complexity via wavefolding
6. **Experiment with MODULATE** to hear the oscillators interact

**Congratulations!** You've just experienced one of the most unique oscillators in Eurorack!

---

## Essential Parameters (The Algorithm Triad)

### **1. Three Synthesis Algorithms - The Core Magic**
- **VO (VOSIM):** Based on 1970s vocal simulation - creates woody, vocal-like tones
- **SS (Summation Synthesis):** Mathematical approach using harmonic series - complex spectra
- **PM (Phase Modulation):** Two-oscillator PM with amplitude modulation - metallic, bell-like sounds
- **Mode switch:** Changes the fundamental behavior of all controls
- **Each mode sounds completely different** with the same knob positions
- **No "normal" oscillator modes** - all three are specialized synthesis techniques

### **2. Dual Pitch Control - Independent Oscillator Control**
- **PITCH A (Coarse/Fine):** Controls primary oscillator frequency
- **PITCH B (Coarse/Fine):** Controls secondary oscillator frequency
- **1V/8VA & 1V/8VB inputs:** V/octave CV control for each oscillator
- **Cross-normalled:** By default, both oscillators track the same CV input
- **Independent control:** Patch different CVs for harmonic intervals or detuning
- **Extended range:** Covers wide frequency spectrum from bass to audio-rate

### **3. Four Tone Controls - The Sound Shaping Arsenal**
- **MORPH:** Changes waveform character (varies by algorithm)
- **FOLD:** Controls built-in "infinifold" wavefolder intensity
- **MODULATE:** Controls interaction between the two internal oscillators
- **DAMP:** Acts as crude filter/damping control (varies by algorithm)
- **All CV-controllable:** Each parameter has dedicated CV input and attenuator
- **Continuous control:** Designed for smooth, real-time manipulation

### **4. VOSIM Algorithm (VO Mode) - Vocal Textures**
- **Based on:** 1970s vocal simulation research
- **Character:** Amplitude modulation creates vocal-like formants
- **MORPH:** Carrier waveform complexity (sine to complex harmonics)
- **FOLD:** Wavefolder adds brightness and edge
- **MODULATE:** Oscillator interaction and AM depth
- **DAMP:** Decay/filtering characteristics
- **Best for:** Woody sounds, vocal textures, organic tones

### **5. Summation Synthesis (SS Mode) - Mathematical Complexity**
- **Based on:** James Moorer's mathematical approach
- **Character:** Three internal oscillators create complex harmonic relationships
- **MORPH:** Harmonic structure and oscillator relationships
- **FOLD:** Wavefolder adds saturation and harmonics
- **MODULATE:** Oscillator modulation and sum characteristics
- **DAMP:** Harmonic damping and spectral shaping
- **Best for:** Complex evolving tones, mathematical textures, rich harmonics

### **6. Phase Modulation (PM Mode) - Metallic Synthesis**
- **Based on:** Classic FM/PM synthesis techniques
- **Character:** Two oscillators with phase and amplitude modulation
- **MORPH:** Modulation index and character
- **FOLD:** Wavefolder for additional harmonic content
- **MODULATE:** PM depth and oscillator interaction
- **DAMP:** Filtering and harmonic damping
- **Best for:** Bell tones, metallic sounds, aggressive digital textures

---

## Beginner Patch Ideas

### **Patch 1: VOSIM Vocal Bass**
```
[Bass sequence] ──→ [Loquelic Iteritas 1V/8VA]
[Loquelic Iteritas OUT] ──→ [Low-pass filter] ──→ [Audio out]
Mode: VO
```
**Setup:** MORPH around 10 o'clock, FOLD at minimum, MODULATE at 12 o'clock
**Controls:** Use DAMP to control brightness, FOLD for grit
**Result:** Deep, woody bass tones with vocal-like character
**Performance:** Modulate MORPH with LFO for evolving timbres

### **Patch 2: Harmonic Bell Sequence**
```
[Melodic sequence] ──→ [Loquelic Iteritas 1V/8VA]
[Slow LFO] ──→ [MODULATE CV input]
[Loquelic Iteritas OUT] ──→ [Reverb] ──→ [Audio out]
Mode: PM
```
**Setup:** MORPH around 2 o'clock, FOLD at 25%, MODULATE at 12 o'clock
**Controls:** LFO creates automatic timbral evolution
**Result:** Bell-like tones with evolving metallic character
**Experiment:** Try different LFO speeds for different evolution rates

### **Patch 3: Complex Harmonic Drone**
```
[Loquelic Iteritas OUT] ──→ [Audio out]
[LFO 1] ──→ [MORPH CV] (slow)
[LFO 2] ──→ [FOLD CV] (medium speed)
Mode: SS
```
**Setup:** Set both PITCH knobs for drone notes, no external CV
**Controls:** Multiple LFOs create complex evolving spectra
**Result:** Rich harmonic drone perfect for ambient music
**Advanced:** Add third LFO to MODULATE for even more complexity

### **Patch 4: Independent Dual Oscillator**
```
[Sequence A] ──→ [Loquelic Iteritas 1V/8VA]
[Sequence B] ──→ [Loquelic Iteritas 1V/8VB] (detuned by fifth)
[Loquelic Iteritas OUT] ──→ [Audio out]
Mode: Any
```
**Setup:** Two different sequences control each oscillator independently
**Result:** Complex polyrhythmic interactions between algorithms
**Controls:** MODULATE controls how much the oscillators interact
**Experiment:** Try different musical intervals between the sequences

---

## Common Use Cases

**🎭 **Sound Design:** Unique textures impossible with traditional oscillators**
**🎵 **Experimental Music:** Complex algorithms for avant-garde compositions**
**🔊 **Bass Synthesis:** VOSIM mode excels at woody, vocal bass tones**
**🔔 **Bell/Metallic Sounds:** PM mode for realistic bell and metallic textures**
**🌊 **Ambient Drones:** SS mode with slow modulation for evolving soundscapes**
**🎛️ **Modulation Destination:** All four tone controls beg for CV modulation**
**⚡ **Hard Sync Source:** Built-in sync for classic sync lead sounds**
**🧪 **Algorithm Study:** Learn classic synthesis techniques in hardware form**

---

## Beginner "Gotchas"

### **Algorithm Mode Completely Changes Everything**
- **Same knob settings = totally different sounds** across VO/SS/PM modes
- **No "normal" oscillator sounds** - all three algorithms are specialized
- **Controls behave differently** in each mode (MORPH does different things)
- **Start with one algorithm** - master VO, then SS, then PM
- **Don't expect familiar behavior** - this isn't a traditional VCO

### **It's Not a Traditional Oscillator**
- **No sine/saw/square waves** - these are complex synthesis algorithms
- **Can be harsh and digital** - embrace the character, don't fight it
- **Not always "musical"** in traditional sense - designed for unique sounds
- **Tuning can be tricky** - algorithms may not track perfectly across all ranges
- **Loud output levels** - may need attenuation for some systems

### **CV Input Normalling Confusion**
- **1V/8VA and 1V/8VB are cross-normalled** by default
- **Both oscillators track same CV** when only one input patched
- **Patch both inputs** for independent oscillator control
- **This is intentional** - allows single CV to control both, or independent control
- **Check your patching** if harmonic relationships seem off

### **Continuous Tone Control Philosophy**
- **Designed for constant movement** - static sounds may seem boring
- **All four tone controls want CV modulation** for best results
- **Not a "set and forget" oscillator** - rewards active manipulation
- **LFOs are your friend** - multiple slow LFOs create evolving textures
- **Think like a sound designer** rather than traditional synthesist

### **Variable Sample Rate Technology**
- **Aliasing is intentionally musical** - not a bug, it's a feature
- **Digital artifacts are part of the sound** - embrace them
- **Sample rate changes with pitch** to make aliasing harmonically related
- **Can sound "broken" at extreme settings** - this is often desirable
- **Trust your ears** over technical expectations

---

## Next Steps

1. **Master one algorithm at a time** - spend sessions focusing on just VO, SS, or PM
2. **Learn the tone control behaviors** - understand what each knob does in each mode
3. **Experiment with independent pitch control** - explore harmonic relationships
4. **Add modulation sources** - LFOs and envelopes bring these algorithms to life
5. **Embrace the extreme settings** - the "broken" sounds are often the most interesting
6. **Study the source material** - research VOSIM, summation synthesis, and PM techniques

**Remember:** Loquelic Iteritas is designed to sound unique, not familiar. Let it teach you new approaches to synthesis!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Multiple LFOs (Ochd, Batumi):** Essential for bringing the tone controls to life
- **Filters (Optomix, SEM):** Tame harsh frequencies and add musical character
- **VCAs (Veils, 2HP VCA):** Control dynamics and shape the complex textures
- **Reverb/Delay (FX Aid):** Add space and depth to the unique textures

### **Next-Level Combinations:**
- **Quantizers:** Ensure musical relationships when using independent pitch control
- **Envelope Generators (Maths, Function):** Shape the aggressive transients into musical forms
- **Attenuverters:** Control the intensity of modulation to the four tone controls
- **Sample & Hold:** Create stepped modulation for rhythmic texture changes

### **Advanced Integration:**
- **Other Noise Engineering modules:** Pair with Basimilus Iteritas for percussion duties
- **Complex modulation sources (Marbles):** Random modulation brings out algorithmic complexity
- **Granular processors (Arbhar):** Further process the already complex textures
- **Multiple instances:** Layer multiple Loquelic Iteritas for incredibly rich textures

### **Sound Design Applications:**
- **Film scoring:** Unique textures perfect for sci-fi and experimental soundtracks
- **Electronic music:** Cutting-edge sounds that sit well in modern electronic genres
- **Ambient music:** Complex evolving drones with minimal effort
- **Experimental composition:** Algorithms encourage non-traditional musical thinking

### **Pro Tips:**
- **Record everything:** Complex interactions often create unrepeatable moments
- **Use multiple outputs:** If available, mult the output to different processing chains
- **Automate mode switching:** Use switches or CV to change algorithms mid-performance
- **Study the algorithms:** Understanding VOSIM, summation synthesis, and PM helps you use them effectively

### **Creative Experiments:**
- **Audio-rate modulation:** Use one tone control at audio rate for extreme timbres
- **Feedback patches:** Carefully route output back to tone control inputs
- **Rhythmic sync:** Use sync input with rhythmic pulses for percussive effects
- **Cross-algorithm blending:** Rapidly switch between modes for hybrid textures

---

*Loquelic Iteritas rewards patience and experimentation - don't expect immediate gratification, but do expect sounds you've never heard before!*