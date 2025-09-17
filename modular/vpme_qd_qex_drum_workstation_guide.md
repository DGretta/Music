# VPME.de QD + QEX Drum Workstation - Guide

**The Complete Professional Analog Drum Synthesis Workstation**

---

## Quick Start: Get Your First Drum Sound in 5 Minutes

**What is the QD + QEX Workstation?** A complete professional drum synthesis system where the QD provides four independent analog drum voices with built-in mixing, effects, and sample playback, while QEX expands it into a full 4-output workstation with advanced mixing, 8 LFOs, envelope generators, and professional routing capabilities. Think "complete drum studio in 26HP."

### Your First QD + QEX Drum Sound
1. **Ensure QD firmware is v1.10+** (required for QEX functionality)
2. **Connect trigger source** → **QD Voice 1 Trigger Input**
3. **Connect QD Output 1** → **your mixer/audio interface** (front left)
4. **Connect QEX Output 3** → **your mixer/audio interface** (back left)
5. **Set QD Voice 1** to a kick drum model using the encoder
6. **Use QEX FADE control** - hold QEX button 1, turn encoder to move sound front/back
7. **Trigger the voice** - hear the sound move between QD and QEX outputs!

**Congratulations!** You've just experienced professional 4-channel drum workstation routing with analog synthesis!

---

## Understanding the QD + QEX Workstation Architecture

### **What Makes This Workstation Special:**
QD + QEX creates a **complete professional drum production system** in modular format. It's not just four drum voices - it's four complete drum synthesizers with professional mixing, routing, effects, sample playback, wavetable synthesis, 8 LFOs, envelope generators, and advanced performance features.

### **The Complete Drum Synthesizer Concept:**
- **Four independent voices:** Each voice is a complete drum synthesizer with pitch, decay, and model-specific modulation
- **22 digital models:** From classic 808/909 kicks and snares to experimental synthesis algorithms
- **Hybrid synthesis:** Digital models + SD card samples + wavetable oscillators in one system
- **Professional mixing:** Built-in stereo panning, 3-band EQ, and compression
- **Performance features:** 64 presets, single voice presets (v1.12), real-time parameter control

### **The QEX Professional Expansion:**
- **4-channel output system:** Professional routing with PAN (L/R) and FADE (front/back) control
- **Advanced mixing modes:** CAR radio, PRE send, POST send configurations
- **8-LFO system:** 4 additional LFOs for complex modulation assignments
- **Envelope generators:** Internal decay envelopes with assignable modulation destinations
- **Enhanced CV control:** 4 additional CV inputs with clock/trigger capabilities

### **The Complete Architecture:**
1. **QD (22HP):** Four drum synthesizers + mixing + effects + samples + presets
2. **QEX (4HP):** Professional expansion + advanced mixing + LFO expansion + envelopes
3. **Integration:** Single unified workstation with professional studio capabilities

### **Why This Matters:**
This system provides **professional drum production capabilities** in modular format. It's a complete drum studio that integrates seamlessly with modular systems while offering the depth and flexibility of professional drum machines and samplers.

---

## Essential Architecture (The Professional Drum Brain)

### **QD Core System - The Synthesis Engine**

#### **1. FOUR DRUM VOICES**
- **Voice 1 (Blue):** Typically kick drums - full frequency range synthesis
- **Voice 2 (Red):** Typically snares - wide percussion synthesis range
- **Voice 3 (Yellow):** Typically hi-hats - metallic and noise synthesis
- **Voice 4 (Green):** Flexible percussion - any drum sound synthesis
- **Independent control:** Each voice has dedicated PITCH, DECAY, and MOD controls
- **CV control:** All parameters voltage controllable via 4 CV inputs + 4 QEX CV inputs

#### **2. SYNTHESIS MODES**
- **Digital models (Positions 1-16):** 22 classic and experimental drum synthesis algorithms
- **Sample playback (Positions 17-32/33-48):** Your samples from SD card with pitch/decay control
- **Wavetable oscillators:** Wavetables as drum voices for unique electronic percussion
- **Hybrid approach:** Mix and match models, samples, and wavetables across voices

#### **3. BUILT-IN PROFESSIONAL MIXING**
- **Stereo mixing:** Built-in panning mixer with individual voice levels
- **3-band EQ:** Low, mid, high EQ per voice for frequency shaping
- **Compressor:** Built-in compressor for punchy, professional drum sound
- **Master controls:** Overall level control with preset storage
- **Visual feedback:** LED circle shows levels, assignments, and current settings

#### **4. ADVANCED MODULATION SYSTEM**
- **4 CV inputs:** Assignable to any parameter (pitch, decay, mod, volume, pan)
- **4 internal LFOs:** Assignable modulation sources with multiple waveforms and speeds
- **Real-time control:** All parameters respond instantly to control changes
- **CV scaling:** V/octave scaling for musical pitch control when needed

