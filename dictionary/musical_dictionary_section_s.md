# Musical Dictionary - Section S
*Essential "S" Terms for Synthesis, Modular, and Production*

---

## S

**SALLEN-KEY**
Simple active filter topology using operational amplifiers, resistors, and capacitors. Common in budget synthesizers and DIY projects for straightforward filter design.
- *Related:* Filter Types, Active Filter, Op-Amp, State Variable Filter
- *Advantages:* Simple design, low component count, predictable behavior
- *Limitations:* Less flexible than state variable or ladder filters
- *Applications:* Entry-level synthesizers, basic filtering needs
- *Sound character:* Clean, straightforward filtering without distinctive coloration
- *Historical:* Named after designers R. P. Sallen and E. L. Key (1955)

**SAMPLE**
Discrete digital representation of audio at a specific point in time, or the process of converting analog audio to digital representation.
- *Related:* Sample Rate, Digital Audio, A/D Conversion, Sampling Theorem
- *Digital audio:* Individual amplitude measurement at specific time interval
- *Sampling process:* Converting continuous analog waveforms to discrete digital values
- *Bit depth:* Determines amplitude resolution of each sample (16-bit, 24-bit, etc.)
- *Musical sampling:* Recording and replaying audio for composition and performance
- *Nyquist requirement:* Sample rate must be >2× highest frequency for accurate reproduction

**SAMPLE AND HOLD (S/H)**
Circuit that captures input voltage when triggered and holds that voltage at output until next trigger, creating stepped random or discrete control voltages.
- *Related:* Random, Quantize, Stepped CV, Trigger, Modulation
- *Function:* Trigger input samples current input voltage, holds until next trigger
- *Applications:* Stepped random voltages, sample-accurate pitch tracking, rhythmic modulation
- *Input sources:* Noise for random, audio for tracking, LFO for stepped modulation
- *Clock rate:* Trigger frequency determines how often new samples are captured
- *Musical character:* Creates distinctive stepped, robotic modulation patterns

**SAMPLE RATE**
Frequency at which analog audio is converted to digital samples, measured in Hertz (Hz) or kilohertz (kHz). Determines maximum reproducible frequency.
- *Related:* Nyquist Frequency, Digital Audio, Sample, Resolution, Aliasing
- *Common rates:* 44.1kHz (CD), 48kHz (professional), 96kHz, 192kHz (high-resolution)
- *Nyquist relationship:* Maximum frequency = sample rate ÷ 2
- *Higher rates:* Greater frequency range, more headroom for processing, larger file sizes
- *Musical impact:* 44.1kHz captures full audible range (20Hz-20kHz)
- *Conversion:* Sample rate conversion can introduce artifacts if not done carefully

**SAMPLER**
Instrument that records, stores, and plays back digital audio samples, typically with pitch-shifting, filtering, and envelope control capabilities.
- *Related:* Sample, Playback, Pitch Shifting, Loop, Keyboard Mapping
- *Functions:* Record audio, map samples across keyboard, apply synthesis processing
- *Pitch shifting:* Play samples at different speeds/pitches while maintaining character
- *Looping:* Sustain samples by repeating selected portions
- *Multi-sampling:* Multiple samples across keyboard range for realistic instrument emulation
- *Modern capabilities:* Time-stretching, granular synthesis, extensive modulation options

**SATURATION**
Gentle nonlinear distortion that adds harmonic content and compression as signal levels increase, creating warmth and analog character.
- *Related:* Distortion, Overdrive, Harmonics, Warmth, Tape Saturation
- *Character:* Smooth onset, predominantly even harmonics, musical compression
- *Sources:* Tube circuits, tape machines, transformer saturation, analog circuits
- *Musical applications:* Adding warmth, presence, and cohesion to sounds
- *Digital emulation:* Many plugins model analog saturation characteristics
- *Creative use:* Glues mixes together, adds perceived loudness without harsh distortion

**SAW/SAWTOOTH**
Waveform characterized by linear rise and instant fall (or vice versa), containing all harmonics and producing bright, rich timbre.
- *Related:* Waveform, Harmonics, Oscillator, Ramp, Brightness
- *Harmonic content:* Contains all harmonics (1st, 2nd, 3rd, 4th...) with decreasing amplitude
- *Character:* Bright, rich, full-bodied sound ideal for filtering
- *Synthesis use:* Foundation waveform for subtractive synthesis
- *Direction:* Rising saw (ramp up) or falling saw (ramp down)
- *Applications:* Brass sounds, strings, aggressive leads, bass synthesis

