# 4ms SCM Plus - Beginner's Guide

**The Swiss Army Knife of Clock Manipulation**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is SCM Plus?** A clock multiplier that takes one clock signal and creates 8 different subdivisions with the ability to add shuffle, slip, skip beats, and rotate patterns. It's like having a whole rhythm section in 12HP.

### Your First Multiplied Clock
1. **Patch your sequencer/clock** → SCM Plus **Clock In**
2. **Leave all knobs at 12 o'clock** (starting position)
3. **Patch x1 output** → your sequencer clock input (1:1 passthrough)
4. **Patch x2 output** → trigger a hi-hat or percussion
5. **Patch S4 output** → trigger a different drum sound
6. **Start your sequence** - you should hear your original clock plus faster subdivisions

**Add Some Groove:**
1. **Turn Slip knob slightly right** - notice the S4 output gets ahead of the beat
2. **Turn Skip knob up** - some beats will drop out creating gaps
3. **Congratulations!** You're now making groovy, non-rigid timing

---

## Essential Parameters (The Big 5)

### **1. Rotate Knob + CV**
- **What it does:** Shifts which multiplication appears at each output jack
- **Musical result:** S6 can become S7, S4 can become S5, etc.
- **Pro tip:** Use this to "shift gears" in your patterns without repatching

### **2. Slip Knob + CV**
- **What it does:** Makes certain beats arrive "ahead of time"
- **Musical result:** Creates shuffle/swing feel, like a drummer rushing the beat
- **Range:** 0V-3.3V (knob attenuates CV input)

### **3. Shuffle Knob + CV** 
- **What it does:** Selects which beats are affected by the Slip parameter
- **Musical result:** Complex shuffle patterns - groups of 1, 2, 3 beats get slipped
- **Creative use:** Animating this creates evolving groove patterns

### **4. Skip Knob + CV**
- **What it does:** Drops beats out of an 8-beat measure
- **Musical result:** Creates breaks, stutters, and rhythmic interest
- **Pattern:** Based on lookup table - not random, but musically intelligent

### **5. Pulse Width Knob + CV**
- **What it does:** Controls how long each output pulse stays high
- **Musical result:** Short = snappy triggers, long = gate-like sustains
- **Range:** -5V to +5V (knob offsets CV input)

---

## Understanding the Outputs

### **Steady Outputs (Blue LEDs):**
- **x1:** Exact copy of input clock (never affected by slip/shuffle/skip)
- **x2:** Double speed, rock solid timing
- **x8:** 8x faster, perfect for fast hi-hats

### **Shuffled Outputs (Red LEDs):**
- **S3:** 3x speed, can be slipped/shuffled/skipped
- **S4:** 4x speed, can be slipped/shuffled/skipped  
- **S5:** 5x speed, can be slipped/shuffled/skipped
- **S6:** 6x speed, can be slipped/shuffled/skipped
- **S8:** 8x speed shuffled version (different from steady x8)

**Key Concept:** S outputs can "rag the beat" - they're the funky ones!

---

## Beginner Patch Ideas

### **Patch 1: Basic Drum Machine Groove**
- **Clock source** → SCM Plus Clock In
- **x1** → Kick drum trigger (stays on beat)
- **x2** → Snare on beats 2 & 4 (use AND logic or manual triggering)
- **S4** → Hi-hat (can shuffle and skip for groove)
- **Slip at 1 o'clock** for subtle shuffle
- **Skip at 10 o'clock** for occasional hi-hat dropouts

### **Patch 2: Evolving Polyrhythms**
- **S3** → Percussion voice 1 (3 against 4 feel)
- **S5** → Percussion voice 2 (5 against 4 feel) 
- **S6** → Arpeggiator clock (6/8 feel)
- **Modulate Rotate with slow LFO** → shifting relationships
- **Result:** Complex, evolving polyrhythmic textures

### **Patch 3: Breakbeat Generator**
- **Start with S4 and S6** triggering different drums
- **Skip at 2 o'clock** → creates rhythmic holes
- **Shuffle at various positions** → affects which beats slip
- **Modulate Skip with stepped random** → changing break patterns
- **Use Resync** → reset patterns at measure boundaries

---

## Advanced Features

### **4x Fast Button/Gate:**
- **What it does:** Multiplies all outputs by 4 (so x1 becomes x4, S3 becomes S12, etc.)
- **Use cases:** Instant tempo double, rolls and fills, high-energy sections
- **Gate input:** External control for breakdowns and builds

