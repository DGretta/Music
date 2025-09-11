# Tiptop Audio Forbidden Planet - Beginner's Guide

**The Steiner-Parker Synthacon Filter Reborn**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Forbidden Planet?** An analog multimode filter inspired by the legendary 1975 Steiner-Parker Synthacon, featuring three separate inputs (HP, BP, LP) instead of typical mode switching. It's famous for its crisp high-pass filtering, unique resonance behavior, and sci-fi self-oscillation capabilities.

### Your First Classic Lowpass Sweep
1. **Turn RESO** all the way down (counterclockwise)
2. **Patch sawtooth wave** → **LP IN** (lowpass input)
3. **Set VOLUME** to around 3 o'clock
4. **Connect output** → your mixer/amp
5. **Slowly turn FREQUENCY** knob full scale - hear the classic filter sweep
6. **Gradually increase RESO** - listen as it goes from smooth to self-oscillating madness!

### Discover the Signature High-Pass
1. **Unplug from LP IN** and **patch same signal** → **HP IN**
2. **Set FREQUENCY to minimum** (9 o'clock)
3. **Slowly turn FREQUENCY up** - notice how highs cut through with "no residue"
4. **Try on kick drums** - removes rumble while keeping punch!

---

## Essential Parameters (The Big 5)

### **1. Three Input Jacks (HP, BP, LP)**
- **HP IN:** High-pass input - "signature sound" with crisp, sharp cuts
- **BP IN:** Band-pass input - isolates "pie-slice" frequency ranges  
- **LP IN:** Low-pass input - classic "airy" 12dB/octave slope
- **Unique feature:** Can use all three simultaneously for complex filtering
- **Key difference:** Inputs, not outputs - each processes signal differently

### **2. FREQUENCY Control**
- **What it does:** Sets cutoff frequency for all active filter modes
- **Range:** Wide frequency sweep from bass to treble
- **Behavior:** Works in "reverse direction" for HP compared to LP
- **Performance control:** Primary real-time filter manipulation

### **3. RESO (Resonance)**
- **What it does:** Internal feedback path emphasizing cutoff frequencies
- **Low settings:** Smooth harmonic emphasis
- **Medium settings:** Self-oscillation begins (filter becomes sine oscillator)
- **Maximum settings:** "Aggressive and scattered" - chaotic, grainy sci-fi tones
- **Unique trait:** Volume doesn't drop when resonance increases (unlike many filters)

### **4. CV Inputs (Attenuated + Full)**
- **Attenuated CV:** Has dedicated attenuator knob for precise control
- **Full CV:** Direct CV input with no attenuation
- **Use both:** Combine envelope + LFO modulation simultaneously
- **Creative tip:** Manual suggests trying audio signals in CV inputs!

### **5. VOLUME Control**
- **What it does:** Master output level control
- **Necessity:** No input level controls, so output volume is your gain staging
- **Range:** Controls final output from filter circuit
- **Performance use:** Quick level adjustments during play

---

## Understanding the Steiner-Parker Heritage

### **What Made the Original Special:**
- **1975 Steiner-Parker Synthacon** - rare analog synthesizer with unique filter design
- **Opposite polarity** compared to Moog/ARP filters of the era
- **Volume retention** when resonance increases (most filters get quieter)
- **Aggressive self-oscillation** with complex harmonic content
- **Three separate inputs** for innovative signal routing

### **Forbidden Planet's Modern Adaptation:**
- **Same core circuit** adapted for Eurorack
- **Improved stability** while retaining character
- **Compact 8HP format** vs. original large format
- **CV control** added for modular integration
- **Affordable** access to legendary filter sound

### **The Sci-Fi Connection:**
- **Named after 1956 film** "Forbidden Planet" with 100% electronic soundtrack
- **"Electronic tonalities"** - what the Musician's Union called it (refusing to call it music!)
- **Aggressive resonance** perfect for laser zaps and sci-fi effects
- **Self-oscillation chaos** creates otherworldly textures

---

## Beginner Patch Ideas

### **Patch 1: Classic Analog Bass**
- **Sawtooth oscillator** → **LP IN**
- **Bass sequence** controls oscillator pitch
- **Envelope generator** → **Full CV Input**
- **FREQUENCY at 9 o'clock**, **RESO at 1 o'clock**
- **Result:** Classic analog bass with Synthacon character

### **Patch 2: Drum Processing Magic**
- **Kick drum** → **HP IN** (removes rumble, keeps punch)
- **Snare drum** → **BP IN** (isolates snare frequencies)
- **Hi-hats** → **LP IN** (smooths harsh highs)
- **Mix all three inputs** for complete drum processing
- **Result:** Multi-band drum processing in one module

### **Patch 3: Sci-Fi Sound Design**
- **Any oscillator** → **BP IN**
- **RESO at maximum** (chaotic self-oscillation)
- **LFO** → **Attenuated CV** (frequency sweeps)
- **Manual FREQUENCY tweaks** for alien textures
- **Result:** Perfect Forbidden Planet soundtrack sounds!

---

## Advanced Techniques

### **Multiple Input Usage:**
- **Send same signal** to multiple inputs for parallel processing
- **Different signals** to each input for complex mixing
- **Crossfade between inputs** by varying their source levels
- **Creative routing:** Use inputs as a primitive mixer with filtering

### **Resonance Exploration:**
- **Self-oscillation mode:** Remove audio input, crank RESO, use as sine oscillator
- **Frequency tracking:** Use 1V/Oct into CV input for musical self-oscillation
- **Chaos mode:** Maximum RESO for grainy, unstable tones
- **Performance resonance:** Real-time RESO sweeps for dramatic effects

### **CV Modulation Strategies:**
- **Envelope + LFO:** Use both CV inputs for complex modulation
- **Audio rate CV:** Try audio signals in CV inputs for FM-like effects
- **Inverted envelopes:** Reverse filter movement for unusual effects
- **Random CV:** Create unpredictable filter movement

---

## Common Use Cases

### **Electronic Music Production:**
- **Analog bass synthesis:** LP input for classic bass lines
- **Drum processing:** HP input removes unwanted low frequencies from drums
- **Lead synthesis:** BP input for focused, cutting leads
- **Sound design:** Unique resonance for sci-fi and experimental textures

### **Mix Processing:**
- **High-pass filtering:** Clean up muddy mixes by removing low rumble
- **Frequency isolation:** BP input for surgical frequency selection
- **Creative effects:** Resonance sweeps for build-ups and breakdowns
- **Multi-band processing:** Different instruments through different inputs

### **Live Performance:**
- **Real-time filtering:** Immediate hands-on control
- **Self-oscillation:** Filter becomes additional sound source
- **Input switching:** Move cables between inputs for instant timbre changes
- **Resonance performance:** Dramatic real-time texture changes

---

## Pairs Well With

### **Essential Partners:**
- **Envelope Generators:** Classic filter envelope modulation
- **LFOs:** Rhythmic and evolving filter movement
- **Oscillators:** All types benefit from Forbidden Planet character
- **Attenuators:** Control levels going into different inputs

### **Advanced Combinations:**
- **Multiple Forbidden Planets:** Different filter responses on different sources
- **VCAs:** Control input levels before filtering
- **Mixers:** Combine multiple sources before filtering
- **Effects:** Reverb and delay enhance the character

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"The high-pass works backwards!"**
- HP frequency control is inverted compared to LP - this is normal
- **Solution:** For HP, low FREQUENCY = more highs, high FREQUENCY = less highs

**"I can't get the resonance to self-oscillate!"**
- Need to find the right frequency range for self-oscillation
- **Solution:** Try different FREQUENCY positions while increasing RESO

**"The filter doesn't have enough low-end when self-oscillating!"**
- Known limitation - self-oscillation cuts out below ~150Hz
- **Solution:** Use other filters for low-frequency self-oscillation, or layer with sub-oscillators

### **🎵 Pro Tips:**

**Input Selection Strategy:**
- **LP IN:** For traditional filter sweeps, bass synthesis, warm sounds
- **HP IN:** For crisp cuts, drum processing, removing mud
- **BP IN:** For focused leads, vocal textures, frequency isolation

**Resonance Sweet Spots:**
- **9-11 o'clock:** Subtle harmonic emphasis
- **12-2 o'clock:** Musical resonance without self-oscillation  
- **3-4 o'clock:** Self-oscillation begins - filter becomes oscillator
- **5 o'clock:** Maximum chaos - grainy, aggressive sci-fi tones

**CV Modulation Tips:**
- **Use both CV inputs:** Envelope for dynamics, LFO for movement
- **Attenuated CV:** Start with small amounts, increase gradually
- **Audio rate modulation:** Try audio signals in CV inputs for complex interactions
- **1V/Oct tracking:** When self-oscillating, filter tracks musically

**Performance Techniques:**
- **Resonance sweeps:** Classic build-up and breakdown technique
- **Input hopping:** Move signals between inputs for instant timbre changes
- **Self-oscillation mode:** Remove input, use filter as sound source
- **Multiple inputs:** Process different elements of your mix simultaneously

---

## Why This Module Rocks

### **The Heritage:**
Forbidden Planet brings the legendary Steiner-Parker Synthacon filter - one of the most distinctive filters in synthesizer history - into the affordable Eurorack format. This isn't just another filter; it's a piece of analog synthesis history.

### **The Unique Approach:**
- **Three inputs instead of mode switching** - completely different workflow
- **Volume-retaining resonance** - unusual behavior that sounds musical
- **Aggressive self-oscillation** - perfect for sound design and sci-fi effects
- **HP signature sound** - crisp, clean high-pass filtering unlike anything else

### **The Practical Benefits:**
- **Compact 8HP** - legendary filter sound in minimal space
- **Low power consumption** - 10mA on both rails
- **Affordable** - access to rare Synthacon character without vintage prices
- **Multiple uses** - filter, oscillator, processor, effect

### **Perfect For:**
- **Electronic musicians:** Seeking classic analog character with modern convenience
- **Sound designers:** Unique resonance and self-oscillation for sci-fi effects
- **Mix engineers:** Excellent high-pass filtering for cleaning up mixes
- **Vintage synth fans:** Experience legendary Synthacon sound in modular format
- **Anyone wanting distinctive filtering:** Sounds unlike Moog, ARP, or other common filters

---

**Bottom Line:** Forbidden Planet proves that some vintage designs are so good they deserve to be rediscovered. The Steiner-Parker Synthacon filter was ahead of its time in 1975, and it's still ahead of its time today.

---

*Visit [Tiptop Audio](http://tiptopaudio.com/) for complete documentation and more innovative Eurorack modules*