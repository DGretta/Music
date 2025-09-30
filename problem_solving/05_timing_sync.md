# Problem-Solving Guide #5: Timing and Sync Confusions
*Understanding triggers, gates, clock signals, and why your devices won't stay synchronized*

---

## How to Use This Guide

**Start with your symptom:**
- "My devices won't stay in sync"
- "Trigger vs gate - when does each matter?"
- "Everything drifts out of time"
- "MIDI clock vs DIN sync - which do I need?"
- "My sequencer and drum machine won't start together"

Find the relevant section below, understand why it's happening, and apply the solution.

---

## Trigger vs Gate: "When Does Each Matter?"

### The Confusion

You've connected a clock or sequencer output to a module or drum machine, and sometimes it works, sometimes it doesn't. Or notes sustain when they should be short, or short notes when they should sustain. The difference between trigger and gate signals seems arbitrary or unclear.

### Why This Happens

**Triggers and gates serve different purposes** - Both are timing signals, but they carry different information:

**TRIGGER:**
- Brief pulse (usually 1-10ms)
- Says "something happened NOW"
- Duration doesn't matter (just the moment)
- Like pressing a doorbell

**GATE:**
- Sustained high voltage while active
- Says "this is happening" (duration matters)
- Length determines how long something lasts
- Like holding a key down

### Visual Understanding

```
TRIGGER SIGNAL:
    |   |   |   |
    |   |   |   |
____|   |   |   |____
Brief pulses, duration doesn't convey information

GATE SIGNAL:
    |‾‾‾|   |‾‾‾‾‾|
    |   |   |     |
____|   |___|     |___
Duration matters - length = how long note plays
```

### Common Scenarios

**Scenario 1: "My drums won't trigger from sequencer"**
- **Problem:** Sequencer sends gates, drum module expects triggers
- **Why:** Drum module only responds to rising edge (moment gate goes high)
- **If gate too long:** Some drums may retrigger or behave oddly
- **Solution:** Use gate-to-trigger converter OR adjust gate length very short

**Scenario 2: "My envelopes sustain forever"**
- **Problem:** Trigger sent to envelope expecting gate
- **Expectation:** Short notes
- **Reality:** Envelope triggers but has no gate-off signal, sustains until next trigger
- **Why:** ADSR sustain stage holds as long as gate is high - trigger never goes low
- **Solution:** Send gate signal instead, or use AR envelope (no sustain stage)

**Scenario 3: "Notes are all the same length"**
- **Problem:** Triggers sent where gates needed
- **Expectation:** Variable note lengths from sequencer
- **Reality:** All notes same duration (set by envelope, not gate)
- **Why:** Triggers don't carry duration information
- **Solution:** Use gate outputs with variable gate length

### The Correct Approach

**When to use TRIGGER:**
```
USE TRIGGERS FOR:
✓ Drums and percussion (single hit, duration doesn't matter)
✓ Clocking sequencers (advance to next step)
✓ Sample triggers (fire sample once)
✓ Envelope triggers when using AR (attack-release only)
✓ Any "event happened" signal where duration irrelevant

TRIGGER CHARACTERISTICS:
- Brief pulse (1-10ms typical)
- Only rising edge matters
- Duration doesn't convey information
- Simpler, less data to transmit
```

**When to use GATE:**
```
USE GATES FOR:
✓ Note duration control (how long note plays)
✓ ADSR envelopes (sustain stage needs gate-on duration)
✓ VCA control (hold note while gate high)
✓ Legato detection (overlapping gates = legato)
✓ Any signal where duration matters

GATE CHARACTERISTICS:
- Variable length (milliseconds to seconds)
- Both rising edge (on) and falling edge (off) matter
- Duration = how long event lasts
- Carries timing information
```

