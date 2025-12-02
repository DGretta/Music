# dsp.coffee Kali

**32-bit stereo time-domain effects processor with 6 synchronized CV outputs, 4 effect modes, and 16+ LFO variants. Audio in, complex modulated sound out.**

![dsp.coffee Kali Front Panel](https://github.com/DGretta/Music/raw/main/modular/images/dspcoffee/kali/front_panel.jpg)
*Front panel: Left and right delay time controls, feedback and wet/dry balance, cutoff/tone shaping, and reverb amount. Central display shows mode, parameter, and value. Right side: Meta 1 and Meta 2 mode-specific controls. Left encoder for navigation/LFO edit, right encoder for parameter adjustment. Upper section: LFO Rate knob (controls all 6 synchronized LFOs), Mode selector (Basic/Parvati/Kali/External Feedback), and Resynch button. Lower section: 3x CV outputs per side (1L-3L, 1R-3R), 2 clock outputs, and audio input/output jacks.*

## Quick Start

**Your goal:** Create evolving ping-pong delay with modulated feedback in 5 minutes.

**What is Kali?** Unlike traditional effects that process audio independently of modulation, Kali binds everything to a central delay timebase. The delay time becomes the master clock. Every LFO rate, every parameter modulation, everything synchronizes to this timebase. Send audio through. Adjust delay time. Watch the entire effect landscape reorganize around that delay timing. This is time-domain thinking: treating delay not as an effect parameter, but as the architectural foundation for everything else.

**Key Specifications:**
- **Width:** ⚠️ NOT DOCUMENTED (verify against physical module or dsp.coffee directly)
- **Depth:** 29 mm (skiff-friendly)
- **Power:** 200 mA @ +12V / 75 mA @ -12V / 0 mA @ +5V
- **Audio I/O:** ⚠️ CONNECTOR TYPE NOT DOCUMENTED (verify: 3.5mm stereo in/out or RCA?)
- **Audio Quality:** 24-bit in/out, 48 kHz sample rate, 32-bit floating-point processing
- **CV Outputs:** 6 bipolar outputs (approximately -6.25V to +6.25V), 2 clock outputs, 12-bit resolution
- **FX Modes:** Basic (delay), Parvati (chorus/granular), Kali (distortion), External Feedback
- **LFO Modes:** 16+ synchronized waveforms (Sine, Triangle, Saw, Ramp, Square, S+H, Track+Hold, Random Reset, Random Shape, Audio Rate, Envelope Follower, and others)

---

### Your First Modulated Delay (5 minutes)

**1. Power on and enter Basic mode (30 seconds)**
- Kali starts on the MAIN PAGE in the last mode you used (likely Basic on first power)
- Rotate the right encoder to cycle through modes if needed: Basic, Parvati, Kali, External Feedback
- Basic mode is ping-pong delay—ideal for learning the timebase concept

**2. Set initial parameters (2 minutes)**
- **L Time:** Rotate left encoder menu → adjust to 25% (approximately 100-150ms delay, depending on range; ⚠️ EXACT RANGE NOT DOCUMENTED)
- **R Time:** Adjust to 25% (creates independent left/right delay timing)
- **Feedback:** Rotate right encoder → select Feedback parameter → set to 50% (moderate feedback without runaway buildup)
- **Wet/Dry:** Set to 50% (equal mix of processed and dry signal)
- **Cutoff:** Set to 75-100% (⚠️ CUTOFF FUNCTION NOT DOCUMENTED; appears to be filter frequency or feedback shaping)

**3. Send audio through (1 minute)**
- Connect audio source (drum loop, melodic phrase, voice) to Kali's input
- Listen to the ping-pong delay. Notice how left and right delays are independent—they create stereo width and rhythmic complexity

**4. Introduce modulation (1.5 minutes)**
- Click left encoder to enter LFO EDIT screen
- Rotate left encoder to select LFO 1L (left side, LFO 1)
- Rotate right encoder to select LFO MODE
- Choose SINE (standard sine wave, synchronized to your L Time delay)
- Adjust LFO RATE knob (on front panel) to increase/decrease the modulation speed
- Listen: The delay time now modulates. Your delay feedback is being shaped by the LFO. This is the core idea: modulation bound to the delay timebase, not arbitrary

**5. Save and appreciate (30 seconds)**
- Click left encoder to return to MAIN PAGE
- Your patch is remembered when powered off

**What you have created:** A foundational time-domain effect where delay timing, feedback, and modulation are architecturally linked. The LFO does not exist independently—it modulates a delay that is the system's master clock. This is synthesis thinking applied to effects: constraints breed sophistication.

**Next steps:** Explore other LFO modes (Track+Hold for stepwise modulation, S+H for randomness), try Parvati mode for granular texture, or add more LFOs to multiple parameters.

---

## Essential Parameters

Kali's architecture revolves around **delay time as timebase** and **LFOs as synchronized modulators**.

**Signal Flow:**

🔴 **Audio** │ 🔵 **CV** │ 🟡 **Gate**

```
┌─KALI EFFECT PROCESSOR─────────────────────────────────────┐
│                                                            │
│  AUDIO INPUT (L/R)                                         │
│  ├─ 24-bit input ⚠️ INPUT LEVEL/IMPEDANCE NOT DOCUMENTED │
│  │                                                        │
│  ├─ DELAY TIME (L and R independent)                     │
│  │  ├─ Left delay line (L TIME: percentage or ms)        │
│  │  └─ Right delay line (R TIME: percentage or ms)       │
│  │     ⚠️ ACTUAL MS RANGE NOT DOCUMENTED                 │
│  │                                                        │
│  ├─ FEEDBACK (amount of output fed back into input)      │
│  │  └─ Range: 0-100%, 50-90% typical for musical sound  │
│  │                                                        │
│  ├─ WET/DRY (balance between processed and unprocessed)  │
│  │  └─ Range: 0-100%, 50% = equal mix                   │
│  │                                                        │
│  ├─ CUTOFF ⚠️ FUNCTION NOT DOCUMENTED                    │
│  │  └─ Range: 0-100%, appears to shape feedback or tone │
│  │                                                        │
│  ├─ REVERB (available in all modes)                      │
│  │  └─ ⚠️ REVERB MECHANISM/PARAMETERS NOT DOCUMENTED     │
│  │                                                        │
│  ├─ FX MODE SELECTION                                    │
│  │  ├─ BASIC: Ping-pong delay (independent L/R timing)  │
│  │  ├─ PARVATI: Chorus + granular (grain slicing)       │
│  │  ├─ KALI: Distortion (diode emulation + wave fold)   │
│  │  └─ EXTERNAL FEEDBACK ⚠️ MECHANICS NOT DOCUMENTED     │
│  │                                                        │
│  └─ META 1 & META 2 (per-mode control parameters)        │
│     ⚠️ SPECIFIC FUNCTION PER MODE NOT DOCUMENTED         │
│                                                            │
│  LFO SECTION (6 outputs, synchronized to delay timebase) │
│  ├─ BASE FREQUENCY = derived from delay time             │
│  ├─ LFO RATE knob = applies multiplier to ALL LFOs       │
│  ├─ Individual LFO settings (per CV output 1L-3L, 1R-3R) │
│  │  ├─ Mode (Sine, Tri, Saw, Square, S+H, Track+Hold...) │
│  │  ├─ Multiplier/Divider (independent rate per LFO)     │
│  │  ├─ Polarity (Unipolar +, Bipolar +/-, Inverted)      │
│  │  ├─ Offset (-2048 to +2048 voltage)                   │
│  │  └─ Scale (0-100% amplitude)                          │
│  │                                                        │
│  └─ CLOCK OUTPUTS (2x, synchronized to delay timebase)  │
│     └─ ⚠️ CLOCK OUTPUT SPECIFICATIONS NOT DOCUMENTED     │
│                                                            │
│  AUDIO OUTPUT (L/R, 24-bit)                              │
│  └─ ⚠️ OUTPUT LEVEL/IMPEDANCE NOT DOCUMENTED             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Core Control Workflow:**

1. **Select active FX mode:** Right encoder (cycles: Basic → Parvati → Kali → External Feedback)
2. **Adjust main parameters:** Left encoder (selects parameter), right encoder (adjusts value)
3. **Enter LFO edit:** Click left encoder from MAIN PAGE to edit individual LFOs
4. **Set LFO properties:** Select LFO (1L-3L, 1R-3R), adjust Mode/Rate/Polarity/Offset/Scale
5. **Re-sync timing:** Click right encoder on MAIN PAGE to reset all LFO phases to synchronized start point

**Delay Time as Timebase:**

Kali calculates a BASE FREQUENCY from the current delay time. All LFO rates are then derived as multiples or divisions of this base frequency:

```
FINAL LFO RATE = BASE FREQUENCY × LFO RATE KNOB × MULTIPLIER/DIVIDER
```

Example: If L TIME is set to 200ms, the base frequency is 5 Hz. If LFO 1L has a multiplier of 2, the LFO runs at 10 Hz. If the LFO RATE knob is turned to 50%, all LFOs slow proportionally, but their ratios to each other remain locked.

This is architectural synchronization: every modulation source stays musically related to the effect's primary timing.

**FX Modes Overview:**

- **Basic:** Independent ping-pong delays (L and R can have different timings and feedback). Most straightforward entry point.
- **Parvati:** Chorus effect combined with granular processing (slicing audio into grains, then modulating grain timing/amplitude). More textural, less percussive.
- **Kali (Distortion):** Diode emulation and wave folding (destroys signal in musically useful ways). Feedback becomes aggressive; requires careful management.
- **External Feedback:** ⚠️ MECHANISM NOT DOCUMENTED (likely allows external audio to feed back into the delay, creating feedback loops with external sources)

---

## Why This Instrument Excels

**Time-domain thinking as distinct from oscillator thinking**

Most synthesizer education teaches oscillators first: sine waves, pitch, 1V/octave control. Oscillators generate periodicity. Kali operates in time-domain: it takes the audio you give it and reorganizes it in time. Delay is not adding space. Delay is reorganizing what already exists. This is a fundamentally different approach to sound design.

When you set a 200ms delay and feedback to 70%, you are not "adding reverb." You are creating rhythmic echoes of your source material. When you modulate that delay time with a slow LFO, you are not "creating movement." You are systematically time-stretching and time-compressing your audio relative to its original timing. This teaches that sound exists in time, not just in frequency.

**Modulation architecture as performance tool**

Six CV outputs synchronized to a single timebase. This is not a collection of independent LFOs. This is a modulation matrix where every output is musically related to every other output. You can modulate delay time with LFO 1. Modulate feedback with LFO 2. Modulate filter/cutoff with LFO 3. All three are harmonically locked because they all derive from the same base frequency. This creates coherence: modulation that serves the music, not random parameter automation.

Performance implication: You can send Kali's CV outputs to modulate external oscillators, filters, VCAs in your patch. All of that modulation remains synchronized to Kali's internal timing. Your entire modular patch becomes rhythmically locked to a single time-domain anchor.

**Effects as processors, not as decorations**

The distinction matters. A "reverb" is usually a decoration: you put it on a bus at the end and it sits there. Kali's effects are processors: they fundamentally reshape incoming audio in real-time, modulated by synchronized LFOs, feeding back on themselves. The feedback parameter is not "how much reverb tail" but "how much of the processed output reenters the input." This is synthesis-level control of effect behavior.

This teaches that effects are not add-ons. They are instruments. Delay, granular slicing, and distortion are sound sources when designed with feedback and modulation. Kali blurs the line between "effect" and "oscillator."

**Envelope follower as sidechain architecture**

One of Kali's LFO modes is Envelope Follower: the LFO responds to the amplitude envelope of the incoming audio. Send a drum loop into Kali. Set an LFO to Envelope Follower mode. Use that LFO to modulate feedback or delay time. Now the effect is responding dynamically to what you send it. Loud transients trigger modulation spikes. Quiet passages allow the effect to settle. This is sidechain thinking: the source material controls its own processing.

---

## Foundation: Basic Effects

Before exploring advanced modulation chains, understand Kali as a straightforward effects processor.

**Locked-Parameter Approach:**

When you want to learn what Kali does, do not modulate. Set parameters to fixed values:
- L Time and R Time fixed (no LFO modulation yet)
- Feedback fixed
- Wet/Dry fixed
- Cutoff fixed

Listen to what the delay does. Understand ping-pong delay (left echo, then right echo, then left again). Understand feedback buildup (more feedback means longer tail, more self-reinforcement). Once you understand the static behavior, introduce modulation.

**Starting Point Settings:**

| Parameter | Setting | Reasoning |
|-----------|---------|-----------|
| L Time | 25% | Medium delay, clear echoes |
| R Time | 25% | Matches L for symmetric pattern |
| Feedback | 50% | Feedback without runaway |
| Wet/Dry | 50% | Equal balance |
| Cutoff | 75-100% | ⚠️ RECOMMENDED but function unclear |
| Reverb | 0-20% | Subtle, not overwhelming |
| LFO RATE knob | Minimum | No modulation initially |

**First Exercise: Static Delay**

1. Set parameters to above values
2. Send a drum loop (4-8 bars) or melodic phrase into Kali
3. Listen for: Left and right echoes creating stereo width. Echoes decaying over 3-5 repeats (dependent on feedback).
4. Increase feedback to 70%. Listen: More repeats, tail gets longer, potential for feedback buildup.
5. Decrease feedback to 30%. Listen: Echoes die quickly, less tail.
6. Adjust Wet/Dry. Notice: At 0%, you hear only dry signal (no effect). At 100%, only wet (full effect, no original signal).

This teaches the mechanical behavior of delay before modulation confuses the picture.

**When to Introduce Modulation:**

Once you can predict how static delay will sound, introduce an LFO:
- Enter LFO EDIT mode
- Select LFO 1L
- Set Mode to SINE
- Adjust LFO RATE knob slowly upward
- Listen: The delay time now modulates. Left echoes speed up and slow down. Right echoes do the same independently (if R Time is different).

This is the conceptual leap: fixed delay is predictable. Modulated delay is responsive and alive.

---

## Patch Examples

### Patch 1: Simple – Ping-Pong Delay with Feedback Modulation

**Goal:** Create a delay effect where feedback breathing creates organic echo decay, modulated by a slow LFO.

**Setup:** Audio source (drum loop, synth line, voice) → Kali → Audio output/headphones.

**The Approach:**

1. **Set mode to Basic.** Left/right delays are independent, ideal for stereo exploration.

2. **Set static parameters:**
   - L Time: 25% (approximately 150-200ms; ⚠️ exact conversion not documented)
   - R Time: 30% (slightly longer right delay creates asymmetry)
   - Feedback: 60% (rich tail without harshness)
   - Wet/Dry: 50% (equal mix of delay and dry)
   - Cutoff: 80%
   - Reverb: 10%

3. **Enter LFO EDIT. Select LFO 1L:**
   - Mode: SINE (smooth modulation)
   - Polarity: +/- (bipolar, allows full feedback range)
   - Offset: 0 (center modulation)
   - Scale: 50% (moderate modulation depth)
   - Multiplier: 1 (sync'd to L Time base frequency)

4. **Assign LFO 1L to modulate Feedback parameter** (⚠️ METHOD FOR PARAMETER ASSIGNMENT NOT DOCUMENTED; assume: Select LFO → Select Parameter → Enable modulation)

5. **Play audio through. Adjust LFO RATE knob slowly upward.** Listen: Feedback oscillates. Echoes swell and recede. The delay is breathing.

6. **For variation:** Change LFO Mode to TRIANGLE (more angular envelope) or TRACK+HOLD (stepwise feedback changes).

**Why this works:** Feedback modulation teaches that LFO targets matter. Modulating feedback creates dynamic effect behavior without changing the delay time itself. Users learn: one LFO, one parameter, one idea executed clearly.

**Similar Effects (Budget/Premium/Different Character):**
- **Budget:** Mutable Instruments Clouds (granular processor, less organized than Kali's timebase sync, but similar modulation philosophy)
- **Different character:** Elektron Analog Rytm (delay + modulation, but grid-locked, not continuously variable)
- **Premium:** Make Noise Morphagene (granular delay, tape-like quality, different underlying architecture)

---

### Patch 2: Intermediate – Granular Effects with Envelope Follower

**Goal:** Use Kali's Parvati mode with Envelope Follower modulation to create granular texture that responds to input dynamics.

**Setup:** Drum loop or polyrhythmic source → Kali (Parvati mode) → Audio output.

**The Approach:**

1. **Switch to Parvati mode.** (Right encoder → cycle to PARVATI). Parvati combines chorus and granular effects (grain slicing + time manipulation).

2. **Set static parameters:**
   - L Time: 20% (grain window size; ⚠️ GRAIN SIZE PARAMETER MAPPING NOT DOCUMENTED)
   - R Time: 22% (subtle asymmetry)
   - Feedback: 40% (moderate regeneration)
   - Wet/Dry: 60% (emphasize processed signal)
   - Cutoff: 70%
   - META 1: 50% (⚠️ FUNCTION UNCLEAR; assume chorus depth or grain randomization)
   - META 2: 30% (⚠️ FUNCTION UNCLEAR; assume grain scatter or time modulation)

3. **Enter LFO EDIT. Select LFO 1L:**
   - Mode: ENVELOPE FOLLOWER (responds to input amplitude)
   - Polarity: +/- (bipolar)
   - Gain: 50% (⚠️ GAIN PARAMETER: controls follower sensitivity; adjust for responsiveness)
   - Scale: 100% (full modulation range)

4. **Assign LFO 1L to modulate Feedback.** Now feedback responds to input transients. Loud hits trigger feedback spikes. Quiet passages allow settling.

5. **Add LFO 2L in SINE mode, assigned to META 1.** Now granular behavior is modulated by both envelope following (dynamic) and periodic LFO (rhythmic).

6. **Play polyrhythmic or complex source through.** Listen: Grain slicing responds to input dynamics. Envelope follower creates sidechain-like effect. LFO 2 adds rhythmic grain evolution.

**Why this works:** This patch teaches that LFO modes vary in application. Envelope Follower is reactive (input-responsive). SINE is generative (time-based). Using both simultaneously creates hybrid modulation architecture.

**Similar Effects (Budget/Premium/Different Character):**
- **Budget:** 4ms Listen I/O (envelope follower + effects processor, similar sidechain idea, different I/O integration)
- **Different character:** Mutable Instruments Marbles (generative modulation, probability-based, different control philosophy)
- **Premium:** Qu-Bit Darkside (granular delay, extensive modulation, similar complexity, different UI)

---

### Patch 3: Advanced – Feedback Chains with Multimodulation Synchronization

**Goal:** Create self-modulating feedback loop where multiple synchronized LFOs shape delay time, feedback amount, and grain/effect parameters simultaneously.

**Setup:** Sustained tone or noise source → Kali (Kali distortion mode recommended for feedback aggression) → External modulation sources (Maths or similar envelope generator) → CV inputs on other modules (optional cascading modulation).

**The Approach:**

1. **Switch to Kali mode (distortion).** Kali mode includes diode emulation and wave folding—feedback becomes colorful, not just loud.

2. **Set static parameters:**
   - L Time: 35% (longer delay, more dramatic feedback behavior)
   - R Time: 38% (asymmetric)
   - Feedback: 75% (aggressive, self-sustaining)
   - Wet/Dry: 75% (emphasize processed signal)
   - Cutoff: 60% (controls harmonic content of distortion; ⚠️ EXACT FUNCTION NOT DOCUMENTED)
   - META 1: 60% (⚠️ FUNCTION UNCLEAR; assume wave fold depth or distortion intensity)
   - META 2: 40% (⚠️ FUNCTION UNCLEAR; assume saturation or feedback character)

3. **Enter LFO EDIT. Configure three LFOs in parallel:**
   - **LFO 1L:** SINE mode, assigned to L TIME (modulate delay pitch)
   - **LFO 2L:** SQUARE mode (⚠️ PULSE WIDTH ADJUSTMENT via LFO ADJ parameter, not documented), assigned to FEEDBACK (create rhythmic feedback swells)
   - **LFO 3L:** RANDOM SHAPE mode (random waveform selection every N cycles; ⚠️ CYCLES PARAMETER UNCLEAR), assigned to META 1 (distortion character modulation)

4. **Adjust rates:** Set each LFO to different multipliers (LFO 1L: x1, LFO 2L: x2, LFO 3L: x0.5). They now have polyrhythmic relationships—multiple periodicities modulating simultaneously.

5. **Set LFO RATE knob to control all rates proportionally.** Turning the knob speeds up or slows down all three LFOs while preserving their ratios to each other.

6. **Cascade to external modules (optional):** Send Kali's CV outputs (1L, 2L, 3L) to modulate external filter cutoff, VCA amplitudes, or other time-domain processors. Kali becomes the master clock for your entire patch.

7. **Send sustained input (pad, noise, tone) into Kali.** Listen: The material is getting shredded, reassembled, modulated by three independent but related periodicities. Feedback self-sustains the loop. The effect feeds on itself.

**Why this works:** This patch teaches that time-domain processors with synchronized modulation become instruments, not effects. Feedback is no longer "too much reverb"—it is a compositional parameter. Multiple LFOs create polymetric modulation: feedback breathes at one rate, distortion character shifts at another, delay timing oscillates at a third.

**Similar Effects (Budget/Premium/Different Character):**
- **Budget:** Make Noise Echophon (delay + reverb, less modulation architecture, simpler design philosophy)
- **Different character:** Analog Industries Erbe-Verb (reverb-centric, different feedback approach, designed for ambience rather than aggression)
- **Premium:** Erica Synths Pico Time (multi-effect with modulation, similar complexity, different UI/control paradigm)

---

## Common Mistakes & Pattern Recognition

### Mistake 1: "My delay is feeding back wildly and I cannot stop it"

**The misunderstanding:** You set feedback to 80%+ and now the effect is self-oscillating, getting louder, not decaying.

**Why it happens:** Feedback above 70-75% becomes self-sustaining, especially in Kali distortion mode where the feedback signal gets reshaped harmonically. If cutoff is also high, the feedback has rich harmonic content and sustains longer. You have created a positive feedback loop that regenerates energy rather than decaying it.

**The fix:** 
1. Reduce feedback to 50% or lower immediately.
2. If that does not stop it, reduce Wet/Dry to lower the effect level.
3. Understand: Feedback builds. 50% feedback creates 5-6 clear repeats. 70% feedback creates 10+ repeats with potential for buildup. Anything above 75% is self-sustaining (intentional or accidental).
4. In performance, feedback is a live control: adjust it up when you want aggression, down when you want clarity.

**The principle:** Feedback is not a "reverb tail" setting. It is a regeneration parameter. High feedback values create feedback loops. This is useful intentionally (Patch 3 demonstrates this). Accidentally dangerous in live settings where you do not expect the effect to self-amplify.

### Mistake 2: "I modulated something, but the sound did not change"

**The misunderstanding:** You entered LFO EDIT, set an LFO mode, adjusted parameters, but the audio sounds static.

**Why it happens:** LFO parameters are set, but the LFO is not assigned to any effect parameter. Setting an LFO mode alone does not do anything—the LFO must be routed to control something (feedback, delay time, cutoff, etc.). Also, if the LFO is assigned but the LFO RATE knob is at minimum, modulation is running at subsonic speeds and you will not hear the change.

**The fix:**
1. Confirm LFO assignment: ⚠️ ASSIGNMENT METHOD NOT DOCUMENTED in wiki. Check: Is there a separate assignment menu? Does selecting the LFO automatically assign it to the selected parameter? (Assume: Yes, based on UI description, but verify with hardware.)
2. Increase LFO RATE knob to audible range (1-10 Hz minimum to hear modulation clearly).
3. Start with a large Scale value (80-100%) so modulation is obvious.
4. Use SINE mode (slow, predictable waveform) to verify modulation before switching to more complex shapes.

**The principle:** Modulation requires three steps: Set mode → Assign target parameter → Set rate and depth. Missing any step means silence. This teaches that modulation is intentional, not automatic. Systems require explicit routing.

### Mistake 3: "My delay sounds nothing like what the manual shows"

**The misunderstanding:** You follow the setup steps, but the delay sounds thin, harsh, or unmusical compared to examples.

**Why it happens:** Three common causes: (1) Input level too hot (clipping, harsh distortion), ⚠️ INPUT LEVEL SPECIFICATIONS NOT DOCUMENTED. (2) Cutoff set too low (harsh tone shaping). (3) Feedback too high or too low relative to your input material (feedback is amplitude-dependent; louder inputs require lower feedback percentages).

**The fix:**
1. Start with recommended settings exactly as listed: L Time 25%, R Time 25%, Feedback 50%, Wet/Dry 50%, Cutoff 75-100%.
2. Verify input level: If Kali is clipping (red indicators or harsh artifacts), reduce input level ⚠️ (INDICATOR LOCATION/INPUT LEVEL CONTROL NOT DOCUMENTED; assume front-panel input level knob or external gain control).
3. Adjust Cutoff: Try 85% and listen for clarity. If too harsh, reduce to 70%.
4. Use a simple source initially: Sine wave tone, light drum loop, sustained pad. Complex sources (heavily compressed drums, distorted synths) require different settings.

**The principle:** Effects are not one-size-fits-all. Input material determines optimal settings. Feedback behavior changes with input amplitude. Cutoff function remains ⚠️ UNCLEAR, but testing reveals its influence. Good effects design requires listening and adjustment, not blind following of presets.

### Mistake 4: "I cannot hear a difference between LFO modes"

**The misunderstanding:** You switch from SINE to SQUARE to TRIANGLE mode, but the modulation sounds identical.

**Why it happens:** LFO modes have subtle character differences, not dramatic amplitude or speed differences. SINE is smooth. SQUARE has discontinuous edges. TRIANGLE is angular. At slow LFO rates (0.1-1 Hz), these differences are perceptually subtle. Also, modulation depth (Scale parameter) might be too low to reveal character differences.

**The fix:**
1. Set LFO RATE to 2-5 Hz (fast enough to hear mode differences clearly).
2. Set Scale to 100% (full modulation depth).
3. Target delay time with the LFO (makes mode character obvious).
4. Switch modes: SINE (smooth pitch sweep), TRIANGLE (angular pitch changes), SQUARE (abrupt pitch jumps), TRACK+HOLD (stepwise randomness).
5. Now differences are clear: SINE is fluid. SQUARE is clicky. TRACK+HOLD is unpredictable.

**The principle:** LFO mode selection is a tone-shaping tool. SINE = musical smoothness. SQUARE = rhythmic articulation. RANDOM = unpredictability. Choosing the right mode requires understanding what character you want. This teaches that modulation sources are not interchangeable—they have personality.

### Mistake 5: "My LFOs went out of sync"

**The misunderstanding:** You were editing LFO settings, and now the LFOs are not running together—they phase in and out of sync, creating chaotic modulation.

**Why it happens:** When you change LFO settings, they reset to different starting phases. LFO 1 might start at zero crossing (sine at 0V). LFO 2 might start at peak (sine at +7V). If you edit one LFO but not the other, they end up out of phase. This is intentional in some cases (you want polymetric modulation), but usually accidental.

**The fix:**
1. Press the right encoder on the MAIN PAGE. This resets all LFOs and clocks to synchronized start point (all at phase zero).
2. After re-sync, edit only what you need. Editing one LFO will not unsync them.
3. If you intentionally want polymetric LFO phasing, edit before syncing, then sync once, then leave them alone.

**The principle:** Sync is a deliberate action. Kali gives you the option to sync or let them drift. Drifting LFOs create evolving textures (interesting). Synced LFOs create predictable modulation (useful for teaching). Knowing which you want requires intention.

---

## Pairs Well With

**Audio Sources** (what to send into Kali)
- Synthesizers (Plaits, Tides, Shelves for pitch-based material)
- Drum machines or drum loops (complex rhythmic material becomes richer with delay/granular processing)
- Microphones or line-level instruments (voices, acoustic instruments)
- Noise sources or LFOs from other modules (Kali can process modulation signals as audio, creating audio-rate artifacts)

**Modulation Sources** (to modulate Kali's CV inputs)
- Maths or Function (envelope generators for dynamic modulation)
- Batumi or Quad LFO (additional modulation sources to cascade with Kali's internal LFOs)
- Envelope followers (sidechain modulation from drums or transients)
- External sequencers (control Kali parameters from pattern data)

**Output Integration**
- Audio mixer (combine Kali's output with dry signal for blending)
- Additional effects (chain Kali output through filters, reverbs, compressors for further processing)
- Recording interface (capture Kali's output for arrangement/composition)
- Other modular modules (use Kali's 2 clock outputs to sync external gear; use CV outputs to modulate external processors)

**Integration Philosophy**
Kali is self-contained: it processes audio, generates synchronized CV modulation, and outputs timing information. It can anchor your patch (everything else syncs to Kali's timebase) or integrate into larger systems (Kali processes audio from other modules, its CV outputs modulate other processors). The key is intentional routing: understand what goes in, what comes out, and why.

---

## Advanced Learning Path

### Time-Domain Thinking vs. Frequency-Domain Thinking

Kali operates in time-domain: it reorganizes audio material temporally (delay repeats, granular slicing, feedback loops). This is distinct from frequency-domain processing (filters, EQ) which reshape harmonic content. Understanding this distinction is crucial.

**Time-domain processing:** Delay, granular effects, feedback loops. Input material is echoed, sliced, or regenerated. The original frequencies remain, but arrive at different times.

**Frequency-domain processing:** Filters, distortion (which reshapes harmonics), EQ. Input material is filtered or reshaped harmonically. Arrival time does not change, but spectral content does.

**Practice:** Send a simple sine tone into Kali. Adjust delay time and feedback. The sine tone remains a sine tone (frequency unchanged). It just repeats. Now send the same sine tone through a filter: the sine tone becomes duller or brighter (frequency reshaped). This is the conceptual difference. Kali is time-domain. Filters are frequency-domain. Most sophisticated sound design uses both.

### Feedback as Musical Parameter

In traditional effects terminology, feedback is "undesirable" (uncontrolled buildup). In Kali, feedback is compositional. High feedback (70-80%) creates self-sustaining loops. Modulating feedback creates dynamic regeneration. This is feedback as an instrument.

**Exercise:** 
1. Send a short click or burst into Kali.
2. Set feedback to 75%, L Time to 20%.
3. Listen: The click repeats, feeding back into itself, creating a decaying series of echoes.
4. Modulate feedback with an LFO (low rate, 0.5 Hz).
5. Listen: The echoes swell and recede based on feedback modulation. You have created a regenerating instrument from a single input.

This teaches that feedback is not "mistake"—it is architecture.

### Polymetric Modulation

Kali allows multiple LFOs to run at different rates relative to the base delay timebase. These create polymetric modulation: multiple periodicities affecting different parameters simultaneously.

**Example:**
- LFO 1L modulates delay time at 1x base frequency (locked to delay timebase)
- LFO 2L modulates feedback at 2x base frequency (twice as fast)
- LFO 3L modulates cutoff/distortion at 0.5x base frequency (half as fast)

These are now polymetric: three independent rhythms, all synchronized to a common timebase, affecting different parameters. Polymetric modulation creates evolving texture that maintains coherence.

**Practice:** Create this three-LFO patch. Listen for: Slow cutoff/tone changes (0.5x). Moderate feedback breathing (1x). Fast delay time modulation (2x). The combination creates complex, evolving sound.

### Granular Processing in Parvati Mode

Parvati mode uses granular processing: audio is sliced into short grains (determined by L/R Time settings), then grains are played back at different rates or times. Grain size, grain rate, grain scatter, and amplitude envelope determine character.

⚠️ PARVATI MODE PARAMETERS NOT FULLY DOCUMENTED. Testing with hardware will reveal: What does META 1 control? What does META 2 control? How do grain parameters change sound? Document findings for version 2 of this guide.

### External Feedback Mode (Undocumented)

⚠️ EXTERNAL FEEDBACK MODE MECHANISM NOT DOCUMENTED. Likely: Allows external audio to feed back into the delay processor, creating feedback loops where external sources drive the regeneration, not just Kali's internal signal. Testing with hardware will clarify. This mode is powerful for creating interdependent patches where multiple modules create feedback chains together.

---

## Troubleshooting

**Q: Kali is not receiving audio.**
A: Check: (1) ⚠️ INPUT CONNECTOR TYPE NOT DOCUMENTED (verify 3.5mm stereo or RCA connections). (2) Input cable is connected. (3) Input level ⚠️ (CONTROL LOCATION NOT DOCUMENTED; verify front panel). (4) Source module is outputting audio (test with headphones). (5) Kali is set to Wet/Dry above 0% (if Wet/Dry is 0%, you hear only dry, no processed signal).

**Q: I set parameters but nothing changed on the MAIN PAGE display.**
A: Parameters are being changed but might not all display on the 4-character screen. The display shows what you are currently adjusting, then returns to default view after timeout. ⚠️ EXACT DISPLAY BEHAVIOR NOT DOCUMENTED. Adjust parameters and listen to audio output—audio will confirm changes even if display does not show them.

**Q: How do I save patches?**
A: ⚠️ PATCH SAVE/LOAD FUNCTIONALITY NOT DOCUMENTED. Kali likely remembers settings per mode (Basic, Parvati, Kali, External Feedback) as last-used state. When you power off and back on, it recalls the last settings. No manual save/load mechanism is documented. This is a gap—document findings with hardware testing.

**Q: My LFOs sound very slow, almost imperceptible.**
A: LFO RATE knob is at minimum. Increase it. Also verify Multiplier/Divider: if a LFO has a 0.25x multiplier (dividing by 4), even with RATE at moderate levels, it runs very slow. Increase either the RATE knob or the multiplier to speed up modulation to audible range (1-10 Hz is typical).

**Q: Can I use Kali as a clock source for other modules?**
A: Kali has 2 clock outputs (synchronized to the delay timebase). ⚠️ CLOCK OUTPUT SPECIFICATION NOT DOCUMENTED (assume: 0-10V logic-level pulses at division of base delay frequency). Patch these into clock inputs on other modules to sync external gear to Kali's timing.

---

## Resources & References

**Official Documentation:**
- dsp.coffee GitHub Kali Wiki: https://github.com/joemisra/kali/wiki
  - 0. Getting Started: Navigation, setup, LFO sync concepts
  - 1. KALI FX Modes: ⚠️ INCOMPLETE (FX mode explanations minimal)
  - 2. KALI LFOs: Comprehensive waveform library, mode descriptions, specifications
- dsp.coffee Official Site: https://dsp.coffee/products/kali (overview, specs, order info)

**Community & Support:**
- dsp.coffee Dev Discord: https://discord.gg/FWJeS594fK (community, firmware updates, technical discussion)
- ModularGrid Kali Page: https://www.modulargrid.net (user patches, community configurations)

**Related Learning:**
- Time-domain synthesis: Study delay-based composition in Brian Eno's ambient work or contemporary techno (where delay drives composition, not decoration)
- Feedback loops: Understand self-sustaining systems in electronics and patch design philosophy
- Granular processing: Research microsound and spectral approaches to sound design
- Sidechain modulation: Study how envelope followers create responsive, dynamic effects

**Known Documentation Gaps (Version 1):**
- ⚠️ Module width (HP) not found in any source
- ⚠️ Cutoff parameter function not documented (assume tone/filter shaping, needs verification)
- ⚠️ Meta 1 and Meta 2 functions per mode not documented (needs hardware testing)
- ⚠️ External Feedback mode mechanics not documented (needs investigation)
- ⚠️ Input/output connector types and levels not documented (verify: 3.5mm stereo?)
- ⚠️ Exact delay time range (milliseconds) not documented (convert from percentage)
- ⚠️ Reverb parameter/implementation not documented (mentioned as available, not detailed)
- ⚠️ Patch save/load mechanism not documented (verify: recall per mode, or no save feature?)
- ⚠️ Clock output specifications not documented (assume: 0-10V logic pulses, rate TBD)
- ⚠️ Parvati mode grain control details not documented (META 1 and META 2 functions unclear)

---

**Last updated:** December 2025

**Framework Version:** Enhanced (Official Section Ordering, documented with gaps flagged for hardware verification)

**Note:** This guide is foundational documentation based on GitHub wiki and retailer specifications. Extensive testing with hardware in your studio will fill gaps, clarify undocumented parameters, and refine the pedagogical approach. Version 2 will integrate hardware findings and your partner's teaching experience.