### **QEX Professional Expansion - The Studio Enhancement**

#### **1. 4-CHANNEL OUTPUT SYSTEM**
- **CAR radio mode:** 4-speaker setup with PAN (L/R) and FADE (front/back) control
- **PRE send mode:** Independent stereo mix PRE main levels for parallel processing
- **POST send mode:** Independent stereo mix POST main levels for effects sends
- **Professional routing:** Route each voice to specific outputs for individual processing

#### **2. ADVANCED MIXING CONTROL**
- **PAN control (CYAN LED):** Left/right placement - controls outputs 1 vs 2 and 3 vs 4
- **FADE control (ORANGE LED):** Front/back placement - controls QD (1/2) vs QEX (3/4) outputs
- **Dual EQ systems:** Separate EQ and compressor for QD channels (1/2) and QEX channels (3/4)
- **Send level control:** Independent send levels in PRE/POST modes

#### **3. ENHANCED LFO SYSTEM (8 Total)**
- **4 additional LFOs:** QEX adds 4 more internal LFOs (8 total in system)
- **FADE modulation targets:** LFOs can modulate FADE levels (ORANGE LEDs) for spatial movement
- **Advanced assignments:** LFOs can control any parameter including new FADE controls
- **Visual feedback:** LED circle shows LFO assignments with color coding

#### **4. INTERNAL ENVELOPE GENERATORS**
- **QEX CV1/CV2 envelopes:** Internal decay envelopes triggered by CV inputs
- **Assignable destinations:** Envelopes can modulate any parameter in the system
- **Adjustable decay:** 30ms to ~4s decay times, same range as DECAY potentiometers
- **Gate hold mode:** Long press for gate hold, then decay behavior
- **Visual feedback:** Purple blinking LED shows current envelope level

#### **5. ENHANCED CV CONTROL**
- **4 additional CV inputs:** Total of 8 CV inputs for comprehensive external control
- **Clock/trigger inputs:** CV inputs can act as clock or trigger sources
- **Fill functionality:** CV1 can trigger fills when holding QEX buttons
- **Trigger ALL:** CV2 can trigger all four voices simultaneously
- **Performance control:** Real-time CV control over all workstation parameters

---

## Sample Management System

### **SD Card Workflow**
- **File organization:** Samples organized in folders in root directory of SD card
- **Sample sets:** Up to 128 WAV files per folder (16-bit, MONO, 44.1kHz or 48kHz)
- **Wavetable banks:** Single WAV files with "WT" in folder name + sample count (e.g., WT256_bank01)
- **Maximum capacity:** 48 sample sets/wavetable banks, 1536 samples/wavetables total
- **Fragmentation management:** Copy all files in single operation to prevent fragmentation

### **Sample Set Features**
- **RANDOM folders:** Folders with "RANDOM" in name trigger random samples per trigger
- **FOREVER folders:** Samples with "FOREVER" auto-start and loop continuously
- **Sample start point:** MOD parameter controls sample start point for non-fragmented files
- **Pitch control:** ±1 octave for samples, ±2 octaves for wavetables
- **V/octave quantization:** Setting enables quantized sample selection via CV

### **Sample Integration**
- **Hybrid synthesis:** Combine digital models with samples across voices
- **Low pass gates:** Special envelope mode for organic sample decay (EXTRA parameter)
- **Performance switching:** Real-time switching between samples in folders
- **CV sample selection:** Use CV to select specific samples within folders

---

## Advanced Mixing System (PAN/FADE Control)

### **CAR Radio Mode (Default)**
- **4-speaker concept:** Like car stereo with front/back and left/right speakers
- **PAN control:** Left/right placement (1 vs 2, 3 vs 4)
- **FADE control:** Front/back placement (QD 1/2 vs QEX 3/4)
- **Individual routing:** Map voices to specific channels: front/left (1), front/right (2), back/left (3), back/right (4)

### **PRE Send Mode**
- **Independent stereo mix:** QEX outputs 3/4 are independent stereo mix PRE main levels
- **Parallel processing:** Process voices through effects while maintaining main mix
- **Send level control:** QEX buttons control individual voice send levels
- **Pan control:** QEX button hold controls L/R pan for send mix

### **POST Send Mode**
- **Effects send mix:** QEX outputs 3/4 are independent stereo mix POST main levels
- **Professional workflow:** Standard studio effects send configuration
- **Level-dependent sends:** Send levels follow main output levels
- **Stereo send processing:** Process send mix through reverb, delay, or other stereo effects

### **Dual EQ/Compressor System**
- **QD EQ/Compressor:** Controls outputs 1/2 (front channels)
- **QEX EQ/Compressor:** Controls outputs 3/4 (back channels)
- **Independent processing:** Different EQ curves and compression for different output pairs
- **Professional mixing:** Shape front and back channels differently for complex mixes

