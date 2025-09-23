# Bizarre Jezabel Pkhia MK2 - Guide

**The Analog Stereo Filter Sculptor**

---

## Quick Start: Get Your First Filtered Sound in 5 Minutes

![Bizarre Jezabel Pkhia MK2](https://github.com/DGretta/Music/raw/main/modular/images/bizarre_jezabel/pkhia_mk2/front_panel.jpg)
*Bizarre Jezabel Pkhia MK2 - Dual analog stereo filter with pre-filter VCAs and multi-mode outputs*

**What is Pkhia MK2?** A dual/stereo analog multi-mode filter AND VCA module designed specifically for stereo processing. It combines two analog filters with pre-filter VCAs, allowing complete dynamic and frequency shaping in one module. Each channel offers multiple filter modes (low-pass, band-pass, high-pass) plus voltage-controlled amplification, and they can work independently as dual-mono or together as a true stereo processor with integrated VCA control.

**Key Specifications:**
- **Width:** 10HP
- **Depth:** 20mm  
- **Power:** 50mA @ +12V / 10mA @ -12V
- **Architecture:** Dual analog filters + Pre-filter VCAs
- **Filter Slope:** 12dB (2-pole)

### Your First Stereo Filter Sweep
1. **Connect audio source** → **i ●, i ●●** (or just i ● for mono-to-stereo)
2. **Connect Pkhia outputs** → **lp ●, lp ●●** to your mixer
3. **Turn up both CUTOFF knobs** to around 12 o'clock
4. **Connect LFO** → **cvf ●** for filter cutoff control
5. **Slowly adjust CUTOFF knobs** while audio plays to hear the filter response
6. **Try different filter outputs** (lp, bp, hp) to hear the different modes

**Congratulations!** You've just experienced high-quality analog stereo filtering with independent channel control!

---

## Essential Parameters (The Dual Filter System)

### **1. Dual Filter + VCA Architecture**
- **Two independent analog filters:** Left and Right channels with separate controls
- **Pre-filter VCAs:** Voltage-controlled amplifiers before each filter for complete signal control
- **Multi-mode outputs:** Low-pass (LP), Band-pass (BP), and High-pass (HP) per channel  
- **Stereo or dual-mono:** Use as true stereo processor or two separate mono filters
- **Mono-to-stereo:** Feed mono signal to Left, get processed stereo output
- **Independent cutoff control:** Each channel can have different cutoff frequencies
- **Independent VCA control:** Each channel can have different amplitude levels
- **Linked or separate CV:** Control both filters and VCAs together or independently

### **2. Filter Cutoff Controls**
- **Left CUTOFF knob:** Controls the cutoff frequency of the left filter
- **Right CUTOFF knob:** Controls the cutoff frequency of the right filter
- **Wide frequency range:** From deep bass filtering to bright treble emphasis
- **CV inputs:** Voltage control for dynamic filter movement
- **cvf ●●:** Controls both filters simultaneously when patched
- **cvf ●, cvf ●●:** Independent control of left and right cutoffs

### **3. Multi-Mode Filter Outputs**
- **lp (Low-Pass):** Classic filter mode - removes high frequencies above cutoff
- **bp (Band-Pass):** Removes both highs and lows, leaves middle frequencies
- **hp (High-Pass):** Removes low frequencies below cutoff, emphasizes highs
- **Six total outputs:** lp ●, bp ●, hp ● for left and lp ●●, bp ●●, hp ●● for right
- **Use multiple outputs:** Different modes simultaneously for complex processing
- **Analog character:** Warm, musical filtering with natural resonance

### **4. Signal Routing Flexibility**
- **Stereo processing:** i ● → Left filters, i ●● → Right filters
- **Dual-mono mode:** Two separate mono signals through independent filters
- **Mono-to-stereo:** Single input creates stereo output with different filtering
- **Parallel processing:** Use different filter modes on same signal
- **Creative routing:** Mix and match inputs/outputs for unique processing

### **5. Dual CV Control System (Filter + VCA)**
- **Filter CV Control:**
  - **cvf ●●:** Controls both filter cutoffs simultaneously 
  - **cvf ●, cvf ●●:** Left and right filter cutoffs controlled separately
- **VCA CV Control:**
  - **vca ●●:** Controls both VCA levels simultaneously
  - **vca ●, vca ●●:** Left and right VCA levels controlled separately
- **CV response:** Responsive to standard CV sources (envelopes, LFOs, sequencers)
- **Modulation friendly:** Excellent for LFO sweeps, envelope control, sequencing on both filters AND VCAs
- **Dual CV system:** Complete independent control over filtering AND amplitude per channel

### **6. Mystery Switch (Experimental Feature)**
- **Location:** Left side near the lp outputs
- **Symbol:** Solid gold circle overlapping a gold ring
- **Function:** Unknown - requires experimentation!
- **Possible functions:**
  - **Filter coupling:** Links left and right filter responses
  - **VCA bypass:** Bypasses VCA stage for direct filter output
  - **Stereo mode:** Changes stereo processing behavior
  - **Filter feedback:** Internal feedback routing between channels
  - **Resonance coupling:** Links Q control between channels
  - **Input routing:** Changes how i● and i●● inputs are processed
- **Experiment with:** Try switching during different patches to discover its effect
- **Boutique character:** Mystery features are common in hand-built European modules
- **Document your findings:** Note what changes when you flip the switch!

### **7. Analog Filter Character**
- **Warm analog tone:** Classic analog filter sound and behavior
- **Musical resonance:** Natural self-oscillation at high resonance settings
- **Smooth cutoff response:** Musical filter curves, not harsh digital steps
- **Boutique quality:** Hand-built European craftsmanship
- **Low noise:** Clean signal path with minimal added noise

---

## Beginner Patch Ideas

### **Patch 1: Classic Stereo Filter + VCA Sweep**
```
Stereo Source (Castor & Pollux, CS-L, Stereo Dipole) → Pkhia i ●, i ●●
LFO (Batumi, Ochd, Pamela's NEW) → cvf ●● (linked filter control)
Envelope/LFO (Maths, Function, Contour) → vca ●● (linked VCA control)
Output ← lp ●, lp ●● → Mixer (Mixup, Doepfer A-138)
```
**Setup:** Use lp outputs for classic low-pass filtering with VCA dynamics
**Controls:** LFO creates filter sweeps, envelope/LFO adds amplitude modulation
**Result:** Classic analog filter movement WITH dynamic VCA control on stereo material
**Performance:** Adjust cutoff knobs for sweep ranges, VCA knobs for amplitude control

### **Patch 2: Dual-Mono Processing with VCA Control**
```
Mono Source 1 (Any VCO, Plaits, Braids) → Pkhia i ●
Mono Source 2 (Different VCO, Rings, Elements) → Pkhia i ●●
Envelope 1 (Maths Ch1, Function, Contour) → cvf ● (left filter)
Envelope 2 (Maths Ch4, Different Function) → cvf ●● (right filter)
Envelope 3 (Quadrax Ch1, ADSR) → vca ● (left VCA)
Envelope 4 (Quadrax Ch2, Different ADSR) → vca ●● (right VCA)
Output ← Multiple filter modes → Mixer (Performance, Mixup)
```
**Setup:** Two different sources, independent filter AND VCA envelope control
**Result:** Two mono sources with separate filter AND VCA envelopes
**Creative:** Use different filter modes (lp vs hp) for contrast, different VCA envelopes for rhythm
**Performance:** Independent cutoff AND amplitude control for each voice

### **Patch 3: Parallel Multi-Mode Processing**
```
Mono Source (Any VCO, Plaits, Braids) → Multiple (Doepfer A-180, Links) → Split to:
  │─ Pkhia i ● (left channel)
  └─ Pkhia i ●● (right channel)
Output ← lp ● → Mixer Channel 1 (different filter modes)
Output ← hp ●● → Mixer Channel 2 (for frequency splitting)
```
**Setup:** Same source through different filter modes
**Result:** Parallel low-pass and high-pass processing
**Mix:** Blend lp and hp for frequency-splitting effects
**Advanced:** Try bp on one channel for three-way frequency split

### **Patch 4: Mono-to-Stereo Widening with VCA Animation**
```
Mono Source (Any VCO, Plaits, Braids) → Pkhia i ● only
LFO 1 (Batumi Ch1, Ochd) → cvf ● (slow rate)
LFO 2 (Batumi Ch2, Different Ochd) → cvf ●● (slightly faster)
LFO 3 (Quadrax, Maths) → vca ● (different phase)
LFO 4 (Different channel) → vca ●● (different phase)
Output ← lp ●, lp ●● → Stereo Mixer (Mixup, Performance)
```
**Setup:** Mono input, different LFO rates on each filter AND VCA
**Result:** Mono source becomes wide stereo with moving filters AND animated amplitude
**Timing:** Use related but different LFO speeds (2:3 ratio) for filter and VCA modulation
**Width:** Different cutoff AND amplitude movements create dynamic stereo interest

### **Patch 5: Intermediate - Performance Stereo Control**
```
   ┌─────────────────────┐      ┌─────────────────────────┐
   │   Cre8audio Cellz   │      │    Bizarre Jezabel      │
   │ (Touch Sequencer)   │      │      Pkhia mk2          │
   │                     │      │ (Stereo Filter Core)    │
   │                     │      │                         │
   │ CV Out 1  ○─────────┼──────┼─▶ Left CV Input         │
   │       ║             │      │                         │
   │ CV Out 2  ○─────────┼──────┼─▶ Right CV Input        │
   │       ║             │      │                         │
   │ Gate Out 1  ○───────┼──────┼─▶ 1+2 CV Input (linked) │
   │       ║             │      │                         │
   │ Gate Out 2  ○───────┼──────┼─▶ Performance Control   │
   │       ║             │      │                         │
   └───────║ ────────────┘      │ LP L&R Out  ○───────────┼─── Audio (Red)
           ║                    │ BP L&R Out  ○───────────┼─── Audio (Red)
   Audio (Red)║                 │ HP L&R Out  ○───────────┼─── Audio (Red)
           ║                    └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                     ║
   │ Stereo      │               Audio ║
   │ Audio       │                (Red)║
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
   │   Squarp Hermod+    │      │    Bizarre Jezabel      │
   │ (Sequencer Brain)   │      │      Pkhia mk2          │
   │                     │      │ (Stereo Filter Core)    │
   │                     │      │                         │
   │ CV Track 1  ○───────┼──────┼─▶ Left CV Input         │
   │       ║             │      │                         │
   │ CV Track 2  ○───────┼──────┼─▶ Right CV Input        │
   │       ║             │      │                         │
   │ Gate Track 1  ○─────┼──────┼─▶ 1+2 CV Input (quan.)  │
   │       ║             │      │                         │
   │ Gate Track 2  ○─────┼──────┼─▶ Sequence Control      │
   │       ║             │      │                         │
   │ Quantizer Out  ○────┼──────┼─▶ Musical CV Processing │
   │       ║             │      │                         │
   └───────║ ────────────┘      │ LP L&R Out  ○───────────┼─── Audio (Red)
           ║                    │ BP L&R Out  ○───────────┼─── Audio (Red)
   Audio (Red)║                 │ HP L&R Out  ○───────────┼─── Audio (Red)
           ║                    └─────────────────────────┘
           ▼                           ║
   ┌─────────────┐                     ║
   │ Stereo      │               Audio ║
   │ Audio       │                (Red)║
   │ Source      │────────────────────▼
   └─────────────┘           ┌──────────────────────────────┐
                             │   Sequenced Multi-Function   │
                             │     Filtering                │
                             │                              │
                             │ CV1: Sequenced Left Filter   │
                             │ CV2: Sequenced Right Filter  │
                             │ Gate1: Quantized Filter CV   │
                             │ Gate2: Sequence Control      │
                             │ Quantizer: Musical Filtering │
                             │                              │
                             │ Musical Sequence Control  ○──┼─── Sequenced Audio
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
│  Hermod+    │ │   Cellz     │ │   Maths     │ │   Pkhia mk2     │
│(Sequencer)  │ │(Touch Ctrl) │ │(Functions)  │ │(Stereo Filter)  │
│             │ │             │ │             │ │                 │
│ CV Track1○──┼─┼─CV1         │ │ Channel 1   │ │ Left CV   ◀─────┼── Expressive CV
│       ║     │ │        ○────┼─┼─Out         │ │       ║         │
│ CV Track2○──┼─┼─CV2         │ │             │ │ Right CV  ◀─────┼── Expressive CV
│       ║     │ │        ○────┼─┼─Channel 2   │ │       ║         │
│ Gate1    ○──┼─┼─Gate1       │ │ Out         │ │ 1+2 CV   ◀──────┼── Function CV
│       ║     │ │        ○────┼─┼─Channel 3   │ │       ║         │
│ Quantizer   │ │             │ │ Out         │ │ LP L&R Out      │
│ Out      ○──┼─┼─Gate2       │ │             │ │   ○─────────────┼─── Audio (Red)
│       ║     │ │        ○────┼─┼─Channel 4   │ │       ║         │
└─────────────┘ │ Touch Ctrl  │ │ Out         │ │ BP L&R Out      │
        ║       │             │ │             │ │   ○─────────────┼─── Audio (Red)
        ║       └─────────────┘ └─────────────┘ │ HP L&R Out      │
        ║                                       │   ○─────────────┼─── Audio (Red)
        ▼                                       └─────────────────┘
┌────────────────────────────────────────────────────────────────────┐
│           Complete Expressive Filter Ecosystem                     │
│                                                                    │
│ Sequenced Control + Touch Expression + Function Processing         │
│                                                                    │
│ Hermod+     → Multi-track sequencing + quantizer + timing brain    │
│ Cellz       → Touch interface + expressive human control           │
│ Maths       → Function generation + mathematical processing        │
│ Pkhia       → Boutique stereo filter core + analog character       │
│                                                                    │
│ Complete Expressive Filter Workstation (34HP total)                │
│                                                                    │
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
- **Six filter outputs total:** LP, BP, HP for both left and right channels
- **Four CV input types:** Filter cutoff CV, VCA level CV, both with 1+2 1&2 and individual inputs
- **Start with basics:** Use just filter CV first, then add VCA CV for dynamics
- **Patch organization:** Label filter CV vs VCA CV cables - easy to get confused

### **CV Input Behavior (Filter + VCA)**
- **cvf ●● controls both:** When patched, affects left AND right filter cutoffs
- **vca ●● controls both:** When patched, affects left AND right VCA levels
- **Individual filter inputs:** cvf ●, cvf ●● work independently
- **Individual VCA inputs:** vca ●, vca ●● work independently
- **Normalling behavior:** Check if individual inputs override cvf ●●/vca ●● inputs
- **CV amount:** May need attenuation for subtle filter and VCA effects
- **Polarity:** Some CV sources may need inversion for desired effect

### **Stereo vs Dual-Mono Mindset**
- **Two different uses:** Stereo processing vs two separate mono processors
- **Input requirements:** Stereo needs L&R inputs, dual-mono can use either
- **Output expectations:** Don't expect automatic stereo from mono input
- **Routing flexibility:** Can be used in ways not immediately obvious
- **Experimentation required:** Try different input/output combinations

### **Mystery Switch Experimentation**
- **Unknown function:** The switch (solid circle/ring symbol) does something - but what?
- **Try both positions:** Test the switch in different positions during patches
- **Listen carefully:** Note any changes in sound, routing, or behavior
- **Document findings:** Keep notes on what the switch affects
- **Common possibilities:** Filter coupling, VCA bypass, stereo modes, input routing
- **Boutique charm:** Mystery features add character and discovery to boutique modules
- **Community knowledge:** Share findings with other Pkhia users online

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
