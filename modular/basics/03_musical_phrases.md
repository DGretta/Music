# Musical Phrases: Adding Melody and Rhythm

**Adding pattern and composition to your voice.**

In Guides 01 and 02, you built a complete synthesizer voice: oscillator → filter → VCA, with two envelopes shaping amplitude and timbre. You can manually trigger notes one at a time. Now you're ready to add **sequencers or live controllers**—modules that generate patterns of pitch and timing information automatically, or let you perform live.

**This guide teaches how sequencers and live controllers create musical phrases by generating two simultaneous control voltages: pitch CV (what note) and gate signals (when to play it).**

You can either pre-program repeating patterns, or perform live pitch and timing—both approaches are valid musical choices that build on the same principles.

---

## Before You Start: Sequencers and Controllers as Voltage Pattern Generators

This is the conceptual foundation.

**A sequencer doesn't "play notes" or "make music." It generates a series of voltages in a repeating pattern.**

**A live controller (Keystep, MIDI keyboard) doesn't "perform music" separately—it's also generating voltages that your modular responds to in real-time.**

Specifically, both output:
- **Pitch CV:** 1V/octave voltage values (0V, 1V, 2V, etc.)
- **Gate output:** Timing information (0V or +5V) that tells envelopes when to fire

**A sequencer stores a pattern of these voltages and outputs them repeatedly.** Each step has a pitch value and a gate state.

**A live controller outputs voltages based on your hands.** What pitch you're playing becomes CV. When you press/release a key becomes a gate.

**Both are sources—like an oscillator, but generating control voltage instead of audio voltage.**

Each step in a sequencer (or each note you play on a live controller) can have:
- A pitch value (CV output)
- A gate state (on/off)
- Sometimes: gate length, velocity, or other parameters

**The sequencer or controller outputs voltage.** That voltage goes somewhere (oscillator pitch input, envelope gate, anywhere). Different destinations, different musical results.

**This is still voltage routing.** The sequencer or controller is just a source—the principles are identical.

---

## What This Patch Does: From Manual Triggering to Automated or Live-Performed Patterns

You're replacing manual gate triggering with either sequencer-driven patterns or live-controller performance:

1. **Sequencer (or live controller) generates a pattern of pitch CV values** (a melody or harmonic progression)
2. **Sequencer (or live controller) generates timing information** (when each note plays)
3. **Pitch CV controls oscillator frequency** (determines which note plays)
4. **Gate or trigger information shapes envelopes** (amplitude and timbre evolve with the music)

**Two valid approaches:**

- **Step sequencer:** Pre-program a repeating 8-step, 16-step, or longer pattern. The sequence loops automatically. You're free to modulate filter, effects, or other parameters while the pattern plays.
- **Live controller (Keystep, MIDI keyboard):** Play pitches in real-time. The modular responds to each note as you play it. You perform pitch while also performing filter/effect modulation simultaneously.

**Result:** Either way, you move from single manual triggers to musical phrases—either pre-programmed and looping, or performed live.

---

## Understanding Sequencers and Controllers: Voltage Pattern Generation

### What They Do

**A sequencer stores and outputs a series of voltages in a loop.** Each step stores:
- A pitch value (encoded as CV, typically 1V/Oct)
- Whether that step has a gate/trigger

When the sequencer runs, it advances through steps and outputs the stored voltages.

**A live controller outputs voltages in real-time based on input.** When you play a key, it outputs that pitch's CV. When you press/release, it outputs gate information.

### Types of Sequencers

**Step sequencers:** Fixed number of steps (8, 16, 32, etc.), loop continuously. You dial in pitch and gate for each step manually. Classic melodic sequencer.

**Generative sequencers:** Use algorithms, randomness, or rules to generate evolving patterns. Examples: Turing Machine, Marbles. Less predictable, more exploratory.

**MIDI sequencers with CV/gate outputs:** External hardware (like Arturia Keystep Pro, Elektron Digitakt) that sequences MIDI but also outputs CV/gate. Bridges DAW and modular.

