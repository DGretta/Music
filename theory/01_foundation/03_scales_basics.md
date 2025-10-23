# Basic Scales

**Understanding which notes work together and why**

---

## The Core Concept

A **scale** is a collection of notes that sound good together. It's a specific pattern of intervals that creates a musical framework.

**Why scales matter:**
- They answer "which notes should I use?"
- They provide a palette of notes that won't clash
- They create emotional character (happy, sad, exotic, etc.)
- They're essential for quantizers, melodic sequencing, and staying "in key"

**The practical reality:** When you set a quantizer to "major scale" or choose a scale mode on your gear, you're selecting which notes are "available." Random voltages snap to scale notes, ensuring everything sounds musical.

Understanding scales means understanding **why certain note collections create specific moods** and how to use them intentionally.

---

## What Makes a Scale?

### The Pattern, Not The Starting Note

**A scale is defined by its interval pattern**, not by specific notes.

**Example: Major scale pattern**
```
Formula: W-W-H-W-W-W-H
(W = Whole step/2 semitones, H = Half step/1 semitone)

Starting on C:  C - D - E - F - G - A - B - C
Semitones:      0   2   4   5   7   9   11  12

Starting on G:  G - A - B - C - D - E - F# - G
Semitones:      0   2   4   5   7   9   11  12

Same pattern, different starting notes = same scale type, different keys
```

**This is crucial:** The C major scale and G major scale use the same interval pattern. The **pattern** creates the major scale character. The **starting note** determines the key.

### Why Certain Patterns Work

**Simple interval relationships = consonant scales**

Scales that sound good use mostly consonant intervals (thirds, fourths, fifths) between adjacent notes and emphasize simple frequency ratios.

**Dissonant intervals create tension**, which music needs, but scales balance consonance and dissonance to sound cohesive.

---

## The Essential Three Scales

### Major Scale (The Happy/Bright Scale)

**Formula: W-W-H-W-W-W-H** (2-2-1-2-2-2-1 semitones)

**C Major Scale:**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │   │  D  │   │  E  │  F  │   │  G  │   │  A  │   │  B  │ C
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  0    W    2    W    4   H  5    W    7    W    9    W   11  H 12

Notes: C  D  E  F  G  A  B  C
Steps:  W  W  H  W  W  W  H
```

**Character:** Bright, happy, stable, optimistic
**Uses:** Pop music, uplifting melodies, major chords, resolution
**Famous examples:** Most nursery rhymes, "Happy Birthday," countless pop songs

**Voltage pattern (C major, starting at 0V):**
```
0V     = C
0.167V = D  (+2 semitones)
0.333V = E  (+2 semitones)
0.417V = F  (+1 semitone)
0.583V = G  (+2 semitones)
0.75V  = A  (+2 semitones)
0.917V = B  (+2 semitones)
1V     = C  (+1 semitone, octave)
```

**Quantizer setting:** "Major" or "Ionian"

---

### Natural Minor Scale (The Sad/Dark Scale)

**Formula: W-H-W-W-H-W-W** (2-1-2-2-1-2-2 semitones)

**C Minor Scale (also called C Natural Minor):**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │   │  D  │ Eb│     │  F  │   │  G  │ Ab│     │ Bb│     │ C
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  0    W    2   H  3    W    5   H  6    W    8    W   10   W  12

Notes: C  D  Eb  F  G  Ab  Bb  C
Steps:  W  H  W  W  H  W   W
```

**Character:** Sad, dark, serious, melancholic
**Uses:** Emotional music, minor chords, tension, introspection
**Famous examples:** "Losing My Religion" (R.E.M.), many classical pieces

**Key difference from major:** The third note is lowered by one semitone (E→Eb). This single change creates the minor quality.

**Voltage pattern (C minor, starting at 0V):**
```
0V     = C
0.167V = D   (+2 semitones)
0.25V  = Eb  (+1 semitone)
0.417V = F   (+2 semitones)
0.583V = G   (+2 semitones)
0.667V = Ab  (+1 semitone)
0.833V = Bb  (+2 semitones)
1V     = C   (+2 semitones, octave)
```

