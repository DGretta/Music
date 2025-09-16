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

### **Patch 5: Intermediate - Phase 2 Organic Groove Processing**
```
┌─────────────┐ ┌─────────────────┐
│  DivKid     │ │      4ms      │
│    Ochd     │ │   SCM Plus    │
│ (Organic    │ │(Clock Multi)  │
│  LFO Sys)   │ │               │
│             │ │               │
│ LFO 1   ○──┼─┼─Slip CV       │
│       ║     │ │       ║       │
│ LFO 4   ○──┼─┼─Shuffle CV    │
│       ║     │ │       ║       │
│ LFO 8   ○──┼─┼─Rotate CV     │
│       ║     │ │               │
│ Natural     │ │ S3      ○───┼─── Organic Groove (Yellow)
│ Breathing   │ │ S4      ○───┼─── Rhythmic Life (Yellow)
│ Rhythmic    │ │ S6      ○───┼─── Polyrhythmic (Yellow)
│ Evolution   │ │ x1      ○───┼─── Master Clock (Yellow)
└─────────────┘ └─────────────────┘
        ║               ║
        ▼               ▼
┌────────────────────────────────────────────┐
│      Organic Groove Processing System      │
│                                            │
│ Natural LFO Breathing + Clock Manipulation │
│                                            │
│ Ochd → Natural organic modulation         │
│ SCM Plus → Groove generation processor    │
│                                            │
│ Living Rhythm Generation (16HP total)     │
│                                            │
│ Organic-Enhanced Groove ○─────┼─── Output │
└────────────────────────────────────────────┘
```

**Organic Groove Integration:**

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → SCM Slip** | Organic CV | **Natural shuffle evolution** | **Creates breathing shuffle that evolves naturally over time** |
| **Ochd LFO 4 → SCM Shuffle** | Organic CV | **Pattern selection flow** | **Smoothly transitions between shuffle patterns organically** |
| **Ochd LFO 8 → SCM Rotate** | Organic CV | **Output shifting waves** | **Creates natural gear changes in polyrhythmic relationships** |
| **SCM S3/S4/S6 → Triggers** | Clock outputs | **Organic groove outputs** | **Shuffled clocks with natural timing evolution and breathing** |

**Learning Objectives:**
- **Organic modulation principles:** How natural LFO breathing transforms rigid clocks into living grooves
- **Multi-parameter organic control:** Using multiple Ochd outputs for coordinated natural evolution
- **Groove transformation:** Understanding how organic modulation creates human-feel timing from mathematical precision
- **Natural timing evolution:** Creating rhythmic systems that breathe and evolve naturally over time

**Alternative Organic Sources:**
- **Instead of Ochd:** Try **Batumi** for more geometric organic movement, or **Quadrax** for discrete organic steps
- **Budget alternatives:** **2HP LFO** provides basic organic modulation for slip/shuffle control
- **Different character:** **Maths** gives mathematical organic relationships vs Ochd's continuous breathing

### **Patch 6: Advanced - Chaos Groove Mathematics**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Make Noise  │ │  Cre8audio  │ │      4ms      │
│ Wogglebug   │ │ Function    │ │   SCM Plus    │
│(Chaos Gen)  │ │ Junction    │ │(Clock Multi)  │
│             │ │(Logic Ops)  │ │               │
│ Smooth  ○──┼─┼─Input A     │ │               │
│       ║     │ │       ○──┼─┼─Skip CV       │
│ Stepped ○──┼─┼─Input B     │ │       ║       │
│       ║     │ │ AND Out ○──┼─┼─4x Fast Gate │
│ Woggle  ○──┼─┼─Input C     │ │       ║       │
│       ║     │ │ OR Out  ○──┼─┼─Mute Gate    │
│ Burst   ○───────────────────┼─Resync Trig   │
│       ║     │ │             │ │       ║       │
│ Controlled  │ │ Logic       │ │ S3/S5   ○───┼─── Chaos Groove (Yellow)
│ Chaos       │ │ Enhanced    │ │ S4/S6   ○───┼─── Mathematical (Yellow)
│ Generation  │ │ Pattern     │ │ x1/x2   ○───┼─── Stable Ref (Yellow)
└─────────────┘ └─────────────┘ └─────────────────┘
        ║               ║               ║
        ▼               ▼               ▼
