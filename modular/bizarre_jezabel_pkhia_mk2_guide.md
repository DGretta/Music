# Bizarre Jezabel Pkhia MK2 - Guide

**The Analog Stereo Filter Sculptor**

---

## Quick Start: Get Your First Filtered Sound in 5 Minutes

**What is Pkhia MK2?** A dual/stereo analog multi-mode filter AND VCA module designed specifically for stereo processing. It combines two analog filters with pre-filter VCAs, allowing complete dynamic and frequency shaping in one module. Each channel offers multiple filter modes (low-pass, band-pass, high-pass) plus voltage-controlled amplification, and they can work independently as dual-mono or together as a true stereo processor with integrated VCA control.

**Key Specifications:**
- **Width:** 10HP
- **Depth:** 20mm  
- **Power:** 50mA @ +12V / 10mA @ -12V
- **Architecture:** Dual analog filters + Pre-filter VCAs
- **Filter Slope:** 12dB (2-pole)

### Your First Stereo Filter Sweep
1. **Connect audio source** → **i ●** and **i ●●** inputs (or just i ● for mono-to-stereo)
2. **Connect Pkhia outputs** → **lp** outputs to your mixer
3. **Turn up both CVF knobs** to around 12 o'clock
4. **Connect LFO** → **cvf** input for filter cutoff modulation
5. **Slowly adjust CVF knobs** while audio plays to hear the filter response
6. **Try different filter outputs** (lp, bp, hp) to hear the different modes

**Congratulations!** You've just experienced high-quality analog stereo filtering with independent channel control!

---

## Essential Parameters (The Dual Filter System)

### **1. Dual Filter + VCA Architecture**
- **Two independent analog filters:** Left (●) and Right (●●) channels with separate controls
- **Pre-filter VCAs:** Voltage-controlled amplifiers before each filter for complete signal control
- **Multi-mode outputs:** Low-pass (lp), Band-pass (bp), and High-pass (hp) per channel  
- **Stereo or dual-mono:** Use as true stereo processor or two separate mono filters
- **Mono-to-stereo:** Feed mono signal to i ●, get processed stereo output
- **Independent cutoff control:** Each channel (●/●●) can have different cutoff frequencies
- **Independent VCA control:** Each channel (●/●●) can have different amplitude levels
- **Gold circle system:** ● = left channel, ●● = right channel for all controls and jacks

### **2. Filter Cutoff Controls**
- **CVF ● knob:** Controls the cutoff frequency of the left filter
- **CVF ●● knob:** Controls the cutoff frequency of the right filter
- **Q knob (center):** Controls resonance for both filters
- **Wide frequency range:** From deep bass filtering to bright treble emphasis
- **cvf CV inputs:** Voltage control for dynamic filter movement
- **cvf ● input:** Controls left filter cutoff
- **cvf ●● input:** Controls right filter cutoff

### **3. Multi-Mode Filter Outputs**
- **lp (Low-Pass):** Classic filter mode - removes high frequencies above cutoff
- **bp (Band-Pass):** Removes both highs and lows, leaves middle frequencies
- **hp (High-Pass):** Removes low frequencies below cutoff, emphasizes highs
- **Six total outputs:** lp, bp, hp for both left (●) and right (●●) channels
- **Use multiple outputs:** Different modes simultaneously for complex processing
- **Analog character:** Warm, musical filtering with natural resonance

### **4. VCA Section**
- **att ● knob:** Controls the VCA level/attenuation for the left channel
- **att ●● knob:** Controls the VCA level/attenuation for the right channel
- **vca CV inputs:** Voltage control for dynamic amplitude control
- **vca ● input:** Controls left VCA level
- **vca ●● input:** Controls right VCA level
- **Pre-filter VCA:** VCA processing happens before the filter stage
- **Independent control:** Each channel can have different VCA responses

### **5. Signal Routing Flexibility**
- **Stereo processing:** i ● input → Left filters, i ●● input → Right filters
- **Dual-mono mode:** Two separate mono signals through independent filters
- **Mono-to-stereo:** Single input to i ● creates stereo output with different filtering
- **Parallel processing:** Use different filter modes on same signal
- **Creative routing:** Mix and match inputs/outputs for unique processing

