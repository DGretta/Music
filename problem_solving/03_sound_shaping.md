# Problem-Solving Guide #3: Sound Shaping Confusions
*Understanding filters, envelopes, and why your sound shaping doesn't work as expected*

---

## How to Use This Guide

**Start with your symptom:**
- "My filter sounds wrong in different octaves"
- "12dB vs 24dB - I don't understand the difference"
- "This low-pass gate doesn't work like a filter OR a VCA"
- "The sustain knob doesn't seem to do anything"
- "My filter squeals when I turn up resonance"

Find the relevant section below, understand why it's happening, and apply the solution.

---

## Filter Tracking: "My Filter Sounds Wrong Across the Keyboard"

### The Confusion

Perfect bass sound at C2, but playing C0 sounds muffled and dull. Or bright lead at C5 sounds thin and weak at C3. The filter seems "stuck" at one brightness level regardless of pitch.

### Why This Happens

**Oscillators track keyboard automatically (1V/octave), filters don't** - Unless you enable keyboard tracking, filter cutoff stays at one fixed frequency while your notes move up and down the keyboard.

**Result:** Low notes get over-filtered (dull), high notes get under-filtered (thin).

### The Solution

**Enable filter keyboard tracking:**
- **0%:** Filter cutoff fixed (use for drones, pads with static brightness)
- **50%:** Partial tracking (balanced approach, some variation)
- **100%:** Filter follows pitch exactly (consistent brightness across range)

**Setup:**
1. Play middle note in your range
2. Set filter cutoff for desired brightness
3. Enable tracking (start with 75%)
4. Test across full keyboard range
5. Adjust tracking amount until brightness feels consistent

**Recommended tracking:**
- Bass: 70-100%
- Leads: 80-100%
- Pads: 0-50% (often want static brightness)

---

## Filter Slope: "12dB vs 24dB - Which Do I Need?"

### The Confusion

Your synth offers "2-pole" vs "4-pole" or "12dB/octave" vs "24dB/octave" filters, but you don't know what this means or when to use each.

### Why This Happens

**Technical jargon for simple concept:** How steeply the filter removes frequencies beyond cutoff.

**Translation:**
- **2-pole = 12dB/oct:** Gentle slope, open/airy sound (vintage character)
- **4-pole = 24dB/oct:** Steep slope, dramatic filtering (Moog character)

### The Solution

**12dB/octave (2-pole):**
- Character: Open, airy, musical
- Use for: Vintage sounds, warm pads, gentle leads
- Classic synths: Prophet-5, Roland Juno, most vintage gear

**24dB/octave (4-pole):**
- Character: Aggressive, focused, dramatic
- Use for: Punchy bass, screaming leads, techno
- Classic synths: Minimoog, Moog Voyager, modern analog

**Quick decision:**
- Want vintage character? → 12dB
- Want aggressive modern? → 24dB
- Techno/house bass? → 24dB
- Synthwave/retro? → 12dB

**Important:** Resonance behaves differently! 24dB creates much more dramatic resonance peaks than 12dB.

---

## Low Pass Gate: "This Doesn't Work Like a Filter OR VCA"

### The Confusion

You bought an LPG expecting separate filter and amplitude control, but you can't adjust brightness without affecting volume, and vice versa. It seems "broken" or you can't figure out how to use it.

### Why This Happens

**LPGs are fundamentally different** - Not a filter PLUS a VCA, but a single circuit that controls brightness and amplitude TOGETHER using a vactrol component. This mimics acoustic instruments (loud = bright, quiet = dark).

**Technical reality:**
- Can't separate brightness from amplitude
- That's the entire design philosophy
- Vactrol creates slow, organic response
- Mimics natural acoustic decay

### The Solution

**Stop trying to use it like VCF+VCA. It's a different tool entirely.**

**Strike mode (percussive):**
- Trigger input creates natural percussive decay
- Perfect for: Drums, bongos, plucked sounds, mallets
- Character: Opens fast, closes slowly (acoustic-like)

**CV mode (sustained):**
- Continuous CV controls both brightness and amplitude together
- Perfect for: Swelling pads, organic textures, performance control

**When to use LPG:**
✓ Percussion with acoustic character
✓ Organic, natural-sounding textures
✓ West Coast/Buchla patches
✓ Transform electronic to acoustic feel

**When to use VCF+VCA instead:**
✓ Need independent brightness/amplitude control
✓ Want resonant filter sweeps
✓ Standard subtractive synthesis
✓ Electronic, precise control

**Key insight:** Don't fight the design. LPG for organic/acoustic, VCF+VCA for electronic/precise.

---

## Envelope Sustain: "The Sustain Knob Doesn't Do Anything"

### The Confusion

You adjust the sustain parameter but hear no difference, especially on short/percussive sounds. It seems broken or you don't understand what it does.

### Why This Happens

**SUSTAIN IS A LEVEL, NOT A TIME** - Most common envelope confusion ever.

