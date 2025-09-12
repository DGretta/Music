# DivKid Ochd + Ochd Expander - Beginner's Guide

**The Ultimate 8HP Modulation Powerhouse**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Ochd?** Eight analogue triangle LFOs in 4HP, deliberately NOT synced, running from fast (top) to slow (bottom). Think of it as "organic drift" - musical phasing that breathes life into static patches.

### Your First Modulation (Ochd Alone)
1. **Turn Rate knob** to 12 o'clock (vibrato speed)
2. **Patch LFO 1 (top output)** → your filter cutoff
3. **Patch LFO 8 (bottom output)** → your VCA CV
4. **Play a note** - you should hear fast filter movement with slow volume changes

**With the Expander (if you have it):**
1. **Connect the two ribbon cables** from Ochd to Expander (red stripe down on expander side)
2. **Patch a Full Wave Rectifier output** → your oscillator pitch
3. **Patch a DAC output** → another parameter
4. **Watch the magic happen** - you now have 24 modulation sources!

---

## Essential Parameters (The Big 3)

### **1. Rate Knob (Ochd)**
- **What it does:** Controls speed of ALL 8 LFOs simultaneously
- **Musical result:** From 160Hz (audio rate) down to 25-minute cycles
- **Sweet spot:** 12 o'clock = vibrato/tremolo speeds (3-7Hz)

### **2. CV Input + Attenuverter (Ochd)**
- **What it does:** External control over Rate, can also create waveshaping
- **Musical result:** Positive CV = faster LFOs, Negative CV = stalls/holds LFOs
- **Pro tip:** Patch an LFO output back into CV input for feedback waveshaping!

### **3. Expander Sections (If you have the Expander)**
- **Section 1:** Full Wave Rectifiers - unipolar, double-speed versions of LFOs 1,3,5,7
- **Section 2:** Min/Max Logic - combines LFOs 2+3 and 6+7 for complex shapes
- **Section 3:** Cascading Triggers - rhythmic triggers from the left-side LFOs
- **Section 4:** 4-Bit DACs - stepped random voltages ("slow noise")

---

## Progressive Patch Examples

### **Patch 1: First Steps - Basic Organic Movement (Ochd Only)**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   DivKid    │───▶│  Oscillator  │───▶│   Filter    │
│    Ochd     │    │              │    │             │
│             │    │ Audio Out ───┼───▶│ Audio In    │
│ LFO 1 Out ──┼───▶│ FM Amount    │    │             │
│             │    │              │    │ Cutoff  ◀───┼─── [From LFO 4]
│ LFO 4 Out ──┼────┼──────────────┼───▶│             │
│             │    │              │    │ Audio Out ──┼─── To VCA
│ LFO 8 Out ──┼────┼──────────────┼────┼─────────────┼──▶ ┌─────────────┐
└─────────────┘    │ Rate: 2      │    │             │    │     VCA     │
                   │ o'clock      │    │             │    │ CV Input    │
                   └──────────────┘    └─────────────┘    │             │
                                                          │ Audio Out ──┼─── Final Output
                                                          └─────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|-------------------|
| LFO 1 → Oscillator FM | CV (Blue) | **Fast modulation** | **Experience fastest LFO speed** |
| LFO 4 → Filter Cutoff | CV (Blue) | **Medium-speed sweeps** | **Learn mid-range modulation rates** |
| LFO 8 → VCA CV | CV (Blue) | **Slow amplitude changes** | **Understand slowest LFO behavior** |

**Module Settings:**
- **Ochd Rate:** 2 o'clock (active but musical movement)
- **Filter:** Start with cutoff at 12 o'clock, moderate resonance
- **Oscillator:** Basic waveform, FM amount around 10 o'clock

**Learning Objectives:**
- Experience the 8 different speeds of Ochd's LFOs
- Understand how organic drift creates musical movement
- Learn the relationship between LFO position and speed

**Visual Feedback:**
- **LFO 1:** Rapid oscillation, visible as fast LED flicker
- **LFO 4:** Moderate movement, 2-3 second cycles
- **LFO 8:** Very slow changes, 30+ second cycles
- **Result:** Patch breathes and evolves organically without rigid timing

