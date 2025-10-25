# Glossary: S-U

[← Back to Glossary Index](./glossary.md)

---

## S

### Scale
**Music Theory:** An ordered collection of pitches, typically spanning an octave. Foundation for melody and harmony. Common scales: major, minor (natural/harmonic/melodic), pentatonic, chromatic.

**Synthesis:** Programs quantizer output. Understanding scales is essential for creating melodies and harmonies that work together.

**See also:** Major Scale, Minor Scale, Quantizer, Key

### Scale Degree
**Music Theory:** The position of a note within a scale, numbered 1-7. Each degree has a name: 1=Tonic, 2=Supertonic, 3=Mediant, 4=Subdominant, 5=Dominant, 6=Submediant, 7=Leading Tone.

**See also:** Tonic, Dominant, Subdominant, Mediant, Leading Tone

### Semitone
**Music Theory:** The smallest interval in Western music, equal to one half step. The distance between adjacent keys on a piano.

**Synthesis:** Voltage: 0.083V (1/12 volt in 1V/octave standard). The fundamental unit of pitch in modular synthesis.

**Frequency:** Ratio of 2^(1/12) ≈ 1.05946 in equal temperament.

**See also:** Half Step, Whole Step, Interval

### Sequence
**Synthesis:** A programmed series of pitches (CV) and/or rhythms (gates). The primary composition tool in modular and electronic music.

**See also:** Pattern, CV, Gate, Sequencer

### Sequence (Music Theory)
**Music Theory:** A melodic or harmonic pattern that repeats at different pitch levels. Common compositional technique for development.

**Synthesis:** Transpose a pattern up or down by specific intervals. Can be programmed using voltage offsets or transposition modules.

**See also:** Transposition, Pattern, Motif

### Seventh Chord
**Music Theory:** A chord consisting of a triad plus the seventh scale degree above the root. Types include major 7th, minor 7th, dominant 7th, diminished 7th, half-diminished 7th.

**Synthesis:** Four-note chord requiring multiple oscillators or arpeggiation. Adds color and tension compared to triads.

**See also:** Chord, Extended Chord, Triad

### Sharp (♯)
**Music Theory:** Accidental that raises a note by one semitone. Example: C# is one semitone above C.

**Synthesis:** Voltage: +0.083V from the natural note. C# = +0.083V from C.

**See also:** Accidental, Flat, Semitone

### Sixteenth Note
**Music Theory:** A note lasting 1/4 beat in 4/4 time, or 1/16 the duration of a whole note. Often used for fast passages and subdivisions.

**Synthesis:** In 16-step sequencer at 120 BPM, each step = sixteenth note when sequencer runs at 16th note clock division.

**See also:** Note Value, Eighth Note, Quarter Note

### Staccato
**Music Theory:** Short, detached playing with silence between notes. Opposite of legato. Notated with a dot above/below the note.

**Synthesis:** Short gate length - typically 10-30% of the step duration. Creates rhythmic articulation and space.

**See also:** Legato, Gate, Articulation

### Stepwise Motion
**Music Theory:** Melodic movement by scale steps (seconds) rather than leaps. Creates smooth, singable melodies.

**Synthesis:** CV changes of ±0.083V to ±0.167V (1-2 semitones). Foundation of effective monophonic melodies.

**See also:** Leap, Melody, Passing Tone

### Subdominant
**Music Theory:** The fourth scale degree and the chord built on it (IV). Provides contrast to tonic and dominant, often moving from tonic to dominant or vice versa.

**Synthesis:** In C major: F is subdominant. Voltage: +0.417V (5 semitones). Common in cadences and progressions.

**See also:** Tonic, Dominant, Scale Degree, Cadence

### Submediant
**Music Theory:** The sixth scale degree and the chord built on it (vi in major, VI in minor). Often used in deceptive cadences.

**Synthesis:** In C major: A is submediant. Voltage: +0.75V (9 semitones). The vi chord is the relative minor.

**See also:** Scale Degree, Relative Minor, Deceptive Cadence

