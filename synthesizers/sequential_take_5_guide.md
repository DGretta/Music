# Sequential Take 5 Guide
*Complete 5-voice analog polysynth with Prophet-5 heritage*

![Sequential Take 5](https://github.com/DGretta/Music/raw/main/synthesizers/images/sequential/take_5/front_panel.jpg)
*Sequential Take 5 front panel showing oscillators, filter, envelopes, modulation matrix, and performance controls*

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is the Sequential Take 5?** A compact 5-voice polyphonic analog synthesizer combining two voltage-controlled oscillators per voice, a Prophet-5 Rev4-lineage filter, comprehensive modulation capabilities, and built-in effects in a desktop format.

🔴 Audio │ 🔵 CV │ 🟡 Gate

### Basic Two-Oscillator Sound
```
OSC 1 (Sawtooth) ──┐
                   ├── FILTER ── VCA ── OUTPUT 🔴
OSC 2 (Sawtooth) ──┘     ↑       ↑
                         │       │
                    ENV 1 ●  ENV 2 ● 🔵
```

1. **Press power** and wait for boot sequence
2. **Press Factory button** to access factory presets  
3. **Select program 101** ("80s Cali Dreamin") using Bank + Program buttons
4. **Play the keyboard** - you should hear a rich analog pad sound
5. **Turn Cutoff knob** (Filter section) to hear classic analog filtering
6. **Success!** You're hearing classic Sequential analog synthesis

---

## Essential Parameters

### Signal Flow Overview
🔴 Audio │ 🔵 CV │ 🟡 Gate

```
┌─OSCILLATORS─┐    ┌─FILTER──┐    ┌─AMPLIFIER─┐    ┌─EFFECTS─┐
│ OSC 1    ○──┼────┼─▶Cutoff │    │          │    │         │
│ OSC 2    ○──┼────┼─ Reso   ├────┼─▶VCA ○───┼────┼─▶Out ○──┼──🔴
│ Sub Osc  ○──┼────┼─ Drive  │    │     ↑    │    │  ↑  ↑   │
│ Noise    ○──┼────┼─        │    │     │    │    │  │  │   │
└─────────────┘    └─────────┘    └─────┼────┘    └──┼──┼───┘
                                        │            │  │
                   ┌─ENVELOPES───────────┼────────────┘  │
                   │ ENV 1 (Filter) ○────┘               │
                   │ ENV 2 (Amp)    ○────────────────────┘ 🔵
                   └─────────────────────────────────────────┘
```

### Core Control Sections

**OSCILLATORS (Sound Generation)**
- **Octave:** Sets base frequency (-2 to +2 octaves)
- **Pitch:** Fine tuning (±7 semitones)  
- **Shape:** Continuously variable waveshape (sine → sawtooth → pulse)
- **Sync 2→1:** Hard sync oscillator 2 to oscillator 1

**MIXER (Level Control)**
- **Osc 1:** Oscillator 1 level
- **Osc 1 Sub:** Sub-oscillator level (1 octave below Osc 1)
- **Osc 2:** Oscillator 2 level
- **FM 2→1:** Frequency modulation amount from Osc 2 to Osc 1
- **Noise:** White/pink noise level

**FILTER (Tone Shaping)**  
- **Cutoff:** Low-pass filter frequency (0-1023)
- **Resonance:** Filter emphasis (0-127, self-oscillates at high settings)
- **Drive:** Input gain and harmonic saturation

**ENVELOPES (Time-Based Control)**
- **Attack:** Rise time when key pressed
- **Decay:** Fall time from attack to sustain level
- **Sustain:** Hold level while key held
- **Release:** Fall time when key released
- **Velocity:** Touch sensitivity on/off
- **Amount:** Modulation depth (bipolar)

---

## What This Unlocks From Your Existing Gear

### MIDI Controller Integration
**Transform your basic MIDI keyboard into a professional analog workstation:**
- **61/88-key controllers** → Full polyphonic access with weighted feel
- **Pad controllers** → Trigger sequences and arpeggios with velocity sensitivity  
- **Breath controllers** → Real-time expression via MIDI CC mapping
- **Your existing controller gains:** Analog warmth, polyphonic aftertouch response, comprehensive modulation

### Studio Workflow Enhancement  
**Elevate your digital studio with analog character:**
- **Audio interfaces** → Record direct analog signal with vintage warmth
- **DAW integration** → MIDI sequencing with analog sound generation
- **Hardware effects** → Process Take 5 through your existing pedal chain
- **Your studio gains:** Analog front-end, vintage character, tactile control over digital precision

### Performance Setup Expansion
**Turn practice setup into professional performance rig:**
- **Expression pedals** → Real-time filter sweeps and modulation control
- **Sustain pedals** → Arpeggiator hold, traditional sustain functions
- **Hardware sequencers** → Clock sync, bidirectional MIDI communication
- **Your performance setup gains:** Analog synthesis foundation, real-time expression, professional stage presence

### Creative Workflow Integration
**Enhance existing creative processes:**
- **Field recorders** → Sample Take 5 sounds for further manipulation
- **Loop stations** → Layer analog textures with live performance
- **Modular systems** → Clock output, audio processing, CV control (with appropriate interfaces)
- **Your creative workflow gains:** Analog texture source, polyphonic foundation, vintage character reference

---

## Patch Examples

### Basic: Classic Analog Bass
*Foundation technique for all analog bass programming*

🔴 Audio │ 🔵 CV │ 🟡 Gate

```
┌─OSC 1 (Octave: -2)─┐    ┌─FILTER─────┐    ┌─ENV 2──┐
│ Shape: Sawtooth ○──┼────┼─▶Cutoff    │    │ Amp ○──┼──🔴
│                    │    │  Resonance  │    │        │
└────────────────────┘    │  (9 o'clock)│    └────────┘
                          │      ↑      │         ↑
                          └──────┼──────┘         │
                                 │                │
                        ┌─ENV 1──┼────────────────┘
                        │ Attack: 0              │ 🔵
                        │ Decay: 2 o'clock       │
                        │ Sustain: 0             │
                        │ Release: 10 o'clock    │
                        │ Amount: Full CW        │
                        └────────────────────────┘
```

**Programming Steps:**
1. **Start with Basic Program** (Global → Basic Program → Write)
2. **Set Osc 1 Octave to -2** for bass register
3. **Filter Cutoff to 8 o'clock** (closed position)
4. **Filter Resonance to 9 o'clock** for analog character
5. **Env 1 Amount fully clockwise** for maximum filter modulation
6. **Env 1 settings:** Attack 0, Decay 2 o'clock, Sustain 0, Release 10 o'clock
7. **Play low notes** - instant analog bass with classic filter sweep

**Similar Synthesizer Options:**
- **Budget:** Behringer DeepMind 6 (similar filter character), Korg Minilogue XD (analog oscillators)
- **Different character:** Moog Subsequent 37 (Moog ladder filter), Roland SH-01A (Roland filter)
- **Premium:** Sequential Prophet-5 Rev4 (identical filter lineage), Moog One (premium Moog sound)

---

### Intermediate: Hard Sync Lead with Effects
*Classic sync sweep technique with modern processing*

🔴 Audio │ 🔵 CV │ 🟡 Gate

```
┌─OSC 1 (Sync Master)─┐    ┌─OSC 2 (Synced)──┐    ┌─FILTER──┐
│ Octave: +1        ○─┼────┼─▶Sync 2→1: ON   │    │ Cutoff  │
│                     │    │ Octave: -2       │    │    ↑    │
└─────────────────────┘    │ Shape: Sawtooth ○┼────┼────┼────┤──🔴
                           └──────────────────┘    │    │    │
                                    ↑              │    │    │
                              ┌─ENV 1 (Aux)────────┘    │    │
                              │ Attack: 0               │    │ 🔵
                              │ Decay: 2 o'clock        │    │
                              │ Sustain: 9 o'clock      │    │
                              │ Release: 12 o'clock     │    │
                              │ Destination: Osc 1 Fine │    │
                              │ Amount: 127             │    │
                              └─────────────────────────┘    │
                                                            │
                              ┌─EFFECTS──────────────────────┘
                              │ Type: Delay
                              │ Time: 12 o'clock
                              │ Mix: 9 o'clock
                              │ Feedback: 9 o'clock
                              └─────────────────────────────────
```

**Programming Steps:**
1. **Start with Basic Program**
2. **Enable Osc 2:** Turn up Osc 2 level to 127
3. **Set up hard sync:** Sync 2→1 ON, Osc 1 octave +1, Osc 2 octave -2
4. **Configure Env 1 as auxiliary:** Env Routing → Env 1: Aux
5. **Route Env 1 to modulate Osc 1 pitch:** Mod Matrix → Env 1 → Osc 1 Fine → Amount 127
6. **Set Env 1 for pitch sweep:** Attack 0, Decay 2 o'clock, Sustain 9 o'clock, Release 12 o'clock
7. **Add delay effect:** Effects → Type: Delay, Time 12 o'clock, Mix 9 o'clock, Feedback 9 o'clock
8. **Play single notes** - classic sync sweep with modern delay processing

**Similar Synthesizer Options:**
- **Budget:** Arturia MicroBrute (hard sync capable), Korg MS-20 Mini (sync and effects)
- **Different character:** Moog Matriarch (Moog sync character), Novation Peak (digital sync algorithms)
- **Premium:** Sequential Prophet Rev2 (16-voice sync), Moog One (premium sync with effects)

---

### Advanced: Evolving Brass with Pitch Blip
*Complex envelope routing and effects integration*

🔴 Audio │ 🔵 CV │ 🟡 Gate

```
┌─OSC 1──┐    ┌─OSC 2──┐    ┌─FILTER─────┐    ┌─VCA─┐    ┌─EFFECTS─┐
│ Saw ○──┼────┼─Saw ○──┼────┼─▶Cutoff    │    │    │    │ Reverb  │
│        │    │     ↑  │    │  Reso      ├────┼─○──┼────┼─▶Mix ○──┼──🔴
└────────┘    └─────┼──┘    │  (10 o'clk)│    │ ↑  │    │ Decay   │
                    │       │      ↑     │    │ │  │    │ Tone    │
                    │       └──────┼─────┘    └─┼──┘    └─────────┘
              ┌─ENV 1──────────────┼───────────┘           
              │ Attack: 10 o'clock │               🔵 Modulation
              │ Decay: 10 o'clock  │               
              │ Sustain: 11 o'clock│               
              │ Release: 10 o'clock │               
              │ Amount: 3 o'clock   │               
              │ Velocity: ON        │               
              └─────────────────────┘               
                                                    
              ┌─ENV 2 (Filter + Amp)                
              │ Attack: 10 o'clock                  
              │ Decay: 10 o'clock                   
              │ Sustain: 5 o'clock                  
              │ Release: 12 o'clock                 
              │ Velocity: ON                        
              └─────────────────────────────────────
                                                    
              ┌─MOD MATRIX──────────────────────────
              │ Slot 3: Env 1 → Osc 2 Fine → +5    
              └─────────────────────────────────────
```

**Programming Steps:**
1. **Start with Basic Program**
2. **Set both oscillators:** Osc 1 & 2 levels to 127, both sawtooth
3. **Detune Osc 2:** Slightly adjust Osc 2 pitch for thickness
4. **Configure filter:** Cutoff 9 o'clock, Resonance 10 o'clock, Drive moderate
5. **Set Env Routing:** Env 1: Filter, Env 2: Filter + Amp
6. **Configure Env 1 (Filter):** Attack 10 o'clock, Decay 10 o'clock, Sustain 11 o'clock, Release 10 o'clock, Amount 3 o'clock, Velocity ON
7. **Configure Env 2 (Amp):** Attack 10 o'clock, Decay 10 o'clock, Sustain 5 o'clock, Release 12 o'clock, Velocity ON
8. **Add pitch blip:** Mod Matrix → Slot 3 → Env 1 → Osc 2 Fine → Amount +5
9. **Add reverb:** Reverb ON, Mix 10 o'clock, Decay 3 o'clock, Tone 11 o'clock
10. **Play chords in upper register** - dynamic brass with attack blip and space

**Similar Synthesizer Options:**
- **Budget:** Roland JD-Xi (analog/digital hybrid), Novation MiniNova (brass presets)
- **Different character:** Korg Prologue (digital oscillator character), Roland Jupiter-X (modeling approach)
- **Premium:** Sequential Prophet Rev2 (16-voice brass), Moog One (premium analog brass), UDO Super 6 (binaural brass)

---

### Expert: Performance Pad with Alternative Tuning
*Multi-source modulation with real-time expression*

🔴 Audio │ 🔵 CV │ 🟡 Gate

```
┌─OSC 1─┐ ┌─OSC 2─┐    ┌─FILTER────┐    ┌─VINTAGE─┐    ┌─EFFECTS─┐
│Pulse○─┼─┼Pulse○─┼────┼─▶Cutoff   │    │ Voice   │    │Chorus   │
│   ↑   │ │   ↑   │    │  Key Track├────┼─Variation○────┼Phaser  ├──🔴
│   │   │ │   │   │    │  Resonance│    │ (2 o'clk)│    │Reverb  │
└───┼───┘ └───┼───┘    │     ↑     │    └─────────┘    └────────┘
    │         │        └─────┼─────┘                        ↑
    │         │              │                              │
┌───┼─LFO 1───┼──────────────┼──────────────────────────────┘
│ Global      │              │         🔵 Complex Modulation
│ Triangle    │              │         
│ Freq: 10 o'clock          │         
│ Dest: Osc 1 Shape          │         
│ Amount: +8                 │         
└────────────┼───────────────┘         
             │                         
┌───LFO 2────┼─────────────────────────
│ Per Voice   │                       
│ Triangle    │                       
│ Freq: 9 o'clock                    
│ Dest: Osc 2 Shape                  
│ Amount: -39                        
└─────────────┴─────────────────────── 
                                      
┌─ALTERNATIVE TUNING──────────────────
│ Scale: Just Intonation in A        
│ (Global Menu → Scale → #9)         
└────────────────────────────────────
                                     
┌─PERFORMANCE CONTROLS───────────────
│ Mod Wheel → LFO 1 Amount          
│ Aftertouch → Filter Cutoff        
│ Expression Pedal → Reverb Mix     
└───────────────────────────────────
```

**Programming Steps:**
1. **Start with Basic Program**
2. **Alternative tuning:** Global → Scale → #9 (Just Intonation in A)
3. **Set oscillator shapes:** Both to pulse wave (2 o'clock on Shape knobs)
4. **Configure LFO 1:** Global, Triangle, Freq 10 o'clock, Dest: Osc 1 Shape, Amount +8
5. **Configure LFO 2:** Per Voice, Triangle, Freq 9 o'clock, Dest: Osc 2 Shape, Amount -39
6. **Enable voice variation:** Vintage knob to 2 o'clock
7. **Filter setup:** Cutoff 12 o'clock, Key Track moderate, Resonance subtle
8. **Multi-stage effects:** Chorus ON → Phaser ON → Reverb ON (series processing)
9. **Performance routing:**
   - Mod Wheel → LFO 1 Amount (vibrato intensity)
   - Mod Matrix: Aftertouch → Filter Cutoff (brightness control)
   - Expression Pedal → Reverb Mix (space control)
10. **Play sustained chords** - evolving pad with organic variation and expressive control

**Performance Techniques:**
- **Mod Wheel:** Gradually increase for more waveshape animation  
- **Aftertouch:** Press harder for brighter, more present sound
- **Expression Pedal:** Sweep for spatial depth changes
- **Velocity:** Vary attack strength for filter envelope intensity

**Similar Synthesizer Options:**
- **Budget:** Korg Minilogue XD (microtuning support), Arturia PolyBrute (expression control)
- **Different character:** Novation Peak (wavetable alternative tunings), ASM Hydrasynth (advanced modulation)
- **Premium:** Sequential Prophet Rev2 (advanced modulation matrix), Moog One (premium expression), UDO Super 6 (binaural processing)

---

## Advanced Techniques

### Modulation Matrix Mastery
The Take 5's 16-slot modulation matrix enables complex sound design beyond front-panel controls.

**Common Modulation Sources:**
- **LFO 1 (Global):** Same modulation across all voices
- **LFO 2 (Per Voice):** Individual voice modulation  
- **Envelopes 1 & 2:** Time-based modulation
- **Mod Wheel:** Real-time performance control
- **Aftertouch:** Touch-sensitive expression
- **Velocity:** Playing dynamics
- **Note Number:** Keyboard position scaling

**Creative Modulation Destinations:**
- **Oscillator Fine Frequency:** Vibrato, pitch blips
- **Oscillator Shape:** Waveshape animation  
- **Filter Cutoff:** Classic filter sweeps
- **LFO Frequency:** Complex rhythmic patterns
- **Effect Parameters:** Animated processing

### Unison and Chord Memory
**Standard Unison:** Stack up to 5 voices for monophonic lead sounds
- **Unison Detune:** 0-7 for voice spreading
- **Voice Count:** 2-5 voices per note
- **Key Mode:** Low/High/Last note priority

**Chord Memory Technique:**
1. **Hold desired chord** (up to 5 notes)
2. **Press Unison button** while holding chord
3. **Single notes now trigger entire chord** transposed to played note
4. **Save program** to store chord memory

### Alternative Tunings Integration
Access 65 built-in alternative tunings via Global Menu → Scale:

**Popular Tunings for Modern Music:**
- **Just Intonation (#9):** Pure harmonic intervals
- **Pythagorean (#8):** Ancient mathematical tuning  
- **1/4 Tone Equal Temperament (#5):** Microtonal exploration
- **Harmonic Series (#2):** Natural overtone relationships

**Workflow Tips:**
- **Program per tuning:** Save specific sounds with their optimal tunings
- **Chord voicings change:** Some intervals sound different in alternative tunings
- **Melodic behavior varies:** Scale steps have different interval sizes

### Performance Integration

**MIDI Controller Enhancement:**
- **CC mappings:** 89 continuous controllers available
- **NRPN support:** Complete parameter access via MIDI
- **Program changes:** Bank/program selection via MIDI
- **Clock sync:** Integrate with DAW or hardware sequencers

**Live Performance Setup:**
- **Expression pedal:** Real-time filter/modulation control
- **Sustain pedal:** Traditional sustain or arpeggiator hold
- **MIDI keyboard:** Full polyphonic control with aftertouch
- **Audio interface:** Direct recording or live sound reinforcement

---

## Common Use Cases

### Studio Production
**Analog Foundation Layer:**
- **Record direct:** Capture pure analog signal chain
- **MIDI sequencing:** Program complex parts in DAW
- **Layering:** Combine with digital synths for hybrid textures
- **Processing:** Send through studio effects and processors

### Live Performance  
**Keyboard Rig Integration:**
- **MIDI controller setup:** Use existing keyboard for control
- **Split/layer configurations:** Combine with other instruments
- **Expression integration:** Pedal and aftertouch control
- **Stage monitoring:** Balanced outputs for FOH and monitors

### Sound Design
**Synthesis Learning:**
- **Classic techniques:** Learn fundamental analog synthesis
- **Modern applications:** Apply vintage techniques to contemporary music
- **Preset analysis:** Reverse-engineer factory programs
- **Custom programming:** Develop signature sounds

### Home Studio Enhancement
**Creative Catalyst:**
- **Inspiration source:** Hands-on analog immediacy
- **Character injection:** Add warmth to digital productions
- **Learning instrument:** Understand synthesis fundamentals
- **Compact solution:** Professional sound in desktop format

---

## Historical Context

The Sequential Take 5 represents a significant achievement in the modern analog renaissance, successfully condensing the essence of Sequential's Prophet-5 legacy into a compact, accessible format. Released in 2021, it marked Sequential's commitment to bringing professional analog synthesis to a broader audience without compromising sonic integrity.

**Prophet-5 Heritage:** The Take 5's filter derives directly from the Prophet-5 Rev4 design, providing authentic vintage character that defined countless recordings from the late 1970s onward. This lineage connects modern players to the same sonic DNA that shaped progressive rock, new wave, and electronic music history.

**Modern Analog Renaissance:** The Take 5 emerged during the 2020s analog revival, demonstrating how vintage synthesis principles could be implemented with contemporary reliability and features. Unlike simple reissues, it thoughtfully integrates modern conveniences—USB connectivity, comprehensive MIDI implementation, built-in effects—while preserving analog signal path purity.

**Design Philosophy:** Sequential's approach with the Take 5 reflects founder Dave Smith's original vision: sophisticated synthesis made approachable. The compact format and streamlined interface remove barriers between musician and sound, encouraging immediate musical expression rather than parameter diving.

This historical context enhances understanding of the Take 5's place in synthesis evolution—not merely a nostalgia piece, but a purposeful distillation of decades of refinement in analog synthesis design.

---

## Troubleshooting

### No Sound Issues
**Check these common causes:**
- **Master Volume:** Ensure front-panel volume knob is up
- **Program Volume:** Some programs have low volume settings
- **Audio connections:** Verify left/right output cables  
- **Local Control:** Global Menu → Local Control should be "On"
- **Filter Cutoff:** If closed completely, no sound passes through

### Tuning Problems
**Oscillator calibration:**
1. **Access calibration:** Global Menu → Cal Voices
2. **Press Write** and wait for auto-calibration completion
3. **Repeat if needed:** First few uses may require multiple calibrations
4. **Temperature stability:** Allow warm-up time for stable tuning

### MIDI Communication Issues
**Verify MIDI settings:**
- **MIDI Channel:** Global Menu → MIDI Channel (match sending device)
- **MIDI Cable:** USB or DIN connection working properly
- **MIDI Control:** Global Menu → MIDI Control should be "On"
- **Local Control:** May need to be "Off" for external sequencing

### Performance Issues
**Stuck notes:**
- **All Notes Off:** MIDI CC 123 or power cycle
- **MIDI feedback:** Check for MIDI loops in setup
- **Sustain pedal:** Verify pedal polarity setting

**Calibration drift:**
- **Pitch/Mod wheels:** Global Menu → Cal Wheels
- **Filter tracking:** May require oscillator recalibration
- **Environmental factors:** Temperature and humidity affect analog circuits

---

## Pairs Well With

### MIDI Controllers
**Expand keyboard range and expression:**
- **61/88-key controllers:** Full-size keyboard with weighted action
- **Pad controllers:** Trigger arpeggios and sequences with velocity
- **Wind controllers:** Breath control for organic expression
- **Expression pedals:** Real-time filter and modulation control

### Audio Processing
**Enhance and shape Take 5 output:**
- **Studio compressors:** Add punch and presence to analog sound
- **Hardware reverbs:** Complement built-in effects with premium space
- **Analog delays:** Stack with internal delay for complex echoes  
- **Distortion/overdrive:** Push analog circuits for more aggressive sounds

### Studio Integration
**Professional recording and production:**
- **Audio interfaces:** High-quality AD conversion for digital recording
- **Studio monitors:** Accurate monitoring for sound design
- **Hardware sequencers:** Clock sync for hardware-based compositions
- **Modular systems:** Clock output and audio processing integration

### Performance Gear
**Live performance enhancement:**
- **Keyboard amplifiers:** Stage amplification with analog warmth
- **Direct boxes:** Balanced outputs for professional sound systems
- **MIDI foot controllers:** Hands-free program changes and expression
- **Stage pianis:** Weighted action controllers for expressive playing

### Creative Combinations
**Unique sound design possibilities:**
- **Looping stations:** Layer Take 5 textures in real-time performance
- **Guitar effects:** Process analog synth through pedal chains
- **Field recorders:** Capture Take 5 sounds for sampling and manipulation
- **Cross-platform integration:** Combine analog and digital synthesis approaches

---

*The Sequential Take 5 demonstrates how established framework standards adapt seamlessly to complete synthesizers, maintaining educational progression and professional presentation while testing framework flexibility across gear categories.*
