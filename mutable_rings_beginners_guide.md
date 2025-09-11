# Mutable Instruments Rings - Beginner's Guide

**The Physical Modeling Powerhouse**

---

## Quick Start: Get Your First Resonant Sound in 5 Minutes

**What is Rings?** Think of it as a magic box that turns any sound (or even just a voltage) into beautiful, resonant tones - like striking a bell, plucking a string, or bowing a violin. It doesn't make sound by itself; instead, it takes whatever you feed it and makes it sing with the voice of real physical objects.

### Your First Plucked String
1. **Connect keyboard/sequencer** → **V/OCT input** (bottom)
2. **Connect Rings ODD output** → **your mixer/audio interface**
3. **Press left button** until you see 1 voice (single LED)
4. **Press right button** for green LED (modal resonator)
5. **Play some notes** - Rings creates its own "pluck" sounds automatically!

**Congratulations!** You've just played a virtual string instrument that responds to your melodies with beautiful, decaying resonances!

---

## Essential Parameters (The Big 6)

### **1. Resonator Type Button (Right) + LED Colors**
- **Green LED = Modal Resonator** - bells, chimes, metallic sounds, classic physical modeling
- **Orange LED = Sympathetic Strings** - sitar-like sympathetic resonances, rich harmonics
- **Red LED = String Model** - guitar/violin-like string sounds with nonlinearities
- **Musical impact:** Each mode sounds completely different - explore them all!

### **2. Polyphony Button (Left) + Voice Count**
- **1 Voice = Monophonic** - one note at a time, all 64 filters for maximum quality
- **2 Voices = Duophonic** - two overlapping notes, like fingerpicking
- **4 Voices = Quadraphonic** - chord strumming, multiple decaying notes
- **Trade-off:** More voices = less resolution per voice, but more musical complexity

### **3. FREQUENCY Knob**
- **What it does:** Sets the fundamental pitch/tuning of the resonator
- **Behavior:** Quantized to semitones when V/OCT input is patched
- **Range:** 5 full octaves of precise tuning
- **Sweet spot:** Tune to match your musical material

### **4. STRUCTURE Knob** 
- **What it does:** Changes the harmonic relationships - the "material" of the object
- **Modal mode:** Metal → wood → string materials by changing partial relationships
- **String modes:** Detuning, nonlinearity, and string intervals
- **Magic knob:** This transforms the entire character of the sound

### **5. BRIGHTNESS Knob**
- **What it does:** Controls spectral content from dark to bright
- **Left side:** Low-pass filtering, darker, warmer sounds
- **Right side:** Opens up harmonics, adds brilliance and edge
- **Musical use:** Like tone controls on a guitar amp

### **6. DAMPING Knob**
- **What it does:** Controls how long resonances last (decay time)
- **Range:** From 100ms (short plucks) to 10 seconds (infinite sustain)
- **Musical impact:** Short = percussive, Long = sustained drones
- **Key to character:** This knob defines whether sounds are attacks or sustains

---

## Beginner Patch Ideas

### **Patch 1: Simple Melodic Resonator**
```
[Sequencer] ──1V/OCT──→ [Rings V/OCT]
[Rings ODD] ──→ [Reverb] ──→ [Audio Out]
```
**Setup:** Green LED (modal), 1 voice, DAMPING around 2 o'clock for musical decay
**Visual:** Single green LED shows modal mode, notes trigger automatically
**Controls:** STRUCTURE changes materials, BRIGHTNESS for tone, POSITION for character
**Sound:** Beautiful, bell-like melodic sequences with natural decay

### **Patch 2: External Audio Processing**
```
[Audio Source] ──→ [Rings IN input]
[Rings ODD] ──→ [Audio Out]
[Rings EVEN] ──→ [Different Effect] ──→ [Audio Out Right]
```
**Setup:** Any resonator mode, try different audio sources (drums, voice, noise)
**Visual:** Both outputs carry different harmonic content for stereo processing
**Controls:** Incoming audio "excites" the resonator, creating pitched versions
**Sound:** Transform any sound into resonant, harmonic versions

### **Patch 3: Strummed Chords**
```
[Fast Arpeggiated Sequence] ──1V/OCT──→ [Rings V/OCT]
[Clock] ──→ [Rings STRUM input]
[Rings ODD + EVEN] ──→ [Stereo Mixer]
```
**Setup:** 4-voice mode, orange LED (sympathetic strings), moderate DAMPING
**Visual:** Four LEDs show polyphonic mode, STRUM input triggers new voices
**Controls:** Fast arpeggios sound like strummed chords, STRUCTURE sets intervals
**Sound:** Guitar/harp-like chord strumming with natural voice overlaps

