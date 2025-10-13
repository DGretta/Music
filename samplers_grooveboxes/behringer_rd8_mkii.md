# Behringer RD-8 MKII
**Classic Analog 808 Drum Machine with 64-Step Sequencer, Wave Designer, and Dual-Mode Filter**

*Authentic recreation of the legendary Roland TR-808 - pure analog circuitry delivering genuine 808 bass drums, snappy snares, and sizzling hi-hats for sampling, beat making, and live performance*

## Quick Start
**First pattern in 3 minutes:** Power on RD-8 MKII → Press [STEP] button → Press [RECORD] button → Select voice (e.g., press [BD] for bass drum) → Press step buttons [1, 5, 9, 13] for four-on-the-floor kick → Select [SD] for snare → Press step buttons [5, 13] for backbeat snare → Select [CH] for closed hat → Press step buttons [1-16] for 16th note hats → Press [PLAY/PAUSE] to hear your pattern → Adjust [MASTER] volume knob.

**Essential first settings:** [SETTINGS] → Hold [TAP/HOLD] + Press [STEP 5 (PREFS)] → Use [DATA] knob to set "Tempo Preference" to GLOBAL (not Pattern) → Enable "Auto Save" by entering STEP mode, holding [TAP/HOLD] + pressing [RECORD] until display shows "auto" → This prevents lost work and confusing tempo changes between patterns.

---

## Common Mistakes and How to Avoid Them

### **"I programmed a pattern and it disappeared when I loaded another pattern!"**
**Problem:** Auto Save disabled (manual mode), pattern changes not saved, switching patterns erases unsaved work

**Why This Matters:** The RD-8 MKII has two save modes: "auto" (saves changes automatically) and "manu" (requires manual save via SAVE button). Factory default is MANUAL. Every pattern edit vanishes if you switch patterns without explicitly saving. This is the #1 destroyer of beginner work sessions.

**Solution:**
- **Enable Auto Save immediately:** In STEP mode, hold [TAP/HOLD] then press [RECORD] - display shows "auto" or "manu" for 1 second
- **Verify it's ON:** Display should show "auto" when entering step record mode
- **Manual save when auto is off:** Press [SAVE] → [PATTERN] → select destination → press [SAVE] again
- **Emergency recovery:** Hold [TAP/HOLD] + press pattern STEP button immediately after switching - recalls unsaved "live" version

### **"The tempo keeps changing between patterns!"**
**Problem:** Tempo Preference set to PATTERN mode, each pattern has different saved tempo

**Why This Matters:** Three tempo modes (Global, Song, Pattern). If PATTERN mode active, every pattern remembers its own tempo. Pattern 1 at 120 BPM, Pattern 2 at 90 BPM - switching patterns changes tempo unexpectedly.

**Solution:**
- **Set to GLOBAL:** [SETTINGS] → [STEP 3 (CLOCK)] → Press [TAP/HOLD] until "Tempo Preference" → Select "GLOBAL"
- **Now tempo is universal across all patterns**
- **Quick tempo adjustment:** [DATA MODE] until TEMPO lights, turn [DATA] knob (20-240 BPM)

### **"I can't hear the Low Tom/Hand Clap - sound won't trigger!"**
**Problem:** Voice switch set wrong - programming wrong half of voice pair

**Why This Matters:** Six voices have switches toggling between two sounds: Low Tom/Low Conga, Hand Clap/Maracas, etc. Programming with switch in wrong position means you're triggering the other sound.

**Solution:**
- **Check voice switches BEFORE programming** - located below each voice's knobs
- **Standard 808 positions:** LOW TOM (not conga), RIM SHOT (not claves), HAND CLAP (not maracas)
- **If pattern silent, flip switches** - pattern may suddenly work

### **"Individual outputs don't work - I hear bass drum in main mix!"**
**Problem:** Individual output jack has physical switch - voice only removed from main mix when cable physically inserted

