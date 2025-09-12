# Mutable Instruments Marbles - Beginner's Guide
*The Intelligent Chaos Generator with Musical Memory*

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

## Progressive Patch Examples

### **Patch 1: First Steps - Musical Random Melodies**
```
                    ┌─────────────────────┐
                    │    Mutable Marbles  │
                    │                     │
     Master Clock──▶│ RATE    ┌─────────┐ │
                    │  ●      │ DEJA VU │ │
                    │         │   ●     │ │
                    │ STEPS   │ SPREAD  │ │
                    │   ●     │   ●     │ │
                    │         └─────────┘ │
                    │                     │
                    │ X1 ○────────────────┼─── CV (Blue)
                    │    ║                │     ║
                    │ t2 ○────────────────┼─── Gate (Yellow)
                    │    ║                │     ║
                    └────║────────────────┘     ▼
                         ▼                ┌──────────────┐
                    ┌─────────────┐       │  Oscillator  │
                    │  Envelope   │       │              │
                    │ Generator   │       │ 1V/Oct    ◀─┼─── From X1
                    │             │       │              │
                    │ Trigger  ◀──┼───────┼─ Audio Out ○ │
                    │             │       │              │
                    │ Output   ○  │       └────┬─────────┘
                    └────┬────────┘            ║ Audio (Red)
                         ║ CV (Blue)           ▼
                         ▼                ┌─────────────┐
                    ┌─────────────┐       │     VCA     │
                    │     VCA     │       │             │
                    │             │       │ Audio In ◀──┼─── From Oscillator
                    │ CV Input ◀──┼───────┼─             │
                    │             │       │ Audio Out○──┼─── Final Output
                    │ Audio Out○──┼───────┼─             │
                    └─────────────┘       └─────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|-------------------|
| Marbles X1 → Oscillator 1V/Oct | CV (Blue) | **Random pitch control** | **Creates evolving melodies** |
| Marbles t2 → Envelope Trigger | Gate (Yellow) | **Rhythmic triggering** | **Main beat with variations** |
| Oscillator Audio → VCA Audio | Audio (Red) | **Signal path** | **Complete voice chain** |
| Envelope Out → VCA CV | CV (Blue) | **Amplitude shaping** | **Musical note envelopes** |

**Module Settings:**
- **Marbles RATE:** 12 o'clock (120 BPM)
- **Marbles STEPS:** 2 o'clock (musical quantization)
- **Marbles DEJA VU:** 11 o'clock (slow evolution)
- **Marbles SPREAD:** 12 o'clock (balanced distribution)

**Learning Objectives:**
- Experience intelligent randomness vs. pure chaos
- Understand DEJA VU memory system
- Learn musical quantization with STEPS
- Discover pattern evolution and repetition

**Visual Feedback:**
- **t2 LED:** Flashes with main rhythmic pulse
- **X1 voltage display:** Shows pitch changes in real-time
- **DEJA VU influence:** Watch patterns slowly lock and evolve
- **Result:** Musical sequences that find memorable phrases and develop them

### **Patch 2: Intermediate - Phase 2 Integration with Ochd**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   DivKid Ochd      │      │    Mutable Marbles  │
   │    (Phase 2)       │      │     (Phase 2)       │
   │                    │      │                     │
   │ LFO 1 ○────────────┼──────┼─▶ RATE CV           │
   │       ║            │      │                     │
   │ LFO 3 ○────────────┼──────┼─▶ SPREAD CV         │
   │       ║            │      │                     │
   │ LFO 7 ○────────────┼──────┼─▶ BIAS CV           │
   │       ║            │      │                     │
   │       ║            │      │ X1 ○────────────────┼─── CV (Blue)
   │       ║            │      │ X2 ○────────────────┼─── CV (Blue)
   │       ║            │      │ t1 ○────────────────┼─── Gate (Yellow)
   │       ║            │      │ Y  ○────────────────┼─── CV (Blue)
   └───────║────────────┘      └─────────────────────┘
           ║                           ║      ║    ║    ║
   CV (Blue)║                   CV (Blue)║      ║    ║    ║
           ▼                           ║      ║    ║    ║
   ┌─────────────┐                    ▼      ▼    ▼    ▼
   │   Filter    │           ┌──────────────────────────┐
   │             │           │    Complex Oscillator    │
   │ Cutoff CV◀──┼───────────┼─ 1V/Oct    ◀─ X1 Output │
   │             │           │ FM Index   ◀─ X2 Output │
   │ Audio In ◀──┼───────────┼─ Sync       ◀─ t1 Output│
   │             │           │ Timbre     ◀─ Y Output  │
   │ Audio Out○──┼───────────┼─                        │
   └─────────────┘           │ Audio Out ○─────────────┼─── Final Output
                             └──────────────────────────┘
```