---

## 8-LFO Modulation System

### **QD LFOs (4 Internal)**
- **Traditional assignment:** Assign to voice parameters (pitch, decay, mod, volume, pan)
- **Multiple waveforms:** Different LFO shapes for varied modulation character
- **Speed control:** Wide range from very slow to audio rate modulation
- **Visual feedback:** LED circle shows assignments and current LFO activity

### **QEX LFOs (4 Additional)**
- **Extended assignments:** All traditional assignments PLUS new FADE controls
- **FADE modulation:** Create spatial movement by modulating front/back placement
- **ORANGE LED indicators:** QEX LFOs show with ORANGE LEDs in assignment display
- **Advanced spatial modulation:** Move voices in 3D space using PAN + FADE LFO control

### **Advanced LFO Techniques**
- **Spatial automation:** Use LFOs to move drums around 4-channel space automatically
- **Complex modulation:** Layer multiple LFOs on single parameters for complex behavior
- **Performance modulation:** Real-time LFO assignment changes for dynamic performances
- **Rhythm-synced modulation:** Sync LFO speeds to musical timing for rhythmic modulation

---

## Internal Envelope System

### **QEX Envelope Generators**
- **CV1/CV2 envelopes:** Internal decay envelopes triggered by QEX CV inputs
- **Assignable modulation:** Route envelopes to any parameter in the system
- **Decay time control:** Hold QEX CV buttons to adjust decay length (30ms to ~4s)
- **Gate hold mode:** Long press triggers for gate hold then decay behavior

### **Envelope Applications**
- **Dynamic parameter control:** Use envelopes to automate any drum parameter
- **Spatial envelopes:** Modulate FADE levels for dynamic spatial movement
- **Complex automation:** Layer envelopes with LFOs for sophisticated parameter control
- **Performance triggers:** Use external triggers to create dynamic envelope modulation

### **Visual Feedback**
- **Purple blinking LED:** Shows current envelope level during decay
- **Assignment display:** LED circle shows envelope assignments with color coding
- **Real-time monitoring:** Visual confirmation of envelope activity and assignments

---

## Preset System Deep Dive

### **Complete Kit Presets (64 Total)**
- **Full system storage:** All 4 voices, 8 LFOs, 8 CVs, EQ settings, master volume
- **Bank organization:** 4 banks of 16 presets each
- **Bank selection:** QD LED buttons select banks, encoder selects individual presets
- **Copy/delete functions:** Hold bank button for copy/delete operations

### **Single Voice Presets (v1.12)**
- **Individual voice storage:** Save/load single voices to/from existing presets
- **QEX button selection:** Long press QEX buttons to select individual voices for save/load
- **Limited parameters:** Saves model, pitch, decay, mod, mix settings, extra parameter
- **Creative workflow:** Mix and match individual voices from different preset sources

### **Preset Management**
- **CV preset selection:** CV input can control preset selection for dynamic kit changes
- **SD card backup:** Save/load complete preset banks to/from SD card (v1.12.3)
- **Performance recall:** Quick preset switching during live performances
- **Pot behavior:** "Jump" vs "Recall" modes for smooth preset transitions

### **Advanced Preset Techniques**
- **Kit morphing:** Use CV to smoothly transition between different drum kits
- **Performance presets:** Store different configurations for different songs/sections
- **Hybrid presets:** Combine single voice presets from different sources for unique kits
- **Backup workflows:** Regularly backup presets to SD card for safety

---

## Easter Egg Features (Hidden Functions)

### **Hidden Reverb System**
- **Access:** In EQ/Compressor screen, long press encoder to access reverb
- **QD outputs 1&2 only:** Reverb only works on main QD outputs
- **Parameters:** Blue (mix), Red (feedback), Yellow (diffusion), Green (time)
- **Navigation:** When reverb mix ≠ 0, normal encoder press cycles: MIX → EQ/COMP → REVERB → MIX
- **Preset storage:** Reverb settings saved with presets

### **EXTRA Parameters**
- **Access:** With toggle in MUTE, press and hold mute LED button
- **Model-specific:** Different EXTRA functions for different synthesis models
- **Low pass gates:** For samples/wavetables, EXTRA controls resonant low pass gate
- **Reset behavior:** EXTRA resets to 0 when changing models, kept when switching samples/wavetables
- **Advanced sound design:** Access hidden parameters for deeper synthesis control

### **Low Pass Gate Mode**
- **Sample/wavetable enhancement:** EXTRA parameter adds resonant low pass gate to samples
- **Organic decay:** Creates more natural, breathing decay behavior
- **Resonance control:** First half of EXTRA range increases resonance
- **Cutoff control:** Second half reduces cutoff frequency for darker sounds
- **Analog character:** Adds analog-style filtering to digital samples