### **6. Analog Filter Character**
- **Warm analog tone:** Classic analog filter sound and behavior
- **Musical resonance:** Natural self-oscillation at high resonance settings
- **Smooth cutoff response:** Musical filter curves, not harsh digital steps
- **Boutique quality:** Hand-built European craftsmanship
- **Low noise:** Clean signal path with minimal added noise

---

## Beginner Patch Ideas

### **Patch 1: Classic Stereo Filter + VCA Sweep**
```
[Stereo source] ──→ [Pkhia i ● and i ●● inputs]
[LFO 1] ──→ [cvf ● input] (controls left filter cutoff)
[LFO 2] ──→ [cvf ●● input] (controls right filter cutoff)
[Envelope] ──→ [vca inputs] (controls VCA levels)
[Pkhia lp ● and lp ●●] ──→ [Stereo mixer/output]
```
**Setup:** Use lp outputs for classic low-pass filtering with VCA dynamics
**Controls:** LFOs create filter sweeps, Envelope adds amplitude modulation
**Result:** Classic analog filter movement WITH dynamic VCA control on stereo material
**Performance:** Adjust CVF knobs for sweep ranges, att knobs for VCA levels

### **Patch 2: Dual-Mono Processing with VCA Control**
```
[Mono source 1] ──→ [Pkhia i ● input]
[Mono source 2] ──→ [Pkhia i ●● input]  
[Envelope 1] ──→ [cvf ● input]
[Envelope 2] ──→ [cvf ●● input]
[Envelope 3] ──→ [vca ● input]
[Envelope 4] ──→ [vca ●● input]
```
**Setup:** Two different sources, independent filter AND VCA envelope control
**Result:** Two mono sources with separate filter AND VCA envelopes
**Creative:** Use different filter modes (lp vs hp) for contrast, different VCA envelopes for rhythm
**Performance:** Independent CVF AND att control for each voice

### **Patch 3: Parallel Multi-Mode Processing**
```
[Mono source] ──→ [Multiple/Splitter] ──┬──→ [Pkhia Left input]
                                        └──→ [Pkhia Right input]
[Pkhia LP Left] ──→ [Mixer channel 1]
[Pkhia HP Right] ──→ [Mixer channel 2]
```
**Setup:** Same source through different filter modes
**Result:** Parallel low-pass and high-pass processing
**Mix:** Blend LP and HP for frequency-splitting effects
**Advanced:** Try BP on one channel for three-way frequency split

### **Patch 4: Mono-to-Stereo Widening with VCA Animation**
```
[Mono source] ──→ [Pkhia Left input only]
[LFO 1] ──→ [Left Filter CV input] (slow)
[LFO 2] ──→ [Right Filter CV input] (slightly faster)
[LFO 3] ──→ [Left VCA CV input] (different phase)
[LFO 4] ──→ [Right VCA CV input] (different phase)
[Pkhia LP L&R] ──→ [Stereo output]
```
**Setup:** Mono input, different LFO rates on each filter AND VCA
**Result:** Mono source becomes wide stereo with moving filters AND animated amplitude
**Timing:** Use related but different LFO speeds (2:3 ratio) for filter and VCA modulation
**Width:** Different cutoff AND amplitude movements create dynamic stereo interest

### **Patch 5: Intermediate - Performance Stereo Control**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Cre8audio Cellz    │      │    Bizarre Jezabel     │
   │ (Touch Sequencer)   │      │      Pkhia mk2         │
   │                    │      │ (Stereo Filter Core)  │
   │                    │      │                         │
   │ CV Out 1 ○─────────┼──────┼─▶ Left CV Input        │
   │       ║            │      │                         │
   │ CV Out 2 ○─────────┼──────┼─▶ Right CV Input       │
   │       ║            │      │                         │
   │ Gate Out 1 ○───────┼──────┼─▶ 1+2 CV Input (linked) │
   │       ║            │      │                         │
   │ Gate Out 2 ○───────┼──────┼─▶ Performance Control   │
   │       ║            │      │                         │
   └───────║────────────┘      │ LP L&R Out ○───────────┼─── Audio (Red)
           ║                   │ BP L&R Out ○───────────┼─── Audio (Red)
   Audio (Red)║                 │ HP L&R Out ○───────────┼─── Audio (Red)
           ║                  └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                    ║
   │ Stereo      │             Audio ║
   │ Audio       │              (Red)║
   │ Source      │────────────────────▼
   └─────────────┘           ┌──────────────────────────────┐
                             │   Performance Stereo         │
                             │     Control                  │
                             │                              │
                             │ CV1: Touch Left Filter       │
