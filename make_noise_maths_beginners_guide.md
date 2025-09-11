# Make Noise Maths - Beginner's Guide
*The Swiss Army Knife of Eurorack*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Maths?** Think of it as four powerful tools in one module: two envelope generators, two offset generators, and a mixer that can combine them all.

### Your First Envelope (Channel 1)
1. **Patch a trigger/gate** → Channel 1 **TRIG** input (top left)
2. **Turn Rise and Fall knobs** to 12 o'clock position  
3. **Patch Channel 1 Unity output** → your VCA CV input
4. **Trigger it!** You should see the LED light up and hear your envelope working

**Congratulations!** You just made Maths work as an envelope generator.

---

## Essential Parameters (The Big 4)

### **1. Rise Time** 
- **What it does:** Controls how fast the envelope goes UP
- **Musical result:** Attack time - fast = snappy drums, slow = swells
- **Range:** Instant to 25 minutes(!!)

### **2. Fall Time**
- **What it does:** Controls how fast the envelope goes DOWN  
- **Musical result:** Release/decay time - fast = plucks, slow = fade-outs
- **Range:** Instant to 25 minutes

### **3. Cycle Button**
- **What it does:** Makes the envelope repeat automatically = LFO
- **Musical result:** Press it and your envelope becomes a wobbling LFO
- **Try this:** Press cycle, turn Rise/Fall to different positions, patch to filter cutoff

### **4. Attenuverters (Center Knobs)**
- **What they do:** Control the strength and direction of each channel
- **12 o'clock = no effect**, **clockwise = positive**, **counter-clockwise = negative/inverted**

---

## Beginner Patch Ideas

### **Patch 1: Classic Envelope Generator**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Sequencer   │───▶│    Maths     │───▶│     VCA     │───▶ Audio Out
│ (Gate Out)  │    │ Ch1 TRIG IN  │    │   CV Input  │
└─────────────┘    │              │    └─────────────┘
                   │ Ch1 UNITY OUT│
                   │   [LED ●]    │
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer Gate → Maths Ch1 TRIG | Gate (Yellow) | Triggers envelope on each step |
| Maths Ch1 UNITY → VCA CV In | CV (Blue) | Controls amplitude |

**Module Settings:**
- **Maths:** Rise knob at 12 o'clock, Fall knob at 12 o'clock
- **Cycle button:** OFF (unpressed)
- **Ch1 Attenuverter:** 12 o'clock (unity gain)

**Visual Feedback:**
- **Ch1 Unity LED:** Flashes green when triggered, brightness follows envelope
- **Result:** Classic attack/decay envelope - adjust Rise for punch, Fall for tail

### **Patch 2: Continuous LFO for Filter Sweeps**
```
                   ┌──────────────┐    ┌─────────────┐
    [CYCLE ON] ───▶│    Maths     │───▶│   Filter    │
                   │ Ch1 CYCLE ●  │    │ Cutoff CV   │
                   │              │    └─────────────┘
                   │ Ch1 UNITY OUT│           ▲
                   │   [LED ◐]    │           │
                   └──────────────┘           │
                                              │
    ┌─────────────┐                         │
    │Oscillator   │─────Audio──────────────┘
    │(Audio Out)  │
    └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Oscillator Audio → Filter Audio In | Audio (Red) | Main signal path |
| Maths Ch1 UNITY → Filter CV In | CV (Blue) | Modulates cutoff frequency |

**Module Settings:**
- **Maths:** Cycle button PRESSED (LED lit), Rise/Fall at 10-2 o'clock range
- **Ch1 Attenuverter:** Adjust for desired filter sweep depth
- **Filter:** Resonance low, cutoff around center for best sweep range

**Visual Feedback:**
- **Ch1 Unity LED:** Pulses continuously green/red showing LFO wave
- **Cycle LED:** Stays lit indicating continuous operation
- **Result:** Automatic filter sweeps - faster Rise/Fall = faster wobble

### **Patch 3: Offset Voltage Generator (Transposition)**
```
                   ┌──────────────┐    
   No Input ──────▶│    Maths     │    
   (Normalled)     │ Ch2 SIGNAL   │    
                   │              │    ┌─────────────┐
                   │ Ch2 VARIABLE │───▶│ Oscillator  │
                   │   [LED ●]    │    │ V/OCT Input │
                   └──────────────┘    └─────────────┘
                          │                    ▲
                          │                    │
    ┌─────────────┐      │             ┌──────┴──────┐
    │ Sequencer   │──────┼─────────────│    Mult     │
    │ (CV Out)    │      │             │  (Mixer)    │
    └─────────────┘      └─────────────│             │
                                       └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer CV → Mult Input | CV (Blue) | Main pitch sequence |
