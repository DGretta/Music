# Musical Dictionary - Section P
*Essential "P" Terms for Synthesis, Modular, and Production*

---

## P

**PARAMETER**
Any controllable aspect of a synthesizer or audio processor that affects the sound output. Understanding parameter relationships is fundamental to synthesis programming and performance.
- *Related:* Control, Modulation, Programming, Synthesis, Performance
- *Types:* Continuous (filter cutoff, volume), stepped (octave switches), on/off (mute, bypass)
- *Control methods:* Manual controls, CV modulation, MIDI control, automation
- *Modulation destinations:* Most parameters can be modulated for dynamic control
- *Interaction effects:* Parameters often interact in non-obvious ways
- *Sound design:* Understanding parameter relationships enables effective patch creation

**PARAPHONIC (VS POLYPHONIC VS MONOPHONIC)**
Voice allocation system where multiple notes can sound simultaneously but share some synthesis components, typically filter and/or envelope generators.
- **Paraphonic characteristics:** Multiple oscillators but shared filter/envelope
- **Contrast with monophonic:** Can play multiple notes simultaneously
- **Contrast with polyphonic:** Not fully independent voices - shared processing affects all notes
- *Related:* Voice Allocation, Polyphony, Monophonic, Synthesis Architecture
- *Musical behavior:* Chords possible but all notes have same brightness and amplitude envelope
- *Examples:* Korg Poly-800, vintage string machines, some modern analog synthesizers
- *Advantages:* More complex than monophonic, less expensive than full polyphony

**PASSIVE**
Circuit or component that operates without external power, relying only on the signal energy passing through it. Important distinction in modular systems and audio processing.
- *Related:* Active, Buffered, Signal Processing, Power Requirements
- *Examples:* Passive multiples, passive filters, passive mixers, resistor networks
- *Advantages:* No power consumption, simple circuits, often more reliable
- *Limitations:* Signal level loss, loading effects, limited processing capabilities
- *Modular context:* Passive multiples can cause voltage sag with many connections
- *Audio applications:* Passive EQ, passive crossovers, passive attenuators

**PATCH**
Complete synthesizer programming including all parameter settings, routing connections, and modulation assignments that create a specific sound or musical function.
- *Related:* Preset, Program, Sound, Patch Cable, Programming
- *Components:* Oscillator settings, filter parameters, envelope shapes, modulation routing
- *Storage:* Modern synthesizers store patches in memory, vintage gear often required manual recreation
- *Naming conventions:* Descriptive names help identify patch characteristics and applications
- *Categories:* Bass, lead, pad, percussion, effects, etc.
- *Programming approach:* Understanding synthesis principles enables effective patch creation

**PATCH CABLE**
Physical cable used to connect modules in modular synthesizer systems, carrying audio or control voltage signals between connection points.
- *Related:* Modular Synthesis, CV, Audio Signal, Jack, Connection
- *Types:* 3.5mm (Eurorack), 1/4" (traditional), banana cables (Buchla), various lengths
- *Signal types:* Audio cables, CV cables, gate/trigger cables (often interchangeable)
- *Quality factors:* Connector reliability, cable flexibility, shielding, durability
- *Color coding:* Many users color-code cables by signal type for visual organization
- *Creative tool:* Physical patching encourages experimentation and happy accidents

**PENTATONIC SCALE**
Five-note musical scale found in many musical traditions worldwide, popular for its consonant and easily musical character.
- *Major pentatonic:* 1-2-3-5-6 (C-D-E-G-A in C major)
- *Minor pentatonic:* 1-♭3-4-5-♭7 (A-C-D-E-G in A minor)
- *Related:* Scale, Quantizer, Arpeggiator, Melody, Mode
- *Cultural significance:* Found in Asian, Celtic, African, and Native American music traditions
- *Electronic applications:* Quantizer scales, arpeggiator patterns, melodic programming
- *Musical advantages:* Avoids dissonant intervals, easy to improvise with, universally appealing