│ CV2: Touch Right Filter      │
│ CV3: Touch Left VCA          │
│ CV4: Touch Right VCA         │
│ Gate1: Linked Filter Control │
│ Gate2: Performance Triggers  │
                             │                              │
                             │ Expressive Stereo Control ○──┼─── Processed Audio
                             └──────────────────────────────┘
```

| Touch + Filter Chain | Function | Purpose | Performance Integration |
|---------------------|----------|---------|------------------------|
| **Cellz CV1 → Left Filter CV** | Touch-controlled left filter | **Expressive left channel filter control** | **Touch interface creates expressive stereo filter control** |
| **Cellz CV2 → Right Filter CV** | Touch-controlled right filter | **Expressive right channel filter control** | **Independent touch control of stereo filter channels** |
| **Cellz CV3 → Left VCA CV** | Touch-controlled left VCA | **Expressive left channel amplitude control** | **Touch interface creates expressive stereo VCA control** |
| **Cellz CV4 → Right VCA CV** | Touch-controlled right VCA | **Expressive right channel amplitude control** | **Independent touch control of stereo VCA channels** |
| **Cellz Gate1 → 1+2 1&2 Filter CV** | Linked filter control | **Touch-triggered filter sweeps** | **Touch gates create dramatic stereo filter sweeps** |
| **Cellz Gate2 → 1+2 1&2 VCA CV** | Linked VCA control | **Touch-triggered amplitude control** | **Touch gates create dramatic stereo VCA dynamics** |

**Module Settings:**
- **Cellz:** Touch sequencer generates expressive CV and gate patterns for real-time filter control
- **Pkhia:** Touch-controlled signals create responsive stereo filter processing with human expression
- **Performance control:** Touch interface provides immediate, expressive control over stereo filter characteristics
- **Result:** Boutique stereo filter processing with touch-based expressive control and performance flexibility

**Learning Objectives:**
- **Touch + Filter integration:** Expressive touch control applied to boutique analog stereo filtering
- **Performance filtering:** Create touch-responsive stereo filter processing for live performance
- **Expressive stereo control:** Understand how human touch enhances stereo filter character
- **System expression:** Entire stereo filter system responds to human touch and expression

**Alternative Performance Sources:**
- **Instead of Cellz:** Try **16n faderbank** for multi-channel stereo filter control, or **Tetrapad** for pressure-sensitive filter control
- **Instead of touch focus:** Try **joystick modules** like **Joystick** for XY stereo filter control
- **Budget alternatives:** **2HP Brst + 2HP Clk** provides manual trigger control for filter performance
- **Different character:** **Keith McMillen QuNexus** gives keyboard-based expressive filter control vs Cellz touch interface

### **Patch 6: Advanced - Sequenced Multi-Function Filtering**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Squarp Hermod+    │      │    Bizarre Jezabel     │
   │ (Sequencer Brain)   │      │      Pkhia mk2         │
   │                    │      │ (Stereo Filter Core)  │
   │                    │      │                         │
   │ CV Track 1 ○───────┼──────┼─▶ Left CV Input        │
   │       ║            │      │                         │
   │ CV Track 2 ○───────┼──────┼─▶ Right CV Input       │
   │       ║            │      │                         │
   │ Gate Track 1 ○─────┼──────┼─▶ 1+2 CV Input (quan.) │
   │       ║            │      │                         │
   │ Gate Track 2 ○─────┼──────┼─▶ Sequence Control     │
   │       ║            │      │                         │
   │ Quantizer Out ○────┼──────┼─▶ Musical CV Processing │
   │       ║            │      │                         │
   └───────║────────────┘      │ LP L&R Out ○───────────┼─── Audio (Red)
           ║                   │ BP L&R Out ○───────────┼─── Audio (Red)
   Audio (Red)║                 │ HP L&R Out ○───────────┼─── Audio (Red)
           ║                  └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                    ║
   │ Stereo      │             Audio ║
   │ Audio       │              (Red)║
   │ Source      │────────────────────▼
   └─────────────┘           ┌──────────────────────────────┐
                             │   Sequenced Multi-Function    │
                             │     Filtering                │
                             │                              │
                             │ CV1: Sequenced Left Filter   │
                             │ CV2: Sequenced Right Filter  │
                             │ Gate1: Quantized Filter CV   │
                             │ Gate2: Sequence Control      │
                             │ Quantizer: Musical Filtering │
                             │                              │
                             │ Musical Sequence Control ○──┼─── Sequenced Audio
                             └──────────────────────────────┘
```