### **Advanced Settings**
- **Gate mode:** Samples don't decay until trigger is released
- **V/octave sample selection:** Quantized CV for precise sample selection
- **Extended pitch range:** 4/6 octaves instead of 2/4 for samples/wavetables
- **Choke functionality:** Voice 4 chokes voice 3, voice 2 chokes voice 1 (long press)

---

## Beginner Patch Ideas

### **Patch 1: Basic Professional Drum Kit**
```
┌─────────────┐    ┌──────────────────────────────┐    ┌─────────────┐
│ Trigger     │───▶│ VPME.de QD + QEX Workstation │───▶│ 4-Channel   │
│ Sources     │    │                              │    │ Mixer       │
└─────────────┘    │ Voice 1: Kick (Model #1)     │    │             │
                   │ Voice 2: Snare (Model #3)    │    │ Ch 1: Front │
┌─────────────┐    │ Voice 3: Hi-hat (Model #7)   │    │ Left ◀──────┼─ QD Out 1
│ Master      │───▶│ Voice 4: Perc (Model #12)    │    │             │
│ Clock       │    │                              │    │ Ch 2: Front │
└─────────────┘    │ QEX Mode: CAR radio          │    │ Right ◀─────┼─ QD Out 2
                   │                              │    │             │
                   │ PAN: Voices positioned L/R   │    │ Ch 3: Back  │
                   │ FADE: Voices positioned F/B  │    │ Left ◀──────┼─ QEX Out 3
                   │                              │    │             │
                   │ EQ: Front/Back independent   │    │ Ch 4: Back  │
                   │                              │    │ Right ◀─────┼─ QEX Out 4
                   └──────────────────────────────┘    └─────────────┘
```

**Module Settings:**
- **QD Voice 1:** Kick model, PITCH low, DECAY medium, positioned front/center
- **QD Voice 2:** Snare model, PITCH medium, DECAY short, positioned back/center  
- **QD Voice 3:** Hi-hat model, PITCH high, DECAY very short, positioned front/right
- **QD Voice 4:** Percussion model, PITCH varied, positioned back/left
- **QEX CAR radio mode:** 4-speaker setup with independent EQ for front/back
- **Result:** Professional drum kit with spatial positioning and individual channel processing

### **Patch 2: Advanced QEX Performance System**
```
┌─────────────┐    ┌──────────────────────────────┐    ┌─────────────┐
│ Performance │───▶│ VPME.de QD + QEX Workstation │───▶│ Effects     │
│ Controllers │    │                              │    │ Processing  │
└─────────────┘    │ 8 LFO System:                │    │             │
                   │ - QD LFOs: Pitch/Decay mod   │    │ Main Mix ◀──┼─ QD Out 1&2
┌─────────────┐    │ - QEX LFOs: FADE/spatial mod │    │             │
│ External    │───▶│                              │    │ Effects ◀───┼─ QEX Out 3&4
│ CV Sources  │    │ Envelope System:             │    │ Send        │
└─────────────┘    │ - CV1 Envelope: Filter mod   │    │             │
                   │ - CV2 Envelope: Spatial mod  │    │ Individual  │
┌─────────────┐    │                              │    │ Outs ◀──────┼─ All 4 Outs
│ Triggers    │───▶│ QEX Mode: POST send          │    │             │
│ & Gates     │    │ - Main mix + Effects send    │    └─────────────┘
└─────────────┘    │                              │
                   │ Advanced Features:           │
                   │ - Hidden reverb (QD 1&2)     │
                   │ - EXTRA parameters active    │
                   │ - Preset morphing via CV     │
                   └──────────────────────────────┘
```

**Advanced Integration:**
- **8-LFO spatial system:** QD LFOs control synthesis parameters, QEX LFOs create spatial movement
- **Internal envelopes:** QEX CV1/CV2 envelopes provide additional modulation sources
- **POST send mode:** Main mix to QD outputs, effects send to QEX outputs
- **Hidden features:** Reverb on main outputs, EXTRA parameters for sound design
- **CV performance control:** External CV controls presets, LFO assignments, envelope triggers
- **Result:** Complete performance drum workstation with spatial control and professional routing