**Why This Matters:** Inserting cable into individual output jack removes that voice from main mono output. If cable unplugged or not connected to destination, voice disappears from mix entirely.

**Solution:**
- **Test before session:** Plug cable, verify voice disappears from main mix AND appears at destination
- **For multitrack recording:** Systematically patch all 11 outputs to interface, verify each channel receives signal
- **For sampling single voice:** Plug ONLY that voice to interface - all others stay in main mix for monitoring

### **"My 32-step pattern only shows 16 steps!"**
**Problem:** Auto Scroll disabled, machine doesn't show steps 17-32 during playback

**Why This Matters:** 16 step buttons display 64-step patterns via 4 banks. Without Auto Scroll, viewed bank doesn't follow playhead.

**Solution:**
- **Enable Auto Scroll:** Press [AUTO SCROLL] until LED lights
- **Watch bank indicators:** White = playhead bank, red = viewed bank
- **Manual navigation:** Use << >> arrows to switch banks when Auto Scroll off

### **"Filter is recording automation I don't want!"**
**Problem:** Filter Automation active, cutoff knob movements recorded into pattern

**Why This Matters:** Solid filter [ON] = manual mode (no recording), flashing [ON] = automation mode (records movements).

**Solution:**
- **Toggle automation:** Hold [TAP/HOLD] + press filter [ON] button - cycles between modes
- **Check state:** During playback, solid = manual, flashing = automation active
- **Clear unwanted automation:** [SETTINGS] → [STEP 6 (FILTER)] → Set all values to 0

### **"Sync won't work with my DAW!"**
**Problem:** Sync source set wrong (Internal when should be MIDI/USB)

**Why This Matters:** Four sync sources: INTERNAL (master), MIDI (5-pin DIN), USB (computer), TRIG (analog clock). Wrong source = no sync.

**Solution:**
- **For MIDI sync:** Press [SYNC CYCLE] until MIDI LED lights, enable "Send MIDI Clock" in DAW
- **For USB sync:** Press [SYNC CYCLE] until USB LED lights, enable "Send MIDI Clock" to RD-8 in DAW
- **Set Tempo Preference to GLOBAL** to prevent pattern tempo from overriding external clock

### **"Pattern sounds different after I changed FX settings!"**
**Problem:** FX Bus Preference set to PATTERN mode, different patterns have different voice assignments

**Why This Matters:** FX assignments (which voices sent to Wave Designer/Filter) can be per-pattern. Loading pattern changes which voices are processed.

**Solution:**
- **Set to GLOBAL:** [SETTINGS] → [STEP 5 (PREFS)] → "Bus Send Preference" → GLOBAL
- **Check current assignments:** Press [SEND], pink LEDs show which voices assigned to FX
- **Clear all assignments:** Hold [TAP/HOLD] + press [SEND]

### **"MIDI triggers wrong sound!"**
**Problem:** MIDI Note Map changed from defaults

**Why This Matters:** Each voice has MIDI note number (BD=36, SD=40, etc.). If map changed, external MIDI triggers wrong sounds.

**Solution:**
- **Verify map:** [SETTINGS] → [STEP 4 (MAP)] → Check each voice's assigned note
- **Default map:** BD=36, SD=40, LT=45, MT=47, HT=50, RS=37, CP=39, CB=56, CY=51, OH=46, CH=42

### **"Copy pattern is confusing - keeps asking for source song!"**
**Problem:** Copy function requires selecting source song even when copying within same song

**Why This Matters:** Full copy workflow designed for between-song copying is complex for simple within-song copy.

**Solution:**
- **Quick copy (recommended):** In PATTERN mode, hold [COPY] + press destination pattern step button - instant copy
- **Full procedure:** [COPY] → select source song → [PATTERN] → select source pattern → [COPY] → select destination → [COPY] to execute

### **"Swing knob doesn't work!"**
**Problem:** Swing Preference set to PATTERN/SONG, current pattern's saved swing overrides knob