**Quantizer setting:** "Minor" or "Aeolian" or "Natural Minor"

---

### Pentatonic Scales (The Safe/Universal Scales)

**Major Pentatonic Formula:** Remove 4th and 7th from major scale
**Pattern:** W-W-m3-W-m3 (2-2-3-2-3 semitones, only 5 notes)

**C Major Pentatonic:**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │   │  D  │   │  E  │     │   │  G  │   │  A  │   │     │ C
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  0    W    2    W    4        m3    7    W    9        m3   12

Notes: C  D  E  G  A  C
```

**Character:** Safe, consonant, no "wrong notes," universal appeal
**Uses:** Rock/blues solos, world music, beginner-friendly, random note generation
**Why it works:** Eliminates the half-step intervals that create tension

**Minor Pentatonic Formula:** Remove 2nd and 6th from minor scale
**Pattern:** m3-W-W-m3-W (3-2-2-3-2 semitones)

**C Minor Pentatonic:**
```
┌─────┬───┬─────┬───┬─────┬─────┬───┬─────┬───┬─────┬───┬─────┐
│  C  │   │     │ Eb│     │  F  │   │  G  │   │     │ Bb│     │ C
└─────┴───┴─────┴───┴─────┴─────┴───┴─────┴───┴─────┴───┴─────┘
  0       m3    3    W    5    W    7       m3   10   W   12

Notes: C  Eb  F  G  Bb  C
```

**Character:** Bluesy, soulful, rock, safe for improvisation
**Uses:** Blues, rock solos, emotional but not too tense
**Famous examples:** Most blues and rock guitar solos

**Why pentatonic is synthesis-friendly:**
- Fewer notes = easier to program
- No dissonant half-steps = random notes still sound good
- Perfect for generative/random sequences with quantizers
- Works over many different chord progressions

---

## Scales in Practice

### Setting Up Quantizers

**What quantizers do:** Take any incoming voltage and "snap" it to the nearest scale note.

**Practical example:**
```
Random LFO ──▶ Quantizer (set to C Major) ──▶ Oscillator pitch

Random voltage: 0.4V
Nearest C major note: E (0.333V)
Quantizer output: 0.333V → Oscillator plays E

Random voltage: 0.8V
Nearest C major note: A (0.75V)
Quantizer output: 0.75V → Oscillator plays A
```

**Result:** Random modulation creates melodies that stay in key.

**Choosing scale modes:**
- **Major/Ionian:** Bright, happy melodies
- **Minor/Aeolian:** Dark, sad melodies
- **Pentatonic:** Safe, universally pleasing, fewer note options
- **Chromatic:** All 12 notes (no quantization, pure chromatic)

---

### Programming Sequences

**Using scale knowledge to program melodies:**

**C Major sequence example:**
```
Note  ║ 
  C   ║ ●───                              ← Root (tonic)
  B   ║             ●───                  ← Leading tone
  A   ║       ●───            ●───        ← Sixth
  G   ║                   ●───      ●───  ← Fifth (dominant)
  F   ║ 
  E   ║                             
  D   ║ 
      ║─┼───┼───┼───┼───┼───┼───┼───┼
Step: ║ 1   2   3   4   5   6   7   8

Intervals: C→A (+9), A→B (+2), B→G (-4), G→A (+2), A→G (-2), G→C (-7)
All notes from C major scale = stays in key
```

**Why this sounds coherent:** Every note belongs to the C major scale. No "wrong notes."

**C Minor sequence example:**
```
Note  ║ 
  C   ║ ●───                              ← Root (tonic)
  Bb  ║             ●───                  ← Flat seventh
  Ab  ║       ●───            ●───        ← Flat sixth
  G   ║                   ●───      ●───  ← Fifth
  F   ║ 
  Eb  ║                             
  D   ║ 
      ║─┼───┼───┼───┼───┼───┼───┼───┼
Step: ║ 1   2   3   4   5   6   7   8