**Module expectations:**
```
CHECK MODULE SPECIFICATIONS:

"Trigger input" or "Trig":
- Responds to brief pulses
- Duration doesn't matter
- Use clock, trigger sequencer, drum triggers

"Gate input":
- Responds to sustained high voltage
- Duration determines behavior
- Use keyboard gates, gate sequencer, sustained sources

"Trigger/Gate" (both):
- Can accept either
- Trigger = brief event
- Gate = sustained event
```

**Conversion strategies:**
```
GATE → TRIGGER:
- Most modules naturally extract trigger from gate rising edge
- Or use dedicated gate-to-trigger converter
- Short gates (~10ms) approximate triggers

TRIGGER → GATE:
- Requires "trigger to gate" converter with length control
- Or use envelope generator (trigger fires envelope, envelope = gate)
- Some sequencers have "gate length" parameter
```

---

## MIDI Clock vs DIN Sync vs Analog Clock

### The Confusion

You're trying to sync multiple devices - drum machine, sequencer, synthesizer - but there are different sync standards: MIDI clock, DIN sync, analog clock pulses. You're not sure which to use, whether they're compatible, or how to connect everything together.

### Why This Happens

**Multiple incompatible sync standards exist** - Different eras and manufacturers created different timing systems. They all accomplish the same goal (synchronization) but use different methods and connections.