| Sequencer + Filter Chain | Function | Purpose | Musical Integration |
|--------------------------|----------|---------|--------------------|
| **Hermod+ CV1 → Left Filter CV** | Sequenced left filter control | **Musical left channel filter sequences** | **Sequencer provides musical filter control for left channel** |
| **Hermod+ CV2 → Right Filter CV** | Sequenced right filter control | **Musical right channel filter sequences** | **Independent sequenced control of right channel filtering** |
| **Hermod+ CV3 → Left VCA CV** | Sequenced left VCA control | **Musical left channel amplitude sequences** | **Sequencer provides musical VCA control for left channel** |
| **Hermod+ CV4 → Right VCA CV** | Sequenced right VCA control | **Musical right channel amplitude sequences** | **Independent sequenced control of right channel VCA** |
| **Hermod+ Gate1 → 1+2 1&2 Filter CV** | Quantized filter control | **Musical filter sequences** | **Quantizer ensures musical filter frequency relationships** |
| **Hermod+ Gate2 → 1+2 1&2 VCA CV** | Quantized VCA control | **Musical VCA sequences** | **Quantizer ensures musical VCA amplitude relationships** |
| **Hermod+ Quantizer → Processing** | Musical CV processing | **Musical filter tracking** | **Built-in quantizer provides musical filter frequency control** |

**Module Settings:**
- **Hermod+:** Multi-track sequencer + quantizer creates musical stereo filter sequences with built-in quantization
- **Pkhia:** Sequenced signals create musical stereo filter processing with precise timing and musicality
- **Musical sequencing:** Quantizer ensures filter frequencies track musical scales and intervals
- **Result:** Boutique stereo filter processing with sequenced musical control and quantized frequency relationships

**Learning Objectives:**
- **Sequencer + Filter integration:** Multi-track sequencing applied to boutique analog stereo filtering
- **Musical filtering:** Create sequenced stereo filter processing that follows musical relationships
- **Quantized filter control:** Understand how quantization enhances stereo filter musicality
- **Advanced sequencing:** Complex stereo filter sequences with built-in musical processing

### **Patch 7: Expert - Complete Expressive Filter Ecosystem**
```
┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│   Squarp    │ │  Cre8audio  │ │ Make Noise  │ │ Bizarre Jezabel │
│  Hermod+    │ │   Cellz     │ │   Maths     │ │   Pkhia mk2   │
│(Sequencer)  │ │(Touch Ctrl) │ │(Functions) │ │(Stereo Filter) │
│             │ │             │ │             │ │                 │
│ CV Track1○──┼─┼─CV1        │ │ Channel 1   │ │ Left CV ◀─────┼── Expressive CV
│       ║     │ │       ○────┼─┼─Out        │ │       ║         │
│ CV Track2○──┼─┼─CV2        │ │             │ │ Right CV◀─────┼── Expressive CV
│       ║     │ │       ○────┼─┼─Channel 2   │ │       ║         │
│ Gate1   ○──┼─┼─Gate1      │ │ Out        │ │ 1+2 CV◀──────┼── Function CV
│       ║     │ │       ○────┼─┼─Channel 3   │ │       ║         │
│ Quantizer    │ │             │ │ Out        │ │ LP L&R Out     │
│ Out     ○──┼─┼─Gate2      │ │             │ │ ○─────────────┼─── Audio (Red)
│       ║     │ │       ○────┼─┼─Channel 4   │ │       ║         │
└─────────────┘ │ Touch Ctrl  │ │ Out        │ │ BP L&R Out     │
        ║       │             │ │             │ │ ○─────────────┼─── Audio (Red)
        ║       └─────────────┘ └─────────────┘ │ HP L&R Out     │
        ║                                       │ ○─────────────┼─── Audio (Red)
        ▼                                       └─────────────────┘
┌────────────────────────────────────────────────────────────────────┐
│           Complete Expressive Filter Ecosystem                         │
│                                                                        │
│ Sequenced Control + Touch Expression + Function Processing            │
│                                                                        │
│ Hermod+     → Multi-track sequencing + quantizer + timing brain       │
│ Cellz       → Touch interface + expressive human control              │
│ Maths       → Function generation + mathematical processing           │
│ Pkhia       → Boutique stereo filter core + analog character          │
│                                                                        │
│ Complete Expressive Filter Workstation (34HP total)                   │
│                                                                        │
│ Expressive Stereo Filter Control ○────────────────┼─── Complete Output
└────────────────────────────────────────────────────────────────────┘
```

