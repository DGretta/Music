# What is a Note?

**Understanding pitch through multiple perspectives**

---

## The Core Concept

A "note" is a specific pitch - a musical sound with a particular highness or lowness. When you press a key on a synthesizer, turn a pitch knob, or draw a line in a sequencer, you're selecting a note.

**Here's what's actually happening:** That note exists as several different things simultaneously:
- A **frequency** measured in Hertz (Hz)
- A **voltage** in synthesizer systems (typically 1V/octave)
- A **position** on a keyboard or musical staff
- A **MIDI note number** in digital systems
- A **name** in traditional music (C, D, E, F, G, A, B)

These are all different ways to describe the exact same musical phenomenon. Understanding how they relate helps you work across different gear and contexts.

---

## Perspective 1: Frequency (The Physics)

**What it is:** Sound waves vibrating at a specific rate, measured in Hertz (Hz) - cycles per second.

**Example:**
- A440 = 440 Hz = the A above middle C vibrating 440 times per second
- A880 = 880 Hz = one octave higher, vibrating twice as fast
- A220 = 220 Hz = one octave lower, vibrating half as fast

**Why doubling matters:**
When you double a frequency, you get the same note name one octave higher. This 2:1 relationship is fundamental to all music.

```
110 Hz → A2
220 Hz → A3 (double = octave up)
440 Hz → A4 (double = octave up)
880 Hz → A5 (double = octave up)
```

**Where you encounter this:**
- Oscillator specifications (VCO range: 20Hz - 20kHz)
- Filter cutoff frequencies
- Understanding harmonic series
- Tuning and calibration

---

## Perspective 2: Voltage (The Modular Standard)

**What it is:** In modular synthesis, pitch is controlled by voltage. The standard is **1 volt per octave** (1V/oct).

**How it works:**
- 0V might be C3 (or whatever you calibrate to)
- +1V is one octave higher (C4)
- +2V is two octaves higher (C5)
- -1V is one octave lower (C2)

**The math:**
Since there are 12 semitones in an octave:
- 1 semitone = 1/12 volt = 0.0833V
- 7 semitones (a fifth) = 7/12 volt = 0.583V
- 12 semitones (octave) = 1V

```
Voltage Tracking Example:
0V ──────── C3 (MIDI 48, 130.81 Hz)
+0.0833V ── C#3 (one semitone up)
+0.167V ─── D3 (two semitones up)
+1V ─────── C4 (12 semitones up = octave)
+2V ─────── C5 (24 semitones up = two octaves)
```

**Where you encounter this:**
- VCO pitch inputs (1V/oct tracking)
- Quantizer outputs
- Sequencer CV outputs
- Keyboard CV outputs

**Why this matters:**
If an oscillator "tracks 1V/octave," it means the pitch relationship stays musical across the voltage range. +1V always equals one octave higher, regardless of starting pitch.

---

## Perspective 3: Keyboard Position (The Visual/Spatial)

**What it is:** Physical or visual representation of pitch as left-to-right position.

**Piano keyboard layout:**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │ C#│  D  │ D#│  E  │  F  │ F#│  G  │ G#│  A  │ A#│  B  │
│     │ Db│     │ Eb│     │     │ Gb│     │ Ab│     │ Bb│     │
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  Low ←──────────────────────────────────────────────────→ High
```

**Pattern recognition:**
- **White keys:** C D E F G A B (then repeat)
- **Black keys:** Sharps (#) and flats (b) - same key, different names
- **12 keys total** before pattern repeats (7 white + 5 black)
- **Octave:** From one C to the next C

**Sequencer grid equivalent:**
```
Note  ║ 
  C#  ║ 
  C   ║ ●───────────────────  ← Note at step 1, held
  B   ║         ●─────         ← Note at step 3
  A#  ║ 
  A   ║                 ●───    ← Note at step 5
  G#  ║ 
      ║─┼───┼───┼───┼───┼───┼
