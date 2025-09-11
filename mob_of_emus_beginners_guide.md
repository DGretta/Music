# Mob of Emus Beginner's Guide
*The Polyfunctional Harmonic Sextet*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is Mob of Emus?** A six-channel synthesis powerhouse that packs an enormous amount of creative power into just 16HP. Think of it as having six independent modules that can work together or separately - each channel can be an oscillator, LFO, envelope, rhythm pattern, noise source, quantizer, or modulation source.

### Your First Harmonic Stack
1. **Click Preset 1** - "Warp This" (audio oscillator stack)
2. **Patch Mix Output** → your VCA or filter input
3. **Turn Freq knob** - change the overall pitch of all six oscillators
4. **Hold Option + turn Variation/Warp knob** - hear the frequency warping effect!
5. **Hold Option + turn Harm#/Series knob** - try different harmonic relationships
6. **Turn H.Gain knob** - balance between fundamental and harmonic frequencies

### Discover Polyrhythmic Magic
1. **Click Preset 4** - "4/4 Drums with Variation"
2. **Patch Channel 1 Output** → kick drum trigger input
3. **Patch Channel 2 Output** → snare drum trigger input  
4. **Click Tap/Trig button repeatedly** at your desired tempo
5. **Turn Variation knob slightly** - add rhythmic complexity
6. **Turn Octave knob** to halve/double the tempo

---

## Essential Parameters (The Big 6)

### **1. FREQ/FINE/SEMI**
- **What it does:** Sets each channel's frequency (like pitch on an oscillator)
- **Range:** ±2 octaves from base frequency
- **Musical use:** Tune your oscillators, set LFO speeds, adjust rhythm timing
- **Option 1:** Fine tuning for precise detuning effects
- **Option 2:** Semitone steps for musical intervals

### **2. OCTAVE/2X**  
- **What it does:** Sets the octave range (audio vs modulation speeds)
- **Range:** ±5 octaves (±10 with Option 1)
- **Key concept:** This determines audio rate vs LFO rate
- **Sweet spots:** -2 to -4 for LFOs, +2 to +4 for audio oscillators

### **3. WAVE/ENV/PAT**
- **What it does:** Selects the waveform/pattern for each channel
- **Bank 1 (Primary):** Classic waves - sine, saw, square, triangle, S&H
- **Bank 2 (Option 1):** Envelopes - various ADSR shapes, smoothed random
- **Bank 3 (Option 2):** Rhythm patterns - kick, snare, hihat, clave patterns

### **4. HARM#/SERIES**
- **What it does:** Sets harmonic relationships between channels
- **Individual Mode:** Frequency multiplier (1-32x) for each channel
- **Hex Mode:** How many channels playing (1-6) + harmonic series presets
- **Magic moment:** This is what makes complex harmony and polyrhythms effortless!

### **5. H.GAIN/MIX**
- **What it does:** Individual channel levels + mix inclusion
- **Individual Mode:** Channel volume, Option 1 = include in mix output
- **Hex Mode:** "Harmonic gain" - balance between low/high numbered channels
- **Pro tip:** Turn CCW in Hex mode to emphasize fundamental frequencies

### **6. HEX Button & Mode**
- **What it does:** Control all 6 channels simultaneously as a macro layer
- **When lit:** All knob movements affect all channels at once
- **Key concept:** Your individual programming stays intact, Hex mode adds offsets
- **Game changer:** Create complex variations without losing your basic setup

---

## Understanding the Harmonic Concept

### **What Makes Mob of Emus Special:**
The "harmonic" control structure is what sets Mob of Emus apart from other multi-channel modules. Instead of just having six random oscillators, it uses **mathematical relationships** from music theory and acoustics to create naturally musical interactions.

### **Harmonic Series in Nature:**
- **Fundamental frequency** (1x) - the root note you hear
- **First harmonic** (2x) - one octave higher  
- **Second harmonic** (3x) - perfect fifth above that
- **Third harmonic** (4x) - two octaves higher
- And so on... these are the **natural overtones** present in acoustic instruments

### **Mob of Emus' Innovation:**
- **Each channel** can be set to any harmonic number (1-32x)
- **Instant harmonic series** via preset combinations
- **Polyrhythmic applications** - same math works for rhythm (1=whole note, 2=half note, 4=quarter note)
- **Hex Mode control** - conductor layer that maintains relationships while adding variation

