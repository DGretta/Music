# Mutable Instruments Plaits - Beginner's Guide

**The Sonic Swiss Army Knife**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Plaits?** Think of it as 16 different synthesizers crammed into one module. It's a "macro-oscillator" that can be a classic analog-style VCO, an FM synth, a drum machine, a speech synthesizer, a granular engine, and much more. It's like having a whole rack in 12HP.

### Your First Classic Sound
1. **Connect keyboard/sequencer** → **V/OCT input** (bottom left)
2. **Connect OUT jack** → **your filter or mixer**
3. **Press left button** until first LED lights up (classic waveforms mode)
4. **Turn FREQUENCY knob** to set pitch range
5. **Play with TIMBRE, MORPH, HARMONICS** knobs to shape the sound

**Congratulations!** You've just used Plaits as a classic dual oscillator with continuously variable waveforms!

---

## Essential Parameters (The Big 6)

### **1. Model Selection Buttons/LEDs**
- **What they do:** Choose which of 16 synthesis algorithms is active
- **Left button:** Cycles through 8 pitched/melodic models
- **Right button:** Cycles through 8 noise/percussion models
- **LED feedback:** Shows current active model clearly
- **Pro tip:** Can be CV controlled for automatic model switching!

### **2. FREQUENCY Knob**
- **What it does:** Sets the base pitch (like a coarse tune knob)
- **Range:** 8 full octaves by default
- **Musical result:** Determines whether you're in bass, mid, or treble territory
- **Hidden feature:** Can be narrowed to 14 semitones for precise tuning

### **3. TIMBRE Knob** 
- **What it does:** Main timbral control - usually brightness/darkness
- **Musical result:** Generally sweeps from dark/thin to bright/dense sounds
- **Model dependent:** Exact function changes with each synthesis model
- **Sweet spot:** Often around 10-2 o'clock for musical tones

### **4. MORPH Knob**
- **What it does:** Secondary timbral shaping - explores variations
- **Musical result:** Lateral movement through different sound characters  
- **Think of it as:** The "explore" knob - turn it to discover new versions of the sound
- **Pro tip:** Often controls things like waveform shape, feedback, or modulation depth

### **5. HARMONICS Knob**
- **What it does:** Controls harmonic content, detuning, or component balance
- **Musical result:** Can add richness, detuning, or change the harmonic structure
- **Model dependent:** Sometimes detuning, sometimes filter type, sometimes balance
- **Experimentation key:** This knob often yields the most surprising results

### **6. Internal LPG (Low Pass Gate)**
- **What it does:** Built-in filter+VCA combo - complete voice in one module
- **LEVEL input:** Controls both volume and brightness simultaneously  
- **TRIGGER input:** Strike the LPG for percussive sounds
- **Hidden settings:** Hold first button + turn TIMBRE/MORPH to adjust LPG behavior

---

## Beginner Patch Ideas

### **Patch 1: Classic Lead Synth**
```
[Keyboard] ──1V/OCT──→ [Plaits V/OCT]
[Keyboard] ──GATE──→ [Envelope Generator]
[Envelope] ──CV──→ [Plaits LEVEL] 
[Plaits OUT] ──→ [Audio Out/Mixer]
```
**Model:** First LED (classic waveforms)
**Visual:** LED shows current model, TIMBRE affects brightness
**Controls:** HARMONICS = detuning, MORPH = wave shape, TIMBRE = pulse width
**Sound:** Rich, classic analog-style lead sounds with two detuned oscillators

### **Patch 2: Self-Contained Percussion**
```
[Clock/Trigger] ──→ [Plaits TRIG input]
[Plaits OUT] ──→ [Mixer] (no envelope needed!)
```
**Model:** Any from second bank (right button) - try kick, snare, or hi-hat models
**Visual:** Right bank LEDs for percussion models
**Controls:** Built-in envelope triggers from TRIG input, adjust TIMBRE/MORPH for character
**Sound:** Complete drum sounds with built-in decay - no external envelope needed

### **Patch 3: Speech Synthesizer**
```
[Slow LFO] ──CV──→ [Plaits MORPH CV input]
[Trigger Sequence] ──→ [Plaits TRIG input]
[Plaits OUT] ──→ [Reverb] ──→ [Audio Out]
```
**Model:** Last LED in first bank (speech synthesis)
**Visual:** Watch MORPH LED respond to CV, speech models have unique behaviors
**Controls:** MORPH = phoneme selection, TIMBRE = formant shifting, triggers = word utterances
**Sound:** Robot voices, vowel sounds, and speech synthesis - pure sci-fi gold