Step: ║ 1   2   3   4   5   6
```

**Where you encounter this:**
- MIDI keyboard controllers
- Piano roll editors in DAWs
- Sequencer note entry
- Understanding scale shapes

---

## Perspective 4: MIDI Note Numbers (The Digital Standard)

**What it is:** Digital music systems assign numbers to pitches. MIDI uses 0-127.

**The reference point:**
- **Middle C = MIDI note 60** (also called C4 or C3 depending on convention)
- Each number = one semitone
- 60 + 12 = 72 (one octave higher, also a C)
- 60 - 12 = 48 (one octave lower, also a C)

**Common reference points:**
```
MIDI 21 ── A0 (lowest note on 88-key piano)
MIDI 48 ── C3 (sometimes called C2)
MIDI 60 ── C4 (middle C, often called C3)
MIDI 69 ── A4 (A440, standard tuning reference)
MIDI 108 ─ C8 (highest note on 88-key piano)
```

**Quick conversions:**
- Same note name, different octave = ±12
- One semitone = ±1
- Example: A4 (MIDI 69) → A5 (MIDI 81) = +12

**Where you encounter this:**
- MIDI sequencers and controllers
- Software synthesizers
- DAW piano rolls
- MIDI-to-CV converters

---

## Perspective 5: Note Names (The Traditional Language)

**What it is:** Musical tradition uses letter names (A B C D E F G) with sharps (#) and flats (b).

**The pattern:**
```
C → C# → D → D# → E → F → F# → G → G# → A → A# → B → (back to C)
    ↕       ↕              ↕       ↕       ↕
    Db      Eb             Gb      Ab      Bb
```

**Important details:**
- **Enharmonic equivalents:** C# and Db are the same pitch, different names
- **No E# or B#:** E→F and B→C are only one semitone apart (no black key between)
- **Octave numbers:** C4, C5, C6 indicate which octave (C4 is typically middle C)

**Why different names for same pitch?**
Musical context matters. In the key of G major, you'd write F# (not Gb). In Db major, you'd write Db (not C#). For synthesis and sequencing, this distinction often doesn't matter - same pitch, same voltage, same frequency.

---

## How They All Connect

**Same note, five different descriptions:**

| **Traditional** | **Keyboard** | **MIDI** | **Voltage** | **Frequency** |
|-----------------|--------------|----------|-------------|---------------|
| A4 | 49th key on 88-key piano | MIDI 69 | Variable (depends on calibration) | 440 Hz |
| C4 (Middle C) | 40th key on 88-key piano | MIDI 60 | 0V (typical calibration) | 261.63 Hz |
| A5 | 61st key | MIDI 81 | +1V (from A4) | 880 Hz |

**Converting between systems:**

**MIDI to Frequency:**
```
Frequency = 440 × 2^((MIDI note - 69) / 12)

Example for MIDI 60 (Middle C):
440 × 2^((60 - 69) / 12) = 440 × 2^(-0.75) = 261.63 Hz
```

**Frequency to Voltage (1V/oct):**
```
Voltage difference = log₂(freq₂/freq₁)

