# Making Sound: A Voltage Story

**Your first functional patch—and why it works.**

You've covered the prerequisites. You understand infrastructure, signal categories, and common pitfalls. Now you're ready to understand the single most important concept in modular synthesis: **everything happening in this system is voltage moving around.**

Not metaphorically. Literally.

---

## Before You Start: Everything is Voltage

This is the foundation. Everything else builds on it.

**Modular synthesis is the art of moving voltage from one place to another, and changing what that voltage does along the way.**

An oscillator doesn't "make sound." It **generates voltage that oscillates at audio rate.** A speaker interprets that oscillating voltage as sound waves.

An envelope doesn't "shape time." It **generates voltage that changes over time.** That voltage, when applied to something else, creates the effect of time-based shaping.

A VCA doesn't "control volume." It **gates voltage based on another voltage.** More incoming control voltage = more audio voltage passes through.

**This abstraction—voltage as portable, stackable, modifiable information—is why modular works at all.**

You can patch a voltage anywhere because it doesn't care where it came from or where it's going. An oscillator's output voltage doesn't know if it's going to a speaker, a filter, a VCA, or another oscillator's FM input. It's just voltage.

**This is the breakthrough:** Once you stop thinking "oscillator makes sound" and start thinking "oscillator generates voltage," everything becomes flexible. The same voltage can do a dozen things depending on where you route it.

---

## What This Patch Does: A Voltage Journey

You're going to create a patch where:

1. **An oscillator generates continuously oscillating voltage** (very fast oscillation—audio rate)
2. **An envelope generates voltage that changes over time** (slow oscillation—control rate)
3. **A VCA gates the oscillator's voltage based on the envelope's voltage**

**Result:** When you trigger the envelope, it sends rising voltage to the VCA. That voltage opens a gate. The oscillator's fast-oscillating voltage pours through the VCA and out to your speaker. The envelope voltage falls back to zero. The VCA closes. Silence.

**You've created a note with a beginning and an end because you've moved voltage from a source (oscillator), modulated it with another voltage (envelope), and applied the result through a gate (VCA).**

That's the whole story. Everything in modular synthesis is variations on this theme.

---

## Understanding Voltage in This System

### What Musicians Need to Know About Voltage, Current, and Frequency

**Voltage (Volts, V):** The electrical pressure pushing current through a circuit. In modular synthesis, voltage carries information—pitch, brightness, loudness, timing, modulation. A +5V gate signal means "gate is on." A 1V pitch CV means "play one octave higher than reference." Different voltage levels encode different musical information.

**Why musicians care:** Every control in modular is voltage-based. Changing a knob changes voltage. Patching cables carries voltage. Understanding voltage ranges helps you know what to expect when modules interact.

**Current (Amps, A, or milliamps mA):** The flow of electricity. Modular modules draw current from the case's power supply. A module drawing 100mA pulls 100 milliamps from the power supply's available current. If your power supply offers 1000mA on the +12V rail and your modules draw 1200mA total, you've exceeded capacity—voltage droops, modules misbehave.

**Why musicians care:** When building your system, you'll check power specs. This module draws 100mA, that one 150mA. Add them up. Know your case's power budget. Run out of current and your system becomes unstable (tuning drifts, clicks appear, modules reset unexpectedly).

**Frequency (Hertz, Hz):** How many times something happens per second. An oscillator running at 440 Hz oscillates (rises and falls) 440 times per second. Your ear interprets 440 Hz as a specific pitch (A4, concert pitch).

**Audio-rate frequency:** 20 Hz to 20,000 Hz (roughly human hearing range). When audio-rate oscillating voltage hits a speaker, the speaker cone moves back and forth thousands of times per second, creating sound waves.

**Control-rate frequency:** 0.1 Hz to 10 Hz (much slower). This slow oscillation doesn't create sound by itself—it modulates other parameters. An LFO at 1 Hz creates a wobble effect (oscillates up and down once per second).

**Why musicians care:** Audio-rate and control-rate are the same thing (oscillating voltage) at different speeds. An LFO oscillating at 6 Hz modulates an oscillator's pitch at 6 Hz, creating vibrato. The same oscillator at 440 Hz produces a musical note. Speed determines function.