### **Patch 4: Evolving Textures**
```
[Plaits AUX] ──→ [Plaits FM CV input] (self-modulation!)
[Slow Envelope] ──CV──→ [Plaits TIMBRE CV input]
[Plaits OUT + AUX] ──→ [Stereo Mixer]
```
**Model:** Try wavetable, FM, or granular models
**Visual:** Internal envelope LED flashes show self-modulation activity
**Setup:** Turn TIMBRE attenuverter to control self-modulation amount
**Sound:** Complex, evolving textures that modulate themselves organically

---

## Common Use Cases

**🎹 **Complete Synthesizer Voice:** Built-in LPG means no external filter/VCA needed**
**🥁 **Drum Machine:** 6 different drum models with built-in envelopes**  
**🗣️ **Sound Design:** Speech synthesis, granular textures, modal resonators**
**🌊 **Melodic Sequences:** FM synthesis, wavetables, chord generators**
**🎵 **Bass Lines:** Analog-style oscillators, FM, waveshaping**
**🔊 **Textural Layers:** Particle noise, filtered noise, granular clouds**
**🎛️ **Learning Tool:** Experience 16 different synthesis methods in one module**

---

## Beginner "Gotchas" 

### **Two Banks of Models**
- **Left button (8 models) = Pitched/Melodic sounds** - use these for melodies, bass, leads
- **Right button (8 models) = Noise/Percussion** - drums, textures, sound effects
- **Don't get stuck in one bank** - explore both for maximum sonic potential
- **Model CV input** can switch between models automatically

### **Each Model Has Different Parameter Functions**
- **TIMBRE, MORPH, HARMONICS mean different things** for each model
- **Same knob position = totally different sound** when you change models  
- **This is intentional** - each model is optimized for its synthesis type
- **Experimentation is key** - don't expect consistency across models

### **Built-in LPG is Powerful**
- **LEVEL input controls volume AND brightness** - it's not just a VCA
- **No LEVEL CV = use TRIGGER input** to "pluck" the LPG percussively
- **LPG settings are hidden** - hold first button + adjust TIMBRE/MORPH to customize
- **You often don't need external filters/VCAs** with Plaits

### **Internal Envelope System**
- **Attenuverters at bottom control internal envelope** when nothing's patched
- **TRIGGER input activates internal envelope** for all three CV inputs
- **Remember to reset attenuverters to center** when patching external CV
- **This catches beginners off-guard** - sudden self-modulation when triggering

### **AUX Output is Context-Dependent**
- **Every model outputs something different** on AUX output
- **Sometimes it's a sub-oscillator**, sometimes a variation, sometimes raw signal
- **Often more interesting than main output** - don't ignore it!
- **Great for stereo patches** or sending to different effects

---

## Next Steps

1. **Explore one bank at a time** - master the pitched models, then try percussion
2. **Learn the parameter patterns** - TIMBRE usually = brightness, but experiment  
3. **Use both outputs** - AUX often provides complementary or contrasting material
4. **Try self-patching** - AUX to FM input creates complex self-modulation
5. **Experiment with model CV** - automatic model switching creates evolving textures

**Remember:** Plaits is deep - each model is like a different synthesizer. Don't try to learn them all at once. Pick a few favorites and really explore them!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Sequencers:** Plaits shines with melodic sequences - the chord models are perfect for arpeggios
- **Reverb/Delay (FX Aid, Magneto):** Speech synthesis and granular models love spatial effects
- **Clock Dividers:** Use different trigger patterns for the percussion models  
- **Attenuators/VCAs:** Tame the output levels and create dynamics

### **Next-Level Combinations:**  
- **Marbles:** Random triggers for percussion models + random CV for model switching
- **Maths:** Complex envelopes to modulate TIMBRE/MORPH for evolving textures
- **Data:** Visualize what different synthesis models actually look like
- **Filters:** Despite built-in LPG, external filters can create parallel processing chains

### **Pro Tip:** Plaits excels as a **complete voice** but also as a **sound source generator** feeding other modules. The AUX output is often perfect for feeding into Arbhar, Cs-L, or other processors for hybrid synthesis approaches.

---

*Need the full technical manual? Find it at mutable-instruments.net/modules/plaits*