Same rhythm, different scale = different emotional character
```

---

### Understanding "In Key"

**Being "in key" means using notes from a chosen scale.**

**C Major key = using notes from C major scale:**
- Available: C D E F G A B
- Avoided: C# Db D# Eb F# Gb G# Ab A# Bb

**Why stay in key?**
- Notes work together harmonically
- Melodies sound coherent
- Chords built from scale notes sound related
- Creates unified musical identity

**When to leave the key:**
- Intentional tension or dissonance
- Modulation (changing to a different key/scale)
- Chromatic passing tones (brief non-scale notes)
- Advanced techniques (coming in later modules)

---

## Comparing Major and Minor

**Same root note, different emotional character:**

**C Major:**
```
C  D  E  F  G  A  B  C
Bright, happy, stable, optimistic
Major third (E) creates happy character
```

**C Minor:**
```
C  D  Eb  F  G  Ab  Bb  C
Dark, sad, serious, melancholic
Minor third (Eb) creates sad character
```

**The critical difference:** The third note (E vs Eb) determines major/minor quality.

**Practical application:**
- Want happy/bright? Use major scale
- Want sad/dark? Use minor scale
- Want safe/universal? Use pentatonic (either major or minor)

---

## Scale Degrees and Function

**Each note in a scale has a function:**

```
Degree:  1st    2nd    3rd    4th    5th    6th    7th    8th
C Major:  C      D      E      F      G      A      B      C
Name:   Tonic  Super  Mediant Sub   Dominant Sub   Leading Octave
                      (major)  dom             med   Tone

