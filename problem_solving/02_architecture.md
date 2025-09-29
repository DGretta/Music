# Problem-Solving Guide #2: Synthesis Architecture Confusions
*Understanding voice allocation, normalled connections, and why your polyphonic synth doesn't work the way you expect*

---

## How to Use This Guide

**Start with your symptom:**
- "My chords sound like an organ, not like a piano"
- "Notes cut off unexpectedly when I play"
- "I only get 2-3 chords from my 8-voice synth"
- "Do I need to patch this cable or not?"
- "Should I break these normalled connections?"

Find the relevant section below, understand why it's happening, and apply the solution.

---

## Paraphonic ≠ Polyphonic: "Why Do My Chords Sound Wrong?"

### The Confusion

You bought a synthesizer advertised as "polyphonic" or saw it has multiple voices, expecting piano-like chord playing where each note can have different brightness and decay characteristics. But when you play chords, all notes have the same brightness envelope and filter movement - they sound like an organ, not independent notes.

### Why This Happens

**Marketing vs technical reality** - The synthesizer world uses three distinct voice allocation systems, but marketing materials often blur the distinctions:

**MONOPHONIC:**
- Only one note plays at a time
- Single complete synthesis chain (oscillator → filter → VCA)
- New notes cut off previous notes completely
- Examples: Minimoog, TB-303, most bass synthesizers

**PARAPHONIC:**
- Multiple notes can sound simultaneously
- Multiple oscillators BUT shared filter and/or envelope generators
- All notes affected by same filter brightness and amplitude envelope
- Creates organ-like chords where all notes have identical timbre evolution
- Examples: Korg Poly-800, vintage string machines, some modern analog synths

**POLYPHONIC:**
- Multiple notes with completely independent synthesis chains
- Each note has its own oscillator, filter, envelope, and VCA
- True piano-like behavior where each note can have different brightness and decay
- Examples: Prophet-5, Jupiter-8, modern digital synthesizers

### Visual Understanding

```
MONOPHONIC:
Note 1: OSC → FILTER → VCA → OUT
(Note 2 cuts off Note 1)

PARAPHONIC:
Note 1: OSC ┐
Note 2: OSC ├→ SHARED FILTER → SHARED VCA → OUT  
Note 3: OSC ┘
(All notes share filter/envelope - same brightness)

POLYPHONIC:
Note 1: OSC → FILTER → VCA ┐
Note 2: OSC → FILTER → VCA ├→ OUT
Note 3: OSC → FILTER → VCA ┘
(Each note has independent filtering/envelopes)
```

### Common Scenarios

**Scenario 1: "4-voice polyphonic" that sounds like organ**
- **Problem:** Synthesizer marketed as "4-voice poly" but shares filter
- **Expectation:** Piano-like chords with independent note decay
- **Reality:** All four notes have same filter brightness and envelope
- **Technical truth:** It's paraphonic, not truly polyphonic
- **Why marketed as poly:** Can play 4 simultaneous notes (technically true but misleading)
- **Solution:** Accept organ-like character OR look for true polyphony specs

**Scenario 2: Vintage "poly" synth confusion**
- **Problem:** Korg Poly-800, Roland Juno-6 chord mode - called "poly" but shared filter
- **Historical context:** 1980s cost-saving - filters were expensive per-voice
- **Expectation:** Modern understanding of polyphony (independent per note)
- **Reality:** Multiple notes, shared processing = paraphonic architecture
- **Why common:** Many vintage "poly" synths are actually paraphonic
- **Understanding:** Vintage terminology differs from modern expectations

**Scenario 3: String machine "ensemble"**
- **Problem:** Vintage string machines can play chords but sound homogeneous
- **Design intent:** Emulate string sections where ensemble plays together
- **Expectation:** Independent string articulation
- **Reality:** Deliberately paraphonic for ensemble character
- **Musical use:** Perfect for sustained pads, not for percussive piano-like playing

