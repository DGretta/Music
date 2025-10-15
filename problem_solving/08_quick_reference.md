# Problem-Solving Guide #8: Quick Reference Troubleshooting
*Diagnostic flowcharts and symptom-based solutions for rapid problem identification*

---

## How to Use This Guide

This guide provides **fast diagnostic paths** for common problems. Each section starts with a symptom and leads you through quick checks to identify and fix the issue. For detailed explanations, refer to the specific Problem-Solving Guides referenced.

**Structure:**
- **Symptom** → Quick diagnostic questions → Solution path → Detailed guide reference

---

## Sound & Signal Problems

### "No sound at all"

**Quick checks:**
1. ☐ Is the volume/VCA turned up?
2. ☐ Are cables fully plugged in at both ends?
3. ☐ Is the envelope triggered/gate on?
4. ☐ Is the filter cutoff open (not at zero)?
5. ☐ Are oscillators actually oscillating (check tuning)?
6. ☐ Monitor/speakers on and correct input selected?

**Common causes:**
- VCA at zero (no envelope or envelope not triggered)
- Filter cutoff closed (no sound passes through)
- Cable unplugged or faulty
- Wrong monitor input selected

**→ See Guide #3: Sound Shaping** (envelopes, filters)

---

### "Sound is weak, thin, or distorted"

**Quick checks:**
1. ☐ Impedance mismatch? (Output high-Z into low-Z input?)
2. ☐ Gain staging issue? (Too low or too high?)
3. ☐ Cable quality problem? (Long run with cheap cable?)
4. ☐ Filter tracking disabled? (Sounds wrong in different octaves?)
5. ☐ Phase cancellation? (Check in mono)

**Diagnostic path:**
- **Weak signal** → Check impedance match, use buffer/preamp → **Guide #7**
- **Thin in certain octaves** → Enable filter tracking → **Guide #3**
- **Distorted** → Check gain staging, reduce input level → **Guide #6**
- **Different on different playback** → Phase problems → **Guide #6**

---

### "Sound disappears in mono but fine in stereo"

**Immediate fix:**
- **Bass frequencies:** Keep mono below 100-150Hz
- **Check phase correlation meter:** Should read above +0.5
- **Remove stereo widening** from bass elements
- **Test on mono speaker** to verify

**→ See Guide #6: Mixing and Production** (phase problems)

---

### "Sound changes when I play different notes"

**Quick diagnostic:**
1. ☐ Filter tracking enabled? → If no, enable it → **Guide #3**
2. ☐ Keyboard scaling wrong? → Adjust tracking amount
3. ☐ Oscillator tuning drift? → Calibrate oscillators
4. ☐ Envelope amount varies? → Check velocity or modulation routing

**Most common:** Filter tracking disabled or set incorrectly

**→ See Guide #3: Sound Shaping** (filter tracking)

---

## Timing & Sync Problems

### "Devices won't sync at all"

**Quick checks:**
1. ☐ Master/secondary settings correct?
2. ☐ Same sync standard? (MIDI clock, DIN sync, analog clock)
3. ☐ Cables properly connected?
4. ☐ PPQN matching across all devices?
5. ☐ External sync enabled on secondary devices?

**Diagnostic path:**
- **No sync at all** → Check connections, master/secondary settings
- **Wrong tempo relationship** → Check PPQN settings (must match)
- **Different standards** → Need converter (DIN sync ↔ MIDI, MIDI ↔ CV)

**→ See Guide #5: Timing and Sync** (sync standards, PPQN)

---

### "Everything drifts out of sync over time"

**Immediate fixes:**
1. ☐ **Single master clock** - Only ONE device generates timing
2. ☐ **All other devices set to external sync** - Disable internal clocks on secondaries
3. ☐ **Same power circuit** - All gear on same electrical circuit
4. ☐ **Quality cables** - Replace cheap MIDI/clock cables

**Most common cause:** Multiple devices using internal clocks instead of one master

**→ See Guide #5: Timing and Sync** (sync drift, clock sources)

---

### "Devices won't start together"

**Quick checks:**
1. ☐ MIDI Start/Stop enabled on other, secondary, devices?
2. ☐ Analog clock? (No start/stop - manual start required)
3. ☐ Transport messages enabled on master?
4. ☐ Song Position Pointer enabled if required?

**By sync type:**
- **MIDI clock:** Check Start/Stop settings in device menus
- **DIN sync:** Check Run/Stop connection
- **Analog clock:** No transport control - start manually

