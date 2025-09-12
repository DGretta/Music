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

## Beginner Patch Ideas

### **Patch 1: First Steps - Musical Random Melodies**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Marbles   │───▶│ Oscillator   │───▶│ Envelope    │
│ X1 Output   │    │ 1V/Oct Input │    │ Generator   │
│             │    │              │    │             │
│ t2 Output ──┼───▶│              │    │ Trigger In ◀┼─── [Audio Path]
└─────────────┘    │ Audio Out ───┼───▶│             │
                   └──────────────┘    │ Output  ────┼───▶ ┌─────────────┐
                                       └─────────────┘     │     VCA     │
                                                           │ Audio In    │
┌─────────────┐                                           │             │
│   Marbles   │                                           │ CV In   ◀───┼─── [From Env Out]
│ Settings:   │                                           │             │
│ RATE: 12    │                                           │ Audio Out ──┼─── To Mixer
│ o'clock     │                                           └─────────────┘
│             │
│ STEPS: 2    │
│ o'clock     │
│             │
│ DEJA VU:    │
│ 11 o'clock  │
└─────────────┘
```

| Connection | Cable Type | Purpose | Notes |
|------------|------------|---------|-------|
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

### **Patch 2: Intermediate - Polyrhythmic Percussion Network**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Marbles   │───▶│ Kick Drum    │───▶│   Mixer     │
│ t1 Output   │    │ Trigger In   │    │ Audio In 1  │
│             │    │              │    │             │
│ t2 Output ──┼───▶│              │    │ Audio In 2 ◀┼─── [Snare Audio]
│             │    │ Audio Out ───┼───▶│             │
│ t3 Output ──┼─┐  │              │    │ Audio In 3 ◀┼─── [Hihat Audio]
│             │ │  └──────────────┘    │             │
│ Y Output ───┼─┼─▶ ┌──────────────┐    │ Mix Out ────┼─── Final Output
└─────────────┘ │  │ Snare Drum   │    └─────────────┘
                │  │ Trigger In   │           ▲
                │  │              │           │
                │  │ Audio Out ───┼───────────┘
                │  └──────────────┘
                │         ▲
                │  ┌──────┴──────┐
                └─▶│ Hi-hat      │
                   │ Trigger In  │
                   │             │
                   │ Audio Out ──┼───────────────────────┘
                   └─────────────┘
                          ▲
┌─────────────┐           │
│   Marbles   │───────────┘
│ Algorithm   │ 
│ Button: Red │ (Complex rhythms)
│             │
│ BIAS: 2     │
│ o'clock     │
│             │
│ JITTER: 10  │
│ o'clock     │
└─────────────┘
```

| Connection | Cable Type | Purpose | Notes |
|------------|------------|---------|-------|
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

**Advanced Technique:**
- **Y output modulating DEJA VU** creates meta-patterns - the memory system itself evolves
- **Different algorithm modes** create different rhythmic relationships between outputs
- **BIAS control** changes overall pattern density and complexity
- **JITTER** adds human feel without losing the intelligent pattern structure

### **Patch 3: Advanced - Evolving Modulation Ecosystem**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Marbles   │───▶│    Filter    │───▶│ Oscillator  │
│ X2 Output   │    │ Cutoff CV    │    │ PWM Input   │
│             │    │              │    │             │
│ X3 Output ──┼───▶│ Audio In  ◀──┼────┼─── Audio Out│
│             │    │              │    │             │
│ Y Output ───┼─┐  │ Audio Out ───┼───▶│             │
└─────────────┘ │  └──────────────┘    └─────────────┘
                │         │                    │
                │         │             ┌──────┴──────┐
                │         │             │   Effects   │
                │         │             │ Processor   │
                │         │             │             │
                │         │             │ Time CV ◀───┼─── [From X1]
                │         │             │             │
                │         │             │ Mix CV  ◀───┼─── [From X3]
                │         │             │             │
                │         │             │ Audio Out ──┼─── Final Output
                │         │             └─────────────┘
                │         │                    ▲
                │         └────────────────────┘
                │
                ▼
