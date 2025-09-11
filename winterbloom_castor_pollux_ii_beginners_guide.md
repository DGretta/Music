# Winterbloom Castor & Pollux II - Beginner's Guide

**The Modern Juno Twins**

---

## Quick Start: Get Your First Juno-Style Sound in 5 Minutes

**What is Castor & Pollux II?** Think of it as two Roland Juno-106 oscillators reimagined for the modern age. It contains two digitally-controlled analog oscillators (DCOs) that faithfully recreate the legendary 80s Juno sound, but with modern improvements like hard sync, built-in chorus, and USB connectivity. Named after the mythological twins, these oscillators can work independently or together to create everything from classic 80s pads to complex evolving textures.

### Your First Juno Lead Sound
1. **Connect Castor OUT** → **your filter or audio output**
2. **Turn up Castor's RAMP mix knob** (small knob, fully clockwise)
3. **Connect keyboard/sequencer CV** → **Castor PITCH CV input**
4. **Play some notes** - you should hear that classic Juno sawtooth!
5. **Try the MODE button** - tap to cycle through Chorus/LFO FM/Hard Sync modes
6. **Adjust CROSSFADE knob** to blend in Pollux for thickness

**Congratulations!** You've just experienced the legendary Juno sound in Eurorack format!

---

## Essential Parameters (The Twin System)

### **1. The Twin Oscillators - Castor & Pollux**
- **Two identical DCOs:** Each with independent pitch control and waveform mixing
- **Castor (left):** The primary oscillator, typically your main voice
- **Pollux (right):** The secondary oscillator, often used for detuning and effects
- **Independent operation:** Each can work as separate mono oscillators
- **Coupled operation:** Use together for thick, complex sounds
- **Juno-authentic:** Faithfully recreates the original Juno 106 oscillator behavior

### **2. Pitch Control System - Smart Tuning**
- **Large pitch knobs:** Coarse frequency control for each oscillator
- **PITCH CV inputs:** 1V/octave for musical control
- **Non-linear response:** "Virtual notch" makes tuning easier around musical pitches
- **Tweak mode:** Hold MODE button + turn pitch knob for fine tuning (±2.5 semitones)
- **Follow vs Free modes:** Pitch knob can track 1V/oct or run free (configurable via web)
- **Pro tip:** The non-linear response makes it easier to hit exact musical intervals

### **3. Waveform System - Three Shapes Each**
- **RAMP:** Classic sawtooth waveform (bright, buzzy, perfect for leads)
- **PULSE:** Square/rectangular wave with PWM capability
- **SUB:** Sub-oscillator at -1 octave (adds bass foundation)
- **Individual mix controls:** Small knobs control how much of each wave in the mixed output
- **Mixed outputs:** Each oscillator combines its three waves into one output
- **Expander access:** 2HP expander provides individual waveform outputs

### **4. Three Operational Modes - The Magic Button**
- **MODE button:** Tap to cycle between three distinct behaviors
- **Chorus mode (blue LED):** Default mode with built-in chorus on Pollux
- **LFO FM mode (green LED):** Internal LFO modulates both oscillators' pitch
- **Hard Sync mode (pink LED):** Pollux syncs to Castor for metallic tones
- **Tweak overlay:** Hold MODE button for additional parameters in each mode
- **Visual feedback:** LED color and animations show current mode

### **5. Crossfade System - Blending the Twins**
- **CROSSFADE knob:** Blends between Castor and Pollux mixed outputs
- **CROSSFADE output:** Main output combining both oscillators
- **Full CCW:** Only Castor audible
- **12 o'clock:** Equal blend of both oscillators  
- **Full CW:** Only Pollux audible
- **Performance control:** Perfect for live morphing between sounds