**→ See Guide #5: Timing and Sync** (transport control)

---

## Modulation Problems

### "Modulation does nothing"

**Quick checks:**
1. ☐ **Attenuverter position?** → Center = OFF! Turn clockwise
2. ☐ Cable actually patched to modulation input?
3. ☐ Modulation source actually running? (LFO rate, envelope triggered?)
4. ☐ Modulation depth/amount turned up?
5. ☐ Parameter capable of being modulated?

**Most common cause:** Attenuverter at center position (zero modulation)

**→ See Guide #4: Modulation Confusions** (attenuverter center = OFF)

---

### "Modulation goes backwards or inverted"

**Immediate fix:**
- Attenuverter counterclockwise = inverted modulation
- Turn **clockwise past center** for normal direction
- Some applications intentionally use inverted modulation

**→ See Guide #4: Modulation Confusions** (attenuverter polarity)

---

### "Too much or too little modulation"

**Quick diagnostic:**
1. ☐ Check **parameter start position** - Where is it set?
2. ☐ Adjust **modulation depth** - Attenuverter amount
3. ☐ **Combined modulation** too high? (Multiple sources exceeding 100%)

**Remember:** Parameter position + modulation depth = final range (they work together)

**→ See Guide #4: Modulation Confusions** (parameter + modulation interaction)

---

## Envelope & Sustain Problems

### "Sustain knob doesn't seem to do anything"

**Critical understanding: SUSTAIN IS A LEVEL, NOT A TIME!**

**Quick test:**
1. ☐ **HOLD a note for 3+ seconds** while adjusting sustain
2. ☐ Set **decay time long** (1-2 seconds) so envelope reaches sustain
3. ☐ Try extremes: 0%, 50%, 100% while holding

