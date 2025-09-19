# 4ms SCM Plus - Guide

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

### **Static Outputs (Always Steady):**
- **x1:** Exact copy of input clock (never affected by slip/shuffle/skip)
- **x2:** Double speed, rock solid timing
- **x8:** 8x faster, steady timing (bottom output)

### **Shuffleable Outputs (Can Be Affected):**
- **S3:** 3x speed, can be slipped/shuffled/skipped
- **S4:** 4x speed, can be slipped/shuffled/skipped  
- **S5:** 5x speed, can be slipped/shuffled/skipped
- **S6:** 6x speed, can be slipped/shuffled/skipped
- **S8:** 8x speed shuffled version (separate from static x8)

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

### **Perfect Modulation Sources:**
- **DivKid Ochd:** Organic LFOs for natural slip/shuffle evolution - **Alternative:** Batumi, 2HP LFO
- **Make Noise Wogglebug:** Controlled chaos for rhythmic variation - **Alternative:** Turing Machine, Radio Music  
- **Mutable Marbles:** Musical randomness and probability - **Alternative:** Music Thing Turing Machine, Ornament & Crime
- **Expert Sleepers Disting:** Multi-function utility including LFOs, S&H, logic - **Alternative:** Qu-Bit Nebulae, Mutable Kinks

### **Essential Partners:**
- **Drum Modules:** Basimilus Iteritas, Plonk, sample players
- **Logic Modules:** For combining clock signals (AND, OR gates)
- **Sequencers:** Anything that accepts external clocking
- **Envelope Generators:** For shaping the timing pulses

### **Budget-Friendly Partners:**
- **2HP modules:** LFO, RND, Logic for basic modulation and pattern control
- **Doepfer A-100 series:** Basic utilities and logic modules at lower cost
- **Erica Synths Pico series:** Compact, affordable utilities and modulation
- **DIY options:** Befaco, Music Thing Modular kits for hands-on builders

### **Premium Integration:**
- **Make Noise ecosystem:** Wogglebug, Maths for complex modulation sources
- **Mutable Instruments:** Marbles, Stages for advanced pattern generation
- **Expert Sleepers:** Disting for multi-function utility processing
- **4ms Company:** Dual Looping Delay, Spectral Multiband Resonator for creative timing

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

**Bottom Line:** SCM Plus isn't just a clock multiplier - it's a **rhythmic performance processor** that transforms mechanical timing into musical timing through groove manipulation algorithms. Every patch teaches you something new about how human-feel rhythm really works.

---

*Visit [4ms Company](https://4mscompany.com/p.php?p=1050) for complete documentation and specifications*