### **Patch 3: Intermediate - Organic Spatial Drum Processing**
```
┌─────────────┐    ┌──────────────────────────────┐    ┌─────────────┐
│   DivKid    │───▶│ VPME.de QD + QEX Workstation │───▶│ 4-Channel   │
│    Ochd     │    │                              │    │ Audio Out   │
│ & Expander  │    │ Voice 1: Kick + Ochd LFO1    │    │             │
└─────────────┘    │ Voice 2: Snare + Ochd LFO3   │    │ Ch 1&2: ◀───┼─ QD Out 1&2
                   │ Voice 3: Hat + Ochd LFO5     │    │ (Front Mix) │
┌─────────────┐    │ Voice 4: Perc + Ochd LFO7    │    │             │
│ Trigger     │───▶│                              │    │ Ch 3&4: ◀───┼─ QEX Out 3&4
│ Sources     │    │ QEX FADE: Ochd LFO2 mod     │    │ (Back Mix)  │
└─────────────┘    │ Spatial Movement: Automatic  │    │             │
                   │                              │    │ Living      │
                   │ Organic Character:           │    │ Spatial     │
                   │ - Natural breathing patterns │    │ Drum Mix    │
                   │ - Coordinated LFO phases     │    │             │
                   │ - Living spatial movement    │    │             │
                   └──────────────────────────────┘    └─────────────┘
```

| Module Integration | Signal Flow | Purpose | Workstation Synergy |
|-------------------|-------------|---------|---------------------|
| **Ochd LFO1 → QD Voice 1 Pitch** | Slow organic CV | **Natural kick tuning** | **Living low-end movement** |
| **Ochd LFO3 → QD Voice 2 Decay** | Breathing CV | **Dynamic snare envelope** | **Organic snare evolution** |
| **Ochd LFO5 → QD Voice 3 Mod** | Coordinated CV | **Hi-hat texture variation** | **Natural metallic breathing** |
| **Ochd LFO7 → QD Voice 4 Level** | Phase-locked CV | **Percussion volume waves** | **Coordinated level animation** |
| **Ochd LFO2 → QEX FADE Control** | Spatial movement CV | **Front/back automation** | **Living spatial positioning** |

**Learning Objectives:**
- **Organic drum animation:** Transform static drum hits into living, breathing instruments through coordinated LFO modulation
- **Spatial breathing:** Use FADE modulation to create drums that move naturally through 3D space
- **Multi-function LFO orchestration:** Leverage Ochd's 8 coordinated LFOs for complete drum ensemble animation
- **Professional organic processing:** Apply organic modulation to professional drum workstation without losing precision

**Alternative Organic Sources:**
- **Instead of Ochd:** Try **Batumi** for geometric organic relationships, or **Intellijel Quadrax** for envelope-based organic movement
- **Budget alternative:** **2HP LFO** provides basic organic modulation for individual drum parameters
- **Different character:** **Make Noise Maths** offers mathematical organic relationships with more complex curve shaping

### **Patch 4: Advanced - Mathematical Drum Chaos Processing**
```
┌─────────────┐    ┌──────────────────────────────┐    ┌─────────────┐
│  Squarp     │───▶│ VPME.de QD + QEX Workstation │───▶│ Effects     │
│  Hermod+    │    │                              │    │ Processing  │
│(Seq+Quant+  │    │ Voice 1: Kick + Hermod CV1   │    │             │
│ Trigger)    │    │ Voice 2: Snare + Hermod CV2  │    │ Main: ◀─────┼─ QD Out 1&2
└─────────────┘    │ Voice 3: Hat + Hermod CV3    │    │ (Dry Drums) │
                   │ Voice 4: Perc + Hermod CV4   │    │             │
┌─────────────┐    │                              │    │ Send: ◀─────┼─ QEX Out 3&4
│ Master      │───▶│ Advanced Integration:        │    │ (Wet Drums) │
│ Clock       │    │ - Hermod+ sequences triggers │    │             │
└─────────────┘    │ - Hermod+ quantizes pitches  │    │ Individual  │
                   │ - Hermod+ processes CVs      │    │ Outs ◀──────┼─ All 4 Outs
┌─────────────┐    │ - Hermod+ records live play │    │             │
│ 4ms RCD v2  │───▶│                              │    └─────────────┘
│(Polyrhythm) │    │ QEX Mode: POST send          │
└─────────────┘    │ RCD: Complex rhythm patterns │
                   │                              │
                   │ Multi-Function Capabilities: │
                   │ - Sequencer: Pattern control │
                   │ - Quantizer: Musical tuning  │
                   │ - CV Processor: Signal shaping│
                   │ - Live Recorder: Performance │
                   └──────────────────────────────┘
```

| Layer | Function | Workstation Role | Musical Result |
|-------|----------|------------------|----------------|
| **Sequence (Hermod+)** | Pattern generation | **Trigger orchestration** | **Complex drum programming** |
| **Quantize (Hermod+)** | Musical tuning | **Pitch relationships** | **Harmonic drum tuning** |
| **Process (Hermod+)** | CV manipulation | **Parameter automation** | **Dynamic drum evolution** |
| **Rhythm (RCD v2)** | Polyrhythmic timing | **Complex clock division** | **Mathematical rhythm layers** |
| **Workstation (QD+QEX)** | Professional processing | **Complete drum production** | **Studio-quality spatial drums** |

