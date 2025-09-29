# Musical Dictionary - Section B
*Essential "B" Terms for Synthesis, Modular, and Production*

---

## B

**BALANCED AUDIO**
Audio signal transmission using two conductors carrying equal but opposite signals, with a third conductor for ground. Provides excellent noise rejection over long cable runs and is standard for professional audio.
- *Advantage:* Noise affects both conductors equally and cancels out at destination
- *Connectors:* XLR (3-pin), TRS (1/4" tip-ring-sleeve)
- *Related:* Unbalanced Audio, XLR, TRS, Professional Audio
- *Why it matters:* Essential for studio integration and long cable runs without noise pickup
- *Home studio note:* Many interfaces provide balanced I/O even in budget ranges

**BANANA PLUG/CABLE**
4mm connector system common in Buchla modular systems and some test equipment. Named for the slight curve that creates spring tension for secure connection.
- *Related:* Buchla, Patch Cable, Connector Types
- *Contrast with:* 3.5mm (Eurorack standard), 1/4" (traditional synthesizer standard)
- *Voltage rating:* Typically rated for higher voltages than 3.5mm patch cables
- *Color coding:* Often color-coded for different signal types (audio, CV, gates)
- *Modern use:* Some contemporary modules offer banana connectivity for Buchla compatibility

**BARK SCALE**
Perceptual frequency scale based on human hearing, dividing audible spectrum into 24 critical bands. More closely matches how humans perceive pitch relationships than linear frequency scaling.
- *Related:* Critical Band, Psychoacoustics, Frequency, Equal Loudness Curves
- *Technical:* Each bark represents roughly 1.3 semitones below 500Hz, wider intervals above
- *Applications:* Audio compression algorithms, masking calculations, filter design
- *Why it matters:* Understanding perception helps with EQ decisions and sound design
- *Practical use:* Some analysis tools display frequency content on bark scale rather than linear Hz

**BBD (BUCKET BRIGADE DELAY)**
Analog delay technology using chains of capacitors and switches to create short delays. Creates characteristic warm, slightly degraded delay sounds.
- *Related:* Analog Delay, Chorus, Flanger, MN3007, MN3005
- *Technical:* Signal passes through series of sample-and-hold stages
- *Character:* High-frequency rolloff, subtle distortion, clock noise artifacts
- *Famous examples:* Boss DM-2, Electro-Harmonix Memory Man, TC Electronic chorus pedals
- *Modern revival:* Many contemporary delay modules use BBD chips for vintage character
- *Limitation:* Maximum delay time limited by number of stages and clock frequency

**BEATING**
Acoustic phenomenon when two slightly detuned oscillators create rhythmic amplitude modulation. The beat frequency equals the difference between the two frequencies.
- *Technical:* Two waves at 100Hz and 103Hz create 3Hz beating
- *Related:* Detuning, Chorus, Unison, Oscillator Sync
- *Musical use:* Creates thickness, movement, and organic character in sounds
- *Tuning application:* Used to precisely tune oscillators by eliminating beats
- *Creative application:* Intentional beating adds life to static sounds
- *Multiple oscillators:* Complex beating patterns emerge with 3+ slightly detuned sources

**BERLIN SCHOOL**
Genre of electronic music characterized by sequenced patterns, evolving textures, and hypnotic repetition. Originated in 1970s Germany with groups like Tangerine Dream and Klaus Schulze.
- *Related:* Sequencer, Pattern, Modulation, Kosmische Musik
- *Key characteristics:* Long-form pieces, gradual evolution, minimal percussion
- *Synthesis approach:* Heavy use of analog sequencers, filters, and modulation
- *Modern influence:* Continues to influence ambient, techno, and modular music
- *Performance style:* Often performed live with extensive real-time manipulation
- *Essential albums:* Tangerine Dream "Phaedra," Klaus Schulze "Timewind"

**BINARY**
Number system using only 0 and 1, fundamental to digital systems. In musical contexts, often refers to on/off states like gates, triggers, or digital control signals.
- *Related:* Digital, Logic Gates, MIDI, Computer Music
- *Musical applications:* Gate patterns, rhythm programming, digital synthesis
- *Bit representation:* Each binary digit (bit) represents an on/off state
- *MIDI context:* Note on/off messages, CC values converted to binary for transmission
- *Modular context:* High/low voltage states representing binary information
- *Programming:* Essential for understanding digital audio and MIDI implementation

**BIPOLAR**
Signals that swing both positive and negative around zero volts (typically ±5V or ±10V in modular systems). Most audio signals and many CV sources are bipolar.
- *Range examples:* -5V to +5V, -10V to +10V
- *Related:* Unipolar, CV, Offset, Audio Signal
- *Opposite:* Unipolar (0V to +10V only)
- *Common sources:* Audio signals, LFO outputs, envelope generators
- *Important distinction:* Many modulation destinations expect specific polarities
- *Conversion:* Offset/attenuverter can convert between bipolar and unipolar

**BPM (BEATS PER MINUTE)**
Standard measurement of musical tempo. Essential for synchronization between devices and establishing groove relationships.
- *Related:* Tempo, Clock, Sync, Sequencer, DAW
- *Common ranges:* 60-90 (slow), 90-120 (moderate), 120-140 (dance), 140+ (fast electronic)
- *Technical conversion:* BPM to clock frequency calculations for hardware sync
- *Subdivision relationship:* Quarter notes, eighth notes, sixteenth notes all relate to base BPM
- *Modern usage:* DAW tempos, drum machine settings, sequencer speeds
- *Performance note:* Live tempo changes require sync adjustments across all devices

**BUCHLA**
West Coast synthesis approach developed by Don Buchla, emphasizing complex oscillators, low-pass gates, and non-keyboard controllers. Alternative philosophy to East Coast (Moog) synthesis.
- *Related:* West Coast Synthesis, LPG, Complex Oscillator, Banana Cables
- *Key concepts:* Harmonic generation through waveshaping vs filtering
- *Controllers:* Touch plates, ribbon controllers, joysticks instead of keyboards
- *Sound character:* Organic, evolving, less aggressive than Moog-style synthesis
- *Modern influence:* Many Eurorack modules implement Buchla-inspired concepts
- *Philosophy:* Emphasis on exploration and unpredictability rather than precise control

**BUFFERED MULTIPLE (ACTIVE MULTIPLE)**
Signal splitter that uses active circuitry to maintain signal strength when distributing one input to multiple outputs. Prevents voltage sag that occurs with passive multiples.
- *Related:* Passive Multiple, CV Distribution, Signal Splitting
- *Why needed:* CV inputs draw current, causing voltage drop with passive splits
- *When to use:* Critical CV signals (pitch, precise modulation), long cable runs
- *Technical advantage:* Each output provides fresh, full-strength signal
- *Typical outputs:* 4-8 buffered outputs from single input
- *Power requirement:* Requires +/-12V power unlike passive multiples

**BURST GENERATOR**
Module that outputs a rapid series of pulses when triggered, rather than a single pulse. Creates drum-like textures, complex triggering patterns, and rhythmic effects.
- *Related:* Trigger, Gate, Drum Synthesis, Pattern Generator
- *Parameters:* Burst length (number of pulses), internal timing, pulse width
- *Musical applications:* Snare drum synthesis, complex polyrhythms, trigger multiplication
- *Creative use:* Triggering multiple envelopes in quick succession creates unique textures
- *Modern examples:* Mutable Grids, Noise Engineering modules, various trigger utilities
- *Performance technique:* Single trigger input creates complex rhythmic output

**BUS BOARDS**
Power distribution boards in Eurorack systems that distribute +12V, -12V, and +5V from the main power supply to individual module power headers.
- *Related:* Eurorack, Power Supply, Flying Bus Cables, Module Power
- *Types:* Ribbon cable connected, board-mounted, powered (with regulation)
- *Capacity:* Typically support 10-20 modules depending on size
- *Installation:* Mounted to case rails, connect to PSU and modules
- *Power monitoring:* Some include LED indicators for power status
- *Troubleshooting:* Central point for diagnosing power-related module issues
- *Expansion:* Multiple bus boards can be chained for larger systems

---

## Alternative Options

For different learning approaches to "B" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free manufacturer documentation focusing on "B" terms, online synthesis communities and forums
- **Different character:** Video demonstrations of beating phenomena, Berlin School listening sessions with technical analysis
- **Premium:** Professional audio engineering courses covering balanced audio systems, hands-on modular workshops exploring Buchla concepts

**Practical Exploration:**
- **Beating experiments:** Slightly detune two oscillators to hear beating effects firsthand
- **Binary rhythm programming:** Create patterns using only on/off states in sequencers
- **Bipolar/unipolar comparison:** Use offset modules to convert between signal types and hear differences

**Advanced Study:**
- **Bark scale applications:** Analyze frequency content using bark-scaled spectrum analyzers
- **BBD circuit analysis:** Study vintage delay pedal schematics to understand bucket brigade operation
- **Berlin School production techniques:** Recreate classic sequencer patterns and modulation approaches

---

*This "B" section continues building essential synthesis vocabulary, focusing on technical concepts, signal types, and musical styles that form the foundation for advanced electronic music production.*