**Complete Expressive Filter Integration:**

| Module | Primary Function | Filter System Role | Expressive Integration |
|--------|------------------|--------------------|-----------------------|
| **Hermod+ (16HP)** | Multi-track sequencer | **Sequenced filter brain + quantizer** | **Provides musical sequences and quantized control** |
| **Cellz (8HP)** | Touch sequencer | **Expressive touch interface** | **Human touch creates expressive filter control** |
| **Maths (4HP)** | Function generator | **Mathematical filter processing** | **Function generation enhances expressive control** |
| **Pkhia mk2 (6HP)** | Stereo filter | **Boutique analog filter core** | **European craftsmanship with expressive control** |

**Complete Expressive System Design:**
- **Hermod+ as sequence brain:** Multi-track sequencer + quantizer provides musical filter sequences with precise timing
- **Cellz as expression interface:** Touch control provides real-time human expression over stereo filter parameters
- **Maths as function processor:** Mathematical functions enhance and process expressive control signals
- **Pkhia as analog core:** Boutique European stereo filter provides warm analog character with multi-mode processing
- **Total ecosystem:** 34HP complete expressive filter workstation combining sequencing, touch, functions, and boutique filtering

**Performance Applications:**
1. **Sequenced expressive filtering:** Hermod+ sequences combined with Cellz touch for hybrid sequenced/expressive control
2. **Touch-responsive sequences:** Cellz touch modifies Hermod+ sequences in real-time for dynamic performance
3. **Mathematical expression enhancement:** Maths processes touch control for complex expressive relationships
4. **Boutique analog processing:** All digital control feeds European analog filter for warm, musical character
5. **Complete filter performance:** Sequence, touch, process, and filter in one integrated expressive ecosystem

**Why This Complete Ecosystem Works:**
- **Leverages multi-function capabilities:** Hermod+ serves as sequencer + quantizer + timing brain simultaneously
- **Expression + Sequencing + Functions:** Three different approaches combine for complete expressive filter control
- **Boutique analog character:** Digital control enhances but doesn't replace European analog filter warmth
- **Performance flexibility:** Touch interface allows real-time modification of sequenced filter patterns
- **Combinable with other guides:** Different approach from other guide ecosystems allows simultaneous patch usage

**Expert Expressive Performance:**
1. **Initialization:** Set Hermod+ sequences, configure Cellz touch interface, prepare Maths functions
2. **Expressive sequences:** Hermod+ provides musical foundation → Cellz adds real-time expression → Maths enhances control → Pkhia analog processing
3. **Touch modification:** Use Cellz to modify running sequences, creating dynamic expressive filter performance
4. **Function enhancement:** Maths processes expressive signals for complex mathematical filter relationships
5. **Filter mastery:** Complete ecosystem generates expressive stereo filtering with boutique European analog character

**Philosophical Achievement:**
This represents **complete expressive filter mastery** - where musical sequencing, human touch expression, and mathematical function processing all serve the boutique European analog filter, creating a complete workstation that bridges digital precision with analog warmth and human expression.

---

## Common Use Cases

**🎵 **Stereo Mix Processing:** Filter entire stereo mixes or submixes**
**🎹 **Synth Voice Filtering:** Classic subtractive synthesis filtering**  
**🥁 **Drum Processing:** Separate filtering for kick/snare vs hi-hats**
**🌊 **Ambient Processing:** Stereo filter sweeps for atmospheric sounds**
**🎛️ **Frequency Splitting:** Use different modes for multi-band processing**
**🔊 **Mix Enhancement:** Surgical frequency shaping of stereo sources**
**⚡ **Dynamic Filtering:** CV-controlled movement for evolving sounds**
**🎭 **Creative Effects:** Unusual routing for unique sonic textures**

