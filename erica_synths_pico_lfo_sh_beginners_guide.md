# Erica Synths Pico LFO/S&H - Beginner's Guide

**Essential Modulation in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Pico LFO/S&H?** A fully analog dual utility module combining a low frequency oscillator with simultaneous triangle and square outputs, plus a sample & hold circuit. It's the fundamental modulation source that every rack needs, condensed into just 3HP.

### Your First LFO Modulation
1. **Turn Rate knob** to 12 o'clock position
2. **Watch the LED** blink - this shows your LFO speed
3. **Patch Triangle output** → your filter cutoff CV input
4. **Patch Square output** → your sequencer clock input (if desired)
5. **Play a sequence** - notice the smooth filter sweeps and rhythmic pulses
6. **Adjust Rate knob** - hear how it changes both the modulation speed and clock tempo

### Your First Sample & Hold
1. **Keep the LFO running** (LED blinking)
2. **Patch any CV source** → **S&H CV Input** (try another LFO or noise)
3. **Patch S&H Output** → your oscillator pitch CV
4. **Nothing in S&H Clock?** It automatically uses the internal LFO as clock
5. **Result:** Stepped random pitch changes in sync with your LFO rate!

---

## Essential Parameters (The Big 3)

### **1. Rate Knob + LED**
- **What it does:** Controls LFO frequency from 0.4Hz to 20Hz
- **Musical result:** Slow = long evolving sweeps, Fast = vibrato/tremolo speeds
- **LED feedback:** Visual indication of current LFO rate
- **Dual purpose:** Sets both modulation speed AND sample rate (when S&H clock is unpatched)

### **2. LFO Outputs (Triangle + Square)**
- **Triangle:** Smooth, continuous modulation - perfect for filters, pitch, amplitude
- **Square:** Hard on/off switching - great for clock signals, gate triggers, on/off switching
- **Simultaneous:** Both outputs run at the same rate but different shapes
- **Range:** ±5V output on both waveforms

### **3. Sample & Hold Circuit**
- **CV Input:** What gets sampled - can be any audio or CV signal
- **Clock Input:** When to sample (if empty, uses internal LFO automatically)
- **S&H Output:** Stepped voltages that hold until next clock pulse
- **Creative use:** Turn smooth signals into stepped/quantized versions

---

## Understanding Sample & Hold

### **How S&H Works:**
1. **Sample:** At each clock pulse, S&H "looks at" the voltage at CV Input
2. **Hold:** Maintains that exact voltage until the next clock pulse
3. **Step:** Creates stepped, staircase-like voltage patterns
4. **Result:** Smooth signals become discrete, stepped sequences

### **Clock Source Options:**
- **No Clock patched:** Uses internal LFO (Rate knob controls sample rate)
- **External Clock:** Patch any pulse/gate signal for independent timing
- **LFO Square out → S&H Clock:** Create rhythmic relationships
- **Other modules:** Sequencer gates, burst generators, etc.

### **CV Input Applications:**
- **Noise sources:** Creates random voltage sequences
- **Other LFOs:** Turn smooth LFOs into stepped sequences  
- **Audio signals:** Sample audio for unusual CV patterns
- **Manual voltage:** Use offset/attenuator modules for controlled values

---

## Beginner Patch Ideas

### **Patch 1: Random Melody Generator**
- **Noise source** → **S&H CV Input**
- **Leave S&H Clock empty** (uses internal LFO)
- **S&H Output** → **Quantizer** → **Oscillator pitch**
- **Triangle Output** → **Filter cutoff**
- **Square Output** → **Trigger envelope generator**
- **Result:** Random melodies with smooth filter movement in perfect sync

### **Patch 2: Rhythmic Filter Sweeps**
- **Triangle Output** → **Filter cutoff** (smooth sweeps)
- **Square Output** → **VCA gate input** (rhythmic on/off)
- **Rate at 2 o'clock** for musical timing
- **Result:** Filter sweeps that pulse rhythmically - classic analog sequencer feel