**Live controllers:** Keyboards, Keysteps, or other MIDI controllers that output CV/gate directly. No pre-programming—you perform pitch and timing in real-time.

**For beginners, step sequencers and live controllers both offer clear learning paths.** Step sequencers teach composition. Live controllers teach performance.

### Clock and Tempo

**Clock (or clock signal):** A repeating trigger pulse that advances the sequencer one step at a time.

- **Clock source:** Where the clock comes from (internal sequencer tempo, external sequencer, DAW sync, another module)
- **Clock speed:** How fast the clock pulses, measured in **PPQ (pulses per quarter note)** or **BPM (beats per minute)**. A typical clock might send 24 PPQ—24 pulses per quarter note—which divides the beat into finer increments. Different clock speeds control both the rate of step advancement and overall tempo
- **Clock divisions:** One clock pulse might advance one sequencer step, or might skip steps (clock dividers slow down the sequence)

**Typical workflow:**
1. Set sequencer tempo (e.g., 120 BPM)
2. Internal clock runs at that speed (typically 24 PPQ at that BPM)
3. Each clock pulse advances one sequencer step
4. Sequence repeats when it reaches the end

**Sync with external gear:** If you have a drum machine or another sequencer, you can send their clock to your modular sequencer, keeping everything in time.

### Quantization

**Quantization snaps incoming voltage to the nearest musical note within a chosen scale.**

**Without quantization:** You dial in a sequencer pitch knob to 1.234V—some voltage between notes (microtonal).

