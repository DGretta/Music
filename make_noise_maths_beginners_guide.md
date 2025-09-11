# Make Noise Maths - Beginner's Guide

**The Swiss Army Knife of Eurorack**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Maths?** Think of it as four powerful tools in one module: two envelope generators, two offset generators, and a mixer that can combine them all.

### Your First Envelope (Channel 1)
1. **Patch a trigger/gate** → Channel 1 **TRIG** input (top left)
2. **Turn Rise and Fall knobs** to 12 o'clock position  
3. **Patch Channel 1 Unity output** → your VCA CV input
4. **Trigger it!** You should see the LED light up and hear your envelope working

**Congratulations!** You just made Maths work as an envelope generator.

---

## Essential Parameters (The Big 4)

### **1. Rise Time** 
- **What it does:** Controls how fast the envelope goes UP
- **Musical result:** Attack time - fast = snappy drums, slow = swells
- **Range:** Instant to 25 minutes(!!)

### **2. Fall Time**
- **What it does:** Controls how fast the envelope goes DOWN  
- **Musical result:** Release/decay time - fast = plucks, slow = fade-outs
- **Range:** Instant to 25 minutes

### **3. Cycle Button**
- **What it does:** Makes the envelope repeat automatically = LFO
- **Musical result:** Press it and your envelope becomes a wobbling LFO
- **Try this:** Press cycle, turn Rise/Fall to different positions, patch to filter cutoff

### **4. Attenuverters (Center Knobs)**
- **What they do:** Control the strength and direction of each channel
- **12 o'clock = no effect**, **clockwise = positive**, **counter-clockwise = negative/inverted**

---

## Beginner Patch Ideas

### **Patch 1: Simple Envelope**
```
[Sequencer] ──GATE──→ [Maths Ch1 TRIG input - top left]
[Maths Ch1 UNITY output - bottom left] ──→ [VCA CV input]
```
**Visual:** You'll see the Ch1 Unity LED flash green when triggered
**Controls:** Rise = attack, Fall = release
**Sound:** Classic envelope - adjust Rise for punchy vs slow attack

### **Patch 2: Wobbling LFO** 
```
Press [Ch1 CYCLE button] - LED stays lit
[Maths Ch1 UNITY output] ──→ [Filter CUTOFF CV input]
```
**Visual:** Ch1 Unity LED pulses continuously green/red
**Controls:** Rise/Fall = LFO speed, Ch1 attenuverter = wobble depth
**Sound:** Filter sweeps - faster Rise/Fall = faster wobble

### **Patch 3: Offset Voltage (Transpose Helper)**
```
Nothing patched to Ch2 Signal Input (generates +10V reference)
Turn Ch2 attenuverter (center knob) clockwise
[Ch2 Variable Output] ──→ [Oscillator V/OCT input] (alongside main sequence)
```
**Visual:** Ch2 Variable LED shows steady green (positive offset)
**Result:** Transposes your sequence up (clockwise) or down (counter-clockwise)
**Tip:** Great for instant octave jumps or chord inversions

### **Patch 4: Complex Envelope Mix**
```
[Gate Source] ──→ [Mult/Splitter] ──┬──→ [Ch1 TRIG] (Rise=fast, Fall=medium)
                                   └──→ [Ch4 TRIG] (Rise=slow, Fall=fast)
[SUM Output] ──→ [VCA CV or Filter CV]
```
**Visual:** Both Ch1 & Ch4 Unity LEDs flash, SUM LED shows combined result
**Controls:** Each channel's attenuverter shapes the mix
**Sound:** Creates "shark fin" or multi-stage envelopes automatically

---

## Common Use Cases

**🎵 As Envelope Generator:** Channels 1 & 4 for shaping VCA, filter, or pitch
**🌊 As LFO:** Press Cycle button, use for filter sweeps, tremolo, pitch wobbles  
**⚡ As Slew Limiter:** Smooths out jumpy CV - patch CV through Signal input
**🔀 As Mixer:** Use SUM output to combine up to 4 CV sources
**📈 As Offset Generator:** Channels 2 & 3 add DC voltage to shift other signals up/down

---

## Beginner "Gotchas" 

### **Signal Input vs Trigger Input**
- **Signal Input:** Envelope follows the gate length (sustains while gate is high)  
- **Trigger Input:** Envelope always does full Attack→Decay, ignoring gate length
- **Most beginners want Signal Input** for typical ADSR behavior

### **The Normalization Thing**
- **Variable outputs** (1,2,3,4) are automatically mixed into SUM/OR outputs
- **If you patch a cable** into variable output, it removes that signal from the mix
- **Unity outputs** (Ch1 & 4) are separate and don't affect the mix

### **Attenuverter Confusion**
- **12 o'clock = OFF** (not maximum!)
- **Clockwise from 12 = positive amount**
- **Counter-clockwise from 12 = negative/inverted amount**

### **It's Not Broken, It's Math-ing**
- Maths can do **WAY** more than envelopes - don't be overwhelmed
- Start simple: use Ch1 & Ch4 as envelopes, ignore the rest initially
- The manual has 32 patch ideas - try them once you're comfortable

---

## Next Steps

1. **Master basic envelopes first** - get comfortable with Rise, Fall, and the two trigger types
2. **Try the Cycle button** - turn your envelopes into LFOs  
3. **Experiment with SUM output** - mix different channels for complex modulation
4. **Explore the curve knob** (Vari-Response) - changes envelope shapes from slow curves to lightning fast snaps

**Remember:** Maths rewards experimentation. If something sounds interesting, it probably is!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **VCA (2HP VCA, Intellijel uVCA):** Maths envelopes control volume shaping
- **Low Pass Gate (Optomix, LxD):** Maths into LPG = classic West Coast plucks  
- **Mult/Splitter:** Essential for sending one Maths output to multiple destinations
- **Filter (MMG, SEM, Ripples):** Maths LFOs create classic filter sweeps

### **Next-Level Combinations:**
- **Function (Make Noise):** Two Functions + Maths = envelope powerhouse
- **Pressure Points:** Touch gates trigger Maths for expressive playing
- **DPO/Complex Oscillator:** Maths can modulate both pitch and timbre simultaneously
- **Clock Divider:** Use Maths EOC/EOR outputs to create polyrhythmic triggers

### **Pro Tip:** Maths works great as your **first modulation module** - it can replace dedicated LFOs, envelopes, and mixers until your rack grows larger.

---

*Need the full technical manual? Find it at makenoisemusic.com*