**SCALING**
Process of adjusting the range or magnitude of control voltages to match destination parameter requirements.
- *Related:* CV Processing, Attenuator, Offset, Voltage Control, Range
- *Function:* Converts CV from one range to another (e.g., ±5V to 0-10V)
- *Applications:* Matching modulation sources to parameter ranges, precise CV control
- *Tools:* Attenuators, attenuverters, precision adders, dedicated scaling modules
- *Musical use:* Ensures modulation sources work properly with any destination
- *Precision importance:* Accurate scaling critical for musical tuning and control

**SCHMITT TRIGGER**
Circuit with hysteresis that converts slowly changing signals into clean digital on/off signals, preventing false triggering from noise.
- *Related:* Trigger, Hysteresis, Digital Logic, Comparator, Gate Processing
- *Function:* Different on/off thresholds prevent oscillation around single threshold
- *Applications:* Clean trigger generation, noise immunity, gate conditioning
- *Hysteresis gap:* Difference between on and off thresholds determines noise immunity
- *Musical benefit:* Reliable triggering from imperfect or noisy signals
- *Common use:* Converting audio to triggers, cleaning up gate signals

**SCOPE**
Short for oscilloscope - visual display of electrical signals showing waveform shape, frequency, and amplitude relationships.
- *Related:* Oscilloscope (Section O), Waveform, Signal Analysis, Visual Feedback
- *Applications:* Viewing waveforms, measuring timing, checking signal integrity
- *Synthesis education:* Essential for understanding how synthesis concepts translate to signals
- *Modern versions:* Hardware scopes, software scopes, built-in DAW analyzers
- *Learning tool:* Makes invisible electrical signals visible and understandable

**SEMI-MODULAR (AND EXAMPLES)**
Synthesizer architecture with pre-patched signal routing that works without patch cables, but includes patch points for expanded modular connectivity.

**Design Philosophy:**
- **Internal routing:** Fully functional without any patching
- **Patch points:** Override internal routing for modular flexibility
- **Best of both worlds:** Immediate playability plus modular expandability

**Advantages:**
- **Beginner-friendly:** Works immediately without patching knowledge
- **Educational:** Learn signal flow through normalized routing
- **Expandable:** Grow into modular synthesis gradually
- **Cost-effective:** Less expensive than full modular systems

**Classic Examples:**
- **Moog Mother-32:** Desktop synth with sequencer and Moog filter
- **Make Noise 0-Coast:** West Coast inspired single voice
- **Pittsburgh Modular Lifeforms:** Complete voice with extensive patching
- **Arturia MiniBrute 2/2S:** Brute architecture with patch bay

*Related:* Modular, Normalled, Patch Points, Signal Flow

**SEMITONE**
Smallest interval in Western chromatic music system, equal to one-twelfth of an octave or one piano key (including black keys).
- *Related:* Interval, Chromatic, Pitch, Cents, Frequency Ratio
- *Frequency ratio:* 12th root of 2 (approximately 1.05946)
- *Equal temperament:* 12 equal semitones per octave
- *Cents relationship:* 1 semitone = 100 cents
- *Musical notation:* Half step, minor second interval
- *Synthesis context:* Minimum pitch change in quantized systems, transposition unit

**SEQUENCE**
Ordered series of musical events (notes, rhythms, parameters) that plays automatically, fundamental concept in electronic music composition.
- *Related:* Sequencer, Pattern, Step, Programming, Automation
- *Components:* Pitch information, gate timing, velocity, parameter changes
- *Length:* Can range from few steps to hundreds of events
- *Playback modes:* Forward, reverse, pendulum, random order
- *Musical applications:* Basslines, arpeggios, drum patterns, modulation patterns
- *Live performance:* Sequences can be triggered, transposed, and manipulated in real-time

**SEQUENCER**
Device or module that generates and plays back sequences of control voltages, gates, and triggers for automated musical performance.

