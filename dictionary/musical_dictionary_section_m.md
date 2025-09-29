# Musical Dictionary - Section M
*Essential "M" Terms for Synthesis, Modular, and Production*

---

## M

**M2.5/M3 SCREWS/BOLTS/THREADS**
Metric screw threading standards used for mounting modules in Eurorack systems. M3 (3mm diameter) is standard for Eurorack rails, while M2.5 (2.5mm diameter) is used for some panels and hardware.
- *Related:* Eurorack, Mounting, Hardware, Rails, Rack Screws
- *M3 standard:* 3mm diameter threads for attaching modules to rails
- *M2.5 usage:* Smaller screws for panel-mounted components, some manufacturers
- *Length considerations:* Typically 6mm length for standard rail mounting
- *Material:* Usually steel or stainless steel for durability
- *DIY importance:* Essential hardware knowledge for building and modifying systems

**MAGIC SMOKE**
Humorous term for the hypothetical substance that makes electronic components work - when components fail catastrophically and release actual smoke, the "magic smoke" has escaped and the component is permanently damaged.
- *Related:* Component Failure, Overcurrent, Overvoltage, Protection, Electronics Safety
- *Reality:* Actual smoke from burning components (capacitors, resistors, ICs)
- *Causes:* Reverse polarity, overvoltage, overcurrent, component aging, poor connections
- *Prevention:* Proper power supply design, fuses, current limiting, careful connections
- *Educational value:* Teaches respect for proper electrical practices and component ratings
- *Community wisdom:* "Once the magic smoke escapes, the component never works the same"

**MArF (MULTIPLE ARBITRARY FUNCTION GENERATOR)**
Advanced function generator capable of creating complex, user-defined control voltage shapes and sequences. Represents sophisticated modulation sources beyond basic ADSR envelopes.
- *Related:* Function Generator, Envelope Generator, Modulation, CV, Complex Modulation
- *Capabilities:* Multiple stages with variable timing and levels, complex curve shapes
- *Applications:* Sophisticated modulation patterns, stepped sequences, complex automation
- *Programming:* User-definable breakpoints, curve shapes, and timing relationships
- *Modern examples:* Various Eurorack modules offering arbitrary function generation
- *Creative potential:* Enables modulation patterns impossible with traditional ADSR generators

**MATHS (MODULE)**
Make Noise Maths - legendary dual universal slope generator that has become an educational cornerstone of modular synthesis, teaching fundamental analog computer and synthesis concepts.

**Core Functions:**
- **Dual function generators:** Two independent slope generators with rise and fall controls
- **Attenuverters:** CV input processing with scaling and inversion
- **Mixers:** Internal signal mixing and combining capabilities
- **Logic functions:** OR, AND operations through creative patching

**Educational Philosophy:**
- **Analog computer concepts:** Teaches integration, differentiation, and signal processing
- **Self-patching:** Internal connections create feedback loops and complex behaviors
- **Signal flow understanding:** Demonstrates how CV signals interact and combine
- **Creative exploration:** Encourages experimentation over preset functionality

**Common Applications:**
- **Envelope generation:** Traditional ADSR and complex envelope shapes
- **LFO functionality:** Cycling behavior for modulation sources
- **Slew limiting:** Smoothing abrupt voltage changes
- **Audio processing:** Can process audio signals for creative effects

**Why Maths is Special:**
- **Learning tool:** Understanding Maths teaches fundamental modular synthesis concepts
- **Versatility:** Single module replaces multiple dedicated function modules
- **Community resource:** Extensive patches and tutorials available online
- **Philosophy:** Represents "patch programming" approach to synthesis

*Related:* Function Generator, Modulation, Analog Computer, Make Noise, Patching Philosophy

**MAXIMUM**
Function or module that compares multiple input signals and outputs the highest value at any given moment. Complement to minimum function for CV processing and selection.
- *Related:* Minimum, Comparator, CV Processing, Signal Selection
- *Applications:* Selecting highest modulation value, envelope peak detection, signal routing
- *Multiple inputs:* Usually 2-4 inputs with single output showing maximum value
- *Musical use:* Combining modulation sources to use whichever is highest
- *Logic equivalent:* Similar to OR gate behavior but for continuous CV rather than digital signals
- *Creative potential:* Dynamic modulation source selection based on signal levels

**MIDI (MUSICAL INSTRUMENT DIGITAL INTERFACE)**
Digital communication standard allowing electronic musical instruments, computers, and controllers to connect and exchange musical performance data.

