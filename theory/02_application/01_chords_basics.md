# Chords

**Stacking intervals to create harmonic character**

---

## The Core Concept

A **chord** is three or more notes played simultaneously. Chords create harmonic character - the emotional foundation that supports melodies and defines musical sections.

**Why chords matter:**
- They define whether music sounds happy (major) or sad (minor)
- They create tension and release (dissonant chords want to resolve)
- They support melodies by providing harmonic context
- They're essential for progressions (chord changes that create movement)

**The practical reality:** When you program multiple oscillators at specific intervals, use a chord generator, or sequence multiple notes simultaneously, you're creating chords. Understanding chord construction means understanding **why certain note combinations create specific emotional qualities**.

---

## Building Blocks: Triads

### What is a Triad?

**A triad is the most basic chord: three notes stacked in thirds.**

**Construction formula:**
1. Root (starting note)
2. Third (either major or minor third above root)
3. Fifth (perfect fifth above root)

**Why thirds?** Stacking thirds creates stable, consonant harmonies that form the foundation of Western music.

---

## The Four Basic Triads

### Major Triad (Happy, Bright)

**Formula:** Root + Major third (4 semitones) + Perfect fifth (7 semitones)

**C Major example:**
```
Note  ║ 
  G   ║ ●───  ← Fifth (7 semitones from C)
  F   ║ 
  E   ║ ●───  ← Major third (4 semitones from C)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Intervals: C to E = 4 semitones (major third)
           E to G = 3 semitones (minor third)
           C to G = 7 semitones (perfect fifth)
```

**Voltage relationship (starting at 0V = C):**
```
C: 0V        (root)
E: +0.333V   (major third, +4 semitones)
G: +0.583V   (perfect fifth, +7 semitones)
```

**Character:** Bright, happy, stable, optimistic, resolved
**Uses:** Pop music, major key songs, uplifting moments, resolution points
**Synthesis:** Three oscillators tuned to these intervals create major chord character

---

### Minor Triad (Sad, Dark)

**Formula:** Root + Minor third (3 semitones) + Perfect fifth (7 semitones)

**C Minor example:**
```
Note  ║ 
  G   ║ ●───  ← Fifth (7 semitones from C)
  F   ║ 
  Eb  ║ ●───  ← Minor third (3 semitones from C)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Intervals: C to Eb = 3 semitones (minor third)
           Eb to G = 4 semitones (major third)
           C to G = 7 semitones (perfect fifth)
```

**Voltage relationship (starting at 0V = C):**
```
C:  0V        (root)
Eb: +0.25V    (minor third, +3 semitones)
G:  +0.583V   (perfect fifth, +7 semitones)
```

**Character:** Sad, dark, serious, melancholic, introspective
**Uses:** Emotional sections, minor key songs, tension, drama
**Critical difference:** The third is one semitone lower than major (E → Eb). This single change creates the minor quality.

---

### Diminished Triad (Tense, Unstable)

**Formula:** Root + Minor third (3 semitones) + Diminished fifth (6 semitones)

**C Diminished example:**
```
Note  ║ 
  Gb  ║ ●───  ← Diminished fifth (6 semitones from C, tritone)
  F   ║ 
  Eb  ║ ●───  ← Minor third (3 semitones from C)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Intervals: C to Eb = 3 semitones (minor third)
           Eb to Gb = 3 semitones (minor third)
           C to Gb = 6 semitones (diminished fifth/tritone)
```

**Character:** Tense, unstable, anxious, wants to resolve
**Uses:** Creating tension before resolution, horror/suspense, jazz harmony
**Why unstable:** Contains the tritone (diminished fifth), the most dissonant interval

---

### Augmented Triad (Bright, Unstable)

**Formula:** Root + Major third (4 semitones) + Augmented fifth (8 semitones)

**C Augmented example:**
```
Note  ║ 
  G#  ║ ●───  ← Augmented fifth (8 semitones from C)
  G   ║ 
  F   ║ 
  E   ║ ●───  ← Major third (4 semitones from C)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Intervals: C to E = 4 semitones (major third)
           E to G# = 4 semitones (major third)
           C to G# = 8 semitones (augmented fifth)
```

**Character:** Bright but unstable, dreamlike, floating, ambiguous
**Uses:** Film scores, jazz, creating uncertainty, chromatic movement
**Less common than major/minor but useful for specific effects**

---

## Seventh Chords (Four-Note Chords)

### Adding a Seventh

**Seventh chords add a fourth note - a seventh interval above the root.**

Different types of sevenths create different chord qualities.

---

### Major Seventh (Jazzy, Sophisticated)

**Formula:** Major triad + Major seventh (11 semitones)

