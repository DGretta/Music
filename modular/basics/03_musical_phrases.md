# Musical Phrases

**Adding melody and rhythm to your voice.**

In Guides 01 and 02, you built a complete synthesizer voice: oscillator → filter → VCA, with two envelopes shaping amplitude and timbre. You can manually trigger notes. Now you'll add **sequencers** to create melodic patterns and rhythmic control.

**This guide teaches how sequencers generate pitch CV and gate signals,** replacing manual triggering with programmed musical phrases.

---

## What This Adds

**Sequencers generate two critical control signals:**

1. **Pitch CV (control voltage):** Tells oscillators what note to play (1V/octave standard)
2. **Gate/Trigger signals:** Tell envelopes when to fire, creating rhythm and note timing

**Your existing voice doesn't change—it gains a control source.** Instead of manually pressing a key or button, the sequencer sends pitch and timing information, creating repeating patterns or generative melodies.

**Why this matters:** Musical phrases require both **what note** (pitch CV) and **when to play it** (gate). Sequencers provide both simultaneously, coordinated and repeatable.

---

## Understanding Sequencers

### What Sequencers Do

**A sequencer stores and outputs a series of voltages (for pitch) and gates (for timing).** Each **step** in the sequence can have:
- A pitch value (CV output)
- A gate on/off state (gate output)
- Sometimes: gate length, probability, velocity, or other parameters

**The sequencer advances through steps** either:
- **Clocked externally:** An incoming clock signal (trigger) advances to the next step
- **Clocked internally:** The sequencer has a built-in clock running at a set tempo
- **Triggered manually:** You advance steps via button presses

**Types of sequencers:**

**Step sequencers:** Fixed number of steps (often 8, 16, or 32), loop continuously. You set pitch and gate for each step. Classic melodic pattern creation.

**Generative sequencers:** Use algorithms, randomness, or rules to create evolving patterns. Examples: Turing Machine, Marbles. Less predictable, more exploratory.

**MIDI sequencers with CV/gate outputs:** External hardware like Keystep Pro, Squarp Hermod, or Elektron Digitakt that sequence MIDI but also output CV/gate for modular.

**MIDI-to-CV modules:** Convert MIDI from computers, keyboards, or controllers into CV/gate. Examples: Expert Sleepers FH-2, Intellijel uMIDI, Doepfer A-190-5.

### The Keystep Integration (From Guide 01)

**If you're using Arturia Keystep, Keystep 37, or Keystep Pro,** you already have basic sequencing capability:
- **Keyboard mode:** Play notes manually, CV/gate outputs follow what you play
- **Sequencer mode:** Record and play back note sequences (up to 64 steps on Keystep Pro)
- **Arpeggiator mode:** Hold chords, generate arpeggiated patterns automatically

**This guide assumes you're either using Keystep's built-in sequencer or adding a dedicated eurorack sequencer module.** The principles are the same—sequencers generate pitch CV and gate.

---

## Integrating a Sequencer: Step by Step

**What you already have from Guide 02:**
- Oscillator → Filter → VCA → Output
- Two envelopes (one for VCA amplitude, one for filter cutoff)
- Trigger source (previously MIDI controller or manual gate)

