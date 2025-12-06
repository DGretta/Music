# Controlling Sound

**Adding timbral shape to your patch.**

In Guide 01, you built the minimal functional patch: oscillator → envelope → VCA. You can trigger notes that start and stop. Now you'll add **filters** to control timbre—the tonal character of the sound.

**This guide adds one module to your signal chain:** a voltage-controlled filter (VCF) between oscillator and VCA, controlled by its own envelope.

---

## What This Adds

**The expanded patch: oscillator → filter → VCA**

Plus: **a second envelope** controlling the filter's cutoff frequency.

**Why this matters:** Raw oscillator waveforms are static. A sawtooth wave always sounds like a sawtooth wave. Filters remove frequencies, shaping brightness and character. **Modulating** that filter cutoff over time—opening bright, settling dark—creates evolving, musical timbres instead of static tones.

**Without filters:** You have pitch and amplitude control, but every note sounds the same timbrally. Bright throughout, or dark throughout, with no movement.

**With filters:** You control how bright or dark the sound is, and how that brightness changes over time. That's the difference between a synthesizer sound and an interesting synthesizer sound.

---

## Why Filters Matter

### What Filters Do

**A voltage-controlled filter removes frequencies from an audio signal based on incoming control voltage.** The most common type is a **lowpass filter**—it allows low frequencies through while removing (attenuating) high frequencies. The **cutoff frequency** is the point where attenuation begins.

**Other filter types:**
- **Highpass:** Removes lows, keeps highs
- **Bandpass:** Removes both lows and highs, keeps a band in the middle
- **Notch/Bandreject:** Removes a specific frequency band, keeps everything else

Most filters also have **resonance** (sometimes called "Q")—emphasis at the cutoff frequency. High resonance creates a peak, making the filter "ring" or even self-oscillate at extreme settings.

### Why You Need Separate Envelope for Filter

**Here's the key insight:** Amplitude (VCA) and timbre (filter) need **independent** time-based control.

**Example 1 - Plucked bass:**
- **Amplitude envelope:** Quick attack, medium decay, no sustain, short release (pluck fades quickly)
- **Filter envelope:** Quick attack, long decay, no sustain, short release (brightness fades slowly even as volume drops)
- **Result:** The note's volume drops fast (percussive), but brightness lingers longer, creating warm decay

**Example 2 - Pad sound:**
- **Amplitude envelope:** Slow attack, long decay, high sustain, long release (slow swell, sustained note)
- **Filter envelope:** Medium attack, medium decay, medium sustain, medium release (brightness blooms moderately)
- **Result:** Volume and brightness rise together but at different rates, creating lush evolving texture

**If you only had one envelope controlling both:** You couldn't create these relationships. The brightness would always follow volume exactly. Musical sounds require independent control of amplitude and timbre over time.

### The "Nearly Always Two Envelopes" Pattern

This is fundamental to modular voice architecture:
- **Envelope 1:** Controls VCA (amplitude shaping)
- **Envelope 2:** Controls filter cutoff (timbral shaping)

You'll see this pattern everywhere in synthesis. Even simple monosynths have two envelopes for exactly this reason.

---

## The Expanded Patch: Step by Step

**What you already have from Guide 01:**
- Oscillator → Envelope → VCA → Output
- Trigger source (MIDI controller with CV/gate, or simple gate source)

**What you're adding:**
- 1× Voltage-controlled filter (VCF)
- 1× Second envelope generator

### Connection Order

**1. Filter placement:**
- **Disconnect** oscillator from VCA audio input (remove that cable)
- Patch oscillator audio output → filter audio input
- Patch filter audio output → VCA audio input
- Now signal flows: oscillator → filter → VCA → output

