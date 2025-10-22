# ASM Hydrasynth Keyboard Guide

*49-key digital synthesizer with polyphonic aftertouch, advanced waveshaping, and deep modulation*

![ASM Hydrasynth Keyboard](https://github.com/DGretta/Music/raw/main/synthesizers/images/asm/hydrasynth_keyboard/front_panel.jpg)  
*The Hydrasynth Keyboard features a 49-key polytouch keyboard, large ribbon controller, dual OLED displays, and comprehensive hands-on control with dedicated knobs for all major synthesis parameters. The desktop version offers 24 velocity-sensitive RGB pads instead of keys.*

---

## Quick Start

**Your First Sound in 5 Minutes:**

1. **Power and Audio Connection**
   - Connect 12V DC power supply (center positive)
   - Connect L/R outputs to mixer or monitors
   - Turn on power switch (rear panel)
   - Set Master Volume to 50%

2. **Load Your First Preset**
   - Press **[HOME]** button (center of panel)
   - Turn large **Patch knob** to browse presets
   - Try **Bank A, Patch 001** - "Classic Lead" for immediate playability
   - Press **[BROWSE]** for category sorting (Lead, Pad, Bass, etc.)

3. **Immediate Expression**
   - Play keys - polyphonic aftertouch responds to individual finger pressure
   - Touch **ribbon controller** (horizontal strip above keys) for pitch bend
   - Move **Mod wheel** for vibrato depth
   - Use **Macro knobs** (8 knobs around right display) for instant sound transformation

4. **Quick Tweaks**
   - Press **[FILTER 1]** or **[FILTER 2]** buttons
   - Adjust **Cutoff** and **Resonance** knobs (top panel)
   - Press **[HOME]** to return to Macro controls
   - **[SAVE]** button stores your changes to new location

**Recommended Starting Presets:**
- **A001 - Classic Lead:** Learn filter sweeps and ribbon pitch control
- **A015 - Poly Pad:** Explore polyphonic aftertouch expression
- **B008 - Bass Sync:** Understand WaveScan morphing with Macro controls
- **C022 - Arp Sequence:** Experience integrated arpeggiator with clock sync

---

## Essential Parameters

### Synthesis Architecture Overview

The Hydrasynth's signal path represents a unique hybrid approach - digital oscillators with extensive analog-modeling waveshaping, fed through sophisticated multi-mode filtering and modulation. Understanding this architecture reveals why the instrument excels at both classic analog-style sounds and complex digital timbres.

**Signal Flow Diagram:**
```
🔴 Audio Path

┌─OSCILLATOR GROUP──────────────────────────────────────────┐
│                                                            │
│  ┌─OSC 1───┐    ┌─MUTANT 1─┐    ┌─MUTANT 2─┐            │
│  │ Single/ │○───┼─ 8 modes─┼────┼─ 8 modes─┼───┐        │
│  │WaveScan │    └──────────┘    └──────────┘   │        │
│  └─────────┘                                    │        │
│                                                  ▼        │
│  ┌─OSC 2───┐    ┌─MUTANT 3─┐    ┌─MUTANT 4─┐ ┌─MIXER──┐│
│  │ Single/ │○───┼─ 8 modes─┼────┼─ 8 modes─┼─┤ Levels ││
│  │WaveScan │    └──────────┘    └──────────┘ │ Pan    ││
│  └─────────┘                                  │ Routing││
│                                               │        ││
│  ┌─OSC 3───┐                                 │        ││
│  │ Single  │○─────────────────────────────────┤        ││
│  │ only    │                                  │        ││
│  └─────────┘                                  │        ││
│                                               │        ││
│  ┌─RING-NOISE──┐                             │        ││
│  │ Ring Mod    │○─────────────────────────────┤        ││
│  │ 7 noise     │                              └────────┘│
│  │ colors      │                                   │    │
│  └─────────────┘                                   │    │
└────────────────────────────────────────────────────┼────┘
                                                     │
         ┌───────────────────────────────────────────┘
         │
         ▼
┌─FILTER SECTION─────────────────────────────────────────┐
│                                                         │
│  ┌─FILTER 1────────┐         ┌─FILTER 2──────────┐    │
│  │ 16 types:       │         │ State-variable:   │    │
│  │ • LP Ladder x4  │         │ • LP/BP/HP        │    │
│  │ • MS-20 style   │         │ • LP/Notch/HP     │    │
│  │ • 3-Pole Cascade│  Series │ • Morphable       │    │
│  │ • Vowel Formant ├─ or  ──┤ • 12dB/oct        │    │
│  │ • LP 1/8 Pole   │ Parallel│                   │    │
│  │ + 7 more types  │         │                   │    │
│  │ Drive Pre/Post  │         │                   │    │
│  └─────────────────┘         └───────────────────┘    │
│         │                              │               │
└─────────┼──────────────────────────────┼───────────────┘
          │                              │
          └──────────────┬───────────────┘
                         ▼
                  ┌─AMPLIFIER──┐
                  │ VCA        │
                  │ Vel/LFO    │○─── 🔴 To Effects
                  └────────────┘

🔵 Modulation Sources (detailed in Session 2):
    5 DAHDSR Envelopes │ 5 Multi-waveform LFOs │ 32-slot Mod Matrix
    Ribbon Controller │ Polyphonic Aftertouch │ 8 Macro Controls
```

**Key Architecture Characteristics:**
- **8-voice polyphony** with independent processing per voice
- **Three oscillators per voice:** OSC 1 and 2 support both Single and WaveScan modes; OSC 3 is Single mode only
- **Four Mutant processors:** Pairs of serial waveshapers (Mutants 1-2 process OSC 1, Mutants 3-4 process OSC 2)
- **Ring modulator + Noise generator:** Additional timbral sources with independent level/pan control
- **Dual filters:** Series or parallel routing with per-source filter assignment
- **Extensive modulation:** Pre-wired ENV1→Filters, ENV2→Amp, LFO1→Filters, LFO2→Amp, plus 32-slot matrix

---

### Oscillator Section

The Hydrasynth's oscillator architecture combines flexibility with sonic depth. Each of the three oscillators serves a distinct role, and OSC 1 and 2 gain dramatic capabilities through their WaveScan mode and downstream Mutant processing.

**OSC 1 & OSC 2 - Dual Mode Operation:**

Both OSC 1 and OSC 2 can operate in two distinct modes, selected per oscillator:

**Single Mode** provides straightforward operation:
- **Wave:** 219 waveforms organized by character (Classic, Pulse, Horizon, Spect, etc.)
- **Semi:** ±36 semitones coarse tuning (hold SHIFT to jump by octaves)
- **Cents:** ±50 cents fine tuning
- **Keytrack:** 0-200% keyboard tracking (100% = standard, 0% = fixed pitch, 200% = two octaves per keyboard octave)

**WaveScan Mode** enables sophisticated wavetable-style morphing:
- **Wavelist Edit:** Define up to 8 waveform positions (any of 219 waveforms or OFF/Silence)
- **WaveScan:** Morph position from 1.0 to 8.0 (intermediate values crossfade between adjacent waveforms)
- **Semi/Cents/Keytrack:** Identical to Single mode functionality
- **Morphing behavior:** Position 1.5 = 50% blend of WAV 1 and WAV 2, position 3.7 = 70% WAV 3 + 30% WAV 4

**WaveScan Implementation Details:**
- Press OSC 1 or OSC 2 button → Control knob 1 selects mode (Single/WaveScan)
- In WaveScan mode, press Control button 2 to access Wavelist Edit page
- **Wavelist shortcuts:**
  - Press Control button for any WAV position to audition that waveform in isolation
  - Hold SHIFT + turn Control knob 3 → automatically populate WAV 3-8 with sequential waveforms
- **Modulation target:** WaveScan position can be modulated via Mod Matrix (common: LFO → WaveScan for evolving timbres)

**OSC 3 - Foundation Oscillator:**

OSC 3 operates in Single mode only (no WaveScan option):
- **Wave:** Same 219 waveforms as OSC 1/2
- **Semi:** ±36 semitones coarse tuning
- **Cents:** ±50 cents fine tuning  
- **Keytrack:** 0-200% keyboard tracking

**Typical OSC 3 roles:**
- Sub-bass foundation (detuned -12 or -24 semitones)
- Fixed-pitch drone (Keytrack = 0%)
- Rhythmic element when modulated by gated envelope
- Harmonic reinforcement at +12/+24 semitones

**219 Waveform Library Organization:**

The waveform library spans from classic analog shapes to complex digital timbres:

- **Classic:** Sine, Triangle, TriSaw, Saw, Square (5 waveforms)
- **Pulse:** Pulse 1-6 (various pulse widths, 6 waveforms)
- **Horizon:** Horizon 1-8 (bandwidth-limited harmonics, 8 waveforms)
- **Spect A/X:** Spectral series variations (14 waveforms)
- **Additional banks:** SyncLav, Esquire, ChriMey, Klangor, Induct, Scorpio, Belview, Chendom, Glefan, Sqarbel, Obob, Ingvay, Particl, Vokz, Flux, Alweg, Tronic, Duotone, Bobanab, Melotic, Cluster, Micoten, Orland, Neuton, Xfer, Resyn, Sano, SquRoo, Harmon (171+ specialized waveforms)

**Programming Strategy:**
- Start with Classic or Pulse waveforms to learn synthesis fundamentals
- Explore Horizon and Spect series for harmonically rich starting points
- Use specialized banks (Flux, Alweg, Tronic) for complex digital timbres
- WaveScan mode excels with contrasting waveforms (Sine → Saw → Square progression creates dramatic morphing)

---

### Mutant Processors

The four Mutant processors are what elevate the Hydrasynth's oscillators from good to exceptional. Each Mutant can apply one of eight distinct waveshaping algorithms to transform the incoming waveform. Mutants 1-2 process OSC 1 (in series), while Mutants 3-4 process OSC 2.

**Signal Routing:**
```
OSC 1 ○──→ Mutant 1 ──→ Mutant 2 ──→ Mixer
OSC 2 ○──→ Mutant 3 ──→ Mutant 4 ──→ Mixer
```

**Eight Mutant Modes (Available on All Four Mutants):**

**1. FM-Lin (Linear Frequency Modulation)**
- **Function:** Classic 2-operator FM synthesis using any waveform as carrier or modulator
- **Parameters:**
  - **Source:** Sine, Triangle, OSC 1-3, Ring Mod, Noise, Mutant 1-4, Mod In 1/2
  - **Ratio:** 0.250 to 64.000 (relative tuning of source to oscillator, hold SHIFT to jump by harmonics)
  - **Depth:** 0-128 (FM input level)
  - **Feedback:** 0-150% (output fed back into itself for harmonic complexity)
  - **Dry/Wet:** 0-100% (blend of unprocessed oscillator vs FM result)
- **Use cases:** Bell tones, metallic percussion, classic DX-style timbres, complex harmonic motion
- **Pro tip:** Use another Mutant as FM source for cascaded modulation effects

**2. WavStack (Unison Waveshaping)**
- **Function:** Five detuned copies of waveform stacked for thick chorus/unison effect
- **Parameters:**
  - **Depth:** 0-128 (detuning amount between copies)
  - **Dry/Wet:** 0-100% (blend of single oscillator vs stacked result)
- **Use cases:** Massive lead synth sounds, lush pads, analog-style detuned thickness
- **Pro tip:** Combine with Voice module Stereo Width parameter (page 1) for huge stereo image

**3. OSC Sync (Oscillator Synchronization)**
- **Function:** Forces waveform to reset in sync with source oscillator, creating harmonic emphasis
- **Parameters:**
  - **Source:** OSC 1, OSC 2, OSC 3 (choose which oscillator drives sync)
  - **Ratio:** 0.250 to 64.000 (number of sync cycles per waveform cycle, hold SHIFT for whole numbers)
  - **Depth:** 0-128 (strength of sync effect)
  - **Window:** 0-128 (applies Hann window to smooth high/low frequencies)
  - **Feedback:** 0-150% (sync output fed back into itself)
  - **Dry/Wet:** 0-100% (blend of raw waveform vs sync result)
- **Use cases:** Aggressive lead tones, frequency-sweeping timbres, classic hard sync sounds
- **Unique feature:** Unlike traditional 1:1 sync, Ratio parameter enables 2:1, 4:1, or fractional sync ratios

**4. PW-Orig (Original Pulse Width Modulation)**
- **Function:** Classic PWM - waveform fixed at center, edges move to compress/expand width
- **Parameters:**
  - **Ratio:** 0.250 to 64.000 (how many PWM cycles per waveform cycle)
  - **Depth:** 0-128 (harmonic range of PWM effect)
  - **Feedback:** 0-150% (PWM output fed back into itself)
  - **Dry/Wet:** 0-100% (blend of raw waveform vs PWM result)
- **Use cases:** Moving pad sounds, vintage synthesizer chorus effects, animated textures
- **Works on any waveform:** Not limited to pulse/square waves like traditional PWM

**5. PW-Sqeez (Squeeze Pulse Width Modulation)**
- **Function:** Time-warped PWM - waveform edges squeezed rightward (slow→fast within single cycle)
- **Parameters:** Identical to PW-Orig (Ratio, Depth, Feedback, Dry/Wet)
- **Use cases:** Asymmetric timbres, rhythmic pulse effects, motion without traditional modulation
- **Different character:** Creates more aggressive, unstable timbres than PW-Orig

**6. PW-ASM (ASM Warp Pulse Width Modulation)**
- **Function:** Custom FM implementation - divide waveform into 8 segments with independent Warp point control
- **Parameters:**
  - **Ratio:** 0.250 to 64.000 (PWM frequency multiplier)
  - **Depth:** 0-128 (maximum warp amount)
  - **Feedback:** 0-150% (output fed back into input)
  - **Custom Edit:** Press Control button 7 to access 8 independent Warp points (0-128 each)
  - **Dry/Wet:** 0-100% (blend of raw vs warped result)
- **Use cases:** Vocal formant-like synthesis, custom waveshaping, precise spectral control
- **Advanced technique:** Each Warp point is a Mod Matrix destination - create complex evolving timbres by modulating multiple Warp points with different LFOs

**7. Harmonic (Harmonic Emphasis)**
- **Function:** Emphasizes individual harmonics while de-emphasizing others
- **Parameters:**
  - **Ratio:** 0.250 to 64.000 (selects which harmonic to emphasize, hold SHIFT to jump by harmonics)
  - **Depth:** 0-128 (harmonic range affected)
  - **Feedback:** 0-150% (can tame effect through phase cancellation)
  - **Dry/Wet:** 0-100% (blend of raw vs emphasized harmonics)
- **Use cases:** Vowel-like timbres, spectral filtering effects, emphasis of specific overtones
- **Harmonic series education:** Use with sawtooth wave to hear individual harmonics isolated as Ratio increases

**8. PhazDiff (Phase Difference)**
- **Function:** Generates difference between incoming wave and inverted, phase-shifted copy
- **Parameters:**
  - **Depth:** 0-128 (phase shift amount)
  - **Feedback:** 0-150% (phase-shifted output fed back into itself)
  - **Dry/Wet:** 0-100% (blend of raw vs phase-shifted result)
- **Use cases:** Subtle timbral shifts, phaser-like motion, stereo enhancement when paired with panning
- **Caution:** High feedback values can create very loud outputs - start with moderate feedback and increase gradually

**Mutant Programming Strategy:**

**Cascaded Processing (Mutants in Series):**
- Mutant 1 → Mutant 2 on OSC 1 enables complex two-stage waveshaping
- Example: Mutant 1 = FM-Lin with Triangle source, Mutant 2 = PW-ASM for custom formant shaping
- Each stage has independent Dry/Wet - blend processed and raw signals throughout chain

**Cross-Modulation:**
- Any Mutant can use another Mutant as FM source (available in FM-Lin mode)
- Example: Mutant 1 processes OSC 1, then Mutant 3 uses Mutant 1 as FM source for cross-oscillator modulation
- Creates feedback-like complexity without actual feedback

**Modulation Targets:**
- Most Mutant parameters are Mod Matrix destinations
- Common routes: LFO → Ratio (for frequency sweeps), Envelope → Depth (for timed intensity)
- PW-ASM Warp points are individual destinations (8 per Mutant) - route different LFOs to different Warp points for evolving spectral changes

**Practical Tip:** Press any Mutant button to hear its current effect on the oscillator. Turn Dry/Wet to 100% to isolate the Mutant's processing, then blend to taste. This helps understand each algorithm's sonic character.

---

### Mixer Section

The Mixer module routes oscillator outputs, ring modulator, and noise generator through both filters with independent level, pan, and filter assignment control. Understanding this routing enables precise stereo imaging and filter utilization.

**Access:** Press **[MIXER]** button → Three pages of parameters

**Page 1 - Source Levels:**

Control the relative volume of each sound source:
- **Osc1 Vol:** 0.0-128.0 (OSC 1 output level)
- **Osc2 Vol:** 0.0-128.0 (OSC 2 output level)
- **Osc3 Vol:** 0.0-128.0 (OSC 3 output level)
- **Ring Vol:** 0.0-128.0 (Ring modulator level)
- **Noise Vol:** 0.0-128.0 (Noise generator level)

**Solo Function:**
- Press Control button 8 to enable Solo mode (button lights up)
- Press Control button for any source (1-5) to solo that source - its button glows brighter
- Press another source button to solo that source instead
- Press Control button 8 again to defeat Solo mode
- **Use case:** Isolate individual oscillators while programming complex patches to hear each element's contribution

**Page 2 - Oscillator Pan and Filter Routing:**

Set stereo positioning and filter assignment for OSC 1-3:
- **Osc1 Pan:** -64.0 to +64.0 (left to right stereo placement)
- **Osc2 Pan:** -64.0 to +64.0 (stereo placement)
- **Osc3 Pan:** -64.0 to +64.0 (stereo placement)
- **Osc1 Filt:** 100:0 to 0:100 (OSC 1 routing between Filter 1 and Filter 2)
- **Osc2 Filt:** 100:0 to 0:100 (OSC 2 filter routing)
- **Osc3 Filt:** 100:0 to 0:100 (OSC 3 filter routing)

**Filter Routing Behavior:**
- **100:0** = Source sent only to Filter 1
- **50:50** = Source split equally between both filters
- **0:100** = Source sent only to Filter 2
- Intermediate values create proportional blends
- **Parallel mode:** Each filter processes its assigned sources independently, outputs sum
- **Series mode:** All sources flow through Filter 1 → Filter 2 (routing still affects level balance)

**Page 3 - Ring/Noise Pan, Filter Routing, and Filter Configuration:**

Control ring modulator and noise generator routing plus global filter architecture:
- **Ring Pan:** -64.0 to +64.0 (ring modulator stereo placement)
- **Noiz Pan:** -64.0 to +64.0 (noise generator stereo placement)  
- **Ring Filt:** 100:0 to 0:100 (ring modulator filter routing)
- **Noiz Filt:** 100:0 to 0:100 (noise generator filter routing)
- **Filter Route:** Series or Parallel (global filter configuration)

**Filter Configuration Details:**

**Parallel Mode:**
- Filter 1 and Filter 2 operate independently
- Each source's filter routing (Osc1 Filt, Osc2 Filt, etc.) determines proportional split
- Example: OSC 1 at 70:30 sends 70% through Filter 1, 30% through Filter 2
- **Use cases:** Different filter characters on different oscillators, stereo separation, multi-timbral effects

**Series Mode:**
- All sources flow through Filter 1, then Filter 1 output feeds Filter 2 input
- Filter routing parameters still affect level balance entering Filter 1
- **Use cases:** Aggressive 48dB/octave filtering (24dB Filter 1 + 24dB Filter 2), vowel-like formants (Filter 1 formant + Filter 2 resonance), extreme resonance effects

**Ring-Noise Module:**

**Access:** Press **[RING-NOISE]** button for dedicated parameters

**Ring Modulator:**
- **Source 1:** OSC 1-3, Noise, Mutant 1-4, Mod In 1/2 (first input)
- **Source 2:** Same options as Source 1 (second input)
- **RM Depth:** 0-128 (ring modulation intensity)
- **Ring Vol:** 0-128 (output level, linked to Mixer page 1 Ring Vol parameter)
- **Function:** Generates sum and difference frequencies of two sources
- **Use cases:** Bell tones (OSC 1 + OSC 2), metallic percussion (OSC + Noise), clangorous textures (Mutant + OSC)

**Noise Generator:**
- **Noise Type:** White, Pink, Brown, Red, Blue, Violet, Grey (seven spectral distributions)
- **Noise Vol:** 0-128 (output level, linked to Mixer page 1 Noise Vol parameter)
- **Type characteristics:**
  - **White:** Full spectrum, hiss character
  - **Pink:** -3dB/octave rolloff, balanced across frequency range
  - **Brown/Red:** Deeper rolloff, bass-heavy rumble
  - **Blue/Violet:** High-frequency emphasis, airy texture
  - **Grey:** Psychoacoustically equalized (equal perceived loudness across spectrum)

**Mixer Programming Strategy:**

**Stereo Imaging Techniques:**
- Pan OSC 1 hard left, OSC 2 hard right, OSC 3 center for wide stereo field
- Use Voice module Stereo Width parameter (page 1) in conjunction with pan for even wider spreading
- Assign different oscillators to different filters with distinct pan positions for stereo filter effects

**Filter Routing Strategies:**
- **Split:** OSC 1 + OSC 2 → Filter 1 (aggressive ladder), OSC 3 + Noise → Filter 2 (smooth state-variable)
- **Crossfade:** Modulate filter routing via Mod Matrix (LFO → Osc1 Filt) for movement between filters
- **Series resonance:** Parallel mode with both filters set to different resonant peaks creates formant-like double peaks

**Pro Tip:** Hold SHIFT while adjusting any Mixer parameter for fine-tuned control. This is especially useful for precise filter routing percentages (51:49 vs 50:50) and subtle pan positioning.

---

### Filter Section

The Hydrasynth provides two independent multi-mode filters with complementary strengths. Filter 1 offers 16 distinct filter types including vocal formants, while Filter 2 provides a morphable state-variable design. Both filters can operate in series or parallel configuration (set in Mixer module).

**Top Panel Filter Controls:**

- **Filter 1 / Filter 2 buttons:** Select which filter the top-panel knobs control
- **Cutoff knob:** Adjusts filter frequency (shared between both filters when selected)
- **Resonance knob:** Adjusts filter resonance/Q (shared between both filters)
- **Drive / Morph knob:** Filter 1 = Drive amount, Filter 2 = Morphing between LP/BP or Notch/HP

**Filter 1 - Multi-Type Filter (16 Models):**

**Access:** Press **[FILTER 1]** button → Two pages of parameters

**Page 1 Parameters:**
- **Type:** (See 16 filter types below)
- **Control:** 0.0-128.0 (Vowel filter formant control, hidden for other filter types)
- **Cutoff:** 0.0-128.0 (Filter frequency)
- **Resonance:** 0.0-128.0 (Filter resonance/Q)
- **ENV 1 amt:** -64.0 to +64.0 (Envelope 1 modulation amount and polarity)
- **LFO 1 amt:** -64.0 to +64.0 (LFO 1 modulation amount and polarity)
- **Vel Env:** -64.0 to +64.0 (Velocity control of envelope depth - operates within ENV 1 amt range)
- **Keytrack:** -200% to +200% (Keyboard tracking with C2 as center note)

**Page 2 Parameters:**
- **Filter Route:** Series or Parallel (Filter 1 → Filter 2 series, or both filters independent)
- **Drive:** 0.0-128.0 (Overdrive/distortion amount)
- **Drive Route:** Pre or Post (drive before filter input or after filter output)
- **Vow Order:** 8 vowel arrangements (Vowel filter only: AEIOU, UOIEA, etc.)

**16 Filter Types:**

**Ladder Filters (Moog-style):**
- **LP Ldr12:** 12dB/octave uncompensated ladder (bass reduces with resonance increase)
- **LP Ldr24:** 24dB/octave uncompensated ladder
- **LP Fat12:** 12dB/octave compensated ladder (bass maintained at high resonance)
- **LP Fat24:** 24dB/octave compensated ladder

**MS-20 Style Filters:**
- **LP MS20:** Low-pass with MS-20 character (gritty, aggressive)
- **HP MS20:** High-pass with MS-20 character

**3-Pole Cascade Filters:**
- **LP 3-Ler:** Low-pass 18dB/octave boutique modular character
- **BP 3-Ler:** Band-pass boutique modular character
- **HP 3-Ler:** High-pass boutique modular character

**State Variable Style (Steiner-inspired):**
- **LP Stn12:** 12dB/octave low-pass
- **BP Stn12:** 12dB/octave band-pass with dual 6dB slopes
- **HP Stn12:** 12dB/octave high-pass

**Extreme Slope Filters:**
- **LP 1 Pole:** Gentle 6dB/octave low-pass
- **LP 8 Pole:** Steep 48dB/octave low-pass (brick wall characteristic)

**Low Pass Gate:**
- **LP Gate:** Simultaneously controls amplitude and frequency (vactrol-style behavior)

**Vocal Formant Filter:**
- **Vowel:** Vocal formant filter with Control parameter for formant positioning and spread
- **Vow Order parameter (page 2):** Eight vowel orderings from AEIOU to UIEAO
- **Use case:** Talking synthesizer effects, vocal-like pad sweeps, formant emphasis

**Filter 1 Programming Techniques:**

**Envelope and LFO Control:**
- **ENV 1 amt** sets envelope depth - positive values open filter from cutoff point, negative values close filter
- **Vel Env** scales ENV 1 amt by velocity - at +64, soft notes have minimal envelope, hard notes have full ENV 1 amt
- **LFO 1 amt** adds cyclic modulation - combines with envelope for complex movement
- **Pro tip:** Set LFO 1 amt to negative value for inverted LFO phase (closes filter when LFO is high)

**Keytracking Applications:**
- **100% keytracking:** Filter frequency tracks keyboard 1:1 (standard for "open" timbres)
- **0% keytracking:** Filter frequency fixed regardless of note (useful for bass patches with consistent filter sweep)
- **200% keytracking:** Filter opens two octaves for every keyboard octave (extreme brightness on high notes)
- **Negative keytracking:** Higher notes close filter (unusual timbral inversions)

**Drive Placement Strategy:**
- **Pre-filter drive:** Overdrives oscillators before filtering - creates harmonic distortion that filter can shape
- **Post-filter drive:** Overdrives filter output - emphasizes filter resonance, can create aggressive screaming tones
- **Moderate drive (0-64):** Adds warmth and analog-style saturation
- **Extreme drive (65-128):** Creates clipping, fuzz, aggressive distortion

**Vowel Filter Techniques:**
- Use **Control** parameter to sweep through formant positions (automates vowel movement)
- Combine with **Vow Order** selection to find different vowel progressions
- Route LFO to Control parameter via Mod Matrix for talking filter effects
- Layer with Filter 2 for vowel + resonance emphasis

---

**Filter 2 - State Variable Morphing Filter:**

**Access:** Press **[FILTER 2]** button → Single page of parameters

**Page 1 Parameters:**
- **Type:** LP-BP-HP or LP-NO-HP (two morphing types)
- **Morph:** 0.0-128.0 (morphs between LP/BP/HP or LP/Notch/HP - 0=LP, 64=BP or Notch, 128=HP)
- **Cutoff:** 0.0-128.0 (filter frequency)
- **Resonance:** 0.0-128.0 (filter resonance/Q)
- **ENV 1 amt:** -64.0 to +64.0 (Envelope 1 modulation amount and polarity)
- **LFO 1 amt:** -64.0 to +64.0 (LFO 1 modulation amount and polarity)
- **Vel Env:** -64.0 to +64.0 (Velocity control of envelope depth)
- **Keytrack:** -200% to +200% (Keyboard tracking with C2 as center note)

**Two Filter Types:**

**LP-BP-HP:**
- **Morph 0:** Pure low-pass (12dB/octave)
- **Morph 64:** Pure band-pass (emphasizes middle frequencies, bandwidth set by Resonance)
- **Morph 128:** Pure high-pass (12dB/octave)
- **Intermediate values:** Smooth transitions create complex filter curves
- **Use cases:** Swept transitions from dark to bright, vocal-like formant shifts, resonant sweeps

**LP-NO-HP:**
- **Morph 0:** Pure low-pass (12dB/octave)
- **Morph 64:** Pure notch filter (cuts middle frequencies, bandwidth set by Resonance)
- **Morph 128:** Pure high-pass (12dB/octave)
- **Intermediate values:** Smooth transitions through notch character
- **Use cases:** Phaser-like sweeps, hollow timbres, frequency cancellation effects

**Filter 2 Morph Modulation:**

The Morph parameter is a powerful modulation destination:
- **Route LFO → Morph** via Mod Matrix for automatic sweeps through filter types
- **Route Aftertouch → Morph** for performance-based filter character changes
- **Route Envelope → Morph** for timed transitions (LP attack → BP sustain → HP release)

**Example:** Pad patch with LFO slowly modulating Morph from LP to Notch creates evolving hollow character

**Filter 2 + Filter 1 Combination Strategies:**

**Series Configuration (Filter 1 → Filter 2):**
- **Steep slopes:** LP Ldr24 (Filter 1) → LP-BP-HP (Filter 2 at Morph 0) = 36dB/octave low-pass
- **Formant + resonance:** Vowel (Filter 1) → LP-BP-HP (Filter 2 at Morph 64) = vocal formant with bandpass emphasis
- **Extreme filtering:** LP 8 Pole (Filter 1) → LP-BP-HP (Filter 2 at Morph 0) = 60dB/octave low-pass brick wall

**Parallel Configuration (Filters Independent):**
- **Split spectrum:** Assign OSC 1 to Filter 1 LP MS20, OSC 2 to Filter 2 HP at Morph 128 = lo-fi/aggressive low end + bright high end
- **Stereo filtering:** Pan Filter 1 sources left, Filter 2 sources right with different cutoff frequencies = stereo filter motion
- **Dual resonance:** Both filters with high resonance at different frequencies = two resonant peaks for formant-like timbres

**Common Filter Programming Patterns:**

**Classic Low-Pass Sweep:**
1. Filter 1: LP Fat24 type
2. Cutoff: 40, Resonance: 80
3. ENV 1 amt: +50, Vel Env: +40
4. Drive: 30, Drive Route: Pre
5. Result: Velocity-sensitive filter opens on note attack, warm saturation from pre-filter drive

**Aggressive Lead:**
1. Filter 1: LP MS20
2. Filter 2: LP-BP-HP type, Morph: 50
3. Filter Route: Series
4. Filter 1 Resonance: 100, Filter 2 Resonance: 90
5. LFO 1 amt (Filter 1): +30, LFO 1 amt (Filter 2): -25
6. Result: Filters modulate in opposite directions, double resonance peak, aggressive MS-20 character

**Evolving Pad:**
1. Filter 1: Vowel type, Control: 30, Vow Order: AEIOU
2. Filter 2: LP-NO-HP type, Morph: 50
3. Filter Route: Parallel
4. Via Mod Matrix: LFO 3 → Filter 1 Control (depth +60), LFO 4 → Filter 2 Morph (depth +50)
5. LFO 3 rate: 0.15 Hz, LFO 4 rate: 0.22 Hz
6. Result: Vowel formants sweep independently from notch filter movement, complex evolving texture

---

## Modulation System

### Modulation Architecture Overview

The Hydrasynth's modulation system provides unprecedented depth for a hardware synthesizer - 32 independent modulation routes, 5 fully-featured DAHDSR envelopes, 5 multi-waveform LFOs with step sequencing, plus 8 programmable Macros that can each control up to 8 destinations simultaneously. This architecture enables everything from simple filter sweeps to complex evolving soundscapes that would require extensive modular patching on other systems.

**Pre-Wired Connections vs. Mod Matrix Routing:**

The Hydrasynth provides convenience through pre-wired modulation connections while maintaining flexibility through the Mod Matrix:

**Pre-Wired Connections (No Mod Matrix slots used):**
- **ENV 1 → Filters:** Dedicated ENV1amt parameter on both Filter 1 and Filter 2
- **ENV 2 → Amplifier:** Hardwired to VCA, depth controlled by AmpLevel parameter
- **LFO 1 → Filters:** Dedicated LFO1amt parameter on both Filter 1 and Filter 2  
- **LFO 2 → Amplifier:** Dedicated LFO2Amt parameter in Amp module

**Mod Matrix Routing (Uses mod slots):**
- **All other modulation:** ENV 3-5, LFO 3-5, performance controls, CV inputs, MIDI sources
- **Additional ENV 1/2 destinations:** Beyond their pre-wired connections
- **Additional LFO 1/2 destinations:** Beyond their pre-wired connections

**Modulation System Diagram:**
```
🔵 Modulation Architecture

┌─MODULATION SOURCES (35 Total)──────────────────────────────┐
│                                                             │
│  ┌─ENVELOPES──────┐    ┌─LFOs───────────┐                 │
│  │ ENV 1 [Filter] │    │ LFO 1 [Filter] │                 │
│  │ ENV 2 [Amp]    │    │ LFO 2 [Amp]    │  Pre-wired ──┐ │
│  │ ENV 3          │    │ LFO 3          │  connections  │ │
│  │ ENV 4          │    │ LFO 4          │               │ │
│  │ ENV 5          │    │ LFO 5          │               │ │
│  └────────────────┘    └────────────────┘               │ │
│                                                          │ │
│  ┌─PERFORMANCE────┐    ┌─CV/MIDI────────┐              │ │
│  │ Mod Wheel      │    │ Mod In 1       │              │ │
│  │ Pitch Wheel    │    │ Mod In 2       │              │ │
│  │ Ribbon (3 modes)    │ Expression     │              │ │
│  │ Aftertouch (2) │    │ Sustain Pedal  │              │ │
│  │ Velocity (2)   │    │ MIDI CC 0-127  │              │ │
│  │ Keytrack       │    │ MPE (3 modes)  │              │ │
│  └────────────────┘    └────────────────┘               │ │
│                                                          │ │
└──────────────────────────────────────────────────────────┼─┘
                                                           │
                    ┌──────────────────────────────────────┘
                    │
                    ▼
         ┌─MOD MATRIX (32 Slots)───┐
         │ Source → Destination    │
         │ Depth: -128 to +128     │
         └─────────────────────────┘
                    │
         ┌──────────┼──────────┐
         │          │          │
         ▼          ▼          ▼
    ┌─MACROS─┐  Filter   Oscillator
    │ Macro1 │  Cutoff   Pitch/Wave
    │ Macro2 │  Morph    Mutant Depth
    │ ...    │  Drive    Pan/Level
    │ Macro8 │  ENV amt  FX params
    │ (8 dst │  LFO amt  + 191 more
    │  each) │           destinations
    └────────┘
         │
         └─→ Up to 8 parameters per Macro

🔵 = Modulation signals
```

**Key Modulation Concepts:**

**Modulation Depth and Polarity:**
- **Positive depth (+1 to +128):** Modulation increases parameter value
- **Negative depth (-1 to -128):** Modulation decreases parameter value or inverts waveform phase
- **Zero depth (0):** No modulation applied
- **Example:** LFO → Filter Cutoff at depth +64 opens filter when LFO is high; at depth -64 closes filter when LFO is high

**Modulation Stacking:**
- Multiple sources can modulate the same destination simultaneously
- Results are additive within parameter range limits
- **Example:** ENV1amt = +50 on Filter 1 + LFO 1 routed via Mod Matrix (depth +30) = combined envelope + LFO modulation

---

### Envelope Section

All five envelopes in the Hydrasynth are identical in capabilities - each is a full DAHDSR (Delay, Attack, Hold, Decay, Sustain, Release) envelope with looping, multiple trigger sources, adjustable curves, and BPM sync. This uniformity means once you understand one envelope, you understand them all.

**Access:** Press **[ENV 1]** through **[ENV 5]** buttons → Three pages of parameters per envelope

**Envelope Architecture:**

```
Envelope Stages:

    Delay      Attack     Hold       Decay              Release
     (D)        (A)        (H)        (D)                (R)
      │          │          │          │                  │
      │          │          │          │                  │
0 ────┴──────────┘          └──────────┐                 │
                                        │    Sustain (S)  │
                                        ├────────────────┐│
                                        │                ││
                                        └────────────────┘└──→ 0

← Time spent at zero → ← Rising → ← Peak → ← Falling → ← Held → ← Falling →

Note: Sustain is a LEVEL (0-128), not a time duration
      All other stages are TIME values (0ms to 60 seconds or synced divisions)
```

**Pre-Wired Envelope Connections:**
- **ENV 1:** Hardwired to both Filter 1 and Filter 2 (depth controlled by ENV1amt parameter on each filter)
- **ENV 2:** Hardwired to Amplifier (depth controlled by AmpLevel parameter)
- **ENV 3-5:** Available only through Mod Matrix routing

**Common Envelope Applications:**
- **ENV 1 → Filters:** Classic filter sweep (increase Attack for slow bloom, decrease for plucky attack)
- **ENV 2 → Amplifier:** Controls note volume shape (short Attack/Release = percussive, long = pad-like)
- **ENV 3 → OSC pitch:** Pitch drop effect (set negative depth, adjust Decay time for speed)
- **ENV 4 → Mutant Depth:** Timed waveshaping intensity (increases complexity during Attack, fades during Release)
- **ENV 5 → LFO Rate:** Accelerating/decelerating modulation (LFO speeds up or slows down over time)

---

**Envelope Parameters: Page 1**

**Access:** Press any **[ENV 1-5]** button, page 1 appears automatically

- **Attack:** 0ms to 36.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time from zero to peak after Delay+Hold stages complete
  - Hold SHIFT + turn knob for coarse adjustment
  - Hold SHIFT + press Control button to set duration by holding time
  
- **Decay:** 0ms to 60.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time from peak to Sustain level
  - Longer Decay = gradual transition to sustain, shorter = abrupt
  
- **Sustain:** 0.0 to 128.0 (LEVEL, not time)
  - Resting level held after Decay stage until note release
  - 0 = envelope falls to zero after Decay, 128 = envelope stays at peak
  - **Critical understanding:** Sustain is the HEIGHT the envelope maintains, not how long it stays there
  
- **Release:** 0ms to 60.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time from current level to zero after note release
  - Longer Release = gradual fade, shorter = abrupt cutoff
  
- **Delay:** 0ms to 32.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time spent at zero before Attack stage begins
  - Useful for staggered modulation (ENV 3 starts immediately, ENV 4 delayed by 2 seconds)
  
- **Hold:** 0ms to 36.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)  
  - Time spent at peak after Attack before Decay begins
  - Creates plateau at top of envelope
  
