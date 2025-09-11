# Mutable Instruments Marbles - Beginner's Guide

**The Intelligent Chaos Generator**

---

## Quick Start: Get Your First Random Sequence in 5 Minutes

**What is Marbles?** Think of it as a dice-rolling robot that learns your musical preferences. It generates random rhythms and melodies, but with intelligence - it can repeat good ideas, avoid bad ones, and gradually evolve patterns over time. It's chaos with musical taste.

### Your First Random Pattern
1. **Connect Marbles X1 output** → **Oscillator 1V/OCT input**
2. **Connect Marbles t2 output** → **Envelope generator TRIGGER input**
3. **Set RATE knob** to around 12 o'clock (120 BPM)
4. **Turn STEPS knob** clockwise to 2 o'clock (quantized to scales)
5. **Play with DEJA VU knob** - turn right to create repeating loops

**Congratulations!** You've just created an evolving random melody that can lock into memorable patterns!

---

## Essential Parameters (The Big 6)

### **1. RATE Knob (Master Clock)**
- **What it does:** Sets the master tempo for everything (internal clock)
- **Musical result:** 120 BPM at 12 o'clock - your main pulse
- **Range:** Super slow to very fast - covers all musical tempos
- **Pro tip:** Has V/Oct input - you can sequence the tempo changes!

