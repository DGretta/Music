# Instruo Arbhar - Beginner's Guide

**The Granular Time Machine**

---

## Quick Start: Get Your First Granular Sound in 5 Minutes

**What is Arbhar?** Think of it as a magical audio processor that chops your sounds into tiny "grains" (like cutting up rice), then plays them back in countless creative ways - freezing time, reversing it, scattering it, or turning it into shimmering textures.

### Your First Frozen Moment
1. **Connect audio source** → **IN** input (or just use the built-in microphone!)
2. **Turn Input Level** to 12 o'clock position
3. **Turn Output Level** fully clockwise  
4. **Press CAPTURE button** → LED lights up amber while recording
5. **Play with the big knobs** - especially **SCAN**, **INTENSITY**, and **LENGTH**

**Congratulations!** You've just captured and granulated audio. You're now controlling time itself!

---

## Essential Parameters (The Big 6)

### **1. Capture Button** 
- **What it does:** Records 10 seconds of audio into current memory slot
- **Musical result:** Your raw material for granular magic
- **LED feedback:** Amber = recording, off = ready to record

### **2. Intensity Knob (Center Position Best)**
- **What it does:** Controls how many grains play at once
- **Musical result:** Center = maximum grains (lush textures), edges = fewer grains (sparse)
- **Sweet spot:** 12 o'clock for rich, full textures

### **3. Scan Knob**
- **What it does:** Chooses which part of your recording to play back
- **Musical result:** Scrub through your captured audio like a DJ with a record
- **Try this:** Record yourself saying "hello" then scan through it slowly

### **4. Length Knob** 
- **What it does:** Sets how long each grain lasts (4ms to 3 seconds)
- **Musical result:** Short = stuttery/choppy, Long = smooth/stretched
- **Magic zone:** Around 10-11 o'clock for musical textures

### **5. Spray Knob**
- **What it does:** Adds randomness to grain position
- **Musical result:** No spray = focused, more spray = scattered/ambient clouds
- **Pro tip:** A little spray (9-10 o'clock) makes everything more organic

### **6. Pitch Knob & 1V/OCT Input**
- **What it does:** Changes the pitch of grains without changing speed
- **Musical result:** Transpose your captured audio up/down while keeping timing
- **Tracking:** Responds to keyboard/sequencer for melodic granular playing

---

## Beginner Patch Ideas

### **Patch 1: Granular Freeze Pedal**
```
[Instrument/Voice] ──→ [Arbhar IN input]
[Arbhar Output 1] ──→ [Mixer/Audio Interface]
[Expression Pedal/LFO] ──→ [Arbhar SCAN CV] (via CV expansion)
```
**Visual:** Input LED glows with incoming audio, capture LED shows recording status
**Controls:** CAPTURE to freeze moments, SCAN to scrub through time
**Sound:** Freeze any moment and explore it in slow motion - perfect for live performance

### **Patch 2: Granular Instrument** 
```
[Keyboard] ──CV──→ [Arbhar 1V/OCT input]
[Keyboard] ──GATE──→ [Arbhar STRIKE input] 
[Arbhar Output 1&2] ──→ [VCA or Filter]
```
**Visual:** Layer LEDs show which sample slot is active (α,β,γ,δ,ε,ζ)
**Controls:** Play chromatically with your captured audio like a polyphonic instrument
**Sound:** Turn any recorded sound into a playable, tuned instrument

### **Patch 3: Ambient Texture Generator**
```
[Field Recording/Drone] ──→ [Arbhar IN]
[Slow LFO] ──→ [Arbhar SCAN CV] (via expansion)
[Another LFO] ──→ [Arbhar INTENSITY CV] (via expansion)
```
**Visual:** Granular Stream Display shows grain activity as flowing colored lights
**Controls:** Set INTENSITY to center, LENGTH around 1 o'clock, add some SPRAY
**Sound:** Evolving, breathing textures that never repeat exactly the same way

### **Patch 4: Granular Delay Effect**
```
[Audio Source] ──→ [Mult] ──┬──→ [Mixer Channel 1] (dry signal)
                            └──→ [Arbhar IN]
[Arbhar Output] ──→ [Mixer Channel 2] (wet signal)
```
**Visual:** DRY/WET knob position controls blend, watch the colorful grain display
**Controls:** Use DRY/WET knob to blend original and granulated signal
**Sound:** From subtle grain textures to complete transformation of your source

---

## Common Use Cases

**🎸 **Live Looping:** Capture musical phrases and play them back granularly**
**🌊 **Ambient Textures:** Create evolving soundscapes from simple sources**  
**🎹 **Granular Instrument:** Play samples chromatically across the keyboard**
**⏰ **Time Stretching:** Slow down or speed up audio without pitch change (Follow Mode)**
**🔀 **Sound Design:** Transform any audio into new textures and timbres**
**🎤 **Voice Processing:** Turn speech into otherworldly textures and drones**

---

## Beginner "Gotchas" 

### **Six Layers System**
- **Arbhar has 6 memory slots** (α,β,γ,δ,ε,ζ) - like having 6 different tape loops
- **Layer knob selects** which slot you're recording into/playing from  
- **Different colored LEDs** show which layer is active
- **Omega position** (fully clockwise) links all layers together

### **Two Granular Engines**
- **Intensity knob controls** the "Continuous Engine" (always playing grains)
- **Strike button/input** controls the "Strike Engine" (manual grain triggering)
- **Both work together** - you can have continuous grains + manual triggers

### **Scan vs Follow Modes**
- **Scan Mode (default):** You manually control position with SCAN knob
- **Follow Mode:** Playback moves automatically, SCAN knob controls speed
- **Switch between modes:** Hold SHIFT+CAPTURE, turn SCAN knob

### **The Microphone is Always Listening**
- **Built-in condenser mic** is always active unless you patch something into IN
- **Ambient room sound** will be captured if you press CAPTURE with nothing patched
- **This is a feature!** Great for capturing environmental sounds on the fly

### **It's Not Broken, It's Granular**
- **Granular synthesis sounds different** from normal audio playback
- **Grains create texture** - this is intentional, not a malfunction
- **Start with familiar sounds** (your own voice) to understand what's happening

---

## Next Steps

1. **Master basic capture and playback** - get comfortable recording and scanning
2. **Explore the Layer system** - try recording different sounds in each slot  
3. **Experiment with Follow Mode** - automatic playback with speed control
4. **Try Wavetable Mode** - turn LENGTH fully counter-clockwise for oscillator mode
5. **Use the CV expansion** - external control opens up infinite possibilities

**Remember:** Arbhar rewards curiosity and experimentation. Every knob interaction creates something new!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Reverb (FX Aid, Clouds):** Granular textures + reverb = instant ambient magic
- **Filter (MMG, Ripples):** Shape and sculpt your granular textures  
- **VCA (Optomix, LxD):** Control the volume/dynamics of granular bursts
- **CV Sources:** LFOs, envelopes, and sequencers bring Arbhar alive with modulation

### **Next-Level Combinations:**
- **External Audio (Microphones, Instruments):** Arbhar shines with real-world audio sources
- **Multiple Arbhars:** Each running different layers for complex polyphonic granular music
- **Quantizer + Arbhar:** Turn any audio into perfectly tuned granular instruments
- **Clock Divider:** Use Strike input with rhythmic triggers for beat-synced granular patterns

### **Pro Tip:** Arbhar works amazingly well with **acoustic instruments and field recordings** - it breathes new life into "boring" audio sources and makes everything sound otherworldly.

---

*Need the full technical manual? Find it at instruomodular.com*