### Two Speeds of Voltage

**Audio-rate voltage:** Oscillates very fast—20 Hz to 20,000 Hz (human hearing range). When applied to a speaker, this fast oscillation becomes sound waves. Your oscillator generates audio-rate voltage.

**Control-rate voltage:** Changes slowly—typically 0.1 Hz to 10 Hz, sometimes faster for modulation effects. This voltage doesn't make sound by itself. It controls other modules. Your envelope generates control-rate voltage.

**Critical insight:** They're the same thing—voltage. The only difference is speed. You could patch audio-rate voltage to a speaker (makes sound), or to a filter's cutoff input (modulates timbre), or to a VCA's CV input (modulates amplitude). Same voltage, different destination, different result.

### Voltage Ranges: Unipolar and Bipolar

**Two categories of voltage ranges exist in modular: unipolar and bipolar.**

**Unipolar voltage:** Ranges from 0V (minimum) to some positive value (usually +5V or +10V). Zero means "off." Positive voltage means "on" or "more." Examples:
- **Gate/trigger signals:** 0V = gate off, +5V = gate on
- **Envelope outputs:** 0V (silence/minimum) to +5V (full/maximum)
- **LFO outputs (sometimes):** Some LFOs output unipolar (0V to +5V), others bipolar

**Unipolar thinking:** 0V is the baseline. Higher voltages add more. Never goes negative.

**Bipolar voltage:** Ranges from negative to positive (typically -5V to +5V, or -10V to +10V). Zero is the center. Positive voltage means one direction, negative voltage means the opposite. Examples:
- **Oscillator outputs:** Sine wave oscillates from -5V to +5V continuously, passing through 0V at the center
- **Audio signals:** Can be positive or negative, oscillating around zero
- **Some LFO/modulation sources:** -5V to +5V allows modulation in both directions

**Bipolar thinking:** 0V is the center. Positive and negative voltages create opposite effects. Going negative is musically different from going positive.

**Why this matters for patching:**
- **Envelope → VCA:** Unipolar envelope (0V to +5V) opens the VCA proportionally as voltage rises
- **Oscillator → Filter:** Bipolar audio (oscillating -5V to +5V) enters filter, gets filtered, maintains its oscillating nature
- **Inverted modulation:** Some modules let you invert incoming voltage (positive becomes negative, negative becomes positive), flipping the direction of modulation

**Standard modular ranges:**
- **Gate/trigger:** 0V (off) to +5V (on) — unipolar
- **Envelope outputs:** 0V to +5V — unipolar
- **Audio signals (quiet):** -5V to +5V — bipolar
- **Audio signals (loud peaks):** Can reach -10V to +10V — bipolar
- **Pitch CV (1V/Oct):** Any voltage range, typically with unipolar interpretation (higher voltage = higher pitch)

**Why this matters:** When an envelope is at 0V, gates are closed. When it's at +5V, gates are maximally open. Partial voltages open gates partway. This is why modulation works—you're applying varying voltage (typically unipolar from an envelope, bipolar from oscillators or LFOs) to control other modules.

### Pitch CV and Semitones

**Pitch CV (1V/Oct):** The standard for controlling oscillator pitch in modular synthesis. 1 volt per octave means each volt of incoming control voltage raises pitch by one octave.

**Breaking this into musical intervals:**
- 1 octave = 12 semitones (the Western musical scale)
- 1V = 12 semitones
- Therefore: **1 semitone = 0.0833V (approximately 83.3 millivolts)**

**Musical example:** If 0V is middle C (C4), then:
- 0.0833V = C# (one semitone higher)
- 0.1667V = D (two semitones higher)
- 0.25V = D# (three semitones)
- 0.5V = F# (six semitones)
- 1V = C5 (one octave higher)

**Why musicians care:** When programming a sequencer, you're setting pitch values. Knowing that each semitone is ~83mV helps you dial in exact pitches rather than guessing. Most sequencers display voltage numerically or with LED indicators—if you know the math, you can dial in the exact pitch you want.

### Attenuation, Inversion, and Attenverters