**C Major 7 (Cmaj7) example:**
```
Note  ║ 
  B   ║ ●───  ← Major seventh (11 semitones from C)
  A   ║ 
  G   ║ ●───  ← Perfect fifth (7 semitones)
  F   ║ 
  E   ║ ●───  ← Major third (4 semitones)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Notes: C-E-G-B
```

**Character:** Jazzy, sophisticated, dreamy, lush
**Uses:** Jazz, neo-soul, sophisticated pop, ending chords
**Sound quality:** The major seventh (B) is one semitone below the octave (C), creating slight tension but remaining stable

---

### Dominant Seventh (Tense, Wants Resolution)

**Formula:** Major triad + Minor seventh (10 semitones)

**C Dominant 7 (C7) example:**
```
Note  ║ 
  Bb  ║ ●───  ← Minor seventh (10 semitones from C)
  A   ║ 
  G   ║ ●───  ← Perfect fifth (7 semitones)
  F   ║ 
  E   ║ ●───  ← Major third (4 semitones)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Notes: C-E-G-Bb
```

**Character:** Tense, bluesy, wants to resolve, unstable
**Uses:** Blues, jazz, creating tension before resolution, V chord in progressions
**Why "dominant":** This chord built on the 5th degree of a scale (dominant) creates strong pull to resolve to the 1st degree (tonic)

**Critical function:** Contains tritone (E to Bb = 6 semitones), creating tension that wants resolution

---

### Minor Seventh (Smooth, Mellow)

**Formula:** Minor triad + Minor seventh (10 semitones)

**C Minor 7 (Cm7) example:**
```
Note  ║ 
  Bb  ║ ●───  ← Minor seventh (10 semitones from C)
  A   ║ 
  G   ║ ●───  ← Perfect fifth (7 semitones)
  F   ║ 
  Eb  ║ ●───  ← Minor third (3 semitones)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Notes: C-Eb-G-Bb
```

**Character:** Smooth, mellow, jazzy but dark, sophisticated
**Uses:** Jazz, funk, soul, R&B, minor key sophistication
**Less tense than dominant seventh because the minor third softens the overall quality

---

### Minor Seven Flat Five (Half-Diminished)

**Formula:** Diminished triad + Minor seventh (10 semitones)

**C Minor 7♭5 (Cm7♭5 or Cø) example:**
```
Note  ║ 
  Bb  ║ ●───  ← Minor seventh (10 semitones from C)
  A   ║ 
  Gb  ║ ●───  ← Diminished fifth (6 semitones)
  F   ║ 
  Eb  ║ ●───  ← Minor third (3 semitones)
  D   ║ 
  C   ║ ●───  ← Root
      ║
Notes: C-Eb-Gb-Bb
```

**Character:** Very tense, unstable, jazzy, needs resolution
**Uses:** Jazz progressions, creating strong tension, leading to resolution
**Also called "half-diminished seventh"** (vs fully diminished which has a diminished seventh)

---

## Chords and Scales: The Connection

### Building Chords from Scale Degrees

**Every scale contains seven notes. You can build a chord on each scale degree by stacking thirds.**

**C Major scale chords (diatonic chords):**
```
Scale degree: I     ii    iii   IV    V     vi    vii°
Chord:        Cmaj  Dm    Em    Fmaj  Gmaj  Am    Bdim
Quality:      Major Minor Minor Major Major Minor Diminished

Pattern: Major-minor-minor-Major-Major-minor-diminished
```

**Why this matters:**
- These seven chords all "belong" to the key of C major
- They work together because they come from the same scale
- This pattern is the same for ALL major keys (just different starting notes)
- Understanding this unlocks chord progressions (next module)

**In synthesis:**
If your sequence is in C major scale and you want chords, use these seven chords. They'll all sound "in key" and work together.

---

## Chord Inversions and Voicings

### What is an Inversion?

**An inversion rearranges chord notes so the root isn't the lowest note.**

**C Major triad inversions:**

**Root position:** Root is lowest
```
Notes: C-E-G (C is bass note)
       C  E  G
       ●  ●  ●
```

**First inversion:** Third is lowest
```
Notes: E-G-C (E is bass note)
       E  G  C
       ●  ●  ●
Same chord, different bass note
```

**Second inversion:** Fifth is lowest
```
Notes: G-C-E (G is bass note)
       G  C  E
       ●  ●  ●
Same chord, different bass note
```

**Why inversions matter:**
- Create smoother voice leading (smaller movements between chords)
- Change the bass line character
- Same harmonic function, different sonority
- Essential for bass line construction and chord progressions

---

### Voicing

