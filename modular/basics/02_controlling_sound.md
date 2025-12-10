# Controlling Sound: Shaping Voltage Over Time

**Adding timbral shape to your patch.**

In Guide 01, you built the minimal functional patch: oscillator → envelope → VCA. You can trigger notes that start and stop. The oscillator's audio-rate voltage was gated by the envelope's control-rate voltage. That works. But raw oscillator voltage is static—it doesn't change character over time. 

**This guide adds a filter to shape that voltage and a second envelope to modulate the filter over time.**

You'll learn that filters are voltage processors, and that the same envelope-modulation concept from Guide 01 applies everywhere. Same principle. Different destinations. Different musical results.

---

## Before You Start: Filters as Voltage Shapers

This is crucial to understanding what's about to happen.

**A filter doesn't "remove frequencies" in some abstract way. It processes incoming audio voltage based on control voltage, producing different output voltage as a result.**

When you apply control voltage to a filter's cutoff input:
- **0V on cutoff CV** = filter is closed (removes most frequencies, output is dark)
- **+5V on cutoff CV** = filter is open (allows most frequencies, output is bright)
- **Anything in between** = filter is partially open (output brightness scales with voltage)

The manual cutoff knob also controls this—it sets the baseline cutoff frequency. The CV input modulates *around* that baseline. Both the knob and the incoming CV voltage work together to determine the final filter cutoff.

**This is the same gating principle from the VCA.** The VCA gates audio voltage based on control voltage. The filter gates frequencies of audio voltage based on control voltage. Same underlying concept, different audio result.

**Why this matters:** You can apply *any* control voltage to a filter's cutoff input. An envelope (time-based voltage), an LFO (repeating voltage), a sequencer (stepped voltage), or even another oscillator's audio voltage modulating the filter. Every source produces different musical results, but the mechanism is identical: control voltage shapes the audio voltage passing through.

This is interconnection. One architecture (envelope → control voltage), infinite applications.

---

## What This Patch Does: Two Envelopes, Independent Paths

You're expanding to:

1. **Oscillator generates continuously oscillating voltage** (audio rate)
2. **Filter processes that audio voltage based on control voltage** (cutoff shaping)
3. **Envelope 1 gates the filter's output via VCA** (amplitude shaping)
4. **Envelope 2 modulates the filter's cutoff** (timbral shaping)

**Result:** When you trigger both envelopes, they run simultaneously but control different parameters. Envelope 1 shapes how loud the sound is. Envelope 2 shapes how bright or dark the sound is. They move independently, creating complex timbral evolution—brightness changes at different rates than amplitude.

**Why two envelopes matter:**

Without a second envelope, filter cutoff would be static. Brightness wouldn't evolve. The sound would be one-dimensional—amplitude changing while timbre stays constant.

With a second envelope, both amplitude and timbre can evolve over time, at different rates, creating far more expressive and musical results.

**This teaches the core modular principle:** One module applied to different destinations creates different effects. An envelope controlling amplitude is volume shaping. The same envelope controlling filter cutoff is timbral shaping. Neither is more "correct"—both are valid applications of the same control voltage source.

---

## Understanding Filters: Voltage Processing

### What Filters Do

**A voltage-controlled filter (VCF) takes audio-rate voltage as input and outputs modified audio-rate voltage, with the modification determined by control-rate voltage at its cutoff input.**

**Most common type: Lowpass filter**

- **Cutoff frequency:** The frequency point where attenuation begins
- **Low cutoff voltage** = low cutoff frequency = only bass frequencies pass through = dark sound
- **High cutoff voltage** = high cutoff frequency = more harmonics pass through = bright sound

**Other filter types you'll encounter:**

- **Highpass:** Removes lows, keeps highs (opposite of lowpass)
- **Bandpass:** Keeps a band in the middle, removes both lows and highs
- **Notch/Bandreject:** Removes a specific frequency, keeps everything else

**For beginners, lowpass is the standard.** It's intuitive (cutoff voltage = brightness) and most expressive.

### Resonance: Emphasis at the Cutoff Point

**Resonance (often called Q or emphasis) boosts frequencies right at the cutoff point, creating a peak in the filter's response.**