### **Mute Button/Gate:**
- **What it does:** Silences all outputs
- **Use cases:** Instant stop/start, breakdowns, performance control
- **Creative tip:** Gate with envelope for rhythmic muting effects

### **Resync Input:**
- **What it does:** Resets all slip/shuffle/skip counters to beat 1
- **Use cases:** Keeping complex patterns in sync with song structure
- **Patch tip:** Use downbeats from your sequencer to keep everything locked

### **Save Clock Feature:**
- **What it does:** Remembers last tempo when powered down
- **Use case:** Start sessions at the same tempo as your last jam

---

## Common Use Cases

### **Studio Integration:**
- **Drum Programming:** Add human feel to rigid sequences
- **Polyrhythmic Composition:** Layer different time signatures easily
- **Breakbeat Creation:** Generate complex, danceable rhythms

### **Live Performance:**
- **Groove Control:** One module controls the "feel" of your entire set
- **Dynamic Changes:** Mute, 4x Fast, and Skip for real-time manipulation
- **Sync Hub:** Central timing source for multiple sequencers/drum machines

---

## Pairs Well With

### **Essential Partners:**
- **Drum Modules:** Basimilus Iteritas, Plonk, sample players
- **Logic Modules:** For combining clock signals (AND, OR gates)
- **Sequencers:** Anything that accepts external clocking
- **Envelope Generators:** For shaping the timing pulses

### **Advanced Combinations:**
- **Quantizers:** Turn shuffled clocks into melodic sequences  
- **Probability Gates:** Add another layer of rhythmic variation
- **Sample & Hold:** Capture slip/shuffle values for repeatable grooves
- **Multiple/Buffered Multiple:** Split one SCM output to multiple destinations

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My shuffle isn't working!"**
- Only the S outputs (red LEDs) are affected by shuffle/slip/skip
- The x outputs (blue LEDs) are always steady
- **Solution:** Use S outputs for anything you want to groove

**"The skip patterns seem random!"**
- Skip uses musical lookup tables, not random dropping
- Based on 8-beat measures - some outputs are "first n beats" of the measure
- **Solution:** Experiment to learn the patterns, they're actually quite musical

**"I can't get x7 timing!"**
- There's no dedicated x7 output
- **Solution:** Use Rotate knob to shift S6 to become S7, or S8 to become S7

### **🎵 Pro Tips:**

**Master Clock Strategy:**
- Use x1 as your master clock reference (never affected by parameters)
- Feed this to your main sequencer for stable timing
- Use S outputs for rhythmic elements that need groove

**Modulation Sweet Spots:**
- **Slip:** Subtle amounts (10-20%) for natural shuffle
- **Skip:** 25-50% for interesting but not chaotic patterns  
- **Shuffle:** Slow modulation for evolving groove patterns
- **Rotate:** Stepped modulation for "gear changes"

**Performance Tricks:**
- **Save your favorite grooves:** Note knob positions that work well
- **Use CV to recall settings:** Store settings in precision adders
- **Chain multiple SCM Plus:** For even more complex polyrhythms

**Free Run Mode:**
- Internal jumper lets SCM Plus generate its own clock
- Perfect for standalone drum machine applications
- **Note:** This requires opening the module (advanced users only)

---

## Why This Module Rocks

### **The Philosophy:**
Most clock multipliers just divide mathematically. SCM Plus adds the "human" element - shuffle, rushing, skipping beats - that makes electronic music feel alive and groovy.

### **The Practical Benefits:**
- **All-in-one timing solution:** 8 different subdivisions from one input
- **Musical intelligence:** Skip patterns and shuffle algorithms designed by ear
- **Performance ready:** Immediate control over groove and timing feel
- **Expandable:** CV over everything means complex modulation possibilities

### **Perfect For:**
- **Electronic producers:** Add swing and groove to rigid sequences
- **Live performers:** Real-time control over rhythmic feel
- **Experimental musicians:** Polyrhythmic and complex timing explorations
- **Anyone wanting groove:** From subtle shuffle to radical beat manipulation

---

**Bottom Line:** SCM Plus turns mechanical timing into musical timing. It's not just about faster clocks - it's about adding the human elements of rhythm that make people want to dance.

---

*Visit [4ms Company](https://4mscompany.com/p.php?p=1050) for complete documentation and specifications*