### **Patch 2: Intermediate - Unipolar Modulation Magic (With Expander)**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   DivKid    │───▶│  Oscillator  │───▶│   Effects   │
│    Ochd +   │    │              │    │ Processor   │
│  Expander   │    │ 1V/Oct   ◀───┼────┼─ Full Wave  │
│             │    │              │    │ Rect 1      │
│ Full Wave   │    │ Audio Out ───┼───▶│             │
│ Rect 1  ────┼───▶│              │    │ Delay Time ◀┼─── [From DAC A]
│             │    └──────────────┘    │             │
│ Full Wave   │                        │ Filter CV ◀─┼─── [Direct]
│ Rect 3  ────┼──────────────────────▶ │             │
│             │                        │ Mix CV   ◀──┼─── [From Min 2+3]
│ DAC Out A ──┼──────────────────────▶ │             │
│             │                        │ Audio Out ──┼─── Final Output
│ Min Out ────┼──────────────────────▶ └─────────────┘
│ (LFO 2+3)   │
└─────────────┘
```

| Connection | Cable Type | Purpose | Advanced Concept |
|------------|------------|---------|------------------|
| Full Wave Rect 1 → Oscillator 1V/Oct | CV (Blue) | **Unipolar pitch modulation** | **Always moves up in pitch** |
| Full Wave Rect 3 → Effects Filter CV | CV (Blue) | **Positive filter sweeps** | **Only opens filter, never closes** |
| DAC Output A → Delay Time | CV (Blue) | **Stepped random delays** | **Quantized time modulation** |
| Min Output → Effects Mix CV | CV (Blue) | **Smooth dynamics control** | **Logic-based mixing** |

**Module Settings:**
- **Ochd Rate:** 12 o'clock (standard musical rates)
- **Expander:** All sections active, observe different output behaviors
- **Effects:** Start with short delay, moderate filter cutoff

**Learning Objectives:**
- Master the difference between bipolar (±5V) and unipolar (0-5V) modulation
- Understand Full Wave Rectification as a modulation tool
- Experience stepped random voltages from DACs
- Learn Min/Max logic operations on LFOs

**Advanced Techniques:**
- **Unipolar advantages:** Pitch modulation that always goes "up," filters that only "open"
- **DAC "slow noise":** Stepped random perfect for non-musical parameters
- **Logic operations:** Min/Max create musical relationships between LFOs
- **Cascading triggers:** Use for organic rhythmic elements

**Visual Feedback:**
- **Full Wave Rectifiers:** Watch for doubled frequency, always-positive voltages
- **DAC Outputs:** Stepped changes every few seconds, like slow sample & hold
- **Min/Max Logic:** Smooth curves that follow the lower/higher of two LFOs
- **Result:** Complex modulation that's always musical and positive-going

### **Patch 3: Advanced - Rhythmic Chaos with Phase 2 Cross-Modulation**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   DivKid    │───▶│ Make Noise   │───▶│ Percussion  │
│   Ochd +    │    │ Wogglebug    │    │ Module 1    │
│  Expander   │    │              │    │             │
│             │    │ Disturb  ◀───┼────┼─ Trigger 1   │
│ Trigger 1 ──┼───▶│              │    │ (Kick)      │
│             │    │ Clock In ◀───┼────┼─ Trigger 2   │
│ Trigger 2 ──┼───▶│              │    │ (Snare)     │
│             │    │ Stepped  ────┼───▶│             │
│ Trigger 3 ──┼─┐  │              │    │ Trigger 3   │
│             │ │  │ Smooth   ────┼───▶│ (Hi-hat) ◀─┼─── [From Cascading]
│ DAC A   ────┼─┼─▶│ Ego/Id CV    │    │             │
│             │ │  │              │    └─────────────┘
│ DAC B   ────┼─┘  │ Woggle   ────┼───▶ ┌─────────────┐
└─────────────┘    │              │    │ Percussion  │
                   └──────────────┘    │ Module 2    │
                          │                    │             │
                          │                    │ Kick Pitch ◀┼─── [From DAC B]
                          ▼                    │             │
                   ┌──────────────┐    │ Audio Outs  │
                   │   Filter     │    │ 1, 2, 3 ────┼─── To Mixer
                   │ Cutoff CV ◀──┼────┼─── [From Smooth] │
                   │              │    └─────────────┘
                   │ Audio In ◀───┼────┼─── [Audio Source]
                   │              │
                   │ Audio Out ───┼────┼─── Final Output
                   └──────────────┘
```