**Types:**
- **Step sequencer:** Grid-based, programs values per step
- **Piano roll:** Visual timeline representation
- **Hardware sequencer:** Dedicated physical device
- **Software sequencer:** DAW or standalone application
- **CV sequencer:** Outputs control voltages and gates

**Features:**
- **Multiple tracks:** Control multiple parameters simultaneously
- **Pattern storage:** Save and recall different sequences
- **Modulation:** Real-time sequence manipulation
- **Sync:** Lock to MIDI clock, analog clock, or internal tempo

*Related:* Sequence, MIDI, CV/Gate, Pattern, Step Sequencer

**SEQUENTIAL SWITCH**
Module that routes one input to multiple outputs in sequence, or multiple inputs to one output, creating rhythmic switching patterns.
- *Related:* Multiplexer, Switch, Routing, Rhythm, Pattern
- *Function:* Clock advances routing to next position in sequence
- *Applications:* Rhythmic switching between sounds, rotating modulation sources
- *Modes:* 1-to-many or many-to-1 routing
- *Musical use:* Creating polyrhythms, rotating effects, sequential modulation
- *Creative potential:* Complex routing patterns from simple sequential advancement

**SHIFT REGISTER**
Digital circuit that passes data through series of storage positions, creating rhythmic delays and pattern transformations.
- *Related:* Digital Logic, Clock, Pattern Generation, Trigger Processing
- *Function:* Each clock pulse shifts stored data one position forward
- *Applications:* Rhythm generation, trigger delay, pattern transformation
- *Musical use:* Creating polyrhythmic patterns, euclidean-style rhythms
- *Feedback:* Output can feed back to input for evolving patterns
- *Modular examples:* Various Eurorack modules implementing shift register logic

**SINE WAVE**
Pure tone containing only fundamental frequency with no harmonics, producing the smoothest possible waveform and simplest timbre.
- *Related:* Waveform, Fundamental, Harmonics, Pure Tone
- *Harmonic content:* Only fundamental frequency, no overtones
- *Character:* Pure, smooth, flute-like, lacking brightness or edge
- *Mathematical:* Defined by y = sin(x), perfect circular motion projection
- *Synthesis applications:* Sub-bass, FM synthesis carriers/modulators, pure tones
- *Reference:* Standard for audio testing and frequency measurement

**SLEW**
Rate at which voltage changes between different levels, determining how quickly or slowly transitions occur.
- *Related:* Slew Limiter, Portamento, Glide, Rate of Change
- *Fast slew:* Nearly instantaneous voltage changes, stepped transitions
- *Slow slew:* Gradual voltage changes, smooth glides
- *Applications:* Portamento, smooth modulation, envelope smoothing
- *Musical impact:* Controls smoothness vs. abruptness of parameter changes
- *Technical spec:* Often measured in volts per second (V/s)

**SLEW LIMITER**
Circuit that restricts how quickly voltages can change, creating smooth transitions and glide effects from abrupt voltage changes.
- *Related:* Lag Generator, Portamento, Glide, CV Processing
- *Function:* Limits maximum rate of voltage change (slew rate)
- *Applications:* Portamento effects, smoothing stepped CV, preventing zipper noise
- *Controls:* Rise time and fall time often independently adjustable
- *Musical use:* Transform stepped sequences into smooth glides, add legato feel
- *Utility application:* Essential CV processing tool in modular systems

**SLIDING RAILS**
Eurorack case mounting system where modules slide into grooved rails rather than being screwed directly to threaded rails.
- *Related:* Eurorack, Mounting, Hardware, Case Design
- *Advantages:* Tool-free installation, quick module swapping, flexible positioning
- *Disadvantages:* Less secure than threaded rails, potential for movement
- *Compatibility:* Works with standard Eurorack modules and power connections
- *Use cases:* Performance systems, frequently reconfigured setups
- *Alternative:* Traditional threaded rails with M3 screws

**SLOPE**
Rate of change in voltage over time, or the steepness of filter rolloff curves. Context determines specific meaning.

**Envelope Context:**
- **Slope shape:** Linear, exponential, or logarithmic voltage change
- **Musical impact:** Affects perceived naturalness of envelope shapes

**Filter Context:**
- **Rolloff slope:** Rate of attenuation beyond cutoff (6dB, 12dB, 24dB per octave)
- **Steeper slopes:** More dramatic filtering effect