**PENTODE**
Five-electrode vacuum tube design providing high gain and good performance characteristics. Less common than triodes in modern audio applications but found in some specialized circuits.
- *Related:* Vacuum Tube, Triode, Amplification, Analog Warmth
- *Electrodes:* Cathode, control grid, screen grid, suppressor grid, plate (anode)
- *Advantages:* High gain, good linearity, reduced parasitic capacitance
- *Audio applications:* Guitar amplifiers, high-gain preamps, specialized audio circuits
- *Modern context:* Less common than triodes in contemporary audio designs
- *Sound character:* Can provide clean amplification or musical distortion depending on circuit design

**PHASE**
Timing relationship between waveforms, measured in degrees (0°-360°) or time differences. Critical concept for understanding interference, cancellation, and many audio effects.
- *Related:* Frequency, Wavelength, Time, Interference, Cancellation
- *In-phase (0°):* Waveforms align perfectly, signals add constructively
- *Out-of-phase (180°):* Waveforms inverted relative to each other, signals cancel
- *Quadrature (90°):* Waveforms 1/4 cycle apart, used in some synthesis techniques
- *Phase shift:* Change in phase relationship, often frequency-dependent
- *Musical applications:* Stereo effects, phasing, acoustic interactions, microphone placement

**PHASE DISTORTION SYNTHESIS**
Synthesis method that varies the phase progression through wavetable data to create timbral changes, developed by Casio as alternative to expensive FM synthesis licensing.
- *Related:* Wavetable Synthesis, FM Synthesis, Casio CZ Series, Digital Synthesis
- *Technique:* Modulates phase increment through stored waveform data
- *Advantages:* Similar results to FM synthesis but different patent approach
- *Character:* Can create FM-like sounds plus unique timbres not possible with traditional FM
- *Implementation:* Digital synthesis reading through wavetable at varying rates
- *Historical significance:* Enabled affordable complex synthesis in 1980s consumer keyboards

**PHASE LOCKED LOOP (PLL)**
Electronic circuit that locks an output frequency to match an input reference frequency, maintaining precise frequency and phase relationships.
- *Related:* Frequency Synthesis, Clock Generation, Synchronization
- *Function:* Compares phase between input and output, adjusts output to match
- *Applications:* Frequency multiplication, clock generation, frequency synthesis
- *Synthesis use:* Some oscillators use PLLs for stable frequency generation
- *Advantages:* Stable frequency relationships, can multiply or divide frequencies
- *Technical:* Consists of phase detector, loop filter, and voltage-controlled oscillator

**PHASE MODULATION**
Modulation technique where the phase of a carrier waveform is varied by a modulator signal, creating harmonic content similar to but distinct from frequency modulation.
- *Related:* Frequency Modulation, Phase, Modulation, Harmonic Content
- *Technical difference:* Modulates phase directly rather than frequency
- *Musical similarity:* Creates similar harmonic results to FM synthesis
- *Mathematical relationship:* Phase modulation is derivative of frequency modulation
- *Applications:* Digital synthesis algorithms, complex harmonic generation
- *Advantages:* Can create unique timbres not achievable with traditional FM

**PHASE SHIFT/PHASER**
Audio effect that creates sweeping, whooshing sounds by mixing a signal with phase-shifted copies of itself, creating frequency-dependent cancellation and reinforcement.
- *Related:* Phase, All-Pass Filter, Modulation, Frequency Response
- *Technical:* Uses all-pass filters to create frequency-dependent phase shifts
- *Parameters:* Rate (sweep speed), depth (intensity), feedback (resonance), stages (complexity)
- *Character:* Smooth, sweeping effect different from flanger's more dramatic peaks
- *Musical applications:* Guitar effects, synthesizer processing, mix enhancement
- *Classic examples:* MXR Phase 90, Electro-Harmonix Small Stone

**PHASING**
Audio phenomenon where identical or similar signals combine with slight timing differences, creating frequency-dependent reinforcement and cancellation patterns.
- *Related:* Phase, Interference, Comb Filtering, Acoustic Interaction
- *Causes:* Microphone placement, room reflections, signal processing delays
- *Audible effects:* Hollow, filtered sounds, frequency-dependent level changes
- *Creative applications:* Stereo effects, spatial processing, texture creation
- *Problem solving:* Understanding phasing helps solve acoustic and mixing issues
- *Prevention:* Proper microphone technique, acoustic treatment, phase alignment

