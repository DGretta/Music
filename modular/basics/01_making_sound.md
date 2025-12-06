# Making Sound

**Your first functional patch.**

You've covered the prerequisites in Guide 00. You understand infrastructure needs, signal flow categories, and common pitfalls. Now it's time to actually make sound—not just oscillator noise, but a musical note you can control.

**This guide teaches the absolute minimum functional patch:** oscillator → envelope → VCA.

---

## What This Patch Does

**Three modules working together create a note with a beginning and end:**

1. **Oscillator (VCO)** generates continuous audio signal
2. **Envelope generator** creates a time-based control voltage contour
3. **VCA** applies that envelope to the audio, shaping volume over time

**Without this chain, you have drone.** The oscillator runs constantly at full volume. With this chain, you have articulation—notes that start, sustain, and stop. That's the difference between noise and music.

---

## Why Each Component Matters

### The Oscillator: Raw Sound Generation

**What it does:** Converts incoming voltage (usually 1V/octave pitch CV) into audio-rate oscillation. Outputs waveforms—sine, triangle, sawtooth, square, and variations.

**Why you need it:** Something has to generate the sound. That's the oscillator's only job. It doesn't shape timbre (that's filters), doesn't control volume (that's VCAs), doesn't create rhythm (that's sequencers/envelopes). It just makes continuous pitched tone.

**What happens without it:** Silence. You can't process audio that doesn't exist.

### The Envelope: Time-Based Control

**What it does:** Generates a voltage contour in response to a gate/trigger signal. Classic shape is ADSR (Attack, Decay, Sustain, Release), but many envelopes offer different configurations.

**Why you need it:** Musical notes have shape over time. They don't instantly appear at full volume and stay there forever. Piano notes bloom then fade. Plucked strings decay exponentially. Held organ notes sustain then release when the key lifts. Envelopes provide that time-based structure.

**What happens without it:** If you patch oscillator directly to output, it drones constantly. You can't create rhythmic articulation or dynamic expression. Everything is full-on or full-off—binary, not musical.

### The VCA: Applying Control to Audio

**What it does:** Takes audio input and CV input. The CV controls how much audio passes through. 0V = silent. Higher voltage = louder. When you patch an envelope into a VCA's CV input, the audio follows that envelope's shape.

**Why you need it:** This is how the envelope's time-based contour affects your audio. The VCA is the junction where control voltage (envelope) meets audio signal (oscillator). Without it, envelopes have nothing to control.

**What happens without it:** You have an oscillator making sound and an envelope generating voltage, but they're disconnected. The envelope's shape never affects the audio's amplitude.

---

## The Minimal Patch: Step by Step

**Trigger source:** For now, use a manual gate button (many cases have one), or trigger input from external gear (MIDI interface, sequencer, keyboard controller). Sequencing comes in Guide 03—right now we're just making a single note work.

### Connection Order

**1. Oscillator setup:**
- Set oscillator to comfortable listening pitch (middle C if you have V/Oct CV input and reference)
- Choose a waveform (sawtooth or square are good starting points—bright and audible)
- Don't patch output yet

**2. Envelope preparation:**
- Set Attack fairly quick (50-200ms)
- Set Decay to medium length (200-500ms)
- Set Sustain to around 60-80% level
- Set Release to medium length (200-500ms)
- Patch gate/trigger source to envelope's Gate input

**3. VCA routing:**
- Patch oscillator audio output → VCA audio input
- Patch envelope output → VCA CV input
- Patch VCA output → your mixer/output module (from Guide 00 prerequisites)

**4. Test:**
- Trigger the envelope (press button, play key, send trigger)
- You should hear the oscillator's tone shaped by the envelope
- Sound starts (attack), reaches peak, settles to sustain level (if gate held), then fades out (release when gate ends)

### What You're Hearing

The oscillator runs continuously. The VCA is normally closed (silent). When you trigger the envelope, it generates rising voltage (attack phase). That voltage opens the VCA proportionally—more voltage, louder audio. The envelope reaches peak, then falls to sustain level (still holding the VCA partially open). When the gate ends, the envelope enters release phase, voltage falls to zero, VCA closes, silence returns.

**You've created a note with articulation.**

---

## Module Recommendations

