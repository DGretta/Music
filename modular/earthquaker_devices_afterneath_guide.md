# EarthQuaker Devices Afterneath - Guide

**The Otherworldly Reverberation Machine - A Wizard in a Cave**

---

## Historical Context

**Pedal-to-Modular Innovation:** EarthQuaker Devices' transition of the Afterneath pedal into Eurorack format represents a significant bridge between guitar effects and modular synthesis. The unique "Drag" parameter, originally developed for the pedal format, proved that guitar effect innovations could translate into powerful modular synthesis tools.

**Algorithmic Innovation:** The Afterneath's approach to reverb processing - particularly the delay line separation via the Drag control - challenged conventional reverb design by making the internal structure manipulable in real-time. This educational transparency of reverb mechanics influenced how modular musicians understand and control spatial effects.

**CV Integration Significance:** By adding comprehensive CV control to every parameter, EQD demonstrated how traditional effects could become dynamic, evolving instruments rather than static processors, establishing a template for effects-as-instruments in modular synthesis.

---

## Why This Instrument Excels

### **The Philosophy:**
**Texture over functionality.** The Afterneath doesn't try to be a "clean" reverb or a "natural" spatial effect—it's designed to transform audio into otherworldly, warped, and ambient textures. The signature Drag parameter makes the internal reverb architecture visible and manipulable in real-time, turning reverb processing into a performance instrument.

### **The Innovation:**
- **Drag parameter:** Separates delay lines for stuttering, pitch-shifting, and warped textures impossible with conventional reverbs
- **9 operational modes:** From smooth unquantized response to quantized scales that impose musical structure on reverb tails
- **Comprehensive CV control:** Every parameter CV-controllable with dedicated inverting attenuators for complex modulation
- **Reflect send/return loop:** External processing can shape the reverb feedback path in real-time
- **Self-oscillation capability:** The reverb can become a pitched oscillator, expanding beyond traditional effects territory

### **The Practical Benefits:**
- **Instant texture generation:** Even subtle Drag modulation transforms ordinary audio into extraordinary soundscapes
- **Performance instrument:** Real-time CV control allows Afterneath to evolve and respond rather than sit static
- **Educational transparency:** The Drag parameter teaches how reverb algorithms actually work—you can hear the mechanics
- **Dual functionality:** Works as both traditional reverb processor AND sound design generator
- **Integration flexibility:** External loop allows Afterneath to become part of larger processing chains

### **Perfect For:**
- **Ambient musicians:** The core use case—generating evolving, spacious textures
- **Experimental musicians:** Drag modulation and self-oscillation create sounds outside conventional music
- **Effects processors:** Essential for transforming raw audio into characterized sound
- **Texture designers:** CV modulation creates evolution impossible with static settings
- **Performance artists:** Real-time CV control enables expressive effect processing

### **The Magic:**
Afterneath proves that **effects can be instruments.** The Drag parameter isn't just a tone control—it's a window into reverb design itself. When you turn Drag while audio plays, you're experiencing how delay separation creates texture. The 9 modes teach you that structure can emerge from mathematical relationships. The self-oscillation shows that boundaries between "effect" and "oscillator" are arbitrary.

### **Historical Significance:**
The Afterneath module represents a successful pedal-to-Eurorack translation that doesn't just reproduce the original—it expands the concept. It demonstrated that guitar effects companies understood modular synthesis deeply enough to create tools that teach synthesis principles, not just copy pedal functions.

---

## Quick Start: Get Your First Otherworldly Reverb Working in 5 Minutes