### The Correct Approach

**Identifying architecture before purchase:**
1. **Read specifications carefully:**
   - "X-voice polyphony" - how many complete voices?
   - "Independent filters per voice" - truly polyphonic
   - "Shared filter" or "paraphonic" - organ-like behavior

2. **Test questions:**
   - Play chord and release keys one at a time
   - True polyphony: Each note can decay independently
   - Paraphonic: All notes affected by single envelope

3. **Marketing red flags:**
   - "Poly" without specifying independent filtering
   - Unusually cheap "polyphonic" analog synthesizers
   - Vintage synths described as "poly" (often paraphonic)

**Working with paraphonic architecture:**
```
Musical Applications That Work:
✓ Organ-style sustained chords
✓ String ensemble pads
✓ Brass section sounds
✓ Choir-like textures
✓ Any sound where notes share timbral characteristics

Musical Applications That Don't Work Well:
✗ Piano-like playing with independent note decay
✗ Percussive chord stabs with varying note lengths
✗ Complex arpeggiated patterns with sustain
✗ Polyphonic leads with different note articulations
```

**Making paraphonic work musically:**
- **Embrace the character:** Organ/ensemble sounds are what it does well
- **Voice leading:** Smooth voice leading sounds better than jumpy intervals
- **Sustained playing:** Hold notes rather than short staccato playing
- **Layer with true poly:** Use paraphonic for pads, polyphonic for leads

---

## Voice Stealing: "Why Do My Notes Cut Off?"

### The Confusion

You're playing your polyphonic synthesizer, holding some notes while playing others, and suddenly notes you're still holding disappear or cut off unexpectedly. You know you have 8 voices, but notes vanish when you're only playing 5-6 notes.

### Why This Happens

**Limited voices + voice allocation algorithms** - Synthesizers have finite voices (hardware limitation), and when you request more notes than available voices, the system must decide which notes to keep and which to "steal" (cut off).

**Technical reality:**
- **Voice count:** 4, 6, 8, 16 voices typical (each = complete synthesis chain)
- **Cost factor:** More voices = more circuitry = higher price
- **Allocation priority:** System uses algorithms to decide which notes to keep
- **Stealing moment:** When notes exceed voices, oldest or lowest-priority note stolen

### Voice Stealing Algorithms

Different synthesizers use different algorithms:

**Last Note Priority (most common):**
- Most recently played note gets voice
- Oldest notes stolen first
- **Musical effect:** Rapid playing causes held notes to cut off
- **Advantage:** Latest melodic lines always play

**Low Note Priority:**
- Lowest pitch always gets voice
- Higher notes stolen first
- **Musical effect:** Bass notes protected, upper melodies may cut
- **Advantage:** Bass foundation maintained

**Highest Note Priority:**
- Highest pitch protected
- Lower notes stolen first  
- **Musical effect:** Leads protected, bass/mid chords may cut
- **Advantage:** Melodic lines maintained

**Dynamic Allocation:**
- Complex algorithm considering velocity, duration, pitch
- **Modern approach:** More musical stealing decisions
- **Advantage:** Better approximates player intent

### Common Scenarios

**Scenario 1: Sustain pedal empties voice pool**
- **Problem:** Hold sustain pedal, play melody, notes cut off
- **Why:** Pedal holds all previously played notes, using voices
- **Math:** 8-voice synth + sustained chord (4 voices) = only 4 voices for melody
- **Reality:** Melody notes steal from sustained chord
- **Solution:** Release sustain periodically, use fewer sustained notes, OR consider voice architecture

**Scenario 2: Complex parts exceed voice count**
- **Problem:** Left hand chords + right hand melody + arpeggiator = note cutting
- **Voice math:**
  - Left hand: 3-4 notes
  - Right hand: 2-3 notes
  - Arpeggiator: Additional notes
  - **Total needed:** 8-12 voices simultaneously
