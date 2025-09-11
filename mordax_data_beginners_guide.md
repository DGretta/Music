# Mordax Data - Beginner's Guide

**The Swiss Army Knife of Eurorack**

---

## Quick Start: See Your First Signal in 5 Minutes

**What is Data?** Think of it as a high-tech microscope for electricity - it lets you see what your CV and audio signals actually look like, plus it generates perfect signals when you need them. It's like having a whole electronics lab in one module.

### Your First Oscilloscope View
1. **Plug any audio/CV source** → **Input 1** (left input jack)
2. **Press the encoder** to wake up the screen 
3. **Turn encoder to navigate** to the **SCOPE** program icon
4. **Press encoder to select** - you should see your signal as a moving line!
5. **Turn encoder and click softkeys** to explore different settings

**Congratulations!** You've just visualized electricity - you can literally see your signals moving in real time!

---

## Essential Functions (The Big 6)

### **1. Oscilloscope (SCOPE)**
- **What it does:** Shows you the actual shape of your audio and CV signals
- **Why it matters:** See if your envelopes are actually working, check timing, spot problems
- **Visual:** Colorful wiggly lines that dance with your music
- **Pro tip:** Each input gets its own color - Input 1=Red, 2=Blue, 3=Green, 4=Yellow

### **2. Tuner (TUNE)** 
- **What it does:** Tells you the exact frequency/pitch of any audio signal
- **Why it matters:** Perfect tuning without guessing - shows you cents sharp/flat
- **When to use:** Tuning oscillators, checking intervals, calibrating V/Oct
- **Display:** Large frequency number + visual pitch deviation

### **3. Waveform Generator (WAVE)**
- **What it does:** Creates two precise digital oscillators/LFOs
- **Musical result:** Perfect sine/square/saw/triangle waves from 0.01Hz to 4kHz+
- **Special feature:** "Note Mode" - type in musical notes instead of frequencies
- **CV Control:** Inputs can modulate frequency and amplitude with precise control

### **4. Clock Generator (CLOCK)**
- **What it does:** Master clock that can divide/multiply to create complex rhythms
- **Musical result:** One tempo input becomes 4 different rhythmic outputs
- **Range:** From /48 (12 measures) to x48 (128th note triplets)
- **Sweet spot:** Perfect for creating polyrhythms and swing timing

### **5. Voltage Monitor (VOLT)**
- **What it does:** Shows exact voltage numbers + generates precise DC voltages
- **Why it's useful:** See what your CV is actually sending, create perfect offsets
- **Four outputs:** Each can be set to any voltage from +10V to -5V
- **Bonus:** Manual gates - press buttons to send triggers/gates

### **6. Spectrum Analyzer (SPEC)**
- **What it does:** Shows which frequencies are present in your audio
- **Visual result:** Like a graphic EQ display - tall bars = more of that frequency
- **Why it's useful:** See the harmonic content of complex sounds, spot problem frequencies
- **Musical application:** Perfect for analyzing FM tones, filter responses, distortion

---

## Beginner Patch Ideas

### **Patch 1: Signal Detective**
```
[Any Oscillator] ──→ [Data INPUT 1]
[Data THRU 1] ──→ [Your usual audio path continues...]
```
**Mode:** SCOPE program
**Visual:** Watch your waveforms in real-time - see how filters change wave shape
**Controls:** Adjust time scale to zoom in/out, voltage scale for amplitude
**Learning:** See what different waveforms actually look like, understand signal flow

### **Patch 2: Perfect Tuner** 
```
[Oscillator] ──→ [Data INPUT 1]
```
**Mode:** TUNE program
**Visual:** Frequency display + graphical pitch deviation
**Use:** Tune multiple oscillators to perfect intervals, calibrate V/Oct tracking
**Pro tip:** Tune one osc, then use Data's display to tune others to exact ratios

### **Patch 3: Dual Precision LFO**
```
[Data OUTPUT 1] ──→ [Filter Cutoff CV]
[Data OUTPUT 2] ──→ [VCA CV] 
[Some CV] ──→ [Data INPUT 3] (to modulate LFO speed)
```
**Mode:** WAVE program  
**Setup:** Set Output 1 to slow sine wave, Output 2 to faster triangle
**Controls:** Precise frequency control, CV modulation of speed/amplitude
**Sound:** Perfect, stable modulation with visual feedback of the waveforms