**What you're adding:**
- 1× Sequencer (eurorack module, or using Keystep's built-in sequencer)

### Connection Order (Eurorack Sequencer)

**1. Sequencer to oscillator (pitch control):**
- Patch sequencer **CV output** → oscillator **V/Oct input**
- Now the sequencer controls what pitch the oscillator plays

**2. Sequencer to envelopes (timing control):**
- Patch sequencer **Gate output** → Envelope 1 gate input (amplitude envelope)
- Patch sequencer **Gate output** (using mult or second gate output) → Envelope 2 gate input (filter envelope)
- Now the sequencer triggers both envelopes simultaneously with each step

**Alternative if sequencer has multiple gate outputs:**
- Some sequencers provide multiple gate outputs or "accent" gates
- You could send different gates to different envelopes for varied articulation
- Start simple: same gate to both envelopes

**3. Clock source (if needed):**
- **Internal clock:** Many sequencers have built-in tempo controls—just set the BPM
- **External clock:** If using external clock (from another sequencer, drum machine, or MIDI clock-to-trigger module), patch clock source → sequencer clock input

**4. Program your sequence:**
- Set pitch values for each step (usually via knobs or buttons)
- Enable/disable gates per step (some steps can be rests—no gate output)
- Set sequence length if configurable (8 steps? 16? Variable?)
- Start the sequencer (play button, or send clock/gate to run input)

### Connection Order (Keystep as Sequencer)

**If using Keystep's built-in sequencer:**

**1. Keystep CV output to oscillator:**
- Patch Keystep **CV output** → oscillator **V/Oct input**
- Pitch from sequenced notes or keyboard playing controls oscillator

**2. Keystep Gate output to envelopes:**
- Patch Keystep **Gate output** → Envelope 1 gate input
- Use mult or stackable cable to also send to Envelope 2 gate input
- Both envelopes trigger when Keystep sends gate

**3. Program sequence on Keystep:**
- Enter sequencer mode (check Keystep manual for mode switching)
- Record or input note sequence
- Press play—sequence loops, sending pitch CV and gate

**4. Sync with external gear (optional):**
- Keystep can send/receive MIDI clock for tempo sync with DAW or other gear
- Not required for standalone use

---

## What You're Hearing

**The sequencer plays your voice automatically.** Each step:
1. Sends pitch CV to oscillator (changes note)
2. Sends gate to envelopes (triggers amplitude and filter envelopes)
3. Your voice responds: oscillator plays new pitch, envelopes shape sound, filter sweeps, VCA opens/closes

**The interaction creates musical phrases:**
- **Melodic patterns:** Sequence of pitches creates melody
- **Rhythmic patterns:** Gate timing creates rhythm (which steps have notes, which are rests)
- **Combined:** Melody + rhythm = musical phrase

**Experiment:**
- Change sequence tempo (faster/slower clock)
- Adjust envelope times while sequence plays (hear how articulation changes)
- Modify filter cutoff envelope—slower or faster than amplitude envelope
- Add rests (steps with no gate)—creates space, rhythmic interest

---

## Module Recommendations

### Sequencers

**Budget: 2hp TM (Turing Machine)** (around $120)
- Generative sequencer based on shift register
- Creates evolving, semi-random patterns
- Compact (2HP), affordable
- Not traditional step sequencer—more exploratory
- Great for ambient, evolving textures

**Budget alternative: Doepfer A-155 Analog/Trigger Sequencer** (around $200)
- Classic 8-step sequencer with trigger rows
- Two rows of CV, one row of gates
- Vintage approach, hands-on control
- Requires separate clock source

**Mid-range: Erica Synths Black Sequencer** (around $350)
- 16-step CV/gate sequencer
- Per-step pitch, gate, and modulation
- Built-in quantizer (snaps pitches to musical scales)
- Clear interface, good for learning traditional sequencing

**Mid-range: Intellijel Metropolix** (around $650)
- Advanced step sequencer with extensive features
- 64 steps, per-step modulation lanes
- Complex routing, probability, skip/ratcheting
- Deep but powerful—grows with your skills

**Higher-end: Squarp Hermod+** (around $600)
- Eight-track MIDI/CV sequencer
- Computer-like interface (screen + encoders)
- Records CV, plays back complex patterns
- Integrates MIDI and CV seamlessly
- Steep learning curve, professional capabilities

**Higher-end alternative: Make Noise Rene 2** (around $600)
- Cartesian sequencer (X/Y grid approach)
- Non-linear sequencing—not just step 1, 2, 3
- Deep programming, experimental results
- Unique workflow, not traditional step sequencing

**External option: Arturia Keystep Pro** (around $400)
- Four-track polyphonic sequencer
- CV/gate outputs per track
- Arpeggiator, scales, MIDI sequencing
- Standalone or integrated with DAW
- Not eurorack module—external controller with CV outputs

### MIDI-to-CV Modules (If Using MIDI Sources)

**Budget: Doepfer A-190-5 MIDI/USB to CV/Gate** (around $150)
- Converts MIDI to CV/gate
- USB and MIDI DIN inputs
- Four channels of CV/gate output
- Simple, reliable, straightforward

**Mid-range: Intellijel uMIDI** (around $180)
- 1U format MIDI-to-CV (fits Intellijel cases with 1U rows)
- Polyphonic modes, multiple CV/gate outputs
- Compact, well-designed
- Limited to Intellijel case compatibility

**Higher-end: Expert Sleepers FH-2** (around $330)
- Eight channels CV/gate output from MIDI
- Extremely flexible configuration
- Requires expander modules for full I/O
- Professional-grade MIDI-to-CV conversion

---

## Understanding Pitch CV and Quantization

### 1 Volt per Octave (1V/Oct)

**The eurorack pitch CV standard:** Each volt increase raises pitch by one octave.

- **0V = C0** (very low C)
- **1V = C1** (one octave higher)
- **2V = C2** (two octaves higher)
- And so on...

**Within an octave, each semitone = 1/12 of a volt:**
- C to C# = +0.0833V
- C to D = +0.1667V
- C to E = +0.3333V
- etc.

**Why this matters:** When you turn a sequencer's pitch knob, you're adjusting voltage. Most sequencers let you dial in specific voltages for musical intervals.

### Quantization

**Quantizers snap incoming CV to the nearest musical note** within a chosen scale.

**Without quantization:** Your sequencer knob might output 1.234V—some microtonal pitch between notes.

**With quantization:** That 1.234V gets "snapped" to the nearest scale degree—maybe 1.25V (C# in a chromatic scale) or 1.167V (D in a major scale).

**Why use quantizers:**
- Makes sequences instantly musical (no out-of-tune notes)
- Enables generative/random CV to produce melodies (random voltages become scale notes)
- Simplifies programming—just turn knobs, quantizer ensures musical results

**Built-in vs. external:**
- Some sequencers have **built-in quantizers** (Erica Black Sequencer, Metropolix)
- Others require **external quantizer modules** (Intellijel Scales, 2hp Tune, Mutable Instruments Braids in quantizer mode)

**For beginners:** Quantization is helpful but not essential day-one. Start with manual pitch dialing, add quantization later if desired.

---

## Common Issues and Solutions

### "The sequencer is running but I don't hear pitch changes"

**Check:**
1. Is sequencer CV output patched to oscillator V/Oct input? (Not FM input, not PWM—specifically V/Oct or 1V/Oct)
2. Are the pitch knobs on your sequencer actually set to different values per step? (All steps at same voltage = no melody)
3. Is oscillator responding to CV? (Try patching CV from another source to verify oscillator tracks pitch)

### "The sequence plays but notes don't trigger"

**Check:**
1. Is sequencer gate output patched to envelope gate inputs?
2. Are gates enabled for those steps? (Some sequencers let you disable gates per step)
3. Is the sequencer actually running? (Check for clock signal, play button status)

### "Notes are out of tune / sound random"

**Either:**
1. Pitch knobs aren't dialed to specific notes (use quantizer or tune carefully)
2. Oscillator tracking is off (some VCOs need calibration for accurate 1V/Oct tracking—check manual)
3. You're using a generative sequencer (like Turing Machine) which creates semi-random evolving patterns—that's by design

### "The sequence is too fast/too slow"

**Adjust clock tempo:**
- **Internal clock:** Turn sequencer's tempo/rate knob
- **External clock:** Adjust tempo on clock source (Keystep BPM, external sequencer tempo, clock divider/multiplier module)

**Typical range:** 60-120 BPM for musical tempos, slower for ambient, faster for techno/rhythmic patterns

### "All notes have the same length (no variation)"

**Gate length control:**
- Some sequencers have global or per-step **gate length** controls
- Shorter gates = staccato notes (quick envelope triggers)
- Longer gates = legato notes (envelopes sustain longer)
- If your sequencer lacks gate length control, you can add a **gate processor module** (like Mutable Instruments Branches or 4ms RCD) to vary gate timing

---

## Expanding This Patch

**You've added compositional control.** Your system now:
- Generates pitch patterns (melody)
- Triggers rhythmic events (timing)
- Shapes timbre and amplitude (via envelopes and filters from Guide 02)

**This is a complete musical instrument.** You can compose, perform, and record melodic phrases.

**Experiments to try:**
- **Sequence length variations:** Try 5-step, 7-step, or 13-step sequences (odd lengths create evolving patterns against 4/4 timing)
- **Gate patterns:** Turn off gates on certain steps to create rests and rhythmic syncopation
- **Tempo changes:** Start slow, gradually speed up, hear how envelope times feel different at various tempos
- **Multiple sequences:** If your sequencer has multiple CV outputs, use one for pitch, another to modulate filter cutoff or VCA level

**Next steps (not in this guide):**
- **Guide 04: Rhythm and Percussion** explores different voice architectures for drums and percussive sounds
- **Advanced sequencing:** Probability, ratcheting, polyrhythms, modulation lanes
- **Multiple voices:** Add second oscillator, second filter, create polyphonic or layered patches

---

## Why This Matters: Interconnection Thinking

**Sequencers are control sources, not sound sources.** They generate voltages and gates—abstract signals with no inherent sound. **Meaning comes from routing:**

- Sequencer CV → oscillator pitch = melody
- Sequencer CV → filter cutoff = timbral sequence
- Sequencer CV → VCA level = dynamic sequence
- Sequencer gate → envelope = rhythmic triggering

**Same sequencer, different destinations, completely different musical results.**

**This is modular thinking:** Separate **what** (CV values) from **where** (destination). Every sequencer becomes infinitely flexible because destinations determine function.

**Composition vs. performance:**
- **Sequencers enable composition:** Pre-program patterns, let them loop, focus on sound design
- **Manual control enables performance:** Play via keyboard, improvise, real-time expression

**You can combine both:** Sequence bass line, play melody over it. Sequence rhythm, manually control filter. The system adapts to your workflow.

---

## Equipment Summary

**What you need for this patch:**
- Everything from Guides 01-02 (oscillator, filter, two envelopes, VCA, output, case, cables)
- 1× Sequencer (eurorack module) **OR** using Keystep's built-in sequencer
- ~5-10 additional patch cables
- Optional: Mult module if splitting gate to multiple envelopes (or use stackable cables)
- Optional: Quantizer module if sequencer lacks built-in quantization

**Additional HP requirement:** 8-30HP depending on sequencer choice (or 0HP if using external Keystep)

**Additional cost:** $120-650 for eurorack sequencer, or $0 if using Keystep from Guide 01

**Total system so far:** 
- Approximate HP: 45-80HP
- Approximate cost: $700-1800 (modules only, not including case/power/cables/external gear)

**Reality check:** You have a complete monophonic synthesizer voice with sequencing. This is a functional performance/composition instrument. Future expansion adds voices, modulation, effects—but this foundation is musically complete.

---

## What's Next

You've added melody and rhythm through sequencing. You understand how pitch CV and gates control your voice, and how sequencers generate repeating or evolving musical phrases.

**Guide 04: Rhythm and Percussion** explores different voice architectures. You'll learn how drum sounds differ from melodic voices (noise sources, short envelopes, different filter uses), and how to create percussive elements.

But first, compose with what you have. Program sequences. Adjust envelopes while patterns play. Explore the relationship between melodic content (sequencer) and timbral expression (envelopes, filters).

**You've built a complete monophonic synthesizer with sequencing. Welcome to composition in modular.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For building your first voice, see 01_making_sound.md and 02_controlling_sound.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*