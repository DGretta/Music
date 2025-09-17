# VPME.de QD + QEX + Euclidean Circles V2 - Guide

**The Analog Drum Synthesis + Mathematical Rhythm Ecosystem**

---

## Quick Start: Get Your First Euclidean Drums in 5 Minutes

**What is the QD Ecosystem?** A complete analog drum synthesis system where the QD provides four independent analog drum voices, QEX adds expansion features, and Euclidean Circles V2 generates mathematical rhythm patterns. Think "analog drum synthesis meets mathematical rhythm generation" - the QD creates the sounds, EC2 creates the patterns.

### Your First Euclidean Drum Pattern
1. **Connect EC2 Output 1** → **QD Voice 1 Trigger Input**
2. **Connect EC2 Output 3** → **QD Voice 2 Trigger Input**  
3. **Connect QD Main Output 1** → **your mixer/audio interface**
4. **Set EC2 Channel 1:** Length 16, Fill 4 (kick pattern)
5. **Set EC2 Channel 3:** Length 16, Fill 6 (snare pattern)
6. **Start your master clock** into EC2 Clock Input
7. **Listen** - you'll hear mathematically perfect but musically interesting drum patterns!

**Congratulations!** You've just experienced the magic of analog drum synthesis driven by Euclidean mathematics!

---

## Understanding the QD + EC2 Philosophy

### **What Makes This Combination Special:**
The QD provides **analog drum synthesis** - real synthesis engines creating kick drums, snares, hi-hats, and percussion from scratch using digital modeling and samples. EC2 provides **mathematical rhythm patterns** based on Euclidean algorithms that distribute beats evenly across time signatures, creating patterns that feel both mathematical and musical.

### **The Analog Drum Synthesis Concept:**
- **Four independent voices:** Each QD voice is a complete drum synthesizer
- **Digital modeling:** Classic analog drum circuits recreated digitally with perfect recall
- **Sample playback:** Load your own samples from SD card for hybrid synthesis
- **Wavetable oscillators:** Use wavetables as drum voices for unique textures
- **Built-in mixing:** Stereo panning, EQ, and compression built into QD

### **The Euclidean Rhythm Concept:**
- **Mathematical distribution:** Euclidean algorithm evenly distributes beats across measures
- **Musical results:** Creates polyrhythmic patterns that sound complex but feel natural
- **Six independent channels:** Each EC2 channel can drive different QD voices
- **Real-time pattern editing:** Change Length and Fill on the fly for live performance
- **Visual feedback:** LED circle shows patterns as they play for immediate understanding

### **The Complete Ecosystem:**
1. **QD (Quad Drum Voice):** Four analog drum synthesizers with built-in mixing and effects
2. **QEX (QD Expander):** Adds individual outputs, additional CV control, and preset management
3. **EC2 (Euclidean Circles V2):** Six-channel Euclidean rhythm generator with live pattern editing

### **Why This Matters:**
This system bridges **mathematical precision with musical expression**. EC2 generates patterns that are mathematically perfect but musically interesting, while QD provides the warm analog character that makes electronic drums feel alive and punchy.

---

## Essential Parameters (The Drum + Pattern System)

### **QD (Quad Drum Voice) - The Analog Brain**

#### **1. FOUR DRUM VOICES**
- **Voice 1 (Blue):** Typically kick drums - full range analog synthesis
- **Voice 2 (Red):** Typically snare - wide range of percussion synthesis
- **Voice 3 (Yellow):** Typically hi-hats - metallic and noise synthesis
- **Voice 4 (Green):** Typically percussion - flexible synthesis for any drum sound
- **Independent synthesis:** Each voice is a complete drum synthesizer
- **22 digital models:** From classic 808/909 to unique experimental drums

#### **2. THREE CONTROLS PER VOICE**
- **PITCH:** Fundamental frequency of the drum sound (musical tuning)
- **DECAY:** How long the drum sound takes to fade out (envelope time)
- **MOD:** Model-specific parameter (distortion, filter, sample selection, etc.)
- **Real-time control:** All parameters respond instantly to knob changes
- **CV controllable:** All parameters can be voltage controlled via CV inputs

#### **3. BUILT-IN MIXING SYSTEM**
- **Stereo outputs:** Two main outputs with built-in panning mixer
- **3-band EQ:** Low, mid, high EQ per voice for frequency shaping
- **Compressor:** Built-in compressor for punchy drum sound
- **Individual levels:** Volume and pan control for each voice
- **Master volume:** Overall level control with preset storage

