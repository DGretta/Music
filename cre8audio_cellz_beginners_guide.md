# Cre8audio Cellz - Beginner's Guide

**The Touch-Sensitive CV Playground**

---

## Quick Start: Get Your First Touch Sequence in 5 Minutes

**What is Cellz?** Think of it as a programmable touch-sensitive keyboard that outputs CV instead of MIDI. It's a 4×4 grid of touch pads where each pad can store two different voltage values. You can play it like an instrument, sequence it automatically, or use it as a creative controller for any CV-controllable parameter in your system.

### Your First Touch Melody
1. **Connect Cellz OUT1** → **oscillator V/OCT input**
2. **Connect Cellz GATE1** → **envelope generator or VCA**  
3. **Press TUNE1 button** (LED lights up)
4. **Touch different pads** while turning the **left knob** to program different pitches
5. **Release TUNE1** and **touch pads** to play your programmed melody
6. **Magic!** You've created a touch-sensitive keyboard with custom note layout

**Congratulations!** You've just programmed your first touch-based CV controller!

---

## Essential Parameters (The Touch System)

### **1. Touch Pad Grid - Your 16-Note Playground**
- **4×4 arrangement:** 16 touch-sensitive pads in intuitive grid layout
- **Dual values per pad:** Each pad stores two independent CV values (OUT1 and OUT2)
- **Visual feedback:** Pads light up when touched - different colors for different modes
- **Immediate response:** Touch = instant CV output + gate signal
- **Multi-touch support:** Hold multiple pads for arpeggiator mode

### **2. Programming System - TUNE1 & TUNE2**
- **TUNE1 button + left knob:** Programs OUT1 values for each pad
- **TUNE2 button + left knob:** Programs OUT2 values for each pad  
- **Programming process:** Hold TUNE button, touch pad, turn knob, release
- **Visual confirmation:** LEDs show which channel you're programming
- **Independent values:** Each pad can have completely different voltages for OUT1/OUT2

### **3. Quantization Modes - Musical vs Free**
- **Quantized mode (QUAN LED on):** Outputs musical semitones, limited range (~2-6V)
- **Free scale mode (QUAN LED off):** Full 0-10V range, unquantized voltages
- **Toggle:** Press QUAN button to switch between modes
- **Musical use:** Quantized for melodies, Free for modulation/effects
- **Range difference:** Quantized = ~4 octaves, Free = full CV range

### **4. Sequencing Inputs - Automatic Playback**
- **→ input (horizontal):** Advances through columns (left to right)
- **↓ input (vertical):** Advances through rows (top to bottom)  
- **Clock/trigger driven:** Each pulse advances to next position
- **Combined sequencing:** Use both inputs for complex 2D sequences
- **Touch override:** Touching pads interrupts automatic sequence

### **5. Arpeggiator - Multi-Touch Magic**
- **Activation:** Hold multiple pads simultaneously
- **Speed control:** Right knob sets arpeggiator rate
- **Repeat control:** Left knob (when not programming) sets number of repeats
- **Pattern:** Cycles through held pads in sequence
- **Performance tool:** Great for live performance and jamming

### **6. Dual Outputs - Parallel Control**
- **OUT1 + GATE1:** First CV channel with corresponding gate
- **OUT2 + GATE2:** Second CV channel with same gate timing
- **Independent values:** Different voltages from same pad touch
- **Parallel control:** Control two parameters simultaneously from one touch
- **Creative routing:** Pitch + filter, or two oscillators, etc.

---

## Beginner Patch Ideas

### **Patch 1: Touch-Controlled Synthesizer**
```
[Cellz OUT1] ──→ [Oscillator V/OCT]
[Cellz GATE1] ──→ [Envelope Generator TRIG]
[Envelope] ──→ [VCA CV input]
[Oscillator] ──→ [VCA Audio input]
```
**Setup:** Program OUT1 with musical pitches in quantized mode
**Programming:** TUNE1 + touch pads + left knob to set different notes
**Result:** Touch-sensitive synthesizer keyboard with custom note layout
**Pro tip:** Arrange pads like scales or chords for easy playing

### **Patch 2: Dual Parameter Control**
```
[Cellz OUT1] ──→ [Oscillator V/OCT]
[Cellz OUT2] ──→ [Filter CUTOFF CV]
[Cellz GATE1] ──→ [VCA GATE input]
```
**Setup:** OUT1 = pitch (quantized), OUT2 = filter cutoff (free scale)
**Programming:** TUNE1 for notes, TUNE2 for brightness levels
**Result:** Each pad plays different note with different brightness
**Performance:** Touch pads for simultaneous pitch and timbre control

### **Patch 3: Automatic Grid Sequencer**
```
[Clock] ──→ [Clock Divider] ──┬──→ [Cellz → input] (slow)
                              └──→ [Cellz ↓ input] (fast)
[Cellz OUT1] ──→ [Oscillator V/OCT]
[Cellz GATE1] ──→ [Drum Module TRIG]
```
**Setup:** Different clock divisions create 2D sequencing pattern
**Programming:** Program all 16 pads with different values
**Result:** Automatic sequence that moves through the grid in interesting patterns
**Experiment:** Different clock ratios create different sequence lengths