*Related:* Slope Generator, Envelope, Filter, Rate, Rolloff

**SLOPE GENERATOR**
Module that generates voltage slopes (ramps) with controllable rise and fall times, versatile for envelopes, LFOs, and complex modulation.
- *Related:* Function Generator, Envelope Generator, Ramp, Modulation
- *Function:* Creates rising and/or falling voltage slopes with independent timing
- *Applications:* Envelopes, LFOs, voltage processing, complex modulation
- *Make Noise Maths:* Famous dual slope generator example
- *Versatility:* Can function as envelope, LFO, slew limiter, or oscillator
- *Analog computer:* Represents integration function in analog computation

**SOUND**
Vibration that propagates through air or other medium as audible pressure wave, detected by human hearing system.
- *Related:* Frequency, Amplitude, Timbre, Waveform, Acoustics
- *Physical:* Mechanical wave requiring medium for propagation
- *Perception:* Human hearing range approximately 20Hz to 20kHz
- *Characteristics:* Pitch (frequency), loudness (amplitude), timbre (harmonic content)
- *Synthesis:* Electronic generation of sound through controlled oscillation and processing
- *Musical sound:* Organized sound with defined pitch, rhythm, and structure

**SOUND/SYNTH MODELING**
Synthesis approach using mathematical models or digital simulation to recreate characteristics of acoustic instruments or analog synthesizers.
- *Related:* Physical Modeling, Emulation, Digital Synthesis, Virtual Analog
- *Approaches:* Physical modeling (instrument physics), circuit modeling (analog circuits)
- *Advantages:* Recreates complex instruments or rare gear digitally
- *Disadvantages:* CPU intensive, may lack some analog "imperfections"
- *Applications:* Software synthesizers, digital instruments, plugin emulations
- *Quality factors:* Accuracy of model, CPU efficiency, user interface design

**SOUND MODIFIER**
Generic term for modules or devices that process and alter audio signals without generating sound themselves.
- *Related:* Filter, VCA, Effect, Signal Processing, Modulation
- *Types:* Filters, VCAs, waveshapers, effects processors
- *Contrast:* Sound sources (oscillators) vs. sound modifiers (filters, VCAs)
- *Signal flow:* Typically receives audio input and outputs modified audio
- *Synthesis role:* Shapes and sculpts sounds generated by oscillators
- *Modular context:* Distinguishes processing modules from sound generators

**SOURCE OF UNCERTAINTY**
Category of modules that generate unpredictable, chaotic, or random voltages for organic, evolving modulation. Buchla philosophy of introducing controlled chaos.

**Classic Examples:**

**Buchla 265/266 Source of Uncertainty:**
- **Functions:** Random voltages, sample & hold, noise, integration
- **Philosophy:** Embracing unpredictability and chaos for organic sounds
- **Character:** Smooth random, stepped random, noise sources

**Make Noise Wogglebug:**
- **Modern interpretation:** Random voltages, stepped, smooth, burst modes
- **Character:** Musical randomness, not purely mathematical
- **Applications:** Organic modulation, generative patches, evolving textures

**Design Philosophy:**
- **Controlled chaos:** Randomness within musical parameters
- **Organic character:** Adds life and unpredictability to patches
- **Generative music:** Enables self-evolving musical systems

*Related:* Random, Chaos, Generative, Buchla Philosophy, Modulation

**SPLITTER**
Device or module that distributes one input signal to multiple outputs, same function as multiple or mult.
- *Related:* Multiple, Mult, Signal Distribution, Buffered, Passive
- *Types:* Passive splitter (simple connection), buffered splitter (amplified outputs)
- *Applications:* Distributing CV, clock, or audio to multiple destinations
- *Considerations:* Passive splitters can cause voltage sag with many connections
- *Alternative terms:* Multiple, mult, signal distributor

**SPREAD**
Amount of detuning or stereo width applied to unison voices or layered sounds, creating thickness and spatial breadth.
- *Related:* Detune, Unison, Stereo Width, Chorus, Ensemble
- *Pitch spread:* Slight detuning of multiple voices (5-30 cents typical)
- *Pan spread:* Distribution of voices across stereo field
- *Applications:* Rich synthesizer sounds, ensemble effects, stereo enhancement
- *Amount control:* Narrow spread = tight, wide spread = expansive
- *Musical balance:* Too much spread can cause phase issues and muddy mix

