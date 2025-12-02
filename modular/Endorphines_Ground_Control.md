# Endorphin.es Ground Control

**42 HP polymetric/polyrhythmic performance sequencer with CV/MIDI/USB integration, pattern randomization, and CV modulation matrix.**

---

## Quick Start

**Your goal:** Create and perform a polymetric drum pattern in 5 minutes.

**What is Ground Control?** A performance-focused sequencer that breaks free from locked rhythmic grids. Unlike traditional step sequencers where all tracks must resolve at the same time, Ground Control lets each track run at its own speed, creating complex polymetric relationships while staying musically synchronized. It's built to think in real time—recording grooves on the fly, generating random variations instantly, and controlling external gear via CV, gate, MIDI, and USB.

**Key Specifications:**
- **Width:** 42 HP
- **Depth:** 25 mm
- **Power:** 420 mA @ +12V / 0 mA @ -12V / 0 mA @ +5V
- **Tracks:** 1 drum track (8 triggers) + 3 monophonic melodic CV/Gate tracks + 1 assignable modulation track
- **Patterns:** Up to 128 steps per pattern, 24 patterns per project, 24 projects
- **Connectivity:** 3.5mm TRS MIDI (Type B), USB-MIDI Host/Device, Clock In/Out, 4x external CV inputs, modulation CV out, individual track reset inputs, drum trigger outputs (0-10V), melodic pitch CV (-5V to +5V, 1V/octave), gate outputs

---

### Your First Polymetric Beat (5 minutes)

**1. Power on and select drum track (30 seconds)**
- Press the **TRACK D** button (the drum track light illuminates)
- You're now ready to record drums

