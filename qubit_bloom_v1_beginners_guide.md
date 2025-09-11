# Qu-Bit Bloom V1 - Beginner's Guide

**The Fractal Sequencing Garden**

---

## Quick Start: Get Your First Evolving Sequence in 5 Minutes

**What is Bloom?** Think of it as a sequencer that grows like a living tree. You plant a simple "trunk" sequence, and Bloom uses fractal algorithms to grow infinite "branches" - variations that are related but never quite the same. It's like having a composer that improvises endlessly on your musical ideas.

### Your First Growing Sequence
1. **Connect clock** → **CLOCK input** (or use internal tempo with RATE knob)
2. **Connect Channel A outputs** → **CV to oscillator V/OCT**, **GATE to envelope**
3. **Press CHANNEL button** until Channel A LED (blue) lights up
4. **Turn LENGTH encoder** to set 8 steps
5. **Enter some notes** by turning NOTE encoder while pressing step buttons
6. **Turn BRANCH knob slowly** and watch your sequence evolve!

**Congratulations!** You've just planted your first musical tree and watched it grow branches!

---

## Essential Parameters (The Tree Growing Kit)

### **1. TRUNK Controls - Your Root Sequence**
- **LENGTH:** Sets how many steps in your base sequence (1-32 steps)
- **NOTE Encoder:** Programs the pitch for each step when editing
- **GATE Button:** Sets gate on/off for each step
- **Root Sequence:** Your fundamental musical idea that everything grows from

### **2. BRANCH Knob - The Magic Growth Control**
- **What it does:** Creates variations of your trunk sequence using fractal algorithms
- **Musical result:** Each branch position generates a complete new variation
- **Range:** Infinite positions = infinite sequence variations
- **Visual feedback:** RGB LEDs show which branch you're exploring

### **3. PATH Knob - Navigation Through the Tree**
- **What it does:** Determines how you move through all the generated branch sequences
- **Musical result:** Different paths create different ways of combining variations
- **Think of it as:** Choosing which route you take through the musical tree
- **Interaction:** Works with Branch to create complex sequence evolution

### **4. MUTATION Control - Controlled Chaos**
- **What it does:** Adds random variation to notes in the current sequence
- **0% (CCW):** Plays original notes exactly
- **100% (CW):** Complete random note selection
- **Musical result:** Introduces controlled randomness while maintaining structure
- **Pro tip:** Sweet spot around 25-40% for musical surprise without chaos

### **5. RATE Knob - Internal Tempo**
- **What it does:** Sets internal clock speed (5 seconds to 10ms per step)
- **Special feature:** At fully CCW position, automatically uses external clock
- **Musical result:** Complete tempo control from glacial to frantic
- **Performance tip:** Great for live tempo manipulation and smooth clock switching

### **6. PATTERN System - Memory Bank**
- **8 pattern slots:** Store and recall complete sequences
- **SHIFT + encoder:** Select pattern slot
- **SHIFT + click:** Load pattern
- **SHIFT + hold:** Save current sequence (3 seconds)
- **Visual:** LED pairs show selected pattern

---

## Beginner Patch Ideas

### **Patch 1: Simple Evolving Melody**
```
[Bloom CHANNEL A CV] ──→ [Oscillator V/OCT]
[Bloom CHANNEL A GATE] ──→ [Envelope GATE input]
[External Clock] ──→ [Bloom CLOCK input]
```
**Setup:** Program 8-note sequence, turn BRANCH slowly during playback
**Visual:** Blue LEDs show Channel A activity, colors change with branches
**Result:** Your melody evolves continuously while staying musically related
**Controls:** PATH changes how variations connect, MUTATION adds controlled chaos

### **Patch 2: Dual Channel Polyrhythm**
```
[Bloom CHANNEL A] ──→ [Oscillator 1] (Length: 8 steps)
[Bloom CHANNEL B] ──→ [Oscillator 2] (Length: 5 steps)
[Master Clock] ──→ [Bloom CLOCK input]
```
**Setup:** Different lengths create polyrhythms, different branches = evolving counterpoint
**Visual:** Blue and green LEDs show independent channel activity
**Result:** Complex polyrhythmic sequences that phase in and out
**Pro tip:** Use same root note but different octaves for harmonic interest

### **Patch 3: Rhythmic Branch Control**
```
[Bloom CHANNEL A GATE] ──→ [Drum Module TRIG]
[Slow LFO] ──→ [Bloom BRANCH CV input]
[External Clock] ──→ [Bloom CLOCK input]
```
**Setup:** Use only gates for drum patterns, automate branch exploration
**Visual:** Watch LED colors cycle as LFO explores different branches
**Result:** Drum patterns that automatically evolve and return to familiar territory
**Variation:** Use random CV for more chaotic branch exploration

