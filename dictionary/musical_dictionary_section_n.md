# Musical Dictionary - Section N
*Essential "N" Terms for Synthesis, Modular, and Production*

---

## N

**NOISE (AND COLOURS)**
Random electrical signals used as sound sources in synthesis, with different frequency characteristics creating distinct "colors" based on their spectral content.

**White Noise:**
- **Characteristics:** Equal energy at all frequencies, sounds like radio static or rushing air
- **Applications:** Snare drums, hi-hats, wind sounds, general percussion synthesis
- **Technical:** Flat frequency response across the audio spectrum
- **Symbol:** Often represented as snow or static in visual displays

**Pink Noise:**
- **Characteristics:** Equal energy per octave, sounds more natural than white noise
- **Applications:** Room tone, natural ambiences, testing audio systems
- **Technical:** 3dB per octave rolloff (−3dB/octave slope)
- **Human perception:** More closely matches how we hear frequency distribution

**Brown/Red Noise:**
- **Characteristics:** Heavy emphasis on low frequencies, sounds like distant thunder or ocean waves
- **Applications:** Sub-bass textures, natural low-frequency ambiences, relaxation sounds
- **Technical:** 6dB per octave rolloff (−6dB/octave slope)
- **Alternative names:** Brownian noise (from Brownian motion), red noise

**Blue Noise:**
- **Characteristics:** Emphasis on high frequencies, sounds bright and hissy
- **Applications:** High-frequency textures, digital dithering, special effects
- **Technical:** +3dB per octave slope (opposite of pink noise)
- **Usage:** Less common in musical applications, more in technical/mastering contexts

**Violet Noise:**
- **Characteristics:** Even more high-frequency emphasis than blue noise
- **Technical:** +6dB per octave slope
- **Applications:** Specialized technical applications, extreme high-frequency effects

*Related:* Random, Spectrum, Frequency Response, Sound Sources, Synthesis Building Blocks
*Creative applications:* Filtering colored noise creates a wide range of natural and synthetic textures

**NORMALLED**
Pre-patched internal connections in modular synthesizer systems that route signals automatically when no patch cable is inserted, but are overridden when cables are plugged in.
- *Related:* Modular Synthesis, Patch Cable, Signal Flow, Default Routing
- *Function:* Provides useful default connections without requiring patch cables
- *Override behavior:* Inserting patch cable breaks normalled connection and uses cable input instead
- *Examples:* VCO output normalled to VCF input, envelope output normalled to VCA control
- *Efficiency:* Allows basic patches to work with minimal cables while maintaining full flexibility
- *Design philosophy:* Balances pre-wired convenience with modular flexibility

**NOTE**
Fundamental musical unit representing specific pitch, duration, and timing relationships. In electronic music, encompasses both musical concepts and technical MIDI implementation.

**Musical Context:**
- **Pitch notation:** A, B, C, D, E, F, G with sharps and flats
- **Octave designation:** C4 = middle C, numbering system for pitch specification
- **Duration:** Whole note, half note, quarter note, etc. (relative timing values)
- **Frequency relationship:** A440 = 440Hz reference tuning

**MIDI Implementation:**
- **Note numbers:** 0-127 (Middle C = 60, A440 = 69)
- **Note on/off messages:** Trigger and release information with velocity
- **Velocity:** Attack strength (0-127) for dynamic expression
- **Channel assignment:** Which instrument/voice plays the note

**Synthesis Context:**
- **Gate/trigger generation:** Notes create gate signals for envelope triggering
- **Pitch CV:** Note information converted to 1V/octave control voltage
- **Polyphony management:** How multiple simultaneous notes are handled

*Related:* MIDI, Pitch, Gate, CV, Musical Intervals, Frequency

**NORMALIZE/NORMALIZATION**
Process of adjusting audio levels to a standard reference level, ensuring consistent loudness across different recordings or signal processing stages.
- *Related:* Level, Gain, Peak, RMS, Loudness Standards
- *Peak normalization:* Adjusts highest peak to specified level (0dBFS, -3dBFS, etc.)
- *RMS normalization:* Adjusts average level to specified loudness target
- *Loudness normalization:* Uses perceptual loudness standards (LUFS) for consistent perceived volume
- *Applications:* Mastering, broadcast standards, streaming platform preparation
- *Caution:* Can reduce dynamic range if applied inappropriately to already-compressed material

**NOTCH FILTER**
Filter that removes a narrow band of frequencies while passing frequencies above and below the notch. Also called band-reject or band-stop filter.
- *Related:* Band-Pass Filter, EQ, Frequency Response, Filter Types
- *Function:* Opposite of band-pass filter - removes specific frequency range
- *Applications:* Removing 60Hz hum, eliminating feedback frequencies, creative filtering effects
- *Parameters:* Center frequency (what to remove), Q/bandwidth (how narrow the notch)
- *Sharp vs wide:* High Q creates narrow notch, low Q creates wide frequency removal
- *Creative use:* Removing fundamental frequencies to emphasize harmonics, creating hollow sounds