**Why This Matters:** Swing Preference determines which swing value is used. If PATTERN mode, turning global swing knob has no effect.

**Solution:**
- **Set to GLOBAL:** [SETTINGS] → [STEP 3 (CLOCK)] → "Swing Preference" → GLOBAL
- **Adjust swing:** [DATA MODE] until SWING lights, turn [DATA] knob (25% to 75%, 50% = straight)
- **Typical values:** 52-54% light swing, 55-58% medium swing, 60-65% heavy shuffle

---

## Why This Instrument Excels

### **The Analog 808 Magic:**
- **Genuine Analog Circuits:** Not samples or modeling - actual analog circuitry recreating TR-808 voice architecture with bridged T-network oscillators, noise generators, and VCAs
- **That 808 Bass Drum:** The sound that defined hip-hop, techno, trap - massive sub-frequency punch impossible from digital clones
- **Classic Snare Snap:** Crisp attack with SNAPPY control for bottom-head simulation, organic noise generator adds life
- **Sizzling Hi-Hats:** Six square wave oscillators through bandpass filtering - that metallic bell-like quality cutting through mixes

### **The Production Workflow:**
- **Pattern Creation Speed:** 16 illuminated step buttons make visual programming instant - tap out rhythms, see patterns at glance
- **Individual Outputs for Sampling:** 11 dedicated outputs route each voice separately - record bass drum to input 1, snare to input 2, build custom 808 libraries
- **Wave Designer Character:** Integrated attack/sustain shaping unavailable on original 808 - beef up kicks, add snap to snares, tighten sounds
- **Dual-Mode Analog Filter:** 12dB/octave switchable LP/HP filter with automation - record sweeps for classic house builds
- **64-Step Sequencer Depth:** Up to 64 steps per pattern enables longer phrases, complex polyrhythms, extended arrangements

### **The Practical Magic:**
- **Affordable Analog Access:** Vintage TR-808s cost $4,000-8,000 (if available). RD-8 MKII costs $350-400 with genuine analog circuits
- **Connectivity for Modern Studio:** USB MIDI, 5-pin MIDI, analog clock in/out, 3 trigger outputs - integrates everywhere
- **Live Performance Features:** Pattern chaining, autofill, mutes/solos, step/note repeat, instant pattern switching
- **Pattern Save/Load System:** 256 patterns total (16 songs × 16 patterns), SysEx dump for backup/sharing

### **Perfect For:**
- **808 Sample Library Builders** - Custom analog 808 sample packs
- **Trap/Hip-Hop Producers** - Authentic 808 bass foundation
- **Techno/House Producers** - Classic dance music drums with filter automation
- **Lo-Fi Beatmakers** - Organic analog warmth
- **Hardware Integrators** - Dedicated 808 module with MPC/Digitakt
- **Vintage 808 Enthusiasts Without Budget** - 90% of sound at 10% of price

---

## Essential Parameters

### Voice Architecture

**11 ANALOG VOICES (16 sounds via voice switches):**

**ACCENT:** Global accent, LEVEL control determines amount, affects all voices on same step

**BASS DRUM:** LEVEL (volume), TONE (brightness), DECAY (ring length), TUNING (pitch - in Accent section)

**SNARE DRUM:** LEVEL, TONE, SNAPPY (bottom-head snap simulation)

**TOMS/CONGAS (3 voices):** LEVEL, TUNING, voice switch selects TOM or CONGA

**RIM SHOT/CLAVES:** LEVEL, voice switch selects sound

**HAND CLAP/MARACAS:** LEVEL, OFFSET (clap length), voice switch

**COW BELL:** LEVEL

**CYMBAL:** LEVEL, TONE, DECAY

**OPEN HAT:** LEVEL, TONE, DECAY

**CLOSED HAT:** LEVEL, TONE, chokes open hat when triggered immediately after

### Sequencer Features