**Low resonance:** Smooth, natural frequency rolloff
**Medium resonance (25-40%):** Adds character, focuses the filtered sound
**High resonance:** Sharp peak, filter "rings" musically, can self-oscillate at extreme settings

**Musical use:** Moderate resonance adds definition. High resonance can create bell-like or vocal-like timbres. Too much sounds harsh.

### CV Attenuator / Amount Control

**Many filters have a CV amount knob or switch for their cutoff input.** This controls how strongly the incoming control voltage affects the filter.

- **0% CV amount** = control voltage has no effect (filter stays at manual cutoff setting)
- **50% CV amount** = control voltage has half effect
- **100% CV amount** = control voltage has full effect

**Why this matters:** Envelopes output 0V to +5V. That full range might sweep the filter dramatically. The CV amount control lets you fine-tune the modulation depth.

### Bipolar and Unipolar in Filter Context

**Envelopes are unipolar:** 0V to +5V. As voltage rises, the filter opens (gets brighter).

**Some filters support bipolar CV:** -5V to +5V. This allows:
- Positive voltage = opens filter (brightens)
- Negative voltage = closes filter (darkens)
- The same modulation source can move in both directions

**Important variation:** Some manufacturers (like Endorphin.es) implement bipolar CV differently. The knob position or a switch determines the filter mode, and bipolar CV then modulates around that mode—for example, a knob center position might set the filter to neutral, with clockwise turning lowpass and counterclockwise turning highpass. Bipolar CV then modulates in both directions from that center point. Check your specific filter's manual to understand how it handles bipolar modulation.

**For beginners using unipolar envelopes:** Expect the filter to open and close in one direction (darken to bright, or vice versa depending on initial cutoff setting).

---

## Why Each Component Matters: The Expanded System

### The Filter: Processing Audio Voltage

**What it does:** Takes audio-rate voltage input. Outputs modified audio-rate voltage. The modification (which frequencies pass through) depends on control-rate voltage at the cutoff input.

**Why you need it:** Raw oscillator voltage lacks timbral depth. Filters add character, allow timbral shaping, and teach the principle that audio voltage can be processed based on control voltage.

**Voltage story:** Oscillator's audio voltage enters the filter. Depending on the cutoff voltage (from envelope, LFO, manual knob, or any control source), different frequencies pass through. High cutoff voltage = bright filtered sound. Low cutoff voltage = dark filtered sound. The envelope's control voltage shapes how bright/dark the sound evolves over time.

**What happens without it:** You have amplitude control (envelope 1 → VCA) but no timbral control. Every note sounds timbrally identical.

### The Second Envelope: Independent Timbral Shaping

**What it does:** Generates control-rate voltage to modulate the filter's cutoff independently from amplitude.

**Why you need it:** Amplitude and timbre shouldn't necessarily move together. A plucked bass might have quick volume drop but slow brightness fading. A pad might have slow volume rise but fast brightness bloom. These are independent artistic choices, and independent envelopes enable them.

**Voltage story:** While Envelope 1 generates rising voltage to open the VCA (making the sound louder), Envelope 2 simultaneously generates its own rising voltage to open the filter (making the sound brighter). They run in parallel, at different rates, creating complex evolution.

**What happens without it:** The filter would stay at one brightness level (determined by manual cutoff knob). No timbral evolution.

### The VCA: Gating the Filtered Audio

**What it does (unchanged from Guide 01):** Takes filtered audio voltage and gates it based on control voltage from Envelope 1.

**Why it's still essential:** Even though we're adding a filter, the VCA's job remains the same—controlling amplitude. The filter shapes timbre, the VCA gates amplitude. Different jobs, both necessary.

**Voltage story:** Filter's output (audio voltage, now with shaped frequency content) enters the VCA. Envelope 1's rising voltage opens the VCA proportionally, letting filtered audio through. As Envelope 1 falls, VCA closes, amplitude drops.

---

## What You're Hearing: Two Parallel Voltage Stories

When you trigger both envelopes:

**Envelope 1 story (Amplitude):**
- Rises (attack) → VCA opens proportionally → amplitude rises
- Falls to sustain → VCA partially closes → amplitude sustains
- Falls to zero (release) → VCA fully closes → silence