**SQUARE WAVE**
Waveform that alternates instantly between two values, containing only odd harmonics and producing hollow, clarinet-like timbre.
- *Related:* Waveform, Pulse, Odd Harmonics, Duty Cycle
- *Harmonic content:* Odd harmonics only (1st, 3rd, 5th, 7th...) with decreasing amplitude
- *Character:* Hollow, reedy, clarinet-like sound
- *Duty cycle:* 50% on, 50% off (distinguishes from rectangular pulse waves)
- *Synthesis applications:* Hollow leads, bass sounds, starting point for PWM
- *Mathematical:* Approximated by sum of odd-harmonic sine waves

**STACK CABLE**
Patch cable with multiple connectors allowing signal splitting or stacking of connections in single cable.
- *Related:* Mult, IV Cable, Signal Splitting, Patch Cable
- *Configurations:* Various combinations (1-to-2, 1-to-3, etc.)
- *Function:* Splits signals without dedicated multiple module
- *Convenience:* Reduces cable clutter and dedicated mult modules
- *Limitations:* Passive splitting can cause voltage droop
- *Modern modular:* Essential utility for compact patching

**STAGE**
Individual section or phase in multi-stage processes like envelopes, filters, or sequential processing.

**Envelope Context:**
- **ADSR stages:** Attack, Decay, Sustain, Release as separate stages
- **Complex envelopes:** May have additional stages (DADSR, multi-stage)

**Filter Context:**
- **Filter stages:** Multiple filtering stages in series (each pole = one stage)

**Performance Context:**
- **Stage left/right:** Audience perspective directions in live performance

*Related:* Phase, Section, Multi-stage, ADSR, Filter Order

**STAGE FRIGHT**
Performance anxiety experienced when playing music in front of audience, relevant for electronic musicians transitioning to live performance.
- *Related:* Performance, Live Performance, Anxiety, Preparation
- *Symptoms:* Nervousness, mistakes, memory lapses, physical tension
- *Management:* Preparation, practice, breathing techniques, experience
- *Electronic music context:* Different challenges than traditional instruments
- *Prevention strategies:* Thorough preparation, backup systems, progressive exposure
- *Community support:* Common experience across all performance levels

**STAGE LEFT/RIGHT**
Performance direction terminology from audience perspective, essential for setup coordination and performance communication.
- **Stage Left:** Performer's left, audience's right
- **Stage Right:** Performer's right, audience's left
- **Importance:** Prevents confusion during setup and performance
- *Related:* Performance, Live Sound, Stage Plot, Setup
- *Technical application:* Speaker placement, equipment positioning, cable routing
- *Communication:* Standard terminology for crew and performers

**STEP**
Individual position in sequence or pattern, representing single event or value in time-based programming.
- *Related:* Sequencer, Pattern, Sequence, Gate, CV Value
- *Components:* Typically includes pitch, gate, velocity, and parameter values
- *Step length:* Duration of each step (quarter notes, eighth notes, etc.)
- *Programming:* Each step can have independent values and settings
- *Skip/rest:* Steps can be active or inactive (rests)
- *Musical unit:* Basic building block of electronic music sequencing

**STEP SEQUENCER**
Type of sequencer with grid-based interface where each step represents specific time position with programmable values.
- *Related:* Sequencer, Pattern, Grid, Programming, CV/Gate
- *Interface:* Usually visual grid showing steps and their values
- *Programming:* Direct parameter entry per step (pitch, gate, velocity)
- *Length:* Adjustable number of steps per pattern (8, 16, 32 common)
- *Advantages:* Intuitive programming, visual feedback, pattern-based workflow
- *Applications:* Basslines, drum patterns, melodic sequences, modulation patterns

**STRIKE**
In lowpass gate context, sharp trigger or impulse input that excites the LPG to create percussive, naturally-decaying sounds.
- *Related:* Low Pass Gate, Trigger, Impulse, Buchla, Percussion
- *Function:* Trigger input causes LPG to open then naturally decay
- *Character:* Creates acoustic-like percussive decay behavior
- *Vactrol response:* Slow vactrol decay creates natural-sounding sustain
- *Musical applications:* Percussion synthesis, plucked sounds, organic attacks
- *Buchla tradition:* Central to West Coast synthesis percussion techniques