**PHYSICAL MODELING**
Synthesis method that uses mathematical models of physical instruments and acoustic spaces to generate realistic instrument sounds through real-time calculation.
- *Related:* Digital Synthesis, Acoustic Modeling, Real-time Calculation
- *Approach:* Models physical properties (string tension, air column length, room acoustics)
- *Advantages:* Highly realistic instrumental sounds, expressive control, efficient CPU usage
- *Examples:* Yamaha VL series, software instruments like AAS String Studio
- *Parameters:* Physical properties (bow pressure, breath pressure, string tension)
- *Musical expression:* Controllers can affect physical model parameters for realistic performance

**PING/PINGABLE**
Modular synthesizer term for modules or inputs that can be triggered or activated by sending them a brief pulse or gate signal.
- *Related:* Trigger, Gate, Pulse, Manual Trigger, Modular Interface
- *Function:* Momentary signal causes module to perform its function once
- *Applications:* Manual triggering, rhythm creation, performance interaction
- *Pingable envelope:* Trigger input causes envelope to fire regardless of keyboard
- *Pingable filter:* Trigger causes filter to perform sweep or other programmed action
- *Performance tool:* Enables manual interaction with sequenced or automated systems

**PINGABLE ENVELOPE**
Envelope generator with trigger input that can be fired manually or by external signals, independent of keyboard or sequencer control.
- *Related:* Envelope Generator, Trigger, Manual Control, Performance
- *Function:* Trigger input fires envelope cycle regardless of other control sources
- *Applications:* Manual percussion hits, accent creation, performance dynamics
- *Multiple triggers:* Can be retriggered during envelope cycle for complex patterns
- *Creative use:* Layer manual triggers with sequenced patterns for human feel
- *Modular essential:* Provides direct, hands-on control over envelope timing

**PINGABLE FILTER**
Filter with trigger input that initiates programmed filter movement when pulsed, creating dynamic filtering effects independent of audio content.
- *Related:* Filter, Trigger, Envelope, Dynamic Filtering
- *Function:* Trigger input causes filter cutoff to move through programmed sweep
- *Applications:* Rhythmic filter effects, accent creation, dynamic processing
- *Programming:* Usually includes controls for sweep time, depth, and direction
- *Musical use:* Creates filter movements synchronized to rhythm but independent of audio level
- *Performance tool:* Manual trigger control adds expressive filter animation

**PINGABLE GATE**
Gate generator that outputs a gate signal of specified length when triggered, converting momentary triggers into sustained gates.
- *Related:* Gate, Trigger, Length, Timing, Conversion
- *Function:* Input trigger produces output gate of programmable duration
- *Applications:* Converting triggers to gates, creating sustained notes from percussive triggers
- *Length control:* Adjustable gate duration from short pulses to long sustained signals
- *Musical use:* Transform drum triggers into sustained pad notes or bass lines
- *Utility function:* Essential for converting between different timing signal types

**PINGABLE TRIGGER**
Module that generates trigger outputs when manually activated or externally triggered, providing hands-on performance control.
- *Related:* Trigger, Manual Control, Performance, Rhythm Creation
- *Function:* Button press or external signal generates trigger pulse output
- *Multiple outputs:* Often provides several simultaneous trigger outputs
- *Applications:* Manual rhythm creation, performance accents, triggering multiple modules
- *Timing precision:* Provides consistent trigger timing regardless of manual button press variations
- *Creative performance:* Enables expressive manual triggering in electronic music performance

**PINK NOISE**
Noise signal with equal energy per octave, creating more natural-sounding random signal than white noise. Also covered in Section N but relevant for synthesis applications.
- *Related:* White Noise, Brown Noise, Frequency Response, Natural Sound
- *Characteristics:* -3dB per octave rolloff, more low-frequency energy than white noise
- *Applications:* Natural ambiences, drum synthesis, testing audio systems
- *Perceptual advantage:* More closely matches human hearing sensitivity than white noise
- *Synthesis use:* Filtered pink noise creates more natural percussion and texture sounds
- *Technical measurement:* Standard reference for room acoustics and audio system testing