**Envelope 2 story (Timbre) - happening simultaneously:**
- Rises (attack) → filter cutoff rises proportionally → brightness increases
- Falls to sustain → filter settles → brightness sustains at new level
- Falls to zero (release) → filter closes → sound darkens to minimum brightness

**The interaction:**
- If both envelopes have same times: brightness and amplitude rise/fall together (coherent)
- If Envelope 2 is slower: brightness evolves gradually while amplitude responds quickly (complex)
- If Envelope 2 is faster: brightness changes sharply then settles while amplitude continues evolving (separated)

**Throughout, the oscillator's audio voltage hasn't changed.** It's been continuously oscillating the whole time. What changed is:
1. How much of it passes through the filter (based on Envelope 2)
2. How much of the filtered voltage passes through the VCA (based on Envelope 1)

---

## The Expanded Patch in Practice: Connection Order

**What you already have from Guide 01:**
- Oscillator (running continuously)
- Envelope 1 (ready to receive gate)
- VCA (waiting for audio input)
- Trigger source (ready to send gate to both envelopes)

**What you're adding:**
- 1× Voltage-controlled filter (VCF)
- 1× Second envelope generator

### Step 1: Filter Placement in Signal Chain

**What you're doing:** Inserting the filter between oscillator and VCA so audio voltage flows through it before being gated.

1. **Disconnect** oscillator audio from VCA (remove the cable you patched in Guide 01)
2. Patch oscillator **audio output** → filter **audio input**
3. Patch filter **audio output** → VCA **audio input**
4. Signal flow is now: oscillator → filter → VCA → output

**Voltage perspective:** Oscillator's audio voltage now passes through the filter before reaching the VCA. The filter will shape it based on its cutoff voltage.

### Step 2: Filter Configuration

**What you're doing:** Setting initial filter parameters so you can hear the effect clearly.