These are concrete examples at different price points. Many alternatives exist—focus on function first, specific products second.

### Oscillators (VCOs)

**Budget: Doepfer A-110-1 Basic VCO** (around $120)
- Straightforward analog VCO
- Sine, triangle, sawtooth, pulse outputs
- 1V/octave tracking, FM input
- Reliable, no-frills sound generation
- Good learning tool—every jack does exactly what it says

**Mid-range: Mutable Instruments Plaits** (around $230, discontinued but widely available used)
- 16 different synthesis algorithms in one module
- Virtual analog, physical modeling, granular, FM, etc.
- Built-in envelope and LPG (low-pass gate) for complete voices
- Incredibly versatile, teaches multiple synthesis approaches
- Note: Discontinued by Mutable, but clones exist (like Qu-Bit Chord v2, or various Eurorack manufacturers)

**Higher-end: Make Noise DPO** (around $650)
- Complex analog dual oscillator
- Through-zero FM, waveshaping, modulation capabilities
- Two oscillators that can modulate each other
- West Coast synthesis approach
- Steep learning curve, but vast sonic palette

**Alternative worth mentioning: Erica Synths Pico Voice** (around $120)
- Complete voice in 3HP (oscillator + filter + VCA + envelope)
- Great for space-constrained systems
- Less modular (fewer patch points), but functional

### Envelope Generators

**Budget: Doepfer A-140 ADSR** (around $90)
- Classic four-stage ADSR envelope
- Simple, predictable, reliable
- Does one thing well—no features you don't need yet
- Good for understanding envelope fundamentals

**Mid-range: Maths by Make Noise** (around $280)
- Dual function generator (envelopes, LFOs, slew, more)
- Extremely flexible—can be two envelopes, one complex envelope, cycling LFOs, or logic processor
- Patch-programmable (internal normalization + manual overrides)
- Considered essential by many (there's a reason it's in nearly every system)
- Note: Maths is deeper than you need for this guide, but you'll grow into its capabilities

**Mid-range alternative: Intellijel Quadrax** (around $320)
- Four envelope generators with mixing and logic
- Can cascade for complex shapes
- Expander available for more features
- Modular approach—use one now, unlock others as you learn

**Higher-end: Xaoc Devices Zadar** (around $310)
- Four envelopes with extensive modulation capabilities
- Complex shapes, looping, rhythm generation
- Deep menu system (might overwhelm beginners)
- Powerful once you understand envelope basics

**Compact option: Erica Synths Black Envelope Generator 2** (around $160, 8HP)
- Dual ADSR with additional features
- Compact size, useful for small systems
- Clear interface, good for learning

### VCAs

**Budget: Doepfer A-130-2 Dual Linear VCA** (around $75)
- Two linear VCAs, straightforward operation
- No frills, exactly what you need
- Linear response (good for audio, less color than exponential)

**Mid-range: Erica Synths Black Quad VCA2** (around $280)
- Four VCAs with mixer section
- Can chain, mix, or use independently
- Enough VCAs for multiple voices or modulation duties
- Headroom for system growth

**Mid-range alternative: Intellijel Quad VCA** (around $200)
- Four VCAs, mixing capabilities
- Cascading options for complex routing
- Clean sound, reliable performance

**Higher-end: Mutable Instruments Veils** (around $200, discontinued)
- Four VCAs with multiple response curves
- Flexible gain structure (can boost or attenuate)
- Popular for good reason—musical, versatile
- Note: Discontinued, but clones available

**Compact option: 2hp VCA** (around $120)
- Tiny footprint (2HP)
- Single VCA, simple operation
- Great for space-constrained builds, less suitable as your only VCA

---

## Common Issues and Solutions

### "I'm not hearing anything"