- **8-voice synth reality:** Not enough voices, stealing occurs
- **Solution:** Simplify parts, layer multiple synths, or increase voice count

**Scenario 3: Legato playing causes unexpected cuts**
- **Problem:** Playing legato (overlapping notes slightly), notes cut off
- **Why:** Brief overlap uses two voices per transition
- **Example:** 
  - Play C (voice 1)
  - Overlap: Play D before releasing C (voice 1 + voice 2 = 2 voices)
  - Multiply by multiple fingers = voices exhausted
- **Solution:** Adjust playing style, increase voice count, or use mono mode

### The Correct Approach

**Understanding your voice count needs:**
```
Common Voice Requirements:
- Simple melodies: 2-4 voices (allow overlaps)
- Basic chords: 4-6 voices
- Chords + melody: 6-10 voices
- Complex arrangements: 12-16+ voices
- With sustain pedal: Double above estimates

Piano Comparison:
- Acoustic piano: Essentially infinite polyphony
- Electronic: Must manage finite voices
- **Expectation adjustment:** Play within voice count limits
```

**Strategies for limited voices:**
1. **Play within limits:**
   - 8-voice synth: Play 4-note chords maximum (leaves room for transitions)
   - Release notes cleanly rather than relying on overlaps
   - Use sustain pedal sparingly

2. **Voice allocation settings (if available):**
   - Some synths allow priority mode selection
   - Configure for your playing style (bass priority, lead priority, etc.)
   - Modern digital synths often have sophisticated options

3. **Musical arrangements:**
   - Score parts considering voice limitations
   - Layer multiple synthesizers for complex parts
   - Use voice-stealing musically (rhythmic effects)

4. **Purchase decisions:**
   - More voices = higher cost but more flexibility
   - Consider playing style when choosing voice count
   - 16+ voices provides comfortable polyphony for most uses

**Testing voice count and stealing:**
1. **Voice count test:**
   - Play notes one at a time, counting how many you can hold before stealing
   - Actual available voices = maximum simultaneous notes

2. **Stealing behavior test:**
   - Hold chord, play melody notes
   - Note which chord notes cut off (reveals priority algorithm)
   - Adjust playing to work with synth's behavior

---

## Unison Mode Voice Consumption: "I Only Get 2 Chords From My 8-Voice Synth"

### The Confusion

Your synthesizer has 8 voices and you enabled "unison" mode for fat, detuned sounds. But now when you play chords, you only get 2-3 notes of polyphony instead of 8. The math doesn't make sense - where did your voices go?

### Why This Happens

**Unison mode multiplies voice usage** - Unison mode makes single notes sound fuller by playing multiple voices simultaneously, slightly detuned. This dramatically reduces polyphony because each played note consumes multiple synthesis voices.

**Technical reality:**
- **Normal mode:** 1 note = 1 voice
- **Unison mode:** 1 note = multiple voices (2, 3, 4, or more)
- **Polyphony calculation:** Total voices ÷ unison voices per note = available polyphony
- **Example:** 8 voices with 4-voice unison = 8÷4 = 2 notes maximum

### Voice Consumption Math

```
8-VOICE SYNTHESIZER POLYPHONY:

Normal Mode:
1 voice per note × 8 voices = 8-note polyphony ✓

2-Voice Unison:
2 voices per note × 8 voices = 4-note polyphony
(Can play 4-note chords)

4-Voice Unison:
4 voices per note × 8 voices = 2-note polyphony  
(Only 2-note chords possible!)

8-Voice Unison:
8 voices per note × 8 voices = 1-note "polyphony"
(Monophonic despite being 8-voice synth!)
```

### Common Scenarios

**Scenario 1: Fat lead to chord confusion**
- **Problem:** Program thick unison lead, try to play chords, only 2 notes
- **Expectation:** Thick sound + 8-voice polyphony
- **Reality:** 4-voice unison × 2 notes = 8 voices exhausted
- **Trade-off:** Thickness per note vs number of notes
- **Solution:** Reduce unison voices for chords, or accept limited polyphony