1. Set filter type to **lowpass** (if your filter offers multiple types)
2. Set manual **cutoff** to around middle position (12 o'clock)—this baseline cutoff position will be modulated by the envelope
3. Set **resonance** fairly low (around 20-30%)
4. Leave filter CV inputs unpatched for now
5. **Listen:** The filtered oscillator should sound darker than the unfiltered oscillator (because cutoff is set low-ish)

**Voltage perspective:** The filter's brightness is determined by the manual cutoff knob position *and* incoming CV. Right now, only the knob is set (no CV modulation yet). You can hear its effect before even patching envelope control.

### Step 3: Second Envelope Preparation

**What you're doing:** Creating independent time-based control voltage for the filter.

1. Set **Attack** to fairly quick (50-200ms, similar to Envelope 1)
2. Set **Decay** to medium-long (500ms-1 second, often longer than Envelope 1 for different character)
3. Set **Sustain** to medium level (around 40-60%, can differ from Envelope 1)
4. Set **Release** to medium (300-500ms)
5. Patch same trigger source to this envelope's **Gate input** (both envelopes trigger simultaneously)

**Voltage perspective:** You now have a second control voltage generator, triggered at the same time as Envelope 1, but with different timing. Both are generating rising/falling control voltage simultaneously.

### Step 4: Connect Filter Modulation

**What you're doing:** Patching Envelope 2's output voltage to the filter's cutoff input so the filter brightness evolves.

1. Patch Envelope 2 **output** → filter **cutoff CV input** (may be labeled "CV In," "Cutoff CV," "Mod In," "Frequency CV," etc.)
2. Many filters have a **CV amount/attenuator** control — set this to around 50% initially to moderate the effect
3. **Listen:** The filter should now track the second envelope. As you trigger, you should hear brightness change along with the rising/falling envelope voltage.

**Voltage perspective:** Filter's cutoff is now being modulated by two sources simultaneously:
- Manual cutoff knob sets the base level
- Envelope 2 adds/subtracts from that level as it rises/falls

### Step 5: Test—Watch Both Envelopes Work

1. Trigger both envelopes (gate goes high, both envelopes fire)
2. Listen and observe:

**Amplitude envelope (Envelope 1):**
- Triggers → attack phase → VCA opens → audio gets louder
- Decays → sustain → volume settles at sustain level
- Release → VCA closes → silence

**Timbral envelope (Envelope 2):**
- Triggers → attack phase → filter opens → sound gets brighter
- Decays → sustain → brightness settles at new level
- Release → filter closes → sound gets darker

**The relationship:**
- Notice how they move *independently*
- If Envelope 1 is fast and Envelope 2 is slow, amplitude drops quickly but brightness lingers
- This is the foundation of expressive synthesizer sound design

---

## Module Recommendations

### Filters (VCFs)

**Budget: Doepfer A-120 Moog Ladder Filter** (around $130)
- Classic warm lowpass filter
- Simple controls: cutoff, resonance, CV inputs
- Self-oscillates at high resonance (can become sine oscillator)
- Great for learning filter fundamentals

**Budget alternative: Doepfer A-124 Wasp Filter** (around $130)
- Lowpass, highpass, bandpass modes switchable
- Different character than Moog (more aggressive)
- Good for understanding filter type differences

**Mid-range: Erica Synths Black Polivoks VCF** (around $240)
- Aggressive Russian filter design
- Lowpass and bandpass modes
- Distinctive character, excellent resonance capabilities
- Great for understanding regional filter personalities

**Mid-range: Intellijel Morgasmatron** (around $450)
- Dual filter (two independent filters)
- Multiple filter types per channel
- Complex routing options (series, parallel, stereo)
- Grows with your system

**Higher-end: Rossum Electro-Music Evolution** (around $500)
- Stereo programmable filter
- Multiple filter types (lowpass, highpass, bandpass, notch, combinations)
- Digital control, analog signal path
- Deep feature set

**Compact: Erica Synths Pico VCF3** (around $100, 3HP)
- Tiny lowpass filter
- Simple interface, limited CV control
- Great for space-constrained builds

### Second Envelope Generator

**Option 1: Buy a second single envelope**
If you already have Doepfer A-140 ADSR from Guide 01, buy another one (around $90).

**Option 2: Use a multi-envelope module (more efficient)**
If you have **Maths** from Guide 01: It already provides **two** function generators, so you have both envelopes covered.

If you have **Intellijel Quadrax:** It provides **four** envelope channels—use channel 1 for amplitude, channel 2 for filter.

**Option 3: Single second envelope**
- **Erica Synths Black EG2** (around $160, 8HP) — Single ADSR with extra features
- **Doepfer A-140 ADSR** (around $90) — Simple, reliable second envelope

---

## Common Issues and Solutions

### "The filter isn't doing anything"

**Control voltage isn't reaching the filter.** Check:

1. **Is audio actually passing through the filter?** Verify oscillator → filter → VCA routing
2. **Is the manual cutoff set somewhere audible?** If cutoff is fully open (12 o'clock or higher), you might not perceive filtering. Try turning cutoff knob down to 10 o'clock to hear the effect
3. **Is Envelope 2 patched to the filter's CV input?** No patch = no modulation
4. **Is the CV amount control turned up?** Some filters default CV inputs to zero

### "Everything sounds muffled/dark"

**Filter cutoff is too low.** Either:
1. Raise the manual cutoff knob position, or
2. Increase Envelope 2's peak voltage (if envelope has output level control), or
3. Increase the filter's CV amount control so Envelope 2 has more effect

### "Filter opens too fast, sound gets dark before the note ends"

**Envelope 2's decay/release are too fast.** Lengthen the envelope's decay and release so brightness stays present longer into the note's duration.

### "I hear a click when the filter opens"

**Filter envelope attack is too fast, or filter self-resonating.** Try:
1. Slower attack on Envelope 2 (10-20ms minimum)
2. Reduce resonance if it's very high—high resonance + fast modulation can pop

### "The filter sounds thin/weak"

Try:
1. Increase resonance to 25-40% (adds emphasis at cutoff)
2. Use a brighter oscillator waveform (sawtooth instead of sine/triangle)
3. Try different filter types if available (some have more character than others)

### "Amplitude and filter brightness always move together, I want them independent"

**This is correct behavior—you're just hearing them move in sync because Envelope 1 and Envelope 2 have similar timings.**

To separate them:
1. Make Envelope 2 much longer decay than Envelope 1 (filter evolves slowly while amplitude drops fast)
2. Or make Envelope 2 much shorter (filter jumps bright then settles while amplitude sustains)
3. Or give them completely different attack times

The independence is there—adjust envelope parameters to hear it.

---

## Expanding This Patch

**You've added timbral control.** Your system now has:
- Pitch (oscillator frequency)
- Amplitude shaping (Envelope 1 → VCA)
- Timbral shaping (Envelope 2 → filter cutoff)

**This is a complete synthesizer voice.** Most classic synthesizers use exactly this architecture.

**Experiments to try:**
- **Invert the relationship:** Make filter envelope much slower than amplitude envelope. Watch brightness evolve gradually while amplitude responds quickly
- **Swap envelope times:** Give Envelope 2 much faster attack. Hear brightness spike immediately, then fade while amplitude sustains
- **Try different filter types:** If your filter has highpass or bandpass, hear how they change character
- **Adjust resonance:** Find the sweet spot (usually 25-40%) where it adds character without being obnoxious

**Next steps (not in this guide):**
- **Guide 03: Musical Phrases** adds sequencer for pitch control and rhythmic patterns
- **Guide 04: Rhythm and Percussion** explores different voice architectures for drums

---

## Why This Matters: Interconnection Thinking

**The two-envelope architecture teaches the core modular principle: One type of source, infinite applications.**

An envelope is just a voltage generator that changes over time. You've now applied that same voltage type to two different destinations:
- **Envelope 1 → VCA CV** = amplitude shaping
- **Envelope 2 → Filter CV** = timbral shaping

Same principle. Different destinations. Different results.

**This pattern repeats everywhere:**

- LFO → VCA CV = tremolo (amplitude wobble)
- LFO → Filter CV = filter sweep (timbral wobble)
- LFO → Oscillator FM = vibrato (pitch wobble)

The source doesn't care where it goes. The destination responds to incoming voltage the same way. Meaning comes from routing.

**Filters teach another critical insight:** Not just sources and gates. Processors. Filters process audio voltage based on control voltage. So do waveshapers, distortion, effects. Everything in modular works this way:

Audio voltage in → shaped by control voltage → processed voltage out

**When you later add effects (reverb, delay, distortion), LFOs, random sources, or complex sequences, you'll recognize this pattern everywhere.** Control voltage shapes audio voltage. Different sources, different processors, same underlying architecture.

**Advanced note: Signal flow order matters.** This guide uses Filter → VCA because it creates clean separation—filter shapes timbre, VCA shapes amplitude independently. Some musicians patch VCA → Filter instead, which creates complex interactions: the VCA's gating affects the filter's resonance behavior, producing more unpredictable but sometimes expressive results. Try both once you're comfortable with the foundation, and listen for how the interaction changes the sound. This is interconnection in action—the same modules produce different results based on patch order.

**Interconnection emerges.** Everything is voltage. Everything can control everything else. Your job is routing.

---

## Equipment Summary

**What you need for this patch:**
- Everything from Guide 01 (oscillator, Envelope 1, VCA, trigger source, output, case, cables)
- 1× Voltage-controlled filter (VCF)
- 1× Second envelope generator (or second channel of multi-envelope module)
- ~5-10 additional patch cables

**Additional HP requirement:** 8-20HP depending on filter choice

**Additional cost:** $100-500 depending on filter and whether you need a separate second envelope

**Total system so far:**
- Approximate HP: 35-50HP
- Approximate cost: $600-1200 (modules only, not including case/power/cables)

**Reality check:** You're building a complete voice. This is the foundation of subtractive synthesis. Every future voice adds oscillators, filters, and envelopes—but follows the same principle.

---

## What's Next

You've added timbral control through filtering and independent envelope modulation. You understand why two envelopes matter, how filters shape audio voltage, and the principle that one module applied to different destinations creates different effects.

**Guide 03: Musical Phrases** introduces sequencers. You'll learn how to create melodic patterns and rhythmic control, moving from manual triggering to programmed sequences.

But first, internalize this patch. Experiment with envelope timing relationships. Find the sweet spots between your two envelopes that create the timbres you want to hear.

**You've built a complete synthesizer voice. Everything else is expansion and variation on these principles.**

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For prerequisites, see 00_before_you_buy_anything.md. For the first functional patch, see 01_making_sound.md. For specific module deep-dives, see the instrument-specific guides in the parent directory.*