**2. Filter settings:**
- Set filter type to **lowpass** (if your filter offers multiple types)
- Set cutoff frequency to middle position initially (around 12 o'clock)
- Set resonance low initially (around 9-10 o'clock, or minimum)
- Leave CV inputs unpatched for now

**3. Second envelope preparation:**
- Set Attack fairly quick (50-200ms, similar to your amplitude envelope)
- Set Decay to medium-long (500ms-1 second)
- Set Sustain to low-medium level (around 30-50%)
- Set Release to medium (300-500ms)
- Patch **same gate source** to this second envelope's gate input (both envelopes trigger simultaneously)

**4. Filter modulation routing:**
- Patch second envelope output → filter cutoff CV input
- Many filters have **CV attenuator/amount** controls—set this to around 50% initially

**5. Test:**
- Trigger your gate source
- You should hear the oscillator's tone, filtered, with brightness changing over time
- The filter opens (gets brighter) during attack, settles during decay/sustain, closes during release
- The VCA still shapes overall amplitude using the first envelope

### What You're Hearing

**Two envelopes working simultaneously:**

**Envelope 1 (amplitude)** opens and closes the VCA, creating note articulation (start/stop).

**Envelope 2 (filter)** sweeps the filter cutoff, creating timbral evolution (bright to dark, or dark to bright depending on settings).

**The interaction between these two shapes creates musical character.** Experiment:
- Make filter envelope faster than amplitude envelope (brightness changes quickly, volume changes slowly)
- Make filter envelope slower than amplitude envelope (volume changes quickly, brightness evolves gradually)
- Match them exactly (brightness and volume move together—often less interesting)

---

## Module Recommendations

### Filters (VCFs)

**Budget: Doepfer A-120 Moog Ladder Filter** (around $130)
- Classic Moog ladder design, warm lowpass sound
- Simple controls: cutoff, resonance, CV inputs
- Self-oscillates at high resonance (can act as sine oscillator)
- Great for learning filter fundamentals

**Budget alternative: Doepfer A-124 Wasp Filter** (around $130)
- Lowpass, highpass, bandpass modes switchable
- Different character than Moog (more aggressive)
- Good for understanding filter type differences

**Mid-range: Erica Synths Black Polivoks VCF** (around $240)
- Aggressive Russian filter design
- Lowpass, bandpass modes
- Distinctive character, high resonance capabilities
- Excellent for bass and lead sounds

**Mid-range alternative: Intellijel Morgasmatron** (around $450)
- Dual filter (two independent filters you can route in series, parallel, or stereo)
- Multiple filter types per channel
- Complex routing options
- Grows with your system (use one filter now, both later)

**Higher-end: Rossum Electro-Music Evolution** (around $500)
- Stereo programmable filter with extensive modulation
- Multiple filter types (lowpass, highpass, bandpass, notch, combinations)
- Digital control, analog signal path
- Deep feature set (might overwhelm beginners)

**Compact option: Erica Synths Pico VCF3** (around $100, 3HP)
- Tiny lowpass filter
- Simple interface
- Great for space-constrained builds
- Limited CV control compared to larger filters

### Second Envelope Generator

**You need another envelope.** See Guide 01 for detailed envelope recommendations. Quick recap:

**Budget: Doepfer A-140 ADSR** (around $90) - Get a second one if you bought one for Guide 01

**Mid-range: Maths by Make Noise** (around $280) - Already provides **two** function generators, so if you have Maths from Guide 01, you already have your second envelope

**Mid-range: Intellijel Quadrax** (around $320) - **Four** envelope generators with mixing and logic, so one module provides both envelopes needed plus room for expansion

**Modular efficiency note:** Modules offering multiple envelopes (Maths, Quadrax) are space-efficient. You can use one channel for amplitude, another for filter, without buying two separate modules.

---

## Understanding Filter Parameters

### Cutoff Frequency

**What it does:** Sets the point where the filter starts removing frequencies.

**Lowpass filter:** Low cutoff = dark sound (only bass frequencies pass). High cutoff = bright sound (more harmonics pass through).

**How modulation works:** When you patch an envelope to cutoff CV, the envelope voltage **adds to** (or subtracts from, depending on filter design) the manual cutoff setting. Positive envelope voltage raises cutoff (opens filter, brighter). Envelope voltage dropping lowers cutoff (closes filter, darker).

**Typical use:** Set manual cutoff fairly low, use envelope to sweep it upward. This creates classic "filter opens bright, settles dark" synthesis sound.

### Resonance (Q)

**What it does:** Emphasizes frequencies right at the cutoff point, creating a peak.

**Low resonance:** Smooth frequency rolloff, natural sound.

**Medium resonance:** Noticeable peak, adds character and "focus" to the filter sweep.

**High resonance:** Sharp peak, filter "rings." Can self-oscillate (filter becomes sine wave generator even without audio input).

**Musical use:** Moderate resonance (25-40%) adds definition to filter sweeps. Too much becomes honky/nasal. Experiment to taste.

### CV Amount / Attenuator

Many filters have a **CV amount** control for each CV input. This attenuates (reduces) the incoming control voltage before it affects the filter.

**Why this matters:** Envelopes output 0V to +5V (or higher). That full range might sweep the filter too dramatically. The CV amount control lets you dial in "how much" the envelope affects cutoff.

**Typical setting:** Start around 50%, adjust to taste. More CV amount = wider filter sweep. Less = subtler movement.

---

## Common Issues and Solutions

### "The filter isn't doing anything"

**Check:**
1. Is audio actually passing through the filter? (Verify oscillator → filter → VCA routing)
2. Is the filter cutoff set too high? (If cutoff is fully open, you won't hear filtering—try lowering it)
3. Is the envelope patched to filter CV input? (No CV = no modulation)
4. Is the CV amount control turned up? (Some filters default CV inputs to zero)

### "Everything sounds muffled/dark"

**Filter cutoff is too low.** Raise the manual cutoff position, or increase the envelope's CV amount to the filter so it opens brighter.

### "The sound is too bright/harsh, no filter movement"

**Filter cutoff is too high.** Lower the manual cutoff position so there's room for the envelope to sweep upward. Or reduce resonance if it's creating harshness.

### "Filter closes too fast, sound gets dark before the note ends"

**Filter envelope decay/release are too fast.** Lengthen the filter envelope's decay and release stages so brightness stays present longer into the note.

### "I hear a click when the filter opens"

**Filter envelope attack is too fast, or filter self-resonating.** Try slightly slower attack on the filter envelope (10-20ms minimum). If resonance is very high, the filter can "pop" when modulation hits—reduce resonance.

### "The filter sounds thin/weak"

**Resonance might be too low, or oscillator waveform isn't bright enough.** Try:
1. Increasing resonance to 25-40% (adds emphasis at cutoff)
2. Using a brighter oscillator waveform (sawtooth, square instead of sine/triangle)
3. Adjusting filter type if available (some filters have multiple modes)

---

## Expanding This Patch

**You've added timbral control.** Your patch now has:
- Pitch (oscillator frequency)
- Amplitude shaping (VCA with envelope)
- Timbral shaping (filter with envelope)

**This is a complete synthesizer voice.** Everything else builds on this foundation.

**Experiments to try:**
- **Invert the relationship:** Make filter envelope slower than amplitude envelope (brightness evolves gradually while volume changes quickly)
- **Try different filter types:** If your filter has highpass or bandpass modes, hear how they change character
- **Adjust resonance:** Find the sweet spot where it adds character without being obnoxious
- **Use same envelope for both:** Temporarily patch your amplitude envelope to **both** VCA and filter CV. Hear how this sounds less dynamic (everything moves together). Then restore separate envelopes and appreciate the difference.

**Next steps (not in this guide):**
- **Guide 03: Musical Phrases** adds sequencer for pitch control and rhythmic patterns
- **Guide 04: Rhythm and Percussion** explores different voice architectures for drums

**Additional modulation you'll eventually explore:**
- **LFOs modulating filter cutoff** (creates wobble/tremolo effects)
- **Multiple oscillators feeding one filter** (creating complex timbres)
- **Filter feedback** (routing filter output back to input for resonance boost or distortion)

---

## Why This Matters: Interconnection Thinking

**The two-envelope pattern teaches modular architecture:**

**Independent control of parameters over time.** Amplitude and timbre don't have to move together. Decoupling them creates expressive possibilities.

**Voltage as abstraction.** The filter envelope doesn't "know" it's controlling a filter. It's just generating voltage. You could patch that same envelope to:
- VCA (for amplitude)
- Filter cutoff (for timbre)
- Oscillator pitch (for pitch drops/rises)
- Another module's CV input (for anything voltage-controllable)

**Same source, different destinations, different musical results.**

**Modulation thinking.** Filters are boring static. Filters **modulated** by envelopes create evolving sounds. This principle extends everywhere:
- Oscillators modulated by LFOs (vibrato)
- VCAs modulated by LFOs (tremolo)
- Filter cutoff modulated by random CV (unpredictable timbral changes)

**The fundamentals remain consistent.** Source → modulator → destination. You're learning a pattern that applies to every modular patch you'll ever create.

---

## Equipment Summary

**What you need for this patch:**
- Everything from Guide 01 (oscillator, envelope, VCA, trigger source, output, case, cables)
- 1× Voltage-controlled filter (VCF)
- 1× Second envelope generator (or use second channel of dual envelope module like Maths or Black EG2)
- ~5-10 additional patch cables

**Additional HP requirement:** 8-20HP depending on filter choice

**Additional cost:** $100-500 depending on filter (budget Doepfer to high-end Rossum)

**Total system so far:** 
- Approximate HP: 35-50HP
- Approximate cost: $600-1200 (modules only, not including case/power/cables)

**Reality check:** You're building a complete voice. This is the foundation of subtractive synthesis. Every future voice you add follows this same pattern.

---

## What's Next

You've added timbral control through filtering. You understand why two envelopes matter, how filters shape sound, and how modulation creates movement.

**Guide 03: Musical Phrases** introduces sequencers. You'll learn how to create melodic patterns, trigger rhythms, and control your voice from a sequencer instead of manually triggering gates.

But first, internalize this patch. Experiment with envelope timing relationships. Find the sweet spots between filter and amplitude envelopes that create the timbres you want to hear.

**You've built a complete synthesizer voice. Everything else is expansion and variation on these principles.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For the first functional patch, see 01_making_sound.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*