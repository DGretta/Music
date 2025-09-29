# Musical Dictionary - Sections I/J/K
*Essential "I," "J," and "K" Terms for Synthesis, Modular, and Production*

---

## I

**IADSR**
Inverted ADSR envelope where the sustain stage represents the lowest level rather than a held level, creating envelope shapes that start high, decay to sustain level, then rise on release.
- *Related:* ADSR, Envelope Generator, Inverted Envelope, Negative Envelope
- *Behavior:* Attack rises to peak, decay falls to sustain (low level), release rises back up
- *Applications:* Inverted filter envelopes (brightness decreases during note), ducking effects
- *Creative use:* Creates "backwards" feeling envelopes, useful for atmospheric sounds
- *Implementation:* Available in some advanced envelope generators and software synthesizers
- *Musical effect:* Notes get darker/quieter during sustain phase, brighten on release

**IMPEDANCE**
Electrical resistance to AC signals, measured in ohms. Critical concept for proper signal levels, preventing loading, and avoiding frequency response issues.
- *Related:* Ohms, Load, Signal Level, Frequency Response, Matching
- *High impedance:* 10kΩ or higher - used for instrument and line signals, minimal current draw
- *Low impedance:* 50-600Ω - used for microphones and professional audio, can drive long cables
- *Matching importance:* Mismatched impedances cause signal loss, frequency response changes
- *Input/output specs:* Synthesizers typically high-Z inputs, variable output impedances
- *Practical impact:* Wrong impedance matching causes weak signals, tone changes, or loading

**INPUT**
Connection point where external signals enter audio equipment or modules. Fundamental concept for signal flow and system integration.
- *Related:* Signal Flow, Impedance, Level, Connector, Audio Input
- *Types:* Audio inputs (line, instrument, microphone), CV inputs (control voltage), gate inputs
- *Level considerations:* Line level (+4dBu, -10dBV), instrument level, microphone level
- *Impedance matching:* Input impedance should be higher than source output impedance
- *Creative applications:* External processing through synthesizer filters, sampling inputs
- *Modular context:* Multiple inputs for mixing, switching, or processing external signals

**INTERVAL**
Musical distance between two pitches, measured in semitones or described by traditional names. Foundation of melody, harmony, and musical relationships.
- *Basic intervals:* Unison (0), semitone (1), whole tone (2), minor third (3), major third (4)
- *Related:* Semitone, Harmony, Scale, Chord, Music Theory
- *Perfect intervals:* Unison, fourth, fifth, octave - sound stable and consonant
- *Synthesis applications:* Programming harmonies, setting oscillator relationships, quantizer scales
- *Frequency ratios:* Octave = 2:1, perfect fifth = 3:2, major third = 5:4
- *Electronic music:* Understanding intervals helps with tuning multiple oscillators

**INVERTER/INVERTOR**
Circuit that flips the polarity of signals, converting positive voltages to negative and vice versa. Essential utility for modulation and signal processing.
- *Related:* Polarity, Attenuverter, Signal Processing, CV, Audio
- *Function:* +5V input becomes -5V output, -3V input becomes +3V output
- *Applications:* Inverting modulation directions, creating complementary CV signals
- *Audio context:* Phase inversion, stereo width effects, cancellation techniques
- *Modular use:* Creating multiple modulation variations from single source
- *Math:* Multiplies input signal by -1 (negative unity gain)

**IV CABLE**
Patch cable with multiple connectors that resembles medical IV tubing, used for splitting signals to multiple destinations in modular systems.
- *Related:* Stack Cable, Mult, Signal Splitting, Patch Cable
- *Name origin:* Visual similarity to medical intravenous (IV) lines, not "1 Volt"
- *Function:* Splits one output to multiple inputs without buffering
- *Configurations:* Various combinations - 1 to 2, 1 to 3, 1 to 4 splits common
- *Limitation:* Passive splitting can cause voltage sag with many connections
- *Alternative:* Buffered multiples prevent voltage drop in critical applications
- *Convenience:* Reduces need for dedicated multiple modules in simple patches

---

## J

**JACK**
Audio connector receptacle that accepts plugs for signal connections. Fundamental hardware interface for all audio and CV patching.
- *Sizes:* 1/4" (6.35mm) for traditional audio, 3.5mm (1/8") for Eurorack, XLR for professional
- *Types:* Mono (TS - tip/sleeve), stereo (TRS - tip/ring/sleeve), balanced (TRS or XLR)
- *Related:* Connector, Patch Cable, TRS, TS, Signal Connection
- *Switching types:* Normally closed, normally open for automatic switching functions
- *Durability:* Professional jacks rated for thousands of insertion cycles
- *Modular context:* 3.5mm jacks standard for Eurorack, color coding common for signal types

