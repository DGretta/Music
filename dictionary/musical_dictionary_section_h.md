# Musical Dictionary - Section H
*Essential "H" Terms for Synthesis, Modular, and Production*

---

## H

**HALF-WAVE RECTIFIER**
Circuit that removes the negative portions of an AC signal, passing only the positive half-cycles. Simpler than full-wave rectifier but less efficient for signal processing applications.
- *Related:* Full-Wave Rectifier (Section F), Signal Processing, AC/DC, Envelope Follower
- *Function:* Clips negative signal portions to zero, preserves positive portions unchanged
- *Applications:* Simple envelope followers, audio-to-CV conversion, signal analysis
- *Efficiency:* Less efficient than full-wave rectifier as half the signal information is lost
- *Circuit:* Uses single diode or simple op-amp configuration
- *Musical use:* Creates different envelope following characteristics than full-wave designs
- *Comparison:* Full-wave preserves more signal information by inverting rather than removing negative portions

**HARMONIC**
Frequency that is an integer multiple of a fundamental frequency. Foundation concept for understanding timbre, chord relationships, and synthesis.
- *Mathematical relationship:* 2nd harmonic = 2× fundamental, 3rd harmonic = 3× fundamental, etc.
- *Related:* Fundamental, Overtone, Partial, Timbre, Harmonic Series
- *Musical intervals:* 2nd harmonic = octave, 3rd harmonic = octave + fifth, 4th harmonic = two octaves
- *Timbre creation:* Different combinations of harmonics create different instrument timbres
- *Even vs odd:* Even harmonics (2nd, 4th, 6th) sound warm; odd harmonics (3rd, 5th, 7th) can sound harsh
- *Synthesis applications:* Additive synthesis builds sounds from individual harmonics, subtractive synthesis removes harmonics

**HARMONIZER**
Effect processor that generates harmonized versions of input signals by pitch-shifting to create chord-like sounds or parallel melodies.
- *Related:* Pitch Shifting, Harmony, Chord, Voice Leading
- *Function:* Creates multiple pitch-shifted copies of input signal at musical intervals
- *Applications:* Vocal harmonies, guitar harmonization, synthetic choir effects
- *Intelligence levels:* Simple (fixed intervals) to advanced (key-aware harmonic progressions)
- *Parameters:* Harmony intervals, mix levels, formant correction, delay compensation
- *Creative use:* Thickening single-line melodies, creating impossible vocal arrangements

**HARD SYNC**
Oscillator technique where one oscillator (slave) is forced to restart its cycle whenever another oscillator (master) completes its cycle, creating distinctive buzzy, aggressive timbres.
- *Related:* Oscillator, Sync, Waveform, Harmonic Content
- *Character:* Produces bright, harsh, buzzy sounds with rich harmonic content
- *Control:* Master oscillator frequency controls perceived pitch, slave frequency controls harmonic content
- *Musical applications:* Aggressive leads, bass sounds, sync sweeps (modulating slave frequency)
- *Technical:* Slave oscillator waveform is "reset" at master oscillator zero crossings
- *Famous sounds:* Classic analog synthesizer leads, acid-style sequences

**HEADPHONES**
Personal audio monitoring devices essential for detailed listening, mixing, and performance applications. Critical tool for electronic music production.
- *Types:* Open-back (natural sound, bleed), closed-back (isolation, bass emphasis), in-ear monitors
- *Related:* Monitoring, Mixing, Impedance, Frequency Response
- *Mixing considerations:* Different frequency response than speakers, can cause mixing errors
- *Advantages:* Detailed listening, no room acoustics influence, privacy, portability
- *Limitations:* Stereo field differences, bass response variations, fatigue over long sessions
- *Professional use:* Reference headphones for critical listening, mixing headphones for balance

**HERTZ (Hz)**
Unit of frequency measurement indicating cycles per second. Fundamental unit for all audio and synthesis frequency specifications.
- *Related:* Frequency, Pitch, Wavelength, Period
- *Musical examples:* A440 = 440Hz, middle C ≈ 262Hz
- *Hearing range:* Human hearing approximately 20Hz to 20,000Hz (20kHz)
- *Synthesis context:* Oscillator frequencies, filter cutoff frequencies, LFO rates
- *Multiples:* kHz = 1,000Hz (kilohertz), MHz = 1,000,000Hz (megahertz)
- *Historical:* Named after Heinrich Hertz, 19th-century physicist who studied electromagnetic waves

**HIGH-PASS/HPF (HIGH-PASS FILTER)**
Filter that allows high frequencies to pass while attenuating low frequencies below the cutoff point. Essential tool for removing unwanted low-end content and shaping tonal balance.
- *Function:* Opposite of low-pass filter - removes bass, preserves treble
- *Related:* Low-Pass Filter, Cutoff Frequency, Filter, EQ
- *Applications:* Remove muddiness, eliminate rumble, create thin/hollow sounds
- *Slopes:* 6dB, 12dB, 18dB, 24dB per octave rolloff rates (same as other filter types)
- *Creative use:* Radio/telephone effects, emphasizing attack transients, filter sweeps
- *Mix technique:* High-pass everything except kick and bass to clean up low-end clutter
- *Synthesis context:* Shaping oscillator output, processing external audio inputs

