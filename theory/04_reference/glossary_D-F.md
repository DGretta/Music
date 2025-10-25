# Glossary: D-F

[← Back to Glossary Index](./glossary.md)

---

## D

### Deceptive Cadence
**Music Theory:** A cadence where the expected tonic chord (I) is replaced by another chord, typically vi (submediant). The V-vi progression creates surprise and continuation rather than resolution.

**Synthesis:** Useful for avoiding predictable endings. In monophonic bass sequences, move to the sixth scale degree instead of returning to root.

**See also:** Cadence, Progression, Resolution

### Degree (Scale Degree)
**Music Theory:** The position of a note within a scale, numbered 1-7 (or 1-8 including octave). Example: in C major, C=1, D=2, E=3, F=4, G=5, A=6, B=7.

**Synthesis:** Important for quantizer programming and understanding chord progressions. Roman numerals (I, ii, iii, IV, V, vi, vii°) indicate chords built on scale degrees.

**See also:** Scale, Tonic, Roman Numeral Analysis

### Detune
**Synthesis:** Slight pitch variation between oscillators or voices. Creates thickness, movement, and chorus-like effects. Typical range: ±5-50 cents.

**Frequency:** Beating occurs when frequencies are close but not identical. Rate of beating = difference in Hz between the two pitches.

**See also:** Cent, Chorus, Unison

### Diatonic
**Music Theory:** Using only the notes belonging to a particular scale or key. Opposite of chromatic. Example: in C major, all white keys on piano are diatonic.

**Synthesis:** Quantizer scales are typically diatonic - they snap CV to scale-appropriate notes. Understanding diatonic vs. chromatic helps with melody and harmony programming.

**See also:** Scale, Chromatic, Quantizer

### Diminished Chord
**Music Theory:** A triad consisting of a root, minor third, and diminished fifth. Formula: 0-3-6 semitones. Creates strong tension and typically resolves to tonic or dominant.

**Synthesis:** C diminished = C (0V), Eb (+0.25V), Gb (+0.5V). Highly unstable, used for tension before resolution.

**See also:** Chord, Triad, Interval

### Diminished Interval
**Music Theory:** An interval that is one semitone smaller than a minor or perfect interval. Example: diminished fifth (tritone) = 6 semitones.

**Synthesis:** Voltage: diminished fifth = +0.5V from root. Same pitch as augmented fourth (enharmonic equivalent).

**See also:** Interval, Augmented Interval, Tritone

### Dissonance
**Music Theory:** Unstable, tense intervals that create a sense of needing resolution. Includes tritones, major/minor seconds, and major/minor sevenths.

**Synthesis:** Dissonant intervals create tension and movement in sequences. Use for passing tones, approach notes, or climactic moments requiring resolution.

**Frequency:** Complex frequency ratios create beating and overlapping harmonics that sound unstable.

**See also:** Consonance, Resolution, Tritone

### Dominant
**Music Theory:** The fifth scale degree and the chord built on it (V). Creates tension that strongly resolves to tonic (I). Foundation of functional harmony.

**Synthesis:** In C major: G is dominant. Voltage: +0.583V (7 semitones). Essential for establishing key and creating tension-resolution cycles.

**See also:** Tonic, Subdominant, Scale Degree, Cadence

### Dotted Note
**Music Theory:** A note with increased duration by adding half its original value. Dotted quarter = quarter + eighth. Creates rhythmic interest and syncopation.

**Synthesis:** Program gate length as 1.5x the base note value. Dotted eighth in 16-step sequencer = 3 steps instead of 2.

**See also:** Note Value, Gate, Duration

### Downbeat
**Music Theory:** The first beat of a measure, typically the strongest metric position. In 4/4 time, beat 1 is the downbeat.

**Synthesis:** Align important harmonic changes, bass notes, or kicks to downbeats for rhythmic strength. Sequencer step 1, 5, 9, 13 in 16-step pattern.

**See also:** Beat, Measure, Accent

### Drone
**Music Theory:** A sustained or repeated note that continues throughout a passage or entire piece. Common in Indian classical music and bagpipe traditions.

**Synthesis:** Hold a single CV value to oscillator while other voices change. Creates tonal center and harmonic reference point. Useful in ambient and experimental music.

**See also:** Pedal Point, Ostinato, Tonic

### Duration
**Music Theory:** The length of time a note or rest is held. Measured in beats or fractions of beats.

**Synthesis:** Controlled by gate length. Longer gate = longer note duration. ADSR envelope also affects perceived duration.

**See also:** Gate, Note Value, Envelope