| Module | Parameter | Source | Purpose | Phase 2 Integration |
|--------|-----------|--------|---------|-------------------|
| **Marbles** | Rate CV | Ochd LFO 1 | **Organic tempo variations** | **Breathing AI rhythm** |
| **Marbles** | Spread CV | Ochd LFO 3 | **Evolving voltage distribution** | **Organic pattern character** |
| **Marbles** | Bias CV | Ochd LFO 7 | **Shifting high/low preference** | **Organic tonal movement** |
| **Oscillator** | 1V/Oct | Marbles X1 | **AI-controlled pitch** | **Musical artificial intelligence** |
| **Filter** | Cutoff CV | Ochd LFO 1 | **Organic filter movement** | **Breathing spectral evolution** |

**Module Settings:**
- **Ochd:** All LFOs at different rates for complex organic modulation
- **Marbles STEPS:** 2 o'clock (musical quantization for harmonic content)
- **Marbles DEJA VU:** 10 o'clock (slow learning with organic influences)

**Learning Objectives:**
- **Phase 2 module integration:** Ochd and Marbles working together
- **Organic AI music:** Combining breathing modulation with learning intelligence
- **Multi-parameter modulation:** Multiple CV sources controlling different aspects
- **System-level thinking:** How modules enhance each other's capabilities

### **Patch 3: Advanced - Polyrhythmic Percussion Network**
```
                    ┌─────────────────────┐
                    │    Mutable Marbles  │
                    │                     │
     Clock Source──▶│ RATE    ┌─────────┐ │
                    │  ●      │ BIAS ●  │ │
                    │         │ JITTER ●│ │
                    │ STEPS   │ SPREAD  │ │
                    │   ●     │   ●     │ │
                    │         └─────────┘ │
                    │ Algorithm: Red      │
                    │                     │
                    │ t1 ○─────────────────┼─── Gate (Yellow)
                    │ t2 ○─────────────────┼─── Gate (Yellow)
                    │ t3 ○─────────────────┼─── Gate (Yellow)
                    │ Y  ○─────────────────┼─── CV (Blue)
                    │    ╚══════════════╗  │      ║
                    │        DEJA VU CV◀┼──┼──────╚═══ Self-Modulation
                    └─────────────────────┘
                             ║      ║      ║
                   Gate       ▼      ▼      ▼    
                (Yellow) ┌─────────┐ ┌─────┐ ┌─────────┐ 
                        │  Kick   │ │Snare│ │ Hi-hat  │
                        │  Drum   │ │Drum │ │  Drum   │
                        │         │ │     │ │         │
                        │Trig  ◀──┼─│Trig◀┼─│Trig  ◀─ │
                        │         │ │     │ │         │
                        │Audio ○  │ │Audio│ │Audio ○  │
                        └────┬────┘ └──┬──┘ └────┬────┘
                             ║         ║         ║
                        Audio║    Audio║    Audio║
                        (Red)║   (Red) ║   (Red) ║
                             ▼         ▼         ▼
                            ┌───────────────────────┐
                            │       Mixer           │
                            │ Ch1 ◀─────────────────┼─── Kick
                            │ Ch2 ◀─────────────────┼─── Snare
                            │ Ch3 ◀─────────────────┼─── Hi-hat
                            │ Mix Out ○─────────────┼─── Final Drum Mix
                            └───────────────────────┘
```

| Connection | Cable Type | Purpose | Musical Function |
|------------|------------|---------|-----------------|
| Marbles t1 → Kick Trigger | Gate (Yellow) | **Main beat generator** | **Foundational rhythm** |
| Marbles t2 → Snare Trigger | Gate (Yellow) | **Secondary rhythm** | **Syncopated patterns** |
| Marbles t3 → Hihat Trigger | Gate (Yellow) | **Tertiary rhythm** | **Complex polyrhythms** |
| Marbles Y → Marbles DEJA VU CV | CV (Blue) | **Self-modulation** | **Evolving memory patterns** |

