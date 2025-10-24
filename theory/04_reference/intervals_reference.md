# Intervals Reference

**Quick lookup for interval calculations, frequencies, and voltages**

---

## All 13 Intervals (Unison to Octave)

| Interval Name | Semitones | Quality | Ratio | Consonance | Voltage (1V/oct) |
|--------------|-----------|---------|-------|------------|------------------|
| Perfect Unison | 0 | Perfect | 1:1 | Perfect Consonance | 0V |
| Minor Second | 1 | Minor | 16:15 | Strong Dissonance | +0.083V |
| Major Second | 2 | Major | 9:8 | Mild Dissonance | +0.167V |
| Minor Third | 3 | Minor | 6:5 | Consonance | +0.25V |
| Major Third | 4 | Major | 5:4 | Consonance | +0.333V |
| Perfect Fourth | 5 | Perfect | 4:3 | Consonance | +0.417V |
| Tritone (Aug 4th/Dim 5th) | 6 | Augmented/Diminished | 45:32 | Strong Dissonance | +0.5V |
| Perfect Fifth | 7 | Perfect | 3:2 | Perfect Consonance | +0.583V |
| Minor Sixth | 8 | Minor | 8:5 | Consonance | +0.667V |
| Major Sixth | 9 | Major | 5:3 | Consonance | +0.75V |
| Minor Seventh | 10 | Minor | 16:9 | Mild Dissonance | +0.833V |
| Major Seventh | 11 | Major | 15:8 | Dissonance | +0.917V |
| Perfect Octave | 12 | Perfect | 2:1 | Perfect Consonance | +1V |

---

## Interval Characteristics

### Perfect Consonances
**Intervals that sound stable, resolved, foundational**

- **Perfect Unison (0 semitones)**
  - Same pitch
  - Completely stable
  - Use: Doubling, thickness, detuning reference

- **Perfect Fifth (7 semitones)**
  - Power chord interval
  - Very stable, open sound
  - Use: Bass reinforcement, power chords, harmonic foundation

- **Perfect Octave (12 semitones)**
  - Same note class, different register
  - Completely stable
  - Use: Bass depth, register doubling, harmonic thickness

---

### Imperfect Consonances
**Intervals that sound pleasant but less stable than perfect**

- **Minor Third (3 semitones)**
  - Dark, sad quality
  - Defines minor chords
  - Use: Minor tonality, melancholic sounds, chord thirds

- **Major Third (4 semitones)**
  - Bright, happy quality
  - Defines major chords
  - Use: Major tonality, uplifting sounds, chord thirds

- **Perfect Fourth (5 semitones)**
  - Open, ambiguous
  - Context-dependent consonance
  - Use: Suspended chords, open voicings, quartal harmony

- **Minor Sixth (8 semitones)**
  - Inversion of major third
  - Consonant, smooth
  - Use: Chord inversions, voice leading, smooth transitions

- **Major Sixth (9 semitones)**
  - Inversion of minor third
  - Bright, open consonance
  - Use: Add6 chords, upper extensions, open voicings

---

### Dissonances
**Intervals that sound tense and want to resolve**

- **Minor Second (1 semitone)**
  - Very tense, harsh
  - Chromatic, jazzy
  - Use: Leading tones, chromatic melody, tension, clusters

- **Major Second (2 semitones)**
  - Mild tension
  - Melodic, stepwise
  - Use: Sus2 chords, add9 voicings, melody

- **Tritone (6 semitones)**
  - Most dissonant interval
  - "Devil's interval"
  - Use: Dominant 7th chords, tension, resolution pull, metal/industrial

- **Minor Seventh (10 semitones)**
  - Mild dissonance
  - Bluesy, jazzy
  - Use: Dominant 7th, minor 7th chords, extensions

- **Major Seventh (11 semitones)**
  - Strong dissonance
  - Sophisticated, jazzy
  - Use: Major 7th chords, tension before octave, modern harmony

---

## Frequency Calculations

### Formula
```
Target Frequency = Root Frequency × 2^(semitones/12)

Example: A4 (440 Hz) up a perfect fifth (7 semitones)
Target = 440 × 2^(7/12)
Target = 440 × 1.498
Target ≈ 659.26 Hz (E5)
```

### Common Root Frequencies (Equal Temperament, A4 = 440 Hz)

