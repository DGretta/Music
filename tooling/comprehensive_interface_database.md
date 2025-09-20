# Comprehensive Module Interface Database

## Purpose
This database contains VERIFIED physical interface specifications for all modules covered in guides. Every element must be confirmed against official manuals, high-resolution photos, or physical modules.

## Database Format
Each entry includes ALL physical interface elements:
- **Inputs**: Every jack that accepts signals
- **Outputs**: Every jack that outputs signals  
- **Knobs**: All rotary controls with their exact names
- **Buttons**: All momentary/toggle buttons
- **Switches**: All mechanical switches
- **LEDs**: All visual indicators
- **Displays**: Any screens/text displays
- **Other**: Unusual interface elements

## Verification Status
- ✅ **VERIFIED**: Confirmed against official manual + photos
- ⚠️ **PARTIAL**: Some elements verified, others need confirmation  
- ❌ **UNVERIFIED**: Needs complete verification

---

## VERIFIED MODULES

### Erica Synths Pico Voice ✅
**Manual Source**: https://www.ericasynths.lv/media/Pico_VOICE_manual.pdf
**Verification Date**: 2025-09-18

**Physical Interface:**
- **Inputs**: 1V/Oct input, CV input (assignable)
- **Outputs**: OUT (audio output)
- **Knobs**: TUNE knob, PAR1 knob, PAR2 knob  
- **Buttons**: Button (algorithm selection + config)
- **Switches**: None
- **LEDs**: RGB LED (algorithm indication)
- **Displays**: None
- **Other**: None

**Interface Behavior:**
- CV input assignable to: Tune, PAR1, or PAR2 (set in config mode)
- Algorithm selection: Short press button cycles through 8 algorithms
- Config mode: Hold button 1 second, LED blinks, rotate PAR2 to set options
- No gate input - algorithms respond to note changes on 1V/Oct

**Common Mistakes:**
- ❌ "Gate input" - doesn't exist
- ❌ "Trigger input" - doesn't exist  
- ✅ Use "1V/Oct input" for pitch, "CV input" for modulation

### Erica Synths Pico DRUM2 ✅  
**Manual Source**: https://www.ericasynths.lv/media/Pico_DRUMS2_manual.pdf
**Verification Date**: 2025-09-18

**Physical Interface:**
- **Inputs**: TRIGG input, CV1 input (assignable), CV2 input (PARAM1 + 1V/Oct)
- **Outputs**: OUT (audio output)
- **Knobs**: PARAM1 knob, PARAM2 knob, DECAY knob
- **Buttons**: MODE button (algorithm selection + config)
- **Switches**: None
- **LEDs**: RGB LED (algorithm indication + trigger feedback)
- **Displays**: None
- **Other**: None

**Interface Behavior:**
- TRIGG input: Accepts +5V triggers, 1ms minimum width
- CV1 input assignable to: PARAM2 (default), DECAY, or algorithm selection
- CV2 input: Controls PARAM1, tracks 1V/Oct for musical tuning
- Algorithm selection: Short press MODE cycles through 8 algorithms
- Config mode: Hold MODE 2 seconds, LED blinks colors (Red=PARAM2, Green=DECAY, Blue=algorithm)

**Common Mistakes:**
- ❌ "Gate input" - it's "TRIGG input"
- ❌ Generic "CV input" - specify CV1 or CV2
- ✅ Use "TRIGG input" for triggers, "CV1/CV2 input" for modulation

### EarthQuaker Devices Afterneath ✅
**Manual Source**: EarthQuaker Devices official documentation + Guide verification
**Verification Date**: 2025-09-20

**Physical Interface:**
- **Inputs**: Audio Input (main signal), Reflect Send/Return (external processing loop), 4 CV inputs (Drag, Mode, Diffuse, Length)
- **Outputs**: Main Output (processed signal), Reflect Send (for external processing)
- **Knobs**: Input (level), Dampen (tone), Reflect (feedback/regeneration), Mix (wet/dry), Drag (delay line separation), Diffuse (smoothing), Length (decay time)
- **Buttons**: None
- **Switches**: Dry Kill (on/off), LIN/XPO curve selection, Mode selector (9-position)
- **LEDs**: None specified
- **Displays**: None
- **Other**: CV attenuators for each CV input (inverting attenuators)