- **BPM Sync:** Off or On
  - Off = envelope stages measured in seconds/milliseconds
  - On = envelope stages quantized to tempo divisions (1/64T to 64 bars)
  - When On, all time-based stages (D-A-H-D-R) use musical subdivisions

**Envelope Timing Examples:**

**Percussive Pluck:**
- Attack: 5ms, Decay: 300ms, Sustain: 0, Release: 50ms
- Result: Fast attack, quick decay to silence, brief tail on release

**Pad Swell:**  
- Attack: 2.5s, Decay: 1.5s, Sustain: 80, Release: 3.0s
- Result: Slow bloom, gradual settle to sustain level, long fade on release

**Rhythmic Sync:**
- BPM: On, Attack: 1/16, Decay: 1/8, Sustain: 64, Release: 1/4
- Result: Envelope phases lock to tempo, creates rhythmic modulation in sync with track

---

**Envelope Parameters: Page 2**

**Access:** Press **[ENV X]** button, then Page Down arrow

- **AtkCurve:** -64 (Logarithmic) through 0 (Linear) to +64 (Exponential)
  - Logarithmic (negative values): Slow start, accelerates upward
  - Linear (0): Constant rate of change
  - Exponential (positive values): Fast start, decelerates as it approaches peak
  - **Example:** Exponential Attack (-40) creates "punchy" filter openings
  
- **DecCurve:** -64 (Logarithmic) through 0 (Linear) to +64 (Exponential)
  - Same curve behavior as Attack but applied to Decay stage
  - Affects transition from peak to Sustain level
  
- **RelCurve:** -64 (Logarithmic) through 0 (Linear) to +64 (Exponential)
  - Same curve behavior applied to Release stage  
  - Affects fade to zero after note release
  
- **Legato:** Off or On
  - Off = envelope retriggers with every new note
  - On = envelope only retriggers if all previous notes have been released
  - **Use case:** Legato On enables smooth monophonic playing (bass lines, lead solos)
  
- **Reset:** Off or On (only available when Legato = Off)
  - Off = when polyphony exceeded, 9th note continues from envelope's current position
  - On = when polyphony exceeded, 9th note resets envelope from beginning
  - **Example:** Reset On ensures every note gets full Attack stage even when playing fast
  
- **Freerun:** Off or On
  - Off = envelope responds normally to note on/off
  - On = envelope always runs through all stages regardless of note length
  - **Use case:** Freerun On with short notes creates consistent modulation regardless of playing style
  
- **Env Loop:** Off, 2-50, or Infinite
  - Off = envelope runs once per note
  - 2-50 = envelope loops specified number of times (loops Attack-Hold-Decay stages)
  - Infinite = envelope loops continuously, functions like complex LFO
  - **Example:** Infinite loop with fast Attack/Decay creates rhythmic tremolo effect

**Envelope Shape Examples:**

**Natural Decay (Logarithmic Decay -40):**
- Mimics acoustic instrument behavior
- Fast initial decay, gradually slows as it approaches Sustain
- Use for realistic plucked/struck sounds

**Synthesized Sweep (Linear curves all at 0):**
- Mechanical, predictable movement
- Constant rate of change throughout all stages
- Use for precise, controlled modulation

**Punchy Attack (Exponential Attack +50):**
- Immediate impact, slows as it reaches peak
- Creates "forward" sound character
- Use for aggressive leads, punchy bass

---

**Envelope Parameters: Page 3**

**Access:** Press **[ENV X]** button, then Page Down arrow twice

Page 3 controls envelope triggering - each envelope can have up to 4 independent trigger sources active simultaneously.

- **TrigSrc1:** Note On (default), LFO 1-5, Rbn On, Rbn Release, SusPed On, Mod In 1, Mod In 2, or OFF
  - Primary trigger source for envelope
  - **Note:** ENV 2's TrigSrc1 is locked to Note On (cannot be changed) to ensure amplitude envelope functions
  
- **TrigSrc2:** Same options as TrigSrc1
  - Secondary trigger source
  - Both sources can trigger envelope independently
  
- **TrigSrc3:** Same options as TrigSrc1
  - Third trigger source
  
- **TrigSrc4:** Same options as TrigSrc1  
  - Fourth trigger source
  
- **Tap Trigger:** (Control button 5)
  - Manual trigger button - press to fire envelope once
  - Envelope does not sustain while button is held
  - Useful for testing envelope shapes during programming

**Multiple Trigger Source Behavior:**
- When multiple sources are active, envelope triggers when ANY source fires
- Each trigger restarts envelope from beginning (unless Legato mode prevents it)
- **Example:** TrigSrc1 = Note On, TrigSrc2 = LFO 3 → Envelope triggers on both keyboard notes AND LFO cycles

**Advanced Triggering Applications:**

**LFO-Triggered Modulation:**
- ENV 3: TrigSrc1 = LFO 4, route ENV 3 → Mutant 2 Depth
- Result: Waveshaping intensity pulses rhythmically in sync with LFO 4 rate
- **Use case:** Create movement without continuous LFO modulation

**Ribbon-Triggered Effects:**  
- ENV 4: TrigSrc1 = Rbn On (fires when ribbon touched), route ENV 4 → Reverb Mix
- Result: Reverb swells in when ribbon is touched, fades out based on Release time
- **Use case:** Performance-based effect intensity control

**Sustain Pedal Envelopes:**
- ENV 5: TrigSrc1 = SusPed On, route ENV 5 → Filter 1 Cutoff (negative depth)
- Result: Filter closes when sustain pedal pressed, returns when released
- **Use case:** Pedal-controlled timbral changes

**CV-Triggered Envelopes:**
- ENV 3: TrigSrc1 = Mod In 1, route ENV 3 → OSC 1 Semi
- Result: External gate signals trigger pitch transposition envelopes
- **Use case:** Eurorack integration, melodic sequences from external sequencer

---

### LFO Section  

The Hydrasynth provides five identical LFOs, each with 11 waveforms including a 64-step programmable Step LFO. Like the envelopes, LFOs 1 and 2 have pre-wired connections to filters and amplifier, while LFOs 3-5 are available exclusively through the Mod Matrix.

**Access:** Press **[LFO 1]** through **[LFO 5]** buttons → Two pages of parameters per LFO

**Pre-Wired LFO Connections:**
- **LFO 1 → Filters:** Dedicated LFO1amt parameter on both Filter 1 and Filter 2
- **LFO 2 → Amplifier:** Dedicated LFO2Amt parameter in Amp module  
- **LFO 3-5:** Available only through Mod Matrix routing

**Common LFO Applications:**
- **LFO 1 → Filter Cutoff:** Classic filter wobble (adjust Rate for speed, LFO1amt for intensity)
- **LFO 2 → Amplifier:** Tremolo effect (slower rates = pulsing, faster rates = ring mod territory)
- **LFO 3 → WaveScan position:** Morphing wavetable timbres (slow Rate for evolving pads)
- **LFO 4 → Pan:** Auto-panning effect (stereo movement, rate sets speed)
- **LFO 5 → Mutant Ratio:** Sweeping harmonic content (creates moving filter-like effects)

**Available Waveforms (11 Total):**
- **Sine:** Smooth, musical modulation
- **Triangle:** Linear rise and fall
- **Saw Up:** Rising ramp
- **Saw Down:** Falling ramp  
- **Square:** On/off switching (50% duty cycle)
- **Pulse 27%:** Narrow pulse (27% high, 73% low)
- **Pulse 13%:** Very narrow pulse (13% high, 87% low)
- **S&H (Sample & Hold):** Stepped random values, changes at Rate frequency
- **Noise:** Continuous random modulation (smooth random, not stepped)
- **Random:** Similar to S&H but with smoothing between steps
- **Step:** User-programmable 64-step sequencer (see Step LFO section below)

---

**LFO Parameters: Page 1**

**Access:** Press any **[LFO 1-5]** button, page 1 appears automatically

- **Wave:** Sine, Triangle, Saw Up, Saw Down, Square, Pulse27%, Pulse13%, S&H, Noise, Random, Step
  - Selects LFO waveform character
  - Step waveform reveals additional programming parameters on page 2
  
- **Rate:** 0.02 to 150.0 Hz (BPM Off) or 64' bars to 1/64T (BPM On)
  - LFO speed - higher values = faster modulation
  - Hold SHIFT + press Control button 2 to set Rate by holding duration
  - At audio rates (>20 Hz), LFO can function as additional oscillator or ring mod source
  
- **BPM Sync:** Off or On
  - Off = LFO rate measured in Hertz (cycles per second)
  - On = LFO rate quantized to tempo divisions (64 bars down to 1/64T)
  - **Use case:** BPM On locks modulation to track tempo for rhythmic movement
  
- **TrigSync:** Poly, Single, or Off
  - **Poly:** Each note has independent LFO starting from phase 0° (lush pads, independent voice movement)
  - **Single:** All voices share one LFO, each new note retriggers LFO from phase 0° (monophonic leads, synchronized movement)
  - **Off:** LFO runs freely, notes trigger at random points in LFO cycle (evolving, unpredictable modulation)
  