┌────────────────────────────────────────────────────────────────┐
│              Chaos Groove Mathematics System                   │
│                                                                │
│ Controlled Chaos + Logic Operations + Clock Manipulation      │
│                                                                │
│ Wogglebug → Chaos generation + burst synchronization         │
│ Function Junction → Logic-enhanced pattern control           │
│ SCM Plus → Mathematical groove processing core               │
│                                                                │
│ Chaos-Logic Enhanced Rhythm Generation (26HP total)          │
│                                                                │
│ Mathematical Chaos Groove ○─────────────────┼─── Output      │
└────────────────────────────────────────────────────────────────┘
```

**Chaos Groove Mathematics Integration:**

| Module Integration | Signal Flow | Purpose | Mathematical Synergy |
|-------------------|-------------|---------|----------------------|
| **Wogglebug Smooth → Function A** | Chaos CV | **Continuous chaos processing** | **Smooth chaos becomes logically processed control voltage** |
| **Wogglebug Stepped → Function B** | Chaos CV | **Discrete chaos steps** | **Stepped chaos creates logical rhythm decision points** |
| **Function AND → SCM 4x Fast** | Logic gate | **Logic speed bursts** | **Logic operations create musically timed tempo increases** |
| **Function OR → SCM Mute** | Logic gate | **Logic rhythm breaks** | **Mathematical logic determines musical timing for breaks** |
| **Wogglebug Burst → SCM Resync** | Chaos trigger | **Chaos synchronization** | **Burst events provide natural resync points for mathematical precision** |
| **Function Skip Control → SCM Skip** | Processed chaos | **Mathematical skip patterns** | **Logic-processed chaos creates musical skip pattern processing** |

**Learning Objectives:**
- **Chaos mathematics:** How controlled randomness creates musical rather than chaotic rhythmic patterns
- **Logic enhancement:** Using logic operations to make chaos more musical and performance-friendly
- **Mathematical synchronization:** Balancing chaos with synchronized reference points for musical coherence
- **Performance chaos:** Creating controllable unpredictability that enhances rather than disrupts groove

**Alternative Chaos Sources:**
- **Instead of Wogglebug:** Try **Turing Machine + Expanders** for binary chaos, or **Radio Music** for sample-based chaos
- **Logic alternatives:** **Befaco Burst** or **2HP Logic** for basic AND/OR operations
- **Different approach:** **Nonlinearcircuits** modules for more experimental chaos generation

### **Patch 7: Expert - Complete Rhythmic Performance Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Make Noise  │ │  Cre8audio  │ │  Erica      │ │      4ms      │
│ Wogglebug   │ │ Function    │ │  Pico       │ │   SCM Plus   │
│(Chaos Gen)  │ │ Junction    │ │(Utilities)  │ │(Clock Multi)  │
│             │ │(Logic Ops)  │ │             │ │               │
│ Smooth  ○──┼─┼─Input A     │ │ VCA In  ○──┼─┼─Slip CV       │
│       ║     │ │       ○──┼─┼─Mix In     │ │       ║         │
│ Stepped ○──┼─┼─Input B     │ │             │ │ Shuffle CV   │
│       ║     │ │       ○──┼─┼─Atten In   │ │ ○─────────────┼─── CV (Blue)
│ Woggle  ○──┼─┼─Input C     │ │ Out        │ │       ║         │
│       ║     │ │       ○──┼─┼─Delay In   │ │ Skip CV ○───┼─── CV (Blue)
│ Burst   ○──┼─┼─Input D     │ │ Processing │ │       ║         │
│       ║     │ │ AND Out ○──┼─┼─Chain      │ │ 4x Fast ○───┼─── Gate (Yellow)
│ Chaos       │ │ OR Out  ○──┼─┼─Utility    │ │       ║         │
│ Generation  │ │ NOT Out ○──┼─┼─Signal     │ │ Mute    ○───┼─── Gate (Yellow)
│ Organic     │ │ XOR Out ○──┼─┼─Management │ │ S3/S4/S6○───┼─── Clock (Yellow)
│ Evolution   │ │ Logic Ops   │ │ Compact    │ │ x1/x2   ○───┼─── Clock (Yellow)
└─────────────┘ └─────────────┘ └─────────────┘ └─────────────────┘
        ║               ║               ║               ║
        ▼               ▼               ▼               ▼
┌────────────────────────────────────────────────────────────────────┐
│           Complete Rhythmic Performance Ecosystem                     │
│                                                                        │
│ Organic Chaos + Logic Operations + Compact Utils + Clock Manipulation│
│                                                                        │
│ Wogglebug   → Organic chaos generation + natural rhythmic evolution   │
│ Function Jct→ Logic operations + pattern control processing           │
│ Pico Chain  → Compact utility processing + signal conditioning       │
│ SCM Plus    → Clock manipulation core + groove generation            │
│                                                                        │
│ Complete Rhythmic Performance Workstation (32HP total)               │
│                                                                        │
│ Chaos-Logic-Enhanced Groove ○──────────────────┼─── Complete Output
└────────────────────────────────────────────────────────────────────┘
```