**Module Settings:**
- **Marbles Algorithm:** Red mode (complex polyrhythms)
- **Marbles BIAS:** 2 o'clock (denser rhythms)
- **Marbles JITTER:** 10 o'clock (subtle humanization)
- **Marbles DEJA VU:** Controlled by Y output (self-evolving)

**Learning Objectives:**
- Master multiple trigger outputs simultaneously
- Understand rhythm algorithm modes
- Experience polyrhythmic relationships
- Learn self-modulation techniques

---

## Common Use Cases

**🎲 **Intelligent Sequencing:** Random melodies that learn and repeat good ideas**
**🥁 **Polyrhythmic Drums:** Complex percussion patterns with multiple outputs**  
**🌊 **Organic Modulation:** Smooth random modulation that evolves over time**
**🔄 **Sequence Processing:** Transform existing sequences into variations**
**⏰ **Humanized Timing:** Add natural feel to rigid clock sources**
**🎵 **Generative Composition:** Create self-evolving musical structures**
**🎛️ **Performance Tool:** Real-time control over randomness and repetition**
**🤖 **AI Music Partner:** Collaborative intelligence that learns your musical preferences**

---

## Phase 2 Cross-Reference Learning Path

### **Essential Phase 2 Progressions:**
1. **Start here** with basic intelligent randomness and DEJA VU concepts
2. **Add organic breathing** with DivKid Ochd for natural rhythm variations (see Ochd guide)
3. **Introduce controlled chaos** with Make Noise Wogglebug for unpredictable elements (see Wogglebug guide)
4. **Add mathematical structure** with 4ms RCD v2 for polyrhythmic precision (see RCD guide)
5. **Process everything** with Cre8audio Function Junction for refined modulation (see Function Junction guide)
6. **Build complete AI systems** using feedback and cross-module learning networks

### **Phase 2 Integration Strategies:**

**With DivKid Ochd:**
- **Organic AI learning:** Ochd's breathing rhythms teach Marbles natural timing
- **Rate modulation:** LFO 1 → Marbles Rate CV for organic tempo breathing
- **Character evolution:** LFO 3/7 → Spread/Bias for evolving pattern character

**With Make Noise Wogglebug:**
- **Controlled chaos:** Wogglebug randomness + Marbles intelligence = musical chaos
- **Stepped sequences:** Wogglebug Stepped + Marbles quantization = evolving melodies  
- **Chaos learning:** Marbles learns to make Wogglebug output more musical over time

**With 4ms RCD v2:**
- **Polyrhythmic intelligence:** RCD divisions trigger Marbles at mathematical ratios
- **Precise timing:** RCD clocks provide structured timing for Marbles to learn from
- **Mathematical evolution:** Marbles learns musical relationships within mathematical structures

**With Cre8audio Function Junction:**
- **Modulation processing:** Function Junction shapes Marbles outputs into musical envelopes
- **Learning feedback:** Function Junction triggers feed back to teach Marbles timing
- **Multi-stage AI:** Marbles generates, Function Junction refines and processes

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

---

## Why This Module Rocks

### **The Philosophy:**
Marbles represents a revolutionary approach to musical randomness - **artificial intelligence applied to music creation**. Unlike pure random generators, Marbles develops musical taste and preference over time, learning what sounds good and gradually becoming a more musical collaborator. It's not just generating patterns - it's developing musical intelligence.

### **Perfect For:**
- **Electronic producers** seeking intelligent, evolving sequences that never get boring
- **Ambient musicians** creating long-form generative compositions with slow development
- **Live performers** who want an AI collaborator that responds to musical context
- **Experimental composers** exploring machine learning in musical composition
- **Phase 2 system builders** creating multi-module AI musical ecosystems

### **The Learning Experience:**
Using Marbles teaches you about your own musical preferences by reflecting them back to you in new forms. As the module learns what you find musical, you discover patterns in your own taste that you might never have consciously recognized. It's a mirror for musical creativity.

---

**Bottom Line:** Marbles isn't just a random generator - it's **artificial musical intelligence** that learns, remembers, and evolves. It transforms chaotic randomness into intelligent musical patterns, creating a collaborative relationship between human creativity and machine learning. Once you experience music that learns and grows with you, static sequences feel primitive.

---

*Visit [Mutable Instruments](https://mutable-instruments.net/modules/marbles/) for complete documentation, firmware updates, and the open-source code that makes the magic possible.*