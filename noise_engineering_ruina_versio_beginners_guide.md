# Noise Engineering Ruina Versio - Beginner's Guide

**The Stereo Destruction Engine**

---

## Quick Start: Get Your First Destroyed Sound in 5 Minutes

**What is Ruina Versio?** Think of it as the ultimate stereo distortion laboratory containing multiple types of destruction in one module. It packs wavefolding, multiband saturation, phase shifting, full-wave rectification, sub-octave generation, and a notch filter into 10HP. Plus there's the legendary SMOOSH button that adds 128dB of gain instantly. It's part of the Versio platform, meaning you can swap firmwares for completely different effects using USB.

### Your First Gentle Destruction
1. **Connect audio source** → **L INPUT** (or both L & R for stereo)
2. **Connect Ruina Versio L & R OUTPUTS** → **your mixer**
3. **Set all knobs to 12 o'clock** except DOOM and FOLD (fully CCW), BLEND (fully CW)
4. **Set both switches** to leftmost positions (UND, OFF)
5. **Start with FOLD knob** - turn up slowly to add harmonic distortion
6. **Try DRIVE knob** for multiband saturation warmth

**Congratulations!** You've just experienced the "gentlest" side of Ruina Versio - it only gets more destructive from here!

---

## Essential Parameters (The Destruction Arsenal)

### **1. FOLD - The Infinifolder**
- **What it does:** Classic Noise Engineering wavefolder from BIA and Loquelic Iteritas
- **Character:** Adds harmonics through wavefolding - starts gentle, gets aggressive
- **Fully CCW:** No folding (cleanest setting)
- **12 o'clock:** Moderate harmonic addition
- **Fully CW:** Extreme folding and harmonic generation
- **CV controllable:** Essential for dynamic timbral changes
- **Pro tip:** One of the most "musical" distortions on the module

### **2. DRIVE + CENTER - Multiband Saturator**
- **DRIVE:** Controls emphasis of different frequency bands (inspired by Seca Ruina)
- **CCW:** Low frequencies emphasized
- **CW:** High frequencies emphasized  
- **CENTER:** Controls width and frequency of the center band
- **Interaction:** These work together to create complex frequency-dependent saturation
- **Modulate CENTER:** Creates filter-like sweeping effects
- **Four bands:** Low, low-mid, high-mid, high frequency processing

### **3. DOOM - The Sub-Octave Destroyer**
- **What it does:** Detuned sub-octave generator that gets progressively unstable
- **Fully CCW:** No sub-octave generation
- **Low settings:** Clean sub-octave for bass enhancement
- **Higher settings:** Detuning and pitch instability increases
- **Extreme settings:** Buzzy overtones and harmonic chaos
- **Character:** "Scary" version of traditional sub-octave effects
- **Perfect for:** Bass enhancement that goes very wrong in the best way

### **4. 8VIZE - Full-Wave Rectifier**
- **What it does:** Full-wave rectification - unlike any other clipping you've heard
- **Character:** Creates erratic, harsh, glistening harmonic content
- **Unpredictable:** Sometimes behaves in unexpected ways
- **Harmonic generation:** Adds both musical and inharmonic content
- **Extreme settings:** Can create complete sonic chaos
- **Unique:** Different from traditional clipping or wavefolding

### **5. PHASE - Stereo Width Creator**
- **What it does:** Phase shifting between left and right channels
- **12 o'clock:** No phase shifting
- **Turn either direction:** Creates stereo width and movement
- **Modulate:** Creates swirling stereo effects
- **Mono compatibility:** Be careful with extreme settings if mono summing
- **Essential:** For creating wide, immersive soundscapes

### **6. BLEND - Wet/Dry Mix**
- **Fully CCW:** Dry signal only (bypass)
- **12 o'clock:** Equal mix of dry and processed
- **Fully CW:** Fully processed signal
- **Essential for:** Controlling intensity of destruction
- **Parallel processing:** Allows blending clean and destroyed signals

---

## Advanced Controls (The Routing & Filtering System)