---

## Beginner "Gotchas"

### **Version Confusion - MK2 vs Original**
- **Different versions exist:** Pkhia, Pkhia MK2, Pkhi, etc.
- **Feature differences:** Original has VCAs, MK2 may be filter-only
- **Check your version:** Features described may vary by model
- **ModularGrid listings:** Multiple entries for different versions
- **Manual important:** Refer to documentation for your specific version

### **Filter + VCA Architecture Confusion**
- **Dual architecture:** Both FILTER and VCA sections with separate CV controls
- **Six filter outputs total:** lp, bp, hp for both left (●) and right (●●) channels
- **Four CV input types:** cvf (filter CV), vca (VCA CV), both for left (●) and right (●●)
- **Start with basics:** Use just cvf inputs first, then add vca inputs for dynamics
- **Patch organization:** Label cvf vs vca cables - easy to get confused

### **CV Input Behavior (Filter + VCA)**
- **cvf ● controls left:** When patched, affects left filter cutoff
- **cvf ●● controls right:** When patched, affects right filter cutoff
- **vca ● controls left:** When patched, affects left VCA level
- **vca ●● controls right:** When patched, affects right VCA level
- **Independent operation:** Each input works independently
- **CV amount:** May need attenuation for subtle filter and VCA effects
- **Polarity:** Some CV sources may need inversion for desired effect

### **Stereo vs Dual-Mono Mindset**
- **Two different uses:** Stereo processing vs two separate mono processors
- **Input requirements:** Stereo needs L&R inputs, dual-mono can use either
- **Output expectations:** Don't expect automatic stereo from mono input
- **Routing flexibility:** Can be used in ways not immediately obvious
- **Experimentation required:** Try different input/output combinations

### **Boutique Module Characteristics**
- **Small company:** Bizarre Jezabel is a boutique European manufacturer
- **Limited documentation:** May have less online information than major brands
- **Build quality:** Hand-built modules with attention to analog detail
- **Availability:** May be harder to find than mainstream modules
- **Support:** Contact manufacturer directly for technical questions

---

## Next Steps

1. **Master each filter mode individually** - understand LP, BP, and HP responses
2. **Explore CV modulation** - try different LFO speeds and envelope shapes
3. **Experiment with routing** - stereo vs dual-mono vs mono-to-stereo
4. **Practice frequency splitting** - use different modes for multi-band effects
5. **Try parallel processing** - same source through multiple filter modes
6. **Study analog filter theory** - understand cutoff, resonance, and filter types

**Remember:** Pkhia MK2 rewards experimentation with routing - try unconventional input/output combinations!

---

## Pairs Well With

### **Multi-Function Module Synergies (Expressive Filter Systems):**
- **Cre8audio Cellz:** Touch sequencer + performance interface → Pkhia for expressive stereo filter control with human touch
- **Squarp Hermod+:** Multi-track sequencer + quantizer → Pkhia for musical stereo filter sequences with precise timing
- **Make Noise Maths:** Function generation + mathematical processing → Pkhia for enhanced expressive filter relationships
- **16n Faderbank:** Multi-channel CV control → Pkhia for multi-parameter stereo filter performance control
- **Tetrapad:** Pressure-sensitive control → Pkhia for pressure-responsive expressive stereo filtering
- **Cross-Multi-Function Integration:** Pkhia serves as boutique analog filter core for complete expressive performance systems

### **Perfect Partners for Beginners:**
- **LFOs (Batumi, Ochd):** Essential for creating filter movement and stereo sweeps
- **Envelope Generators (Maths, Function):** Dynamic stereo filter control for synthesis voices
- **VCAs (Veils, 2HP VCA):** Control dynamics before or after stereo filtering
- **Mixers:** Blend different filter outputs (LP, BP, HP) for complex frequency shaping

