# Optimal Eurorack System Layout

## Layout Philosophy

**Cases arranged bottom to top:** Behringer Go → Mantis → NiftyCase #1 → NiftyCase #2

**Design Principles:**
- **Core synthesis** in middle Mantis case (most accessible)
- **Sequencing & I/O** in bottom Go case (less frequent patching)  
- **Effects & utilities** in top Nifty cases (final signal path)
- **Power distribution** respects zone limits and high-power module placement
- **Ergonomic patching** with related modules close together

---

## **BOTTOM: Behringer Eurorack Go Case (280 HP)**
*Sequencing, I/O, and Digital Processing Hub*

### Row 1 (140 HP) - Sequencing & Control
| Module | HP | Power | Notes |
|--------|----|----- |-------|
| **Squarp Hermod +** | 26 | 400mA | Master sequencer - left side for easy access |
| **Qu-Bit Bloom** | 16 | 82mA | Fractal sequencer - pairs with Hermod |
| **Make Noise Pressure Points** | 20 | 20mA | Touch sequencer/controller |
| **Musicthing Turing Machine** | 10 | 40mA | Random sequencer |
| **Musicthing Volts** | 4 | 0mA | Turing expander (adjacent) |
| **Musicthing Pulses** | 4 | 10mA | Turing expander (adjacent) |
| **vpme.de Euclidian Circles** | 10 | 0mA | Rhythm generator |
| **4ms Rotating Clock Divider** | 4 | 33mA | Clock utilities |
| **4ms Shuffling Clock Multiplier** | 12 | 52mA | Clock processing |
| **Expert Sleepers Disting mk4** | 4 | 51mA | Multi-function utility |
| **Cre8audio Cellz** | 12 | 3mA | Touch controller |
| **Blue Lantern CMOS Party** | 4 | 23mA | Logic processing |
| **Mutable Links** | 4 | 15mA | Utility links |
| **2hp Mult** | 2 | 0mA | Quick mult |
| **Intellijel Mult** | 2 | 0mA | Passive mult |
| **Intellijel Buff Mult** | 2 | 4mA | Buffered mult |
| **Remaining** | 8 | | Future expansion |

**Row 1 Power: ~733mA (+12V) - Well within 3A limit**

### Row 2 (140 HP) - I/O & Digital Processing
| Module | HP | Power | Notes |
|--------|----|----- |-------|
| **4ms MetaModule** | 26 | 290mA | DSP computer - left for easy SD card access |
| **4ms metaAIO** | 6 | 140mA | MetaModule I/O (adjacent) |
| **Instruo Arbhar** | 18 | 250mA | Granular processor |
| **Arbhar Expansion Pack** | 2 | 0mA | USB expander (adjacent) |
| **Arbhar Expander** | 2 | 0mA | CV expander (adjacent) |
| **4ms Listen IO** | 6 | 62mA | External I/O |
| **4ms Percussion Interface** | 4 | 69mA | Audio-to-CV |
| **4ms Percussion Expander** | 4 | 35mA | Percussion expander (adjacent) |
| **DivKid ochd** | 4 | 80mA | 8x LFO |
| **DivKid ochd expander** | 4 | 5mA | ochd expander (adjacent) |
| **Mordax DATA** | 16 | 100mA | Oscilloscope/analyzer |
| **Remaining** | 48 | | Future I/O expansion |

**Row 2 Power: ~1031mA (+12V) - Well within 3A limit**

---

## **MIDDLE: Tiptop Mantis Case (208 HP)**
*Core Synthesis Section - Most Accessible*

### **Zone Distribution Strategy (1A per zone):**
- **Zone 1 (Left ~69HP)**: Oscillators + moderate power modules
- **Zone 2 (Middle ~69HP)**: Filters + function generators  
- **Zone 3 (Right ~69HP)**: Mix/VCA section + effects

### Row 1 (104 HP) - Sound Sources & Modulation
| Module | HP | Zone | Power | Notes |
|--------|----|----- |-------|-------|
| **Instruo CS-L** | 26 | 1 | 200mA | Dual oscillator (fills most of zone 1) |
| **ALM MCO** | 6 | 1 | 40mA | Compact digital VCO |
| **Winterbloom C&P II** | 14 | 1 | 100mA | Dual Juno oscillator |
| **C&P II Expander** | 2 | 1 | 0mA | Output expander (adjacent) |
| **Noise Eng. Loquelic** | 10 | 1 | 80mA | Complex oscillator |
| **Cre8audio Chipz** | 12 | 1 | 35mA | Dual VCO/LFO |
| **Zone 1 Total** | 70 | | **455mA** | *Under 1A limit* |
| **Mutable Plaits** | 12 | 2 | 50mA | Macro oscillator |
| **Make Noise Maths** | 20 | 2 | 60mA | Function generator |
| **Make Noise Wogglebug** | 10 | 2 | 50mA | Random/chaos |
| **Mutable Marbles** | 18 | 2 | 80mA | Random sampler |
| **Zone 2 Total** | 60 | | **240mA** | *Well under 1A* |
| **Remaining** | 4 | 3 | | Small utility |

