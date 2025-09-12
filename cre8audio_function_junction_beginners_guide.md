# Cre8audio Function Junction - Beginner's Guide

**The Modulation Command Center**

---

## Quick Start: Get Your First Modulated Sound in 5 Minutes

**What is Function Junction?** Think of it as four essential modules in one compact 16HP package: a full ADSR envelope, a flexible function generator, an LFO, and a 3-channel attenuverting mixer. Designed with Pittsburgh Modular, it's the Swiss Army knife of modulation that can handle everything from basic envelope duties to complex, evolving modulation scenarios.

### Your First Envelope-Controlled Sound
1. **Connect any audio source** → **VCA audio input**
2. **Connect Function Junction ADSR OUT** → **VCA CV input**
3. **Connect gate/trigger source** → **Function Junction A GATE input**
4. **Adjust ADSR knobs** - Attack, Decay, Sustain, Release to taste
5. **Trigger your gate** and hear the envelope shape your sound!
6. **Bonus:** Try the LOOP button to make it cycle like an LFO

**Congratulations!** You've just used one of the four powerful sections in this modulation powerhouse!

---

## Essential Parameters (The Four Section System)

### **1. ADSR Envelope - Your Dynamic Shaper**
- **A, D, S, R knobs:** Classic four-stage envelope control
- **A GATE input:** Trigger/gate input for envelope
- **ADSR OUT:** Standard envelope output (0V-10V)
- **LOOP button:** Makes envelope cycle continuously = instant LFO!
- **A LOOP jack:** External gate control for loop on/off
- **LONG button:** Doubles envelope times for ultra-slow movements
- **Pro tip:** The ADSR is also normalled to mixer channel 1 for extra flexibility

### **2. Function Generator - The Shape-Shifter**
- **ATTACK knob:** Rise time control
- **DECAY knob:** Fall time control  
- **CURVE knob:** Shape control - exponential (left) → linear (center) → logarithmic (right)
- **F IN jack:** Trigger input for function
- **F OUT jack:** Function output
- **F TRIG jack:** End-of-decay trigger output (great for chaining!)
- **MOD button + knob:** Assign modulation to attack, decay, or both
- **SUSTAIN button:** Hold at peak until gate goes low (creates ASR envelope)
- **LOOP button:** Cycle the function continuously

### **3. LFO - The Rhythm Master**
- **RATE knob:** Speed control from very slow to audio rate
- **Triangle output:** Smooth, curved modulation
- **Square output:** Stepped, on/off modulation
- **Simple but effective:** Sometimes you just need a solid LFO!
- **Normalled to mixer:** Channel 3 gets LFO automatically

### **4. Attenuverting Mixer - The Control Center**
- **Three channels:** Each with dedicated attenuverter knob
- **Channel 1 (1A):** Normalled to ADSR output
- **Channel 2 (2F):** Normalled to Function Generator output  
- **Channel 3 (3L):** Normalled to LFO output
- **Individual outputs:** Channels 1 & 2 have separate outs
- **MIX output:** Combines all three channels
- **OR+ output:** Outputs highest voltage among the three channels
- **Magic:** Can be 3 independent attenuverters OR a 3-channel mixer

### **5. Advanced Features**
- **Normalling system:** Modules automatically connect to mixer when nothing patched
- **End-of-decay trigger:** Function generator outputs trigger when cycle completes
- **Multiple loop modes:** Both envelope and function can loop independently
- **Modulation routing:** Function generator can be modulated in creative ways
- **Curve shaping:** Exponential, linear, and logarithmic response curves

### **6. Hidden Capabilities**
- **Slew limiting:** Function generator can smooth stepped CV
- **Envelope following:** Function responds to audio input levels
- **Clock source:** Function in loop mode becomes complex clock generator
- **Voltage processor:** Mixer can process any CV or audio signals

---

## Progressive Patch Examples