![EarthQuaker Devices Afterneath](https://github.com/DGretta/Music/raw/main/modular/images/earthquaker_devices/afterneath/front_panel.jpg)  
*EarthQuaker Devices Afterneath - Front panel showing signature Drag control, 9 modes, and extensive CV inputs*

**What is Afterneath?** A 16HP digital reverb module that sounds like "a wizard in a cave" - featuring the unique **Drag** parameter that separates delay lines for stuttering, warped effects, plus 9 operational modes, extensive CV control, and self-oscillation capabilities.

### Your First Wizard Spell
1. **Connect audio input** - Patch audio source to Input jack, adjust Input knob for proper level
2. **Set basic reverb** - Start with Reflect at 12 o'clock, Length at 2 o'clock, Mix at 1 o'clock
3. **Engage the magic** - Slowly turn Drag knob while audio plays - witness the otherworldly warping
4. **Select curve type** - Toggle between Linear (LIN) and Exponential (XPO) - XPO sounds more natural
5. **Choose your realm** - Set Mode to position 1 (Unquantized) for smooth response

---

## Essential Parameters (The Wizard's Controls)

### **Core Reverb Controls:**
- **Input:** Adjusts level from instrument (CW) to modular (CCW)
- **Dampen:** Tone control - CW for darker, CCW for brighter reverb
- **Reflect:** Regeneration/feedback - push past 12 o'clock for self-oscillation
- **Mix:** Wet/dry balance - use with Dry Kill for 100% wet
- **Dry Kill (Switch):** Eliminates dry signal for send/return applications

### **The Magic Controls:**
- **Drag:** "The coolest control" - separates delay lines for warped, stuttering effects
- **Mode:** 9 different operational modes from smooth to quantized scales
- **Diffuse:** Smooths delay repeats - CCW sharp, CW ambient
- **Length:** Decay time - combines with Reflect for self-oscillation

### **CV Control:**
- **4 CV Inputs:** Drag, Mode, Diffuse, Length with dedicated inverting attenuators
- **Reflect Send/Return:** External processing loop for feedback path

---

## The 9 Operational Modes (The Realms of Response)

### **Unquantized Modes:**
- **Mode 1: Unquantized** - Smooth, natural response
- **Mode 2: Unquantized with Slew** - Tape delay-style lag behavior
- **Mode 3: Unquantized Volt/Octave** - 1V/oct scaling for VCO behavior

### **Quantized Scale Modes:**
- **Mode 4: Chromatic Scale** - All 12 semitones
- **Mode 5: Major Scale** - 7-note major scale tonality
- **Mode 6: Minor Scale** - 7-note minor scale tonality
- **Mode 7: Pentatonic Scale** - 5-note always-musical scale
- **Mode 8: Octaves & Fifths** - Only perfect consonances
- **Mode 9: Octaves** - Pure octave relationships only

---

## Beginner Patch Ideas

### **Patch 1: Basic - Essential Otherworldly Reverb**
```
┌─────────────┐    ┌──────────────────┐    ┌─────────────┐
│Audio Source │───▶│ Afterneath       │───▶│   Monitor   │
│ (Oscillator)│    │  Audio In        │    │   or Mixer  │
└─────────────┘    │                  │    └─────────────┘
                   │ Mode: 1 (XPO)    │
                   │ Reflect: 12      │
                   │ Length: 2        │
                   │ Mix: 1           │
                   │                  │
                   │ Drag: Manual     │
                   │ Control Point    │
                   └──────────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|--------------------|
| Audio Source → Afterneath In | Audio (Red) | **Rich harmonic content for texture generation** | **Experience core Afterneath character** |
| Afterneath Out → Monitor | Audio (Red) | **Processed signal to monitoring system** | **Hear the reverb and Drag effect in context** |

**Module Settings:**
- **Audio Source:** Any oscillator with rich harmonics (saw or square)
- **Reflect:** 12 o'clock (moderate regeneration)
- **Length:** 2 o'clock (medium decay time)
- **Mix:** 1 o'clock (reverb-heavy wet/dry balance)
- **Mode:** 1 - Unquantized (smooth, natural response)
- **Curve:** XPO (exponential - sounds more musical)
- **Drag:** Manual - turn slowly while audio plays
- **Result:** Smooth otherworldly reverb with signature warping texture

**Alternative Module Options:**
- **For audio sources:** Try **Make Noise STO** for clean analog tone, **Mutable Plaits** for varied synthesis models, or **2HP OSC** for budget synthesis
- **Budget alternatives:** **Doepfer A-111-4** provides quad VCO functionality, **AI Synthesis AI002** for DIY approach
- **Different character:** **Make Noise DPO** for complex dual oscillation, **Intellijel Dixie II+** for classic analog character
- **For monitoring:** **Intellijel Mixup** for performance mixing, **2HP Mix** for compact mixing, **Expert Sleepers ES-8** for computer integration

### **Patch 2: Advanced - CV Control and External Processing**
```
┌─────────────┐    ┌──────────────────┐    ┌─────────────┐
│Audio Source │───▶│ Afterneath       │───▶│   Monitor   │
│             │    │  Audio In        │    └─────────────┘
└─────────────┘    │                  │
                   │ Drag CV │      ┌─────────────┐
┌─────────────┐    │ Reflect ┐─▶│  Filter      │
│     LFO     │───▶│ Reflect Ret   │    │  (Reflection │
└─────────────┘    │ Reflect Snd   │    └─────────────┘
                   │                  │
┌─────────────┐    │ Length CV   │
│   Envelope  │───▶│                  │
└─────────────┘    │ Mode: 5-9     │
                   │ (Quantized)    │
                   └──────────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|--------------------|
| Audio Source → Afterneath In | Audio (Red) | **Audio source for texture processing** | **Experience texture generation with modulation** |
| LFO → Drag CV | CV (Blue) | **Oscillating modulation of Drag parameter** | **Learn how periodic Drag changes create rhythmic warping** |
| Envelope → Length CV | CV (Blue) | **Dynamic control of reverb decay time** | **Understand envelope-controlled reverb evolution** |
| Reflect Send → Filter Input | Audio (Red) | **Feedback path sent to external filter** | **Learn how external processing shapes reverb character** |
| Filter Output → Reflect Return | Audio (Red) | **Filtered feedback returning to reverb** | **Hear how spectral filtering colors reverb tails** |
| Afterneath Out → Monitor | Audio (Red) | **Processed, modulated texture to output** | **Perceive evolution from multiple simultaneous modulations** |

**Module Settings:**
- **Audio Source:** Any oscillator
- **LFO:** Slow rate (0.2-1 Hz) for smooth Drag evolution
- **Envelope:** Medium attack, long decay for dynamic length changes
- **Mode:** 5-9 (quantized scales) for musical harmonic response
- **Reflect:** 1-2 o'clock for feedback loop activity
- **Filter in Loop:** Low-pass for warm feedback, High-pass for edgy feedback
- **Result:** Evolving texture with multiple simultaneous modulation layers and colored feedback character

**Alternative Module Options:**
- **For LFO sources:** Try **Batumi** for quad LFO with phase relationships, **DivKid ochd** for organic modulation, or **2HP LFO** for compact modulation
- **Budget alternatives:** **Doepfer A-143-3** for quad LFO, **AI Synthesis AI003** for DIY envelope generation
- **For envelopes:** **Make Noise Maths** for complex function generation, **Intellijel Quadrax** for quad envelope generation
- **Filter processing:** **Mutable Ripples** for liquid analog filtering, **Make Noise MMG** for lowpass gate character, **2HP VCF** for compact filtering
- **Different character:** **Erica Synths modules** for diverse processing options, **FX Aid Pro** for additional effects in external loop

### **Patch 3: Expert - Self-Oscillating VCO Applications**
```
┌─────────────┐    ┌──────────────────┐    ┌─────────────┐
│ Keyboard   │───▶│ Afterneath       │───▶│   VCA      │
│ or Seq CV  │    │ Drag CV         │    │  Out -> │
└─────────────┘    │(1V/octave)     │    └─────────────┘
                   │                  │
┌─────────────┐    │ Mode: 3 (Volt/Oct)│           ┌─────────────┐
│   Envelope │───▶│ No Audio In     │           │   Output │
│ (Amplitude)│    │ (Self-Osc Only) │─────────────▶│  System  │
└─────────────┘    │ Length: High    │           └─────────────┘
                   │ Reflect: High   │
                   │                  │
                   │ Calibration:    │
                   │ Find Drag upper │
                   │ tracking limit   │
                   └──────────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|--------------------|
| Keyboard/Seq CV → Drag CV | CV (Blue) | **1V/octave pitch control** | **Learn Afterneath's self-oscillation tracking capabilities** |
| Envelope → VCA In | CV (Blue) | **Amplitude envelope for note articulation** | **Understand how to shape self-oscillation using amplitude control** |
| Afterneath Out → VCA In | Audio (Red) | **Self-oscillating sine tone to VCA** | **Experience Afterneath as an oscillator, not just an effect** |
| VCA Out → Output | Audio (Red) | **Envelope-shaped oscillator output** | **Hear how amplitude modulation brings articulation to tone** |

**Module Settings:**
- **No Audio Input:** Afterneath produces pure self-oscillation
- **Mode:** 3 (Unquantized Volt/Octave) for smooth pitch tracking
- **Drag Knob:** 12 o'clock as baseline control point
- **Drag CV Attenuator:** Fully CW (full 1V/octave response)
- **Length:** 3+ o'clock (high for strong self-oscillation)
- **Reflect:** 3+ o'clock (high to sustain oscillation)
- **Calibration:** Play known pitch sequence, verify Afterneath tracks accurately. Adjust Drag knob if top octave drifts.
- **Envelope:** Fast attack, medium release for clear note articulation
- **VCA Envelope:** Controls note on/off timing
- **Result:** Afterneath functioning as a sine wave oscillator with smooth 1V/octave tracking

**Alternative Module Options:**
- **For keyboard CV:** Try **Arturia Keystep** for budget keyboard control, **Make Noise Pressure Points** for touch control, or **Expert Sleepers FH-2** for MIDI-to-CV
- **Budget alternatives:** **Doepfer A-190-3** for USB MIDI interface, **2HP MIDI** for compact MIDI-to-CV conversion
- **For VCA control:** **Intellijel Quad VCA** for precision amplitude control, **2HP VCA** for budget solution, **Make Noise ModDemix** for mixing and VCA combined
- **Advanced control:** **Mutable Marbles** for probability-based control, **Pamela's New Workout** for algorithmic patterns, **Hermod+** for comprehensive sequencing

### **Patch 4: Professional - Ambient Stereo Ritual**
```
┌─────────────┐    ┌──────────────────┐
│Audio Source │───▶│ Afterneath       │─────▶ L channel
└─────────────┘    │ Audio In        │     (to Stereo Out)
                   │                  │
┌─────────────┐    │ Reflect Send │──▶┌─────────────┐
│  Multi-LFO  │───▶│ Drag CV         │    │  Multiple/   │
│ Modulation  │    │ Reflect Ret   │──▶│  Router     │
│   Sources   │    │ Length CV    │    │              │
└─────────────┘    │ Diffuse CV   │    └─────────────┘
                   │                  │        │
                   │ Mode: 1-3       │        │
                   │ (Smooth Unquant) │        │
                   └─────────────────┘        │
                                               │
                   ┌─────────────┐  │
                   │ External Filter │──┘
                   │    & Delay       │
                   └─────────────┘
                         │
                         │
                    ┌─────────────┐
                    │     Back to      │
                    │  Reflect Return  │
                    └─────────────┘
                         │
                         │
                    ┌─────────────┐
                    │  Stereo Mixer    │
                    │  L / R channels  │
                    │  to Output       │
                    └─────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|--------------------|
| Audio Source → Afterneath In | Audio (Red) | **Source audio for ambient texture processing** | **Experience rich stereo texture from single source** |
| Multi-LFO → Drag/Length/Diffuse CV | CV (Blue) | **Multiple simultaneous parameter modulation** | **Learn how polyphonic modulation creates evolving character** |
| Afterneath Main Out → L Channel | Audio (Red) | **Dry direct signal to left channel** | **Understand stereo imaging through signal separation** |
| Reflect Send → Multiple/Router | Audio (Red) | **Feedback path split for external processing** | **Learn how to integrate external effects into reverb feedback** |
| External Processing Out → Reflect Return | Audio (Red) | **Processed feedback returning to reverb core** | **Hear how external processing shapes internal feedback** |
| Reflect Send (alternate) → R Channel | Audio (Red) | **Unprocessed feedback to right channel** | **Create pseudo-stereo effect from single Afterneath** |
| Stereo Mixer Out → Final Output | Audio (Red) | **Stereo-imaged, professionally mixed output** | **Achieve professional stereo ambient aesthetic** |

**Module Settings:**
- **Audio Source:** Any sound (ambient best)
- **LFO Sources:** Minimum 3 independent LFOs with different rates (0.05-0.5 Hz for ambient)
- **Drag CV:** Very slow LFO for subtle texture warping
- **Length CV:** Medium-speed LFO for evolving decay
- **Diffuse CV:** Different-speed LFO for smoothness evolution
- **Mode:** 1-3 (Unquantized) for smooth, natural-sounding response
- **Reflect:** 1-2 o'clock (moderate feedback)
- **External Processing:** Filter (warm character) + Delay (spatial spread)
- **Stereo Setup:** Main out left, reflected/processed feedback right
- **Result:** Lush stereo ambient texture with multiple simultaneous evolving dimensions

**Alternative Module Options:**
- **For stereo processing:** Try **Intellijel Stereo Mix** for professional stereo mixing, **ALM Busy Circuits Pamela's Pro** for stereo modulation, or **2HP Mix** for budget stereo combining
- **Budget alternatives:** **Doepfer A-138** series for mixing and multiples, **AI Synthesis AI006** for DIY mixing approach
- **External processing:** **FX Aid Pro** for comprehensive effects, **Mutable Clouds** for granular processing, **Erica Synths effects** for diverse character
- **Advanced routing:** **Expert Sleepers ES-9** for computer integration, **4ms Listen IO** for professional I/O, **Make Noise Rosie** for headphone monitoring

---

## Pairs Well With

### **Modulation & CV Source Integration:**
- **Mutable Marbles:** Random CV for melodic Drag modulation in quantized modes
- **Make Noise Maths:** Complex envelopes for Length and Diffuse control
- **DivKid ochd & Expander:** Multiple LFOs for evolving parameter automation
- **Erica Synths modules:** Audio sources and external processing in Reflect loop
- **4ms Listen IO:** Professional I/O for external processing integration

### **Perfect Partners:**
- **VCAs:** For amplitude control of self-oscillating applications
- **Filters:** In Reflect loop for spectral shaping of feedback
- **CV Sources:** LFOs, envelopes, sequencers for parameter modulation
- **Audio Sources:** Rich harmonic content brings out Drag character best

---

## Advanced Techniques

### **Drag Parameter Mastery:**
The Drag parameter is Afterneath's most unique control. Understanding its behavior at different settings unlocks the module's full potential.

**Drag Response Zones:**
- **7-9 o'clock:** Subtle warping, barely noticeable texture changes
- **10-12 o'clock:** Classic Drag character, obvious but musical stuttering
- **1-3 o'clock:** Extreme warping, pitch shifting, algorithmic disruption
- **Beyond 3 o'clock:** Extreme territory, near-digital corruption effects

**Drag Modulation Techniques:**
- **Slow LFO (0.1-0.5 Hz):** Subtle evolving texture, works with any mode
- **Audio-rate modulation:** Use oscillator output for granular, bitcrushed character
- **Envelope modulation:** Map Drag to audio envelope for rhythmic effect response
- **Multi-source Drag:** Sum multiple CV sources for complex, unpredictable warping patterns
- **Drag at self-oscillation:** Pitch-shifting effects on the oscillation itself

**Mode Selection Philosophy:**
Drag behaves differently depending on operational mode:
- **Modes 1-3 (Unquantized):** Drag creates smooth, analog-style warping
- **Modes 4-9 (Quantized):** Drag snaps between scale tones for musical quantization
- **Mode choice changes Drag character:** Test Drag in all modes to understand mode-specific responses

### **Self-Oscillation Calibration:**
When Afterneath self-oscillates, it becomes a sine wave oscillator tracking 1V/octave (in Mode 3).

**Setting Up Self-Oscillation:**
1. Remove all audio input to the module
2. Set Reflect to 2+ o'clock (high feedback)
3. Set Length to 2+ o'clock (long decay sustains oscillation)
4. Slowly turn Resonance knob clockwise until pure sine tone appears
5. In Mode 3 with Drag CV input, the oscillation tracks 1V/octave pitch

**Self-Oscillation Limitations:**
- Self-oscillation requires **no audio input** - audio input cancels oscillation
- Tracking accuracy: Verify 1V/octave tracking across multiple octaves
- If tracking drifts in high octaves, adjust Drag knob calibration
- Self-oscillation becomes uncontrollable above certain Drag CV voltages

**Musical Applications:**
- Use as additional oscillator voice for polyphonic synthesis
- Create sine wave leads with evolving character through Drag modulation
- Blend self-oscillation with audio input by using very weak audio (high attenuation)
- Use quantized modes (4-9) for musical scale-locked pitch generation

### **Reflect Loop Integration:**
The Reflect Send/Return loop is where Afterneath becomes a system, not just an effect.

**External Processing in Reflect Loop:**
- **Filters:** Low-pass warms reverb feedback, high-pass sharpens it
- **Delays:** Add spatial depth and rhythmic structure to feedback path
- **Distortion:** Harden reverb character, create aggressive textures
- **Modulation (Chorus/Flanger):** Thicken reverb tails with movement
- **Compressor:** Even out reverb feedback dynamics

**Reflect Loop Techniques:**
1. **Serial processing:** Single module in loop (e.g., filter only)
2. **Parallel processing:** Route Reflect Send to multiple modules, recombine with mixer before Reflect Return
3. **Feedback loop with decay:** Longer external processing chains create time-lagged character changes
4. **Dynamic loop processing:** Use envelope or LFO to modulate external loop processor for evolving character

**Reflect Loop Philosophy:**
The Reflect loop teaches that reverb is just another modular destination. External processing becomes part of the reverb algorithm itself, not applied after the fact.

### **CV Modulation Architecture:**
Afterneath has 4 independent CV inputs. Using them together creates complex texture evolution.

**Modulation Strategies:**
- **Single slow LFO:** Gentle evolution, predictable behavior
- **Multiple LFOs (different rates):** Polyrhythmic texture evolution - rates interact to create long periods of variation
- **Envelope followers:** React to external audio dynamics in real-time
- **Sequencer CV:** Precise, repeatable modulation patterns
- **Marbles-style probability:** Random but musically coherent CV modulation

**CV Scaling Considerations:**
- Each CV input has dedicated inverting attenuator
- Full CW = full CV response; fully CCW = inverted response
- Half-way positions allow subtle modulation without extreme swings
- Multiple source mixing: Use CV mixer to blend 2+ modulation sources into one input

**Learning:** Different CV sources have different voltage standards. Always attenuate sequencer outputs to avoid excessive parameter jumping.

### **Dampen Control (Spectral Shaping):**
Dampen is a tone control on the reverb feedback, not just a color knob.

**Dampen Settings:**
- **CCW (Bright):** All frequencies present in reverb tail, can sound harsh
- **12 o'clock (Neutral):** Balanced tone, good starting point
- **CW (Dark):** Low-frequency emphasis, warm ambient character

**Dampen + Drag Interaction:**
Drag warping is most obvious in bright settings (Dampen CCW). Dark settings (Dampen CW) make Drag character more subtle. This teaches that tone and texture are interconnected.

**Dampen Modulation:**
Apply slow LFO to Dampen for evolving spectral character. As reverb decays and gets darker, the texture evolution becomes more obvious.

### **Diffuse Parameter (Reverb Smoothness):**
Diffuse controls how quickly delay lines diffuse into the reverb field.

**Diffuse Zones:**
- **CCW (Sharp):** Individual delay taps audible, metallic quality
- **12 o'clock (Balanced):** Natural ambience, good default
- **CW (Smooth):** Delay taps merge quickly, very ambient, almost pad-like

**Diffuse + Drag Relationship:**
Drag warping is more obvious in sharp settings (Diffuse CCW). Smooth settings hide Drag artifacts. Understanding this teaches signal processing interconnection.

### **Mix and Dry Kill Controls:**
- **Mix:** Wet/dry balance. High = mostly reverb, Low = mostly dry input
- **Dry Kill switch:** When enabled, eliminates dry signal completely (100% wet)
- **Send/Return use:** Patch into mixer's send input, set Mix fully CW (100% wet), disable Dry Kill

### **Performance Techniques:**

**Real-Time Control:**
- Assign Drag CV to joystick/velocity for expressive, performance-based texture control
- Sweep Length manually during performance for dramatic decay changes
- Toggle Dry Kill mid-performance to switch between processed and dry signals
- Use Reflect Send split to multiple outputs for real-time external loop processing changes

**Rhythmic Integration:**
- Clock-sync LFO rates to tempo for tight rhythmic modulation
- Use fast Drag modulation synced to tempo for rhythmic warping effects
- Gate Length CV with drum triggers for texture that responds to rhythm

**Layering Afterneath in Mix:**
- Use as an insert effect (full Dry Kill) for transparent processing
- Use as a send effect for blending affected signal with dry
- Run multiple audio sources through single Afterneath for unified texture
- Use Reflect Send as parallel processing point for creative mixing

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"All I hear is 'washy' reverb, not the Drag effect everyone talks about!"**
- **Why:** The Drag effect is subtle when Drag is in the 7-11 o'clock range. Many users expect dramatic transformation but Drag works gradually. Additionally, if you're using bright/treble-heavy audio, Drag effects can be masked. Low resonance on Dampen also reduces Drag prominence.
- **Solution:** (1) Start with Drag manually at 12 o'clock and sweep slowly through its full range while audio plays—you'll hear the progression, (2) reduce Dampen to brighter settings to make Drag more obvious, (3) use rich harmonic audio (sawtooth or square waves) where Drag character is most audible, (4) try Modes 4-9 (quantized) where Drag snaps between tones more obviously.
- **Teaching:** Drag is a texture control that works best in context. The architecture is only obvious when you actively explore its range and listen carefully.

**"I'm trying to use Afterneath as a reverb, but everything sounds weird and unmusical!"**
- **Why:** Afterneath is designed for texture generation, not transparent reverb. Default settings emphasize Drag's otherworldly character over naturalistic ambience. Users expecting a clean reverb processor get startled by its intentional weirdness instead.
- **Solution:** (1) Lower Reflect to 9-11 o'clock to reduce self-oscillation risk, (2) use Mode 1 (Unquantized) for smoothest response, (3) keep Drag at 12 o'clock for neutral starting point, (4) increase Diffuse to CW to smooth delay taps into ambience, (5) keep Mix at 1-2 o'clock for reverb-heavy but not extreme processing.
- **Teaching:** Afterneath philosophy is "texture over naturalism." If you want clean reverb, this isn't the right module—but if you want character and weirdness, that's the point.

**"Self-oscillation doesn't work even though I followed all the steps!"**
- **Why:** Self-oscillation requires NO audio input to the module. If even a weak signal is present, the audio input cancels oscillation. Most users patch an audio source, then try to add Reflect and Length—the audio input prevents oscillation.
- **Solution:** Completely disconnect all audio from the Afterneath Audio In jack. Set Reflect to 2+ o'clock, Length to 2+ o'clock, then slowly turn Drag manually to find the sweet spot. Once you hear pure sine oscillation, you can add CV modulation.
- **Teaching:** Self-oscillation and audio input are competing phenomena. Understanding this teaches you how reverb algorithms handle simultaneous input and feedback.

**"My Reflect loop sounds like nothing changed even though I patched an external filter into it!"**
- **Why:** The Reflect loop affects only the feedback path, not the direct output. If your filter isn't warm/dark enough to noticeably color feedback at Reflect settings of 1 o'clock or less, the effect is subtle. Additionally, if Reflect is low, there's minimal feedback to process, so the loop effect disappears.
- **Solution:** (1) Increase Reflect to 2+ o'clock to ensure significant feedback path, (2) use a dramatic filter (strong resonance or extreme cutoff) to make the loop effect obvious, (3) test with a high-pass filter first to hear sharp feedback, then compare with low-pass for warmth, (4) use envelope or LFO in the filter to make loop effects evolve over time.
- **Teaching:** Send/return loops teach signal flow architecture. The feedback path is separate from direct path—understanding this distinction is crucial for modular thinking.

**"Drag modulation with my LFO is creating rhythmic stuttering, but I want smooth evolution!"**
- **Why:** If your LFO rate is too fast (above 1 Hz), Drag changes become audible as rhythmic effects rather than smooth texture evolution. Additionally, if LFO amplitude is too high, Drag swings too far between extremes, creating choppy transitions.
- **Solution:** (1) Slow your LFO rate to 0.2-0.5 Hz for smooth texture evolution, (2) reduce LFO attenuator to 50% CW to limit Drag modulation range, (3) experiment with LFO waveshape—triangle is smoother than square, (4) if you want rhythmic effects, deliberately use fast (1-4 Hz) LFO rates but sync to tempo.
- **Teaching:** Modulation speed determines perception—slow modulation feels like evolution, fast modulation feels like rhythm. This teaches how timing changes musical meaning.

**"Different modes sound exactly the same to me—what's the difference?"**
- **Why:** Mode differences are most obvious when using CV modulation (Drag CV, Length CV, etc.). In manual control with static settings, modes sound similar because they primarily affect how CV scaling responds. Additionally, if you're using the Reflect Send output (feedback path), mode differences are subtler.
- **Solution:** (1) Use Drag CV with an LFO or sequencer and toggle between modes—you'll hear Drag behavior change drastically, (2) use Modes 4-9 (quantized) with a melodic CV sequence to hear scale quantization clearly, (3) stay in Mode 1 (Unquantized) for smooth manual control, (4) experiment with Mode 3 specifically for 1V/octave tracking.
- **Teaching:** Effects module behavior often depends on how you modulate them. CV interaction teaches interconnection between parameters.

**"Everything I patch through Afterneath comes out quieter than the input!"**
- **Why:** Mix knob at 12 o'clock (default) is about 50% wet, not unity gain. Using Dry Kill disables dry signal, so the output is only wet reverb. If your Mix is low (below 12 o'clock), the output is primarily dry signal with weak reverb mixed in—it sounds quieter.
- **Solution:** (1) Turn Mix to 2+ o'clock for reverb-heavy balance (but less quiet), (2) if you need full wet output, enable Dry Kill (switch on) and set Mix fully CW, (3) use an external VCA or mixer to control overall output level, (4) verify input level is adequate with Input knob at reasonable setting (usually 12 o'clock for line-level audio).
- **Teaching:** Wet/dry mixing is an architectural consideration in effect design. Understanding Mix control teaches you how effects interact with mixing concepts.