**SUB/SUB-OSCILLATOR**
Oscillator generating tone exactly one or more octaves below main oscillator, adding bass weight and foundation to sounds.
- *Related:* Octave Divider, Bass, Low Frequencies, Oscillator
- *Function:* Usually generates square wave one octave (or two) below main VCO
- *Implementation:* Often created by frequency division rather than separate oscillator
- *Applications:* Adding bass weight, thick leads, powerful low end
- *Musical character:* Fills out bottom end without muddiness
- *Synthesis staple:* Standard feature on many synthesizers for enhanced low-end

**SUBOCTAVE**
Pitch exactly one octave below reference pitch, representing half the original frequency.
- *Related:* Octave, Frequency Division, Sub-Oscillator, Bass
- *Frequency relationship:* f/2 for one suboctave, f/4 for two suboctaves
- *Musical notation:* One octave lower = 8va bassa
- *Generation methods:* Octave dividers, sub-oscillators, digital synthesis
- *Applications:* Bass enhancement, organ bass pedals, low-frequency reinforcement
- *Harmonic relationship:* Suboctave is fundamental's 1/2 frequency harmonic

**SUBTRACTIVE SYNTHESIS**
Synthesis method starting with harmonically rich waveforms and removing frequencies with filters to sculpt desired timbre.

**Signal Flow:**
1. **Oscillator:** Generates harmonically rich waveform (sawtooth, square)
2. **Filter:** Removes unwanted frequencies, shapes harmonic content
3. **Amplifier:** Controls amplitude envelope and dynamics

**Philosophy:**
- **Start complex, subtract:** Opposite of additive synthesis approach
- **Sculpting sound:** Like carving sculpture from block of material
- **Real-time control:** Filter modulation creates dynamic timbral changes

**Advantages:**
- **Intuitive:** Closely models acoustic instrument behavior
- **Efficient:** Simple signal path, low CPU/component requirements
- **Expressive:** Filter modulation provides dynamic tonal control

*Related:* Filter, VCO, VCA, East Coast Synthesis, Envelope Modulation

**SUM**
Mathematical addition of multiple signals, combining voltages or audio for mixing and CV processing.
- *Related:* Mixer, Precision Adder, Signal Combining, CV Math
- *Function:* Adds input voltages together (V_out = V1 + V2 + V3...)
- *Audio context:* Mixing multiple sound sources
- *CV context:* Combining modulation sources, complex CV relationships
- *Applications:* Creating composite modulation, mixing, offset addition
- *Precision importance:* Accurate summing critical for musical tuning

**SUSTAIN**
Third stage of ADSR envelope, representing the held level during gate-on time (this is a LEVEL, not a duration).
- *Related:* ADSR, Envelope, Gate, Hold Level
- *Common confusion:* Sustain is a level, not a time - it holds as long as gate is on
- *Musical function:* Determines volume or brightness during held notes
- *Interaction:* Works with decay to create envelope shape
- *0% sustain:* Envelope falls to zero after decay (percussive sounds)
- *100% sustain:* Envelope stays at peak level (organ-like sounds)

**SVF (STATE VARIABLE FILTER)**
Filter topology providing simultaneous low-pass, high-pass, and band-pass outputs from single core circuit, offering versatility and clean character.
- *Related:* Filter Types, Multi-mode Filter, Analog Filter
- *Outputs:* Simultaneous LPF, HPF, BPF from same input signal
- *Advantages:* Multiple filter types, clean sound, stable operation
- *Applications:* Multi-mode synthesizer filters, modular utility filtering
- *Character:* Clean, precise filtering without strong coloration
- *Modern implementations:* Various Eurorack modules, synthesizer filter sections

**SWITCH CAPACITOR FILTER**
Filter design using rapidly-switched capacitors to simulate resistors, enabling voltage-controlled filtering in integrated circuits.
- *Related:* Filter, Analog Filter, Curtis Filters, VCF
- *Technology:* Switches capacitors rapidly to create effective resistance
- *Advantages:* Voltage control without continuous resistors, IC-friendly design
- *Clock noise:* Switching can introduce artifacts at low filter frequencies
- *Famous examples:* Curtis CEM3320, SSM2040 filter chips
- *Modern relevance:* Understanding helps explain vintage synthesizer filter behavior