### **Patch 4: Continuous Drone Processing**
```
[Continuous Noise/Drone] ──→ [Rings IN]
[LFO] ──CV──→ [Rings POSITION CV input]
[Envelope] ──CV──→ [Rings BRIGHTNESS CV input]
[Rings ODD] ──→ [Audio Out]
```
**Setup:** Modal mode (green), 1 voice, long DAMPING, moderate BRIGHTNESS
**Visual:** Continuous input creates sustained resonances, CV modulation visible on knobs
**Controls:** POSITION modulation creates phasing effects, BRIGHTNESS adds dynamics
**Sound:** Rich, evolving drones and textures from simple noise sources

---

## Common Use Cases

**🎵 **Melodic Resonator:** Transform sequences into bell-like, stringed, or metallic melodies**
**🎸 **String Simulator:** Polyphonic chord strumming and fingerpicked patterns**  
**🔊 **Audio Processor:** Turn any sound into harmonic, resonant versions**
**🏴 **Drone Generator:** Create rich, evolving textures from simple inputs**
**🥁 **Percussion Processor:** Make drum hits ring with pitched resonances**
**🎹 **Complete Voice:** No need for external envelopes - built-in decay envelopes**
**🎛️ **Modulation Target:** All parameters respond beautifully to CV control**

---

## Beginner "Gotchas" 

### **It's Not An Oscillator**
- **Rings doesn't generate sound** - it processes or responds to input
- **No input = internal exciter** - it creates its own "pluck" or "strike" when triggered
- **Think "instrument" not "oscillator"** - you're striking/plucking/bowing a virtual object
- **Different from traditional synthesis** - this is physical modeling, not subtractive

### **Three Completely Different Models**
- **Green ≠ Orange ≠ Red** - each LED color is essentially a different instrument
- **Same knob, different function** - STRUCTURE means different things in each mode
- **Don't expect consistency** - embrace the unique character of each model
- **Modal (green) most versatile** - good starting point for beginners

### **Polyphony is About Overlapping Decay**
- **Not traditional polyphony** - no multiple CV inputs or keyboard splitting
- **Voices overlap and decay together** - like real string instruments
- **4-voice = lower quality per voice** - trade resolution for complexity
- **STRUM input manages voice allocation** - controls which voice gets the new note

### **Two Outputs with Different Content**
- **ODD and EVEN are not stereo** - they carry different harmonic components
- **Modal mode:** Odd/even numbered harmonics split between outputs
- **String modes:** Phase-shifted components create stereo-like effects
- **Mono operation:** Only plug ODD output for summed signal
- **Stereo magic:** Both outputs to separate channels creates width and movement

### **External Audio Input Changes Everything**
- **IN input transforms the module** - becomes an audio processor instead of instrument
- **Any audio works** - percussion, voice, noise, other instruments
- **Continuous vs percussive** - different input types create different behaviors
- **Volume matters** - modular levels expected (loud signals for best results)

---

## Next Steps

1. **Master one mode at a time** - start with Modal (green), learn its sweet spots
2. **Experiment with external inputs** - try processing different audio sources
3. **Explore polyphonic modes** - understand how voice overlap creates musical textures
4. **Use both outputs** - stereo processing opens up spatial possibilities
5. **Add CV modulation** - slow parameter changes create evolving, organic sounds

**Remember:** Rings rewards experimentation with audio inputs. Try feeding it everything - drums, voice, field recordings, other modules. Each input creates a completely different instrument!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Plaits:** Drum models from Plaits → Rings IN = amazing percussive resonances
- **Contact Microphones:** Real-world acoustic excitation for authentic physical modeling
- **Reverb (FX Aid, Magneto):** Rings + spatial effects = instant ambient soundscapes  
- **Envelope Generators:** Control BRIGHTNESS/DAMPING for expressive dynamics

### **Next-Level Combinations:**  
- **Marbles:** Random triggers for STRUM + random CV for organic parameter movement
- **Elements:** If you want the complete physical modeling experience with built-in exciter
- **Maths:** Complex envelopes modulating multiple Rings parameters simultaneously
- **Data:** Visualize the resonant spectra and understand what each mode actually does

### **Pro Tip:** Rings excels as both a **complete instrument** and an **audio processor**. Don't choose one approach - use both! Set up patches where it sometimes acts as a melodic voice and sometimes processes external audio. The combination creates incredibly rich, evolving musical textures.

---

*Need the full technical manual? Find it at mutable-instruments.net/modules/rings*