**Scenario 2: Live performance patch switching**
- **Problem:** Lead patch with unison works great, switch to chord pad, only 2 notes play
- **Expectation:** All patches should have same polyphony
- **Reality:** Forgot to disable unison in pad patch
- **Common mistake:** Unison left enabled from previous sound
- **Solution:** Check unison setting when programming every patch

**Scenario 3: Layered sounds**
- **Problem:** Layer two patches for huge sound, polyphony tanks
- **Reality:** Each patch uses voices, layer multiplies consumption
- **Math example:**
  - Patch A: 2-voice unison
  - Patch B: 2-voice unison  
  - **Layered:** 4 voices per note
  - **8 voices total:** Only 2-note polyphony
- **Solution:** Disable unison on one layer, or reduce unison voices

### The Correct Approach

**Understanding unison trade-offs:**
```
UNISON BENEFITS:
✓ Thicker, fuller sound
✓ Natural detuning creates width
✓ More powerful single notes
✓ Analog-style character

UNISON COSTS:
✗ Dramatically reduced polyphony
✗ More voices = more CPU (digital synths)
✗ Limited to monophonic or simple chords
✗ Can make timing feel slightly loose
```

**Strategic unison usage:**
1. **Lead sounds:** High unison count acceptable (playing single notes)
2. **Bass sounds:** 2-voice unison sufficient, preserves some polyphony
3. **Chord pads:** Disable unison, use other thickness techniques
4. **Performance patches:** Document unison settings, know polyphony limitations

**Alternatives to unison for thickness:**
```
When you need polyphony + thickness:
- Chorus effect (no voice consumption)
- Detune oscillators within single voice
- Layer patches on separate MIDI channels (if multitimbral)
- Use multiple synthesizers
- Stereo width processing
- Slight delay + detuning
```

**Patch programming guidelines:**
1. **Document voice usage:**
   - Note unison setting in patch names
   - "SuperLead-4x Unison" = know it's monophonic
   - "Pad-NoUnison" = expect full polyphony

2. **Performance preparation:**
   - Check unison settings before live performance
   - Program alternate versions (unison on/off) for different needs
   - Test polyphony requirements in rehearsal

3. **Voice budget awareness:**
   - Calculate: (Total voices) ÷ (unison voices) = polyphony
   - Know your limits before performance
   - Adjust playing or patch to match needs

---

## Normalled Connections: "Do I Need to Patch This or Not?"

### The Confusion

You're looking at a semi-modular synthesizer or modular system with "normalled" connections. The manual says certain connections work without patch cables, but you're not sure when you need cables and when you don't. Breaking normalled connections sometimes helps, sometimes makes things worse.

### Why This Happens

**Automatic routing vs flexibility** - Semi-modular synthesizers and some modular systems use normalled connections to provide automatic signal routing without patch cables. This makes basic operation simple, but understanding when to break these connections is crucial for advanced patching.

**Technical reality:**
- **Normalled connection:** Internal signal routing that's active by default
- **Breaking normal:** Inserting patch cable overrides automatic routing
- **Design philosophy:** Works without cables (simple), accepts cables (flexible)
- **Switched jack:** Physical insertion breaks internal connection

### How Normalled Connections Work

```
BEFORE PATCHING:
VCO Output → [internally connected] → VCF Input
VCF Output → [internally connected] → VCA Input
WORKS WITHOUT CABLES - basic synthesis chain

AFTER PATCHING VCO:
VCO Output → [YOUR CABLE] → Other Module
VCF Input ← [no signal] ← broken normal
CABLE BREAKS NORMAL - must patch around it
```

### Common Scenarios

**Scenario 1: "I plugged in one cable and everything broke"**
- **Problem:** Patched VCO output to effect, lost all sound
- **Why:** Breaking VCO→VCF normal disconnected basic signal path
- **Expectation:** Adding cable adds routing, doesn't break existing routing
- **Reality:** Jack insertion physically breaks internal connection
- **Solution:** 
  - Use multiple/mixer to split VCO to both destinations
  - OR patch effect return back to VCF input
  - OR check if module has mult outputs preserving normals

