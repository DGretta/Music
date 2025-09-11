# Erica Synths Pico LFO/S&H - Beginner's Guide

**Essential Modulation in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Pico LFO/S&H?** A fully analog dual utility module combining a low frequency oscillator with simultaneous triangle and square outputs, plus a sample & hold circuit. It's the fundamental modulation source that every rack needs, condensed into just 3HP.

### Your First LFO Modulation
1. **Turn Rate knob** to 12 o'clock position
2. **Watch the LED** blink - this shows your LFO speed
3. **Patch Triangle output** → your filter cutoff CV input
4. **Patch Square output** → your sequencer clock input (if desired)
5. **Play a sequence** - notice the smooth filter sweeps and rhythmic pulses
6. **Adjust Rate knob** - hear how it changes both the modulation speed and clock tempo

### Your First Sample & Hold
1. **Keep the LFO running** (LED blinking)
2. **Patch any CV source** → **S&H CV Input** (try another LFO or noise)
3. **Patch S&H Output** → your oscillator pitch CV
4. **Nothing in S&H Clock?** It automatically uses the internal LFO as clock
5. **Result:** Stepped random pitch changes in sync with your LFO rate!

---

## Essential Parameters (The Big 3)

### **1. Rate Knob + LED**
- **What it does:** Controls LFO frequency from 0.4Hz to 20Hz
- **Musical result:** Slow = long evolving sweeps, Fast = vibrato/tremolo speeds
- **LED feedback:** Visual indication of current LFO rate
- **Dual purpose:** Sets both modulation speed AND sample rate (when S&H clock is unpatched)

### **2. LFO Outputs (Triangle + Square)**
- **Triangle:** Smooth, continuous modulation - perfect for filters, pitch, amplitude
- **Square:** Hard on/off switching - great for clock signals, gate triggers, on/off switching
- **Simultaneous:** Both outputs run at the same rate but different shapes
- **Range:** ±5V output on both waveforms

### **3. Sample & Hold Circuit**
- **CV Input:** What gets sampled - can be any audio or CV signal
- **Clock Input:** When to sample (if empty, uses internal LFO automatically)
- **S&H Output:** Stepped voltages that hold until next clock pulse
- **Creative use:** Turn smooth signals into stepped/quantized versions

---

## Understanding Sample & Hold

### **How S&H Works:**
1. **Sample:** At each clock pulse, S&H "looks at" the voltage at CV Input
2. **Hold:** Maintains that exact voltage until the next clock pulse
3. **Step:** Creates stepped, staircase-like voltage patterns
4. **Result:** Smooth signals become discrete, stepped sequences

### **Clock Source Options:**
- **No Clock patched:** Uses internal LFO (Rate knob controls sample rate)
- **External Clock:** Patch any pulse/gate signal for independent timing
- **LFO Square out → S&H Clock:** Create rhythmic relationships
- **Other modules:** Sequencer gates, burst generators, etc.

### **CV Input Applications:**
- **Noise sources:** Creates random voltage sequences
- **Other LFOs:** Turn smooth LFOs into stepped sequences  
- **Audio signals:** Sample audio for unusual CV patterns
- **Manual voltage:** Use offset/attenuator modules for controlled values

---

## Beginner Patch Ideas

### **Patch 1: Random Melody Generator**
- **Noise source** → **S&H CV Input**
- **Leave S&H Clock empty** (uses internal LFO)
- **S&H Output** → **Quantizer** → **Oscillator pitch**
- **Triangle Output** → **Filter cutoff**
- **Square Output** → **Trigger envelope generator**
- **Result:** Random melodies with smooth filter movement in perfect sync

### **Patch 2: Rhythmic Filter Sweeps**
- **Triangle Output** → **Filter cutoff** (smooth sweeps)
- **Square Output** → **VCA gate input** (rhythmic on/off)
- **Rate at 2 o'clock** for musical timing
- **Result:** Filter sweeps that pulse rhythmically - classic analog sequencer feel

### **Patch 3: Independent Timing Sources**
- **External clock** → **S&H Clock Input**
- **Another LFO** → **S&H CV Input**
- **S&H Output** → **Oscillator FM amount**
- **Triangle Output** → **Different parameter** (reverb send, etc.)
- **Result:** Two independent modulation sources from one 3HP module

---

## Advanced Techniques

### **LFO as Clock Source:**
- **Square Output** → other modules' clock inputs
- **Rate knob** becomes master tempo control
- **LED** provides visual timing reference
- **20Hz maximum** = very fast clock rates possible

### **S&H Creative Applications:**
- **Audio Rate Clocking:** Very fast S&H for bit-crushing effects
- **Voltage Quantization:** Sample precise CV values for repeatable patterns
- **Rhythm Generation:** Use S&H output to control gate lengths or trigger probability
- **Cross-Modulation:** Sample one modulation source to control another

