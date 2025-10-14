# Arturia MatrixBrute - Complete Guide
*Flagship Analog Monosynth with 16x16 Modulation Matrix and Semi-Modular Patchbay*

![Arturia MatrixBrute](https://github.com/DGretta/Music/raw/main/synthesizers/images/arturia/matrixbrute/front_panel.jpg)
*Arturia MatrixBrute front panel featuring the revolutionary 16x16 LED modulation matrix, three Brute oscillators, dual filter architecture (Steiner-Parker + Moog Ladder), comprehensive modulation sources, analog effects, and 49-key velocity-sensitive keyboard with aftertouch*

---

## Quick Start: Your First MatrixBrute Sound in 5 Minutes

**What is the MatrixBrute?** Arturia's flagship analog synthesizer combining three powerful oscillators, dual filter architecture (Steiner-Parker + Moog Ladder), and the revolutionary 16x16 modulation matrix - an LED grid that transforms complex modulation routing into visual, tactile control. With 12 CV inputs/outputs and true analog signal path, it bridges the gap between preset-based synthesizers and modular flexibility.

### Your First Massive Analog Sound

1. **Power on** - The MatrixBrute boots immediately, last-used preset loads automatically

2. **Press PRESET button** - The matrix LEDs illuminate in purple, showing preset mode

3. **Select Preset B-01** ("Axxe Lead") - Press row B, column 01 on the LED matrix
   - This classic lead sound showcases three-oscillator power with filter sweeps

4. **Play the keyboard** - 49-key velocity-sensitive with aftertouch provides immediate expression

5. **Explore real-time controls:**
   ```
   MOD WHEEL - Adds vibrato and filter movement
   FILTER 1 CUTOFF - Opens Steiner-Parker filter for brightness
   FILTER 2 CUTOFF - Opens Ladder filter for classic Moog warmth
   BRUTE FACTOR - Adds harmonic saturation and feedback (turn right slowly!)
   ```

6. **Press MOD button** - The matrix transforms into modulation routing display
   - Lit LEDs show active modulation connections
   - Sources = rows, Destinations = columns

7. **Try different presets** - Navigate the 16x16 grid to explore 256 factory sounds
   - Row A-P = Banks, Columns 1-16 = Presets within bank

**Congratulations!** You've just experienced the MatrixBrute's unique interface - where the modulation matrix serves triple duty as routing system, sequencer, and preset recall. This visual approach to synthesis makes complex modulation immediately understandable!

---

## Why the MatrixBrute Excels

### **The Revolutionary 16x16 Modulation Matrix:**

The MatrixBrute's defining feature isn't just a modulation system - it's a **visual patching paradigm** that makes complex analog synthesis as intuitive as pressing buttons. Unlike traditional synthesizers where modulation routings hide in menus or require dozens of patch cables, the MatrixBrute's LED grid puts every connection in front of you simultaneously.

**What Makes It Revolutionary:**
- **16 modulation sources** can route to **16 destinations** = 256 possible connections
- **LED visualization** - Active routings glow blue, selected cell glows purple, creating instant visual feedback
- **Bipolar modulation** with precise data dial control (+127 to -127 via 14-bit resolution)
- **4 user-assignable destinations** - Assign ANY parameter as a modulation target
- **Auto-summing** - Multiple sources to one destination add together automatically (built-in CV mixing)
- **No patch cables required** - Electronic routing with preset recall, yet maintains modular flexibility

**Why This Matters for Sound Design:**
Traditional modular routing requires planning then executing with cables. The MatrixBrute lets you **see all active modulations simultaneously** and change them instantly. When you press MOD and see the matrix light up with active connections, you understand the sound's architecture immediately - no detective work required.

This visual approach accelerates learning. Beginners understand modulation faster because they see the connections. Advanced users explore faster because they can create/modify/compare complex routings in seconds rather than minutes.

### **Dual Filter Architecture - Two Legendary Topologies:**

Most synthesizers offer one filter type. MatrixBrute provides two fundamentally different filter designs that can work independently or together:

**Steiner-Parker Filter (Filter 1):**
- **Four modes:** Low Pass, High Pass, Band Pass, Notch (all simultaneously available)
- **12dB or 24dB per octave** slope selection
- **Drive control** adds harmonic saturation before filtering
- **Brute Factor** feedback circuit creates self-oscillation and aggressive resonance
- **Character:** Aggressive, surgical, excellent for removing specific frequencies

**Moog Ladder Filter (Filter 2):**
- **Three modes:** Low Pass, High Pass, Band Pass
- **12dB or 24dB per octave** slope selection
- **Drive control** for warmth and saturation
- **Brute Factor** feedback for classic Moog screaming resonance
- **Character:** Warm, musical, creamy vintage analog sound

**Series or Parallel Routing:**
- **Series mode:** Signal passes through Filter 1 then Filter 2 for complex filtering curves
- **Parallel mode:** Signal splits to both filters, outputs combine for broader frequency response
- **Example:** Steiner HP (remove lows) → Ladder LP (remove highs) = precise bandpass with character

### **Three-Oscillator Analog Voice Architecture:**

**VCO 1 & 2 (Brute Oscillators):**
- **Simultaneous waveforms:** Sawtooth + Pulse + Triangle (all three mixable simultaneously)
- **Ultrasaw** on sawtooth - Adds two phase-shifted copies for instant 3-oscillator thickness
- **Pulse Width Modulation** - Continuously variable from narrow spike to square wave
- **Metalizer** on triangle - Transforms mellow sine-like wave into aggressive metallic harmonics
- **Sub-oscillator** on each (square wave, one octave down)
- **Hard sync capable** - Classic sync tones with aggressive harmonics

**VCO 3 (Dual-Function Oscillator):**
- **Simultaneous audio + LFO operation** - Can be sound source AND modulation source at once
- **Three waveforms:** Sawtooth, Triangle, Square
- **Wide frequency range** - From sub-audio LFO rates to audio frequencies
- **Unique capability:** Provides third oscillator for massive sounds while maintaining three LFOs total

This architecture means you can create sounds using all three oscillators as audio sources while still having two dedicated LFOs plus VCO 3 as a third LFO - unprecedented modulation depth.

### **12x12 CV Patchbay Integration:**

The rear panel CV system isn't an afterthought - it's integral to the MatrixBrute's semi-modular design:

**12 CV Inputs:** Add external modulation to matrix destinations
- VCO 1 Pitch, VCO 2 Pitch, VCO 1 Ultrasaw, VCO 2 Ultrasaw
- VCO 1 PW, VCO 2 PW, VCO 1 Metalizer, VCO 2 Metalizer
- Filter 1 Cutoff, Filter 2 Cutoff, LFO 1 Amount, VCA

**12 CV Outputs:** Send internal modulation to external gear
- Outputs correspond to matrix destinations - the CV output jack sends whatever modulation is routed to that destination
- **Example:** Route LFO 1 to VCO 2 Pitch in matrix → VCO 2 Pitch CV output now sends LFO 1 voltage
- **Auto-mixing:** If multiple sources modulate one destination, the output sums them automatically

**Revolutionary Modular Integration:**
Unlike synthesizers with fixed CV assignments, the MatrixBrute's CV outputs are **dynamically assigned via the matrix**. This means:
- One envelope can modulate 16 destinations (12 internal + 4 external) without mult modules
- Complex modulation combinations auto-mix without dedicated mixer modules
- External gear integrates into the matrix as additional sources/destinations

### **True Analog Signal Path with Analog Effects:**

Many "analog" synthesizers route through digital effects, compromising the signal. MatrixBrute maintains 100% analog audio path throughout:

**Five Analog Effects (BBD-Based):**
- **Stereo Delay** - Bucket-brigade analog delay with modulation
- **Mono Delay** - Classic slapback and echo
- **Chorus** - Analog chorus with vintage character
- **Flanger** - Resonant sweeping with feedback
- **Reverb** - Multi-tap analog reverb (unique design)

**Effects as Modulation Destinations:**
All effect parameters can be modulation destinations in the matrix. Route LFOs, envelopes, or sequencer modulation to delay time, chorus rate, reverb mix - effects become dynamic sound design tools rather than static processing.

### **64-Step Sequencer with Modulation Track:**

The matrix transforms into a full-featured step sequencer:

**Four Parallel Tracks:**
- **STEP** - Pitch sequence (64 steps)
- **ACCENT** - Velocity/accent per step
- **SLIDE** - Portamento between notes
- **MODULATION** - Dedicated CV sequence (routes via matrix like any modulation source)

**Performance Features:**
- Real-time recording and step programming
- Pattern length 1-64 steps
- Swing and gate time control
- Pattern storage in presets

The modulation track is revolutionary - it's a 64-step CV sequencer that can modulate ANY matrix destination. Create filter sweeps, PWM animation, LFO rate changes, or effect parameter automation that evolves throughout the sequence.

### **Professional Performance Integration:**

**49-Key Velocity + Aftertouch Keyboard:**
- Full-size keys with professional feel
- Velocity controls envelope amount, filter brightness, or any matrix destination
- Aftertouch for real-time expression (routes to matrix destinations)

**Performance Controls:**
- Pitch bend and mod wheels (both route to matrix)
- Four assignable Macro knobs (control up to 16 parameters each via matrix)
- Two expression pedal inputs + sustain pedal
- Panel/Preset mode switching for sound-per-knob vs. preset recall

**Paraphonic Modes:**
- **Mono mode:** All three oscillators on one key (massive monosynth)
- **Duo mode:** VCO 1 plays keyboard, VCO 2+3 play sequencer (play bass while sequencing melody)
- **Paraphonic mode:** Oscillators split across multiple keys (pseudo-polyphony)

---

## Essential Interface (The MatrixBrute Control Surface)

### **Signal Flow Understanding:**

🔴 Audio │ 🔵 CV │ 🟡 Gate

```
MATRIXBRUTE COMPLETE SIGNAL FLOW

SOUND GENERATION
┌─VCO 1─────┐   ┌─VCO 2─────┐   ┌─VCO 3─────┐
│ Saw+Pls+Tri│   │ Saw+Pls+Tri│   │ Saw+Tri+Sq│
│ + Sub ○────┤   │ + Sub ○────┤   │ ○─────────┤
│ Ultrasaw   │   │ Ultrasaw   │   │ (Audio)   │  🔴 Audio Oscillators
│ PWM        │   │ PWM        │   │           │
│ Metalizer  │   │ Metalizer  │   │ (also LFO)│  🔵 VCO3 = Audio + Mod
└────────────┘   └────────────┘   └───────────┘
      ↓                ↓                 ↓
      └────────────────┴─────────────────┘
                       ↓
              ┌────────────────┐
              │  MIXER SECTION │  🔴 Audio Mixing
              │  + Noise       │
              │  + Ext Input   │
              └────────┬───────┘
                       ↓
        ┌──────────────┴──────────────┐
        ↓                              ↓
┌───────────────┐              ┌──────────────┐
│ FILTER 1      │              │ FILTER 2     │
│ Steiner-Parker│ ←─Series──→  │ Moog Ladder  │  🔴 Dual Filter Routing
│ LP/HP/BP/Notch│  Parallel    │ LP/HP/BP     │
│ Drive + BF    │              │ Drive + BF   │
└───────┬───────┘              └──────┬───────┘
        └──────────────┬───────────────┘
                       ↓
                  ┌────────┐
                  │  VCA   │  🔴 Amplifier (ENV2 hardwired)
                  └────┬───┘
                       ↓
              ┌────────────────┐
              │ ANALOG EFFECTS │  🔴 Five BBD-based effects
              │ Delay/Chorus/  │
              │ Flanger/Reverb │
              └────────┬───────┘
                       ↓
                   MAIN OUT 🔴


MODULATION ARCHITECTURE
┌──────────────────────────────────────────────────────────────────┐
│                  16x16 MODULATION MATRIX                         │
│                                                                  │
│  SOURCES (Rows):              DESTINATIONS (Columns):            │
│  ─────────────                ──────────────────                 │
│  • LFO 1, 2, 3               • VCO 1/2 Pitch, Ultrasaw, PW,     │
│  • ENV 1, 2, 3                 Metalizer                         │
│  • Mod Wheel                 • VCO 3 Pitch, Wave                │
│  • Aftertouch                • Filter 1/2 Cutoff                │
│  • Velocity                  • LFO 1/2 Rate                      │
│  • Keyboard CV               • ENV 1/2/3 Amount                  │
│  • Sequencer                 • Effect Parameters                 │
│  • Sequencer Mod Track       • Macro 1-4                         │  🔵 Complex CV Routing
│  • Macro 1, 2, 3, 4          • USER ASSIGNABLE x4                │
│  • Envelope Follower         •                                   │
│                              •                                   │
│  [Press source row + destination column to create routing]      │
│  [Turn Data Dial to set modulation amount: -127 to +127]        │
│                                                                  │
│  AUTO-SUMMING: Multiple sources → one destination = added       │
│  BIPOLAR: Positive (open/up) or Negative (close/down) mod       │
└──────────────────────────────────────────────────────────────────┘
                           ↓  🔵
              ┌─────────────────────────┐
              │  12 CV OUTPUTS (Rear)   │  🔵 CV to Eurorack
              │  Output active matrix   │
              │  destination voltages   │
              └─────────────────────────┘

              ┌─────────────────────────┐
              │  12 CV INPUTS (Rear)    │  🔵 CV from Eurorack
              │  Add external mod to    │
              │  matrix destinations    │
              └─────────────────────────┘
```

### **The Matrix: Three Modes, One Grid:**

**PRESET Mode (Purple LEDs):**
- Rows A-P = Banks 1-16
- Columns 1-16 = Presets within bank
- Press intersection = Load preset
- 256 total preset storage

**SEQ Mode (Green LEDs):**
- 64-step sequencer programming
- STEP track = Pitch (press column buttons to enter notes)
- ACCENT track = Velocity per step
- SLIDE track = Portamento between notes
- MOD track = CV sequence (routes like any modulation source)

**MOD Mode (Blue/Purple LEDs):**
- Rows = 16 modulation sources
- Columns = 16 destinations
- Blue LED = Active routing
- Purple LED = Selected for editing
- Data dial sets amount (-127 to +127)

---

## Modulation Matrix Mastery

**THIS IS THE HEART OF THE MATRIXBRUTE** - Understanding the matrix transforms the MatrixBrute from "powerful synthesizer" to "visual modular system." This section provides matrix mastery from beginner concepts to advanced techniques.

### **Matrix Fundamentals: The Visual Patching Paradigm:**

**Traditional Modular vs. MatrixBrute Matrix:**

*Traditional:* Physical patch cable connects LFO output to VCO input - binary (connected or not), can't see all connections, can't save/recall

*MatrixBrute:* Press button where LFO row meets VCO column - LED lights blue, all 256 connections visible, complete configuration saves with preset

**The Interface:**
- **16 rows** = 16 modulation sources (things that create control voltage)
- **16 columns** = 16 destinations (parameters that respond to control voltage)
- **256 cells** = 256 possible modulation routings
- **One data dial** = Sets amount for selected cell (-127 to +127)

### **The 16 Sources & 16 Destinations:**

**Sources (Rows):** LFO 1/2/3, ENV 1/2/3, Mod Wheel, Aftertouch, Velocity, Keyboard CV, Sequencer, Seq Mod Track, Macro 1/2/3/4, Envelope Follower

**Destinations (Columns):** VCO 1/2 Pitch/Ultrasaw/PW/Metalizer, VCO 3 Pitch/Wave, Filter 1/2 Cutoff, USER ASSIGNABLE x4

**The Four User-Assignable Destinations:**
Columns 13-16 unlock full power - **any parameter** can become a modulation destination:

*To Assign:*
1. Hold Column 13-16 button
2. While holding, touch parameter knob you want to assign
3. Display confirms assignment
4. Assignment saves with preset

*Common Assignments:* LFO Rates, Effect Parameters (delay time, chorus rate, reverb mix), Envelope Times, Filter Resonance, Drive/Brute Factor

### **Matrix Operation:**

**Basic Routing (LFO 1 creates vibrato on VCO 1):**
1. Press MOD button (matrix enters modulation mode)
2. Press Row 1 (LFO 1) + Column 1 (VCO 1 Pitch)
3. LED lights PURPLE (selected for editing)
4. Turn DATA DIAL clockwise (+1 to +127 for positive modulation)
5. Play keyboard - hear vibrato
6. LED remains BLUE showing active routing

**Modulation Amount Control:**
- Range: -127 (maximum negative) to +127 (maximum positive)
- Zero = routing exists but does nothing
- **Positive:** Modulation adds to parameter (opens filter, raises pitch)
- **Negative:** Modulation subtracts/inverts (closes filter, lowers pitch)

### **Advanced Matrix Techniques:**

**Multiple Sources → One Destination (Auto-Summing):**

The matrix automatically adds multiple sources - no CV mixer required!

*Example: Complex filter modulation:*
- ENV 1 → Filter 2 Cutoff (+80) = Envelope opens filter
- LFO 1 → Filter 2 Cutoff (+30) = Adds wobble
- Velocity → Filter 2 Cutoff (+40) = Harder playing = brighter
- Aftertouch → Filter 2 Cutoff (+50) = Pressure opens further

All FOUR combine at Filter 2 for highly expressive control!

**One Source → Multiple Destinations:**

*Example: Macro 1 controls entire sound character:*
- Macro 1 → VCO 1 PW (+60) = Changes tone
- Macro 1 → Filter 1 Cutoff (+80) = Opens brightness
- Macro 1 → Filter 2 Cutoff (-40) = Closes complementary filter (opposite!)
- Macro 1 → Assign Col 13 (LFO 1 Rate) (+50) = Increases modulation speed

Single Macro 1 knob morphs entire sound from dark/slow to bright/fast!

**Sequencer Modulation Track Integration:**

The Seq Mod Track is a modulation source - creates **step-programmed modulation sequences**:

*Example: Stepped filter cutoff (dubstep wobble):*
1. Press SEQ, select MOD TRACK
2. Program CV values per step (different values per step)
3. Press MOD, route Seq Mod → Filter 2 Cutoff (+100)
4. Result: Filter cutoff follows programmed sequence - rhythmic filter patterns!

**Matrix + CV Patchbay Integration:**

*CV Outputs (Matrix → Eurorack):*
Each CV output sends whatever is routed to that destination in the matrix

*Example:* Route LFO 1 → VCO 1 Pitch internally. Connect VCO 1 Pitch CV Out → Modular VCO. Both MatrixBrute VCO 1 and modular VCO now have synchronized vibrato! If you add more sources (ENV, Velocity), they all appear at CV output automatically.

*CV Inputs (Eurorack → Matrix):*
External CV adds to matrix destinations

*Example:* Modular LFO → Filter 2 Cutoff CV In. Add internal LFO 1 → Filter 2 in matrix. BOTH modulate filter simultaneously!

### **Performance Macro Programming:**

**Morphing Macros:**
```
MACRO 1: "Intensity" (Minimum = mellow, Maximum = aggressive)
→ Filter Cutoff (+80) - Brighter
→ Filter Resonance (+70) - More resonance
→ VCO Metalizer (+60) - Adds harmonics
→ Assign Col 13: Drive (+90) - More saturation

Result: Single knob transforms sound character during performance
```

### **Matrix Workflow Tips:**

**Analyzing Presets:**
1. Load any preset
2. Press MOD button
3. Scan matrix - blue LEDs show all active modulations
4. Press any blue LED to see amount
5. You're reading the patch architecture visually!

**Building from Scratch:**
1. Press Panel + Preset = Initialize (blank slate)
2. Set basic sound (OSCs, filter, envelope)
3. Press MOD, add modulations ONE at a time
4. After each routing, play keyboard to hear result
5. Build complexity gradually

**Matrix Limitations & Workarounds:**
- Matrix routes CV (control voltage), not audio
- Can't route VCO audio into VCO pitch for true FM
- **Workaround:** Use Audio Mod section (VCO1→2, VCO2→3 hardwired FM)

---

## Patch Examples

### Patch 1 (Basic): Fat Analog Bass with Filter Sweep

*Foundation patch demonstrating three-oscillator power and dual filter architecture*

**MatrixBrute Settings:** VCO 1/2 (Saw + Sub, -1 octave, slight detune), VCO 3 (Saw, -2 octave), Filter 2 (Ladder LP, 24dB, Cutoff 9 o'clock, Resonance 10 o'clock), ENV 1 (Attack 0, Decay 1 o'clock, Sustain 0), ENV 2 (Attack 0, Decay 2 o'clock, Sustain 3 o'clock)

**Matrix:** ENV 1 → Filter 2 Cutoff (+90), Velocity → Filter 2 Cutoff (+40)

**What You Learn:**
- Three-oscillator detuning creates analog thickness
- Sub-oscillators add bass weight
- Dual envelope approach (ENV 1 filter, ENV 2 amplitude)
- Velocity sensitivity adds playing dynamics

**Similar Synthesizer Options:**
- **Budget:** Behringer DeepMind 6 (dual oscillators, similar architecture), Korg Monologue (single oscillator, more limited)
- **Different character:** Moog Subsequent 37 (Moog ladder filter throughout), Novation Bass Station II (different filter character)
- **Premium:** Moog One (16-voice polyphonic, three oscillators per voice), Sequential Prophet-5 Rev4 (polyphonic, legendary filter)

---

### Patch 2 (Intermediate): Sync Lead with Modulated Delay

*Hard sync technique with analog delay time modulation for rhythmic lead*

**MatrixBrute Settings:** VCO 1 (Pulse, 0 octave, sync master), VCO 2 (Saw, -1 octave, SYNCED to VCO 1), Mixer (VCO 1: 30%, VCO 2: 70%), Filter 2 (LP 12dB, Cutoff 2 o'clock, Resonance 11 o'clock), ENV 3 (Attack 0, Decay 2 o'clock, Sustain 9 o'clock), Stereo Delay (Time 1/8 note, Feedback 40%, Mix 30%)

**Matrix:** ENV 3 → VCO 2 Pitch (+80) [classic sync sweep], Velocity → Filter 2 Cutoff (+50), Assign Col 13 to Delay Time, LFO 1 → Col 13 (+60), Mod Wheel → LFO 1 Rate (+70)

**What You Learn:**
- Hard sync creates aggressive harmonics
- Envelope-controlled pitch for sync sweeps
- User-assignable destinations (delay time modulation)
- Mod wheel performance control

**Similar Synthesizer Options:**
- **Budget:** Arturia MicroBrute (hard sync capable, less modulation), Korg MS-20 Mini (different sync character)
- **Different character:** Novation Peak (digital sync algorithms, wavetable hybrid), Moog Matriarch (Moog-style sync, four oscillators)
- **Premium:** Sequential Prophet Rev2 (16-voice sync, extensive modulation), Moog One (premium three-oscillator sync per voice)

---

### Patch 3 (Advanced): Evolving Pad with Paraphonic Mode

*Uses paraphonic mode to split oscillators across keyboard for chord textures*

**MatrixBrute Settings:** Voice Mode: PARAPHONIC (rear switch), VCO 1/2 (Saw+Pulse mix, octaves 0/+1), VCO 3 (Saw, octave 0), Filter 1 (HP 24dB, 9 o'clock), Filter 2 (LP 12dB, 1 o'clock, Series routing), ENV 3 (Delay 11 o'clock, Attack 3 o'clock, Decay 2 o'clock), LFO 1/2 (Very slow rates, 8-9 o'clock), Chorus + Reverb (moderate mix)

**Matrix (8 routings):** LFO 1 → VCO 1 PW (+50), LFO 2 → VCO 2 PW (-40) [opposite phase], LFO 1 → Filter 2 Cutoff (+40), LFO 2 → Filter 1 Cutoff (-30), ENV 3 → Filter 2 Cutoff (+50), Assign Col 13/14 to Chorus Rate/Reverb Mix, LFO 1 → Col 13 (+35), LFO 2 → Col 14 (+45), Aftertouch → Filter 2 Cutoff (+60)

**What You Learn:** Paraphonic voice splitting (3-note pseudo-polyphony), Complementary modulation (LFOs in opposite directions), Delayed envelope evolution, Effect parameter animation

**Similar Synthesizer Options:**
- **Budget:** Korg Minilogue XD (true 4-voice polyphony), Behringer DeepMind 6 (true 6-voice poly)
- **Different character:** ASM Hydrasynth Desktop (true polyphony with poly aftertouch), Novation Summit (16-voice bi-timbral)
- **Premium:** Sequential Prophet Rev2 (16-voice true polyphony), Moog One (16-voice polyphonic)

---

### Patch 4 (Expert): CV-Controlled External Synth Integration

*MatrixBrute as modulation hub controlling Eurorack/semi-modular via patchbay*

**System Configuration:** MatrixBrute VCO 1 Pitch CV Out → Eurorack VCO 1V/Oct, MatrixBrute VCO 2 PW CV Out → Eurorack VCO PWM, MatrixBrute Filter 2 CV Out → Eurorack VCF, Eurorack Audio → MatrixBrute Audio In, Eurorack LFO → MatrixBrute Filter 1 CV In

**Matrix:** Keyboard CV → VCO 1 Pitch (auto), LFO 1 → VCO 1 Pitch (+30) [also goes to CV out], LFO 2 → VCO 2 PW (+60) [also goes to CV out], ENV 1 → Filter 2 Cutoff (+80) [also goes to CV out], Aftertouch → Filter 2 Cutoff (+50)

**What Makes This Expert:** Bidirectional CV flow, MatrixBrute controls external + external adds to internal, CV outputs dynamically assigned via matrix, Hybrid sound combining both systems

**Similar System Options:**
- **Budget:** Arturia MicroBrute + Behringer modular (limited CV I/O but accessible)
- **Different character:** Moog Mother-32 + DFAM (Moog ecosystem, different patching)
- **Premium:** Moog Matriarch (90 patch points), Make Noise System Cartesian (complete modular)

---

### Patch 5 (Master): Sequenced Techno Bass with Live Performance Control

*Advanced: sequencer + modulation track + macro performance + effect automation*

**Sequencer:** 16-step bass pattern (C1-G0-A#0 etc.), ACCENT track (steps 1,4,6,7), SLIDE track (steps 3,5,8), MOD track (values: 90,70,50,100,80 per step)

**MatrixBrute Settings:** VCO 1/2 (Saw + Sub, -1 octave), Filter 2 (LP 24dB, Cutoff 10 o'clock, Resonance 1 o'clock, Drive/BF 12/11 o'clock), Stereo Delay (1/16 note, Feedback 50%)

**Matrix (11 routings!):** Seq Mod → Filter 2 Cutoff (+100), ENV 1 → Filter 2 Cutoff (+70), LFO 1 → Filter 2 Cutoff (+40), Velocity → Filter 2 Cutoff (+50), MACRO 1 → Filter 2 Cutoff (+80), MACRO 1 → Filter 2 Resonance (+70), MACRO 1 → VCO 1 Metalizer (+60), Assign Col 13/14 to Drive/Delay Mix, MACRO 1 → Col 13 (+90), Seq Mod → Col 14 (+60), MACRO 2 → Col 14 (+90)

**Performance:** MACRO 1 = "Intensity" (opens filter/resonance/harmonics/drive), MACRO 2 = "Space" (delay/reverb mix), Build tracks by gradually increasing macros during performance

**What Makes This Master:** Filter receives 6 simultaneous modulation sources, Seq Mod Track modulates both filter AND delay, Performance macros control multiple parameters, Per-step animation via sequencer modulation, Professional live techno technique

**Similar Synthesizer Options:**
- **Budget:** Arturia MiniBrute 2S (sequencer + semi-modular), Behringer TD-3 (303-style, simpler)
- **Different character:** Moog Subsequent 37 (Moog sequencer), Novation Bass Station II (step sequencer, AFX mode)
- **Premium:** Moog Matriarch (256-step sequencer), Sequential Pro 3 (hybrid digital/analog)

---

## Common Use Cases

1. **Studio Production Centerpiece** - Analog foundation layer, MIDI from DAW, automation records Macro movements
2. **Live Performance Synthesizer** - 256 presets instantly recallable, Macros for real-time morphing, Duo mode (play while sequencer runs)
3. **Modular System Hub** - 49-key keyboard controls Eurorack, Matrix generates complex modulation (12 CV outputs), Audio return processes modular through filters/effects
4. **Sound Design Laboratory** - Visual matrix teaches modulation, Dual filter comparison, All synthesis techniques in one instrument
5. **Techno/Electronic Bass Machine** - 64-step sequencer with accent/slide, Modulation track animates filter per step, Macros morph sound during build/breakdown
6. **Ambient/Drone Instrument** - Paraphonic mode for chord drones, Slow LFOs, Analog effects add depth

---

## Troubleshooting & Pro Tips

### **⚠️ Common Mistakes:**

**"The matrix isn't doing anything!"** - Created routing but forgot to set amount. Solution: Turn DATA DIAL after pressing source+destination.

**"My sound changed but I didn't touch anything!"** - In PRESET mode when you wanted PANEL mode. Solution: Press PANEL button.

**"The sequencer is playing wrong notes!"** - In MOD track instead of STEP track. Solution: Ensure STEP row selected.

**"CV outputs aren't sending signal!"** - Nothing routed to that destination in matrix. Solution: CV outputs only send what's routed in matrix. Route something to see output.

### **🎵 Pro Tips:**

**Matrix Workflow:** Analyze presets by pressing MOD - blue LEDs show all routings. Learn sound design by reading architecture visually.

**Build Incrementally:** Start with Init Patch (Panel+Preset), add ONE modulation at a time, hear each result before adding next.

**Negative Modulation:** Use negative amounts for inverted modulation. Example: LFO → Filter (-60) creates downward sweep.

**Macro Programming:** Route Macro to multiple complementary parameters. Example: MACRO 1 → Filter (+80) AND Resonance (+70) AND Drive (+60) for unified "intensity" control.

**Paraphonic Playing:** Hold 3-note chords, let them overlap for seamless transitions. Press harder with aftertouch during sustain.

---

## Pairs Well With

### **Essential Companions:**

**Eurorack Modular** - 12 CV I/O, Gate I/O, 1V/octave standard. MatrixBrute provides keyboard + modulation hub, Eurorack provides specialized modules. Recommended: Make Noise Maths, Intellijel Scales, Mutable Instruments Clouds.

**Expression/Sustain Pedals** - Two expression inputs appear as modulation sources in matrix. Roland EV-5, Yamaha FC7, Boss FV-500L.

**MIDI Controller Keyboard** - Expand 49-key range with 61/88-key controller. Arturia KeyLab Essential, Native Instruments Komplete Kontrol.

**High-End Audio Interfaces** - Universal Audio Apollo Twin X, RME Babyface Pro FS, Focusrite Clarett+ 2Pre. Capture MatrixBrute's analog character properly.

### **Budget-Friendly Combinations:**
- **Under $3,500:** MatrixBrute + Expression Pedal + MIDI Controller + Audio Interface
- **Under $5,000:** Add small Eurorack system (84HP) for hybrid semi-modular/modular

### **Professional Studio Integration:**
- **DAW Integration:** USB MIDI, all knobs send MIDI CC, record automation
- **Hardware Effects:** Insert jack (rear) for external processors, guitar pedals
- **Layer with Polyphonic Synths:** MatrixBrute bass + Sequential Take 5 chords

---

## Historical Context

The Arturia MatrixBrute (2016) represents significant achievement in modern analog synthesis - successfully bridging preset-oriented workflow and modular flexibility. While modulation matrices existed in vintage synthesizers (EMS VCS3, ARP 2600), the MatrixBrute's 16x16 LED grid transformed abstract concept into visual, tactile experience.

**The Innovation:** Previous matrix implementations required memorization or printed overlays. The MatrixBrute's illuminated interface shows all 256 connections simultaneously, with active routings glowing blue - making complex modulation immediately understandable. This addresses fundamental synthesis challenge: **modulation is invisible**. The LED grid makes it visible.

**Dual Filter Heritage:** Including both Steiner-Parker and Moog Ladder filters acknowledges synthesis history while providing sonic flexibility. The Steiner-Parker (1970s) offers surgical precision, the Moog Ladder (1960s) provides warm character.

**Educational Impact:** The visual matrix accelerates synthesis learning - students see connections forming, understand cause/effect immediately. This visibility transforms complex analog synthesis into intuitive experience.

---

*The Arturia MatrixBrute combines three powerful Brute oscillators, legendary dual filter architecture, and the revolutionary 16x16 modulation matrix with 12x12 CV patchbay. The visual modulation paradigm makes complex analog synthesis intuitive - transforming 256 possible connections into immediate, tactile control. Perfect for studio production, live performance, and modular system integration.*