### **7. UND/X/OVR - Signal Routing Switch**
- **UND (Under):** Mildest routing path through the distortion algorithms
- **X (Cross):** Medium intensity, different internal signal flow
- **OVR (Over):** Most extreme routing - includes two wavefolding stages
- **Changes everything:** Same knob settings sound different in each mode
- **Experiment:** Try same patch in all three modes for variety

### **8. OFF/ON/TRK - Notch Filter Switch**
- **OFF:** Notch filter disabled
- **ON:** Fixed 1kHz notch filter (classic reese/bass technique)
- **TRK:** Variable notch filter frequency controlled by CENTER knob
- **TRK mode interaction:** CENTER now controls both multiband center AND notch frequency
- **Sound design use:** Traditional technique for certain bass and lead sounds

### **9. SMOOSH - The Nuclear Option**
- **Manual button:** Press for instant 128dB gain boost
- **Gate input:** External triggering of SMOOSH effect
- **128dB gain:** Extreme input overdrive while maintaining output level
- **Use sparingly:** This is intentionally over-the-top
- **Performance tool:** Great for dramatic effect moments

---

## Beginner Patch Ideas

### **Patch 1: Subtle Harmonic Enhancement**
```
[Audio source] ──→ [Ruina Versio L INPUT]
[Ruina Versio L&R OUT] ──→ [Mixer]
```
**Setup:** UND mode, OFF notch, BLEND at 25%, FOLD at 25%
**Controls:** Start gentle - small amounts of FOLD and DRIVE
**Result:** Subtle harmonic enhancement without obvious distortion
**Performance:** Modulate BLEND for dynamic intensity control

### **Patch 2: Bass Destruction**
```
[Bass sequence] ──→ [Ruina Versio L INPUT]
[LFO] ──→ [DOOM CV input] (slow)
[Ruina Versio OUT] ──→ [Audio output]
```
**Setup:** X mode, DOOM at 50%, DRIVE emphasizing low end
**Controls:** LFO modulates DOOM for evolving sub-octave chaos  
**Result:** Bass sounds that morph from clean to completely destroyed
**Advanced:** Add FOLD modulation for even more evolution

### **Patch 3: Stereo Drum Bus Destroyer**
```
[Drum mix] ──→ [Ruina Versio L&R INPUTS]
[Envelope] ──→ [SMOOSH GATE input] (triggered by kick)
[Ruina Versio OUT] ──→ [Final mixer]
```
**Setup:** OVR mode for maximum destruction, PHASE for width
**Controls:** SMOOSH triggered by kick for explosive transients
**Result:** Drum bus that gets periodically obliterated  
**Mix tip:** Keep BLEND around 50% to maintain some dynamics

### **Patch 4: Evolving Pad Destruction**
```
[Pad/chord sound] ──→ [Ruina Versio INPUTS]
[LFO 1] ──→ [CENTER CV] (slow)
[LFO 2] ──→ [8VIZE CV] (very slow)
[LFO 3] ──→ [PHASE CV] (medium)
```
**Setup:** Multiple LFOs create constantly evolving destruction
**Routing:** Try different UND/X/OVR modes during performance
**Result:** Pad sounds that continuously morph through different destruction types
**Ambient gold:** Perfect for textural, evolving soundscapes

---

## Common Use Cases

**🥁 **Drum Bus Processing:** Destroy entire drum mixes with SMOOSH and multiband saturation**
**🎸 **Guitar/Bass Destruction:** Multiple distortion types for aggressive sounds**
**🎵 **Parallel Processing:** BLEND control allows subtle to extreme enhancement**
**🌊 **Stereo Width:** PHASE control creates immersive stereo soundscapes**
**⚡ **Dynamic Effects:** SMOOSH button for explosive moments**
**🎛️ **Sound Design:** Multiple algorithms for unique textures**
**🔊 **Mix Bus Saturation:** Subtle multiband processing for mix cohesion**
**🎭 **Performance Tool:** Real-time destruction control for live sets**

---

## Beginner "Gotchas"

### **It's Extremely Loud and Aggressive**
- **128dB SMOOSH:** This is not a subtle effect - use with extreme caution
- **Hot output levels:** May need attenuation after Ruina Versio
- **Hearing protection:** Seriously, this module can be dangerously loud
- **Start gentle:** Begin with low BLEND amounts and small distortion settings
- **It's supposed to be extreme:** Embrace the chaos, but protect your ears