### **Next-Level Combinations:**
- **Oscillators (any analog VCO):** Classic subtractive synthesis with boutique analog stereo filtering
- **Attenuverters:** Fine-control the CV amounts for subtle stereo modulation
- **Sample & Hold:** Create stepped filter sweeps and randomized stereo cutoffs
- **Multiple/Splitters:** Route single sources to both channels for parallel stereo processing

### **Advanced Stereo Integration:**
- **Sequencers:** Automate stereo cutoff frequencies for rhythmic filter patterns
- **Complex modulation (Marbles):** Random and correlated stereo filter movements
- **Other filters:** Chain multiple filters for steep roll-offs or complex stereo responses
- **Effects processors:** Filter before reverb/delay for different spatial treatments

### **Essential Performance Partners:**
- **Touch interfaces (Cellz, Tetrapad):** Real-time expressive control of stereo filter parameters
- **Performance controllers (16n, QuNexus):** Multi-parameter control for live stereo filter performance
- **Expression pedals:** Foot control for hands-free stereo filter expression during performance
- **MIDI controllers:** External control from DAW or hardware for integrated stereo filter automation

### **Advanced System Integration:**
- **Complete expressive workstations:** Pkhia + multi-function modules create complete performance filter systems
- **Boutique analog chains:** European analog modules create warm, musical stereo processing chains
- **Hybrid digital/analog systems:** Digital control with analog warmth for best of both worlds
- **Cross-system integration:** Pkhia integrates with other synthesis systems while maintaining boutique character

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with Pkhia fundamentals:** Master dual filter architecture, stereo processing, and boutique European analog character
2. **Add expressive touch control:** Integrate Cre8audio Cellz for touch-responsive stereo filter performance (see Cellz guide)
3. **Include musical sequencing:** Use Squarp Hermod+ for musical stereo filter sequences with quantization (see Hermod+ guide)
4. **Add function enhancement:** Apply Make Noise Maths for mathematical processing of expressive control signals (see Maths guide)
5. **Include performance interfaces:** Use 16n Faderbank or Tetrapad for multi-parameter performance control
6. **Complete the ecosystem:** Add all multi-function modules for complete expressive filter performance workstation

### **Cross-Module Learning Opportunities:**
- **Pkhia + Cellz:** Learn expressive stereo filtering through touch-responsive performance control
- **Pkhia + Hermod+:** Master musical stereo filter sequencing with quantized frequency relationships
- **Pkhia + Maths:** Understand mathematical enhancement of expressive filter control signals
- **Pkhia + Performance Controllers:** Explore multi-parameter control for live stereo filter performance
- **All Multi-Function + Pkhia:** Build complete expressive filter ecosystems with boutique European character

### **Skill Development Milestones:**
- **Beginner:** Use Pkhia for basic stereo filtering and multi-mode processing techniques
- **Intermediate:** Master expressive stereo filtering with touch-based performance control
- **Advanced:** Create musical stereo filter sequences with quantized frequency relationships and mathematical enhancement
- **Expert:** Design complete expressive filter systems where Pkhia serves as boutique analog core for performance ecosystems

### **Advanced Expressive Filter Concepts:**
- **Boutique European Character:** Understand analog warmth and musical filtering characteristics of European craftsmanship
- **Expressive Touch Control:** Master touch-responsive stereo filter performance with real-time human expression
- **Musical Filter Sequencing:** Explore quantized stereo filter sequences that follow musical scales and intervals
- **Complete Performance Ecosystems:** Design systems where expressive control serves boutique analog stereo character

### **Performance Applications:**
- **Live Expressive Control:** Real-time Pkhia stereo filter control for dynamic performance with touch and expression
- **Musical Filter Performance:** Foundation for sequenced stereo filtering with musical processing and quantized control
- **Boutique Analog Processing:** Bridge between digital control precision and European analog stereo character
- **Educational Tool:** Learn expressive filter concepts through hands-on boutique analog interaction

---

**Bottom Line:** Pkhia MK2 isn't just a stereo filter - it's a **boutique expressive filter processor** that transforms touch expression, musical sequencing, and mathematical control into warm European analog stereo character. Every patch teaches you something new about how expressive stereo filtering really works. As the **analog filter core of expressive performance ecosystems**, it transforms multi-function control into unified boutique stereo evolution.

---

*Visit [Bizarre Jezabel](https://bizarrejezabel.com/) for complete documentation and the full boutique European module collection*