┌─────────────┐
│   Marbles   │
│ DEJA VU     │
│ CV Input    │ (Self-modulation loop)
│             │
│ STEPS:      │
│ 9 o'clock   │ (Smooth modulation)
│             │
│ SPREAD:     │
│ 3 o'clock   │ (Wide range)
└─────────────┘
```

| Module | Input | Source | Purpose | Advanced Notes |
|--------|-------|--------|---------|----------------|
| **Filter** | Cutoff CV | Marbles X2 | **Evolving filter sweeps** | **Smooth, intelligent movement** |
| **Filter** | Audio In | Oscillator Audio | **Signal processing** | **Traditional signal chain** |
| **Oscillator** | PWM Input | Marbles X3 | **Pulse width modulation** | **Timbral evolution** |
| **Effects** | Time CV | Marbles X1 | **Delay time modulation** | **Rhythmic delay changes** |
| **Effects** | Mix CV | Marbles X3 | **Wet/dry balance** | **Dynamic effect intensity** |
| **Marbles** | DEJA VU CV | Marbles Y Output | **Meta-modulation** | **Self-evolving memory** |

**Module Settings:**
- **Marbles STEPS:** 9 o'clock (smooth, continuous voltages)
- **Marbles SPREAD:** 3 o'clock (wide voltage range)
- **Marbles DEJA VU:** Controlled by Y output (self-evolution)
- **Filter:** Start with moderate cutoff and resonance

**Learning Objectives:**
- Experience smooth vs. stepped random voltages
- Learn complex modulation routing strategies
- Understand self-modulation and feedback loops
- Master multiple parameter modulation

**Expert Techniques:**
- **Y → DEJA VU feedback** creates slowly evolving meta-patterns in the modulation
- **STEPS left of center** generates smooth curves perfect for modulation
- **SPREAD wide setting** maximizes modulation range for dramatic effects
- **Multiple X outputs** provide related but different modulation sources

### **Patch 4: Expert - Cross-Module Intelligence Network with Phase 1 Modules**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Mutable    │───▶│   Mutable    │───▶│  Make Noise │
│  Marbles    │    │   Plaits     │    │    Maths    │
│             │    │              │    │             │
│ X1 Out  ────┼───▶│ Model CV     │    │ Ch1 In  ◀───┼─── [From t1]
│             │    │              │    │             │
│ X2 Out  ────┼───▶│ Timbre CV    │    │ Ch4 In  ◀───┼─── [From t2]
│             │    │              │    │             │
│ t1 Out  ────┼───▶│ Trigger In   │    │ Ch1 Out ────┼───▶ ┌─────────────┐
│             │    │              │    │             │     │   Rossum    │
│ t2 Out  ────┼───▶│              │    │ Ch4 Out ────┼───▶ │ Mob of Emus │
│             │    │ Audio Out ───┼───▶│             │     │             │
│ Y Out   ────┼─┐  │              │    │ OR Out  ────┼───▶ │ Freq CV     │
└─────────────┘ │  └──────────────┘    └─────────────┘     │             │
                │         │                    │           │ H.Gain CV ◀┼─── [From Maths Ch1]
                │         │                    │           │             │
                │  ┌──────┴──────┐             │           │ Mix Out ────┼─── To Filter
                │  │   Tiptop    │             │           └─────────────┘
                │  │ Forbidden   │             │                  │
                │  │  Planet     │             │                  │
                │  │             │             │                  ▼
                │  │ LP Input ◀──┼─── [Audio]  │           ┌─────────────┐
                │  │             │             │           │   Output    │
                │  │ Freq CV ◀───┼─────────────┘           │   Module    │
                │  │             │                         │             │
                │  │ Audio Out ──┼─────────────────────────┼─── Final Out │
                │  └─────────────┘                         └─────────────┘
                │
                ▼
┌─────────────┐
│   Marbles   │
│ DEJA VU CV  │ (Y output feedback)
│ Input       │
│             │
│ External    │
│ Processing  │ (Learning from the system)
│ Mode: ON    │
└─────────────┘
```

| Module | Input | Source | Purpose | System Integration |
|--------|-------|--------|---------|-------------------|
| **Plaits** | Model CV | Marbles X1 | **Intelligent model switching** | **AI-driven synthesis evolution** |
| **Plaits** | Timbre CV | Marbles X2 | **Timbral evolution** | **Organic sound character changes** |
| **Plaits** | Trigger In | Marbles t1 | **Intelligent triggering** | **Musical phrase generation** |
| **Maths** | Ch1 Input | Marbles t1 | **Trigger processing** | **Converts triggers to envelopes** |
| **Maths** | Ch4 Input | Marbles t2 | **Secondary processing** | **Complex envelope relationships** |
| **Forbidden Planet** | Frequency CV | Maths Ch4 Out | **Envelope-controlled filtering** | **Musical filter movement** |
| **Mob of Emus** | Freq CV | Maths OR Output | **Harmonic pitch control** | **Mathematical harmony + chaos** |
| **Mob of Emus** | H.Gain CV | Maths Ch1 Out | **Harmonic intensity** | **Dynamic harmonic balance** |
| **Marbles** | DEJA VU CV | Marbles Y Output | **Self-learning feedback** | **System learns its own behavior** |