**Attenuation:** Reducing the amplitude (strength) of an incoming voltage. An attenuator with its knob turned to 50% reduces incoming voltage by half. This controls **how much** modulation affects a destination.

**Inversion:** Flipping the polarity of incoming voltage. Positive becomes negative, negative becomes positive. This reverses the **direction** of modulation.

**Attenverter:** A module combining both functions—a single knob that can attenuate (reduce from full to zero) and invert (flip direction) incoming voltage. Turning the knob from 0% to 100% goes through zero, reversing direction as you turn.

**Why musicians need this:**

An envelope naturally rises (0V to +5V), opening a gate. If you want the opposite effect (closing a gate, or making something darker as the envelope rises), you patch the envelope through an attenverter and invert it. Now as the original envelope rises, the inverted signal falls—flipping the musical effect.

**Concrete example (YYS Bipolar Motion Consolidator):**
- Takes incoming CV (from an envelope, LFO, sequencer, anything)
- Each channel can attenuate (scale down the voltage)
- Each channel can invert (flip the polarity)
- Useful for shaping modulation depth and direction before it reaches your modules

**Common use cases:**
1. **Envelope inverted to filter:** Normally envelopes open filters (brightness increases with volume). Inverting the envelope makes filters close as volume opens—creating opposite timbral effect (bright attack, dark sustain)
2. **LFO inverted to oscillator pitch:** Normally an LFO modulating pitch creates vibrato (up and down together). Inverting flips it (when LFO goes up, pitch goes down)—creating opposite modulation character
3. **Attenuating modulation depth:** Sometimes incoming modulation is too extreme. An attenverter lets you reduce it without removing it—fine-tuning the effect's intensity

**Voltage perspective:** Every voltage source can be processed before reaching its destination. Attenverters give you flexible processing—changing both magnitude and direction of control information traveling through your system.

---

## Why Each Component Matters: What Voltage Does

### The Oscillator: Generating Audio-Rate Voltage

**What it does:** Converts a steady voltage (or changes in voltage) into **continuously oscillating voltage at audio rate.**

**Why you need it:** Something has to generate the fast-oscillating voltage that becomes sound. That's the oscillator's job.

**Voltage story:** An oscillator with no inputs still oscillates—it has an internal clock making it rise and fall continuously. You can speed it up (higher frequency = higher pitched sound), slow it down (lower frequency = lower pitched sound), or modulate it with other voltage (change the shape, add harmonics, create FM effects). But fundamentally, it's generating audio-rate voltage.

**What happens without it:** No audio-rate voltage exists to route anywhere. Silent.

### The Envelope: Generating Control-Rate Voltage

**What it does:** Converts an incoming **trigger/gate voltage** into **outgoing control-rate voltage that changes shape over time.**

**Why you need it:** Musical notes have shape. They don't instantly appear at full intensity and stay there forever. They bloom, settle, and fade. Envelopes translate timing (how long things take) into voltage movement (from 0V toward maximum, back to 0V).

**Voltage story:** When you send a trigger to an envelope:
- **Attack phase:** Envelope generates rising voltage (0V → +5V)
- **Decay phase:** Envelope generates falling voltage (+5V → sustain level)
- **Sustain phase:** Envelope generates steady voltage (holds at that level)
- **Release phase:** Envelope generates falling voltage (sustain → 0V)

This voltage output can go anywhere—but its most obvious use is to a VCA, where it gates other voltage.

**What happens without it:** You have an oscillator generating audio-rate voltage, but no way to shape its amplitude over time. Everything drones constantly.

### The VCA: Gating Voltage Based on Voltage

**What it does:** Takes two inputs—audio voltage and control voltage—and outputs audio voltage **proportional to the control voltage level.**

**How it works (the voltage mechanism):**
- **0V control voltage** = output is silent (no audio passes through)
- **+2.5V control voltage** = output is half volume (half the audio voltage passes through)
- **+5V control voltage** = output is full volume (all the audio voltage passes through)

**Why you need it:** This is the junction where control voltage (the envelope) meets audio voltage (the oscillator). Without it, you can't apply the envelope's time-based voltage to the oscillator's audio voltage.

