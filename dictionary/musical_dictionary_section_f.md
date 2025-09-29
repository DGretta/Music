# Musical Dictionary - Section F
*Essential "F" Terms for Synthesis, Modular, and Production*

---

## F

**FADER**
Linear sliding control for adjusting audio levels, parameter values, or mix balances. Fundamental interface element in mixing consoles, synthesizers, and control surfaces.
- *Related:* Crossfader, Mixer, Level Control, Automation
- *Types:* Linear taper (even response), logarithmic taper (matches hearing), reverse log taper
- *Applications:* Channel levels, send amounts, parameter control, automation recording
- *Physical vs virtual:* Hardware faders provide tactile feedback, software faders enable automation
- *Performance use:* Real-time mixing, parameter morphing, expression control
- *Standard lengths:* 60mm, 100mm common in professional mixing consoles

**FEEDBACK**
Signal routing where output is fed back to input, creating resonance, sustain, distortion, or oscillation. Fundamental concept in synthesis and audio processing.
- *Related:* Resonance, Oscillation, Distortion, Delay, Reverb
- *Positive feedback:* Reinforces signal, creates oscillation (filter resonance, delay feedback)
- *Negative feedback:* Opposes signal, creates stability (op-amp circuits, compressors)
- *Musical applications:* Filter self-oscillation, delay repeats, distortion character
- *Control importance:* Too much feedback can damage equipment or create unpleasant sounds
- *Creative potential:* Controlled feedback creates rich, complex textures

**FILTER**
Circuit that selectively removes or emphasizes specific frequencies from audio signals. Core component of subtractive synthesis and fundamental audio processing tool.

**Filter Types by Function:**
- **Low-Pass Filter (LPF):** Allows low frequencies through, removes highs - classic synthesis filter
- **High-Pass Filter (HPF):** Allows high frequencies through, removes lows - removes muddiness
- **Band-Pass Filter (BPF):** Allows middle frequencies through, removes highs and lows - vocal formants
- **Band-Reject/Notch:** Removes specific frequency range, passes everything else - hum removal
- **All-Pass Filter:** Changes phase without affecting amplitude - phasing effects

**Filter Types by Topology/Character:**
- **Ladder Filter:** Moog-style using diodes or transistors, warm and musical (see also: Diode Ladder Filter)
- **Steiner-Parker:** Multiple simultaneous outputs with unique character, popular in Eurorack
- **State Variable:** Provides LPF/HPF/BPF outputs simultaneously from same core circuit
- **OTA-based (Curtis):** Clean, punchy character using operational transconductance amplifiers
- **Sallen-Key:** Simple topology, often found in budget synthesizers

**Filter Slopes (Rolloff Rates):**
- **6dB/octave (1-pole):** Very gentle, subtle filtering
- **12dB/octave (2-pole):** Moderate slope, open sound, common in vintage synthesizers
- **18dB/octave (3-pole):** Steeper than 12dB, less common but distinctive character
- **24dB/octave (4-pole):** Steep slope, dramatic filtering, classic Moog sound

*Related:* Cutoff Frequency, Resonance, Emphasis, VCF, EQ
*Parameters:* Cutoff frequency, resonance (Q), sometimes drive or saturation
*Synthesis role:* Primary tool for shaping harmonic content in subtractive synthesis

**FLANGER**
Modulation effect that creates sweeping, jet-like sounds by mixing a signal with a slightly delayed copy where the delay time is modulated by an LFO.
- *Related:* Chorus, Phaser, Modulation, Delay, LFO
- *Technical:* Short delay (1-10ms) with LFO modulation plus feedback
- *Parameters:* Rate (LFO speed), depth (modulation amount), feedback, wet/dry mix
- *Character:* More dramatic than chorus, creates distinctive "whoosh" and metallic sounds
- *Comb filtering:* Creates notches that sweep through frequency spectrum
- *Musical applications:* Guitar effects, synthesizer processing, creative sound design

**FLYING BUS**
Ribbon cables used to distribute power between bus boards in Eurorack modular systems. Allows flexible power distribution across large systems.
- *Related:* Bus Boards, Eurorack, Power Distribution, Ribbon Cable
- *Function:* Carries +12V, -12V, +5V, and ground between power distribution points
- *Installation:* Connects multiple bus boards in series for system expansion
- *Cable types:* 16-conductor ribbon cable with proper keying for safety
- *System design:* Enables power distribution in cases without built-in bus boards
- *Safety note:* Proper orientation critical - reversed connections can damage modules

