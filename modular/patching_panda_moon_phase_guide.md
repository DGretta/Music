# Patching Panda Moon Phase - Beginner's Guide

![Patching Panda Moon Phase](https://github.com/DGretta/Music/raw/main/modular/images/patching_panda/moon_phase/front_panel.jpg)
*Stereo imaging filter with 8 filter mode combinations, unique stereo imager, and spatial processing capabilities in 14HP*

**The Stereo Imaging Filter That Breaks All the Rules**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Moon Phase?** A stereo multimode filter with unique stereo imaging capabilities that can transform any signal into wide, spacious soundscapes. Unlike traditional filters, it doesn't self-oscillate but instead uses resonance and stereo imaging to create textures and effects impossible with conventional filters.

### Your First Stereo Magic
1. **Patch mono signal** → **IN L** (oscillator, drum, any mono source)
2. **Connect both outputs** → **OUT L** and **OUT R** to stereo mixer
3. **Set Mode switch** to position **3** (LP + BP - good starting point)
4. **Turn ST f** (stereo frequency) to 12 o'clock
5. **Turn SPAN** slightly right (2 o'clock)
6. **Turn ST IMAGER** to 2 o'clock
7. **Sweep cutoff frequency** - notice how the sound spreads in stereo!

**Mode Exploration:**
- **Press MODE button** to cycle through 8 different filter combinations
- **Watch the LEDs** - they show which mode you're in
- **Each mode sounds completely different** - from dual lowpass to notch + bandpass

---

## Essential Parameters (The Big 5)

### **1. Mode Selection (8 Filter Combinations)**
- **What it does:** Selects which filter types are applied to left and right channels
- **8 Modes:**
  1. **LP + NOTCH** - Lowpass left, Notch right
  2. **BP + HP** - Bandpass left, Highpass right  
  3. **LP + BP** - Lowpass left, Bandpass right
  4. **BP + BP** - Dual Bandpass (both channels)
  5. **HP + HP** - Dual Highpass (both channels)
  6. **LP + LP** - Dual Lowpass (both channels)
  7. **LP + HP** - Lowpass left, Highpass right
  8. **NOTCH + BP** - Notch left, Bandpass right
- **Pro tip:** Each mode creates different stereo interactions and tonal characters

### **2. ST IMAGER (Stereo Imager)**
- **What it does:** Creates mid/side processing and phase shifting between channels
- **Musical result:** Widens stereo field, creates unique resonance behavior
- **Range:** CCW = narrow/mono, CW = wide/phase-shifted stereo
- **Unique feature:** Changes how resonance behaves - "beyond any other filter"

### **3. SPAN Control**
- **What it does:** Separates the cutoff frequencies between left and right filters
- **Range:** Center = both filters at same frequency, turned = frequencies spread apart
- **Direction:** CCW = left filter opens, CW = right filter opens
- **Creative use:** Creates frequency separation for unique stereo effects

### **4. ST f (Stereo Frequency Control)**
- **What it does:** Master cutoff frequency for both filters
- **Interactive:** Works with SPAN to determine final frequencies
- **Center position:** When at 12 o'clock, both filters are at same frequency
- **Performance control:** Primary filter sweep parameter

### **5. Q (Resonance)**
- **What it does:** Emphasizes frequencies around cutoff point
- **Unique behavior:** Doesn't self-oscillate - instead creates distortion and character
- **Stereo interaction:** Behavior dramatically affected by ST IMAGER setting
- **Range:** Smooth filtering to aggressive distortion and artifacts

---

## Understanding the 8 Modes

### **Mode 1: LP + NOTCH**
- **Character:** Warm left channel, hollow right channel
- **Use cases:** Drums with different left/right character, creative panning effects

### **Mode 2: BP + HP**
- **Character:** Vocal/nasal left, bright right
- **Use cases:** Lead sounds with movement, creative frequency splitting

### **Mode 3: LP + BP**
- **Character:** Warm left, focused mid-range right
- **Use cases:** Bass/lead separation, frequency-based panning

### **Mode 4: BP + BP**
- **Character:** Dual bandpass with controllable separation
- **Use cases:** Vocal textures, hollow sounds, telephone effects

### **Mode 5: HP + HP**
- **Character:** Dual highpass with stereo spread
- **Use cases:** Bright textures, removing low end with stereo width

### **Mode 6: LP + LP**
- **Character:** Traditional stereo lowpass filtering
- **Use cases:** Classic filter sweeps with stereo width

### **Mode 7: LP + HP**
- **Character:** Warm left, bright right (complementary)
- **Use cases:** Frequency crossover effects, creative splits

### **Mode 8: NOTCH + BP**
- **Character:** Hollow left, focused right
- **Use cases:** Creative notching effects, unusual textures

---

## Beginner Patch Ideas

### **Patch 1: Stereo Drum Processing**
- **Mono drum loop** → **IN L**
- **Mode:** BP + HP (Mode 2)
- **SPAN at 3 o'clock** (right filter more open)
- **ST IMAGER at 2 o'clock** (moderate width)
- **Envelope** → **ST f CV** (rhythmic filter movement)
- **Result:** Drums with different character on each side

### **Patch 2: Evolving Pad Textures**
- **Pad/chord sound** → **IN L**
- **Mode:** LP + BP (Mode 3)
- **Slow LFO** → **SPAN CV** (moving frequency separation)
- **Different LFO** → **ST IMAGER CV** (changing width)
- **Manual ST f sweeps** for dramatic filter movement
- **Result:** Constantly evolving stereo pad textures

### **Patch 3: Creative Bass Processing**
- **Bass sequence** → **IN L**
- **Mode:** LP + LP (Mode 6) 
- **Audio rate LFO** → **ST IMAGER CV** (fast stereo modulation)
- **Q at 3 o'clock** (high resonance for character)
- **SPAN modulation** for movement
- **Result:** Bass with unique stereo movement and character

### **Patch 4: Intermediate - Phase 2 Organic Spatial Breathing**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   DivKid Ochd      │      │  Patching Panda        │
   │    (Phase 2)       │      │   Moon Phase            │
   │                    │      │   (Spatial)             │
   │                    │      │                         │
   │ LFO 1 ○────────────┼──────┼─▶ ST f CV Input         │
   │       ║            │      │                         │
   │ LFO 3 ○────────────┼──────┼─▶ SPAN CV Input         │
   │       ║            │      │                         │
   │ LFO 5 ○────────────┼──────┼─▶ ST IMAGER CV Input    │
   │       ║            │      │                         │
   │ LFO 7 ○────────────┼──────┼─▶ Q CV Input            │
   │       ║            │      │                         │
   └───────║────────────┘      │ L & R Out ○───────────┼─── Audio (Red)
           ║                   │ (Organic Spatial)       │
   CV (Blue)║                  └─────────────────────────┘
           ║                           ║
           ▼                    Audio ║
   ┌─────────────┐               (Red)║
   │   Audio     │                    ║
   │   Source    │────────────────────▼
   │  (Mono)     │           ┌──────────────────────────────┐
   └─────────────┘           │   Organic Spatial             │
                             │      Breathing                 │
                             │                               │
                             │ LFO 1: Breathing Frequency    │
                             │ LFO 3: Living Separation      │
                             │ LFO 5: Organic Stereo Width   │
                             │ LFO 7: Breathing Resonance    │
                             │                               │
                             │ Living Space ○───────────┼─── Breathing Stereo
                             └──────────────────────────────┘
```

| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **Ochd LFO 1 → ST f CV** | Organic frequency modulation | **Breathing filter sweeps** | **Natural spatial frequency evolution** |
| **Ochd LFO 3 → SPAN CV** | Organic separation control | **Living stereo separation** | **Organic spatial breathing** |
| **Ochd LFO 5 → ST IMAGER CV** | Organic width control | **Breathing stereo width** | **Natural spatial expansion** |
| **Ochd LFO 7 → Q CV** | Organic resonance control | **Living filter character** | **Breathing spatial character** |

**Module Settings:**
- **Ochd Rate:** 12 o'clock for musical organic breathing
- **Moon Phase:** Mode 3 (LP + BP) for natural spatial processing
- **All spatial parameters:** Respond to organic modulation for living space
- **Result:** Spatial filtering that breathes and evolves naturally with organic life

**Learning Objectives:**
- **Organic + Spatial integration:** Natural breathing applied to stereo imaging filter processing
- **Living space:** Spatial parameters that breathe with organic life
- **Evolving stereo:** Simple organic modulation creates complex spatial evolution
- **System breathing:** Entire spatial system breathes as unified organism

**Alternative Modulation Sources:**
- **Instead of Ochd:** Try **Batumi** for more geometric spatial movement, or **Maths** for mathematical spatial relationships
- **Instead of multimodulation:** Try **single parameter focus** for simpler organic spatial processing
- **Budget alternatives:** **2HP LFO + 2HP Rnd** provides similar organic + variation functionality
- **Different character:** **Quadrax** gives more discrete spatial steps vs Ochd's continuous breathing

### **Patch 5: Advanced - Chaos Spatial Mathematics**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Make Noise       │      │  Patching Panda        │
   │   Wogglebug        │      │   Moon Phase            │
   │    (Phase 2)       │      │   (Spatial)             │
   │                    │      │                         │
   │ Stepped CV ○───────┼──────┼─▶ ST f CV Input         │
   │       ║            │      │                         │
   │ Smooth CV ○────────┼──────┼─▶ SPAN CV Input         │
   │       ║            │      │                         │
   │ Woggle CV ○────────┼──────┼─▶ ST IMAGER CV Input    │
   │       ║            │      │                         │
   │ Burst CV ○─────────┼──────┼─▶ Mode Switch Control   │
   │       ║            │      │                         │
   └───────║────────────┘      │ L & R Out ○───────────┼─── Audio (Red)
           ║                   │ (Chaos Spatial)         │
   CV (Blue)║                  └─────────────────────────┘
           ║                           ║
           ▼                    Audio ║
   ┌─────────────┐               (Red)║
   │   Audio     │                    ║
   │   Source    │────────────────────▼
   │  (Mono)     │           ┌───────────────────────────────┐
   └─────────────┘           │   Chaos Spatial               │
                             │      Mathematics               │
                             │                               │
                             │ Stepped: Chaotic Freq Jumps   │
                             │ Smooth: Analog Separation     │
                             │ Woggle: Unpredictable Width   │
                             │ Burst: Explosive Mode Changes │
                             │                               │
                             │ Controlled Chaos ○────────┼─── Mathematical Space
                             └───────────────────────────────┘
```

| Chaos + Spatial Chain | Function | Purpose | Advanced Integration |
|------------------------|----------|---------|---------------------|
| **Wogglebug Stepped → ST f CV** | Quantized chaos frequency | **Chaotic filter frequency jumps** | **Chaos learns spatial filtering** |
| **Wogglebug Smooth → SPAN CV** | Analog chaos separation | **Smooth chaos stereo spread** | **Chaotic spatial separation** |
| **Wogglebug Woggle → ST IMAGER CV** | Pure chaos width | **Unpredictable stereo width** | **Chaos-driven spatial imaging** |
| **Wogglebug Burst → Mode Control** | Chaos mode switching | **Explosive filter changes** | **Mathematical spatial explosions** |

**Module Settings:**
- **Wogglebug:** All outputs active, Rate for musical chaos timing
- **Moon Phase:** Mode switching responds to chaos bursts for dramatic changes
- **Spatial chaos:** Create unpredictable but musical spatial variations
- **Result:** Spatial filtering with controlled but unpredictable chaos variations

**Learning Objectives:**
- **Chaos + Spatial fusion:** Controlled unpredictability in stereo imaging filter systems
- **Mathematical chaos theory:** Understanding how chaos affects spatial processing
- **Unpredictable yet musical:** Chaos keeps spatial processing from becoming static
- **Controlled randomness:** Spatial processing keeps chaos musical and structured

### **Patch 6: Expert - Complete Phase 2 Spatial Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│   DivKid    │ │ Make Noise  │ │ Mutable     │ │ Patching Panda  │
│    Ochd     │ │ Wogglebug   │ │  Marbles    │ │  Moon Phase     │
│ (Organic)   │ │ (Chaos)     │ │ (Patterns)  │ │ (Spatial)       │
│             │ │             │ │             │ │                 │
│ LFO 1 ○─────┼─┼─Stepped ○   │ │ X1 Out ○────┼─┼─ST f CV        │
│       ║     │ │        ║    │ │       ║     │ │       ║         │
│ LFO 3 ○─────┼─┼─Smooth ○    │ │ X2 Out ○────┼─┼─SPAN CV        │
│       ║     │ │        ║    │ │       ║     │ │       ║         │
│ LFO 7 ○─────┼─┼─Woggle ○    │ │ Y Out  ○────┼─┼─ST IMAGER CV   │
│       ║     │ │        ║    │ │       ║     │ │       ║         │
└───────║─────┘ └────────║────┘ │ t1 Out ○────┼─┼─Mode Control   │
        ║                ║      │       ║     │ │       ║         │
        ║                ║      │ DEJA VU     │ │ L&R Out        │
        ║                ║      │ CV ◀────────┼─┼─All Spatial    │
        ║                ║      │ (Learning)  │ │ ○─────────┼─Audio
        ║                ║      └─────────────┘ └─────────────────┘
        ▼                ▼             ║               ║
┌──────────────────────────────────────────────────────────────────┐
│                  Complete Spatial Ecosystem                       │
│                                                                     │
│ Organic Breathing + Controlled Chaos + Pattern Learning + Spatial   │
│                                                                     │
│ Organic LFOs → Natural spatial parameter breathing and evolution   │
│ Chaos CVs    → Controlled unpredictability in spatial processing  │
│ Pattern X/Y/t → Learning spatial patterns and adaptive control     │
│ Spatial      → Stereo imaging processing of all modulation types   │
│ Feedback     → Marbles learns from spatial processing output       │
│                                                                     │
│ System Evolution: Organic → Chaos → Patterns → Spatial           │
│                                                                     │
│ Pure Spatial Evolution ○─────────────────────────┼─── Evolving Stereo Output
└──────────────────────────────────────────────────────────────────┘
```

**Complete System Integration:**

| Layer | Function | Moon Phase Role | Musical Result |
|-------|----------|-----------------|----------------|
| **Organic (Ochd)** | Natural breathing | **Organic spatial breathing** | **Living spatial processing** |
| **Chaos (Wogglebug)** | Controlled uncertainty | **Chaos spatial processing** | **Unpredictable but structured space** |
| **Patterns (Marbles)** | Learning circuits | **Pattern-driven spatial control** | **Adaptive spatial relationships** |
| **Spatial (Moon Phase)** | Stereo processing | **System spatial brain** | **Advanced stereo imaging** |

**Expert System Design:**
- **Four-layer processing:** Organic breathing, controlled chaos, pattern learning, spatial processing
- **Moon Phase as spatial processor:** All modulation types processed through stereo imaging filter algorithms
- **Learning integration:** Marbles learns from spatial processing output through feedback
- **Emergent behavior:** System evolves increasingly sophisticated spatial relationships
- **Musical evolution:** Organic → Chaos → Patterns → Spatial = Pure evolved stereo space

**Advanced Performance:**
1. **Initialization:** Each module establishes its character and patterns
2. **Cross-modulation:** All modulation types begin affecting spatial processing
3. **Learning phase:** Marbles learns from stereo imaging relationships
4. **System evolution:** Entire ecosystem becomes increasingly musical and sophisticated
5. **Spatial transcendence:** Pure stereo space emerges from multi-layer modulation

**Philosophical Achievement:**
This represents **advanced spatial consciousness** - where organic breathing, controlled chaos, and pattern learning all become stereo imaging processing, computed through spatial algorithms into pure evolved musical space.

---

## Advanced Techniques

### **Audio Rate Modulation:**
- **Any CV input accepts audio rate signals** - creates complex harmonic interactions
- **Audio rate → ST IMAGER:** Creates metallic, ring-mod-like effects
- **Audio rate → SPAN:** Rapid frequency separation for digital-like artifacts
- **Audio rate → ST f:** Traditional audio-rate filter modulation

### **Stereo Input Processing:**
- **Patch stereo source** → **IN L + IN R**
- **Different processing** applied to each channel based on mode
- **Stereo imaging** affects the relationship between existing stereo channels
- **Creative stereo enhancement** of existing stereo material

### **Resonance Exploration:**
- **Q behavior changes dramatically** with ST IMAGER position
- **High Q + high ST IMAGER** = unique distortion and artifacts
- **Different modes** = different resonance characteristics
- **No self-oscillation** = focus on character and distortion instead

---

## Common Use Cases

### **Sound Design:**
- **Stereo texture creation** from mono sources
- **Unusual filtering effects** not possible with traditional filters
- **Creative processing** of drums, pads, and atmospheric sounds
- **Experimental processing** with audio-rate modulation

### **Mix Processing:**
- **Stereo enhancement** of mono sources
- **Creative frequency splitting** for unique panning effects
- **Mid/side-style processing** with additional filtering
- **Master bus processing** for overall stereo width

### **Live Performance:**
- **Real-time stereo manipulation** of any source
- **Mode switching** for instant texture changes
- **CV automation** of stereo parameters
- **Interactive filtering** with unique stereo behaviors

---

## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** Ochd LFOs → Moon Phase CV inputs for organic spatial parameter evolution
- **Make Noise Wogglebug:** Wogglebug chaos CVs → Moon Phase parameters for controlled chaos spatial processing
- **Mutable Marbles:** Marbles X/Y outputs → Moon Phase modulation for pattern-driven spatial control
- **4ms RCD v2:** RCD divisions → rhythmic spatial parameter changes and mode switching
- **Cre8audio Function Junction:** Function + Moon Phase = complete spatial ecosystem with organic/chaos/pattern modulation
- **Cross-Phase 2 Integration:** Moon Phase processes all Phase 2 modulation sources into unified stereo imaging relationships

### **Essential Partners:**
- **Stereo Mixers:** Essential for hearing the stereo processing and spatial effects created by Moon Phase
- **LFOs:** Animate the spatial parameters for evolving textures and breathing stereo movement
- **Envelope Generators:** Dynamic control over stereo imaging and spatial parameter changes
- **Audio Rate Sources:** For complex harmonic modulation and unique spatial artifacts

### **Advanced Spatial Integration:**
- **Reverbs/Delays:** Further enhance the stereo field Moon Phase creates for immersive spatial processing
- **Other Stereo Filters:** Chain for complex stereo processing and multi-stage spatial manipulation
- **Mid/Side Processors:** Complement Moon Phase's imaging capabilities with additional spatial control
- **Quantizers:** Make modulation musical when using complex CV sources with spatial processing

### **Essential Spatial Partners:**
- **Other Patching Panda modules:** Punch V3, Hatz - complete spatial synthesis and processing ecosystem
- **Stereo effects processors:** Combine with other spatial effects for complex stereo manipulation
- **Performance controllers:** Real-time control of multiple spatial parameters for live stereo imaging
- **Multi-spatial processing:** Use multiple inputs and modes for complex spatial voice processing

### **Advanced System Integration:**
- **Make Noise Maths:** Maths processes Moon Phase outputs for mathematical spatial relationships
- **Logic modules:** Combine spatial triggers with Boolean operations for complex mode switching
- **Sample & Hold:** Use spatial gates to trigger variation in other parts of the system
- **Phase 1 modules:** Moon Phase integrates perfectly with Plaits, Maths, and other core synthesis modules

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"I don't hear any stereo effect!"**
- Must use both L and R outputs to hear the stereo processing
- **Solution:** Connect both outputs to a stereo mixer or interface

**"The filter doesn't sound like other filters!"**
- Moon Phase is designed for sound design, not traditional filtering
- **Solution:** Approach it as a creative tool rather than a bread-and-butter filter

**"The resonance doesn't self-oscillate!"**
- This is intentional - resonance creates distortion and character instead
- **Solution:** Explore the unique resonance behavior rather than expecting oscillation

### **🎵 Pro Tips:**

**Mode Selection Strategy:**
- **Start with Mode 3 (LP + BP)** - most immediately musical
- **Mode 6 (LP + LP)** - closest to traditional stereo filtering
- **Modes 1 & 8** - most unusual and creative textures

**Stereo Imager Sweet Spots:**
- **9-11 o'clock:** Subtle stereo enhancement
- **12-2 o'clock:** Moderate width with unique resonance
- **3-5 o'clock:** Extreme width and phase shifting

**SPAN Usage:**
- **Small amounts (11-1 o'clock):** Subtle frequency separation
- **Extreme settings:** Dramatic frequency splits for creative effects
- **Audio rate modulation:** Creates rapid ping-pong effects

**CV Modulation Tips:**
- **Audio rate modulation** creates the most unique effects
- **Slow modulation** of stereo parameters creates evolving textures
- **Combined modulation** of multiple parameters for complex interactions
- **Envelope control** of ST IMAGER for dynamic width changes

---

## Why This Module Rocks

### **The Philosophy:**
Moon Phase challenges what a filter can be. Instead of just removing frequencies, it sculpts stereo space, creates unique textures, and processes sound in ways impossible with traditional filters.

### **The Innovation:**
- **Stereo imaging integrated with filtering** - not just parallel processing
- **8 different filter mode combinations** accessible via single button
- **Resonance behavior affected by stereo imaging** - creates unique interactions
- **Audio rate modulation of all parameters** - extreme sound design possibilities

### **The Practical Benefits:**
- **Mono to stereo conversion** with character and movement
- **Unique resonance behavior** that doesn't self-oscillate but adds character
- **Creative processing capabilities** beyond traditional filtering
- **Compact stereo filter solution** in 14HP

### **Perfect For:**
- **Sound designers:** Unique textures and effects not available elsewhere
- **Electronic producers:** Creative stereo processing and enhancement
- **Experimental musicians:** Breaking conventional filtering rules
- **Anyone wanting unique stereo effects:** Transform any mono source into wide stereo

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Moon Phase fundamentals:** Master 8-mode operation, stereo imaging, and spatial processing concepts
2. **Add organic breathing:** Integrate DivKid Ochd for natural spatial parameter evolution (see Ochd guide)
3. **Include controlled chaos:** Use Make Noise Wogglebug for chaotic spatial processing (see Wogglebug guide)
4. **Add pattern learning:** Apply Mutable Marbles for adaptive modulation of spatial parameters (see Marbles guide)
5. **Include rhythmic control:** Use 4ms RCD v2 for complex spatial triggering relationships (see RCD guide)
6. **Complete the ecosystem:** Add Cre8audio Function Junction for comprehensive spatial modulation processing (see Function Junction guide)

### **Cross-Module Learning Opportunities:**
- **Moon Phase + Ochd:** Learn organic modulation of spatial parameters for breathing stereo imaging
- **Moon Phase + Wogglebug:** Master chaos-driven spatial processing for controlled unpredictability in stereo
- **Moon Phase + Marbles:** Understand pattern-driven spatial control with adaptive stereo relationships
- **Moon Phase + RCD:** Explore rhythmic spatial parameter changes and complex algorithmic stereo processing
- **All Phase 2 + Moon Phase:** Build complete spatial ecosystems with multiple modulation types processing stereo space

### **Skill Development Milestones:**
- **Beginner:** Use different filter modes and basic stereo imaging for spatial processing
- **Intermediate:** Master CV modulation and parameter interaction for complex spatial relationships
- **Advanced:** Create Phase 2 integration patches with organic/chaos/pattern modulation of spatial parameters
- **Expert:** Design complete spatial ecosystems where Moon Phase serves as stereo imaging processor for multiple modulation types

### **Advanced Spatial Concepts:**
- **8-Mode Mastery:** Understand how different filter combinations create unique spatial characteristics
- **Stereo Imaging Theory:** Master the relationship between filtering and spatial positioning
- **Dynamic Spatial Processing:** Explore how modulation affects stereo width, separation, and character
- **System Integration:** Design patches where Moon Phase processes multiple modulation types simultaneously

### **Performance Applications:**
- **Live Spatial Control:** Real-time mode switching and parameter control for dynamic stereo imaging
- **Generative Spatial Systems:** Foundation for self-evolving stereo systems with organic/chaos/pattern modulation
- **Hybrid Processing:** Bridge between traditional filtering and spatial imaging processing
- **Educational Tool:** Learn stereo imaging and advanced spatial processing concepts

---

**Bottom Line:** Moon Phase isn't just a filter - it's a **stereo imaging processing brain** that transforms mono sources into evolving spatial landscapes through 8-mode filtering and stereo manipulation. Every patch teaches you something new about how spatial processing and stereo imaging really works. As the **spatial brain of Phase 2 ecosystems**, it transforms organic breathing, controlled chaos, and pattern learning into unified stereo space evolution.

---

*Visit [Patching Panda](http://patchingpanda.com/) for complete documentation and more innovative modules*