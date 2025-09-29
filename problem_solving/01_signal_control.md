# Problem-Solving Guide #1: Signal and Control Confusions
*Understanding CV, gates, voltage standards, and why connections don't always work as expected*

---

## How to Use This Guide

**Start with your symptom:**
- "My CV connection doesn't control anything"
- "My modulation goes backwards"
- "My oscillators go out of tune when I connect multiple modules"
- "My vintage synth triggers at the wrong times"

Find the relevant section below, understand why it's happening, and apply the solution.

---

## DC Coupling: "Why Doesn't My CV Control Anything?"

### The Confusion

You've patched a CV output to a parameter input - maybe an LFO to filter cutoff, or a sequencer to oscillator pitch - but nothing happens. The signal seems to just pass through without affecting anything, or you get random behavior instead of the expected control.

### Why This Happens

**AC coupling vs DC coupling** - Many audio devices use AC-coupled inputs that intentionally filter out DC (constant voltage) components. This is great for audio signals (removes DC offset that can damage speakers), but catastrophic for control voltages which ARE constant voltage changes.

**Technical reality:**
- **AC coupled circuits:** Capacitor in signal path blocks DC, passes only AC (changing) voltages
- **DC coupled circuits:** Direct connection preserves both AC and DC components
- **CV signals are DC:** A constant 2V should produce a constant effect - AC coupling removes this

### Common Scenarios