| Note | Octave 0 | Octave 1 | Octave 2 | Octave 3 | Octave 4 | Octave 5 | Octave 6 | Octave 7 | Octave 8 |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| C | 16.35 Hz | 32.70 Hz | 65.41 Hz | 130.81 Hz | 261.63 Hz | 523.25 Hz | 1046.50 Hz | 2093.00 Hz | 4186.01 Hz |
| C# | 17.32 Hz | 34.65 Hz | 69.30 Hz | 138.59 Hz | 277.18 Hz | 554.37 Hz | 1108.73 Hz | 2217.46 Hz | 4434.92 Hz |
| D | 18.35 Hz | 36.71 Hz | 73.42 Hz | 146.83 Hz | 293.66 Hz | 587.33 Hz | 1174.66 Hz | 2349.32 Hz | 4698.63 Hz |
| D# | 19.45 Hz | 38.89 Hz | 77.78 Hz | 155.56 Hz | 311.13 Hz | 622.25 Hz | 1244.51 Hz | 2489.02 Hz | 4978.03 Hz |
| E | 20.60 Hz | 41.20 Hz | 82.41 Hz | 164.81 Hz | 329.63 Hz | 659.25 Hz | 1318.51 Hz | 2637.02 Hz | 5274.04 Hz |
| F | 21.83 Hz | 43.65 Hz | 87.31 Hz | 174.61 Hz | 349.23 Hz | 698.46 Hz | 1396.91 Hz | 2793.83 Hz | 5587.65 Hz |
| F# | 23.12 Hz | 46.25 Hz | 92.50 Hz | 185.00 Hz | 369.99 Hz | 739.99 Hz | 1479.98 Hz | 2959.96 Hz | 5919.91 Hz |
| G | 24.50 Hz | 49.00 Hz | 98.00 Hz | 196.00 Hz | 392.00 Hz | 783.99 Hz | 1567.98 Hz | 3135.96 Hz | 6271.93 Hz |
| G# | 25.96 Hz | 51.91 Hz | 103.83 Hz | 207.65 Hz | 415.30 Hz | 830.61 Hz | 1661.22 Hz | 3322.44 Hz | 6644.88 Hz |
| A | 27.50 Hz | 55.00 Hz | 110.00 Hz | 220.00 Hz | 440.00 Hz | 880.00 Hz | 1760.00 Hz | 3520.00 Hz | 7040.00 Hz |
| A# | 29.14 Hz | 58.27 Hz | 116.54 Hz | 233.08 Hz | 466.16 Hz | 932.33 Hz | 1864.66 Hz | 3729.31 Hz | 7458.62 Hz |
| B | 30.87 Hz | 61.74 Hz | 123.47 Hz | 246.94 Hz | 493.88 Hz | 987.77 Hz | 1975.53 Hz | 3951.07 Hz | 7902.13 Hz |

---

## Voltage Calculations (1V/Octave Standard)

### Formula
```
Voltage Offset = Semitones ÷ 12

Example: Perfect fifth (7 semitones)
Offset = 7 ÷ 12 = 0.583V

To tune OSC 2 a fifth above OSC 1:
Add +0.583V to OSC 2's pitch CV input
```

### All Intervals (Voltage Offsets)

| Interval | Semitones | Voltage | Decimal |
|----------|-----------|---------|---------|
| Unison | 0 | 0V | 0.000V |
| Minor 2nd | 1 | 1/12V | 0.083V |
| Major 2nd | 2 | 2/12V | 0.167V |
| Minor 3rd | 3 | 3/12V | 0.250V |
| Major 3rd | 4 | 4/12V | 0.333V |
| Perfect 4th | 5 | 5/12V | 0.417V |
| Tritone | 6 | 6/12V | 0.500V |
| Perfect 5th | 7 | 7/12V | 0.583V |
| Minor 6th | 8 | 8/12V | 0.667V |
| Major 6th | 9 | 9/12V | 0.750V |
| Minor 7th | 10 | 10/12V | 0.833V |
| Major 7th | 11 | 11/12V | 0.917V |
| Octave | 12 | 12/12V | 1.000V |

### Negative Intervals (Below Root)

| Interval | Semitones | Voltage | Use |
|----------|-----------|---------|-----|
| Octave down | -12 | -1V | Sub bass, depth |
| Minor 7th down | -10 | -0.833V | Bass voice leading |
| Perfect 5th down | -7 | -0.583V | Perfect 4th up (inversion) |
| Perfect 4th down | -5 | -0.417V | Perfect 5th up (inversion) |
| Major 3rd down | -4 | -0.333V | Minor 6th up (inversion) |
| Minor 3rd down | -3 | -0.25V | Major 6th up (inversion) |

---

## Cents and Fine-Tuning

### What are Cents?
```
1 semitone = 100 cents
1 cent = 1/100 of a semitone

Used for:
- Fine detuning (chorus/thickness)
- Microtuning
- Precision tuning verification
```

### Common Detune Values

| Cents | Effect | Use |
|-------|--------|-----|
| ±1-5¢ | Subtle chorus | Thickness, warmth, analog feel |
| ±10-15¢ | Noticeable detune | Chorus effect, ensemble |
| ±25¢ | Quarter-tone | Microtonal music, dissonance |
| ±50¢ | Quarter-step | Extreme detune, special effects |

### Cents to Voltage Conversion
```
Voltage = (Cents ÷ 1200) volts

Example: +7 cents detune
Voltage = 7 ÷ 1200 = 0.0058V

Very small adjustments - requires precision CV sources
```

---

## Interval Inversions

