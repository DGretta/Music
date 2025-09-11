# DivKid Ochd + Ochd Expander - Beginner's Guide

**The Ultimate 8HP Modulation Powerhouse**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Ochd?** Eight analogue triangle LFOs in 4HP, deliberately NOT synced, running from fast (top) to slow (bottom). Think of it as "organic drift" - musical phasing that breathes life into static patches.

### Your First Modulation (Ochd Alone)
1. **Turn Rate knob** to 12 o'clock (vibrato speed)
2. **Patch LFO 1 (top output)** → your filter cutoff
3. **Patch LFO 8 (bottom output)** → your VCA CV
4. **Play a note** - you should hear fast filter movement with slow volume changes

**With the Expander (if you have it):**
1. **Connect the two ribbon cables** from Ochd to Expander (red stripe down on expander side)
2. **Patch a Full Wave Rectifier output** → your oscillator pitch
3. **Patch a DAC output** → another parameter
4. **Watch the magic happen** - you now have 24 modulation sources!

---

## Essential Parameters (The Big 3)

### **1. Rate Knob (Ochd)**
- **What it does:** Controls speed of ALL 8 LFOs simultaneously
- **Musical result:** From 160Hz (audio rate) down to 25-minute cycles
- **Sweet spot:** 12 o'clock = vibrato/tremolo speeds (3-7Hz)

### **2. CV Input + Attenuverter (Ochd)**
- **What it does:** External control over Rate, can also create waveshaping
- **Musical result:** Positive CV = faster LFOs, Negative CV = stalls/holds LFOs
- **Pro tip:** Patch an LFO output back into CV input for feedback waveshaping!

### **3. Expander Sections (If you have the Expander)**
- **Section 1:** Full Wave Rectifiers - unipolar, double-speed versions of LFOs 1,3,5,7
- **Section 2:** Min/Max Logic - combines LFOs 2+3 and 6+7 for complex shapes
- **Section 3:** Cascading Triggers - rhythmic triggers from the left-side LFOs
- **Section 4:** 4-Bit DACs - stepped random voltages ("slow noise")

---

## Beginner Patch Ideas

### **Patch 1: Organic Evolution (Ochd Only)**
- **LFO 1** → Filter Cutoff (fast movement)
- **LFO 4** → Oscillator FM Amount (medium movement) 
- **LFO 8** → VCA CV or Reverb Send (slow movement)
- **Rate at 2 o'clock** for active but musical movement
- **Result:** Your patch will organically shift and breathe

### **Patch 2: Unipolar Magic (With Expander)**
- **Full Wave Rect 1** → Oscillator 1V/Oct (pitch modulation that always goes up)
- **Full Wave Rect 3** → Filter Cutoff (only opens filter, never closes)
- **DAC Output A** → Delay Time (stepped random delays)
- **Min Output (2+3)** → VCA CV (smooth dynamics)
- **Result:** Positive-only modulation with stepped randomness

### **Patch 3: Rhythmic Chaos (Focus on Triggers)**
- **Trigger 1** → Kick Drum
- **Trigger 2** → Snare (cascades from Trigger 1)
- **Trigger 3** → Hi-Hat (cascades from Trigger 2)
- **DAC B** → Kick Pitch
- **Leave some trigger inputs unpatched** for cascading magic
- **Result:** Organic, ever-changing rhythmic patterns

---

## Common Use Cases

### **Studio Integration:**
- **Ambient/Generative:** Use slower LFOs (5-8) for glacial parameter changes
- **Techno/Dance:** Use faster LFOs (1-4) for rhythmic filter sweeps and vibrato
- **Experimental:** Patch outputs back into CV input for complex waveshaping

### **Live Performance:**
- **One knob control:** Rate knob affects your entire modulation ecosystem
- **Predictable chaos:** Not random, but not rigidly synced either
- **Expander adds variety:** 24 total outputs means endless modulation without menu diving

---

## Pairs Well With

### **Essential Partners:**
- **VCAs:** Multiple VCAs let you scale and mix the LFOs
- **Quantizers:** Turn LFO outputs into musical scales
- **Sample & Holds:** Freeze interesting LFO values
- **Comparators:** Convert triangles to gates/triggers

### **Expander Synergies:**
- **Modules expecting unipolar CV:** Full Wave Rectifiers provide 0-5V instead of ±5V
- **Clock-hungry modules:** Use cascading triggers as organic timing
- **Anything that likes stepped voltages:** DAC outputs are perfect for pitch sequences

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"Why isn't my modulation in sync with my sequence?"**
- The LFOs are deliberately NOT synced - this is the point! They're "tuned by ear" for musical relationships
- **Solution:** Embrace the organic drift, or use a different LFO module if you need strict sync

**"The modulation is too extreme!"**
- Ochd outputs ±5V (10Vpp) which is a lot for some parameters
- **Solution:** Use attenuators, or mix with other signals to tame the movement

**"I can't get unipolar modulation!"** (Without Expander)
- Ochd outputs are bipolar (positive and negative voltages)
- **Solution:** Use offset modules, or get the Expander for built-in Full Wave Rectifiers

### **🎵 Pro Tips:**

**Track & Hold Magic:**
- Patch a gate signal to CV input, turn attenuverter fully left
- All LFOs freeze at their current values when gate is high
- Creates rhythmic "stuttering" of your modulation

**Feedback Waveshaping:**
- Patch any LFO output back into the CV input
- Adjust attenuverter to taste
- Creates exponential curves, odd squares, stepped waveforms

**Expander Cascading:**
- Trigger inputs are normalled - unpatched inputs cascade from previous trigger
- Start with just one trigger patched, let the others cascade naturally
- Creates organic polyrhythms

---

## Why This Module Rocks

### **The Philosophy:**
DivKid wanted something to "keep patches organically drifting and moving" rather than rigid, synced modulation. Richard Devine called it "the most organic little modulator ever" - that says it all!

### **The Practical Benefits:**
- **Small footprint, huge impact:** 8HP total for 24 modulation sources
- **One-knob performance:** Rate controls your entire modulation ecosystem
- **No menu diving:** Everything is immediate and patchable
- **Expander magic:** 8+4^2 = mathematical modulation expansion

### **Perfect For:**
- **Beginners:** Simple concept, immediate results, teaches modulation fundamentals
- **Pros:** Adds movement "without hogging a lot of space" in larger systems
- **Live performers:** Predictable but never boring modulation
- **Sound designers:** "Slow noise" DAC outputs for stepped randomness

---

**Bottom Line:** Ochd + Expander gives you an entire modulation ecosystem in just 8HP. It's not about precision - it's about bringing your patches to life with organic, musical movement that never gets boring.

---

*Visit [DivKid's website](https://divkidvideo.com/ochd-the-second-divkid-eurorack-module/) and [Instruo](https://www.instruomodular.com/product/ochd/) for complete documentation*