**Interface Behavior:**
- **Drag control**: Signature parameter that separates delay lines for stuttering/warped effects
- **Mode selector**: 9 operational modes (3 unquantized, 6 quantized scales)
- **Reflect send/return**: External processing loop in feedback path
- **CV inputs**: Dedicated CV control for Drag, Mode, Diffuse, Length with inverting attenuators
- **Self-oscillation**: Achieved by increasing Reflect and Length parameters
- **Curve types**: Linear (LIN) vs Exponential (XPO) response curves
- **Dry Kill**: Removes dry signal for send/return applications

**Operational Modes:**
- **Mode 1**: Unquantized (smooth response)
- **Mode 2**: Unquantized with Slew (tape delay-style lag)
- **Mode 3**: Unquantized 1V/Octave (VCO behavior)
- **Mode 4**: Chromatic Scale (12 semitones)
- **Mode 5**: Major Scale (7-note major)
- **Mode 6**: Minor Scale (7-note minor)
- **Mode 7**: Pentatonic Scale (5-note always-musical)
- **Mode 8**: Octaves & Fifths (perfect consonances)
- **Mode 9**: Octaves (pure octave relationships)

**Common Mistakes:**
- ❌ "I can't get the Drag effect to work" - Drag is most effective with audio present and proper input levels
- ❌ "The reverb sounds too digital/harsh" - Try XPO curve instead of LIN, adjust Dampen for warmer tone
- ❌ "Self-oscillation won't track pitch properly" - Use Mode 3 (1V/Oct) and calibrate Drag CV attenuator
- ❌ "External processing loop doesn't work" - Ensure proper connections: Reflect Send → processor → Reflect Return
- ❌ "CV control seems backwards" - CV inputs have inverting attenuators, adjust accordingly
- ✅ Use "Drag CV" for pitch control in quantized modes (4-9), "Mode" parameter for scale selection
- ✅ Start with Mode 1 for learning basic operation, then explore quantized modes for musical applications
- ✅ Use Reflect Send/Return for external processing in feedback path, not parallel processing

### Expert Sleepers Disting mk4 ✅
**Manual Source**: https://www.expert-sleepers.co.uk/disting.html + Guide verification
**Verification Date**: 2025-09-20

**Physical Interface:**
- **Inputs**: X input (CV/audio), Y input (CV/audio), Z CV input (parameter control)
- **Outputs**: A output (processed signal/CV), B output (secondary/alternate signal/CV)
- **Knobs**: S knob (parameter selection/adjustment), Z knob (main algorithm parameter)
- **Buttons**: S knob press (menu navigation, parameter cycling)
- **Switches**: None
- **LEDs**: Socket LEDs (red=positive voltage, blue=negative voltage), display backlight
- **Displays**: OLED display (algorithm name, parameter values, menu navigation)
- **Other**: SD card slot (samples, MIDI, wavetables, scales, presets)

**Interface Behavior:**
- **Algorithm selection**: Press S twice → turn S to browse → press S to confirm
- **Parameter control**: Turn S knob to adjust current parameter, press Z to cycle parameters
- **Z knob function**: Algorithm-dependent (frequency, feedback, scale, resonance, etc.)
- **Menu system**: Algorithm, Save/Load (64 presets), Settings, Help, Calibrate
- **Socket LEDs**: Visual voltage indication for all inputs/outputs
- **Display feedback**: Shows algorithm names, parameter values, menu items
- **SD card integration**: Sample playback, MIDI files, wavetables, custom scales, help files
- **Preset system**: Preset 0 loads at startup and auto-saves on algorithm changes

**Algorithm Categories:**
- **A Series (A1-A8)**: CV utilities (mixers, quantizers, logic, arithmetic)
- **B Series (B1-B8)**: Modulation sources (LFOs, S&H, envelopes, VCOs)
- **C Series (C1-C8)**: Audio processing (delays, filters, effects)
- **D-N Series**: Extended processing, sample playback, MIDI, advanced functions
- **Favorites (O1-P8)**: User-customizable algorithm shortcuts
- **80+ total algorithms**: Complete modular synthesis function coverage