#### **4. SAMPLE AND WAVETABLE SUPPORT**
- **SD card samples:** Load your own drum samples for hybrid synthesis
- **Wavetable oscillators:** Use wavetables as unique drum voices
- **Sample selection:** MOD parameter selects samples within folders
- **Pitch control:** ±1 octave for samples, ±2 octaves for wavetables
- **Low pass gates:** Special envelope mode for organic sample decay

### **QEX (QD Expander) - The Enhancement**

#### **1. INDIVIDUAL OUTPUTS**
- **Four separate outputs:** Individual audio output for each QD voice
- **Direct patching:** Route each drum voice to different effects or mixers
- **Parallel processing:** Process each voice through different effects chains
- **External mixing:** Use external mixers for complex drum routing

#### **2. ADDITIONAL CV CONTROL**
- **Extra CV inputs:** More voltage control options for dynamic drum performance
- **CV assignment:** Assign CV inputs to any QD parameter for automation
- **Performance control:** Real-time CV control over pitch, decay, and modulation
- **External sequencing:** Use external sequencers to control drum parameters

#### **3. PRESET MANAGEMENT**
- **Single voice presets:** Load/save individual drum voices (new in v1.12)
- **Complete kit presets:** Store entire 4-voice drum kits with all settings
- **64 presets:** Large library of drum sounds and complete kits
- **Preset morphing:** CV control over preset selection for dynamic kit changes

### **EC2 (Euclidean Circles V2) - The Pattern Engine**

#### **1. SIX EUCLIDEAN CHANNELS**
- **Independent rhythm generators:** Each channel creates different Euclidean patterns
- **Length parameter:** Pattern length from 1-16 steps per channel
- **Fill parameter:** Number of beats distributed evenly across the length
- **Rotation parameter:** Starting point offset for pattern variation
- **Visual display:** LED circle shows all six patterns simultaneously

#### **2. PATTERN EDITING SYSTEM**
- **Real-time editing:** Change Length and Fill while patterns are running
- **F-button mapping:** Map favorite functions to front panel F-button for live performance
- **Pattern chaining:** Chain up to three patterns for 48-step sequences
- **User sequences:** Program custom non-Euclidean patterns alongside Euclidean ones

#### **3. PERFORMANCE FEATURES**
- **Six Switches expansion:** Individual on/off switches for each channel
- **Fill functions:** Add rhythmic fills and variations during performance
- **Pattern advance:** Step through pattern variations for song structure
- **Preset save/recall:** Store and recall complete pattern sets

#### **4. MATHEMATICAL PATTERN GENERATION**
- **Euclidean algorithm:** Distributes beats as evenly as possible across time
- **Polyrhythmic relationships:** Different channels create complex polyrhythmic interactions
- **Musical mathematics:** Patterns feel both structured and organic
- **Infinite variations:** Different Length/Fill combinations create vast pattern library

---

## Beginner Patch Ideas

### **Patch 1: Basic Euclidean Drum Kit**
```
┌─────────────┐    ┌──────────────┐    ┌──────────────┐
│ Master      │───▶│ Euclidean    │───▶│ VPME.de QD   │
│ Clock       │    │ Circles V2   │    │ + QEX        │
└─────────────┘    │              │    │              │
                   │ Out 1 ───────┼───▶│ Voice 1 Trig │
                   │ (Kick)       │    │ (Kick)       │
                   │              │    │              │
                   │ Out 3 ───────┼───▶│ Voice 2 Trig │
                   │ (Snare)      │    │ (Snare)      │
                   │              │    │              │
                   │ Out 5 ───────┼───▶│ Voice 3 Trig │
                   │ (Hi-hat)     │    │ (Hi-hat)     │
                   │              │    │              │
                   │ Channel 1:   │    │ Main Out 1&2 ┼──▶ Audio Output
                   │ Len 16, Fill 4│    │              │
                   │              │    │              │
                   │ Channel 3:   │    │              │
                   │ Len 16, Fill 6│    │              │
                   │              │    │              │
                   │ Channel 5:   │    │              │
                   │ Len 16, Fill 8│    │              │
                   └──────────────┘    └──────────────┘
```

**Module Settings:**
- **EC2 Channel 1:** Length 16, Fill 4 (kick on beats 1, 5, 9, 13)
- **EC2 Channel 3:** Length 16, Fill 6 (snare on beats 3, 6, 9, 11, 14, 16)
- **EC2 Channel 5:** Length 16, Fill 8 (hi-hat pattern with even distribution)
- **QD Voice 1:** Kick model, appropriate pitch and decay
- **QD Voice 2:** Snare model, appropriate pitch and decay  
- **QD Voice 3:** Hi-hat model, short decay for crisp sound
- **Result:** Classic drum kit with mathematically interesting Euclidean patterns