**FOLD/FOLDING (WAVEFOLDING)**
Nonlinear waveshaping technique that "folds" signal peaks back on themselves, creating complex harmonic content. Alternative to filtering for generating timbral complexity.
- *Related:* Waveshaping, Harmonic Generation, West Coast Synthesis, Buchla
- *Technical:* When signal exceeds threshold, excess amplitude is reflected back
- *Character:* Creates rich, metallic, bell-like tones with complex harmonic relationships
- *Control:* Amount of folding typically voltage-controlled for dynamic timbral changes
- *Contrast with filtering:* Adds harmonics rather than removing them
- *Modern examples:* Buchla 259, Make Noise DPO, various Eurorack wavefolders

**FORMANT**
Resonant frequencies in vocal sounds that determine vowel character and speech intelligibility. Critical concept for vocal synthesis and speech processing.
- *Related:* Vowel, Band-Pass Filter, Speech Synthesis, Vocal Processing
- *Technical:* Peaks in frequency spectrum caused by vocal tract resonances
- *Vowel examples:* "A" has formants around 800Hz and 1200Hz, "E" around 500Hz and 2300Hz
- *Synthesis applications:* Formant filters create vocal-like sounds from any source
- *Multiple formants:* Typically 3-5 formant frequencies define each vowel sound
- *Dynamic control:* Moving formant frequencies creates vowel morphing effects

**FOUR-QUAD MULTIPLIER**
Analog computer module that multiplies two input signals, producing output proportional to both inputs. Enables complex mathematical operations and advanced modulation.
- *Related:* Ring Modulation, VCA, Analog Computer, CV Processing
- *Four quadrants:* Can handle positive and negative inputs in all combinations
- *Applications:* Ring modulation, amplitude modulation, CV scaling, complex modulation
- *Mathematical:* Output = Input A × Input B (with appropriate scaling)
- *Modular examples:* Intellijel Cylonix Shapeshifter, various analog computer modules
- *Creative potential:* Complex interactions between modulation sources

**FREEZE**
Audio effect that captures a moment of sound and sustains it indefinitely, creating pad-like textures from any source material. Popular in ambient and experimental music.
- *Related:* Sustain, Ambient, Granular Synthesis, Audio Capture
- *Implementation:* Captures audio buffer and loops/sustains selected portion
- *Applications:* Creating pads from percussion, sustaining chord progressions, sound design
- *Control:* Trigger input determines when to capture, often with fade-in/fade-out controls
- *Modern examples:* Electro-Harmonix Freeze pedal, various software plugins
- *Creative use:* Transforms percussive sounds into ambient textures

**FREQUENCY**
Rate of vibration measured in Hertz (Hz), determining the pitch of musical sounds. Fundamental physical property underlying all audio and synthesis concepts.
- *Related:* Pitch, Hertz, Oscillator, Tuning, Wavelength
- *Musical context:* A440 = 440Hz, octaves = frequency doubling (440Hz, 880Hz, 1760Hz)
- *Synthesis control:* Primary parameter of oscillators, controlled by 1V/octave standard
- *Hearing range:* Human hearing approximately 20Hz to 20kHz
- *Frequency relationships:* Musical intervals defined by frequency ratios (2:1 = octave, 3:2 = fifth)
- *Technical measurement:* Spectrum analyzers display frequency content of complex sounds

**FREQUENCY MODULATION (FM)**
Synthesis technique where one oscillator (modulator) varies the frequency of another oscillator (carrier), creating complex harmonic content through mathematical relationships.
- *Related:* Carrier, Modulator, Operator, DX7, Harmonic Content
- *Basic concept:* Modulator frequency determines rate of carrier frequency changes
- *FM ratio:* Ratio between carrier and modulator frequencies determines harmonic relationships
- *Modulation index:* Depth of frequency modulation controls harmonic complexity
- *Integer ratios:* Produce harmonic sounds (1:1, 2:1, 3:2), non-integer ratios produce inharmonic sounds
- *Classic example:* Yamaha DX7 and FM synthesis boom of the 1980s
- *Modern context:* Available in many digital synthesizers and Eurorack modules