**Core Concepts:**
- **Channels:** 16 independent channels per MIDI port for separate instruments
- **Messages:** Note on/off, control changes, program changes, system messages
- **Velocity:** Note attack strength (0-127) for dynamic expression
- **Control Changes (CC):** Real-time parameter control (modulation, volume, effects)

**Message Types:**
- **Note messages:** Note on/off with velocity and channel information
- **Control Change:** Continuous controller data (CC1-127)
- **Program Change:** Patch/preset selection messages
- **System messages:** Timing, tuning, and system-wide information

**Modern Context:**
- **USB MIDI:** Modern connection standard replacing DIN MIDI cables
- **MIDI over network:** Ethernet and wireless MIDI transmission
- **High-resolution MIDI:** 14-bit control for smoother parameter changes
- **MPE (MIDI Polyphonic Expression):** Per-note expression for advanced controllers

*Related:* CV/Gate, Control Change, Velocity, Channel, Digital Control
*Legacy:* 1983 standard still fundamental to electronic music production

**MINI KEYS**
Compact keyboard keys smaller than standard piano keys, commonly found on portable synthesizers, controllers, and desktop instruments.
- *Size comparison:* Approximately 85% of standard key width and length
- *Related:* Keyboard, Controller, Portability, Ergonomics
- *Advantages:* Compact size, portability, cost reduction, space efficiency
- *Disadvantages:* Less familiar feel for pianists, reduced expression control
- *Applications:* Desktop synthesizers, portable controllers, space-constrained instruments
- *Performance considerations:* May require adjustment period for experienced keyboardists

**MINIMUM**
Function or module that compares multiple input signals and outputs the lowest value at any given moment. Essential for CV processing and modulation limiting.
- *Related:* Maximum, Comparator, CV Processing, Signal Selection, Limiting
- *Applications:* Limiting modulation depth, selecting quietest signal, envelope gating
- *Multiple inputs:* Usually 2-4 inputs with single output showing minimum value
- *Musical use:* Preventing modulation from exceeding desired ranges
- *Logic equivalent:* Similar to AND gate behavior but for continuous CV rather than digital signals
- *Practical example:* Preventing filter cutoff from going too high regardless of modulation

**MIXER**
Device or module that combines multiple audio or CV signals, typically with independent level controls for each input and a master output level control.
- *Audio mixing:* Combines multiple sound sources into single or stereo output
- *CV mixing:* Combines control voltages for complex modulation sources
- *Related:* Level, Pan, Bus, Send/Return, Signal Routing
- *Features:* Individual channel levels, pan controls, master output level
- *Types:* Simple summing mixers, full-feature mixing consoles, CV mixers
- *Synthesis context:* Essential for combining oscillators, processing multiple signals

**MODULAR**
Synthesis approach using separate, interconnected modules rather than integrated synthesizer architectures. Philosophy emphasizing flexibility, experimentation, and custom signal flow.

**Philosophy:**
- **Flexibility:** Each function (VCO, VCF, VCA, EG) as separate, patchable module
- **Experimentation:** No predetermined signal flow encourages creative exploration
- **Customization:** Build personalized instruments suited to individual musical needs
- **Education:** Understanding signal flow and synthesis principles through hands-on patching

**Standards:**
- **Eurorack:** Dominant modern standard (3.5mm cables, +/-12V power)
- **5U/MU:** Moog Unit format with 1/4" cables and different power requirements
- **Buchla/4U:** Alternative standard with banana cables and different philosophy

**Advantages:**
- **Ultimate flexibility:** Any parameter can modulate any other parameter
- **Scalability:** Start small and expand over time
- **Learning:** Deep understanding of synthesis through component-level control
- **Community:** Active sharing of patches, techniques, and innovations

**Considerations:**
- **Complexity:** Requires understanding of signal flow and synthesis principles
- **Cost:** Can be expensive compared to integrated synthesizers
- **Space:** Requires physical space and organization for effective use

*Related:* Eurorack, CV/Gate, Patch Cable, Synthesis Philosophy, Interconnection

**MODULATION**
Variation of synthesizer parameters over time using control signals. Fundamental concept that brings static sounds to life through dynamic change.

**Types of Modulation:**
- **Amplitude Modulation (AM):** Volume/loudness changes over time
- **Frequency Modulation (FM):** Pitch/frequency changes over time  
- **Filter Modulation:** Cutoff frequency or resonance changes over time
- **Pan Modulation:** Stereo position changes over time

