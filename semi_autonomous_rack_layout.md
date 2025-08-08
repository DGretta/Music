# Modular Semi-Autonomous Rack Layout

## Layout Philosophy

**Cases arranged bottom to top:** Behringer Go → Mantis → NiftyCase #1 → NiftyCase #2

**Design Principle:** Each case/row functions as a **semi-complete synthesizer** with:
- Sound sources (oscillators/drums)
- Modulation (envelopes, LFOs) 
- Processing (filters, effects)
- Sequencing/control capabilities
- I/O for interconnection

This enables individual cases for **performance**, **travel**, or **separate studio setups**.

---

## **BOTTOM: Behringer Eurorack Go Case (280 HP)**
### *"The Digital Powerhouse" - Complete Computer Music System*

### Row 1 (140 HP) - Advanced Sequencing & Digital Processing
| Module | HP | Power | Function |
|--------|----|----- |---------|
| **Squarp Hermod +** | 26 | 400mA | Master sequencer (16 tracks, CV/audio) |
| **4ms MetaModule** | 26 | 290mA | DSP computer (oscillators, effects, filters) |
| **4ms metaAIO** | 6 | 140mA | MetaModule I/O expander |
| **Instruo Arbhar** | 18 | 250mA | Granular processor/sampler |
| **Arbhar Expansion Pack** | 2 | 0mA | USB expander |
| **Arbhar Expander** | 2 | 0mA | CV expander |
| **Mordax DATA** | 16 | 100mA | Oscilloscope + dual waveform generator |
| **Make Noise Maths** | 20 | 60mA | Function generator (envelopes, LFOs, mix) |
| **Qu-Bit Bloom** | 16 | 82mA | Fractal sequencer |
| **Expert Sleepers Disting mk4** | 4 | 51mA | Multi-function (oscillator, filter, effects) |
| **Intellijel Mixup** | 6 | 15mA | Stereo mixer |
| **Remaining** | -2 | | *Need to optimize* |

### Row 2 (140 HP) - Analog Synthesis Core
| Module | HP | Power | Function |
|--------|----|----- |---------|
| **Instruo CS-L** | 26 | 200mA | Dual complex oscillator |
| **Mutable Plaits** | 12 | 50mA | Macro-oscillator (16 synthesis models) |
| **Noise Eng. Loquelic Iteritas** | 10 | 80mA | Complex comb oscillator + folder |
| **Patching Panda Moon Phase** | 14 | 82mA | Stereo multimode filter |
| **Noise Eng. Ruina Versio** | 10 | 70mA | Stereo distortion/filter |
| **Erica Black Quad VCA2** | 10 | 64mA | 4x VCA + mixer |
| **Make Noise Wogglebug** | 10 | 50mA | Random voltage + oscillator |
| **Mutable Marbles** | 18 | 80mA | Random sampler + T&H |
| **DivKid ochd** | 4 | 80mA | 8x LFO |
| **DivKid ochd expander** | 4 | 5mA | Additional ochd outputs |
| **4ms Listen IO** | 6 | 62mA | Stereo I/O interface |
| **2hp Mult** | 2 | 0mA | Signal splitter |
| **Intellijel Mult** | 2 | 0mA | Passive multiple |
| **Remaining** | 12 | | Utilities/expansion |

**Go Case Capabilities:** Complete digital+analog system with advanced sequencing, granular processing, complex oscillators, filtering, and modulation. Can create full tracks independently.

---

## **MIDDLE: Tiptop Mantis Case (208 HP)**
### *"The Classic Analog Studio" - Traditional Subtractive Synthesis*

### Row 1 (104 HP) - Oscillator & Modulation Section
| Module | HP | Zone | Power | Function |
|--------|----|----- |-------|---------|
| **Winterbloom C&P II** | 14 | 1 | 100mA | Dual Juno-style oscillator |
| **C&P II Expander** | 2 | 1 | 0mA | Additional outputs |
| **ALM MCO** | 6 | 1 | 40mA | Compact digital VCO |
| **Cre8audio Chipz** | 12 | 1 | 35mA | Dual VCO/LFO |
| **Behringer 1033** | 16 | 1 | 40mA | Dual envelope generator |
| **Blue Lantern ADSR** | 7 | 1 | 24mA | Digital ADSR with loop |
| **Erica Black EG2** | 8 | 1 | 29mA | Exponential ADSR |
| **Zone 1 Total** | 65 | | **268mA** | *Oscillators + Envelopes* |
| **Musicthing Turing Machine** | 10 | 2 | 40mA | Random looping sequencer |
| **Musicthing Volts** | 4 | 2 | 0mA | Turing voltage expander |
| **Musicthing Pulses** | 4 | 2 | 10mA | Turing gate expander |
| **Make Noise Pressure Points** | 20 | 2 | 20mA | Touch sequencer/controller |
| **Zone 2 Total** | 38 | | **70mA** | *Sequencing Section* |
| **Remaining** | 1 | 3 | | Small utility |