### **6. Web Editor Integration - Modern Convenience**
- **USB connection:** Connect via micro USB for advanced configuration
- **Browser-based editor:** No software installation required
- **Deep customization:** LED brightness, pitch behavior, LFO settings, and more
- **Calibration:** Fine-tune oscillator accuracy and tracking
- **Open source:** All firmware and hardware designs available on GitHub

---

## Beginner Patch Ideas

### **Patch 1: Classic Juno Lead**
```
[Keyboard] ──1V/OCT──→ [Castor PITCH CV]
[Castor OUT] ──→ [Filter] ──→ [VCA] ──→ [Audio out]
```
**Setup:** Chorus mode (default), RAMP mix up, PULSE mix at 25%
**Controls:** Use CROSSFADE to add Pollux for detuned thickness
**Result:** Classic 80s lead sound with built-in chorus movement
**Performance:** MODE button switches between chorus types for variety

### **Patch 2: Thick Detuned Pad**
```
[Sequence] ──→ [Mult] ──┬──→ [Castor PITCH CV]
                        └──→ [Pollux PITCH CV]
[CROSSFADE OUT] ──→ [Filter] ──→ [Reverb] ──→ [Audio out]
```
**Setup:** Detune Pollux slightly from Castor using pitch knobs
**Mix:** Both oscillators with RAMP and PULSE waves
**CROSSFADE:** Around 12 o'clock for equal blend
**Result:** Lush, beating pad sounds perfect for ambient music

### **Patch 3: Hard Sync Lead**
```
[Keyboard] ──1V/OCT──→ [Castor PITCH CV] (stays in tune)
[LFO] ──→ [Pollux PITCH CV] (creates sync sweep)
[CROSSFADE OUT] ──→ [Audio out]
```
**Setup:** Hard Sync mode (pink LED), adjust Pollux pitch for timbral sweep
**Controls:** LFO modulates Pollux pitch for automatic sync sweeps
**Result:** Metallic, harmonically rich leads perfect for aggressive sounds
**Experiment:** Try different LFO speeds for different sweep characters

### **Patch 4: Dual Independent Oscillators**
```
[Castor OUT] ──→ [Filter 1] ──→ [Left audio]
[Pollux OUT] ──→ [Filter 2] ──→ [Right audio]
[Sequencer A] ──→ [Castor PITCH CV]
[Sequencer B] ──→ [Pollux PITCH CV]
```
**Setup:** Use each oscillator independently for different voices
**Different sequences:** Each oscillator plays different melodic lines
**Processing:** Different filters/effects for each oscillator
**Result:** Two-voice polyrhythmic sequences from one module

---

## Common Use Cases

**🎹 **Classic 80s Sounds:** Authentic Juno pads, leads, and bass sounds**
**🌊 **Thick Textures:** Detuned dual oscillators for lush, beating sounds**
**⚡ **Hard Sync Leads:** Metallic, aggressive sounds via oscillator sync**
**🎭 **Performance Instrument:** Live mode switching and crossfading**
**🔄 **Built-in Effects:** Chorus and FM without external modules**
**🎵 **Dual Voice:** Two independent oscillators in one module**
**📱 **Modern Workflow:** USB connectivity for deep customization**
**🏠 **Space Efficient:** Multiple oscillator functionality in compact format**

---

## Beginner "Gotchas"

### **Mode Button Behavior**
- **Tap to change modes:** Quick press cycles through the three modes
- **Hold for tweak overlay:** Long press accesses additional parameters
- **LED feedback:** Color shows mode, animations show state changes
- **Mode affects everything:** Each mode completely changes how the oscillators interact
- **Don't forget tweak mode:** Hold MODE + turn knobs for fine adjustments

### **Waveform Mix Controls Are Tiny**
- **Small trimpots:** Individual waveform levels use small knobs, not large ones
- **Easy to miss:** Beginners often overlook these crucial mixing controls
- **Full CCW = off:** Each waveform mix starts at zero
- **Combined output:** Mixed output is sum of all three waveforms
- **Start simple:** Begin with just RAMP mix up, add PULSE and SUB gradually