**Voicing is how you arrange chord notes across different registers.**

**Close voicing:** Notes packed together
```
C Major close:
  G ●  (all within one octave)
  E ●
  C ●
```

**Open voicing:** Notes spread across wider range
```
C Major open:
  G ●  (two octaves)
  E ●  (one octave)
  C ●  (root)
```

**Drop voicing:** Move one or more notes down an octave
```
C Major drop-2:
  E ●
  C ●  (dropped down an octave)
  G ●
```

**Why voicing matters:**
- Close voicing = thick, dense sound
- Open voicing = clear, spacious sound
- Drop voicings = guitar-style chords, specific sonic character
- In synthesis: spread oscillators across different octaves for open voicings

---

## Chords in Practice

### Programming Chords in Sequencers

**Simultaneous triggers (vertical harmony):**
```
Step:  1         2         3         4
Note:  G ●       F ●       E ●       D ●
       E ●       D ●       C ●       B ●
       C ●       Bb●       G ●       G ●
       │         │         │         │
     C major   Bb major  C major   G major
```

**Arpeggiators (horizontal harmony):**
```
Step:  1    2    3    4    5    6    7    8
Note:  C    E    G    C    C    E    G    C
       ●    ●    ●    ●    ●    ●    ●    ●

Playing chord notes in sequence rather than simultaneously
Still creates C major chord impression
```

---

### Multi-Oscillator Chord Programming

**Creating chords with multiple oscillators:**

**Example 1: C Major chord**
```
Keyboard CV ──┬──▶ OSC 1 (1V/oct input) = Root (C)
              │
              ├──[+0.333V]──▶ OSC 2 = Major third (E)
              │
              └──[+0.583V]──▶ OSC 3 = Perfect fifth (G)
              
All three oscillators play C major chord
Relationship maintained at any pitch
```

**Example 2: C Minor chord**
```
Keyboard CV ──┬──▶ OSC 1 = Root (C)
              │
              ├──[+0.25V]──▶ OSC 2 = Minor third (Eb)
              │
              └──[+0.583V]──▶ OSC 3 = Perfect fifth (G)
              
Change one offset: major → minor
```

**Example 3: Open voicing**
```
Keyboard CV ──┬──▶ OSC 1 = Root (C, lower octave)
              │
              ├──[+1.333V]──▶ OSC 2 = Major third (E, higher octave)
              │
              └──[+1.583V]──▶ OSC 3 = Fifth (G, higher octave)
              
+1V moves notes up an octave for spacious sound
```

---

### Chord Generators and MIDI

**Using MIDI chord generators:**
- Trigger single note, device outputs full chord
- Useful for live performance or quick experimentation
- Understanding chord theory helps you choose which chords

**Programming MIDI chords:**
- Draw multiple notes vertically in piano roll
- Use scale constraints to ensure notes are "in key"
- Experiment with inversions for voice leading

---

## Common Confusions Addressed

### "What's the difference between a chord and an interval?"

**Interval:** Distance between TWO notes (C to E = major third)
**Chord:** THREE or MORE notes sounding together (C-E-G = C major chord)

**Triads are the minimum:** Two notes = interval, three notes = chord

---

### "Do I always need three notes for a chord?"

**Technically yes, but practically no.**

**Power chord (rock/metal):**
```
Root + Fifth only (C-G)
Two notes, but implies a chord
Omits the third (neither major nor minor)
Powerful, ambiguous, heavy sound
```

**In synthesis:**
- Two-note intervals can imply chords
- Context determines what the listener hears
- Bass note + melody can imply full harmony

---

### "Why do some chords sound 'wrong' with my scale?"

**You might be using chords that don't belong to the scale.**

**In C major scale, these chords work:**
- I: C major
- ii: D minor
- iii: E minor
- IV: F major
- V: G major
- vi: A minor
- vii°: B diminished

