# Patching Panda Moon Phase - Beginner's Guide

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

### **Essential Partners:**
- **Stereo Mixers:** Essential for hearing the stereo processing
- **LFOs:** Animate the stereo parameters for evolving textures
- **Envelope Generators:** Dynamic control over stereo imaging
- **Audio Rate Sources:** For complex harmonic modulation

### **Advanced Combinations:**
- **Reverbs/Delays:** Further enhance the stereo field Moon Phase creates
- **Other Stereo Filters:** Chain for complex stereo processing
- **Mid/Side Processors:** Complement Moon Phase's imaging capabilities
- **Quantizers:** Make modulation musical when using complex CV sources

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

**Bottom Line:** Moon Phase isn't your typical filter - it's a stereo imaging processor that happens to filter. It creates textures, spaces, and effects that traditional filters simply cannot achieve.

---

*Visit [Patching Panda](http://patchingpanda.com/) for complete documentation and more innovative modules*