### **Patch 1: First Steps - Classic VCA Envelope**
```
                    ┌─────────────────────┐
                    │   Gate Source       │
                    │ (Keyboard/Sequencer)│
                    │                     │
                    │ Gate Output ○───────┼─── Gate (Yellow)
                    └─────────────────────┘      ║
                                                  ▼
                    ┌─────────────────────┐      ║
                    │   Cre8audio        │      ║
                    │ Function Junction  │      ║
                    │                    │      ║
                    │ A GATE Input    ◀──┼──────┘
                    │                    │
                    │ A: Attack    ●     │
                    │ D: Decay     ●     │
                    │ S: Sustain   ●     │
                    │ R: Release   ●     │
                    │                    │
                    │ ADSR OUT ○─────────┼─── CV (Blue)
                    └─────────────────────┘      ║
                                                  ▼
                    ┌─────────────────────┐      ║
                    │       VCA          │      ║
                    │                    │      ║
                    │ Audio Input     ◀──┼──────┼─── Audio (Red)
                    │                    │      ║
                    │ CV Input        ◀──┼──────┘
                    │                    │
                    │ Audio Output ○─────┼─── Final Audio Output
                    └─────────────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|-------------------|
| Gate Source → A GATE | Gate (Yellow) | **Trigger envelope** | **Understand gate-to-envelope relationship** |
| ADSR OUT → VCA CV | CV (Blue) | **Control amplitude** | **Learn envelope modulation basics** |
| Audio Source → VCA Audio In | Audio (Red) | **Signal to be shaped** | **Complete signal chain concept** |

**Module Settings:**
- **Attack:** 9 o'clock (quick rise)
- **Decay:** 11 o'clock (moderate decay)
- **Sustain:** 2 o'clock (good sustain level)
- **Release:** 10 o'clock (natural release)
- **LOOP:** OFF (single envelope per trigger)

**Learning Objectives:**
- Master basic ADSR envelope concept
- Understand gate input triggering
- Learn CV control of VCA amplitude
- Experience classic synthesizer voice architecture

**Visual Feedback:**
- **ADSR LED:** Flashes on gate triggers, shows envelope activity
- **VCA response:** Hear audio shaped by envelope
- **A/D/S/R knob effects:** Turn each knob to hear envelope shape changes
- **Result:** Classic synthesizer voice with proper amplitude shaping

### **Patch 2: Intermediate - Phase 2 Modulation Processing**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │     DivKid Ochd    │      │   Cre8audio        │
   │    (Phase 2)       │      │ Function Junction  │
   │                    │      │   (Phase 2)        │
   │ LFO 2 ○────────────┼──────┼─▶ F MOD CV          │
   │       ║            │      │                    │
   │ Trigger 1○─────────┼──────┼─▶ F IN              │
   │       ║            │      │                    │
   │ LFO 6 ○────────────┼──────┼─▶ LFO Rate CV       │
   │       ║            │      │                    │
   │       ║            │      │ Attack:  9 o'clock │
   │       ║            │      │ Decay:  12 o'clock │
   │       ║            │      │ LOOP:   ON         │
   │       ║            │      │ MOD:    Attack     │
   │       ║            │      │                    │
   │       ║            │      │ F OUT ○────────────┼─── CV (Blue)
   │       ║            │      │       ║            │
   │       ║            │      │ LFO Tri○───────────┼─── CV (Blue)
   │       ║            │      │       ║            │
   └───────║────────────┘      └───────║────────────┘
           ║                           ║    ║
   CV (Blue)║                   CV (Blue)║    ║ CV (Blue)
           ▼                           ║    ║
   ┌─────────────────────┐              ▼    ▼
   │      Filter        │      ┌──────────────────┐
   │                    │      │   Oscillator     │
   │ Cutoff CV       ◀──┼──────┼─ PWM Input    ◀──┼─── From LFO Tri
   │                    │      │                  │
   │ Audio Input     ◀──┼──────┼─ Audio Input  ◀──┼─── Audio Source
   │                    │      │                  │
   │ Audio Output ○─────┼──────┼─ Audio Output ○──┼─── Final Audio
   └─────────────────────┘      └──────────────────┘
```

