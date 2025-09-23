# Rossum Electro-Music Mob of Emus Beginner's Guide

![Rossum Electro-Music Mob of Emus](https://github.com/DGretta/Music/raw/main/modular/images/rossum_electro_music/mob_of_emus/front_panel.jpg)
*Six-channel polyfunctional harmonic synthesis module with mathematical harmonic series control, individual channel programming, and Hex mode macro layer for complex additive synthesis and polyrhythmic modulation*

*The Polyfunctional Harmonic Sextet*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Mob of Emus?** A six-channel synthesis powerhouse that packs an enormous amount of creative power into just 16HP. Think of it as having six independent modules that can work together or separately - each channel can be an oscillator, LFO, envelope, rhythm pattern, noise source, quantizer, or modulation source.

### Your First Harmonic Stack
1. **Click Preset 1** - "Warp This" (audio oscillator stack)
2. **Patch Mix Output** → your VCA or filter input
3. **Turn Freq knob** - change the overall pitch of all six oscillators
4. **Hold Option + turn Variation/Warp knob** - hear the frequency warping effect!
5. **Hold Option + turn Harm#/Series knob** - try different harmonic relationships
6. **Turn H.Gain knob** - balance between fundamental and harmonic frequencies

### Discover Polyrhythmic Magic
1. **Click Preset 4** - "4/4 Drums with Variation"
2. **Patch Channel 1 Output** → kick drum trigger input
3. **Patch Channel 2 Output** → snare drum trigger input  
4. **Click Tap/Trig button repeatedly** at your desired tempo
5. **Turn Variation knob slightly** - add rhythmic complexity
6. **Turn Octave knob** to halve/double the tempo

---

## Essential Parameters (The Big 6)

### **1. FREQ/FINE/SEMI**
- **What it does:** Sets each channel's frequency (like pitch on an oscillator)
- **Range:** ±2 octaves from base frequency
- **Musical use:** Tune your oscillators, set LFO speeds, adjust rhythm timing
- **Option 1:** Fine tuning for precise detuning effects
- **Option 2:** Semitone steps for musical intervals

### **2. OCTAVE/2X**  
- **What it does:** Sets the octave range (audio vs modulation speeds)
- **Range:** ±5 octaves (±10 with Option 1)
- **Key concept:** This determines audio rate vs LFO rate
- **Sweet spots:** -2 to -4 for LFOs, +2 to +4 for audio oscillators

### **3. WAVE/ENV/PAT**
- **What it does:** Selects the waveform/pattern for each channel
- **Bank 1 (Primary):** Classic waves - sine, saw, square, triangle, S&H
- **Bank 2 (Option 1):** Envelopes - various ADSR shapes, smoothed random
- **Bank 3 (Option 2):** Rhythm patterns - kick, snare, hihat, clave patterns

### **4. HARM#/SERIES**
- **What it does:** Sets harmonic relationships between channels
- **Individual Mode:** Frequency multiplier (1-32x) for each channel
- **Hex Mode:** How many channels playing (1-6) + harmonic series presets
- **Magic moment:** This is what makes complex harmony and polyrhythms effortless!

### **5. H.GAIN/MIX**
- **What it does:** Individual channel levels + mix inclusion
- **Individual Mode:** Channel volume, Option 1 = include in mix output
- **Hex Mode:** "Harmonic gain" - balance between low/high numbered channels
- **Pro tip:** Turn CCW in Hex mode to emphasize fundamental frequencies

### **6. HEX Button & Mode**
- **What it does:** Control all 6 channels simultaneously as a macro layer
- **When lit:** All knob movements affect all channels at once
- **Key concept:** Your individual programming stays intact, Hex mode adds offsets
- **Game changer:** Create complex variations without losing your basic setup

---

## Understanding the Harmonic Concept

### **What Makes Mob of Emus Special:**
The "harmonic" control structure is what sets Mob of Emus apart from other multi-channel modules. Instead of just having six random oscillators, it uses **mathematical relationships** from music theory and acoustics to create naturally musical interactions.

### **Harmonic Series in Nature:**
- **Fundamental frequency** (1x) - the root note you hear
- **First harmonic** (2x) - one octave higher  
- **Second harmonic** (3x) - perfect fifth above that
- **Third harmonic** (4x) - two octaves higher
- And so on... these are the **natural overtones** present in acoustic instruments

### **Mob of Emus' Innovation:**
- **Each channel** can be set to any harmonic number (1-32x)
- **Instant harmonic series** via preset combinations
- **Polyrhythmic applications** - same math works for rhythm (1=whole note, 2=half note, 4=quarter note)
- **Hex Mode control** - conductor layer that maintains relationships while adding variation

### **The 15 Harmonic Series Presets:**
1. **Unison** {1,1,1,1,1,1} - All channels same frequency
2. **All** {1,2,3,4,5,6} - Natural harmonic series
3. **Powers of 2** {1,2,4,8,16,32} - Perfect for 4/4 rhythms
4. **12/8 Rhythm** {1,2,4,6,8,12} - Compound time signatures
5. **3/4 Rhythm** {1,2,3,4,6,8} - Waltz and triple meter
6. **3+5 Rhythm** {1,2,3,5,6,10} - Complex polyrhythms
7. **Odd** {1,3,5,7,9,11} - Hollow, clarinet-like timbres
8. **Fave Odd** {1,5,9,11,15,19} - Composer's favorite odd harmonics
9. **Fibonacci** {1,2,3,5,8,13} - Mathematical beauty in music

### **Why This Matters:**
Instead of randomly setting six channels, you can instantly access **thousands of years** of musical knowledge about what frequency relationships sound good together!

---

## Beginner Patch Ideas

### **Patch 1: Rich Additive Synthesis**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│    LFO      │───▶│ Mob of Emus  │───▶│   Filter    │
│ (Slow Rate) │    │ H.GAIN CV IN │    │  Audio In   │
└─────────────┘    │              │    └─────────────┘
                   │ Preset 7:    │           │
┌─────────────┐    │ "Additive    │           ▼
│ Envelope    │───▶│ Oscillator"  │    ┌─────────────┐
│ Generator   │    │              │───▶│     VCA     │
└─────────────┘    │ MIX OUTPUT   │    │   Audio In  │
                   └──────────────┘    └─────────────┘
                          │                    ▲
                          │                    │
                   ┌──────┴──────┐           │
                   │ Harmonic    │───────────┘
                   │ Series      │
                   │ Control     │
                   └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| LFO → MOE H.GAIN CV | CV (Blue) | Rhythmic harmonic intensity |
| Envelope → MOE Full CV Freq | CV (Blue) | Pitch modulation |
| MOE Mix Out → Filter Audio In | Audio (Red) | Rich additive signal |
| Filter Out → VCA Audio In | Audio (Red) | Filtered harmonics |

**Module Settings:**
- **Mob of Emus:** Load Preset 7, Hex Mode ON
- **Harmonic Series:** "Fave Odd" (Option 1 on HARM#/SERIES)
- **H.Gain CV attenuverter:** 75% for dramatic harmonic changes
- **All channels:** Audio rate (Octave around +2)

**Visual Feedback:**
- **Hex LED:** Solid, indicating Hex mode active
- **H.Gain LED:** Pulses with LFO showing harmonic intensity changes
- **Channel LEDs:** All lit showing six-oscillator harmony
- **Result:** Classic additive synthesis with easy harmonic control

### **Patch 2: Polyrhythmic Modulation Bank**
```
┌─────────────┐    ┌──────────────┐
│ Tap/Trig   │───▶│ Mob of Emus  │
│ Button      │    │ Tempo Sync   │  Ch1──▶VCA 1 CV
└─────────────┘    │              │  Ch2──▶VCA 2 CV
                   │ Harmonic     │  Ch3──▶Filter CV
                   │ Series:      │  Ch4──▶LFO Rate
                   │ "Powers of 2"│  Ch5──▶Osc Pitch
                   │              │  Ch6──▶Effect CV
                   │ Octave: -3   │
                   │ (LFO Rate)   │
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Tap/Trig → MOE Sync Input | Clock (Yellow) | Sets tempo for all channels |
| MOE Ch1 → VCA 1 CV Input | CV (Blue) | 1x tempo (fundamental) |
| MOE Ch2 → VCA 2 CV Input | CV (Blue) | 2x tempo (half notes) |
| MOE Ch3 → Filter CV Input | CV (Blue) | 4x tempo (quarter notes) |
| MOE Ch4 → LFO Rate CV | CV (Blue) | 8x tempo (eighth notes) |
| MOE Ch5 → Oscillator Pitch | CV (Blue) | 16x tempo (sixteenth notes) |
| MOE Ch6 → Effect Parameter | CV (Blue) | 32x tempo (thirty-second notes) |

**Module Settings:**
- **Mob of Emus:** Octave at -3 (LFO rates), Hex Mode ON
- **Harmonic Series:** "Powers of 2" {1,2,4,8,16,32}
- **Variation:** Slight clockwise for rhythmic interest
- **Individual outputs:** Route to different modulation destinations

**Visual Feedback:**
- **Tap/Trig LED:** Flashes showing master tempo
- **Channel LEDs:** Flash at different rates showing polyrhythmic relationships
- **Harmonic relationships:** Visual confirmation of mathematical timing
- **Result:** Six related but different LFO rates creating polyrhythmic modulation

### **Patch 5: Intermediate - Generative Harmonic Evolution**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│    Qubit    │ │  Cre8audio  │ │  Mob of Emus    │
│    Bloom    │ │ Function    │ │ (Mathematical   │
│(Generative) │ │ Junction    │ │  Harmony)       │
│             │ │(Processing) │ │                 │
│ Random ○──┼─┼─Input A     │ │                 │
│       ║     │ │       ○────┼─┼─H.Gain CV      │
│ Gate   ○──┼─┼─Input B     │ │       ║         │
│       ║     │ │ OR Out  ○──┼─┼─Variation CV   │
│ 2 Out  ○──┼─┼─Input C     │ │       ║         │
│       ║     │ │ AND Out ○──┼─┼─Tap/Trig       │
│ 3 Out  ○──┼─┼─Input D     │ │                 │
│       ║     │ │ XOR Out ○──┼─┼─Warp CV        │
│ Generative  │ │ Logic       │ │                 │
│ Pattern     │ │ Enhanced    │ │ Harmonic        │
│ Evolution   │ │ Processing  │ │ Series: "Fib"   │
│             │ │             │ │ {1,2,3,5,8,13}  │
│             │ │             │ │                 │
│             │ │             │ │ Mix Out ○───────┼─── Generative Harmony (Red)
│             │ │             │ │ Ch1-6 Out ○─────┼─── Individual Series (Red)
└─────────────┘ └─────────────┘ └─────────────────┘
        ║               ║               ║
        ▼               ▼               ▼
┌────────────────────────────────────────────────────────────────┐
│         Generative Mathematical Harmony System                  │
│                                                                │
│ Generative Patterns + Logic Processing + Harmonic Algorithms   │
│                                                                │
│ Bloom → Generative pattern evolution + probability control      │
│ Function Junction → Logic operations + pattern enhancement      │
│ Mob → Harmonic series algorithms + mathematical harmony brain   │
│                                                                │
│ Generative Harmonic Workstation (42HP total)                 │
│                                                                │
│ Generative Mathematical Harmony ○──────────────┼─── Output      │
└────────────────────────────────────────────────────────────────┘
```

**Generative Harmonic Evolution Integration:**

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Bloom Random → Function Junction** | Generative patterns | **Pattern processing** | **Generative evolution creates sophisticated harmonic control patterns** |
| **Function Junction Logic → Mob** | Processed generative | **Logic-enhanced harmony** | **Logic operations provide generative decision making for harmonic series** |
| **Bloom Gates → Mob Tap/Trig** | Generative timing | **Evolving harmonic rhythm** | **Generative gates create evolving tempo for harmonic series progression** |
| **Mob Fibonacci Series** | Mathematical harmony | **Generative mathematical harmony** | **Fibonacci sequence controlled by generative evolution for natural harmonic progression** |

**Learning Objectives:**
- **Generative harmonic principles:** How generative pattern evolution transforms mathematical harmony into evolving musical relationships
- **Multi-parameter generative control:** Using multiple Bloom outputs for coordinated generative harmonic evolution
- **Logic-enhanced harmony:** Understanding how logic operations create decision making for harmonic series progression
- **Evolving mathematical systems:** Creating harmonic processors that evolve and develop through generative control

**Alternative Generative Sources:**
- **Instead of Bloom:** Try **Turing Machine + Expanders** for binary generative harmonic patterns, or **Marbles** for probability-based harmonic evolution
- **Budget alternatives:** **2HP Rnd** provides basic generative control for harmonic parameters
- **Different approach:** **Wogglebug** for chaotic generative patterns combined with harmonic generation

### **Patch 4: Intermediate - Phase 2 Organic Harmonic Evolution**
```
┌─────────────┐ ┌─────────────────┐
│  DivKid     │ │  Mob of Emus    │
│    Ochd     │ │ (Mathematical   │
│ (Organic    │ │  Harmony)       │
│  LFO Sys)   │ │                 │
│             │ │                 │
│ LFO 1   ○──┼─┼─H.Gain CV       │
│       ║     │ │       ║         │
│ LFO 4   ○──┼─┼─Variation CV    │
│       ║     │ │       ║         │
│ LFO 8   ○──┼─┼─Warp CV         │
│       ║     │ │                 │
│ Natural     │ │ Harmonic        │
│ Breathing   │ │ Series: "All"   │
│ Organic     │ │ {1,2,3,4,5,6}   │
│ Evolution   │ │                 │
│             │ │ Mix Out ○───────┼─── Organic Harmony (Red)
│             │ │ Ch1 Out ○───────┼─── Fundamental (Red)
│             │ │ Ch2 Out ○───────┼─── Harmonic 2 (Red)
│             │ │ Ch6 Out ○───────┼─── Harmonic 6 (Red)
└─────────────┘ └─────────────────┘
        ║               ║
        ▼               ▼
┌────────────────────────────────────────────┐
│     Organic Mathematical Harmony System    │
│                                            │
│ Natural LFO Breathing + Harmonic Algorithms│
│                                            │
│ Ochd → Natural organic harmonic evolution  │
│ Mob → Mathematical harmony generation core │
│                                            │
│ Living Harmonic Evolution (20HP total)    │
│                                            │
│ Organic Mathematical Harmony ○─────┼─── Output │
└────────────────────────────────────────────┘
```

**Organic Harmonic Evolution Integration:**

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → Mob H.Gain** | Organic CV | **Natural harmonic balance** | **Creates breathing harmonic intensity that evolves naturally over time** |
| **Ochd LFO 4 → Mob Variation** | Organic CV | **Organic pattern evolution** | **Smoothly varies harmonic patterns with natural timing** |
| **Ochd LFO 8 → Mob Warp** | Organic CV | **Natural frequency relationships** | **Creates organic detuning and chorusing in harmonic series** |
| **Mob Harmonic Outputs** | Mathematical harmony | **Pure harmonic series** | **Mathematical harmony enhanced by natural organic evolution** |

**Learning Objectives:**
- **Organic harmonic principles:** How natural LFO breathing transforms mathematical harmony into living musical relationships
- **Multi-parameter harmonic control:** Using multiple Ochd outputs for coordinated harmonic evolution
- **Mathematical harmony transformation:** Understanding how organic modulation creates natural progression through harmonic series
- **Living mathematical systems:** Creating harmonic processors that breathe and evolve naturally over extended time periods

**Alternative Organic Sources:**
- **Instead of Ochd:** Try **Batumi** for more geometric organic harmonic movement, or **Quadrax** for discrete organic harmonic steps
- **Budget alternatives:** **2HP LFO** provides basic organic modulation for harmonic control
- **Different character:** **Befaco Rampage** gives dual mathematical organic relationships vs Ochd's continuous breathing

### **Patch 6: Advanced - Algorithmic Harmonic Processing**
```
┌─────────────┐ ┌─────────────────┐
│   Expert    │ │  Mob of Emus    │
│  Sleepers   │ │ (Mathematical   │
│  Disting    │ │  Harmony)       │
│   mk4       │ │                 │
│(Algorithm)  │ │                 │
│             │ │                 │
│ Alg: I-1    ○──┼─H.Gain CV      │
│ Precision   ║   │       ║         │
│ Adder       ║   │ Full CV In ◀────┼── From Disting Y
│             ║   │       ║         │
│ Y Output ○──┼───┼─Variation CV   │
│       ║     │   │       ║         │
│ Alg: I-2    ○──┼─Warp CV        │
│ Sample &    ║   │                 │
│ Hold        ║   │ Harmonic        │
│             ║   │ Series: "All"   │
│ Z Output ○──┼───┼─Tap/Trig       │
│ Algorithm   │   │ {1,2,3,4,5,6}   │
│ Enhanced    │   │                 │
│ Processing  │   │                 │
│             │   │ Mix Out ○───────┼─── Algorithmic Harmony (Red)
│             │   │ Ch1-6 Out ○─────┼─── Individual Series (Red)
└─────────────┘   └─────────────────┘
        ║               ║
        ▼               ▼
┌────────────────────────────────────────────┐
│    Algorithmic Mathematical Harmony System  │
│                                            │
│ Digital Algorithms + Harmonic Mathematics  │
│                                            │
│ Disting → Multi-algorithm processing brain │
│ Mob → Harmonic series mathematical core    │
│                                            │
│ Algorithmic Harmonic Workstation (20HP)   │
│                                            │
│ Algorithmic Mathematical Harmony ○─────┼─── Output │
└────────────────────────────────────────────┘
```

**Algorithmic Harmonic Processing Integration:**

| Module Integration | Signal Flow | Purpose | Algorithmic Synergy |
|-------------------|-------------|---------|---------------------|
| **Disting Precision Adder → Mob H.Gain** | Algorithmic CV | **Mathematical harmonic control** | **Precision mathematical operations guide harmonic intensity with algorithmic accuracy** |
| **Disting Sample & Hold → Mob Warp** | Algorithmic stepped CV | **Quantized harmonic warping** | **S&H creates stepped harmonic detuning controlled by mathematical algorithms** |
| **Disting Y Output → Mob Full CV** | Algorithm feedback | **Algorithmic frequency control** | **Algorithm output controls overall harmonic frequency relationships** |
| **Mob Harmonic Series** | Mathematical harmony | **Algorithm-controlled harmony** | **Natural harmonic series enhanced by precise digital algorithmic control** |

**Learning Objectives:**
- **Algorithmic harmonic control:** How digital algorithms enhance mathematical harmony with computational precision
- **Multi-algorithm processing:** Using different Disting algorithms for coordinated harmonic enhancement
- **Mathematical algorithm integration:** Understanding how computational processing guides harmonic series evolution
- **Digital-analog hybrid systems:** Creating harmonic processors that combine algorithmic precision with musical mathematics

**Alternative Algorithm Sources:**
- **Instead of Disting mk4:** Try **Ornament & Crime** for different algorithmic approaches, or **Temps Utile** for algorithmic timing control
- **Different algorithms:** **Expert Sleepers FH-2** for CV algorithmic processing
- **Budget approach:** **2HP Tune** for basic quantization combined with harmonic generation

### **Patch 5: Advanced - Mathematical Pattern Processing**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Make Noise  │ │  Cre8audio  │ │  Mob of Emus    │
│    Maths    │ │ Function    │ │ (Mathematical   │
│(Functions)  │ │ Junction    │ │  Harmony)       │
│             │ │(Processing) │ │                 │
│ Ch1 Out ○──┼─┼─Input A     │ │ Full CV In ◀────┼── Function CV
│       ║     │ │       ○────┼─┼─H.Gain CV      │
│ Ch2 Out ○──┼─┼─Input B     │ │       ║         │
│       ║     │ │ AND Out ○──┼─┼─Variation CV   │
│ Ch3 Out ○──┼─┼─Input C     │ │       ║         │
│       ║     │ │ OR Out  ○──┼─┼─Tap/Trig       │
│ Ch4 Out ○──┼─┼─Input D     │ │                 │
│       ║     │ │ MIX Out ○──┼─┼─Warp CV        │
│ Mathematical│ │ Logic       │ │ Harmonic        │
│ Functions   │ │ Enhanced    │ │ Series: "Fib"   │
│ Complex     │ │ Processing  │ │ {1,2,3,5,8,13}  │
│ Processing  │ │             │ │                 │
│             │ │             │ │ Mix Out ○───────┼─── Math Harmony (Red)
│             │ │             │ │ Individual Outs │
│             │ │             │ │ Ch1-6   ○───────┼─── Fibonacci Series (Red)
└─────────────┘ └─────────────┘ └─────────────────┘
        ║               ║               ║
        ▼               ▼               ▼
┌────────────────────────────────────────────────────────────────┐
│           Mathematical Pattern Processing System                │
│                                                                │
│ Function Generation + Logic Operations + Harmonic Algorithms   │
│                                                                │
│ Maths → Mathematical function generation + complex CV          │
│ Function Junction → Logic operations + pattern control         │
│ Mob → Harmonic series algorithms + mathematical harmony        │
│                                                                │
│ Mathematical Harmony Workstation (42HP total)                │
│                                                                │
│ Complex Mathematical Harmony ○─────────────┼─── Output         │
└────────────────────────────────────────────────────────────────┘
```

**Mathematical Pattern Processing Integration:**

| Module Integration | Signal Flow | Purpose | Mathematical Synergy |
|-------------------|-------------|---------|----------------------|
| **Maths Ch1-4 → Function Junction** | Mathematical CV | **Function processing** | **Complex mathematical functions create sophisticated harmonic control** |
| **Function Junction Logic → Mob** | Processed mathematics | **Logic-enhanced harmony** | **Logic operations provide mathematical decision making for harmonic series** |
| **Function MIX → Mob Full CV** | Combined functions | **Unified mathematical control** | **All mathematical functions combine to control harmonic frequency relationships** |
| **Mob Fibonacci Series** | Mathematical harmony | **Pure mathematical relationships** | **Fibonacci sequence creates natural mathematical harmonic progressions** |

**Learning Objectives:**
- **Mathematical harmonic generation:** How function generators enhance harmonic series algorithms with complex mathematical relationships
- **Logic-enhanced harmony:** Using logic operations to create mathematical decision making for harmonic progression
- **Function-controlled mathematics:** Understanding how mathematical functions guide harmonic series evolution
- **Complex mathematical systems:** Creating harmonic processors that respond to sophisticated mathematical control

**Alternative Mathematical Sources:**
- **Instead of Maths:** Try **Befaco Rampage** for dual mathematical functions, or **ALM Busy Circuits Pip Slope** for precise mathematical control
- **Logic alternatives:** **Befaco Burst** or **2HP Logic** for basic mathematical operations
- **Different approach:** **Joranalogue Compare 2** for mathematical comparisons combined with harmonic generation

### **Patch 7: Expert - Complete Multi-Function Harmonic Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Make Noise  │ │  Cre8audio  │ │  Squarp     │ │  Mob of Emus    │
│    Maths    │ │ Function    │ │  Hermod+    │ │ (Mathematical   │
│(Functions)  │ │ Junction    │ │(Sequencer)  │ │  Harmony)       │
│             │ │(Processing) │ │             │ │                 │
│ Ch1 Out ○──┼─┼─Input A     │ │ CV Trk 1○──┼─┼─Full CV In      │
│       ║     │ │       ○────┼─┼─CV Trk 2   │ │       ║         │
│ Ch2 Out ○──┼─┼─Input B     │ │       ○────┼─┼─H.Gain CV      │
│       ║     │ │ AND Out ○──┼─┼─Gate Trk1  │ │       ║         │
│ Ch3 Out ○──┼─┼─Input C     │ │       ○────┼─┼─Tap/Trig       │
│       ║     │ │ OR Out  ○──┼─┼─CV Trk 3   │ │       ║         │
│ Ch4 Out ○──┼─┼─Input D     │ │       ○────┼─┼─Variation CV   │
│       ║     │ │ MIX Out ○──┼─┼─CV Trk 4   │ │       ║         │
│ Mathematical│ │ XOR Out ○──┼─┼─Gate Trk2  │ │ Warp CV ◀──────┼─── From MIX
│ Functions   │ │ Logic       │ │ Quantizer   │ │                 │
│ Complex     │ │ Enhanced    │ │ Out     ○──┼─┼─Harmonic CV    │
│ Processing  │ │ Processing  │ │ Multi-Track │ │                 │
│             │ │             │ │ Musical     │ │ Harmonic        │
│             │ │             │ │ Sequences   │ │ Series: "All"   │
│             │ │             │ │             │ │ Dynamic Control │
│             │ │             │ │             │ │                 │
│             │ │             │ │             │ │ Mix Out ○───────┼─── Complete Harmony (Red)
│             │ │             │ │             │ │ Ch1-6 Out ○─────┼─── Individual Series (Red)
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────────┘
        ║               ║               ║               ║
        ▼               ▼               ▼               ▼
┌────────────────────────────────────────────────────────────────────┐
│           Complete Harmonic Intelligence Ecosystem                     │
│                                                                        │
│ Mathematical Functions + Logic Processing + Sequencing + Harmony      │
│                                                                        │
│ Maths       → Mathematical function generation + complex processing    │
│ Function Jct→ Logic operations + mathematical decision making          │
│ Hermod+     → Multi-track sequencing + quantization + musical control │
│ Mob of Emus → Harmonic series algorithms + mathematical harmony brain  │
│                                                                        │
│ Complete Mathematical Harmony Workstation (58HP total)               │
│                                                                        │
│ Mathematical Harmonic Intelligence ○───────────────┼─── Complete Output │
└────────────────────────────────────────────────────────────────────┘
```

**Complete Harmonic Intelligence Integration:**

| Layer | Function | Mob of Emus Role | Musical Result |
|-------|----------|------------------|----------------|
| **Mathematical (Maths)** | Function generation | **Function-enhanced harmonic control** | **Mathematical functions guide sophisticated harmonic series evolution** |
| **Logic (Function Junction)** | Pattern processing | **Logic-enhanced harmonic decisions** | **Logic operations provide mathematical decision making for harmonic progression** |
| **Sequencing (Hermod+)** | Multi-track musical control | **Sequenced harmonic evolution** | **Musical sequences control harmonic relationships with quantization** |
| **Harmony (Mob of Emus)** | Harmonic series algorithms | **Complete mathematical harmony brain** | **Advanced harmonic generation with multi-layer mathematical enhancement** |

**Complete System Design:**
- **Maths as function engine:** Mathematical function generation provides complex CV for sophisticated harmonic control and evolution
- **Function Junction as logic processor:** Logic operations provide mathematical decision making and pattern control for harmonic algorithms
- **Hermod+ as musical brain:** Multi-track sequencer + quantizer provides musical sequence control with mathematical precision
- **Mob of Emus as harmony core:** Harmonic series algorithms enhanced by mathematical functions, logic, and musical sequencing for complete harmonic control
- **Total ecosystem:** 58HP complete mathematical harmony workstation combining functions, logic, sequencing, and harmonic generation

**Performance Applications:**
1. **Mathematical harmonic evolution:** Maths creates complex functions → Function Junction adds logic control → Hermod+ adds musical sequences → Mob generates harmonic series
2. **Logic-enhanced harmony:** Logic operations provide pattern control while mathematical functions guide harmonic series evolution
3. **Musical mathematical control:** Sequencer provides musical framework while mathematical functions enhance harmonic relationships
4. **Complete harmony workstation:** Generate, evolve, control, and perform harmonic series in single integrated mathematical system
5. **Advanced mathematical mastery:** Complete ecosystem creates mathematical harmony with function enhancement and musical control

**Why This Complete Ecosystem Works:**
- **Leverages multi-function capabilities:** Each module serves multiple mathematical roles simultaneously for maximum harmonic power
- **Math + Logic + Sequencing:** Three different approaches enhance harmonic generation with mathematical sophistication and musical control
- **Harmony-centric design:** All control serves harmonic series generation rather than competing with it
- **Performance flexibility:** Logic operations allow real-time pattern control while functions provide mathematical harmonic evolution
- **Combinable with other guides:** Different approach from other guide ecosystems allows simultaneous mathematical harmony usage

**Expert Mathematical Performance:**
1. **Initialization:** Configure Maths functions, set Function Junction logic operations, prepare Hermod+ sequences
2. **Mathematical foundation:** Maths provides function generation → Function Junction adds logic control → Hermod+ adds musical sequences
3. **Logic harmonic control:** Logic operations create pattern control while mathematical functions guide harmonic series evolution algorithms
4. **Musical performance:** Complete system generates sophisticated harmonic series with mathematical enhancement and musical control
5. **Harmonic mastery:** Integrated ecosystem creates mathematical harmony with function sophistication and musical performance control

**Philosophical Achievement:**
This represents **complete mathematical harmony mastery** - where mathematical function generation, logic operations, and musical sequencing all serve harmonic series algorithms, creating a complete workstation that bridges mathematical sophistication with musical harmonic generation and performance control.

---

## Advanced Techniques

### **Mixed Mode Programming:**
- **Turn Hex Mode ON** but **select individual channels** for editing
- **Edits affect** only selected channels BUT **you hear** Hex layer offsets
- **Perfect for:** Fine-tuning individuals while hearing full context
- **Workflow:** Set up basic pattern in Hex, then tweak individuals

### **Variation Strategies:**
- **Clockwise:** Increases "ratcheting" probability (double-speed bursts)
- **Counterclockwise:** Increases "dropping" probability (half-speed gaps)
- **Rhythmic interest:** Prevents static loops, adds controlled chaos
- **Performance use:** Real-time variation control during live sets

### **Warp Function Deep Dive:**
- **12 o'clock:** No warping effect
- **Slight clockwise (1:30):** Chorus-style detuning (sweet spot!)
- **More clockwise:** Frequency shifting spreads channels apart
- **Counterclockwise:** Frequencies swarm toward Channel 1
- **Audio applications:** Creates rich chorusing and frequency shifting effects

### **Single CV Input Reassignment (v1.2+):**
- **Hold Channel Selector** button for 3 seconds
- **Reassign that CV input** to any of 14 different modulation destinations
- **Individual-channel destinations:** FREQ, TRIG, GAIN, WAVE, VARIATION, External Quantizer
- **Hex destinations:** Control all channels simultaneously
- **Custom routing:** Different CV setups per preset

---

## Common Use Cases

### **Additive Synthesis:**
- **All channels audio rate** with harmonic relationships
- **Mix output** provides rich, complex timbres
- **H.Gain control** shapes harmonic balance in real-time
- **Warp function** adds movement and chorusing effects

### **Polyrhythmic Modulation:**
- **All channels LFO rate** with rhythmic harmonic numbers
- **Individual outputs** modulate different parameters across your system
- **Tap/Trig sync** keeps everything locked to tempo
- **Variation adds** subtle rhythmic complexity

### **Drum Machine Brain:**
- **Wave Bank 3** (rhythm patterns) for trigger generation
- **Different speeds** per channel for polyrhythmic patterns
- **Individual outputs** → drum module trigger inputs
- **Variation control** adds fills and rhythmic interest

### **External Signal Quantizer:**
- **QUANT CV Input Mode** processes external signals
- **Six different scales** simultaneously on six channels
- **Individual or Mix outputs** provide quantized results
- **DC offset control** for key changes and transposition

### **Harmonic Oscillator Bank:**
- **Six individual oscillators** with easy harmonic relationships
- **Individual outputs** for separate processing
- **Frequency CV control** for playing harmonic intervals
- **Self-contained harmonic synthesizer** in 16HP

---

## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **Qubit Bloom:** Generative pattern evolution creates sophisticated harmonic control patterns with probability-based harmonic progression
- **Disting mk4:** Multi-algorithm processing provides mathematical precision for harmonic control with algorithmic accuracy
- **Cre8audio Function Junction:** Logic operations provide pattern enhancement and decision making for harmonic series evolution
- **DivKid Ochd & Expander:** Natural LFO breathing transforms mathematical harmony into organic, living musical relationships
- **Make Noise Wogglebug:** Controlled chaos creates unpredictable but musical harmonic evolution and pattern variation
- **Cross-Phase 2 Integration:** Combine multiple modulation approaches for sophisticated harmonic ecosystems with generative, algorithmic, and organic control

### **Perfect Partners for Beginners:**
- **VCAs:** Control individual channel levels and Mix output dynamics
- **Filters:** Process the Mix output or individual channels for timbral shaping
- **Clock Sources:** Sync rhythmic functions via Tap/Trig input for tempo-locked harmonic patterns
- **Effects Processors:** Reverb and delay enhance the additive synthesis textures

### **Advanced Harmonic Integration:**
- **Stereo Filters:** Process Mix output for spatial harmonic effects and stereo harmonic positioning
- **Multiple VCAs:** Individual channel amplitude control for complex harmonic mixing and performance
- **Sample & Hold:** Create stepped control voltages for harmonic number changes and quantized harmonic evolution
- **Sequential Switches:** Route individual channels to different destinations for complex harmonic routing

### **Essential Mathematical Partners:**
- **Mordax Data:** Monitor and analyze harmonic content, visualize harmonic series relationships in real-time
- **Squarp Hermod+:** Multi-track sequencing with quantization for musical harmonic sequence control
- **4MS RCD v2:** Polyrhythmic clock division for complex harmonic timing relationships
- **Mutable Marbles:** Probability-based pattern generation for mathematical harmonic evolution

### **Advanced System Integration:**
- **Performance Mixers:** Real-time control over individual channel levels for live harmonic performance
- **Touch Controllers:** Direct manipulation of frequency and harmonic parameters for expressive harmonic control
- **Master Clock:** Keep everything locked to tempo for complex polyrhythmic harmonic systems
- **Multi-function Modules:** MetaModule, Disting, Hermod+ serve multiple roles simultaneously for complete harmonic workstations

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"I'm not hearing anything from the mix output!"**
- Check that channels are included in the mix (Option 1 on H.GAIN/MIX)
- **Solution:** Select channel, hold Option, turn H.Gain/Mix knob clockwise from center

**"My knobs don't seem to match what I'm hearing!"**
- When loading presets, knob positions don't match saved values
- **Solution:** This is normal - parameter only changes when you actually move the knob

**"In Individual mode, turning knobs does nothing!"**
- No channels are selected for editing
- **Solution:** Click Channel Selector buttons to select channels (LED chase alerts you to this)

**"The CV inputs aren't working!"**
- Wrong CV Input Mode selected for your application
- **Solution:** Double-click hold Option + click Preset button to select correct mode

### **🎵 Pro Tips:**

**Starting Strategy:**
- **Begin with Preset 2** ("Saw Swarm") to understand basic oscillator stacking
- **Experiment with harmonic series** before trying individual programming
- **Use Hex Mode first** to understand overall behavior, then dive into individuals

**Harmonic Programming:**
- **Start all channels same frequency** then add harmonic numbers for relationships
- **Low harmonic numbers (1-8)** for musical timbres
- **Odd harmonics only** for hollow, woody sounds  
- **Even harmonics** for brassy, rich sounds

**CV Input Mode Selection:**
- **MULTI + Hex Mode:** One CV controls same parameter on all channels
- **FREQ Mode:** Individual oscillator control for polyrhythms
- **TRIG Mode:** Perfect drum machine with individual channel control
- **QUANT Mode:** Six-channel external quantizer

**Performance Techniques:**
- **Tap/Trig button** for tempo setting instead of manual frequency adjustment
- **H.Gain in Hex Mode** for real-time harmonic balance control
- **Variation control** for adding subtle complexity to static patterns
- **Mode combinations:** Audio rate + LFO rate channels simultaneously

**Warp Function Sweet Spots:**
- **Just right of center:** Subtle chorus/detuning effect
- **Hard left:** All frequencies converge to Channel 1 (dramatic effect)
- **Moderate right:** Frequency shifting for complex timbres

---

## Why This Module Rocks

### **The Philosophy:**
Mob of Emus brings **musical mathematics** into the modular world. Instead of six random channels, you get six channels that understand harmonic relationships, making complex music theory accessible through simple knob turns.

### **The Innovation:**
- **Harmonic control structure** makes additive synthesis and polyrhythms effortless
- **15 preset harmonic series** provide instant access to musical relationships
- **Hex Mode macro layer** maintains musical relationships while adding variation
- **Six channels, unlimited combinations** - oscillators, LFOs, envelopes, patterns, quantizers

### **The Practical Benefits:**
- **Replaces multiple modules:** Six oscillators, six LFOs, six envelopes, six quantizers in 16HP
- **Musical intelligence:** Harmonic relationships ensure results sound musical
- **Performance-oriented:** Real-time control over complex harmonic and rhythmic relationships
- **Educational value:** Learn music theory through hands-on harmonic exploration

### **Perfect For:**
- **Additive synthesis enthusiasts:** Easy access to complex harmonic timbres
- **Polyrhythm explorers:** Mathematical relationships create intricate rhythmic patterns
- **Modulation masters:** Six related but different modulation sources
- **Anyone wanting musical complexity:** Instant access to thousands of years of harmonic knowledge
- **Small system builders:** Enormous functionality in compact 16HP

### **The Magic:**
Mob of Emus proves that **mathematical beauty** and **musical intuition** can work together. The harmonic series has been the foundation of music for millennia - now you can explore it directly, hear it instantly, and use it creatively in ways never before possible.

---

**Bottom Line:** Mob of Emus isn't just six channels - it's a **mathematical harmony processor** that transforms simple frequency relationships into complex musical mathematics through harmonic series algorithms. Every patch teaches you something new about how harmonic relationships really work. As the **harmonic brain of Phase 2 ecosystems**, it transforms generative patterns, algorithmic processing, and organic modulation into unified mathematical harmony evolution.

---

*Visit [Rossum Electro-Music](http://www.rossum-electro.com/products/mob-of-emus/) for complete documentation, software updates, and factory presets*