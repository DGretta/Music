# Mutable Instruments Plaits - Beginner's Guide
*The Sonic Swiss Army Knife*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Plaits?** Think of it as 16 different synthesizers crammed into one module. It's a "macro-oscillator" that can be a classic analog-style VCO, an FM synth, a drum machine, a speech synthesizer, a granular engine, and much more. It's like having a whole rack in 12HP.

### Your First Classic Sound
1. **Connect keyboard/sequencer** → **V/OCT input** (bottom left)
2. **Connect OUT jack** → **your filter or mixer**
3. **Press left button** until first LED lights up (classic waveforms mode)
4. **Turn FREQUENCY knob** to set pitch range
5. **Play with TIMBRE, MORPH, HARMONICS** knobs to shape the sound

**Congratulations!** You've just used Plaits as a classic dual oscillator with continuously variable waveforms!

---

## Essential Parameters (The Big 6)

### **1. Model Selection Buttons/LEDs**
- **What they do:** Choose which of 16 synthesis algorithms is active
- **Left button:** Cycles through 8 pitched/melodic models
- **Right button:** Cycles through 8 noise/percussion models
- **LED feedback:** Shows current active model clearly
- **Pro tip:** Can be CV controlled for automatic model switching!

### **2. FREQUENCY Knob**
- **What it does:** Sets the base pitch (like a coarse tune knob)
- **Range:** 8 full octaves by default
- **Musical result:** Determines whether you're in bass, mid, or treble territory
- **Hidden feature:** Can be narrowed to 14 semitones for precise tuning

### **3. TIMBRE Knob** 
- **What it does:** Main timbral control - usually brightness/darkness
- **Musical result:** Generally sweeps from dark/thin to bright/dense sounds
- **Model dependent:** Exact function changes with each synthesis model
- **Sweet spot:** Often around 10-2 o'clock for musical tones

### **4. MORPH Knob**
- **What it does:** Secondary timbral shaping - explores variations
- **Musical result:** Lateral movement through different sound characters  
- **Think of it as:** The "explore" knob - turn it to discover new versions of the sound
- **Pro tip:** Often controls things like waveform shape, feedback, or modulation depth

### **5. HARMONICS Knob**
- **What it does:** Controls harmonic content, detuning, or component balance
- **Musical result:** Can add richness, detuning, or change the harmonic structure
- **Model dependent:** Sometimes detuning, sometimes filter type, sometimes balance
- **Experimentation key:** This knob often yields the most surprising results

### **6. Internal LPG (Low Pass Gate)**
- **What it does:** Built-in filter+VCA combo - complete voice in one module
- **LEVEL input:** Controls both volume and brightness simultaneously  
- **TRIGGER input:** Strike the LPG for percussive sounds
- **Hidden settings:** Hold first button + turn TIMBRE/MORPH to adjust LPG behavior

---

## Beginner Patch Ideas

### **Patch 1: Complete Synthesizer Voice**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Keyboard    │───▶│    Plaits    │───▶│ Audio Out   │
│  V/OCT Out  │    │  V/OCT Input │    │  (or Mixer) │
└─────────────┘    │              │    └─────────────┘
       │            │ Model LEDs:  │
       │            │ ●○○○○○○○     │
       │            │ OUT Output   │
       │            └──────────────┘
┌─────────────┐           ▲
│ Keyboard    │───GATE───▶│
│  Gate Out   │           │
└─────────────┘    ┌──────┴──────┐
                   │ Envelope    │
                   │ Generator   │───LEVEL CV────┘
                   └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Keyboard V/OCT → Plaits V/OCT | CV (Blue) | Pitch tracking |
| Keyboard Gate → Envelope Trig | Gate (Yellow) | Triggers envelope |
| Envelope Out → Plaits LEVEL | CV (Blue) | Controls internal LPG |
| Plaits OUT → Audio destination | Audio (Red) | Main output |

**Module Settings:**
- **Plaits:** Model 1 (first LED), FREQUENCY at 12 o'clock
- **TIMBRE at 11 o'clock** (pulse width), **MORPH at 12 o'clock** (wave shape)
- **HARMONICS at 1 o'clock** (detuning), **Internal LPG active**