**Voltage story:** The envelope's changing voltage is applied to the VCA's CV input. As envelope voltage rises (attack), the VCA opens proportionally—more audio voltage passes through, getting louder. As envelope voltage falls (decay/release), the VCA closes proportionally—less audio voltage passes through, getting quieter.

**This is gating:** Not on/off (though it can be), but proportional opening/closing based on control voltage level.

**What happens without it:** The oscillator's audio voltage and the envelope's control voltage are disconnected. The envelope's shape never affects the audio's amplitude.

---

## What You're Hearing: The Voltage Narrative

When you trigger that gate:

**Moment 1 - Gate goes high (+5V):**
- Trigger source sends +5V to envelope's gate input
- Envelope recognizes "gate is on" and begins attack phase

**Moment 2 - Attack phase (50-200ms):**
- Envelope generates rising voltage: 0V → +5V at a rate determined by attack setting
- This rising voltage flows to VCA's CV input
- VCA receives rising control voltage and opens proportionally
- Oscillator's audio voltage (which has been continuous) can now pass through the VCA more and more
- Result: Audio gets gradually louder

**Moment 3 - Decay phase (after attack ends, 200-500ms):**
- Envelope generates falling voltage: peak → sustain level at a rate determined by decay setting
- VCA receives falling control voltage and closes proportionally
- Oscillator's audio voltage passes through less and less
- Result: Audio gets gradually quieter, settling to sustain level

**Moment 4 - Sustain phase (while gate is still high):**
- Envelope holds steady voltage at sustain level
- VCA holds steady opening at that voltage level
- Oscillator's audio continues at constant volume through the VCA
- Result: Audio stays at constant (but not maximum) volume

**Moment 5 - Gate goes low (0V):**
- Trigger source sends 0V to envelope's gate input
- Envelope recognizes "gate is off" and begins release phase

**Moment 6 - Release phase (200-500ms):**
- Envelope generates falling voltage: sustain level → 0V at a rate determined by release setting
- VCA receives falling control voltage and closes proportionally
- Oscillator's audio voltage passes through less and less
- Result: Audio fades to silence

**Throughout this entire sequence, nothing has changed about the oscillator's audio voltage.** It's been continuously oscillating the whole time. What changed is how much of that voltage was allowed to pass through the VCA. The envelope's control voltage determined the gate's opening and closing.

---

## The Minimal Patch in Practice: Connection Order

**Trigger source:** Most commonly, a MIDI controller with CV/gate outputs (Arturia Keystep family, Expert Sleepers modules, etc.), or a simple manual gate button. For now, assume you have something that sends 0V (gate off) or +5V (gate on) to your envelope's gate input.

### Step 1: Oscillator Setup

**What you're doing:** Preparing a continuous audio-rate voltage source.