### **Patch 4: Melodic Tree Farming**
```
[Bloom CHANNEL A CV] ──→ [Quantizer] ──→ [Oscillator]
[Bloom CHANNEL A GATE] ──→ [MATHS Channel 1 TRIG]
[MATHS Channel 1 Unity] ──→ [VCA CV input]
```
**Setup:** Quantizer ensures musical notes, various scales available internally
**Controls:** Use SCALE setting (SHIFT + encoder) for different musical flavors
**Result:** Always-musical evolving sequences with proper envelope shaping
**Scales available:** Major, Minor, Whole Tone, Pentatonic variants

---

## Common Use Cases

**🌱 **Melodic Evolution:** Transform simple melodies into complex evolving sequences**
**🥁 **Rhythmic Variation:** Create drum patterns that grow and change organically**
**🎹 **Live Performance:** Real-time sequence manipulation with Branch and Path controls**
**🌊 **Ambient Textures:** Slow evolution with high mutation for organic soundscapes**
**🎵 **Compositional Tool:** Generate variations on musical ideas for inspiration**
**🔄 **Polyrhythmic Sequences:** Two channels with different lengths create complex patterns**
**📚 **Pattern Bank:** Store 8 complete sequence variations for recall**
**⏰ **Tempo Flexibility:** Internal clock or external sync with smooth transitions**

---

## Beginner "Gotchas"

### **Channel Selection Confusion**
- **Two independent channels** with separate sequences and controls
- **Press CHANNEL button** to switch between A (blue) and B (green)
- **All encoders affect the selected channel** - check which LED is lit!
- **Each channel remembers its own:** length, notes, gates, branch/path positions
- **Pro tip:** Start with just Channel A until you understand the concept

### **Branch vs Path Misunderstanding**
- **BRANCH** creates the variations (different versions of your sequence)
- **PATH** determines how you navigate through the variations
- **Same branch, different path** = different way through the same variation set
- **Different branch, same path** = completely different variations
- **Think of it:** Branch = which tree you're in, Path = which route you take

### **Fractal Generation is CPU Intensive**
- **Turning BRANCH knob** regenerates entire fractal tree - expect brief pauses
- **LEDs may flicker** during generation - this is normal
- **Complex sequences take longer** to generate than simple ones
- **Be patient** - the algorithm is doing complex mathematical work

### **Pattern Save/Load Workflow**
- **Must hold SHIFT** for all pattern operations
- **SHIFT + turn encoder** = select pattern slot
- **SHIFT + click** = load (instant)
- **SHIFT + hold 3 seconds** = save (wait for confirmation)
- **Easy to accidentally load** when you meant to save - be deliberate!

### **Scale Quantization Behavior**
- **Scales apply to note entry** and mutation, not existing notes
- **Changing scale doesn't transpose** existing sequences
- **Unquantized mode** allows free voltage control
- **Limited scale selection** in V1 - mostly standard Western scales

---

## Next Steps

1. **Master trunk programming first** - learn to input notes and gates confidently
2. **Explore branches methodically** - try different branch positions with same sequence
3. **Understand path behavior** - see how path changes the journey through variations
4. **Experiment with mutation** - find your sweet spot between order and chaos
5. **Try dual channels** - create polyrhythms and harmonic relationships
6. **Practice pattern management** - build a library of interesting base sequences

**Remember:** Bloom rewards musical input - boring sequences create boring variations, but interesting trunks bloom into magnificent trees!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Quantizers (Scales, Quantermain):** Ensure musical results even with high mutation
- **Clock Dividers (4ms SCM, Pamela's):** Create complex timing relationships between channels
- **Envelope Generators (Maths, Function):** Shape the gates into proper musical envelopes
- **VCAs (Veils, 2HP VCA):** Control dynamics and create expressive sequences

### **Next-Level Combinations:**
- **Marbles:** Random CV to automate branch/path exploration for generative patches
- **Ornament & Crime:** Advanced quantization and scale options V1 lacks
- **Pressure Points:** Touch control of branch positions for expressive performance
- **Clock multipliers:** Use different clock rates per channel for complex polyrhythms

### **Advanced Integration:**
- **Chord:** Harmonize Bloom's evolving melodies with related chord progressions
- **Arbhar:** Process Bloom's sequences through granular synthesis for textural evolution
- **Function/Maths:** Use Bloom gates to trigger complex envelope shapes
- **Filters with CV:** Use Channel B to modulate filter cutoff while Channel A plays melody

### **Pro Tip:** Bloom excels as both a **primary sequencer** and a **variation generator**. Try using it to create variations on sequences from other modules, or let it generate ideas you then program into more traditional step sequencers.

---

*Need the full technical manual? Visit qubitelectronix.com for complete documentation*