### **2. DEJA VU Knob (The Memory)**
- **What it does:** Controls how much the module remembers and repeats
- **Left (7-12 o'clock):** Random to perfect loops  
- **Right (12-5 o'clock):** Perfect loops to shuffled variations
- **Sweet spot:** 11 o'clock for slowly evolving patterns
- **Magic moment:** At 12 o'clock exactly = perfect locked loop

### **3. STEPS Knob (Musical Shape)**
- **What it does:** Controls how "musical" the random voltages sound
- **Left of center:** Smooth, flowing random curves (great for modulation)
- **Center:** Traditional stepped random voltages
- **Right of center:** Progressively quantized to musical scales
- **Far right:** Only root notes and octaves (very musical)

### **4. SPREAD Knob (Voltage Distribution)**
- **What it does:** Controls how the random voltages are distributed
- **Far left:** Constant voltage (no randomness)
- **12 o'clock:** Bell curve distribution (most notes near center)
- **2 o'clock:** Equal probability across full range
- **Far right:** Only minimum and maximum values (random gates!)

### **5. BIAS Knob (High/Low Preference)**
- **What it does:** Skews random voltages toward high or low values
- **Left:** Prefers low voltages (bass notes if controlling pitch)
- **Center:** No preference (balanced)
- **Right:** Prefers high voltages (treble notes if controlling pitch)

### **6. t/X Section Buttons (DEJA VU targets)**
- **What they do:** Choose which parts are affected by DEJA VU memory
- **t button:** Rhythm memory (timing patterns repeat/evolve)
- **X button:** Voltage memory (melodies repeat/evolve)
- **Both/neither:** Different combinations create different behaviors

---

## Beginner Patch Ideas

### **Patch 1: Intelligent Random Melody**
```
[Marbles X1] ──1V/OCT──→ [Oscillator 1V/OCT]
[Marbles t2] ──TRIGGER──→ [Envelope Generator]
[Envelope] ──CV──→ [VCA]
```
**Visual:** t2 LED flashes with main beat, X1 voltage creates pitch changes
**Controls:** STEPS for musicality, DEJA VU for pattern memory, BIAS for high/low preference
**Sound:** Evolving melodies that find musical patterns and lock into memorable phrases

### **Patch 2: Polyrhythmic Percussion**
```
[Marbles t1] ──→ [Kick Drum Trigger]
[Marbles t2] ──→ [Snare Drum Trigger] 
[Marbles t3] ──→ [Hi-hat Trigger]
```
**Setup:** Press the button next to BIAS to cycle through rhythm algorithms
**Visual:** All three t LEDs flash in complex polyrhythmic patterns
**Controls:** BIAS changes rhythm density, JITTER adds humanization
**Sound:** Intelligent drum patterns that evolve from simple to complex

### **Patch 3: Evolving Modulation**
```
[Marbles X2] ──CV──→ [Filter Cutoff]
[Marbles X3] ──CV──→ [Oscillator PWM]
[Marbles Y] ──CV──→ [Marbles DEJA VU CV input] (self-modulation!)
```
**Setup:** Turn STEPS counter-clockwise for smooth modulation
**Visual:** X output LEDs show smooth voltage changes
**Controls:** SPREAD controls modulation range, Y output slowly evolves the memory
**Sound:** Organic, evolving timbral changes that never repeat exactly

### **Patch 4: External Sequence Processor**
```
[Your Sequencer CV] ──→ [Marbles SPREAD CV input]
[Your Sequencer Gate] ──→ [Marbles External Clock]
[Press External Processing button (bottom right)]
[Marbles X1/X2/X3] ──→ [Quantizer or directly to Oscillators]
```
**Visual:** External processing LED lights up, Marbles samples your sequence
**Controls:** DEJA VU creates loops/variations of your sequence, SPREAD/BIAS reshape it
**Sound:** Your sequence gets "Marbles-ized" - familiar but constantly surprising

---

## Common Use Cases

**🎲 **Intelligent Sequencing:** Random melodies that learn and repeat good ideas**
**🥁 **Polyrhythmic Drums:** Complex percussion patterns with multiple outputs**  
**🌊 **Organic Modulation:** Smooth random modulation that evolves over time**
**🔄 **Sequence Processing:** Transform existing sequences into variations**
**⏰ **Humanized Timing:** Add natural feel to rigid clock sources**
**🎵 **Generative Composition:** Create self-evolving musical structures**
**🎛️ **Performance Tool:** Real-time control over randomness and repetition**

---

## Beginner "Gotchas" 

### **Two Separate Sections**
- **Left side (t) = Rhythms/Timing** - outputs t1, t2, t3 are gates/triggers
- **Right side (X) = Voltages/Melodies** - outputs X1, X2, X3 are CV voltages
- **They work together but can be controlled independently**
- **Y output is bonus smooth random CV** - great for slow modulation

### **DEJA VU is the Secret Sauce**
- **12 o'clock = Perfect Loop** - module gets stuck repeating same pattern
- **11 o'clock = Slow Evolution** - patterns gradually change and develop
- **1 o'clock = Shuffle Mode** - same notes/rhythms in different orders
- **t/X buttons choose which sections are affected** by DEJA VU memory

### **STEPS Knob is Bi-Directional**
- **Left of center = Smooth** (for modulation, not melodies)
- **Right of center = Quantized** (for musical sequences)  
- **The further right, the more "musical"** it becomes
- **Far right = Only root notes** - very consonant but potentially boring

### **Scale Programming is Weird but Powerful**
- **You "teach" Marbles scales** by playing into it
- **Connect keyboard to SPREAD input** and External Clock input
- **Hold External Processing button** for 2 seconds, then play a scale
- **Most-played notes become most important** in the quantizer

### **Multiple Output Modes**
- **X outputs can follow panel settings** or react in different ways
- **Button on right controls output diversity** - outputs can be opposites
- **Green mode:** All outputs follow panel, **Red mode:** Outputs react differently
- **This creates harmonic relationships** between the three voltage outputs

---

## Next Steps

1. **Start with simple locked loops** - get DEJA VU working at 12 o'clock
2. **Learn the two sections separately** - master rhythm (t) then voltage (X)  
3. **Experiment with STEPS positioning** - smooth vs quantized is crucial
4. **Try external processing mode** - feed your existing sequences through Marbles
5. **Use Y output for meta-modulation** - patch it to other Marbles inputs

**Remember:** Marbles rewards patience and exploration. The best patches often emerge from happy accidents that you then lock in with DEJA VU!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Oscillators (any):** Marbles X outputs are perfect for creating random melodies
- **Drum Modules:** Marbles t outputs excel at triggering percussion in polyrhythmic patterns
- **Quantizers:** External quantizers can further shape Marbles' CV outputs musically
- **Envelopes/VCAs:** Essential for turning Marbles triggers into musical phrases

### **Next-Level Combinations:**  
- **Complex Oscillators (Cs-L, DPO):** Marbles can modulate multiple parameters simultaneously
- **Morphagene/Arbhar:** Marbles excels at triggering granular textures and sample playback
- **Sequencers:** Use Marbles to add controlled chaos to your existing sequences
- **Filters with multiple CV inputs:** Marbles' multiple outputs can create complex timbral evolution

### **Pro Tip:** Marbles shines as a **composition partner** - it suggests musical ideas you'd never think of yourself, then helps you develop them into full songs. It's like having a creative collaborator in your rack.

---

*Need the full technical manual? Find it at mutable-instruments.net/modules/marbles*