**Modulation Sources:**
- **LFO:** Cyclic modulation for regular patterns (vibrato, tremolo)
- **Envelope Generator:** One-time modulation following note triggers
- **Random/Sample & Hold:** Unpredictable modulation for organic variation
- **Manual Controllers:** Real-time human expression (wheels, pedals, aftertouch)

**Musical Applications:**
- **Expression:** Adding life and movement to static sounds
- **Rhythm:** Creating rhythmic patterns through timed modulation
- **Evolution:** Sounds that change and develop over time
- **Humanization:** Adding subtle variations that mimic natural performance

*Related:* LFO, Envelope, Modulation Depth, Modulation Matrix, Dynamic Control
*Key insight:* Modulation transforms synthesis from static tone generation to dynamic musical expression

**MODULATOR**
Signal source specifically used to control or vary other synthesizer parameters. The "control" side of modulation relationships.
- *Related:* Carrier, Modulation, Control Signal, CV Source
- *Types:* LFO (cyclic modulation), EG (triggered modulation), random sources, audio-rate modulators
- *FM context:* In FM synthesis, modulator frequency creates harmonics in carrier frequency
- *Applications:* Vibrato (pitch modulator), tremolo (amplitude modulator), filter sweeps
- *Modulation depth:* Amount of modulator influence on destination parameter
- *Multiple modulators:* Complex sounds often use several modulators simultaneously

**MONOPHONIC (VS PARAPHONIC VS POLYPHONIC)**
Voice allocation systems determining how synthesizers handle multiple simultaneous notes.

**MONOPHONIC:**
- **Definition:** Only one note can sound at a time
- **Behavior:** New notes cut off previous notes completely
- **Voice sharing:** Single oscillator, filter, and envelope generator
- **Advantages:** Simple, focused sound; no voice stealing; consistent timbre
- **Examples:** Minimoog, TB-303, most bass synthesizers

**PARAPHONIC:**
- **Definition:** Multiple notes can sound simultaneously but share some synthesis components
- **Typical sharing:** Multiple oscillators but shared filter and/or envelope generator
- **Behavior:** Can play chords but all notes affected by single filter/envelope
- **Character:** Chord notes have same brightness and amplitude envelope
- **Examples:** Korg Poly-800, some vintage string machines

**POLYPHONIC:**
- **Definition:** Multiple independent voices, each with complete synthesis chain
- **Full independence:** Each note has independent oscillator, filter, envelope, and processing
- **Voice allocation:** System manages which voices play which notes
- **Advantages:** True chord playing, independent note expression
- **Examples:** Prophet-5, Jupiter-8, modern digital synthesizers

*Common confusion:* Paraphonic is often mistakenly called "polyphonic" - true polyphony requires complete voice independence

**MORPH**
Smooth interpolation between different parameter settings or patches, creating seamless transitions between distinct sounds or states.
- *Related:* Interpolation, Transition, Parameter Control, Performance
- *Implementation:* Single control gradually changes multiple parameters simultaneously
- *Applications:* Live performance transitions, evolving soundscapes, parameter animation
- *Examples:* Patch morphing, filter morphing, oscillator waveform morphing
- *Control methods:* Dedicated morph controls, CV modulation, performance controllers
- *Creative use:* Creating sounds that don't exist as static presets but emerge during transition

**MOTHER 32**
Moog Mother-32 semi-modular analog synthesizer, significant for bringing modular concepts to desktop format with built-in sequencer and Moog filter character.
- *Related:* Semi-modular, Moog, Desktop Synthesizer, CV/Gate, Sequencer
- *Features:* Built-in keyboard, step sequencer, patchable routing, classic Moog ladder filter
- *Educational value:* Introduces modular synthesis concepts in integrated format
- *Expansion capability:* Patch points allow integration with Eurorack and other gear
- *Community impact:* Significant influence on desktop semi-modular synthesizer market
- *Sound character:* Classic Moog warmth and character in affordable, compact format

**MULT/MULTIPLE**
Module or device that splits one input signal to multiple outputs, allowing single signal to control multiple destinations simultaneously.
- *Types:* Passive multiple (simple splitting), buffered multiple (amplified outputs)
- *Related:* Signal Splitting, CV Distribution, Buffered Multiple, Stack Cable
- *Applications:* Sending single CV to multiple VCOs, distributing clock signals, audio splitting
- *Passive limitations:* Voltage can sag with many connections, affecting accuracy
- *Buffered advantages:* Each output provides full signal strength regardless of loading
- *Essential tool:* Fundamental utility for any modular system