**Visual Feedback:**
- **First LED solid:** Classic dual oscillator mode
- **LEVEL LED:** Brightness follows envelope intensity
- **Result:** Complete synthesizer voice - no external filter/VCA needed!

### **Patch 2: Self-Contained Drum Machine**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│  Clock/     │───▶│    Plaits    │───▶│ Drum Mixer  │
│ Sequencer   │    │ TRIG Input   │    │  Channel 1  │
│ (Triggers)  │    │              │    └─────────────┘
└─────────────┘    │ Model LEDs:  │
                   │ ○○○○○○○○     │    ┌─────────────┐
                   │ ●●●●●●●●     │───▶│ Audio Out   │
                   │              │    │             │
                   │ OUT Output   │    └─────────────┘
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Clock/Sequencer → Plaits TRIG | Gate (Yellow) | Triggers percussion sounds |
| Plaits OUT → Mixer/Audio Out | Audio (Red) | Complete drum sounds |

**Module Settings:**
- **Plaits:** Right bank models (second row LEDs) - try kick, snare, hi-hat
- **Press right button** to cycle through percussion models
- **TIMBRE/MORPH/HARMONICS** shape each drum sound's character
- **No external envelope needed** - built into percussion models

**Visual Feedback:**
- **Second row LEDs:** Show which percussion model is active
- **TRIG LED:** Flashes on each trigger input
- **Result:** Complete drum sounds with built-in envelopes and character

### **Patch 3: Advanced - Phase 2 Ecosystem Integration**
```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   DivKid    │ │ Make Noise  │ │ Cre8audio   │
│    Ochd     │ │ Wogglebug   │ │ Function    │
│ (Organic)   │ │ (Chaos)     │ │ Junction    │
│             │ │             │ │ (Processing)│
│ LFO 3 ○─────┼─┼─Disturb  ○   │ │ F OUT ○─────┼─── CV (Blue)
│       ║     │ │        ║    │ │       ║     │
│ LFO 5 ○─────┼─┼─Smooth  ○   │ │ ADSR ○──────┼─── CV (Blue)
│       ║     │ │        ║    │ │       ║     │
└───────║─────┘ └────────║────┘ └───────║─────┘
        ║                ║              ║
        ▼                ▼              ▼
┌─────────────────────────────────────────────────────┐
│                      Mutable Plaits                        │
│                   (Synthesis Hub)                         │
│                                                            │
│ Model CV      ◀─ Organic Chaos Synthesis Selection        │
│ Timbre CV     ◀─ Chaotic Timbral Evolution                │
│ Morph CV      ◀─ Processed Parameter Control               │
│ FM CV         ◀─ Complex Modulation Input                  │
│ Level CV      ◀─ Envelope Processing                      │
│                                                            │
│ 16 Synthesis Models Available:                             │
│ FM, Granular, Wavetable, Chord, Speech, Drums, etc.       │
│                                                            │
│ OUT + AUX Outputs ○───────────────────────────────── Phase 2
└─────────────────────────────────────────────────────┘ Processed
                                      ║                               Music
                                 Audio║
                                 (Red)║
                                      ▼
                             ┌───────────────────┐
                             │   Final Processing │
                             │                     │
                             │ Multi-Modal Music ○─┼─── Complete Output
                             └───────────────────┘
```

| Phase 2 Integration | Plaits Parameter | Musical Result | Advanced Concept |
|-------------------|------------------|----------------|------------------|
| **Ochd Organic + Wogglebug Chaos** | Model/Timbre CV | **Organic chaos synthesis** | **Living, breathing sound evolution** |
| **Function Junction Processing** | Morph/FM/Level CV | **Shaped modulation** | **Musical envelope processing** |
| **Multi-model synthesis** | 16 different engines | **Complete sound palette** | **Every synthesis method available** |
| **Phase 2 ecosystem hub** | Central synthesis | **All modulation processed into sound** | **Modulation becomes music** |

**Module Settings:**
- **Plaits:** All 16 models available for organic/chaotic selection
- **Phase 2 sources:** Organic timing, chaotic variation, mathematical processing
- **Real-time evolution:** Synthesis models and parameters constantly evolving
- **Complete system:** Phase 2 modulation ecosystem + Phase 1 synthesis hub