### Supertonic
**Music Theory:** The second scale degree and the chord built on it (ii in major, ii° in minor). Often moves to dominant in progressions.

**Synthesis:** In C major: D is supertonic. Voltage: +0.167V (2 semitones). The ii chord is common in ii-V-I progressions.

**See also:** Scale Degree, Progression

### Suspension
**Music Theory:** A non-chord tone where a note from the previous chord is held into the next chord, creating dissonance that resolves downward by step.

**Synthesis:** Hold gate/CV from previous step into new harmony, then resolve downward. Creates expressive tension.

**See also:** Non-Chord Tone, Resolution, Voice Leading

### Sustain
**Music Theory:** The continuation of a sound after its initial attack. In ADSR envelope, the level held during a note.

**Synthesis:** The "S" in ADSR envelope. Sustain level (not duration) - stays at this level as long as gate is high.

**See also:** ADSR, Envelope, Gate

### Swing
**Music Theory/Synthesis:** Rhythmic feel where alternating notes are played with unequal timing - typically long-short pattern. Creates groove and humanization.

**Synthesis:** Programmed by delaying every other note or using dedicated swing/shuffle parameter. Common values: 50% (straight) to 75% (heavy swing).

**See also:** Rhythm, Groove, Shuffle

### Sync (Oscillator)
**Synthesis:** Hard sync forces one oscillator to restart its waveform cycle when another oscillator completes its cycle. Creates harmonic timbres and sweeping effects.

**See also:** Oscillator, Timbre, Harmonic

### Sync (Clock)
**Synthesis:** Timing synchronization between multiple devices or modules. Common standards: MIDI clock, DIN sync, analog clock, CV clock.

**See also:** Clock, BPM, Tempo

### Syncopation
**Music Theory:** Placing rhythmic emphasis on weak beats or off-beats. Creates rhythmic interest and forward motion.

**Synthesis:** Program accents or notes on unexpected beats - offbeats, anticipations, or between-beat subdivisions.

**See also:** Rhythm, Accent, Beat

---

## T

### Tempo
**Music Theory:** The speed of music, measured in BPM (beats per minute). Determines how fast the beat moves.

**Synthesis:** Clock rate for sequencers and time-based modules. Adjusting tempo affects all synced modules simultaneously.

**See also:** BPM, Clock, Beat

### Tension
**Music Theory:** Musical instability created by dissonance, non-chord tones, or harmonies that require resolution. Essential for creating emotional impact and forward motion.

**Synthesis:** Program dissonant intervals, non-chord tones, or move away from tonic to create tension requiring resolution.

**See also:** Resolution, Dissonance, Dominant

### Tessitura
**Music Theory:** The range where most of a melody lies, distinct from the total range. The comfortable or typical pitch area.

**Synthesis:** Consider when programming melodies - staying in a consistent tessitura creates cohesion, while shifting tessitura creates drama.

**See also:** Range, Melody, Register

### Theme
**Music Theory:** A complete musical idea or melody that serves as the main subject of a piece. More developed than a motif.

**Synthesis:** Main sequence or melodic material that defines a track. Often introduced early and developed throughout.

**See also:** Motif, Melody, Development

### Third
**Music Theory:** The interval spanning three scale degrees or 3-4 semitones. Defines chord quality as major (4 semitones) or minor (3 semitones).

**Synthesis:** Major third = +0.333V, minor third = +0.25V. Fundamental to harmony and chord construction.

**Frequency:** Major third = 5:4 (just) or 2^(4/12) (equal). Minor third = 6:5 (just) or 2^(3/12) (equal).

**See also:** Interval, Major Third, Minor Third

### Tie
**Music Theory:** A curved line connecting two notes of the same pitch, combining their durations. Only the first note is attacked.

**Synthesis:** Extended gate length across multiple steps without retriggering. Creates sustained notes over bar lines or beat divisions.

**See also:** Gate, Duration, Sustain

### Timbre
**Music Theory/Synthesis:** The tonal quality or "color" of a sound that distinguishes different instruments or voices playing the same pitch. Determined by the harmonic content and envelope.