**Why it seems broken:**
- Testing with short notes (sustain never reached)
- Decay time too short (doesn't reach sustain stage)
- Not holding notes long enough to hear sustain level

**For drums/percussion:** Sustain is irrelevant (notes too short)

**→ See Guide #3: Sound Shaping** (envelope sustain)

---

### "Notes sustain forever / won't stop"

**Quick checks:**
1. ☐ Using **trigger instead of gate**? (Envelope has no off signal)
2. ☐ Sustain level set to **100%**? (Never decays)
3. ☐ Release time very long? (Slow fade after note off)
4. ☐ Gate signal actually turning off?

**Trigger vs gate:**
- Trigger: One-shot, no sustain control possible
- Gate: Sustained, responds to note length

**→ See Guide #5: Timing and Sync** (trigger vs gate)

---

## Noise, Hum & Buzz Problems

### "60Hz/50Hz hum in my signal"

**Quick diagnostic:**
1. ☐ **Ground loop?** → Disconnect cables one at a time to identify
2. ☐ **Cable routing?** → Separate audio and power cables
3. ☐ **Multiple power circuits?** → Move all gear to same circuit
4. ☐ **Poor shielding?** → Try quality cables

**Immediate fixes:**
- Use **DI box with ground lift** (safe ground lift method)
- **Separate audio/power cables** (cross at 90° if must cross)
- All equipment on **same power circuit**

**Never:** Lift 3-prong AC power ground (unsafe!)

**→ See Guide #7: Equipment Compatibility** (ground loops)

---

### "Noise that changes when I move cables"

**Likely causes:**
- **Electromagnetic interference** - Audio cables near power cables
- **Poor cable shielding** - Replace with quality shielded cables
- **Unbalanced in noisy environment** - Switch to balanced

**Quick fixes:**
1. Route audio cables away from power cables
2. Use balanced connections for long runs
3. Replace cheap cables with quality shielded cables

**→ See Guide #7: Equipment Compatibility** (cable quality, balanced audio)

---

### "High-frequency whine or digital noise"

**Quick checks:**
1. ☐ **Switching power supply noise?** → Move supply away from audio
2. ☐ **USB/computer noise?** → Use USB isolator
3. ☐ **Clock bleed?** → Check for digital clock signal in audio path
4. ☐ **RF interference?** → Check for nearby transmitters/WiFi

**Solutions:**
- Use **linear power supplies** for sensitive analog circuits
- **Isolate digital from analog** (separate power, physical distance)
- **Quality cables with good shielding**

**→ See Guide #7: Equipment Compatibility** (power supply noise)

---

## Architecture & Voice Problems

### "Playing chords but only hearing one note"

**Quick diagnostic:**
1. ☐ **Paraphonic or monophonic?** → Check specifications
2. ☐ **Voice mode setting?** → Set to poly if available
3. ☐ **Unison mode on?** → Disable unison (uses all voices on one note)

**Understanding:**
- **Monophonic:** One note at a time (by design)
- **Paraphonic:** Multiple oscillators, shared VCF/VCA (sounds mono)
- **Polyphonic:** True independent voices

**→ See Guide #2: Synthesis Architecture** (paraphonic vs polyphonic)

---

### "Notes cut off when playing fast"

**Voice stealing in action:**

Quick checks:
1. ☐ **How many voices?** (8-voice synth = max 8 notes)
2. ☐ **Release time long?** (Previous notes still using voices)
3. ☐ **Unison mode?** (Uses multiple voices per note)
4. ☐ **Effects using voices?** (Some synths count effects as voices)

**Solutions:**
- Reduce release time (frees voices faster)
- Disable unison (frees up voices)
- Reduce polyphony in patches (if adjustable)

**→ See Guide #2: Synthesis Architecture** (voice stealing)

---

## Filter Problems

### "Filter squeals/whistles at high resonance"

**This is self-oscillation - it's a feature, not a bug!**

**If you don't want it:**
- Reduce resonance below ~85-90%
- Lower input signal level
- Use VCA after filter to control level

**If you want to use it:**
- Self-oscillation creates pure sine wave at cutoff frequency
- Use as additional oscillator (TB-303 technique)
- Modulate cutoff for sine wave melodies

**→ See Guide #3: Sound Shaping** (resonance and self-oscillation)

---

### "Filter sounds wrong - 12dB vs 24dB?"

**Quick decision:**
- **Vintage sound?** → Use 12dB/oct (2-pole)
- **Modern/aggressive?** → Use 24dB/oct (4-pole)
- **Techno/house bass?** → 24dB/oct
- **Retro/synthwave?** → 12dB/oct

**Different character, not better/worse**

**→ See Guide #3: Sound Shaping** (filter slopes)

---

## Signal Flow & Patching Problems

### "Modular: Patch works on paper but not in reality"

**Quick checks:**
1. ☐ **Voltage ranges match?** (±5V vs 0-10V compatibility)
2. ☐ **Trigger vs gate confusion?** (Module needs correct type)
3. ☐ **Passive mult loading CV?** (Use buffered mult for CV)
4. ☐ **Normalled connections?** (Patching may break default routing)

**Common issues:**
- Bipolar LFO to unipolar input (clipping negative portion)
- Trigger sent where gate needed (or vice versa)
- CV sag through passive multiples

**→ See Guide #1: Signal and Control** (voltage types, multiples)
**→ See Guide #2: Synthesis Architecture** (normalled connections)

---

### "Patching breaks expected routing"

**Normalled connections:**

When you patch into certain inputs, you may break expected default routing:

Quick checks:
1. ☐ Read manual for normalled connections
2. ☐ Try removing patch, see if default returns
3. ☐ Use mult to restore broken normalled connection

**→ See Guide #2: Synthesis Architecture** (normalled connections)

---

## Mix Translation Problems

### "Great in headphones, terrible on speakers"

**Quick diagnostic:**
1. ☐ **Phase problems?** → Check mono compatibility
2. ☐ **Bass too loud?** → Headphones exaggerate bass response
3. ☐ **Stereo too wide?** → Speakers reveal phase issues
4. ☐ **Frequency balance off?** → Compare to reference tracks

**Immediate checks:**
- Sum to mono and listen (bass should still be present)
- Check phase correlation meter (should be above +0.5)
- Reference on multiple playback systems

**→ See Guide #6: Mixing and Production** (phase, mono compatibility)

---

### "Sounds muddy and unclear"

**Quick fixes:**
1. ☐ **High-pass filter** everything except kick/bass
2. ☐ **Reduce 200-500Hz buildup** (common mud zone)
3. ☐ **Frequency masking?** → Multiple elements competing in same range
4. ☐ **Too many elements?** → Arrangement issue

**EQ strategy:**
- Remove unnecessary low frequencies
- Create frequency pockets for each element
- Don't let everything occupy same frequency range

**→ See Guide #6: Mixing and Production** (frequency masking)

---

## Master Diagnostic Flowchart

### No Sound At All
```
1. Can you hear anything? → NO
   ↓
2. Is VCA/Volume turned up? → NO → Turn up VCA/Volume
   ↓ YES
3. Is envelope triggered/gate on? → NO → Trigger envelope/Turn on gate
   ↓ YES
4. Is filter cutoff open? → NO → Open filter cutoff
   ↓ YES
5. Are cables connected? → NO → Connect cables properly
   ↓ YES
6. Check oscillator tuning/pitch
```

### Timing Problems
```
1. Devices won't sync → Check master/other settings
   ↓
2. Still no sync? → Verify same sync standard (MIDI/DIN/Analog)
   ↓
3. Synced but wrong tempo? → Match PPQN settings
   ↓
4. Drifts over time? → Single master clock, all other devices set to use external sync
   ↓
5. Won't start together? → Check transport control settings
```

### Noise Problems
```
1. Type of noise?
   ↓
2. 60Hz/50Hz hum → Ground loop → Guide #7
   ↓
3. Changes with cable position → EMI → Separate power/audio cables
   ↓
4. High-frequency whine → Power supply noise → Guide #7
   ↓
5. Hiss/white noise → Gain staging issue → Guide #6
```

---

## Quick Reference Tables

### Trigger vs Gate Decision
| Need | Use |
|------|-----|
| Drums, percussion | Trigger |
| Sustained notes, variable length | Gate |
| Clock/advance sequencer | Trigger |
| ADSR envelope with sustain | Gate |
| AR envelope (attack-release only) | Trigger |

### Sync Standard Compatibility
| From | To | Solution |
|------|-----|----------|
| MIDI Clock | Modern gear | Direct connection |
| MIDI Clock | Vintage Roland (DIN) | DIN Sync converter |
| MIDI Clock | Modular (analog) | MIDI-to-CV interface |
| DIN Sync | MIDI Clock | DIN-to-MIDI converter |
| Analog Clock | Different PPQN | Clock divider/multiplier |

### Cable Length Guidelines
| Connection Type | Max Recommended Length |
|----------------|----------------------|
| Unbalanced (TS, RCA) | 15-20 feet |
| Balanced (XLR, TRS) | 50-100+ feet |
| High-impedance (guitar) | 15 feet max |
| Modular patch cables | As short as practical |
| MIDI | 50 feet (use MIDI thru for longer) |

### Compression Ratio Quick Guide
| Ratio | Character | Use For |
|-------|-----------|---------|
| 2:1 | Gentle, transparent | Vocals, acoustic, mix bus |
| 4:1 | Moderate, noticeable | Most applications, drums |
| 8:1 | Heavy, aggressive | Parallel compression, creative |
| ∞:1 | Limiting | Mastering, peak control |

### Impedance Matching Quick Check
| Input ÷ Output Ratio | Result |
|---------------------|--------|
| 10:1 or higher | ✓ Good match |
| 5:1 | ⚠ Acceptable, slight compromise |
| 1:1 | ✗ Poor match, audible issues |
| Less than 1:1 | ✗✗ Severe problems |

---

## Emergency Troubleshooting Checklist

**When everything seems broken:**

☐ **Power cycle everything** - Turn off, wait 30 seconds, turn on
☐ **Check all cable connections** - Fully seated at both ends?
☐ **Simplify setup** - Remove everything except problem source
☐ **Test in isolation** - Does problem occur with just two devices?
☐ **Try different cables** - Cable may be intermittent/faulty
☐ **Check settings** - Factory reset if available
☐ **Reference documentation** - Manual may have specific troubleshooting
☐ **Test on different system** - Problem with gear or environment?

---

## Related Problem-Solving Guides

**For detailed explanations, see:**

- **Guide #1: Signal and Control Confusions** - CV types, gate polarity, voltage standards
- **Guide #2: Synthesis Architecture Confusions** - Voice allocation, normalled connections
- **Guide #3: Sound Shaping Confusions** - Filters, envelopes, LPGs, sustain
- **Guide #4: Modulation Confusions** - Attenuverters, modulation interaction
- **Guide #5: Timing and Sync Confusions** - Trigger/gate, sync standards, PPQN
- **Guide #6: Mixing and Production Confusions** - Phase, gain staging, compression
- **Guide #7: Equipment Compatibility Confusions** - Impedance, balanced audio, ground loops

---

*This quick reference guide provides fast diagnostic paths for common problems. For detailed explanations and comprehensive solutions, refer to the specific Problem-Solving Guides listed above.*