**Scenario 2: "Do I need this cable or not?"**
- **Problem:** Manual shows normalled connections but unclear when they work
- **Decision tree:**
  - **Want default routing?** → Don't patch, use normals
  - **Want different routing?** → Patch cable breaks normal, creates new path
  - **Want both routes?** → Use mult to split signal
- **Testing:** Remove all cables, check if sound still works (= normals functioning)

**Scenario 3: Mother-32 / semi-modular confusion**
- **Problem:** Moog Mother-32 has extensive normals, unclear what does what
- **Normal routing:** VCO→VCF→VCA→OUTPUT (works without cables)
- **Breaking strategically:**
  - Patch VCO to external filter (breaks VCO→VCF normal)
  - Must then patch external filter to VCA input
  - Or accept VCA won't receive signal
- **Documentation:** Study normal chart in manual before patching

### The Correct Approach

**Understanding your semi-modular:**
1. **Read the manual's normal chart:**
   - Shows all internal connections
   - Indicates which jacks break which normals
   - Essential reference for complex patching

2. **Learn the default signal flow:**
   - Trace normalled path from oscillators to output
   - Understand control signal normals (envelopes, etc.)
   - Test basic operation without cables first

3. **When to use normals:**
   ```
   USE NORMALS (don't patch):
   ✓ Basic subtractive synthesis patches
   ✓ Learning the instrument
   ✓ Quick performance patches
   ✓ When default routing works
   
   BREAK NORMALS (use cables):
   ✓ Alternative signal flow needed
   ✓ Insert external processing
   ✓ Complex modulation routings
   ✓ Experimental/creative patches
   ```

**Strategic normal breaking:**
```
Semi-Modular Patching Strategy:

1. Start with normals (no cables)
   - Verify basic sound works
   - Adjust parameters to desired sound
   
2. Identify what to change
   - Need external filter? → Break VCO→VCF normal
   - Need different envelope? → Break ENV→VCA normal
   - Add modulation? → Usually doesn't break normals
   
3. Patch around broken normals
   - Every broken normal needs replacement routing
   - Use mults to send signals to multiple destinations
   - Document complex patches for recreation
```

**Visual thinking for normals:**
```
Think of normalled connections as:
"Default wiring that's invisible until you override it"

Mother-32 Example:
INVISIBLE WIRES (normals):
VCO → VCF → VCA → OUTPUT
ENV → VCF, VCA

ADDING CABLE TO VCO OUTPUT:
- VCO signal goes to your cable destination
- VCF no longer receives VCO (normal broken)
- Must manually patch signal to VCF if desired

MULTIPLE OUTPUTS (some modules):
- Some modules have mult outputs
- Taking signal from mult doesn't break normal
- Check manual for which outputs preserve normals
```

### Module-Specific Considerations

**Moog Mother-32:**
- Extensive normals create complete synthesizer without cables
- VCO→VCF→VCA→MIX→OUTPUT
- Most CV inputs also normalled to relevant sources
- Study manual chart - complex normal network

**Make Noise 0-Coast:**
- Unique normals reflecting non-standard architecture
- Different philosophy from East Coast normals
- Requires understanding of Buchla-inspired design

**Eurorack Modules:**
- Some have normals (internal connections)
- Most require explicit patching
- Check individual module documentation
- "Pre-patched" vs "fully modular"

**Testing Normals:**
1. **Remove all patch cables**
2. **Play the synthesizer:**
   - Sound works = normals provide basic routing
   - No sound = fully modular, requires patching
3. **Patch one connection at a time:**
   - Note what breaks when cable inserted
   - Understand jack switching behavior
4. **Refer to manual:**
   - Normal chart shows internal connections
   - Essential for complex routing