**These would sound "wrong" in C major:**
- D major (D-F#-A - F# isn't in C major scale)
- E major (E-G#-B - G# isn't in C major scale)
- A major (A-C#-E - C# isn't in C major scale)

**Solution:** Use diatonic chords (built from scale notes) for coherent harmony.

---

### "What about sus chords, add chords, extended chords?"

**Those are more advanced chord types:**
- **Sus chords:** Replace third with second or fourth (Csus2, Csus4)
- **Add chords:** Add a note to basic triad (Cadd9 = C-E-G-D)
- **Extended chords:** Add 9ths, 11ths, 13ths for jazz sophistication

**For foundation understanding:** Master triads and seventh chords first. Extended harmonies are Integration Layer material.

---

## Try This (If You Want)

### Exercise 1: Chord Quality Recognition

**Goal:** Train your ear to hear major vs minor chord quality.

**How:**
1. Play C major chord (C-E-G)
2. Play C minor chord (C-Eb-G)
3. Listen to the emotional difference
4. Try other root notes (G major vs G minor, A major vs A minor)

**What you'll discover:**
- Major = bright, happy, stable
- Minor = dark, sad, serious
- The third determines the quality
- This relationship is consistent across all keys

**Not feeling it?** Listen to pop songs - verses often minor, chorus often major. Notice the mood shift.

---

### Exercise 2: Building Chords from Scales

**Goal:** Understand how chords come from scales (requires keyboard/sequencer).

**How:**
1. Play C major scale: C-D-E-F-G-A-B-C
2. Build chord on C: take every other note (C-E-G) = C major
3. Build chord on D: take every other note (D-F-A) = D minor
4. Build chord on E: take every other note (E-G-B) = E minor
5. Continue through the scale

**What you'll discover:**
- Every scale degree produces a specific chord quality
- The pattern repeats in all major keys
- These chords all work together (they're "in key")

**Alternative:** Use MIDI with scale constraint, stack notes in thirds, observe the pattern.

---

### Exercise 3: Multi-Oscillator Chord Programming

**Goal:** Program chords using multiple oscillators (requires 3+ oscillators or chord-capable synth).

**How:**
1. Tune OSC 1 to C3
2. Tune OSC 2 to E3 (+4 semitones, major third)
3. Tune OSC 3 to G3 (+7 semitones, fifth)
4. Play a note - hear C major chord
5. Lower OSC 2 by one semitone (E → Eb)
6. Play same note - hear C minor chord

**What you'll discover:**
- Chord quality from specific interval relationships
- One semitone change = major ↔ minor
- These relationships work at any pitch
- Voicing affects timbre (close vs open)

**Alternative:** Use chord generator plugin, analyze which intervals create which chords.

---

## Connections to Other Concepts

**This concept connects to:**

→ **[Intervals](../01_foundation/02_intervals_basics.md)** *(Foundation)*
Chords are built by stacking intervals. Major third + minor third = major triad.

→ **[Basic Scales](../01_foundation/03_scales_basics.md)** *(Foundation)*
Chords come from scale degrees. Same scale = related chords that work together.

→ **[Progressions](02_progressions_basics.md)** *(Coming Soon)*
Chord progressions are sequences of chords. Understanding individual chords is essential for understanding how they move.

→ **[Melody Construction](03_melody_basics.md)** *(Coming Soon)*
Melodies relate to underlying chords. Chord tones are strong landing points for melodies.

→ **[Voice Leading](../03_integration/voice_leading.md)** *(Coming Soon)*
Inversions and voicings create smooth transitions between chords through efficient voice leading.

---

## What You Should Remember

**Core understanding:**
- Chords are three or more notes stacked in intervals
- Triads = root + third + fifth (basic three-note chords)
- Seventh chords = triads + seventh (four-note chords)
- The third determines major/minor quality

**Essential chord types:**
- **Major triad:** Happy, bright (root + major third + fifth)
- **Minor triad:** Sad, dark (root + minor third + fifth)
- **Dominant 7:** Tense, wants resolution (major triad + minor seventh)
- **Major 7:** Jazzy, sophisticated (major triad + major seventh)

**Practical application:**
- Programming multiple oscillators at chord intervals
- Using chord generators with understanding
- Building chords from scale degrees
- Understanding inversions for voice leading
- Creating specific emotional character through chord choice

**What you don't need to memorize:**
- Every possible seventh chord variation
- Complex extended chord formulas
- Every inversion of every chord
- Diminished and augmented triads initially (less common)

**What matters:**
Understanding how intervals stack to create chords, and how different interval combinations create different emotional qualities. This knowledge lets you program intentional harmony rather than random note stacking.

---

## Next Steps

**Ready to continue?** Move to [Progressions](02_progressions_basics.md) *(Coming Soon)* to learn how chords move and create musical narrative.

**Want to review?**
- Go back to [Intervals](../01_foundation/02_intervals_basics.md) if interval relationships aren't clear
- Go back to [Basic Scales](../01_foundation/03_scales_basics.md) for understanding which chords work together

**Want more depth?** Check the [Chord Construction Reference](../04_reference/chord_reference.md) *(Coming Soon)* for complete chord formulas and diagrams.

**Ready to apply this?** Start programming chords in your sequences, experiment with major/minor changes, build chords from your scales.

---

*This module is part of the [Music Theory for Synthesis](../README.md) curriculum. Theory concepts appear inline in [module guides](../../modular/README.md) with cross-references back to detailed content here.*