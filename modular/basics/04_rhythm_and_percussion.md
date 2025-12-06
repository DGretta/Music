# Rhythm and Percussion

**Building drum voices with different architectures.**

In Guides 01-03, you built a complete melodic voice: oscillator → filter → VCA with envelopes and sequencing. That architecture works beautifully for pitched sounds—bass lines, leads, pads. But **percussion requires different thinking.**

**This guide teaches percussion voice design:** different sound sources, different envelope approaches, different filter uses. You'll understand why drum sounds need their own architecture.

---

## Why Percussion is Different

### Melodic Voices vs. Percussive Voices

**Melodic voices (what you've built so far):**
- **Pitched sound sources** (oscillators with V/Oct tracking)
- **Sustained envelopes** (notes can hold indefinitely)
- **Harmonic content** (filters shape overtones)
- **Sequence pitch** (melodic patterns via CV)

**Percussive voices (what we're building now):**
- **Noise or pitch-modulated sources** (often no V/Oct tracking needed)
- **Very short envelopes** (transient hits, not sustained notes)
- **Inharmonic or filtered noise** (less about harmony, more about texture)
- **Sequence triggers** (rhythm patterns, not melodies)

**The architecture shifts:** Instead of "oscillator plays note, filter shapes timbre, envelope sustains," percussion thinks "sound source bursts, envelope shapes transient, filter defines character."

### Common Percussion Elements

**Kick drum:**
- Sound source: Sine/triangle oscillator with pitch envelope (starts high, drops fast to low fundamental)
- Very short decay envelope on pitch (creates "thump")
- Short amplitude envelope (quick attack, short decay)
- Sometimes: lowpass filter to remove highs, emphasize fundamental

**Snare drum:**
- Sound source: Noise (white or pink) mixed with tonal element (oscillator around 200-400Hz)
- Short, snappy envelope on both noise and tone
- Bandpass filter on noise (emphasizes body frequency, removes extreme highs/lows)
- Highpass filter on tonal element (keeps brightness, removes mud)

**Hi-hat:**
- Sound source: Noise (white or metallic noise generators work well)
- Very short envelope (closed hat) or medium-short envelope (open hat)
- Highpass filter (removes lows, keeps crisp highs)
- No pitch modulation needed—purely rhythmic texture

**Tom:**
- Sound source: Sine/triangle oscillator, pitched (different pitch per tom)
- Short envelope with moderate decay (longer than kick, shorter than melodic note)
- Bandpass filter to emphasize resonant frequency
- Can sequence pitch for tom fills

---

## Building a Kick Drum

**The classic modular kick uses pitch envelope modulation.**

### Components Needed

- 1× Oscillator (sine or triangle wave)
- 1× Envelope generator (short decay)
- 1× VCA
- 1× Trigger source (sequencer gate, manual trigger)
- Optional: Second envelope for pitch modulation

### Patching

**Basic kick (single envelope):**

1. **Oscillator setup:**
   - Set oscillator to sine or triangle wave
   - Set frequency fairly low (around 40-80Hz range)
   - Patch oscillator output → VCA audio input

2. **Envelope configuration:**
   - Attack: Instant (0ms or near-zero)
   - Decay: Short (50-150ms)
   - Sustain: Zero (no sustain phase)
   - Release: Zero or very short (kick dies immediately after decay)
   - Patch trigger source → envelope gate input

3. **VCA routing:**
   - Patch envelope output → VCA CV input
   - Patch VCA output → mixer/output
   - Test: Trigger should produce short "thump"

**Enhanced kick (pitch modulation):**

Add a second envelope for pitch:

1. **Second envelope configuration:**
   - Attack: Instant
   - Decay: Very short (10-40ms, faster than amplitude envelope)
   - Sustain: Zero
   - Release: Zero
   - Patch same trigger source → this envelope's gate input

2. **Pitch modulation routing:**
   - Patch second envelope output → oscillator FM or pitch CV input (NOT 1V/Oct, this is modulation)
   - Adjust modulation amount: you want pitch to start high (maybe +2-3 octaves) and drop fast to fundamental
   - This creates the characteristic "doink" or "boom" of kick drums

**What you're hearing:** Pitch starts high (transient click/punch), drops fast to fundamental (low thump), amplitude envelope shapes overall hit duration.

---

## Building a Hi-Hat

**Hi-hats use filtered noise, very short envelopes.**

### Components Needed

- 1× Noise source (white noise generator)
- 1× Highpass filter (or bandpass tuned high)
- 1× Envelope generator (very short decay)
- 1× VCA
- 1× Trigger source

### Patching

1. **Noise source:**
   - Use dedicated noise module, or noise output from multifunction module
   - Patch noise output → highpass filter input

2. **Filter configuration:**
   - Set filter type to highpass (or bandpass with high center frequency)
   - Set cutoff fairly high (8kHz-12kHz range for crisp hats)
   - Resonance low to moderate (adds metallic character)
   - Patch filter output → VCA audio input

3. **Envelope configuration:**
   - **Closed hat:** Attack instant, decay very short (5-30ms), sustain zero, release zero
   - **Open hat:** Attack instant, decay longer (100-300ms), sustain zero, release zero
   - Patch trigger source → envelope gate input

4. **VCA routing:**
   - Patch envelope output → VCA CV input
   - Patch VCA output → mixer/output

**Variation: Dual hi-hats (closed + open):**
- Use two separate envelope/VCA chains from same noise/filter source
- Short envelope = closed hat
- Longer envelope = open hat
- Trigger independently for rhythmic variation

---

## Building a Snare Drum

**Snares combine noise (body/snap) with tonal element (pitch).**

### Components Needed

- 1× Noise source
- 1× Oscillator (sine or triangle, tuned around 200-400Hz)
- 1× Bandpass filter (for noise)
- 1× Highpass or bandpass filter (for tone, optional)
- 1× Envelope generator (short decay)
- 2× VCAs (one for noise, one for tone)
- 1× Mixer (to combine noise and tone)
- 1× Trigger source

### Patching

1. **Noise path:**
   - Patch noise source → bandpass filter
   - Set bandpass center frequency around 200-400Hz (snare body range)
   - Moderate resonance (adds snap)
   - Patch filter output → VCA 1 audio input

2. **Tonal path:**
   - Set oscillator to sine/triangle, frequency around 200-400Hz
   - Optional: patch through highpass filter to remove lows
   - Patch oscillator (or filtered oscillator) → VCA 2 audio input

3. **Envelope (shared by both paths):**
   - Attack: Instant
   - Decay: Short (40-100ms)
   - Sustain: Zero
   - Release: Zero
   - Patch trigger → envelope gate input
   - Patch envelope output → VCA 1 CV input
   - Patch envelope output (via mult) → VCA 2 CV input

4. **Mixing:**
   - Patch VCA 1 output → mixer channel 1
   - Patch VCA 2 output → mixer channel 2
   - Adjust balance: more noise = snappier, more tone = punchier
   - Patch mixer output → master output

**What you're hearing:** Noise provides snap/sizzle (snare wires), tone provides body/pitch (snare shell). Envelope shapes both simultaneously for cohesive hit.

---

## Module Recommendations

### Dedicated Drum Modules

**Budget: Erica Synths Pico Drum2** (around $120, 3HP)
- Complete dual drum voice in tiny space
- Kick and snare algorithms built-in
- Minimal patching required
- Great for compact systems
- Limited compared to building voices from scratch

**Mid-range: Mutable Instruments Peaks** (around $200, discontinued but available used)
- Dual trigger-to-envelope with built-in drum modes
- Kick, snare, hat algorithms
- Also functions as envelope generator or LFO
- Versatile, compact (8HP)

**Mid-range: Erica Synths SYNTRX Bassline/Drums** modules (varies)
- Bassline and drum-specific modules
- Separate kick, snare, hats modules available
- Clean architecture, clear controls

**Higher-end: Tiptop Audio BD808, SD808, HC808, CP808** (around $150-200 each)
- Faithful recreations of TR-808 drum sounds
- Each drum element is separate module
- Multiple outputs per drum (mix, accented, tuned)
- Expensive if buying full kit, but authentic analog drums

**Higher-end: ALM Busy Circuits Akemie's Taiko** (around $400)
- FM-based drum synthesis
- Six-operator FM specifically for percussion
- Complex, versatile, unique sounds
- Steep learning curve

**All-in-one: Erica Synths Drum Sequencer + Drum Modules** (system approach)
- Integrated drum sequencer with trigger outputs
- Pair with individual drum modules
- Modular drum machine approach

### Noise Sources

**Budget: Doepfer A-118-1 Noise/Random** (around $60)
- White and pink noise outputs
- Random voltage outputs (for modulation)
- Essential utility module

**Compact: 2hp Noise** (around $100)
- Tiny noise generator (2HP)
- White noise output
- Simple, space-efficient

**Integrated:** Many multifunction modules include noise (Plaits, Rings, etc.)

### Additional Utilities

**Trigger sequencers:**
- 2hp TM (Turing Machine) - generative trigger patterns
- Erica Synths Black Sequencer - gate rows for rhythm
- Intellijel Steppy - dedicated gate sequencer

**Mixers for combining drum voices:**
- Doepfer A-138 Mixer (around $60) - simple, effective
- Erica Synths Pico Mix (around $100) - compact
- Intellijel Mixup (around $100) - clean mixing

---

## Sequencing Percussion

### Trigger Patterns vs. Pitch Sequences

**Melodic sequencing (Guide 03):** Sequencer outputs pitch CV + gate

**Percussion sequencing:** Sequencer outputs **just triggers/gates** (no pitch needed for most drums)

**Approach:**
1. Use sequencer's gate rows (not CV rows)
2. Each gate row triggers different drum voice
3. Pattern gate rows to create rhythm

**Example setup:**
- Gate row 1 → Kick trigger input
- Gate row 2 → Snare trigger input
- Gate row 3 → Closed hat trigger input
- Gate row 4 → Open hat trigger input

**Program rhythm:** Enable gates on steps where you want drum hits. Classic patterns:
- **Four-on-floor:** Kick on steps 1, 5, 9, 13 (every beat in 4/4)
- **Backbeat:** Snare on steps 5, 13 (beats 2 and 4)
- **Hi-hat:** Closed hat on every step or every other step

### Clock Divisions and Polyrhythms

**Different drum voices can run at different speeds:**
- Kick at quarter notes (1x clock)
- Snare at half notes (1/2 clock via clock divider)
- Hi-hat at eighth notes (2x clock via clock multiplier)

**Use clock divider/multiplier modules** (like 4ms RCD or Doepfer A-160-2) to create rhythmic complexity from single clock source.

---

## Common Issues and Solutions

### "My kick drum sounds like a 'boing' not a 'thump'"

**Pitch modulation amount is too high.** Reduce the envelope-to-pitch modulation depth. You want subtle pitch drop, not obvious pitch sweep.

### "Hi-hat sounds muffled, not crisp"

**Highpass filter cutoff is too low.** Raise cutoff frequency to 8kHz+ range. Also check resonance—a bit of resonance adds crispness.

### "Snare has no snap, sounds dull"

**Not enough noise in the mix, or bandpass filter tuned wrong.** Increase noise level in mixer balance. Check bandpass center frequency is in 200-400Hz "snap" range.

### "All drums sound the same length"

**You're using same envelope for everything.** Percussion needs **different envelope times per voice:**
- Kick: 50-150ms decay
- Snare: 40-100ms decay
- Closed hat: 5-30ms decay
- Open hat: 100-300ms decay

Use separate envelopes or envelope channels for each drum voice.

### "Drums don't sound tight/punchy"

**Envelopes have slow attack or too much release.** Percussion envelopes should be:
- Attack: Instant (0ms) or near-instant (1-2ms)
- Release: Zero or very short (under 10ms)

Slow attacks create "soft" percussion, which works for some sounds but not punchy drums.

---

## Expanding Percussion

**You've learned percussion voice architecture.** The principles apply to all percussive sounds:
- Short envelopes
- Noise or pitch-modulated sources
- Filters defining character (highpass for brightness, bandpass for body)
- Trigger sequencing for rhythm

**Experiments to try:**
- **Tune drums:** Change oscillator pitch on kick/snare/toms for different tonal characters
- **Modulate filters:** Use envelopes to sweep filter cutoff on snare or toms (opens bright, settles darker)
- **Layer sounds:** Combine multiple noise sources with different filter settings for complex textures
- **FM percussion:** Try FM on drum oscillators for metallic/bell-like tones

**Advanced percussion topics (beyond this guide):**
- **Physical modeling** (karplus-strong for plucked/struck sounds)
- **Granular percussion** (Clouds/Beads for textural drums)
- **Sample playback** (modules like Make Noise Morphagene or 4ms STS for recorded drum hits)

---

## Why This Matters: Interconnection Thinking

**Percussion teaches voice architecture flexibility.**

**Same components, different configurations:**
- Oscillator + long envelope = melodic voice
- Oscillator + short envelope + pitch modulation = kick drum
- Noise + short envelope + highpass filter = hi-hat
- Noise + tonal oscillator + bandpass filter = snare

**The modules don't change. The routing and parameter settings create different results.**

**This is fundamental to modular:** A VCA doesn't "know" if it's shaping a bass line or a kick drum. An envelope doesn't "know" if it's creating sustained pads or percussive hits. **Context—routing and settings—determines function.**

**Percussion also reinforces trigger vs. gate thinking:**
- Melodic voices need **gates** (envelopes sustain while gate is high)
- Percussion needs **triggers** (brief pulse, envelope fires and completes regardless of gate length)

Understanding this distinction helps you work with any module that responds to triggers/gates.

---

## Equipment Summary

**Minimum for basic percussion (kick + hat):**
- 1× Oscillator (for kick)
- 1× Noise source (for hat)
- 1× Highpass filter (for hat)
- 2× Envelope generators (one per voice)
- 2× VCAs (one per voice)
- 1× Mixer (to combine voices)
- 1× Trigger sequencer or gate source
- Case, power, cables (from previous guides)

**OR: Dedicated drum module** (Pico Drum2, BD808/SD808, etc.) - fewer modules, less patching

**Approximate HP for built-from-scratch percussion:** 40-60HP (for kick, snare, hat)

**Approximate cost:** $400-800 for modules (built from scratch), or $120-600 for dedicated drum modules

**Combined with melodic voice from Guides 01-03:**
- **Total system:** 85-140HP
- **Total cost:** $1100-2600 (modules only)

**Reality check:** You now have melodic voice + percussion. This is a complete performance instrument. You can compose basslines, melodies, and drum patterns. Everything else is expansion and refinement.

---

## What Comes Next

**You've completed the basics series.** You understand:
- Prerequisites and infrastructure (Guide 00)
- Melodic voice architecture (Guides 01-02)
- Sequencing and composition (Guide 03)
- Percussion voice architecture (Guide 04)

**These four guides form the foundation.** Every modular system, regardless of size or complexity, builds on these principles:
- Sound sources (oscillators, noise)
- Modifiers (filters, waveshapers)
- Controllers (envelopes, LFOs)
- Utilities (VCAs, mixers, multiples)
- Sequencers and timing

**From here, expansion paths include:**
- **More voices:** Polyphony (multiple VCOs, filters, VCAs playing simultaneously)
- **Effects:** Reverb, delay, distortion, modulation effects
- **Advanced modulation:** LFOs, function generators, sample & hold, random sources
- **Complex sequencing:** Probability, polyrhythms, modulation lanes
- **Performance controls:** Touch controllers, CV keyboards, expression modules

**But you don't need more to make music.** What you have now is sufficient. Depth comes from exploring what you've built, not constantly adding modules.

**Congratulations. You've built a complete modular synthesizer from the ground up. Now make sounds with it.**

---

*This guide completes the progressive basics series. For prerequisites, see 00_before_you_buy_anything.md. For melodic voices, see 01_making_sound.md and 02_controlling_sound.md. For sequencing, see 03_musical_phrases.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*