Example: How many volts from 220Hz (A3) to 440Hz (A4)?
log₂(440/220) = log₂(2) = 1V (one octave)
```

**Don't memorize these formulas.** Just understand the principle: doubling frequency = +1V = +12 MIDI notes = one octave up.

---

## Why This Matters Practically

### For Sequencing:
When you draw notes in a piano roll or program a hardware sequencer, you're selecting pitches. Understanding that:
- Higher = higher frequency = more voltage = higher MIDI number
- 12 steps = one octave
- Same note name pattern repeats every octave

### For Modular Synthesis:
When you patch CV to oscillator pitch inputs:
- +1V always equals one octave higher
- Quantizers "snap" voltages to musical pitches
- Multiple oscillators need the same 1V/oct standard to track together

### For Sound Design:
When you adjust filter cutoff or oscillator pitch:
- Frequencies relate mathematically (doubling = octave)
- Harmonic relationships follow the same patterns
- Musical filtering follows pitch relationships

### For Integration:
When connecting different gear:
- MIDI-to-CV converters translate note numbers to voltages
- Sequencers output CV that follows 1V/oct standard
- Understanding all perspectives helps troubleshooting

---

## Common Confusions Addressed

### "Why are there different octave numbering systems?"

**The confusion:** Some systems call middle C "C3," others call it "C4," some even "C5."

**The reality:** There's no universal standard. MIDI uses 60 for middle C, but whether that's called C3, C4, or C5 varies by manufacturer and software.

**What to do:** Pick one convention and stick with it. When discussing with others, specify MIDI note numbers to avoid confusion. Most modern systems use C4 for middle C (MIDI 60).

### "Why is it called C# instead of Db?"

**Both names describe the same pitch.** C# = "C sharp" (one semitone above C). Db = "D flat" (one semitone below D).

**For synthesis and sequencing:** Usually doesn't matter. Same voltage, same frequency, same sound.

**For traditional music theory:** Context determines which name is "correct." You'll learn about this in the scales module, but for now, just know they're the same pitch with different names.

### "Do I need to understand the math?"

**No.** The formulas are included for those who want to understand the relationships deeply, but you don't need to calculate anything.

**What you DO need:** Understand that doubling frequency = one octave higher. Everything else follows from this fundamental relationship.

### "My oscillator doesn't start at 0V = C3"

**This is normal.** The specific pitch at 0V varies by oscillator and calibration. What matters is the **tracking** - that +1V always equals one octave higher, regardless of where you start.

---

## Try This (If You Want)

### Exercise 1: Listen to Octaves

**Goal:** Train your ear to recognize when a pitch doubles (one octave up).

**How:**
1. Play any note on your synth/keyboard
2. Play the same note one octave higher (12 semitones up)
3. Listen to how they sound like "the same note, but higher"
4. Try different starting notes - octaves always sound similar

**What you'll discover:** Octaves have a special quality - same note name, different register. This is why doubling frequency (2:1 ratio) is so important musically.

**Not feeling it?** Just remember that octaves sound "similar but higher/lower" - you'll recognize them naturally as you make music.

### Exercise 2: Voltage to Pitch

**Goal:** See how 1V/oct works in practice (requires modular system or semi-modular with CV inputs).

**How:**
1. Patch a sequencer or keyboard CV output to an oscillator pitch input
2. Program a sequence that moves up 12 semitones (one octave)
3. Measure (or calculate) the voltage change: should be +1V
4. Listen to how the pitch doubles as voltage increases by 1V

**What you'll discover:** The mathematical relationship between voltage and pitch is directly audible - +1V sounds like "one octave higher."

**No modular gear?** Most DAWs let you see MIDI note numbers. Watch how moving up 12 notes doubles the frequency display.

### Exercise 3: Name That Pitch

**Goal:** Get comfortable with different ways of describing the same note.

**How:**
1. Pick a note (example: A4)
2. Find it in all systems:
   - Traditional name: A4
   - MIDI number: 69
   - Frequency: 440 Hz
   - Keyboard position: 49th key on 88-key piano
3. Pick a different note and repeat

**What you'll discover:** These are all describing the same musical pitch, just in different languages. You'll get comfortable translating between them.

**Not feeling it?** You'll naturally learn these conversions as you work with different gear. No need to memorize anything.

---

## Connections to Other Concepts

**This concept connects to:**

→ **[Intervals](intervals_basics.md)** *(Next Topic)*
Understanding what a single note is prepares you to understand the distance between two notes.

→ **[Basic Scales](scales_basics.md)**
Scales are collections of specific notes. Understanding what notes are makes scales much clearer.

→ **[Synthesis Techniques](../../modular/README.md)**
Oscillator pitch, filter cutoff, and many other parameters relate to frequency and voltage concepts introduced here.

---

## What You Should Remember

**Core understanding:**
- A note is a specific pitch (musical highness/lowness)
- Same note = same frequency = same voltage relationship = same MIDI number = same keyboard position
- Doubling frequency = one octave higher = +1V = +12 semitones
- Different perspectives (Hz, voltage, MIDI, names) all describe the same musical phenomenon

**Practical application:**
- When programming sequences, you're selecting pitches
- When patching CV, you're controlling pitch via voltage
- When adjusting oscillators, you're changing frequency
- All three are the same thing from different angles

**What you don't need to memorize:**
- Exact frequencies for every note
- Mathematical formulas for conversions
- MIDI note numbers beyond a few reference points
- Perfect octave numbering conventions

**What matters:**
Understanding that these different systems all describe the same musical reality. As you make music, you'll naturally become fluent in whichever perspectives your gear uses.

---

## Next Steps

**Ready to continue?** Move to [Intervals](intervals_basics.md) to understand the relationships between notes.

**Want more depth?** Check the [Frequency and Voltage Tables](../04_reference/frequency_voltage_tables.md) *(Coming Soon)* for complete reference information.

**Confused about something?** Re-read the section that's unclear. If it still doesn't make sense, the explanation probably needs improvement - these concepts become clearer with hands-on experience making music.

---

*This module is part of the [Music Theory for Synthesis](../README.md) curriculum. Theory concepts appear inline in [module guides](../../modular/README.md) with cross-references back to detailed content here.*