### **The 15 Harmonic Series Presets:**
1. **Unison** {1,1,1,1,1,1} - All channels same frequency
2. **All** {1,2,3,4,5,6} - Natural harmonic series
3. **Powers of 2** {1,2,4,8,16,32} - Perfect for 4/4 rhythms
4. **12/8 Rhythm** {1,2,4,6,8,12} - Compound time signatures
5. **3/4 Rhythm** {1,2,3,4,6,8} - Waltz and triple meter
6. **3+5 Rhythm** {1,2,3,5,6,10} - Complex polyrhythms
7. **Odd** {1,3,5,7,9,11} - Hollow, clarinet-like timbres
8. **Fave Odd** {1,5,9,11,15,19} - Composer's favorite odd harmonics
9. **Fibonacci** {1,2,3,5,8,13} - Mathematical beauty in music

### **Why This Matters:**
Instead of randomly setting six channels, you can instantly access **thousands of years** of musical knowledge about what frequency relationships sound good together!

---

## Beginner Patch Ideas

### **Patch 1: Rich Additive Synthesis**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│    LFO      │───▶│ Mob of Emus  │───▶│   Filter    │
│ (Slow Rate) │    │ H.GAIN CV IN │    │  Audio In   │
└─────────────┘    │              │    └─────────────┘
                   │ Preset 7:    │           │
┌─────────────┐    │ "Additive    │           ▼
│ Envelope    │───▶│ Oscillator"  │    ┌─────────────┐
│ Generator   │    │              │───▶│     VCA     │
└─────────────┘    │ MIX OUTPUT   │    │   Audio In  │
                   └──────────────┘    └─────────────┘
                          │                    ▲
                          │                    │
                   ┌──────┴──────┐           │
                   │ Harmonic    │───────────┘
                   │ Series      │
                   │ Control     │
                   └─────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| LFO → MOE H.GAIN CV | CV (Blue) | Rhythmic harmonic intensity |
| Envelope → MOE Full CV Freq | CV (Blue) | Pitch modulation |
| MOE Mix Out → Filter Audio In | Audio (Red) | Rich additive signal |
| Filter Out → VCA Audio In | Audio (Red) | Filtered harmonics |