**MULTI-TAP DELAY**
Delay effect with multiple output taps at different delay times, creating complex echo patterns and rhythmic effects from single input signal.
- *Related:* Delay, Echo, Rhythm, Time-based Effects
- *Functionality:* Single delay line with multiple read points at different times
- *Applications:* Complex rhythmic echoes, stereo delay effects, reverb building blocks
- *Control:* Individual level and timing control for each tap
- *Creative potential:* Polyrhythmic effects, spacious textures, rhythmic complexity
- *Modern implementation:* Available in both hardware delay units and software plugins

**MULTITIMBRAL**
Capability to produce multiple different instrument sounds simultaneously, typically across different MIDI channels or zones.
- *Related:* MIDI, Channel, Patch, Timbre, Multi-patch
- *Implementation:* Different synthesis patches assigned to different MIDI channels
- *Applications:* Single keyboard controlling multiple instrument sounds, sequencer playback
- *Polyphony interaction:* Available polyphony distributed across active timbres
- *Examples:* Many digital synthesizers, samplers, sound modules
- *Performance advantage:* Single instrument functions as multiple instruments simultaneously

**MULTIPLEXER/MUX**
Digital circuit that selects one of several input signals and routes it to a single output based on control signals. Essential for signal routing and selection.
- *Related:* Signal Routing, Digital Control, Switching, Selection
- *Function:* Control voltage or digital signal determines which input passes to output
- *Applications:* Sequential switching between signals, CV-controlled signal routing
- *Types:* 2:1, 4:1, 8:1 multiplexers common in electronic music applications
- *Creative use:* Rhythmic switching between different CV or audio sources
- *Inverse function:* Demultiplexer routes single input to multiple outputs based on control

**MUTE**
Function that silences or cuts audio signals without affecting other aspects of signal processing or routing. Essential for mixing and performance control.
- *Related:* Solo, Level, Mixer, Performance Control, Signal Gating
- *Implementation:* Usually cuts signal to zero while maintaining all other processing
- *Applications:* Live performance control, mixing workflow, troubleshooting signal flow
- *Types:* Hard mute (instant cut), soft mute (fade out), group muting
- *Automation:* Can be automated for rhythmic effects and dynamic arrangements
- *Safety function:* Quick way to eliminate unwanted sounds or feedback

---

## Alternative Options

For different learning approaches to "M" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free MIDI software for protocol exploration, online Maths patch tutorials, basic mixing applications
- **Different character:** Hands-on modular workshops focusing on Maths patching philosophy, vintage synthesizer exploration for mono/para/polyphonic differences
- **Premium:** Professional mixing courses covering advanced console techniques, modular synthesis masterclasses exploring complex modulation strategies, MIDI programming workshops

**Practical Exploration:**
- **Maths patch programming:** Work through fundamental Maths patches to understand analog computer concepts
- **MIDI implementation:** Set up multi-channel MIDI control for multiple synthesizers
- **Modulation experiments:** Create complex modulation using multiple sources and destinations
- **Voice allocation testing:** Compare mono/paraphonic/polyphonic behavior on same musical material
- **Mixer gain staging:** Practice proper level management in multi-source mixing scenarios
- **Multiple signal distribution:** Test passive vs buffered multiples for CV accuracy

**Advanced Study:**
- **Magic smoke prevention:** Learn proper electrical practices and component protection
- **MArF programming:** Design complex modulation patterns using arbitrary function generators
- **Multi-tap delay design:** Create polyrhythmic effects and complex echo patterns
- **Multiplexer applications:** Build CV-controlled signal routing systems
- **Morph parameter mapping:** Design smooth transitions between distinct synthesis states

**Voice Allocation Comparison:**
- **Monophonic:** Bass leads, solo lines, focused single-note passages
- **Paraphonic:** Chord pads where all notes share character, organ-like sounds
- **Polyphonic:** Piano-like playing, independent chord voices, complex harmonies

---

*This "M" section covers fundamental synthesis concepts (modulation, modulators), system organization (modular, mixer, MIDI), voice allocation understanding (mono/para/polyphonic), and practical tools (Maths, multiples, muting), providing comprehensive coverage from basic concepts to advanced modular synthesis philosophy.*