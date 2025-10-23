# Intervals

**Understanding the distance and relationships between notes**

---

## The Core Concept

An **interval** is the distance between two notes. When you play two notes together (harmony) or one after another (melody), the interval between them determines how they sound together.

**Why intervals matter:**
- They're the building blocks of scales (specific interval patterns)
- They're the building blocks of chords (stacked intervals)
- They determine whether notes sound consonant (pleasant) or dissonant (tense)
- They're essential for programming dual oscillators, creating harmonies, and writing melodies

Understanding intervals means understanding **why certain notes work together** and others create tension.

---

## Perspective 1: Semitones (The Counting Method)

**What it is:** The smallest distance in Western music - one key to the very next key (black or white).

**The 12 semitones in an octave:**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │ C#│  D  │ D#│  E  │  F  │ F#│  G  │ G#│  A  │ A#│  B  │ C
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  0    1    2    3    4    5    6    7    8    9    10   11   12
  
Interval names by semitone count:
0  = Unison (same note)
1  = Minor second (half step)
2  = Major second (whole step)
3  = Minor third
4  = Major third
5  = Perfect fourth
6  = Tritone (augmented fourth/diminished fifth)
7  = Perfect fifth
8  = Minor sixth
9  = Major sixth
10 = Minor seventh
11 = Major seventh
12 = Octave
```

**Simple examples:**
- C to C# = 1 semitone (minor second)
- C to D = 2 semitones (major second)
- C to E = 4 semitones (major third)
- C to G = 7 semitones (perfect fifth)
- C to C (octave up) = 12 semitones

**Where you encounter this:**
- Sequencer programming (counting steps between notes)
- Transposition (moving melodies up/down by semitones)
- Understanding scale formulas
- MIDI note number differences

---

## Perspective 2: Frequency Ratios (The Physics)

**What it is:** The mathematical relationship between two frequencies.

**Simple ratios = consonant intervals:**
```
Ratio    Interval         Example
1:1   =  Unison          220 Hz : 220 Hz
2:1   =  Octave          220 Hz : 440 Hz
3:2   =  Perfect fifth   220 Hz : 330 Hz
4:3   =  Perfect fourth  220 Hz : 293.3 Hz
5:4   =  Major third     220 Hz : 275 Hz
6:5   =  Minor third     220 Hz : 264 Hz
```

**Why simple ratios sound good:**
The frequencies align regularly, creating stable, consonant sounds. Complex ratios (like 45:32) create beating and tension.

**Practical example:**
When you tune two oscillators to a 3:2 ratio (perfect fifth):
- OSC 1: 100 Hz
- OSC 2: 150 Hz (100 × 3/2)
- Result: Hollow, open, powerful sound

**Where you encounter this:**
- Dual oscillator tuning (programming interval relationships)
- Understanding sync and FM behavior
- Filter resonance and feedback relationships
- Harmonic series and overtones

---

## Perspective 3: Voltage Relationships (The Modular View)

**What it is:** In 1V/octave systems, intervals are fractions of a volt.

**Interval voltage chart:**
```
Semitones    Voltage      Interval Name
0            0V           Unison
1            0.0833V      Minor second
2            0.167V       Major second
3            0.25V        Minor third
4            0.333V       Major third
5            0.417V       Perfect fourth
6            0.5V         Tritone
7            0.583V       Perfect fifth
8            0.667V       Minor sixth
9            0.75V        Major sixth
10           0.833V       Minor seventh
11           0.917V       Major seventh
12           1V           Octave
```

**Practical patching:**
If you want two oscillators playing a fifth apart:
- OSC 1: receives 0V (plays C3)
- OSC 2: receives +0.583V (plays G3, a fifth higher)

**Dual oscillator example:**
```
Keyboard CV ──┬──▶ OSC 1 (1V/oct input)
              │
              └──[+0.583V offset]──▶ OSC 2 (1V/oct input)
              