### Row 2 (104 HP) - Filter & Processing Section
| Module | HP | Zone | Power | Function |
|--------|----|----- |-------|---------|
| **Doepfer A-124 Wasp** | 8 | 1 | 30mA | Wasp multimode filter |
| **Erica Black Polivoks** | 10 | 1 | 11mA | Polivoks lowpass filter |
| **Tiptop Forbidden Planet** | 8 | 1 | 10mA | MS-20 style filter |
| **4ms Percussion Interface** | 4 | 1 | 69mA | Audio-to-CV/envelope |
| **4ms Perc. Interface Expander** | 4 | 1 | 35mA | Additional outputs |
| **Zone 1 Total** | 34 | | **155mA** | *Filter Section* |
| **EarthQuaker Afterneath** | 16 | 2 | 95mA | Modulated reverb |
| **SOMA Lyra8-FX** | 20 | 2 | 90mA | Distortion/delay |
| **Erica Pico DSP** | 3 | 2 | 82mA | 8 stereo effects |
| **Zone 2 Total** | 39 | | **267mA** | *Effects Section* |
| **Doepfer A-130-2** | 4 | 3 | 30mA | Dual VCA |
| **Erica Pico VCA2** | 3 | 3 | 20mA | Compact VCA |
| **dsp.coffee YYS** | 8 | 3 | 24mA | Attenuverting mixer |
| **4ms Rotating Clock Div** | 4 | 3 | 33mA | Clock divider |
| **4ms Shuffling Clock Mult** | 12 | 3 | 52mA | Clock multiplier/breakout |
| **Zone 3 Total** | 31 | | **159mA** | *VCA + Clock Section* |

**Mantis Capabilities:** Complete analog subtractive synthesizer with multiple oscillators, classic filters, effects, sequencing, and modulation. Perfect for traditional synthesis techniques.

---

## **TOP LEFT: NiftyCase #1 (84 HP)**
### *"The Experimental Laboratory" - Modular Synthesis & Processing*

| Module | HP | Power | Function |
|--------|----|----- |---------|
| **Mutable Rings** | 14 | 120mA | Physical modeling resonator |
| **Rossum Mob of Emus** | 16 | 140mA | 6-voice harmonic oscillator |
| **Cre8audio Function Junction** | 16 | 130mA | Function generator + LFO + envelope |
| **vpme.de Euclidian Circles** | 10 | 0mA | 6-channel rhythm generator |
| **Blue Lantern CMOS Party** | 4 | 23mA | Logic processing |
| **Erica Pico LFO/S&H** | 3 | 13mA | LFO + sample & hold |
| **Intellijel Stomp** | 8 | 47mA | Effects send/return + LFO |
| **Cre8audio Cellz** | 12 | 3mA | Touch CV controller |
| **Remaining** | 1 | | Small utility |

**Power: 476mA (+12V) - Within 1500mA limit**

**NiftyCase #1 Capabilities:** Advanced modular synthesis with physical modeling, harmonic generation, complex modulation, and touch control. Ideal for experimental and ambient music.

---

## **TOP RIGHT: NiftyCase #2 (84 HP)**  
### *"The Rhythm Machine" - Drums & Percussion System*

| Module | HP | Power | Function |
|--------|----|----- |---------|
| **vpme.de QD Quad Drum** | 22 | 120mA | 4-voice digital drum synthesizer |
| **vpme.de QEX Expander** | 4 | 25mA | Additional drum outputs |
| **Blue Lantern Asteroid** | 6 | 13mA | 808 bass drum + toms |
| **Erica Drums2** | 3 | 28mA | 8 percussion algorithms |
| **Worng TM LPG Expander** | 10 | 0mA | Low pass gates for drums |
| **Intellijel Buff Mult** | 2 | 4mA | Buffered trigger distribution |
| **Mutable Links** | 4 | 15mA | Utility mixing/buffering |
| **Future Drum Modules** | 33 | | Expansion space for more drums |

**Power: 205mA (+12V) - Plenty of headroom for expansion**

**NiftyCase #2 Capabilities:** Complete drum machine with multiple synthesis types, trigger processing, and room for significant expansion.

---

## **Semi-Autonomous Capabilities by Case**

### **Go Case: "Digital Powerhouse"**
✅ **Complete System:** Advanced sequencing + digital synthesis + granular processing  
✅ **Standalone Use:** Full tracks with Hermod + MetaModule + Arbhar  
✅ **I/O:** Listen IO for external gear integration  
✅ **Expansion:** 12HP remaining in Row 2  

### **Mantis: "Classic Analog"**
✅ **Complete System:** Multiple oscillators + filters + effects + sequencing  
✅ **Standalone Use:** Traditional subtractive synthesis workflow  
✅ **Sequencing:** Turing Machine + Pressure Points for pattern generation  
✅ **Expansion:** Minimal remaining space (focused system)  

### **NiftyCase #1: "Experimental Lab"**  
✅ **Sound Sources:** Rings (resonator) + Mob of Emus (harmonic)  
✅ **Modulation:** Function Junction + LFOs + Euclidian rhythms  
✅ **Control:** Touch interface (Cellz) + effects (Stomp)  
✅ **Character:** Unique timbres and experimental patches  

### **NiftyCase #2: "Rhythm Machine"**
✅ **Complete Drums:** Multiple drum synthesizers + processing  
✅ **Pattern Gen:** Use Euclidian Circles from NiftyCase #1 or clock from other cases  
✅ **Expansion:** 33HP for additional drum modules  
✅ **Processing:** LPGs for natural drum decay  

---

## **Interconnection Strategy**

### **Performance Setup:**
- **Any single case** = functional synthesizer
- **Go + Mantis** = Complete studio system  
- **Mantis + NiftyCase #1** = Analog + experimental hybrid
- **All cases** = Massive integrated system

### **Travel/Satellite Studios:**
- **NiftyCase #1 or #2** = Portable creative tools
- **Mantis** = Classic analog setup for remote locations
- **Go Case** = Digital production powerhouse

### **Recording Workflows:**  
- **Go Case:** Digital/IDM/ambient tracks
- **Mantis:** Classic analog/techno/house  
- **NiftyCase #1:** Experimental/ambient/drone
- **NiftyCase #2:** Drum programming/rhythm tracks

This layout maximizes **flexibility** while maintaining **focused functionality** in each case!