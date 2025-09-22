# Make Noise Maths - Guide
*The Swiss Army Knife of Eurorack*

---

![Make Noise Maths](https://github.com/DGretta/Music/raw/main/modular/images/make_noise_maths/front_panel.jpg)
*Make Noise Maths - Four-channel analog computer showing Rise/Fall controls, attenuverters, and comprehensive CV/trigger inputs for mathematical processing*

---

## What This Unlocks From Your Existing Gear

### **CV Controllers & Performance Gear:**
- **Expression pedals** - Any expression pedal becomes a macro control source for multiple Maths parameters
- **MIDI controllers with CV** - Keyboard aftertouch, mod wheels, sliders control mathematical relationships
- **Eurorack CV sources** - Existing LFOs, envelopes, sequencers become Maths processing inputs
- **Analog synthesizers** - Vintage synth CV outputs processed through mathematical relationships
- **Performance controllers** - Ribbon controllers, theremins, motion sensors drive mathematical computation

### **Studio & Audio Equipment:**
- **Mixing consoles** - Use Maths as macro control hub for complex console automation
- **Audio interfaces** - Multiple outputs can control interface parameters through CV-to-MIDI conversion
- **Outboard processors** - Maths controls hardware compressors, EQs, effects via CV automation
- **Studio monitors** - Mathematical relationships control monitoring levels and routing
- **Recording equipment** - Automate recording parameters through mathematical CV relationships

### **Existing Synthesizers:**
- **Analog monosynths** - Maths processes and enhances existing synthesizer modulation capabilities
- **Vintage polysynths** - Individual voice outputs processed through mathematical relationships
- **Drum machines** - Trigger outputs become mathematical timing sources, individual outs processed
- **Grooveboxes** - CV outputs enhanced through Maths mathematical processing
- **Modular systems** - Existing modules gain mathematical processing and macro control capabilities

### **Educational & Analysis Tools:**
- **Oscilloscopes** - Visualize mathematical relationships and envelope shapes in real-time
- **Educational equipment** - Demonstrate analog computation and mathematical synthesis concepts
- **Test equipment** - Precise voltage sources for calibration and mathematical verification
- **Laboratory instruments** - Function generators become musical mathematical sources

### **Creative & Experimental Gear:**
- **Contact microphones** - Physical gestures become mathematical control sources
- **Light sensors** - Environmental changes drive mathematical relationships
- **Pressure sensors** - Physical interaction controls mathematical computation
- **DIY controllers** - Any voltage source becomes part of mathematical music system
- **Found electronics** - Circuit-bent devices processed through mathematical relationships

**Discovery moment:** Your entire creative setup suddenly becomes a unified mathematical music system - every controller, every synthesizer, every audio tool can contribute to complex mathematical relationships that create music impossible to achieve with any single device.

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Maths?** Think of it as four powerful tools in one module: two envelope generators, two offset generators, and a mixer that can combine them all.

### Your First Envelope (Channel 1)
1. **Patch a trigger/gate** → Channel 1 **TRIG** input (top left)
2. **Turn Rise and Fall knobs** to 12 o'clock position  
3. **Patch Channel 1 Unity output** → your VCA CV input
4. **Trigger it!** You should see the LED light up and hear your envelope working

**Congratulations!** You just made Maths work as an envelope generator.

---

## Essential Parameters (The Big 4)

### **1. Rise Time** 
- **What it does:** Controls how fast the envelope goes UP
- **Musical result:** Attack time - fast = snappy drums, slow = swells
- **Range:** Instant to 25 minutes(!!)

### **2. Fall Time**
- **What it does:** Controls how fast the envelope goes DOWN  
- **Musical result:** Release/decay time - fast = plucks, slow = fade-outs
- **Range:** Instant to 25 minutes

### **3. Cycle Button**
- **What it does:** Makes the envelope repeat automatically = LFO
- **Musical result:** Press it and your envelope becomes a wobbling LFO
- **Try this:** Press cycle, turn Rise/Fall to different positions, patch to filter cutoff

### **4. Attenuverters (Center Knobs)**
- **What they do:** Control the strength and direction of each channel
- **12 o'clock = no effect**, **clockwise = positive**, **counter-clockwise = negative/inverted**

---

## Beginner Patch Ideas

### **Patch 1: Classic Envelope Generator**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Sequencer   │───▶│    Maths     │───▶│     VCA     │───▶ Audio Out
│ (Gate Out)  │    │ Ch1 TRIG IN  │    │   CV Input  │
└─────────────┘    │              │    └─────────────┘
                   │ Ch1 UNITY OUT│
                   │   [LED ●]    │
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer Gate → Maths Ch1 TRIG | Gate (Yellow) | Triggers envelope on each step |
| Maths Ch1 UNITY → VCA CV In | CV (Blue) | Controls amplitude |

**Module Settings:**
- **Maths:** Rise knob at 12 o'clock, Fall knob at 12 o'clock
- **Cycle button:** OFF (unpressed)
- **Ch1 Attenuverter:** 12 o'clock (unity gain)

**Visual Feedback:**
- **Ch1 Unity LED:** Flashes green when triggered, brightness follows envelope
- **Result:** Classic attack/decay envelope - adjust Rise for punch, Fall for tail

**Main Example:** Make Noise Maths Ch1 → VCA CV (classic ADSR-style envelope control)
**Alternative Options:**
- **Budget:** Doepfer A-140-2, Erica Synths Pico EG
- **Different character:** Intellijel Quadrax complex functions, Joranalogue Contour 1 west coast
- **Premium:** Serge DUSG, Buchla 281t quad function generator

### **Patch 2: Intermediate - Phase 2 Organic Integration with Ochd**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   DivKid Ochd      │      │   Make Noise Maths  │
   │    (Phase 2)       │      │    (Phase 1)        │
   │                    │      │                     │
   │ LFO 1 ○────────────┼──────┼─▶ Ch1 Signal Input  │
   │       ║            │      │                     │
   │ LFO 3 ○────────────┼──────┼─▶ Ch4 Signal Input  │
   │       ║            │      │                     │
   │ LFO 7 ○────────────┼──────┼─▶ SUM CV Input      │
   │       ║            │      │                     │
   │       ║            │      │ Ch1 Unity Out ○─────┼─── CV (Blue)
   │       ║            │      │                     │
   │       ║            │      │ Ch4 Variable Out○───┼─── CV (Blue)
   │       ║            │      │                     │
   │       ║            │      │ SUM Output ○────────┼─── CV (Blue)
   └───────║────────────┘      └─────────────────────┘
           ║                           ║      ║    ║
   CV (Blue)║                   CV (Blue)║      ║    ║
           ▼                           ║      ║    ║
   ┌─────────────┐                    ▼      ▼    ▼
   │   Filter    │           ┌──────────────────────────┐
   │             │           │    Multiple Destinations │
   │ Cutoff CV◀──┼───────────┼─ Oscillator FM           │
   │             │           │ Filter Resonance         │
   │ Audio In ◀──┼───────────┼─ VCA CV                  │
   │             │           │ Effects Parameters       │
   │ Audio Out○──┼───────────┼─                        │
   └─────────────┘           │ Organic System ○────────┼─── Breathing Music
                             └──────────────────────────┘
```

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → Maths Ch1** | Organic modulation | **Breathing envelope control** | **Organic timing processing** |
| **Ochd LFO 3 → Maths Ch4** | Mid-speed organic CV | **Parameter drift control** | **Natural parameter evolution** |
| **Ochd LFO 7 → SUM Input** | Slow organic drift | **System-wide organic influence** | **Long-term musical breathing** |
| **Maths Processing** | Mathematical shaping | **Organic + Mathematical hybrid** | **Best of both worlds** |

**Module Settings:**
- **Ochd Rate:** 12 o'clock for musical organic timing
- **Maths Ch1:** Rise/Fall set for envelope processing of organic signals
- **Maths Ch4:** Used as slew processor for smooth organic transitions
- **SUM:** Combines all organic + mathematical relationships

**Learning Objectives:**
- **Advanced + Mathematical integration:** Mathematical processing of organic modulation
- **Hybrid modulation:** Combine organic breathing with precise mathematical control
- **System breathing:** Entire patch breathes with organic life
- **Advanced modulation routing:** Complex relationships between modules

**Main Example:** Make Noise Maths + DivKid Ochd → Multiple destinations (organic mathematical processing)
**Alternative Options:**
- **Budget:** Make Noise Maths + 2hp LFO, Doepfer A-143-3 quad LFO
- **Different character:** Make Noise Maths + Batumi geometric patterns, Pamela's New Workout clocked LFOs
- **Premium:** Make Noise Maths + Verbos Harmonic Oscillator, Serge VCFS slopes
```
                   ┌──────────────┐    ┌─────────────┐
    [CYCLE ON] ───▶│    Maths     │───▶│   Filter    │
                   │ Ch1 CYCLE ●  │    │ Cutoff CV   │
                   │              │    └─────────────┘
                   │ Ch1 UNITY OUT│           ▲
                   │   [LED ◐]    │           │
                   └──────────────┘           │
                                              │
    ┌─────────────┐                         │
    │Oscillator   │─────Audio──────────────┘
    │(Audio Out)  │
    └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Oscillator Audio → Filter Audio In | Audio (Red) | Main signal path |
| Maths Ch1 UNITY → Filter CV In | CV (Blue) | Modulates cutoff frequency |

**Module Settings:**
- **Maths:** Cycle button PRESSED (LED lit), Rise/Fall at 10-2 o'clock range
- **Ch1 Attenuverter:** Adjust for desired filter sweep depth
- **Filter:** Resonance low, cutoff around center for best sweep range

**Visual Feedback:**
- **Ch1 Unity LED:** Pulses continuously green/red showing LFO wave
- **Cycle LED:** Stays lit indicating continuous operation
- **Result:** Automatic filter sweeps - faster Rise/Fall = faster wobble

**Main Example:** Make Noise Maths Ch1 Cycle → Filter CV (automatic LFO filter sweeps)
**Alternative Options:**
- **Budget:** 2hp LFO, Doepfer A-145 LFO
- **Different character:** Batumi quadrature LFO, Tides LFO mode with different waveforms
- **Premium:** Verbos Harmonic Oscillator LFO, Serge NTO complex waveforms

### **Patch 3: Advanced - AI Integration with Phase 2 Marbles**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   Mutable Marbles   │      │   Make Noise Maths  │
   │     (Phase 2)       │      │    (Phase 1)        │
   │                     │      │                     │
   │ X1 Out ○────────────┼──────┼─▶ Ch1 Signal Input  │
   │                     │      │                     │
   │ X2 Out ○────────────┼──────┼─▶ Ch4 Signal Input  │
   │                     │      │                     │
   │ t1 Out ○────────────┼──────┼─▶ Ch1 Trigger       │
   │                     │      │                     │
   │ Y Out  ○────────────┼──────┼─▶ Attenuverter 3    │
   │                     │      │                     │
   │ DEJA VU CV      ◀───┼──────┼─ SUM Output         │
   │ (Learning Loop)     │      │                     │
   │                     │      │ Ch1 Unity Out ○─────┼─── CV (Blue)
   │ External Processing │      │                     │
   │ Mode: ON            │      │ Ch4 Variable Out○───┼─── CV (Blue)
   │                     │      │                     │
   │ STEPS: 2 o'clock    │      │ OR Output ○─────────┼─── CV (Blue)
   │ (Musical quantization)      │                     │
   └─────────────────────┘      │ AND Output ○────────┼─── Gate (Yellow)
                                └─────────────────────┘
                                         ║      ║    ║    ║
                                 CV (Blue)║      ║    ║    ║ Gate
                                         ▼      ▼    ▼    ▼ (Yellow)
                                ┌─────────────────────────────────┐
                                │    Complex Synthesis Network     │
                                │                                 │
                                │ Oscillator 1V/Oct  ◀─ Ch1 Unity│
                                │ Filter Cutoff      ◀─ Ch4 Var  │
                                │ VCA CV             ◀─ OR Output │
                                │ Clock Input        ◀─ AND Output│
                                │                                 │
                                │ AI + Mathematical Music ○──────┼─── Intelligent Output
                                └─────────────────────────────────┘
```

| AI + Mathematical Chain | Function | Purpose | Advanced Integration |
|------------------------|----------|---------|---------------------|
| **Marbles X1,X2 → Maths Ch1,Ch4** | AI voltage processing | **Intelligent envelope shaping** | **AI learns mathematical relationships** |
| **Marbles t1 → Ch1 Trigger** | AI timing | **Musical trigger processing** | **Intelligent timing becomes envelopes** |
| **Marbles Y → Attenuverter 3** | AI smooth modulation | **Meta-modulation control** | **AI controls mathematical mixing** |
| **SUM → DEJA VU CV** | Learning feedback | **System learns math** | **AI learns from mathematical output** |

**Module Settings:**
- **Marbles:** External Processing ON, learns from mathematical output
- **Maths:** Processes AI intelligence through analog mathematical computation
- **Feedback Loop:** SUM output teaches Marbles about mathematical relationships
- **Result:** AI + Mathematics = Increasingly sophisticated musical intelligence

**Learning Objectives:**
- **AI + Mathematical integration:** Artificial intelligence learns mathematical relationships
- **Recursive learning:** System teaches itself through feedback
- **Analog computation of AI:** Mathematical processing of artificial intelligence
- **Meta-musical systems:** Systems that learn to learn

**Main Example:** Make Noise Maths + Mutable Marbles → Feedback learning (AI mathematical processing)
**Alternative Options:**
- **Budget:** Make Noise Maths + Turing Machine, Ornament & Crime random algorithms
- **Different character:** Make Noise Maths + Make Noise Wogglebug chaos, Benjolin feedback systems
- **Premium:** Make Noise Maths + Buchla Source of Uncertainty, Serge random voltage
```
                   ┌──────────────┐    
   No Input ──────▶│    Maths     │    
   (Normalled)     │ Ch2 SIGNAL   │    
                   │              │    ┌─────────────┐
                   │ Ch2 VARIABLE │───▶│ Oscillator  │
                   │   [LED ●]    │    │ V/OCT Input │
                   └──────────────┘    └─────────────┘
                          │                    ▲
                          │                    │
    ┌─────────────┐      │             ┌──────┴──────┐
    │ Sequencer   │──────┼─────────────│    Mult     │
    │ (CV Out)    │      │             │  (Mixer)    │
    └─────────────┘      └─────────────│             │
                                       └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer CV → Mult Input | CV (Blue) | Main pitch sequence |
| Mult Out 1 → Oscillator V/OCT | CV (Blue) | Normal pitch tracking |
| Maths Ch2 VARIABLE → Mult Input | CV (Blue) | Offset voltage for transposition |

**Module Settings:**
- **Maths:** Ch2 Signal input EMPTY (uses internal +10V reference)
- **Ch2 Attenuverter:** Clockwise = up transpose, Counter-clockwise = down
- **No Rise/Fall controls** needed for Channel 2 (it's not an envelope)

**Visual Feedback:**
- **Ch2 Variable LED:** Steady green (positive) or red (negative) showing offset
- **Result:** Transpose entire sequence up or down without changing intervals

**Main Example:** Make Noise Maths Ch2 Variable + Sequencer → Oscillator V/Oct (sequence transposition)
**Alternative Options:**
- **Budget:** Doepfer A-138s mixer, 2hp Offset
- **Different character:** Intellijel Scales quantized transposition, Ornament & Crime SH-4 quantizer
- **Premium:** Serge Precision Adder, Buchla 257e voltage processor

### **Patch 4: Expert - Complete Phase 1+2 Mathematical Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ Mutable     │
│    Ochd     │ │ Wogglebug   │ │  Marbles    │ │  Plaits     │
│ (Organic)   │ │ (Chaos)     │ │ (AI)        │ │ (Synthesis) │
│             │ │             │ │             │ │             │
│ LFO 1 ○─────┼─┼─Stepped ○   │ │ X1 Out ○────┼─┼─Model CV    │
│       ║     │ │        ║    │ │       ║     │ │       ║     │
│ LFO 3 ○─────┼─┼─Smooth ○    │ │ X2 Out ○────┼─┼─Timbre CV   │
│       ║     │ │        ║    │ │       ║     │ │       ║     │
│ LFO 7 ○─────┼─┼─Woggle ○    │ │ t1 Out ○────┼─┼─Trigger     │
│       ║     │ │        ║    │ │       ║     │ │       ║     │
└───────║─────┘ └────────║────┘ │ Y Out  ○────┼─┼─Level CV    │
        ║                ║      │       ║     │ │       ║     │
        ▼                ▼      └───────║─────┘ └───────║─────┘
┌──────────────────────────────────────║──────────────║─────┐
│                Make Noise Maths     ║              ║     │
│           (Mathematical Brain)       ║              ║     │
│                                      ▼              ▼     │
│ Organic CV ◀─ Ch1 Signal  ┌─────────┐  Ch2 Signal ◀─ AI  │
│ Chaos CV   ◀─ Ch3 Signal  │ Complex │  Ch4 Signal ◀─ CV  │
│ AI Learning◀─ Attenuv.    │Mathematical              │   │
│                           │Processing│                   │
│ Ch1 Unity ○──────────────▶│         │◀─ Ch2 Variable ○  │
│ Ch3 Unity ○──────────────▶│ Network │◀─ Ch4 Variable ○  │
│ SUM Output○──────────────▶│         │◀─ OR Output   ○   │
│ Learning  ○──────────────▶│ Audio   │◀─ AND Output  ○   │
│ Feedback                  └─────────┘                    │
└─────────────────────────────║───────────────────────────┘
                              ║
                         Mathematical
                          Intelligence
                              ▼
                    ┌─────────────────────┐
                    │  Complete Musical   │
                    │     Ecosystem       │
                    │                     │
                    │ Organic + Chaos +   │
                    │ AI + Mathematical   │
                    │ = Musical Evolution │
                    │                     │
                    │ System Output ○─────┼─── Evolving Intelligence
                    └─────────────────────┘
```

**Complete System Integration:**

| Layer | Function | Maths Role | Musical Result |
|-------|----------|------------|----------------|
| **Organic (Ochd)** | Natural breathing | **Channels 1,3 processing** | **Mathematical breathing** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **CV mixing and offset** | **Mathematical chaos** |
| **AI (Marbles)** | Learning intelligence | **Channels 2,4 processing** | **Mathematical AI** |
| **Synthesis (Plaits)** | Sound generation | **Output distribution** | **Mathematical sound** |
| **Mathematical (Maths)** | Central computation | **System brain** | **Unified intelligence** |

**Expert System Design:**
- **Maths as central brain:** All intelligence types processed through mathematical computation
- **Four-channel processing:** Each channel handles different intelligence type
- **Cross-mixing and feedback:** Complex mathematical relationships between all sources
- **Learning integration:** System learns mathematical relationships through feedback
- **Emergent behavior:** Mathematical processing creates new musical behaviors

**Advanced Performance:**
1. **Initialization:** Each module establishes its character
2. **Mathematical integration:** Maths begins processing all intelligence types
3. **Cross-learning:** Modules learn from mathematical relationships
4. **System evolution:** Entire ecosystem becomes increasingly musical
5. **Mathematical transcendence:** Pure mathematical music emerges

**Philosophical Achievement:**
This represents **mathematical consciousness in music** - where organic breathing, controlled chaos, artificial intelligence, and synthesis all become mathematical relationships, processed through analog computation into pure musical intelligence.
```
┌─────────────┐    ┌───────┐    ┌──────────────┐
│ Sequencer   │───▶│ Mult  │───▶│    Maths     │
│ (Gate Out)  │    │       │    │ Ch1 TRIG IN  │
└─────────────┘    └───┬───┘    │              │
                       │        │ Ch4 TRIG IN  │◄─┘
                       └────────│              │
                                │ Ch1 UNITY OUT│──┐
                                │ Ch4 UNITY OUT│──┤
                                │              │  │
                                │  SUM OUTPUT  │◄─┘ ┌─────────────┐
                                │   [LED ◐]   │───▶│   Filter    │
                                └──────────────┘    │ Cutoff CV   │
                                                    └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer Gate → Mult Input | Gate (Yellow) | Split gate to both channels |
| Mult Out 1 → Maths Ch1 TRIG | Gate (Yellow) | Triggers first envelope |
| Mult Out 2 → Maths Ch4 TRIG | Gate (Yellow) | Triggers second envelope |
| Maths SUM → Filter CV In | CV (Blue) | Combined envelope shapes |

**Module Settings:**
- **Maths Ch1:** Rise FAST (9 o'clock), Fall MEDIUM (1 o'clock), Attenuverter +50%
- **Maths Ch4:** Rise SLOW (3 o'clock), Fall FAST (9 o'clock), Attenuverter +30%
- **Auto-summing:** Unity outputs automatically combine at SUM output

**Visual Feedback:**
- **Ch1 & Ch4 Unity LEDs:** Flash independently showing different envelope shapes
- **SUM LED:** Shows combined result - complex multi-peak envelope
- **Result:** "Shark fin" envelopes perfect for evolving filter sweeps

### **Patch 2: Intermediate - Phase 2 Organic Mathematical Processing**
```
   ┌─────────────────────┐      ┌─────────────────────┐
   │   DivKid Ochd      │      │   Make Noise Maths  │
   │    (Phase 2)       │      │    (Phase 1)        │
   │                    │      │                     │
   │ LFO 1 ○───────────┼──────┼─▶ Ch1 Signal Input  │
   │       ║            │      │                     │
   │ LFO 3 ○───────────┼──────┼─▶ Ch4 Signal Input  │
   │       ║            │      │                     │
   │ LFO 7 ○───────────┼──────┼─▶ SUM CV Input      │
   │       ║            │      │                     │
   │       ║            │      │ Ch1 Unity Out ○─────┼─── CV (Blue)
   │       ║            │      │                     │
   │       ║            │      │ Ch4 Variable Out○──┼─── CV (Blue)
   │       ║            │      │                     │
   │       ║            │      │ SUM Output ○────────┼─── CV (Blue)
   └───────║─────────────┘      └─────────────────────┘
           ║                           ║      ║    ║
   CV (Blue)║                   CV (Blue)║      ║    ║
           ▼                           ║      ║    ║
   ┌─────────────┐                    ▼      ▼    ▼
   │   Filter    │           ┌──────────────────────────┐
   │             │           │    Multiple Destinations │
   │ Cutoff CV◀──┼───────────┼─ Oscillator FM           │
   │             │           │ Filter Resonance         │
   │ Audio In ◀──┼───────────┼─ VCA CV                  │
   │             │           │ Effects Parameters       │
   │ Audio Out○──┼───────────┼─                        │
   └─────────────┘           │ Organic System ○────────┼─── Breathing Music
                             └──────────────────────────┘
```

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → Maths Ch1** | Organic modulation | **Breathing envelope control** | **Organic timing processing** |
| **Ochd LFO 3 → Maths Ch4** | Mid-speed organic CV | **Parameter drift control** | **Natural parameter evolution** |
| **Ochd LFO 7 → SUM Input** | Slow organic drift | **System-wide organic influence** | **Long-term musical breathing** |
| **Maths Processing** | Mathematical shaping | **Organic + Mathematical hybrid** | **Best of both worlds** |

**Module Settings:**
- **Ochd Rate:** 12 o'clock for musical organic timing
- **Maths Ch1:** Rise/Fall set for envelope processing of organic signals
- **Maths Ch4:** Used as slew processor for smooth organic transitions
- **SUM:** Combines all organic + mathematical relationships

**Learning Objectives:**
- **Phase 1 + Phase 2 integration:** Mathematical processing of organic modulation
- **Hybrid modulation:** Combine organic breathing with precise mathematical control
- **System breathing:** Entire patch breathes with organic life
- **Advanced modulation routing:** Complex relationships between modules

### **Patch 3: Advanced - Macro Control Hub for Production**
```
┌─────────────────────┐
│ Control Voltage Source   │
│ (Sequencer/Performance)  │
│                         │
│ CV Output ○───────────┼───────────────────────────────┐
└─────────────────────┘                                              │
                                                                   ▼
                        ┌───────────────────────────────────────────┐
                        │           Make Noise Maths              │
                        │        (Macro Control Hub)             │
                        │                                         │
                        │ Ch1 Signal ◀─────────────────────────────┼──────── Main CV Input
                        │ Ch2 Signal ◀─────────────────────────────┘
                        │ Ch3 Signal ◀─────────────────────────────┐
                        │ Ch4 Signal ◀─────────────────────────────┘
                        │                                         │
                        │ Attenuverter 1: +80%  [2 o'clock]      │
                        │ Attenuverter 2: -60%  [10 o'clock]     │
                        │ Attenuverter 3: +40%  [1 o'clock]      │
                        │ Attenuverter 4: +90%  [3 o'clock]      │
                        │                                         │
                        │ Ch1 Variable → Filter Cutoff          │
                        │ Ch2 Variable → Filter Resonance       │
                        │ Ch3 Variable → Oscillator FM          │
                        │ Ch4 Variable → Reverb Send            │
                        │                                         │
                        │ SUM Attenuverter: MASTER MACRO CONTROL │
                        │ SUM Output ○────────────────────────────┼─── Complete Sonic
                        └───────────────────────────────────────────┘   Transformation
```

| Parameter Control | Attenuverter Setting | Musical Effect | Production Benefit |
|------------------|---------------------|----------------|--------------------|
| **Filter Cutoff** | +80% (2 o'clock) | **Opens as macro increases** | **Brightens with intensity** |
| **Filter Resonance** | -60% (10 o'clock) | **Decreases as macro increases** | **Prevents harshness at high settings** |
| **Oscillator FM** | +40% (1 o'clock) | **Moderate FM increase** | **Adds harmonics gradually** |
| **Reverb Send** | +90% (3 o'clock) | **Strong spatial increase** | **Creates dramatic depth changes** |

**Module Settings:**
- **All Signal inputs:** Fed from same CV source (mult/splitter required)
- **Mathematical relationships:** Each attenuverter creates different curve response
- **SUM Attenuverter:** Acts as master macro - one knob controls entire sonic character
- **Production technique:** Record automation on SUM attenuverter for perfect parameter sweeps

**Learning Objectives:**
- **Macro control concepts:** Multiple parameters controlled by mathematical relationships
- **Production efficiency:** One control creates complex sonic transformations
- **Mathematical mixing:** Understanding how positive/negative scaling creates musical relationships
- **Performance technique:** Real-time control of complex sonic changes

**Advanced Techniques:**
- **Inverse relationships:** Some parameters increase while others decrease
- **Recording automation:** Automate SUM attenuverter for perfect sonic evolution
- **Live performance:** Assign SUM to expression pedal for real-time macro control
- **Sound design:** Create signature sounds with mathematical parameter relationships

---

## Advanced Techniques

### **Self-Patching Feedback Loop**
```
┌──────────────┐
│    Maths     │
│ Ch1 UNITY OUT│──┐
│              │  │  ┌─────────────┐
│ Ch2 SIGNAL IN│◄─┼──│ Attenuator  │
│              │  │  │ (Optional)  │
│ Ch2 VARIABLE │  │  └─────────────┘
│    [LED ◑]   │  │
└──────────────┘  └──────────────┘
```
**Result:** Ch1 envelope modulates Ch2 offset, creating complex interactions

### **Slew Limiting (Smooth CV Changes)**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│Step Sequence│───▶│    Maths     │───▶│ Oscillator  │
│  (Jumpy CV) │    │ Ch3 SIGNAL   │    │ V/OCT Input │
└─────────────┘    │              │    └─────────────┘
                   │ Ch3 VARIABLE │
                   │   [LED ◐]    │
                   └──────────────┘
```
**Controls:** Rise/Fall set slew speed, creating smooth glides between steps

---

## Common Use Cases

1. **🎵 Envelope Generator:** Channels 1 & 4 for shaping VCA, filter, or pitch
2. **🌊 LFO:** Press Cycle button, use for filter sweeps, tremolo, pitch wobbles
3. **⚡ Slew Limiter:** Smooths out jumpy CV - patch CV through Signal input
4. **🔀 Mixer:** Use SUM output to combine up to 4 CV sources
5. **📈 Offset Generator:** Channels 2 & 3 add DC voltage to shift other signals up/down
6. **🎛️ Macro Control Hub:** Wire multiple parameters to different channels for unified control
7. **🔄 Voltage Sequencer:** All channels in Cycle mode with different timing for polyrhythmic patterns
8. **🎚️ Mathematical Processor:** Analog computation of complex voltage relationships

---

## Pairs Well With

### **Advanced Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Ochd LFOs → Maths Signal inputs for organic envelope processing
- **Make Noise Wogglebug:** Wogglebug chaos CVs → Maths channels for mathematical chaos processing  
- **Mutable Marbles:** Marbles X outputs → Maths processing for AI-driven mathematical relationships
- **4ms RCD v2:** RCD divisions → Maths triggers for polyrhythmic envelope generation
- **Cre8audio Function Junction:** Function Junction + Maths = complete envelope ecosystem with feedback
- **Cross-Advanced Integration:** Maths processes all advanced modulation sources into unified mathematical relationships

### **Essential Module Integration (Core Synthesis):**
- **Mutable Plaits:** Maths envelopes perfect for Plaits model modulation and synthesis control
- **Mob of Emus:** Maths mathematical processing ideal for harmonic modulation relationships
- **Disting mk4:** Use together as quantizer + envelope processor for musical stepped sequences
- **Complete synthesis systems:** Maths as central mathematical processor for synthesis networks

### **Essential Utility Partners:**
- **VCAs (Veils, Quad VCA):** Maths envelopes control amplitude shaping and dynamic processing
- **Low Pass Gates (Optomix):** Classic West Coast plucks with Maths envelope timing
- **Filters (Forbidden Planet, Wasp):** Maths LFOs and envelopes create classic filter animation
- **Mult/Splitters:** Essential for distributing Maths outputs to multiple destinations

### **Advanced Mathematical Integration:**
- **Sample & Hold modules:** Clock S&H with Maths EOC/EOR for stepped envelope relationships
- **Logic modules:** Combine Maths outputs with Boolean logic for complex mathematical relationships
- **Quantizers:** Process Maths CV outputs into musical scales and intervals
- **Comparators:** Convert Maths envelopes to gates/triggers for mathematical timing relationships

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"Signal Input vs Trigger Input confusion"**
- **Signal Input:** Envelope follows gate length (sustains while high)  
- **Trigger Input:** Envelope always does full attack→decay cycle
- **Solution:** Most beginners want Signal Input for typical ADSR behavior

**"My knobs don't seem to do anything!"**
- **12 o'clock = OFF** on attenuverters (not maximum!)
- **Solution:** Turn clockwise from 12 for positive, counter-clockwise for negative

**"The normalization mystery"**
- **Variable outputs** mix automatically into SUM unless you patch them
- **Unity outputs** are separate and don't affect the mix
- **Solution:** This is a feature! Understand which outputs auto-mix

### **🎵 Pro Tips:**

**Attenuverter Mastery:**
- **12 o'clock = completely off** (not maximum gain)
- **Clockwise from 12 = positive amount** 
- **Counter-clockwise from 12 = negative/inverted amount**
- **Full clockwise/counter-clockwise = maximum effect**

**Cycle Button Magic:**
- **Transform any envelope into an LFO** instantly
- **Rise/Fall become LFO speed controls** in cycle mode
- **Great for live performance** - instant envelope-to-LFO switching

**Normalization Knowledge:**
- **Channels 2 & 3 generate +10V** when nothing's patched to Signal input
- **Perfect for offset voltages** and manual CV sources
- **Variable outputs auto-mix** - patch cables break normalization

**Timing Ranges:**
- **Maths can do everything** from audio-rate (FM) to 25-minute envelopes
- **Start in the middle** of Rise/Fall range for musical timing
- **Extreme settings unlock** FM synthesis and very long-form modulation

---

## Why This Module Rocks

### **The Philosophy:**
Maths proves that **one excellent module** can replace an entire rack of dedicated functions. It's not just an envelope generator - it's a complete analog computer that thinks in musical time and voltage relationships.

### **The Innovation:**
- **Four independent channels** that can work alone or together
- **Analog computation** handles addition, integration, and differentiation
- **Normalization system** creates intelligent signal routing without patching
- **Dual trigger types** (Signal vs Trigger inputs) for different envelope behaviors
- **Cycle mode** instantly transforms envelopes into LFOs

### **The Practical Benefits:**
- **Space efficiency:** Replaces multiple envelope generators, LFOs, mixers, and utilities
- **Learning tool:** Teaches fundamental analog synthesis concepts hands-on
- **Performance oriented:** Cycle buttons enable real-time envelope-to-LFO switching
- **Expandable:** Works alone or as part of larger Make Noise ecosystem

### **Perfect For:**
- **Beginners:** Learn envelopes, LFOs, and CV mixing in one module
- **West Coast enthusiasts:** Essential for buchla-style modular synthesis
- **Performers:** Real-time control over complex modulation shapes
- **Sound designers:** Complex CV processing and analog computation
- **Small system builders:** Maximum modulation functionality in 20HP

### **The Magic:**
Maths **thinks in musical time** - from microseconds to half-hours. It's not just generating envelopes, it's performing **analog mathematics** on your musical ideas, creating complex relationships that would require dozens of modules to achieve otherwise.

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Maths fundamentals:** Master envelope generation, LFO cycling, and mathematical mixing
2. **Add organic processing:** Integrate DivKid Ochd for breathing mathematical relationships (see Ochd guide)
3. **Include chaos processing:** Use Make Noise Wogglebug for mathematical chaos processing (see Wogglebug guide)
4. **Add AI intelligence:** Apply Mutable Marbles for intelligent mathematical relationships (see Marbles guide)
5. **Include rhythmic math:** Use 4ms RCD v2 for polyrhythmic mathematical timing (see RCD guide)
6. **Complete the ecosystem:** Add Cre8audio Function Junction for comprehensive modulation processing (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Maths + Ochd:** Learn organic modulation processing through mathematical relationships
- **Maths + Wogglebug:** Master chaos processing via analog mathematical computation
- **Maths + Marbles:** Understand AI + mathematical hybrid intelligence systems
- **Maths + RCD:** Explore polyrhythmic mathematical timing relationships
- **All Phase 2 + Maths:** Build complete mathematical ecosystems with multiple intelligence types

### **Skill Development Milestones:**
- **Beginner:** Use individual channels for basic envelope and LFO functions
- **Intermediate:** Master SUM mixing and attenuverter control for complex mathematical relationships
- **Advanced:** Create Phase 2 integration patches with mathematical processing of organic/chaos/AI sources
- **Expert:** Design mathematical ecosystems where Maths serves as central computational brain

### **Advanced Mathematical Concepts:**
- **Analog Computation:** Understand how Maths performs mathematical operations on musical voltages
- **Mathematical Mixing:** Use SUM and individual outputs for complex mathematical relationships
- **Envelope Mathematics:** Explore how Rise/Fall create mathematical curves in musical time
- **System Integration:** Design patches where Maths processes multiple intelligence types simultaneously

### **Performance Applications:**
- **Live Mathematical Control:** Real-time envelope and mathematical relationship control
- **Generative Mathematics:** Foundation for self-evolving mathematical music systems
- **Hybrid Intelligence:** Bridge between organic, chaos, AI, and mathematical processing
- **Educational Tool:** Learn analog computation and mathematical synthesis concepts

---

**Bottom Line:** Maths isn't just a module - it's a **musical computer** that teaches you to think in voltage and time. Every patch teaches you something new about how modular synthesis really works. As the **mathematical brain of Phase 2 ecosystems**, it transforms organic breathing, controlled chaos, and artificial intelligence into unified musical mathematics.

---

*Visit [Make Noise Music](https://makenoisemusic.com) for complete documentation, patch examples, and the legendary Maths manual*