**Learning Objectives:**
- **Complete system integration:** All Phase 2 modules feeding one synthesis engine
- **Multi-modal synthesis:** Experience all major synthesis methods in one patch
- **Ecosystem thinking:** Design entire musical systems, not individual connections
- **Emergent behavior:** Complex musicality from simple modular interactions
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│    LFO      │───▶│    Plaits    │───▶│   Reverb    │
│ (Slow Rate) │    │ MORPH CV In  │    │   Module    │
└─────────────┘    │              │    └─────────────┘
                   │ Model LEDs:  │           │
┌─────────────┐    │ ○○○○○○○●     │           ▼
│ Trigger     │───▶│              │    ┌─────────────┐
│ Sequence    │    │ TRIG Input   │───▶│ Audio Out   │
└─────────────┘    │              │    │ (Robotic   │
                   │ OUT + AUX    │    │  Speech!)   │
                   └──────────────┘    └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| LFO → Plaits MORPH CV | CV (Blue) | Modulates phoneme selection |
| Trigger Seq → Plaits TRIG | Gate (Yellow) | Triggers speech utterances |
| Plaits OUT → Reverb | Audio (Red) | Main speech synthesis |
| Plaits AUX → Reverb | Audio (Red) | Alternative formants |

**Module Settings:**
- **Plaits:** Model 8 (last LED in first bank) - Speech synthesis
- **MORPH CV attenuverter** at 50% for phoneme sweeping
- **TIMBRE controls formant** frequency, **HARMONICS controls clarity**

**Visual Feedback:**
- **Eighth LED solid:** Speech synthesis mode active
- **MORPH LED:** Shows CV modulation affecting phoneme changes
- **Result:** Robot voices, vowel sounds, and sci-fi speech effects

---

## Advanced Techniques

### **Model CV Switching for Automatic Variation**
```
┌─────────────┐    ┌──────────────┐
│ Step Seq    │───▶│    Plaits    │
│ (Slow CV)   │    │ MODEL CV In  │
└─────────────┘    │              │
                   │ Model LEDs:  │
                   │ ●◐○○●○○○     │ ← LEDs show switching
                   └──────────────┘
```
**Result:** Automatic switching between different synthesis models

### **Self-Modulation Complex Textures**
```
┌──────────────┐
│    Plaits    │
│ AUX Output   │──┐  ┌─────────────┐
│              │  └─▶│   Mixer     │───▶ Stereo Out
│ FM CV Input  │◄────│  Channel 1  │
│              │     └─────────────┘
│ OUT Output   │─────────────┐
└──────────────┘             ▼
                      ┌─────────────┐
                      │   Mixer     │
                      │  Channel 2  │
                      └─────────────┘
```
**Result:** Complex self-modulating textures with stereo output

---

## Common Use Cases

### **Complete Synthesizer Voice:**
- **Built-in LPG** means no external filter/VCA needed
- **LEVEL input** controls both volume and brightness
- **Perfect for small systems** where space is premium

### **Drum Machine:**
- **8 percussion models** with built-in envelopes
- **TRIGGER input** for rhythm programming
- **Each model different drum type** - kick, snare, hi-hat, etc.

### **Sound Design Laboratory:**
- **Speech synthesis, granular textures, modal resonators**
- **Wavetables, FM synthesis, chord generators**
- **Every model different synthesis method** for exploration

### **Melodic Sequences:**
- **Chord generator models** for instant harmonies
- **Wavetable models** for smooth timbral changes
- **FM models** for complex harmonic content

---

## Pairs Well With

### **Essential Partners:**
- **Sequencers:** Plaits shines with melodic sequences - chord models perfect for arpeggios
- **Reverb/Delay (FX Aid, Magneto):** Speech synthesis and granular models love spatial effects
- **Clock Dividers:** Different trigger patterns for percussion models  
- **Attenuators/VCAs:** Tame output levels and create dynamics

### **Advanced Combinations:**  
- **Marbles:** Random triggers for percussion + random CV for model switching
- **Maths:** Complex envelopes to modulate TIMBRE/MORPH for evolving textures
- **Data:** Visualize what different synthesis models actually look like
- **Filters:** Despite built-in LPG, external filters create parallel processing

