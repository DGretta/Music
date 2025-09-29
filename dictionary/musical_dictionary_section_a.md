# Musical Dictionary - Section A
*Essential "A" Terms for Synthesis, Modular, and Production*

---

## A

**ACID**
The characteristic squelchy, resonant sound associated with the Roland TB-303, now applied to any synthesis with prominent filter resonance and envelope-controlled cutoff frequency. Created by low-pass filter cutoff modulation with high resonance settings.
- *Related:* Filter Resonance, Envelope, TB-303, Squelch
- *Common confusion:* Not limited to 303-type synthesizers - any filter with resonance can create acid-style sounds
- *Why it matters:* Understanding acid techniques opens up entire genres of electronic music production

**ADDITIVE SYNTHESIS**
Synthesis method that builds complex sounds by combining multiple simple waveforms (usually sine waves) at different frequencies and amplitudes. Each component is called a "partial" or "harmonic."
- *Contrast with:* **Subtractive synthesis** (starts with complex waveform, removes frequencies with filters), **FM synthesis** (uses frequency modulation to create harmonics)
- *Related:* Harmonic, Overtone, Partial, Spectrum
- *Classic example:* Hammond organ drawbars, Kawai K5000 series
- *Why it's powerful:* Theoretically can recreate any sound by combining enough sine waves (Fourier synthesis)

**ADSR**
Attack-Decay-Sustain-Release - the four stages of the most common envelope generator type.
- **Attack:** Rise time from zero to peak level when triggered
- **Decay:** Fall time from peak to sustain level  
- **Sustain:** Hold level while gate signal is active (this is a LEVEL, not a time)
- **Release:** Fall time to zero when gate signal ends
- *Related:* Envelope Generator, Gate, VCA, Filter Envelope
- *Common mistake:* Thinking sustain is a time parameter - it's the level the envelope holds at
- *Practical application:* ADSR envelopes control volume (VCA) or filter brightness over time

**AFTERTOUCH**  
Pressure-sensitive control available on many keyboards after a key is pressed. Allows expressive control of parameters through finger pressure changes.
- **Channel Aftertouch:** Same pressure value applied to all pressed keys
- **Polyphonic Aftertouch:** Individual pressure control per key (rare and expensive)
- *Related:* MIDI Controller, Expression, Modulation, Performance Control
- *Common use:* Filter cutoff control for real-time brightness changes, vibrato depth
- *Performance tip:* Practice applying aftertouch gradually for musical expression

**ALGORITHM**
In digital synthesis, a mathematical formula or process that generates or processes sound. Different algorithms create different synthesis methods or tonal characteristics.
- *Related:* Digital Synthesis, FM Synthesis, DSP, Model
- *FM context:* DX7 algorithms determine how operators modulate each other
- *Modern context:* Mutable Plaits contains 16 different synthesis algorithms from FM to granular
- *Why it matters:* Each algorithm optimizes controls for different sonic results

**ALIASING**
Digital distortion that occurs when sample rates are too low to accurately represent high-frequency content, causing false frequencies (aliases) to appear in the signal.
- *Technical cause:* Violating the Nyquist theorem (sample rate must be >2x highest frequency)
- *Related:* Sample Rate, Nyquist Frequency, Digital Audio, Anti-aliasing Filter
- *Prevention:* Anti-aliasing filters and oversampling in digital systems
- *Audible result:* Harsh, metallic distortion especially noticeable with bright sounds
- *Creative use:* Some artists intentionally use aliasing for lo-fi or aggressive digital textures

**AM (AMPLITUDE MODULATION)**
Using one signal to control the amplitude (volume) of another signal. Creates tremolo effects at slow rates, or complex harmonic content at audio rates.
- *Low-rate AM:* Creates tremolo (wobbling volume effect)
- *Audio-rate AM:* Creates ring modulation effects and new harmonic content
- *Related:* Ring Modulation, Tremolo, VCA, Modulation
- *Mathematical result:* Creates sum and difference frequencies of the two signals
- *Classic use:* Hammond organ vibrato, ring modulation effects

**AMPLIFIER**
A circuit that increases signal level. In synthesis context, often refers to VCAs (Voltage Controlled Amplifiers) that control volume using CV inputs.
- *Related:* VCA, Gain, Volume, CV, Signal Level
- *Types:* Fixed gain amplifiers, variable gain amplifiers, voltage-controlled amplifiers
- *Not to be confused with:* Audio power amplifiers (drive speakers) vs signal amplifiers (process synthesis signals)
- *Common location:* Final stage of synthesizer voice, or anywhere gain/volume control is needed

**ANALOG**
Circuits that process continuously variable electrical signals, as opposed to digital systems that use discrete numerical values. Analog synthesis uses voltage levels to represent and control sound parameters.
- *Related:* Digital, CV, Voltage Control, Hardware, Continuous
- *Character:* Often described as "warm" due to harmonic distortion and component tolerances
- *Advantages:* Real-time response, natural saturation, component character
- *Disadvantages:* Temperature drift, component aging, difficulty with precise recall
- *Modern context:* Experiencing renaissance due to hands-on control and sonic character