**2. Set pattern length for the first drum (1 minute)**
- Hold **LAST STEP** and press **MUTE BUS** button 1 (selecting drum trigger 1)
- Use **VALUE -/+** to set the step count to **16** (default, but you're confirming it)
- Now drum 1 will loop in groups of 16 steps

**3. Set pattern length for the second drum differently (1 minute)**
- Hold **LAST STEP** and press **MUTE BUS** button 2 (selecting drum trigger 2)
- Use **VALUE -/+** to set the step count to **7** (this is the polymetric magic)
- Now drum 2 will loop in groups of 7 steps

**Why this matters:** Drum 1 and Drum 2 now cycle at different rates. They'll realign every 112 steps (16 × 7), creating a hypnotic, constantly-evolving pattern that sounds complex but you only defined two numbers.

**4. Record the pattern (2 minutes)**
- Press **RECORD** once (short press, not long hold)
- The sequencer is in step-record mode, stopped
- Press piano key **P/1** four times, then press **TEMPO** (rest) four times
- This creates a pattern: trigger 1, trigger 1, trigger 1, trigger 1, rest, rest, rest, rest (eight steps)
- Press **TRACK D** button, then piano key **Q/2** to switch to drum trigger 2
- Create a simple pattern for drum 2: **Q/2** twice, **TEMPO** twice, **Q/2** twice, **TEMPO** twice
- Press **PLAY** to hear your polymetric pattern unfold
- Notice how drum 1 and drum 2 create a slowly-shifting relationship

**5. Save it (30 seconds)**
- Press **🞸 (PROJ)** then **RECORD** then **RECORD** again
- Your pattern is saved to the current project

**What you've just created:** A polymetric drum relationship. The two triggers play at different rates, but remain synchronized to the master clock. This is the foundational concept that makes Ground Control powerful.

**Next steps:** Explore the melodic tracks, add MIDI controllers, or dive into the randomization features.

---

## Essential Parameters

Ground Control's architecture centers on **4 independent tracks**, each with its own sequence grid, pattern length, and behavior settings.

**Track Structure:**

🔴 **Audio** │ 🔵 **CV** │ 🟡 **Gate**

```
┌─GROUND CONTROL───────────────────────────────────────────┐
│                                                           │
│  DRUM TRACK (TRACK D)                                     │
│  ├─ 8 individual drum triggers                            │
│  ├─ Assignable pattern length per drum (1-128 steps)     │
│  ├─ Velocity via MIDI CC#01 or step editor               │
│  └─ Modulation track (CC#01, 0-+5V, -5V to +5V bipolar) │
│     Output: 8x drum trigger 0-10V ┐                      │
│     Output: 1x modulation CV out   ├─🔴 Audio jacks      │
│     MIDI OUT (channel 10 default)  ┘                      │
│                                                           │
│  MELODIC TRACKS 1/2/3 (monophonic)                        │
│  ├─ Pitch CV (-5V to +5V, 1V/octave standard)           │
│  ├─ Gate output (0-10V logic)                            │
│  ├─ Pattern length assignable per track (1-128 steps)    │
│  ├─ Time division 1/32 to 1/4 (including triplets)      │
│  ├─ Arpeggiator (UP/DOWN/RANDOM/ORDER modes)             │
│  ├─ Velocity per note (0-127)                            │
│  ├─ Gate length per note (1-99% of step duration)        │
│  ├─ Slide/portamento per step (0-99, ~100ms at default) │
│  ├─ Ratchet (note repeats per step: 0-4)                │
│  ├─ Tie (extends note across steps)                      │
│  ├─ Music scale (chromatic, major, minor, pentatonic)    │
│  ├─ Semitone transpose per track or globally             │
│  └─ MIDI channel assignable (default: 1/2/3)             │
│     Output: 1x pitch CV ┐                                │
│     Output: 1x gate     ├─🔵 CV jacks                    │
│     MIDI OUT            ┘                                │
│                                                           │
│  MODULATION MATRIX (External CV Control)                  │
│  ├─ 4 external CV inputs (-5V to +5V or 0-5V)            │
│  ├─ Assignable to: pattern shift, octave/semitone       │
│  │   offset, shuffle, probability, ratchets, slide,      │
│  │   gate length, or any CC# value (0-127)              │
│  └─ Per-destination modulation range set in menu         │
│     Inputs: CV 1/2/3/D ──────────────────────────🔵      │
│                                                           │
│  CLOCK/SYNC (Master or Slave timing)                      │
│  ├─ Internal master clock (adjustable BPM)               │
│  ├─ External master options: jack (eurorack standard),   │
│  │   MIDI clock, USB HOST, USB DEVICE                    │
│  ├─ Clock output dividers (1/32 to 4 bars)              │
│  ├─ Clock input dividers (PPQN 12/24/48 options)        │
│  ├─ Track-level reset inputs (independent timing)        │
│  └─ Global reset input                                   │
│     In: Clock, Reset ──────────────────────────🟡        │
│     Out: Clock, Reset ────────────────────────🟡         │
│                                                           │
│  I/O INTERFACES                                           │
│  ├─ MIDI IN/OUT (3.5mm TRS Type B standard)              │
│  ├─ USB MIDI HOST (connect MIDI controllers)             │
│  ├─ USB MIDI DEVICE (connect to DAW/computer)            │
│  ├─ SD Card (project backup/restore, USB mass storage)   │
│  └─ 2-octave keyboard (24 monophonic piano keys)         │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

**Core Control Workflow:**

1. **Select active track:** TRACK D/1/2/3 buttons
2. **Set pattern:** ⯇PATTERN/PATTERN⯈ buttons to choose (A-Z, 24 patterns per project)
3. **Set pattern length:** LAST STEP + MUTE BUS + VALUE-/+ (per track or per drum)
4. **Record method:** RECORD (short = step), RECORD (long = editor), or live record while playing
5. **Edit parameters:** TEMPO → [A-N] menu system (no menu diving, instant access)
6. **Save:** 🞸 → RECORD → RECORD (saves all unsaved patterns + project settings)

**Time Division (Groove Grid):**

Each track syncs to a time division grid. Set via **TRACK D/1/2/3 + 1/32...1/4**:
- 1/32 (fastest subdivisions)
- 1/16 (default, eurorack standard sixteenth notes)
- 1/8, 1/4 (slower grid resolution)
- **Long hold (1.5 sec):** Same division but in triplets

**Polymetry vs. Polyrhythm:**

These terms define how tracks relate:

- **Polymetry:** Each track has a different pattern *length* (e.g., Track 1 = 16 steps, Track 2 = 7 steps). They stay synchronized to the master clock but resolve at different times, creating evolving patterns.
- **Polyrhythm:** Each track has a different *time signature* (e.g., 5:4 ratio). The sequencer stretches/compresses step timing to fit non-standard beat divisions. Set via **TEMPO → A** (polyrhythmic time-base menu).

Ground Control excels at *both*—you can run Track 1 at 16 steps with 4:4 time signature while Track 2 runs 7 steps with a 5:4 time signature, creating deeply complex rhythmic textures.

**Pattern Lock:**

Press **⯇PATTERN + PATTERN⯈** simultaneously to lock all 4 tracks to the same pattern selection. When locked, changing pattern A on any track switches all 4 tracks to pattern A simultaneously. Essential for live performance "drops" or sudden rhythmic shifts.

---

## Why This Instrument Excels

**Polymetric thinking as a performance tool**

Most sequencers force you into grids. All tracks must resolve. All patterns must align. Ground Control inverts this: it *asks* each track to exist at its own pace. This isn't academic polyrhythm theory—it's practical performance architecture.

When you set drum kick to 16 steps and hi-hat to 7 steps, you're not fighting a constraint. You're leveraging a design that says: "These rhythms will never lock, so they'll create textural evolution without you touching anything." The patterns shift imperceptibly, creating the sensation that the sequencer is *responding* to musical intention rather than executing rigid instructions. This is synthesis thinking applied to sequencing: good design creates sophisticated behavior through elegance, not complexity.

**Randomization as creative tool**

Firmware V.3 introduced three distinct random pattern generators: euclidean (regular distribution, afro-style rhythms), wide random (maximum freedom), and narrow random (conservative, bassline-focused). Crucially, these aren't gimmicks. They're *intelligent generation*.

Record a 16-step melodic pattern. Press **TEMPO + 1/16** (wide random) and the sequencer generates entirely new melodies in your selected scale, maintaining key and playability. Press **TEMPO + 1/4** (random variation) and the sequencer takes your existing pattern and adds ratchets, slides, probability, octave shifts—subtle variations that preserve identity while creating fresh character. This is the opposite of chaos randomness. It's generative variation that respects musical constraints.

Performance use: Generate three variations of a bassline live. Keep the audience guessing. Maintain coherence through algorithmic design rather than human limitation.

**CV modulation matrix as system integrator**

The external CV input matrix (TEMPO → E) is where Ground Control becomes a *system controller*, not just a sequencer.

Four CV inputs. Unlimited assignment possibilities. One CV input controls pattern shift (nudge timing forward/backward), another controls shuffle amount, another controls probability (note skip chance), another controls ratchet density. Run all four inputs from a Maths or similar modulator, and Ground Control becomes responsive architecture: the entire rhythmic character shifts in real time as CV modulates parameters.

This is synthesis thinking. A single modulator (Maths envelope, LFO, or external CV) can reshape the entire groove—timing, swing, density, articulation—creating the sensation that the sequencer is *performing with* you rather than playing *for* you.

**MIDI/CV/USB integration**

Ground Control speaks five languages simultaneously: eurorack CV/gate, MIDI hardware, USB MIDI, eurorack clock, and internal clock. It can serve as:
- **Master clock** (clock out to your entire modular system)
- **CV sequencer** (controlling external oscillators/filters)
- **MIDI controller** (commanding external synthesizers)
- **MIDI expander** (controlled by DAWs via USB)
- **Groove sync** (syncing to hardware drum machines or Elektron devices)

This isn't feature bloat. It's architecture that says: "Your modular system doesn't have a hierarchy. Ground Control can anchor it, integrate into it, or expand it depending on what you're building."

**Performance-first philosophy**

Design reveals intention. Ground Control's control surface is built around *real-time manipulation*. Pattern lock lets you switch entire arrangements with one keypress. Mute/solo buttons blink with track activity, giving visual feedback. Arpeggiator modes switch on the fly. Probability and ratchet density can be CV-modulated *while playing*. The small 4-character display never becomes a menu trap—menu access is instant (TEMPO + button).

This is a sequencer that trusts you'll want to perform with it, not just program it.

---

## Patch Examples

### Patch 1: Standalone – Polymetric Drum Foundation

**Goal:** Create an evolving drum pattern where the hi-hat and kick never quite lock, generating hypnotic polymetric motion.

**Setup:** Sequencer only (no external gear), monitoring trigger outputs via headphones or audio interface.

**The Approach:**

1. **Set kick pattern:** TRACK D, drum trigger 1 (P/1 key) = 16 steps
2. **Set hi-hat pattern:** TRACK D, drum trigger 2 (Q/2 key) = 11 steps
3. **Record kick:** RECORD → P/1 [solid 8th note pattern: on-off-on-off-on-off-on-off], save to pattern A
4. **Record hi-hat:** Switch TRACK D to Q/2, RECORD → Q/2 [tight 16th note shuffle: on-on-off-on-off-on], save pattern A
5. **Record kick variation:** Save same kick to pattern B but LAST STEP + MUTE BUS 1 + VALUE-/+ to **13 steps**
6. **Perform:** Hit PLAY. Listen to the two drums for ~30 seconds. The kick (16 steps) and hi-hat (11 steps) resolve every 176 steps (16 × 11), creating a constantly-shifting polymetric relationship. Press ⯇PATTERN⯈ to switch kick to pattern B (13 steps). Now hi-hat (11) and kick (13) create a different polymetric ratio.

**Why this works:** Polymetric sequencing doesn't require external gear—it reveals itself through pure rhythm. The sequencer becomes a standalone compositional tool.

**Similar Standalone Sequencers:**
- **Budget:** Erica Synths Pico Sequencer (limited to 8 steps, monophonic—simpler concept, fewer polymetric possibilities)
- **Different character:** Elektron Analog Rytm (grid-locked, all tracks quantized to same resolution—forces you to think synchronously rather than polyrythmically)
- **Premium:** Elektron Octatrack (8-track sequencer, polymetric capable, but hardware-sampler focused vs. CV sequencer focused)

---

### Patch 2: Standalone – Melodic Randomization & Arpeggiator

**Goal:** Generate random melodic variations in real time while using the arpeggiator as a live performance tool.

**Setup:** Sequencer → external synth via MIDI, or Ground Control's 2-octave keyboard triggering internal MIDI routing.

**The Approach:**

1. **Set melody:** TRACK 1, set pattern length to 16 steps, time division 1/16 (default)
2. **Record a simple melody:** RECORD → A (note), B (note), C (note), rest, D (note), rest, rest, rest, then repeat pattern B. Create a 16-step melodic phrase.
3. **Enable arpeggiator:** Press **1/16** button to enable arpeggiator, watch for the button to blink. Mode = UP (default).
4. **Play the keyboard live:** While sequencer is running, hold down 3 keys on the piano keys (e.g., C, E, G = C major triad). The arpeggiator plays notes in ascending order. Release and hold different keys—the arpeggio follows your input.
5. **Latch the arpeggiator:** Press **LAST STEP** (holding longer than 1 sec for super-latch). Now you can play keys and they're added/removed from the arpeggio live without the arpeggio stopping between note releases.
6. **Generate variation:** PLAY is running, pattern is playing, arpeggiator is running. Press **TEMPO + 1/4** (random variation). The existing melodic pattern is rewritten: ratchets added, octaves shifted, probability variations introduced. The melody remains *recognizable* but *evolved*.
7. **Switch arpeggiator modes live:** Press **1/16** (UP mode), then **1/8** (RANDOM mode), then **1/4** (ORDER mode). Each mode changes how the arpeggio unfolds.

**Why this works:** You're performing *with* the sequencer, not programming it. The randomization respects your scale choice (set via TEMPO → N), keeping generated variations musically coherent. The arpeggiator responds to your keyboard input in real time.

**Similar Sequencers (Melodic Focus):**
- **Budget:** Korg Volca Keys (simple arpeggiator, limited pattern length, no randomization)
- **Different character:** Elektron Analog Four (synth-sequencer hybrid, deep synthesis engine, less emphasis on polymetric relationships)
- **Premium:** Moog Mother-32 (ribbon keyboard, onboard filter, sequencer less flexible than Ground Control)

---

### Patch 3: Integration – Ground Control as Master Clock & CV Sequencer

**Goal:** Use Ground Control as the timing anchor for a modular system while sequencing external oscillators via CV outputs.

**Setup:**
- Ground Control → modular case with oscillators, filters, VCAs
- Clock OUT jack → external clock divider or directly to clock-synced modules
- TRACK 1 pitch CV → Filter cutoff (via attenuator/offset if needed)
- TRACK 2 pitch CV → VCO pitch
- TRACK 3 pitch CV → Effect parameter (delay time, reverb mix via envelope follower)
- Drum triggers → drum modules or VCAs with envelope followers

**The Approach:**

1. **Set Ground Control as master:** TEMPO → K → VALUE-/+ → (INT) [internal master clock selected]
2. **Set clock output divider:** TEMPO → K → ⯇PAGE⯈ → select o./16 (sixteenth-note clock, default). This sends a clock pulse for every sixteenth note. If you have eurorack clock dividers downstream, they'll receive clean timing.
3. **Program melodic sequences:** TRACK 1 = 16-step bass pattern (1V/octave CV output → oscillator 1 pitch)
4. **Program second melodic line:** TRACK 2 = 12-step lead pattern (1V/octave CV output → oscillator 2 pitch)
5. **Program filter modulation:** TRACK 3 = 24-step envelope-like pattern (1V/octave CV output → filter cutoff input, attenuated to control range ~1V)
6. **Program drums:** TRACK D = 8 drum triggers, mixed pattern lengths (7, 11, 16, 13 steps for each trigger)
7. **Enable PATTERN LOCK:** Press ⯇PATTERN + PATTERN⯈ to lock all 4 tracks. Now when you press a piano key (A-Z), all tracks switch to the same pattern simultaneously. This is your "song structure" tool.
8. **Perform:** Hit PLAY. The system is now synchronized to Ground Control's clock. Oscillators receive pitch CV. Filters receive modulation CV. Drums receive triggers. The entire modular landscape is sequenced by a single coherent architecture.

**Why this works:** Ground Control becomes the *nervous system* of your modular system. Multiple types of signals (pitch, modulation, gates, clock) flow from a single sequencer with unified timing and parameter editing. If you want to shift the entire patch's tonality, press TRACK 1/2/3 + TRANSPOSE +/- to shift octaves. If you want to randomize the bass, press TEMPO + 1/16 (wide random).

**Similar Integration Tools:**
- **Budget:** Pamela's NEW Workout (clock divider + modulation source, not a sequencer—can't record melodic patterns)
- **Different character:** Intellijel Metropolix (dedicated hardware sequencer, no CV output for modulation, not clock-output optimized)
- **Premium:** Elektron Analog Rytm (all-in-one rhythmic sequencer, but lacks 1V/octave CV outputs for external pitch control)

---

### Patch 4: Integration – External CV Modulation Matrix Performance

**Goal:** Use external modulation sources (envelope followers, LFOs, random voltage) to reshape Ground Control's groove parameters in real time.

**Setup:**
- Maths (or 2HP LFO, or envelope follower) → Ground Control CV inputs 1/2/3
- Ground Control triggers → Audio interface or modular mixer
- Ground Control MIDI OUT → external MIDI instrument (optional)

**The Approach:**

1. **Set CV routing:** TEMPO → E/EXT.CV
   - CV 1 → SHUFFLE AMOUNT (SHFL -50…+50)
   - CV 2 → PROBABILITY (PROB 0…100)
   - CV 3 → RATCHETS (RATC 0…4)
   - CV D → PATTERN SHIFT (SHFT +/-128 steps)

2. **Program a drum pattern:** TRACK D, create a 16-step polymetric drum arrangement (3 different drum lengths as in Patch 1)

3. **Program a melodic pattern:** TRACK 1, 16-step bassline in a locked scale

4. **Modulate from Maths:**
   - Maths channel 1 (envelope) → CV 1 (controls shuffle). As envelope rises from 0 to +5V, shuffle increases from -50 to +50. The groove gets swingier as the envelope opens.
   - Maths channel 2 (LFO) → CV 2 (controls probability). Slow LFO (5-second cycle) sweeps probability from 0 to 100%. Notes drop out and reappear in waves.
   - Maths channel 3 (ramp) → CV 3 (controls ratchets). Ramps create builds: as ratchet count increases from 0 to 4, notes repeat more densely.

5. **Perform:** Press PLAY. The drum and bass patterns loop, but their *character* shifts in response to the modulation. Shuffle oscillates. Probability creates wave-like note skipping. Ratchets build density. The sequencer becomes an instrument responding to your modulation choices.

6. **Add pattern switching:** While modulation is happening, press TRACK 1 + ⯇PATTERN⯈ to switch to pattern B (different bassline). The new melody arrives quantized to pattern end, but the modulation continues affecting the new pattern's shuffle/probability/ratchets.

**Why this works:** CV modulation is how synthesis achieves responsiveness. Ground Control's CV input matrix isn't an afterthought—it's core architecture. A simple 3-envelope system (Maths) transforms the entire sequencer into a generative instrument. Parameters that would normally be menu-diving static values become real-time performance control.

**Similar Integration Tools:**
- **Budget:** Teenage Engineering OP-1 Field (sequencer + modulation, but limited CV control and lower resolution than Ground Control)
- **Different character:** Elektron Analog Rytm (internal modulation possibilities, no CV inputs to allow external modulation)
- **Premium:** Sequential Prophet X (soft-synth sequencer, MIDI-only, no 1V/octave CV outputs or clock sync)

---

## Common Mistakes & Pattern Recognition

### Mistake 1: "My patterns don't sound polymetric, just random"

**The misunderstanding:** You set different pattern lengths (16 and 7 steps) but the polymetric relationship feels chaotic rather than musical.

**Why it happens:** Polymetry only reveals itself over time. Two patterns with lengths of 16 and 7 steps resolve every 112 steps (LCM of 16 and 7). If you only listen for 20 steps, you're hearing the beginning of the cycle, where the polymetric relationship hasn't yet evolved. Alternatively, you're not quantizing your pattern *ends* to musical value—the patterns might be starting at different points in the measure, creating misalignment rather than polymetry.

**The fix:** Record longer patterns (24-32 steps per pattern) and listen for at least 3-4 cycles before judging. Use the same time division (e.g., 1/16) for all tracks initially, then vary only *length*, not time division. Confirm both patterns start from the downbeat (step 1). The polymetric magic builds over 20-30 seconds, not immediately.

**The principle:** Polymetric design rewards patience. The sophistication emerges from sustained listening, not instant gratification. This teaches you to think in longer compositional arcs—phrases that develop and evolve rather than loops that reset.

### Mistake 2: "Randomization just destroyed my pattern"

**The misunderstanding:** You press TEMPO + 1/16 (random pattern generator) and the sequencer replaces your carefully-crafted pattern with something unrecognizable.

**Why it happens:** Random pattern generation *clears* the current pattern and generates a new one. The algorithm respects your selected scale and key (set via TEMPO → N), but it doesn't preserve your original melody—it creates a new one. Many users expect randomization to be a variation tool (modify existing content) when it's actually a generation tool (replace with new content).

**The fix:** Before using random generation, save your current pattern to a different slot. Press 🞸 → RECORD → A...Z to save pattern A to pattern B. Now if random generation creates something you don't want, press ⯇PATTERN⯈ to switch back to the saved version. Use **TEMPO + 1/4 (random variation)** instead if you want to *modify* rather than *replace*—this adds ratchets, probability, octave shifts to your existing pattern while preserving its core melodic shape.

**The principle:** Randomization is creative fuel, not safety-net accident. Respect the destructive potential. Plan redundancy (save before randomizing). Understand the distinction between generation (creates new content) and variation (modifies existing content).

### Mistake 3: "The modulation isn't doing anything"

**The misunderstanding:** You assign a CV input to control shuffle (TEMPO → E → SHFL) but you don't see the effect on the pattern.

**Why it happens:** CV modulation only affects *ongoing playback*. If you assign CV 1 to shuffle, then turn on the module, the CV value is static (whatever voltage is on the input). Changes to shuffle manifest as the pattern plays. Also, shuffle is measured in percentages (-50 to +50), which corresponds to -5V to +5V input range. If you're sending, say, +2V, you're in the middle of the range (0% shuffle)—the effect is subtle.

**The fix:** 
1. Confirm the CV source is changing. Use a known modulator (Maths LFO, Batumi triangle wave, even a manual voltage from your patch cable).
2. Send a full-range CV (from -5V to +5V, or 0 to +5V depending on the parameter).
3. Listen over a full pattern cycle. Shuffle changes how step timing is distributed, which is subtle until you hear it over 16 steps.
4. Start with obvious parameters: RATCHETS (0 to 4 in 1V increments) creates dense builds. PROBABILITY (0-100%) creates note-skipping waves. These are more immediately perceptible than shuffle.

**The principle:** CV modulation is subtle control architecture, not knob-turning. It reveals itself through careful listening and systematic parameter exploration. This teaches you to think in modulation design—how does one parameter changing reshape the musical character?

### Mistake 4: "I can't keep up with the sequencer live"

**The misunderstanding:** You're trying to play the keyboard, manage pattern changes, and modulate CV inputs simultaneously, and it feels overwhelming.

**Why it happens:** Ground Control is designed for performance, but performance requires *preparation*. If you're discovering the sequencer during playback, you'll feel scattered. The interface isn't the constraint—your mental model is.

**The fix:** 
1. Pre-record patterns in advance (patterns A-E ready before you press PLAY).
2. Enable PATTERN LOCK (⯇PATTERN + PATTERN⯈) so a single keypress switches all 4 tracks together.
3. Pre-route CV sources to parameters you want to modulate (don't assign CV routing during performance).
4. Use MUTE/SOLO to shape arrangement (turn tracks on/off) rather than constantly switching patterns.
5. Practice the transition sequence (which patterns follow which) before performing.

**The principle:** Performance isn't spontaneous chaos—it's choreography. Ground Control's real-time control surfaces (arpeggiator modes, mute buttons, pattern switching) are powerful *when you've prepared the content* they'll control. This teaches the synthesis principle that sophistication emerges from constraint and preparation, not from complexity.

### Mistake 5: "My MIDI controller isn't talking to Ground Control"

**The misunderstanding:** You plug a USB MIDI keyboard into the USB HOST jack, but no notes are recorded or heard.

**Why it happens:** MIDI connectivity requires three things: (1) the controller is connected, (2) the sequencer is listening on the correct MIDI channel, (3) the active track is assigned to receive on that channel. By default, TRACK 1/2/3 listen on channels 1/2/3, and TRACK D listens on channel 10. If your controller is sending on channel 5, nothing will happen.

**The fix:**
1. Confirm the controller is recognized: Check if the MIDI LEDs on Ground Control blink when you press keys on the controller.
2. Check MIDI channel assignment: TEMPO → M → A (CH.RX, channel receive). Confirm the active track (TRACK 1/2/3/D selected) is listening on the same channel the controller is transmitting.
3. Use GLOBAL MIDI CHANNEL: TEMPO → M → B (CH.GL) to set a global receive channel that all tracks listen to simultaneously. This is the safest option for live keyboard control.
4. Test with the sequencer stopped, then running. Live recording works in both modes.

**The principle:** MIDI is a protocol, not magic. Connectivity requires explicit configuration. This teaches architectural thinking: signals only flow when source and destination are aligned. Ground Control's MIDI implementation is clean and logical—problems always trace to channel assignment or physical connection status.

---

## Pairs Well With

**Modulation Sources** (for CV input matrix)
- Maths (envelope + LFO, standard modulation backbone)
- Batumi or Quadrax (quad LFO, fills all 4 CV input channels)
- Function (envelope generator, adds precision modulation)
- Telharmonium (complex oscillator as modulation source, Marbles for probability)

**Melodic Modules** (for pitch sequencing)
- Plaits or Tides (sound sources, respond to 1V/octave CV pitch from melodic tracks)
- Rings (resonator responding to pitch CV)
- Shelves or Intellijel Polaris (filters responding to pitch or modulation CV)

**Utility Modules** (for signal integration)
- Quad Mixer (combine multiple audio sources from different drums/melodic outputs)
- Intellijel Stomp (MIDI-to-trigger converter, expands Ground Control's MIDI capabilities)
- Veils (VCA for shaping modulation signals before feeding Ground Control CV inputs)
- Offset/Attenuator (scale CV ranges to match input requirements)

**Clock/Timing Modules**
- Pamela's NEW Workout (clock divider, takes Ground Control clock output and creates sub-clocks for other modules)
- Tempo or Time (additional clock manipulation if you need independent sub-divisions)
- Pulse Processor or Logic (gate processing to shape trigger outputs before audio modules)

**Control Surfaces**
- Intellijel Stomp or similar MIDI expander (adds pedal expression control to Ground Control parameters)
- Expression pedal (via Stomp or standalone MIDI-to-CV converter, adds real-time parameter control)
- External MIDI keyboard (expand 24-key Ground Control keyboard to 88-key controller)

**Integration Philosophy**
Ground Control is architecturally agnostic. It works equally well as the master clock anchoring a large modular system, as a slave synced to a DAW or hardware drum machine, or as a standalone polymetric groove box. The key is *intentional connection*—every patch cable serves a purpose (timing, pitch data, modulation, or control).

---

## Advanced Learning Path

### Polyrhythmic Time-Base (Beyond Polymetry)

Polymetry (different pattern *lengths*) is foundational. Polyrhythm (different time *signatures* per track) is the next layer.

**What it means:** Set TRACK 1 to a 4:4 time signature (4 beats in 4 beats—normal). Set TRACK 2 to a 5:4 time signature (5 beats in 4 beats—stretched). Now TRACK 2 plays 5 notes in the same time TRACK 1 plays 4 notes. They won't realign for many measures.

Access via **TEMPO → A** (polyrhythmic time-base). The display shows two numbers: first number = how many steps fit into the second number = how many steps you've allocated. Default 4:4 (normal). Try 5:4, 7:8, 17:16.

**Practice:** Start with polymetry (different lengths, same time signature). Once comfortable, add polyrhythm (same length, different time signature). Combine both for maximum complexity.

### CV Modulation Matrix Mastery

The modulation matrix is Ground Control's most powerful and least understood feature. Each of the 4 CV inputs can control different destinations across all 4 tracks.

**Architecture:**
- CV 1 → TRACK D shuffle + TRACK 1 shuffle (no, each CV can only control ONE instance of a parameter)
- CV 1 → TRACK D shuffle
- CV 2 → TRACK 1 probability
- CV 3 → TRACK 2 ratchets
- CV 4 → TRACK 3 octave offset

Each assignment restricts other CV inputs (you can't assign CV 2 to TRACK D shuffle if CV 1 already is).

**Practice strategy:**
1. Record a single 16-step drum pattern and a 16-step melodic pattern.
2. Assign CV 1 to shuffle (TRACK D).
3. Send a simple LFO (5-10 Hz triangle) to CV 1.
4. Listen to how shuffle oscillates over ~6 seconds.
5. Add CV 2 assigned to probability (TRACK 1).
6. Send another LFO at a different rate (8 Hz) to CV 2.
7. Now two parameters modulate independently.
8. Experiment with rate combinations: 5 Hz and 8 Hz create polymetric LFO relationships. 5 Hz and 7 Hz create slower beat frequencies.

**Advanced technique:** Use *clocked* modulation sources (e.g., Maths ramps synced to Ground Control clock) so CV modulation *tracks* the sequencer's tempo. As BPM changes, modulation rates scale proportionally.

### Pattern Chaining & Live Arrangement

Pattern chains let you sequence patterns themselves, creating 'song' structure without dedicated song mode.

**Basic chain:**
1. Record patterns A, B, C, D (drum patterns of 16, 14, 12, 10 steps respectively).
2. Press TRACK D to select drum track.
3. Hold TRACK D and press piano keys A, B, C, D in sequence.
4. Each keypress adds that pattern to a chain.
5. During playback, patterns switch one after another (quantized to each pattern's end).

**Performance use:** Chains are *saved* with your project. Live arrangement can flow: Intro (pattern A) → Build (pattern B) → Drop (pattern C) → Breakdown (pattern D) → Loop.

**Advanced technique:** Use PATTERN LOCK to chain *all 4 tracks together*. When you create a chain on the drum track while patterns are locked, switching the drum pattern switches all 4 tracks simultaneously. This is the closest Ground Control gets to traditional "song mode."

### Arpeggiator Latch & Super-Latch

The arpeggiator is the bridge between step sequencing and keyboard performance.

**Latch mode:** Press LAST STEP (short press). The arpeggiator "remembers" the last set of notes you played. They continue arpeggating even after you release the keys. Press a new set of keys and the arpeggio updates.

**Super-Latch mode:** Press LAST STEP (long hold, 1.5+ seconds). Now pressing keys *adds* them to the arpeggio. Pressing the same key again *removes* it. You're dynamically building the arpeggio while it plays. Maximum 24 notes in the arpeggio.

**Performance technique:** Super-latch turns the sequencer into a live instrument. You're not "playing" in the traditional sense—you're composing the arpeggio in real time while it's playing. Notes layer up. Notes drop out. The arpeggio evolves with your input.

### Random Variation vs. Random Generation

**Random Generation (TEMPO + 1/32/1/16/1/8):** Clears the current pattern and creates entirely new content (euclidean, wide, or narrow algorithms). Destructive but generative.

**Random Variation (TEMPO + 1/4):** Takes the current pattern and adds subtle variations (ratchets, slides, probability, octave shifts) while preserving melodic core. Non-destructive and evolutionary.

**Strategy:** Use generation to bootstrap new ideas. Use variation to evolve them. Save variations you like (pattern B, C, D). Chain them to create progression (A → variation B → variation C → fresh generation D).

### Scale Editing & Custom Tunings

By default, melodic tracks use chromatic scale (all 12 notes available). Scales are filters: they highlight certain notes and constrain randomly-generated melodies to specific tonalities.

**Scale access:** TEMPO → N, then ⯇PAGE⯈ to select (MAJR for major, MINR for minor, etc.). ⯇PAGE⯈ again to edit: press piano keys to toggle notes in/out of the scale.

**Custom tuning:** Create a custom scale with only 5 notes (pentatonic + one high note). Randomly-generated melodies are constrained to those 5 notes, guaranteeing musical coherence while maintaining variation.

**Microtonal thinking:** Ground Control's 1V/octave implementation allows for alternative tunings. Set your scale to equal temperament, just intonation, or non-Western tuning systems. Ground Control will output the correct voltages if you configure the scale accordingly.

### Clock Division Philosophy

Ground Control's clock system is generalist: it can sync to eurorack clock, MIDI clock, USB clock, or serve as the master clock for everything else.

**Scenario 1: Ground Control is master**
- Internal clock set via TEMPO (default 120 BPM)
- Clock output dividers determine what rate Ground Control outputs
- Set to o./16 (default) for eurorack-standard sixteenth-note clock
- Other modules receive that clock and divide it further if needed

**Scenario 2: Ground Control is slave**
- External master sends clock to CLOCK IN jack or MIDI
- Ground Control becomes a slave, syncing its internal clock to the master's tempo
- Output clock is a *re-timed* version of the input (useful for clean output even if input is noisy)

**Advanced technique:** Use input dividers (TEMPO → K → VALUE-/+) to *squeeze or stretch* sequences relative to the master clock. If master is sending 24 PPQN and Ground Control expects 48 PPQN (Korg standard), set input divider to PQ.48 and Ground Control automatically compensates.

---

## Troubleshooting

**Q: I recorded a melodic pattern but I can't hear it when I press PLAY.**
A: Check that (1) TRACK 1/2/3 is selected (not TRACK D), (2) the melodic track's MUTE button is not engaged (MUTE BUS), (3) the patch cable is connected from the pitch CV jack to your oscillator's 1V/octave input, and (4) the oscillator is receiving the signal (check oscillator's CV input and fine-tune). Ground Control outputs correct 1V/octave CV—the issue is usually downstream oscillator configuration.

**Q: My pattern switched when I didn't want it to.**
A: Pattern switching is *quantized* by default. When you press ⯇PATTERN⯈, the sequencer doesn't switch immediately—it switches after the current pattern finishes. If you want to switch mid-pattern, hold TEMPO + PLAY to reset the track and immediately load the new pattern. Or disable pattern lock and switch individual tracks separately.

**Q: I assigned a CV input to shuffle but nothing changed.**
A: Shuffle range is -50 to +50, corresponding to -5V to +5V. If you're sending +2V (middle of range), you're at 0% shuffle—the effect is invisible. Send the full range (-5V to +5V) and listen over a full pattern cycle. Shuffle is subtle; try other parameters (RATCHETS, PROBABILITY) which are more immediately obvious.

**Q: The sequencer stopped responding to my MIDI keyboard.**
A: Check MIDI channel assignment (TEMPO → M → A CH.RX). Confirm your keyboard is transmitting on the same channel Ground Control is listening on. Check the MIDI cable connection (3.5mm TRS Type B). Try the panic function: hold STOP for 2+ seconds. This sends ALL NOTES OFF to reset MIDI state.

**Q: I want to use Ground Control with my DAW but I'm not sure how.**
A: Connect Ground Control's USB DEVICE jack to your computer. In your DAW, set Ground Control as a MIDI input device. Now the DAW can send MIDI to Ground Control (sequencing it from your DAW). To send Ground Control's clock to the DAW, enable TEMPO → M → G (RUNNING CLOCK ON). The DAW will receive Ground Control's clock and sync to it. For the reverse (DAW sends clock to Ground Control), set TEMPO → K to USB.D (USB DEVICE as master clock).

**Q: How do I backup my projects?**
A: From Firmware V.3, Ground Control has mass storage mode. Press and hold 🞸 for 5+ seconds until you see (STOR) on the display. Connect via USB DEVICE to your computer. The SD card mounts as a drive. Copy the project folders (A-Z folders in the root) to your computer. To restore, reverse the process (copy folders back to the SD card while in mass storage mode). Or, if on Firmware V.2, you must physically eject the SD card and copy it to your computer using a card reader.

---

## Resources & References

**Official Documentation:**
- Endorphin.es Ground Control Manual V.3: https://endorphines.info/manuals/Ground_Control_manual_v3.pdf
- Endorphin.es Quick Start Guide: https://youtu.be/t0OjK-sw3zI
- Loopop Full Tutorial: https://youtu.be/XhriE0MKjp0

**Community & Support:**
- Endorphin.es Support: support@endorphin.es
- Modular Grid: https://www.modulargrid.net (search "Ground Control" for community patches and configurations)
- Endorphin.es Social: @endorphin.es (Instagram, Twitter, Facebook)

**Related Learning:**
- Polymetric thinking: Study how Miles Davis' "Maiden Voyage" uses polymetric relationships between bass and drums.
- CV modulation: Patch a simple LFO to Maths to understand modulation response, then apply that knowledge to Ground Control's CV matrix.
- MIDI protocol: Understanding MIDI channels and note numbers helps troubleshoot hardware-to-hardware integration.

---

**Last updated:** December 2025

**Framework Version:** Enhanced (Official Section Ordering, V.3 features documented, interconnection philosophy applied)