### **Patch 3: Independent Timing Sources**
- **External clock** → **S&H Clock Input**
- **Another LFO** → **S&H CV Input**
- **S&H Output** → **Oscillator FM amount**
- **Triangle Output** → **Different parameter** (reverb send, etc.)
- **Result:** Two independent modulation sources from one 3HP module

### **Patch 4: Intermediate - Rhythmic Modulation Relationships**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   4ms RCD v2        │      │    Erica Synths        │
   │ (Clock Processing)  │      │   Pico LFO/S&H         │
   │                    │      │ (Analog Modulation)    │
   │                    │      │                         │
   │ /2 Out ○───────────┼──────┼─▶ S&H Clock Input      │
   │       ║            │      │                         │
   │ /4 Out ○───────────┼──────┼─▶ Rate CV (external)    │
   │       ║            │      │                         │
   │ /8 Out ○───────────┼──────┼─▶ Clock Monitor         │
   │       ║            │      │                         │
   │ x2 Out ○───────────┼──────┼─▶ Secondary Clock       │
   │       ║            │      │                         │
   └───────║────────────┘      │ Triangle Out ○─────────┼─── CV (Blue)
           ║                   │ Square Out ○───────────┼─── Gate (Yellow)
   CV (Blue)║                  │ S&H Out ○──────────────┼─── CV (Blue)
           ║                  └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                    ║
   │ Master      │             Audio ║
   │ Clock       │              (Red)║
   │             │────────────────────▼
   └─────────────┘           ┌──────────────────────────────┐
                             │   Rhythmic Modulation        │
                             │     Relationships            │
                             │                              │
                             │ /2: Half-Rate S&H Sampling   │
                             │ /4: Quarter-Rate Timing      │
                             │ /8: Slow LFO Rate Control    │
                             │ x2: Double-Speed Processing  │
                             │                              │
                             │ Mathematical Rhythms ○──────┼─── Polyrhythmic Modulation
                             └──────────────────────────────┘
```

| Clock + Modulation Chain | Function | Purpose | Rhythmic Integration |
|--------------------------|----------|---------|---------------------|
| **RCD /2 → S&H Clock** | Half-rate sampling | **Rhythmic S&H patterns** | **Clock division creates polyrhythmic sampling** |
| **RCD /4 → Rate CV** | Quarter-rate LFO control | **Slow LFO evolution** | **Mathematical rate relationships** |
| **RCD /8 → Clock Monitor** | Division monitoring | **Visual timing reference** | **Clock relationship visualization** |
| **RCD x2 → Secondary Clock** | Double-rate processing | **Fast rhythmic events** | **Clock multiplication for detailed timing** |

**Module Settings:**
- **RCD:** Master clock input for mathematical division/multiplication relationships
- **Pico LFO/S&H:** Clock divisions create complex polyrhythmic modulation patterns
- **Mathematical timing:** Create precise rhythmic relationships through clock processing
- **Result:** Analog modulation with mathematically precise polyrhythmic timing control

**Learning Objectives:**
- **Clock + Modulation integration:** Clock processing applied to fundamental analog modulation
- **Polyrhythmic modulation:** Create complex timing relationships through clock division
- **Mathematical precision:** Understand how clock mathematics affect modulation timing
- **System timing:** Entire modulation system operates with precise rhythmic relationships

**Alternative Clock Sources:**
- **Instead of RCD v2:** Try **Tempi** for different clock processing, or **Pamela's** for algorithmic clock generation
- **Instead of division focus:** Try **multiplication focus** for faster rhythmic modulation processing
- **Budget alternatives:** **2HP Clk + 2HP Div** provides similar clock processing functionality
- **Different character:** **Euclidean Circles** gives geometric clock relationships vs RCD's mathematical divisions

### **Patch 5: Advanced - Mathematical Modulation Processing**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Make Noise        │      │    Erica Synths        │
   │   Maths             │      │   Pico LFO/S&H         │
   │ (Function Generator) │      │ (Analog Modulation)    │
   │                    │      │                         │
   │ Channel 1 ○────────┼──────┼─▶ Rate CV Input        │
   │       ║            │      │                         │
   │ Channel 2 ○────────┼──────┼─▶ S&H CV Input         │
   │       ║            │      │                         │
   │ Channel 3 ○────────┼──────┼─▶ S&H Clock Input      │
   │       ║            │      │                         │
   │ Unity Output ○─────┼──────┼─▶ CV Processing        │
   │       ║            │      │                         │
   └───────║────────────┘      │ Triangle Out ○─────────┼─── CV (Blue)
           ║                   │ Square Out ○───────────┼─── Gate (Yellow)
   CV (Blue)║                  │ S&H Out ○──────────────┼─── CV (Blue)
           ║                  └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                    ║
   │ Control     │             Audio ║
   │ Voltages    │              (Red)║
   │             │────────────────────▼
   └─────────────┘           ┌──────────────────────────────┐
                             │   Mathematical Modulation    │
                             │      Processing              │
                             │                              │
                             │ Ch1: Mathematical Rate Control│
                             │ Ch2: Complex S&H Sources     │
                             │ Ch3: Function-Based Clocking │
                             │ Unity: Processed CV Output   │
                             │                              │
                             │ Mathematical Functions ○────┼─── Complex Modulation Output
                             └──────────────────────────────┘
```

