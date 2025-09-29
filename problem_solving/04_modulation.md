# Problem-Solving Guide #4: Modulation Confusions
*Understanding modulation depth, attenuverters, and why your modulation doesn't work as expected*

---

## How to Use This Guide

**Start with your symptom:**
- "My modulation does nothing"
- "The attenuverter is at maximum but nothing happens"
- "Modulation goes backwards or inverted"
- "Too much modulation - can't control the amount"
- "Multiple modulation sources behave unpredictably"

Find the relevant section below, understand why it's happening, and apply the solution.

---

## Attenuverter Center Position: "My Modulation Does Nothing"

### The Confusion

You've patched an LFO to filter cutoff using an attenuverter input, turned the attenuverter knob all the way up, but nothing happens. Or it's in the middle and you expect maximum modulation but get nothing. The modulation seems broken or you don't understand what the control does.

### Why This Happens

**CENTER POSITION = OFF, NOT MAXIMUM** - This is the #1 modulation confusion. Attenuverters (attenuator + inverter) have center position at zero modulation, clockwise for positive modulation, counterclockwise for negative/inverted modulation.

**Technical reality:**
- **Center (12 o'clock):** Zero modulation, signal blocked
- **Clockwise (1-5 o'clock):** Positive modulation, increasing depth
- **Counterclockwise (7-11 o'clock):** Negative/inverted modulation, increasing depth

**Common mistake:** Thinking center = 50% or maximum, when it actually = OFF.

### Visual Understanding

```
ATTENUVERTER POSITIONS:

Fully CCW    Center      Fully CW
  ◄─────────── • ───────────►
  -100%        0%         +100%
  Inverted     OFF        Normal
  Maximum      NOTHING    Maximum

BEHAVIOR:
7 o'clock: Full negative (inverted modulation)
12 o'clock: OFF (no modulation at all)
5 o'clock: Full positive (normal modulation)
```

### Common Scenarios

**Scenario 1: "LFO does nothing to filter cutoff"**
- **Problem:** Attenuverter at 12 o'clock (center), LFO patched in
- **Expectation:** Some modulation, maybe 50% depth
- **Reality:** Center = OFF, zero modulation passes through
- **Solution:** Turn clockwise to 3-4 o'clock for positive modulation

**Scenario 2: "Modulation goes backwards/inverted"**
- **Problem:** LFO makes filter close when it should open
- **Why:** Attenuverter turned counterclockwise (negative range)
- **Reality:** Below center = inverted modulation
- **Solution:** Turn clockwise past center for normal direction

**Scenario 3: "Can't find the modulation sweet spot"**
- **Problem:** Too much or too little, can't dial in right amount
- **Why:** Not understanding that center = zero, not middle amount
- **Technique:** Start at center (off), slowly turn clockwise until desired depth
- **Fine control:** Slight movements from center = subtle modulation

### The Correct Approach

**Understanding attenuverter ranges:**
```
COUNTERCLOCKWISE (7-11 o'clock):
- Inverts modulation signal
- Full CCW = maximum negative modulation
- Use when: Want inverted modulation direction
- Example: LFO makes filter close instead of open

CENTER (12 o'clock):
- Zero modulation
- Signal completely blocked
- Starting point for dialing in modulation
- Not "50%" or "medium" amount!

CLOCKWISE (1-5 o'clock):
- Normal modulation signal
- Full CW = maximum positive modulation  
- Use when: Want normal modulation direction
- Example: LFO makes filter open and close normally
```

**Proper attenuverter workflow:**
1. **Start at center** (12 o'clock) - verify zero modulation
2. **Slowly turn clockwise** - modulation increases gradually
3. **Listen for desired depth** - stop when it sounds right
4. **Too much?** Turn back toward center
5. **Need inverted?** Turn counterclockwise from center

**Musical applications:**
```
POSITIVE MODULATION (Clockwise):
✓ LFO to filter cutoff (opens/closes)
✓ Envelope to VCA (normal amplitude control)
✓ LFO to pitch (vibrato)
✓ Standard modulation routing

NEGATIVE MODULATION (Counterclockwise):
✓ Inverted filter sweeps
✓ Opposite modulation direction
✓ Creative effects
✓ Compensating modulation (one source counters another)
```

**Testing attenuverter function:**
1. Patch obvious modulation source (LFO to pitch)
2. Set attenuverter to center - should hear NO modulation
3. Turn clockwise - should hear increasing vibrato
4. Turn counterclockwise from center - vibrato inverts
5. Now you understand how it works!

---

## Modulation Amount vs Parameter Start Position

### The Confusion

You set filter cutoff to 50%, add LFO modulation at 100%, but the filter opens all the way and closes completely - much more range than you wanted. Or you set cutoff high, add modulation, and the filter barely moves. The interaction between parameter position and modulation amount seems unpredictable.

### Why This Happens

**Parameter position + modulation = final range** - The starting parameter position and modulation amount work TOGETHER to determine where the parameter moves. They're not independent - they interact mathematically.

**Technical reality:**
- **Parameter position:** Starting point (where modulation centers around)
- **Modulation depth:** How far parameter moves up/down from start
- **Result:** Start position + modulation amount = actual parameter range

### Visual Understanding

```
PARAMETER + MODULATION INTERACTION:

Example: Filter Cutoff with LFO modulation

Start at 50%, Modulation depth 50%:
  0%        50%         100%
  |─────────●─────────|
           / \
          /   \
    Result: 25% to 75% (musical sweep)

Start at 80%, Modulation depth 50%:
  0%                80% 100%
  |──────────────────●──|
                    / \
                   /   \
    Result: 55% to 100% (mostly open)

Start at 20%, Modulation depth 50%:
  0%  20%              100%
  |───●──────────────|
     / \
    /   \
    Result: 0% to 45% (mostly closed)
```

### Common Scenarios

**Scenario 1: "Modulation range way too wide"**
- **Problem:** Filter cutoff at 50%, LFO depth at 100%, filter goes from fully closed to fully open
- **Why:** 50% starting point ± 50% modulation = 0% to 100% range
- **Mathematical:** Parameter travels equal distance up and down from start point
- **Solution:** Reduce modulation depth OR adjust start position

**Scenario 2: "Barely any modulation happening"**
- **Problem:** Filter cutoff at 90%, adding modulation seems to do nothing
- **Why:** Starting high means modulation hits ceiling quickly
- **Example:** 90% start + 50% depth tries to go 40-140%, but caps at 100%
- **Solution:** Lower start position OR increase modulation depth

**Scenario 3: "Modulation sounds different on different patches"**
- **Problem:** Same LFO depth sounds subtle on one patch, extreme on another
- **Why:** Different starting parameter positions
- **Reality:** Modulation depth is relative to start position
- **Solution:** Adjust start position for consistent modulation character

### The Correct Approach

**Think in terms of RANGE, not just DEPTH:**

**Question 1: Where should parameter START?**
- This is your base sound without modulation
- Middle position = most modulation range both directions
- High position = limited upward range
- Low position = limited downward range

**Question 2: Where should parameter END (minimum/maximum)?**
- This determines required modulation depth
- Want filter to sweep from 20% to 80%? 
  - Start at 50%, modulation depth 30%
- Want filter to barely open?
  - Start at 10%, modulation depth 10%

**Strategic approach:**
```
METHOD 1: Start middle, adjust depth
1. Set parameter to middle (50%)
2. Add modulation
3. Adjust depth to taste
4. Advantage: Maximum bidirectional range

METHOD 2: Set destination range, work backwards
1. Decide: Where should parameter go?
   - Minimum value: 30%
   - Maximum value: 70%
2. Calculate:
   - Range = 70% - 30% = 40%
   - Center = (70% + 30%) / 2 = 50%
3. Set parameter to 50%, depth to 20% (half of range)
4. Advantage: Precise control of exact range
```

**Musical applications:**
```
SUBTLE MODULATION:
- High start position (80%)
- Low depth (10-20%)
- Result: Gentle movement, mostly open
- Use: Subtle filter animation, barely noticeable

DRAMATIC SWEEPS:
- Middle start position (50%)
- High depth (40-50%)
- Result: Wide sweeps, dramatic effect
- Use: Acid bass, dramatic filter effects

ONE-DIRECTION MODULATION:
- Low start position (20%)
- Medium depth (30%)
- Result: Opens but doesn't close much
- Use: Brightening effect, no darkness
```

**Common mistakes:**
```
MISTAKE: Maximum depth on everything
FIX: Reduce depth, increase start position for subtlety

MISTAKE: Ignoring start position
FIX: Start position is HALF the equation

MISTAKE: Expecting same depth to sound same on all patches
FIX: Different start positions = different results

MISTAKE: Parameter hitting limits (0% or 100%)
FIX: Adjust start position to keep modulation in musical range
```

**Pro technique - Setting exact ranges:**
1. **Identify desired minimum:** Where should parameter close to?
2. **Identify desired maximum:** Where should parameter open to?
3. **Calculate center:** (min + max) / 2
4. **Calculate depth:** (max - min) / 2
5. **Set parameter to center, modulation to depth**
6. **Result:** Precise control of modulation range

---

## Exponential vs Linear Modulation: "This Control Feels Wrong"

### The Confusion

You're adjusting modulation depth or a parameter, and the control feels weird - most of the action happens at one end, with dead zones where nothing seems to change. Or filter cutoff feels wrong - huge changes at low values, tiny changes at high values.

### Why This Happens

**Human perception vs control response** - We perceive pitch and volume logarithmically, but some controls respond linearly. This mismatch makes controls feel unnatural or "broken."

**Technical reality:**
- **Linear control:** Equal rotation = equal parameter change
- **Exponential control:** Equal rotation = proportional change (matches hearing)
- **Perception:** Pitch and volume feel exponential to humans
- **Mismatch:** Linear controls for exponential perception feel wrong

### Common Scenarios

**Scenario 1: "Filter cutoff does nothing until the end"**
- **Problem:** Turning cutoff knob from 0-80% barely changes sound, 80-100% makes huge difference
- **Why:** Linear frequency control (Hz) vs exponential hearing
- **Example:** 20Hz to 200Hz (linear) sounds smaller than 2kHz to 2.2kHz (same linear change)
- **Reality:** Our ears hear proportional changes, not absolute
- **Solution:** Some synths offer exponential cutoff curves

**Scenario 2: "LFO rate control feels backwards"**
- **Problem:** Slow LFO adjustments huge impact, fast LFO changes barely noticeable
- **Why:** Linear Hz control of exponential perception
- **Musical impact:** Hard to dial in subtle LFO speeds
- **Better control:** Logarithmic LFO rate controls feel more musical
- **Workaround:** Make small adjustments at slow end, larger at fast end

**Scenario 3: "Modulation depth feels all-or-nothing"**
- **Problem:** First 20% of knob does most of work, rest seems useless
- **Why:** May be exponential depth control (good) or parameter hitting limits (bad)
- **Check:** Is parameter maxing out (hitting 0% or 100%)?
- **Solution:** Adjust parameter start position for better working range

### The Correct Approach

**Understanding response curves:**
```
LINEAR RESPONSE:
  Output
    |     /
    |    /
    |   /
    |  /
    | /
    |/________
         Input
    Equal steps everywhere
    
EXPONENTIAL RESPONSE:
  Output
    |         /
    |       /
    |     /
    |   /
    | /
    |/___________
         Input
    Gradual then dramatic
```

**When each is appropriate:**
- **Linear:** Envelope times, modulation depths, mix levels (dB)
- **Exponential:** Frequency (Hz), pitch, filter cutoff (Hz)
- **Logarithmic:** Opposite of exponential, rare in synthesis

**Working with "wrong-feeling" controls:**

**If control feels unresponsive at one end:**
1. **Check if parameter hitting limits**
   - Adjust start position
   - Reduce modulation depth
2. **Accept control curve**
   - Make smaller movements where sensitive
   - Larger movements where less sensitive
3. **Use external tools**
   - CV processor to reshape response
   - Precision adders/scalers

**If filter cutoff feels wrong:**
- Some vintage synths have linear Hz cutoff (feels weird)
- Modern synths often use exponential curves (feels natural)
- Workaround: Make smaller adjustments at high end

**Modulation interaction with response curves:**
```
LINEAR PARAMETER + LINEAR MODULATION:
- Predictable, equal changes
- May not sound musical for pitch/frequency

EXPONENTIAL PARAMETER + LINEAR MODULATION:
- Most common combination
- Parameter response shapes modulation
- Usually musical for pitch/frequency
```

---

## Multiple Modulation Sources Stacking

### The Confusion

You've patched multiple modulation sources to the same parameter (envelope + LFO to filter cutoff), but the behavior seems unpredictable - sometimes they add, sometimes one overrides the other, sometimes it clips or distorts.

### Why This Happens

**Multiple modulations combine mathematically** - How they combine depends on synthesis architecture:
- **Additive:** Sources add together (can exceed parameter range)
- **Multiplicative:** Sources multiply (complex interaction)
- **Priority:** Last source wins, others ignored

### Common Scenarios

**Scenario 1: "Both modulations together sound distorted/weird"**
- **Problem:** Envelope + LFO both maxed out, filter behaves strangely
- **Why:** Combined modulation exceeds parameter range (>100%)
- **Clipping:** Parameter hits ceiling, stays there
- **Solution:** Reduce depth of one or both sources

**Scenario 2: "Second modulation doesn't seem to work"**
- **Problem:** Patched second LFO, but first LFO seems to dominate
- **Why:** First modulation maxed out, parameter already at limit
- **Or:** Some synths have modulation priority (later sources ignored)
- **Solution:** Reduce first modulation depth to leave room for second

**Scenario 3: "Modulations cancel each other out"**
- **Problem:** Two LFOs patched, but less movement than one alone
- **Why:** Opposite phases, sources fighting each other
- **Mathematical:** Positive and negative values canceling
- **Solution:** Adjust LFO phases or use different rates

### The Correct Approach

**Understanding modulation combination:**
```
ADDITIVE COMBINATION (most common):
Envelope: +30%
LFO: +20%
Result: +50% total modulation

Problem: Can exceed 100%!
Envelope: +60%
LFO: +50%
Result: +110% (clips to 100%, sounds distorted)

MULTIPLICATIVE COMBINATION (less common):
Source 1: 50% of range
Source 2: 50% of result
Result: 25% of total range (more subtle)
```

**Strategies for multiple modulations:**

**1. Budget your modulation:**
```
Want envelope + LFO on filter:
- Envelope depth: 40%
- LFO depth: 30%
- Total: 70% (safe, no clipping)

Allows both to work without hitting limits
```

**2. Complementary modulations:**
```
Slow envelope (note-based)
+ Fast LFO (vibrato)
= Vibrato within envelope shape

Different time scales work together musically
```

**3. Modulation of modulation:**
```
Instead of: Both sources → parameter
Try: LFO → Envelope depth → parameter

Creates complex modulation without clipping
LFO varies how much envelope affects parameter
```

**Musical applications:**
```
ADDITIVE (simple stacking):
✓ Envelope + LFO to filter (animation)
✓ Multiple envelopes to VCA (complex amplitude)
✓ Keep combined depth under 80-90% (avoid clipping)

LAYERED (different rates):
✓ Slow LFO + fast LFO (complex movement)
✓ Envelope + modulated LFO (evolving modulation)
✓ Different time scales = rich textures

MODULATION OF MODULATION:
✓ LFO controls envelope depth
✓ Envelope controls LFO speed
✓ Random voltage controls modulation amounts
✓ Creates organic, complex behavior
```

**Common mistakes:**
```
MISTAKE: Maxing out all modulation depths
FIX: Budget depths so total stays under 100%

MISTAKE: Not considering modulation interaction
FIX: Test each source individually, then combined

MISTAKE: Ignoring parameter start position
FIX: Lower start position leaves room for multiple modulators

MISTAKE: Same-speed LFOs fighting each other
FIX: Use different rates or complementary shapes
```

---

## Modulation Destination Compatibility

### The Confusion

You patch modulation to a parameter and it either doesn't work at all, works backwards, or creates unexpected results. Some destinations seem to work fine while others don't respond correctly to the same modulation source.

### Why This Happens

**Parameters expect specific signal types** - Some parameters need bipolar signals (±5V), others need unipolar (0-10V). Some expect specific voltage ranges. Mismatches cause unexpected behavior.

**Technical reality:**
- **Pitch (1V/oct):** Expects precise voltage, often bipolar
- **Filter cutoff:** Usually expects unipolar CV (0-10V)
- **VCA level:** Expects unipolar (negative = silence)
- **Modulation inputs:** Usually accept bipolar, controlled by attenuverter

### The Correct Approach

**Understanding parameter expectations:**
```
UNIPOLAR DESTINATIONS (0-10V):
- VCA level (negative would be silence)
- Filter cutoff (negative usually clamped)
- Most "amount" parameters
- Envelope outputs (usually unipolar)

BIPOLAR DESTINATIONS (±5V):
- Pitch (positive = up, negative = down)
- Pan position (positive = right, negative = left)
- Modulation inputs with attenuverters
- Some effect parameters
```

**Solutions for mismatches:**
- **Offset module:** Convert bipolar to unipolar
- **Attenuverter:** Scale and invert as needed
- **Precision adder:** Combine signals for proper range
- **Check specifications:** Know what each parameter expects

---

## Quick Reference: Modulation Troubleshooting

### "My modulation does nothing"
1. **Check attenuverter position:** Center = OFF!
2. **Turn clockwise from center** for positive modulation
3. **Verify cable actually patched** to modulation input
4. **Check modulation source** is actually running

### "Modulation goes backwards/inverted"
1. **Attenuverter counterclockwise** = inverted
2. **Turn past center clockwise** for normal direction
3. **Or embrace it** - inverted can be musical

### "Too much or too little modulation"
1. **Check parameter start position**
2. **Adjust attenuverter depth**
3. **Both work together** to determine range
4. **Set destination range first**, work backwards

### "Multiple modulations sound weird"
1. **Combined depth exceeds 100%?** Reduce both
2. **Budget modulation depths** (keep total <90%)
3. **Different time scales** work better together
4. **Test each source individually** first

### "Modulation doesn't work on this parameter"
1. **Check signal type:** Bipolar vs unipolar
2. **Use offset/attenuverter** to convert
3. **Verify parameter accepts modulation** (some don't)

---

## Key Takeaways

**Attenuverters:**
- Center position = OFF (not 50%!)
- Clockwise = positive modulation
- Counterclockwise = inverted modulation
- Start at center, turn slowly clockwise

**Parameter + Modulation Interaction:**
- Start position + depth = final range
- Both work together (not independent)
- Set destination range, work backwards
- Parameter hitting limits? Adjust start position

**Multiple Modulation Sources:**
- Combined depth can exceed parameter range
- Budget depths to avoid clipping
- Different rates work better together
- Test individually before combining

**Signal Compatibility:**
- Unipolar (0-10V): VCA, filter cutoff, amounts
- Bipolar (±5V): Pitch, pan, mod inputs
- Use offset/attenuverter to convert
- Check parameter specifications

**When In Doubt:**
- Start attenuverter at center (off)
- Adjust parameter start position first
- Add modulation gradually
- Keep combined depths under 90%
- Test each source individually

---

*This problem-solving guide addresses modulation confusions that frustrate beginners and experienced users alike. Understanding that attenuverter center = OFF and that parameter position + modulation depth work together prevents countless hours of confusion.*

---

**Related Dictionary Terms:** Attenuverter, Modulation, LFO, Envelope, CV, Offset, Bipolar, Unipolar, VCA, VCF, Modulation Depth

**Related Problem-Solving Guides:**
- Guide #1: Signal and Control (bipolar/unipolar signals, CV behavior)
- Guide #3: Sound Shaping (envelope behavior, filter modulation)
- Guide #5: Timing and Sync (LFO rates, tempo sync)