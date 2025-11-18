# Erica Synths Pico Voice - Beginner's Guide

**8 Complete Synthesizers in 3HP**

---

## Quick Start: Get Your First Sound in 5 Minutes

![Erica Synths Pico Voice](https://github.com/DGretta/Music/raw/main/modular/images/erica_synths/pico_voice/front_panel.jpg)  
*Erica Synths Pico Voice - 8-algorithm synthesis module showing LED color coding and parameter controls*

**What is Pico Voice?** A complete voice module packed into just 3HP with 8 different synthesis algorithms ranging from Karplus Strong string synthesis to TB-303 bassline emulation. It's like having 8 different synthesizers in the space of a single knob!

**Key Specifications:**
- **Width:** 3 HP
- **Depth:** 35 mm
- **Power:** 30 mA @ +12V / 20 mA @ -12V / 0 mA @ +5V
- **Architecture:** 8-algorithm synthesis voice with CV-assignable modulation

### Your First Voice (Chord Algorithm)
1. **Power up** - LED will show the current algorithm color
2. **Turn Tune knob** to around 12 o'clock (C4 range)
3. **Press the button** until LED shows **YELLOW** (Chord algorithm)
4. **Turn PAR1** (left knob) to select chord type (major, minor, 7th, etc.)
5. **Patch 1V/Oct from your sequencer** → **1V/Oct input**
6. **Patch output** → your mixer/VCA
7. **Play notes** - you should hear rich chords!

**Quick Algorithm Tour:**
- **Press button repeatedly** to cycle through 8 algorithms
- **Each color = different synthesis type** (RED=Karplus, YELLOW=Chords, etc.)
- **PAR1 and PAR2 knobs control different things** for each algorithm

---

## Essential Parameters (The Big 4)

### **1. Button + LED (Algorithm Selection)**
- **Short press:** Cycle through 8 algorithms
- **Hold 1 second:** Enter configuration mode (LED blinks)
- **LED colors:** Each algorithm has its own color coding
- **Pro tip:** Learn the colors - it's faster than counting button presses!

### **2. PAR1 Knob (Parameter 1)**
- **What it does:** Controls primary characteristic of each algorithm
- **Examples:** Chord type (Chords), Wave surfing (Wavetable), Resonance (Bassline)
- **Musical result:** Major creative control over the sound character
- **Range:** Full sweep changes the fundamental nature of each algorithm

### **3. PAR2 Knob (Parameter 2)**
- **What it does:** Usually controls Release time, but varies per algorithm
- **Creative use:** For sustained sounds without gates, turn fully clockwise
- **Configuration mode:** Selects waveforms/settings (when LED blinks)
- **Performance tip:** Great for real-time expression and dynamics

### **4. CV Input (Assignable Modulation)**
- **What it does:** Can control ANY of the three parameters (Tune, PAR1, or PAR2)
- **Assignment:** Set in configuration mode (RED=Tune, GREEN=PAR1, BLUE=PAR2)
- **Range:** -5V to +5V for full parameter sweep
- **Power move:** Change assignments per algorithm for complex modulation

---

## Historical Context

### **Synthesis Algorithms in Modular History**
The 8 algorithms in Pico Voice represent landmark moments in synthesis development. Karplus-Strong emerged from physical modeling research in the 1980s, creating organic plucked string sounds from digital algorithms. TB-303 emulation references the legendary acid house synthesizer that shaped electronic music culture. Wavetable morphing descends from classic Fairlight and Emulator synthesis. These algorithms, once requiring dedicated hardware or complex programming, now coexist in a 3HP module—a testament to efficient algorithm design and modern chip capabilities.

### **Algorithm Diversity in Compact Space**
Historically, choosing a synthesis approach meant choosing a module: one for wavetable work, another for FM, another for subtractive. Pico Voice collapses this decision, offering multiple complementary synthesis methods with a single button press. This reflects both the maturity of synthesis algorithms and the philosophy that essential creative tools shouldn't require dedicated rack space.

### **Assignable CV: Control Without Menus**
The ability to assign CV control to any parameter without menu diving represents decades of hardware synthesis philosophy: hands-on control, immediate feedback, no digital intermediaries. This approach keeps Pico Voice performable and expressive despite packing 8 complete algorithms into 3HP.

---

## The 8 Algorithms Explained

### **🔴 RED - Karplus Strong (Plucked Strings)**
- **PAR1:** Distortion amount
- **PAR2:** Noise burst (initial pluck character)
- **Gate/Trigger:** Essential - initiates the "pluck" (note: Pico Voice doesn't have a dedicated gate input - uses note changes on 1V/Oct)
- **Sound:** Realistic plucked strings, harps, guitar-like tones

### **🟡 YELLOW - Chords (Harmonic Stacks)**
- **PAR1:** Chord type (Major, minor, 7th, diminished, etc.)
- **PAR2:** Release time
- **Setting:** Waveform (Sine, Triangle, Saw, Square)
- **Sound:** Rich harmonic chords, perfect for pads and stabs

### **🟢 GREEN - Wavetable (Digital Wave Morphing)**
- **PAR1:** Wave surfing (morphs through wavetable)
- **PAR2:** Release time  
- **Setting:** 1 or 2 note operation
- **Sound:** Digital, evolving textures like classic wavetable synths

### **🟦 BLUE - Bassline (TB-303 Emulation)**
- **PAR1:** Resonance (filter resonance)
- **PAR2:** Release time
- **Setting:** Saw or Pulse waveform
- **Sound:** Classic acid house basslines and squelchy leads

### **🟣 PURPLE - PWM (Pulse Width Modulation)**
- **PAR1:** PWM amount (pulse width sweep)
- **PAR2:** Release time
- **Setting:** 1, 2, or 3 note operation
- **Sound:** Classic analog-style pulse waves with movement

### **🟠 ORANGE - Supersaw (Detuned Sawtooth Stack)**
- **PAR1:** Detune amount (spread between oscillators)
- **PAR2:** Release time
- **Setting:** Phase lock on/off
- **Sound:** Massive, wide sawtooth stacks like classic trance leads

### **🟦 CYAN - Wavefold (Harmonic Distortion)**
- **PAR1:** Fold amount (harmonic distortion)
- **PAR2:** Release time
- **Setting:** Sine, 2x Sine, Triangle, 2x Triangle base waves
- **Sound:** Complex harmonic textures from simple waveforms

### **🟢 LIME - Harmonic (Additive Synthesis)**
- **PAR1:** Add harmonics (builds harmonic content)
- **PAR2:** Release time
- **Setting:** Base waveform selection
- **Sound:** Rich, organ-like tones with controllable harmonic content

---

## Creative Patch Applications

### **Patch 1: Chord Progression Player**
- **Algorithm:** Chords (Yellow)
- **Your sequencer** → 1V/Oct input
- **PAR1 at different positions** for different chord types
- **LFO** → CV Input (assigned to PAR1 for changing chord types)
- **Gate timing controlled by:** Note changes and PAR2 (release time) - no dedicated gate input needed
- **Result:** Automatic chord progressions with evolving harmony

**Alternative Modulation Sources:**
- **Budget:** Any simple LFO (2HP LFO, Doepfer A-145) provides basic chord variation control
- **Different Character:** Make Noise Maths for mathematical chord evolution, DivKid Ochd for organic chord transitions
- **Premium:** Intellijel Quadrax for complex chord modulation with multiple simultaneous processes

### **Patch 2: Acid Bassline**
- **Algorithm:** Bassline (Blue)
- **Bass sequence** → 1V/Oct input
- **PAR1 around 2 o'clock** (resonance sweet spot)
- **Envelope or LFO** → CV Input (assigned to PAR1 for filter sweeps)
- **Note:** Bassline algorithm auto-triggers on note changes - no external gate needed
- **Result:** Classic TB-303 style acid sequences

**Alternative Modulation Sources:**
- **Budget:** Simple envelope generator (Blue Lantern ADSR, Doepfer A-140) for filter modulation
- **Different Character:** Make Noise Maths for complex filter sweeps, DivKid Ochd for organic filter evolution
- **Premium:** Intellijel Quadrax with envelope shaping for sophisticated acid processing

### **Patch 3: Evolving Pad**
- **Algorithm:** Wavetable (Green)
- **Slow chord sequence** → 1V/Oct input
- **PAR2 fully clockwise** (sustained without gates)
- **Slow LFO** → CV Input (assigned to PAR1 for wave surfing)
- **Result:** Constantly evolving ambient pad textures

**Alternative Modulation Sources:**
- **Budget:** Very slow LFO (Doepfer A-143-1 VC LFO, 2HP LFO set to slow) for gradual pad evolution
- **Different Character:** DivKid Ochd for organic pad development, Batumi for geometric wavetable morphing
- **Premium:** Make Noise Maths for complex wavetable animation with mathematical relationships

### **Patch 4: Intermediate - Advanced Organic Voice Development**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   DivKid Ochd      │      │    Erica Synths        │
   │   (Organic LFOs)   │      │    Pico Voice          │
   │                    │      │   (Voice Processing)   │
   │                    │      │                         │
   │ LFO 1 ○────────────┼──────┼─▶ CV Input (PAR1)      │
   │       ║            │      │                         │
   │ LFO 3 ○────────────┼──────┼─▶ Button (Alg Switch)   │
   │       ║            │      │                         │
   │ LFO 5 ○────────────┼──────┼─▶ CV Input (PAR2)      │
   │       ║            │      │                         │
   │ LFO 7 ○────────────┼──────┼─▶ CV Input (Tune)      │
   │       ║            │      │                         │
   └───────║────────────┘      │ Voice Out ○───────────┼─── Audio (Red)
           ║                   │ (Natural Voice Flow)   │
   CV (Blue)║                  └─────────────────────────┘
           ║                           ║
           ▼                    Audio ║
   ┌─────────────┐               (Red)║
   │ Sequencer   │                    ║
   │  (1V/Oct)   │────────────────────▼
   │             │           ┌──────────────────────────────┐
   └─────────────┘           │   Natural Voice              │
                             │     Development              │
                             │                              │
                             │ LFO 1: Natural PAR1 Flow     │
                             │ LFO 3: Algorithm Evolution   │
                             │ LFO 5: Natural PAR2 Changes  │
                             │ LFO 7: Natural Pitch Flow    │
                             │                              │
                             │ Natural Voice ○─────────┼─── Developing Synthesis
                             └──────────────────────────────┘
```

| Module Integration | Signal Flow | Purpose | Advanced Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → CV (PAR1)** | Organic parameter modulation | **Natural synthesis evolution** | **Flowing algorithm character** |
| **Ochd LFO 3 → Algorithm Button** | Organic algorithm progression | **Smooth synthesis transitions** | **Natural voice development** |
| **Ochd LFO 5 → CV (PAR2)** | Organic expression control | **Flowing release variations** | **Dynamic voice response** |
| **Ochd LFO 7 → CV (Tune)** | Organic pitch variation | **Natural pitch flow** | **Organic voice movement** |

**Module Settings:**
- **Ochd Rate:** 12 o'clock for musical natural development timing
- **Pico Voice:** CV assigned to different parameters per algorithm for maximum natural response
- **Algorithm rotation:** Natural progression through synthesis types based on circuit design
- **Result:** Voice synthesis that develops naturally with flowing parameter modulation

**Learning Objectives:**
- **Natural + Voice integration:** Natural circuit development applied to multi-algorithm voice synthesis
- **Flowing synthesis:** Voice algorithms that develop with natural parameter evolution
- **Dynamic algorithms:** Simple natural modulation creates complex synthesis development
- **System coordination:** Entire voice system develops as unified natural sound processing

**Alternative Modulation Sources:**
- **Instead of Ochd:** Try **Batumi** for more geometric voice development, or **Maths** for mathematical voice relationships
- **Instead of algorithm switching:** Try **parameter focus** for simpler organic voice processing
- **Budget alternatives:** **2HP LFO + 2HP Rnd** provides similar organic + variation functionality
- **Different character:** **Quadrax** gives more discrete voice steps vs Ochd's continuous development

### **Patch 5: Advanced - Chaotic Voice Processing**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Make Noise       │      │    Erica Synths        │
   │   Wogglebug        │      │    Pico Voice          │
   │  (Chaos Source)    │      │  (Voice Processing)    │
   │                    │      │                         │
   │ Stepped CV ○───────┼──────┼─▶ Algorithm Button      │
   │       ║            │      │                         │
   │ Smooth CV ○────────┼──────┼─▶ CV Input (PAR1)      │
   │       ║            │      │                         │
   │ Woggle CV ○────────┼──────┼─▶ CV Input (PAR2)      │
   │       ║            │      │                         │
   │ Burst CV ○─────────┼──────┼─▶ Config Mode Toggle    │
   │       ║            │      │                         │
   └───────║────────────┘      │ Voice Out ○───────────┼─── Audio (Red)
           ║                   │ (Chaotic Voice Output) │
   CV (Blue)║                  └─────────────────────────┘
           ║                           ║
           ▼                    Audio ║
   ┌─────────────┐               (Red)║
   │ Sequencer   │                    ║
   │  (1V/Oct)   │────────────────────▼
   │             │           ┌───────────────────────────────┐
   └─────────────┘           │   Chaotic Voice               │
                             │     Processing                │
                             │                               │
                             │ Stepped: Algorithm Jumps      │
                             │ Smooth: Analog Parameter Flow │
                             │ Woggle: Unpredictable PAR2    │
                             │ Burst: Configuration Changes  │
                             │                               │
                             │ Controlled Chaos ○────────┼─── Complex Voice
                             └───────────────────────────────┘
```

| Chaos + Voice Chain | Function | Purpose | Advanced Integration |
|---------------------|----------|---------|---------------------|
| **Wogglebug Stepped → Algorithm** | Quantized chaos switching | **Chaotic algorithm jumps** | **Chaos circuit controls synthesis types** |
| **Wogglebug Smooth → PAR1 CV** | Analog chaos parameters | **Smooth chaos character** | **Chaotic synthesis variation** |
| **Wogglebug Woggle → PAR2 CV** | Pure chaos expression | **Unpredictable dynamics** | **Chaos-driven voice expression** |
| **Wogglebug Burst → Config Mode** | Chaos configuration | **Explosive setting changes** | **Complex voice circuit changes** |

**Module Settings:**
- **Wogglebug:** All outputs active, Rate for musical chaos timing based on circuit design
- **Pico Voice:** Algorithm switching responds to chaos for dramatic synthesis changes
- **Parameter chaos:** Create unpredictable but musical voice variations through circuit interaction
- **Result:** Voice synthesis with controlled but unpredictable chaos variations

**Learning Objectives:**
- **Chaos + Voice fusion:** Controlled unpredictability in multi-algorithm voice systems through circuit design
- **Chaos circuit theory:** Understanding how chaos circuits affect voice synthesis processing
- **Unpredictable yet musical:** Chaos keeps voice synthesis from becoming static through natural variation
- **Controlled randomness:** Voice processing keeps chaos musical and structured through analog circuits

### **Patch 6: Expert - Pico Voice Performance Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│  Intellijel │ │    2hp      │ │   Erica     │ │  Erica Synths   │
│   Scales    │ │   Brst      │ │  Pico LFO   │ │  Pico Voice     │
│(Quantizer)  │ │ (Triggers)  │ │(Modulation) │ │ (Voice Core)    │
│             │ │             │ │             │ │                 │
│ Root/Scale  │ │ Manual ○────┼─┼─Rate CV     │ │ Algorithm       │
│ Selection   │ │        ║    │ │       ║     │ │ Selection       │
│             │ │ Burst ○─────┼─┼─Trig 1 ○────┼─┼─Config Mode    │
│ Quantized   │ │        ║    │ │       ║     │ │       ║         │
│ CV ○────────┼─┼─Gate ○ ║    │ │ LFO 1 ○─────┼─┼─CV (PAR1)      │
│       ║     │ │      ║ ║    │ │       ║     │ │       ║         │
│ Clock In◀───┼─┼─Clk  ║ ║    │ │ LFO 2 ○─────┼─┼─CV (PAR2)      │
│       ║     │ │      ║ ║    │ │       ║     │ │       ║         │
└───────║─────┘ └──────║─║────┘ │ Trig 2○─────┼─┼─1V/Oct Input   │
        ║              ║ ║      │       ║     │ │       ║         │
        ║              ║ ║      └───────║─────┘ │ Voice Out      │
        ║              ║ ║              ║       │ ○─────────┼─Audio
        ▼              ▼ ▼              ▼       └─────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│                  Pico Voice Performance System                    │
│                                                                     │
│ Quantized Melody + Burst Triggers + Dual LFO + 8-Algorithm Voice   │
│                                                                     │
│ Scales      → Musical pitch quantization for voice melodies       │
│ Brst        → Manual/burst triggering for expressive performance  │
│ Pico LFO    → Dual modulation optimized for Pico Voice parameters │
│ Voice       → 8-algorithm synthesis with performance control       │
│                                                                     │
│ Complete 3HP Performance Voice System (9HP total)                  │
│                                                                     │
│ Expressive Voice Performance ○──────────────────────────┼─── Musical Voice Output
└──────────────────────────────────────────────────────────────────┘
```

**Multi-Function Voice Integration:**

| Module | Primary Function | Secondary Functions | Pico Voice Role |
|--------|------------------|--------------------|-----------------|
| **Hermod+ (26HP)** | Advanced sequencer | **Built-in quantizer + trigger gen + CV outputs** | **Melodic and rhythmic control** |
| **MetaModule (26HP)** | Plugin host | **Fundamental VCO (LFO mode) + AS ADSR** | **Parameter animation and dynamics** |
| **Pico Voice (3HP)** | 8-algorithm synthesis | **Voice core** | **Complete synthesis engine** |

**Multi-Function System Design:**
- **Hermod+ as sequence brain:** Multi-track sequencing with built-in quantization eliminates need for separate quantizer
- **MetaModule as modulation engine:** Fundamental VCO plugin in LFO mode + AS ADSR for envelope shaping
- **Pico Voice as synthesis core:** 8 algorithms controlled by multi-function ecosystem
- **Professional scalability:** Each module serves multiple functions, reducing HP requirements
- **Total system:** 55HP for complete professional voice workstation

**Performance Applications:**
1. **Multi-track melodic sequencing:** Hermod+ provides quantized sequences across multiple tracks
2. **Plugin-based modulation:** MetaModule VCO plugin generates LFOs for parameter animation
3. **Dynamic envelope control:** MetaModule ADSR plugin shapes voice dynamics and algorithm switching
4. **Real-time performance:** Hermod+ live recording and pattern switching with plugin-processed modulation
5. **Algorithm automation:** Sequence algorithm changes via Hermod+ CV tracks and MetaModule processing

**Why This Multi-Function Ecosystem Works:**
- **Leverages actual capabilities:** Uses modules for what they're designed to do well
- **No single-function overlap:** Each module contributes unique multi-function capabilities  
- **Plugin flexibility:** MetaModule can adapt to any processing needs via plugin swapping
- **Scalable complexity:** Can be simple (basic sequences) or sophisticated (multi-track + plugins)
- **Combinable with other guides:** No modulation source conflicts since other guides use different multi-function approaches

---

## Configuration Mode Deep Dive

### **Entering Configuration Mode:**
1. **Hold button for 1 second** - LED starts blinking
2. **Press button repeatedly** to assign CV input:
   - **Blinking RED:** CV controls Tune
   - **Blinking GREEN:** CV controls PAR1  
   - **Blinking BLUE:** CV controls PAR2
3. **Turn PAR2 knob** to change algorithm settings (waveforms, note modes, etc.)
4. **Hold button for 1 second** to exit - LED stops blinking

### **Algorithm Settings (PAR2 in Config Mode):**
- **Chords:** Choose waveform (Sine/Triangle/Saw/Square)
- **Wavetable:** 1 or 2 note operation
- **Bassline:** Saw or Pulse waveform
- **PWM:** 1, 2, or 3 note operation
- **Supersaw:** Phase lock on/off
- **Wavefold:** Base waveform selection
- **And more!**

---

## Common Use Cases

### **Studio Production:**
- **Lead synthesis:** Supersaw for trance leads, PWM for analog character
- **Bass programming:** Bassline algorithm for acid house and techno
- **Chord progressions:** Chords algorithm for instant harmonic content
- **Texture creation:** Wavetable and Wavefold for evolving sounds

### **Live Performance:**
- **3HP voice:** Perfect for small performance cases
- **Real-time control:** Algorithm switching and parameter control
- **No menu diving:** Everything accessible via knobs and button
- **Reliable tracking:** Solid 1V/Oct over 8 octaves (C1-C8)

### **Experimental Music:**
- **Karplus Strong:** Organic, physical modeling textures
- **Harmonic synthesis:** Custom harmonic content creation
- **CV assignment flexibility:** Different modulation per algorithm

---

## Pairs Well With

### **Advanced Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Ochd LFOs → Pico Voice CV inputs for natural voice parameter development
- **Make Noise Wogglebug:** Wogglebug chaos CVs → Pico Voice parameters for controlled chaos voice processing
- **Mutable Marbles:** Marbles X/Y outputs → Pico Voice modulation for pattern-driven voice control
- **4ms RCD v2:** RCD divisions → rhythmic voice parameter changes and algorithm switching
- **Cre8audio Function Junction:** Function + Pico Voice = complete voice ecosystem with natural/chaos/pattern modulation
- **Cross-Advanced Integration:** Pico Voice processes all Advanced modulation sources into unified synthesis relationships

### **Essential Partners:**
- **Envelope Generators:** For shaping Karplus Strong and other algorithm responses with dynamic control
- **LFOs:** Modulate parameters via CV input for voice movement and synthesis evolution
- **Quantizers:** Ensure musical intervals when using random CV for pitch and harmonic control
- **VCAs:** Control amplitude and create dynamics for voice expression and performance

### **Advanced Voice Integration:**
- **Filters:** Further shape the Pico Voice output for frequency sculpting and character enhancement
- **Effects:** Reverb and delay enhance the 3HP sound for spatial voice processing
- **Sequencers:** Multi-track sequencing for chord progressions and complex voice arrangements
- **Clock dividers:** Different timing for gate triggers and algorithm switching patterns

### **Essential Voice Partners:**
- **Other Erica Synths Pico modules:** Complete compact synthesis ecosystem in minimal space
- **Performance mixers:** Blend multiple voice algorithms and manage complex voice arrangements
- **Performance controllers:** Real-time control of multiple voice parameters for live synthesis
- **Multi-voice processing:** Use multiple Pico Voice modules for polyphonic voice synthesis

### **Advanced System Integration:**
- **Make Noise Maths:** Maths processes Pico Voice outputs for mathematical voice relationships
- **Logic modules:** Combine voice triggers with Boolean operations for complex algorithmic switching
- **Sample & Hold:** Use voice gates to trigger variation in other parts of the system
- **Phase 1 modules:** Pico Voice integrates perfectly with Plaits, Maths, and other core synthesis modules

---

## Advanced Techniques

### **Algorithm Switching for Texture Changes**
Don't think of algorithms as mutually exclusive sounds. Use CV to switch between complementary algorithms for evolving patches: start with Wavetable for ambient pads, switch to Wavefold for textural density, then Harmonic for tonal warmth. Each transition creates a unique moment without repatching.

### **CV Assignment as Performance Control**
Beyond assigning CV to parameters, change assignments mid-performance. Assign to Tune for vibrato, then reassign to PAR1 for filter modulation, then PAR2 for release time control. This transforms a single CV input into a multi-purpose expression tool.

### **Configuration Mode as Sound Design Tool**
Configuration mode isn't just setup—it's creative sound design. Different waveforms, note modes, and algorithm-specific settings create timbral variations that coexist with PAR1/PAR2 knob control. Explore all settings per algorithm before declaring the sound "done."

### **Combining Algorithms for Hybrid Synthesis**
Use two Pico Voice modules: one on Wavetable, another on Harmonic. Blend them through a mixer, then assign different CV sources to each for hybrid synthesis that combines digital morphing with additive harmonic building. One sequencer feeds both modules at different transpositions for complex polyphonic textures.

---

## Common Mistakes

### **🎵 Common Mistake Patterns:**

**"My Karplus Strong doesn't make sound!"**
- Karplus Strong REQUIRES gate/trigger input to initiate the string
- **Solution:** Patch a gate/trigger signal to the TRIGG input, or use rapid note changes on the sequencer

**"The pitch tracking seems off in the low end!"**
- Pico Voice tracks C1-C8; below 1V or above 8V the tracking becomes unreliable
- **Solution:** Stay within the C1-C8 range (1V-8V input to 1V/Oct input)

**"I can't get sustained sounds!"**
- Some algorithms like Karplus Strong depend entirely on gate length for sound generation
- **Solution:** Turn PAR2 fully clockwise for sustained operation without external gates. Experiment per algorithm—behavior varies significantly

**"CV assignment isn't working as expected"**
- CV assignment affects only the modulation behavior, not fundamental algorithm character. Different algorithms respond differently to the same CV range
- **Solution:** Understand that CV ranges vary by algorithm. Test all three CV assignments (Tune/PAR1/PAR2) and attenuate as needed per algorithm

**"Configuration mode changes disappeared when I switched algorithms"**
- Each algorithm has independent configuration settings (waveforms, note modes, etc.). Switching algorithms returns those saved settings, but you must be in config mode to verify/change them
- **Solution:** Always check configuration settings when switching algorithms—what worked on Bassline might not be optimal for Wavetable

### **🎵 Pro Tips:

**Algorithm Workflow:**
- **Learn the LED colors** - much faster than counting button presses
- **Start with Chords or PWM** - most immediately musical
- **Experiment with configuration settings** - they dramatically change character

**CV Assignment Strategy:**
- **Assign CV to PAR1** for most dramatic changes
- **Assign to Tune** for pitch modulation and vibrato
- **Assign to PAR2** for expression and dynamics
- **Change assignments per algorithm** for complex patches

**Performance Techniques:**
- **Algorithm switching** creates instant texture changes
- **Parameter automation** via CV for evolving sounds
- **Configuration mode** allows real-time sound design
- **Gate pattern variations** especially important for Karplus Strong

**Sound Design Tips:**
- **Wavetable + slow LFO** = evolving pads
- **Bassline + envelope** = classic acid
- **Supersaw + detune** = massive leads
- **Wavefold + modulation** = complex harmonics

---

## Why This Instrument Excels

### **The Philosophy:**
Erica Synths challenged themselves: "Can we make ANY superior functionality synth module 3HP wide and affordable?" The answer is yes, and Pico Voice proves it.

### **The Engineering:**
- **8 complete synthesis algorithms** in 3HP
- **Full 1V/Oct tracking** over 8 octaves
- **User memory** remembers your settings
- **Assignable CV control** for performance flexibility
- **Color-coded interface** for intuitive operation

### **The Practical Benefits:**
- **Space efficient:** Complete voice in minimal HP
- **Immediately musical:** No complex programming required
- **Versatile:** Covers bass, leads, pads, and experimental sounds
- **Performance ready:** Real-time control without menu diving
- **Affordable:** Professional synthesis algorithms at Pico prices

### **Perfect For:**
- **Small cases:** Maximum synthesis in minimum space
- **Beginners:** Easy to understand, immediately rewarding
- **Producers:** Quick access to classic synthesis methods
- **Performers:** Reliable, hands-on control
- **Everyone:** Sounds way bigger than its 3HP footprint!

---

## Creative Learning Path

### **Recommended Study Progression:**
1. **Start with Pico Voice fundamentals:** Master 8-algorithm operation, CV assignment, and voice synthesis concepts
2. **Add natural development:** Integrate DivKid Ochd for natural voice parameter evolution (see Ochd guide)
3. **Include controlled chaos:** Use Make Noise Wogglebug for chaotic voice processing (see Wogglebug guide)
4. **Add pattern memory:** Apply Mutable Marbles for adaptive modulation of voice parameters (see Marbles guide)
5. **Include rhythmic control:** Use 4ms RCD v2 for complex voice triggering relationships (see RCD guide)
6. **Complete the ecosystem:** Add Cre8audio Function Junction for comprehensive voice modulation processing (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Pico Voice + Ochd:** Learn natural modulation of voice parameters for flowing synthesis development
- **Pico Voice + Wogglebug:** Master chaos-driven voice processing for controlled unpredictability in synthesis
- **Pico Voice + Marbles:** Understand pattern-driven voice control with adaptive synthesis relationships
- **Pico Voice + RCD:** Explore rhythmic voice parameter changes and complex algorithmic voice processing
- **All Advanced + Pico Voice:** Build complete voice ecosystems with multiple modulation types processing synthesis

### **Skill Development Milestones:**
- **Beginner:** Use different algorithms and basic CV assignment for voice synthesis
- **Intermediate:** Master parameter interaction and algorithm switching for complex voice relationships
- **Advanced:** Create Advanced integration patches with organic/chaos/pattern modulation of voice parameters
- **Expert:** Design complete voice ecosystems where Pico Voice serves as synthesis core for multiple modulation types

### **Advanced Voice Concepts:**
- **8-Algorithm Mastery:** Understand how different synthesis types create unique voice characteristics
- **CV Assignment Theory:** Master the relationship between modulation sources and synthesis parameters
- **Dynamic Voice Processing:** Explore how modulation affects algorithm character, expression, and timbre
- **System Integration:** Design patches where Pico Voice processes multiple modulation types simultaneously

### **Performance Applications:**
- **Live Voice Control:** Real-time algorithm switching and parameter control for dynamic synthesis performance
- **Generative Voice Systems:** Foundation for self-evolving synthesis systems with natural/chaos/pattern modulation
- **Hybrid Processing:** Bridge between traditional synthesis and advanced modulation processing
- **Educational Tool:** Learn synthesis algorithms and advanced voice concepts in compact format

---

**Bottom Line:** Pico Voice proves that great synthesis doesn't require massive modules. 8 professional algorithms, intuitive control, and that "bigger than it looks" sound make this the ultimate 3HP voice. As an **essential creative core within Advanced ecosystems**, it enables sophisticated synthesis and signal routing while maintaining the professional performance standards essential for both studio and performance applications in the most space-efficient format possible.

---

*Visit [Erica Synths](https://www.ericasynths.lv/) for complete documentation and the full Pico series*