| Connection | Cable Type | Purpose | Phase 2 Integration |
|------------|------------|---------|--------------------|
| Ochd LFO 2 → F MOD CV | CV (Blue) | **Organic envelope shaping** | **Phase 2 modulation processing** |
| Ochd Trigger 1 → F IN | Gate (Yellow) | **Organic timing** | **Non-mechanical function triggers** |
| Ochd LFO 6 → LFO Rate CV | CV (Blue) | **Tempo modulation** | **Organic LFO speed control** |
| F OUT → Filter Cutoff | CV (Blue) | **Shaped filter modulation** | **Musical envelope filtering** |
| LFO Triangle → Oscillator PWM | CV (Blue) | **Pulse width modulation** | **Organic timbral changes** |

**Module Settings:**
- **Function Generator:** Attack 9 o'clock, Decay 12 o'clock, LOOP ON
- **MOD Assignment:** Attack (F MOD affects attack time)
- **F MOD Amount:** 11 o'clock (moderate organic influence)
- **LFO Rate:** 2 o'clock (active modulation speed)

**Learning Objectives:**
- **Phase 2 modulation processing:** Use Function Junction to shape organic modulation
- **Multi-section coordination:** Function, LFO, and mixer working together
- **Organic envelope shaping:** Ochd LFOs control envelope characteristics
- **Complex modulation routing:** Multiple modulation sources to different destinations

**Advanced Techniques:**
- **Organic function shaping:** Ochd LFO modulates attack time for evolving envelopes
- **Cascading modulation:** Function output shapes filter, LFO shapes oscillator
- **Non-mechanical timing:** Ochd triggers create organic, breathing function cycles
- **Tempo modulation:** LFO speed varies with Ochd's organic timing

**Visual Feedback:**
- **Function LED activity:** Changes with Ochd trigger timing (organic, not mechanical)
- **MOD LED:** Shows attack modulation from Ochd LFO 2
- **Organic evolution:** All modulation sources drift and evolve together
- **Result:** Complex, evolving modulation that breathes with organic life

### **Patch 3: Advanced - Phase 2 AI Integration with Marbles**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Mutable     │───▶│ Cre8audio   │───▶│   Complex   │
│ Marbles     │    │ Function    │    │ Oscillator  │
│             │    │ Junction    │    │             │
│ X1 Out  ───┼───▶│             │    │ 1V/Oct  ◀──┼─── [From MIX]
│             │    │ Ch1 (1A) ◀─┼────┼─             │
│ t1 Out  ───┼───▶│ [Norm ADSR]  │    │ FM Amt  ◀──┼─── [From Ch1 Out]
│             │    │             │    │             │
│ X2 Out  ───┼───▶│ Ch2 (2F) ◀─┼────┼─ Sync    ◀──┼─── [From Ch2 Out]
│             │    │ [Norm F]     │    │             │
│ Y Out   ───┼───▶│             │    │ Audio Out──┼─── Complex
└─────────────┘    │ Ch3 (3L) ◀─┼────┼─            │    Timbral
        ▲          │ [Norm LFO]   │    │ OR+ Out ◀──┼─── Evolution
        │          │             │    └─────────────┘
        │          │ A GATE   ◀──┼────────────── [From t1]
        │          │             │
        │          │ MIX Out  ───┼─────────────▶ [Main pitch CV]
        │          │             │
        │          │ Ch1 Out  ───┼─────────────▶ [FM modulation]
        │          │             │
        │          │ Ch2 Out  ───┼─────────────▶ [Sync modulation]
        │          │             │
        │          │ Attenuv. 1: │ (X1 amount)
        │          │ 10 o'clock  │
        │          │             │
        │          │ Attenuv. 2: │ (F amount)  
        │          │ 2 o'clock   │
        │          │             │
        │          │ Attenuv. 3: │ (LFO amount)
        │          │ 11 o'clock  │
        │          └──────────────┘
        │
        └──────────── Marbles Learning Feedback
