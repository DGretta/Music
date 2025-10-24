# Voice Leading Reference

**Quick lookup for smooth voice leading examples and techniques**

---

## Understanding Voice Leading

**Voice leading** is the art of moving individual notes (voices) smoothly from one chord to the next. Good voice leading creates:
- Smooth, musical transitions between chords
- Independent melodic lines that work together
- Professional-sounding harmony vs. blocky chord changes
- Minimal jumps and awkward movements

---

## Three Core Principles

### 1. Minimal Movement
**Move each voice by the smallest distance possible**

### 2. Common Tones
**Keep notes that exist in both chords**

### 3. Contrary Motion
**When one voice goes up, another goes down**

---

## Common Progressions with Optimal Voice Leading

### I-IV-V-I in C Major

**Poor Voice Leading (All Root Position):**
```
I (C):     G    IV (F):    C    V (G):     D    I (C):     G
           E              A              B              E
           C              F              G              C

Jumps: E→A (+5), G→C (+5), C→D (+2), A→B (+2), B→E (+5), D→G (+3)
Large movements, disconnected sound
```

**Good Voice Leading (Using Inversions):**
```
I (C):     G    IV (F):    A    V (G):     G    I (C):     G
           E              F              D              E
           C              C              B              C

Voice 1: G→A (+2), A→G (-2), G→G (0)
Voice 2: E→F (+1), F→D (-3), D→E (+2)
Voice 3: C→C (0), C→B (-1), B→C (+1)

Mostly steps, common tones (C holds, G holds), smooth
```

**Voltage Programming (Modular):**
```
Bar 1 (I - C major):
OSC 1: +0.583V (G)
OSC 2: +0.333V (E)
OSC 3: 0V (C)

Bar 2 (IV - F major, first inversion):
OSC 1: +0.75V (A, +2 semitones = +0.167V)
OSC 2: +0.417V (F, +1 semitone = +0.083V)
OSC 3: 0V (C, stays = 0V change)

Bar 3 (V - G major, second inversion):
OSC 1: +0.583V (G, -2 semitones = -0.167V)
OSC 2: +0.167V (D, -3 semitones = -0.25V)
OSC 3: -0.083V (B, -1 semitone = -0.083V)

Bar 4 (I - C major, back to start):
OSC 1: +0.583V (G, 0 semitones = 0V change)
OSC 2: +0.333V (E, +2 semitones = +0.167V)
OSC 3: 0V (C, +1 semitone = +0.083V)
```

---

### I-V-vi-IV in C Major (Pop Progression)

**Good Voice Leading:**
```
I (C):     G    V (G):     G    vi (Am):   A    IV (F):    A
           E              D              E              F
           C              B              C              C

Voice 1: G→G (0), G→A (+2), A→A (0)
Voice 2: E→D (-2), D→E (+2), E→F (+1)
Voice 3: C→B (-1), B→C (+2), C→C (0)

Common tones: G holds, A holds, C holds
Small stepwise movements
```

**Bass Line (Root Movement):**
```
C → G → A → F

Roots move: +7, +2, -3 semitones
Bass voice can leap (establishes harmony)
Upper voices stay smooth
```

---

### I-vi-IV-V in C Major ('50s Progression)

**Good Voice Leading:**
```
I (C):     G    vi (Am):   A    IV (F):    A    V (G):     G
           E              E              F              D
           C              C              C              B

Voice 1: G→A (+2), A→A (0), A→G (-2)
Voice 2: E→E (0), E→F (+1), F→D (-3)
Voice 3: C→C (0), C→C (0), C→B (-1)

Multiple common tones (E holds, C holds twice, A holds)
Very smooth, minimal movement
```

---

### ii-V-I in C Major (Jazz)

**With Seventh Chords:**
```
ii (Dm7):      C    V (G7):       B    I (Cmaj7):    B
               A              F                 G
               F              D                 E
               D              G                 C

Voice 1: C→B (-1), B→B (0)
Voice 2: A→F (-4), F→G (+2)
Voice 3: F→D (-3), D→E (+2)
Voice 4: D→G (+5), G→C (+5)

Upper voices mostly stepwise
Bass makes larger movements (functional)
Tritone in G7 (B-F) resolves inward: B→C (+1), F→E (-1)
```

**The Tritone Resolution:**
- G7 contains B (leading tone) and F (flat seventh)
- B wants to resolve UP to C (tonic)
- F wants to resolve DOWN to E (third of tonic)
- This pull creates strong V-I resolution
- Classic dominant-to-tonic voice leading