| Module Chain | Signal Flow | Purpose | Phase 2 Integration |
|-------------|-------------|---------|--------------------|
| **Ochd Triggers → Wogglebug** | Organic timing | **Chaos modulation** | **Cross-module timing relationships** |
| **Wogglebug Stepped → Percussion** | Random to rhythmic | **Unpredictable drum patterns** | **Chaos becomes musical timing** |
| **Ochd DACs → Multiple destinations** | Slow noise distribution | **Parameter control** | **System-wide modulation** |
| **Wogglebug Smooth → Filter** | Musical modulation | **Organic filter movement** | **Chaos processing for musicality** |

**Module Settings:**
- **Ochd Rate:** 1 o'clock (rhythmic but organic timing)
- **Wogglebug Speed/Chaos:** 12 o'clock (balanced chaos)
- **Wogglebug Ego/Id:** Controlled by Ochd DAC A (evolving character)
- **Percussion modules:** Set for complementary drum sounds

**Learning Objectives:**
- **Phase 2 module integration:** Use multiple Phase 2 modules together
- **Signal transformation:** Organic timing → Musical chaos → Rhythmic patterns
- **Cross-module modulation:** Each module enhances the others' capabilities
- **System thinking:** Design patches as interconnected ecosystems

**Advanced Phase 2 Concepts:**
- **Ochd as timing source:** Provides organic pulse for chaos generation
- **Wogglebug as translator:** Converts organic timing into musical uncertainty
- **Cascading triggers:** Natural rhythm relationships without rigid programming
- **DAC modulation:** Slow parameter changes that evolve over long time periods

**Visual Feedback:**
- **Ochd LEDs:** Watch organic trigger timing, never perfectly regular
- **Wogglebug system clock:** Responds to Ochd triggers with chaos variations
- **Percussion patterns:** Organic polyrhythms that shift and evolve
- **Result:** Drum patterns that feel alive and never repeat exactly

### **Patch 4: Expert - Complete Phase 2 Modulation Ecosystem**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   DivKid    │◀──▶│ Phase 2      │───▶│ Synthesis   │
│   Ochd +    │    │ Integration  │    │ Network     │
│  Expander   │    │ Hub          │    │             │
│             │    │              │    │ Multiple    │
│ Rate CV ◀───┼───▶│ Wogglebug ◀──┼────┼─ Oscillators │
│             │    │ Marbles   ◀──┼────┼─ Filters     │
│ LFO 1-8 ────┼───▶│ RCD v2    ◀──┼────┼─ Effects     │
│             │    │ Function  ◀──┼────┼─             │
│ Full Wave   │    │ Junction     │    │ Intelligent │
│ 1,3,5,7 ────┼───▶│              │    │ Modulation  │
│             │    │ Learning  ◀──┼────┼─ Distribution│
│ DAC A,B,C,D ┼───▶│ Network      │    │             │
│             │    │              │    │ Matrix      │
│ Triggers    │    │ Feedback  ◀──┼────┼─             │
│ 1,2,3   ────┼───▶│ Analysis     │    │ Complex     │
│             │    │              │    │ Musical     │
│ Min/Max ────┼───▶│ Musical   ───┼───▶│ Evolution   │
│ Logic   ────┼───▶│ Intelligence │    │             │
└─────────────┘    │ Learning  ───┼───▶│ Output  ────┼─── Complete
        ▲          └──────────────┘    └─────────────┘   Musical
        │                              System
        └───────────── Adaptive Rate Control