**Scenario 1: Audio interface CV I/O**
- **Problem:** Using audio interface outputs for CV control in modular system
- **Why it fails:** Most audio interfaces are AC coupled - designed for audio, not CV
- **Result:** Slow LFOs might work (they're AC because they cycle), but constant voltages are filtered out

**Scenario 2: Mixing console as CV router**
- **Problem:** Patching CV through mixing console to reach other modules
- **Why it fails:** Mixing consoles typically AC coupled - designed to prevent DC offset in audio paths
- **Result:** CV control partially works but loses DC offset component, causing unpredictable behavior

**Scenario 3: Effects pedals in CV path**
- **Problem:** Running CV through guitar pedal for "creative processing"
- **Why it fails:** Guitar pedals expect AC audio signals, may have AC-coupled inputs/outputs
- **Result:** CV modulation works but loses zero-reference point, causing drift and unpredictability

### The Correct Approach

**Verify DC coupling:**
1. **Check specifications:** Look for "DC coupled" in module/device specifications
2. **Dedicated CV I/O:** Use interfaces/modules specifically designed for CV (Expert Sleepers, MOTU with DC-coupled modes)
3. **Direct connections:** Keep CV paths direct - avoid routing through audio-only equipment

**For existing AC-coupled gear:**
- **Accept limitations:** Slow modulation (LFOs) might work; constant voltages won't
- **Use offsets carefully:** Some AC-coupled paths may preserve modulation but lose DC offset
- **Convert if needed:** Use dedicated CV-to-audio converters or DC restoration circuits

**Testing DC coupling:**
- **Simple test:** Patch constant voltage source to input, measure output
- **Should work:** DC-coupled path preserves constant voltage level
- **Will fail:** AC-coupled path shows zero (or drifting) voltage at output

---

## Bipolar vs Unipolar: "My LFO Makes the Filter Close Completely"

### The Confusion

You patch an LFO to filter cutoff expecting smooth brightness modulation, but instead the filter completely closes during part of the LFO cycle, creating rhythmic silence rather than smooth timbral variation. Or your envelope makes pitch go down before going up.

### Why This Happens

**Signal polarity mismatch** - LFOs typically output bipolar signals (±5V, swinging both positive and negative), while many parameters expect unipolar control (0-10V, positive only). When negative voltage hits a unipolar parameter, it either gets clamped to zero or behaves unpredictably.

**Technical reality:**
- **Bipolar signal:** Swings both positive and negative around 0V (example: -5V to +5V)
- **Unipolar signal:** Only positive voltages (example: 0V to +10V)
- **Parameter expectations:** Some inputs work with bipolar, others need unipolar
- **Negative voltage behavior:** Depends on circuit design - may clamp to zero, may cause unexpected behavior

### Visual Understanding

```
BIPOLAR LFO OUTPUT:          UNIPOLAR PARAMETER EXPECTATION:
    +5V  ___                     +10V ___
         /   \                         /   \
    0V  /     \___               +5V /     \___
                  \                           \
   -5V             ___            0V           ___

When bipolar hits unipolar:
    Filter fully closes when voltage goes negative
    Creates rhythmic gating instead of smooth modulation
```

### Common Scenarios

**Scenario 1: LFO to filter cutoff**
- **Problem:** Patch LFO (bipolar ±5V) directly to filter cutoff
- **Expectation:** Smooth brightness modulation
- **Reality:** Filter completely closes during negative half of LFO cycle
- **Solution:** Add positive offset OR use attenuverter to convert bipolar to unipolar range

**Scenario 2: Envelope to pitch**
- **Problem:** Envelope output goes slightly negative during decay stage
- **Expectation:** Pitch rises then falls back to original
- **Reality:** Pitch drops below original during negative portion
- **Solution:** Adjust envelope offset or use precision adder to ensure only positive voltages

**Scenario 3: Random source creates silence**
- **Problem:** Bipolar random voltage modulating VCA level
- **Expectation:** Random volume variations
- **Reality:** Sound cuts out randomly when voltage goes negative
- **Solution:** Convert random source to unipolar using offset and attenuator

### The Correct Approach

**Understanding parameter polarity:**
1. **Read specifications:** Check if input expects unipolar or bipolar signals
2. **Common unipolar:** Filter cutoff, VCA level, most "amount" parameters
3. **Common bipolar:** Oscillator pitch, pan position, many modulation destinations

**Converting bipolar to unipolar:**
```
Method 1: Offset
- Add +5V offset to ±5V bipolar signal
- Result: 0V to +10V unipolar signal

Method 2: Attenuverter at center + positive offset
- Attenuverter at noon (no inversion)  
- Reduce depth to use only positive half
- Add offset to bring minimum above 0V

Method 3: Rectification (advanced)
- Full-wave rectifier converts bipolar to unipolar
- Creates doubled frequency modulation
- Creative effect but changes character
```

**Setting proper modulation ranges:**
1. **Start with parameter position:** Set filter cutoff to desired center point
2. **Add positive offset:** Ensure modulation source minimum stays above 0V
3. **Adjust modulation depth:** Control how much above/below center point parameter moves
4. **Test full range:** Verify parameter doesn't hit limits or behave unexpectedly

---

## 1V/Octave vs Hz/V: "Why Won't My Vintage Gear Track?"

### The Confusion

You connect your modern Eurorack sequencer to a vintage synthesizer, expecting melodic sequences, but instead you get nonsensical pitch relationships - intervals don't sound musical, octaves aren't octaves, and nothing tracks properly across the keyboard range.

### Why This Happens

**Incompatible voltage standards** - The synthesizer world historically used two different systems for voltage-to-pitch conversion:

- **1V/Octave (modern standard):** Used by Moog, Eurorack, modern synthesizers
  - Linear relationship: +1V = +1 octave
  - Each volt represents exactly one octave
  - Semitone = 1/12 volt (≈83.33mV)

- **Hz/V (Korg/Yamaha standard):** Used by vintage Korg, Yamaha gear
  - Exponential relationship: +1V = frequency multiplication
  - Each volt represents different interval depending on starting frequency
  - Not standardized across manufacturers

### Technical Reality

**Why they're incompatible:**
```
1V/Octave (Modern Standard - Moog, Roland, ARP, Eurorack):
0V = 110Hz (A2)
1V = 220Hz (A3 - one octave up)
2V = 440Hz (A4 - two octaves up)
3V = 880Hz (A5 - three octaves up)
Linear voltage change = exponential frequency change
Each additional volt DOUBLES the frequency

Other Historical Standards (ALL INCOMPATIBLE WITH 1V/OCT):
- Yamaha/Korg: Hz/volt (specific scaling varied by manufacturer)
- Buchla/EML: 1.2V/octave
- EMS: 0.32V/octave (VCS3 used 0.26V/oct on oscillator 3)

The Problem:
These standards use different voltage-to-frequency relationships.
A sequence that plays a melody on 1V/Oct gear will play wrong intervals
on ANY other standard. There's no simple "shift everything up/down"
fix - the mathematical relationships are fundamentally incompatible.
```

### Common Scenarios

**Scenario 1: Eurorack sequencer to Korg MS-20**
- **Problem:** Modern sequencer (1V/Oct) controlling vintage Korg MS-20 (Hz/V)
- **Expectation:** Musical melody with correct intervals
- **Reality:** Wrong intervals - what should be an octave isn't, melodies sound "off"
- **Why common:** MS-20 is popular vintage synth still widely used
- **Solution:** Dedicated converter module (rare/expensive) OR use MS-20's keyboard/sequencer

**Scenario 2: Vintage Yamaha/Korg with modern MIDI-to-CV**
- **Problem:** Modern MIDI-to-CV converter outputs 1V/Oct, vintage synth expects Hz/V
- **Expectation:** Play vintage synth from modern MIDI keyboard/DAW
- **Reality:** Notes play at wrong pitches, intervals don't sound musical
- **Reality check:** These vintage synths are still common in studios
- **Solution:** Vintage-specific MIDI interfaces exist (research your specific model)

**Scenario 3: Mixing standards in single patch**
- **Problem:** Using both 1V/Oct and Hz/V oscillators in same system
- **Expectation:** All oscillators track together
- **Reality:** Only one standard tracks correctly at a time
- **Solution:** Keep standards separate OR use conversion (complex and rarely perfect)

### The Correct Approach

**Before patching:**
1. **Identify standards:** Check synthesizer specifications for pitch CV standard
2. **Match standards:** Only patch together equipment using same standard
3. **Modern equipment:** Almost universally 1V/Octave (Eurorack, modern synths)
4. **Vintage identification:**
   - Korg MS-20, MS-10, others: Hz/V
   - Yamaha CS series: Hz/V
   - Buchla (vintage): 1.2V/octave
   - EMS VCS3/Synthi: 0.32V/octave (or 0.26V/oct)
   - Moog (all eras): 1V/octave
   - Roland (most): 1V/octave

**If you must mix standards:**
- **Dedicated converters:** Some rare modules convert between standards
- **Individual tuning:** Possible for specific notes but impractical for sequences
- **Accept limitations:** Use incompatible gear separately rather than together
- **Modern alternatives:** Many vintage synthesizers have modern clones using 1V/Oct

**Verification test:**
1. **Patch known CV source** (1V/Oct sequencer or keyboard)
2. **Play octave interval** (12 semitones)
3. **Should produce:** Perfect octave (frequency doubles)
4. **If wrong:** Equipment uses different standard

---

## High Gate vs Low Gate: "My Vintage Synth Triggers Backwards"

### The Confusion

You connect a modern gate/trigger source to a vintage synthesizer, but notes trigger when you release keys instead of when you press them, or your sequencer seems to work in reverse - triggering on rests instead of notes.

### Why This Happens

**Gate polarity standards** - Early synthesizer manufacturers couldn't agree on whether "note on" should be high voltage or low voltage (ground):

- **High gate (S-trigger, modern standard):** +5V or higher = note on, 0V = note off
  - Used by: Moog, modern Eurorack, most contemporary gear
  - Logic: High voltage = active, makes intuitive sense

- **Low gate (V-trigger):** 0V or ground = note on, positive voltage = note off
  - Used by: Some vintage Korg, Roland, early equipment
  - Logic: Grounding triggers envelope (historical circuit design reasons)
  - **INVERTED from modern standard!**

### Technical Reality

```
HIGH GATE (Modern/Moog):         LOW GATE (Vintage):
+5V = Note ON                    0V = Note ON
 0V = Note OFF                   +5V = Note OFF

When connected incorrectly:
Modern gate to vintage low-trigger = triggers on release, not press
Vintage low-trigger to modern = silence when expecting sound
```

### Common Scenarios

**Scenario 1: Modern sequencer to vintage low-gate synth**
- **Problem:** Eurorack sequencer (high gate) to vintage synth expecting low gate
- **Expectation:** Notes trigger on sequencer steps
- **Reality:** Notes trigger between steps (when gate goes low)
- **Solution:** Use gate inverter to flip polarity

**Scenario 2: Vintage keyboard to modern module**
- **Problem:** Keyboard outputs low gate, module expects high gate
- **Expectation:** Pressing keys triggers envelopes
- **Reality:** Releasing keys triggers envelopes
- **Solution:** Inverter module OR check if modern module has polarity switch

**Scenario 3: Trigger signals seem random**
- **Problem:** Mixing high and low gate equipment without knowing standards
- **Expectation:** Rhythmic triggering
- **Reality:** Inverted rhythm or no triggering at all
- **Solution:** Identify equipment standards and use proper inverters

### The Correct Approach

**Identifying gate standards:**
1. **Check documentation:** Look for "S-trigger" (high gate) or "V-trigger" (low gate)
2. **Modern equipment:** Almost always high gate (positive = on)
3. **Vintage clues:** Korg, early Roland often low gate
4. **Test carefully:** Short test before connecting entire system

**Solutions:**
```
Option 1: Inverter Module
- Dedicated gate inverter flips polarity
- Eurorack: Many utility modules include inverters
- Simple circuit: Can build DIY inverter easily

Option 2: Equipment with Switchable Polarity
- Some modern modules include polarity switches
- Check if destination has "gate polarity" switch
- Saves needing external inverter

Option 3: Use Correct Standards Together
- Keep high-gate and low-gate systems separate
- Use equipment designed for same era/standard
- Avoid mixing unless you have proper conversion
```

**Testing gate polarity:**
1. **Connect gate source to oscilloscope (or LED):**
   - Press key or trigger step
   - High gate: Voltage goes UP when triggered
   - Low gate: Voltage goes DOWN (to ground) when triggered

2. **Behavioral test:**
   - Patch gate to envelope generator
   - If envelope triggers backwards, polarity is inverted
   - Add inverter and retest

---

## Passive Multiple Voltage Sag: "My Oscillators Go Out of Tune"

### The Confusion

You use a passive multiple or stackable cable to send pitch CV to three oscillators. The first oscillator tracks perfectly, but the second and third progressively go flat (out of tune), especially in higher octaves. The more destinations you connect, the worse the detuning becomes.

### Why This Happens

**CV inputs draw current** - When you split a CV signal passively (simple wire connection), each destination input draws small amounts of current from the source. This current draw causes voltage drop across cable resistance and source output impedance, reducing the voltage that reaches later destinations.

**Technical reality:**
- **Passive multiple:** Simple wire connection, no amplification
- **CV input impedance:** Typically 100kΩ, but varies by design
- **Current draw:** Even small currents cause voltage drop
- **Cumulative effect:** Each additional connection increases total current draw
- **Result:** Voltage "sags" more with each added connection

### Visual Understanding

```
SOURCE: Outputs 2.000V for specific pitch

After passive multiple:
Oscillator 1: Receives 2.000V (perfect)
Oscillator 2: Receives 1.990V (slightly flat)
Oscillator 3: Receives 1.980V (more flat)

In 1V/Oct system:
10mV error = approximately 1.2 cents detuning
20mV error = approximately 2.4 cents detuning
Compounding across octaves!
```

### Common Scenarios

**Scenario 1: Three oscillators from single sequencer**
- **Problem:** Patch sequencer pitch CV through passive mult to three VCOs
- **Expectation:** All three oscillators play same pitch
- **Reality:** Second and third VCOs progressively flat, worsens in higher registers
- **Solution:** Use buffered multiple to maintain voltage accuracy

**Scenario 2: Stackable cables creating voltage sag**
- **Problem:** Using stackable/mult cables to distribute CV to many modules
- **Expectation:** Convenient signal distribution
- **Reality:** Each connection degrades voltage accuracy
- **Solution:** Limit stackables to 2-3 connections, or use buffered multiple

**Scenario 3: Long cable runs making it worse**
- **Problem:** Passive mult with long cables to distant modules
- **Expectation:** Cable length doesn't matter
- **Reality:** Cable resistance adds to voltage drop
- **Solution:** Keep CV runs short, use buffered distribution, or relocate modules

### The Correct Approach

**Understanding when passive mults work:**
```
SAFE for passive multiples:
✓ Gate/trigger signals (not precision-dependent)
✓ Audio signals (slight level drop not critical)
✓ Modulation where exact voltage doesn't matter
✓ Two outputs maximum for CV (usually acceptable)

REQUIRES buffered multiple:
✗ Pitch CV to 3+ oscillators (tuning critical)
✗ Any precision CV application
✗ Long cable runs
✗ Driving low-impedance inputs
```

**Buffered multiple benefits:**
1. **Active amplification:** Each output actively driven, no voltage sag
2. **Source isolation:** Load on one output doesn't affect others
3. **Consistent voltage:** All outputs receive identical voltage regardless of destination count
4. **Current capacity:** Can drive many destinations without degradation

**Practical solutions:**
```
Solution 1: Use Buffered Multiple
- Dedicated buffered mult module
- Typically 4-8 outputs from single input
- Each output maintains full voltage
- Small cost in HP and power draw

Solution 2: Limit Passive Splitting
- Maximum 2 outputs for pitch CV
- Use for less critical signals (gates, audio, modulation)
- Accept slight imperfection for non-pitch applications

Solution 3: Oscillator Hard Sync
- Use one oscillator as master (perfect CV)
- Hard sync others to master oscillator
- They'll track master regardless of slight CV errors
- Works only if sync is musically appropriate

Solution 4: Tune Compensation
- Manually tune flat oscillators slightly sharp
- Compensates for predictable voltage sag
- Not ideal but workable for stable patches
```

**Testing for voltage sag:**
1. **Voltmeter test:**
   - Measure CV at source output
   - Measure CV at each destination through passive mult
   - Compare readings - should be identical but likely won't be

2. **Musical test:**
   - Patch single pitch CV to multiple oscillators through passive mult
   - Listen for detuning, especially in higher octaves
   - If detuned, voltage sag is occurring

---

## Loading and Impedance Issues

### The Confusion

Some connections work fine, others cause strange behaviors - level drops, frequency response changes, unexpected distortion, or complete signal loss. The same patch works with certain modules but fails with others, seemingly at random.

### Why This Happens

**Impedance mismatch** - Every electronic input and output has an impedance (resistance to AC signals). When output impedance is too high relative to input impedance, or when too many inputs draw from single output, you get:
- **Signal level loss**
- **Frequency response changes** (especially high frequency roll-off)
- **Increased noise susceptibility**
- **Distortion and instability**

**Technical reality:**
- **Output impedance:** Source's resistance to signal delivery (lower is better)
- **Input impedance:** Destination's resistance to accepting signal (higher is better)
- **Rule of thumb:** Input impedance should be 10x output impedance minimum
- **Loading effect:** Multiple inputs on single output multiply the load

### Common Scenarios

**Scenario 1: Guitar pedal to modular level loss**
- **Problem:** Guitar pedal output (high impedance ~10kΩ) to modular input (can be 10kΩ)
- **Expectation:** Audio passes through cleanly
- **Reality:** Significant level drop, high frequency loss, weak sound
- **Solution:** Use buffer or preamp between pedal and modular

**Scenario 2: Multiple modules loading single output**
- **Problem:** One oscillator driving four filter inputs (without mult)
- **Expectation:** All filters receive same signal
- **Reality:** Signal level drops, oscillator output impedance stressed
- **Solution:** Use active buffer/multiple to distribute signal

**Scenario 3: Long cables causing issues**
- **Problem:** 10+ foot cable between modules
- **Expectation:** Length doesn't matter
- **Reality:** Cable capacitance with high output impedance causes roll-off
- **Solution:** Keep critical audio runs short, use low-impedance buffers, or use balanced connections

### The Correct Approach

**Understanding impedance:**
```
TYPICAL VALUES:

Modular outputs:
- VCO: 1kΩ (low impedance, good for driving multiple loads)
- Vintage gear: 10kΩ+ (high impedance, needs buffering)

Modular inputs:
- Modern: 100kΩ (high impedance, doesn't load output much)
- Vintage: 10-50kΩ (moderate, can load high-Z outputs)

Guitar pedals:
- Output: 1-10kΩ (varies widely)
- Input: 1MΩ typically (designed for guitar pickups)
```

**Solutions for impedance mismatch:**
1. **Use buffers:**
   - Low-impedance buffer between source and multiple destinations
   - Many Eurorack modules include built-in buffers
   - Dedicated buffer modules available

2. **Check specifications:**
   - Look for output/input impedance in module specifications
   - Calculate if impedances are compatible (10:1 ratio minimum)
   - Use external buffers when needed

3. **Minimize loading:**
   - Reduce number of parallel connections
   - Use active distribution (buffered mults)
   - Keep signal paths as simple as possible

4. **Cable considerations:**
   - Shorter cables for high-impedance sources
   - Quality cables with low capacitance
   - Balanced connections when possible for long runs

**Testing for loading issues:**
1. **Level test:**
   - Measure signal level at output
   - Connect destination, measure again
   - Significant drop indicates loading problem

2. **Frequency response test:**
   - Send full-range audio through connection
   - Listen for high-frequency loss (dulling)
   - If bright sound becomes dull, likely impedance/cable issue

3. **Multiple connection test:**
   - Add destinations one at a time
   - Note if performance degrades with each addition
   - Indicates output can't drive multiple loads

---

## Quick Reference: Signal & Control Troubleshooting

### "My CV doesn't work"
1. **Check DC coupling:** Is the signal path DC coupled?
2. **Check voltage standards:** 1V/Oct vs Hz/V mismatch?
3. **Check connections:** Cables fully inserted?
4. **Test with known source:** Does a different CV source work?

### "My modulation behaves weird"
1. **Check polarity:** Bipolar source to unipolar parameter?
2. **Check attenuverter position:** Is it at center (off)?
3. **Check modulation depth:** Too much? Too little?
4. **Check DC offset:** Does parameter need positive-only voltages?

### "My oscillators won't stay in tune"
1. **Check multiples:** Using passive mult for CV? Switch to buffered
2. **Check voltage sag:** Measure CV at each destination
3. **Check power supply:** Inadequate power can cause drift
4. **Check temperature:** Analog oscillators drift when warming up

### "Things trigger at wrong times"
1. **Check gate polarity:** High gate vs low gate?
2. **Check trigger vs gate:** Does module need sustained gate or just trigger?
3. **Check voltage levels:** Is "high" gate actually high enough?
4. **Test with inverter:** Does flipping polarity fix it?

### "Signal is weak or distorted"
1. **Check impedance:** Output/input impedance compatible?
2. **Check loading:** Too many inputs on one output?
3. **Check cable length:** Long runs with high-impedance sources?
4. **Check levels:** Input overloading? Output too weak?

---

## Key Takeaways

**Voltage Standards Matter:**
- DC coupling for CV (not AC)
- 1V/Oct vs Hz/V must match
- Bipolar vs unipolar for proper parameter control
- High gate vs low gate determines trigger behavior

**Electrical Reality:**
- Current draw causes voltage sag
- Passive splitting has limits
- Impedance mismatches cause problems
- Buffers solve most distribution issues

**When In Doubt:**
- Read specifications carefully
- Use buffered distribution for critical signals
- Test simple patches before complex ones
- Verify standards match before patching

**Invest In:**
- Buffered multiples for pitch CV
- Good quality cables
- Utility modules (inverters, buffers, offsets)
- Understanding your equipment's specifications

---

*This problem-solving guide addresses the fundamental signal and control issues that trip up beginners and occasionally frustrate experienced users. Understanding these concepts prevents hours of troubleshooting and enables confident patching.*

---

**Related Dictionary Terms:** DC Coupling, Bipolar/Unipolar, 1V/Octave, Gate, CV, Buffered Multiple, Passive Multiple, Impedance, Attenuverter, Offset

**Related Problem-Solving Guides:** 
- Guide #4: Modulation Confusions (attenuverter usage, modulation depth)
- Guide #5: Timing and Sync Confusions (trigger vs gate behavior)
- Guide #7: Equipment and Compatibility (impedance, balanced audio, grounding)