```

| Module Chain | Signal Flow | Purpose | Advanced Concept |
|-------------|-------------|---------|------------------|
| **Marbles X1 → Ch1 (normalled ADSR)** | AI voltage | **Intelligent pitch modulation** | **AI controls envelope-shaped pitch** |
| **Marbles t1 → ADSR Gate** | AI timing | **Musical trigger generation** | **AI timing triggers envelopes** |
| **Marbles X2 → Ch2 (normalled Function)** | AI voltage | **Function-shaped modulation** | **AI controls complex envelope shapes** |
| **Marbles Y → Ch3 (normalled LFO)** | AI voltage | **LFO amplitude control** | **AI controls modulation depth** |
| **MIX → Oscillator 1V/Oct** | Complex CV | **Multi-source pitch control** | **Three intelligences control pitch** |
| **Individual Outs → Oscillator** | Shaped CV | **Timbral modulation** | **Different shapes for different parameters** |

**Module Settings:**
- **Channel Attenuverters:** Ch1: 10 o'clock, Ch2: 2 o'clock, Ch3: 11 o'clock
- **ADSR:** Medium attack/decay for musical pitch shaping
- **Function:** Different curve from ADSR for timbral contrast
- **LFO:** Moderate rate for vibrato/tremolo effects

**Learning Objectives:**
- **Advanced mixer techniques:** Using normalled signals with external control
- **Multi-source modulation:** Three different modulation shapes simultaneously
- **AI-driven complexity:** Marbles intelligence controls all modulation characteristics
- **Hierarchical modulation:** AI controls modulators that control oscillator

**Expert Techniques:**
- **Normalled signal processing:** External voltages control internal modulators
- **Parallel modulation routing:** Same source creates different effects via different processors
- **Complex timbral control:** Multiple modulation types create evolving harmonic content
- **AI modulation matrix:** Single intelligent source controls entire modulation network

**Visual Feedback:**
- **Channel LEDs:** Show individual modulation activity from each attenuverter
- **ADSR/Function interaction:** Watch how AI voltages change envelope characteristics
- **Complex oscillator response:** Hear multiple simultaneous modulations creating rich timbres
- **Result:** Evolving, intelligent musical complexity from simple AI decisions

### **Patch 4: Expert - Complete Phase 2 Modulation Ecosystem Hub**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Phase 2     │◀──▶│ Cre8audio   │───▶│ Synthesis   │
│ Modulation  │    │ Function    │    │ Network     │
│ Sources     │    │ Junction    │    │             │
│             │    │ (Hub)       │    │ Multiple    │
│ Ochd LFOs ──┼───▶│             │    │ Oscillators │
│ 1, 3, 7     │    │ A GATE   ◀─┼────┼─             │
│             │    │             │    │ Multiple    │
│ Marbles ───┼───▶│ F MOD CV ◀─┼────┼─ Filters     │
│ X1, X2, Y   │    │             │    │             │
│             │    │ F TRIG ───┼───▶│ Multiple    │
│ RCD ──────┼───▶│             │    │ Effects     │
│ Out 2,5,7   │    │ LFO Rate ◀─┼────┼─             │
│             │    │             │    │ Intelligent │
│ Wogglebug ──┼───▶│ Ch1 In   ◀─┼────┼─ Modulation  │
│ Stepped     │    │ Ch2 In   ◀─┼────┼─ Distribution│
│ Smooth      │    │ Ch3 In   ◀─┼────┼─             │
│ Ring-Mod    │    │             │    │ Matrix      │
└─────────────┘    │ MIX Out  ───┼───▶│             │
        ▲          │ Ch1 Out  ───┼───▶│ Complex     │
        │          │ Ch2 Out  ───┼───▶│ Musical     │
        │          │ OR+ Out  ───┼───▶│ Evolution   │
        │          │             │    │             │
        │          │ F TRIG ───┼────┼─ Audio Out──┼─── Complete
        │          │             │    └─────────────┘   System
        │          │ Self-Patch: │
        │          │ F TRIG→A GT │
        │          │ ADSR→F MOD  │
        │          └──────────────┘
        │
        └──────────── Phase 2 Ecosystem Feedback
```