### **Patch 4: Rhythm Generator**
```
[Data OUTPUT 1] ──→ [Sequencer Clock]
[Data OUTPUT 2] ──→ [Drum Trigger] (/2 division)
[Data OUTPUT 3] ──→ [Hi-hat Trigger] (x4 multiplication)  
[Data OUTPUT 4] ──→ [Other Sequencer] (/3 division)
```
**Mode:** CLOCK program
**Setup:** Set internal clock to comfortable BPM, different divisions per output
**Result:** Complex polyrhythmic patterns from one master tempo
**Visual:** See all four clocks running at their different divisions

---

## Common Use Cases

**🔍 **Signal Analysis:** See what your signals actually look like and troubleshoot problems**
**🎵 **Perfect Tuning:** Tune oscillators to exact frequencies and intervals**  
**📊 **Spectrum Analysis:** Understand the harmonic content of complex sounds**
**⏰ **Master Clock:** Generate complex rhythmic patterns with divisions/multiplications**
**🎛️ **Precision CV:** Generate exact voltages for calibration and control**
**📈 **Learning Tool:** Understand how different modules affect your signals**
**🧪 **Experimentation:** Test ideas and see results immediately**

---

## Beginner "Gotchas" 

### **Screen Navigation**
- **Encoder = Main control** - turn to navigate, press to select
- **Softkeys = Context menus** - four buttons below screen change function based on program
- **Programs are separate apps** - each does one main thing very well
- **Menu diving is minimal** - most controls are direct softkey access

### **Input/Output Routing**
- **THRU jacks are buffered** - signals pass through even when Data is doing something else
- **Each input can monitor different things** simultaneously in most programs
- **Outputs change function** depending on program - SCOPE uses them as DC voltages
- **AC/DC coupling matters** - DC shows full signal, AC filters out slow changes

### **Voltage Ranges and Scaling**
- **Eurorack standard is ±5V audio, 0-10V CV** - Data handles both
- **Scope voltage scale affects zoom** - 1V/div, 2V/div, 5V/div settings
- **Output range is +10V to -5V** - slightly asymmetrical but covers all Eurorack needs
- **Time scales are very flexible** - from microseconds to full minutes on screen

### **Program-Specific Behavior**
- **Each program uses inputs/outputs differently** - read the display carefully
- **Some programs multi-task** - SCOPE can also output DC voltages simultaneously
- **Memory slots save settings** - 8 slots per program for different configurations
- **Updates add features** - firmware updates via microSD add new capabilities

### **It's Not Making Sound (Usually)**
- **Data is mostly for measurement** - it shows you what's happening, doesn't make music directly
- **WAVE program is the exception** - it generates audio/CV signals
- **THRU jacks maintain signal flow** - your audio path continues through Data
- **Think "oscilloscope with benefits"** rather than "sound module"

---

## Next Steps

1. **Start with SCOPE mode** - get comfortable seeing your signals visually
2. **Use TUNE mode for calibration** - tune your oscillators precisely  
3. **Explore WAVE mode** for perfect LFOs and test signals
4. **Try VOLT mode** for troubleshooting - see exact CV values
5. **Master CLOCK mode** for complex rhythms and timing

**Remember:** Data is like having X-ray vision for your modular system. The more you use it, the better you'll understand what's really happening inside your patches!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Any Oscillator:** Data helps you tune and understand oscillator behavior perfectly
- **Envelope Generators:** Visualize envelope shapes and timing with the oscilloscope  
- **Filters:** See how filters change waveform shapes and frequency content
- **Clock Dividers/Sequencers:** Data's clock can replace or enhance existing timing modules

### **Next-Level Combinations:**
- **Complex Modules (Cs-L, DPO):** Use spectrum analyzer to understand complex harmonic interactions
- **Precision CV Sources:** Data's voltage outputs are perfect for calibrating other modules
- **Effects/Distortion:** Visualize how effects change your signals - great for understanding processing
- **Multiple Data modules:** Some studios have multiple Datas for monitoring different parts of large systems

### **Pro Tip:** Data is one of those modules that makes **every other module better** by helping you understand what they're actually doing. It's educational, practical, and inspiring - you'll discover things about your system you never knew were happening.

---

*Need the full technical manual? Find it at mordax.net*