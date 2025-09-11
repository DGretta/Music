# Make Noise Wogglebug - Beginner's Guide

**Your Synthesizer's ID Monster**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Wogglebug?** A "Source of Uncertainty" - it generates stepped and smooth random voltages that give your synthesizer a mind of its own. Think of it as controlled chaos that makes static sequences come alive with unpredictable, musical movement.

### Your First Random Voltage
1. **Turn Speed/Chaos knob** to 12 o'clock position
2. **Turn Ego/Id Balance** to 12 o'clock (middle position)
3. **Watch the blue System Clock LED** blink - this shows the sample rate
4. **Patch Stepped Output** → your oscillator pitch CV input
5. **Patch Smooth Output** → your filter cutoff
6. **Play a sequence** - notice how it becomes wonderfully unpredictable!

**Add Some Audio Chaos:**
1. **Patch Smooth VCO Output** → your mixer (it's a "shark's fin" wave oscillator)
2. **Patch Ring-Mod Output** → another mixer channel (controlled chaos audio)
3. **Congratulations!** You're now hearing the Wogglebug's "uncertain beating heart"

---

## Essential Parameters (The Big 4)

### **1. Speed/Chaos Control**
- **What it does:** Controls both clock rate AND smoothness simultaneously
- **Musical result:** CCW = slow + smooth, CW = fast + jittery
- **Range:** 1 minute per cycle up to 40Hz (200Hz with CV)
- **Key insight:** This is NOT just a speed control - it changes the character!

### **2. Ego/Id Balance**
- **What it does:** Controls how "clustered" the random values are
- **Musical result:** CCW = values cluster (less random), CW = full spread
- **With Ego Input:** Balances external signal vs. internal randomness
- **Pro tip:** Think of it as "how predictable vs. how chaotic"

### **3. Woggle Control**
- **What it does:** Sets how fast the Woggle CV "chases" the Stepped/Smooth CV
- **Musical result:** Creates unique "stepped voltages with decaying sinusoids"
- **CCW:** Woggle responds quickly, CW: Woggle responds slowly
- **Unique feature:** This CV type exists nowhere else in synthesis!

### **4. Disturb Button**
- **What it does:** Manual control over Sample & Hold - press to sample, hold to pause
- **Musical result:** Kick-start slow systems, freeze interesting values
- **Performance use:** Real-time control over randomness timing
- **Emergency tool:** Wake up a "locked up" Wogglebug

---

## Understanding the Outputs

### **CV Outputs (The Heart of the System):**
- **Stepped Output:** Classic sample & hold random voltages (0-10V)
- **Smooth Output:** Lagged/slewed version of stepped - creates smooth curves (0-10V)
- **Woggle CV:** Unique "stepped with sinusoidal edges" - must be heard to understand! (0-10V)

### **Audio Outputs (The Voice of Chaos):**
- **Smooth VCO:** "Shark's fin" waveform oscillator controlled by all the CV circuits (10Vpp)
- **Woggle VCO:** Square wave oscillator that follows the Woggle CV (10Vpp)
- **Ring-Mod Output:** Digital ring modulation of both VCOs plus Influence input - "gets messy, real fast!"

### **Clock & Gate Outputs:**
- **Clock Output:** Square wave from internal clock generator (0-10V)
- **Burst Output:** Random gates synchronized to clock - another flavor of uncertainty

---

## Beginner Patch Ideas

### **Patch 1: Random Melody Generator**
- **Stepped Output** → Quantizer → Oscillator pitch
- **Smooth Output** → Filter cutoff
- **Woggle CV** → Oscillator FM amount
- **Burst Output** → Trigger envelope generator
- **Speed/Chaos at 1 o'clock** for musical timing
- **Result:** Constantly evolving melodies with smooth filter sweeps

### **Patch 2: The ID Monster Bass**
- **Your bass sequence** → Ego Input (external signal injection)
- **Ego/Id Balance at 10 o'clock** (mostly your sequence, some chaos)
- **Smooth Output** → Bass oscillator pitch (adds drift to your sequence)
- **Woggle CV** → Filter resonance
- **Burst Output** → Trigger accent envelope
- **Result:** Your bass line with a mind of its own

### **Patch 3: Chaotic Drum Machine**
- **Clock Output** → Your main sequencer clock
- **Burst Output** → Kick drum trigger
- **Stepped Output** → Sample & hold → Snare pitch
- **Smooth Output** → Hi-hat filter cutoff
- **Ring-Mod Output** → Noise source for percussion
- **Result:** Rhythmically related but chaotic drum patterns

---

## Advanced Features & Techniques

### **The Influence Input:**
- **What it does:** Modulates both VCO frequencies, feeds Ring-Mod, level shifts Woggle CV
- **Creative uses:** Audio rate signals create bit reduction effects
- **CV uses:** External modulation of the chaos itself
- **Range:** Responds to 0V-10V

### **External Clock Input:**
- **Freedom from internal clock:** Use any signal as clock source
- **Independent operation:** Internal clock output continues regardless
- **Creative clocking:** Use LFOs, audio signals, or other sequences as clock

### **The Ego Input (Heart Surgery):**
- **Direct injection:** Signals go "directly to the uncertainly, beating heart"
- **Audio rate signals:** Create bit reduction and digital artifacts
- **CV signals:** Bias the randomness toward your input
- **Expects:** 10Vpp maximum

### **Speed/Chaos CV Input:**
- **Normalled to +8V:** Extends internal clock range to ~200Hz
- **External CV:** 0V-8V range for voltage control
- **Attenuator:** Controls amount of external CV influence
- **High rates:** CV outputs become different flavors of analog/digital noise

---

## Common Use Cases

### **Studio Production:**
- **Humanizing sequences:** Add organic drift to rigid patterns
- **Generative composition:** Let the Wogglebug compose while you guide
- **Sound design:** Ring-Mod output for unique textures and chaos

### **Live Performance:**
- **Controlled improvisation:** Set parameters, let chaos take the wheel
- **Real-time control:** Disturb button for manual intervention
- **Backup randomness:** When your sequences get boring

### **Experimental Music:**
- **Pure chaos:** Speed/Chaos at maximum for digital noise textures
- **Feedback loops:** Patch outputs back to inputs for complex behaviors
- **Clock experiments:** Use audio signals as clock sources

---

## Pairs Well With

### **Essential Partners:**
- **Quantizers:** Make stepped random voltages musical
- **VCAs:** Control the amount of chaos in your system
- **Sample & Hold:** Capture interesting Wogglebug values
- **Maths:** Further process the random CVs

### **Advanced Combinations:**
- **Sequencers:** Mix sequenced and random voltages via Ego Input
- **Filters:** Smooth and Woggle CVs are perfect for cutoff modulation
- **Ring Modulators:** Feed Wogglebug audio outputs into external ring mods
- **Feedback systems:** Create complex chaotic systems

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My Wogglebug stopped working!"**
- It's probably "locked up" - all sub-circuits are responding to each other
- **Solution:** Adjust ANY panel control to "wake it up," or press Disturb button

**"The randomness isn't random enough!"**
- Ego/Id Balance might be set too far CCW (clustered)
- **Solution:** Turn Ego/Id Balance more clockwise for wider spread

**"I can't control the chaos!"**
- Remember: Speed/Chaos controls BOTH rate AND character
- **Solution:** Use External Clock Input for independent rate control

### **🎵 Pro Tips:**

**System Interaction Philosophy:**
- EVERYTHING affects everything else in Wogglebug
- Changes are NOT immediate - it's a complex feedback system
- Small adjustments can have big effects - be patient and explore

**Speed/Chaos Sweet Spots:**
- **9-11 o'clock:** Slow, smooth, musical randomness
- **12-2 o'clock:** Medium speed with some jitter - good for rhythmic work
- **3+ o'clock:** Fast and chaotic - digital noise territory

**Ego/Id Balance Strategies:**
- **No Ego Input:** Use as simple clustering control
- **With Ego Input:** Balance your intention vs. the system's chaos
- **Full CCW with audio in Ego:** Bit reduction effects

**Woggle CV Applications:**
- **Pitch modulation:** Creates unique "stepped but smooth" pitch slides
- **Filter modulation:** Gives filters a distinctive "woggly" character
- **Amplitude modulation:** For tremolo effects unlike any other

**Performance Techniques:**
- **Disturb as instrument:** Manual timing control during performance
- **Speed sweeps:** Dramatic builds by increasing Speed/Chaos
- **Ego Input performance:** Live injection of audio or CV

---

## Why This Module Rocks

### **The Philosophy:**
Wogglebug embodies the concept that synthesizers should have their own "ID" - an unconscious, unpredictable element that makes electronic music feel alive and organic rather than mechanical.

### **The Lineage:**
- **Based on Buchla 265 "Source of Uncertainty"** - considered the most musical random voltage generator
- **Evolved by Grant Richter** - added the unique "Woggle" CV and audio capabilities
- **Make Noise version** - adds Influence input, improved stability, and enhanced functionality

### **The Unique Value:**
- **Complete random system:** CV generation AND audio synthesis in one module
- **Musical intelligence:** Not just random - designed to be musical
- **Interactive complexity:** All circuits respond to each other
- **Woggle CV:** A type of control voltage that exists nowhere else

### **Perfect For:**
- **Electronic musicians wanting organic feel**
- **Experimental composers exploring chance operations**
- **Live performers who want controlled unpredictability**
- **Anyone tired of perfectly quantized, robotic sequences**

---

**Bottom Line:** Wogglebug turns your synthesizer from a predictable machine into a living, breathing, unpredictable musical partner. It's not just about random voltages - it's about giving electronic music a soul.

---

*Visit [Make Noise](https://www.makenoisemusic.com/) for complete documentation. Special thanks to Grant Richter for the original Wogglebug design.*