### Dynamics
**Music Theory:** The volume or intensity of sound. Range from pianissimo (very soft) to fortissimo (very loud). Creates expression and emotional impact.

**Synthesis:** Controlled by VCA (Voltage Controlled Amplifier). CV modulation of amplitude, velocity values, or envelope levels determines dynamics.

**See also:** VCA, Velocity, Envelope, Accent

---

## E

### Eighth Note
**Music Theory:** A note lasting half the duration of a quarter note. In 4/4 time, eight eighth notes = one measure. Notated with a flag or beam.

**Synthesis:** In 16-step sequencer at 120 BPM, each step = eighth note. Two steps = quarter note.

**See also:** Note Value, Quarter Note, Sixteenth Note

### Enharmonic
**Music Theory:** Notes that sound the same but are written differently. Example: C# and Db, F# and Gb. Same pitch, different spelling.

**Synthesis:** In 1V/octave, enharmonic notes produce identical voltage: C# and Db both = +0.083V from C. Quantizers typically choose one spelling per scale.

**Frequency:** Enharmonic notes have identical frequency. In equal temperament, C# = Db = 277.18 Hz.

**See also:** Accidental, Semitone, Equal Temperament

### Envelope
**Synthesis:** A time-varying control signal that shapes a parameter over time. Most common: ADSR (Attack, Decay, Sustain, Release). Applied to amplitude, filter cutoff, pitch, etc.

**See also:** ADSR, Gate, VCA, VCF

### Equal Temperament
**Music Theory:** A tuning system where the octave is divided into 12 equal semitones. Standard tuning for most Western music since ~1900.

**Synthesis:** The 1V/octave standard assumes equal temperament. Each semitone = exactly 1/12 volt.

**Frequency:** Each semitone = frequency ratio of 2^(1/12) ≈ 1.05946. Compromises pure intervals for equal modulation capability.

**See also:** Just Intonation, Semitone, Tuning

### Extended Chord
**Music Theory:** Chords with added notes beyond the basic triad, typically 7ths, 9ths, 11ths, or 13ths. Creates richer, more complex harmony.

**Synthesis:** Challenging for monophonic systems - must arpeggiate or use multiple oscillators. Common in jazz-influenced electronic music.

**See also:** Chord, Seventh Chord, Compound Interval

---

## F

### Fifth
**Music Theory:** The interval spanning five scale degrees or seven semitones. Perfect fifth is the most consonant interval after octave and unison.

**Synthesis:** Voltage: +0.583V (7 semitones from root). Essential chord tone and harmonic foundation.

**Frequency:** Perfect fifth = 3:2 ratio (just intonation) or 2^(7/12) ≈ 1.498 (equal temperament). Extremely strong consonance.

**See also:** Interval, Perfect Interval, Consonance

### Filter
**Synthesis:** Circuit that removes or emphasizes specific frequencies. Types include low-pass (removes highs), high-pass (removes lows), band-pass (passes middle range), and notch (removes narrow band).

**See also:** Cutoff, Resonance, VCF

### Flat (♭)
**Music Theory:** Accidental that lowers a note by one semitone. Example: Bb is one semitone below B.

**Synthesis:** Voltage: -0.083V from the natural note. Bb = -0.083V from B or +0.833V from C (enharmonic with A#).

**See also:** Accidental, Sharp, Semitone

### Form
**Music Theory:** The overall structure or architecture of a musical composition. Common forms include verse-chorus, AABA, 12-bar blues, sonata, rondo.

**Synthesis:** Large-scale arrangement structure. Electronic music often uses build-drop, loop-based, or progressive forms.

**See also:** Section, Arrangement, Structure

### Fourth
**Music Theory:** The interval spanning four scale degrees or five semitones. Perfect fourth is consonant and stable.

**Synthesis:** Voltage: +0.417V (5 semitones from root). Important melodic interval.

**Frequency:** Perfect fourth = 4:3 ratio (just intonation) or 2^(5/12) ≈ 1.335 (equal temperament).

**See also:** Interval, Perfect Interval, Consonance

### Frequency
**Physics/Synthesis:** The rate of vibration measured in Hertz (Hz), or cycles per second. Determines perceived pitch. A4 = 440 Hz is standard tuning reference.

**Music Theory:** Higher frequency = higher pitch. Each octave doubles the frequency.

**See also:** Pitch, Hertz, Octave, A440

### Fundamental
**Physics/Synthesis:** The lowest frequency in a harmonic series, determining the perceived pitch. Also called the first harmonic.

**See also:** Harmonic Series, Overtone, Partial

---

[← Back to Glossary Index](./glossary.md)