---

## Modular vs Semi-Modular Workflow

### The Confusion

You're coming from a semi-modular synthesizer (Mother-32, 0-Coast) to a fully modular Eurorack system, or vice versa. The workflow feels completely different and you're not sure when you need to patch what.

### Why This Happens

**Design philosophy differences** - Semi-modular includes automatic routing for basic operation, while fully modular requires explicit patching for everything. These approaches serve different needs and require different mental models.

**Comparison:**

**SEMI-MODULAR:**
- **Philosophy:** Complete instrument that also accepts patching
- **Normals:** Internal connections create default signal flow
- **Learning curve:** Gentle - works immediately, explore patching gradually
- **Workflow:** Start simple, add complexity with cables
- **Examples:** Moog Mother-32, Make Noise 0-Coast, Pittsburgh Modular synthesizers

**FULLY MODULAR:**
- **Philosophy:** Building blocks requiring explicit routing
- **No normals:** Everything must be patched
- **Learning curve:** Steep - must understand signal flow to make sound
- **Workflow:** Design signal flow, patch accordingly
- **Examples:** Most Eurorack modules (individual VCOs, VCFs, VCAs, etc.)

### Common Scenarios

**Scenario 1: "My Eurorack makes no sound"**
- **Problem:** Coming from semi-modular, expect sound without extensive patching
- **Reality:** Fully modular requires complete signal chain patching
- **Minimum patch:** VCO → VCF → VCA → OUT + Envelope → VCA
- **Forgotten elements:** 
  - VCA needs envelope or will remain silent
  - Clock/trigger source for envelope
  - Every connection must be explicit
- **Solution:** Learn standard signal flow, patch systematically

**Scenario 2: "This is way more patching than I expected"**
- **Problem:** Didn't realize how many connections basic synthesis requires
- **Reality check:**
  ```
  Basic Synthesizer Voice Requires:
  - VCO → VCF → VCA → OUT (audio path)
  - Clock/Sequencer → Envelope Gen (triggers)
  - Envelope → VCA (amplitude control)
  - Envelope → VCF (filter control)  
  - Keyboard/CV → VCO (pitch control)
  - Minimum: 6-8 patch cables for basic sound
  ```
- **Understanding:** This is the cost of ultimate flexibility
- **Solution:** Accept patching as part of creative process

**Scenario 3: "Semi-modular patching broke everything"**
- **Problem:** Over-patching semi-modular, breaking all normals accidentally
- **Loss of normals:** Automatic routing gone, must recreate manually
- **Confusion:** Wasn't trying to break basic functionality
- **Solution:**
  - Study normal chart before patching
  - Remove cables, verify basic function
  - Reintroduce cables understanding what each breaks

### The Correct Approach

**Choosing between semi-modular and modular:**
```
SEMI-MODULAR ADVANTAGES:
✓ Immediate playability (works without patching)
✓ Gentle learning curve
✓ Complete instrument out of box
✓ Less cable management
✓ Good for performances requiring quick setup

FULLY MODULAR ADVANTAGES:
✓ Ultimate flexibility (no predetermined routing)
✓ Build custom instruments
✓ Encourages deep understanding
✓ Highly personal sound design
✓ Expandable without redundancy

DISADVANTAGES:
Semi-modular:
✗ Can't completely redesign architecture
✗ Redundant if building large modular system

Fully modular:
✗ Requires extensive patching for basic sounds
✗ Steeper learning curve
✗ More time spent patching than playing
```

**Workflow strategies:**

**For semi-modular users:**
1. **Learn normals first:**
   - Master basic operation without cables
   - Understand what's automatically connected
   - Use normals as foundation for exploration

2. **Add patching gradually:**
   - Break one normal at a time
   - Understand consequence of each cable
   - Document interesting patches

3. **Integration with modular:**
   - Semi-modular can be "voice" in larger system
   - Use modular for additional modulation/processing
   - Best of both worlds approach