---

### ii-V-I in A Minor

**With Seventh Chords:**
```
ii (Bm7♭5):    A    V (E7):       G#   I (Am7 or Am):  A
               F              E                  E
               D              D                  C
               B              B                  A

Voice 1: A→G# (-1), G#→A (+1)
Voice 2: F→E (-1), E→E (0)
Voice 3: D→D (0), D→C (-2)
Voice 4: B→B (0), B→A (-2)

Common tones: D holds, B holds
Half-diminished (Bm7♭5) to dominant (E7) to tonic (Am)
```

---

## Voice Leading by Interval Movement

### Root Position to First Inversion

**C major → F major (first inversion):**
```
C major:    G    F major (F-A-C):    C
            E                        A
            C                        F

Movement: G→C (+5), E→A (+5), C→F (+5)
All parallel fifths - sounds hollow, avoid
```

**C major → F major (better inversion):**
```
C major:    G    F major (C-F-A):    A
            E                        F
            C                        C

Movement: G→A (+2), E→F (+1), C→C (0)
Small movements, one common tone - smooth
```

---

### Common Tone Voice Leading

**Progressions where chords share notes:**

**C major → A minor (shares C and E):**
```
C major:    G    A minor:    A
            E               E  (common tone)
            C               C  (common tone)

Voice 1: G→A (+2)
Voice 2: E→E (0) - holds
Voice 3: C→C (0) - holds

Two voices hold, one moves - very smooth
```

**G major → E minor (shares G and B):**
```
G major:    D    E minor:    E
            B               B  (common tone)
            G               G  (common tone)

Voice 1: D→E (+2)
Voice 2: B→B (0) - holds
Voice 3: G→G (0) - holds

Two voices hold, one moves - very smooth
```

---

## Voice Leading Rules (Classical)

### Parallel Motion to Avoid

**Parallel Fifths:**
```
Bad:
Voice 1: C → G  (perfect fifth apart)
Voice 2: G → D  (both move maintaining fifth)

Why: Sounds hollow, medieval, reduces independence
```

**Parallel Octaves:**
```
Bad:
Voice 1: C → F  (octave apart)
Voice 2: C → F  (both move maintaining octave)

Why: Voices blend completely, lose independence
```

**Modern Context:**
- These rules come from Renaissance/Baroque counterpoint
- In modern music (especially electronic), parallel fifths can be intentional
- Power chord movement = parallel fifths on purpose
- Know the rule to break it intentionally

---

### Direct/Hidden Fifths and Octaves

**Avoid similar motion to perfect intervals:**
```
Bad:
Voice 1: C → G  (leap)
Voice 2: E → G  (both arrive at G in same direction)

Why: Weakens independence even though not parallel
```

**Better:**
```
Good:
Voice 1: C → G  (up)
Voice 2: E → D  (down - contrary motion)

Why: Contrary motion maintains independence
```

---

## Voice Leading Guidelines

### Leading Tone Resolution

**The 7th scale degree wants to resolve up to the tonic:**

**In C major:**
```
G major (V):   D    C major (I):   E
               B                   C  (B→C, leading tone resolves up)
               G                   G

B (leading tone) pulls strongly to C (tonic)
Natural resolution tendency
```

---

### Seventh Resolution

**The seventh of a dominant chord wants to resolve down:**

**In C major:**
```
G7 (V7):       F    C major (I):   E
               D                   C
               B                   B
               G                   G

F (seventh) → E (down by step)
Completes the resolution
```

---

### Doubling Rules

**When voicing with more than 3 notes:**

**Prefer doubling:**
- Root (most stable)
- Fifth (also stable)

**Avoid doubling:**
- Third (defines chord quality, doubling weakens it)
- Seventh (creates dissonance)
- Leading tone (needs to resolve, doubling creates parallel octaves)

**Example - C major with 4 voices:**
```
Good:    G    Okay:   C    Bad:     E
         E            E             E  (doubled third, weak)
         C            C             G
         C            C             C
```

---

## Contrary Motion Examples

### Voice Exchange

**Two voices swap positions:**

**C major → F major:**
```
C major:    G    F major:    C  (was voice 3's note)
            E                A
            C                F  (was voice 1's note)

Voices 1 and 3 exchange G ↔ C
Creates interesting movement while maintaining smoothness
```

---

### Contrary Motion in ii-V-I

**Outer voices move in opposite directions:**