### What is Inversion?
Moving the lower note up an octave (or upper note down an octave).

### Inversion Relationships

| Original Interval | Semitones | Inverted Interval | Semitones | Sum |
|------------------|-----------|-------------------|-----------|-----|
| Minor 2nd | 1 | Major 7th | 11 | 12 |
| Major 2nd | 2 | Minor 7th | 10 | 12 |
| Minor 3rd | 3 | Major 6th | 9 | 12 |
| Major 3rd | 4 | Minor 6th | 8 | 12 |
| Perfect 4th | 5 | Perfect 5th | 7 | 12 |
| Tritone | 6 | Tritone | 6 | 12 |
| Perfect 5th | 7 | Perfect 4th | 5 | 12 |

**Rule:** Original + Inversion = 12 semitones (octave)

### Musical Effect of Inversions
- **Dissonances become consonances** (major 2nd → minor 7th gets softer)
- **Consonances stay consonant** (thirds/sixths remain smooth)
- **Perfect intervals stay perfect** (4th ↔ 5th both consonant)
- **Wider intervals often softer** than narrow ones

---

## Common Synthesis Applications

### Power Chords (Root + Fifth)
```
OSC 1: 0V (root)
OSC 2: +0.583V (perfect fifth)

Result: Open, powerful, neither major nor minor
```

### Major Triads (Root + Major Third + Fifth)
```
OSC 1: 0V (root)
OSC 2: +0.333V (major third)
OSC 3: +0.583V (perfect fifth)

Result: Bright, happy, major chord
```

### Minor Triads (Root + Minor Third + Fifth)
```
OSC 1: 0V (root)
OSC 2: +0.25V (minor third)
OSC 3: +0.583V (perfect fifth)

Result: Dark, sad, minor chord
```

### Octave Doubling (Thickness)
```
OSC 1: 0V (root)
OSC 2: +1V (octave above)
OSC 3: -1V (octave below)

Result: Massive, thick, full-spectrum sound
```

### Detune Chorus
```
OSC 1: 0V (root)
OSC 2: +0.006V (~7 cents sharp)
OSC 3: -0.006V (~7 cents flat)

Result: Wide, chorused, thick single note
```

### Tritone (Tension)
```
OSC 1: 0V (root)
OSC 2: +0.5V (tritone)

Result: Very tense, dissonant, wants resolution
Use: Dominant 7th chords, industrial sounds, tension
```

---

## Interval Recognition by Ear

### Perfect Consonances
- **Unison:** Same pitch, complete fusion
- **Octave:** Same note, different register, hollow
- **Fifth:** Open, stable, power chord sound

### Imperfect Consonances
- **Major Third:** Bright, happy, major chord base
- **Minor Third:** Dark, sad, minor chord base
- **Fourth:** Suspension feeling, slightly tense
- **Sixths:** Smooth, pleasant, melodic

### Dissonances
- **Minor Second:** Very harsh, crunchy, adjacent notes
- **Major Second:** Mild tension, stepwise melodic
- **Tritone:** Maximum tension, "devil's interval", needs resolution
- **Sevenths:** Jazzy, sophisticated, tension before octave

---

## Quick Lookup: Interval from Any Root

### From C
| Interval | Note | Semitones | Voltage |
|----------|------|-----------|---------|
| Unison | C | 0 | 0V |
| m2 | C# | 1 | +0.083V |
| M2 | D | 2 | +0.167V |
| m3 | Eb | 3 | +0.25V |
| M3 | E | 4 | +0.333V |
| P4 | F | 5 | +0.417V |
| TT | F# | 6 | +0.5V |
| P5 | G | 7 | +0.583V |
| m6 | Ab | 8 | +0.667V |
| M6 | A | 9 | +0.75V |
| m7 | Bb | 10 | +0.833V |
| M7 | B | 11 | +0.917V |
| P8 | C | 12 | +1V |

### From A (Common Modular Reference)
| Interval | Note | Semitones | Voltage |
|----------|------|-----------|---------|
| Unison | A | 0 | 0V |
| m2 | Bb | 1 | +0.083V |
| M2 | B | 2 | +0.167V |
| m3 | C | 3 | +0.25V |
| M3 | C# | 4 | +0.333V |
| P4 | D | 5 | +0.417V |
| TT | D# | 6 | +0.5V |
| P5 | E | 7 | +0.583V |
| m6 | F | 8 | +0.667V |
| M6 | F# | 9 | +0.75V |
| m7 | G | 10 | +0.833V |
| M7 | G# | 11 | +0.917V |
| P8 | A | 12 | +1V |

---

## Related References

- [Scales Reference](scales_reference.md) - Scales built from intervals
- [Chords Reference](chords_reference.md) - Chords built by stacking intervals
- [Synthesis + Theory Reference](synthesis_theory_reference.md) - Applying intervals in synthesis

---

*This reference is part of the [Music Theory for Synthesis](../README.md) curriculum.*