**"My quantized modes (4-9) sound out of tune—the notes don't match the key I'm playing!"**
- **Why:** Quantized modes (Chromatic, Major, Minor, Pentatonic, Fifths, Octaves) quantize CV input to scale tones, but they don't know what key you're in. If your CV is 1V/octave but the scale mode doesn't contain your root note, the quantized output sounds "wrong."
- **Solution:** (1) Understand that Chromatic mode (Mode 4) contains all 12 notes, so it never sounds out of tune, (2) use Major/Minor modes (5-6) with matching CV sequences in that key, (3) for experimental effects, accept the "wrong" tuning—it's often beautiful, (4) use Pentatonic (Mode 7) for always-musical results regardless of input sequence.
- **Teaching:** Quantization teaches that structure (musical scales) constrains CV interpretation. This shows how modules can impose musical decision-making.

**"I enabled Dry Kill but I still hear dry signal mixed in!"**
- **Why:** Dry Kill affects only the main audio output. The Reflect Send output is a separate path that includes both dry and wet components (it's taken from inside the reverb algorithm). If you're monitoring Reflect Send instead of main output, you'll hear dry signal even with Dry Kill enabled.
- **Solution:** (1) Use main output (not Reflect Send) for monitoring if you want Dry Kill to affect the signal, (2) understand that Reflect Send is a feedback tap, not an auxiliary output—it's meant for external processing in the feedback loop, not general monitoring, (3) if you need send/return operation, patch main output to mixer's send input instead of using Reflect Send.
- **Teaching:** Effects architecture includes multiple signal paths. Understanding which path you're using teaches signal flow thinking.

**"My Length CV from an envelope isn't doing anything obvious—the reverb tail length stays the same!"**
- **Why:** Length CV modulation is most obvious when the envelope is fast-moving and significant. If your envelope is slow or moves only slightly, or if Reflect (feedback) is low, Length changes won't produce audible effect. Additionally, Length changes only become obvious when reverb tails decay—if you're playing continuous audio, you won't hear the difference.
- **Solution:** (1) Use a fast envelope (fast attack, medium decay) for obvious Length changes, (2) increase Reflect to 2+ o'clock so feedback sustains long enough for Length changes to matter, (3) patch a sequencer CV to Length instead of envelope—steppy changes are more obvious, (4) pause audio input periodically and listen to reverb decay to hear Length modulation effect, (5) watch physical reverb tail behavior with envelope analysis tools to confirm CV is responding.
- **Teaching:** Modulation effects depend on both the modulation signal AND the module's context (other parameter settings). This teaches holistic thinking about modulation.

**"Diffuse doesn't seem to do anything—sounds the same at CCW and CW!"**
- **Why:** Diffuse effects are subtle in short reverb decays. If Length is low (short tails), Diffuse changes are nearly invisible. Additionally, if you're using very bright Dampen settings, diffusion quality doesn't matter much—everything sounds metallic regardless. Finally, Diffuse works on the _perception_ of reverb smoothness, which is hard to hear in complex reverb tails.
- **Solution:** (1) Increase Length to 3+ o'clock so reverb tails are long enough to hear diffusion effects, (2) use a moderate Dampen setting (12 o'clock) for balanced tone so Diffuse effects are obvious, (3) start with Diffuse fully CCW (sharp taps), then sweep to CW (smooth) while audio plays—you'll hear gradual smoothing, (4) use ambient pads or long sustained tones rather than rhythmic audio to hear diffusion.
- **Teaching:** Some parameters affect perception subtly. Learning to hear subtle differences teaches critical listening skills.