**Common Mistakes:**
- ❌ "I can't hear any difference when I turn Z knob" - Check algorithm type matches signal (quantizer needs pitch CV, delay needs audio)
- ❌ "Algorithm menu is confusing" - Start with A1-A8 and B1-B8, learn few algorithms well before exploring
- ❌ "Samples won't play" - SD card must be FAT32 formatted, 16-bit WAV files only
- ❌ "Settings revert after power cycle" - Preset 0 loads at startup, save settings to Preset 0 for persistence
- ❌ "Can't find algorithm I want" - Use favorites system to create custom menu of most-used algorithms
- ✅ Use "A-6 Quantizer" for pitch CV processing, "B-5 LFO" for modulation, "C-5 Resonator" for audio processing
- ✅ Match algorithm category to signal type: A/B for CV, C/D for audio, E-N for specialized functions

### Make Noise Maths ✅
**Manual Source**: Make Noise official documentation + verified by community
**Verification Date**: 2025-09-18

**Physical Interface:**
- **Inputs**: Ch1 TRIG, Ch1 Signal, Ch2 Signal, Ch3 Signal, Ch4 TRIG, Ch4 Signal, SUM CV
- **Outputs**: Ch1 Unity, Ch1 Variable, Ch2 Variable, Ch3 Variable, Ch4 Unity, Ch4 Variable, SUM, OR, AND
- **Knobs**: Ch1 Rise, Ch1 Fall, Ch2 Attenuverter, Ch3 Attenuverter, Ch4 Rise, Ch4 Fall, SUM Attenuverter
- **Buttons**: Ch1 Cycle, Ch4 Cycle
- **Switches**: None
- **LEDs**: Ch1 Unity LED, Ch2 Variable LED, Ch3 Variable LED, Ch4 Unity LED, SUM LED
- **Displays**: None
- **Other**: None

**Interface Behavior:**
- Signal inputs: Envelope follows gate length (sustain)
- TRIG inputs: One-shot envelope regardless of gate length  
- Cycle buttons: Transform channels into LFOs
- Attenuverters: 12 o'clock = OFF, clockwise = positive, counter-clockwise = negative
- Normalization: Ch2/Ch3 generate +10V when unpatched, Variable outputs auto-mix to SUM

**Common Mistakes:**
- ❌ "Gate input" - specify "TRIG input" or "Signal input"
- ❌ Assuming attenuverters work like normal knobs
- ✅ Use exact channel and input type names

---

## PARTIAL VERIFICATION ⚠️

### DivKid Ochd + Expander ⚠️
**Manual Source**: Needed
**Verification Status**: Need to verify exact knob/output names

**Known Interface:**
- **Outputs**: 8 LFO outputs (Ochd) + additional outputs (Expander)
- **Knobs**: Rate knob, others need verification
- **LEDs**: Output indication LEDs
- **Need to verify**: Exact output names, expander interface elements

---

## UNVERIFIED MODULES ❌

### Modules Needing Complete Verification:
- Make Noise Wogglebug
- Mutable Marbles  
- 4ms RCD v2
- Cre8audio Function Junction
- Mutable Plaits
- Disting mk4
- [All other modules in guides]

---

## VERIFICATION PROCESS

### For Each Module:
1. **Download official manual** (PDF preferred)
2. **Find high-resolution front panel photos**  
3. **Document every physical element** with exact names as printed
4. **Test interface behavior** if possible
5. **Note common misconceptions** from community feedback
6. **Update database** with ✅ verified status

### Verification Priority:
1. **High-error modules**: Those with most guide inaccuracies
2. **Popular modules**: Most commonly patched modules
3. **Complex modules**: Those with many interface elements
4. **Series completion**: Complete series like Pico, Black, etc.

### Tools Needed:
- Module manuals (PDFs)
- High-resolution photos
- Community knowledge
- Physical modules (when available)

---

## CONTRIBUTING

When verifying a module:

1. **Create entry** using the verified template above
2. **Include source links** to manuals/documentation  
3. **Document verification date**
4. **Note any unusual interface behavior**
5. **List common mistakes** found in guides/community
6. **Update comprehensive_verifier.js** with new module data

The goal is to eliminate ALL interface errors through systematic verification rather than guesswork.
