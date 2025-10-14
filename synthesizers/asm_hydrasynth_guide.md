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
- Patch Examples 1-5 (Basic → Intermediate → Advanced → Expert)
- Complete programming tutorials with alternative synthesizer options

---

*ASM Hydrasynth Keyboard - Session 1 of 6 - Synthesis Architecture Foundation*