**"My setup sounds great on my monitors but thin/weird on headphones—why?"**
- **Why:** Afterneath's reverb algorithms contain substantial low-frequency content in feedback paths. On small monitor speakers, lows are reduced; on headphones, the low-end buildup is obvious and can sound boomy or uncontrolled. Additionally, headphone proximity makes reverb tails sound unnatural compared to room-based monitoring.
- **Solution:** (1) Use Dampen to remove low frequencies if necessary (turn CW more to eliminate bass bloat), (2) use headphone-monitoring-appropriate mix level (often higher headphone volume needed), (3) trust monitor speakers for initial setup, then verify on headphones, (4) use a high-pass filter in Reflect loop to control low-end buildup if needed.
- **Teaching:** Monitoring context matters. The same reverb sounds different on different systems—this teaches that "truth" in audio is context-dependent.

**"I've got all 4 CV inputs patched but the texture isn't as evolving as I expected—it's kind of static."**
- **Why:** Four CV inputs affect four different parameters, but if they're all modulating slowly and subtly, their combined effect is imperceptible. Additionally, if modulation rates are similar (all in 0.2-0.5 Hz range), they evolve together rather than creating variation, resulting in coherent but unchanging texture.
- **Solution:** (1) Use different LFO rates for each CV input—fast on one (2 Hz), slow on another (0.3 Hz), medium on a third (0.8 Hz) to create polyrhythmic evolution, (2) use higher modulation amplitudes on at least one parameter to create obvious change points, (3) use different modulation waveforms (triangle, saw, square) for different CV inputs, (4) combine LFOs with envelope followers to mix periodic and content-responsive modulation, (5) record audio and listen back—short-term listening often misses long-period variations.
- **Teaching:** Texture evolution requires multiple timescales working together. This teaches complex system thinking where individual components create emergent behavior.