### **Patch 4: Touch-Controlled Modulation**
```
[LFO] ──→ [Cellz → input] (slow automatic advance)
[Cellz OUT2] ──→ [Filter CUTOFF CV] (free scale mode)
[Cellz GATE1] ──→ [Sample & Hold TRIG]
[Oscillator] ──→ [Filter] ──→ [Audio out]
```
**Setup:** Use Cellz as modulation source rather than note generator
**Programming:** TUNE2 to set different filter modulation amounts per pad
**Result:** Evolving filter modulation with manual touch override capability
**Performance:** Touch pads to manually "jump" to different modulation amounts

---

## Common Use Cases

**🎹 **Custom Keyboard:** Programmable touch interface with any note layout you want**
**🎛️ **Dual Parameter Control:** Simultaneously control pitch + filter, or two oscillators**  
**🎵 **Creative Sequencer:** 2D grid sequencing with manual override capabilities**
**🎶 **Arpeggiator:** Multi-touch arpeggiation for live performance**
**🔊 **Modulation Controller:** Touch-sensitive modulation source for any parameter**
**🎼 **Chord Trigger:** Program chord intervals, trigger with single touches**
**🎯 **Performance Interface:** Expressive live control for modular performances**
**🧪 **Experimental Controller:** Non-traditional musical interfaces and sound exploration**

---

## Beginner "Gotchas"

### **Programming Mode Confusion**
- **Must hold TUNE button** while touching pads to program them
- **TUNE1 = OUT1 values**, **TUNE2 = OUT2 values** - they're independent
- **Visual feedback:** Watch for TUNE button LEDs to confirm programming mode
- **Common mistake:** Trying to program without holding TUNE button
- **Remember:** Touch pad + turn knob + release TUNE to save value

### **Quantized vs Free Scale Ranges**
- **Quantized mode:** Limited to ~2-6V range for musical notes
- **Free scale mode:** Full 0-10V range but no musical quantization
- **Different purposes:** Quantized for pitch, Free for modulation
- **Mode affects programming:** Same knob position = different voltage in different modes
- **Check QUAN LED:** Always know which mode you're in

### **Touch Sensitivity Variations**
- **Finger pressure affects response** - light touch might not trigger
- **Dry vs wet fingers** make difference in sensitivity
- **Environmental factors** (humidity, temperature) can affect performance
- **Workaround:** Find your touch technique, be consistent
- **Not defective:** Capacitive touch is inherently variable

### **Sequencing Input Behavior**  
- **Touching pads interrupts sequence** - this is a feature, not a bug
- **Sequence resumes** when you release your finger
- **Direction matters:** → = columns, ↓ = rows, combined = 2D patterns
- **Manual override:** Touch to "jump" to specific positions in sequence

### **Arpeggiator Timing**
- **Requires multiple pads held** simultaneously to activate
- **Speed/repeat controls** only work during arpeggiator mode
- **Release all pads** to stop arpeggiator
- **Practice:** Multi-touch technique takes some getting used to

---

## Next Steps

1. **Master programming workflow** - practice TUNE button + touch + knob technique
2. **Explore both output modes** - quantized for music, free scale for modulation  
3. **Experiment with 2D sequencing** - use both trigger inputs creatively
4. **Practice multi-touch arpeggiator** - develop performance techniques
5. **Try modulation applications** - use as CV source for non-pitch parameters
6. **Combine with other modules** - integrate into larger patches as controller

**Remember:** Cellz is both an instrument and a controller - don't limit yourself to just pitch control!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Chipz (Cre8audio):** Natural pairing - Cellz controls Chipz perfectly for NiftyBundle setup
- **Quantizers (2HP Tune, Scales):** Additional quantization options beyond built-in mode
- **VCAs (2HP VCA, Intellijel uVCA):** Use GATE outputs to control dynamics
- **Clock Dividers:** Create interesting 2D sequencing patterns with divided clocks

### **Next-Level Combinations:**
- **Multiple Oscillators:** Use OUT1/OUT2 to control two voices simultaneously
- **Complex Filters:** Touch-control multiple filter parameters (cutoff, resonance, etc.)
- **Sample & Hold:** Use GATE outputs to trigger sample & hold for stepped modulation
- **LFOs with reset:** Use GATE to sync LFO cycles to your touches

### **Advanced Integration:**
- **Hermod+ (Squarp):** Record Cellz performances into advanced sequencer
- **Marbles (Mutable):** Use Cellz as "bias" control for random voltages  
- **Morphagene:** Touch-control sample positions and splice points
- **Complex modulars:** Use as expressive controller for any CV-controllable parameter

### **Creative Applications:**
- **Touch-control reverb send amounts** per note for spatial playing
- **Modulate multiple filter cutoffs** for harmonic filtering effects
- **Control crossfader positions** in performance mixing setups
- **Trigger different drum samples** while controlling their pitch/timbre

### **Performance Enhancements:**
- **MIDI-CV converters:** Combine with keyboard input for hybrid control
- **Multiple Cellz units:** Chain for larger touch interfaces  
- **Audio mixers:** Use GATE outputs to trigger channel mutes/automation
- **Effect processors:** Touch-control wet/dry or effect parameters

### **Pro Tips:**
- **Program complementary values:** OUT1 = pitch up, OUT2 = filter open (or vice versa)
- **Use free scale for percussion:** Control drum pitch and decay simultaneously
- **Sequence + touch:** Let sequence run, manually interrupt for expressive breaks
- **Arpeggiator + effects:** Hold chords, use effects processing for evolving textures

---

*Cellz rewards experimentation - it's as much a creative tool as it is a traditional controller. Don't be afraid to use it in unexpected ways!*