**PITCH TO VOLTAGE CONVERTER (PVC)**
Device that analyzes audio input and outputs corresponding control voltage, typically following 1V/octave standard for pitch tracking.
- *Related:* 1V/Octave, Pitch Detection, Audio-to-CV, Control Voltage
- *Function:* Converts audio frequency information to CV for controlling oscillators
- *Applications:* Vocoder control, pitch following, audio-controlled synthesis
- *Limitations:* Works best with monophonic sources, can have tracking delays
- *Creative potential:* Enables any audio source to control synthesizer pitch parameters
- *Technical challenges:* Polyphonic sources and complex timbres can cause tracking errors

**POLE**
In filter terminology, refers to the order of filtering, with each pole contributing 6dB per octave of rolloff. Fundamental specification for understanding filter behavior.
- *Related:* Filter, Rolloff, Slope, Frequency Response
- *1-pole:* 6dB/octave rolloff, gentle filtering
- *2-pole:* 12dB/octave rolloff, moderate filtering (common in vintage synthesizers)
- *4-pole:* 24dB/octave rolloff, steep filtering (classic Moog sound)
- *Technical:* Each pole represents a reactive component (capacitor or inductor) in filter circuit
- *Musical impact:* More poles = steeper filtering, more dramatic effect
- *Design tradeoffs:* Higher-order filters may have phase effects and instability issues

**POLARIZER**
Module that can scale and invert control voltages, functioning as both attenuverter and signal processor for CV manipulation.
- *Related:* Attenuverter, CV Processing, Signal Inversion, Scaling
- *Function:* Combines attenuation, amplification, and inversion in single control
- *Operation:* Center position = off, clockwise = positive scaling, counterclockwise = negative scaling
- *Applications:* Modulation depth control, signal inversion, CV mixing
- *Multiple channels:* Often provides several polarizer channels in single module
- *Essential utility:* Fundamental tool for CV processing and modulation control

**POLIVOKS**
Soviet-era analog synthesizer known for its distinctive, aggressive filter sound, now emulated in many modern synthesizers and Eurorack modules.
- *Related:* Soviet Synthesizers, Analog Filter, Vintage Character, Filter Emulation
- *Original:* Formanta Polivoks synthesizer from 1980s Soviet Union
- *Filter character:* Distinctive aggressive, screaming resonance and unique saturation
- *Modern revival:* Filter topology recreated in various hardware and software
- *Cultural significance:* Represents alternative analog synthesis tradition from Eastern Europe
- *Sound:* Raw, aggressive character different from Western analog synthesizers

**POLIVOKS FILTER**
Specific filter circuit topology from the Soviet Polivoks synthesizer, recreated in modern modules for its unique aggressive character.
- *Related:* Polivoks, Filter Types, Analog Filter, Resonance, Saturation
- *Characteristics:* Distinctive aggressive resonance, unique saturation behavior, raw sound
- *Technical:* Different circuit approach from Western filter designs
- *Modern implementations:* Various Eurorack modules recreate this filter topology
- *Musical applications:* Aggressive leads, screaming resonance effects, raw analog textures
- *Cultural bridge:* Brings Eastern European analog character to contemporary synthesis

**POLYPHONIC (VS PARAPHONIC VS MONOPHONIC)**
Voice allocation system providing multiple independent synthesis voices, each with complete oscillator, filter, envelope, and processing chain.
- **Polyphonic characteristics:** Full voice independence, separate envelopes and filters per note
- **Contrast with monophonic:** Multiple simultaneous notes with independent processing
- **Contrast with paraphonic:** Each note has complete synthesis chain rather than shared components
- *Related:* Voice Allocation, Polyphony, Voice Management, Synthesis Architecture
- *Musical advantages:* True chord playing, independent note expression, complex harmonies
- *Examples:* Prophet-5, Jupiter-8, modern digital synthesizers
- *Voice stealing:* System manages limited voices when more notes played than voices available