### **🎵 Pro Tips:**

**Drag Exploration Strategy:**
Don't jump to modulation—first spend 10 minutes manually sweeping Drag knob through its entire range at different positions of other parameters. This teaches you where the "magic" happens (usually 1-2 o'clock).

**Mode Selection Simplification:**
For 80% of use cases: (1) Mode 1 (Unquantized) for anything manual or ambient, (2) Mode 3 (Volt/Octave) when you want self-oscillation tracking, (3) Modes 5-9 (Scales) when you want Drag to snap to musical intervals. Don't worry about the others until you're comfortable with these three.

**Reflect Loop First Steps:**
Start with a simple filter in the loop before attempting complex processing. High-pass filter makes feedback bright and obvious; low-pass makes it warm. This teaches loop behavior before adding complexity.

**Self-Oscillation as Modulation Source:**
Once self-oscillation is working, try patching it to other modules' CV inputs. It's a sine wave oscillator—use it like one.

**Performance Control Priority:**
If you can only modulate one parameter in live performance, choose Drag. It's the most obvious and musically interactive control.

**Rhythmic Textures:**
Sync one LFO to tempo (via clock divider) and apply it to Drag, then use a free-running LFO on Length. This creates structured but unpredictable texture evolution.

**Ambient Sweet Spot Settings:**
Reflect: 12-1 o'clock, Length: 2-3 o'clock, Mix: 1-2 o'clock, Mode: 1 (Unquantized), Drag: 12 o'clock (manual). This is a good starting point for ambient textures—adjust from here rather than starting from zero.

**Reflection Feedback Monitoring:**
Patch Reflect Send to a separate output jack to see what the feedback path contains. This teaches you what external processing will affect.

---

**Bottom Line:** Afterneath isn't just a reverb - it's an **otherworldly texture generator** that transforms any audio into ambient, warped, and musical textures through its signature Drag parameter and 9 operational modes. From basic reverb to self-oscillating VCO to complex ambient processor, it brings unique character that's impossible to achieve with conventional reverbs. The Drag control alone makes it worth the 16HP, but the extensive CV control and external processing capabilities make it a **complete ambient sound design powerhouse**.