| Mult Out 1 → Oscillator V/OCT | CV (Blue) | Normal pitch tracking |
| Maths Ch2 VARIABLE → Mult Input | CV (Blue) | Offset voltage for transposition |

**Module Settings:**
- **Maths:** Ch2 Signal input EMPTY (uses internal +10V reference)
- **Ch2 Attenuverter:** Clockwise = up transpose, Counter-clockwise = down
- **No Rise/Fall controls** needed for Channel 2 (it's not an envelope)

**Visual Feedback:**
- **Ch2 Variable LED:** Steady green (positive) or red (negative) showing offset
- **Result:** Transpose entire sequence up or down without changing intervals

### **Patch 4: Complex Multi-Stage Envelope**
```
┌─────────────┐    ┌───────┐    ┌──────────────┐
│ Sequencer   │───▶│ Mult  │───▶│    Maths     │
│ (Gate Out)  │    │       │    │ Ch1 TRIG IN  │
└─────────────┘    └───┬───┘    │              │
                       │        │ Ch4 TRIG IN  │◄─┘
                       └────────│              │
                                │ Ch1 UNITY OUT│──┐
                                │ Ch4 UNITY OUT│──┤
                                │              │  │
                                │  SUM OUTPUT  │◄─┘ ┌─────────────┐
                                │   [LED ◐]   │───▶│   Filter    │
                                └──────────────┘    │ Cutoff CV   │
                                                    └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Sequencer Gate → Mult Input | Gate (Yellow) | Split gate to both channels |
| Mult Out 1 → Maths Ch1 TRIG | Gate (Yellow) | Triggers first envelope |
| Mult Out 2 → Maths Ch4 TRIG | Gate (Yellow) | Triggers second envelope |
| Maths SUM → Filter CV In | CV (Blue) | Combined envelope shapes |

**Module Settings:**
- **Maths Ch1:** Rise FAST (9 o'clock), Fall MEDIUM (1 o'clock), Attenuverter +50%
- **Maths Ch4:** Rise SLOW (3 o'clock), Fall FAST (9 o'clock), Attenuverter +30%
- **Auto-summing:** Unity outputs automatically combine at SUM output

**Visual Feedback:**
- **Ch1 & Ch4 Unity LEDs:** Flash independently showing different envelope shapes
- **SUM LED:** Shows combined result - complex multi-peak envelope
- **Result:** "Shark fin" envelopes perfect for evolving filter sweeps

---

## Advanced Techniques

### **Self-Patching Feedback Loop**
```
┌──────────────┐
│    Maths     │
│ Ch1 UNITY OUT│──┐
│              │  │  ┌─────────────┐
│ Ch2 SIGNAL IN│◄─┼──│ Attenuator  │
│              │  │  │ (Optional)  │
│ Ch2 VARIABLE │  │  └─────────────┘
│    [LED ◑]   │  │
└──────────────┘  └──────────────┘
```
**Result:** Ch1 envelope modulates Ch2 offset, creating complex interactions

### **Slew Limiting (Smooth CV Changes)**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│Step Sequence│───▶│    Maths     │───▶│ Oscillator  │
│  (Jumpy CV) │    │ Ch3 SIGNAL   │    │ V/OCT Input │
└─────────────┘    │              │    └─────────────┘
                   │ Ch3 VARIABLE │
                   │   [LED ◐]    │
                   └──────────────┘
```
**Controls:** Rise/Fall set slew speed, creating smooth glides between steps

---

## Common Use Cases

**🎵 As Envelope Generator:** Channels 1 & 4 for shaping VCA, filter, or pitch
**🌊 As LFO:** Press Cycle button, use for filter sweeps, tremolo, pitch wobbles  
**⚡ As Slew Limiter:** Smooths out jumpy CV - patch CV through Signal input
**🔀 As Mixer:** Use SUM output to combine up to 4 CV sources
**📈 As Offset Generator:** Channels 2 & 3 add DC voltage to shift other signals up/down

---

## Pairs Well With

### **Essential Partners:**
- **VCA (2HP VCA, Intellijel uVCA):** Maths envelopes control volume shaping
- **Low Pass Gate (Optomix, LxD):** Maths into LPG = classic West Coast plucks  
- **Mult/Splitter:** Essential for sending one Maths output to multiple destinations
- **Filter (MMG, SEM, Ripples):** Maths LFOs create classic filter sweeps

### **Advanced Combinations:**
- **Function (Make Noise):** Two Functions + Maths = envelope powerhouse
- **Pressure Points:** Touch gates trigger Maths for expressive playing
- **DPO/Complex Oscillator:** Maths can modulate both pitch and timbre simultaneously
- **Clock Divider:** Use Maths EOC/EOR outputs to create polyrhythmic triggers

### **Perfect Pairings:**
- **Sequential Switches:** Route different Maths outputs to different destinations
- **VCAs for Each Channel:** Individual amplitude control over each Maths function
- **Multiple Filters:** Use different Maths channels for different filter modulation

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"Signal Input vs Trigger Input confusion"**
- **Signal Input:** Envelope follows gate length (sustains while high)  
- **Trigger Input:** Envelope always does full attack→decay cycle
- **Solution:** Most beginners want Signal Input for typical ADSR behavior

**"My knobs don't seem to do anything!"**
- **12 o'clock = OFF** on attenuverters (not maximum!)
- **Solution:** Turn clockwise from 12 for positive, counter-clockwise for negative

**"The normalization mystery"**
- **Variable outputs** mix automatically into SUM unless you patch them
- **Unity outputs** are separate and don't affect the mix
- **Solution:** This is a feature! Understand which outputs auto-mix

### **🎵 Pro Tips:**

**Attenuverter Mastery:**
- **12 o'clock = completely off** (not maximum gain)
- **Clockwise from 12 = positive amount** 
- **Counter-clockwise from 12 = negative/inverted amount**
- **Full clockwise/counter-clockwise = maximum effect**

**Cycle Button Magic:**
- **Transform any envelope into an LFO** instantly
- **Rise/Fall become LFO speed controls** in cycle mode
- **Great for live performance** - instant envelope-to-LFO switching

**Normalization Knowledge:**
- **Channels 2 & 3 generate +10V** when nothing's patched to Signal input
- **Perfect for offset voltages** and manual CV sources
- **Variable outputs auto-mix** - patch cables break normalization

**Timing Ranges:**
- **Maths can do everything** from audio-rate (FM) to 25-minute envelopes
- **Start in the middle** of Rise/Fall range for musical timing
- **Extreme settings unlock** FM synthesis and very long-form modulation

---

## Why This Module Rocks

### **The Philosophy:**
Maths proves that **one excellent module** can replace an entire rack of dedicated functions. It's not just an envelope generator - it's a complete analog computer that thinks in musical time and voltage relationships.

### **The Innovation:**
- **Four independent channels** that can work alone or together
- **Analog computation** handles addition, integration, and differentiation
- **Normalization system** creates intelligent signal routing without patching
- **Dual trigger types** (Signal vs Trigger inputs) for different envelope behaviors
- **Cycle mode** instantly transforms envelopes into LFOs

### **The Practical Benefits:**
- **Space efficiency:** Replaces multiple envelope generators, LFOs, mixers, and utilities
- **Learning tool:** Teaches fundamental analog synthesis concepts hands-on
- **Performance oriented:** Cycle buttons enable real-time envelope-to-LFO switching
- **Expandable:** Works alone or as part of larger Make Noise ecosystem

### **Perfect For:**
- **Beginners:** Learn envelopes, LFOs, and CV mixing in one module
- **West Coast enthusiasts:** Essential for buchla-style modular synthesis
- **Performers:** Real-time control over complex modulation shapes
- **Sound designers:** Complex CV processing and analog computation
- **Small system builders:** Maximum modulation functionality in 20HP

### **The Magic:**
Maths **thinks in musical time** - from microseconds to half-hours. It's not just generating envelopes, it's performing **analog mathematics** on your musical ideas, creating complex relationships that would require dozens of modules to achieve otherwise.

---

**Bottom Line:** Maths isn't just a module - it's a **musical computer** that teaches you to think in voltage and time. Every patch teaches you something new about how modular synthesis really works.

---

*Visit [Make Noise Music](https://makenoisemusic.com) for complete documentation, patch examples, and the legendary Maths manual*