**PORTAMENTO**
Smooth pitch glide between notes, creating seamless frequency transitions rather than discrete pitch steps. Electronic implementation of classical glissando concept.
- *Related:* Glide, Slew Limiting, Pitch Bend, Smooth Transition
- *Implementation:* Slew limiter applied to pitch CV creates smooth voltage transitions
- *Control:* Portamento time determines glide duration between notes
- *Musical applications:* Expressive pitch bends, smooth melodic lines, legato playing
- *Performance modes:* Some synthesizers offer portamento only between legato notes
- *Electronic advantage:* Can achieve perfectly smooth glides impossible on acoustic instruments

**POWER DISTRIBUTION BOARD**
Circuit board that distributes electrical power from main power supply to individual modules in modular synthesizer systems.
- *Related:* Power Supply, Bus Board, Eurorack, Flying Bus, Module Power
- *Function:* Converts main supply voltages to individual module power connectors
- *Voltages:* Typically +12V, -12V, +5V for Eurorack systems
- *Connections:* Bus connectors for modules, often with LED power indicators
- *Capacity:* Rated for specific current draw and number of modules
- *Safety features:* Some include overcurrent protection and power monitoring

**POWER (LINEAR, SWITCHED, ETC.)**
Electrical energy supply systems for electronic music equipment, with different designs affecting sound quality and system requirements.

**Linear Power Supply:**
- **Design:** Uses transformers and linear regulation for clean power
- **Advantages:** Very low noise, excellent regulation, no switching artifacts
- **Disadvantages:** Large, heavy, inefficient, generates heat
- **Audio preference:** Often preferred for sensitive analog circuits

**Switched/Switching Power Supply:**
- **Design:** Uses high-frequency switching for efficient power conversion
- **Advantages:** Compact, lightweight, efficient, cost-effective
- **Disadvantages:** Can generate switching noise, more complex filtering required
- **Modern usage:** Improved designs minimize noise issues

*Related:* Electrical Safety, Grounding, Noise, Power Consumption, System Design

**PPQN (PULSES PER QUARTER NOTE)**
Timing resolution specification for digital sequencers and MIDI devices, indicating how many clock pulses represent one quarter note.
- *Related:* Clock, Timing Resolution, MIDI Clock, Sequencer, BPM
- *Common values:* 24 PPQN (MIDI standard), 96 PPQN, 192 PPQN, 480 PPQN (high resolution)
- *Higher resolution:* More PPQN allows finer timing control and smoother automation
- *Sync applications:* Devices must match PPQN for proper synchronization
- *Musical impact:* Higher resolution enables more precise timing and smoother parameter changes
- *Modern context:* Software sequencers often use very high PPQN (960-1920) for precision

**PRECEDENCE EFFECT**
Psychoacoustic phenomenon where the first-arriving sound determines perceived direction when identical sounds arrive from multiple directions within ~40ms.
- *Related:* Psychoacoustics, Stereo Imaging, Room Acoustics, Sound Localization
- *Technical:* Also known as Haas effect or law of the first wavefront
- *Timing:* Effect works for delays up to approximately 40 milliseconds
- *Applications:* Stereo enhancement, room acoustics, delay effects
- *Musical use:* Understanding helps with stereo placement and spatial effects
- *Mixing application:* Slight delays can create width without obvious echo effects

**PRECISION ADDER**
Module that combines multiple CV inputs with accurate voltage addition and often includes offset capabilities for precise CV processing.
- *Related:* CV Processing, Voltage Addition, Offset, Modulation Combining
- *Function:* Mathematically adds input voltages with high precision
- *Applications:* Combining modulation sources, creating complex CV relationships
- *Precision importance:* Accurate voltage relationships critical for musical tuning
- *Offset integration:* Often includes DC offset capabilities for range adjustment
- *Creative potential:* Enables complex CV processing and modulation mathematics