### **Perfect Pairings:**
- **Multiple Plaits:** Different models for layered synthesis
- **CV Sequencers:** Model CV input for automatic algorithm switching
- **External Audio:** Some models process external audio through AUX input
- **Performance Mixers:** Real-time balance between OUT and AUX outputs

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"Two banks of models confusion"**
- **Left button (8 models) = Pitched/Melodic sounds** - use these for melodies, bass, leads
- **Right button (8 models) = Noise/Percussion** - drums, textures, sound effects
- **Solution:** Don't get stuck in one bank - explore both for maximum sonic potential

**"Each model has different parameter functions"**
- **TIMBRE, MORPH, HARMONICS mean different things** for each model
- **Same knob position = totally different sound** when you change models  
- **Solution:** This is intentional - each model is optimized for its synthesis type

**"Built-in LPG confusion"**
- **LEVEL input controls volume AND brightness** - it's not just a VCA
- **No LEVEL CV = use TRIGGER input** to "pluck" the LPG percussively
- **Solution:** You often don't need external filters/VCAs with Plaits

**"Internal envelope mystery"**
- **Attenuverters control internal envelope** when nothing's patched
- **TRIGGER input activates internal envelope** for all three CV inputs
- **Solution:** Reset attenuverters to center when patching external CV

### **🎵 Pro Tips:**

**Model Exploration Strategy:**
- **Explore one bank at a time** - master pitched models, then try percussion
- **Learn parameter patterns** - TIMBRE usually = brightness, but experiment  
- **Use both outputs** - AUX often provides complementary material
- **Try model CV switching** for evolving textures

**Parameter Relationships:**
- **TIMBRE generally controls brightness** across most models
- **MORPH explores variations** within the current sound character
- **HARMONICS adds complexity** - detuning, filtering, or harmonic content
- **Combination exploration** - all three knobs interact musically

**LPG Integration:**
- **LEVEL CV controls both volume and tone** - more than just amplitude
- **Hidden LPG settings** - hold first button + adjust TIMBRE/MORPH
- **TRIGGER input for percussion** - instant pluck without external envelope
- **Experiment with LPG response** - from VCA-like to filter-like behavior

**Dual Output Usage:**
- **AUX output often more interesting** than main output
- **Different content per model** - sub-oscillators, variations, raw signals
- **Stereo potential** - route outputs to different processing chains
- **Self-patching possibilities** - AUX to FM input for complex modulation

---

## Why This Module Rocks

### **The Philosophy:**
Plaits proves that **one module can contain entire synthesis traditions**. Instead of choosing between FM, wavetable, granular, or analog synthesis, you get all of them - each implemented excellently and optimized for musical use.

### **The Innovation:**
- **16 different synthesis engines** in one module
- **Macro-oscillator approach** - complex algorithms made simple
- **Built-in LPG** provides complete voice without external processing
- **Dual outputs** offer main and auxiliary signals for each algorithm
- **CV control over algorithm selection** enables dynamic sound evolution

### **The Practical Benefits:**
- **Space efficiency:** Entire synthesis studio in 12HP
- **Learning tool:** Experience every major synthesis method hands-on
- **Creative catalyst:** Algorithm switching sparks new musical ideas
- **Complete voice:** Built-in LPG eliminates need for external filter/VCA
- **Immediate results:** Every model sounds musical without extensive patching

### **Perfect For:**
- **Beginners:** Learn synthesis by comparing different algorithms directly
- **Sound designers:** 16 different approaches to creating unique textures
- **Melodic players:** Chord generators and harmonic models for instant musicality
- **Rhythm programmers:** 8 percussion models with built-in envelopes
- **Small system builders:** Maximum synthesis variety in minimal space
- **Experimenters:** Model CV switching for constantly evolving sounds

### **The Magic:**
Plaits **democratizes synthesis knowledge** - you don't need to understand FM theory, wavetable construction, or granular parameters. Just turn knobs and **every synthesis method becomes immediately musical**. It's like having a synthesis textbook that you can hear and play.

---

**Bottom Line:** Plaits isn't just an oscillator - it's a **complete synthesis education** in one module. Every model teaches you something new about how different synthesis methods create sound and music.

---

*Visit [Mutable Instruments](https://mutable-instruments.net/modules/plaits) for complete documentation, firmware updates, and model specifications*