| Function + Modulation Chain | Function | Purpose | Mathematical Integration |
|-----------------------------|----------|---------|-------------------------|
| **Maths Ch1 → Rate CV** | Function-based rate control | **Mathematical LFO speed** | **Function generation controls analog timing** |
| **Maths Ch2 → S&H CV** | Complex voltage sources | **Mathematical S&H input** | **Function-processed sampling sources** |
| **Maths Ch3 → S&H Clock** | Function-based clocking | **Mathematical sampling timing** | **Function generation controls sampling** |
| **Maths Unity → Processing** | Unified function output | **Complex modulation processing** | **Mathematical modulation relationships** |

**Module Settings:**
- **Maths:** Multiple function generators create complex mathematical relationships
- **Pico LFO/S&H:** Receives mathematically processed control voltages for sophisticated modulation
- **Function processing:** Mathematical relationships control all aspects of analog modulation
- **Result:** Analog modulation with mathematically precise and complex control relationships

**Learning Objectives:**
- **Function + Modulation fusion:** Mathematical function generation applied to fundamental analog modulation
- **Complex control theory:** Understanding how function generators enhance basic modulation circuits
- **Mathematical precision:** Function generation provides sophisticated control over analog processes
- **Advanced modulation:** Simple analog circuits become complex through mathematical processing

### **Patch 6: Expert - Modulation Performance Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│ Intellijel  │ │    2hp      │ │ Cre8audio   │ │ Erica Synths    │
│  Scales     │ │   Brst      │ │  Cellz      │ │ Pico LFO/S&H    │
│(Quantizer)  │ │(Triggers)   │ │(Touch Seq)  │ │(Core Modulation)│
│             │ │             │ │             │ │                 │
│ Quantized   │ │ Manual ○────┼─┼─Touch Trig  │ │ Rate Control    │
│ CV ○────────┼─┼─Gate ○ ║    │ │       ║     │ │       ║         │
│       ║     │ │      ║ ║    │ │ CV 1 ○─────┼─┼─S&H CV Input   │
│ Root/Scale  │ │ Burst ○─────┼─┼─CV Burst    │ │       ║         │
│ Selection   │ │        ║    │ │       ║     │ │ Triangle Out    │
│       ║     │ │ Clk Out○────┼─┼─Seq Clock   │ │ ○─────────┼─CV  │
│       ║     │ │        ║    │ │       ║     │ │       ║         │
└───────║─────┘ └────────║────┘ │ Touch ○─────┼─┼─S&H Clock     │
        ║                ║      │ Control     │ │       ║         │
        ║                ║      │       ║     │ │ Square Out     │
        ║                ║      │ Pattern ○───┼─┼─○─────────┼─Gate
        ║                ║      │ Gates       │ │       ║         │
        ║                ║      └─────────────┘ │ S&H Out       │
        ║                ║               ║      │ ○─────────┼─CV  │
        ▼                ▼               ▼      └─────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│              Modulation Performance Ecosystem                       │