### **Feedback Loops:**
- **S&H Output** → **Attenuator** → **S&H CV Input** (self-generating patterns)
- **Triangle + Square mixed** → **S&H CV Input** (complex sampling source)
- **Multiple S&H modules** feeding each other (chaotic interactions)

---

## Common Use Cases

### **Studio Production:**
- **Basic LFO needs:** Every patch needs modulation - this covers the essentials
- **Random element generation:** S&H adds controlled unpredictability
- **Clock source:** Square output drives sequencers and rhythm modules
- **Space efficiency:** Two functions in minimal HP

### **Live Performance:**
- **Real-time control:** Rate knob affects both LFO and S&H simultaneously
- **Visual feedback:** LED helps with timing in dark performance environments
- **Reliability:** Analog circuit = no digital glitches or timing issues
- **Simple interface:** No menu diving or complex configuration

### **Educational/Learning:**
- **LFO fundamentals:** Learn the difference between triangle and square waves
- **S&H concept:** Understand sampling and quantization in analog domain
- **Clock relationships:** See how different modules sync together
- **Modulation basics:** Essential functions every modular synthesist needs

---

## Pairs Well With

### **Essential Partners:**
- **Noise Sources:** For random S&H sequences (Pico Noise, other random modules)
- **Quantizers:** Make S&H random voltages musical
- **VCAs:** Control the amount of modulation applied
- **Filters:** Classic target for triangle wave modulation

### **Advanced Combinations:**
- **Multiple LFO/S&H modules:** Layer different rates and patterns
- **Clock Dividers:** Create related but different timing from square output
- **Logic Gates:** Combine square outputs for complex rhythmic patterns
- **Precision Adders:** Offset and scale the ±5V outputs for different modules

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My S&H isn't changing!"**
- Need a clock signal to trigger sampling
- **Solution:** Either patch an external clock or leave S&H Clock empty to use internal LFO

**"The S&H output is always the same voltage!"**
- CV Input might be receiving a static voltage
- **Solution:** Patch a changing signal (noise, LFO, audio) to S&H CV Input

**"My LFO is too fast/too slow!"**
- 0.4Hz-20Hz range might not cover your needs
- **Solution:** Use clock dividers/multipliers on square output, or different LFO modules for extreme ranges

### **🎵 Pro Tips:**

**Rate Knob Sweet Spots:**
- **7-9 o'clock:** Very slow, evolving textures (great for ambient)
- **10-2 o'clock:** Musical modulation rates (most common usage)
- **3-5 o'clock:** Fast tremolo/vibrato effects and rapid S&H patterns

**S&H Timing Strategy:**
- **Internal LFO clocking:** Simple, everything synced to one rate
- **External clocking:** Independent control of sample rate vs. modulation speed
- **Audio rate clocking:** Creates digital-style artifacts and bit reduction

**Output Voltage Management:**
- **±5V outputs:** May need attenuation for modules expecting 0-5V
- **Triangle scaling:** Use attenuverters to control modulation depth
- **Square as gate:** Perfect voltage levels for most gate inputs

**Performance Techniques:**
- **Rate sweeps:** Dramatic builds by slowly increasing LFO speed
- **S&H source switching:** Change what's being sampled for different textures
- **Clock pattern variations:** Use different rhythmic clocks for evolving S&H patterns

---

## Why This Module Rocks

### **The Philosophy:**
LFO and Sample & Hold are the most fundamental modulation sources in synthesis. Pico LFO/S&H provides both in pure analog form with the space efficiency that makes it accessible to every rack size.

### **The Engineering:**
- **Full analog circuitry:** No digital artifacts or aliasing
- **AS1100CK2 IC:** Professional-grade S&H chip for stability and precision
- **Overvoltage protection:** Safe operation even with hot signals
- **Reverse power protection:** Won't damage if power is connected wrong

### **The Practical Benefits:**
- **Space efficient:** Two essential functions in just 3HP
- **Power efficient:** Only 13mA +12V, 10mA -12V
- **Immediately useful:** Every patch can benefit from these functions
- **No configuration:** Plug in and start modulating immediately
- **Visual feedback:** LED makes timing relationships clear

### **Perfect For:**
- **Every rack:** These are fundamental synthesis building blocks
- **Beginners:** Learn core modulation concepts with simple interface
- **Small cases:** Maximum utility in minimum space
- **Performers:** Reliable, tactile control without complexity
- **Producers:** Essential modulation covered efficiently

---

**Bottom Line:** Pico LFO/S&H proves that the most important modules are often the simplest ones. LFO + Sample & Hold in 3HP covers modulation needs that every synthesist has, every day.

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*