### **Routing Modes Change Everything**
- **Same settings, different sounds:** UND/X/OVR completely change the character
- **No "right" mode:** Each routing serves different musical purposes
- **Experiment systematically:** Try the same patch in all three modes
- **OVR mode is intense:** Double wavefolding makes everything more extreme
- **Document your settings:** Complex interactions make it hard to recreate sounds

### **Multiple Distortion Types Interact**
- **Not independent:** FOLD, DRIVE, DOOM, and 8VIZE all affect each other
- **Complex interactions:** Small changes can create dramatic results  
- **Order matters:** Different routing modes change the processing order
- **Can be overwhelming:** Start with one distortion type, add others gradually
- **Sweet spots exist:** Not every extreme setting is useful

### **CENTER Knob Dual Function**
- **Always affects multiband processing:** Controls frequency bands
- **TRK mode adds notch control:** Same knob now controls two different things
- **Can be confusing:** Be aware of which notch filter mode you're in
- **Interaction complexity:** CENTER becomes very powerful in TRK mode
- **Context dependent:** Knob behavior changes based on switch position

### **Versio Platform Confusion**
- **Firmware swapping:** USB connection allows different effects
- **Hardware is generic:** Same hardware, different firmware = different modules
- **This is Ruina firmware:** Other firmwares completely change functionality
- **Update availability:** New firmwares released regularly
- **Open source:** You can even write your own firmware

---

## Next Steps

1. **Master one distortion type at a time** - start with FOLD, add others gradually
2. **Explore routing modes systematically** - same patch through UND/X/OVR
3. **Practice BLEND control** - learn to balance destruction vs musicality  
4. **Experiment with modulation** - CV control brings these algorithms to life
5. **Try the notch filter modes** - understand OFF/ON/TRK differences
6. **Use SMOOSH responsibly** - practice with gain staging and hearing protection

**Remember:** Ruina Versio rewards experimentation but can be overwhelming. Start gentle and work up to the extreme settings!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **VCAs (Veils, 2HP VCA):** Essential for controlling the aggressive output levels
- **Filters (SEM, MMF):** Tame harsh frequencies and add musical shaping
- **Compressors:** Control the extreme dynamics created by destruction
- **Reverb/Delay (FX Aid):** Add space to the processed sounds

### **Next-Level Combinations:**
- **Multiple LFOs (Ochd, Batumi):** Modulate multiple parameters simultaneously
- **Envelope Generators (Maths):** Dynamic control of destruction intensity
- **Mixers:** Parallel processing by splitting signals before and after Ruina
- **Attenuverters:** Fine-control the intense CV modulation responses

### **Advanced Integration:**
- **Other Versio modules:** Mix different Versio effects in the same system
- **Sequencers:** Automate routing switches and SMOOSH triggers
- **Performance controllers:** Real-time control of multiple destruction parameters
- **Multi-track processing:** Use multiple inputs for complex stereo processing

### **Genre Applications:**
- **Industrial/Noise:** Extreme settings for aggressive electronic music
- **Metal/Hardcore:** Guitar and bass destruction for heavy genres
- **Electronic/Dubstep:** SMOOSH button perfect for drops and buildups
- **Experimental:** Unique algorithms for avant-garde sound design
- **Hip-Hop:** Drum bus processing for gritty, aggressive beats

### **Pro Tips:**
- **Record everything:** Complex interactions often create unrepeatable moments
- **Use multiple instances:** Different routing modes on different elements
- **Automate BLEND:** Most musical parameter for dynamic processing
- **Parallel chains:** Split signal, destroy one path, blend back together
- **SMOOSH timing:** Practice triggering explosive moments musically

### **Creative Experiments:**
- **Feedback loops:** Carefully route output back to CV inputs
- **Cross-modulation:** Use audio-rate signals to modulate destruction parameters
- **Rhythmic destruction:** Sequence different routing modes for rhythmic effects
- **Stereo processing:** Use different settings on L vs R inputs for wide effects

---

*Ruina Versio is designed for sonic destruction - embrace the chaos, but always protect your hearing and your speakers!*