**Advanced Integration Benefits:**
- **Multi-function efficiency:** Hermod+ serves as sequencer, quantizer, and CV processor simultaneously
- **Musical mathematics:** Quantized drum tuning creates harmonic relationships between percussion elements
- **Performance recording:** Live drum performances captured and looped for complex arrangements
- **Polyrhythmic complexity:** RCD creates intricate rhythm relationships within professional drum framework

**Alternative Multi-Function Sources:**
- **Instead of Hermod+:** Try **Intellijel Metropolix** for probability-based sequencing with built-in quantization
- **Different approach:** **MetaModule** with Fundamental VCO + AS ADSR plugins for modular multi-function processing
- **Budget alternative:** **Disting mk4** algorithms (J-8 Quantizer + B-1 LFO + A-1 precision adder)

### **Patch 5: Expert - Complete Professional Drum Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌──────────────────────────────┐ ┌─────────────┐
│   Qubit     │ │  Cre8audio  │ │ VPME.de QD + QEX Workstation │ │  External   │
│   Bloom     │ │ Function    │ │                              │ │ Effects &   │
│(Generative  │ │ Junction    │ │ Advanced Ecosystem:          │ │ Mixing      │
│ Sequencer)  │ │(CV Proc)    │ │                              │ │             │
│             │ │             │ │ Voice 1: Kick + Bloom Gen1   │ │ Front L: ◀──┼─ QD Out 1
│ 4 Gens ○────┼─┼─CV In 1-4───┼─┼─▶ Multi-param modulation    │ │ Front R: ◀──┼─ QD Out 2
│ 4 Gates ○───┼─┼─Gate In 1-4─┼─┼─▶ Trigger generation        │ │ Back L: ◀───┼─ QEX Out 3
│ Probability │ │             │ │                              │ │ Back R: ◀───┼─ QEX Out 4
│ Control     │ │ Logic Ops   │ │ Voice 2: Snare + processed   │ │             │
│             │ │ Attenuvert  │ │ Voice 3: Hat + probability   │ │ Complete    │
│             │ │ Mix/Offset  │ │ Voice 4: Perc + generative   │ │ 4-Channel   │
│             │ │             │ │                              │ │ Professional│
│ Touch Pads  │ │ CV ○────────┼─┼─▶ QEX FADE + PAN control   │ │ Drum        │
│ Performance │ │ Process     │ │   Spatial automation        │ │ Production  │
│ Interface   │ │             │ │                              │ │ System      │
└─────────────┘ └─────────────┘ │ Integration Features:        │ │             │
                                │ - Generative pattern evolution│ │             │
┌─────────────┐                 │ - Probability-based triggers │ │             │
│ Master      │────────────────▶│ - Touch performance control  │ │             │
│ Clock       │                 │ - Advanced CV processing     │ │             │
└─────────────┘                 │ - Professional spatial mixing│ │             │
                                └──────────────────────────────┘ └─────────────┘