│                                                                     │
│ Musical Intelligence + Expressive Timing + Touch Control           │
│                                                                     │
│ Scales      → Ensures all modulation voltages are musical          │
│ Brst        → Provides manual control and burst timing patterns    │
│ Cellz       → Touch-based CV generation and sequence control       │
│ LFO/S&H     → Core analog modulation with performance control      │
│                                                                     │
│ Complete Modulation Performance System (17HP total)                │
│                                                                     │
│ Expressive Modulation Control ○──────────────────┼─── Musical Output
└──────────────────────────────────────────────────────────────────┘
```

**Performance Modulation Integration:**

| Module | Primary Function | Secondary Functions | LFO/S&H Role |
|--------|------------------|--------------------|---------------|
| **Scales (4HP)** | Quantizer | **Root/scale selection + musical intelligence** | **Musical modulation control** |
| **Brst (2HP)** | Trigger generator | **Manual triggers + burst patterns** | **Expressive timing control** |
| **Cellz (8HP)** | Touch sequencer | **Touch CV generation + pattern control** | **Performance interface** |
| **Pico LFO/S&H (3HP)** | Analog modulation | **Core LFO + S&H processing** | **Fundamental modulation engine** |

**Performance System Design:**
- **Scales as musical brain:** Ensures all S&H voltages are quantized to musical scales
- **Brst as timing brain:** Provides manual control and burst patterns for expressive performance
- **Cellz as performance interface:** Touch control generates CV and triggers for real-time expression
- **Pico LFO/S&H as modulation core:** Fundamental analog modulation controlled by performance ecosystem
- **Total system:** 17HP for complete modulation performance workstation

**Performance Applications:**
1. **Musical modulation performance:** Touch control generates musical CV through quantization
2. **Expressive timing control:** Manual triggers and burst patterns provide human expression
3. **Real-time pattern generation:** Touch sequences control S&H sampling and LFO rates
4. **Musical intelligence:** All random voltages become musical through scale quantization
5. **Live modulation control:** Complete system responds to human touch and timing

**Why This Performance Ecosystem Works:**
- **Leverages human expression:** Touch control and manual triggers provide performance interface
- **Musical intelligence:** Quantization ensures all results are musical rather than random
- **Compact integration:** Complete system in only 17HP with professional capabilities
- **Scalable complexity:** Simple touch control to complex pattern generation
- **Combinable with other guides:** No overlap with previous guide ecosystems

**Expert System Performance:**
1. **Initialization:** Set scales and root notes, calibrate touch sensitivity
2. **Performance chain:** Touch/Triggers → Cellz patterns → LFO/S&H modulation → Scales quantization
3. **Real-time expression:** Live touch control and manual timing create expressive modulation
4. **Musical evolution:** System generates musical modulation through performance interaction
5. **Modulation mastery:** Complete analog modulation controlled through expressive performance

**Philosophical Achievement:**
This represents **modulation performance mastery** - where musical intelligence, expressive timing, and touch control all serve the analog modulation engine, creating a complete performance system that transforms human expression into musical modulation through analog circuits.

---

## Advanced Techniques

### **LFO as Clock Source:**
- **Square Output** → other modules' clock inputs
- **Rate knob** becomes master tempo control
- **LED** provides visual timing reference
- **20Hz maximum** = very fast clock rates possible

### **S&H Creative Applications:**
- **Audio Rate Clocking:** Very fast S&H for bit-crushing effects
- **Voltage Quantization:** Sample precise CV values for repeatable patterns
- **Rhythm Generation:** Use S&H output to control gate lengths or trigger probability
- **Cross-Modulation:** Sample one modulation source to control another

### **Feedback Loops:**
- **S&H Output** → **Attenuator** → **S&H CV Input** (self-generating patterns)
- **Triangle + Square mixed** → **S&H CV Input** (complex sampling source)
- **Multiple S&H modules** feeding each other (chaotic interactions)

---

## Common Use Cases

### **Studio Production:**
- **Basic LFO needs:** Every patch needs modulation - this covers the essentials
- **Random element generation:** S&H adds controlled unpredictability
- **Clock source:** Square output drives sequencers and rhythm modules
- **Space efficiency:** Two functions in minimal HP

### **Live Performance:**
- **Real-time control:** Rate knob affects both LFO and S&H simultaneously
- **Visual feedback:** LED helps with timing in dark performance environments
- **Reliability:** Analog circuit = no digital glitches or timing issues
- **Simple interface:** No menu diving or complex configuration

### **Educational/Learning:**
- **LFO fundamentals:** Learn the difference between triangle and square waves
- **S&H concept:** Understand sampling and quantization in analog domain
- **Clock relationships:** See how different modules sync together
- **Modulation basics:** Essential functions every modular synthesist needs

---

## Pairs Well With

### **Multi-Function Module Synergies (Modulation Performance Systems):**
- **4ms RCD v2:** Clock division + multiplication → Pico LFO/S&H for polyrhythmic modulation relationships
- **Make Noise Maths:** Function generation + mathematical processing → Pico LFO/S&H for complex modulation control
- **Intellijel Scales:** Quantization + musical intelligence → Pico LFO/S&H for musical modulation performance
- **2hp Brst:** Manual triggers + burst patterns → Pico LFO/S&H for expressive timing control
- **Cre8audio Cellz:** Touch sequencing + CV generation → Pico LFO/S&H for performance interface control
- **Cross-Multi-Function Integration:** Pico LFO/S&H serves as analog modulation core for complete performance systems

### **Essential Partners:**
- **Noise Sources:** For random S&H sequences (Pico Noise, other random modules)
- **Quantizers:** Make S&H random voltages musical
- **VCAs:** Control the amount of modulation applied
- **Filters:** Classic target for triangle wave modulation

### **Advanced Combinations:**
- **Multiple LFO/S&H modules:** Layer different rates and patterns
- **Clock Dividers:** Create related but different timing from square output
- **Logic Gates:** Combine square outputs for complex rhythmic patterns
- **Precision Adders:** Offset and scale the ±5V outputs for different modules

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My S&H isn't changing!"**
- Need a clock signal to trigger sampling
- **Solution:** Either patch an external clock or leave S&H Clock empty to use internal LFO

**"The S&H output is always the same voltage!"**
- CV Input might be receiving a static voltage
- **Solution:** Patch a changing signal (noise, LFO, audio) to S&H CV Input

**"My LFO is too fast/too slow!"**
- 0.4Hz-20Hz range might not cover your needs
- **Solution:** Use clock dividers/multipliers on square output, or different LFO modules for extreme ranges

### **🎵 Pro Tips:**

**Rate Knob Sweet Spots:**
- **7-9 o'clock:** Very slow, evolving textures (great for ambient)
- **10-2 o'clock:** Musical modulation rates (most common usage)
- **3-5 o'clock:** Fast tremolo/vibrato effects and rapid S&H patterns

**S&H Timing Strategy:**
- **Internal LFO clocking:** Simple, everything synced to one rate
- **External clocking:** Independent control of sample rate vs. modulation speed
- **Audio rate clocking:** Creates digital-style artifacts and bit reduction

**Output Voltage Management:**
- **±5V outputs:** May need attenuation for modules expecting 0-5V
- **Triangle scaling:** Use attenuverters to control modulation depth
- **Square as gate:** Perfect voltage levels for most gate inputs

**Performance Techniques:**
- **Rate sweeps:** Dramatic builds by slowly increasing LFO speed
- **S&H source switching:** Change what's being sampled for different textures
- **Clock pattern variations:** Use different rhythmic clocks for evolving S&H patterns

---

## Why This Module Rocks

### **The Philosophy:**
LFO and Sample & Hold are the most fundamental modulation sources in synthesis. Pico LFO/S&H provides both in pure analog form with the space efficiency that makes it accessible to every rack size.

### **The Engineering:**
- **Full analog circuitry:** No digital artifacts or aliasing
- **AS1100CK2 IC:** Professional-grade S&H chip for stability and precision
- **Overvoltage protection:** Safe operation even with hot signals
- **Reverse power protection:** Won't damage if power is connected wrong

### **The Practical Benefits:**
- **Space efficient:** Two essential functions in just 3HP
- **Power efficient:** Only 13mA +12V, 10mA -12V
- **Immediately useful:** Every patch can benefit from these functions
- **No configuration:** Plug in and start modulating immediately
- **Visual feedback:** LED makes timing relationships clear

### **Perfect For:**
- **Every rack:** These are fundamental synthesis building blocks
- **Beginners:** Learn core modulation concepts with simple interface
- **Small cases:** Maximum utility in minimum space
- **Performers:** Reliable, tactile control without complexity
- **Producers:** Essential modulation covered efficiently

---

**Bottom Line:** Pico LFO/S&H proves that the most important modules are often the simplest ones. LFO + Sample & Hold in 3HP covers fundamental analog modulation that every synthesist needs. As the **modulation core of performance ecosystems**, it transforms human expression and mathematical precision into unified analog modulation evolution.

---

## Multi-Function Learning Path

### **Recommended Study Progression:**
1. **Start with Pico LFO/S&H fundamentals:** Master dual analog modulation, S&H concepts, and fundamental modulation theory
2. **Add rhythmic relationships:** Integrate 4ms RCD v2 for polyrhythmic modulation with clock division/multiplication (see RCD guide)
3. **Include mathematical processing:** Use Make Noise Maths for complex function-based modulation control (see Maths guide)
4. **Add musical intelligence:** Apply Intellijel Scales for quantized, musical modulation results (see Scales guide)
5. **Include expressive timing:** Use 2hp Brst for manual control and burst pattern timing (see Brst guide)
6. **Complete the performance system:** Add Cre8audio Cellz for touch-based modulation control and performance interface (see Cellz guide)

### **Cross-Module Learning Opportunities:**
- **Pico LFO/S&H + RCD:** Learn polyrhythmic modulation relationships through mathematical clock processing
- **Pico LFO/S&H + Maths:** Master function-based modulation control with complex mathematical relationships
- **Pico LFO/S&H + Scales:** Understand musical modulation through quantization and scale relationships
- **Pico LFO/S&H + Brst:** Explore expressive timing control with manual triggers and burst patterns
- **All Multi-Function + Pico LFO/S&H:** Build complete modulation performance systems where analog modulation responds to human expression

### **Skill Development Milestones:**
- **Beginner:** Use LFO and S&H functions for basic analog modulation and voltage processing
- **Intermediate:** Master clock relationships and mathematical modulation control through multi-function integration
- **Advanced:** Create performance modulation patches with musical intelligence and expressive timing
- **Expert:** Design complete modulation performance systems where Pico LFO/S&H serves as analog core for expressive control

### **Advanced Modulation Concepts:**
- **Analog LFO Mastery:** Understand triangle vs square wave characteristics and their musical applications
- **S&H Processing Theory:** Master sampling, holding, and stepped voltage generation concepts
- **Clock Relationship Integration:** Explore how mathematical timing affects analog modulation character
- **Performance Modulation:** Design systems where human expression controls fundamental analog modulation

### **Performance Applications:**
- **Live Modulation Control:** Real-time LFO rate and S&H timing control for dynamic performance
- **Generative Modulation Systems:** Foundation for self-evolving analog modulation with mathematical precision
- **Expressive Analog Processing:** Bridge between human performance and fundamental analog modulation circuits
- **Educational Tool:** Learn fundamental modulation concepts through hands-on analog circuit interaction

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*