**For fully modular users:**
1. **Learn standard signal flows:**
   - Basic subtractive synthesis chain
   - Common modulation routings
   - Build muscle memory for essential patches

2. **Document patches:**
   - Photograph patch cables
   - Use notation systems
   - Essential for recreating sounds

3. **Consider semi-modular additions:**
   - Complete voices reduce patching
   - Hybrid approach (semi + modular) often practical
   - Balance immediate playability with flexibility

**Transition strategies:**
```
Semi-modular → Fully Modular:
- Start with one additional VCO or utility
- Keep semi-modular as stable voice
- Gradually increase modular portion
- Accept longer setup times

Fully Modular → Semi-modular:
- Embrace convenience of normals
- Don't feel constrained by defaults
- Use patch points for advanced techniques
- Appreciate reduced cable management
```

---

## Quick Reference: Architecture Troubleshooting

### "My chords sound like an organ"
1. **Check architecture:** Paraphonic vs polyphonic?
2. **Review specifications:** Independent filters per voice?
3. **Accept or replace:** Paraphonic can't do piano-like chords
4. **Musical adaptation:** Use for sustained pads, organ sounds

### "Notes cut off when I play"
1. **Count voices:** How many simultaneous notes before stealing?
2. **Check unison:** Is unison mode consuming multiple voices per note?
3. **Playing style:** Are overlapping notes using extra voices?
4. **Sustain pedal:** Holding too many sustained notes?

### "I lost all sound when I plugged in a cable"
1. **Broken normal:** Did cable break essential normalled connection?
2. **Check manual:** Which normals broke when jack inserted?
3. **Patch around:** Use mult or patch new signal path
4. **Test:** Remove cable, verify normals restored

### "Only 2 notes from my 8-voice synth"
1. **Check unison:** How many voices per note?
2. **Calculate:** Total voices ÷ unison voices = polyphony
3. **Disable or reduce:** Turn off unison for more polyphony
4. **Choose tradeoff:** Thickness vs number of notes

### "Modular makes no sound"
1. **Complete chain:** VCO → VCF → VCA → OUT all patched?
2. **VCA control:** Envelope or CV controlling VCA?
3. **Envelope trigger:** Clock/trigger source connected?
4. **Systematic check:** Trace signal path, verify each stage

---

## Key Takeaways

**Voice Architecture Matters:**
- Monophonic: One note maximum
- Paraphonic: Multiple notes, shared processing (organ-like)
- Polyphonic: Multiple notes, independent processing (piano-like)
- Read specifications carefully - marketing can be misleading

**Voice Allocation Reality:**
- Finite voices = trade-offs
- Unison multiplies voice consumption
- Voice stealing algorithms determine priority
- Plan patches considering voice count

**Normalled Connections:**
- Provide automatic routing (convenience)
- Break when cable inserted (flexibility)
- Study manual's normal chart (essential)
- Patch around broken normals (necessary)

**Design Philosophy:**
- Semi-modular: Playable + patchable
- Fully modular: Ultimate flexibility, requires patching
- Different workflows for different needs
- Hybrid approaches often practical

**When In Doubt:**
- Read the manual's architecture section
- Test with minimal patching first
- Add complexity gradually
- Document interesting patches

---

*This problem-solving guide addresses the fundamental architecture issues that confuse beginners and trip up experienced users transitioning between systems. Understanding these concepts prevents countless hours of frustration and enables effective use of different synthesis architectures.*

---

**Related Dictionary Terms:** Monophonic, Paraphonic, Polyphonic, Voice, Voice Stealing, Normalled Connections, Semi-modular, Modular, Unison, VCO, VCF, VCA

**Related Problem-Solving Guides:**
- Guide #1: Signal and Control Confusions (CV routing, voltage standards)
- Guide #3: Sound Shaping Confusions (filter behavior, envelope characteristics)
- Guide #4: Modulation Confusions (routing complexity in modular systems)