**Complete Phase 2 Integration as Modulation Hub:**

| Phase 2 Module | Function Junction Role | System Integration | Musical Result |
|---------------|----------------------|-------------------|----------------|
| **DivKid Ochd** | Organic envelope shaping | **LFOs → MOD inputs** | **Organic envelope evolution** |
| **Mutable Marbles** | AI modulation processing | **X outputs → Mixer channels** | **Intelligent modulation mixing** |
| **4ms RCD v2** | Polyrhythmic triggering | **Divisions → Trigger inputs** | **Mathematical envelope timing** |
| **Make Noise Wogglebug** | Chaos modulation sources | **Chaos CVs → All inputs** | **Uncertainty in modulation** |
| **System Feedback** | Learning and adaptation | **Audio analysis → Rate/MOD** | **Self-improving modulation** |

**Expert System Architecture:**
- **Function Junction as central hub:** Processes all Phase 2 modulation sources
- **Intelligent mixing:** AI-driven combination of organic, mathematical, and chaotic sources
- **Self-patching networks:** Internal feedback creates complex recursive behaviors
- **Adaptive processing:** System learns optimal modulation combinations over time

**Learning Objectives:**
- **Modulation ecosystem design:** Function Junction as processing center for entire system
- **Phase 2 integration mastery:** All modules working together through central hub
- **Complex system behavior:** Understand emergent properties of interconnected modulators
- **Performance-level patching:** Real-time control of complex modulation networks

**Expert Techniques:**
- **Hub-and-spoke architecture:** Function Junction processes inputs from all Phase 2 modules
- **Cascading feedback:** F TRIG → A GATE creates self-generating envelope chains
- **Multi-source mixing:** Different modulation philosophies combined intelligently
- **System-level thinking:** Design modulation networks, not individual connections

**Performance Evolution:**
1. **Initialization** (0-2 min): All Phase 2 modules establish foundational patterns
2. **Integration** (2-10 min): Function Junction begins processing and mixing sources
3. **Emergence** (10-30 min): Complex behaviors emerge from simple modulation interactions
4. **Optimization** (30+ min): System finds optimal modulation combinations for musical content

**Advanced Philosophy:**
Function Junction becomes the **neural center** of a Phase 2 modulation brain: Ochd provides organic timing, Marbles adds intelligence, RCD contributes mathematical precision, Wogglebug introduces controlled chaos, and Function Junction processes it all into musical modulation that shapes synthesis networks. The system thinks in modulation.

---

## Common Use Cases

**🎚️ **Essential Envelopes:** ADSR for VCAs, filters, and any dynamic shaping**
**⚡ **Function Generation:** Attack/decay shapes for percussion, plucks, and accents**
**🌊 **LFO Duties:** Tremolo, vibrato, filter sweeps, and rhythmic modulation**
**🎛️ **CV Mixing:** Combine multiple modulation sources into complex shapes**
**🔄 **Looping Envelopes:** Turn any envelope into cycling LFO with loop buttons**
**⏱️ **Timing Control:** Use end-of-decay triggers for sequence timing**
**📈 **Slew Limiting:** Smooth out stepped CV with function generator**
**🎭 **Performance Tool:** Real-time modulation control with mixer attenuverters**

---

## Beginner "Gotchas"

### **Normalling Behavior Confusion**
- **When inputs are empty:** Mixer channels automatically get ADSR, Function, LFO signals
- **When you patch inputs:** The normalling disconnects and you get your patched signal
- **This is powerful:** Instant access to all three modulators through mixer
- **Can be confusing:** Why did my mixer behavior change when I patched something?
- **Remember:** Empty jacks = automatic signals, patched jacks = your signals

