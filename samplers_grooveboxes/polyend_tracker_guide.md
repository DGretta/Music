# Polyend Tracker Guide
*Standalone sampling sequencer for pattern-based composition and performance*

![Polyend Tracker](https://github.com/DGretta/Music/raw/main/samplers_grooveboxes/images/polyend/tracker/front_panel.jpg)
*The Polyend Tracker's intuitive interface combines classic tracker workflow with modern sampling capabilities, featuring a 7" display, grid pads, and comprehensive I/O for studio integration.*

## Quick Start
*First pattern creation in 5 minutes*

**Power up and sample:**
1. Connect headphones to the output jack 
2. Press **Sample Recorder** → set source to **Microphone** → adjust gain
3. Press **Record** → capture a drum hit or vocal snippet → press **Stop**
4. Press **Save & Load** to add sample to project instruments

**Create your first pattern:**
1. Press **Pattern** → Press **Rec** (edit mode - red frame)
2. Use grid pads to input notes on Track 1
3. Press **Play** to hear your pattern loop
4. Add more elements on different tracks using arrow keys

**Expand the groove:**
1. Press **Fill** → select **Euclidean** → set 4 events over 16 steps 
2. Add kick pattern to Track 2 using grid pads
3. Use **Sample Playback** → **Slice** to chop longer samples
4. Press **Song** → **Add Slot** to arrange multiple patterns

## Essential Parameters
*Core sequencer and sampler functions with workflow integration*

**Pattern Sequencer Architecture:**
```
🔴 Audio │ 🔵 MIDI │ 🟡 Control

┌─PATTERN TRACKS (8)─┐    ┌─SONG ARRANGEMENT─┐    ┌─PERFORMANCE─┐
│ Track 1-8      ○───┼────┼─▶Pattern Slots   │    │ Live Effects │
│ Note/Ins/Fx1/Fx2   │    │   255 patterns    ├────┼─▶Punch-in FX │ 🔴
│ 1-128 steps        │    │   Song structure  │    │   12 slots   │
└────────────────────┘    └───────────────────┘    └──────────────┘
                                     │
                   ┌─SAMPLING ENGINE──┼──────────────────────────────┐
                   │ 133s mono memory │                             │
                   │ 44.1/16bit PCM   │  ┌─SAMPLE MANIPULATION─────┐ │
                   │ Record ○─────────┼──┼─▶Granular/Wavetable    │ │ 🔴
                   │ Edit/Slice       │  │   Slicer/Beat Slice     │ │
                   │ 48 instruments   │  │   Position/Speed/Pitch  │ │
                   └──────────────────┘  └─────────────────────────┘ │
                                                                     │
┌─AUDIO I/O & SYNC──────────────────────────────────────────────────┘
│ Line In/Out   ○──🔴  MIDI In/Out ○──🔵  USB-C ○──🔵
│ Mic Input     ○──🔴  FM Radio   ○──🔴  SD Card Storage
│ Master/Track volumes    Bidirectional MIDI class-compliant
└─────────────────────────────────────────────────────────────────────┘
```

**Step Programming Structure:**
- **Steps:** Note + Instrument + 2 Effects per step
- **Patterns:** 1-255 patterns, 1-128 steps each
- **Effects:** 25 step effects + MIDI CC outputs
- **Real-time:** Live pattern recording with quantization options

**Sample Memory Management:**
- **133 seconds** total mono sample memory per project
- **48 sample-based instruments** maximum
- **Automatic conversion** from any WAV format to 44.1kHz/16-bit mono
- **Import functions** for long samples and low-quality options

## Basic Patch: First Drum Pattern
*Build a foundational rhythm using recorded samples*

**Main Example:** Classic 4/4 drum pattern with vocal chops
**Similar Equipment Options:**
- **Budget:** Korg Volca Sample ($150), Teenage Engineering PO-33 K.O! ($89)
- **Different character:** Elektron Model:Samples (elektron workflow), Roland MC-101 (zen-core sounds)
- **Premium:** Elektron Octatrack ($1,399), MPC Live II ($1,199)

**Setup Process:**
1. **Record samples** using Sample Recorder (kick, snare, hat, vocal)
2. **Pattern creation**: 16-step pattern in Pattern mode
3. **Step programming**: Place kick on steps 1, 5, 9, 13
4. **Layer elements**: Add snare on steps 5, 13, add hats on off-beats
5. **Vocal chops**: Use Slice mode to trigger different vocal segments

**Key Techniques:**
- **Sample Recorder**: Line input/microphone/FM radio sources
- **Grid pads**: Chromatic layout with scale filters (39 scales available)  
- **Step effects**: Volume (V), Panning (P), Micro-timing (m), Chance (C)
- **Live recording**: Rec + Play for real-time input with micro-timing capture

**Performance Integration:**
- **Pattern switching**: Immediate or end-of-loop pattern changes
- **Master volume**: Master key + jog wheel for quick level control
- **Mute/solo**: Shift + screen buttons for track isolation
- **Tempo control**: Song key + jog wheel for BPM adjustment (40-800 BPM)

## Intermediate Patch: Sample Manipulation Laboratory
*Advanced sample processing using granular and wavetable synthesis*

**Main Example:** Transform field recordings into musical textures
**Similar Equipment Options:**
- **Budget:** Bastl microGranny ($199), 1010music Bitbox Micro ($149)  
- **Different character:** Tasty Chips GR-1 (granular focus), OP-Z (pattern sequencer)
- **Premium:** Elektron Octatrack ($1,399), Empress Echosystem + sampler ($1,600)

**Advanced Sample Processing:**
1. **Granular synthesis**: Load long sample → Sample Playback → Granular mode
   - Set grain position, length, and direction (Forward/Backward/Pingpong)
   - Apply Position automation using LFO or Envelope
   - Use step effects: Position (p), Random Position (r)

2. **Wavetable synthesis**: Import wavetable files → Sample Playback → Wavetable mode  
   - Adjust Window parameter for frame length (1-2048 samples)
   - Use Position LFO (k effect) for smooth wavetable scanning
   - Apply WT Smoother in Sample Editor for custom wavetables

3. **Slice manipulation**: Beat Slice mode for rhythmic chopping
   - Auto-slice function detects amplitude changes
   - Manual slice point adjustment with grid pad triggering
   - Slice (S) effect for real-time slice selection

**Pattern Complexity:**
- **Multi-track arrangement**: 8 tracks of different sample treatments
- **Step effects chains**: Combine multiple effects per step (Fx1 + Fx2)
- **Automation sequences**: LFO and envelope modulation on filter cutoff, position
- **Song arrangement**: Chain multiple patterns with different processing states

**Integration Techniques:**
- **MIDI sequencing**: External gear triggered while sampling return signal
- **Audio processing**: Route through external effects before sampling
- **Stereo field**: Panning automation and stereo sample positioning
- **Master effects**: Global reverb/delay on individual or all tracks

## Advanced Patch: Performance-Ready Live Set
*Multi-pattern composition with real-time control and effects*

**Main Example:** 8-pattern electronic music set with punch-in effects
**Similar Equipment Options:**
- **Budget:** Elektron Model:Cycles ($329), Novation Circuit Tracks ($399)
- **Different character:** Roland MC-707 (zen-core workflow), Teenage Engineering OP-1 Field (tape workflow)  
- **Premium:** Elektron Octatrack ($1,399), Native Instruments Maschine+ ($1,199)

**Song Structure Development:**
1. **Pattern creation**: Build 8 distinct patterns (intro, verse, chorus, breakdown, etc.)
2. **Song arrangement**: Use Song mode to sequence pattern order
3. **Pattern variations**: Copy patterns and create subtle variations using:
   - **Pattern tools**: Duplicate, Expand, Shrink, Invert functions
   - **Fill variations**: Different euclidean rhythms and random densities
   - **Step effects**: Chance (C) and Random (n/i/f/v) effects for variation

**Performance Mode Setup:**
1. **Punch-in effects**: Configure 12 effect slots for live manipulation
   - Select effects per grid pad row (Volume, Filter, Delay, Bit Crusher)
   - Assign effects to specific tracks using screen buttons
   - Create effect value presets for instant recall

2. **Pattern track remixing**: Mix tracks from different patterns in real-time
   - Hold screen button + arrows to switch pattern per track
   - Create breakdown sections by muting/switching tracks  
   - Use Loop Pattern/Continue Song toggle for section control

**Advanced Sequencing:**
- **MIDI synchronization**: Clock sync with external gear (internal/USB/MIDI)
- **Multiple pattern lengths**: Different loop lengths per pattern for polyrhythmic complexity
- **Master mixer control**: Real-time track volume, send effects, EQ adjustment
- **Audio rendering**: Export stems and master tracks directly to SD card

**Live Performance Workflow:**
- **Pattern navigation**: Grid pads for instant pattern switching
- **Track muting**: Shift + 1-8 screen buttons for track isolation
- **Tempo manipulation**: Live BPM changes with Song key + jog wheel
- **Effect automation**: Real-time punch-in effects with visual feedback

## Expert Patch: Studio Production Integration
*Complete production workflow from sampling to final mixdown*

**Main Example:** Album track production from field recording to master
**Similar Equipment Options:**  
- **Budget:** Akai MPC One ($699), Roland SP-404mk2 ($429)
- **Different character:** Deluge (unlimited tracks), OP-Z + Oplab module (expanded I/O)
- **Premium:** Elektron Octatrack + Analog Rytm ($2,800), Native Instruments Maschine+ + Komplete ($1,800)

**Complete Production Pipeline:**
1. **Field recording session**: Use portable setup with Tracker
   - FM radio sampling for found sounds and textures
   - Line input recording from external instruments/modules
   - Microphone recording for vocal elements and acoustic sources
   - Live input monitoring with Master 3/3 Global Mixer

2. **Sample preparation and organization**:
   - **Sample Editor**: Apply destructive processing (normalize, reverse, timestretch)
   - **Instrument creation**: Build sample library with consistent naming
   - **Memory optimization**: Use Import function for long samples and low-quality mode
   - **Cross-project sampling**: Load instruments from other projects

3. **Composition and arrangement**:
   - **Multi-pattern song structure**: Verse/chorus/bridge arrangements
   - **Advanced step programming**: Complex polyrhythms and metric modulation
   - **MIDI integration**: Sequence external synths while recording audio return
   - **Pattern variation techniques**: Systematic development of musical ideas

**Professional Production Techniques:**
- **Stem rendering**: Export individual tracks for external mixing
- **Master effects chain**: EQ, compression, and limiting for release-ready masters  
- **MIDI synchronization**: Integration with DAW workflow via USB/MIDI
- **Audio routing**: Use as both sequencer and effects send for external gear

**Studio Integration Scenarios:**
- **Standalone production**: Complete tracks from initial idea to mastered output
- **DAW integration**: MIDI sync with computer-based recording systems
- **Live recording**: Sample band rehearsals and immediately create backing tracks
- **Sound design**: Process field recordings into usable musical elements

## Common Use Cases

**Beat Making and Hip-Hop Production:**
The Tracker excels at classic boom-bap and trap production with its step sequencer workflow and sampling capabilities. Record vinyl, chop samples using the Slice mode, and create complex drum patterns with swing and micro-timing. The 133-second sample memory encourages creative constraint while the punch-in effects enable live performance and arrangement variation.

**Electronic Music and Techno:**
Pattern-based sequencing makes the Tracker ideal for four-on-the-floor and complex electronic arrangements. Use the Fill tool's Euclidean rhythms for interesting polyrhythmic patterns, while the granular and wavetable synthesis modes transform samples into evolving textures. Performance mode enables live techno sets with real-time pattern and effect manipulation.

**Ambient and Experimental:**
The Tracker's sample manipulation capabilities shine in ambient contexts. Transform field recordings using granular synthesis, create evolving textures with wavetable position automation, and use the random effects for generative composition. The FM radio sampling capability adds found-sound elements perfect for experimental electronic music.

**Studio Recording and Sound Design:**
As a studio tool, the Tracker captures musical ideas quickly and develops them into full arrangements. Record band practice, immediately chop and sequence ideas, then export stems for further production in DAWs. The bidirectional MIDI and audio I/O make it a versatile addition to any studio setup.

**Live Performance and DJ Sets:**
The Performance mode transforms the Tracker into a live instrument for electronic musicians and DJs. Punch-in effects provide real-time manipulation while pattern track remixing enables seamless transitions between song sections. The portable form factor and battery power capability make it perfect for live performances.

**Learning Electronic Music Production:**
The classic tracker interface teaches fundamental sequencing concepts while modern sampling features bridge traditional and contemporary production. The step-by-step programming approach helps understand rhythm construction, while the integrated sampling workflow demonstrates the complete electronic music production process.

## Troubleshooting

**Sample Memory Issues:**
- **"Project memory full" error**: Current project exceeds 133-second sample limit
  - Solution: Use Sample Editor to crop unnecessary sample portions
  - Use Delete Unused function in Sample Loader to remove unused instruments
  - Consider Low-quality Import for longer samples when fidelity isn't critical

**SD Card and File Management:**
- **SD card not recognized**: Ensure FAT32 MBR partition format (only supported filesystem)
- **Project not visible**: Projects must be in root Projects folder (no subfolders displayed)
- **Sample import fails**: Place samples in root folder or appropriate subfolders, max 100 files per folder

**Audio and MIDI Sync Issues:**
- **MIDI clock drift**: Adjust Clock sync delay in Config menu (-50 to +50)
- **USB power instability**: Use original AC adapter rather than computer USB or power banks
- **Audio latency**: Use MIDI output latency compensation (Offset parameter) for external gear

**Pattern and Song Problems:**
- **Pattern not playing**: Ensure Pattern length is set correctly and tracks aren't muted
- **Song mode stops**: Check that all referenced patterns exist and have content
- **Effects not working**: Verify Edit mode is active (red frame) when programming step effects

**Performance Mode Issues:**
- **Effects not responding**: Ensure tracks are selected using screen buttons for effect assignment
- **Pattern remix not working**: Use screen button + arrows combination for track-specific pattern switching
- **Punch-in effects silent**: Check that first row values are set to "off" by default, remaining rows are customizable

## What This Unlocks From Your Existing Gear

**Audio Interfaces Transform Into Production Centers:**
Your basic 2-channel interface becomes a complete sampling and sequencing workstation. Record directly into the Tracker, sequence patterns, then export stems back through the interface for final mixing. The Tracker's line input allows real-time monitoring of external sources while building arrangements.

**MIDI Controllers Become Advanced Sequencers:**
Any MIDI keyboard or pad controller gains professional sequencing capabilities through the Tracker's bidirectional MIDI. Program complex patterns in the Tracker, then control external synthesizers with precise timing and advanced step effects. The 16 MIDI channels support entire studio setups.

**Microphones Become Musical Instruments:**
Transform any microphone into a performance tool using the Tracker's real-time sampling and slice capabilities. Record vocals, percussion, or room tones, then immediately incorporate them into musical arrangements. The auto-slice function turns any audio into playable instruments.

**Field Recorders Enable Instant Composition:**
Portable recording devices paired with the Tracker create complete mobile studios. Sample environmental sounds, process them through granular/wavetable synthesis, and arrange full tracks in the field. Export finished compositions directly to SD card without computer intervention.

**Guitar Pedals Become Studio Effects:**
Route the Tracker's output through guitar effect pedals before returning to the line input for sampling. This creates unique processed textures while maintaining the original dry samples. Build libraries of processed and unprocessed versions for maximum flexibility.

**Drum Machines Gain Pattern Sequencing:**
Existing drum machines become sample sources for complex pattern arrangements. Sample individual drum sounds, then use the Tracker's advanced sequencing features like euclidean rhythms, micro-timing, and chance operations to create patterns impossible on the original machine.

**Synthesizers Become Sampling Sources:**
Hardware and software synthesizers can be sequenced by the Tracker while simultaneously sampling their output. Create patterns that control external synths, record the audio results, then layer the live and sampled elements for rich, complex arrangements.

## Pairs Well With

**Essential Studio Connections:**
- **Audio interfaces**: Focusrite Scarlett series for studio integration and monitoring
- **MIDI keyboards**: Arturia KeyStep Pro or Novation Launchkey for expanded input control  
- **Headphones**: Audio-Technica ATH-M50x or Sony MDR-7506 for accurate monitoring
- **Powered monitors**: JBL LSR305 or Yamaha HS5 for studio reference monitoring

**Sampling and Performance Enhancement:**
- **Handheld recorders**: Zoom H1n or Tascam DR-05X for field recording sessions
- **Contact microphones**: JrF Contact mics for unique texture sampling
- **Guitar effects pedals**: Chase Bliss, Empress, or Strymon for audio processing chains
- **DJ mixers**: Pioneer DJM series or Allen & Heath Xone for live performance integration

**MIDI Expansion and Control:**
- **Clock sources**: Expert Sleepers ES-9 or Pamela's PRO Workout for complex sync scenarios  
- **MIDI controllers**: Push 2, Maschine, or MPD series for enhanced pattern input
- **Hardware sequencers**: Squarp Pyramid or Social Entropy Engine for pattern layering
- **Modular integration**: Expert Sleepers FH-2 for CV conversion and modular sync

**Mobile and Portable Setups:**
- **Power banks**: Anker PowerCore series (simple models without power management)
- **Portable speakers**: JBL Charge or UE Boom for field monitoring
- **Travel cases**: Decksaver cover and custom foam cases for protection
- **Headphone amplifiers**: FiiO A3 or Behringer HA400 for multiple monitoring outputs

*Licensed under Creative Commons Attribution-ShareAlike 4.0 International*