### **Expander Separation (Version II)**
- **Main module simplified:** Individual waveform outputs moved to separate expander
- **Expander included:** 2HP module comes with Castor & Pollux II
- **Ribbon cable connection:** Small cable connects main module to expander
- **Optional use:** You don't need the expander for basic operation
- **V1 vs V2:** Version I had all outputs on main panel, Version II uses expander

### **Web Editor Necessity**
- **Advanced features require web editor:** Some functions only accessible via browser
- **USB cable needed:** Micro USB connection to computer required
- **No mobile app:** Browser-based editor works on computers, not phones
- **Calibration important:** Factory calibration may need adjustment for your system
- **Open source advantage:** Community contributions add features over time

### **Non-Linear Pitch Response**
- **Virtual notch:** Pitch knobs are less sensitive in middle range
- **Helps tuning:** Easier to hit musical intervals like octaves and fifths
- **Can confuse:** Knob sensitivity changes across range
- **Follow mode only:** Non-linear response only when tracking CV input
- **Configurable:** Can be adjusted via web editor if desired

---

## Next Steps

1. **Master each mode individually** - spend time with Chorus, LFO FM, and Hard Sync modes
2. **Explore waveform mixing** - understand how RAMP, PULSE, and SUB combine
3. **Practice crossfading** - learn to blend the oscillators expressively
4. **Connect the web editor** - unlock advanced features and customization
5. **Try the expander** - explore individual waveform outputs for complex patches
6. **Experiment with detuning** - use slight pitch differences for thick sounds

**Remember:** Castor & Pollux II is both faithfully vintage and thoroughly modern - embrace both aspects!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Juno-style Filters (SEM, MMF):** Complete the authentic Juno sound chain
- **Chorus/Ensemble (Happy Nerding FX Aid):** Add external chorus for even lusher sounds
- **VCAs (Veils, 2HP VCA):** Control dynamics and create expressive patches
- **Reverb/Delay:** Castor & Pollux loves spacious effects for 80s atmosphere

### **Next-Level Combinations:**
- **Quantizers:** Ensure musical intervals when using hard sync mode
- **LFOs (Batumi, Ochd):** Modulate crossfade, pitch, or pulse width for movement
- **Sequencers:** Drive both oscillators independently for complex polyrhythms
- **Envelope Generators:** Shape the timbre with filter and VCA modulation

### **Advanced Integration:**
- **Complex modulation sources:** Use Marbles or other random sources for evolving textures
- **Multiple filters:** Process each oscillator output differently before mixing
- **Granular processors (Arbhar):** Modern processing on vintage-inspired sounds
- **Performance controllers:** Use touch controllers to manipulate crossfade in real-time

### **Genre-Specific Pairings:**
- **Synthwave/Retrowave:** Pair with analog filters and tape delay emulations
- **Ambient:** Combine with reverb, slow LFOs, and smooth envelope generators
- **Techno/House:** Use hard sync mode with rhythmic modulation
- **New Wave/Darkwave:** Classic configuration with chorus and arpeggiated sequences

### **Pro Tips:**
- **Use both outputs:** CROSSFADE for main voice, individual OUTs for layering
- **Mode switching performance:** Assign MODE button to foot switch for live changes
- **Detuning sweet spots:** Small pitch differences create beating, larger ones create intervals
- **Web editor exploration:** Spend time customizing behavior to match your style

### **Creative Experiments:**
- **Audio-rate modulation:** Use one oscillator to FM the other via web editor settings
- **Rhythmic sync:** Use hard sync with rhythmic pitch modulation for percussive sounds
- **Crossfade automation:** Use slow LFO on crossfade for automatic sound evolution
- **Multiple C&P units:** Chain multiple Castor & Pollux modules for complex polysynth voices

---

*Castor & Pollux II honors the past while embracing the future - don't be afraid to explore both its vintage character and modern capabilities!*