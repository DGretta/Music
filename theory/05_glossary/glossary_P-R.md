# Glossary: P-R

[← Back to Glossary Index](./glossary.md)

---

## P

### Parallel Motion
**Music Theory:** Voice leading where two or more voices move in the same direction by the same interval. Can create powerful effect but must be used carefully to avoid parallel fifths/octaves in traditional harmony.

**Synthesis:** Multiple CV sequences moving in lockstep. Common in electronic music for thick, unified textures.

**See also:** Voice Leading, Contrary Motion, Oblique Motion

### Partial
**Physics/Synthesis:** Any component frequency in a complex tone. Harmonics are partials with integer relationships to the fundamental. Inharmonic partials don't follow harmonic series (bells, drums).

**See also:** Harmonic, Overtone, Fundamental

### Passing Tone
**Music Theory:** A non-chord tone that fills the space between two chord tones by step. Creates smooth melodic motion.

**Synthesis:** Notes between stable chord tones in monophonic sequences. Use on weak beats or short gate lengths for smoothness.

**See also:** Non-Chord Tone, Chord Tone, Stepwise Motion

### Pattern
**Synthesis:** A repeating sequence of notes, rhythms, or modulation. Foundation of electronic music composition.

**See also:** Sequence, Loop, Ostinato

### Pedal Point
**Music Theory:** A sustained or repeated note (usually in the bass) while harmonies change above it. Creates tension and release.

**Synthesis:** Hold bass CV constant while other oscillators play changing harmonies. Powerful technique for building tension.

**See also:** Drone, Ostinato

### Pentatonic Scale
**Music Theory:** A five-note scale. Major pentatonic: 1-2-3-5-6. Minor pentatonic: 1-♭3-4-5-♭7. Widely used across many musical traditions for its inherent consonance.

**Synthesis:** Quantizer-friendly scale - every note sounds good against the tonic. Excellent for improvisation and random/generative sequences.

**See also:** Scale, Quantizer

### Perfect Interval
**Music Theory:** Intervals that sound the same in major and minor: unison, fourth, fifth, and octave. Cannot be major or minor, only perfect, augmented, or diminished.

**Synthesis:** The most stable intervals for tuning and harmony. Perfect fifth (+0.583V) and perfect fourth (+0.417V) are foundational.

**See also:** Interval, Fourth, Fifth, Octave

### Phrase
**Music Theory:** A musical unit, similar to a sentence in language. Typically 4-8 measures, ending with a cadence.

**Synthesis:** Complete musical idea in a sequence. Consider phrase structure when programming long sequences.

**See also:** Cadence, Measure, Form

### Pitch
**Music Theory:** The perceived highness or lowness of a sound, determined by frequency.

**Synthesis:** Controlled by CV. In 1V/octave, each volt doubles the frequency (one octave higher).

**Frequency:** Higher frequency = higher pitch. A4 = 440 Hz is standard reference.

**See also:** Frequency, CV, Octave

### Pivot Chord
**Music Theory:** A chord that exists in both the original and new key, used to create smooth modulation between keys.

**Synthesis:** Program the shared chord as a transition point between quantizer scale changes or sequence transpositions.

**See also:** Modulation, Common Tone, Key

### Polyphonic
**Synthesis:** Capable of producing multiple notes simultaneously. Requires multiple oscillators/voices. Opposite of monophonic.

**See also:** Monophonic, Voice, Chord

### Portamento
**Synthesis:** Continuous pitch glide between notes. The glide time parameter controls how long the transition takes. Also called "glide" or "lag."

**See also:** Glide, Legato

### PPQN (Pulses Per Quarter Note)
**Synthesis:** Clock resolution standard. 24 PPQN is common in MIDI (24 clock pulses per quarter note). Higher values = more precise timing.

**See also:** Clock, MIDI, Tempo

### Pre-Chorus
**Music Theory:** A transitional section between verse and chorus, building energy and anticipation. Creates contrast and makes the chorus more impactful.

**Synthesis:** Add layers, open filters, or increase modulation to build toward chorus climax.

**See also:** Form, Verse, Chorus, Arrangement

### Progression
**Music Theory:** See Chord Progression. A sequence of chords creating harmonic movement and structure.

**See also:** Chord Progression, Harmony, Cadence

---

## Q

### Quantizer
**Synthesis:** A module that constrains CV to specific pitch values, typically based on a chosen scale. Rounds incoming CV to the nearest scale degree.

**See also:** Scale, CV, Pitch

### Quarter Note
**Music Theory:** A note lasting one beat in 4/4 time, or 1/4 the duration of a whole note. The basic beat unit in most Western music.

**Synthesis:** In 16-step sequencer at 120 BPM, quarter note = 2 steps (if running at 16th note resolution).

**See also:** Note Value, Beat, Eighth Note

---

## R

### Range
**Music Theory:** The span from the lowest to highest note in a melody, voice part, or instrument's capability.

**Synthesis:** Important for oscillator tracking limits and melodic programming. Most oscillators track accurately over 5-8 octaves.

**See also:** Tessitura, Octave

### Ratchet
**Synthesis:** Rapid repetition of a single step in a sequence, creating a "machine gun" effect. Useful for fills, rolls, and rhythmic interest.

**See also:** Rhythm, Gate, Sequence

### Relative Major/Minor
**Music Theory:** Pairs of major and minor keys that share the same key signature (same notes, different tonic). C major and A minor are relative keys.

**Synthesis:** Same quantizer scale programming, different tonal center. A minor = -0.25V from C major tonic.

**See also:** Key, Parallel Major/Minor, Tonic

### Resolution
**Music Theory:** The movement from dissonance to consonance, or from tension to stability. Essential for creating musical satisfaction.

**Synthesis:** Program tension notes (non-chord tones, dissonances) that resolve to stable chord tones or consonant intervals.

**See also:** Dissonance, Consonance, Cadence

### Rest
**Music Theory:** A period of silence in music, with duration values matching note values (whole rest, half rest, quarter rest, etc.).

**Synthesis:** Low or zero gate signal. Silence is as important as sound for rhythm, phrasing, and dynamics.

**See also:** Gate, Duration, Note Value

### Retrograde
**Music Theory:** A melody played backwards. Compositional technique for variation and development.

**Synthesis:** Reverse sequence playback direction or manually reprogram sequence in reverse order.

**See also:** Inversion, Augmentation, Diminution

### Rhythm
**Music Theory:** The pattern of durations and accents in music, creating movement and groove. The time-based aspect of music.

**Synthesis:** Programmed through gate patterns, lengths, and clock divisions. Foundation of all electronic music.

**See also:** Beat, Gate, Duration, Meter

### Riff
**Music Theory:** A short, repeated musical phrase, typically memorable and catchy. Often forms the backbone of a song.

**Synthesis:** Core sequence or melodic pattern that defines the track. Often the first element composed.

**See also:** Motif, Ostinato, Hook

### Root (Note)
**Music Theory:** The fundamental note of a chord, giving the chord its name. C is the root of all C chords (C major, C minor, C7, etc.).

**Synthesis:** Reference point (often 0V) for chord voltage offsets. Bass typically plays root notes for harmonic stability.

**See also:** Chord, Bass Note, Tonic

### Root Position
**Music Theory:** A chord voicing where the root is the lowest note. Contrast with inversions.

**Synthesis:** Most stable voicing. C major root position: C (0V), E (+0.333V), G (+0.583V).

**See also:** Chord, Inversion, Voicing

---

[← Back to Glossary Index](./glossary.md)