**JITTER**
Small, rapid variations in timing that can affect digital audio quality and synchronization accuracy. Generally undesirable in professional applications.
- *Related:* Clock, Timing, Digital Audio, Sync, Word Clock
- *Types:* Clock jitter (timing variations), sample jitter (A/D conversion timing)
- *Audible effects:* Can cause subtle harshness, loss of stereo imaging, reduced clarity
- *Sources:* Power supply noise, electromagnetic interference, poor clock design
- *Reduction:* High-quality clocks, proper power supply design, shielding
- *Professional audio:* Word clock generators designed to minimize jitter

---

## K

**KARPLUS-STRONG**
Digital synthesis algorithm that simulates plucked string sounds using a delay line with feedback and filtering. Efficient method for realistic string and percussion sounds.
- *Related:* Physical Modeling, Digital Synthesis, Delay Line, String Simulation
- *Algorithm:* Short delay line with low-pass filtering and feedback creates decay and tone
- *Control parameters:* Delay time (pitch), feedback amount (sustain), filter cutoff (tone)
- *Applications:* Guitar sounds, harp, percussion, realistic plucked instruments
- *Efficiency:* Computationally simple compared to complex physical modeling
- *Variations:* Extended versions add features like sympathetic resonance and body modeling

**KB TRACKING (KEYBOARD TRACKING)**
Feature that makes synthesizer parameters follow keyboard pitch, typically used with filters to maintain consistent brightness across the keyboard range.
- *Related:* Keyboard, Filter, Pitch Tracking, CV, Brightness
- *Function:* Higher notes automatically open filter more, lower notes close filter more
- *Why needed:* Without tracking, high notes sound muffled, low notes sound too bright
- *Amount control:* Usually adjustable from 0% (no tracking) to 100% (full tracking)
- *Applications:* Filter cutoff tracking, envelope amount tracking, LFO speed tracking
- *Musical result:* Makes synthesized instruments sound more natural and playable

**KEYTAR**
Keyboard instrument designed to be worn with a strap and played like a guitar, popular in 1980s rock and electronic music performances.
- *Related:* Keyboard, Performance, MIDI Controller, Stage Performance
- *Design:* Keyboard layout on guitar-shaped body, often with pitch bend and modulation controls
- *Famous users:* Jan Hammer, Howard Jones, Jordan Rudess
- *Modern versions:* MIDI controllers, software instruments, renewed popularity
- *Performance advantage:* Mobility, stage presence, ability to move around while playing
- *Cultural impact:* Symbol of 1980s electronic music, both celebrated and parodied

**KRELL PATCH**
Generative modular synthesizer technique where modules are cross-patched to create self-evolving, semi-random musical patterns without external sequencing.
- *Name origin:* Inspired by the electronic sounds in "Forbidden Planet" (1956) attributed to the alien Krell
- *Related:* Generative Music, Modular Synthesis, Cross-patching, Ambient
- *Technique:* Feedback loops, slow modulation, self-triggering creates evolving soundscapes
- *Philosophy:* Minimal human intervention, system generates its own musical development
- *Modern practice:* Popular in ambient and experimental modular synthesis communities
- *Setup approach:* Random voltage sources trigger envelopes that trigger other events in complex webs

---

## Alternative Options

For different learning approaches to "I/J/K" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free digital synthesis software for Karplus-Strong experimentation, online impedance calculators, DIY IV cable construction
- **Different character:** Hands-on modular workshops focusing on Krell patch techniques, vintage keytar performance videos and tutorials
- **Premium:** Professional audio engineering courses covering impedance matching and jitter reduction, advanced modular synthesis masterclasses exploring generative techniques

**Practical Exploration:**
- **IADSR programming:** Compare inverted vs standard ADSR envelopes on filter cutoff
- **Impedance experiments:** Test high vs low impedance connections to hear loading effects  
- **IV cable construction:** Build custom splitting cables for specific patching needs
- **Karplus-Strong synthesis:** Program string-like sounds using delay and feedback
- **KB tracking setup:** Adjust filter tracking amounts to understand brightness consistency
- **Krell patch creation:** Build self-generating patches using cross-modulation and feedback

**Advanced Study:**
- **Input design analysis:** Study different input stage designs and their sonic characteristics
- **Interval mathematics:** Master frequency ratios and their harmonic relationships
- **Jitter measurement:** Learn to measure and minimize timing variations in digital systems
- **Keytar performance techniques:** Develop stage performance skills combining movement and playing
- **Krell composition theory:** Study generative music principles and system design

**Impedance Reference:**
- **Guitar pickups:** ~10kΩ (high impedance, needs matching)
- **Synthesizer outputs:** 1kΩ-10kΩ (varies by manufacturer)
- **Mixer inputs:** 10kΩ+ (high impedance to avoid loading)
- **Professional line:** 600Ω (low impedance, drives long cables)
- **Microphones:** 150-600Ω (low impedance, balanced)

---

*This combined "I/J/K" section covers essential connectivity concepts (impedance, inputs, jacks), synthesis techniques (IADSR, Karplus-Strong), performance tools (keytar, KB tracking), and creative approaches (Krell patches), providing comprehensive coverage of these less common but important terms across electronic music production.*