**ADSR breakdown:**
- **Attack TIME:** How long to reach peak
- **Decay TIME:** How long to fall from peak to sustain
- **Sustain LEVEL:** What level to HOLD at (NOT a time!)
- **Release TIME:** How long to fall to zero

**If you play short notes (<1 second), sustain doesn't matter** - The envelope never reaches sustain stage before you release the key.

### The Solution

**Test sustain properly:**
1. Set decay time LONG (2+ seconds)
2. HOLD a note for 3+ seconds
3. Adjust sustain while holding - now you'll hear it!

**Sustain level guide:**
- **100%:** Organ sounds, sustained pads, no decay
- **50-75%:** Strings, piano (natural dynamic contour)
- **0-25%:** Percussion, plucks, staccato

**Common mistakes:**
- Testing with drum sounds (too short to reach sustain)
- Confusing sustain with release
- Short decay time means sustain barely heard
- Not holding notes long enough

**Remember:** Sustain only matters on HELD notes (>1 second). For percussion, it's irrelevant.

---

## Resonance and Self-Oscillation

### The Confusion

You turn up resonance slightly and suddenly your filter makes a loud whistling tone that drowns out everything. The filter seems broken or you're afraid to use resonance.

### Why This Happens

**High resonance causes self-oscillation** - Resonance emphasizes frequencies at cutoff. Too much resonance creates feedback loop where filter generates its own pure tone.

**Resonance levels:**
- **0-40%:** Subtle emphasis, gentle character
- **40-70%:** Noticeable peak, adds presence
- **70-95%:** Dramatic peak, aggressive (acid bass range)
- **95-100%:** Self-oscillation - filter generates pure sine wave

### The Solution

**Self-oscillation isn't broken - it's a feature!**

**If you don't want it:**
- Keep resonance below ~85%
- Reduce input signal level
- Lower resonance until whistle stops

**If you want to use it:**
- Self-oscillation creates pure sine wave at cutoff frequency
- Use as additional oscillator (TB-303 acid bass technique)
- Modulate cutoff to create sine wave melodies
- Layer with main oscillators for sub-bass

**Musical applications:**
- **Low resonance:** Subtle tone shaping
- **Medium resonance:** TB-303 acid sounds, vocal character
- **High resonance:** Screaming leads, aggressive techno
- **Self-oscillation:** Sine sub-bass, whistle effects

**Filter slope interaction:**
- 12dB + resonance: Gentle peak, harder to self-oscillate
- 24dB + resonance: Dramatic peak, easy self-oscillation

---

## Quick Reference: Sound Shaping Troubleshooting

### "My filter sounds wrong in different octaves"
1. Enable keyboard tracking (start with 75%)
2. Test across full range
3. Adjust tracking amount for consistency

### "I don't know which filter slope"
1. Try 24dB first (most dramatic)
2. Too aggressive? Switch to 12dB
3. Techno = 24dB, Vintage = 12dB

### "LPG doesn't work right"
1. It's NOT filter + VCA (different design)
2. Brightness and amplitude linked (that's the point)
3. Use Strike for percussion, CV for sustained
4. Need independence? Use VCF+VCA instead

### "Sustain doesn't work"
1. HOLD notes 2-3 seconds minimum
2. Set long decay time first
3. Try 0%, 50%, 100% while holding
4. Sustain is a LEVEL not a TIME

### "Filter squeals/whistles"
1. Resonance causing self-oscillation
2. Reduce resonance below 85%
3. OR use it musically (sine oscillator)

---

## Key Takeaways

**Filter Tracking:**
- Oscillators auto-track, filters don't
- Enable 50-100% tracking for consistent brightness
- Test across full keyboard range

**Filter Slopes:**
- 12dB = vintage, open (2-pole)
- 24dB = modern, aggressive (4-pole)
- Different character, not better/worse
- Choose by genre and desired sound

**Low-Pass Gates:**
- Brightness + amplitude linked (not separate)
- Mimics acoustic instruments naturally
- Different tool than VCF+VCA
- Use for organic/acoustic character

**Sustain:**
- IS A LEVEL NOT A TIME!
- Only matters on held notes (>1 sec)
- 100% = organ, 50% = strings, 0% = percussion
- Test by holding notes 3+ seconds

**Resonance:**
- Emphasizes cutoff frequency
- High settings cause self-oscillation
- Self-oscillation creates sine wave
- Musical tool, not always problem

---

*This problem-solving guide addresses the most common sound shaping confusions. Understanding that sustain is a level (not time) and that LPGs work fundamentally differently from filters prevents countless hours of frustration.*

---

**Related Dictionary Terms:** Filter, VCF, Cutoff, Resonance, Tracking, ADSR, Sustain, LPG, Vactrol, Envelope, Slope, Pole, Self-Oscillation

**Related Problem-Solving Guides:**
- Guide #1: Signal and Control (CV routing, modulation behavior)
- Guide #2: Architecture (voice allocation, envelope per voice)
- Guide #4: Modulation (envelope depth, modulation routing)