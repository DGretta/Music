# DivKid ochd + ochd Expander - Guide

**The Ultimate 8HP Modulation Powerhouse**

---

## Historical Context

**The Organic Modulation Revolution:** The DivKid ochd represents a pivotal shift in modular LFO design philosophy. When most LFOs focused on precision and sync, DivKid (Ben Wilson) championed "organic drift" - deliberately non-synced triangle waves that create musical phase relationships through careful analog tuning rather than digital precision.

**Collaborative Innovation:** Developed in partnership with Instruo, ochd proved that sometimes the most musical approach is the least technical one. By embracing analog imprecision and musical tuning, ochd taught the modular community that "perfectly synced" isn't always "perfectly musical."

**Educational Impact:** ochd became the gateway drug for modulation - its immediate musical results and organic movement converted countless musicians to the power of continuous modulation over rigid step sequences. The later Expander addition showed how simple concepts could expand exponentially while maintaining musical coherence.

---

## Quick Start: Get Your First Sound in 5 Minutes

![DivKid Ochd](https://github.com/DGretta/Music/raw/main/modular/images/divkid/ochd/front_panel.jpg)  
*DivKid Ochd - Main module showing 8 LFO outputs, Rate knob, and CV input with attenuverter*

![DivKid Ochd Expander](https://github.com/DGretta/Music/raw/main/modular/images/divkid/ochd/exp_panel.jpg)  
*DivKid Ochd Expander - Showing Full Wave Rectifiers, Min/Max Logic, Cascading Triggers, and 4-Bit DACs*

**What is Ochd?** Eight analogue triangle LFOs in 4HP, deliberately NOT synced, running from fast (top) to slow (bottom). Think of it as "organic drift" - musical phasing that breathes life into static patches.

**Key Specifications:** (Verified against official Instruo documentation)
- **Ochd Main Module:** 4HP width, 32mm depth, +12V: 80mA, -12V: 80mA
- **Ochd Expander:** 4HP width, 32mm depth, +12V: 5mA, -12V: 5mA
- **Architecture:** 8 free-running analogue triangle LFOs + modulation processing circuits
- **CV Range:** Bipolar ±5V (10Vpp output), Full Wave Rectifiers 0-5V unipolar, DAC outputs 0-5V stepped
- **Frequency Range:** LFO 1 up to 160Hz (fastest), LFO 8 down to 25-minute cycle (slowest)
- **Center Rate Position:** LFO 1 set to 3-7Hz vibrato rate

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
- **Interconnection Teaching:** The Rate knob demonstrates a fundamental principle that appears everywhere in analog synthesis - the relationship between timing and frequency. When you understand how ochd's Rate knob controls eight parallel oscillators at fixed ratios, you understand how envelope generators work (ADSR shares one clock), how clock dividers create polyrhythms, and why LFO relationships matter across modules. This is RC time constant behavior - resistor-capacitor networks that appear in filters (frequency selection), envelopes (timing control), and oscillators (pitch generation). Ochd's Rate knob teaches the same physics underlying all analog timing in synthesis.

### **2. CV Input + Attenuverter (Ochd)**
- **What it does:** External control over Rate, can also create waveshaping
- **Musical result:** Positive CV = faster LFOs, Negative CV = stalls/holds LFOs
- **Pro tip:** Patch an LFO output back into CV input for feedback waveshaping!
- **Interconnection Teaching:** The attenuverter teaches voltage control fundamentals that define modular synthesis - controlling both amplitude (how much signal) and polarity (signal direction). This principle appears in every CV utility: mixers scale voltages, offsets shift them, attenuators reduce them. The feedback waveshaping capability reveals how analog circuits transform signals through interaction - the same principle powers waveshapers, distortion circuits, and all nonlinear processing. Understanding ochd's feedback teaches why Maths creates complex envelopes, why oscillators interact musically, and how signal interaction creates relationships rather than simple addition.

### **3. Expander Sections (If you have the Expander)**
- **Section 1:** Full Wave Rectifiers - unipolar, double-speed versions of LFOs 1,3,5,7
- **Section 2:** Min/Max Logic - combines LFOs 2+3 and 6+7 for complex shapes
- **Section 3:** Cascading Triggers - rhythmic triggers from the left-side LFOs
- **Section 4:** 4-Bit DACs - stepped random voltages ("slow noise")
- **Interconnection Teaching:** The Expander transforms simple signals through mathematical operations. Full Wave Rectification appears in precision rectifier modules and audio interfaces. Min/Max logic is Boolean operations - the same circuits power logic modules and sequencers. DACs are the inverse of ADCs found in samplers and audio interfaces. Understanding these operations teaches how ALL signal processing works: take simple signals, apply mathematical transformations, create complexity. Every sophisticated synthesis system follows this pattern: minimize source count, maximize processing sophistication.

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
- Experience the 8 different speeds of Ochd's LFOs and understand RC time constant behavior that appears in all analog circuits
- Learn how organic drift (phase shifting without sync) creates musical relationships - understand this principle applies to polyrhythms, sequencer timing, and all oscillator interactions
- Understand the relationship between LFO position and speed - this principle appears in clock dividers, rhythm generators, and every hierarchical modulation system
- Connect analog oscillator behavior to broader synthesis: phase relationships appear in filters (frequency selection), envelopes (timing control), and oscillators (pitch generation)

**Visual Feedback:**
- **LFO 1:** Rapid oscillation, visible as fast LED flicker
- **LFO 4:** Moderate movement, 2-3 second cycles
- **LFO 8:** Very slow changes, 30+ second cycles
- **Result:** Patch breathes and evolves organically without rigid timing

**Alternative Module Options:**
- **Budget:** **Doepfer A-111-4** (quad VCO), **Mutable Plaits** (varied synthesis)
- **Different character:** **Make Noise DPO** (complex dual oscillation), **Intellijel Dixie II+** (classic analog)
- **Premium:** **Make Noise STO** (clean analog tone), **AI Synthesis AI002** (DIY approach)

**Filter & VCA Alternatives:**
- **Budget:** **2HP VCF** (compact filtering), **2HP VCA** (simple VCA)
- **Different character:** **Make Noise MMG** (lowpass gate character), **Intellijel Quad VCA** (precision control)
- **Premium:** **Mutable Ripples** (liquid analog filtering), **Make Noise ModDemix** (mixing + VCA)

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
- Master bipolar vs. unipolar CV distinction - this is fundamental across all synthesis from audio interfaces to precision rectifiers
- Understand Full Wave Rectification as mathematical signal transformation - this principle appears in audio interfaces, precision rectifiers, and any system needing one-directional signals
- Experience stepped random voltages from DACs and understand how digital-to-analog conversion principles work - the inverse appears in ADCs in samplers and audio interfaces
- Learn Min/Max logic as Boolean operations - these same circuits power logic modules, probability-based sequencers, and decision-making systems throughout modular synthesis
- Understand why unipolar modulation is musically superior for certain parameters: pitch always goes up, filters always open, creating predictable behavior that transfers to any CV destination

**Interconnection:** The Expander teaches signal transformation - processing simple triangle waves through mathematical operations to create complexity. This is the CORE PRINCIPLE of ALL synthesis: start with simple sources, apply mathematical transformations, create musicality. Every effects module, logic circuit, and sophisticated modulation system works on this principle. Understanding the Expander here teaches you systematic patch design anywhere - whether you're building ambient textures (slow LFOs→filters→effects) or complex rhythms (triggers→logic→sequencers).

**Visual Feedback:**
- **Full Wave Rectifiers:** Watch for doubled frequency, always-positive voltages
- **DAC Outputs:** Stepped changes every few seconds, like slow sample & hold
- **Min/Max Logic:** Smooth curves that follow the lower/higher of two LFOs
- **Result:** Complex modulation that's always musical and positive-going

**Alternative Module Options:**
- **Budget:** **Doepfer A-188-1** (analog delay), **2HP Verb** (budget reverb)
- **Different character:** **Make Noise Erbe-Verb** (unique reverb), **Intellijel Rainmaker** (complex delay)
- **Premium:** **Mutable Clouds** (granular processing), **FX Aid Pro** (comprehensive effects)

**Supporting Modules:**
- **Budget:** **AI Synthesis AI007** (DIY effects), **2HP Mix** (simple signal combining)
- **Different character:** **Make Noise Maths** (complex function generation), **Function Junction** (CV processing)
- **Premium:** **Intellijel Rubicon** (complex waveforms), **Make Noise DPO** (dual oscillation)

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
- **Phase 2 module integration:** Understand how individual modules communicate through standardized CV voltages - this teaches holistic thinking about systems
- **Signal transformation:** Learn that modulation is hierarchical - LFOs modulate synthesis parameters, which themselves might modulate other parameters, creating emergent complexity
- **Cross-module synthesis principles:** Chaos processing (Wogglebug) applied to organic timing (ochd) teaches you how modules enhance each other's capabilities. This principle works anywhere: random sources + logic = polyrhythms, LFOs + VCAs = tremolo, envelopes + oscillators = dynamics
- **System thinking:** Design patches as interconnected ecosystems where each module amplifies others' musicality - this thinking scales from two-module combinations to entire complex rigs

**Interconnection:** This patch sequence teaches modular synthesis philosophy: start with organic timing, add musical chaos, create intelligent processing. You can apply this thinking to any module combination - organic source + processing + intelligent control = sophisticated musicality. This principle appears in ambient synths (LFO sources + filters + reverb), drum synthesis (noise + envelopes + effects), and every sophisticated patch.

**Visual Feedback:**
- **Ochd LEDs:** Watch organic trigger timing, never perfectly regular
- **Wogglebug system clock:** Responds to Ochd triggers with chaos variations
- **Percussion patterns:** Organic polyrhythms that shift and evolve
- **Result:** Drum patterns that feel alive and never repeat exactly

**Alternative Module Options:**
- **Instead of Make Noise Wogglebug:** Try **Turing Machine + Expanders** for binary chaos, **Music Thing Radio Music** for sample-based chaos, or **2HP Rnd** for compact randomness
- **Budget alternatives:** **Doepfer A-118-2** for noise/random sources, **AI Synthesis AI008** for DIY random approach
- **Different character:** **Nonlinearcircuits modules** for diverse chaos types, **Zlob Modular Vnoise** for chaotic noise sources
- **For percussion:** **Intellijel Drums** for analog drum synthesis, **2HP Bell + 2HP Hat** for compact percussion, **Make Noise 0-CTRL** for dynamic rhythm programming
- **Filter alternatives:** **Make Noise MMG** for lowpass gate character, **Intellijel Morgasmatron** for stereo filtering

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
- **System architecture:** Understand how intelligent modules learn from organic sources - this principle applies anywhere: let Marbles learn from Wogglebug chaos, let sequencers respond to random sources, let systems evolve based on input patterns
- **Cross-module synthesis:** Learn why Phase 2 modules are powerful together - they demonstrate that great synthesis emerges from combining many simple principles, not from finding one complex module
- **AI-assisted composition:** Understand machine learning as pattern recognition applied to music - Marbles learns rhythmic relationships from Wogglebug's chaos, RCD multiplies those patterns, systems become increasingly musical over time
- **Adaptive performance:** Build systems that improve with use - realize that synthesis systems develop character through playing, just like acoustic instruments
- **Broader synthesis principle:** Complex musicality emerges from simple interactions. Every sophisticated modulation system (whether Phase 2 ecosystem or elsewhere) works on this principle: combine simple sources through intelligent processing to create emergent musical behavior

**Performance Evolution:**
1. **Organic exploration** (0-5 min): Ochd provides foundation timing - learn that unpredictable timing can be musical
2. **Chaos processing** (5-15 min): Wogglebug adds musical uncertainty - discover that randomness + structure = creativity
3. **Intelligence emergence** (15-45 min): Marbles learns patterns, RCD develops rhythms - understand that observation of patterns creates musicality
4. **System mastery** (45+ min): Complete ecosystem reflects your musical preferences - realize you've built a collaborative instrument

**What You're Learning About Synthesis:** The progression from organic → chaotic → intelligent → mathematical → shaped demonstrates that every great patch starts with sources, adds processing, shapes the result, then presents it musically. Whether you're building ambient pads (slow LFOs through filters through effects) or drum patterns (triggers through logic through sequencers), you're following this same architecture throughout synthesis.

**Advanced Philosophy:**
This represents **modular synthesis evolution**: from mechanical sequencing to **organic timing (ochd) → musical chaos (Wogglebug) → artificial intelligence (Marbles) → rhythmic complexity (RCD) → adaptive processing (Function Junction)**. The system becomes a **musical collaborator** that learns your preferences and suggests new directions.

**The Broader Lesson:** This progression teaches you how ALL sophisticated synthesis works. Start with simple sources (oscillators, LFOs, random). Add processing that combines or transforms them (filters, logic, effects). Layer intelligent processing that learns or responds to patterns. Finally, shape the output into musical results. Whether you're working with Phase 2 modules, classic Make Noise, Mutable Instruments, or any other system, this architecture repeats everywhere: sources → transformation → intelligence → musicality. Understanding ochd's role in this ecosystem teaches you to think systematically about ANY patch you build.

**Alternative Module Options:**
- **Budget:** **2HP Rnd + 2HP S&H** (basic randomness), **Doepfer A-149-1** (quantized random)
- **Different character:** **Turing Machine + Expanders** (binary sequences), **Music Thing Radio Music** (sample chaos)
- **Premium:** **ALM Pamela's New Workout** (algorithmic patterns), **Expert Sleepers Disting mk4** (multi-algorithm)

**Advanced System Integration:**
- **Budget:** **AI Synthesis modules** (DIY approach), **Nonlinearcircuits modules** (varied chaos)
- **Different character:** **Intellijel Metropolix** (probability sequencing), **Mutable Frames** (complex modulation)
- **Premium:** **Hermod+** (comprehensive sequencing), **MetaModule** (infinite algorithms)

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

### **Modulation & CV Source Integration:**
- **Make Noise Wogglebug:** ochd triggers → Wogglebug Disturb for chaos timing relationships
- **Mutable Marbles:** ochd DACs → Marbles Spread/Bias CV for intelligent parameter control  
- **4ms RCD v2:** ochd triggers → RCD Clock for organic polyrhythmic timing
- **Function Junction:** ochd LFOs → Function MOD inputs for organic envelope shaping
- **Cross-System Integration:** All advanced modulation modules work together as unified ecosystem

### **Core Synthesis Module Integration:**
- **Make Noise Maths:** ochd LFOs → Maths inputs for organic envelope processing
- **Mutable Plaits:** ochd outputs perfect for Model CV and Timbre modulation
- **Mob of Emus:** ochd DACs → Harmonic control for mathematical-organic hybrid patterns
- **Disting mk4:** Use as quantizer for ochd LFOs, or clock source for cascading triggers

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

## Common Mistakes and How to Avoid Them

### **"My modulation doesn't sync with my sequence"**
**Problem:** LFO drift feels chaotic instead of musical
**Why It Happens:** Ochd's LFOs are deliberately free-running and phase-shift relative to external clocks. They're not broken - they're designed this way. Each LFO runs at its own analog rate without digital sync, creating "organic drift" that evolves over time. Most users expect click-grid synchronization from their sequencer.
**Solution:**
- Embrace the organic phase relationship - this is ochd's core philosophy
- If you need strict sync, patch a clock to the Rate CV input for global tempo locking
- Use the drift as a feature: compositions that never repeat exactly the same way twice

### **"My filter sounds sluggish or doesn't respond"**
**Problem:** Filter cutoff modulation feels unresponsive or slow
**Why It Happens:** Bipolar LFOs spend half their time in the negative voltage range. When patched directly to a filter with 0-5V CV range, negative voltages do nothing - they just sit at the bottom. You're only getting half the modulation range.
**Solution:**
- Use the Expander's Full Wave Rectifiers for unipolar positive modulation
- Patch an attenuator between ochd and the filter to reduce swing
- Mix two complementary LFOs (one inverted via offset module) to always stay positive

### **"The modulation is too extreme!"**
**Problem:** Everything modulates too much - parameters swing wildly
**Why It Happens:** Ochd outputs 10Vpp (±5V). Many parameters expect 0-5V max. Patching directly causes extreme swings that sound more like a glitch than a feature.
**Solution:**
- Always use attenuators on the patch cable between ochd and target modules
- Start with attenuator turned down to 25%, then slowly increase until musical
- Mix ochd LFOs with other CV sources (offsets, fixed voltages) to scale the movement

### **"I can't get unipolar modulation (without Expander)"**
**Problem:** I need modulation that only goes up (or down), not both ways
**Why It Happens:** Ochd's 8 LFOs are intentionally bipolar triangle waves. Without the Expander, there's no built-in rectification.
**Solution:**
- Get the Expander (minimal additional HP, massive functionality gain)
- Use a full-wave rectifier module (2HP Rect, Doepfer A-177-2, etc.)
- Create unipolar using offset + attenuverter: patch an LFO through attenuverter set to invert, then through an offset that shifts it entirely positive

### **"My pitch jumps around and won't stay in tune"**
**Problem:** Modulated oscillator pitch drifts unpredictably
**Why It Happens:** Ochd's analog circuits have temperature drift. This isn't a bug - it's normal analog behavior. Combined with unattenuated ±5V modulation, pitch swings can be extreme. Also, most oscillators have nonlinear pitch response curves.
**Solution:**
- Attenuate heavily when modulating 1V/octave pitch (often need only 10-20% attenuator)
- Use Full Wave Rectifiers for unipolar modulation (always goes up, never down)
- Patch slowly-changing LFOs (5, 6, 7, 8) for pitch modulation, not fast ones (1, 2)

### **"I don't hear the modulation at all"**
**Problem:** Patch seems dead - modulation has no audible effect
**Why It Happens:** Either the Rate knob is turned all the way down (LFOs running at sub-audible speeds), the attenuator is fully counterclockwise (blocking signal), or the LFO output isn't actually connected.
**Solution:**
- Turn Rate knob to 12 o'clock and listen for obvious movement
- Check that LFO cables are seated firmly in jacks
- Watch the LEDs - they should flicker indicating LFO activity
- Test with a visual feedback patch (modulate a VCA and listen to volume changes)

### **"All my LFOs move at the same speed - where's the variety?"**
**Problem:** Instead of 8 different speeds, they all seem to change at once
**Why It Happens:** The Rate knob affects ALL 8 LFOs' speed simultaneously - that's by design. But they drift in and out of phase independently due to analog component tolerance. If you turn the Rate knob too fast, you won't hear the individual LFO relationships settle.
**Solution:**
- Turn Rate knob slowly and let it stabilize for 5+ seconds
- Listen to just two LFOs (LFO 1 and LFO 8) to hear the speed difference
- The variety comes from independent phase relationships, not independent speeds
- Use the Expander's DAC outputs for pseudo-random variation

### **"The Expander triggers fire randomly and I can't make patterns"**
**Problem:** Cascading triggers from the Expander seem chaotic
**Why It Happens:** The triggers cascade through normalled connections - they're designed to create polyrhythmic relationships, not predictable drum patterns. Without patching every jack, triggers layer together unpredictably.
**Solution:**
- Patch each trigger output individually to different drum modules
- Leave the cascade system unplugged until you understand the relationships
- Use only one trigger jack for simple rhythmic control
- Combine Expander triggers with separate clock dividers for predictable sequencing

### **"The feedback waveshaping doesn't work - just sounds like noise"**
**Problem:** Patching LFO into Rate CV creates weird artifacts instead of smooth waveshapes
**Why It Happens:** Feedback waveshaping is extremely sensitive to attenuverter position. Too much feedback = digital-sounding chaos. Too little = no effect. The sweet spot is narrow.
**Solution:**
- Start with attenuverter at minimum
- Very slowly turn clockwise, listening for smooth waveform changes
- The effect is most musical at 10-30% attenuverter position
- Patch fast LFOs (1-4) into the feedback for musical results

---

## Pattern Recognition: Root Causes of Most Ochd Issues

**Five core misunderstandings cause 95% of problems:**

**1. Bipolar vs. Unipolar CV - Understanding What Half Your Modulation Does**
Ochd outputs bipolar ±5V. Many synthesizer parameters only respond to 0-5V (unipolar). When you patch bipolar into unipolar, half the modulation range (negative voltage) does nothing. Users hear "weak" or "sluggish" modulation when they're really only using 50% of the available swing. The Expander solves this completely with Full Wave Rectifiers (convert to 0-5V, double frequency). Without the Expander, attenuators and offset modules are your tools. **Teaching Value:** This reveals gaps in understanding how analog circuits work. Every utility module, every effects processor, and every filter operates on voltage scaling principles. Mastering bipolar/unipolar understanding teaches you systematic CV design anywhere.

**2. Free-Running LFOs Are Not Broken - Organic Drift Is The Point**
Ochd's LFOs run freely at their tuned rates and drift in/out of phase naturally. This is intentional design, not a limitation. Users expecting "locked" modulation that repeats identically every cycle will feel frustrated. Understanding that organic, never-exactly-repeating modulation is ochd's philosophical foundation changes everything. It's not that ochd can't sync (Rate CV input allows clock locking) - it's that it chooses not to by default. This is why it's called "organic." **Teaching Value:** This reveals misunderstanding of analog vs. digital thinking. Embracing analog imprecision as a feature (rather than fighting it) is a mindset shift. This principle appears everywhere: analog filters have resonance peaks, oscillators drift slightly, envelopes have analog curves - these "imperfections" are what make analog synthesis musical.

**3. Analog Circuits Are Voltage-Dependent - Attenuators Are Your Friend**
Ochd outputs 10Vpp - a large voltage swing. Most modulation destinations expect much less. Unattenuated, ochd modulation is usually extreme. Attenuators aren't "reducing quality" - they're matching impedance and voltage levels for musical results. Learning to use attenuators skillfully (not just turning them down until it's quiet) separates beginner patches from sophisticated modulation systems. Start with attenuators on every patch cable between ochd and anything else. **Teaching Value:** This reveals the importance of impedance matching in analog systems. Every cable carries not just signal, but voltage level and impedance. Understanding signal conditioning here teaches you why precision rectifiers exist, why mixers matter, and why "scaling" signals is a core synthesis skill.

**4. Timing Relationships Create Musical Coherence - Speed Ratios Matter**
Beginners often assume all LFO speeds are equal because the Rate knob treats them equally. But ochd's 8 LFOs have inherently different frequency relationships - LFO 2 oscillates twice as fast as LFO 1, LFO 3 oscillates differently, and so on. These ratios create the musical relationships. Recognizing "the fast one feels twice as fast" or "this one has a different character" reveals that you're hearing ratio-based relationships. **Teaching Value:** This teaches polyrhythmic thinking. Clock dividers work on the same principle (divide by 2, 3, 4). Sequencers with multiple tracks work on this principle. Learning to hear and use speed ratios makes you understand rhythm at a fundamental level - why certain combinations sound musical, others chaotic.

**5. CV Sources Stack and Combine - Mixing Creates New Relationships**
Users often think patches are linear (A → B → C). But modulation sources can be mixed, attenuated, offset, and combined. Patching multiple LFOs to the same destination, using Min/Max logic, or mixing sources through attenuators creates emergent behavior. Single sources feel predictable. Combined sources feel alive. **Teaching Value:** This reveals the power of mixing CV sources - the same principle that makes audio mixing interesting (combining sources creates richness) applies to modulation. Every sophisticated patch uses this principle: don't use single modulation sources, combine them. This thinking applies everywhere from drum synthesis (noise + envelopes combined) to filter design (multiple envelope sources controlling different parameters).

---

## Advanced Techniques & Pro Tips

### **🎵 Expert Usage Patterns:**

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

**Ochd Mastery Patterns:**
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

## Why This Instrument Excels

### **The Philosophy:**
DivKid wanted something to "keep patches organically drifting and moving" rather than rigid, synced modulation. Richard Devine called it "the most organic little modulator ever" - that says it all!

### **The Innovation: How Ochd's Design Differs From Other Approaches**

**The Sync Dilemma in Synthesis:**
Most LFO modules work hard to achieve perfect synchronization. They use digital processors, sample-accurate timing, and precise phase locking. This sounds logical - synchronized modulation should be more musical. But ochd's designer Ben Wilson discovered something counterintuitive: **perfect sync creates predictable phasing relationships that repeat exactly every cycle. Humans notice repetition and lose interest. But slightly imperfect analog drift, where each LFO gradually moves in and out of phase with the others, creates perpetual freshness.** Each cycle is slightly different. Nothing exactly repeats. This teaches you about modular philosophy: sometimes accepting analog imprecision creates better musical results than demanding perfection.

**Why Eight LFOs in 4HP?**
Ochd could have been 2-3 LFOs with more features. Instead it chose breadth over depth - eight independent oscillators arranged specifically from fastest to slowest. This teaches you that modulation power comes from variety (different speeds available simultaneously) rather than complexity (many parameters on each LFO). When you want modulation, you often want several simultaneous speeds working together. Ochd acknowledges this by giving you exactly that.

**The Expander's Elegance:**
The Expander adds 16 outputs (Full Wave Rectifiers, Logic Pairs, Cascading Triggers, DACs) but uses only 5mA power on each rail. How? Because it's not generating new signals - it's mathematically transforming ochd's existing 8 LFOs. This teaches you that signal processing is more efficient than signal generation. Raw output power (LFOs in ochd) is expensive. Processing that output (Expander circuits) is inexpensive. Most sophisticated synthesis systems follow this pattern: minimal number of sources, extensive processing of those sources.

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

**Bottom Line:** ochd + Expander gives you an entire modulation ecosystem in just 8HP. It's not about precision - it's about bringing your patches to life with organic, musical movement that never gets boring. As the **foundation of sophisticated modulation networks**, it enables the creation of intelligent musical systems that learn, evolve, and become personalized instruments.

---

## Learning Path

### **Recommended Study Progression:**
1. **Start here:** Master ochd basics and organic modulation concepts
2. **Add chaos processing:** Integrate Make Noise Wogglebug for musical uncertainty
3. **Include intelligent learning:** Add Mutable Marbles for pattern evolution
4. **Expand rhythmically:** Use 4ms RCD v2 for polyrhythmic complexity
5. **Shape and mix:** Apply Function Junction for envelope processing
6. **Integrate synthesis:** Connect to synthesis modules for complete musical systems

### **Cross-Module Learning Opportunities:**
- **ochd → Wogglebug:** Learn chaos timing and disturbance relationships
- **ochd → Marbles:** Understand organic input to intelligent processing
- **ochd → RCD:** Explore organic timing to mathematical rhythm conversion
- **ochd → Function Junction:** Master organic modulation shaping and mixing
- **Complete integration:** Build intelligent, evolving musical ecosystems

### **Skill Development Milestones:**
- **Beginner:** Use individual LFO outputs for basic modulation
- **Intermediate:** Master Expander functions and unipolar modulation
- **Advanced:** Create cross-module integration patches
- **Expert:** Design self-learning, adaptive musical systems

### **Advanced Integration Concepts:**
- **Modulation Hierarchies:** ochd modulates other modulators for complex relationships
- **Feedback Systems:** Use ochd outputs to control ochd rate for recursive behavior
- **Learning Networks:** Let intelligent modules learn from ochd's organic patterns
- **System Evolution:** Build patches that become more musical over time

### **Performance Applications:**
- **Live Modulation:** Use ochd as real-time performance controller for entire system
- **Generative Music:** Foundation for self-evolving ambient and experimental compositions
- **Hybrid Systems:** Bridge between human control and algorithm-assisted music creation
- **Adaptive Instruments:** Create personalized instruments that learn your musical preferences

---

*Visit [DivKid's website](https://divkidvideo.com/ochd-the-second-divkid-eurorack-module/) and [Instruo](https://www.instruomodular.com/product/ochd/) for complete documentation and community patches*