**Step Resolution:** 16 buttons display 64 steps via 4 banks
**Pattern Length:** 1-64 steps adjustable
**Step Size:** 1/8, 1/8T, 1/16, 1/16T, 1/32
**Tempo Range:** 20-240 BPM
**Swing:** 25% (negative) to 75% (full), 50% = straight

**Advanced Features:**
- **Polymeter:** Different loop lengths per voice (evolving rhythms)
- **Probability:** Per-step trigger probability (0-100%)
- **Flam:** Per-step flam width (0-24, simulates double-hit)
- **Note Repeat:** Per-step repetition (1, 2, 4, or 8 times)
- **Filter Automation:** Record cutoff movements per step

---

## Pairs Well With

### Audio Interfaces
**Focusrite Scarlett 18i20** ($500): 8 analog inputs for multitrack 808 recording, professional preamps, expandable via ADAT
**MOTU M4** ($250): 4 inputs sufficient for kick/snare/hats/percussion stems, excellent converters, compact

### Samplers & Sequencers  
**Akai MPC Live/X** ($1200-2500): Sequence RD-8 via MIDI, sample outputs into MPC, layer with digital drums, complete production system
**Elektron Digitakt** ($800): Sample RD-8 voices into Digitakt, parameter lock modulates RD-8 via MIDI CC, clock sync both machines
**Roland SP-404 MKII** ($500): Sample RD-8 patterns, process with SP effects, perform live sets combining both

### Modular Systems
**Expert Sleepers FH-2** ($300): MIDI-to-CV converter sequences RD-8 from modular, or RD-8 trigger outs envelope modular voices
**Make Noise 0-Coast** ($500): Hybrid analog/modular voice triggered by RD-8, clock sync via RD-8 analog clock output

### External Effects
**Strymon BigSky** ($480): Route individual 808 voices through premium reverb, resample back into main mix
**Boss RE-202 Space Echo** ($500): Classic tape echo for vintage 808 character, essential for dub/techno
**Meris Mercury7** ($350): Pitch-shifting reverb creates otherworldly 808 textures

---

## What This Unlocks From Your Existing Gear

### **Transform Your MPC Into Hybrid Analog/Digital Beast**
Your MPC sequences RD-8 via MIDI while handling melodic content. RD-8 provides authentic analog 808 drums, MPC provides sampling/arrangement/mixing. Sample RD-8 individual outputs into MPC pads, layer analog 808 kick with digital kick - hybrid power impossible from either alone.

### **Elevate Your Digitakt With Genuine Analog 808s**
Digitakt samples are excellent but digital. Add RD-8 for pure analog warmth. Digitakt sequences RD-8 via MIDI, parameter locks modulate RD-8 voices in real-time, sample RD-8 outputs into Digitakt for further manipulation. Two machines provide complete production system: Digitakt for melodic sampling, RD-8 for 808 drums.

### **Revolutionize Your Modular System**
RD-8 provides structured rhythms modular lacks. Clock modular from RD-8 SYNC OUT, use RD-8 trigger outputs to envelope modular voices (bass drum triggers modular bass, snare triggers modular lead), create hybrid analog percussion impossible from either system alone.

### **Maximize Your Audio Interface**
Interface becomes multitrack 808 recording front-end. Route all 11 RD-8 outputs to interface inputs, record each voice as separate stem in DAW, unlimited processing possibilities. Build custom 808 sample libraries, royalty-free samples unique to your productions.

### **Transform Your DAW**
DAW sequences complex MIDI patterns to RD-8, RD-8 generates analog audio, stems record to DAW tracks for plugin processing. Best of both: hardware analog sound + software flexibility. Or reverse: sketch beats in DAW, render MIDI to RD-8 for analog conversion.

---

*This guide provides comprehensive foundation for RD-8 MKII mastery, from fundamental 808 programming through advanced techniques and real-world integration. The depth rewards commitment - invest time learning this classic workflow and gain authentic analog 808 sound that defined decades of production, now democratized for modern producers at accessible price point.*