### **Patch 4: Touch-Enhanced Euclidean Performance**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│  Cre8audio  │ │ Euclidean   │ │   VPME.de QD    │
│    Cellz    │ │ Circles V2  │ │    + QEX        │
│ (Touch Ctrl)│ │ (Pattern    │ │ (Drum Synth)    │
│             │ │  Generator) │ │                 │
│             │ │             │ │                 │
│ CV Out 1 ○──┼─┼─────────────┼─┼─▶ Voice 1 Pitch │
│       ║     │ │ Channel 1   │ │         ║       │
│ CV Out 2 ○──┼─┼─────────────┼─┼─▶ Voice 2 Decay │
│       ║     │ │ Channel 2   │ │         ║       │
│ Gate 1   ○──┼─┼─────────────┼─┼─▶ Voice 3 Mod   │
│       ║     │ │ Channel 3   │ │         ║       │
│ Gate 2   ○──┼─┼─────────────┼─┼─▶ Voice 4 Level │
│       ║     │ │             │ │                 │
│ Touch Grid  │ │ Out 1-6 ○───┼─┼─▶ Trig 1-4      │
│ Performance │ │ Patterns    │ │   Euclidean     │
│ Interface   │ │             │ │   Triggers      │
│             │ │ Visual      │ │                 │
│             │ │ Pattern     │ │ Touch-Enhanced  │
│             │ │ Display     │ │ Analog Drums    │
└─────────────┘ └─────────────┘ └─────────────────┘
```

**Learning Objectives:**
- **Touch + Pattern integration:** Human expression applied to mathematical rhythm generation
- **Expressive drum control:** Touch interface creates dynamic control over analog drum synthesis
- **Mathematical + Human timing:** Touch expression enhances mathematical patterns
- **Performance drum systems:** Creating responsive drum systems within mathematical frameworks

---

## Advanced Techniques

### **Euclidean Pattern Mathematics:**
- **Length = time signature:** Length 16 = 4/4 time, Length 12 = 3/4 time
- **Fill = beat density:** More fill = more dense patterns, less fill = sparser patterns
- **Rotation = pattern offset:** Shift pattern start point for variation without changing the pattern
- **Polyrhythmic relationships:** Different lengths create complex polyrhythmic interactions

### **QD Synthesis Techniques:**
- **Model selection:** Each drum model responds differently to pitch, decay, and mod parameters
- **Sample integration:** Mix digital models with your own samples for hybrid drum sounds
- **Wavetable drums:** Use wavetables as drum voices for unique electronic percussion
- **Low pass gates:** Special envelope mode creates organic, breathing drum sounds

### **Performance Integration:**
- **F-button mapping:** Map EC2 functions to front panel for live pattern manipulation
- **Six Switches expansion:** Individual channel control for live pattern arrangement
- **Real-time editing:** Change EC2 patterns while playing for dynamic performance
- **Pattern chaining:** Create longer sequences by chaining multiple EC2 patterns

---

## Pairs Well With

### **Phase 2 Module Synergies (Touch + Pattern + Logic Enhancement):**
- **Cre8audio Cellz:** Touch sequencer + performance interface → QD+EC2 for expressive mathematical drum control with human touch
- **Qubit Bloom:** Generative pattern evolution + probability control → EC2 for naturally evolving Euclidean pattern development
- **Cre8audio Function Junction:** Logic operations + signal processing → QD for complex drum parameter relationships and pattern enhancement
- **Make Noise Wogglebug:** Chaotic modulation + organic variation → QD for natural drum parameter evolution within mathematical structure
- **Squarp Hermod+:** Musical sequencing + song structure → EC2 for musical framework around mathematical patterns
- **Cross-Phase 2 Integration:** QD+EC2 serves as mathematical drum core enhanced by multi-function touch, generative, and logic control

### **Essential Performance Partners:**
- **Touch interfaces (Cellz, Tetrapad):** Real-time expressive control of mathematical drum patterns with human touch
- **Pattern generators (Bloom, Marbles):** Generative evolution of Euclidean patterns for naturally developing drum sequences
- **Performance controllers (16n, QuNexus):** Multi-parameter control for live mathematical drum performance
- **Clocking systems (Pamela's, Tempi):** Complex clock relationships for advanced polyrhythmic mathematical patterns

### **Advanced System Integration:**
- **Complete drum workstations:** QD+EC2 + multi-function modules create professional mathematical drum performance systems
- **Mathematical composition tools:** Euclidean patterns combined with touch control for expressive mathematical music creation
- **Hybrid analog/digital systems:** Digital pattern generation with analog drum synthesis for warm mathematical precision
- **Cross-system integration:** QD+EC2 integrates with all synthesis systems while maintaining mathematical pattern core

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with QD fundamentals:** Master analog drum synthesis, four voice architecture, and digital modeling vs samples
2. **Add Euclidean patterns:** Integrate EC2 for mathematical pattern generation and polyrhythmic relationships (see EC2 guide)
3. **Include touch performance:** Use Cre8audio Cellz for expressive control over mathematical patterns (see Cellz guide)
4. **Add generative evolution:** Apply Qubit Bloom for natural pattern development and probability control (see Bloom guide)
5. **Include logic processing:** Use Function Junction for complex parameter relationships and pattern enhancement (see Function Junction guide)
6. **Complete the ecosystem:** Combine all elements for complete mathematical drum performance workstation

### **Cross-Module Learning Opportunities:**
- **QD + EC2:** Learn mathematical drum programming through Euclidean pattern generation with analog synthesis character
- **EC2 + Cellz:** Master expressive pattern control through touch-responsive mathematical pattern performance
- **QD + Bloom:** Understand generative drum synthesis through probabilistic parameter control and pattern evolution
- **EC2 + Function Junction:** Explore logic-enhanced pattern processing for complex mathematical pattern relationships
- **All Phase 2 + QD Ecosystem:** Build complete mathematical drum systems with touch, generative, and logic enhancement

### **Advanced Mathematical Concepts:**
- **Euclidean Mathematics:** Understand even distribution algorithms and their musical applications in drum programming
- **Polyrhythmic Relationships:** Master complex time signature interactions through mathematical pattern generation
- **Analog + Mathematical Synthesis:** Explore how mathematical patterns enhance rather than replace analog drum character
- **Performance Mathematics:** Design systems where human expression serves mathematical precision for musical results

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My Euclidean patterns sound too mechanical!"**
- EC2 patterns are mathematically perfect, which can feel rigid without variation
- **Solution:** Use rotation parameter, pattern chaining, or generative control (Bloom) for natural evolution

**"I can't get complex polyrhythms!"**
- Same Length settings on different EC2 channels won't create polyrhythms
- **Solution:** Use different Length values (like 16, 12, 9, 7) for true polyrhythmic relationships

**"My QD drums don't sound punchy enough!"**
- Internal mixing may need adjustment, or individual voice levels may be too low
- **Solution:** Use built-in compressor, adjust EQ, or use individual QEX outputs for external processing

### **🎵 Pro Tips:**

**Euclidean Pattern Strategy:**
- **Start simple:** Begin with Length 16 and different Fill values to understand basic relationships
- **Build polyrhythms gradually:** Add one new Length at a time to hear how polyrhythms develop
- **Use rotation creatively:** Same Length/Fill with different rotations creates pattern variations
- **Pattern chaining:** Use 3-pattern chains for longer, more complex mathematical sequences

**Performance Techniques:**
- **F-button mapping:** Map most-used functions (pattern advance, fills) to F-button for immediate access
- **Six Switches workflow:** Use individual channel switches to build patterns live by adding/removing voices
- **Touch integration:** Use Cellz to add human expression without disrupting mathematical pattern structure
- **Pattern morphing:** Use QEX preset CV control to morph between drum kits while patterns continue

---

## Why This Ecosystem Rocks

### **The Philosophy:**
**Mathematical precision meets analog warmth.** The QD+EC2 ecosystem proves that mathematical patterns can be musical when combined with analog synthesis character. It's not about cold calculation - it's about using mathematics to create patterns that feel both structured and organic.

### **The Innovation:**
- **Euclidean rhythm generation:** Mathematical algorithms create musical patterns automatically
- **Analog drum synthesis:** Digital modeling of classic analog circuits with perfect recall
- **Complete integration:** Pattern generator and drum synthesizer designed to work together
- **Performance-oriented:** Real-time pattern editing and touch control for live mathematical music

### **The Magic:**
The QD+EC2 ecosystem proves that **mathematics can be musical** when properly applied. Euclidean algorithms create patterns that feel both logical and organic, while analog synthesis provides the warmth and character that makes mathematical music emotionally engaging.

### **Educational Value:**
The combination teaches fundamental concepts of **mathematical music**, **polyrhythmic relationships**, and **the balance between structure and expression** that are essential to understanding both electronic music and mathematical approaches to composition.

---

**Bottom Line:** The QD+EC2 ecosystem isn't just drum programming - it's a **mathematical music processor** that transforms Euclidean algorithms and analog synthesis into complete performance systems through touch control and generative enhancement. Every patch teaches you something new about how mathematical music really works. As the **mathematical drum brain of Phase 2 ecosystems**, it transforms touch expression, generative evolution, and logic processing into unified mathematical musical precision.

---

*Visit [VPME.de](https://vpme.de/) for complete documentation, firmware updates, and the full ecosystem of mathematical music modules*