1. Set oscillator to a comfortable listening pitch (middle C if you can tune to it, or just somewhere in the middle range)
2. Choose a waveform—sawtooth or square are good for hearing clearly
3. Leave the oscillator running continuously (don't patch anything yet)

**Voltage perspective:** Your oscillator is now generating audio-rate voltage at a steady pitch. That voltage is just sitting there, not going anywhere yet.

### Step 2: Envelope Preparation

**What you're doing:** Setting up the control-rate voltage generator that will modulate the oscillator's audio.

1. Set **Attack** to fairly quick (50-200ms)—how fast the envelope voltage rises from 0V to peak
2. Set **Decay** to medium (200-500ms)—how fast the envelope voltage falls from peak to sustain level
3. Set **Sustain** to around 60-80%—what voltage level the envelope holds while the gate is on
4. Set **Release** to medium (200-500ms)—how fast the envelope voltage falls from sustain to 0V when the gate ends
5. Patch your trigger source to the envelope's **Gate input**

**Voltage perspective:** Your envelope is now ready to receive a gate voltage (0V or +5V from the trigger source). When the gate goes high (+5V), the envelope will generate rising voltage. When the gate goes low (0V), the envelope enters release phase.

### Step 3: VCA Routing—The Critical Connection

**What you're doing:** Connecting oscillator's audio voltage to the VCA's audio input, and envelope's control voltage to the VCA's CV input.

1. Patch oscillator **audio output** → VCA **audio input**
2. Patch envelope **output** → VCA **CV input**
3. Patch VCA **audio output** → your mixer/output module

**Voltage perspective:**
- Oscillator's audio voltage now flows into the VCA's audio path
- Envelope's control voltage now flows into the VCA's control path
- VCA gates the audio voltage based on control voltage: as envelope rises, audio passes through more; as envelope falls, audio passes through less

### Step 4: Test—Watch the Voltage Flow

1. Trigger the envelope (press gate button, play key on MIDI controller, or send gate signal)
2. Listen and observe:
   - **Initial trigger:** Gate voltage goes to +5V
   - **Attack phase:** Envelope voltage rises from 0V toward +5V. As it rises, VCA opens. Audio gets louder.
   - **Decay phase:** Envelope voltage falls from peak toward sustain level. VCA starts closing. Audio gets quieter but doesn't stop.
   - **Sustain phase:** Envelope voltage holds steady. VCA holds steady opening. Audio volume stays constant.
   - **Release phase (when gate ends):** Envelope voltage falls from sustain to 0V. VCA closes. Audio fades to silence.

**What you're hearing is voltage in action.** The oscillator's audio voltage is being gated by the envelope's control voltage. The audio passes through proportionally to the control voltage level.

---

## Module Recommendations

### Oscillators (VCOs)

**Budget: Doepfer A-110-1 Basic VCO** (around $120)
- Generates straightforward audio-rate voltage
- Outputs sine, triangle, sawtooth, pulse waveforms (different voltage shapes)
- 1V/octave tracking—1 volt of pitch CV changes pitch by one octave
- FM input—additional voltage modulates the oscillation frequency
- Good learning tool—every jack does exactly what it describes

**Mid-range: Mutable Instruments Plaits** (around $230, discontinued but widely available used)
- Generates audio-rate voltage using 16 different algorithms
- Virtual analog, physical modeling, granular, FM synthesis, etc.
- Each algorithm outputs different voltage shapes/characters
- Built-in envelope and low-pass gate for complete voices
- Teaches multiple approaches to audio-rate voltage generation
- Note: Discontinued but clones exist

**Higher-end: Make Noise DPO** (around $650)
- Complex analog dual oscillator generating audio-rate voltage
- Through-zero FM (voltage can modulate in both directions)
- Multiple voltage outputs with different shapes/processing
- West Coast synthesis approach to voltage generation
- Steep learning curve but vast sonic palette

**Alternative: Erica Synths Pico Voice** (around $120)
- Complete voice in 3HP
- Oscillator + filter + VCA + envelope all in one module
- Less modular, but functional and space-efficient
- Good for understanding the voltage relationships without buying separate modules

### Envelope Generators

**Budget: Doepfer A-140 ADSR** (around $90)
- Generates control-rate voltage shaped as ADSR contour
- Simple, predictable, reliable
- Does one thing well—generates the four-phase control voltage every musician understands
- Good for understanding envelope fundamentals

**Mid-range: Maths by Make Noise** (around $280)
- Generates two independent control-rate voltage contours (dual function generators)
- Patch-programmable—you configure how it generates voltage
- Can be two separate envelopes, one complex envelope, cycling LFOs, or logic processor
- Considered essential by many—there's a reason it's in nearly every modular system
- More powerful than you need immediately, but you'll grow into it

**Mid-range alternative: Intellijel Quadrax** (around $320)
- Four independent envelopes (generates four simultaneous control voltage contours)
- Can cascade for complex shapes
- Each envelope independently configurable
- Modular—use one channel now, unlock others as you learn

**Higher-end: Xaoc Devices Zadar** (around $310)
- Four envelopes with extensive modulation of the voltage generation itself
- Complex shapes, looping, rhythm generation
- Menu system (might overwhelm beginners)
- Powerful once you understand envelope basics

**Compact option: Erica Synths Black EG2** (around $160, 8HP)
- Single ADSR envelope (second generation of Erica Synths EG)
- Full exponential envelope with additional features (gate length setting)
- Clear interface, good for learning
- More features than basic ADSR, still straightforward

### VCAs (Voltage-Controlled Amplifiers)

**Budget: Doepfer A-130-2 Dual Linear VCA** (around $75)
- Two independent voltage-gating modules
- Linear response—voltage in = proportional voltage out
- Straightforward operation—no hidden behavior
- Great for learning how gates work

**Mid-range: Erica Synths Black Quad VCA2** (around $280)
- Four independent VCAs (four simultaneous voltage gates)
- Can chain, mix, or use independently
- Each VCA independently gates audio voltage based on control voltage
- Enough channels for system growth

**Mid-range alternative: Intellijel Quad VCA** (around $200)
- Four VCAs with mixing capabilities
- Cascading options for complex routing
- Clean implementation, reliable

**Higher-end: Mutable Instruments Veils** (around $200, discontinued)
- Four VCAs with multiple response options
- Some channels can invert control voltage (negative going instead of positive)
- Flexible gain structure (can boost or attenuate)
- Popular for good reason—treats voltage with musical sensitivity

**Compact option: 2hp VCA** (around $120)
- Single VCA in tiny footprint
- Simple operation
- Space-efficient but limited (only one gate at a time)

---

## Common Issues and Solutions

### "I'm not hearing anything"

**Voltage isn't flowing.** Check in order:

1. **Is the oscillator generating voltage?** Touch the end of a patch cable to the oscillator's output jack (not in your ear directly, just close enough to hear hum/buzz). You should hear AC hum if voltage is present.

2. **Is the envelope responding to the gate?** Check if the envelope has an LED indicator. When you trigger the gate, does the LED light up? Does the envelope's output voltage change?

3. **Is the VCA receiving both voltages?** 
   - Verify oscillator audio output is patched to VCA audio input
   - Verify envelope output is patched to VCA CV input
   - Check both cables are fully inserted

4. **Is the output level audible?** Check your mixer/interface gain. Your VCA might be outputting voltage, but the output stage might be turned down.

5. **Is the gate actually triggering the envelope?** No gate voltage = envelope never fires = no control voltage = VCA stays closed. Verify trigger source is sending 0V/+5V properly.

**Voltage perspective:** Audio voltage from oscillator and control voltage from envelope must both reach the VCA. If either path is broken, no sound.

### "It's droning constantly, not making notes"

**Control voltage isn't gating the audio.** Two likely causes:

1. **Gate is always high.** If your trigger source sends continuous +5V (always-on gate), the VCA stays open always. Check your gate source—it should send +5V only when you want to trigger, then drop to 0V when you stop.

2. **Oscillator is bypassing the VCA.** Verify routing: oscillator → VCA → output. If oscillator is patched directly to output, you hear it at full volume regardless of the envelope/VCA. Remove that direct patch.

**Voltage perspective:** The envelope's control voltage must drop to 0V between triggers. If it stays high (or high enough), the VCA never closes.

### "It's clicking or popping when I trigger"

**Control voltage is changing too fast (instantaneous envelope attack).** Envelope attack is the rate at which control voltage rises from 0V to peak. Instantaneous rise = sudden voltage jump = audible click.

**Fix:** Increase envelope attack time to 10-20ms minimum. This slows the control voltage's rise, creating a smooth opening instead of an instant gate.

**Voltage perspective:** Audio voltage changing suddenly = high-frequency transient = click. Gradual changes = smooth transitions.

### "The sound is too quiet"

**Voltage levels might need adjustment.** Try:

1. Increase envelope peak voltage (if available)—this increases the VCA's opening voltage
2. Check VCA gain/level control (some VCAs have output level adjustments)
3. Boost oscillator output level (some VCOs have level controls)
4. Increase mixer/output module gain

**Voltage perspective:** VCA gates based on input voltage. If envelope peaks at 2.5V instead of 5V, the VCA opens only halfway. Output voltage is proportional to control voltage.

### "I can't control the pitch"

**If you're using MIDI controller with CV output,** pitch CV should work. Patch MIDI controller's CV output to oscillator's V/Oct input. Play keys, oscillator frequency follows.

**If you're using a simple gate source,** you don't have pitch control yet (that requires CV input). Use the oscillator's tuning knobs to set a pitch manually.

**Voltage perspective:** Oscillators generate audio-rate voltage at a frequency determined by either internal controls or incoming CV. 1V = one octave pitch change (1V/Oct standard).

---

## Expanding This Patch

**You've built the foundation.** This patch isn't musically exciting yet, but it's functionally complete: voltage source → voltage modulator → voltage gate → output.

You've proven:
- Oscillator generates continuous audio-rate voltage
- Envelope generates time-based control-rate voltage
- VCA gates audio voltage proportional to control voltage

**Experiments to try with what you have:**
- **Change oscillator waveforms** (sine, triangle, sawtooth, square)—hear how different voltage shapes sound different
- **Adjust envelope stages** (faster attack, longer release, lower sustain)—hear how control voltage timing changes the note shape
- **Change trigger timing** (slow manual triggers, fast repeated triggers)—hear how gate timing affects sustain/release behavior

**Understanding this patch deeply matters more than rushing forward.** When you can predict how changing attack time affects the control voltage's rise, or why release time matters even when playing rapid notes, you've internalized the concepts.

**Next steps (not in this guide):**
- **Guide 02: Controlling Sound** adds a filter (another voltage-controlled module) between oscillator and VCA
- The filter will receive the same oscillator audio voltage, but process it based on its own control voltage (a second envelope)
- Same principles, new destinations

---

## Why This Matters: Interconnection Thinking

**Every modular patch is variations on this voltage movement:**

Voltage sources → voltage processors → voltage applications.

This minimal patch teaches the core principle: **Voltage is portable. Control voltage can come from anywhere and go anywhere. Meaning comes from routing.**

When you add a filter (Guide 02), you'll use another envelope to control filter cutoff—**same concept, different destination.** When you add effects, you might use LFO to modulate reverb send level—**same principle, different source and destination.**

**The pattern repeats everywhere because it's fundamental to modular:**

- Oscillator generates audio voltage → route to speaker (sound) or to filter input (processing)
- Envelope generates control voltage → route to VCA (amplitude gating) or filter (timbral shaping) or oscillator FM input (pitch modulation)
- LFO generates slowly-oscillating control voltage → route anywhere oscillator's audio goes, with different results

**The modules don't care what voltage you send them.** An oscillator doesn't distinguish between audio-rate and control-rate voltage—it's all just voltage to modulate. A filter doesn't care if its cutoff CV comes from an envelope, an LFO, or a random source. A VCA doesn't care where its audio comes from.

**Interconnection emerges from this abstraction:** Everything connects to everything because everything is voltage. Your job is routing—deciding where voltage comes from and where it goes.

---

## Equipment Summary

**Minimum functional system for this patch:**
- 1× Oscillator (VCO) - generates audio-rate voltage
- 1× Envelope generator - generates control-rate voltage
- 1× VCA - gates audio voltage based on control voltage
- 1× Gate/trigger source - sends 0V/+5V to envelope
- 1× Output module or attenuator - brings voltage to speaker level
- 1× Case with power - housing and voltage distribution
- ~10-15 patch cables (TS mono, 3.5mm)

**Approximate HP:** 20-30HP depending on module choices

**Approximate cost:** $400-600 (modules only, not including case/power/cables from prerequisites)

**Reality check:** This is expensive for "making one note." But this foundation supports everything you'll build next. Every oscillator, envelope, and VCA you add expands capability without requiring new concepts. You're buying more **instances** of the same voltage-moving principles.

---

## What's Next

You've made sound by moving voltage from source to gate to output. You understand the three-module minimum: source, modulator, gate.

**Guide 02: Controlling Sound** adds a **filter**—another voltage-controlled module. You'll learn:
- Filters are voltage processors (they process audio voltage based on control voltage)
- You can apply the same control voltage to multiple destinations (second envelope shapes filter cutoff while first envelope shapes amplitude)
- The same oscillator voltage can be processed multiple ways before reaching the output

Same principles. More destinations. More possibilities.

But first, spend time with this patch. Internalize it. Make it boring through repetition. When you can assemble this patch without thinking, and when you can predict how changing envelope times affects the sound, you're ready to expand.

**Welcome to modular synthesis. You've moved your first voltage. Now make it musical.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*