**FSR (FORCE SENSITIVE RESISTOR)**
Pressure-sensitive electronic component that changes resistance based on applied force. Alternative control interface for expressive musical performance.
- *Related:* Pressure Sensitivity, Alternative Controllers, Expression, Touch Control
- *Function:* Resistance decreases as pressure increases, converted to control voltage
- *Applications:* Drum pads, touch controllers, expressive synthesis control
- *Response:* Can provide continuous pressure control, not just on/off switching  
- *Musical use:* Pressure-sensitive keyboards, controller pads, custom interfaces
- *DIY potential:* Relatively simple to integrate into custom controllers and instruments

**FULL-WAVE RECTIFIER**
Circuit that converts alternating current (AC) signals to direct current (DC) by inverting negative portions of the waveform. Important for envelope following and signal processing.
- *Related:* Envelope Follower, Signal Processing, AC/DC, Diode, Elector-Boom
- *Function:* Takes bipolar audio signal and converts to unipolar control voltage
- *Applications:* Envelope followers, audio-to-CV conversion, signal analysis
- *Circuit:* Uses diodes or op-amps to flip negative signal portions positive
- *Contrast:* Half-wave rectifier only removes negative portions (less efficient)
- *Elector-Boom connection:* Popular DIY electronics magazine featuring rectifier circuits
- *Musical applications:* Following audio dynamics for controlling synthesis parameters

**FUNCTION GENERATOR**
Versatile module that generates various control voltage shapes including envelopes, LFOs, and complex modulation patterns. Multi-purpose modulation source.
- *Related:* Envelope Generator, LFO, Modulation, CV, Slew Limiter
- *Capabilities:* Can function as envelope, LFO, slew limiter, oscillator, or logic processor
- *Make Noise Maths:* Famous example of dual function generator with extensive patching possibilities
- *Parameters:* Rise time, fall time, shape, trigger/gate inputs, CV inputs
- *Versatility:* Single module can replace multiple dedicated modulation sources
- *Analog computer:* Represents fundamental analog computing concepts in musical form

**FUNDAMENTAL**
The lowest frequency component in a harmonic series, determining the perceived pitch of complex tones. Foundation frequency around which overtones are built.
- *Related:* Harmonic Series, Overtones, Pitch, Frequency
- *Harmonic relationship:* All other harmonics are integer multiples of fundamental frequency
- *Perception:* Brain identifies fundamental frequency as the "pitch" of complex sounds
- *Missing fundamental:* Brain can perceive pitch even when fundamental frequency is absent
- *Synthesis context:* Oscillator fundamental frequency plus generated harmonics create complex timbres
- *Musical tuning:* Fundamental frequencies determine note relationships and intervals

---

## Alternative Options

For different learning approaches to "F" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free software synthesizers for experimenting with different filter types, online FM synthesis tutorials, DIY FSR controller projects
- **Different character:** Hands-on modular workshops focusing on function generator patching and filter comparisons, vintage synthesizer demonstrations featuring classic filter types
- **Premium:** Professional audio courses covering advanced filter design, modular synthesis masterclasses exploring four-quad multiplier applications, electronic music production programs covering formant synthesis

**Practical Exploration:**
- **Filter comparison:** Set up multiple filter types processing the same oscillator to hear character differences
- **FM experimentation:** Program simple FM patches with different carrier/modulator ratios
- **Flanger vs chorus:** Compare these effects on same source material to understand differences
- **Formant vowel morphing:** Use formant filters to create vowel-like sounds and transitions
- **Function generator versatility:** Use single function generator as envelope, LFO, and slew limiter
- **FSR controller building:** Create pressure-sensitive controller using FSR and simple circuit

**Advanced Study:**
- **Filter topology analysis:** Study circuit diagrams of different filter types to understand character differences
- **FM mathematics:** Explore the mathematical relationships behind FM synthesis harmonics
- **Feedback system design:** Learn to control feedback for musical rather than chaotic results
- **Flying bus system planning:** Design power distribution for large modular systems
- **Full-wave rectifier applications:** Build envelope followers and audio-to-CV converters
- **Frequency analysis:** Use spectrum analyzers to study harmonic content of different synthesis methods

---

*This "F" section covers fundamental synthesis tools (filters, FM, frequency), essential audio processing (flangers, feedback, freeze), technical implementation concepts (flying bus, FSR, full-wave rectifier), and versatile modulation sources (function generators), providing comprehensive understanding from basic concepts to advanced technical applications.*