```

| Layer | Function | Integration Role | Professional Result |
|-------|----------|------------------|---------------------|
| **Generative (Bloom)** | Probability sequencing | **Evolving trigger patterns** | **Natural pattern development** |
| **Processing (Function Junction)** | CV manipulation | **Signal conditioning** | **Refined parameter control** |
| **Spatial (QEX FADE/PAN)** | 3D positioning | **Professional mixing** | **Studio-quality spatial imaging** |
| **Performance (Touch pads)** | Real-time control | **Human expression** | **Live performance capability** |
| **Workstation (QD+QEX)** | Complete drum production | **Professional synthesis** | **Broadcast-ready drum sounds** |

**Ecosystem Philosophy:**
- **Generative intelligence:** Bloom creates evolving patterns that feel naturally musical rather than mechanically repetitive
- **Professional signal processing:** Function Junction ensures clean, precise CV processing for broadcast-quality results
- **Spatial audio production:** QEX's 4-channel system creates professional spatial drum mixes
- **Performance integration:** Touch control maintains human expression within algorithmic pattern generation
- **Complete drum studio:** Entire ecosystem rivals dedicated drum production workstations

**Advanced Performance Techniques:**
- **Probability morphing:** Use Bloom's touch pads to smoothly transition between different pattern probabilities during performance
- **Spatial automation:** Function Junction processes Bloom's CV outputs to create complex spatial movement patterns
- **Multi-layer control:** Touch performance affects generative patterns which affect spatial positioning
- **Professional mixing:** 4-channel output enables professional mixing techniques with external processing

**Learning Achievements:**
- **Master professional drum production:** Complete understanding of advanced drum workstation capabilities
- **Integrate generative systems:** Balance algorithmic pattern generation with human musical expression
- **Advanced spatial mixing:** Professional 3D drum positioning and movement techniques
- **Performance ecosystem design:** Create systems that serve live performance while maintaining studio-quality results

---

## Advanced Techniques

### **Spatial Drum Mixing**
- **4-channel positioning:** Use PAN/FADE to position drums in 3D space
- **Dynamic spatial movement:** LFO modulation of FADE creates moving drums
- **Stereo width control:** Different PAN settings create stereo imaging effects
- **Professional routing:** Route different voices to different effects processors

### **Advanced Modulation Strategies**
- **8-LFO layering:** Layer multiple LFOs on single parameters for complex modulation
- **Envelope + LFO combinations:** Combine internal envelopes with LFOs for sophisticated automation
- **Spatial automation:** Automate FADE controls for dynamic drum movement
- **Cross-modulation:** Use one voice's parameters to modulate another voice

### **Performance Workflows**
- **Preset morphing:** Use CV to smoothly transition between drum kits during performance
- **Dynamic routing:** Switch between CAR radio/PRE send/POST send modes for different song sections
- **Real-time spatial control:** Perform spatial movements using FADE modulation
- **Live parameter automation:** Use QEX envelopes for triggered parameter changes

### **Professional Production Techniques**
- **Parallel processing:** Use PRE send mode to process voices through different effect chains
- **Individual voice processing:** Route each voice through dedicated effects via individual outputs
- **Stereo enhancement:** Use QEX outputs for stereo effects processing
- **Mix automation:** Automate levels, EQ, and spatial positioning for dynamic arrangements

---

## Common Use Cases

### **Electronic Music Production:**
- **Complete drum production:** All drum sounds from single integrated workstation
- **Professional mixing:** 4-channel output with built-in EQ and compression
- **Dynamic arrangements:** Spatial movement and automated parameter changes

### **Live Performance:**
- **Preset-based sets:** Quick kit changes via preset system for different songs
- **Spatial performance:** Real-time control over drum positioning in mix
- **Effects integration:** Professional routing to external effects processors

### **Studio Integration:**
- **Hybrid workflows:** Combine with software and hardware for complete productions
- **Individual processing:** Route voices to different DAW channels or hardware processors
- **Sample integration:** Load custom samples while maintaining synthesis capabilities

---

## Pairs Well With

### **Phase 2 Module Synergies (Professional Drum Enhancement):**
- **DivKid Ochd & Expander:** Coordinated 8-LFO organic modulation → QD+QEX for living spatial drum animation with natural breathing patterns
- **Qubit Bloom:** Generative pattern sequencing + probability control → QD+QEX for evolving drum patterns with touch performance integration
- **Squarp Hermod+:** Multi-function sequencer + quantizer + CV processor → QD+QEX for complete drum programming with musical tuning relationships
- **Cre8audio Function Junction:** Advanced CV processing + logic operations → QD+QEX for refined parameter control and spatial automation enhancement
- **4ms RCD v2:** Polyrhythmic clock division + complex timing → QD+QEX for mathematical rhythm layers within professional drum framework
- **Cross-Phase 2 Integration:** QD+QEX serves as professional drum production core enhanced by organic breathing, generative evolution, and spatial processing

### **Essential Performance Partners:**
- **Touch interfaces (Cellz, Tetrapad):** Real-time expressive control over workstation parameters and spatial positioning
- **Pattern generators (Euclidean Circles, Metropolix):** Mathematical and probability-based drum pattern generation
- **Clock manipulation (Pamela's, Tempi):** Master timing and complex clock relationships for advanced polyrhythmic patterns
- **Effects processors:** Professional effects chains for individual outputs and parallel processing workflows

### **Advanced Professional Integration:**
- **Multi-function modules (MetaModule, Disting):** Plugin-based processing and algorithm-specific drum enhancement
- **External mixers:** Professional mixing consoles for broadcast-quality 4-channel drum processing
- **Modular effects systems:** Dedicated effects processors for each voice via individual outputs
- **Performance controllers:** Multi-channel CV control for comprehensive workstation automation and live performance

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Master QD fundamentals:** Four voices, synthesis models, built-in mixing, and basic preset system
2. **Understand QEX expansion:** 4-channel routing, PAN/FADE control, and professional mixing modes
3. **Add organic breathing:** Integrate DivKid Ochd for coordinated LFO animation across all drum parameters (see Ochd guide)
4. **Include generative evolution:** Apply Qubit Bloom for probability-based pattern development and touch control (see Bloom guide)
5. **Advanced multi-function integration:** Use Hermod+ for sequencing, quantization, and CV processing simultaneously (see Hermod+ guide)
6. **Complete ecosystem mastery:** Combine Function Junction for refined CV processing within complete drum production system (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **QD+QEX + Ochd:** Learn organic drum animation through coordinated 8-LFO spatial modulation with professional workstation precision
- **QD+QEX + Bloom:** Master generative drum programming through probability-based pattern evolution with touch performance control
- **QD+QEX + Hermod+:** Understand multi-function drum sequencing through integrated pattern generation, quantization, and parameter automation
- **QD+QEX + Function Junction:** Explore advanced CV processing for refined spatial control and professional drum parameter manipulation
- **All Phase 2 + QD+QEX:** Build complete professional drum production systems with organic animation, generative patterns, and spatial processing

### **Skill Development Milestones:**
- **Beginner:** Master 4-voice drum synthesis with spatial positioning and basic preset management
- **Intermediate:** Integrate organic modulation for living drum animation and natural spatial movement
- **Advanced:** Add generative pattern evolution and multi-function sequencing for complex drum programming
- **Expert:** Complete ecosystem orchestration with touch performance integration and broadcast-quality spatial mixing

### **Advanced Professional Concepts:**
- **Complete Drum Production Studio:** Synthesis + sampling + mixing + effects + spatial processing in unified modular system
- **Organic Spatial Animation:** Natural breathing patterns applied to 3D drum positioning for living spatial mixes
- **Generative Drum Intelligence:** Probability-based pattern evolution that feels naturally musical rather than mechanically repetitive
- **Multi-Function Integration:** Single modules serving multiple roles (sequencer + quantizer + processor) for efficient professional workflows
- **Performance-Ready Systems:** Touch control integration within algorithmic pattern generation for live professional drum performance

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"QEX doesn't work at all!"**
- QD firmware must be v1.10+ for QEX functionality
- **Solution:** Update QD firmware from vpme.de/QD before using QEX

**"I can't hear sound from QEX outputs!"**
- Default CAR radio mode requires proper PAN/FADE positioning
- **Solution:** Use FADE control (hold QEX buttons) to move sounds to back channels

**"My samples sound wrong or won't play!"**
- File fragmentation causes playback issues and performance problems
- **Solution:** Erase SD card completely, then copy all files in single operation

### **🎵 Pro Tips:**

**Professional Routing:**
- **CAR radio mode:** Best for spatial positioning and 4-channel monitoring
- **PRE send mode:** Perfect for parallel processing and creative effects
- **POST send mode:** Standard studio workflow for reverb/delay sends

**Spatial Mixing Techniques:**
- **FADE LFO modulation:** Creates drums that move front-to-back automatically
- **Layered spatial movement:** Use both PAN and FADE LFOs at different speeds
- **Dynamic positioning:** Change spatial positions for different song sections

**Advanced Modulation:**
- **Envelope + LFO layering:** Combine QEX envelopes with LFOs for complex parameter automation
- **Cross-parameter modulation:** Modulate FADE with envelopes for triggered spatial movement
- **8-LFO orchestration:** Use all 8 LFOs together for complex, evolving drum textures

---

## Why This Workstation Rocks

### **The Philosophy:**
**Professional drum production in modular format.** The QD + QEX workstation proves that modular systems can offer the depth, flexibility, and professional capabilities of dedicated drum machines while integrating seamlessly with modular synthesis environments.

### **The Innovation:**
- **Complete drum studio:** Synthesis + samples + mixing + effects + spatial processing in 26HP
- **Professional routing:** 4-channel output with advanced mixing modes and individual processing
- **Advanced modulation:** 8 LFOs + envelope generators + 8 CV inputs for comprehensive automation
- **Hidden depth:** Easter egg features and EXTRA parameters provide endless sound design possibilities

### **The Professional Benefits:**
- **Studio integration:** Professional routing and mixing capabilities for serious production work
- **Performance ready:** Preset system, spatial control, and real-time parameter automation
- **Modular integration:** CV control over all parameters while maintaining standalone capabilities
- **Future-proof:** Firmware updates continue to add features and capabilities

### **Perfect For:**
- **Electronic music producers:** Complete drum production capabilities in modular format
- **Live performers:** Professional drum workstation with preset system and spatial control
- **Studio engineers:** Advanced routing and processing capabilities for professional mixing
- **Sound designers:** Deep synthesis capabilities + sample integration + hidden features

### **The Magic:**
The QD + QEX workstation proves that **modular doesn't mean compromised**. This system offers professional drum production capabilities that rival dedicated drum machines while providing the flexibility and integration benefits of modular synthesis.

---

**Bottom Line:** The QD + QEX workstation isn't just drum voices in a modular system - it's a **complete professional drum production studio** that transforms synthesis algorithms, sample libraries, and spatial processing into unified musical instruments. Every feature teaches you something new about how professional drum production really works. As a **complete drum workstation**, it bridges modular flexibility with professional studio capabilities.

---

*Visit [VPME.de](https://vpme.de/qd) for complete documentation, firmware updates, sample libraries, and the full mathematical music ecosystem*