**Complete Rhythmic Performance Integration:**

| Layer | Function | SCM Plus Role | Musical Result |
|-------|----------|---------------|----------------|
| **Organic (Wogglebug)** | Natural chaos breathing | **Chaos-enhanced groove generation** | **Natural rhythmic evolution with controlled unpredictability** |
| **Logic (Function Junction)** | Pattern control processing | **Logic-enhanced timing manipulation** | **Mathematical pattern control with performance logic** |
| **Processing (Pico Chain)** | Signal conditioning | **Professional signal management** | **Clean, conditioned signals for complex rhythmic performance** |
| **Groove (SCM Plus)** | Clock manipulation core | **Complete timing ecosystem brain** | **Advanced groove generation with multi-layer enhancement** |

**Complete System Design:**
- **Wogglebug as chaos engine:** Organic chaos generation provides natural rhythmic evolution for human-like groove development
- **Function Junction as logic processor:** Logic operations create pattern control and performance-oriented rhythmic processing
- **Pico chain as signal manager:** Compact utilities provide professional signal conditioning for complex rhythmic performance systems
- **SCM Plus as groove core:** Clock manipulation with chaos and logic enhancement for complete rhythmic performance control
- **Total ecosystem:** 32HP complete rhythmic performance workstation combining chaos, logic, processing, and groove generation

**Performance Applications:**
1. **Organic rhythmic evolution:** Wogglebug creates natural timing evolution → Function Junction adds logic control → SCM Plus generates enhanced grooves
2. **Performance control:** Logic operations provide pattern control while chaos adds natural evolution and human feel
3. **Professional signal management:** Pico utilities ensure clean signal conditioning for complex rhythmic performance systems
4. **Complete groove workstation:** Generate, evolve, control, and perform rhythmic patterns in single integrated performance system
5. **Human-feel rhythm mastery:** Complete ecosystem creates rhythmic performance with natural evolution and professional control

**Why This Complete Ecosystem Works:**
- **Leverages multi-function capabilities:** Each module serves multiple rhythmic roles simultaneously for maximum performance power
- **Chaos + Logic + Processing:** Three different approaches enhance rhythmic performance with natural evolution and professional control
- **Human-feel priority:** Chaos and logic enhance rather than replace human rhythmic feel and musical groove development
- **Performance flexibility:** Logic operations allow real-time pattern control while chaos provides natural evolution patterns
- **Combinable with other guides:** Different approach from other guide ecosystems allows simultaneous rhythmic performance usage

**Expert Rhythmic Performance:**
1. **Initialization:** Configure Wogglebug chaos rates, set Function Junction logic operations, prepare Pico signal conditioning
2. **Organic rhythm foundation:** Wogglebug provides natural evolution → Function Junction adds logic control → Pico processes signals cleanly
3. **Logic groove control:** Logic operations create pattern control while chaos adds natural human-like timing evolution
4. **Professional performance:** Pico utilities ensure clean signal management for complex rhythmic performance system integration
5. **Complete rhythm mastery:** Integrated ecosystem creates professional rhythmic performance with natural evolution and logic control

**Philosophical Achievement:**
This represents **complete rhythmic performance mastery** - where organic chaos evolution, logic operations, and professional signal management all serve human-feel groove generation, creating a complete workstation that bridges natural timing evolution with performance control and professional signal integrity.

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

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Natural organic modulation for slip, shuffle, and rotate creates breathing grooves that evolve naturally over time like a human drummer's feel
- **Make Noise Wogglebug:** Controlled chaos generation provides natural rhythmic evolution + burst synchronization for musical timing chaos that enhances rather than disrupts groove
- **Cre8audio Function Junction:** Logic operations + pattern control processing creates mathematical pattern control with performance logic for rhythm decision making
- **Erica Pico Chain:** Compact utility processing + signal conditioning provides professional signal management for complex rhythmic performance system integration
- **Mutable Marbles:** Musical randomness + bias control → SCM Plus for probability-enhanced groove control with adaptive rhythm learning circuits
- **Cross-Phase 2 Integration:** SCM Plus serves as rhythmic performance core where organic breathing, controlled chaos, and pattern learning all enhance groove generation for complete timing ecosystems

### **Essential Partners:**
- **Drum Modules:** Basimilus Iteritas, Plonk, sample players
- **Logic Modules:** For combining clock signals (AND, OR gates)
- **Sequencers:** Anything that accepts external clocking
- **Envelope Generators:** For shaping the timing pulses