Function:
1 (Tonic)     = Home, stable, resolution
3 (Mediant)   = Defines major/minor quality
5 (Dominant)  = Tension, wants to return to tonic
7 (Leading)   = Strong pull toward octave/tonic
```

**Why this matters (preview):**
- 1st note (tonic) = "home base" - where melodies often start/end
- 3rd note = major/minor character
- 5th note = creates tension, supports tonic
- These relationships create chord progressions (next modules)

**For now:** Just know that scale notes have different functions, some more stable than others.

---

## Common Confusions Addressed

### "What's the difference between a key and a scale?"

**Scale:** The pattern of intervals (major scale, minor scale, etc.)
**Key:** Which note you start the pattern on (C major, G major, etc.)

**Example:**
- "Major scale" = the W-W-H-W-W-W-H pattern
- "C major" = major scale starting on C
- "G major" = major scale starting on G

**For practical purposes:** When someone says "key of C major," they mean "use the C major scale."

### "Why are there black and white keys on a keyboard?"

**Historical design.** The white keys are the C major scale. Black keys are the notes "in between."

**This is arbitrary** - other scales require black keys. Don't think "white keys = correct notes." Every scale uses a mix of white and black keys (except C major, which happens to be all white).

### "Do I need to learn all 12 major scales?"

**Eventually, yes, but not right now.** Start with:
- C major (no sharps/flats, easiest to visualize)
- A minor (natural minor, no sharps/flats)
- Major and minor pentatonic in a few keys

**The pattern is what matters.** Once you know the pattern, you can build any scale from any starting note.

### "What are modes?"

**Modes are the same notes as a major scale, but starting on different degrees.**

**Example:**
- C major scale: C D E F G A B C
- D Dorian mode: D E F G A B C D (same notes, starts on D)
- E Phrygian mode: E F G A B C D E (same notes, starts on E)

**For foundation understanding:** Don't worry about modes yet. Master major, minor, and pentatonic first. Modes are an advanced topic (Integration Layer).

### "Can I mix scales?"

**Yes, but that's advanced technique.** For now:
- Pick one scale per musical section
- Stay in that scale
- Create coherence before creating complexity

**Later:** You'll learn to modulate (change keys), use chromatic passing tones, and combine scales intentionally.

---

## Try This (If You Want)

### Exercise 1: Scale Recognition

**Goal:** Train your ear to hear the difference between major, minor, and pentatonic.

**How:**
1. Play a major scale ascending (C D E F G A B C)
2. Play the same root note minor scale (C D Eb F G Ab Bb C)
3. Play major pentatonic (C D E G A C)
4. Listen to the emotional difference

**What you'll discover:**
- Major sounds bright/happy
- Minor sounds dark/sad
- Pentatonic sounds safe/smooth (no half-steps)

**Not feeling it?** Listen to any pop song - most use major scales for upbeat sections, minor for emotional sections.

### Exercise 2: Quantizer Programming

**Goal:** Use scale quantization to create musical sequences (requires quantizer or scale mode on synth).

**How:**
1. Set up a random LFO or sample-and-hold to modulate pitch
2. Enable quantizer/scale mode set to major
3. Listen - even random voltages create musical melodies
4. Change to minor scale - notice the mood change
5. Change to pentatonic - notice how it never sounds "wrong"

**What you'll discover:**
- Quantizers are incredibly powerful for generative music
- Different scales create completely different moods
- You can create complex melodies without programming specific notes

**Alternative (no modular):** Use a MIDI arpeggiator or random note generator with scale constraints. Same principle, different interface.

### Exercise 3: Build Your Own Scale

**Goal:** Understand how scale formulas work by building one manually.

**How:**
1. Start on any note (let's say C)
2. Apply the major scale formula: W-W-H-W-W-W-H
3. Write out each note:
   - C (start)
   - +W (2 semitones) = D
   - +W (2 semitones) = E
   - +H (1 semitone) = F
   - +W (2 semitones) = G
   - +W (2 semitones) = A
   - +W (2 semitones) = B
   - +H (1 semitone) = C (octave)
4. Try the same starting note with minor formula: W-H-W-W-H-W-W

**What you'll discover:**
- The formula determines which notes are in the scale
- Same formula, different starting note = different key, same character
- You can build any scale from any note if you know the formula

**Not feeling it?** Just remember the three main formulas (major, minor, pentatonic). You can always look them up when needed.

---

## Connections to Other Concepts

**This concept connects to:**

→ **[Intervals](02_intervals_basics.md)** *(Previous Topic)*
Scales are built from specific interval patterns. Understanding intervals makes scale construction clear.

→ **[Chords](../02_application/chords_basics.md)** *(Coming Soon)*
Chords are built by stacking specific scale degrees (1-3-5 for basic triads). Same scale creates related chords.

→ **[Progressions](../02_application/progressions_basics.md)** *(Coming Soon)*
Chord progressions move between chords built from scale notes. Staying in key means using the same scale.

→ **[Melody Construction](../02_application/melody_basics.md)** *(Coming Soon)*
Melodies use scale notes with intentional movement. Understanding scales helps create coherent melodies.

---

## What You Should Remember

**Core understanding:**
- Scales are patterns of intervals that sound good together
- The pattern (formula) creates character, the starting note determines key
- Three essential scales: major (happy), minor (sad), pentatonic (safe)
- "In key" means using notes from a chosen scale

**Most important formulas:**
- **Major:** W-W-H-W-W-W-H (2-2-1-2-2-2-1)
- **Natural Minor:** W-H-W-W-H-W-W (2-1-2-2-1-2-2)
- **Pentatonic:** Remove half-steps for safe, consonant options

**Practical application:**
- Set quantizers to appropriate scale for desired mood
- Program sequences using scale notes
- Understand why certain note combinations work together
- Create cohesive musical sections by staying in key

**What you don't need to memorize:**
- All 12 major/minor scales initially (learn pattern, apply anywhere)
- Modes (advanced topic for later)
- Scale degree names (useful but not essential yet)
- Every possible scale variation

**What matters:**
Knowing which scale to use for which mood and how to apply that knowledge to your sequencing, quantization, and melodic programming.

---

## Next Steps

**Ready to continue?** Move to [Simple Rhythm](04_rhythm_basics.md) *(Coming Soon)* to complete the foundation layer.

**Want to review?** 
- Go back to [Intervals](02_intervals_basics.md) if interval relationships aren't clear
- Go back to [What is a Note?](01_pitch_voltage_basics.md) if pitch fundamentals need reinforcement

**Want more depth?** Check the [Scale Formulas Library](../04_reference/scale_formulas.md) *(Coming Soon)* for complete scale reference information.

**Ready to apply this?** The Application Layer modules on chords and progressions build directly on scale knowledge.

---

*This module is part of the [Music Theory for Synthesis](../README.md) curriculum. Theory concepts appear inline in [module guides](../../modular/README.md) with cross-references back to detailed content here.*