Result: OSC 2 always plays a perfect fifth above OSC 1
```

**Where you encounter this:**
- Programming interval relationships in modular
- Using offset modules or precision adders
- Understanding quantizer behavior
- Multi-oscillator patches

---

## Perspective 4: Sound Quality (The Ear's Perspective)

**What it is:** How intervals feel emotionally and acoustically.

### Consonant Intervals (Stable, Pleasant)

**Perfect intervals:**
- **Unison (0):** Same note, maximum blend
- **Octave (12):** Same note, different register, very stable
- **Perfect fifth (7):** Hollow, open, powerful (3:2 ratio)
- **Perfect fourth (5):** Bright, open, slightly less stable than fifth (4:3 ratio)

**Major/Minor thirds and sixths:**
- **Major third (4):** Happy, bright (5:4 ratio)
- **Minor third (3):** Sad, dark (6:5 ratio)
- **Major sixth (9):** Warm, expansive
- **Minor sixth (8):** Melancholic, introspective

### Dissonant Intervals (Tense, Unstable)

**Seconds:**
- **Minor second (1):** Maximum tension, wants to resolve
- **Major second (2):** Mild tension, adjacent notes

**Sevenths:**
- **Minor seventh (10):** Jazzy, slightly tense
- **Major seventh (11):** Sharp tension, wants to resolve

**Tritone:**
- **Tritone (6):** Maximum instability, divides octave in half, used for tension

**Important understanding:** Dissonance isn't bad - it creates movement, tension, and interest. Music needs both consonance (stability) and dissonance (tension) to feel dynamic.

---

## Common Interval Names and Uses

### The Perfect Intervals

**Perfect Fifth (7 semitones, 3:2 ratio):**
```
Note  ║ 
  G   ║ ●───                  ← Fifth above C
  F   ║ 
  E   ║ 
  D   ║ 
  C   ║ ●───                  ← Root note
      ║─┼───┼───┼
Step: ║ 1   2   3
```

**Sound:** Hollow, powerful, open
**Uses:** Power chords, drone notes, dual oscillator tuning, bass + melody
**Example:** C + G together or in sequence

**Perfect Fourth (5 semitones, 4:3 ratio):**
**Sound:** Bright, open
**Uses:** Chord inversions, melodic movement
**Example:** C + F

**Octave (12 semitones, 2:1 ratio):**
**Sound:** Same note, different register
**Uses:** Thickening sounds, bass doubling, reinforcement
**Example:** C3 + C4

### The Major/Minor Intervals

**Major Third (4 semitones, 5:4 ratio):**
```
Note  ║ 
  E   ║       ●───            ← Major third above C
  D   ║ 
  C   ║ ●───                  ← Root note
      ║─┼───┼───┼
Step: ║ 1   2   3
```

**Sound:** Happy, bright, major quality
**Uses:** Major chords, happy melodies, uplifting sounds
**Example:** C + E (foundation of C major chord)

**Minor Third (3 semitones, 6:5 ratio):**
**Sound:** Sad, dark, minor quality
**Uses:** Minor chords, melancholic melodies, tension
**Example:** C + Eb (foundation of C minor chord)

### The Dissonant Intervals

**Minor Second (1 semitone):**
**Sound:** Maximum tension, grinding
**Uses:** Suspense, horror, jazz tension, resolved quickly
**Example:** C + Db (wants to resolve outward or inward)

**Tritone (6 semitones):**
**Sound:** Unstable, anxious, divides octave
**Uses:** Dominant seventh chords, tension, resolution, metal/jazz
**Example:** C + F# (historically called "devil's interval")

---

## Intervals in Practice

### Programming Dual Oscillators

**Creating harmonic richness:**
```
Method 1: Octave doubling (thickening)
OSC 1: C3 (base frequency)
OSC 2: C4 (+12 semitones, +1V)
Result: Fuller, stronger sound

Method 2: Fifth relationship (power sound)
OSC 1: C3 (base frequency)
OSC 2: G3 (+7 semitones, +0.583V)
Result: Hollow, powerful, open