**Module Settings:**
- **Marbles External Processing:** ON (learns from system feedback)
- **Marbles DEJA VU:** 11 o'clock (slow learning evolution)
- **Plaits:** Granular or Modal model for textural response
- **Maths:** Ch1 as trigger processor, Ch4 as envelope follower
- **Forbidden Planet:** LP Input, envelope-controlled frequency
- **Mob of Emus:** Harmonic series, responding to Marbles' mathematical patterns

**Learning Objectives:**
- **Multi-module AI integration** using Marbles as the brain
- **Feedback learning systems** where modules teach each other
- **Complex musical relationships** between random, mathematical, and analog elements
- **Self-evolving musical systems** that develop over time

**Expert System Design:**
- **Marbles as central intelligence** drives evolution across multiple synthesis paradigms
- **External Processing mode** learns from the musical output of the entire system
- **Plaits responds** to Marbles' intelligent model and timbre selection
- **Maths processes** Marbles' triggers into complex envelope relationships
- **Forbidden Planet** provides analog character controlled by digital intelligence
- **Mob of Emus** adds mathematical harmony to Marbles' learned patterns
- **Y output feedback** creates recursive learning - system becomes increasingly musical

**AI Philosophy:**
This patch demonstrates **artificial musical intelligence** - Marbles learns what sounds good from the system's own output, gradually developing musical taste and preference. The system becomes increasingly musical over time, combining chaos, mathematics, analog processing, and machine learning into a unified musical entity.

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

**Cross-Reference Learning Path:**
1. **Start here** with basic intelligent randomness and DEJA VU
2. **Add analog processing** with Maths for envelope shaping (see Maths guide)
3. **Integrate synthesis** with Plaits for AI-driven model selection (see Plaits guide)
4. **Add harmonic intelligence** with Mob of Emus for mathematical harmony (see Mob of Emus guide)
5. **Build complete AI systems** using feedback and cross-module learning networks

---

## Why This Module Rocks

### **The Philosophy:**
Marbles represents a revolutionary approach to musical randomness - **artificial intelligence applied to music creation**. Unlike pure random generators, Marbles develops musical taste and preference over time, learning what sounds good and gradually becoming a more musical collaborator. It's not just generating patterns - it's developing musical intelligence.

### **The Innovation:**
- **Machine learning in modular:** First mainstream module to apply AI concepts to music generation
- **Memory with evolution:** DEJA VU system that remembers and evolves patterns intelligently
- **Dual-section design:** Independent but related rhythm and melody generation
- **External processing:** Learns from your existing musical material
- **Correlation control:** Outputs can be independent or harmonically related

### **The Practical Magic:**
- **Compositional partner:** Suggests musical ideas you'd never think of
- **Pattern development:** Takes simple ideas and develops them into complete musical phrases
- **Performance intelligence:** Responds to musical context and develops appropriate complexity
- **Learning system:** Becomes more musical the more you use it
- **Multi-paradigm:** Works as sequencer, modulation source, rhythm generator, and AI composer

### **The Technical Achievement:**
- **Real-time pattern recognition:** Analyzes musical content as it plays
- **Probabilistic generation:** Uses musical probability rather than pure randomness
- **Memory management:** Intelligent balance between repetition and variation
- **Multi-scale timing:** Operates from micro-timing to long-form structure
- **Feedback integration:** Learns from its own output for recursive improvement

### **Perfect For:**
- **Electronic producers** seeking intelligent, evolving sequences that never get boring
- **Ambient musicians** creating long-form generative compositions with slow development
- **Live performers** who want an AI collaborator that responds to musical context
- **Experimental composers** exploring machine learning in musical composition
- **Anyone frustrated** with purely random generators that lack musical intelligence
- **Students of AI** interested in practical applications of machine learning to creativity

### **The Future of Music:**
Marbles represents the future of human-AI musical collaboration. It's not about replacing human creativity - it's about **augmenting human musical intelligence** with artificial pattern recognition and generation. The module learns your musical preferences and helps develop them, creating a feedback loop where human and artificial intelligence enhance each other.

### **The Learning Experience:**
Using Marbles teaches you about your own musical preferences by reflecting them back to you in new forms. As the module learns what you find musical, you discover patterns in your own taste that you might never have consciously recognized. It's a mirror for musical creativity.

---

**Bottom Line:** Marbles isn't just a random generator - it's **artificial musical intelligence** that learns, remembers, and evolves. It transforms chaotic randomness into intelligent musical patterns, creating a collaborative relationship between human creativity and machine learning. Once you experience music that learns and grows with you, static sequences feel primitive.

---

*Visit [Mutable Instruments](https://mutable-instruments.net/modules/marbles/) for complete documentation, firmware updates, and the open-source code that makes the magic possible.*