**Synthesis:** Shaped by waveform selection, filter settings, harmonics, and envelope characteristics. The synthesis equivalent of instrument identity.

**See also:** Harmonic Series, Filter, Waveform, Envelope

### Time Signature
**Music Theory:** Notation indicating meter - how many beats per measure and which note value gets the beat. Example: 4/4 = four quarter notes per measure.

**Synthesis:** Determines sequence length and accent patterns. Common electronic music signatures: 4/4, 3/4, 6/8, 7/8, 5/4.

**See also:** Meter, Beat, Measure

### Tonic
**Music Theory:** The first scale degree and the chord built on it (I). The home base or point of greatest stability in a key.

**Synthesis:** Reference point for voltage calculations (often 0V). All other notes and chords defined in relation to tonic.

**See also:** Key, Scale Degree, Dominant, Resolution

### Transposition
**Music Theory:** Moving a melody, chord, or entire piece to a different pitch level while maintaining interval relationships.

**Synthesis:** Add/subtract voltage offset to entire CV sequence, or reprogram quantizer to new key. Preserves musical relationships in new key.

**See also:** Key, Modulation, CV

### Tremolo
**Music Theory/Synthesis:** Rapid variation in amplitude (volume), creating a wavering effect. Often confused with vibrato (pitch variation).

**Synthesis:** LFO modulating VCA or amplitude. Rate typically 4-8 Hz for musical effect.

**See also:** Vibrato, LFO, VCA, Modulation

### Triad
**Music Theory:** A three-note chord consisting of a root, third, and fifth. Four types: major, minor, diminished, augmented. Foundation of Western harmony.

**Synthesis:** Basic chord structure requiring three oscillators or arpeggiation in monophonic systems.

**See also:** Chord, Major Chord, Minor Chord

### Trigger
**Synthesis:** A brief pulse that initiates an action, typically starting an envelope. Shorter duration than a gate. Can be generated from gates using gate-to-trigger converters.

**See also:** Gate, Envelope, Clock

### Trill
**Music Theory:** Rapid alternation between two adjacent notes. Creates ornamental embellishment.

**Synthesis:** Fast alternating sequence between two pitches, or dedicated trill module/effect. Often at 16th or 32nd note speed.

**See also:** Ornament, Vibrato

### Triplet
**Music Theory:** A group of three notes played in the time normally occupied by two notes of the same value. Creates a rolling, ternary feel.

**Synthesis:** Clock division by 3. Program as 3 notes per beat where normally 2 would fit. Common in compound meters.

**See also:** Note Value, Rhythm, Compound Meter

### Tritone
**Music Theory:** An interval of exactly three whole steps (6 semitones), or augmented fourth/diminished fifth. The most dissonant interval, dividing the octave exactly in half.

**Synthesis:** Voltage: +0.5V (6 semitones from root). Maximum tension, requires resolution.

**Frequency:** Ratio of √2:1 ≈ 1.414:1. The only interval that is its own inversion.

**See also:** Interval, Dissonance, Augmented Interval, Diminished Interval

### Tuning
**Music Theory/Synthesis:** The process of adjusting pitches to specific frequency relationships. Systems include equal temperament, just intonation, and various historical temperaments.

**Synthesis:** Oscillator calibration using tuners or by ear. 1V/octave standard assumes equal temperament tuning.

**See also:** Equal Temperament, Just Intonation, Pitch, A440

---

## U

### Unison
**Music Theory:** Two or more voices/instruments playing the same pitch. The interval of zero semitones.

**Synthesis:** Multiple oscillators at same pitch. Often intentionally detuned slightly for chorus effect and thickness.

**Frequency:** Ratio of 1:1 - identical frequencies.

**See also:** Interval, Octave, Detune

### Upbeat
**Music Theory:** Weak beats or the beat immediately before a strong beat. Also refers to the pickup notes before the first full measure.

**Synthesis:** Beats 2 and 4 in 4/4 time, or any beat between downbeats. Often emphasized in electronic music with hi-hats or claps.

**See also:** Downbeat, Beat, Pickup

---

[← Back to Glossary Index](./glossary.md)