### **Advanced Rhythmic Combinations:**
- **Quantizers:** Turn shuffled clocks into melodic sequences  
- **Probability Gates:** Add another layer of rhythmic variation
- **Sample & Hold:** Capture slip/shuffle values for repeatable grooves
- **Multiple/Buffered Multiple:** Split one SCM output to multiple destinations

### **Essential Performance Partners:**
- **Chaos generators (Wogglebug, Turing Machine):** Natural rhythmic evolution patterns that enhance human groove feel
- **Logic modules (Function Junction, Befaco Burst):** Intelligent pattern control for performance-oriented rhythmic manipulation
- **Performance controllers (16n, QuNexus):** Real-time control over groove parameters for live rhythmic performance
- **Recording systems (ES-9, FH-2):** Capture and analyze groove performances for detailed rhythmic study

### **Advanced System Integration:**
- **Complete rhythmic workstations:** SCM Plus + multi-function modules create professional groove performance systems
- **Organic timing enhancement:** Chaos generators create natural evolution while preserving musical groove development
- **Pattern control performance:** Logic operations provide advanced rhythmic decision making for performance systems
- **Cross-system integration:** SCM Plus integrates with all synthesis systems while providing rhythmic performance core

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with SCM Plus fundamentals:** Master basic clock multiplication, slip, shuffle, skip parameters and understand S vs x outputs
2. **Add organic breathing:** Integrate DivKid Ochd for natural groove evolution (see Ochd integration reference)
3. **Include controlled chaos:** Add Make Noise Wogglebug for musical chaos enhancement (see Wogglebug integration reference)
4. **Add pattern control:** Include Function Junction for logic-enhanced rhythm processing (see Function Junction reference)
5. **Include utility processing:** Add Pico utilities for professional signal conditioning (see Pico integration reference)
6. **Complete the ecosystem:** Combine all elements for complete rhythmic performance workstation

### **Cross-Module Learning Opportunities:**
- **SCM Plus + Ochd:** Natural groove evolution - learn how organic modulation transforms rigid clocks into breathing, living rhythms
- **SCM Plus + Wogglebug:** Chaos groove mathematics - understand how controlled randomness creates musical rather than chaotic timing patterns
- **SCM Plus + Function Junction:** Logic rhythm processing - discover how mathematical operations create pattern control for performance-oriented timing
- **SCM Plus + Pico Chain:** Professional signal management - master clean signal conditioning for complex rhythmic performance system integration
- **All Phase 2 + SCM Plus:** Complete rhythmic ecosystem - integrate organic breathing, controlled chaos, logic processing, and groove generation

### **Skill Development Milestones:**
- **Beginner:** Basic clock multiplication mastery - understand x vs S outputs, slip/shuffle/skip parameters, and basic groove creation
- **Intermediate:** Organic groove integration - use natural modulation sources to create breathing, evolving rhythmic patterns
- **Advanced:** Chaos mathematics integration - balance controlled randomness with musical coherence for enhanced groove patterns
- **Expert:** Complete ecosystem design - orchestrate multi-layer rhythmic performance systems with professional signal management

### **Advanced Rhythmic Concepts:**
- **Human-feel timing:** How organic modulation and controlled chaos create the subtle timing variations that make electronic rhythms feel alive
- **Mathematical groove processing:** Using logic operations and pattern control to create performance rhythmic decision making
- **Performance rhythm systems:** Designing complete workstations that respond naturally to real-time control and musical expression
- **Cross-system rhythm integration:** How SCM Plus serves as timing brain for complete modular synthesis ecosystems

### **Performance Applications:**
- **Live Groove Control:** Real-time manipulation of slip, shuffle, skip, and rotate for dynamic rhythmic performance
- **Generative Rhythm Systems:** Self-evolving timing patterns using organic modulation and chaos sources for natural evolution
- **Hybrid Timing Systems:** Integration with traditional sequencers and drum machines for enhanced groove feel
- **Educational Tool:** Learning advanced timing concepts through hands-on experimentation with human-feel groove generation

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

**Bottom Line:** SCM Plus isn't just a clock multiplier - it's a **rhythmic performance processor** that transforms mechanical timing into musical timing through groove manipulation algorithms. Every patch teaches you something new about how human-feel rhythm really works. As the **timing brain of Phase 2 ecosystems**, it transforms organic breathing, controlled chaos, and pattern learning into unified groove evolution that makes people want to dance.

---

*Visit [4ms Company](https://4mscompany.com/p.php?p=1050) for complete documentation and specifications*