**With quantization:** That 1.234V gets snapped to the nearest semitone within your chosen scale (maybe 1.25V, which is C#, within a major scale).

**Why musicians use it:**
- Ensures sequences are always in-tune (no accidental microtones)
- Lets generative/random CV become musical (random voltages snap to scale degrees)
- Simplifies programming (turn knobs to "close" note values, let quantizer snap to exact pitches)

**Built-in vs. external:**
- Some sequencers have built-in quantization
- Others require external quantizer modules (like Intellijel Scales or Erica Synths Pico Quant)

### Clock Divisions and Polyrhythms

**One sequencer can advance at different speeds using clock dividers or multipliers.**

- **Clock divider:** Slows down a clock. Every second clock pulse advances the sequencer (creating half-speed playback)
- **Clock multiplier:** Speeds up a clock. Two or four clock pulses happen for every original pulse

**Musical use:**
- Kick drum on quarter notes (1x clock)
- Hi-hat on eighth notes (2x clock)
- Snare on half notes (1/2 clock)
- Create polyrhythms: three against four by using different clock multiples

---

## Why Each Component Matters: Completing the Voice

### The Sequencer or Controller: Pattern Memory or Live Expression

**What it does:** A sequencer stores a series of pitch CV and gate values, outputting them in sequence when clocked. A live controller outputs pitch and gate based on your real-time input.

**Why you need it:** Without a step sequencer, you're performing in real-time—which many musicians prefer. A Keystep, MIDI keyboard, or other controller lets you perform live while the modular responds. A step sequencer trades real-time performance control for repeating automation. Different approaches for different musical intentions.

**Voltage story (sequencer):** You program eight pitches into the sequencer (0.5V, 1V, 1.5V, 1V, etc.). You set which steps have gates (trigger on steps 1, 3, 5, 7, skip 2, 4, 6, 8). When you start the sequencer, it outputs 0.5V and a gate. Oscillator plays that pitch. Envelopes fire. After that step's duration, the sequencer advances, outputs 1V and nothing (no gate), oscillator glides to 1V but envelopes don't fire (a rest). Continues through the pattern, then loops.

**Voltage story (live controller):** You press a key on a Keystep. The Keystep outputs 1V (that note's pitch CV). Press another key. It outputs 0.5V. Release the key. It outputs a gate-off signal. Envelopes respond. You're generating the voltage pattern in real-time instead of pre-programming it.

### The Oscillator: Still Core

**What it does (unchanged):** Generates audio-rate voltage at a frequency determined by incoming 1V/Oct pitch CV.

**What's different:** Instead of that CV coming from a manual knob or MIDI keyboard, it comes from a sequencer or live controller. The oscillator doesn't know the difference—voltage is voltage. It tracks the sequencer's or controller's pitch CV just as readily as any other source.

**Voltage story:** Sequencer (or you on a live controller) outputs 1V. Oscillator frequency doubles (one octave higher). Sequencer outputs 0.5V. Oscillator frequency drops to halfway the original. You play the same key three times. Oscillator stays at that pitch for three step durations (or for as long as you hold the key).

### The Envelopes and VCA: Still Shaping

**What they do (unchanged):** Envelope 1 shapes amplitude, Envelope 2 shapes timbre.

**What's different:** Instead of manual gate triggers, the envelopes are triggered by the sequencer's or controller's gate output. Envelopes don't care where the gate comes from—0V to +5V is 0V to +5V.

**Voltage story:** Sequencer (or you on a live controller) sends gate on step 1. Both envelopes fire simultaneously. Amplitude envelope opens the VCA, filter envelope opens the cutoff. Step 2 has no gate (rest)—envelopes release, amplitude and brightness fade. Step 3 has gate—envelopes fire again.

---

## What You're Hearing: Controlled Pattern or Live Performance, Independent Expression

When you run a sequencer or live controller through your voice:

**Sequencer-driven approach (pre-programmed):**
- Step 1: 1V → oscillator plays an octave higher
- Step 2: 0.5V → oscillator plays halfway up
- Step 3: 1V → oscillator returns to octave
- Loop repeats

**Live-controller approach (real-time):**
- You play C → oscillator plays C
- You play E → oscillator plays E
- You play G → oscillator plays G
- You control timing by how long you hold notes

**The magic (both approaches):**
- Pattern (or your live playing) provides *intentional* pitch sequences
- Envelopes provide *expressive* shaping independent of the pattern or performance
- Together: a melodic phrase with evolving character

**Example:** A six-step melodic sequence with envelopes that have 200ms decay. The melody repeats every second (at 120 BPM). But because envelopes decay over 200ms, the brightness and amplitude lag slightly behind the pitch changes, creating musical evolution beyond the simple pitch pattern.

**Or:** You play the same six pitches live on a Keystep, but varying the timing and how long you hold each note. The envelopes' decay creates different evolving character depending on your performance timing.

---

## The Sequencer or Controller Setup: Connection Order

**What you already have:**
- Oscillator (waiting for pitch CV)
- Filter (waiting for modulation)
- Envelope 1 (waiting for gate trigger)
- Envelope 2 (waiting for clock or trigger)
- VCA (waiting for audio)

**What you're adding:**
- 1× Step sequencer **OR** 1× Live controller (Keystep, MIDI keyboard, etc.)

### Step 1: Sequencer Clock Setup (Sequencer Only)

**What you're doing:** Establishing the tempo and ensuring the sequencer has a timing source.

1. If your sequencer has an **internal clock**, set the tempo to something comfortable (60-120 BPM is typical for learning)
2. If using an **external clock source** (DAW, drum machine, another sequencer), patch its clock output to your sequencer's clock input
3. Sequencer is now running at a consistent tempo

**Voltage perspective:** The clock is just a repeating trigger signal. It tells the sequencer "advance to the next step." The frequency of that trigger determines tempo.

### Step 2: Sequencer Programming (Sequencer Only)

**What you're doing:** Entering pitch and gate values for each step.

1. Select **step 1**
2. Turn the **pitch knob** to a starting pitch (try 1V—one octave up from a reference)
3. Enable **gate** for step 1 (press button or switch to on)
4. Move to **step 2**
5. Set a different pitch (try 0.5V)
6. Enable gate for step 2 as well
7. Continue for a few more steps, varying pitch and deciding which steps have gates
8. For simplicity, start with all steps having gates enabled; add rests (steps without gates) once you understand the flow

**Voltage perspective:** You're storing voltage values and gate states in a pattern. The sequencer will output these values in order when clocked.

### Step 2 (Live Controller): Controller Setup

**What you're doing:** Preparing your live controller for CV/gate output.

1. Connect your controller to power (if needed)
2. Verify CV and gate outputs are active (check manual—some controllers need modes switched)
3. Set the controller to output 1V/octave (most do by default, but verify)

**Voltage perspective:** Your controller is now ready to generate voltage based on your key presses.

### Step 3: Pitch Control Connection

**What you're doing:** Routing pitch CV to the oscillator so pitch follows the sequence or your live playing.

1. Patch sequencer or controller **CV output** → oscillator **V/Oct input** (may be labeled "1V/Oct," "V/O," "Pitch," etc.)
2. Start the sequencer (press play or enable internal clock), or start playing your controller
3. **Listen:** The oscillator should track pitches. If you programmed step 1 at 1V, you should hear that pitch. If you're playing live, the oscillator should follow your key presses

**Voltage perspective:** Pitch CV now controls the oscillator's frequency, whether from pre-programmed steps or live keys.

### Step 4: Gate Control Connection

**What you're doing:** Routing the gate output to both envelopes so they trigger with each note.

1. Patch sequencer or controller **gate output** → Envelope 1 **gate input**
2. Use a **mult or stackable cable** to also send to Envelope 2 **gate input**
3. **Listen:** Both envelopes should now fire with each sequencer step or key press. You should hear amplitude and filter brightness change with the notes

**Voltage perspective:** Gate output (0V or +5V) now controls when envelopes fire, whether from sequencer patterns or live playing.

### Step 5: Test—Watch the Pattern or Performance Play

1. Sequencer is running (or you're playing the live controller), outputting pitch CV and gates
2. Listen and observe:
   - Oscillator tracks the programmed pitch sequence or your live pitch input
   - Envelopes fire with programmed gates or your key presses
   - Amplitude and brightness evolve as programmed or performed
   - (If sequencer) Pattern loops continuously
   - Timing is consistent (from clock)

**What you're hearing:** A repeating melodic phrase (sequencer) or a live performance shaped by filter and amplitude envelopes.

---

## Module Recommendations

### Step Sequencers (Pre-Programmed Patterns)

**Budget: Doepfer A-154 Analog Sequencer** (around $250, discontinued but available used)
- 8-step analog sequencer
- Punch in pitches with knobs, very tactile
- Simple, reliable, teaches sequencing fundamentals
- Note: Doepfer has newer models, prices vary

**Budget: 2hp TM (Turing Machine)** (around $120)
- Generative sequencer, not traditional step sequencer
- Creates evolving patterns using shift-register logic
- Small footprint, exploratory rather than compositional
- Great for ambient, less intuitive for learning step concepts

**Mid-range: Erica Synths Black Sequencer** (around $350)
- 16-step sequencer with per-step modulation
- Built-in quantizer (snaps pitches to scales)
- Clear interface, good for learning
- Grows with your skills

**Mid-range: Intellijel Metropolix** (around $650)
- 64-step sequencer with extensive features
- Per-step modulation lanes, probability, skip/ratcheting
- Complex but powerful
- Steep learning curve but professional capability

**Higher-end: Make Noise Rene 2** (around $600)
- Cartesian (X/Y grid) sequencer, not step-based
- Non-linear sequencing—different workflow
- Exploratory, artistic approach
- Unique but not traditional learning path

### Live Controllers (Real-Time Performance)

**Budget: Arturia Keystep (original)** (around $100-150 used)
- Keyboard with CV/gate outputs
- Step sequencer also included (dual function)
- Great for learning both approaches
- Compact and affordable

**Mid-range: Arturia Keystep 37** (around $300)
- 37-key keyboard with CV/gate outputs
- Built-in step sequencer
- Better keyboard feel than original Keystep
- Professional performance capability

**Higher-end: Arturia Keystep Pro** (around $400)
- 37-key with CV/gate and MIDI
- Four-track step sequencer built-in
- Arpeggiator, scales, extensive features
- Bridges modular, MIDI, and DAW

### MIDI-to-CV Modules (If Using External MIDI Sequencers or DAW)

**Budget: Doepfer A-190-5** (around $150)
- Converts MIDI to CV/gate
- USB and MIDI DIN inputs
- Simple, reliable
- Good for using DAW as sequencer

**Mid-range: Intellijel uMIDI** (around $180)
- 1U format MIDI-to-CV
- Polyphonic modes, multiple CV/gate outputs
- Compact, well-designed

**Higher-end: Expert Sleepers FH-2** (around $330)
- Eight channels CV/gate from MIDI
- Extremely flexible configuration
- Professional tool

---

## Common Issues and Solutions

### "Oscillator isn't following the sequencer pitch or my key presses"

**Pitch CV isn't patched correctly.** Check:

1. **Is pitch CV output patched to oscillator V/Oct input?** Verify the cable connection
2. **Is it the right input?** Some oscillators have multiple CV inputs (V/Oct, FM, pitch modulation)—make sure you're using the 1V/Oct input
3. **Is the oscillator responding to CV at all?** Try a different CV source (keyboard, Keystep, manual CV) to verify the oscillator tracks pitch

### "The sequencer is running but I don't hear pitch changes"

Check:
1. **Are the pitch values actually different step-to-step?** If all steps are set to 1V, the pitch won't change
2. **Is the sequencer actually advancing?** Check for clock source—no clock = no step advancement
3. **Is the volume turned up?** Check mixer/output gain

### "Notes don't trigger, or gates seem to fire at wrong times"

Check:
1. **Is gate output patched?** No patch = no envelope triggers
2. **Are gates actually enabled on those steps?** (Sequencer) Some sequencers let you disable gates per step
3. **Is the sequencer running?** Check clock/play status
4. **Gate timing mismatch:** If using external clock, verify the clock is actually reaching the sequencer

### "The sequencer tempo is way too fast or too slow"

**Clock speed is wrong.** Try:
1. If internal clock: Turn the tempo knob to adjust BPM
2. If external clock: Check the external source's tempo
3. Use clock dividers to slow things down, or multipliers to speed up

### "Pitch seems out of tune or microtonal"

**Oscillator tracking is off, or no quantization.** Try:
1. Check oscillator 1V/Oct calibration (may need manual tuning—check module manual)
2. Add a quantizer module if sequencer lacks one (Intellijel Scales, Erica Synths Pico Quant)
3. (Sequencer only) Verify sequencer pitch values are set to exact semitone values (1V, 1.0833V, etc., not random knob positions)

---

## Expanding This Patch

**You've added sequencing and composition (or live performance).** Your system now:
- Generates pitch patterns or responds to live pitch input
- Triggers rhythmic events
- Evolves timbrally with envelopes (independent of pitch/rhythm)
- Creates repeating phrases (programmed) or real-time performances

**This is a complete performance instrument.** You can compose and perform phrases, with or without pre-programming.

**If using a step sequencer, try:**
- **Odd-length sequences:** Try 5-step, 7-step, or 13-step sequences (create polyrhythmic patterns against 4/4 timing)
- **Gate patterns:** Disable gates on certain steps to create rhythmic rests and syncopation
- **Tempo changes:** Start slow, gradually speed up, hear how envelope times feel different at various tempos
- **Multiple sequences:** If your sequencer has multiple tracks, use one for pitch, another to modulate filter cutoff

**If using a live controller (Keystep, MIDI keyboard), try:**
- **Playing the same melodic idea at different speeds:** Fast passages, slow sustained notes, legato vs. staccato
- **Combining performance with sequenced modulation:** Play melody live while a sequencer modulates the filter cutoff or resonance
- **Call-and-response:** Sequence a bass pattern, play melody over it in real-time
- **Exploring expression:** Use velocity sensitivity if your controller has it, bend pitch, add modulation via expression pedal

**Next steps (not in this guide):**
- **Guide 04: Rhythm and Percussion** explores percussion architectures and drum sequencing
- **Advanced sequencing:** Probability, ratcheting, polyrhythms, modulation lanes
- **Multiple voices:** Add second oscillator/filter/envelope for polyphony or layered patches

---

## Why This Matters: Interconnection Thinking

**Sequencers and controllers are just voltage sources.** A sequencer generates pattern-based voltage. A controller generates performance-based voltage. Same principle as any other source (oscillator, envelope, noise generator).

An oscillator generates audio voltage continuously. An envelope generates control voltage over time. A sequencer generates a *series* of voltages in a loop. A controller generates voltages based on user input. Different sources, same concept: voltage carrying information.

**Everything routes the same way:** Sequencer or controller pitch CV → oscillator (determines pitch). Sequencer or controller gate → envelope (determines rhythm). Sequencer or controller CV to any other module's input (determines that module's behavior).

**Composition or performance emerges from routing and intention.** You're programming voltage patterns (sequencer) or performing voltage in real-time (controller), and routing them to different destinations. Different destinations, different musical results.

**Clock and sync teach the meta-principle:** Everything modular runs on voltage, including timing. A clock is just a repeating trigger voltage. When multiple sequencers, drum machines, or effect modules use the same clock, they stay synchronized—voltage coordinates everything.

**This is the power of modular:** Once you understand voltage as information (pitch is voltage, timing is voltage, brightness is voltage), you recognize that any sequencer or controller can influence any parameter. A drum machine's clock can sync your modular. Your modular's CV can modulate external gear. Everything interconnects through voltage. Compose pre-programmed patterns, or perform live expressions—both are valid paths through the same system.

---

## Equipment Summary

**What you need for this patch:**
- Everything from Guides 01-02 (oscillator, filter, two envelopes, VCA, output, case, cables)
- 1× Step sequencer **OR** 1× Live controller (Keystep, MIDI keyboard, etc.)
- ~5-10 additional patch cables

**If using MIDI as sequencer source:**
- MIDI sequencer or DAW sending MIDI
- MIDI-to-CV module (Doepfer A-190-5, Expert Sleepers FH-2, etc.)

**Additional HP requirement:** 10-30HP for sequencer module (or 0HP if using external sequencer/controller)

**Additional cost:** $120-650 for sequencer, $100-400 for live controller (or free if using Keystep you already own, or DAW with MIDI-to-CV)

**Total system so far:**
- Approximate HP: 45-80HP
- Approximate cost: $700-1800 (modules only, not including case/power/cables)

**Reality check:** You now have a complete monophonic synthesizer with either composition (sequencer) or performance (live controller) capability. This is a functional performance/production instrument.

---

## What's Next

You've added melody and rhythm through either sequencing or live performance. You understand how to generate pitch and timing information, how clock synchronization works, and how to either compose repeating patterns or perform live expressions.

**Guide 04: Rhythm and Percussion** explores different voice architectures specifically for drums and percussion. You'll learn that percussion doesn't need pitch sequencing—it needs trigger patterns and different envelope/sound source approaches. Whether you've been programming sequences or performing live, the same principles apply to percussion: triggers matter more than pitch tracking, and different envelope architectures create different drum characters.

But first, explore with what you have. If you're sequencing, program patterns and adjust envelopes while they loop. If you're performing live, play melodic phrases and modulate the filter in real-time. Both paths deepen your understanding of the same underlying principles.

**You've built a complete monophonic synthesizer with either sequencing or live performance control. Welcome to composition and performance in modular.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For your first voice, see 01_making_sound.md and 02_controlling_sound.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*