```
ii (Dm7):      A    V (G7):       G    I (Cmaj7):    G
               F                D                 E
               D                B                 C
               (bass voice moves up throughout)

Soprano descends: A→G→G
Bass ascends: (D→G→C)
Inner voices fill harmony
Classic contrary motion between outer voices
```

---

## Practical Sequencing Applications

### Three-Voice Sequencer Programming

**I-IV-V-I with smooth voice leading:**

**Track 1 (highest voice):**
```
Bar 1: G (step 1-16)
Bar 2: A (step 17-32, +2 semitones)
Bar 3: G (step 33-48, -2 semitones)
Bar 4: G (step 49-64, hold)
```

**Track 2 (middle voice):**
```
Bar 1: E (step 1-16)
Bar 2: F (step 17-32, +1 semitone)
Bar 3: D (step 33-48, -3 semitones)
Bar 4: E (step 49-64, +2 semitones)
```

**Track 3 (bass voice):**
```
Bar 1: C (step 1-16)
Bar 2: C (step 17-32, common tone holds)
Bar 3: B (step 33-48, -1 semitone)
Bar 4: C (step 49-64, +1 semitone)
```

**Result:** Three independent melodic lines creating smooth chord progression

---

### Multi-Oscillator Voice Leading

**Modular setup for smooth I-vi-IV-V:**

**Bar 1 (I - C major):**
```
OSC 1: +0.583V (G)
OSC 2: +0.333V (E)
OSC 3: 0V (C)
```

**Bar 2 (vi - A minor):**
```
OSC 1: +0.75V (A, +0.167V from G)
OSC 2: +0.333V (E, holds at 0V change)
OSC 3: 0V (C, holds at 0V change)

Two common tones (E and C), one voice moves up by step
```

**Bar 3 (IV - F major):**
```
OSC 1: +0.75V (A, holds at 0V change)
OSC 2: +0.417V (F, +0.083V from E)
OSC 3: 0V (C, holds at 0V change)

One common tone (A), one voice moves up by step, one holds
```

**Bar 4 (V - G major):**
```
OSC 1: +0.583V (G, -0.167V from A)
OSC 2: +0.167V (D, -0.25V from F)
OSC 3: -0.083V (B, -0.083V from C)

All voices move, but by small amounts
```

---

## Voice Leading for Different Genres

### Classical/Traditional

**Strict rules application:**
- Avoid parallel fifths and octaves
- Resolve leading tones upward
- Resolve sevenths downward
- Maintain four-voice SATB ranges
- Contrary motion between soprano and bass

---

### Jazz

**More flexible approach:**
- Parallel motion acceptable in inner voices
- Voice leading between seventh chords
- Chromatic voice leading common
- Drop voicings create specific colors
- Guide tone movement (3rd and 7th)

---

### Rock/Pop

**Practical flexibility:**
- Parallel fifths intentional (power chords)
- Simple triads, less voice leading concern
- Doubling for thickness (doubled thirds okay)
- Bass line independence more important
- Upper voices can move in parallel

---

### Electronic

**Synthesis considerations:**
- Voice leading matters with multiple oscillators
- Pad voices benefit from smooth transitions
- Arpeggiators complicate voice leading
- Filter cutoff can follow voice leading principles
- Layered elements need independent movement

---

## Common Voice Leading Patterns

### Ascending Line

**Bass line ascends, upper voices descend:**
```
C major:    G    A minor:   A    D minor:   A    G major:   G
            E               E               F              D
            C               C               D              B

Bass: C → A → D → G (ascending)
Soprano: G → A → A → G (mostly stays high)
Creates balance through contrary motion
```

---

### Descending Lament Bass

**Bass descends chromatically, harmony follows:**
```
C major:    G    C/B:       G    Am/C:      A    Am/G#:     A
            E              E               E               E
            C              B               C               G#

Bass: C → B → C → G# (chromatic descent)
Soprano: E holds (common tone throughout)
Classic baroque pattern
```

---

### Pedal Point

**One voice holds while others move:**
```
C major:    G    F/C:       A    G/C:       G    C major:   G
            E              F               D               E
            C              C               C               C

Voice 3: C pedal (holds throughout)
Upper voices move above sustained bass
Creates tension and release over pedal
```

---

## Related References

- [Chords Reference](chords_reference.md) - Chord inversions for voice leading
- [Progressions Reference](progressions_reference.md) - Common progressions to voice lead
- [Intervals Reference](intervals_reference.md) - Understanding voice movement distances

---

*This reference is part of the [Music Theory for Synthesis](../README.md) curriculum.*