**HOLD**
Function that maintains or sustains a value indefinitely until updated or reset. Appears in multiple synthesis contexts with similar underlying concept.
- **Sample & Hold:** Captures input value at trigger moment and holds until next trigger
- **Envelope Hold:** Sustains current envelope level indefinitely (freeze current value)
- **MIDI Hold/Sustain:** Sustain pedal function maintaining notes after key release
- *Related:* Sample & Hold, Sustain, Freeze, Memory, Latch
- *Applications:* Creating stepped random voltages, extending note durations, capturing modulation values
- *Control:* Usually triggered by gate or trigger signals, reset by specific inputs
- *Creative potential:* Rhythmic stepped patterns, extended sustains, voltage storage

**HP**
Abbreviation with multiple meanings in audio contexts, requiring attention to context for proper interpretation.
- **High-Pass (filter context):** HP filter, high-pass processing
- **Headphones (monitoring context):** HP amplifier, HP output, HP monitoring
- **Horsepower (power context):** Amplifier power ratings (less common in synthesis)
- *Related:* Context-dependent interpretation, abbreviation clarity
- *Usage note:* Always specify context when using abbreviation to avoid confusion
- *Professional practice:* Write out full term when clarity is important

**HYSTERESIS**
Switching behavior where the turn-on and turn-off thresholds are different, preventing rapid oscillation around a single threshold point. Important for clean trigger and gate processing.
- *Related:* Threshold, Trigger, Gate, Switching, Noise Immunity
- *Function:* Creates "dead zone" between on and off states to prevent false triggering
- *Technical example:* Gate turns on at +3V but doesn't turn off until +1V
- *Applications:* Clean trigger generation, noise immunity, comparator circuits
- *Musical benefit:* Prevents retriggering from noisy or slowly changing signals
- *Implementation:* Built into many trigger and gate processing circuits

**Hz/V (HERTZ PER VOLT)**
Alternative frequency control standard where each volt of control signal represents a specific frequency increment in Hz rather than musical intervals.
- *Contrast with 1V/octave:* Linear frequency relationship vs logarithmic (musical) relationship
- *Related:* 1V/Octave, Control Voltage, Frequency Control, Vintage Synthesizers
- *Manufacturers:* Korg and Yamaha used Hz/V, most others adopted 1V/octave
- *Incompatibility:* Hz/V and 1V/octave systems don't track properly together
- *Conversion:* Requires converter modules to interface between standards
- *Modern context:* Most contemporary gear uses 1V/octave standard
- *Legacy significance:* Understanding helps integrate vintage gear into modern systems

---

## Alternative Options

For different learning approaches to "H" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free online frequency calculators for Hz/frequency relationships, headphone frequency response measurement apps, simple harmonic series demonstrations
- **Different character:** Hands-on oscilloscope work to visualize half-wave vs full-wave rectification, vintage synthesizer exploration for Hz/V vs 1V/octave differences
- **Premium:** Professional acoustics courses covering harmonic series theory, advanced mixing workshops focusing on high-pass filtering techniques, modular synthesis masterclasses exploring hard sync applications

**Practical Exploration:**
- **Harmonic series visualization:** Use spectrum analyzer to study harmonic content of different waveforms
- **Hard sync experiments:** Sweep slave oscillator frequency while hard synced to master for classic sync sounds
- **High-pass mixing practice:** Apply high-pass filters to full mix elements except bass and kick
- **Hold function patching:** Use sample & hold with random voltage and clock for stepped random sequences
- **Hz/V compatibility testing:** Test vintage gear compatibility with modern 1V/octave systems
- **Hysteresis demonstration:** Compare trigger circuits with and without hysteresis using noisy signals

**Advanced Study:**
- **Half-wave vs full-wave analysis:** Build and compare both rectifier types for envelope following applications
- **Harmonizer algorithm design:** Study pitch-shifting mathematics and formant preservation
- **Headphone mixing translation:** Learn techniques for translating headphone mixes to speakers
- **Hertz/pitch relationship mathematics:** Master the mathematical relationships between frequency and musical intervals
- **Hard sync circuit analysis:** Study oscillator sync implementations in classic synthesizers

**Frequency Reference Chart:**
- **Sub-bass:** 20-60Hz (feel more than hear)
- **Bass:** 60-200Hz (fundamental bass content)
- **Low-mids:** 200-500Hz (warmth, body)
- **Mids:** 500Hz-2kHz (presence, clarity)
- **High-mids:** 2kHz-8kHz (definition, attack)
- **Highs:** 8kHz-20kHz (air, sparkle)

---

*This "H" section covers essential frequency concepts (hertz, harmonics), signal processing techniques (rectifiers, high-pass filters), synthesis methods (hard sync, hold functions), and technical standards (Hz/V), providing comprehensive understanding from basic frequency measurement to advanced signal processing applications.*