- **Delay:** 0ms to 32.0 seconds (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time before LFO modulation begins after note trigger
  - **Example:** Delay vibrato on sustained notes (immediate attack, vibrato fades in after 1 second)
  
- **Fade In:** 0ms to 5943ms (BPM Off) or 1/64T to 64' bars (BPM On)
  - Time for LFO to ramp from zero amplitude to full amplitude
  - Works after Delay period completes
  - **Example:** Gradual vibrato intensity increase
  
- **Phase:** 0° to 360°
  - Starting position in LFO waveform cycle
  - 0° = waveform starts at zero crossing going positive
  - 90° = waveform starts at positive peak  
  - 180° = waveform starts at zero crossing going negative
  - 270° = waveform starts at negative peak
  - **Use case:** Phase-offset multiple LFOs for complex stereo movement
  
- **Level:** 0.0 to 128.0
  - Maximum amplitude of LFO
  - Scales all mod routes using this LFO as source
  - **Use case:** Master intensity control for LFO affecting multiple destinations

**LFO Timing and Sync Examples:**

**Slow Pad Movement (Unsync'd):**
- Rate: 0.12 Hz, TrigSync: Poly, Delay: 0, Fade In: 2000ms
- Result: Each voice has independent slow modulation, gradual onset

**Rhythmic Filter Pump (Sync'd):**
- BPM: On, Rate: 1/8, TrigSync: Single, Phase: 0°
- Result: Filter modulation locked to eighth notes, retriggered with each note

**Stereo Auto-Pan:**  
- LFO 3: Rate: 0.5 Hz, Phase: 0°, route to Pan (depth +64)
- LFO 4: Rate: 0.5 Hz, Phase: 180°, route to different oscillator Pan (depth +64)  
- Result: Two oscillators pan in opposite directions, creating stereo width

---

**LFO Parameters: Page 2**

**Access:** Press **[LFO X]** button, then Page Down arrow

- **Steps:** 2-64 (only visible when Wave = Step)
  - Number of steps in Step LFO sequence
  - Each step can have independent pitch/modulation value
  - Longer step counts = longer sequences before looping
  
- **Smooth:** 0-127 (only visible when Wave = Step)
  - Slew/portamento between step values  
  - 0 = abrupt jumps between steps
  - 127 = smooth glides, steps blend together
  - **Use case:** Smooth creates flowing melodic lines from step sequence
  
- **One-Shot:** Off or On
  - Off = LFO loops continuously
  - On = LFO completes one cycle then stops
  - **Use case:** One-Shot On for single envelope-like modulation sweep
  
- **SemiLock:** Off or On (only visible when Wave = Step)
  - Off = step values range 0-128 (continuous modulation values)
  - On = step values quantized to semitones (chromatic pitch values)
  - **Use case:** SemiLock On for melodic Step LFO sequences
  
- **Step Edit:** (Control button 8, only visible when Wave = Step)
  - Accesses Step LFO programming page
  - Program up to 64 individual step values
  - See Step LFO Programming section below

---

**Step LFO Programming**

The Step LFO transforms any LFO into a 64-step sequencer capable of melodic patterns, rhythmic modulation, or complex parameter automation.

**Access:** Press **[LFO X]** → Set Wave = Step → Page Down → Press Control button 8 (Step Edit)

**Step Edit Page:**
- 8 steps visible at once (Steps 1-8 on first page)
- Use Page Up/Down arrows to access steps 9-16, 17-24, etc.
- Each step has independent value: -12semi to +12semi (SemiLock On) or 0.0 to 128.0 (SemiLock Off)

**Programming Methods:**

**Method 1 - Control Knobs:**
- Turn Control knob (1-8) to set value for that step
- Hold SHIFT + turn knob for fine adjustment

**Method 2 - Keyboard Entry (SemiLock On only):**
- Hold Control button for desired step
- Play key within 2-octave range around middle C
- Step value set to that semitone offset
- **Desktop model:** Use pads (Pad Key determines reference pitch)

**Method 3 - Initialize/Reset:**
- Hold INIT + press Control button to reset that step to 0

**Step LFO Shortcuts:**

**Quick Sequential Fill:**
- Hold SHIFT + turn Control knob 3
- Steps 3-8 populate with sequential waveforms
- Continues pattern if repeated on next page

**Copy Step Pattern:**
- Hold SAVE + press source step Control button
- Press destination step Control button  
- Pattern copies to new location

**Step LFO Application Examples:**

**Melodic Bass Sequence:**
1. LFO 3: Wave = Step, Steps = 16, SemiLock = On
2. BPM Sync = On, Rate = 1/16 (sixteenth note steps)
3. Program 16-step bass line using keyboard entry
4. Route LFO 3 → OSC 1 Pitch (depth +128 for full semitone range)
5. Route LFO 3 → OSC 2 Pitch (depth +128) for unison thickness
6. Result: 16-step bass sequence loops, both oscillators play melody

**Rhythmic Filter Sequence:**
1. LFO 4: Wave = Step, Steps = 8, SemiLock = Off
2. BPM Sync = On, Rate = 1/8, Smooth = 40
3. Program values: 20, 80, 40, 100, 30, 90, 50, 110
4. Route LFO 4 → Filter 1 Cutoff (depth +64)
5. Result: Rhythmic filter movement in sync with tempo, smooth transitions

**Complex Modulation Sequence:**
1. LFO 5: Wave = Step, Steps = 32, SemiLock = Off  
2. BPM Sync = Off, Rate = 0.08 Hz (slow, ~12 seconds per cycle)
3. Program 32 steps with varying values creating contour
4. Route LFO 5 → Mutant 1 Ratio (depth +64)
5. Route LFO 5 → Mutant 2 Dry/Wet (depth +32)
6. Result: Long-form evolving timbral changes, no obvious repetition

**Step LFO Range and Routing:**

**Chromatic Pitch Control (SemiLock On):**
- Step values: -12semi to +12semi (2-octave range)
- For full semitone pitch control:
  - Set LFO Level = 128
  - Mod Matrix depth = +128 to destination OSC pitch
- Result: Step values directly correspond to chromatic pitches

**Parameter Modulation (SemiLock Off):**  
- Step values: 0.0 to 128.0 (full parameter range)
- Mod Matrix depth determines modulation intensity
- **Example:** Step pattern 0-32-64-96-128-96-64-32 creates rising/falling contour

---

### Mod Matrix Section

The 32-slot Mod Matrix is where the Hydrasynth's modulation system reaches its full potential. With 35 sources and 191 destinations available, the matrix enables everything from simple vibrato to complex, evolving timbral transformations that would require extensive cable patching on modular systems.

**Access:** Press **[MOD MATRIX]** button → 32 slots across multiple pages

**Mod Matrix Architecture:**
- **32 independent slots:** Each slot = one modulation route (Source → Destination)
- **35 modulation sources:** Envelopes, LFOs, performance controls, CV inputs, MIDI
- **191 modulation destinations:** Nearly every parameter in the synthesizer
- **Depth range:** -128 to +128 per slot (bipolar modulation with intensity control)

**Modulation Sources (35 Total):**

**Envelopes (5):**
- ENV 1, ENV 2, ENV 3, ENV 4, ENV 5
- All envelopes available even though ENV 1-2 have pre-wired connections

**LFOs (10 - includes unipolar variants):**
- LFO 1, LFO 2, LFO 3, LFO 4, LFO 5 (bipolar: -1 to +1)
- LFO 1+, LFO 2+, LFO 3+, LFO 4+, LFO 5+ (unipolar: 0 to +1)
- **Unipolar LFOs:** Useful for destinations that shouldn't go negative (volume, mix levels)

**Aftertouch (2):**  
- MonoAftT (Channel Aftertouch): Single pressure value for all held notes
- PolyAftT (Polyphonic Aftertouch): Independent pressure per key

**Performance Controls (5):**
- Keytrack (keyboard position as modulation, C4 = center)
- Velo On (Note On velocity)
- Velo Off (Note Off velocity - not generated by Hydrasynth keys but recognized from MIDI)
- PitchWhl (Pitch wheel position)
- ModWhl (Modulation wheel position)

**Ribbon Controller (3):**
- RbnAbs (Ribbon Absolute bipolar: center = 0, left = negative, right = positive)  
- RbnAbs+ (Ribbon Absolute unipolar: left = 0, right = maximum)
- RbnRel (Ribbon Relative: touch point = 0, movement from touch = modulation)

**Pedals (2):**
- ExpPedal (Expression pedal position)
- SusPedal (Sustain pedal on/off)

**CV Inputs (2):**
- Mod In 1 (CV input 1, voltage range configurable in System Setup)
- Mod In 2 (CV input 2, voltage range configurable in System Setup)

**MPE (3):**
- MPE-X (MPE pitch bend per note)
- MPE-Yabs (MPE CC#74 absolute mode)
- MPE-Yrel (MPE CC#74 relative mode)

**MIDI:**  
- CC [000-127] (Any MIDI Continuous Controller number)

**Modulation Destinations (191 Total - Key Categories):**

**Arpeggiator:** Mode, Division, Swing, Gate, Octave, OctMode, Length, Phrase, Ratchet, Chance

**Oscillators:**
- OSC 1-2: Pitch (±12 semitones), Wave (waveform selection), WaveScan (morph position)
- OSC 3: Pitch (±12 semitones), Wave (waveform selection)  
- All Osc: Pitch (modulates all three oscillators simultaneously)

**Mutators (1-4):**
- Ratio, Depth, Window, Feedback, Dry/Wet, Warp [1-8] (8 warp points per Mutant for PW-ASM mode)

**Ring Modulator:**
- Depth (ring modulation intensity)

**Mixer:**
- Osc1Vol, Osc2Vol, Osc3Vol, RingVol, NoiseVol (source levels)
- Osc1Pan, Osc2Pan, Osc3Pan, RingPan, NoisePan (stereo positioning)
- Osc1F1/2, Osc2F1/2, Osc3F1/2, RingF1/2, NoisF1/2 (filter routing ratios)

**Filters:**
- Filter 1: Cutoff, Resonance, Drive, Control (Vowel formant control), ENV1amt, LFO1amt, Keytrack
- Filter 2: Morph, Cutoff, Resonance, ENV1amt, LFO1amt, Keytrack

**Amplifier:**
- LFO2Amt (tremolo intensity), Level (pre-FX gain)

**Effects:**
- Pre-FX: Param1, Param2, Dry/Wet
- Delay: Time, Feedback, Wet Tone, FeedTone, Dry/Wet
- Reverb: Time, Tone, HiDamp, LoDamp, Dry/Wet  
- Post-FX: Param1, Param2, Dry/Wet

**Envelopes (1-5):**
- Attack, Hold, Decay, Sustain, Release (create meta-modulation - envelopes modulating envelopes)

**LFOs (1-5):**
- Rate, Level (LFOs modulating LFO speed or intensity)

**Mod Matrix:**
- Depth [1-32] (modulate the depth of any mod route - meta-modulation)

**Macros:**  
- Macro 1 through Macro 8 (modulate macro positions)

**Voice:**
- Detune, AnalogFL (analog feel amount), PitchBnd (bend range), Vib Amt (vibrato depth), Vib Rate (vibrato speed), GlidTime (glide time)

**CV Outputs:**
- ModOut 1, ModOut 2 (send modulation to Eurorack via CV jacks)

**MIDI:**
- CC [000-127] (send modulation as MIDI CC data)

---

**Creating Mod Routes - Three Methods:**

**Method 1 - Full Matrix Navigation:**
1. Press **[MOD MATRIX]**
2. Press Control button for empty slot (top or bottom row)
3. Turn upper Control knob to select Source (or press module button shortcut)
4. Press bottom Control button to move to Destination field  
5. Turn upper Control knob to select Destination module (or press module button shortcut)
6. Press bottom Control button to move to Parameter field
7. Turn upper Control knob to select specific parameter within module
8. Turn lower Control knob to set Depth (-128 to +128)
9. Route is active immediately

**Method 2 - Direct Parameter Assignment (Fastest):**
1. Access module with parameter you want to modulate (e.g., press **[FILTER 1]**)
2. Hold source module button (e.g., hold **[LFO 3]**)
3. Press Control button next to target parameter (e.g., Resonance)
4. Mod Matrix opens with route pre-configured: LFO 3 → Filter 1 Resonance
5. Turn lower Control knob to set Depth
6. Route is active immediately

**Method 3 - Module-to-Module Quick Route:**
1. From Home page (or any page), hold source module button
2. Press destination module button
3. Mod Matrix opens with first parameter of destination selected
4. Turn upper Control knob to select different parameter if needed (or turn top-panel knob)
5. Turn lower Control knob to set Depth
6. Route is active immediately

**Mod Matrix Shortcuts:**

**Copy Route to Another Slot:**
- Hold source route Control button (top or bottom)
- Press destination route Control button
- All settings copied (Source, Destination, Depth)
- Useful for similar routes with minor variations

**Clear Single Route:**
- Hold INIT + press route Control button
- Route cleared instantly

**Clear Entire Mod Matrix:**  
- Hold INIT + press **[MOD MATRIX]** button
- Confirmation prompt appears
- Press INIT again to confirm (clears all 32 slots)
- Press EXIT to cancel

**Randomize Entire Mod Matrix:**
- Hold RANDOM + press **[MOD MATRIX]** button twice
- Confirmation after first press
- Second press randomizes all routes
- **Caution:** Results can be chaotic - use as starting point for experimentation

---

**Practical Mod Matrix Examples:**

**Example 1 - Velocity-Sensitive Waveshaping:**
- **Route:** Velo On → Mutant 1 Depth
- **Depth:** +80
- **Result:** Harder playing increases waveshaping intensity, softer playing keeps timbre cleaner
- **Use case:** Dynamic timbral response in lead patches

**Example 2 - Aftertouch Filter Morph:**  
- **Route:** PolyAftT → Filter 2 Morph
- **Depth:** +64
- **Result:** Pressing keys harder morphs Filter 2 from low-pass toward band-pass or high-pass
- **Use case:** Performance-based timbral shifts, works per-note with polyphonic aftertouch

**Example 3 - Evolving WaveScan Position:**
- **Route:** LFO 3 → OSC 1 WaveScan
- **LFO 3 settings:** Wave = Sine, Rate = 0.08 Hz, TrigSync = Poly
- **Depth:** +64 (allows morph through 5 waveforms of 8-position wavelist)
- **Result:** Slow, smooth wavetable morphing with independent movement per voice
- **Use case:** Evolving pad textures

**Example 4 - Rhythmic Pan Modulation:**
- **Route:** LFO 4 → Osc1Pan
- **LFO 4 settings:** Wave = Saw Up, BPM = On, Rate = 1/4, TrigSync = Single
- **Depth:** +64 (pans from center to hard right over quarter note)
- **Result:** Oscillator 1 sweeps from center to right in sync with tempo
- **Additional route:** LFO 4 → Osc2Pan (Depth: -64) for opposite pan movement
- **Use case:** Stereo movement locked to track tempo

**Example 5 - Envelope-Controlled LFO Rate:**  
- **Route:** ENV 3 → LFO 1 Rate
- **ENV 3 settings:** Attack = 3.0s, Decay = 2.0s, Sustain = 64, Release = 4.0s
- **Depth:** +80
- **Result:** Filter LFO (LFO 1) accelerates during attack, settles to moderate speed, slows on release
- **Use case:** Organic filter movement that evolves with note shape

**Example 6 - Meta-Modulation (Modulating Modulation):**
- **Initial route:** LFO 1 → Filter 1 Cutoff (Depth: +64) - this is Mod Matrix slot 1
- **Meta route:** LFO 5 → ModMtrx Depth 1 (Depth: +64)
- **LFO 5 settings:** Wave = Triangle, Rate = 0.2 Hz
- **Result:** LFO 1's influence on filter cutoff is itself modulated by LFO 5 (intensity varies slowly)
- **Use case:** Complex, non-repetitive modulation that sounds less "machine-like"

**Example 7 - CV Input to Synthesis Parameters:**
- **Route 1:** Mod In 1 → OSC 1 Pitch (Depth: +64)
- **Route 2:** Mod In 1 → OSC 2 Pitch (Depth: +64)
- **Route 3:** Mod In 2 → Filter 1 Cutoff (Depth: +96)
- **CV Setup (System Setup page 9):** Mod In 1 = 1V/Oct, Mod In 2 = 0-5V
- **Result:** Eurorack sequencer controls oscillator pitch (melodic) and filter frequency simultaneously  
- **Use case:** Hydrasynth as Eurorack-controlled sound source

**Example 8 - Expression Pedal Multi-Parameter Sweep:**
- **Route 1:** ExpPedal → Filter 1 Cutoff (Depth: +96)
- **Route 2:** ExpPedal → Reverb Mix (Depth: +64)
- **Route 3:** ExpPedal → Osc3Vol (Depth: -32, starts Osc 3 at medium level, reduces as pedal moves)
- **Result:** Pedal simultaneously opens filter, increases reverb, and reduces sub-oscillator level
- **Use case:** Complex timbral shifts via single continuous controller

---

### Macro System

Macros are the Hydrasynth's "super-controls" - each of the 8 Macros can control up to 8 parameters simultaneously, and they're instantly accessible from the Home page via the 8 Control knobs and buttons around the right display. This transforms complex multi-parameter changes into single-knob adjustments, essential for both sound design and live performance.

**Access:** Press **[MACRO ASSIGN]** button → 8 macro slots, each with up to 8 destinations

**Macro Architecture:**
- **8 Macros total** per patch
- **8 destinations per Macro** (up to 8 parameters controlled by each Macro knob/button)
- **Control knob:** Sweeps through parameter range (0.0 to 128.0)
- **Control button:** Triggers preset value (behavior: Toggle, Trigger, Switch, or Reset - set in System Setup)
- **Home page integration:** All 8 Macros immediately available without menu diving

**Macro vs. Mod Matrix:**

**Macros:**
- Performance-focused, instant access from Home page
- Up to 8 destinations per Macro
- Knob + button control per Macro
- Saved per patch (different Macros for each sound)
- Can control Mod Matrix depths

**Mod Matrix:**  
- Modulation-focused, accessed via dedicated button
- One destination per slot (32 total slots)
- Depth control only
- Can modulate Macro positions

**Macros and Mod Matrix can modulate each other** - route LFO to Macro position via Mod Matrix, or use Macro to control multiple Mod Matrix route depths simultaneously.

---

**Macro Assignment Workflow:**

1. **Access Macro Edit Page:**
   - Press **[MACRO ASSIGN]**
   - Press Control button for desired Macro (1-8)
   - Macro Edit page appears showing 8 destination slots

2. **Assign First Destination:**
   - Press Control button 2 to activate Assign mode
   - Orange module buttons light up (potential destinations)
   - Press desired module button (e.g., **[FILTER 1]**)
   - First parameter of that module appears as destination
   - Turn upper Control knob to select different parameter within module (or turn top-panel knob for that parameter)
   - Turn lower Control knob to set modulation Depth for this destination

3. **Assign Additional Destinations:**
   - Press Control button for next destination slot (3, 4, 5, etc.)
   - Repeat step 2 for each additional destination
   - Up to 8 destinations can be assigned per Macro

4. **Set Button Value:**
   - Navigate to Button Value field (middle row of display)
   - Turn Control knob to set value button will trigger
   - Button behavior (Toggle/Trigger/Switch/Reset) set in System Setup, page 2

5. **Name the Macro (Optional):**  
   - Page to Macro naming page (page 4 within Macro Edit)
   - Choose from 100+ preset names or create custom name (8 characters max)
   - Name appears on Home page for easy identification

6. **Test from Home Page:**
   - Press **[HOME]**
   - Turn corresponding Control knob - all assigned parameters move simultaneously
   - Press Control button - button value triggers based on System Setup behavior

**Macro Button Behaviors (Set in System Setup, Page 2):**

- **Toggle:** Button switches between Button Value and current knob position
- **Trigger:** Button holds Button Value while pressed, returns to knob position when released
- **Switch:** Only one Macro button can be active at a time (selecting new button deselects others)
- **Reset:** Button returns Macro knob to zero position

**Holding SHIFT + Macro Button:**
- Temporarily inverts button behavior
- Toggle → Trigger (hold for Button Value)
- Trigger → Hold (latches Button Value until pressed again)
- Switch → Multiple buttons can be active
- Reset → (no SHIFT function)

---

**Practical Macro Examples:**

**Macro 1 - "Aggression" (Multi-Parameter Intensity Control):**
- Destination 1: Filter 1 Resonance (Depth: +64)
- Destination 2: Filter 1 Drive (Depth: +96)
- Destination 3: Mutant 1 Depth (Depth: +48)  
- Destination 4: Mutant 2 Depth (Depth: +48)
- Destination 5: ENV 1 Decay (Depth: -32, shortens decay as Macro increases)
- Destination 6: Reverb Mix (Depth: -24, reduces reverb as Macro increases for drier, more aggressive sound)
- **Result:** Single knob transforms pad into aggressive lead by increasing resonance, drive, waveshaping while shortening envelope and reducing reverb
- **Use case:** Sound design exploration, performance transitions between sections

**Macro 2 - "Filter Sweep + Width" (Timbre and Stereo Control):**
- Destination 1: Filter 1 Cutoff (Depth: +96)
- Destination 2: Filter 2 Morph (Depth: +64, moves from LP toward BP/HP)
- Destination 3: Voice Stereo Width (Depth: +64, widens as filter opens)
- **Button Value:** 80 (moderately open filter with wide stereo)
- **Result:** Knob controls brightness and width simultaneously, button snaps to "open" position
- **Use case:** Quick timbral shifts, button for instant "wide open" sound

**Macro 3 - "Motion" (Multi-LFO Rate Control):**  
- Destination 1: LFO 1 Rate (Depth: +64)
- Destination 2: LFO 3 Rate (Depth: +48)
- Destination 3: LFO 4 Rate (Depth: +80)
- **Result:** Single knob speeds up or slows down multiple LFOs simultaneously
- **Use case:** Add motion to static pad, slow down for ambient sections, speed up for intensity

**Macro 4 - "Mod Matrix Master" (Control Multiple Route Depths):**
- Destination 1: ModMtrx Depth 5 (Depth: +128, assuming slot 5 = LFO 3 → WaveScan)
- Destination 2: ModMtrx Depth 8 (Depth: +128, assuming slot 8 = LFO 4 → Pan)
- Destination 3: ModMtrx Depth 12 (Depth: +96, assuming slot 12 = ENV 3 → Mutant Ratio)
- **Result:** Single knob scales intensity of multiple modulation routes simultaneously
- **Use case:** Master "modulation intensity" control, reduces all movement when at zero

**Macro 5 - "Delay Throw" (Performance Effect):**
- Destination 1: Delay Mix (Depth: +96)
- Destination 2: Delay Feedback (Depth: +80)
- Destination 3: Delay Time (Depth: +32, lengthens delay time as Macro increases)
- **Button Value:** 110 (high mix, high feedback, longer time = runaway delay effect)
- **Result:** Knob adds delay smoothly, button creates delay throw effect
- **Use case:** Live performance, delay throws at ends of phrases

**Macro 6 - "Character Morph" (Source Blend with Timbral Shift):**
- Destination 1: Osc1Vol (Depth: -64, reduces as Macro increases)
- Destination 2: Osc2Vol (Depth: +64, increases as Macro increases)  
- Destination 3: Osc2 WaveScan (Depth: +48, morphs OSC 2 through wavetable)
- Destination 4: Filter 2 Morph (Depth: +32, changes filter character)
- **Result:** Crossfades from OSC 1 to OSC 2 while simultaneously morphing OSC 2's waveform and filter character
- **Use case:** Dramatic timbral transformations from single knob movement

**Macro 7 - "Space" (Reverb and Width):**
- Destination 1: Reverb Mix (Depth: +96)
- Destination 2: Reverb Time (Depth: +64)
- Destination 3: Voice Stereo Width (Depth: +48)
- Destination 4: Pre-FX Mix (Depth: +32, assuming chorus in Pre-FX slot)
- **Result:** Single knob adds depth, space, and width to sound
- **Use case:** Quick ambient transitions, zero = dry/narrow, max = huge/spacious

**Macro 8 - "Attack" (Envelope Speed Control):**
- Destination 1: ENV 1 Attack (Depth: -64, shortens as Macro increases)
- Destination 2: ENV 2 Attack (Depth: -64, shortens as Macro increases)
- Destination 3: ENV 1 Release (Depth: -32, shortens as Macro increases)  
- Destination 4: ENV 2 Release (Depth: -32, shortens as Macro increases)
- **Result:** Single knob transitions sound from slow pads (low Macro) to percussive plucks (high Macro)
- **Use case:** Adapt same patch for different musical contexts without switching presets

---

**Macro Save Options (During Patch Save):**

When saving a patch, Control knob 4 on the Save page determines how current Macro positions are handled:

- **Return:** All Macro knobs return to zero, buttons to Off
  - **Use case:** Macro edits were temporary, save patch at base state
  
- **Save:** Current Macro knob positions and button states are stored
  - **Use case:** Want patch to load with Macros at current positions (e.g., filter moderately open)
  
- **Convert:** Macro values are converted into the actual parameter values they control, Macros return to zero
  - **Use case:** Used Macros for sound design, want to "flatten" the result into the patch itself

---

## Session 2 Complete - Modulation System Established

**What Session 2 Added:**
- Complete modulation architecture overview with system diagram
- All 5 DAHDSR envelopes (parameters, looping, triggering, curves, BPM sync)
- All 5 LFOs (11 waveforms, Step LFO programming, BPM sync, phase control)
- Complete Mod Matrix documentation (32 slots, 35 sources, 191 destinations, routing methods)
- Macro system (8 Macros × 8 destinations, assignment workflow, button behaviors)
- Basic routing examples throughout (velocity→waveshaping, aftertouch→filter morph, CV→pitch, etc.)
- Meta-modulation concepts (envelopes modulating LFOs, Macros controlling Mod Matrix depths)

**Foundation Complete (Sessions 1-2):**
- ✅ Synthesis engine (oscillators, mutants, mixer, filters)
- ✅ Modulation system (envelopes, LFOs, Mod Matrix, Macros)

**Coming in Session 3:**
- Performance features (ribbon controller dedicated section with 3 modes)
- Polyphonic aftertouch integration techniques
- Arpeggiator (8 modes, phrase library, ratcheting, clock sync)
- Voice management (unison modes, analog feel, glide, voice allocation)
- Alternative tuning systems and scales (microtonality, historical temperaments)
- Wheels and pedals integration

**Coming in Session 4:**
- CV/Gate/Clock integration workflows with Eurorack systems
- Bidirectional CV modulation (Hydrasynth→modular and modular→Hydrasynth)
- Clock sync strategies (MIDI, USB, CV clock standards)
- Eurorack system hub techniques

**Coming in Session 5:**
- Effects section (Pre-FX, Delay, Reverb, Post-FX)
- System setup and calibration (ribbon, wheels, CV voltage standards)
- Troubleshooting and maintenance
- MIDI/USB configuration

**Coming in Session 6:**
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert)
- Complete programming tutorials with step-by-step instructions
- Alternative synthesizer options (budget/different character/premium tiers)

---

*ASM Hydrasynth Keyboard - Session 2 of 6 - Modulation System Complete*

---

## Performance Features

### Ribbon Controller

The Hydrasynth Keyboard's ribbon controller is a 49-key-length continuous touch surface positioned directly above the keyboard, providing expressive pitch control, modulation, and performance techniques unavailable on traditional synthesizers. Unlike small ribbon strips found on other instruments, the Hydrasynth's full-length ribbon enables precise melodic playing, dramatic pitch sweeps, and gestural performance techniques.

**Physical Characteristics:**
- **Length:** Extends entire keyboard width (~800mm)
- **Position:** Mounted directly above keys for easy thumb/finger access while playing
- **Surface:** Capacitive touch-sensitive (no moving parts)
- **Visual feedback:** LED position indicator shows touch location

**Access Ribbon Settings:** Press **[RIBBON]** button → Single page of parameters

**Ribbon Parameters:**

- **Mode:** Absolute, Relative, or XY Mod (three distinct operating modes - see detailed explanations below)
  
- **Range:** 2 to 48 semitones (±1 to ±24 semitones from center/touch point)
  - Determines pitch bend range or modulation span
  - Common settings: 2 semitones (subtle vibrato), 12 semitones (octave bends), 24 semitones (two-octave sweeps)
  - Applies to Absolute and Relative modes; XY Mod uses full 0-127 range

- **Quant:** Off or On
  - Off = continuous pitch/modulation (smooth sweeps)
  - On = quantized to semitones (chromatic steps, no microtones)
  - **Use case:** Quant On enables accurate melodic playing on ribbon

- **RbnCurve:** -64 (Logarithmic) through 0 (Linear) to +64 (Exponential)
  - Affects response curve for touch-to-modulation mapping
  - Logarithmic (negative): More control near center/touch point, less at extremes
  - Linear (0): Proportional response across entire ribbon
  - Exponential (positive): Less control near center, more at extremes
  - **Pro tip:** Exponential curves work well for dramatic pitch bends, logarithmic for precise vibrato control

- **Smoothing:** 0-127
  - Filters rapid position changes to reduce jitter
  - 0 = instant response (can sound steppy with slight hand movement)
  - 127 = heavily smoothed (glides slowly to new positions)
  - **Recommended:** 15-30 for most applications (removes jitter, maintains responsiveness)

---

**Three Ribbon Modes:**

**Mode 1: Absolute**

Ribbon position maps to pitch bend amount with center as zero.

**Operation:**
- **Center touch:** No pitch change (0 semitones)
- **Left of center:** Pitch bends down (up to -Range semitones)
- **Right of center:** Pitch bends up (up to +Range semitones)
- **Proportional:** Distance from center determines bend amount

**Use cases:**
- **Traditional pitch bend:** Replace or augment pitch wheel with larger control surface
- **Vibrato:** Rock finger side-to-side around center point
- **Interval jumps:** Quant On + Range 12 = chromatic note selection within octave
- **Slide guitar/pedal steel emulation:** Long sweeps across keyboard width

**Programming example - Classic vibrato:**
1. Mode: Absolute
2. Range: 2 semitones (±1 semitone vibrato)
3. Quant: Off (smooth pitch modulation)
4. RbnCurve: 0 (linear response)
5. Smoothing: 20 (removes jitter, maintains expression)
6. **Technique:** Touch near center, rock finger left-right for musical vibrato

**Programming example - Chromatic ribbon keyboard:**
1. Mode: Absolute  
2. Range: 24 semitones (±12 semitones = 2 octaves)
3. Quant: On (quantized to semitones)
4. RbnCurve: 0 (linear)
5. Smoothing: 10 (tight response for note accuracy)
6. **Technique:** Ribbon becomes 2-octave chromatic keyboard, slide finger for melodic lines

---

**Mode 2: Relative**

Touch point becomes zero reference, movement from touch creates modulation.

**Operation:**
- **Initial touch:** Establishes reference point (no immediate pitch change)
- **Move left from touch:** Pitch bends down (up to -Range semitones)
- **Move right from touch:** Pitch bends up (up to +Range semitones)
- **Release and retouch:** New reference point established

**Key difference from Absolute:**
- Absolute: Center of ribbon is always zero
- Relative: Wherever you touch becomes zero

**Use cases:**
- **Guitar-style bends:** Touch note, bend up or down from playing position
- **Theremin-style playing:** Initial touch establishes pitch, movement creates vibrato/glissando from stable pitch
- **Polyphonic bends:** Touch ribbon while playing, all held notes bend together from their current pitches
- **Performance technique:** Touch, move, release, touch elsewhere, move = multiple independent bend gestures without repositioning hand to center

**Programming example - Guitar-style note bending:**
1. Mode: Relative
2. Range: 4 semitones (±2 semitones, typical guitar bend range)
3. Quant: Off (smooth bends)
4. RbnCurve: -20 (more control near touch point)
5. Smoothing: 15 (natural bend feel)
6. **Technique:** Play note on keyboard, touch ribbon near middle, slide finger right to bend pitch up 1-2 semitones

**Programming example - Theremin emulation:**
1. Mode: Relative
2. Range: 24 semitones (wide pitch range)
3. Quant: Off
4. RbnCurve: 0
5. Smoothing: 40 (portamento-like slides between pitches)
6. **Via Mod Matrix:** RbnRel → OSC 1 Pitch (depth +128), RbnRel → OSC 2 Pitch (depth +128)
7. **Technique:** Hold chord, touch and move on ribbon for expressive pitch variations independent of keyboard

---

**Mode 3: XY Mod**

Ribbon splits into X-axis (horizontal position) and Y-axis (vertical pressure) modulation sources.

**Operation:**
- **X-axis (horizontal position):** Left = 0, Right = 127 (continuous position across ribbon width)
- **Y-axis (vertical pressure):** Light touch = 0, Heavy pressure = 127 (pressure applied to ribbon)
- **Both axes available simultaneously** as independent modulation sources in Mod Matrix
- **No pitch bend:** XY Mod disables pitch bend function, ribbon becomes pure modulation controller

**Modulation Source Names:**
- **RbnAbs (Absolute bipolar):** Used in XY Mod for X-axis, range -64 to +64 (center = 0)
- **RbnAbs+ (Absolute unipolar):** Used in XY Mod for X-axis, range 0 to 127 (left = 0, right = 127)
- **Y-axis:** Pressure detected but not named separately (accessed via RbnAbs vertical component in XY mode)

**Use cases:**
- **Filter cutoff + resonance:** X-axis → Cutoff, Y-axis → Resonance (sweep and emphasize simultaneously)
- **Wavetable position + waveshaping:** X-axis → WaveScan position, Y-axis → Mutant Depth (morph and shape together)
- **Dual LFO rate control:** X-axis → LFO 1 Rate, Y-axis → LFO 2 Rate (independent speed control)
- **Pan + reverb:** X-axis → Pan position, Y-axis → Reverb Mix (spatial positioning with depth)
- **Complex performance gestures:** Single ribbon motion controls multiple sound parameters simultaneously

**Programming example - Filter sweep with dynamic resonance:**
1. Mode: XY Mod
2. **Mod Matrix route 1:** RbnAbs+ → Filter 1 Cutoff (depth +96)
3. **Mod Matrix route 2:** RbnAbs (Y-axis pressure) → Filter 1 Resonance (depth +64)
4. **Result:** Slide finger left-right sweeps filter frequency, pressing harder increases resonance
5. **Use case:** Single gesture creates dynamic filter movement impossible with single-axis control

**Programming example - WaveScan morphing with waveshaping intensity:**
1. Mode: XY Mod
2. OSC 1: WaveScan mode with 8-position wavelist
3. **Mod Matrix route 1:** RbnAbs+ → OSC 1 WaveScan (depth +96, allows morphing through 6-7 waveforms)
4. **Mod Matrix route 2:** RbnAbs Y-pressure → Mutant 1 Depth (depth +80)
5. **Result:** Horizontal movement morphs through wavetable, vertical pressure adds waveshaping complexity
6. **Use case:** Continuous timbral evolution with expressive intensity control

---

**Ribbon Performance Techniques:**

**Vibrato (Absolute or Relative mode):**
- Small side-to-side motion around center (Absolute) or touch point (Relative)
- Range: 1-2 semitones for musical vibrato, 2-4 semitones for dramatic effect
- **Technique variation:** Slow vibrato for emotional expression, fast for tension

**Pitch Dive/Rise (Absolute mode):**
- Start at far right (pitch at maximum), slide left across entire ribbon
- Or start at far left, slide right for rising pitch
- Quant Off for smooth sweep, Quant On for chromatic run
- **Use case:** Intro/outro effects, dramatic transitions

**Interval Jumps (Absolute mode, Quant On):**
- Tap specific ribbon positions for chromatic intervals
- Range 12 (octave) or 24 (two octaves) enables melodic playing
- **Practice:** Learn ribbon position-to-pitch mapping through experimentation

**String Bends (Relative mode):**
- Touch ribbon after playing note on keyboard
- Slide finger upward (right) for bend up, downward (left) for bend down  
- Release and retouch for next bend (new reference point each touch)
- **Pair with:** Held chords - touch ribbon to bend entire chord in unison

**Gestural Timbre Control (XY Mod mode):**
- Sweep across ribbon width while varying pressure
- Creates two-dimensional sound evolution
- Route X and Y axes to complementary parameters (e.g., brightness and depth)

**Theremin-Style Performance (Relative mode):**
- Smoothing 40-60 for portamento-like slides
- Wide Range (12-24 semitones) for expressive pitch variation
- Touch, hold, slide for continuous pitch control
- **Pair with:** Vibrato from Mod Wheel for independent expression

---

### Polyphonic Aftertouch

The Hydrasynth Keyboard's polyphonic aftertouch (polytouch) keybed is a defining feature - each of the 49 keys senses finger pressure independently, enabling per-note expression unavailable on most synthesizers. This transforms static chords into dynamically evolving textures and allows nuanced control over individual voices within polyphonic passages.

**What is Polyphonic Aftertouch?**

**Channel Aftertouch (common on most synths):**
- Single pressure sensor for entire keyboard
- All held notes respond identically to pressure
- Example: Press three-note chord harder, all three notes brighten equally

**Polyphonic Aftertouch (Hydrasynth Keyboard):**
- Independent pressure sensor per key
- Each note responds to its key's pressure independently  
- Example: Press three-note chord, apply pressure to only top note, only top note brightens

**Musical Implications:**
- Individual note emphasis within chords (accent melody note while holding chord)
- Dynamic voice movement (some notes swell, others remain static)
- Expressive lead playing (vibrato and filter movement respond to playing touch)
- Pad animation (held chord evolves as pressure varies across keys)

**Access in Mod Matrix:**
- **Source name:** PolyAftT (Polyphonic Aftertouch)
- **Range:** 0 (no pressure) to 127 (maximum pressure) per key
- **Polyphonic behavior:** Modulation applies independently to each voice

**Also available: MonoAftT (Channel Aftertouch)**
- Single pressure value, highest pressed key determines value
- All voices respond identically
- **Use case:** When uniform pressure response desired across all notes

---

**Polyphonic Aftertouch Routing Strategies:**

**Strategy 1 - Per-Note Filter Brightness:**

**Route:** PolyAftT → Filter 1 Cutoff
- **Depth:** +64 to +96
- **Result:** Pressing individual keys harder opens filter on only those notes
- **Musical application:** Play chord, emphasize melody notes by pressing harder
- **Example:** Pad chord with melody note on top - press top key harder to make it sing above chord

**Strategy 2 - Independent Vibrato Depth:**

**Route 1:** LFO 3 → OSC 1 Pitch (depth +5, subtle vibrato)
- **Route 2:** PolyAftT → ModMtrx Depth (route 1) (depth +64)
- **Result:** LFO creates vibrato, pressure increases vibrato depth per-note
- **Musical application:** Sustained notes get more vibrato as you press harder, short notes have minimal vibrato
- **Technique:** Play passage, apply pressure only to long sustained notes for expressive vibrato

**Strategy 3 - Polyphonic Waveshaping:**

**Route:** PolyAftT → Mutant 1 Depth
- **Depth:** +80
- **Mutant 1 settings:** FM-Lin mode with moderate Ratio and Dry/Wet
- **Result:** Pressing keys harder increases harmonic complexity on individual notes
- **Musical application:** Held chord becomes animated as different notes gain/lose brightness independently

**Strategy 4 - Dynamic Amplitude Control:**

**Route:** PolyAftT → Amp Level
- **Depth:** +32 (adds volume on top of ENV 2 level)
- **Result:** Pressing keys harder increases volume of individual notes
- **Musical application:** Accent specific chord tones, bring out inner voices
- **Caution:** Moderate depth to avoid excessive volume spikes

**Strategy 5 - Filter Morph (Filter 2):**

**Route:** PolyAftT → Filter 2 Morph  
- **Depth:** +64
- **Filter 2 settings:** LP-BP-HP mode, Morph starting at 20 (mostly low-pass)
- **Result:** Pressing keys harder morphs filter from LP toward BP/HP on individual notes
- **Musical application:** Chord starts warm (LP), individual notes brighten (BP/HP) as pressure applied

**Strategy 6 - Multiple Destination Complexity:**

**Route 1:** PolyAftT → Filter 1 Cutoff (depth +64)
- **Route 2:** PolyAftT → Mutant 2 Depth (depth +48)
- **Route 3:** PolyAftT → Reverb Mix (depth +24)
- **Result:** Pressure simultaneously opens filter, increases waveshaping, and adds reverb per-note
- **Musical application:** Complete timbral transformation from single expressive gesture

---

**Polyphonic vs. Channel Aftertouch - When to Use Each:**

**Use PolyAftT when:**
- Playing chords with melody emphasis (accent top or inner voices)
- Creating evolving pad textures (individual notes swell/fade independently)
- Expressive lead playing (vibrato/filter response per-note)
- You want maximum expressive control

**Use MonoAftT when:**
- Controlling global patch parameters (reverb mix, delay feedback)
- Uniform response desired across all voices (all notes should respond identically)
- Modulating tempo-synced effects (arpeggiator rate, LFO speed)
- Simpler, more predictable behavior needed

**Can use both simultaneously:**
- **Example:** PolyAftT → Filter Cutoff (per-note brightness), MonoAftT → Reverb Time (global space control)

---

**Calibrating Aftertouch Response:**

Aftertouch sensitivity can be adjusted in System Setup (Page 5):

**Access:** Press **[SYSTEM]** → Page to System Setup page 5 → PolyAftT section

- **Threshold:** 0-127 (pressure required before aftertouch engages)
  - Low values (0-30): Light touch triggers aftertouch (very sensitive)
  - Medium values (40-60): Moderate pressure required (balanced)
  - High values (70-127): Heavy pressure required (reduces accidental triggering)
  
- **Curve:** -64 to +64 (response curve shape)
  - Negative values: More response at light pressure, less at heavy pressure
  - 0: Linear response throughout pressure range
  - Positive values: Less response at light pressure, more at heavy pressure

**Recommended starting points:**
- **Sensitive/expressive:** Threshold 25, Curve -20
- **Balanced:** Threshold 40, Curve 0  
- **Heavy/controlled:** Threshold 60, Curve +15

**Test and adjust:**
1. Route PolyAftT → Filter 1 Cutoff (depth +96) for clear feedback
2. Play notes, vary pressure to find comfortable response
3. Adjust Threshold and Curve until natural feel achieved
4. Settings apply globally to all patches

---

### Arpeggiator

The Hydrasynth's arpeggiator transforms held chords into rhythmic patterns with extensive control over note order, timing, gate length, octave range, and phrase variations. Eight arpeggiator modes plus a phrase library enable everything from classic synth arpeggios to complex melodic sequences.

**Access:** Press **[ARP]** button → Two pages of parameters

**Basic Operation:**
1. Press **[ARP]** button (button lights, arpeggiator enabled)
2. Hold chord on keyboard  
3. Arpeggiator plays held notes according to Mode and Division settings
4. Press **[ARP]** again to disable (button unlit)

**Arpeggiator Parameters - Page 1:**

- **Mode:** Up, Down, UpDown, DownUp, Order, Random, Walk, Phrase (eight modes - see detailed explanations below)
  - Determines order notes are played within held chord
  
- **Division:** 1/64T to 4 bars (tempo-synced note duration)
  - Common settings: 1/16 (sixteenth notes), 1/8 (eighth notes), 1/4 (quarter notes)
  - Triplet divisions available (1/64T, 1/32T, 1/16T, 1/8T, 1/4T)
  - Dotted divisions available (1/32., 1/16., 1/8., 1/4., 1/2., 1/1.)
  
- **Swing:** 50-75%
  - 50% = straight timing (no swing)
  - 75% = maximum swing (long-short rhythm like triplet feel)
  - **Example:** Division 1/16, Swing 66% = shuffled sixteenth notes
  
- **Gate:** 5-200%
  - Controls note length as percentage of Division
  - 50% = notes play for half of Division time (staccato)
  - 100% = notes play for full Division time (legato, notes touch)
  - 200% = notes overlap significantly (smooth, connected)
  - **Example:** Division 1/8, Gate 25% = short, plucky eighth notes

- **Octave:** 1-4 octaves
  - Number of octaves arpeggio spans
  - **Example:** Hold C-E-G (C major triad), Octave 2 = plays C-E-G-C-E-G (two octaves)
  
- **OctMode:** Up, Down, UpDown, DownUp
  - Determines how octaves are traversed
  - **Up:** Plays chord in first octave, then second octave, etc.
  - **Down:** Plays chord in highest octave first, descends through octaves
  - **UpDown:** Ascends through octaves, then descends (palindrome)
  - **DownUp:** Descends through octaves, then ascends

- **Length:** 1-32 steps
  - Maximum number of notes arpeggiator plays before looping
  - **Shorter than full pattern:** Creates truncated, repeating fragments
  - **Example:** Hold 3-note chord, Octave 3, Length 5 = plays 5 notes then loops (incomplete pattern)

- **Phrase:** OFF, 1-128 (phrase library selection, only active when Mode = Phrase)
  - 128 preset rhythmic/melodic patterns
  - Held chord determines pitch material, phrase determines rhythm/order

---

**Arpeggiator Parameters - Page 2:**

- **Ratchet:** Off, 1/64T to 1/2. (note subdivision for ratcheting)
  - When Ratchet is active, some notes repeat rapidly at Ratchet division before advancing
  - Creates drum-roll effect on selected notes
  - **Example:** Division 1/8, Ratchet 1/32 = some eighth notes become four thirty-second note bursts
  
- **RatchProb:** 0-100% (ratchet probability per note)
  - 0% = ratcheting never occurs
  - 50% = approximately half of notes ratchet
  - 100% = every note ratchets
  - **Use case:** Add variety to arpeggios (some notes ratchet, others don't)

- **Chance:** 0-100% (probability each note plays)
  - 100% = all notes play (no gaps)
  - 50% = approximately half of notes skip (sparse, rhythmic gaps)
  - 0% = no notes play (arpeggiator generates rhythm but no output)
  - **Use case:** Create evolving, unpredictable patterns with rhythmic gaps

- **Velocity:** Off, Vel Avg, Vel Play, Vel Step
  - **Off:** All arpeggiated notes play at velocity 100
  - **Vel Avg:** Average velocity of held keys determines arpeggio velocity
  - **Vel Play:** Each arpeggio note plays at velocity of its source key
  - **Vel Step:** Velocity alternates in programmed pattern (see Velocity Sequencer below)
  
- **Vel Step Sequencer:** (8 steps visible, access via Control buttons when Velocity = Vel Step)
  - Program up to 32 velocity values (velocity pattern independent of note pattern)
  - Each step: 0-127 velocity
  - **Example:** Pattern of 64-100-80-127-64-100-80-100 creates accented rhythm

**Latch Mode:**
- Hold **[ARP]** button for 1 second → Latch mode engages (button blinks)
- Play chord, release keys → Arpeggio continues until new chord played or Latch disengaged
- **Use case:** Hands-free arpeggios, play melody over held arpeggio chord

---

**Eight Arpeggiator Modes:**

**Mode 1: Up**
- Plays held notes from lowest to highest pitch
- **Example:** Hold C-E-G → plays C, E, G, C, E, G, ... (loops)
- **With Octave 2:** C, E, G, C(+12), E(+12), G(+12), C, E, G, ...
- **Use case:** Classic ascending arpeggio, uplifting character

**Mode 2: Down**
- Plays held notes from highest to lowest pitch
- **Example:** Hold C-E-G → plays G, E, C, G, E, C, ... (loops)
- **With Octave 2:** G(+12), E(+12), C(+12), G, E, C, G(+12), ...
- **Use case:** Descending arpeggio, darker/grounded character

**Mode 3: UpDown**
- Plays held notes ascending, then descending (palindrome)
- **Top and bottom notes play once** (no repetition at direction change)
- **Example:** Hold C-E-G → plays C, E, G, E, C, E, G, E, ... (smooth reversal)
- **Use case:** Wave-like motion, balanced ascending/descending feel

**Mode 4: DownUp**  
- Plays held notes descending, then ascending (inverted palindrome)
- **Top and bottom notes play once**
- **Example:** Hold C-E-G → plays G, E, C, E, G, E, C, E, ... (smooth reversal)
- **Use case:** Inverted wave motion

**Mode 5: Order**
- Plays notes in order pressed (first key pressed = first note, etc.)
- **Preserves playing sequence** regardless of pitch
- **Example:** Play G, then C, then E → arpeggio plays G, C, E, G, C, E, ...
- **Use case:** Custom note order, melodic control, non-pitch-sorted patterns

**Mode 6: Random**
- Randomly selects from held notes (true random, no pattern)
- **Each cycle produces different sequence**
- **Example:** Hold C-E-G → might play E, C, G, C, C, E, G, E, C, ... (unpredictable)
- **Use case:** Generative textures, evolving patterns, experimental sounds

**Mode 7: Walk**
- Steps through held notes one at a time (up or down by one note per step)
- **Similar to UpDown but can change direction randomly**
- **Example:** Hold C-E-G → might play C, E, G, E, G, E, C, E, ...
- **Use case:** Organic, wandering patterns

**Mode 8: Phrase**
- Uses preset phrase from phrase library (1-128)
- **Phrase determines rhythm, note order, velocity, and articulation**
- **Held chord provides pitch material** (phrase pattern applied to held notes)
- **Example:** Phrase 042 might be a funky sixteenth note pattern - held chord determines pitches
- **Use case:** Instant rhythmic/melodic inspiration, explore phrase library for song starters

**Phrase Library Organization:**
- Phrases 1-32: Basic rhythmic patterns
- Phrases 33-64: Syncopated/swing patterns
- Phrases 65-96: Melodic sequences
- Phrases 97-128: Complex/experimental patterns
- **Exploration method:** Set Mode = Phrase, hold chord, turn Phrase knob to audition different patterns

---

**Arpeggiator Programming Examples:**

**Classic Analog Arp (Up mode):**
- Mode: Up
- Division: 1/16 (sixteenth notes)
- Swing: 50% (straight)
- Gate: 50% (staccato)
- Octave: 2
- OctMode: Up
- Length: 32 (full pattern)  
- Chance: 100%, Ratchet: Off
- **Result:** Classic ascending sixteenth note arpeggio spanning two octaves

**Rhythmic Pad (UpDown mode with Chance):**
- Mode: UpDown
- Division: 1/8 (eighth notes)
- Swing: 54% (slight shuffle)
- Gate: 150% (overlapping notes, smooth)
- Octave: 1
- Length: 32
- Chance: 65% (some notes skip, creating gaps)
- **Result:** Smooth pad-like arpeggio with evolving rhythmic gaps

**Percussive Sequence (Order mode with Ratchet):**
- Mode: Order (play chord in specific order: root, fifth, octave)
- Division: 1/16
- Swing: 62% (moderate swing)
- Gate: 25% (very short, percussive)
- Octave: 1
- Ratchet: 1/32, RatchProb: 40%
- **Result:** Rhythmic, percussive pattern with occasional ratcheted bursts

**Generative Texture (Random mode with Chance):**
- Mode: Random
- Division: 1/16T (triplet sixteenths)
- Swing: 50%
- Gate: 80% (moderate length)
- Octave: 3 (wide range)
- Chance: 70% (sparse, gaps between notes)
- Ratchet: 1/64, RatchProb: 25%
- **Result:** Evolving, unpredictable texture with wide pitch range and occasional rapid bursts

**Phrase-Based Groove (Phrase mode):**
- Mode: Phrase
- Phrase: 042 (or explore library)
- Division: 1/16 (phrase timing referenced to sixteenth notes)
- Octave: 2
- Length: 16 (truncate phrase for shorter loop)
- **Result:** Instant groove based on preset phrase applied to held chord

---

**Arpeggiator + Performance Features:**

**Arpeggiator + Ribbon:**
- Arpeggio plays, use ribbon for pitch bends/vibrato on entire arpeggio
- **Example:** Hold chord, Latch On, use ribbon for dramatic pitch swoops while arp continues

**Arpeggiator + Polyphonic Aftertouch:**
- Press individual chord notes harder to emphasize specific arpeggio pitches
- **Via Mod Matrix:** PolyAftT → Filter Cutoff (arpeggiated notes brighten when their source keys pressed harder)

**Arpeggiator + Mod Matrix:**
- Route arp clock-synced LFOs for rhythmic filter/modulation in sync with arp pattern
- **Example:** LFO 1 BPM On, Rate = Division (e.g., 1/16), route to Filter Cutoff for synchronized filter pump

**Arpeggiator + Macros:**
- Assign Macro to control multiple arp parameters (Division, Gate, Swing simultaneously)
- **Example:** Macro 1 → Arp Division + Arp Gate = single knob transforms arp from slow legato to fast staccato

---

### Voice Management

The Hydrasynth's voice architecture extends beyond basic 8-voice polyphony, offering unison modes, analog feel randomization, glide (portamento), and sophisticated voice allocation strategies. Understanding these features enables both rich polyphonic textures and expressive monophonic lead playing.

**Access Voice Settings:** Press **[VOICE]** button → Two pages of parameters

---

**Voice Parameters - Page 1:**

- **Unison:** Off, 2, 4, or 8 voices
  - Determines how many voices are stacked per played note
  - **Off:** Standard polyphony (8 independent voices)
  - **2:** Each note uses 2 voices (4-note polyphony)
  - **4:** Each note uses 4 voices (2-note polyphony)
  - **8:** Each note uses all 8 voices (monophonic, massive thickness)
  
- **Detune:** 0.0-128.0 (detuning amount between unison voices)
  - 0 = all unison voices perfectly in tune (no detuning)
  - 64 = moderate detuning (lush chorus effect)
  - 128 = maximum detuning (very wide, obvious pitch spread)
  - **Only active when Unison ≠ Off**
  
- **Spread:** 0-127 (stereo width of unison voices)
  - 0 = all unison voices panned center (mono)
  - 127 = unison voices spread across full stereo field
  - **Example:** Unison 4, Spread 100 = 4 voices spread left-to-right
  - **Only active when Unison ≠ Off**

- **AnalogFL (Analog Feel):** 0-127
  - Adds subtle randomization to pitch, filter cutoff, and envelope timing per voice
  - 0 = perfectly precise (digital stability)
  - 64 = moderate analog drift (vintage synth character)
  - 127 = maximum drift (obvious pitch/timing variation)
  - **Affects all voices,** regardless of Unison setting
  - **Caution:** High values can sound out-of-tune on melodic content

- **PitchBnd (Pitch Bend Range):** 0-24 semitones
  - Determines pitch wheel range in semitones
  - Common settings: 2 (whole step), 7 (perfect fifth), 12 (octave)
  - Also affects Ribbon Controller range in Absolute/Relative modes
  
- **Vib Amt (Vibrato Amount):** 0-127 (vibrato depth)
  - Controls depth of Mod Wheel vibrato (pre-wired modulation)
  - 0 = no vibrato regardless of Mod Wheel position
  - 127 = maximum vibrato depth at full Mod Wheel
  - **Tip:** Set to moderate value (40-60) for musical vibrato range

- **Vib Rate (Vibrato Rate):** 0.5-12.0 Hz (vibrato speed)
  - Controls LFO speed of Mod Wheel vibrato
  - Slow (2-4 Hz): Musical vibrato (vocal/string-like)
  - Fast (8-12 Hz): Aggressive vibrato (can approach ring mod)
  - **Pre-wired:** Mod Wheel controls vibrato depth, Vib Rate sets speed

---

**Voice Parameters - Page 2:**

- **Glide Time:** 0-127 (portamento/glissando rate)
  - Controls speed of pitch transition between notes
  - 0 = instant pitch change (effectively no glide)
  - Lower values (1-40) = fast glide/glissando
  - Medium values (41-85) = moderate musical portamento
  - Higher values (86-127) = slow dramatic pitch sweeps
  - **Only active when Glide ≠ Off**

- **Glide:** Off, Glide, Glissando (three modes)
  - **Off:** No glide, pitches change instantly
  - **Glide:** Smooth continuous pitch slide between notes (traditional portamento)
  - **Glissando:** Stepped chromatic pitch slide (discrete semitone steps between start and end notes)
  - **Glissando + non-chromatic scales:** When alternative scale selected (Voice page 3), glissando follows that scale's steps instead of chromatic steps
  - **Use case:** Glide for smooth portamento, Glissando for chromatic runs or scale-based melodic transitions

- **Glide Curve:** Exp (-64) > Lin (0) > Log (64)
  - Shapes glide/glissando acceleration curve
  - Exponential (negative values): Rises slowly at first, accelerates upward; falls quickly then slows
  - Linear (0): Constant rate of change throughout
  - Logarithmic (positive values): Rises quickly at first, slows near peak; falls slowly then accelerates
  - **Musical character:** Logarithmic feels natural for upward slides, exponential feels dramatic

- **Glide Legato:** Off, On (separate parameter controlling when glide occurs)
  - **Off:** All notes glide regardless of playing style (staccato and legato both glide)
  - **On:** Only legato playing triggers glide (staccato notes change pitch instantly)
  - **Legato definition:** One note held while next note is played
  - **Polyphony consideration:** Less predictable in Poly VoiceMode - each voice has independent legato state, glide only occurs when same voice retriggered

- **VoiceMode:** Poly, Mono, Legato
  - **Poly:** Full 8-voice polyphony (or reduced by Unison setting)
  - **Mono:** Only one voice at a time (monophonic synthesizer behavior)
  - **Legato:** Monophonic with retrigger only on first note of phrase
  - **Legato use case:** Smooth lead lines without envelope retriggering between notes

- **Steal:** Oldest, Newest, Quietest, Off
  - Determines which voice is stolen when polyphony exceeded
  - **Oldest:** Longest-held note is stolen (maintains most recent notes)
  - **Newest:** Most recently played note is stolen (maintains earliest notes)
  - **Quietest:** Lowest-amplitude voice is stolen (perceptually least noticeable)
  - **Off:** No stealing (9th note triggers no voice, silently ignored)

- **Priority:** Last, Low, High
  - In Mono/Legato VoiceMode, determines which note plays when multiple keys held
  - **Last:** Most recently played key has priority
  - **Low:** Lowest note has priority (bass note playing)
  - **High:** Highest note has priority (melody note playing)
  - **Only active in Mono or Legato VoiceMode**

---

**Unison Mode Details:**

**Unison = 2 (4-note polyphony):**
- Each note uses 2 voices
- Voices slightly detuned (Detune parameter) and spread in stereo (Spread parameter)
- **Use case:** Lush pads, leads with thickness, chords with movement

**Unison = 4 (2-note polyphony):**
- Each note uses 4 voices
- Significant detuning and stereo spread possible
- **Use case:** Massive leads, rich two-note intervals, thick bass

**Unison = 8 (monophonic):**
- All 8 voices play single note
- **Maximum detuning and spread** creates supersaw-style thickness
- **Use case:** Lead synth lines, bass with huge presence, monophonic performance

**Unison Voice Tuning Algorithm:**
- Voices tuned in complementary ratios (not random)
- Some voices slightly sharp, others slightly flat
- **Creates chorus effect** without phase cancellation issues
- **Spread parameter:** Spreads detuned voices across stereo field for width

**Practical Unison Settings:**

**Subtle Thickness (Unison 2):**
- Detune: 15-25 (slight detuning, barely perceptible pitch movement)
- Spread: 40-60 (moderate stereo width)
- **Character:** Enhances polyphonic patches without obvious detuning

**Classic Analog Unison (Unison 4):**
- Detune: 30-50 (noticeable detuning, lush analog character)
- Spread: 80-100 (wide stereo field)
- **Character:** Vintage polysynth sound, rich two-note chords

**Supersaw Lead (Unison 8):**
- Detune: 50-80 (significant detuning, massive width)
- Spread: 120-127 (maximum stereo spread)
- **Character:** Modern trance/EDM lead sound, mono playing only

---

**Glide and Glissando Applications:**

**Monophonic Lead with Legato Glide:**
- VoiceMode: Legato
- Glide: Glide (smooth portamento)
- Glide Legato: On
- Glide Time: 25-40 (fast glide between legato notes)
- Glide Curve: +20 (logarithmic, natural upward feel)
- **Result:** Notes played legato glide smoothly, staccato notes jump instantly
- **Use case:** Expressive lead playing, slide between some notes, jump to others

**Bass Slide (All Notes Glide):**
- VoiceMode: Mono
- Glide: Glide (smooth portamento)
- Glide Legato: Off (all notes glide)
- Glide Time: 50-80 (moderate glide speed)
- Glide Curve: 0 (linear, consistent speed)
- **Result:** All notes glide to each other, classic bass slide effect
- **Use case:** Funk/disco bass lines, acid bass

**Chromatic Run (Glissando):**
- VoiceMode: Mono
- Glide: Glissando (stepped chromatic)
- Glide Legato: Off
- Glide Time: 60-100 (moderate step speed)
- Glide Curve: 0 (linear)
- **Result:** Chromatic steps between played notes (like piano glissando)
- **Use case:** Harp-like runs, chromatic flourishes, vintage synthesizer effects

**Scale-Based Glissando:**
- Voice page 3: Select non-chromatic scale (e.g., Pentatonic, Blues, Whole Tone)
- Glide: Glissando (follows selected scale)
- Glide Legato: Off
- Glide Time: 70-90
- **Result:** Glissando follows scale steps instead of chromatic steps
- **Use case:** Musical melodic transitions, scale-appropriate runs, ethnic music emulation

**Dramatic Pitch Sweep:**
- Glide: Glide (smooth portamento)
- Glide Legato: Off
- Glide Time: 110-127 (very slow glide)
- Glide Curve: -40 (exponential, accelerates toward target)
- **Result:** Slow, dramatic pitch sweeps between notes
- **Use case:** Intro/outro effects, experimental sounds, cinematic textures

**Polyphonic Glide:**
- VoiceMode: Poly
- Glide: Glide (smooth portamento)
- Glide Legato: Off
- Glide Time: 60-90 (moderate glide)
- **Result:** Each voice glides independently to new notes (unusual, complex movement)
- **Use case:** Evolving pad textures, morphing chords
- **Note:** Glide Legato less predictable in Poly mode (each voice has independent legato state)

---

**Voice Allocation and Stealing:**

**Understanding Voice Stealing:**
- Hydrasynth has 8 voices (or fewer when Unison active)
- When polyphony exceeded (playing 9th note with 8 voices), one voice must be stolen
- **Steal parameter** determines which voice is replaced

**Steal Mode Comparison:**

**Oldest (Default, most common):**
- Longest-held note stolen first
- **Pro:** Maintains most recent playing (what you just played stays)
- **Con:** Sustained bass note or pad can be stolen unexpectedly
- **Best for:** Lead playing, fast passages where recent notes matter most

**Newest:**
- Most recently played note stolen
- **Pro:** Maintains earliest notes (held chord stays intact)
- **Con:** New melody notes may not sound if polyphony exceeded
- **Best for:** Sustaining bass/pad while playing melody over top

**Quietest:**
- Lowest-amplitude voice stolen (considers envelope position)
- **Pro:** Least perceptible voice loss
- **Con:** Unpredictable which note stolen (depends on envelope/VCA levels)
- **Best for:** Dense polyphonic passages where stealing should be transparent

**Off:**
- No voice stealing (polyphony limit hard stop)
- 9th note triggers nothing
- **Pro:** Predictable behavior, no unexpected note loss
- **Con:** Additional notes simply ignored
- **Best for:** Controlled playing where exceeding polyphony is mistake to avoid

---

**Analog Feel Randomization:**

**What Analog Feel Affects:**
- **Oscillator pitch:** Slight random drift per voice (vintage VCO instability)
- **Filter cutoff:** Subtle randomization per voice (component tolerance)
- **Envelope timing:** Minor variations in Attack/Decay times (capacitor variance)

**AnalogFL Settings:**
- **0-20:** Minimal drift (mostly digital precision)
- **21-50:** Subtle analog character (vintage synth warmth)
- **51-80:** Noticeable drift (obvious vintage character)
- **81-127:** Extreme drift (can sound detuned/out-of-time)

**Use cases:**
- **Pads:** Moderate AnalogFL (40-60) adds movement, prevents static sound
- **Leads:** Low AnalogFL (15-30) adds warmth without pitchiness
- **Bass:** Very low AnalogFL (5-15) maintains punch, slight variation
- **Evolving textures:** High AnalogFL (70-100) creates organic, unstable timbres

**Caution with AnalogFL:**
- High values can cause tuning issues (especially with Unison detuning)
- May conflict with precise melodic content
- Start low, increase gradually until character achieved

---

### Alternative Tuning Systems and Scales

The Hydrasynth supports microtuning and alternative temperaments, enabling exploration beyond standard 12-tone equal temperament (12-TET). This opens access to historical tunings, world music scales, and experimental microtonal compositions.

**Access Tuning Settings:** Press **[SYSTEM]** → Page to System Setup page 8 → Tuning section

**Tuning Parameters:**

- **Scale:** Equal Temperament (12-TET default), Just Intonation, Pythagorean, Meantone, Werckmeister III, + 20 additional scales
  - **Equal Temperament (12-TET):** Standard Western tuning (divide octave into 12 equal steps)
  - **Just Intonation:** Pure intervals based on simple ratios (3:2 perfect fifth, 5:4 major third)
  - **Pythagorean:** Based on perfect fifths (3:2 ratio), pure fifths but sharp thirds
  - **Meantone:** Historical temperament (compromised tuning for Renaissance music)
  - **Werckmeister III:** Well temperament (unequal intervals, good for all keys with distinct characters)
  - **Additional scales:** Include Middle Eastern maqams, Indian ragas, blues scales, whole tone, pentatonic variants

- **Root Note:** C, C#, D, D#, E, F, F#, G, G#, A, A#, B
  - Determines which note is the tuning reference (1/1 ratio)
  - **Matters for non-equal temperaments** where different keys have distinct interval relationships
  - **Example:** Just Intonation in C sounds pure for C major, less pure for F# major

- **Reference Frequency:** 400.0-480.0 Hz (default 440.0 Hz)
  - Frequency of A4 ("concert pitch")
  - Standard: 440 Hz
  - Historical: 415 Hz (Baroque), 432 Hz (alternative tuning)
  - **Affects global tuning** - all notes shift proportionally

**User Scales (Custom Microtuning):**
- Press Control button 8 on Tuning page to access User Scale editor
- Program custom scale with 12 pitch values (one per chromatic step)
- Each pitch: -64 to +64 cents (±64 cents = ±0.64 semitones)
- **Example custom scale:** 0, 10, 0, 15, 0, -5, 0, 5, 0, 20, 0, -10 (detuned equal temperament)
- Up to 20 User Scales can be stored

---

**Alternative Tuning System Examples:**

**Just Intonation for Chordal Music:**
- Scale: Just Intonation
- Root Note: C (or key of your music)
- Reference Frequency: 440 Hz
- **Result:** Major and minor triads sound exceptionally pure and resonant in root key
- **Limitation:** Chords in distant keys sound more dissonant (deliberate character of Just Intonation)
- **Use case:** Modal music, Renaissance-style polyphony, pure harmonic exploration

**Historical Baroque Tuning:**
- Scale: Werckmeister III
- Root Note: C
- Reference Frequency: 415 Hz (Baroque pitch)
- **Result:** Well-tempered tuning with distinct key characters, lower overall pitch
- **Use case:** Period-accurate classical synthesis, historical music recreation

**Pythagorean for Melody:**
- Scale: Pythagorean
- Root Note: D
- Reference Frequency: 440 Hz  
- **Result:** Pure perfect fifths, great for modal melodies and drone-based music
- **Limitation:** Major thirds are sharp compared to Just Intonation or Equal Temperament
- **Use case:** Medieval-style drones, modal lead lines, ethnic music emulation

**Blues/Microtonal Exploration:**
- Scale: User Scale (custom)
- Program "blue notes": C=0, Db=0, D=0, Eb=-15 (flattened), E=0, F=0, F#=0, G=0, Ab=0, A=0, Bb=-10 (flattened), B=0
- **Result:** Flattened thirds and sevenths create blues-inflected scale
- **Use case:** Blues lead playing, microtonal pitch bends approximated in scale

**Quarter-Tone Scale (24-TET):**
- Scale: User Scale (custom)
- Program quarter tones: C=0, C#=50 (quarter-tone up), D=0, D#=50, E=0, F=0, F#=50, G=0, G#=50, A=0, A#=50, B=0
- **Result:** 24 equal divisions per octave (chromatic scale includes quarter-tones)
- **Use case:** Middle Eastern maqam emulation, microtonal composition

---

**Practical Considerations for Alternative Tunings:**

**Preset-Based Tuning:**
- Tuning settings are **global** (affect all patches)
- To use different tunings with different patches, change tuning setting when loading patch
- Consider documenting which patches were designed for specific tunings

**Equal Temperament Compromise:**
- 12-TET is compromise tuning (no intervals perfectly pure)
- Slight "beating" between intervals is characteristic of standard tuning
- Historical/Just tunings eliminate beating for certain intervals, add it to others

**Key-Specific Tunings:**
- Non-equal temperaments (Just, Pythagorean, Meantone) sound best in specific keys
- **Root Note parameter** determines which key is "home" with purest intervals
- Playing in distant keys may sound dissonant (this is feature, not bug - distinct key colors)

**Reference Frequency Impact:**
- Changing reference frequency shifts entire pitch spectrum
- **432 Hz tuning:** Lower, allegedly "more relaxing" (controversial claim)
- **415 Hz (Baroque):** Historically accurate for pre-1800s music
- **Other frequencies:** Explore for tonal color (subtle but perceptible differences)

---

### Wheels and Pedals

The Hydrasynth provides standard pitch and modulation wheels plus inputs for expression pedal and sustain pedal. These controllers integrate with the modulation system for real-time performance control.

**Pitch Wheel:**
- **Pre-wired:** Controls pitch bend for all oscillators
- **Range:** Set via PitchBnd parameter in Voice module (0-24 semitones)
- **Spring-loaded:** Returns to center when released
- **Mod Matrix:** Can route PitchWhl source to additional destinations beyond pitch

**Modulation Wheel:**
- **Pre-wired:** Controls vibrato depth (Vib Amt parameter determines maximum depth)
- **Vibrato speed:** Set via Vib Rate parameter in Voice module
- **Stays in position:** Does not return to zero when released
- **Mod Matrix:** Can route ModWhl source to additional destinations (filter, effects, etc.)

**Expression Pedal Input (rear panel):**
- **Standard 1/4" TRS jack**
- **Polarity:** Configurable in System Setup (Tip or Ring active)
- **Mod Matrix source:** ExpPedal (0-127 continuous controller)
- **Common uses:**
  - Volume swells (route to Amp Level)
  - Filter sweeps (route to Filter Cutoff)
  - Effects mix (route to Reverb/Delay mix)
  - Multi-parameter control via Macro (assign ExpPedal → Macro, Macro controls 8 parameters)

**Sustain Pedal Input (rear panel):**
- **Standard 1/4" TS or TRS jack**
- **Polarity:** Configurable in System Setup (Normally Open or Normally Closed)
- **Function:** Standard sustain (holds notes after key release)
- **Mod Matrix source:** SusPedal (on/off switch, can trigger envelopes or modulate parameters)
- **Half-damper support:** TRS pedals with continuous control recognized as 0-127 value

**Configuring Pedal Polarity (System Setup page 9):**
1. Connect pedal to appropriate rear-panel jack
2. Press **[SYSTEM]** → Page to System Setup page 9
3. Locate pedal polarity setting
4. If pedal behavior inverted (sustain when released, off when pressed), change polarity setting
5. Test: Press pedal, verify expected behavior

---

## Session 3 Complete - Performance Features Established

**What Session 3 Added:**
- Ribbon controller (3 modes: Absolute, Relative, XY Mod) with detailed operation and performance techniques
- Polyphonic aftertouch integration and routing strategies (per-note expression capabilities)
- Complete arpeggiator documentation (8 modes, phrase library, ratcheting, velocity sequencing)
- Voice management (unison modes with detuning/spread, analog feel, glide/portamento, voice allocation/stealing)
- Alternative tuning systems and scales (microtuning, historical temperaments, user scale programming)
- Wheels and pedals integration (pitch wheel, mod wheel, expression pedal, sustain pedal)

**Foundation Complete (Sessions 1-3):**
- ✅ Synthesis engine (oscillators, mutants, mixer, filters)
- ✅ Modulation system (envelopes, LFOs, Mod Matrix, Macros)
- ✅ Performance features (ribbon, aftertouch, arpeggiator, voice management, tuning, controllers)

**Coming in Session 4:**
- CV/Gate/Clock integration workflows with Eurorack systems
- Bidirectional CV modulation (Hydrasynth→modular and modular→Hydrasynth)
- Clock sync strategies (MIDI, USB, CV clock standards)
- Eurorack system hub techniques
- Voltage standard configuration (V/Oct, Hz/V, Buchla standards)

**Coming in Session 5:**
- Effects section (Pre-FX, Delay, Reverb, Post-FX)
- All available effects types and parameters
- Effects routing strategies
- System setup and calibration (ribbon, wheels, CV voltage standards)
- Troubleshooting and maintenance
- MIDI/USB configuration

**Coming in Session 6:**
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert)
- Complete programming tutorials with step-by-step instructions
- Alternative synthesizer options (budget/different character/premium tiers)
- Pairs Well With (complementary gear)
- Historical context and synthesis innovations

---

*ASM Hydrasynth Keyboard - Session 3 of 6 - Performance Features Complete*

---

## CV/Gate/Clock Integration

The Hydrasynth Keyboard provides comprehensive CV/Gate/Clock connectivity for integration with Eurorack modular systems, enabling the Hydrasynth to function as both a controller and sound source within modular workflows. Seven 3.5mm jacks on the rear panel support bidirectional CV modulation, pitch/gate control, and clock synchronization across multiple voltage standards.

**Physical Interface Overview:**

**Rear Panel CV/Gate Jacks (3.5mm TS):**
- **Pitch Out:** Sends keyboard pitch as control voltage to external oscillators
- **Gate Out:** Sends gate/trigger signals when notes played
- **Mod Out 1:** Sends any Mod Matrix source as CV (user-assignable)
- **Mod Out 2:** Sends any Mod Matrix source as CV (user-assignable)
- **Clock Out:** Sends tempo clock to sync external sequencers/devices
- **Mod In 1:** Receives CV for modulation (Mod Matrix source)
- **Mod In 2:** Receives CV for modulation (Mod Matrix source)

**Key Capabilities:**
- **Bidirectional modulation:** Send modulation to modular (Mod Out 1/2), receive modulation from modular (Mod In 1/2)
- **Multiple voltage standards:** V/Oct (0-10V or ±5V), Hz/V, Buchla 1.2V/Oct
- **Flexible gate standards:** V-trig or S-trig, 3V/5V/10V output levels
- **Per-patch CV configuration:** Each patch can use different voltage standards
- **Clock sync:** Variable analog clock, MIDI clock, USB clock

---

### CV Outputs

The five CV output jacks convert Hydrasynth performance data into control voltages for external modular equipment. Each output serves a specific function, though Mod Out 1 and Mod Out 2 are user-assignable via System Setup.

**Access CV Output Settings:** Press **[SYSTEM]** → Page to System Setup page 7 → CV-Pitch Gate section

---

**Pitch Out:**

Sends keyboard pitch as control voltage to external oscillators.

**Voltage Standard Configuration (System Setup Page 7):**

- **Control Voltage Range:** Octave 0-10V, -/+5V, Hz 0-10V, Octave 1.2V
  - **Octave 0-10V:** 1 volt per octave, 0-10V range (Eurorack standard, positive voltages only)
  - **-/+5V:** 1 volt per octave, ±5V range (bipolar, allows negative voltages for sub-bass)
  - **Hz 0-10V:** Hertz per volt (Buchla/Serge standard, exponential response)
  - **Octave 1.2V:** 1.2 volts per octave (Buchla standard)
  
- **Reference Note:** C-1 to G9
  - Sets which keyboard note corresponds to reference voltage
  - **V/Oct:** Reference Note = lowest note in voltage range (e.g., C2 = 2V in 0-10V range)
  - **Hz/V:** Reference Note = 1V reference frequency
  - **Common setting:** C3 or C4 for middle-C reference

- **Control Voltage Offset:** -99 cents to +99 cents
  - Fine-tune CV output for calibration with external oscillators
  - **Use case:** Compensate for slight pitch drift in analog oscillators
  - **Calibration:** Play reference note (e.g., A4), tune external oscillator to 440Hz, adjust offset if needed

- **Control Voltage Source:** Keyboard, Theremin
  - **Keyboard:** Pitch CV follows keyboard playing (standard)
  - **Theremin:** Pitch CV follows ribbon controller position in Relative mode
  - **Use case:** Theremin mode enables ribbon controller to control external oscillator pitch

**Pitch Out Workflows:**

**Workflow 1 - External Oscillator (Replace Internal Oscillators):**
1. **Hydrasynth:** Turn all internal OSC 1-3 volumes to 0 (Mixer module)
2. **Cable:** Pitch Out → External oscillator 1V/Oct input
3. **Cable:** Gate Out → External oscillator gate/trigger input
4. **Cable:** External oscillator audio out → Hydrasynth audio input (or mixer)
5. **System Setup:** Octave 0-10V, Reference Note = C2
6. **Result:** Keyboard plays external oscillator, Hydrasynth envelopes/filters can process external audio if routed through audio inputs

**Workflow 2 - Hybrid Voice (Internal + External Oscillators):**
1. **Hydrasynth:** OSC 1 and OSC 2 active with moderate volume
2. **Cable:** Pitch Out → External oscillator CV input
3. **Cable:** Gate Out → External oscillator gate input
4. **Cable:** External oscillator audio out → Mixer (same channel as Hydrasynth)
5. **Result:** External oscillator plays in unison with Hydrasynth oscillators, thickens sound

**Workflow 3 - Melody to Modular Sequencer:**
1. **Hydrasynth:** Play melody/chord progression on keyboard
2. **Cable:** Pitch Out → Eurorack quantizer or sample & hold input
3. **Cable:** Gate Out → Eurorack sequencer clock or trigger input
4. **External sequencer:** Captures pitch/rhythm, plays back melodic sequence
5. **Result:** Transfer melody ideas from keyboard to modular sequencer for further processing

---

**Gate Out:**

Sends gate/trigger signals when notes are played to control external envelopes, VCAs, or sequencer triggers.

**Gate Configuration (System Setup Page 7):**

- **Gate Type:** V-trig, S-trig
  - **V-trig (Voltage trigger):** Gate high = note on, gate low = note off (Eurorack standard)
  - **S-trig (Short trigger):** Inverted logic, gate low = note on (vintage Moog/Korg standard)
  - **Most modern modular:** Use V-trig
  
- **Gate Volt:** 3V, 5V, 10V (gate output voltage level)
  - **3V:** Lower level (some vintage equipment)
  - **5V:** Common Eurorack standard
  - **10V:** Higher level (Buchla, some Serge modules)
  - **Most modern modular:** Use 5V

**Gate Out Behavior:**
- **Polyphonic:** Gate Out follows highest note played (priority = High in mono terms)
- **Note duration:** Gate stays high while key held, goes low on release
- **Retriggering:** New note triggers new gate pulse even if previous note still held

**Gate Out Workflows:**

**Workflow 1 - Trigger External Envelope:**
1. **Cable:** Gate Out → External envelope generator gate input
2. **Cable:** Envelope output → External VCA CV input
3. **System Setup:** Gate Type = V-trig, Gate Volt = 5V
4. **Result:** Keyboard notes trigger external envelope, shapes amplitude of external audio source

**Workflow 2 - Clock Eurorack Sequencer:**
1. **Cable:** Gate Out → Eurorack sequencer clock/trigger input
2. **Hydrasynth:** Play rhythmic pattern on keyboard (e.g., sixteenth notes)
3. **External sequencer:** Advances one step per gate pulse
4. **Result:** Keyboard playing tempo controls sequencer speed, manual clock source

**Workflow 3 - Trigger Drum Modules:**
1. **Cable:** Gate Out → Eurorack drum module trigger input
2. **Hydrasynth:** Play keys to trigger drum sounds
3. **Result:** Hydrasynth keyboard becomes trigger source for modular percussion

---

**Mod Out 1 & Mod Out 2:**

User-assignable CV outputs that can send any Mod Matrix source to external modular equipment.

**Configuration:** Press **[SYSTEM]** → Page to System Setup page 8 → CV Mod Out section

**Available Sources (send these to modular):**
- Envelopes: ENV 1-5
- LFOs: LFO 1-5, LFO 1-5+ (unipolar variants)
- Performance: Mod Wheel, Pitch Wheel, Ribbon (Abs/Abs+/Rel), Aftertouch (Poly/Mono), Velocity, Keytrack
- Pedals: Expression Pedal, Sustain Pedal
- Mod Matrix: Any Mod Matrix slot depth (send modulation amount as CV)
- Macros: Macro 1-8 positions
- MIDI: Any MIDI CC value

**Voltage Range Configuration:**
- **Mod Out 1:** Independent voltage range (0-5V, 0-10V, ±5V, ±10V)
- **Mod Out 2:** Independent voltage range (separate from Mod Out 1)
- **Unipolar sources (0-127):** Map to unipolar voltage ranges (0-5V, 0-10V)
- **Bipolar sources (-64 to +64):** Map to bipolar voltage ranges (±5V, ±10V)

**Mod Out Workflows:**

**Workflow 1 - LFO to External Filter:**
1. **System Setup:** Mod Out 1 Source = LFO 3, Voltage Range = 0-5V
2. **Cable:** Mod Out 1 → External filter cutoff CV input
3. **LFO 3 settings:** Wave = Sine, Rate = 0.3 Hz, Level = 128
4. **Result:** LFO 3 modulates external filter cutoff, synchronized with internal modulation

**Workflow 2 - Envelope to External VCA:**
1. **System Setup:** Mod Out 2 Source = ENV 2, Voltage Range = 0-10V
2. **Cable:** Mod Out 2 → External VCA CV input
3. **Cable:** Gate Out → External envelope trigger (if needed)
4. **Result:** Hydrasynth's amplitude envelope controls external VCA, synced envelope shaping

**Workflow 3 - Ribbon Controller to Modular:**
1. **System Setup:** Mod Out 1 Source = Ribbon Abs+, Voltage Range = 0-10V
2. **Cable:** Mod Out 1 → External oscillator FM input or wavefolder CV
3. **Ribbon mode:** XY Mod (horizontal position becomes CV)
4. **Result:** Ribbon sweeps control external timbre, gestural performance control

**Workflow 4 - Macro to Multiple Modular Parameters:**
1. **Hydrasynth Macro 1:** Assigned to control Filter Cutoff + Reverb Mix + OSC 2 Detune (8 internal destinations)
2. **System Setup:** Mod Out 1 Source = Macro 1, Voltage Range = 0-5V
3. **Cable:** Mod Out 1 → External module CV input (e.g., delay time)
4. **Result:** Macro 1 knob controls 8 internal parameters + 1 external parameter simultaneously, unified macro control

**Workflow 5 - Expression Pedal to Eurorack:**
1. **System Setup:** Mod Out 2 Source = Expression Pedal, Voltage Range = 0-10V
2. **Cable:** Mod Out 2 → Eurorack VCA or mixer CV input
3. **Result:** Expression pedal controls external module levels, foot-controlled dynamics

---

**Clock Out:**

Sends tempo clock pulses to synchronize external sequencers, drum machines, and modular equipment.

**Clock Configuration:** Press **[SYSTEM]** → Page to System Setup page 6 → Clock section

**Clock Source Options:**
- **Internal:** Hydrasynth generates clock based on Tempo parameter
- **MIDI:** Hydrasynth receives MIDI clock, outputs converted to analog clock
- **USB:** Hydrasynth receives USB clock, outputs converted to analog clock

**Clock Rate (PPQN - Pulses Per Quarter Note):**
- **1 PPQN:** One pulse per quarter note (slow, basic sync)
- **2 PPQN:** Two pulses per quarter note
- **4 PPQN:** Four pulses per quarter note (sixteenth note resolution)
- **8 PPQN:** Eight pulses per quarter note (thirty-second note resolution)
- **24 PPQN:** Standard MIDI clock rate (high resolution)
- **48 PPQN:** Double MIDI clock (very high resolution)

**Common PPQN Settings by Device:**
- **Eurorack sequencers:** Typically 4 PPQN or 8 PPQN (check module manual)
- **Drum machines:** Often 24 PPQN (MIDI clock standard)
- **Vintage sequencers:** May require 1 PPQN or 2 PPQN (step-per-pulse)

**Clock Out Workflows:**

**Workflow 1 - Sync Eurorack Sequencer:**
1. **System Setup:** Clock Source = Internal, Clock Rate = 4 PPQN
2. **Hydrasynth:** Set Tempo = 120 BPM
3. **Cable:** Clock Out → Eurorack sequencer clock input
4. **External sequencer:** Set to external clock mode
5. **Result:** Eurorack sequencer advances in sync with Hydrasynth tempo, lockstep synchronization

**Workflow 2 - Master Clock for Modular System:**
1. **System Setup:** Clock Source = Internal, Clock Rate = 8 PPQN
2. **Cable:** Clock Out → Clock multiplier/divider module input
3. **Clock mult/div:** Distribute multiple clock rates to sequencers, envelopes, LFOs
4. **Result:** Hydrasynth becomes master tempo source for entire modular system

**Workflow 3 - Tempo-Sync Modular to DAW:**
1. **DAW:** Send MIDI clock to Hydrasynth via USB
2. **System Setup:** Clock Source = USB, Clock Rate = 24 PPQN
3. **Cable:** Clock Out → Eurorack sequencer clock input
4. **Result:** DAW controls both Hydrasynth and modular tempo simultaneously

**Workflow 4 - Trigger Sample & Hold:**
1. **System Setup:** Clock Rate = 2 PPQN (slow triggers)
2. **Cable:** Clock Out → Sample & Hold trigger input
3. **Cable:** Noise source → Sample & Hold signal input
4. **Cable:** Sample & Hold output → Oscillator pitch CV
5. **Result:** Random pitch changes synchronized to tempo

---

### CV Inputs

The two CV input jacks (Mod In 1 and Mod In 2) receive control voltages from external modular equipment and route them into the Hydrasynth's Mod Matrix as modulation sources. Each input has independent voltage range configuration, enabling diverse modulation sources to control synthesis parameters.

**Access CV Input Settings:** Press **[SYSTEM]** → Page to System Setup page 8 → CV Mod In section

**Mod In 1 & Mod In 2 Configuration:**

- **Voltage Range:** 0-5V, 0-10V, ±5V, ±10V (independent per input)
  - **0-5V:** Unipolar, Eurorack standard (0V = no modulation, 5V = maximum)
  - **0-10V:** Unipolar, extended range (some Buchla/Serge modules)
  - **±5V:** Bipolar, allows negative modulation (LFOs, envelopes with negative output)
  - **±10V:** Bipolar, extended range
  
- **Voltage range determines modulation behavior:**
  - **Unipolar (0-5V, 0-10V):** Incoming CV always adds modulation (positive depth)
  - **Bipolar (±5V, ±10V):** Incoming CV can add or subtract modulation (0V = center, negative voltages reduce parameter)

**Mod In Sources in Mod Matrix:**
- **Mod In 1:** Appears as modulation source in Mod Matrix
- **Mod In 2:** Appears as modulation source in Mod Matrix
- **Can modulate any Mod Matrix destination** (191 destinations available)
- **Multiple routes possible:** Single Mod In source can control multiple parameters simultaneously

**Voltage Range Selection Strategy:**
- **Mod In 1 = 0-5V (unipolar):** Use for envelopes, unipolar LFOs, sequencer CV (always positive modulation)
- **Mod In 2 = ±5V (bipolar):** Use for bipolar LFOs, randomization, modulation that should go negative
- **Match external source:** Check external module output voltage, set Mod In range accordingly

---

**CV Input Workflows:**

**Workflow 1 - Eurorack Envelope to Hydrasynth Filter:**
1. **Cable:** Eurorack envelope output → Mod In 1
2. **System Setup:** Mod In 1 Voltage Range = 0-5V
3. **Mod Matrix:** Mod In 1 → Filter 1 Cutoff (Depth: +80)
4. **External trigger:** Gate Out → Eurorack envelope trigger (or separate trigger source)
5. **Result:** External envelope controls Hydrasynth filter, modular envelope shaping

**Workflow 2 - Eurorack LFO to Hydrasynth Oscillator Pitch:**
1. **Cable:** Eurorack LFO output → Mod In 2
2. **System Setup:** Mod In 2 Voltage Range = ±5V (bipolar LFO)
3. **Mod Matrix:** Mod In 2 → OSC 1 Pitch (Depth: +20, subtle vibrato)
4. **External LFO:** Sine wave, ~4 Hz
5. **Result:** Eurorack LFO creates vibrato on Hydrasynth oscillators

**Workflow 3 - Eurorack Sequencer to WaveScan Position:**
1. **Cable:** Eurorack sequencer CV output → Mod In 1
2. **System Setup:** Mod In 1 Voltage Range = 0-10V
3. **Mod Matrix:** Mod In 1 → OSC 1 WaveScan (Depth: +96, wide morphing range)
4. **OSC 1:** WaveScan mode with 8-position wavelist
5. **Result:** External sequencer CV morphs through wavetable, sequenced timbral changes

**Workflow 4 - Eurorack Random Voltage to Multiple Parameters:**
1. **Cable:** Eurorack random/noise source → Mod In 2
2. **System Setup:** Mod In 2 Voltage Range = ±5V
3. **Mod Matrix Route 1:** Mod In 2 → Filter 1 Cutoff (Depth: +40)
4. **Mod Matrix Route 2:** Mod In 2 → Mutant 1 Ratio (Depth: +30)
5. **Mod Matrix Route 3:** Mod In 2 → Pan (Depth: +50)
6. **Result:** Single random source modulates filter, waveshaping, and stereo position simultaneously

**Workflow 5 - Eurorack Pressure/Touch to Polyphonic Aftertouch Simulation:**
1. **Cable:** Eurorack pressure sensor/ribbon output → Mod In 1
2. **System Setup:** Mod In 1 Voltage Range = 0-5V
3. **Mod Matrix:** Mod In 1 → Filter 2 Morph (Depth: +64)
4. **Result:** External pressure control affects filter character, alternative expression source

**Workflow 6 - Bidirectional Cross-Modulation:**
1. **Hydrasynth → Modular:** Mod Out 1 (ENV 3) → Eurorack VCA CV
2. **Modular → Hydrasynth:** Eurorack LFO → Mod In 1 → Hydrasynth Filter Cutoff
3. **Result:** Hydrasynth envelope controls modular amplitude, modular LFO controls Hydrasynth timbre (bidirectional influence)

---

### Voltage Standard Configuration

The Hydrasynth supports multiple voltage standards for CV/Gate communication, enabling compatibility with Eurorack (V/Oct), Buchla (Hz/V, 1.2V/Oct), vintage synthesizers (S-trig), and custom voltage ranges. Voltage standards are configured per-patch, allowing different patches to interface with different modular equipment.

**Access Voltage Standards:** Press **[SYSTEM]** → Page to System Setup page 7 (Pitch/Gate) and page 8 (Mod In/Out)

---

**Pitch CV Standards (System Setup Page 7):**

**Standard 1: Octave 0-10V (Eurorack V/Oct, Positive Only)**
- **Voltage per octave:** 1 volt
- **Range:** 0-10V (10-octave span)
- **Zero point:** 0V
- **Use case:** Standard Eurorack, most modern modular synthesizers
- **Example:** C2 = 2V, C3 = 3V, C4 = 4V, etc.

**Standard 2: -/+5V (Eurorack V/Oct, Bipolar)**
- **Voltage per octave:** 1 volt
- **Range:** -5V to +5V (10-octave span)
- **Zero point:** 0V (typically C3 or C4)
- **Use case:** Systems requiring negative voltages for sub-bass range
- **Example:** C1 = -2V, C3 = 0V, C5 = +2V

**Standard 3: Hz 0-10V (Buchla/Serge Hz/V)**
- **Response:** Hertz per volt (linear frequency, not exponential like V/Oct)
- **Range:** 0-10V
- **Characteristic:** Exponential relationship (higher voltages = exponentially higher frequencies)
- **Use case:** Buchla, Serge, and other West Coast modular systems
- **Reference Note:** Sets 1V frequency reference

**Standard 4: Octave 1.2V (Buchla 1.2V/Oct)**
- **Voltage per octave:** 1.2 volts
- **Range:** ~12 octaves in 0-14.4V span
- **Use case:** Buchla systems (different from standard 1V/Oct)
- **Example:** C2 = 2.4V, C3 = 3.6V, C4 = 4.8V

**Voltage Standard Selection:**
1. Identify external oscillator voltage standard (check module manual)
2. Set Hydrasynth to matching standard (System Setup page 7)
3. Set Reference Note (typically C2, C3, or C4)
4. Calibrate using CV Offset if needed (±99 cents fine-tuning)

**Multi-Standard Workflow:**
- **Patch 1:** Eurorack (Octave 0-10V) for modern modular
- **Patch 2:** Buchla (Hz 0-10V) for West Coast system
- **Patch 3:** Vintage (Octave 1.2V) for Buchla 200 series
- **Switch patches** = switch voltage standards instantly

---

**Gate Standards (System Setup Page 7):**

**V-trig (Voltage Trigger) - Modern Standard:**
- **Logic:** High voltage = note on, Low voltage = note off
- **Voltage levels:** 3V, 5V, or 10V (user-selectable)
- **Use case:** Eurorack, modern modular synthesizers (most common)
- **Compatibility:** Virtually all modern modules

**S-trig (Short Trigger) - Vintage Standard:**
- **Logic:** Low voltage = note on, High voltage = note off (inverted from V-trig)
- **Use case:** Vintage Moog, Korg, ARP synthesizers
- **Compatibility:** Older equipment expecting ground/short trigger

**Gate Voltage Selection:**
- **3V:** Some vintage equipment, lower voltage modules
- **5V:** Standard Eurorack (most common, recommended default)
- **10V:** Buchla, some Serge modules, vintage equipment

**Gate Configuration Strategy:**
1. Check external module trigger input requirements (manual or online specs)
2. Set Gate Type (V-trig for modern, S-trig for vintage)
3. Set Gate Volt (5V default, adjust if module requires different level)
4. Test: Play note on Hydrasynth, verify external envelope/VCA triggers correctly

---

**Mod In/Out Voltage Ranges (System Setup Page 8):**

**0-5V (Unipolar, Eurorack Standard):**
- **Range:** 0V = minimum, 5V = maximum
- **Use case:** Most Eurorack envelopes, unipolar LFOs, sequencer CV
- **Modulation behavior:** Always positive (adds to parameter value)

**0-10V (Unipolar, Extended Range):**
- **Range:** 0V = minimum, 10V = maximum
- **Use case:** Buchla, Serge, modules with extended voltage ranges
- **Modulation behavior:** Always positive, wider range than 0-5V

**±5V (Bipolar, Standard):**
- **Range:** -5V to +5V, 0V = center/neutral
- **Use case:** Bipolar LFOs, modulation sources that go negative
- **Modulation behavior:** Negative voltages reduce parameter, positive voltages increase

**±10V (Bipolar, Extended Range):**
- **Range:** -10V to +10V, 0V = center/neutral
- **Use case:** Extended bipolar modulation
- **Modulation behavior:** Same as ±5V but wider range

**Voltage Range Matching:**
- **Mod Out:** Set to match receiving module's CV input range
- **Mod In:** Set to match sending module's CV output range
- **Example:** Eurorack LFO outputs 0-5V → Set Mod In = 0-5V
- **Example:** Buchla function generator outputs ±10V → Set Mod In = ±10V

---

### Eurorack System Hub Techniques

The Hydrasynth can function as the central controller, sound source, or modulation hub within a Eurorack system, leveraging its keyboard, polyphonic aftertouch, modulation system, and CV/Gate outputs to expand modular capabilities.

**Hub Technique 1: Keyboard + Modulation Brain**

**Configuration:**
- **Pitch Out + Gate Out** → Multiple Eurorack voices (use buffered mult or stackcables)
- **Mod Out 1** → Envelope 1 output → Distribute to multiple VCA CV inputs
- **Mod Out 2** → LFO 1 output → Distribute to multiple filter CV inputs
- **Mod In 1** → Eurorack random source → Hydrasynth Mutant depth modulation
- **Clock Out** → Eurorack sequencer → Synchronized rhythm generation

**Result:** Hydrasynth provides keyboard control, envelopes, LFOs, and clock for entire modular system while remaining playable as synthesizer

**Hub Technique 2: Polyphonic Aftertouch for Modular**

**Configuration:**
- **Mod Matrix:** PolyAftT → ModOut 1 (Depth: +127)
- **System Setup:** Mod Out 1 Voltage Range = 0-5V
- **Cable:** Mod Out 1 → Eurorack VCA or filter CV input
- **Pitch/Gate:** Control modular voice from keyboard

**Result:** Polyphonic aftertouch (per-note pressure) controls modular VCA or filter, bringing polyphonic expression to monophonic modular

**Limitation:** Mod Out sends highest pressed key's aftertouch value (priority = High), not truly polyphonic to modular, but enables per-note expression on lead lines

**Hub Technique 3: Macro-Controlled Modular Ecosystem**

**Configuration:**
- **Hydrasynth Macro 1:** Controls 8 internal parameters (Filter, Mutant, Reverb, etc.)
- **Mod Out 1 Source:** Macro 1 position
- **Cable:** Mod Out 1 → Eurorack VCA CV input
- **Mod Out 2 Source:** Macro 2 position
- **Cable:** Mod Out 2 → Eurorack delay time CV input

**Result:** Macro knobs control internal Hydrasynth parameters + external modular parameters simultaneously, unified performance control

**Hub Technique 4: Bidirectional Modulation Complex**

**Configuration:**
- **Hydrasynth → Modular:**
  - ENV 3 → Mod Out 1 → Eurorack wavefolder CV
  - LFO 4 → Mod Out 2 → Eurorack VCA CV
- **Modular → Hydrasynth:**
  - Eurorack envelope → Mod In 1 → Hydrasynth Filter 2 Morph
  - Eurorack LFO → Mod In 2 → Hydrasynth WaveScan position

**Result:** Hydrasynth and modular modulate each other, creating complex interdependent timbral evolution

**Hub Technique 5: Master Clock + Sub-Clocks**

**Configuration:**
- **Clock Out** → Clock multiplier/divider module input
- **Clock mult output 1** (×4) → Fast sequencer clock
- **Clock mult output 2** (÷2) → Slow LFO reset
- **Clock mult output 3** (÷4) → Sample & Hold trigger

**Result:** Single Hydrasynth tempo generates multiple synchronized clock rates for complex polyrhythmic modular patches

**Hub Technique 6: Alternate Tuning for Modular**

**Configuration:**
- **Hydrasynth:** Select alternative tuning (Just Intonation, Pythagorean, quarter-tone, etc.)
- **Pitch Out** → Eurorack oscillator 1V/Oct input
- **Gate Out** → Eurorack envelope trigger

**Result:** Microtonal/historical temperaments applied to modular oscillators, enables non-12TET modular playing without quantizer programming

**Hub Technique 7: Modular as Hydrasynth External Processing**

**Configuration:**
- **Hydrasynth audio out** → Eurorack filter/distortion/effect input
- **Mod Out 1** (LFO 1) → Eurorack filter cutoff CV
- **Mod Out 2** (ENV 1) → Eurorack VCA CV
- **Eurorack effect output** → Mixer/audio interface

**Result:** Hydrasynth synth voice processed through external modular effects, with synchronized modulation from Hydrasynth LFOs/envelopes

---

### Clock Sync Strategies

The Hydrasynth supports three clock synchronization methods: Internal (Hydrasynth generates tempo), MIDI Clock (external MIDI clock received), and USB Clock (DAW/computer clock received). Clock Out jack converts selected clock source to analog pulses for Eurorack synchronization.

**Access Clock Settings:** Press **[SYSTEM]** → Page to System Setup page 6 → Clock section

---

**Strategy 1: Hydrasynth as Master Clock (Internal)**

**Configuration:**
- **System Setup:** Clock Source = Internal
- **Tempo:** Set desired BPM (e.g., 120 BPM)
- **Clock Rate:** Set PPQN based on receiving device (typically 4 or 8 PPQN for Eurorack)
- **Cable:** Clock Out → Eurorack sequencer/device clock input

**Use case:** Standalone performance, Hydrasynth controls tempo for entire system

**Advantages:**
- Simple setup, no external clock needed
- Tempo knob on Hydrasynth controls everything
- Arpeggiator, LFOs, and Eurorack all synchronized

**Disadvantages:**
- Changing tempo requires pressing Tempo button on Hydrasynth
- No DAW integration for recording

---

**Strategy 2: MIDI Clock from External Sequencer**

**Configuration:**
- **External:** MIDI sequencer or drum machine sends MIDI clock via 5-pin MIDI
- **Cable:** External MIDI Out → Hydrasynth MIDI In
- **System Setup:** Clock Source = MIDI
- **Clock Rate:** Set PPQN for Clock Out (converted from MIDI clock)
- **Cable:** Clock Out → Eurorack device clock input

**Use case:** External hardware sequencer controls tempo for Hydrasynth + modular

**Advantages:**
- External sequencer sets tempo
- Hydrasynth arpeggiator syncs to external tempo
- Clock Out provides analog clock for Eurorack from MIDI source

**Disadvantages:**
- Requires external MIDI clock source
- MIDI clock can have jitter (less stable than internal)

---

**Strategy 3: USB Clock from DAW (Most Common for Recording)**

**Configuration:**
- **Cable:** USB cable from computer to Hydrasynth
- **DAW:** Enable MIDI clock output to Hydrasynth
- **System Setup:** Clock Source = USB
- **Clock Rate:** Set PPQN for Clock Out
- **Cable:** Clock Out → Eurorack device clock input

**Use case:** Recording Hydrasynth + modular synchronized to DAW project tempo

**Advantages:**
- Perfect sync with DAW for multitrack recording
- Tempo changes in DAW affect Hydrasynth and modular
- Clock Out provides analog clock derived from DAW tempo

**Disadvantages:**
- Requires computer/DAW connection
- USB clock can have latency (typically minimal)

---

**Strategy 4: Hybrid - MIDI In, Clock Out to Modular**

**Configuration:**
- **DAW** → MIDI clock via USB → Hydrasynth
- **Hydrasynth** → Clock Out → Eurorack sequencer
- **Hydrasynth** → Pitch/Gate Out → Eurorack voice
- **Eurorack sequencer** → CV → Different Eurorack voice

**Result:** DAW controls tempo, Hydrasynth plays one voice, Eurorack sequencer plays another voice, everything synchronized

**Use case:** Complex arrangements with DAW, Hydrasynth, and modular all playing different parts in sync

---

**PPQN Selection Guide:**

**1 PPQN (1 pulse per quarter note):**
- **Use case:** Basic step sequencers (one step = one quarter note)
- **Resolution:** Low, suitable for slow sequences

**4 PPQN (4 pulses per quarter note):**
- **Use case:** Most Eurorack sequencers (sixteenth note resolution)
- **Resolution:** Standard for typical modular sequencing
- **Recommended:** Default for Eurorack systems

**8 PPQN (8 pulses per quarter note):**
- **Use case:** Higher resolution sequences (thirty-second note resolution)
- **Resolution:** Good for fast sequences or ratcheting effects

**24 PPQN (MIDI clock standard):**
- **Use case:** MIDI-to-CV converters expecting MIDI clock rate
- **Resolution:** Very high, matches MIDI specification
- **Use case:** Precise synchronization with MIDI-compatible Eurorack modules

**48 PPQN:**
- **Use case:** Ultra-high resolution, rarely needed
- **Resolution:** Extremely precise timing

**Testing Clock Sync:**
1. Set Clock Rate to 4 PPQN (start conservative)
2. Set Tempo to 120 BPM
3. Connect Clock Out to external device
4. Verify external device advances correctly (4 pulses = 1 quarter note)
5. If too fast/slow, adjust PPQN (increase PPQN = faster pulses, decrease = slower pulses)

---

## Session 4 Complete - CV/Gate/Clock Integration Established

**What Session 4 Added:**
- Complete CV/Gate/Clock physical interface overview (7 jacks, 3.5mm TS)
- CV Outputs (Pitch, Gate, Mod Out 1/2, Clock Out) with voltage standards and workflows
- CV Inputs (Mod In 1/2) with Mod Matrix integration and practical routing examples
- Voltage standard configuration (V/Oct, Hz/V, Buchla, S-trig, gate voltages)
- Bidirectional CV workflows (Hydrasynth→modular and modular→Hydrasynth)
- Eurorack system hub techniques (7 practical integration methods)
- Clock sync strategies (Internal, MIDI, USB) with PPQN selection guide
- 15+ practical workflow examples throughout (not just specs)

**Foundation Complete (Sessions 1-4):**
- ✅ Synthesis engine (oscillators, mutants, mixer, filters)
- ✅ Modulation system (envelopes, LFOs, Mod Matrix, Macros)
- ✅ Performance features (ribbon, aftertouch, arpeggiator, voice management, tuning, controllers)
- ✅ CV/Gate/Clock integration (modular connectivity, voltage standards, system hub techniques)

**Coming in Session 5:**
- Effects section (Pre-FX, Delay, Reverb, Post-FX)
- All available effects types and parameters
- Effects routing strategies
- System setup and calibration (ribbon, wheels, CV voltage standards)
- Troubleshooting and maintenance
- MIDI/USB configuration

**Coming in Session 6:**
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert → Master)
- Complete programming tutorials with step-by-step instructions
- Alternative synthesizer options (budget/different character/premium tiers)
- Pairs Well With (complementary gear)
- Historical context and synthesis innovations

---

*ASM Hydrasynth Keyboard - Session 4 of 6 - CV/Gate/Clock Integration Complete*

---

## Effects Section

The Hydrasynth provides four effects modules in series: Pre-FX → Delay → Reverb → Post-FX. This routing enables both subtle enhancement and dramatic transformation of the synthesis engine output. Pre-FX and Post-FX offer nine identical effect types with preset templates, while Delay and Reverb provide dedicated processing with multiple algorithms.

**Signal Flow:**
```
Synthesis Engine (OSC → Mutants → Mixer → Filters → Amp)
    ↓
Pre-FX (9 types: Chorus, Flanger, Rotary, Phaser, Lo-Fi, Tremolo, EQ, Compressor, Distort)
    ↓
Delay (5 types: Basic Mono, Basic Stereo, Pan Delay, LRC Delay, Reverse)
    ↓
Reverb (4 types: Hall, Room, Plate, Cloud)
    ↓
Post-FX (9 types: same as Pre-FX)
    ↓
Master Output
```

**Key Concepts:**
- **Pre-FX placement:** Before delay/reverb, affects dry signal character (e.g., chorus before reverb creates lush pad)
- **Post-FX placement:** After delay/reverb, processes wet signal (e.g., distortion after reverb creates aggressive space)
- **Per-patch settings:** All effects settings save with patch
- **Preset templates:** Each effect type includes starting point presets

---

### Pre-FX and Post-FX

Pre-FX and Post-FX are identical in functionality - both offer the same nine effect types with the same parameters and preset templates. Their only difference is signal path position: Pre-FX processes before Delay/Reverb, Post-FX processes after.

**Access Pre-FX:** Press **[PRE-FX]** button → Two pages of parameters
**Access Post-FX:** Press **[POST-FX]** button → Two pages of parameters (identical to Pre-FX)

---

**Nine Effect Types:**

**1. Chorus**
- **Function:** Duplicates signal with slight pitch/time modulation for thickness
- **Character:** Lush, ensemble-like doubling effect
- **Common uses:** Thicken single oscillator, add movement to pads, simulate multiple voices
- **Parameters:** Rate (modulation speed), Depth (pitch modulation amount), Mix
- **Typical settings:** Slow rate (0.3-0.8 Hz), moderate depth for subtle doubling

**2. Flanger**
- **Function:** Short delay with feedback and modulated delay time
- **Character:** Jet-like sweeping, metallic resonance
- **Common uses:** Dramatic sweeps, retro synth effects, motion on static sounds
- **Parameters:** Rate (sweep speed), Depth (sweep range), Feedback (resonance intensity), Mix
- **Typical settings:** Moderate feedback (40-60%) for classic flange, high feedback (80%+) for extreme resonance

**3. Rotary**
- **Function:** Leslie speaker cabinet simulation (rotating horn and drum)
- **Character:** Vintage organ-style modulation with Doppler effect
- **Common uses:** Classic keyboard sounds, warm pad movement, retro character
- **Parameters:** Rate (rotation speed - slow/fast), Depth, Drive (cabinet overdrive), Mix
- **Typical settings:** Slow rate for pads, fast rate for dramatic vibrato

**4. Phaser**
- **Function:** All-pass filters create moving notches in frequency spectrum
- **Character:** Swirling, vowel-like sweeps
- **Common uses:** Vintage synth movement, vocal-like filtering, animated pads
- **Parameters:** Rate (sweep speed), Depth (notch movement range), Feedback (resonance), Stages (number of notches), Mix
- **Typical settings:** Low feedback for subtle movement, high feedback (70%+) for resonant sweeps

**5. Lo-Fi**
- **Function:** Bit reduction and sample rate reduction for digital degradation
- **Character:** Gritty, vintage digital, aliasing artifacts
- **Common uses:** Retro video game sounds, aggressive digital distortion, creative degradation
- **Parameters:** Bit Depth (bit reduction amount), Sample Rate (downsampling amount), Mix
- **Typical settings:** Moderate settings (6-8 bit, 8-16kHz) for character without complete destruction

**6. Tremolo**
- **Function:** Amplitude modulation (volume pulsing)
- **Character:** Rhythmic volume changes, helicopter effect at high rates
- **Common uses:** Rhythmic pads, pulsing leads, tempo-synced movement
- **Parameters:** Rate (pulse speed), Depth (modulation intensity), Waveform (sine/triangle/square), Mix
- **Typical settings:** BPM sync On for rhythmic tremolo locked to tempo

**7. EQ**
- **Function:** Three-band equalizer (Low, Mid, High)
- **Character:** Tonal shaping, frequency emphasis/reduction
- **Common uses:** Remove mud, add brightness, shape timbre, compensate for other effects
- **Parameters:** Low Freq/Gain, Mid Freq/Gain/Q, High Freq/Gain
- **Typical settings:** Cut low end (80-120 Hz) for clarity, boost high (8-12 kHz) for air

**8. Compressor**
- **Function:** Dynamic range reduction (reduces loud signals, maintains quiet signals)
- **Character:** Increases sustain, evens dynamics, adds punch
- **Common uses:** Sustain leads, fatten bass, control dynamics, "glue" complex sounds
- **Parameters:** Threshold (level where compression starts), Ratio (compression amount), Attack, Release, Makeup Gain
- **Typical settings:** Moderate ratio (3:1 to 6:1) for musical compression, high ratio (10:1+) for limiting

**9. Distort**
- **Function:** Waveshaping/saturation adds harmonic distortion
- **Character:** Warm saturation to aggressive fuzz
- **Common uses:** Add aggression to leads, warm up pads, create aggressive bass, vintage analog character
- **Parameters:** Drive (input gain/distortion amount), Tone (post-distortion filter), Output Level, Mix
- **Typical settings:** Low drive (20-40%) for warmth, high drive (70%+) for fuzz

---

**Pre-FX vs. Post-FX - Placement Strategy:**

**Use Pre-FX when:**
- Effect should be part of the "dry" sound character
- Want effect to be processed by delay/reverb (e.g., chorus before reverb = chorused reflections)
- Creating foundational timbre (EQ, Compressor, subtle Chorus)
- Example: Chorus (Pre-FX) → Reverb creates lush, spacious doubled sound

**Use Post-FX when:**
- Effect should process the entire wet signal (reverb + delay tails)
- Creating aggressive final character (Distort, Lo-Fi)
- Want effect after ambience is established
- Example: Distort (Post-FX) after Reverb creates distorted reverb tails

**Use Both Pre-FX and Post-FX when:**
- Creating complex effect chains (e.g., Chorus before reverb + EQ after reverb)
- Different effect types needed at different positions
- Maximum timbral transformation desired
- Example: Chorus (Pre-FX) + Reverb + Compressor (Post-FX) = lush with controlled dynamics

---

**Effect Programming Examples:**

**Example 1 - Lush Pad (Pre-FX Chorus):**
- Pre-FX: Chorus, Rate = 0.4 Hz, Depth = 50, Mix = 40%
- Delay: Off
- Reverb: Hall, Time = 4.5s, Dry/Wet = 35%
- Post-FX: Off
- **Result:** Subtle chorus thickness feeds into spacious reverb, classic lush pad

**Example 2 - Aggressive Lead (Post-FX Distort):**
- Pre-FX: Off
- Delay: Basic Stereo, Time = 1/8 (BPM sync), Feedback = 30, Dry/Wet = 20%
- Reverb: Room, Time = 1.8s, Dry/Wet = 15%
- Post-FX: Distort, Drive = 75%, Tone = +20 (bright), Mix = 60%
- **Result:** Clean lead with space, distortion processes entire mix for aggressive character

**Example 3 - Vintage Organ (Pre-FX Rotary):**
- Pre-FX: Rotary, Rate = Fast, Drive = 45%, Mix = 70%
- Delay: Off
- Reverb: Room, Time = 1.2s, Dry/Wet = 25%
- Post-FX: Compressor, Ratio = 4:1, Attack = Fast, Mix = 100%
- **Result:** Leslie speaker simulation with controlled dynamics, classic organ tone

**Example 4 - Lo-Fi Texture (Pre + Post FX):**
- Pre-FX: Lo-Fi, Bit Depth = 6-bit, Sample Rate = 12kHz, Mix = 80%
- Delay: Reverse, Time = 1/4 (BPM sync), Feedback = 50, Dry/Wet = 40%
- Reverb: Cloud, Time = 6s, Dry/Wet = 30%
- Post-FX: EQ, Low = -6dB at 100Hz, High = +4dB at 10kHz
- **Result:** Degraded signal with backward delays, EQ shapes final character

**Example 5 - Rhythmic Movement (Pre-FX Tremolo):**
- Pre-FX: Tremolo, Rate = 1/8 (BPM sync), Depth = 70%, Waveform = Square, Mix = 100%
- Delay: Pan Delay, Time = 1/16 (BPM sync), Feedback = 40, Dry/Wet = 30%
- Reverb: Plate, Time = 2.5s, Dry/Wet = 20%
- Post-FX: Off
- **Result:** Rhythmic gating feeds into ping-pong delays, tempo-locked movement

---

### Delay

The Hydrasynth's Delay module provides five distinct delay algorithms, from simple mono/stereo repeats to complex reverse and pattern-based delays. All delays support BPM synchronization for tempo-locked rhythmic effects.

**Access Delay:** Press **[DELAY]** button → Two pages of parameters

---

**Five Delay Types:**

**1. Basic Mono**
- **Function:** Combines stereo input to mono, single delay line
- **Character:** Centered, classic slapback or echo
- **Use cases:** Doubling effect (short time, low feedback), vocal-style echo, mono thickening
- **Typical settings:** 80-120ms for slapback, 250-500ms for discrete echo

**2. Basic Stereo**
- **Function:** Independent left and right delay lines, preserves stereo image
- **Character:** Wide stereo delays, maintains spatial positioning
- **Use cases:** Stereo pads with space, leads with width, preserving existing stereo field
- **Typical settings:** Same time for both channels, moderate feedback (30-50%)

**3. Pan Delay**
- **Function:** Alternates between left and right channels (ping-pong)
- **Character:** Classic ping-pong stereo movement
- **Use cases:** Wide stereo delays, rhythmic spatial movement, classic synth delays
- **Typical settings:** 1/8 or 1/16 note (BPM sync), moderate feedback for multiple repeats

**4. LRC Delay**
- **Function:** Pattern of Left → Right → Center, repeats
- **Character:** Complex spatial pattern, three-position movement
- **Use cases:** Unusual spatial effects, complex rhythmic delays, experimental movement
- **Typical settings:** BPM sync for musical patterns, moderate-high feedback (50-70%)

**5. Reverse**
- **Function:** Records incoming audio, plays it backward on repeat
- **Character:** Reversed echo, tape-rewind effect
- **Use cases:** Experimental textures, reversed reverb simulation, dramatic effects
- **Typical settings:** Longer times (1/2 or 1/1 note) for recognizable backward phrases

---

**Delay Parameters (All Types):**

**Access Delay:** Press **[DELAY]** button

**Page 1:**
- **Type:** Basic Mono, Basic Stereo, Pan Delay, LRC Delay, Reverse
- **Time:** 1ms to 3.0 seconds (BPM Off) or 1/64T to 1/1 Dot (BPM On)
  - Delay period before repeat
  - Short times (1-50ms): Thickening, doubling
  - Medium times (50-250ms): Slapback, discrete echo
  - Long times (250ms+): Distinct rhythmic repeats
  
- **Feedback:** 0.0 to 128.0
  - Amount of delayed signal fed back into delay input
  - 0 = single repeat
  - 64 = moderate decay (3-5 repeats)
  - 100+ = long decay (10+ repeats)
  - 128 = near-infinite repeats (eventual runaway)
  
- **Wet Tone:** -64.0 to +64.0 (filter control for delayed signal)
  - Negative values (-64 to -0.1): Low-pass filter (dark delays, reduces high frequencies on repeats)
  - 0: No filtering (full bandwidth)
  - Positive values (+0.1 to +64): High-pass filter (bright delays, reduces low frequencies on repeats)
  - **Use case:** Negative Wet Tone creates classic analog delay darkness

**Page 2:**
- **BPM Sync:** Off or On
  - Off = Time measured in milliseconds/seconds
  - On = Time quantized to tempo divisions (1/64T to 1/1 Dot)
  - **Use case:** BPM On for rhythmic delays locked to tempo
  
- **Feed Tone:** 0.0 to 128.0 (feedback high-frequency decay)
  - Controls how quickly high frequencies decay in feedback loop
  - 0 = Maximum HF decay (dark, filtered repeats)
  - 64 = Moderate HF decay (natural analog-style darkening)
  - 128 = No HF decay (bright repeats maintain high frequencies)
  - **Different from Wet Tone:** Feed Tone affects only the feedback loop, Wet Tone affects all delayed signal
  
- **Dry/Wet:** 0.0% to 100.0%
  - 0% = No delay (dry signal only)
  - 50% = Equal dry and wet (balanced)
  - 100% = Only delayed signal (no dry)
  - **Typical settings:** 20-40% for subtle space, 50-70% for obvious effect

---

**Delay Programming Examples:**

**Example 1 - Slapback (Basic Mono):**
- Type: Basic Mono
- Time: 120ms (BPM Off)
- Feedback: 0 (single repeat)
- Wet Tone: -20 (slightly dark)
- Dry/Wet: 25%
- **Result:** Classic slapback doubling, single dark repeat
- **Use case:** Thicken lead lines, vintage vocal-style echo

**Example 2 - Rhythmic Ping-Pong (Pan Delay):**
- Type: Pan Delay
- BPM Sync: On, Time: 1/8
- Feedback: 50 (4-5 repeats)
- Wet Tone: 0 (full bandwidth)
- Feed Tone: 80 (bright repeats)
- Dry/Wet: 35%
- **Result:** Eighth-note ping-pong delays with bright character
- **Use case:** Rhythmic lead support, tempo-locked space

**Example 3 - Analog-Style Decay (Basic Stereo):**
- Type: Basic Stereo
- BPM Sync: On, Time: 1/4 Dot (dotted quarter)
- Feedback: 70 (long decay)
- Wet Tone: -40 (dark, filtered)
- Feed Tone: 30 (aggressive HF decay)
- Dry/Wet: 45%
- **Result:** Classic analog delay - repeats get progressively darker
- **Use case:** Vintage synth delays, dub-style echo, warm space

**Example 4 - Reverse Texture (Reverse):**
- Type: Reverse
- BPM Sync: On, Time: 1/1 (whole note)
- Feedback: 40 (2-3 backward repeats)
- Wet Tone: +15 (slightly bright)
- Dry/Wet: 50%
- **Result:** Whole-note backward echoes
- **Use case:** Experimental pads, dramatic effects, reversed reverb simulation

**Example 5 - Spatial Pattern (LRC Delay):**
- Type: LRC Delay
- BPM Sync: On, Time: 1/16
- Feedback: 65 (moderate decay with pattern)
- Wet Tone: 0
- Feed Tone: 100 (maintain brightness)
- Dry/Wet: 40%
- **Result:** Fast Left-Right-Center pattern
- **Use case:** Complex spatial movement, rhythmic enhancement

---

### Reverb

The Hydrasynth's Reverb module offers four distinct reverb algorithms from natural spaces (Hall, Room) to metallic/shimmer effects (Plate, Cloud). All reverbs share identical parameters with extensive control over decay time, damping, and tonal character.

**Access Reverb:** Press **[REVERB]** button → Two pages of parameters

---

**Four Reverb Types:**

**1. Hall**
- **Character:** Large concert hall, spacious with long smooth decay
- **Use cases:** Orchestral pads, ambient textures, huge spaces
- **Typical settings:** Long Time (4-8s), moderate damping for natural character

**2. Room**
- **Character:** Small to medium room, shorter decay with early reflections
- **Use cases:** Realistic space, subtle ambience, natural room sound
- **Typical settings:** Short-medium Time (1-3s), minimal damping for clarity

**3. Plate**
- **Character:** Metallic plate reverb, bright with shimmer
- **Use cases:** Vintage reverb character, bright pads, percussive ambience
- **Typical settings:** Medium Time (2-4s), low Hi Damp for brightness

**4. Cloud**
- **Character:** Dense, diffuse, shimmer-heavy reverb
- **Use cases:** Ambient washes, experimental textures, thick reverb beds
- **Typical settings:** Long Time (6-15s), Freeze mode for infinite sustain

---

**Reverb Parameters (All Types):**

**Page 1:**
- **Type:** Hall, Room, Plate, Cloud
  
- **PreDelay:** 0.5ms to 250ms
  - Time between dry signal and reverb onset
  - Short PreDelay (0-20ms): Immediate reverb, thick sound
  - Medium PreDelay (20-80ms): Separation between dry and wet, clarity
  - Long PreDelay (80-250ms): Distinct gap, rhythmic effect
  - **Use case:** PreDelay creates space for dry signal to remain clear
  
- **Time:** 120ms to 90 seconds, plus Freeze mode
  - Reverb decay time
  - Short Time (120ms-1s): Small rooms, subtle space
  - Medium Time (1-4s): Natural room to hall
  - Long Time (4-15s): Large halls, ambient washes
  - Very Long Time (15-90s): Extreme ambience
  - **Freeze:** Infinite sustain (no decay, reverb continues indefinitely without damping)
  - **Use case:** Freeze mode for drone-like sustained reverb beds
  
- **Tone:** -64.0 to +64.0 (filter control for reverb signal)
  - Negative values (-64 to -0.1): Low-pass filter (dark reverb, reduces high frequencies)
  - 0: No filtering (full bandwidth)
  - Positive values (+0.1 to +64): High-pass filter (bright reverb, reduces low frequencies)
  - **Use case:** Negative Tone for warm, dark ambience; positive for airy, bright space

**Page 2:**
- **Hi Damp:** 0.0 to 128.0 (high-frequency decay time in reverb)
  - 0 = Fast HF decay (dark, muted reverb)
  - 64 = Moderate HF decay (natural room character)
  - 128 = Slow HF decay (bright, shimmery reverb)
  - **Use case:** Low Hi Damp for warm reverb, high Hi Damp for bright plate/cloud character
  
- **Lo Damp:** 0.0 to 128.0 (low-frequency decay time in reverb)
  - 0 = Fast LF decay (thin, reduced bass in reverb)
  - 64 = Moderate LF decay (balanced)
  - 128 = Slow LF decay (bass-heavy reverb)
  - **Use case:** Reduce Lo Damp to prevent muddy reverb on bass-heavy sounds
  
- **Dry/Wet:** 0.0% to 100.0%
  - 0% = No reverb (dry signal only)
  - 30-50% = Balanced mix (subtle to obvious reverb)
  - 100% = Only reverb (no dry signal)
  - **Typical settings:** 20-35% for natural space, 50%+ for obvious effect

---

**Reverb Programming Examples:**

**Example 1 - Natural Room (Room):**
- Type: Room
- PreDelay: 15ms
- Time: 1.8s
- Tone: 0 (neutral)
- Hi Damp: 70 (natural decay)
- Lo Damp: 60 (balanced bass)
- Dry/Wet: 25%
- **Result:** Subtle, natural room ambience
- **Use case:** Realistic space without obvious reverb character

**Example 2 - Large Hall (Hall):**
- Type: Hall
- PreDelay: 40ms (clarity)
- Time: 6.5s
- Tone: -15 (slightly warm)
- Hi Damp: 80 (bright, long decay)
- Lo Damp: 50 (prevent mud)
- Dry/Wet: 35%
- **Result:** Spacious concert hall, clear with long tail
- **Use case:** Orchestral pads, ambient leads

**Example 3 - Bright Plate (Plate):**
- Type: Plate
- PreDelay: 8ms (immediate)
- Time: 3.2s
- Tone: +20 (bright)
- Hi Damp: 110 (shimmery high end)
- Lo Damp: 40 (reduced bass)
- Dry/Wet: 40%
- **Result:** Classic bright plate with metallic shimmer
- **Use case:** Vintage synth leads, percussive sounds

**Example 4 - Ambient Cloud (Cloud, Freeze):**
- Type: Cloud
- PreDelay: 100ms (separation)
- Time: Freeze (infinite)
- Tone: 0
- Hi Damp: 128 (maximum shimmer)
- Lo Damp: 80 (thick bass)
- Dry/Wet: 60%
- **Result:** Infinite sustaining reverb with shimmer
- **Use case:** Ambient drone beds, experimental textures, hold notes indefinitely

**Example 5 - Dark Ambience (Hall, Dark):**
- Type: Hall
- PreDelay: 25ms
- Time: 8s
- Tone: -45 (very dark)
- Hi Damp: 30 (fast HF decay)
- Lo Damp: 90 (maintain bass)
- Dry/Wet: 45%
- **Result:** Warm, dark, enveloping space
- **Use case:** Dark pads, cinematic ambience, warm character

---

### Effects Routing Strategies

The four effects modules work in series, enabling complex processing chains. Understanding signal flow and module interaction creates everything from subtle enhancement to dramatic transformation.

**Signal Flow Recap:**
```
Synthesizer → Pre-FX → Delay → Reverb → Post-FX → Output
```

---

**Strategy 1: Minimal Processing (Reverb Only)**

**Configuration:**
- Pre-FX: Off
- Delay: Off
- Reverb: Room, Time = 2s, Dry/Wet = 25%
- Post-FX: Off

**Use case:** Natural space without coloration, focus on synthesis
**Character:** Clean, unprocessed tone with subtle room ambience

---

**Strategy 2: Classic Synth (Chorus + Reverb)**

**Configuration:**
- Pre-FX: Chorus, Rate = 0.5 Hz, Depth = 40, Mix = 35%
- Delay: Off
- Reverb: Hall, Time = 4s, Dry/Wet = 30%
- Post-FX: Off

**Use case:** Lush pads, thick leads
**Character:** Chorus thickness feeds into spacious reverb, classic lush sound
**Why Pre-FX:** Chorused signal creates multiple "voices" that reverb processes independently

---

**Strategy 3: Rhythmic Space (Delay + Reverb)**

**Configuration:**
- Pre-FX: Off
- Delay: Pan Delay, BPM On, Time = 1/8, Feedback = 45, Dry/Wet = 30%
- Reverb: Plate, Time = 2.5s, Dry/Wet = 25%
- Post-FX: Off

**Use case:** Rhythmic leads, tempo-locked movement
**Character:** Ping-pong delays with reverb tails, creates rhythmic space
**Interaction:** Reverb processes delay tails, extends rhythmic pattern

---

**Strategy 4: Aggressive Processing (Pre-FX Distort + Post-FX EQ)**

**Configuration:**
- Pre-FX: Distort, Drive = 70%, Mix = 60%
- Delay: Basic Stereo, Time = 1/4, Feedback = 25, Dry/Wet = 20%
- Reverb: Room, Time = 1.5s, Dry/Wet = 15%
- Post-FX: EQ, Low = -4dB at 100Hz, High = +6dB at 8kHz

**Use case:** Aggressive leads, controlled distortion
**Character:** Distorted signal with space, EQ shapes final character
**Why Post-FX:** EQ after reverb shapes entire mix including ambience

---

**Strategy 5: Maximum Transformation (All Effects Active)**

**Configuration:**
- Pre-FX: Lo-Fi, Bit Depth = 8-bit, Sample Rate = 10kHz, Mix = 70%
- Delay: Reverse, BPM On, Time = 1/2, Feedback = 55, Dry/Wet = 45%
- Reverb: Cloud, Time = Freeze, Hi Damp = 128, Dry/Wet = 50%
- Post-FX: Compressor, Ratio = 6:1, Attack = Medium, Mix = 100%

**Use case:** Experimental textures, ambient soundscapes
**Character:** Degraded signal with backward delays and infinite reverb, compressed for consistency
**Interaction:** Each stage dramatically alters previous stage's output

---

**Strategy 6: Vintage Character (Rotary + Analog Delay + Plate)**

**Configuration:**
- Pre-FX: Rotary, Rate = Slow, Drive = 50%, Mix = 80%
- Delay: Basic Stereo, Time = 380ms, Feedback = 60, Wet Tone = -35, Feed Tone = 40, Dry/Wet = 35%
- Reverb: Plate, Time = 3s, Hi Damp = 90, Dry/Wet = 30%
- Post-FX: Off

**Use case:** Vintage organ/synth tones
**Character:** Leslie speaker simulation with dark analog delays and bright plate reverb
**Why this order:** Rotary movement feeds into delay, delay tails feed into reverb for complex vintage space

---

**Strategy 7: Performance-Based (Expression Pedal Controls Effects)**

**Configuration:**
- Pre-FX: Phaser, Rate = 0.6 Hz, Depth = 60, Feedback = 50, Mix = 40%
- Delay: Pan Delay, BPM On, Time = 1/16, Feedback = 50, Dry/Wet = 30%
- Reverb: Hall, Time = 5s, Dry/Wet = 35%
- Post-FX: Off
- **Mod Matrix:** ExpPedal → Reverb Dry/Wet (Depth: +65, allows pedal to sweep reverb from 0-65%)

**Use case:** Dynamic ambience control during performance
**Character:** Foot pedal controls reverb amount, phaser and delay remain constant
**Interaction:** Expression pedal adds/removes space without touching other effects

---

## System Setup and Calibration

The Hydrasynth's System Setup menu provides configuration for hardware calibration, MIDI/USB settings, and global preferences. Accessing these pages enables optimization for specific workflows, external equipment, and performance needs.

**Access System Setup:** Press **[SYSTEM]** button → Navigate pages with Page Up/Down arrows

---

### Ribbon Controller Calibration and Configuration

The ribbon controller requires calibration for optimal response and offers three operational modes with distinct behaviors.

**Ribbon Setup Pages:** System Setup pages 75 and 105 (refer to manual for specific parameters)

**Three Ribbon Modes (Press [RIBBON] button, Control knob 1 selects mode):**

**Mode 1: Pitch Bend**
- **Function:** Horizontal pitch bend, touch point becomes center reference
- **Behavior:** Touch anywhere = zero pitch, slide left = bend down, slide right = bend up
- **Range:** Set by PitchBnd parameter in Voice module (0-24 semitones)
- **Lock Global:** Makes pitch bend settings apply to all patches (otherwise per-patch)
- **Use case:** Traditional pitch bend with larger control surface than pitch wheel

**Mode 2: Theremin**
- **Function:** Ribbon becomes monophonic synthesizer (solo instrument)
- **Behavior:** Ribbon position = absolute pitch (like Theremin or keyboard)
- **Range options:** Keyboard range (default), 2-octave range, or 6-octave range
- **Additional parameters:** Key and scale selection (separate page)
- **Use case:** Play melodies on ribbon, alternative to keyboard, expressive solo lines
- **CV integration:** Set Control Voltage Source = Theremin (System Setup page 7) to send ribbon pitch to CV Pitch Out

**Mode 3: Mod Only**
- **Function:** Ribbon as pure modulation source (no pitch control)
- **Behavior:** Ribbon position routes to Mod Matrix as modulation source
- **Available sources:** RbnAbs (bipolar), RbnAbs+ (unipolar), RbnRel (relative)
- **Hold parameter:** If On, modulation level maintains when finger lifted (latch)
- **Lock Global:** Makes Mod Only settings apply to all patches
- **Shortcut:** Hold [RIBBON] + press destination Control button = creates instant mod route
- **Use case:** Filter sweeps, parameter control, gestural modulation without pitch changes

**Ribbon Calibration:**
- **Sensitivity:** Adjust touch sensitivity for light/heavy playing styles
- **Dead zones:** Configure edges or center areas with reduced sensitivity
- **Reference:** Manual pages 75 and 105 for specific calibration procedures

---

### Polyphonic Aftertouch Calibration

**Aftertouch Setup Pages:** System Setup pages 99 and 101

**Aftertouch Sensitivity Parameters:**

- **Threshold:** 0-127 (pressure required before aftertouch engages)
  - Low values (0-30): Very sensitive, light touch triggers aftertouch
  - Medium values (40-60): Balanced sensitivity
  - High values (70-127): Heavy pressure required (reduces accidental triggering)
  - **Adjust to match playing style:** Light players use low threshold, heavy players use high threshold
  
- **Curve:** -64 to +64 (response curve shape)
  - Negative values: More response at light pressure, less at heavy pressure (exponential)
  - 0: Linear response throughout pressure range
  - Positive values: Less response at light pressure, more at heavy pressure (logarithmic)
  - **Musical effect:** Negative curve = sensitive expression, positive curve = controlled expression

**Calibration Workflow:**
1. Route PolyAftT → Filter 1 Cutoff (Depth: +96) for clear visual/audio feedback
2. Play notes with typical playing pressure
3. Adjust Threshold until aftertouch engages comfortably
4. Adjust Curve for desired response feel
5. Test across full pressure range
6. Settings apply globally to all patches

**Typical Calibration Presets:**
- **Sensitive/Expressive:** Threshold = 25, Curve = -20
- **Balanced:** Threshold = 45, Curve = 0
- **Heavy/Controlled:** Threshold = 65, Curve = +15

---

### MIDI Configuration

**MIDI Setup Pages:** System Setup pages 100 and 116

**MIDI Channel Configuration:**
- **MIDI Channel:** 1-16 or Omni (receives on all channels)
- **MIDI Thru:** On/Off (retransmits received MIDI messages to MIDI Out)
- **Local Control:** On/Off (disconnects keyboard from internal synth engine for use as MIDI controller only)

**Program Change:**
- **Program Change Enable:** On/Off (respond to MIDI program change messages)
- **Program Change Send:** On/Off (send program change when switching patches)
- **Bank Select:** Enable/Disable bank select messages (MSB/LSB)

**MIDI CC Mapping:**
- **All Mod Matrix sources available as MIDI CC sources** (route external MIDI CC to any parameter)
- **MIDI CC output:** Route internal parameters to MIDI CC Out for controlling external gear
- **Custom CC assignments:** Map any parameter to any CC number

**MIDI Implementation:**
- **Note On/Off:** Standard velocity-sensitive note messages
- **Polyphonic Aftertouch:** Sends per-note aftertouch (CC)
- **Channel Aftertouch:** Sends channel pressure
- **Pitch Bend:** Standard pitch bend messages
- **Mod Wheel:** CC#1 (standard modulation wheel)
- **Expression:** CC#11 (expression pedal)
- **Sustain:** CC#64 (sustain pedal)

**MIDI Clock (covered in Session 4):**
- **Clock Source:** Internal, MIDI, USB
- **Clock Send:** On/Off (send MIDI clock to external devices)

---

### USB Configuration

The Hydrasynth supports both USB MIDI and USB Audio simultaneously over a single USB connection.

**USB MIDI:**
- **Automatic:** Hydrasynth appears as MIDI device when connected to computer
- **Bidirectional:** Send/receive MIDI notes, CC, program change, clock
- **DAW integration:** Recognized by all major DAWs (Ableton, Logic, Cubase, etc.)
- **Multi-channel:** Supports 16 MIDI channels over USB

**USB Audio:**
- **Stereo output:** Hydrasynth audio streams to computer (recording interface)
- **Stereo input:** Computer audio streams to Hydrasynth (external audio processing)
- **Simultaneous:** MIDI and audio work together over single USB cable
- **Latency:** Low-latency performance for real-time playing and recording
- **Sample rates:** Standard rates supported (44.1kHz, 48kHz, etc.)

**USB Configuration in DAW:**
1. Connect USB cable from Hydrasynth to computer
2. **For MIDI:** Select "Hydrasynth" as MIDI input/output device in DAW
3. **For Audio:** Select "Hydrasynth" as audio input device in DAW preferences
4. **Set buffer size:** Lower buffer (64-128 samples) for low latency, higher buffer (256-512) for stability
5. **Enable MIDI clock:** In DAW preferences, enable "Send MIDI Clock" to Hydrasynth for tempo sync

**Workflow Example - DAW Integration:**
1. USB cable connects Hydrasynth to computer
2. **MIDI:** DAW sends notes to Hydrasynth, Hydrasynth plays internal sounds
3. **Audio:** Hydrasynth audio streams into DAW via USB, records to audio track
4. **Clock:** DAW sends USB clock, Hydrasynth arpeggiator and effects sync to project tempo
5. **Result:** Integrated recording with perfect sync, no separate audio interface needed

---

## Troubleshooting and Maintenance

Common issues and solutions for optimal Hydrasynth performance.

**No Sound Output:**
- Check Master Volume knob (front panel)
- Verify audio cables connected to L/R outputs
- Check Mixer module - ensure at least one OSC volume > 0
- Verify Amp Level not at 0 (Amp module)
- Check effects Dry/Wet settings (100% wet with no effects = silence)

**Pitch Tracking Issues:**
- Tune external oscillators to match Hydrasynth reference note
- Adjust CV Offset parameter (System Setup page 7, -99 to +99 cents)
- Verify correct voltage standard selected (V/Oct vs Hz/V vs Buchla)
- Check Reference Note setting matches external gear expectations

**Gate Not Triggering External Modules:**
- Verify Gate Type (V-trig for modern, S-trig for vintage)
- Check Gate Volt setting (5V standard for Eurorack, 10V for Buchla)
- Test with known-working cable
- Verify external module gate input requirements match Hydrasynth output

**Ribbon Controller Not Responding:**
- Calibrate ribbon sensitivity (System Setup pages 75, 105)
- Clean ribbon surface with microfiber cloth (remove oils/residue)
- Check Ribbon mode (Pitch Bend/Theremin/Mod Only) matches intent
- Verify Range and Smoothing parameters not set to extremes

**Aftertouch Not Working:**
- Check Threshold setting (may be set too high)
- Verify Mod Matrix routes exist (PolyAftT or MonoAftT to destination)
- Calibrate aftertouch sensitivity (System Setup pages 99, 101)
- Apply pressure gradually - polyphonic aftertouch requires sustained pressure

**MIDI Not Receiving/Sending:**
- Check MIDI channel matches sending/receiving device
- Verify MIDI cables connected correctly (Out → In, In → Out)
- Enable MIDI Thru if daisy-chaining multiple devices
- Check Local Control (Off = keyboard disconnected from synth for MIDI-only use)

**USB Not Recognized:**
- Try different USB cable (use high-quality cable, avoid long runs)
- Connect directly to computer USB port (avoid hubs if possible)
- Restart Hydrasynth and computer
- Update computer USB drivers
- Check DAW recognizes Hydrasynth in MIDI/Audio device preferences

**Clock Sync Issues:**
- Verify Clock Source setting (Internal/MIDI/USB) matches actual clock source
- Check Clock Rate (PPQN) matches receiving device expectations
- For MIDI clock: Ensure sending device has "Send MIDI Clock" enabled
- For USB clock: Enable "Send MIDI Clock" in DAW transport settings
- Test with Clock Out → external device to verify pulses

**Effects Not Audible:**
- Check Dry/Wet mix parameters (may be set to 0% = all dry)
- Verify effect type selected (not set to "Off" or default)
- Check Pre-FX/Post-FX placement matches intended signal flow
- For Delay/Reverb: Increase Dry/Wet mix gradually to hear effect

**Unwanted Noise/Hum:**
- Check audio cables for damage or poor shielding
- Verify power supply firmly connected
- Isolate from other electrical devices (lighting dimmers, power supplies)
- Use balanced cables where possible
- Check for ground loops (multiple grounded devices in signal chain)

**Firmware Updates:**
- Check ASM website for latest firmware: https://www.ashunsoundmachines.com
- Follow manufacturer instructions for firmware update procedure
- Never power off during firmware update
- Backup patches before updating (if possible)

**Factory Reset (Use with Caution):**
- Factory reset erases all user patches and settings
- Refer to manual for specific reset procedure
- Only perform if troubleshooting other methods exhausted
- Consider contacting ASM support before factory reset

**General Maintenance:**
- Keep keyboard and ribbon clean (microfiber cloth, no liquids on keys)
- Store in stable temperature/humidity environment
- Avoid exposing to direct sunlight or extreme temperatures
- Regularly backup patches (if backup method available)
- Clean exterior with dry cloth

---

## Session 5 Complete - Effects, System Setup, and Configuration Established

**What Session 5 Added:**
- Complete effects section (Pre-FX, Delay, Reverb, Post-FX)
- 9 Pre/Post-FX types with parameters and use cases (Chorus, Flanger, Rotary, Phaser, Lo-Fi, Tremolo, EQ, Compressor, Distort)
- 5 Delay types with all parameters (Basic Mono/Stereo, Pan, LRC, Reverse)
- 4 Reverb types with all parameters (Hall, Room, Plate, Cloud + Freeze mode)
- Effects routing strategies (7 practical configurations from minimal to maximum processing)
- System setup and calibration (ribbon 3 modes, aftertouch sensitivity/curve)
- MIDI configuration (channels, program change, CC mapping, clock)
- USB configuration (MIDI + Audio simultaneous)
- Troubleshooting and maintenance (common issues with solutions)

**Foundation Complete (Sessions 1-5):**
- ✅ Synthesis engine (oscillators, mutants, mixer, filters)
- ✅ Modulation system (envelopes, LFOs, Mod Matrix, Macros)
- ✅ Performance features (ribbon, aftertouch, arpeggiator, voice management, tuning, controllers)
- ✅ CV/Gate/Clock integration (modular connectivity, voltage standards, system hub techniques)
- ✅ Effects and system (Pre-FX, Delay, Reverb, Post-FX, routing, calibration, MIDI/USB, troubleshooting)

**Coming in Session 6 (Final Session):**
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert → Master)
- Complete programming tutorials with step-by-step instructions
- Alternative synthesizer options (budget/different character/premium tiers)
- Pairs Well With (complementary gear for studio integration)
- Historical context and synthesis innovations
- Why This Instrument Excels section

---

*ASM Hydrasynth Keyboard - Session 5 of 6 - Effects and System Configuration Complete*

---

## Session 1 Complete - Foundation Established

**What We've Covered:**
- Quick Start workflow with recommended presets
- Complete oscillator architecture (OSC 1-3, Single/WaveScan modes, 219 waveforms)
- All eight Mutant processor modes with detailed parameters
- Mixer routing and filter configuration (series/parallel)
- Filter 1 (16 types) and Filter 2 (state-variable morphing) with programming techniques

**Coming in Session 2:**
- Modulation system architecture (5 DAHDSR envelopes, 5 LFOs, 32-slot Mod Matrix)
- Pre-wired modulation connections vs. Mod Matrix routing
- Envelope and LFO advanced features (looping, triggering, BPM sync)
- Macro control system (8 macros with up to 8 destinations each)

**Coming in Session 3:**
- Performance features (ribbon controller modes, polyphonic aftertouch, wheels)
- Arpeggiator (8 modes, phrase library, ratcheting)
- Voice management (unison modes, analog feel, glide)
- Alternative tuning systems and scales

**Coming in Sessions 4-5:**
- CV/Gate/Clock integration workflows with Eurorack systems
- Effects section (Pre-FX, Delay, Reverb, Post-FX)
- System setup and calibration
- Troubleshooting and maintenance
**Coming in Session 6:**
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert → Master)
- Alternative synthesizer options
- Pairs Well With section
- Historical Context
- Why This Instrument Excels

---

*ASM Hydrasynth Keyboard - Session 5 of 6 - Effects and System Configuration Complete*

---

*ASM Hydrasynth Keyboard - Session 1 of 6 - Synthesis Architecture Foundation*
## Patch Example 1 - Classic Analog Lead (Basic)

**Sound Character:** Warm, responsive monophonic lead with filter sweep and vibrato - suitable for melodic playing across all genres.

**Programming Tutorial:**

**Step 1 - Initialize and Configure Voice Mode**
1. Press **[INIT]** + **[SAVE]** to initialize patch
2. Press **[VOICE]** button
3. Set **VoiceMode: Mono** (monophonic behavior)
4. Set **Glide: Glide**, **Glide Time: 45** (smooth pitch transitions)
5. Set **Glide Legato: On** (glide only on legato playing)

**Step 2 - Configure Oscillators**
1. Press **[OSC 1]**
   - **Wave: Saw** (bright harmonic content)
   - **Semi: 0**, **Cents: 0**
2. Press **[OSC 2]**
   - **Wave: Saw**
   - **Semi: -12** (one octave below OSC 1 for thickness)
   - **Cents: +8** (slight detuning for chorus effect)
3. Press **[OSC 3]**
   - **Wave: Saw**
   - **Semi: +12** (one octave above OSC 1 for brightness)
   - **Cents: 0**

**Step 3 - Set Oscillator Levels**
1. Press **[MIXER]**
   - **Osc1 Vol: 100** (main oscillator)
   - **Osc2 Vol: 80** (sub-octave support)
   - **Osc3 Vol: 40** (subtle brightness)
   - **Ring Vol: 0**, **Noise Vol: 0**

**Step 4 - Configure Filter 1**
1. Press **[FILTER 1]**
   - **Type: LP Fat24** (warm 24dB ladder filter)
   - **Cutoff: 45** (starting point for sweep)
   - **Resonance: 65** (moderate emphasis)
   - **ENV 1 amt: +55** (envelope opens filter)
   - **LFO 1 amt: 0** (no LFO modulation yet)
   - **Vel Env: +45** (velocity sensitivity)
   - **Keytrack: 100%** (filter tracks keyboard)
   - Page 2: **Drive: 25**, **Drive Route: Pre** (warmth)

**Step 5 - Program Filter Envelope (ENV 1)**
1. Press **[ENV 1]**
   - **Attack: 8ms** (fast)
   - **Decay: 450ms** (moderate)
   - **Sustain: 40** (falls to moderate level)
   - **Release: 350ms** (smooth tail)
   - **Delay: 0**, **Hold: 0**
   - Page 2: **AtkCurve: -20** (logarithmic for punch)

**Step 6 - Program Amplitude Envelope (ENV 2)**
1. Press **[ENV 2]**
   - **Attack: 5ms** (instant)
   - **Decay: 300ms**
   - **Sustain: 75** (moderate sustain level)
   - **Release: 450ms**

**Step 7 - Add Mod Wheel Vibrato**
1. Press **[VOICE]**, Page 1
   - **Vib Amt: 50** (moderate vibrato depth)
   - **Vib Rate: 5.5 Hz** (musical vibrato speed)
2. Move **Mod Wheel** - vibrato depth increases smoothly

**Step 8 - Add Effects**
1. Press **[DELAY]**
   - **Type: Stereo** (stereo delay)
   - **Time: 1/8** (eighth note), **BPM Sync: On**
   - **Feedback: 35%** (3-4 repeats)
   - **Dry/Wet: 25%** (subtle)

**Result:** Responsive lead synth with smooth glide, velocity-sensitive filter, and Mod Wheel vibrato control. Perfect for soloing over chord progressions.

**Alternative Budget Synth:** Behringer DeepMind 6 ($499) - 6-voice analog with similar warm filter character
**Alternative Different Character:** Korg Minilogue XD ($649) - 4-voice analog-digital hybrid with multi-engine
**Alternative Premium:** Sequential Prophet-6 ($2,999) - 6-voice pure analog with vintage character
## Patch Example 2 - Evolving Pad (Intermediate)

**Sound Character:** Rich, animated pad with slow wavetable morphing, independent filter movement per voice, and stereo width - ideal for ambient and cinematic work.

**Programming Tutorial:**

**Step 1 - Initialize and Configure Polyphony**
1. Press **[INIT]** + **[SAVE]**
2. Press **[VOICE]**
   - **VoiceMode: Poly** (full 8-voice polyphony)
   - **Unison: Off**

**Step 2 - Configure WaveScan Oscillators**
1. Press **[OSC 1]**
   - Control knob 1: **Mode: WaveScan**
   - Control button 2: Access **Wavelist Edit**
   - Program wavelist:
     - **WAV 1: Sine**
     - **WAV 2: Triangle**
     - **WAV 3: Saw**
     - **WAV 4: Square**
     - **WAV 5: Horizon 3**
     - **WAV 6: Spect A2**
     - **WAV 7: Flux 5**
     - **WAV 8: Alweg 2**
   - Exit to main OSC 1 page
   - **WaveScan: 2.5** (starting position between Triangle and Saw)
   - **Semi: 0**, **Cents: 0**

2. Press **[OSC 2]**
   - **Mode: WaveScan**
   - Copy same wavelist as OSC 1
   - **WaveScan: 3.0** (slightly different starting position)
   - **Semi: +7** (perfect fifth above OSC 1)
   - **Cents: +12** (detune for width)

3. Press **[OSC 3]**
   - **Wave: Sine** (sub-bass foundation)
   - **Semi: -12** (one octave below)

**Step 3 - Set Oscillator Levels and Pan**
1. Press **[MIXER]**, Page 1
   - **Osc1 Vol: 90**
   - **Osc2 Vol: 85**
   - **Osc3 Vol: 55**
2. Page 2
   - **Osc1 Pan: -25** (left of center)
   - **Osc2 Pan: +25** (right of center)
   - **Osc3 Pan: 0** (center)

**Step 4 - Configure Both Filters (Parallel)**
1. Press **[FILTER 1]**
   - **Type: LP Fat24**
   - **Cutoff: 55**
   - **Resonance: 45**
   - **ENV 1 amt: +25** (gentle envelope)
   - **LFO 1 amt: +15** (subtle LFO modulation)
   - **Keytrack: 80%** (partial tracking)
   - Page 2: **Filter Route: Parallel**

2. Press **[FILTER 2]**
   - **Type: LP-BP-HP**
   - **Morph: 20** (mostly low-pass)
   - **Cutoff: 65** (brighter than Filter 1)
   - **Resonance: 30**
   - **ENV 1 amt: +20**
   - **LFO 1 amt: -12** (inverse LFO phase)

**Step 5 - Program Slow Filter Envelope**
1. Press **[ENV 1]**
   - **Attack: 2.8s** (very slow bloom)
   - **Decay: 3.5s**
   - **Sustain: 70**
   - **Release: 4.5s** (long tail)

**Step 6 - Program Amplitude Envelope**
1. Press **[ENV 2]**
   - **Attack: 2.2s** (slow swell)
   - **Decay: 2.0s**
   - **Sustain: 85**
   - **Release: 4.0s**

**Step 7 - Create WaveScan Morphing (LFO 3)**
1. Press **[LFO 3]**
   - **Wave: Sine** (smooth morphing)
   - **Rate: 0.08 Hz** (slow, ~12 seconds per cycle)
   - **BPM Sync: Off**
   - **TrigSync: Poly** (independent per voice)
   - **Delay: 0**, **Fade In: 2500ms** (gradual onset)
   - **Phase: 0°**
   - **Level: 128** (full amplitude)

**Step 8 - Route LFO 3 to WaveScan**
1. Press **[MOD MATRIX]**
2. Create route: **LFO 3 → OSC 1 WaveScan**
   - **Depth: +64** (morphs through ~5 waveforms)
3. Create route: **LFO 3 → OSC 2 WaveScan**
   - **Depth: +72** (slightly different range)

**Step 9 - Add Filter Morph Modulation (LFO 4)**
1. Press **[LFO 4]**
   - **Wave: Triangle**
   - **Rate: 0.12 Hz** (slower than LFO 3)
   - **TrigSync: Poly**
   - **Phase: 180°** (opposite phase from LFO 3)

2. Press **[MOD MATRIX]**
3. Create route: **LFO 4 → Filter 2 Morph**
   - **Depth: +45** (filter morphs from LP toward BP)

**Step 10 - Add Stereo Width and Effects**
1. Press **[VOICE]**, Page 1
   - Scroll to **Spread** parameter
   - **Spread: 75** (wide stereo field)

2. Press **[REVERB]**
   - **Type: Hall**
   - **Time: 70** (long tail)
   - **Tone: 55**
   - **HiDamp: 45**, **LoDamp: 35**
   - **Dry/Wet: 40%**

**Result:** Lush pad with independent wavetable morphing per voice, dual-filter movement, wide stereo image, and spacious reverb. The slow LFOs create organic evolution that never sounds repetitive.

**Alternative Budget:** Arturia MicroFreak ($349) - Digital poly with paraphonic filter and unique keybed
**Alternative Different Character:** Modal Cobalt8 ($549) - 8-voice virtual analog with 40 algorithm oscillators
**Alternative Premium:** Arturia PolyBrute ($2,999) - 6-voice morphing analog with extensive modulation matrix
## Patch Example 3 - Percussive Bass (Advanced)

**Sound Character:** Punchy, aggressive bass with pitch envelope, waveshaping intensity, and rhythmic filter modulation - perfect for electronic and dance music.

**Programming Tutorial:**

**Step 1 - Initialize and Configure for Mono Bass**
1. Press **[INIT]** + **[SAVE]**
2. Press **[VOICE]**
   - **VoiceMode: Mono**
   - **Glide: Off** (no glide for tight bass)
   - **Unison: 2** (2-voice unison for thickness)
   - **Detune: 35** (moderate detuning)
   - **Spread: 60** (stereo width)

**Step 2 - Configure Oscillator for Bass Range**
1. Press **[OSC 1]**
   - **Wave: Saw**
   - **Semi: -12** (one octave down)
   - **Cents: 0**

2. Press **[OSC 2]**
   - **Wave: Square**
   - **Semi: -12** (same octave)
   - **Cents: -5** (slight detune)

3. Press **[OSC 3]**
   - **Wave: Sine**
   - **Semi: -24** (two octaves down - sub bass)

**Step 3 - Set Oscillator Levels**
1. Press **[MIXER]**
   - **Osc1 Vol: 100**
   - **Osc2 Vol: 75**
   - **Osc3 Vol: 90** (strong sub)
   - **Ring Vol: 0**
   - **Noise Vol: 15** (add transient click)

**Step 4 - Add Aggressive Waveshaping (Mutant 1)**
1. Press **[MUTANT 1]**
   - **Mode: FM-Lin** (frequency modulation)
   - **Source: OSC 2** (OSC 2 modulates OSC 1)
   - **Ratio: 0.5** (sub-harmonic modulation)
   - **Depth: 65** (moderate FM intensity)
   - **Feedback: 25%**
   - **Dry/Wet: 55%** (blend FM with raw)

**Step 5 - Add Additional Waveshaping (Mutant 2)**
1. Press **[MUTANT 2]**
   - **Mode: OSC Sync** (oscillator sync)
   - **Source: OSC 3** (sub-bass drives sync)
   - **Ratio: 1.5** (sync frequency)
   - **Depth: 80**
   - **Window: 40** (smooth harsh frequencies)
   - **Dry/Wet: 45%**

**Step 6 - Configure Aggressive Filter**
1. Press **[FILTER 1]**
   - **Type: LP MS20** (gritty Korg MS-20 character)
   - **Cutoff: 40** (closed starting point)
   - **Resonance: 95** (high resonance for emphasis)
   - **ENV 1 amt: +70** (strong envelope modulation)
   - **LFO 1 amt: 0**
   - **Vel Env: +60** (velocity adds intensity)
   - **Keytrack: 0%** (no keytracking - consistent filter across range)
   - Page 2: **Drive: 45**, **Drive Route: Post** (post-filter distortion emphasizes resonance)

**Step 7 - Program Pitch Envelope (ENV 3)**
1. Press **[ENV 3]**
   - **Attack: 0ms**
   - **Decay: 120ms** (fast pitch drop)
   - **Sustain: 0** (pitch returns to zero)
   - **Release: 0ms**
   - Page 2: **DecCurve: +40** (exponential decay)

2. Press **[MOD MATRIX]**
3. Create route: **ENV 3 → All Osc Pitch**
   - **Depth: +24** (two-octave pitch drop on attack)

**Step 8 - Program Punchy Filter Envelope**
1. Press **[ENV 1]**
   - **Attack: 2ms** (instant)
   - **Decay: 180ms** (fast decay)
   - **Sustain: 15** (low sustain)
   - **Release: 50ms** (tight)
   - Page 2: **DecCurve: +35** (exponential for punch)

**Step 9 - Program Amplitude Envelope**
1. Press **[ENV 2]**
   - **Attack: 0ms**
   - **Decay: 250ms**
   - **Sustain: 60**
   - **Release: 100ms**

**Step 10 - Add Rhythmic Filter Modulation (ENV 4)**
1. Press **[ENV 4]**
   - **Attack: 15ms**
   - **Decay: 95ms**
   - **Sustain: 0**
   - **Release: 0ms**
   - Page 2: **Legato: Off**, **Env Loop: 4** (loops 4 times per note)

2. Press **[MOD MATRIX]**
3. Create route: **ENV 4 → Filter 1 Cutoff**
   - **Depth: +35** (rhythmic filter pumping)

**Step 11 - Add Modulation of Waveshaping Intensity**
1. Press **[MOD MATRIX]**
2. Create route: **Velo On → Mutant 1 Depth**
   - **Depth: +55** (harder playing = more FM distortion)
3. Create route: **Velo On → Mutant 2 Depth**
   - **Depth: +45**

**Step 12 - Add Compression and Slight Delay**
1. Press **[POST-FX]**
   - **Type: Compressor**
   - **Param1 (Threshold): 60**
   - **Param2 (Ratio): 4:1**
   - **Dry/Wet: 100%** (full compression)

2. Press **[DELAY]**
   - **Type: Stereo**
   - **Time: 1/8**, **BPM Sync: On**
   - **Feedback: 15%** (single repeat)
   - **Dry/Wet: 12%** (very subtle)

**Result:** Aggressive bass with two-octave pitch drop on attack, velocity-sensitive waveshaping, looping envelope creating rhythmic filter pumping, and compression for consistent level. The MS-20 filter with high resonance and drive creates aggressive character.

**Alternative Budget:** Behringer Crave ($199) - Semi-modular Minimoog-inspired monosynth
**Alternative Different Character:** Moog Subsequent 25 ($899) - Pure Moog bass character, 2-note paraphonic
**Alternative Premium:** Moog Matriarch ($2,199) - 4-voice paraphonic with extensive patchbay
## Patch Example 4 - Polyphonic Aftertouch Pad (Expert)

**Sound Character:** Expressive pad where polyphonic aftertouch controls per-note filter brightness, waveshaping intensity, and reverb depth - showcasing the Hydrasynth's unique performance capabilities.

**Programming Tutorial:**

**Step 1 - Initialize and Configure**
1. Press **[INIT]** + **[SAVE]**
2. Press **[VOICE]**
   - **VoiceMode: Poly** (8-voice polyphony)
   - **Unison: Off**

**Step 2 - Create Rich Oscillator Blend**
1. Press **[OSC 1]**
   - **Mode: WaveScan**
   - Program wavelist: **Sine, Triangle, TriSaw, Saw, Square, Pulse 3, Horizon 5, Spect A3**
   - **WaveScan: 3.5** (between Saw and Square)
   - **Semi: 0**, **Cents: 0**

2. Press **[OSC 2]**
   - **Mode: WaveScan**
   - Same wavelist as OSC 1
   - **WaveScan: 4.2** (different position)
   - **Semi: +7** (perfect fifth)
   - **Cents: +15** (detuning)

3. Press **[OSC 3]**
   - **Wave: Sine**
   - **Semi: -12**

**Step 3 - Configure Mixer with Stereo Width**
1. Press **[MIXER]**
   - **Osc1 Vol: 85**
   - **Osc2 Vol: 80**
   - **Osc3 Vol: 50**
2. Page 2
   - **Osc1 Pan: -20**
   - **Osc2 Pan: +20**
   - **Osc3 Pan: 0**

**Step 4 - Add Subtle WaveScan Morphing**
1. Press **[LFO 3]**
   - **Wave: Sine**
   - **Rate: 0.06 Hz** (very slow)
   - **TrigSync: Poly** (independent per voice)
   - **Phase: 0°**

2. Press **[MOD MATRIX]**
3. Create route: **LFO 3 → OSC 1 WaveScan**, **Depth: +45**
4. Create route: **LFO 3 → OSC 2 WaveScan**, **Depth: +52**

**Step 5 - Configure Mutants for Harmonic Richness**
1. Press **[MUTANT 1]**
   - **Mode: Harmonic** (harmonic emphasis)
   - **Ratio: 3.0** (emphasizes 3rd harmonic)
   - **Depth: 45**
   - **Feedback: 15%**
   - **Dry/Wet: 35%**

2. Press **[MUTANT 2]**
   - **Mode: PW-ASM** (custom warp PWM)
   - **Ratio: 1.0**
   - **Depth: 40**
   - Access **Custom Edit** (Control button 7)
   - Set Warp points (create formant-like shape): 30, 50, 75, 90, 85, 65, 40, 25
   - **Dry/Wet: 30%**

**Step 6 - Configure Filters (Parallel)**
1. Press **[FILTER 1]**
   - **Type: Vowel** (vocal formant filter)
   - **Control: 35** (formant position)
   - **Cutoff: 60**
   - **Resonance: 50**
   - **ENV 1 amt: +30**
   - **LFO 1 amt: 0**
   - **Keytrack: 90%**
   - Page 2: **Filter Route: Parallel**, **Vow Order: AEIOU**

2. Press **[FILTER 2]**
   - **Type: LP-BP-HP**
   - **Morph: 25** (mostly low-pass)
   - **Cutoff: 68**
   - **Resonance: 35**
   - **ENV 1 amt: +25**

**Step 7 - Program Envelopes**
1. Press **[ENV 1]** (Filter)
   - **Attack: 1.8s**
   - **Decay: 2.2s**
   - **Sustain: 65**
   - **Release: 3.5s**

2. Press **[ENV 2]** (Amplitude)
   - **Attack: 1.5s**
   - **Decay: 1.8s**
   - **Sustain: 80**
   - **Release: 3.2s**

**Step 8 - Route Polyphonic Aftertouch to Multiple Destinations**

This is the key step that makes this patch expressive:

1. Press **[MOD MATRIX]**
2. Create route: **PolyAftT → Filter 1 Cutoff**
   - **Depth: +75** (pressing keys harder opens filter significantly)
3. Create route: **PolyAftT → Filter 2 Morph**
   - **Depth: +55** (pressure morphs Filter 2 from LP toward BP)
4. Create route: **PolyAftT → Mutant 1 Depth**
   - **Depth: +65** (pressure increases harmonic emphasis)
5. Create route: **PolyAftT → Mutant 2 Depth**
   - **Depth: +50** (pressure increases PWM warping)
6. Create route: **PolyAftT → Reverb Mix**
   - **Depth: +40** (pressure adds reverb depth per-note)

**Step 9 - Add Slow LFO Modulation of Mutant 2 Warp Points**
1. Press **[LFO 4]**
   - **Wave: Random** (smooth random modulation)
   - **Rate: 0.10 Hz**
   - **TrigSync: Off** (free-running)

2. Press **[MOD MATRIX]**
3. Create routes (if matrix slots available):
   - **LFO 4 → Mutant 2 Warp 3**, **Depth: +25**
   - **LFO 4 → Mutant 2 Warp 5**, **Depth: -20** (opposite direction)
   - **LFO 4 → Mutant 2 Warp 7**, **Depth: +30**

**Step 10 - Add Spatial Effects**
1. Press **[PRE-FX]**
   - **Type: Chorus**
   - **Param1 (Rate): 45**
   - **Param2 (Depth): 55**
   - **Dry/Wet: 30%**

2. Press **[REVERB]**
   - **Type: Plate**
   - **Time: 68**
   - **Tone: 50**
   - **HiDamp: 55**, **LoDamp: 40**
   - **Dry/Wet: 45%** (starting reverb level - aftertouch adds more)

**Step 11 - Add Stereo Width**
1. Press **[VOICE]**, Page 1
   - **Spread: 85** (wide stereo field)

**Performance Technique:**
- Play chord and hold
- Apply pressure to individual keys to brighten/emphasize those specific notes
- Press melody note harder to make it "sing" above the chord
- Vary pressure across held chord to create evolving texture
- The polyphonic aftertouch allows each note to have independent expression

**Result:** Rich pad where each note responds independently to finger pressure - pressing individual keys harder opens the filter, increases waveshaping harmonic complexity, morphs Filter 2 character, and adds reverb depth per-note. This showcases the Hydrasynth's unique polyphonic aftertouch capability that's rare in hardware synthesizers.

**Alternative Budget:** None at this price point offers polyphonic aftertouch
**Alternative Different Character:** Arturia MicroFreak ($349) - Pressure-sensitive keybed (different feel)
**Alternative Premium:** Roli Seaboard Rise 2 ($1,399) - MPE controller with continuous key surface
## Patch Example 5 - Complex Sequence with Ribbon Performance (Master)

**Sound Character:** Rhythmic sequence with Step LFO melodic bass line, ribbon controller controlling multiple parameters in XY mode, and meta-modulation creating evolving complexity - demonstrates advanced modulation routing.

**Programming Tutorial:**

**Step 1 - Initialize and Configure**
1. Press **[INIT]** + **[SAVE]**
2. Press **[VOICE]**
   - **VoiceMode: Mono**
   - **Glide: Off**

**Step 2 - Configure Oscillators**
1. Press **[OSC 1]**
   - **Wave: Saw**
   - **Semi: -12** (bass range)

2. Press **[OSC 2]**
   - **Mode: WaveScan**
   - Program wavelist: **Sine, Saw, Square, Horizon 4, Flux 2, Tronic 3, Harmon 5, Neuton 2**
   - **WaveScan: 2.0**
   - **Semi: 0** (normal pitch - Step LFO will control this)

3. Press **[OSC 3]**
   - **Wave: Square**
   - **Semi: +12**

**Step 3 - Set Mixer Levels**
1. Press **[MIXER]**
   - **Osc1 Vol: 100**
   - **Osc2 Vol: 0** (will be brought in via modulation)
   - **Osc3 Vol: 45**

**Step 4 - Program Step LFO for Melodic Sequence**
1. Press **[LFO 3]**
   - **Wave: Step**
   - **Rate: 1/16** (sixteenth notes)
   - **BPM Sync: On**
   - **TrigSync: Single** (synced across all notes)
   - Page 2:
   - **Steps: 16** (16-step sequence)
   - **SemiLock: On** (quantize to semitones)
   - **One-Shot: Off** (loops continuously)
   - **Smooth: 15** (slight portamento between steps)

**Step 5 - Program Step LFO Sequence**
1. Access Step Edit page
2. Program 16-step bass line (semitones): 0, +7, +3, +5, 0, -2, +7, +10, +3, +5, +7, +12, +5, +3, 0, -5
3. Route to oscillator pitch:
   - Press **[MOD MATRIX]**
   - **LFO 3 → OSC 1 Pitch**, **Depth: +128** (full semitone control)

**Step 6 - Configure Ribbon in XY Mod Mode**
1. Press **[RIBBON]**
   - **Mode: XY Mod** (X-axis = position, Y-axis = pressure)
   - **Range**: N/A (XY mode uses full 0-127 range)
   - **Smoothing: 20**

**Step 7 - Route Ribbon X-Axis (Horizontal Position)**
1. Press **[MOD MATRIX]**
2. **RbnAbs+ → OSC 2 WaveScan**, **Depth: +96** (sweep across wavetable)
3. **RbnAbs+ → Filter 1 Cutoff**, **Depth: +85** (brightness control)
4. **RbnAbs+ → Osc2Vol**, **Depth: +100** (brings in OSC 2 as you move right)

**Step 8 - Route Ribbon Y-Axis (Pressure)**
1. **RbnAbs Y-pressure → Filter 1 Resonance**, **Depth: +70** (pressing harder adds resonance)
2. **RbnAbs Y-pressure → Mutant 1 Depth**, **Depth: +65** (pressure controls distortion)
3. **RbnAbs Y-pressure → Delay Mix**, **Depth: +50** (pressure adds delay)

**Step 9 - Add Meta-Modulation with LFO 5**
1. Press **[LFO 5]**
   - **Wave: Sine**, **Rate: 0.15 Hz**, **TrigSync: Off**
2. Press **[MOD MATRIX]**
3. Create meta-modulation routes:
   - **LFO 5 → ModMtrx Depth** (slot controlling RbnAbs+ → WaveScan), **Depth: +64**
   - **LFO 5 → LFO 3 Rate**, **Depth: +40** (sequence speeds up and slows down)
   - **LFO 5 → Mutant 1 Ratio**, **Depth: +35** (harmonic content shifts)

**Step 10 - Configure Aggressive Filter and Waveshaping**
1. Press **[FILTER 1]**
   - **Type: LP MS20**, **Cutoff: 50**, **Resonance: 75**
   - **ENV 1 amt: +45**, **Keytrack: 0%**
   - Page 2: **Drive: 55**, **Drive Route: Post**

2. Press **[MUTANT 1]**
   - **Mode: FM-Lin**, **Source: OSC 3**
   - **Ratio: 2.0**, **Depth: 60**, **Feedback: 30%**, **Dry/Wet: 50%**

**Step 11 - Program Percussive Envelopes**
1. Press **[ENV 1]**: **Attack: 3ms**, **Decay: 220ms**, **Sustain: 30**, **Release: 180ms**
2. Press **[ENV 2]**: **Attack: 1ms**, **Decay: 280ms**, **Sustain: 50**, **Release: 150ms**

**Step 12 - Add Effects**
1. Press **[DELAY]**: **Type: Ping-Pong**, **Time: 1/8**, **Feedback: 40%**, **Dry/Wet: 20%** (ribbon adds more)
2. Press **[POST-FX]**: **Type: Distortion**, **Param1: 60**, **Param2: 70**, **Dry/Wet: 25%**

**Performance Technique:**
- Hold single bass note - Step LFO creates 16-step melodic sequence
- Move finger left-right on ribbon: crossfades in OSC 2 with wavetable morphing and opens filter
- Press harder on ribbon: adds resonance, distortion, and delay
- LFO 5 creates slow meta-modulation making the sequence evolve over time
- Combine with arpeggiator for even more complexity

**Result:** Single held note becomes 16-step melodic sequence. Ribbon X-axis controls wavetable position, OSC 2 level, and filter brightness. Ribbon Y-axis controls resonance, distortion, and delay. LFO 5 modulates the modulation itself, creating evolving complexity. This demonstrates the Hydrasynth's deep modulation architecture and unique ribbon controller.

**Alternative Budget:** Korg Volca FM ($159) - Affordable 6-op FM with sequencer (very different approach)
**Alternative Different Character:** Elektron Digitone ($799) - 8-voice FM synth with parameter locks
**Alternative Premium:** Sequential Prophet-10 ($4,999) - 10-voice dual-layer analog (traditional approach)
## Alternative Synthesizers

The ASM Hydrasynth Keyboard occupies a unique position in the synthesizer market, but several alternatives exist depending on your priorities, budget, and sonic preferences.

### Budget Alternatives (Under $700)

These instruments provide strong value but sacrifice polyphonic aftertouch, voice count, or modulation depth compared to the Hydrasynth.

**Arturia MicroFreak ($349)**
- **Strengths:** Digital oscillator with 25 synthesis modes, pressure-sensitive flat keybed, built-in sequencer, CV connectivity, extremely affordable
- **Limitations:** Paraphonic (single filter), unconventional keybed (not traditional keys), limited polyphony, no traditional aftertouch
- **Best for:** Experimental sound design, modular integration, budget-conscious producers who don't need polyphonic aftertouch
- **Sonic character:** More raw and digital compared to Hydrasynth's smooth wavetable approach

**Korg Minilogue XD ($649)**
- **Strengths:** 4-voice analog-digital hybrid, multi-engine oscillator (user waveforms, FM, noise), built-in effects, sequencer, analog warmth
- **Limitations:** Only 4 voices, channel aftertouch only, smaller modulation matrix, no ribbon controller
- **Best for:** Analog enthusiasts wanting hybrid capabilities, hands-on workflow, portability
- **Sonic character:** Warmer, more organic than Hydrasynth due to analog oscillators and filter

**Modal Cobalt8 ($549)**
- **Strengths:** 8-voice virtual analog, 40 unique algorithm oscillators, morphing capabilities, extensive modulation, built-in effects
- **Limitations:** Virtual analog rather than wavetable, channel aftertouch only, no ribbon controller
- **Best for:** Those preferring virtual analog sound over wavetables, extensive modulation needs
- **Sonic character:** Vintage-inspired virtual analog warmth versus Hydrasynth's modern digital clarity

**Behringer DeepMind 6 ($499)**
- **Strengths:** 6-voice true analog, extensive modulation matrix, built-in effects, WiFi control app, analog warmth
- **Limitations:** Channel aftertouch only, pure analog (no wavetables or digital oscillators), 6 voices
- **Best for:** Analog purists, studio producers who don't perform with aftertouch
- **Sonic character:** Classic analog warmth reminiscent of Juno-style synthesis

### Different Character (Similar Price: $1,000-1,600)

These alternatives offer comparable features but with fundamentally different sonic approaches.

**Novation Summit ($1,499)**
- **Strengths:** 16-voice bi-timbral, 3 NCO (New Oxford Oscillators) per voice with wavetables and FM, dual filters, extensive modulation, channel aftertouch
- **Limitations:** No polyphonic aftertouch, no ribbon controller, deeper menu structure than Hydrasynth
- **Best for:** Those needing 16 voices and bi-timbral operation, studio producers
- **Sonic character:** More aggressive, raw digital sound compared to Hydrasynth's smoother wavetable engine

**Korg Wavestate ($799)**
- **Strengths:** Wave sequencing (unique approach), 64+ stereo voices, extensive motion sequencing, lane-based modulation
- **Limitations:** No aftertouch at all, fundamentally different workflow (wave sequencing vs traditional), no traditional synthesis controls
- **Best for:** Ambient/cinematic producers, those wanting evolving textures and sequences
- **Sonic character:** Focused on movement and evolution rather than traditional playability

**Waldorf Iridium ($2,299)**
- **Strengths:** 16-voice wavetable/granular/resonator synthesis, desktop format, deep sound design capabilities
- **Limitations:** Desktop only (no keys), no aftertouch (needs external controller), more complex workflow
- **Best for:** Studio sound designers, those with existing controller, modular enthusiasts
- **Sonic character:** Similar wavetable approach but different algorithms and sonic footprint

### Premium Alternatives (Over $2,500)

These instruments offer superior build quality, more voices, or different synthesis approaches at significantly higher cost.

**Arturia PolyBrute ($2,999)**
- **Strengths:** 6-voice morphing analog, FullTouch keybed with polyphonic aftertouch, ribbon controller, extensive modulation matrix, Morphée pad controller
- **Limitations:** Only 6 voices, pure analog (no wavetables), more expensive
- **Best for:** Performers needing expressive control, analog enthusiasts
- **Sonic character:** Warm, powerful analog sound versus Hydrasynth's digital wavetable clarity
- **Key differentiator:** Also has polyphonic aftertouch, making it the closest premium alternative

**Sequential Prophet-6 ($2,999)**
- **Strengths:** 6-voice pure analog, classic Sequential/Dave Smith sound, premium build, channel aftertouch
- **Limitations:** No polyphonic aftertouch, pure analog (no digital oscillators), 6 voices, simpler modulation
- **Best for:** Analog purists, those seeking classic Sequential sound
- **Sonic character:** Iconic warm analog sound fundamentally different from Hydrasynth's digital approach

**ASM Hydrasynth Deluxe ($2,219)**
- **Strengths:** 16 voices, 73-key PolyTouch keybed, bi-timbral operation, same synthesis engine as Hydrasynth Keyboard
- **Limitations:** Larger/heavier, more expensive
- **Best for:** Those needing more voices and full-size keybed with polyphonic aftertouch
- **Sonic character:** Identical to Hydrasynth Keyboard with doubled voice count

**Moog Matriarch ($2,199)**
- **Strengths:** 4-voice paraphonic analog, extensive patchbay, pure Moog sound, stereo analog delay
- **Limitations:** Paraphonic (not fully polyphonic), no aftertouch, pure analog approach
- **Best for:** Moog enthusiasts, semi-modular exploration, bass-heavy music
- **Sonic character:** Classic Moog warmth and character, fundamentally different from wavetable synthesis

**Comparison Summary Table:**

| Synthesizer | Price | Voices | Poly Aftertouch | Ribbon | Synthesis Type |
|-------------|-------|--------|-----------------|--------|----------------|
| Hydrasynth Keyboard | $1,299 | 8 | Yes | Yes (4-octave) | Wavetable |
| MicroFreak | $349 | 4 para | Pressure keys | No | Digital multi |
| Minilogue XD | $649 | 4 | No | No | Analog hybrid |
| Modal Cobalt8 | $549 | 8 | No | No | Virtual analog |
| DeepMind 6 | $499 | 6 | No | No | Analog |
| Summit | $1,499 | 16 | No | No | Digital |
| PolyBrute | $2,999 | 6 | Yes | Yes | Analog |
| Prophet-6 | $2,999 | 6 | No | No | Analog |
| Hydrasynth Deluxe | $2,219 | 16 | Yes | Yes (4-octave) | Wavetable |
## Pairs Well With

The Hydrasynth integrates seamlessly with various studio gear to expand its capabilities and create complete production environments.

### Effects Pedals

**Strymon BigSky Reverb ($479)**
- 12 studio-class reverb algorithms
- Stereo I/O preserves Hydrasynth's wide stereo field
- MIDI control over parameters

**Strymon Timeline Delay ($479)**
- 12 delay types from classic tape to modern digital
- Particularly effective on lead patches
- Handles line-level synth signals cleanly

**Universal Audio UAFX Galaxy '74 Tape Echo ($349)**
- Roland Space Echo emulation
- Built-in reverb adds depth
- Vintage character complements digital clarity

**Hologram Microcosm ($449)**
- Granular effects, delays, loopers
- Creates experimental textures
- Effective on evolving pad patches

**Boss BD-2 Blues Driver ($99)**
- Warm tube-like overdrive
- Simple, reliable, affordable
- Subtle to aggressive drive range

### Eurorack Modular Integration

**Expert Sleepers ES-9 ($549)**
- USB audio/CV interface - 16 channels
- Bidirectional communication
- Essential for complex routing

**Mutable Instruments Rings ($319)**
- Resonator module adds physical modeling
- Hydrasynth sequences can trigger Rings

**Make Noise Maths ($329)**
- Function generator/envelope/LFO
- Complex envelope shapes via CV inputs

**Intellijel Quadra + Expander ($238 + $39)**
- 4-channel envelope/function generator
- Additional CV modulation sources

### Drum Machines and Sequencers

**Elektron Digitakt ($799)**
- 8-track drum machine and sampler
- MIDI sequences Hydrasynth
- Unified clock synchronization

**Arturia DrumBrute Impact ($299)**
- Affordable analog drum machine
- Simple MIDI integration

**Roland TR-8S ($699)**
- Classic Roland drum sounds plus sampling
- ACB modeling
- Extensive pattern manipulation

### Audio Interfaces

**Focusrite Scarlett 2i2 ($179) or 4i4 ($299)**
- Essential for DAW recording
- Stereo line inputs
- Low latency monitoring

**Universal Audio Apollo Twin X ($999+)**
- Premium conversion with UAD DSP
- Real-time effects processing
- ADAT expandability

### Studio Monitors

**KRK Rokit 5 G4 ($169 each)**
- Affordable studio monitors
- Balanced frequency response

**Yamaha HS5 ($199 each)**
- Accurate playback
- Reveal synthesis details

### Complete Studio Setup Example ($4,000 budget)

**Core:**
- ASM Hydrasynth Keyboard: $1,299
- Focusrite Scarlett 4i4: $299
- KRK Rokit 5 G4 (pair): $338

**Rhythm:**
- Arturia DrumBrute Impact: $299

**Effects:**
- Strymon BigSky: $479
- Boss BD-2 Blues Driver: $99
- Hologram Microcosm: $449

**Accessories:**
- MIDI cables, audio cables, keyboard stand, headphones: ~$200

**Total: ~$3,462** (leaves room for expansion)
## Historical Context and Innovations - Part 1

The ASM Hydrasynth represents several significant innovations in modern synthesizer design, building on decades of synthesis evolution.

### Polyphonic Aftertouch Heritage

Polyphonic aftertouch - independent pressure sensing per key - has been rare since the 1970s-80s golden age:

**Historical Implementations:**
- **Yamaha CS-80 (1977, $6,900):** Legendary 8-voice analog with full polyphonic aftertouch. Influenced generations but remained prohibitively expensive.
- **Sequential Prophet T8 (1983, $4,995):** Combined Prophet-5 synthesis with polyphonic aftertouch. Technology existed but at premium pricing.
- **Ensoniq SQ-80 and VFX series (1987-1989):** More affordable digital synths with polyphonic aftertouch, proving broader market viability.
- **Roland A-80 (1989):** Master keyboard with polyphonic aftertouch but no built-in synthesis.

**The Dark Ages (1990-2010):**
For two decades, polyphonic aftertouch virtually disappeared. Cost pressures and software synthesis rise meant manufacturers focused on channel aftertouch. The expressive per-note control that defined the CS-80 became unavailable.

**Modern Revival (2010-present):**
- **Haken Continuum (2011):** Continuous playing surface with per-note expression, completely different from traditional keyboards ($2,000-4,000).
- **Roli Seaboard (2013):** Silicon key surface with MPE - revolutionary but requiring new playing technique.
- **ASM Hydrasynth (2019):** First modern synthesizer combining traditional keybed feel with polyphonic aftertouch at accessible pricing ($1,299).
- **Arturia PolyBrute (2020):** Followed with FullTouch polyphonic aftertouch ($2,999).
- **Native Instruments Kontrol S61/S88 MK3 (2022):** Controllers (not synths) with polyphonic aftertouch.

**Hydrasynth's Innovation:** ASM made polyphonic aftertouch accessible and combined it with modern sound engine. Previous implementations required vintage instruments (expensive, unreliable) or controllers without synthesis. The Hydrasynth proved market demand existed.

### Wavetable Synthesis Evolution

**Origins:**
- **PPG Wave series (1981-1987):** Wolfgang Palm pioneered digital wavetable synthesis. Allowed scanning through waveform tables, creating evolving digital timbres unavailable in analog.
- **Waldorf Wave and Microwave (1989-1990s):** Refined PPG concepts with extensive modulation and digital effects.

**Software Era:**
- **Ableton Wavetable, Serum, Massive:** Software made wavetable synthesis ubiquitous. Custom wavetable creation and visual editing became standard.

**Hardware Return:**
- **Waldorf Blofeld (2007):** Affordable hardware wavetable synthesis returned.
- **Korg Wavestate (2020):** Wave sequencing (evolved wavetables) with 64+ voices.
- **ASM Hydrasynth (2019):** User-programmable 8-position WaveScan per oscillator, freely morphable, extensive modulation destinations.

**Hydrasynth's Approach:** Rather than preset wavetables, provides 219 single-cycle waveforms users arrange into custom 8-position lists. WaveScan parameter smoothly morphs between adjacent waveforms. Position is modulation destination. Combines wavetable flexibility with intuitive control.

### Mutator Waveshaping Innovation

**Historical Context:**
- **Waveshaping/Wavefolding:** Buchla, Serge pioneered waveshaping in 1970s, but remained primarily modular technique.
- **Digital Waveshaping:** Yamaha DX-series FM (1983+) and Korg M1 (1988) proved digital algorithms could create complex harmonic content.
- **Modern Modular:** Mutable Instruments (Warps, Rings) and Eurorack modules made complex digital processing accessible.

**Hydrasynth's Mutators:** Eight algorithms per Mutator (FM-Lin, WavStack, OSC Sync, PW-Orig, PW-Sqeez, PW-ASM, Harmonic, PhazDiff) provide waveshaping depth typically requiring modular systems. Serial architecture (Mutant 1 → Mutant 2) enables cascaded processing. Each Mutant has independent Dry/Wet control.

**Unique Aspect:** PW-ASM mode with 8 independent Warp points - each Warp point is separate modulation destination. Enables spectral complexity previously requiring extensive modular patching or software processing.
## Historical Context and Innovations - Part 2

### Ribbon Controller Implementation

Long ribbon controllers have appeared sporadically:

**Historical Examples:**
- **Yamaha CS-80 (1977):** Featured ribbon controller above keys.
- **Kurzweil K2000 series (1991+):** Included ribbon with multiple modes.
- **Alesis Andromeda (2000):** High-end analog with comprehensive ribbon.

**Modern Implementations:**
- Most modern synthesizers omit ribbons due to cost and space constraints
- Arturia PolyBrute (2020): Includes ribbon alongside Morphée
- **ASM Hydrasynth (2019):** Full 4-octave ribbon with three modes:
  - Absolute (traditional pitch bend from center)
  - Relative (touch becomes zero point)
  - XY Mod (position and pressure as independent mod sources)

**Hydrasynth's Innovation:** XY Mod mode treating ribbon as two-dimensional (horizontal position + vertical pressure) is unusual. Most ribbon implementations are single-axis. Creates unique performance possibilities.

### Modulation Matrix Depth

**Historical Systems:**
- **ARP 2600 (1971):** Semi-modular with patchbay - flexible but complex
- **Sequential Prophet-5 (1978):** Simple hardwired modulation (Poly-Mod)
- **Sequential Prophet VS (1986):** Early digital mod matrix
- **Oberheim Matrix series (1980s):** Modulation matrix concept emerged
- **Access Virus (1997+):** Extensive digital modulation matrix set new standards

**Modern Deep Modulation:**
- **Clavia Nord Modular/G2 (1998-2009):** Software-style patching in hardware
- **Elektron Analog Four/Keys (2013+):** Performance-oriented parameter locks
- **Sequential Prophet X/12 (2018+):** Deep digital modulation in premium instruments

**Hydrasynth's Implementation:**
- 32 slots with any source to any destination
- Meta-modulation: modulation depths themselves are destinations
- Macros control up to 8 destinations each - then Macros themselves are destinations
- CV Mod In/Out integrated into matrix

**Innovation:** Combination of deep matrix + Macros + meta-modulation creates modulation complexity rivaling modular systems while remaining intuitive.

### ASM (Ashun Sound Machines) Company Background

ASM is relatively new with connections to established companies:

**Corporate Structure:**
- Part of Medeli Electronics, Hong Kong-based manufacturer established 1980s
- Medeli primarily produces educational keyboards, digital pianos, OEM products
- ASM represents Medeli's entry into premium synthesizer market

**Design Philosophy:**
- Founded by Glen Darcey (lead designer) with synthesizer design experience
- Focus on expressive performance features
- Combination of digital precision with performance-oriented hardware
- Aggressive pricing strategy: premium features at mid-range pricing

**Product Line:**
- **Hydrasynth Desktop (2019):** First product - desktop module ($799)
- **Hydrasynth Keyboard (2019):** 49-key PolyTouch version ($1,299)
- **Hydrasynth Explorer (2020):** Compact 37-key version ($599)
- **Hydrasynth Deluxe (2020):** 73-key 16-voice version ($2,219)

**Market Impact:**
Hydrasynth forced other manufacturers to reconsider polyphonic aftertouch. Arturia's PolyBrute (2020) and Native Instruments' Kontrol keyboards (2022) followed, suggesting ASM successfully proved market demand.
## Why This Instrument Excels - Part 1

The ASM Hydrasynth Keyboard occupies a unique position in the modern synthesizer landscape.

### 1. Expressive Performance Features at Accessible Price

**Polyphonic Aftertouch:** Control individual note brightness, filter movement, or modulation depth by varying pressure per key. This per-note expression was previously limited to vintage instruments costing thousands (used Yamaha CS-80s: $15,000-30,000) or modern MPE controllers requiring different techniques.

**4-Octave Ribbon Controller:** Full-width ribbon enables pitch bends, vibrato, melodic playing, or XY modulation control. In XY mode, horizontal position and vertical pressure operate as independent modulation sources - implementation found on virtually no other synthesizers.

**Result:** Performers create expressive, nuanced performances impossible on standard channel-aftertouch keyboards. Held chord becomes canvas for expression as individual notes swell, morph, and evolve.

### 2. Deep Modulation in Intuitive Interface

**32-Slot Mod Matrix:** With 35 sources and 191 destinations, modulation possibilities rival modular synthesizers. LFOs modulate other LFO rates. Envelopes modulate envelope times. Macros control multiple parameters - then Macros themselves become destinations.

**Front-Panel Workflow:** Despite complexity, interface remains accessible. Press module button, parameters appear on eight knobs. No menu diving for core synthesis.

**Macro System:** Eight Macros with eight destinations each. Single knob simultaneously controls filter cutoff, reverb mix, oscillator detune, envelope decay - transforming patches in real-time.

**Result:** Sound designers access modular-level complexity with immediate hands-on control.

### 3. Hybrid Synthesis Approach

**WaveScan Morphing:** User-programmable 8-position wavetable lists per oscillator. Unlike preset wavetables, you select which eight waveforms from 219-waveform library, creating custom sonic paths.

**Mutator Waveshaping:** Four Mutators with eight algorithms each (FM, Sync, PWM variants, Harmonic, Phase) add complexity before filter stage. Serial architecture enables cascaded waveshaping.

**Dual Filters:** 16 types in Filter 1 (vocal formants, ladder emulations, cascades) plus morphable state-variable Filter 2. Series or parallel routing enables subtle timbral shaping to aggressive 60dB/octave brick-wall filtering.

**Result:** Synthesis architecture combines wavetable flexibility, analog-modeling filters, digital waveshaping. Create smooth evolving pads, aggressive distorted basses, classic analog-style leads, experimental timbres from single instrument.

### 4. Eight Voices with Three Oscillators Each

**Voice Architecture:** Eight-voice polyphony with three oscillators per voice (24 oscillators total), four Mutators, dual filters, five envelopes, five LFOs. Serious sonic density. Each voice processes independently.

**Comparison:** Many competitors at this price offer 4-6 voices (Minilogue XD: 4, DeepMind: 6, PolyBrute: 6). Hydrasynth's 8 voices with three oscillators enables rich chords and layered textures.

**Unison Modes:** 2, 4, or 8-voice unison with detuning and stereo spread creates massive lead tones when polyphony isn't needed.

**Result:** Sufficient polyphony for complex chords while maintaining three oscillators per voice. Voice count sweet spot for chord-heavy ambient and monophonic lead patches with massive unison.

### 5. CV/Gate Integration

**Modular Connectivity:** CV/Gate inputs/outputs integrate Hydrasynth into Eurorack. Mod Matrix treats CV inputs as standard modulation sources. CV outputs send Hydrasynth modulation to external modules.

**Use Cases:**
- External sequencer controls Hydrasynth oscillator pitch via CV In
- Hydrasynth LFO output modulates Eurorack filter cutoff via CV Out
- Eurorack envelope generator modulates Hydrasynth waveshaping
- Hydrasynth sequences while generating clock/gate for modular drums

**Result:** Functions as both standalone instrument and Eurorack system hub. Unlike most keyboard synthesizers that ignore modular integration, Hydrasynth embraces it.
## Why This Instrument Excels - Part 2

### 6. Build Quality and Reliability

**Construction:** Metal chassis with aluminum end cheeks. Keybed feels solid and responsive. Control knobs weighted and smooth. Ribbon controller is capacitive touch (no moving parts to fail).

**Stability:** Digital engine means no oscillator drift, no tuning issues, no temperature sensitivity. Patches recall perfectly. Unlike vintage analog requiring warm-up and calibration, Hydrasynth is instantly stable.

**Long-term Ownership:** Firmware updates continue adding features (v1.5 added new filter types, microtonal scales, distortion effect, 64-step LFOs, improved randomization). Instrument improves over time.

**Result:** Professional build quality at prosumer pricing. Feels premium despite costing half what competitors charge.

### 7. Unique Sonic Footprint

**The Hydrasynth Sound:** Smooth wavetable morphing + analog-modeled filters + digital waveshaping = sonic character neither purely digital nor purely analog. Pads have lush digital clarity with warmth from filter stage. Leads cut through without harshness. Basses have weight and presence.

**Comparison:**
- **Versus pure analog (Prophet-6, PolyBrute):** More precise, more detailed, more "modern" - analog has warmth but less harmonic complexity
- **Versus virtual analog (Summit, Cobalt8):** Wavetable engine provides more timbral variety than traditional subtractive virtual analog
- **Versus software (Serum, Massive):** Hardware immediacy and performability make it play differently despite similar synthesis methods

**Result:** Carved out sonic territory: digital precision and complexity with analog-inspired musicality. Doesn't try to emulate vintage analog - establishes its own modern digital character.

### 8. Price-to-Feature Ratio

**What $1,299 Gets:**
- 8-voice polyphony with three oscillators per voice
- Polyphonic aftertouch (rare at any price)
- 4-octave ribbon controller
- 32-slot modulation matrix
- Comprehensive effects (9 Pre/Post-FX types, 5 Delay types, 4 Reverb types)
- CV/Gate I/O for Eurorack
- Premium build quality

**Comparison:**
- **Arturia PolyBrute ($2,999):** Also has polyphonic aftertouch but costs 2.3x more, only 6 voices, pure analog (no wavetables)
- **Sequential Prophet-6 ($2,999):** No polyphonic aftertouch, 6 voices, pure analog only
- **Novation Summit ($1,499):** More voices (16) but no polyphonic aftertouch, no ribbon

**Result:** Delivers premium features at mid-tier pricing. ASM's aggressive pricing made polyphonic aftertouch accessible rather than limiting it to premium instruments.

### 9. Versatility Across Genres

**Electronic/Dance:** Percussive basses, aggressive leads, rhythmic sequences - digital clarity and waveshaping cut through dense electronic mixes

**Ambient/Cinematic:** Evolving pads with slow wavetable morphing, spacious reverbs, polyphonic aftertouch create immersive soundscapes

**Pop/Rock:** Classic leads, warm pads, punchy bass lines - handles traditional keyboard roles while adding modern expression

**Experimental:** Deep modulation, ribbon controller, Eurorack integration enable sound design pushing synthesis boundaries

**Result:** Unlike instruments optimized for specific genres, Hydrasynth adapts. Synthesis engine provides enough sonic range to work across musical contexts.

### 10. Future-Proof Design

**Firmware Updates:** ASM continues adding features. V1.5 update added new filter types, distortion effect, expanded Step LFO to 64 steps, microtonal scale import - significant features post-launch at no cost.

**Architecture Headroom:** Synthesis engine has capacity for expansion. Modulation matrix could support additional sources/destinations. Oscillator engine could accommodate new waveshaping modes.

**Standard Connectivity:** MIDI, USB, CV/Gate means Hydrasynth integrates with current studio standards and will remain compatible as technology evolves.

**Result:** Instrument improves over time rather than becoming outdated. Early adopters from 2019 received multiple major feature additions through firmware rather than needing new hardware.
## Conclusion

The ASM Hydrasynth Keyboard succeeds by combining rare expressive performance features (polyphonic aftertouch, full-width ribbon controller) with deep synthesis capabilities (wavetable morphing, cascaded waveshaping, extensive modulation) at pricing accessible to working musicians. It carved out unique territory: neither purely digital nor analog-emulating, but establishing its own sonic character through hybrid synthesis approaches.

For performers, the polyphonic aftertouch and ribbon controller enable expression impossible on standard keyboards. For sound designers, the modulation depth rivals modular systems while remaining intuitive. For producers, the sonic palette spans from smooth cinematic pads to aggressive electronic basses.

The Hydrasynth's greatest achievement is democratizing premium features. Polyphonic aftertouch previously required vintage instruments costing tens of thousands or modern alternatives at $3,000+. ASM proved the market existed for expressive keyboards at mid-tier pricing, forcing the industry to reconsider what features belong in different price brackets.

Whether you're exploring ambient soundscapes with slowly evolving wavetable morphing, performing aggressive electronic bass with velocity-sensitive waveshaping, or creating expressive lead melodies with per-note filter control via polyphonic aftertouch - the Hydrasynth provides the tools. It's a modern digital instrument that respects the performability and immediacy that made classic analog synthesizers legendary while pushing synthesis capabilities forward through contemporary technology.

---

*ASM Hydrasynth Keyboard - Complete Guide - All Sessions Finished*

---

## Guide Statistics

- **Total Sessions:** 6 of 6
- **Patch Examples:** 5 (Basic through Master)
- **Module Coverage:** Complete (Oscillators, Mutants, Mixer, Filters, Envelopes, LFOs, Mod Matrix, Macros, Performance Features, Effects, System)
- **Alternative Synthesizers:** 15+ options across budget/character/premium categories
- **Complementary Gear:** Effects pedals, Eurorack modules, drum machines, audio interfaces
- **Historical Context:** Polyphonic aftertouch evolution, wavetable synthesis development, modulation system progression
- **Framework Compliance:** Enhanced format with alternatives, pairs well with, historical context, why it excels

## Session Summary

- ✅ Session 1: Synthesis Engine (Oscillators, Mutants, Mixer, Filters)
- ✅ Session 2: Modulation System (Envelopes, LFOs, Mod Matrix, Macros)
- ✅ Session 3: Performance Features (Ribbon, Polyphonic Aftertouch, Arpeggiator, Voice Management)
- ✅ Session 4: CV/Gate/Clock Integration (Eurorack connectivity, clock sync, modular techniques)
- ✅ Session 5: Effects and System (Pre-FX, Delay, Reverb, Post-FX, system setup, troubleshooting)
- ✅ Session 6: Patch Examples, Alternatives, Historical Context, Why It Excels