**Technical reality:**
- **MIDI Clock:** 24 pulses per quarter note (PPQN), digital, via MIDI cables
- **DIN Sync:** Roland standard, 24 PPQN, via 5-pin DIN, includes start/stop/clock
- **Analog Clock:** Voltage pulses, variable PPQN, via patch cables (1/4" or 3.5mm)
- **USB MIDI:** Modern MIDI clock over USB connection
- **None are directly compatible without conversion**

### Common Scenarios

**Scenario 1: "Modern gear won't sync with vintage Roland"**
- **Problem:** TR-808/TR-909/TB-303 use DIN Sync, modern gear uses MIDI
- **Why:** Different standards, different connectors
- **DIN Sync:** 5-pin DIN connector (looks like MIDI but different signals)
- **MIDI Clock:** 5-pin DIN connector (same physical connector, different protocol)
- **Solution:** DIN Sync to MIDI converter box

**Scenario 2: "Modular won't sync with DAW"**
- **Problem:** DAW outputs MIDI clock, modular expects analog clock pulses
- **Why:** Digital vs analog timing signals
- **MIDI:** Digital messages via MIDI cable
- **Analog:** Voltage pulses via patch cable
- **Solution:** MIDI-to-CV converter with clock output

**Scenario 3: "Everything connected but speeds don't match"**
- **Problem:** Different PPQN (pulses per quarter note) standards
- **Example:** One device at 24 PPQN, another at 48 PPQN
- **Result:** One runs twice as fast as the other
- **Solution:** Match PPQN settings or use clock divider/multiplier

### The Correct Approach

**Understanding sync standards:**

**MIDI Clock:**
```
STANDARD: 24 PPQN (pulses per quarter note)
CONNECTIONS: MIDI cable (5-pin DIN)
SIGNALS: Clock, Start, Stop, Continue
DEVICES: Modern synthesizers, drum machines, DAWs
ADVANTAGES:
✓ Universal modern standard
✓ Includes transport control (start/stop)
✓ Additional MIDI data on same cable
✓ Long cable runs possible

LIMITATIONS:
✗ Not compatible with vintage DIN Sync
✗ Can have slight latency (1-3ms typical)
✗ Requires MIDI interface for computer
```

**DIN Sync (Roland):**
```
STANDARD: 24 PPQN (same as MIDI clock)
CONNECTIONS: 5-pin DIN (NOT MIDI - different signals!)
SIGNALS: Clock (2 pins), Run/Stop (1 pin)
DEVICES: TR-808, TR-909, TB-303, vintage Roland
ADVANTAGES:
✓ Simple, reliable
✓ Low latency
✓ Standard for vintage Roland gear

LIMITATIONS:
✗ Incompatible with MIDI (needs converter)
✗ Rare on modern equipment
✗ Limited to Roland ecosystem
```

**Analog Clock:**
```
STANDARD: Variable PPQN (commonly 24, 48, or 96)
CONNECTIONS: Patch cables (1/4" or 3.5mm)
SIGNALS: Voltage pulses (usually +5V)
DEVICES: Modular synthesizers, some drum machines
ADVANTAGES:
✓ Simple voltage pulses
✓ Very low latency
✓ Easy to generate and process
✓ Can use clock dividers/multipliers

LIMITATIONS:
✗ No standard PPQN (must match manually)
✗ No start/stop information
✗ Requires separate cables for each signal
✗ Can pick up noise over long runs
```

**Practical sync setup:**

**All modern gear (post-2000):**
```
SOLUTION: MIDI Clock
- Connect via MIDI cables
- Set one device as master (clock source)
- Set others as slaves (receive clock)
- Check all devices set to 24 PPQN
- Use MIDI Start/Stop for transport control
```

**Vintage Roland + Modern:**
```
SOLUTION: DIN Sync to MIDI Converter
- Kenton Pro Solo, Innerclock Sync Gen
- Converts between standards
- Often includes multiple outputs
- Can handle bidirectional conversion
```

**Modular + DAW/MIDI gear:**
```
SOLUTION: MIDI-to-CV Interface
- Expert Sleepers, Befaco MIDI Thing, Yarns
- Outputs analog clock from MIDI clock
- Usually includes clock division settings
- May include start/stop gate outputs
```

**Mixed ecosystem:**
```
COMPLEX SETUP:
1. DAW as master clock (MIDI)
2. MIDI to modern synths directly
3. MIDI to DIN Sync converter for vintage Roland
4. MIDI to CV for modular (analog clock out)
5. All slaves receive timing from DAW
```

---

## PPQN Resolution Differences

### The Confusion

You've set up sync between devices, tempo matches, but timing feels loose or sloppy. Or when changing device settings, you find different PPQN (pulses per quarter note) options - 24, 48, 96, 192 - and you're not sure what they mean or which to use.

### Why This Happens

**PPQN determines timing resolution** - Higher PPQN = finer timing resolution = smoother automation and more precise sync. But devices must match PPQN for proper synchronization.

**Technical reality:**
- **24 PPQN:** MIDI standard, adequate for basic sync
- **48 PPQN:** Double resolution, smoother automation
- **96 PPQN:** Quad resolution, very smooth
- **192+ PPQN:** High resolution, extremely precise

### The Correct Approach

**Understanding PPQN:**
```
24 PPQN:
- 24 clock pulses per quarter note
- 6 pulses per 16th note
- MIDI standard
- Adequate for most music
- May feel "steppy" for slow parameter changes

96 PPQN:
- 96 clock pulses per quarter note  
- 24 pulses per 16th note
- 4x resolution of MIDI standard
- Smoother automation
- Better for precise timing

Impact:
Higher PPQN = finer timing grid
Lower PPQN = coarser timing grid
```

**Matching PPQN:**
- All synced devices must use same PPQN
- Mismatched PPQN = wrong tempo relationships
- Check device specifications and settings
- When in doubt, use 24 PPQN (universal standard)

---

## Sync Drift and Jitter

### The Confusion

Your devices start in sync but gradually drift apart over time. Or timing feels loose and imprecise even though everything is connected. The sync seems unreliable or unstable.

### Why This Happens

**Clock precision and stability issues** - Sync drift occurs when clock signals aren't stable, devices have different internal timing accuracy, or cables introduce noise.

**Common causes:**
- **Different clock sources:** Internal clocks with slight speed differences
- **Cable quality:** Poor cables introduce timing jitter
- **MIDI latency:** Variable latency in MIDI processing
- **Clock source stability:** Some devices have more accurate clocks
- **Sample rate mismatch:** Digital audio sample rate differences

### The Correct Approach

**Preventing drift:**
```
USE SINGLE MASTER CLOCK:
✓ One device generates clock for all others
✓ All slaves receive from same source
✓ Don't chain internal clocks

GOOD PRACTICE:
- DAW as master (most stable)
- Or dedicated clock source (very stable)
- All other devices receive clock externally
- Disable internal clocks on slaves

BAD PRACTICE:
✗ Multiple devices generating independent clocks
✗ Chaining internal clocks
✗ Mixing clock sources
```

**Reducing jitter:**
```
CABLE QUALITY:
✓ Short, quality MIDI cables
✓ Avoid cheap cables for clock signals
✓ Shielded cables for long runs

HARDWARE:
✓ Dedicated MIDI interfaces (low latency)
✓ USB MIDI for direct computer connection
✓ Clock processors for timing cleanup

SETTINGS:
✓ Match sample rates across digital devices
✓ Use external sync (not internal)
✓ Reduce MIDI traffic on clock cable if possible
```

**Testing sync stability:**
1. Start all devices
2. Let run for 5-10 minutes
3. Check if timing has drifted
4. If drift: Verify single master clock, check cable quality
5. If stable: Sync setup correct

---

## Clock Division and Multiplication

### The Confusion

You want your bass line to play half-speed compared to your drum pattern, or your hi-hats to play double-time. Clock division and multiplication seem confusing, and the math doesn't work out how you expect.

### Why This Happens

**Dividing and multiplying clock creates polyrhythms** - But the relationships can be counterintuitive if you don't understand how divisions and multiplications interact with musical timing.

**Technical reality:**
- **Clock division (/2, /4, /8):** Makes things slower (half-time, quarter-time)
- **Clock multiplication (×2, ×4, ×8):** Makes things faster (double-time, quadruple-time)
- **Polyrhythms:** Different divisions playing simultaneously
- **Musical relationships:** Some divisions/multiplications sound musical, others don't

### The Correct Approach

**Understanding division/multiplication:**
```
DIVISION (slower):
/2 = half speed (kick on 1 & 3 instead of every beat)
/4 = quarter speed (kick on 1 only)
/8 = eighth speed (very slow)

MULTIPLICATION (faster):
×2 = double speed (hi-hats twice as fast)
×4 = quad speed (very fast)
×8 = eighth speed (extremely fast)

MUSICAL USE:
- Kick: /2 (half-time feel)
- Bass: /4 (slow, sustained)
- Hi-hats: ×2 or ×4 (fast, driving)
- Melody: /1 (normal speed)
```

**Creating polyrhythms:**
- Use different divisions/multiplications on different voices
- Common: Kick /2, snare /4, hi-hat ×2
- Experiment with divisions to find musical relationships
- Reset inputs align patterns to downbeat

---

## Start/Stop Behavior Quirks

### The Confusion

You hit start on your master device, but slaves don't start, or they start at wrong positions. Or everything starts but at different points in their sequences. Transport control (start/stop/continue) doesn't work reliably.

### Why This Happens

**Different transport control standards** - Not all sync systems include start/stop information, and devices implement transport control differently.

**Technical reality:**
- **MIDI:** Includes Start, Stop, Continue messages
- **DIN Sync:** Includes Run/Stop signal
- **Analog Clock:** NO start/stop info (just pulses)
- **Implementation varies:** Devices respond differently to transport messages

### The Correct Approach

**Understanding transport control:**
```
MIDI CLOCK (Best transport control):
- Start message: Begin from beginning
- Stop message: Stop playback
- Continue message: Resume from stop point
- All devices should respond together

DIN SYNC:
- Run/Stop signal
- Simple on/off control
- Less sophisticated than MIDI

ANALOG CLOCK:
- NO transport control
- Manual start required on each device
- Clock only provides tempo, not start/stop
```

**Ensuring synchronized start:**
```
MIDI SETUP:
✓ All devices set to receive MIDI clock
✓ Enable "MIDI Start/Stop" in device settings
✓ Some devices call this "External Sync"
✓ Verify transport messages enabled on master

ANALOG CLOCK SETUP:
- Use separate gate for run/start control
- Or manually start all devices
- Some interfaces output start/run gates

TROUBLESHOOTING:
1. Check transport message settings
2. Verify all devices listening to same MIDI channel/source
3. Some devices need "Song Position Pointer" enabled
4. Test with simple 2-device setup first
```

---

## Quick Reference: Timing and Sync Troubleshooting

### "Devices won't sync at all"
1. **Check connections:** Cables properly connected?
2. **Verify standards match:** MIDI to MIDI, DIN to DIN?
3. **Master/slave settings:** One master, others slaves
4. **PPQN matching:** All devices same resolution?

### "Trigger vs gate confusion"
1. **Check module specs:** Does it need trigger or gate?
2. **Drums:** Usually need triggers (brief pulses)
3. **Envelopes:** Usually need gates (sustained)
4. **Duration matters?** Use gate. Just timing? Use trigger.

### "Everything drifts out of sync"
1. **Single master clock:** Only one device generates timing
2. **External sync:** All slaves receive from master
3. **Disable internal clocks:** On all slave devices
4. **Cable quality:** Use good cables for clock signals

### "Different speeds even though synced"
1. **Check PPQN settings:** Must match across all devices
2. **Clock division:** Accidentally divided/multiplied?
3. **Tempo source:** All pointing to same master?

### "Won't start together"
1. **MIDI start/stop enabled:** Check device settings
2. **Analog clock:** Doesn't include start/stop (manual start)
3. **Transport control:** Verify master sends start messages
4. **Slave devices:** Check if listening to transport

---

## Key Takeaways

**Trigger vs Gate:**
- Trigger = brief pulse, "event happened"
- Gate = sustained, duration matters
- Drums = triggers, sustained notes = gates
- Check module specifications for requirements

**Sync Standards:**
- MIDI Clock: Modern standard (24 PPQN)
- DIN Sync: Vintage Roland (incompatible with MIDI)
- Analog Clock: Modular (voltage pulses, variable PPQN)
- Need converters to mix standards

**PPQN Resolution:**
- Higher = finer timing resolution
- 24 PPQN = MIDI standard (adequate for most)
- Must match across all synced devices
- Mismatch = wrong tempo relationships

**Preventing Drift:**
- Single master clock source
- All slaves external sync (not internal)
- Quality cables for clock signals
- Disable internal clocks on slaves

**Clock Division/Multiplication:**
- Division = slower (/2 = half-time)
- Multiplication = faster (×2 = double-time)
- Creates polyrhythms and rhythmic variation
- Use reset to align patterns

**Transport Control:**
- MIDI: Best (Start/Stop/Continue)
- DIN Sync: Basic (Run/Stop)
- Analog Clock: None (manual start required)
- Check device settings for transport enable

**When In Doubt:**
- Use MIDI clock for modern gear (24 PPQN)
- One master, all others slaves
- Quality cables matter for timing
- Check module specs for trigger vs gate
- Test simple 2-device setup first

---

*This problem-solving guide addresses timing and sync confusions that frustrate musicians trying to connect multiple devices. Understanding trigger vs gate and using a single master clock prevents most sync issues.*

---

**Related Dictionary Terms:** Trigger, Gate, Clock, MIDI, DIN Sync, PPQN, Sync, Master/Slave, Transport, MIDI Clock, Analog Clock

**Related Problem-Solving Guides:**
- Guide #1: Signal and Control (gate polarity, CV behavior)
- Guide #4: Modulation (LFO rates, tempo-synced modulation)
- Guide #7: Equipment Compatibility (connecting different gear)