**AND (LOGIC GATE)**
Digital logic function that outputs "high" only when ALL inputs are "high." In modular synthesis, used for combining trigger/gate signals.
- *Truth table:* A=0,B=0→0; A=0,B=1→0; A=1,B=0→0; A=1,B=1→1
- *Related:* OR, NOR, Boolean Logic, Gate Logic
- *Musical use:* Create complex trigger patterns by combining multiple sequences
- *Practical example:* Two sequencers feeding AND gate - output only triggers when both fire simultaneously

**ARP/ARPEGGIATOR**
Automatic pattern generator that plays individual notes from held chords in sequence, creating arpeggiated patterns.
- *Common patterns:* Up, Down, Up-Down, Random, As Played, Order Played
- *Related:* Sequencer, MIDI, Pattern, Chord, Performance
- *Parameters:* Rate (speed), pattern type, octave range, note length
- *Performance technique:* Hold chord, arpeggiator plays individual notes rhythmically
- *Genre association:* Essential for trance, house, and electronic dance music

**ARTICULATION**
The way individual notes or phrases are expressed, including their attack characteristics, duration, and connection to other notes.
- *Types:* Legato (smooth/connected), Staccato (detached/short), Accent (emphasized), Tenuto (held full value)
- *Related:* Performance, Expression, Envelope, Gate Length
- *Synthesis context:* Controlled through envelope settings, gate lengths, and performance techniques
- *Importance:* Critical for musical expression and making electronic music feel alive

**ATTACK**
The first stage of an envelope, controlling how quickly a sound reaches its peak level when triggered. One of the most important parameters for defining a sound's character.
- *Fast attack (0-10ms):* Immediate, percussive sounds like piano, drums
- *Medium attack (10-100ms):* Plucked strings, picked guitars
- *Slow attack (100ms+):* Swells, pads, bowed strings, wind instruments
- *Related:* ADSR, Envelope, VCA, Filter, Transient
- *Musical effect:* Defines whether sound feels percussive, plucked, bowed, or synthetic
- *Performance tip:* Velocity can be routed to control attack time for expressive playing

**ATTENUATOR**  
A control or circuit that reduces signal level, often with the ability to completely cut the signal at minimum position. Simple volume control without inversion capability.
- *Related:* VCA, Volume, Gain, Level
- *Difference from Attenuverter:* Cannot invert signal, only reduce positive signals
- *Types:* Passive (resistor network), Active (using amplifiers)
- *Common use:* Reducing CV or audio levels to prevent overloading inputs
- *Symbol:* Often represented by triangle pointing down (reducing level)

**ATTENUVERTER**
A control that can both attenuate (reduce) and invert a signal. Center position = no signal, clockwise = positive amount, counterclockwise = negative/inverted amount.
- *Related:* CV, Modulation, Mixer, Polarizer, Inverter
- *Common location:* Modulation inputs on synthesizers and modules
- *Critical understanding:* **Center position is OFF, not maximum!**
- *Uses:* Controlling modulation depth and polarity, creating inverted modulation effects
- *Math:* Multiplies input signal by variable gain from -1 to +1

**AUDIO RATE**
Signals or modulation operating at frequencies within the audible range (typically 20Hz to 20kHz). When LFOs or other modulators run at audio rate, they become sound sources rather than just control sources.
- *Related:* Control Rate, LFO, Audio Frequency, Modulation
- *Transition point:* Around 20Hz, modulation becomes audible as pitch rather than tremolo
- *Creative use:* Audio-rate modulation creates FM synthesis, ring modulation effects
- *Technical note:* In digital systems, audio rate determines sample rate requirements

**AUTO-TUNE** (PITCH CORRECTION)
Digital audio processing that automatically corrects pitch by snapping notes to the nearest semitone or user-defined scale.
- *Subtle correction:* Transparent pitch fixing for vocals and instruments
- *Creative effect:* Heavy settings create the distinctive "robotic" vocal sound
- *Related:* Pitch, Quantization, Digital Audio Processing
- *Parameters:* Correction speed, reference pitch, scale selection
- *Modern context:* Built into many DAWs and available as hardware units

**AUX SEND/RETURN**
Signal routing system that sends a copy of the main signal to external processing (effects) and returns the processed signal for mixing with the dry signal.
- *Related:* Effects, Parallel Processing, Mixer, Wet/Dry
- *Types:* Pre-fader (send level independent of main fader), Post-fader (send follows main fader)
- *Usage:* Reverb, delay, external modular processing, parallel compression
- *Advantage:* Multiple channels can share same effect processor
- *Mix technique:* Allows independent control of dry signal and effect level

---

## Alternative Options

For different learning approaches to "A" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free online synthesis glossaries, manufacturer documentation focusing on "A" terms
- **Different character:** Academic music technology textbooks (theoretical depth), video tutorials demonstrating "A" concepts  
- **Premium:** Professional audio engineering references, interactive synthesis courses with "A" term focus

---

*This "A" section provides essential foundation terminology for synthesis, modular, and production. Each term builds understanding for more complex concepts throughout the musical dictionary.*