**PRESET**
Stored synthesizer configuration including all parameter settings, similar to patch but often refers to factory or user-programmed sounds in digital contexts.
- *Related:* Patch, Program, Sound, Memory, Storage
- *Factory presets:* Manufacturer-programmed sounds demonstrating synthesizer capabilities
- *User presets:* Custom sounds programmed and stored by users
- *Organization:* Usually organized in banks or categories (bass, lead, pad, etc.)
- *Recall speed:* Digital systems enable instant preset recall for live performance
- *Starting points:* Presets often serve as starting points for further sound design

**PRESSURE**
Physical force applied to touch-sensitive controls, often converted to control voltage for expressive musical performance.
- *Related:* Aftertouch, Expression, Performance Control, Force Sensitive Resistor
- *Applications:* Keyboard aftertouch, pressure-sensitive pads, breath controllers
- *Control destinations:* Filter cutoff, vibrato depth, volume, effects parameters
- *Response curves:* Linear, exponential, or custom curves for musical expression
- *Musical expression:* Enables continuous control during sustained notes
- *Alternative controllers:* Pressure-sensitive surfaces, wind controllers, custom interfaces

**PULSE**
Brief electrical signal or rectangular waveform with distinct on and off states, fundamental timing and trigger signal in electronic music systems.
- *Related:* Trigger, Gate, Clock, Square Wave, Timing
- *Characteristics:* Sharp rise/fall times, defined duration, consistent amplitude
- *Applications:* Clock signals, trigger generation, gate signals, timing references
- *Pulse width:* Duration of "on" time relative to total cycle time
- *Musical timing:* Foundation for all rhythm and timing in electronic music systems
- *Generation:* Clock modules, sequencers, manual trigger sources

**PULSE WIDTH MODULATION (PWM)**
Technique that varies the duty cycle of a square wave, changing the ratio of "on" time to "off" time while maintaining constant frequency.
- *Related:* Square Wave, Duty Cycle, Modulation, Waveform Shaping
- *Effect:* Changes harmonic content of square wave without changing fundamental frequency
- *Control:* PWM depth and rate determine character of modulation effect
- *Musical applications:* Creates movement and animation in square wave sounds
- *Implementation:* LFO or envelope modulation of pulse width parameter
- *Character:* Can create sounds ranging from narrow pulses to standard square waves

---

## Alternative Options

For different learning approaches to "P" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free software synthesizers for exploring polyphonic vs paraphonic behavior, online phase relationship visualizers, basic phaser plugins
- **Different character:** Hands-on modular workshops focusing on patch cable techniques and pingable modules, vintage Soviet synthesizer exploration for Polivoks character
- **Premium:** Professional synthesis courses covering physical modeling and phase distortion techniques, advanced modular workshops exploring precision CV processing

**Practical Exploration:**
- **Phase relationship experiments:** Use oscilloscope to visualize phase relationships and their effects
- **Patch cable organization:** Develop efficient patching workflows and cable management systems  
- **Polyphonic voice allocation:** Compare mono/para/polyphonic behavior on same musical material
- **Portamento expression:** Practice using portamento for musical phrasing and expression
- **Precision CV math:** Build complex modulation using precision adders and polarizers
- **PWM sound design:** Explore pulse width modulation for animation and movement

**Advanced Study:**
- **Physical modeling mathematics:** Study acoustic modeling principles and implementation
- **Phase distortion programming:** Recreate classic Casio CZ sounds and techniques
- **PLL circuit design:** Understand frequency synthesis and clock generation
- **Polivoks filter analysis:** Study Soviet-era circuit designs and their unique characteristics
- **Power supply design:** Learn linear vs switching supply tradeoffs for audio applications

**Voice Allocation Comparison Chart:**
- **Monophonic:** One note maximum, single synthesis chain
- **Paraphonic:** Multiple notes, shared filter/envelope components  
- **Polyphonic:** Multiple notes, fully independent synthesis chains
- **Applications:** Solo leads vs chord pads vs piano-style playing

---

*This comprehensive "P" section covers fundamental synthesis concepts (polyphony, phase, parameters), modular techniques (patch cables, pingable modules), advanced synthesis methods (physical modeling, phase distortion), and technical implementation details (power supplies, precision processing), providing essential understanding from basic concepts to professional applications.*