**Check these in order:**
1. Is the oscillator actually running? (Touch its output with finger on cable tip—you should hear buzz/hum if it's generating signal)
2. Is the VCA actually receiving the envelope CV? (Check cable connections)
3. Is the envelope triggering? (Some envelopes have LED indicators)
4. Is your output level turned up? (Check mixer/interface gain)
5. Are you sending gate to the envelope? (No gate = no envelope = VCA stays closed)

### "It's droning constantly, not making notes"

**Two likely causes:**
1. Envelope is stuck open (check gate source—might be sending continuous gate)
2. Oscillator is patched directly to output, bypassing the VCA (verify your routing matches step-by-step above)

### "The notes are clicking or popping"

**Envelope attack is too fast.** Try 10-20ms minimum attack time. Instant attack creates audible clicks (sudden voltage change = high-frequency transient). Musical attacks have *some* rise time, even if fast.

### "The sound is too quiet"

**VCA gain might need adjustment.** Some VCAs have gain controls. Try:
1. Increasing envelope output level (if available)
2. Checking VCA gain/level control
3. Boosting oscillator output (some VCOs have level controls)
4. Adjusting your output module/mixer gain

### "I can't control the pitch"

**For now, that's expected.** We haven't added pitch CV control yet—that's Guide 03 with sequencers. Right now you're just proving the signal chain works. Many oscillators have coarse/fine tune knobs—use those to set a comfortable pitch.

---

## Expanding This Patch

**You've built the foundation.** This patch isn't exciting yet—it's functional. Think of it like learning C major scale before playing melodies. You've proven the signal path works: source → controller → VCA → output.

**Next steps (not in this guide, but coming):**
- **Guide 02: Controlling Sound** adds a filter between oscillator and VCA, giving you timbral control
- **Guide 03: Musical Phrases** adds a sequencer to control pitch and trigger timing
- **Guide 04: Rhythm and Percussion** explores different voice architectures for drums

**Right now, experiment with what you have:**
- Try different oscillator waveforms (how does sine vs. sawtooth vs. square sound?)
- Adjust envelope stages (faster attack, longer release, lower sustain level)
- Change trigger timing (slow gates vs. fast triggers—how does sustain phase behave?)

**Understanding this patch deeply matters more than rushing forward.** When you can predict how changing attack time affects the sound's character, or why release time matters even when playing rapid notes, you've internalized the concepts.

---

## Why This Matters: Interconnection Thinking

**Every modular patch is variations on this theme:** sources, controllers, and the modules that connect them.

This minimal patch teaches:
- **Signal flow hierarchy:** Audio paths vs. control voltage paths
- **Modular architecture:** Discrete functions working together, not monolithic "synth in a box"
- **Time-based control:** How envelopes shape static sources into dynamic expression
- **Voltage as abstraction:** The envelope's voltage has no inherent meaning—it becomes meaningful when routed to a VCA's CV input

**When you add filters (Guide 02), you'll use another envelope to control filter cutoff.** Same concept, different destination. When you add effects, you might use an envelope to control reverb send level. Same concept, same VCA principle, new musical result.

**Interconnection means recognizing patterns.** The oscillator → envelope → VCA pattern repeats everywhere in modular synthesis. Change the oscillator to a noise source, and you're making hi-hats. Change the envelope to an LFO, and you're creating tremolo. Change the VCA's destination from audio output to another module's CV input, and you're creating dynamic modulation.

**The fundamentals compound.** Master this patch now, and every future complexity builds on understanding you already have.

---

## Equipment Summary

**Minimum functional system for this patch:**
- 1× Oscillator (VCO)
- 1× Envelope generator (ADSR or similar)
- 1× VCA (single channel minimum)
- 1× Gate/trigger source (manual button, MIDI interface, external sequencer)
- 1× Output module or attenuator (from Guide 00 prerequisites)
- 1× Case with power (from Guide 00 prerequisites)
- ~10-15 patch cables

**Approximate HP requirement:** 20-30HP depending on module choices

**Approximate cost:** $400-600 for modules alone (not including case, power, cables from prerequisites)

**Reality check:** This is expensive for "making one note." That's modular. But this foundation supports everything you'll build next. Every oscillator, envelope, and VCA you add expands polyphony and complexity without learning new concepts.

---

## What's Next

You've made sound. You can trigger notes that start and stop. You understand why oscillators, envelopes, and VCAs work together.

**Guide 02: Controlling Sound** adds a filter to this chain. You'll learn how filters shape timbre, why filter cutoff needs its own envelope, and how modulation makes static sounds come alive.

But first, spend time with this patch. Internalize it. Make it boring through repetition. When you can assemble this patch without thinking, you're ready to expand.

**Welcome to modular synthesis. You've made your first musical sound.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*