### **Loop Button Functions**
- **ADSR LOOP:** Makes envelope cycle continuously (becomes LFO)
- **Function LOOP:** Makes function cycle continuously (becomes complex LFO)
- **Independent:** Each can loop separately
- **Visual feedback:** LEDs show when loop modes are active
- **Don't forget:** Loop modes ignore new gate triggers until loop is disabled

### **Attenuverter Control Direction**
- **12 o'clock = no signal** (attenuverters start at zero)
- **Clockwise from 12 = positive amount**
- **Counter-clockwise from 12 = inverted/negative amount**
- **Full CW or CCW = maximum positive or negative**
- **Practice:** Turn knobs from 12 o'clock position to understand behavior

### **Function Generator Modulation Assignment**
- **MOD button cycles:** Attack only → Decay only → Both → Attack only...
- **Must press MOD button** to select what gets modulated
- **LED indicates:** Which parameter(s) the F MOD input affects
- **F MOD knob:** Controls amount of modulation (attenuverter)
- **Powerful feature:** Can create complex modulation interactions

### **OR+ Output vs MIX Output**
- **MIX output:** Sum of all three channels (can create complex shapes)
- **OR+ output:** Only the highest voltage among the three (peak selector)
- **Different uses:** MIX for blended modulation, OR+ for "winner takes all"
- **Don't ignore OR+:** Great for selecting strongest modulation signal

---

## Next Steps

1. **Master each section individually** - understand ADSR, Function, LFO, and Mixer separately first
2. **Explore normalling system** - see how sections automatically connect to mixer
3. **Experiment with loop modes** - turn envelopes into LFOs, functions into complex modulators
4. **Practice mixer workflows** - learn to blend multiple modulation sources creatively
5. **Try self-patching** - use trigger outputs to create feedback loops and interactions
6. **Combine with other modules** - use as modulation hub for entire patches

**Remember:** Function Junction rewards exploration - each section can work alone or in combination with the others for exponentially more possibilities!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **VCAs (2HP VCA, Veils):** Function Junction excels at providing envelope control for dynamics
- **Filters (SEM, MMF):** ADSR and Function sections perfect for filter modulation
- **Oscillators:** LFO section handles vibrato, tremolo, and PWM duties
- **Clock sources:** External clocks unlock rhythmic potential of Function Generator

### **Next-Level Combinations:**
- **Make Noise Maths:** Two function generators = incredible modulation possibilities when combined
- **Attenuators/Offset:** Fine-tune the modulation amounts beyond what mixer provides
- **Sample & Hold:** Use Function trigger outputs to clock S&H for stepped modulation
- **Multiple/Splitter:** Send Function Junction outputs to multiple destinations

### **Advanced Integration:**
- **Complex Oscillators:** Use multiple Function Junction outputs for FM, sync, and timbral control
- **Sequencers:** End-of-decay triggers perfect for advancing step sequences
- **Granular processors:** Complex modulation from mixer perfect for granular parameter control
- **Performance controllers:** Use as modulation source behind touch/expression interfaces

### **Modulation Hub Applications:**
- **Poly voices:** Multiple Function Junctions for independent voice modulation
- **West Coast synthesis:** Function generator pairs perfectly with low-pass gates
- **Ambient patches:** Long envelope times + loop modes = evolving soundscapes
- **Percussive sounds:** Function generator excels at pluck and strike envelopes

### **Pro Tips:**
- **Use as "modulation distributor":** One complex modulation (MIX) to multiple destinations
- **Rhythmic modulation:** Function in loop mode + clock division = polyrhythmic modulation
- **Modulate the modulators:** Patch LFO to Function MOD input for evolving shapes
- **Emergency utilities:** Each section can solve common patch problems independently

### **Creative Experiments:**
- **Audio rate modulation:** Push Function and LFO into audio range for FM synthesis
- **Trigger cascades:** Chain multiple Function Junction modules using TRIG outputs
- **Parallel processing:** Split audio, use different modulation on each path, recombine
- **Interactive modulation:** Use touch controllers to manipulate mixer levels in real-time

---

*Function Junction is designed to be immediately useful but endlessly deep - don't be afraid to experiment with unconventional patching!*