```

**Complete Phase 2 Integration:**

| Module | Primary Function | Ochd Integration | System Role |
|--------|-----------------|------------------|-------------|
| **Wogglebug** | Chaos generation | **Triggers → Disturb** | **Organic → Musical chaos** |
| **Marbles** | AI learning | **DACs → Parameters** | **Intelligence layer** |
| **RCD v2** | Polyrhythm generation | **Triggers → Clock/Rotate** | **Rhythm multiplication** |
| **Function Junction** | Envelope processing | **LFOs → MOD inputs** | **Modulation shaping** |
| **Learning Network** | System intelligence | **Audio → Rate feedback** | **Adaptive optimization** |

**Expert System Design:**
- **Ochd as organic foundation:** Provides non-mechanical timing and modulation base
- **Phase 2 processing layers:** Each module adds intelligence to organic sources
- **Feedback learning:** System improves based on musical output analysis
- **Emergent behavior:** Complex musicality from simple organic interactions

**Learning Objectives:**
- **System architecture:** Design intelligent, self-improving musical ecosystems
- **Cross-module synthesis:** Understand how Phase 2 modules enhance each other
- **AI-assisted composition:** Use machine learning for musical evolution
- **Adaptive performance:** Build systems that become more musical with use

**Performance Evolution:**
1. **Organic exploration** (0-5 min): Ochd provides foundation timing
2. **Chaos processing** (5-15 min): Wogglebug adds musical uncertainty
3. **Intelligence emergence** (15-45 min): Marbles learns patterns, RCD develops rhythms
4. **System mastery** (45+ min): Complete ecosystem reflects your musical preferences

**Advanced Philosophy:**
This represents **modular synthesis evolution**: from mechanical sequencing to **organic timing (Ochd) → musical chaos (Wogglebug) → artificial intelligence (Marbles) → rhythmic complexity (RCD) → adaptive processing (Function Junction)**. The system becomes a **musical collaborator** that learns your preferences and suggests new directions.

---

## Common Use Cases

### **Studio Integration:**
- **Ambient/Generative:** Use slower LFOs (5-8) for glacial parameter changes
- **Techno/Dance:** Use faster LFOs (1-4) for rhythmic filter sweeps and vibrato
- **Experimental:** Patch outputs back into CV input for complex waveshaping

### **Live Performance:**
- **One knob control:** Rate knob affects your entire modulation ecosystem
- **Predictable chaos:** Not random, but not rigidly synced either
- **Expander adds variety:** 24 total outputs means endless modulation without menu diving

---

## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **Make Noise Wogglebug:** Ochd triggers → Wogglebug Disturb for chaos timing relationships
- **Mutable Marbles:** Ochd DACs → Marbles Spread/Bias CV for intelligent parameter control  
- **4ms RCD v2:** Ochd triggers → RCD Clock for organic polyrhythmic timing
- **Cre8audio Function Junction:** Ochd LFOs → Function MOD inputs for organic envelope shaping
- **Cross-Phase 2 Integration:** All Phase 2 modules work together as unified modulation ecosystem

### **Phase 1 Module Integration (Core Synthesis):**
- **Make Noise Maths:** Ochd LFOs → Maths inputs for organic envelope processing
- **Mutable Plaits:** Ochd outputs perfect for Model CV and Timbre modulation
- **Mob of Emus:** Ochd DACs → Harmonic control for mathematical-organic hybrid patterns
- **Disting mk4:** Use as quantizer for Ochd LFOs, or clock source for cascading triggers

### **Essential Utility Partners:**
- **VCAs (2HP VCA, Veils):** Scale and mix multiple Ochd outputs for complex modulation
- **Quantizers (Scales, uScale):** Turn smooth LFOs into musical pitch sequences
- **Sample & Holds (Kinks, SMTH):** Freeze interesting Ochd values for stepped modulation
- **Comparators (Cold Mac, DVCA):** Convert triangles to gates/triggers for rhythm generation

### **Expander-Specific Synergies:**
- **Modules expecting unipolar CV:** Full Wave Rectifiers provide 0-5V instead of ±5V
- **Clock-hungry modules:** Cascading triggers perfect for organic timing sources
- **Parameter modulation:** DAC outputs ideal for stepped parameter changes
- **Logic processing modules:** Min/Max outputs work great with Boolean logic processors

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"Why isn't my modulation in sync with my sequence?"**
- The LFOs are deliberately NOT synced - this is the point! They're "tuned by ear" for musical relationships
- **Solution:** Embrace the organic drift, or use a different LFO module if you need strict sync

**"The modulation is too extreme!"**
- Ochd outputs ±5V (10Vpp) which is a lot for some parameters
- **Solution:** Use attenuators, or mix with other signals to tame the movement

**"I can't get unipolar modulation!"** (Without Expander)
- Ochd outputs are bipolar (positive and negative voltages)
- **Solution:** Use offset modules, or get the Expander for built-in Full Wave Rectifiers

### **🎵 Pro Tips:**

**Track & Hold Magic:**
- Patch a gate signal to CV input, turn attenuverter fully left
- All LFOs freeze at their current values when gate is high
- Creates rhythmic "stuttering" of your modulation
- **Phase 2 Integration:** Use Marbles t outputs or RCD divisions as freeze gates

**Feedback Waveshaping:**
- Patch any LFO output back into the CV input
- Adjust attenuverter to taste
- Creates exponential curves, odd squares, stepped waveforms
- **Phase 2 Combo:** Mix with Wogglebug outputs for complex waveshaping feedback

**Expander Cascading:**
- Trigger inputs are normalled - unpatched inputs cascade from previous trigger
- Start with just one trigger patched, let the others cascade naturally
- Creates organic polyrhythms
- **Phase 2 Chain:** Cascade into Marbles for intelligent rhythm processing

**Phase 2 Modulation Matrix:**
- **Ochd LFOs 1-4** → Fast modulation (vibrato, tremolo, filter sweeps)
- **Ochd LFOs 5-8** → Slow modulation (evolving textures, parameter drift)
- **Expander Full Wave** → Unipolar modulation (pitch, filter cutoff)
- **Expander DACs** → Stepped random (percussion triggers, parameter jumps)
- **Expander Triggers** → Rhythmic elements (Marbles clock, Wogglebug disturb)
- **Expander Logic** → Musical relationships (harmonic intervals, rhythm patterns)

**Advanced Phase 2 Workflows:**
- **Start with Ochd** as foundation timing and modulation source
- **Add Wogglebug** for chaos processing of Ochd triggers
- **Include Marbles** for intelligent learning from the organic chaos
- **Use RCD v2** for polyrhythmic expansion of learned patterns
- **Apply Function Junction** for envelope shaping and final modulation mixing

---

## Why This Module Rocks

### **The Philosophy:**
DivKid wanted something to "keep patches organically drifting and moving" rather than rigid, synced modulation. Richard Devine called it "the most organic little modulator ever" - that says it all!

### **The Practical Benefits:**
- **Small footprint, huge impact:** 8HP total for 24 modulation sources
- **One-knob performance:** Rate controls your entire modulation ecosystem
- **No menu diving:** Everything is immediate and patchable
- **Expander magic:** 8+4^2 = mathematical modulation expansion

### **Perfect For:**
- **Beginners:** Simple concept, immediate results, teaches modulation fundamentals
- **Pros:** Adds movement "without hogging a lot of space" in larger systems
- **Live performers:** Predictable but never boring modulation
- **Sound designers:** "Slow noise" DAC outputs for stepped randomness

---

**Bottom Line:** Ochd + Expander gives you an entire modulation ecosystem in just 8HP. It's not about precision - it's about bringing your patches to life with organic, musical movement that never gets boring. As the **foundation of Phase 2 modulation networks**, it enables the creation of intelligent musical systems that learn, evolve, and become personalized instruments.

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start here:** Master Ochd basics and organic modulation concepts
2. **Add chaos processing:** Integrate Make Noise Wogglebug (see Wogglebug guide)
3. **Include AI learning:** Add Mutable Marbles for intelligent pattern evolution (see Marbles guide)
4. **Expand rhythmically:** Use 4ms RCD v2 for polyrhythmic complexity (see RCD guide)
5. **Shape and mix:** Apply Cre8audio Function Junction for envelope processing (see Function Junction guide)
6. **Integrate Phase 1:** Connect to synthesis modules for complete musical systems

### **Cross-Module Learning Opportunities:**
- **Ochd → Wogglebug:** Learn chaos timing and disturbance relationships
- **Ochd → Marbles:** Understand organic input to AI processing
- **Ochd → RCD:** Explore organic timing to mathematical rhythm conversion
- **Ochd → Function Junction:** Master organic modulation shaping and mixing
- **All Phase 2 together:** Build intelligent, evolving musical ecosystems

### **Skill Development Milestones:**
- **Beginner:** Use individual LFO outputs for basic modulation
- **Intermediate:** Master Expander functions and unipolar modulation
- **Advanced:** Create cross-module Phase 2 integration patches
- **Expert:** Design self-learning, adaptive musical systems

### **Advanced Integration Concepts:**
- **Modulation Hierarchies:** Ochd modulates other modulators for complex relationships
- **Feedback Systems:** Use Ochd outputs to control Ochd rate for recursive behavior
- **AI Training:** Let Marbles learn from Ochd's organic patterns
- **System Evolution:** Build patches that become more musical over time

### **Performance Applications:**
- **Live Modulation:** Use Ochd as real-time performance controller for entire system
- **Generative Music:** Foundation for self-evolving ambient and experimental compositions
- **Hybrid Systems:** Bridge between human control and AI-assisted music creation
- **Adaptive Instruments:** Create personalized instruments that learn your musical preferences

---

*Visit [DivKid's website](https://divkidvideo.com/ochd-the-second-divkid-eurorack-module/) and [Instruo](https://www.instruomodular.com/product/ochd/) for complete documentation and community patches*