Method 3: Third relationship (harmonic color)
OSC 1: C3 (base frequency)
OSC 2: E3 (+4 semitones, +0.333V, major third)
Result: Major chord character, bright and full
OSC 2: Eb3 (+3 semitones, +0.25V, minor third)
Result: Minor chord character, dark and full

Method 4: Slight detune (chorus/ensemble)
OSC 1: C3 (base frequency)
OSC 2: C3 + a few cents (0.01V or less)
Result: Thicker, moving, chorused sound
```

### Understanding Melody

**Melodies are sequences of intervals:**
```
Note  ║ 
  G   ║       ●───      ●───        ← +7 from C, -2 from G
  F   ║                      
  E   ║ ●───            ●───        ← +4 from C, -2 from G, +4 from E
  D   ║ 
  C   ║             ●───            ← +2 from E, -7 from G

Intervals: C→E (+4, major third), E→G (+3, minor third), G→C (-7, descending fifth)
This is a C major arpeggio - all consonant intervals
```

**Stepwise vs. leap movement:**
- **Stepwise:** 1-2 semitone intervals (smooth, flowing melodies)
- **Leaps:** 3+ semitone intervals (dramatic, attention-grabbing)

Good melodies balance stepwise motion with occasional leaps.

### Building Chords (Preview)

**Chords are stacked intervals:**
```
C Major Chord = C + E + G
- C to E = Major third (4 semitones)
- E to G = Minor third (3 semitones)
- C to G = Perfect fifth (7 semitones)

