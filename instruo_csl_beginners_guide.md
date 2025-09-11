# Instruo Cs-L - Beginner's Guide

**The West Coast Synthesis Powerhouse**

---

## Quick Start: Get Your First Complex Sound in 5 Minutes

**What is Cs-L?** Think of it as two different oscillators that love to talk to each other, creating sounds that are much more complex and interesting than what either could make alone. It's like having a musical conversation between two different personalities in one module.

### Your First Complex Tone
1. **Connect keyboard/sequencer** → **OSC B 1V/OCT** input (bottom left)
2. **Turn OSC B Coarse knob** to a comfortable pitch (around 12 o'clock)
3. **Connect OSC B FINAL output** → your mixer/audio interface
4. **Slowly turn up OSC B WAVEFOLD fader** → hear the sine turn into rich, complex tones
5. **Play with OSC B SYMMETRY knob** → changes the character of the wavefold

**Congratulations!** You've just experienced wavefolding - a core technique of West Coast synthesis!

---

## Essential Parameters (The Big 6)

### **1. Coarse & Fine Frequency Knobs**
- **What they do:** Set the pitch of each oscillator (like tuning two guitar strings)
- **Musical result:** Coarse = big jumps, Fine = precise tuning
- **Key insight:** Each oscillator has different cores (Sawtooth vs Triangle) so they sound different

### **2. Wavefold Faders** 
- **What they do:** Transform sine waves into increasingly complex timbres
- **Musical result:** Left = quiet sine, Center = pure sine, Right = rich harmonic buzz
- **Magic zone:** Anywhere from 1-3 o'clock gives musical complexity
- **Watch the LEDs:** They show you the shape of the folded waveform!

### **3. Index Knob + Button System**
- **What it does:** Controls how much the oscillators modulate each other internally
- **Musical result:** Turn it up and things get wild - oscillators start affecting each other
- **Pro tip:** Hold INDEX button and press other buttons to choose what gets modulated

### **4. Link Button**
- **What it does:** Makes both oscillators track the same keyboard/sequencer input
- **Musical result:** Play both oscillators in tune together from one CV source
- **When to use:** Great for complex harmonic textures that stay in tune

### **5. Sync Button** 
- **What it does:** Makes one oscillator reset/lock to the other
- **Musical result:** Creates harmonically rich, stable intervals
- **Three states:** Off, A→B sync (amber), B→A sync (white)

### **6. Ring/AM/Rect Button + Multiply Section**
- **What it does:** Mathematically combines the two oscillators' signals
- **Musical result:** Ring mod = metallic sounds, Rectify = punchy/filtered sounds
- **Controls:** DEPTH knob sets how much, button selects the type

---

## Beginner Patch Ideas

### **Patch 1: West Coast Lead Voice**
```
[Keyboard] ──1V/OCT──→ [Cs-L OSC B 1V/OCT]
[Cs-L OSC B FINAL] ──→ [Filter or VCA] ──→ [Audio Out]
```
**Visual:** Watch the wavefold fader LEDs dance as you adjust the fader
**Controls:** WAVEFOLD fader = brightness, SYMMETRY = character
**Sound:** Rich, harmonically complex lead tones that evolve as you play

### **Patch 2: Self-Modulating Drone** 
```
Nothing patched - all internal connections!
[Cs-L MULTIPLY OUT] ──→ [Reverb] ──→ [Audio Out]
```
**Setup:** Press LINK button (white), set both oscillators to slightly different pitches
**Visual:** Multiple button states show different modulation types
**Controls:** INDEX knob controls interaction intensity, DEPTH controls multiply amount
**Sound:** Evolving, breathing drone textures that shift and morph continuously

### **Patch 3: Complex Harmonic Voice**
```
[Keyboard] ──1V/OCT──→ [Cs-L OSC A 1V/OCT] 
[Envelope] ──CV──→ [Cs-L OSC A WAVEFOLD CV]
[Cs-L OSC A FINAL + OSC B FINAL] ──→ [Mixer] ──→ [Audio Out]
```
**Visual:** Both oscillator LEDs show wavefold activity, INDEX button glows when active
**Controls:** Envelope shapes the timbre dynamically, mix both FINAL outputs
**Sound:** Keyboard-played complex tones with evolving harmonic content

### **Patch 4: FM Bell Tones**
```
[Keyboard] ──1V/OCT──→ [Cs-L OSC B 1V/OCT]
[Cs-L OSC B SINE] ──→ [Cs-L OSC A 1V/OCT] (tune A higher than B)
[Cs-L OSC A FINAL] ──→ [Audio Out]
```
**Visual:** FM ATTENUATOR positions control modulation depth
**Controls:** OSC A frequency = timbre, FM ATTENUATOR = brightness/metallicness  
**Sound:** Classic FM bell and chime sounds with rich harmonic content

---

## Common Use Cases

**🎹 **West Coast Lead Voice:** Wavefolder creates evolving harmonic content**
**🌊 **Self-Modulating Textures:** Internal routing creates evolving drones**  
**🔔 **FM Synthesis:** Use one oscillator to frequency-modulate the other**
**🎵 **Ring Modulation:** Multiply section creates metallic, bell-like tones**
**🎚️ **Dual Oscillator:** Use both independently for thick, detuned sounds**
**🌀 **Complex LFO:** Set OSC A to LFO mode for complex modulation sources**

---

## Beginner "Gotchas" 

### **Two Different Oscillator Cores**
- **OSC A (Top) = Sawtooth Core** - great for sync, FM, and classic waveforms
- **OSC B (Bottom) = Triangle Core** - smoother, different harmonic character
- **They sound different** even at the same settings - this is intentional!
- **Different frequency ranges** - matching knob positions ≠ matching pitches

### **The Index System is Confusing at First**
- **INDEX knob** controls overall modulation depth globally
- **INDEX button acts like "Shift"** - hold it and press other buttons  
- **Each button assigns a different modulation route** when INDEX is held
- **Multiple routings can be active** simultaneously for complex modulation

### **Normalled Connections (Invisible Cables)**
- **FM inputs are pre-connected** - OSC A sine → OSC B FM, and vice versa
- **Multiply inputs are pre-connected** to both sine waves
- **Patching a cable breaks the connection** - the module "forgets" the internal wire

### **Button States Matter**
- **Unlit = Off**, **White = One Direction**, **Amber = Other Direction**
- **SYNC button:** Off/A→B(amber)/B→A(white)
- **Multiple button:** Ring(off)/Half-wave(white)/Full-wave(amber)
- **SUB button:** Fundamental(off)/Sub-octave(white)/Two-octaves-down(amber)

### **It's Not Broken, It's Complex**
- **Complex oscillators sound different** from simple ones - expect rich, evolving timbres
- **Some sweet spots are very narrow** - tiny knob movements make big changes
- **Self-patching is encouraged** - patch outputs back to inputs for extra complexity

---

## Next Steps

1. **Master basic wavefolding** - get comfortable with the WAVEFOLD faders and SYMMETRY
2. **Explore the INDEX system** - learn to route internal modulation  
3. **Try self-patching** - patch FINAL outputs to CV inputs for feedback loops
4. **Experiment with sync modes** - different sync types create different harmonic relationships
5. **Use both oscillators together** - MULTIPLY section creates ring mod and AM effects

**Remember:** Cs-L rewards experimentation and happy accidents. Don't be afraid to turn knobs and see what happens!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Low Pass Gate (Optomix, Cinnamon):** Classic pairing for West Coast synthesis - shaped dynamics
- **Reverb/Delay (FX Aid, Magneto):** Complex tones + spacious effects = instant ambient magic
- **Envelope Generator (Maths, Function):** Dynamic control over wavefolding creates expressive timbres
- **Quantizer (Scales, QPAS):** Keep complex FM relationships in tune and musical

### **Next-Level Combinations:**
- **Pressure Points (Make Noise):** Touch control over INDEX and wavefold parameters for expressive playing
- **Filter (Morgasmatron, QPAS):** Further shape the complex harmonics from the wavefolders  
- **Another Complex Oscillator:** Stack multiple Cs-Ls for incredibly complex polyphonic textures
- **Random/Chaos (Wogglebug, S&H):** Random modulation of INDEX and symmetry creates organic evolution

### **Pro Tip:** Cs-L excels as a **complete voice** on its own - unlike simple oscillators, it can create full, evolving tones without needing filters or extensive modulation. Perfect as the centerpiece of a small West Coast system.

---

*Need the full technical manual? Find it at instruomodular.com*