**Module Settings:**
- **Mob of Emus:** Load Preset 7, Hex Mode ON
- **Harmonic Series:** "Fave Odd" (Option 1 on HARM#/SERIES)
- **H.Gain CV attenuverter:** 75% for dramatic harmonic changes
- **All channels:** Audio rate (Octave around +2)

**Visual Feedback:**
- **Hex LED:** Solid, indicating Hex mode active
- **H.Gain LED:** Pulses with LFO showing harmonic intensity changes
- **Channel LEDs:** All lit showing six-oscillator harmony
- **Result:** Classic additive synthesis with easy harmonic control

### **Patch 2: Polyrhythmic Modulation Bank**
```
┌─────────────┐    ┌──────────────┐
│ Tap/Trig   │───▶│ Mob of Emus  │
│ Button      │    │ Tempo Sync   │  Ch1──▶VCA 1 CV
└─────────────┘    │              │  Ch2──▶VCA 2 CV
                   │ Harmonic     │  Ch3──▶Filter CV
                   │ Series:      │  Ch4──▶LFO Rate
                   │ "Powers of 2"│  Ch5──▶Osc Pitch
                   │              │  Ch6──▶Effect CV
                   │ Octave: -3   │
                   │ (LFO Rate)   │
                   └──────────────┘
```

| Connection | Cable Type | Notes |
|------------|------------|-------|
| Tap/Trig → MOE Sync Input | Clock (Yellow) | Sets tempo for all channels |
| MOE Ch1 → VCA 1 CV Input | CV (Blue) | 1x tempo (fundamental) |
| MOE Ch2 → VCA 2 CV Input | CV (Blue) | 2x tempo (half notes) |
| MOE Ch3 → Filter CV Input | CV (Blue) | 4x tempo (quarter notes) |
| MOE Ch4 → LFO Rate CV | CV (Blue) | 8x tempo (eighth notes) |
| MOE Ch5 → Oscillator Pitch | CV (Blue) | 16x tempo (sixteenth notes) |
| MOE Ch6 → Effect Parameter | CV (Blue) | 32x tempo (thirty-second notes) |

**Module Settings:**
- **Mob of Emus:** Octave at -3 (LFO rates), Hex Mode ON
- **Harmonic Series:** "Powers of 2" {1,2,4,8,16,32}
- **Variation:** Slight clockwise for rhythmic interest
- **Individual outputs:** Route to different modulation destinations

**Visual Feedback:**
- **Tap/Trig LED:** Flashes showing master tempo
- **Channel LEDs:** Flash at different rates showing polyrhythmic relationships
- **Harmonic relationships:** Visual confirmation of mathematical timing
- **Result:** Six related but different LFO rates creating polyrhythmic modulation

### **Patch 3: Six-Channel Quantized Arpeggiator**
- **CV Input Mode:** QUANT (double-click hold Option + Preset 6)
- **External CV sources** → all 6 CV inputs
- **Set different scales** for each channel (Quant parameter)
- **Individual outputs** → different oscillator pitch inputs
- **Mix output** → master melody line
- **Result:** Six-channel quantizer with different scales simultaneously

---

## Advanced Techniques

### **Mixed Mode Programming:**
- **Turn Hex Mode ON** but **select individual channels** for editing
- **Edits affect** only selected channels BUT **you hear** Hex layer offsets
- **Perfect for:** Fine-tuning individuals while hearing full context
- **Workflow:** Set up basic pattern in Hex, then tweak individuals

### **Variation Strategies:**
- **Clockwise:** Increases "ratcheting" probability (double-speed bursts)
- **Counterclockwise:** Increases "dropping" probability (half-speed gaps)
- **Rhythmic interest:** Prevents static loops, adds controlled chaos
- **Performance use:** Real-time variation control during live sets

### **Warp Function Deep Dive:**
- **12 o'clock:** No warping effect
- **Slight clockwise (1:30):** Chorus-style detuning (sweet spot!)
- **More clockwise:** Frequency shifting spreads channels apart
- **Counterclockwise:** Frequencies swarm toward Channel 1
- **Audio applications:** Creates rich chorusing and frequency shifting effects

### **Single CV Input Reassignment (v1.2+):**
- **Hold Channel Selector** button for 3 seconds
- **Reassign that CV input** to any of 14 different modulation destinations
- **Individual-channel destinations:** FREQ, TRIG, GAIN, WAVE, VARIATION, External Quantizer
- **Hex destinations:** Control all channels simultaneously
- **Custom routing:** Different CV setups per preset

---

## Common Use Cases

### **Additive Synthesis:**
- **All channels audio rate** with harmonic relationships
- **Mix output** provides rich, complex timbres
- **H.Gain control** shapes harmonic balance in real-time
- **Warp function** adds movement and chorusing effects

### **Polyrhythmic Modulation:**
- **All channels LFO rate** with rhythmic harmonic numbers
- **Individual outputs** modulate different parameters across your system
- **Tap/Trig sync** keeps everything locked to tempo
- **Variation adds** subtle rhythmic complexity

### **Drum Machine Brain:**
- **Wave Bank 3** (rhythm patterns) for trigger generation
- **Different speeds** per channel for polyrhythmic patterns
- **Individual outputs** → drum module trigger inputs
- **Variation control** adds fills and rhythmic interest

### **External Signal Quantizer:**
- **QUANT CV Input Mode** processes external signals
- **Six different scales** simultaneously on six channels
- **Individual or Mix outputs** provide quantized results
- **DC offset control** for key changes and transposition

### **Harmonic Oscillator Bank:**
- **Six individual oscillators** with easy harmonic relationships
- **Individual outputs** for separate processing
- **Frequency CV control** for playing harmonic intervals
- **Self-contained harmonic synthesizer** in 16HP

---

## Pairs Well With

### **Essential Partners:**
- **VCAs:** Control individual channel levels and Mix output dynamics
- **Filters:** Process the Mix output or individual channels
- **Clock Sources:** Sync rhythmic functions via Tap/Trig input
- **Quantizers:** Make external CV sources musical (though MOE has built-in quantization)

### **Advanced Combinations:**
- **Stereo Filters:** Process Mix output for spatial effects
- **Multiple VCAs:** Individual channel amplitude control for complex mixing
- **Sample & Hold:** Create stepped control voltages for harmonic number changes
- **Sequential Switches:** Route individual channels to different destinations
- **Envelope Followers:** Use audio to control harmonic parameters

### **Perfect Pairings:**
- **Performance Mixers:** Real-time control over individual channel levels
- **Effects Processors:** Reverb and delay enhance the additive synthesis
- **Touch Controllers:** Direct manipulation of frequency and harmonic parameters
- **Master Clock:** Keep everything locked to tempo for complex polyrhythms

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"I'm not hearing anything from the mix output!"**
- Check that channels are included in the mix (Option 1 on H.GAIN/MIX)
- **Solution:** Select channel, hold Option, turn H.Gain/Mix knob clockwise from center

**"My knobs don't seem to match what I'm hearing!"**
- When loading presets, knob positions don't match saved values
- **Solution:** This is normal - parameter only changes when you actually move the knob

**"In Individual mode, turning knobs does nothing!"**
- No channels are selected for editing
- **Solution:** Click Channel Selector buttons to select channels (LED chase alerts you to this)

**"The CV inputs aren't working!"**
- Wrong CV Input Mode selected for your application
- **Solution:** Double-click hold Option + click Preset button to select correct mode

### **🎵 Pro Tips:**

**Starting Strategy:**
- **Begin with Preset 2** ("Saw Swarm") to understand basic oscillator stacking
- **Experiment with harmonic series** before trying individual programming
- **Use Hex Mode first** to understand overall behavior, then dive into individuals

**Harmonic Programming:**
- **Start all channels same frequency** then add harmonic numbers for relationships
- **Low harmonic numbers (1-8)** for musical timbres
- **Odd harmonics only** for hollow, woody sounds  
- **Even harmonics** for brassy, rich sounds

**CV Input Mode Selection:**
- **MULTI + Hex Mode:** One CV controls same parameter on all channels
- **FREQ Mode:** Individual oscillator control for polyrhythms
- **TRIG Mode:** Perfect drum machine with individual channel control
- **QUANT Mode:** Six-channel external quantizer

**Performance Techniques:**
- **Tap/Trig button** for tempo setting instead of manual frequency adjustment
- **H.Gain in Hex Mode** for real-time harmonic balance control
- **Variation control** for adding subtle complexity to static patterns
- **Mode combinations:** Audio rate + LFO rate channels simultaneously

**Warp Function Sweet Spots:**
- **Just right of center:** Subtle chorus/detuning effect
- **Hard left:** All frequencies converge to Channel 1 (dramatic effect)
- **Moderate right:** Frequency shifting for complex timbres

---

## Why This Module Rocks

### **The Philosophy:**
Mob of Emus brings **musical mathematics** into the modular world. Instead of six random channels, you get six channels that understand harmonic relationships, making complex music theory accessible through simple knob turns.

### **The Innovation:**
- **Harmonic control structure** makes additive synthesis and polyrhythms effortless
- **15 preset harmonic series** provide instant access to musical relationships
- **Hex Mode macro layer** maintains musical relationships while adding variation
- **Six channels, unlimited combinations** - oscillators, LFOs, envelopes, patterns, quantizers

### **The Practical Benefits:**
- **Replaces multiple modules:** Six oscillators, six LFOs, six envelopes, six quantizers in 16HP
- **Musical intelligence:** Harmonic relationships ensure results sound musical
- **Performance-oriented:** Real-time control over complex harmonic and rhythmic relationships
- **Educational value:** Learn music theory through hands-on harmonic exploration

### **Perfect For:**
- **Additive synthesis enthusiasts:** Easy access to complex harmonic timbres
- **Polyrhythm explorers:** Mathematical relationships create intricate rhythmic patterns
- **Modulation masters:** Six related but different modulation sources
- **Anyone wanting musical complexity:** Instant access to thousands of years of harmonic knowledge
- **Small system builders:** Enormous functionality in compact 16HP

### **The Magic:**
Mob of Emus proves that **mathematical beauty** and **musical intuition** can work together. The harmonic series has been the foundation of music for millennia - now you can explore it directly, hear it instantly, and use it creatively in ways never before possible.

---

**Bottom Line:** Mob of Emus isn't just six channels - it's six channels that understand music theory, making complex harmonic and rhythmic relationships as easy as turning a knob.

---

*Visit [Rossum Electro-Music](http://www.rossum-electro.com/products/mob-of-emus/) for complete documentation, software updates, and factory presets*