C Minor Chord = C + Eb + G
- C to Eb = Minor third (3 semitones)
- Eb to G = Major third (4 semitones)
- C to G = Perfect fifth (7 semitones)
```

Notice: Same fifth (C-G), different thirds determine major/minor quality.

---

## Common Confusions Addressed

### "How do I count intervals?"

**The confusion:** Do you count the starting note or not?

**The answer:** Technically, traditional music theory counts both notes. C to E includes C-D-E = 3 letter names = "third."

**For synthesis/sequencing:** Just count semitones. Much simpler.
- C to E = 4 semitones = major third
- No confusion about inclusive/exclusive counting

**Rule of thumb:** Semitone counting is clearer for programming. Traditional names are helpful for communication.

### "Why is it called a 'perfect' fifth?"

**Historical terminology.** "Perfect" intervals (unison, fourth, fifth, octave) have very simple ratios and sound extremely consonant. They're called "perfect" because they can't be major or minor - they just are what they are.

**For practical purposes:** Perfect = very consonant, very stable. Don't worry about the historical reasons.

### "Why does a major third sound different from a minor third?"

**The frequency ratio is different:**
- Major third = 5:4 ratio (simpler = brighter)
- Minor third = 6:5 ratio (slightly more complex = darker)

**Your ear hears these ratio differences** as emotional character. Major = happy/bright, minor = sad/dark. This isn't cultural - it's acoustic physics.

### "Do I need to memorize all the interval names?"

**No.** You need to understand:
- Octave (12 semitones, doubling)
- Perfect fifth (7 semitones, powerful/hollow)
- Major/minor thirds (4/3 semitones, happy/sad)

Everything else you'll learn naturally through use. When someone says "add a fourth," you'll look it up (5 semitones) and eventually remember through repetition.

### "Can intervals be larger than an octave?"

**Yes.** These are called "compound intervals":
- Octave + second = ninth (14 semitones)
- Octave + third = tenth (16 semitones)
- Two octaves = 24 semitones

**For foundation understanding:** Focus on intervals within one octave. Compound intervals follow the same principles.

---

## Try This (If You Want)

### Exercise 1: Interval Recognition

**Goal:** Train your ear to recognize common intervals.

**How:**
1. Play a note (any note) on your synth
2. Play another note and listen to the relationship
3. Count the semitones - is it a third? A fifth? An octave?
4. Focus on how it **sounds** - consonant or dissonant? Happy or sad?

**Common patterns to practice:**
- Octave (12) - sounds like "same note, higher"
- Fifth (7) - sounds hollow, powerful (think "Twinkle Twinkle Little Star" first two notes)
- Major third (4) - sounds happy, bright
- Minor third (3) - sounds sad, dark

**What you'll discover:** Intervals have recognizable emotional and acoustic character. You'll start hearing them in music everywhere.

**Not feeling it?** Just pay attention when listening to music. Notice when two instruments play together - that's an interval. Notice melody movement - those are intervals in sequence.

### Exercise 2: Dual Oscillator Programming

**Goal:** Hear how intervals sound when two oscillators play together (requires two oscillators).

**How:**
1. Tune both oscillators to the same pitch (unison)
2. Raise OSC 2 by intervals and listen:
   - +3 semitones (minor third) - darker color
   - +4 semitones (major third) - brighter color
   - +7 semitones (fifth) - hollow power
   - +12 semitones (octave) - thicker sound
3. Play a simple melody - the interval relationship stays constant

**What you'll discover:** 
- Different intervals create completely different timbres
- The same interval relationship works at any pitch
- Some intervals blend (consonant), others clash (dissonant)

**Alternative (no dual oscillators):** Use a chord generator plugin or synth preset with two notes. Adjust the second note's pitch to hear different intervals.

### Exercise 3: Melody Interval Analysis

**Goal:** Understand melody as a sequence of intervals.

**How:**
1. Pick a simple melody you know (nursery rhyme, pop song hook)
2. Figure out the first few notes
3. Calculate the intervals between each note
4. Notice the pattern: mostly small steps with occasional leaps?

**What you'll discover:**
- Memorable melodies often use a mix of consonant intervals
- Too many small steps = boring
- Too many large leaps = hard to sing/remember
- Balance creates interest

**Not feeling it?** Just be aware that melody is intervals. Every time notes change pitch, that's an interval.

---

## Connections to Other Concepts

**This concept connects to:**

→ **[Basic Scales](03_scales_basics.md)**
Scales are specific patterns of intervals. Understanding intervals makes scale formulas make sense.

→ **[Chords](../02_application/chords_basics.md)** *(Coming Soon)*
Chords are multiple intervals stacked together. Major/minor quality comes from third intervals.

→ **[Melody Construction](../02_application/melody_basics.md)** *(Coming Soon)*
Melodies are intervals in sequence. Good melodies balance stepwise motion and leaps.

→ **[Synthesis Techniques](../../modular/README.md)**
Dual oscillator patches use interval relationships. Understanding intervals improves sound design choices.

---

## What You Should Remember

**Core understanding:**
- Intervals are the distance between two notes
- Measured in semitones (counting method) or ratios (physics)
- Simple ratios = consonant (stable), complex ratios = dissonant (tense)
- Different intervals have different emotional and acoustic qualities

**Most important intervals:**
- **Octave (12):** Doubling, same note different register
- **Perfect fifth (7):** Hollow, powerful, open
- **Major third (4):** Happy, bright
- **Minor third (3):** Sad, dark

**Practical application:**
- Programming dual oscillators with specific interval relationships
- Understanding why certain melodies work
- Foundation for understanding scales and chords
- Creating intentional harmonic relationships

**What you don't need to memorize:**
- Every interval name and semitone count (learn common ones first)
- Exact frequency ratios (understand the principle)
- Traditional music theory counting conventions
- Compound intervals (beyond the octave) initially

**What matters:**
Recognizing that intervals determine how notes relate sonically and emotionally. With this understanding, you can make intentional choices about which notes to use together.

---

## Next Steps

**Ready to continue?** Move to [Basic Scales](03_scales_basics.md) to learn how specific interval patterns create scales.

**Want to review?** Go back to [What is a Note?](01_pitch_voltage_basics.md) if single-note concepts aren't clear yet.

**Want more depth?** Check the [Interval Reference Tables](../04_reference/interval_reference.md) *(Coming Soon)* for complete interval information.

**Confused about something?** Re-read the section that's unclear. Intervals become clearer with hands-on listening and programming experience.

---

*This module is part of the [Music Theory for Synthesis](../README.md) curriculum. Theory concepts appear inline in [module guides](../../modular/README.md) with cross-references back to detailed content here.*