**NULL**
Condition where signals cancel each other out due to phase relationships, resulting in silence or significant level reduction.
- *Related:* Phase, Cancellation, Polarity, Interference
- *Complete null:* Identical signals 180° out of phase cancel completely
- *Partial null:* Phase differences cause frequency-dependent cancellation
- *Applications:* Phase alignment, stereo width control, feedback elimination
- *Creative use:* Mid-side processing, stereo effects, signal subtraction techniques
- *Troubleshooting:* Unexpected nulling often indicates phase or polarity problems

**NUTUBE**
Korg's proprietary vacuum tube technology using miniaturized dual triode tubes in modern electronic instruments, providing tube warmth and character in compact formats.
- *Related:* Vacuum Tube, Analog Warmth, Saturation, Korg Technology
- *Technology:* Real vacuum tubes (not simulation) in miniaturized package
- *Applications:* Korg Volca series, Monologue, other modern Korg instruments
- *Character:* Provides tube saturation, compression, and harmonic content
- *Advantages:* Authentic tube sound in portable, low-power applications
- *Innovation:* Bridges vintage tube character with modern design constraints

**NYQUIST FREQUENCY/THEOREM**
Fundamental principle of digital audio stating that sample rate must be at least twice the highest frequency to be accurately reproduced. Critical concept for understanding digital audio limitations.
- *Mathematical relationship:* Nyquist frequency = Sample rate ÷ 2
- *Related:* Sample Rate, Aliasing, Anti-aliasing Filter, Digital Audio
- *Common examples:* 44.1kHz sample rate → 22.05kHz Nyquist frequency
- *Aliasing prevention:* Frequencies above Nyquist fold back as false frequencies (aliases)
- *Anti-aliasing filters:* Hardware filters remove frequencies above Nyquist before conversion
- *Practical impact:* Determines maximum frequency response of digital audio systems
- *Oversampling:* Higher sample rates provide more headroom above audible frequencies

---

## Alternative Options

For different learning approaches to "N" section terminology:

**Enhanced Alternative Options:**
- **Budget:** Free noise generators for exploring different noise colors, online Nyquist frequency calculators, basic normalization plugins
- **Different character:** Hands-on modular workshops focusing on normalled connections and patching efficiency, vintage tube gear exploration for Nutube comparison
- **Premium:** Professional mastering courses covering normalization standards, advanced digital audio courses exploring Nyquist theorem applications, modular synthesis masterclasses using noise as primary sound source

**Practical Exploration:**
- **Noise color comparison:** Generate and filter different noise types to understand spectral characteristics
- **Normalled connection testing:** Explore modular patches with and without cables to understand defaults
- **Notch filter applications:** Use notch filters to remove specific problem frequencies from audio
- **Null detection:** Practice identifying and fixing phase cancellation issues
- **Nyquist experiments:** Test aliasing effects with sine waves above Nyquist frequency

**Advanced Study:**
- **Noise synthesis techniques:** Use filtered noise as basis for percussion and texture synthesis
- **Normalization standards:** Learn broadcast and streaming platform loudness requirements
- **Nutube circuit analysis:** Study how miniaturized tubes integrate with modern electronics
- **Nyquist theory mathematics:** Understand sampling theory and its practical implications
- **Notch filter design:** Build custom EQ curves using multiple notch filters

**Noise Color Applications:**
- **White noise:** Snare drums, cymbals, wind effects, general percussion
- **Pink noise:** Room testing, natural ambiences, masking noise
- **Brown noise:** Sub-bass textures, thunder, ocean waves, relaxation
- **Blue noise:** High-frequency textures, dithering, digital processing
- **Filtered combinations:** Create custom spectral shapes for unique textures

**Nyquist Frequency Chart:**
- **44.1kHz (CD quality):** 22.05kHz maximum frequency
- **48kHz (professional):** 24kHz maximum frequency  
- **96kHz (high-resolution):** 48kHz maximum frequency
- **192kHz (extreme resolution):** 96kHz maximum frequency
- **Note:** Human hearing typically extends to ~20kHz, so 44.1kHz covers audible range

---

*This "N" section covers fundamental synthesis sources (noise colors), system efficiency concepts (normalled connections), audio processing tools (notch filters, normalization), technical principles (Nyquist theorem), and modern innovations (Nutube technology), providing comprehensive understanding from basic sound generation to advanced digital audio theory.*