### Row 2 (104 HP) - Processing & Final Stage
| Module | HP | Zone | Power | Notes |
|--------|----|----- |-------|-------|
| **Doepfer A-124 Wasp** | 8 | 1 | 30mA | Classic filter |
| **Erica Black Polivoks** | 10 | 1 | 11mA | Aggressive filter |
| **Tiptop Forbidden Planet** | 8 | 1 | 10mA | Korg MS-20 filter |
| **Patching Panda Moon Phase** | 14 | 1 | 82mA | Stereo multimode filter |
| **Noise Eng. Ruina Versio** | 10 | 1 | 70mA | Stereo distortion/filter |
| **Zone 1 Total** | 50 | | **203mA** | *Well under 1A* |
| **Mutable Rings** | 14 | 2 | 120mA | Resonator |
| **Rossum Mob of Emus** | 16 | 2 | 140mA | Harmonic oscillator |
| **Cre8audio Function Junction** | 16 | 2 | 130mA | Function generator |
| **Zone 2 Total** | 46 | | **390mA** | *Well under 1A* |
| **Erica Black Quad VCA2** | 10 | 3 | 64mA | Quad VCA mixer |
| **Doepfer A-130-2** | 4 | 3 | 30mA | Dual VCA |
| **Erica Pico VCA2** | 3 | 3 | 20mA | Compact VCA |
| **Intellijel Mixup** | 6 | 3 | 15mA | Stereo mixer |
| **dsp.coffee YYS** | 8 | 3 | 24mA | Matrix mixer |
| **Zone 3 Total** | 31 | | **153mA** | *Well under 1A* |
| **Remaining** | 27 | | | Future expansion |

---

## **TOP: NiftyCase #1 (84 HP)**
*Envelopes, Effects, and Final Processing*

### Single Row Layout
| Module | HP | Power | Notes |
|--------|----|----- |-------|
| **Behringer 1033** | 16 | 40mA | Dual envelope generator |
| **Blue Lantern ADSR** | 7 | 24mA | Digital ADSR |
| **4ms Percussion Interface** | 4 | 69mA | Audio-to-envelope |
| **Erica Black EG2** | 8 | 29mA | Exponential ADSR |
| **EarthQuaker Afterneath** | 16 | 95mA | Modulated reverb |
| **SOMA Lyra8-FX** | 20 | 90mA | Distortion/delay |
| **Erica Pico DSP** | 3 | 82mA | 8 stereo effects |
| **Erica Pico LFO/S&H** | 3 | 13mA | LFO and sample & hold |
| **Intellijel Stomp** | 8 | 47mA | Effects send/return + LFO |

**Total: 85HP, 489mA (+12V) - Within NiftyCase limits**

---

## **TOP: NiftyCase #2 (84 HP)**
*Drums, Performance, and Expansion*

### Single Row Layout
| Module | HP | Power | Notes |
|--------|----|----- |-------|
| **vpme.de QD Quad Drum** | 22 | 120mA | Main drum module |
| **vpme.de QEX Expander** | 4 | 25mA | Quad drum expander (adjacent) |
| **Blue Lantern Asteroid** | 6 | 13mA | 808 bass drum |
| **Erica Drums2** | 3 | 28mA | Percussion algorithms |
| **Worng TM LPG Expander** | 10 | 0mA | Low pass gates for drums |
| **Future Expansion Space** | 39 | | For new modules |

**Current Total: 45HP, 186mA (+12V) - Plenty of room for expansion**

---

## **Power Summary**

| Case | +12V Used | +12V Available | -12V Used | Utilization |
|------|-----------|----------------|-----------|-------------|
| **Go Row 1** | 733mA | 3000mA | ~300mA | 24% |
| **Go Row 2** | 1031mA | 3000mA | ~400mA | 34% |
| **Mantis Zone 1** | 658mA | 1000mA | ~250mA | 66% |
| **Mantis Zone 2** | 630mA | 1000mA | ~200mA | 63% |
| **Mantis Zone 3** | 153mA | 1000mA | ~50mA | 15% |
| **NiftyCase #1** | 489mA | 1500mA | ~250mA | 33% |
| **NiftyCase #2** | 186mA | 1500mA | ~75mA | 12% |

**Total System: 3.88A used / 9A available (+12V) = 43% utilization**

---

## **Patching Advantages**

### **Oscillator Section (Mantis Row 1, Zone 1-2)**
- All oscillators clustered for easy cross-patching
- Maths and modulation sources adjacent to oscillators
- Short cables for FM, sync, and modulation

### **Filter Section (Mantis Row 2, Zone 1)**  
- All filters grouped for easy comparison
- Adjacent to oscillators above for short audio paths
- Different filter types for sonic variety

### **Sequencer Hub (Go Case Row 1)**
- All sequencers in one location
- Clock modules adjacent for easy timing
- Touch controllers and utilities nearby

### **Effects Chain (NiftyCase #1)**
- Linear effects flow possible
- Envelopes for effects control nearby
- Easy to patch final processing chain

### **Performance Section**
- Touch controllers accessible in Go case
- Drum modules isolated in NiftyCase #2
- Master sequencer (Hermod) at bottom left for easy access

This layout maximizes creative patching potential while respecting power limits and providing excellent expansion opportunities!