**SWITCHING POWER SUPPLY**
Power supply design using high-frequency switching for efficient voltage conversion, common in modern synthesizers and modules.
- *Related:* Linear Power Supply, Power Distribution, Noise, Efficiency
- *Advantages:* Compact, lightweight, efficient, handles wide input voltage ranges
- *Disadvantages:* Can generate switching noise, more complex filtering required
- *Frequency:* Typically operates at 20kHz-500kHz+ to minimize audible noise
- *Modern design:* Improved designs minimize noise issues
- *Cost effectiveness:* Lower cost than equivalent linear supplies

**SYNC**
Synchronization between devices ensuring proper timing relationships, critical for multi-device electronic music systems.

**Types:**
- **MIDI Clock:** 24 PPQN digital timing standard
- **Analog Clock:** Voltage pulses for tempo sync
- **DIN Sync:** Vintage Roland standard (Section D)
- **Sync24:** Alternative to DIN Sync
- **Word Clock:** Digital audio sample-accurate sync

**Applications:**
- **Tempo sync:** Multiple sequencers/drum machines locked together
- **Oscillator sync:** Hard sync between oscillators (see Hard Sync, Section H)

*Related:* Clock, MIDI, Tempo, Timing, DIN Sync, Sync24

**SYNC24**
Alternative timing standard to Roland's DIN Sync, using similar 24 PPQN resolution but with different implementation.
- *Related:* DIN Sync, MIDI Clock, Sync, PPQN, Clock
- *Resolution:* 24 pulses per quarter note (same as MIDI and DIN Sync)
- *Implementation:* Different connector/signal spec than DIN Sync
- *Applications:* Synchronizing vintage gear with specific Sync24 requirements
- *Modern context:* Less common than MIDI or DIN Sync
- *Conversion:* Sync24 to MIDI/DIN converters available for integration

**SYNTH EXPANDER MODULE (SEM)**
Oberheim synthesizer module design philosophy providing complete synthesizer voice in compact module format.
- *Historical:* Original Oberheim SEM modules combined to create polyphonic systems
- *Architecture:* Complete voice (oscillators, filter, envelope) in single module
- *Modern context:* "SEM-style" refers to compact, complete voice modules
- *Expandability:* Multiple modules combined for polyphony or layering
- *Influence:* Design philosophy influenced modern semi-modular and Eurorack designs
- *Character:* Complete, musical voices suitable for standalone or multi-voice systems

---

## Alternative Options

For different learning approaches to "S" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free software synthesizers for exploring subtractive synthesis and step sequencing, sample rate converters, waveform visualization tools
- **Different character:** Hands-on modular workshops focusing on slope generators and sources of uncertainty, vintage sampler exploration
- **Premium:** Professional synthesis courses covering advanced filtering (SVF, Sallen-Key), semi-modular integration techniques, sampling and sound design

**Practical Exploration:**
- **Subtractive synthesis basics:** Build patches using oscillator→filter→VCA signal flow
- **Step sequencer programming:** Create basslines and drum patterns using grid-based sequencing
- **Slew limiter experiments:** Transform stepped sequences into smooth glides
- **Sample rate comparison:** Compare audio at different sample rates to understand quality differences
- **Source of uncertainty patching:** Create generative, evolving patches using random modulation
- **Waveform comparison:** Listen to sine, saw, and square waves to understand harmonic content

**Advanced Study:**
- **SVF circuit analysis:** Study state variable filter topology and behavior
- **Shift register rhythm programming:** Create complex polyrhythmic patterns
- **Semi-modular system design:** Plan integrated systems balancing normalled routing and patch flexibility
- **Sound modeling mathematics:** Understand physical modeling and circuit modeling algorithms
- **Sync protocols:** Master different synchronization standards for multi-device setups

---

*This comprehensive "S" section covers fundamental waveforms (sine, saw, square), synthesis methods (subtractive, sampling, sound modeling), sequencing concepts (sequencer, step, shift register), signal processing (slew, saturation, scaling), modular techniques (semi-modular, source of uncertainty, strike), and system concepts (sync, switching power), providing essential understanding from basic building blocks to advanced synthesis applications.*