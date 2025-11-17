# GHOST Module Guide
**Endorphin.es × Andrew Huang | 16hp Multi-Dimensional Effects Processor | Firmware V3.0+**

![GHOST Module](https://github.com/DGretta/Music/raw/main/modular/images/endorphines/ghost/front_panel.jpg)  
*Multi-dimensional effects processor with three signal routing chains, micro-modulation matrix, and comprehensive dynamics control*  

**Key Specifications:**
- **Width:** 16HP
- **Depth:** 26mm
- **Power:** 135mA @ +12V / 35mA @ -12V / 0mA @ +5V
- **Architecture:** Three independent routing chains, micro-modulation matrix, sidechain dynamics control

---

## Quick Start: Make Your First Sound (5 Minutes)

You don't need to understand everything. You need to make sound.

**Patch It:**
```
Synth/VCO/Guitar → GHOST IN (audio)
GHOST OUT → Mixer or Audio Interface
```
That's it. Any audio source works. Press play. Make sure GHOST's output level goes to your mixer/interface. Listen.

**Try This:**
1. **Knob Exploration:** Set all the big front-panel knobs to 12 o'clock first (safe starting point)
2. **Turn DISTORTION knob:** Slowly turn it from 9 o'clock to 3 o'clock. You'll hear the character shift from clean to dark to aggressive. Notice when it sounds interesting to you.
3. **Turn FREQUENCY knob:** Sweep it from 9 o'clock (warm) to 3 o'clock (bright) while your source is playing. Hear how tonal character changes?
4. **Turn REVERB DRY/WET:** This adds space and echo. More CW = more space. Turn it up past 12 o'clock and listen to how atmospheric it becomes.
5. **Turn DELAY DRY/WET:** This adds repeating echoes. Notice how it's different from reverb? Reverb is diffuse; delay has defined repeats.

**What You Should Hear:**
- **At 12 o'clock on all controls:** Clean-ish sound with minimal processing. Maybe a tiny bit of natural reverb/delay.
- **Distortion CW:** Sound gets darker, heavier, more saturated. Too much = harsh/noisy (that's okay, you're learning).
- **Frequency sweep:** Warm sounds (CCW) vs. bright sounds (CW). This is filtering. Everything in between.
- **Reverb up:** Sound gets spacious, evolving, "washy" if you crank it. This is spatial processing.
- **Delay up:** Sound gets rhythmic echoes layered under the original. Different character than reverb.

**If It Sounds Weird:**
- **Everything is distorted/noisy:** DISTORTION knob is too high. Turn it back to 12 o'clock.
- **Sound is completely gone:** Global DRY/WET might be at CCW (dry only). Turn it CW toward 12 o'clock.
- **Way too quiet:** VOLUME/drive is too low. Turn it CW past 12 o'clock.
- **Clipping/digital artifacts:** Your input level is too hot. Lower your source volume before GHOST.

**The Goal:** Spend 5 minutes. Touch knobs. Hear what they do. Don't overthink it. You're learning by listening, not reading.

**Next:** Read Essential Parameters below to understand what you just heard. Then try one of the Starter Patches.

---

## Essential Parameters: Where to Start

GHOST has 50+ accessible controls. Mastering all of them takes time. But you only need to understand a few things first:

### **The Core Three: Routing + Distortion + Filter**

These three controls shape 80% of GHOST's character:

**ROUTING Button (LED indicator):**
- This single button chooses between three signal flow orders
- LED off = FX → DIST → VCF (spatial effects first, creates atmospheric textures)
- LED semi-lit = DIST → VCF → FX (distortion first, cleaner aggression)
- LED fully lit = VCF → FX → DIST (filter first, most filtered character)
- **Why it matters:** Every other control works differently depending on this choice. Start here. Learn how changing this button on an already-patched setup completely transforms the sound.
- **Beginner approach:** Leave it in FX → DIST → VCF (LED off) for your first explorations. This routing is most forgiving and teaches spatial thinking.

**DISTORTION Knob:**
- CCW = clean signal, no distortion
- 12 o'clock = moderate saturation, musical coloring
- CW = heavy saturation, aggressive character
- **Why it matters:** This controls how "dark" or "heavy" your sound becomes. The sweet spot is usually 12 o'clock to 2 o'clock. Resist cranking it full CW at first.
- **Beginner approach:** Start at 12 o'clock, leave it there while you explore other parameters.

**FREQUENCY Knob (Bipolar Filter):**
- CCW (9 o'clock area) = removes high frequencies (warm, dark)
- 12 o'clock = no filtering (neutral, flat)
- CW (3 o'clock area) = removes low frequencies (thin, bright)
- **Why it matters:** This is your tonal shaper. Want something darker? Turn CCW. Want something brighter? Turn CW. More dramatic than you expect at first.
- **Beginner approach:** Start at 12 o'clock (center, no filtering). Sweep it slowly CCW and CW to hear the range. This teaches you what "filtering" means.

### **The Blend Controls: What Gets Processed**

**Global DRY/WET (ROUTING + VOLUME/drive button):**
- This controls how much of your processed signal you send out vs. the clean original
- CCW = mostly unprocessed (what you put in comes out)
- 12 o'clock = 50/50 blend of clean and processed
- CW = mostly processed (you hear all the effects)
- **Why it matters:** If everything sounds too extreme, lower this. If GHOST sounds "invisible," raise it.
- **Beginner approach:** Keep this at 12 o'clock (50%) while learning. This gives you a reference point—you can hear both the original and what GHOST is doing.

### **The Input/Output Levels: Preventing Clipping**

**PRE-VCA (Input level to GHOST):**
- Default is full open (+5V)
- If your input is too loud and GHOST is clipping (distorting strangely), you can control input level here
- **Beginner approach:** Leave this alone unless you need to tame a very hot input signal.

**VOLUME/drive (Output level + saturation):**
- 12-1 o'clock = clean volume control
- After 1 o'clock = drive saturation begins (adds distortion to final output)
- **Why it matters:** If GHOST is too quiet, turn this up. If you want more attitude, turn past 1 o'clock for drive saturation.
- **Beginner approach:** Start at 12 o'clock, raise to taste for output level.

### **The Hidden Controls You'll Discover Later**

Hold down the ROUTING button and you access doubled parameters:
- **TONE** (ROUTING + knobs) - Shapes character of delay and distortion
- **PRE-DELAY** (ROUTING + TAIL) - Separates original sound from reverb
- **DEPTH/AMOUNT** controls - Lets you control effect intensity independently

**Beginner approach:** Don't touch these yet. Master the basic knobs first. These unlock once you're comfortable with the fundamentals.

---

## The Routing Principle: Why Order Matters

**Here's a fundamental principle of signal processing that many people learn too late:**

The order in which you process audio changes *everything.* Not just slightly. Fundamentally. Completely different character, different possibilities, different uses.

When distortion comes first, it affects everything downstream. The filter processes already-distorted audio. Reverb processes distorted audio. The entire character is heavy, aggressive, full of harmonics.

When distortion comes last, it's different. The filter and reverb shape the clean or lightly-processed signal, then distortion colors the result. Different character entirely.

When the filter comes first, it removes or shapes frequencies before anything else touches the signal. Completely different approach.

**GHOST makes this explicit by giving you three button presses to explore all three major routing orders.** You don't repatch. You don't reprogram. You press a button and experience how the same controls, same module, same patch produce fundamentally different results.

This is how you learn signal flow thinking—not from theory, but from hearing the difference immediately.

### The Three Routing Orders

**FX → DIST → VCF** (button LED off) - Reverb/delay processes signal, then distortion colors it heavily, then filter shapes the distorted result. Creates rumble, ghost-like textures, atmospheric heaviness.

**DIST → VCF → FX** (button semi-lit) - Distortion comes first, filter shapes it, then reverb/delay processes the result. Cleaner approach because reverb works on less aggressive material. Good for using filter to create articulate tones that then get spaciousness.

**VCF → FX → DIST** (button fully lit) - Filter shapes the clean signal first, then reverb/delay, then distortion colors everything. Heavy tones but with more filtered character driving the distortion.

All three share the same controls. But the order changes what those controls accomplish. This is interconnection in action—nothing exists in isolation. Everything relates to what comes before and after.

---

## Why This Excels

### Design Philosophy: Routing Freedom as Creative Method

Most effects processors follow a fixed signal path. You know what comes next. The audio flows through distortion, then filter, then delay—or some other predetermined order. This predictability is comfortable. It's also limiting.

**The GHOST exists because Endorphin.es and Andrew Huang asked a different question: What if the order itself became an instrument?**

The fundamental insight is that **routing order isn't just technical—it's creative.** When distortion comes before filtering, you get one set of tonal possibilities. When the filter comes before distortion, everything changes. When reverb processes the distorted signal versus the clean signal, you get fundamentally different character. Not variations on a theme—different *themes entirely.*

This isn't new thinking in modular synthesis. But GHOST makes it intuitive and explorable. Three button presses. Three different signal processing philosophies available instantly, without repatching. That simplicity enables experimentation that would otherwise require hardware rewiring or complex software menu diving.

### Andrew Huang's Perspective: Creative Constraints and Exploration

Andrew Huang's approach to music production centers on one principle: **constraints force creativity.** He doesn't just ask "what can I make?" He asks "what can I make *within these specific limitations?*"

That philosophy runs through GHOST's design:

**1. Limited but powerful signal flow:** Instead of infinite routing complexity, you get three carefully chosen routing orders. Fewer options means each option is more explorable. You learn the character of each routing deeply rather than overwhelmed by infinite possibilities.

**2. Micro-modulations creating emergent behavior:** The control matrix doesn't just let you adjust parameters independently. The way controls affect each other—the internal modulation interactions—creates "infinite, alive and unexpected interactions" (per the manual). **You can't predict exactly what will happen.** That unpredictability is the point. It forces creative listening and experimentation.

**3. Creative effect processing becomes synthesis:** The manual notes GHOST can function as a complete Karplus-Strong synthesizer voice using the delay at audio rates. An effects processor that can *generate* sound is no longer just an effects processor. It's a sound design instrument. Constraints (no oscillators, no envelopes—just effects) force you to think differently about sound generation.

**This is the Andrew Huang principle applied to hardware:** Give people powerful tools with intelligent limitations, and they create things they wouldn't have attempted with infinite options.

### The Magic: Ephemeral Timbres and Interconnection

The manual uses a specific word repeatedly: **ephemeral.** Fleeting. Transient. Sounds that exist briefly then transform. That's intentional language choice.

Here's why that matters for interconnection thinking:

When you patch something into GHOST, it doesn't become fixed. The routing flexibility means the same input can be processed completely differently depending on which chain you've selected. The same patch, different character. The same modulation source affects different aspects of the processing depending on routing.

**This teaches a fundamental principle about modular systems: nothing is inherently an "effects processor" or "modulation source" or "sound generator."** Everything is relational. The same module serves different purposes depending on context. GHOST makes this explicit by making routing choices immediate and obvious.

But here's what makes this philosophically powerful: Most people think of modules as having fixed roles. Distortion distorts. Reverb reverbs. Sequencers sequence. In reality, that role only exists in *context*—how things connect. GHOST reveals that truth. By showing three different routing orders for the same controls, it demonstrates that the character of any module depends entirely on what comes before and after it. This isn't a GHOST quirk. It's a principle of *all* modular synthesis. GHOST just makes it visible.

The micro-modulation matrix compounds this insight. Controls don't exist in isolation. Changing RESONANCE also affects SAMPLE RATE (through the hidden lo-fi controls). Changing REVERB DRY/WET adds shimmer. The system *interconnects.* You can't think of any parameter as independent. This is synthesis, not just effects processing—complex systems generating emergent behavior from interconnected parts.

That's why GHOST sounds different from every other effects processor. Not because it uses better algorithms (though it does). But because **the architecture teaches interconnection thinking directly through use.** When you hear how routing order changes everything, when you experience parameters affecting each other, when you patch external modulation and watch the character shift—you're learning a principle that applies everywhere. The module becomes a lesson in how everything connects, and that lesson fundamentally changes how you think about synthesis.

### How It Fits: The Modular Ecosystem Role

GHOST doesn't fit the traditional "effects processor" slot in a modular system. It's too flexible, too sound-generative, too interconnected.

Instead, think of it as a **sound-design playground at the end of your signal chain.**

You patch in audio from anywhere—a drum machine, a synthesizer, a voice, a field recording. GHOST processes it through your chosen routing chain. But it also becomes a texture generator, a rhythmic processor (when synced to clock), a spatial processor (through the mid/side widener), a voice processor (as shown in the Half-Life patch example).

The key insight: **GHOST works because it's not trying to be one thing.** It's a framework for creative sound processing. The framework is flexible enough that you define what it is through how you use it. Your patches define its role. The routing flexibility enables that redefinition to happen instantly.

In a modular system already full of specialized modules, GHOST's strength is that it *adapts.* It becomes what your patch asks it to become. That's why it justifies 16hp—not because it does one thing exceptionally, but because it does *many* things exceptionally, and the same physical module becomes different based on context.

---

## Patch Examples: Progressive Learning

All patches use practical, accessible control setups that teach how GHOST's routing order affects character.

### **Patch 0: The Foundation - Simple Audio Processing (Basic)**

Start here if you want to understand the basics without external modulation or triggers.

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─SEQUENCER───────────┐
│    GATE OUT    🟡──────────────────┐
└─────────────────────┘                     │
                                     │
┌─VCO/SYNTH─────────┐      │
│   PITCH CV IN   🔵─────────────────────│──→ GATE
│   AUDIO OUT    🔴────────┬─────────────────────│
└───────────────────┐    │
                            │
                        ┌──▼──┐
                        │  GHOST  │
                        │  FX→DIST→VCF│
                        │         │
                        └──┬──┘
                            │
                        ┌─▼─┐
                        │ MIXER  │ or AUDIO OUT
                        └────┘
```

**Routing:** FX → DIST → VCF (LED off)

**Controls - Everything at 12 o'clock First:**
- **Delay TIME:** 12 o'clock
- **Delay REPEATS:** 12 o'clock
- **Delay DRY/WET:** 12 o'clock
- **Reverb TAIL:** 12 o'clock
- **Reverb DRY/WET:** 12 o'clock
- **Distortion:** 12 o'clock
- **Filter FREQUENCY:** 12 o'clock (neutral, no filtering)
- **Filter RESONANCE:** 12 o'clock
- **Compressor:** 12 o'clock
- **Global DRY/WET:** 12 o'clock
- **VOLUME/drive:** 12 o'clock

This is your "baseline" setup. Everything is at neutral. Now explore one knob at a time:

1. **Explore DISTORTION:** Turn it slowly CW to 2 o'clock, then back to 12 o'clock. Hear how it darkens? That's distortion coloring your sequenced melody.
2. **Explore FREQUENCY:** Turn it CCW to 10 o'clock (warm), then to 3 o'clock CW (bright). Your notes sound darker or brighter based on filter position.
3. **Explore Delay/Reverb:** Add delay DRY/WET slowly CW to 1 o'clock. Now your notes have rhythmic echoes. Add reverb DRY/WET to 1 o'clock. Now notes have space.

**Result:**
You've learned the core of GHOST: Sequenced pitch variation → audio input → effects processing → output. You can hear exactly what each control does because nothing else is changing.

**What You're Learning:**
- **Signal flow understanding:** Audio goes through GHOST in one direction. Controls shape how that happens.
- **Parameter sensitivity:** How much change is 1 knob position? (Very little for some, dramatic for others)
- **The relationship between parameters:** Distortion sounds different depending on delay/reverb upstream. Filter sounds different when distortion is different. Nothing exists in isolation.

**Alternative Options:**
- **Budget Approach:** SP-404 with internal sequencer and effects (teaches similar parameter interaction but fixed routing)
- **Different Character:** Elektron Analog Rytm internal synth + effects (digital effects algorithms instead of analog)
- **Premium Option:** Moog Moogerfooger pedals + guitar (analog effects chain but without the integrated routing flexibility)

**Performance:**
Change one parameter at a time while your sequence plays:
- Turn Distortion knob slowly, notice when aggressive character comes in
- Sweep Filter slowly up and down, creating tonal movement
- Adjust Reverb/Delay DRY/WET to add/remove spatial processing
- Adjust Global DRY/WET to hear how much processing you're actually hearing

The beauty of this patch is simplicity. One control change teaches you exactly what that control does.

---

### **Patch 0.5: Intermediate Patch - External Modulation from Performance Controllers**

Move from front-panel-only exploration to using external CV sources. This teaches how external modulation changes GHOST's character without repatching audio.

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─SEQUENCER/SYNTH─────┐
│    Output   ○────┬──────┐
└──────────────────┘    │  │
                        │  └─→ GHOST IN 🔴
┌─DivKid Ochd─────────┐ │
│  CV OUT A   ○───────┼─┼──→ PRE-VCA CV 🔵
│  CV OUT B   ○───────┼─┼──→ CUTOFF CV 🔵  (alternately)
└──────────────────────┘ │
┌─Erica Synths Joystick2 ┐│
│  X OUT     ○───────┬───┼──→ (PRE-VCA or CUTOFF)
│  Y OUT     ○───────┼───┘
└────────────────────┘
┌─Woggle (optional)──────┐
│  OUT        ○───────────→ (Any remaining CV input)
└────────────────────────┘

                    ┌────────────────┐
                    │     GHOST      │
                    │  FX→DIST→VCF   │
                    │   (LED off)    │
                    └────┬───────────┘
                         │
                    ┌────▼─────┐
                    │  MIXER   │ or AUDIO OUT
                    │  CH 1    │
                    └──────────┘
```

**Routing:** FX → DIST → VCF (LED off)

**Controls - Start at 12 o'clock, then modulate:**
- **Delay TIME:** 12 o'clock (neutral)
- **Delay REPEATS:** 12 o'clock
- **Delay DRY/WET:** 12 o'clock
- **Reverb TAIL:** 12 o'clock
- **Reverb DRY/WET:** 12 o'clock
- **Distortion:** 12-1 o'clock (slightly colored, not aggressive)
- **Filter FREQUENCY:** 12 o'clock (neutral)
- **Filter RESONANCE:** 12 o'clock
- **Compressor:** 12 o'clock
- **Global DRY/WET:** 12 o'clock
- **VOLUME/drive:** 12 o'clock

**Modulation - The Learning:**

This is where external modulation teaches interconnection:

**Ochd → PRE-VCA CV (Input Level Modulation):**
- Patch Ochd CV OUT A to GHOST PRE-VCA CV
- Ochd is a complex sequencer: it generates polyrhythmic CV, random walks, algorithmic sequences
- What you hear: Your audio input's level into GHOST breathes and evolves, creating dynamic intensity changes
- Why it matters: PRE-VCA modulation affects how much signal enters the entire chain. Low PRE-VCA = subtle processing; high PRE-VCA = intense processing. By tying this to Ochd's algorithmic output, your processing intensity becomes *musical*—it evolves on a longer timescale than you'd manually turn the knob
- Listen for: Moments when processing intensity swells (more signal entering distortion) vs. moments when it recedes (signal becomes subtle)

**Joystick2 → CUTOFF CV (Performance Control):**
- Patch Joystick2 X OUT to GHOST CUTOFF CV
- Move the joystick left/right (X axis) while audio plays
- What you hear: Filter frequency sweeps from warm (CCW) through neutral (center) to bright (CW) as you move the stick
- Why it matters: This is *real-time* control. Unlike Ochd's algorithmic evolution, Joystick2 gives you immediate expression. You can sweep the filter in time with the music, carving character moment by moment
- Listen for: How moving the stick changes tone in real time, and how that feels compared to manual knob turning (it's smoother, more expressive)

**Joystick2 Y-axis (Optional Secondary Control):**
- Y OUT can modulate something else: PRE-VCA CV, DISTORTION via external VCA, or Reverb DRY/WET if you have CV control
- Move joystick up/down (Y axis) to modulate whichever parameter you chose
- What you hear: Two-dimensional control—X axis changes tone, Y axis changes processing intensity (or whatever you patched)
- Why it matters: XY controllers teach you to think of parameters as independent. You can modulate two aspects of the processing simultaneously, creating more complex, expressive character
- Listen for: How moving the joystick creates 2D timbral space, not just 1D line

**Woggle (Optional, if you have one):**
- Woggle is a minimal performance interface: pressure and touch control
- Patch to whichever CV input feels most expressive to you (maybe filter resonance if you have CV control of resonance, or compressor amount)
- What you hear: Dynamic swells as you hold/release the Woggle
- Why it matters: Different controller types teach different performance modes. Ochd teaches algorithmic evolution, Joystick2 teaches deliberate real-time control, Woggle teaches expressive gesture
- Listen for: How different controller types feel different, even controlling similar parameters

**Result:**
Audio that transforms through multiple layers of modulation:
1. **Ochd**: Sets a longer-term evolution arc (processing intensity slowly changes)
2. **Joystick2 X**: Your real-time expression (tone carving)
3. **Joystick2 Y**: Additional real-time dimension (intensity or whatever else)
4. **Woggle**: Gestural expression (if included)

Same GHOST settings as Patch 0, but now it feels alive and responsive.

**What You're Learning:**
- **Modulation source types:** Algorithmic (Ochd) + deliberate (Joystick) + gestural (Woggle) teach different creative approaches
- **Parameter independence:** Each CV input modulates something different, revealing how GHOST has multiple dimensions of control
- **Interconnection through control signals:** You're not just processing audio anymore. You're using CV to shape how GHOST processes audio. This is modular thinking: audio flows one direction, control signals shape it from outside
- **Performance vs. automation:** Manual knob turns (Patch 0) feel different from performance control (this patch). Feeling that difference teaches why modulation matters

**Alternative Setup (Simplified):**
If you don't have all these modules, start with just one:
- **Just Ochd:** Tie Ochd CV to PRE-VCA. Watch how algorithmic evolution changes processing intensity
- **Just Joystick2:** Tie X to CUTOFF, Y to whatever else. This teaches 2D real-time control
- **Any sequencer + LFO:** Sequencer to PRE-VCA (rhythmic), LFO to CUTOFF (organic evolution). Most modular systems have these

**Performance:**
Unlike Patch 0 (static exploration) and Patch 1 (hands-off evolution), this patch requires active control:
- Let Ochd run, shaping processing intensity
- Use Joystick2 X to sweep tones during musically interesting moments
- Use Joystick2 Y for additional expression
- Record what happens—you're performing with GHOST

The difference between passive and active modulation becomes obvious. Patch 1 is meditative (watch the system evolve). This patch is expressive (you shape it as it evolves).

---

### **Patch 1: Ghost Drone - Evolving Ambient Texture (Advanced)**

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─OSCILLATOR/SYNTH─┐
│    Output   ○────┼────┬──┐
└───────────────────┘    │  │
                         │  └─→ GHOST IN 🔴
┌─LFO─────────────────┐  │
│    OUTPUT   ○───────┼──┼──→ PRE-VCA CV 🔵
└─────────────────────┘  │
                         │
                    ┌────▼────────┐
                    │    GHOST    │
                    │             │
                    │  FX→DIST→VCF│
                    │             │
                    └────┬────────┘
                         │
                    ┌────▼─────┐
                    │    AMP    │ or MIXER INPUT
                    │  (0dB+)   │
                    └──────────┘
```

**Routing:** FX → DIST → VCF (LED off)

**Controls - Focus on Creating Space:**
- **Delay TIME:** 12 o'clock (medium repeats for shimmer, not rhythmic)
- **Delay REPEATS:** CW to 2 o'clock (generous feedback for layering)
- **Delay DRY/WET:** CW 1-2 o'clock (mostly wet, but preserve some definition)
- **Reverb TAIL:** CW 1-2 o'clock (long decay, creates space)
- **Reverb PRE-DELAY:** CW 11 o'clock (separates original from verb)
- **Reverb DRY/WET:** CW 2-3 o'clock (heavy reverb character)
- **Distortion:** 12-1 o'clock (moderate saturation, not aggressive)
- **Filter FREQUENCY:** Sweep slowly with LFO (see Modulation)
- **Filter RESONANCE:** 1 o'clock (adds definition without harshness)
- **Compressor:** 12 o'clock (gentle compression to glue texture)
- **Global DRY/WET:** CW 1 o'clock (mostly processed, slight dry reference)

**Modulation - The Movement:**
- **PRE-VCA CV:** Patch LFO slowly (very slow rate, creates breathing effect)
- **CUTOFF CV:** Patch LFO with different rate than PRE-VCA (creates polyrhythmic modulation)
- Result: Texture evolves unpredictably as PRE-VCA modulates input level while CUTOFF modulates filter frequency

**Result:** 
Evolving, atmospheric texture that changes constantly even without user input. The combination of delay/reverb character, subtle distortion coloring, and moving filter creates the "ghost" effect - ephemeral sounds that transform over time. Perfect for pads, ambient backgrounds, meditation/healing music, or textural foundations under other instruments.

**What You're Learning:**
- **Spatial layering through signal flow order:** When spatial effects come first, they establish atmosphere that distortion then colors rather than replaces
- **Modulation independence creates organic variation:** Two LFOs at different rates on PRE-VCA and CUTOFF create polyrhythmic movement, demonstrating how independent modulation sources create emergent behavior
- **Reverb character defines everything downstream:** In FX → DIST routing, reverb tail length and pre-delay are foundational choices that determine whether distortion sounds atmospheric or harsh

**Alternative Options:**
- **Budget Approach:** Mutable Instruments Clouds (granular reverb, discontinued but available used) provides different but complementary spatial texture through granulation instead of traditional delay/reverb
- **Different Character:** Moog Mother-32 internal delay + reverb (fixed routing, but teaches how delay before reverb creates similar spacing without the signal flow flexibility)
- **Premium Option:** Eventide Space (advanced algorithms with more morphing capabilities) provides more modulation possibilities though GHOST's routing flexibility teaches the principle more clearly

**Performance:**
Record a 30-60 second loop and let it evolve. Occasionally adjust:
- LFO rates (change PRE-VCA or CUTOFF CV modulation speed)
- Filter FREQUENCY manually while LFO is modulating CUTOFF (adds performance expression)
- PRE-VCA CV depth (adjusts how much LFO breathing happens)

The beauty is that even without changes, the modulation creates continuous evolution. Performance becomes subtle intervention in an already-evolving process.

---

### **Patch 2: Rhythmic Texture - Drums Processing with Sidechain Reaction (Advanced)**

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─DRUM MACHINE/DRUMS─┐
│      Out      ○────┼────┬──┐
└────────────────────┘    │  │
                          │  └─→ GHOST IN 🔴
┌─CLOCK/SEQUENCER─────┐  │
│      OUT      ○──────┼──┼──→ SIDECHAIN TRIG IN 🟡
└─────────────────────┘  │
                         │
                    ┌────▼────────┐
                    │    GHOST    │
                    │             │
                    │  FX→DIST→VCF│
                    │             │
                    └────┬────────┘
                         │
                    ┌────▼─────┐
                    │  MIXER   │ (blend with dry drums)
                    │ CH 1-2   │
                    └──────────┘
```

**Routing:** FX → DIST → VCF (LED off)

**Controls - Focus on Aggression + Punch:**
- **Delay TIME:** 8 o'clock (short repeats for rhythmic texture, not echoes)
- **Delay REPEATS:** 1-2 o'clock (moderate feedback for rhythmic density)
- **Delay TONE:** CW 1 o'clock (bright repeats maintain punch)
- **Delay DRY/WET:** 12 o'clock (balanced mix of dry and repeated signal)
- **Reverb TAIL:** 10 o'clock (short decay, doesn't muddy timing)
- **Reverb PRE-DELAY:** 10 o'clock (minimal pre-delay, keeps reverb tight with drums)
- **Reverb DRY/WET:** 1 o'clock (adds spaciousness without washing out rhythm)
- **Distortion:** 2-3 o'clock (aggressive saturation adds attitude)
- **Gain (ROUTING + TONE/GAIN):** CW 1-2 o'clock (boosts signal into distortion)
- **Filter FREQUENCY:** 10 o'clock area (remove extreme highs, maintain mid punch)
- **Filter RESONANCE:** 12 o'clock (no resonance, just shaping)
- **Compressor:** CW 2-3 o'clock (heavy compression snaps the texture)
- **Sidechain DEPTH:** CW 2 o'clock (~70%, noticeable but not total silence)
- **Sidechain TRIG IN:** Patched to clock/kick trigger (effect ducks with every beat)
- **Global DRY/WET:** 1-2 o'clock (mostly effect, slight dry reference)

**Modulation - The Reaction:**
- **SIDECHAIN TRIG IN:** Patch kick drum or clock output (effect ducks on beat)
- **SIDECHAIN knob:** Adjust release time (how quickly effect returns)
- As set above: Effect ducks with kick hits, surfaces again before next kick

**Result:**
Drums become layered texture - the effect sits back dynamically when kicks hit, then comes forward in the space between beats. This creates incredible glue while keeping drums punchy. The distortion adds attitude to drums, the compression makes everything snap together. Perfect for trap, drill, industrial, or experimental hip-hop where drums need aggression while effects provide space.

**What You're Learning:**
- **Sidechain ducking as a mixing tool:** Using external triggers to modulate effect level teaches how audio and control signals interact in complex ways. This principle appears everywhere in professional mixing (sidechaining kicks to bass, compressors to reverb, etc.)
- **Aggression through signal order:** Distortion coming after delay/reverb creates coloring rather than harshness because it's processing already-textured material. This teaches how FX chain order completely changes character
- **Rhythm through processing timing:** Sidechain release time controls swing and groove independent of the source drums. Demonstrates how analog timing and control interact to create musicality

**Alternative Options:**
- **Budget Approach:** Separate delay module + reverb module + distortion pedal (teaches routing principles through manual patching, but loses integrated character)
- **Different Character:** Elektron Analog Rytm effects (digital delay/reverb with sidechain, different algorithms but similar creative goal)
- **Premium Option:** Universal Audio Luna suite with virtual GHOST (provides same routing philosophy with unlimited processing)

**Performance:**
This patch teaches you to mix with effects dynamically:
- Adjust Distortion knob in real-time (adds/removes attitude during performance)
- Adjust Sidechain DEPTH in real-time (tighter or looser effect ducking)
- Adjust Filter FREQUENCY to carve different character (from tight mids to open highs)
- Watch how Sidechain creates groove - the timing becomes part of the drum sound, not separate from it

Try adjusting these while drums play. Notice how small movements completely change the character. That's what makes this patch powerful - the sidechain makes the effect respond to the music rather than just sit statically on top of it.

---

## Deep-Dive: FX → DIST → VCF (Routing 1)

**This routing chain excels for:**
- Rumble and ghost sounds (per manual)
- Taking any input and creating atmospheric, heavily-textured processing
- Situations where you want reverb character to be part of the distortion character
- Creating evolving, layered textures that transform over time
- Working with percussion and drums (the sidechain ducking affects heavy textures beautifully)

**Signal flow:** Audio → Delay → Reverb → Distortion → Filter → Compressor/Sidechain → Output

What makes this chain powerful:

### **Stage 1: Spatial Effects (Delay + Reverb)**

Your signal enters here—the delay and reverb are the *first* processors. This means they establish the spatial character of your sound before anything else touches it.

**DELAY SECTION:**
- **TIME/DIV knob:** Sets delay time from short audio-rate repeats (CCW) to longer echoes (CW). In this routing, delay becomes part of what gets distorted—short delays create rhythmic texture that distortion will color heavily.
- **REPEATS/Feedback:** Controls how many times the signal repeats. More feedback = thicker texture entering distortion = heavier final character.
- **DRY/WET:** How much delayed signal vs. clean signal. Full CW (all wet) means distortion processes only the repeated signal, creating distinctly different character than mixing clean and delayed.
- **TONE (ROUTING + REPEATS):** Adjusts brightness of the delayed repeats before they enter distortion. Dull delays create heavy distortion; bright delays create sharper distortion.
- **WHY first in this chain:** You're establishing rhythmic/spatial foundation. Distortion will then transform that foundation into something more aggressive.

**REVERB SECTION:**
- **DRY/WET:** Like delay, but for reverb. Full wet means reverb character completely drives what enters distortion.
- **TAIL:** Decay time of reverb. Longer tail = more diffuse, less focused energy entering distortion.
- **PRE-DELAY (ROUTING + TAIL):** Adds delay before reverb tank. Separates the initial sound from the reverb buildup. Useful for maintaining definition when reverb will become part of distortion character.
- **WHY here:** Reverb establishes spatial width and diffusion. When distortion processes this diffuse signal, it creates ephemeral, evolving textures.

**The interconnection insight:** By placing spatial effects first, you're choosing to have distortion process already-spaced, already-evolved material. Your distortion isn't stark or aggressive—it's saturating something that's already complex. This creates the "ghost sounds" the manual describes.

### **Stage 2: Distortion (The Character Shaper)**

After delay and reverb have established texture and space, distortion colors the entire result.

**DISTORTION knob:**
- **Full CCW:** No distortion, clean signal passes through
- **12 o'clock:** Moderate saturation, musical coloring without harshness
- **Full CW:** Heavy distortion, aggressive saturation
- **The key:** Because delay/reverb are upstream, distortion doesn't create *stark* harshness. It's coloring something already complex. Even at full CW, it maintains texture rather than becoming noise.

**GAIN (ROUTING + TONE/GAIN):**
- **Full CCW:** Signal at original level
- **CW:** Boosts signal before distortion, creating more aggressive saturation at any distortion knob setting
- **WHY separate from DISTORTION knob:** Lets you set distortion character independently from input level. You can have heavy distortion with gentle gain, or light distortion with heavy gain.

**BITRATE REDUCER (ROUTING + DISTORTION knob, FW V3.0):**
- **Full CCW:** 24-bit clean
- **CW:** Reduces bit depth, creating lo-fi character in addition to distortion
- **WHY this routing:** Lo-fi effects on already-spatious material create interesting, degraded-but-textured character rather than pure lo-fi harshness

**The interconnection insight:** Distortion here is *integrated* into spatial processing, not replacing it. The reverb spatial character remains present even as distortion adds aggression. This is why the sounds work for atmospheric production.

### **Stage 3: Filtering (Frequency Shaping)**

After spatial + distortion processing, the filter shapes whatever character has developed.

**FREQUENCY knob:**
- **Full CCW:** Silence (low-pass filter fully closed)
- **12 o'clock:** Full high-pass (clean signal, no low-pass effect)
- **Full CW:** Silence (high-pass filter fully closed)
- **This control is bipolar:** Counterclockwise removes highs, clockwise removes lows, center is flat

**RESONANCE knob:**
- **12 o'clock (OFF):** Normal filtering
- **CCW/CW:** Adds emphasis at filter frequency, creating resonant peak
- **Full CW/CCW:** Self-oscillates at the filter frequency (becomes a tone generator)
- **WHY matter here:** After distortion, resonance adds definition to specific frequency ranges. You can carve out character from the heavy distortion.

**FILTER TYPE (BPF/COMB button):**
- **Default LP/HP:** Isolator behavior, removes frequencies at extremes
- **Band-Pass (BPF):** Lets through only frequencies around FREQUENCY knob setting, removes everything else
- **Comb (ROUTING + BPF/COMB):** Resonator that creates harmonic emphasis, can self-oscillate at full resonance
- **WHY choices matter:** Different filter types completely change how distorted signal is shaped. LP/HP is subtractive, BPF is isolating, Comb is resonant and can add pitched character

**VCF CV (with attenuverter CUTOFF CV knob):**
- **Full CCW (polarizer):** CV has no effect
- **12 o'clock:** CV adds to FREQUENCY knob setting
- **Full CW:** CV inverts (adds in opposite direction)
- **WHY:** Lets external modulation reshape the filtered character. LFO modulation of filter frequency on already-distorted reverb creates moving, evolving textures.

**The interconnection insight:** Filter is the final frequency sculptor in this chain. It has the final word on what frequencies dominate. After distortion has added aggression, filter can elegantly carve out complexity or emphasize specific ranges.

### **Stage 4: Dynamics Control (Compressor + Sidechain)**

After all processing, dynamics tools shape the final output.

**COMPRESSOR knob:**
- **Full CCW:** No compression, signal passes through
- **12 o'clock:** Light compression for ambient/pad sounds
- **Full CW:** Heavy compression, "snappy" drums character
- **WHY here:** Compressor catches peaks from the heavily-processed chain. Without it, distortion peaks could dominate. With it, everything sits in controllable dynamic range.

**SIDECHAIN DUCKING (triggered by external gate/trigger):**
- **SIDECHAIN knob:** Sets how long the ducking envelope lasts (release time)
- **SIDECHAIN DEPTH (ROUTING + SIDECHAIN knob):** How much signal is ducked (0% = no ducking, 100% = complete silence)
- **SIDECHAIN TRIG IN jack:** External trigger source (kick drum, gate signal, etc.)
- **HOW IT WORKS:** When trigger fires, signal volume ducks (reduces) momentarily, then returns to normal over the release time
- **WHY powerful here:** You can have heavily-processed reverb/distortion/filtered texture, then trigger ducking from a kick drum. The effect sits back dynamically when the kick hits. Perfect for layering effects under drums.

**The interconnection insight:** Sidechain ducking shows how external signals (kick drums, sequences, gates) can directly affect the character of your processing. This is modular thinking—audio processing reacts to external sources.

### **Output Stage (Pre/Post VCA)**

**PRE-VCA CV (controls input level before everything):**
- **Default:** Normalled to +5V (full open)
- **Patch in CV:** External modulation controls how much signal enters the entire chain
- **Use case:** LFO modulation of input level creates breathing, evolving character
- **WHY:** By controlling input at the very start, you modulate how much signal gets processed by everything downstream

**POST-VCA CV (controls final output level):**
- **Default:** Normalled to +5V (full open)
- **VOLUME/drive knob:** Manual control (listen carefully after 1 o'clock—drive saturation begins)
- **POST-VCA CV jack:** External modulation of final output
- **WHY:** Independent control over output level separate from internal processing level. You can keep internal character stable while modulating what comes out.

**GLOBAL DRY/WET MIX (ROUTING + VOLUME/drive):**
- **Full CCW:** Unprocessed input signal only (dry)
- **Full CW:** Fully processed signal (wet)
- **12 o'clock:** Mix between processed and unprocessed
- **WHY:** The ultimate interconnection control. You can have heavy processing happening, then blend how much of it you actually send out. Use this to add texture without overwhelming source material.

### **How This Chain Works Together**

The beauty of FX → DIST → VCF routing:

1. **Spatial layer (delay/reverb)** establishes complex, evolving texture
2. **Distortion layer** colors and heavies the texture without making it harsh (because it's working on complex material)
3. **Filter layer** sculpts frequency character, maintains definition in what could be muddiness
4. **Dynamics layer** manages peaks, reacts to external signals

Each stage affects how the next stage sounds. You can't really predict exactly what will happen when you adjust something, which is exactly the point. **This chain teaches interconnection through direct experience.**

### **Common Patch Approaches with This Routing**

**Approach 1: Ghost Drone**
- Delay + Reverb highly wet (establishing diffuse base)
- Moderate distortion (coloring base, not destroying it)
- Filter moving slowly via LFO (constant evolution)
- Light compression
- Result: Evolving, atmospheric texture perfect for pads and ambient

**Approach 2: Rhythmic Texture**
- Delay with moderate repeats, short time (rhythmic element)
- Reverb moderate-to-heavy (adds space to rhythm)
- Heavy distortion (makes rhythm aggressive)
- Filter carving at mid frequencies (maintains punch)
- Sidechain from kick drum (effect ducks, surfaces again)
- Result: Drums and textures layered, reacting to beat

**Approach 3: Chaos/Experimentation**
- All controls near extreme positions
- Micro-modulation matrix activated (modulations of modulations)
- Let the interconnections create unpredictable character
- Record what happens
- Result: Discovery of textures you wouldn't have intentionally created

---

### **Common Mistakes and How to Avoid Them**

When working with FX → DIST → VCF routing, specific patterns emerge. Not bugs—just how the signal flow works. Understanding why they happen transforms them from frustrations into teachable moments.

#### **Mistake 1: "Everything becomes reverb mud, I can't hear my input anymore"**

**What's happening:** Reverb DRY/WET is full CW (100% wet), so distortion processes only diffuse reverb tail, not the original transient.

**Why this happens:** Reverb comes first in this routing. Full wet means you feed distortion something already decayed and complex instead of something with definition.

**How to fix it:** 
- Set Reverb DRY/WET to 30-50% (blend of clean + reverb)
- Listen for original signal presence vs. reverb character
- Increase toward wet until character emerges without washing out transients
- Use PRE-DELAY to separate original sound from reverb buildup

**The principle:** Spatial effects enhance; they don't replace. In FX → DIST, the original should remain present.

---

#### **Mistake 2: "I turned up distortion and now it sounds like noise, not texture"**

**What's happening:** Distortion is full CW, but upstream delay/reverb lack interesting material for it to color.

**Why this happens:** In this routing, distortion's character depends entirely on what precedes it. Subtle delay/reverb upstream + heavy distortion downstream = harsh noise instead of colored texture.

**How to fix it:**
- Set up interesting delay/reverb character first (defined repeats, spatial width, evolved textures)
- Add distortion gradually (12 to 2 o'clock is usually the sweet spot)
- Listen for when distortion adds character vs. when it destroys definition

**The principle:** Distortion is a colorizer here, not a generator. Give it something complex to work on.

---

#### **Mistake 3: "The reverb just makes everything muddy in the low end"**

**What's happening:** Low frequencies get caught in reverb diffusion, creating phase cancellation that muddies everything, then distortion amplifies the mud.

**Why this happens:** Reverb algorithms spread full-spectrum signals across decay. Bass in particular creates phase issues and loses definition in spatial processing.

**How to fix it:**
- Use FILTER after distortion to high-pass out lows from the reverb stage
- Or: Shorten reverb TAIL (less decay time = less mud buildup)
- Or: Lower Reverb DRY/WET to reduce muddied signal reaching distortion

**The principle:** Low frequencies muddy spatial effects. High-pass or reduce reverb decay to manage them.

---

#### **Mistake 4: "My sidechain isn't doing anything. I patched the trigger but no ducking happens"**

**What's happening:** Sidechain DEPTH (ROUTING + SIDECHAIN knob) is at 0%, so the envelope fires but has no effect on audio level.

**Why this happens:** The trigger envelope works, but you haven't set how much it affects the signal. Depth = 0 = no modulation.

**How to fix it:**
- Hold ROUTING, turn SIDECHAIN knob CW to ~12 o'clock (50% depth)
- Audio ducks when trigger fires
- Adjust depth to taste; adjust release time (SIDECHAIN alone) for how quickly effect returns

**The principle:** Controls need both amount and character set. Amount with no character = invisible.

---

#### **Mistake 5: "Everything sounds so immediate and flat, like there's no space"**

**What's happening:** Reverb PRE-DELAY is at minimum (ROUTING + TAIL), so reverb starts immediately on the sound with no separation.

**Why this happens:** Pre-delay delays reverb's start, letting you hear the original transient first, then reverb surrounds it. Without it, everything happens at once.

**How to fix it:**
- Hold ROUTING, turn TAIL knob CW to ~12 o'clock (adds pre-delay)
- Reverb now separates from original sound, creating space perception
- Increase further for more separation

**The principle:** Pre-delay defines whether space sounds realistic. It's invisible but essential.

---

#### **Mistake 6: "My delay repeats are getting buried in distortion, they're not clear"**

**What's happening:** Delay feedback is high but DELAY TONE (ROUTING + REPEATS) is dull, so repeats lose definition entering distortion.

**Why this happens:** Dull repeats + distortion = murky signal. The repeats lack brightness, so distortion just darkens them further.

**How to fix it:**
- Hold ROUTING, turn REPEATS knob CW to brighten the delay tone
- Repeats now have articulation through distortion
- Balance: Bright tone + heavy distortion = piercing; dull tone + light distortion = buried

**The principle:** Tone upstream matters as much as distortion itself. Control what enters distortion, not just the distortion amount.

---

#### **Mistake 7: "I can't tell what the original sound is vs. what's processed"**

**What's happening:** Global DRY/WET is full CW (100% wet), so you hear only processed signal with no reference to original.

**Why this happens:** Without dry reference, your ears adapt to processed sound as "normal," making it impossible to judge if you're over or under-processing.

**How to fix it:**
- Set Global DRY/WET to 12 o'clock (50/50), so you hear both equally
- This is your reference—understand how much character you're adding
- Then adjust toward full wet/dry depending on desired effect intensity

**The principle:** Always keep dry reference available. Wet-only processing is flying blind.

---

#### **Mistake 8: "The filter isn't doing anything, I turn it and nothing changes"**

**What's happening:** Filter is at 12 o'clock (center = flat = no effect), so adjustments sound subtle or inaudible.

**Why this happens:** At center, the filter passes all frequencies. At center ± small movements, changes are too subtle to hear over distortion/reverb.

**How to fix it:**
- Turn FREQUENCY significantly away from center (10 or 2 o'clock, not 12 ± 1)
- Increase RESONANCE to emphasize filter movement
- Or: Switch to BAND-PASS filter (BPF button) for more dramatic narrowing

**The principle:** The isolator filter is subtle. Make large movements or add resonance to hear changes.

---

#### **Mistake 9: "I've got distortion and resonance both at full, and it's just chaos"**

**What's happening:** DISTORTION and RESONANCE are both full CW, creating maximum saturation + maximum filter emphasis = unpredictable feedback and chaos.

**Why this happens:** Each control is powerful alone. Together at extremes, they overwhelm everything else.

**How to fix it:**
- Keep only one at full intensity
- Heavy distortion + moderate resonance, or moderate distortion + strong resonance
- Start both moderate and increase one at a time to hear the difference

**The principle:** Restraint on some parameters lets others shine. Stacking extremes creates noise, not music.

---

#### **Mistake 10: "Everything sounds thin or harsh, I can't get anything lush"**

**What's happening:** Filter is in HIGH-PASS mode (CW), removing lows. Combined with bright delay tone and light reverb, signal has no body.

**Why this happens:** Distortion on already-thin material (sparse delays, thin reverb, removed lows) creates harshness. Thinness stacks at every stage.

**How to fix it:**
- Move filter toward LOW-PASS (CCW) to preserve lows
- Increase reverb DRY/WET for thickness
- Increase delay REPEATS for denser texture
- Darken delay TONE (ROUTING + REPEATS CCW) so repeats are fat
- Use moderate (not heavy) distortion so thickness doesn't turn harsh

**The principle:** Lushness requires thickness across multiple stages. One thin link breaks the chain.

---

### **Pattern Recognition: Root Causes**

These ten mistakes cluster around three root issues:

**1. Forgetting signal flow order** (Mistakes 1, 2, 3)
- Because reverb/delay come *first*, they define what distortion receives
- It's easy to set distortion without considering what's upstream
- Solution: Always dial in reverb/delay character before touching distortion

**2. Forgetting hidden controls exist** (Mistakes 4, 5, 6, 8)
- ROUTING button reveals crucial parameters (tone, depth, pre-delay, resonance)
- The basic front-panel controls feel complete until you discover there's more
- Solution: After basic exploration, systematically learn the ROUTING+ functions for each major control section

**3. Extreme settings thinking** (Mistakes 7, 9, 10)
- "More is better" leads to full CW on everything
- Processing stacks—each stage compounds the previous one, creating unexpected effects at extremes
- Solution: Develop reference points—know how 50% sounds, then understand how full wet/dry differs; recognize that moderation on some parameters enables others to work effectively

---

## Deep-Dive: DIST → VCF → FX (Routing 2)

**This routing chain excels for:**
- Clean, articulate aggression (distortion doesn't muddy because filter shapes it before spatial effects)
- Lead tones that need presence and clarity through effects (filter-first definition)
- Processing that maintains original transient clarity (distortion early, reverb last)
- Creating punchy textures that cut through a mix
- Distorted sounds that need to stay defined (compression works on the distorted signal before reverb softens it)

**Signal flow:** Audio → Distortion → Filter → Delay → Reverb → Compressor/Sidechain → Output

What makes this chain powerful:

### **Stage 1: Distortion (The Initial Colorer)**

Your signal enters here—distortion processes the clean, original material. No spatial effects to muddy or diffuse it first.

**DISTORTION knob:**
- **Full CCW:** No distortion, clean signal passes through
- **12 o'clock:** Moderate saturation, musical coloring without harshness
- **Full CW:** Heavy distortion, aggressive saturation
- **The key:** Because nothing comes before distortion in this routing, you're adding character to pristine audio. The distortion is stark and clear, not softened by upstream processing.
- **Result:** Even at full CW, the distortion feels present and articulate, not buried

**GAIN (ROUTING + TONE/GAIN):**
- **Full CCW:** Signal at original level
- **CW:** Boosts signal before distortion, creating more aggressive saturation
- **WHY separate:** Lets you control saturation independently from input level. Heavy gain + light distortion feels different than light gain + heavy distortion

**BITRATE REDUCER (ROUTING + DISTORTION knob, FW V3.0):**
- **Full CCW:** 24-bit clean
- **CW:** Reduces bit depth, creating lo-fi character
- **WHY this routing:** Lo-fi effects on clean signal feel raw and present, not diffuse. Useful for lo-fi aggression that stays punchy

**The interconnection insight:** In this routing, distortion has the first word on character. Everything downstream processes an already-distorted signal. The filter can carve the distortion, but it can't make it soft or ambient. This routing teaches that *distortion first = aggression first*, no matter what comes after.

### **Stage 2: Filtering (Frequency Definition)**

After distortion establishes aggression, the filter shapes that distorted character.

**FREQUENCY knob:**
- **Full CCW:** Silence (low-pass filter fully closed)
- **12 o'clock:** Full high-pass (clean signal, no low-pass effect)
- **Full CW:** Silence (high-pass filter fully closed)
- **This control is bipolar:** Counterclockwise removes highs, clockwise removes lows, center is flat
- **Unique to this routing:** The filter is working on distorted material, so it's sculpting aggression rather than smoothing complexity. Heavy distortion CCW through the filter sounds warm-aggressive, not just warm

**RESONANCE knob:**
- **12 o'clock (OFF):** Normal filtering
- **CCW/CW:** Adds emphasis at filter frequency, creating resonant peak
- **Full CW/CCW:** Self-oscillates at the filter frequency (becomes a tone generator)
- **WHY matter here:** After distortion, resonance adds definition and aggression. A resonant peak on a distorted signal creates a "nasal" quality that cuts through

**FILTER TYPE (BPF/COMB button):**
- **Default LP/HP:** Isolator behavior, removes frequencies at extremes
- **Band-Pass (BPF):** Lets through only frequencies around FREQUENCY knob setting, removes everything else
- **Comb (ROUTING + BPF/COMB):** Resonator that emphasizes harmonics
- **WHY choices matter:** On distorted material, different filter types create very different characters. LP/HP keeps aggression but removes extremes; BPF isolates the aggressiveness to a specific frequency; Comb adds resonant harmonics to the aggression

**VCF CV (with attenuverter CUTOFF CV knob):**
- **Full CCW:** CV has no effect
- **12 o'clock:** CV adds to FREQUENCY knob setting
- **Full CW:** CV inverts (adds in opposite direction)
- **WHY:** Lets external modulation sweep the filtered distortion in real time. Fast LFO on filter = wah effect on distortion. Slow LFO = gradual tonal evolution

**The interconnection insight:** The filter here is a sculptors tool. It takes the raw aggression of distortion and carves it into specific characters. High-pass the distortion and you get thin aggression; low-pass and you get fat aggression; resonate and you get nasal aggression. This teaches that *filter character depends on what it's processing*.

### **Stage 3: Spatial Effects (Delay + Reverb)**

After distortion and filter establish character, spatial effects add dimension.

**DELAY SECTION:**
- **TIME/DIV knob:** Sets delay time from short audio-rate repeats (CCW) to longer echoes (CW)
- **REPEATS/Feedback:** Controls repetition. More feedback = thicker delay texture
- **DRY/WET:** How much delayed signal vs. clean signal
- **TONE (ROUTING + REPEATS):** Brightness of delay repeats
- **WHY here:** Unlike Routing 1 where delay establishes the base, here delay is adding echoes to already-defined character. The delay doesn't create the sound; it decorates it
- **Result:** Reverb and delay feel like effects on a defined sound, not generators of sound

**REVERB SECTION:**
- **DRY/WET:** Mix of reverb vs. dry
- **TAIL:** Decay time of reverb
- **PRE-DELAY (ROUTING + TAIL):** Separation before reverb buildup
- **WHY here:** Coming last in the chain, reverb is the final spatial wrapper. It doesn't muddy because the signal entering it is already filtered and defined

**The interconnection insight:** Because spatial effects come last, they soften and space out an already-defined character rather than establish character. This is why this routing excels for "defined effects"—distortion+filter define, then spatial effects add dimension.

### **Stage 4: Dynamics Control (Compressor + Sidechain)**

After all processing, dynamics tools manage the distorted, filtered, spatial character.

**COMPRESSOR knob:**
- **Full CCW:** No compression, signal passes through
- **12 o'clock:** Light compression for ambient/pad sounds
- **Full CW:** Heavy compression, "snappy" character
- **WHY here:** Compressor catches distortion peaks and aggressive transients. In this routing, compression helps the filtered distortion sit cleanly in a mix

**SIDECHAIN DUCKING:**
- **SIDECHAIN TRIG IN jack:** External trigger source
- **HOW IT WORKS:** When trigger fires, signal ducks, then returns over release time
- **Unique to this routing:** Sidechain ducking affects the spatial-effected signal. When triggered, the reverb/delay ducks, creating rhythmic space rather than rhythmic heaviness (like in Routing 1)

**The interconnection insight:** Sidechain ducking in this routing creates dynamic space, not dynamic heaviness. Trigger from a kick and the reverb pulls back, leaving the distorted/filtered tone forward.

### **How This Chain Works Together**

The beauty of DIST → VCF → FX routing:

1. **Distortion layer** establishes aggression and character upfront
2. **Filter layer** sculpts that aggression into definition
3. **Spatial layer** adds echo and reverb without muddying the defined character
4. **Dynamics layer** manages the result, keeps it punchy

The routing teaches: *Define first, decorate later.* Unlike Routing 1 which teaches atmospheric complexity, this routing teaches aggressive clarity.

### **Common Patch Approaches with This Routing**

**Approach 1: Clean Lead**
- Light-to-moderate distortion (1-2 o'clock)
- Filter carved at mids (maintain presence)
- Delay/Reverb moderate (adds space without softening)
- No compression or minimal
- Result: Distorted lead that cuts through mixes

**Approach 2: Nasal/Acid Tone**
- Heavy distortion (3 o'clock)
- Filter in resonant band-pass mode (isolates aggression to specific frequency)
- Heavy resonance (creates nasal peak)
- Minimal reverb (keep definition)
- Result: Punchy, present tone that's hard to ignore

**Approach 3: Rhythmic Aggression**
- Moderate distortion (1-2 o'clock)
- Filter sweeping via LFO (creates movement)
- Sidechain ducking from gate (rhythm controls spatial dips)
- Moderate compression (controls peaks)
- Result: Distorted tone that evolves and responds to beat

---

### **Patch 3: The Foundation - Distorted Signal Exploration (Expert)**

Start here to understand distortion-first processing without external complexity.

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─OSCILLATOR/SYNTH─────┐
│    Output   ○────────────────────────→ GHOST IN 🔴
└─────────────└

                                                   ┌────────────────┐
                                                   │     GHOST      │
                                                   │  DIST→VCF→FX   │
                                                   │   (LED semi)   │
                                                   └────┬──────────└
                                                        │
                                                   ┌────▼─────┐
                                                   │  MIXER   │ or AUDIO OUT
                                                   │  CH 1    │
                                                   └──────────┘
```

**Controls - Everything at 12 o'clock First:**
- **Distortion:** 12 o'clock (neutral, no coloring yet)
- **Filter FREQUENCY:** 12 o'clock (neutral, no filtering)
- **Filter RESONANCE:** 12 o'clock
- **Delay TIME:** 12 o'clock
- **Delay REPEATS:** 12 o'clock
- **Delay DRY/WET:** 12 o'clock
- **Reverb TAIL:** 12 o'clock
- **Reverb DRY/WET:** 12 o'clock
- **Compressor:** 12 o'clock
- **Global DRY/WET:** 12 o'clock
- **VOLUME/drive:** 12 o'clock

This is your clean baseline. Now explore in this order:

1. **Explore DISTORTION:** Turn it slowly CW to 2 o'clock. Hear how the clean tone becomes colored, rich, aggressive. Then back off to 1 o'clock (sweet spot). Notice: The distortion is upfront and clear, not soft.
2. **Explore FREQUENCY:** With distortion at 1 o'clock, turn filter CCW to 10 o'clock (warm), then to 3 o'clock CW (bright). Hear how filter shapes the distorted character. Warm distortion vs. bright distortion.
3. **Explore Delay/Reverb:** Add delay DRY/WET slowly to 1 o'clock. Notice the distorted tone now has echoes. Add reverb DRY/WET to 1 o'clock. Notice: Reverb spaces the distorted tone, doesn't muddy it.

**Result:**
You've heard the core of Routing 2: Distortion defines, filter shapes, spatial effects decorate. Nothing is softened. Everything is clear.

**What You're Learning:**
- **Signal flow:** Distortion first means the original tone is colored immediately, then shaped by filter, then spaced by reverb
- **Distortion character:** Heavy distortion feels present and aggressive, not atmospheric
- **Filter purpose:** In this routing, filter doesn't soften; it sculpts aggression
- **Reverb role:** Reverb adds dimension, not complexity

**Performance:**
Change parameters while your tone plays:
- Turn Distortion knob slowly, notice aggression building
- Sweep Filter slowly up and down (try both directions)
- Adjust Reverb/Delay DRY/WET to add/remove space

Key insight: In this routing, every change is obvious because distortion-first is transparent.

**Alternative Options:**
- **Budget Approach:** Mutable Instruments Warps (spectral processor that teaches filter + distortion interaction on limited budget)
- **Different Character:** Erica Synths Fusion-2 (analog distortion-first approach with modulation matrix)
- **Premium Option:** Make Noise PanMix (advanced mixing and distortion options)

---

### **Patch 3.5: Intermediate Patch - Performance Modulation on Distorted Character (Expert)**

Move from static exploration to real-time control of a distorted tone.

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─OSCILLATOR/SYNTH───────────┐
│    Output   ○──────────────────────→ GHOST IN 🔴
└─────────────└
┌─Erica Synths Joystick2────┐
│  X OUT     ○─────────────────────────────→ FREQUENCY CV 🔵
│  Y OUT     ○─────────────────────────────→ DISTORTION (via ext VCA)
└───────────────────└
┌─Woggle (optional)─────┐
│  OUT        ○─────────────────────────────→ REVERB DRY/WET (via CV)
└───────────────────└

                                                   ┌────────────────┐
                                                   │     GHOST      │
                                                   │  DIST→VCF→FX   │
                                                   │   (LED semi)   │
                                                   └────┬──────────└
                                                        │
                                                   ┌────▼─────┐
                                                   │  MIXER   │ or AUDIO OUT
                                                   │  CH 1    │
                                                   └──────────┘
```

**Controls - Start with moderate distortion character:**
- **Distortion:** 1-2 o'clock (established character)
- **Filter FREQUENCY:** 12 o'clock (neutral, ready to be modulated)
- **Filter RESONANCE:** 12-1 o'clock (moderate, stable base)
- **Delay DRY/WET:** 1 o'clock (adds texture)
- **Reverb DRY/WET:** 1 o'clock (adds space)
- **Compressor:** 12 o'clock (light)
- **Global DRY/WET:** 12 o'clock (reference balance)

**Modulation - Real-Time Performance:**

**Joystick2 X → FREQUENCY CV:**
- Move joystick left/right to sweep filter across the distorted tone
- Left (CCW) = warm aggression, Right (CW) = bright aggression
- What you hear: Live filter sweeping over defined distorted character
- This is wah-like but on distortion, not clean signal
- Listen for: How filter changes feel smooth and expressive

**Joystick2 Y → DISTORTION (via external VCA):**
- Move joystick up/down to modulate distortion intensity
- Up = more distortion aggression, Down = cleaner tone
- What you hear: Tone morphing between clean and heavily-distorted
- This teaches: Distortion can be dynamic and expressive, not static
- Listen for: The attack of distortion appearing/disappearing

**Woggle → REVERB DRY/WET (optional):**
- Pressure on woggle = more reverb
- Release = dry tone
- What you hear: Space appearing and disappearing with gesture
- Teaches: Space can be a performance dimension

**Result:**
A distorted tone that transforms in three dimensions:
1. X-axis (Joystick X) = tonal character (warm to bright)
2. Y-axis (Joystick Y) = saturation intensity
3. Pressure (Woggle) = spatial dimension

Same baseline as Patch 3, but now it's expressive and alive.

**What You're Learning:**
- **Performance expression:** Distortion-first routing can be performative if you modulate the distortion itself
- **2D/3D control:** Multiple modulation sources create expressive depth
- **Real-time character transformation:** Unlike Routing 1 (algorithmic evolution), this is direct human control of character

**Alternative Setup (Simplified):**
- Just Joystick2 X to FREQUENCY (simplest wah-like effect)
- Just LFO to FREQUENCY (automatic filter sweep on distorted tone)
- Sequencer CV to DISTORTION for rhythmic saturation changes

**Performance:**
Unlike previous patches, this requires active playing:
- Sweep joystick slowly to find filter sweet spots
- Modulate Y-axis for saturation morphing during performance
- Use woggle for spatial punctuation
- Combine movements for complex timbral evolution

Key difference from Routing 1 Intermediate Patch: This focuses on performing the distorted character directly, not creating autonomous evolution.

**Alternative Options:**
- **Budget Approach:** Befaco Hexmix~ (6-channel mixer with modulation, similar performance control philosophy)
- **Different Character:** STG Soundlabs Soundburst (envelope-based modulation with character similar to Y-axis control)
- **Premium Option:** Moddemix by Erica Synths (advanced mixing with modulation matrix for complex performance control)

---

### **Patch 4: Cutting Lead - Presence Through Aggression (Expert)**

This patch showcases Routing 2's strength: creating tones that cut through a mix while remaining defined.

**Setup:**
```
🔴 Audio │ 🔵 CV │ 🟡 Gate

┌─OSCILLATOR/SYNTH───────────┐
│    Output   ○──────────────────────→ GHOST IN 🔴
└─────────────└
┌─LFO─────────────┐
│  OUTPUT   ○─────────────────────────→ FREQUENCY CV 🔵
└─────────────└

                                                   ┌────────────────┐
                                                   │     GHOST      │
                                                   │  DIST→VCF→FX   │
                                                   │   (LED semi)   │
                                                   └────┬──────────└
                                                        │
                                                   ┌────▼─────┐
                                                   │  MIXER   │ or AUDIO OUT
                                                   │  CH 1    │
                                                   └──────────┘
```

**Controls - Build Presence:**
- **Distortion:** 1-2 o'clock (colored, not extreme)
- **Gain (ROUTING + TONE/GAIN):** CW 1 o'clock (boosts signal into distortion)
- **Filter FREQUENCY:** 10 o'clock area (warm-to-mid frequencies)
- **Filter RESONANCE:** 2 o'clock (adds presence peak)
- **Delay TIME:** 9 o'clock (short repeats for rhythm)
- **Delay REPEATS:** 12 o'clock (moderate feedback)
- **Delay DRY/WET:** 12 o'clock (balanced)
- **Reverb TAIL:** 10 o'clock (short, tight)
- **Reverb DRY/WET:** 10 o'clock (minimal space, keeps definition)
- **Compressor:** 1 o'clock (light-to-moderate, keeps peaks controlled)
- **Global DRY/WET:** 12 o'clock

**Modulation - Filter Evolution:**
- **FREQUENCY CV:** Patch slow LFO
- Filter sweeps slowly, creating evolving presence while maintaining distorted character
- Result: Tone that's always present and cutting, but evolving

**Result:**
A distorted lead tone that:
- Cuts through mixes (distortion + resonance presence)
- Remains defined (minimal reverb, tight delay)
- Evolves over time (LFO on filter)
- Has character (warm-to-mid distortion)
- Stays controlled (compression, moderate settings)

Perfect for:
- Lead synth lines that need to be heard
- Bass textures that need presence
- Rhythmic tones that need aggression
- Performances where clarity matters

**What You're Learning:**
- **Presence as design choice:** Distortion + resonance + minimal reverb = presence through definition
- **Compression on distortion:** How to keep aggressive tones controlled
- **Routing trade-offs:** Space (reverb) vs. presence (definition). You can't have both at maximum; choose strategically

**Performance:**
Live adjustments while playing:
- Manually sweep FREQUENCY (hand) to add articulation while LFO provides baseline movement
- Adjust RESONANCE in real-time (add more presence for louder sections, reduce for softer)
- Adjust COMPRESSOR DEPTH for tightness/looseness
- Use Global DRY/WET to fade the effect in/out

Key principle: In Routing 2, presence comes from good design, not from volume cranking.

**Alternative Options:**
- **Budget Approach:** Bastl Dude (distortion + filtering with modest modulation)
- **Different Character:** WMD TYMP (distortion-based with frequency sculpting for presence)
- **Premium Option:** Snazzy FX Multimix (advanced mixing with distortion stage and presence shaping)

---

### **Common Mistakes with DIST → VCF → FX Routing**

When working with distortion-first routing, different mistakes emerge than Routing 1.

#### **Mistake 1: "My distorted sound is too thin/piercing, I can't warm it up"**

**What's happening:** Filter is in HIGH-PASS mode (CW), removing lows. Combined with heavy distortion, the result is thin and harsh.

**Why this happens:** In this routing, distortion establishes the fundamental character. If you high-pass that, you remove lows too early. Reverb at the end can't recover what the filter removed.

**How to fix it:**
- Move filter toward LOW-PASS (CCW) to preserve lows
- Heavy distortion + low-pass filter = warm aggression
- High-pass is for specific textures (nasal/acid), not default

**The principle:** In distortion-first routing, filter choices matter more because they're shaping the foundation.

---

#### **Mistake 2: "Reverb sounds unnatural on the distorted signal, like it doesn't belong"**

**What's happening:** You've created heavily-distorted character with heavy resonance, then applied heavy reverb. The reverb tries to soften aggression, creating conflict.

**Why this happens:** Distortion + resonance = defined character. Reverb then spaces that defined character, creating a mismatch (aggressive but spacious).

**How to fix it:**
- Reduce reverb DRY/WET to 10-30% (adds space without softening character)
- Or: Reduce distortion/resonance to allow reverb to work
- Or: Keep reverb wet but reduce TAIL (less decay = less conflicting space)

**The principle:** In this routing, reverb is decoration on defined character. Too much reverb fights the definition you created upstream.

---

#### **Mistake 3: "The filter isn't doing anything obvious"**

**What's happening:** Filter is at 12 o'clock (neutral), so adjustments are subtle. Without distortion to anchor it, changes are hard to hear.

**Why this happens:** At center, the filter is flat. On a distorted signal, subtle movements are less obvious than on clean signal.

**How to fix it:**
- Make larger filter movements (not small adjustments)
- Use resonance to emphasize filter position
- Switch to BAND-PASS mode for more dramatic effect

**The principle:** Distortion-first routing needs deliberate filter choices, not subtle ones.

---

#### **Mistake 4: "My distorted sound lost all definition after adding reverb"**

**What's happening:** Reverb DRY/WET is full CW (100% wet), so the distorted/filtered signal is completely diffused by reverb.

**Why this happens:** Even with definition from filter, 100% wet reverb buries that definition.

**How to fix it:**
- Set Reverb DRY/WET to 30-50% (preserve filtered distortion definition)
- The filtered distortion should remain the primary character, reverb is secondary

**The principle:** In this routing, reverb is decoration. Keep dry signal audible.

---

#### **Mistake 5: "Delay repeats don't sound clear, they sound buried"**

**What's happening:** Delay TONE is dull (ROUTING + REPEATS full CCW), so the repeats of your distorted signal become even duller.

**Why this happens:** Dull delays of already-distorted signal = muddy definition loss.

**How to fix it:**
- Brighten delay TONE (ROUTING + REPEATS CW)
- Now delay repeats maintain articulation
- Or: Reduce delay REPEATS feedback (fewer repeats = cleaner sound)

**The principle:** Tone shaping matters at every stage when distortion is involved.

---

#### **Mistake 6: "Distortion and compression together are making everything too squeezed"**

**What's happening:** DISTORTION is heavy + COMPRESSOR is heavy (full CW), compressing peaks of already-saturated signal.

**Why this happens:** Distortion already reduces dynamic range. Heavy compression on top removes even more dynamics.

**How to fix it:**
- Reduce compression (keep it light, 12 o'clock area)
- Or: Reduce distortion so compression has more dynamic material to work with
- Balance: Heavy distortion + light compression, or light distortion + heavy compression

**The principle:** Distortion and compression are both dynamics-reducers. Don't stack them heavily.

---

#### **Mistake 7: "The sidechain ducking is making my reverb disappear completely"**

**What's happening:** SIDECHAIN DEPTH is full CW (100% ducking) + Reverb DRY/WET is high, so when the trigger fires, the reverb (which comes last in the chain) ducks completely to silence.

**Why this happens:** In this routing, sidechain affects the spatial layer. Full depth + high reverb wet = total space loss on trigger.

**How to fix it:**
- Reduce SIDECHAIN DEPTH to 30-50% (noticeable dip, not complete silence)
- Or: Reduce Reverb DRY/WET so there's less to duck
- Or: Keep release time longer so the dip recovers quickly

**The principle:** Sidechain ducking in this routing affects space, not the distorted tone. Subtle depths work better.

---

#### **Mistake 8: "Adding resonance makes the sound too piercing/nasal"**

**What's happening:** RESONANCE is at full CW, adding a resonant peak to already-distorted signal. Combined with distortion, it's aggressively nasal.

**Why this happens:** Distortion + resonance + no filter EQ to counter = maximum piercing.

**How to fix it:**
- Reduce RESONANCE to moderate (12-1 o'clock)
- Or: Use LOW-PASS filter to remove nasal highs from the resonance
- Or: Keep resonance but reduce distortion so there's less to resonate

**The principle:** Resonance on distortion is powerful. Use it deliberately, not accidentally.

---

#### **Mistake 9: "Everything sounds too immediate and upfront, no space"**

**What's happening:** Reverb DRY/WET is too low + Delay DRY/WET is too low, so spatial effects are barely present.

**Why this happens:** In this routing, you create definition first (distortion+filter). If you don't add reverb/delay, it's just defined aggression, no space.

**How to fix it:**
- Increase Reverb DRY/WET to 40-60% (adds space)
- Increase Delay DRY/WET to 30-50% (adds texture)
- Use PRE-DELAY (ROUTING + TAIL) to separate original from reverb

**The principle:** Distortion-first routing feels front-and-center by default. Add space deliberately.

---

#### **Mistake 10: "Distortion sounds harsh when I turn it up, can't find a sweet spot"**

**What's happening:** DISTORTION is being turned up (CW) without adjusting GAIN or other upstream controls to compensate.

**Why this happens:** Heavy distortion on full-level input = harsh and unmusical. No reverb upstream to soften it (like Routing 1).

**How to fix it:**
- Reduce input level via PRE-VCA CV
- Or: Use moderate distortion (1-2 o'clock) with high GAIN instead of full distortion with low gain
- Or: Use filter to remove harshness peaks after distortion

**The principle:** In this routing, distortion character depends on input level because nothing softens it upstream.

---

### **Pattern Recognition: Routing 2 Root Causes**

These ten mistakes cluster around two key issues:

**1. Forgetting distortion-first means definition-first** (Mistakes 1, 2, 3, 8, 9)
- Distortion establishes character upfront
- Filter sculpts that character, it doesn't create it
- Spatial effects decorate, they don't transform
- Solution: Build character first (dist+filter), add space second (reverb/delay)

**2. Extreme settings conflict on distorted material** (Mistakes 4, 6, 7, 10)
- Heavy distortion + heavy compression = too controlled
- Heavy distortion + heavy reverb = character loss
- Heavy distortion + heavy resonance = piercing
- Solution: Use moderation somewhere; balance extremes

---

## Deep-Dive: VCF → FX → DIST (Routing 3)

**This routing chain excels for:**
- Creating the "heaviest distorted tones" (per manual)
- Taking filtered signals and applying aggressive character at the end
- Situations where you want the filter to define the foundation that distortion then colors
- Building tones with maximum filtered aggression
- Creating dense, complex character that feels heavy throughout
- Sound design where filter clarity matters before distortion adds saturation

**Signal flow:** Audio → Filter → Delay → Reverb → Distortion → Compressor/Sidechain → Output

**Why this routing creates the "heaviest" sound:**

This is counterintuitive at first. You'd think distortion first would create the heaviest tones. But filter-first creates heaviness *at scale*—the filter shapes your source into a specific character, then everything downstream processes that shaped material, then distortion colors the complete result. Unlike Routing 1 where distortion colors complexity, or Routing 2 where distortion comes early and clean, Routing 3 applies distortion to a signal that's already been extensively processed. The combination of filtered character + spatial processing + final distortion creates density and weight that the other routings don't achieve.

The manual notes Routing 3 "will generally have the heaviest distorted tones." This isn't about the distortion amount—it's about what the distortion is processing. By the time your signal reaches the distortion stage in this routing, it's already shaped by filter, already modulated by delay/reverb. The distortion doesn't start fresh. It works on material that's already dense. That's what creates heaviness.

What makes this chain powerful:

### **Stage 1: Filtering (The Frequency Foundation)**

Your signal enters here—the filter processes the clean, original material *first*. This means the filter establishes the fundamental frequency character before anything else touches the sound.

**FREQUENCY knob:**
- **Full CCW:** Silence (low-pass filter fully closed)
- **12 o'clock:** Full high-pass (clean signal, no low-pass effect)
- **Full CW:** Silence (high-pass filter fully closed)
- **This control is bipolar:** Counterclockwise removes highs (warm, dark), clockwise removes lows (thin, bright), center is flat
- **Unique to this routing:** The filter operates on pristine, unprocessed audio. Your filter choice fundamentally shapes what everything downstream processes. There's no prior stage softening or diffusing your signal.
- **Result:** The filter's character is absolute—it defines the ground truth of what you're working with

**RESONANCE knob:**
- **12 o'clock (OFF):** Normal filtering
- **CCW/CW:** Adds emphasis at filter frequency, creating resonant peak
- **Full CW/CCW:** Self-oscillates at the filter frequency (becomes a tone generator)
- **WHY matter here:** On clean material, resonance is stark and obvious. A resonant peak on unprocessed audio is very present. When this gets processed by delay/reverb/distortion downstream, that resonance compounds through the chain.
- **Result:** Resonance in this position creates maximum presence that everything else amplifies

**FILTER TYPE (BPF/COMB button):**
- **Default LP/HP:** Isolator behavior, removes frequencies at extremes
- **Band-Pass (BPF):** Lets through only frequencies around FREQUENCY knob setting, removes everything else
- **Comb (ROUTING + BPF/COMB):** Resonator that emphasizes harmonics
- **WHY choices matter:** Different filter types fundamentally shape what enters the rest of the chain. LP/HP is subtractive and general-purpose; BPF is isolating and creates tunnel-like tone; Comb is resonant and creates harmonic emphasis that everything downstream amplifies

**VCF CV (with attenuverter CUTOFF CV knob):**
- **Full CCW:** CV has no effect
- **12 o'clock:** CV adds to FREQUENCY knob setting
- **Full CW:** CV inverts (adds in opposite direction)
- **WHY:** Lets external modulation reshape the filtered foundation in real time. LFO modulation of filter frequency on clean audio creates moving, evolving baseline that everything else processes

**The interconnection insight:** The filter here is the architect of the entire signal character. Unlike Routing 1 & 2 where the filter is a later-stage sculptor, here the filter is the foundation. Everything that happens afterward—delay, reverb, distortion—is processing something the filter has already defined. This teaches a fundamental principle: the earlier a processor sits in the chain, the more foundational its role.

### **Stage 2: Spatial Effects (FX - Processing Filtered Signal)**

After the filter establishes the frequency foundation, spatial effects process what the filter created.

**DELAY SECTION:**
- **TIME/DIV knob:** Sets delay time from short audio-rate repeats (CCW) to longer echoes (CW)
- **REPEATS/Feedback:** Controls how many times the signal repeats. More feedback = thicker delay texture built on filtered foundation
- **DRY/WET:** How much delayed signal vs. clean signal. High values mean the filtered character gets extensively repeated
- **TONE (ROUTING + REPEATS):** Adjusts brightness of the delayed repeats (working on filtered material)
- **WHY here:** The filter has already defined frequency character. Delay now takes that filtered foundation and multiplies it, creating rhythmic density. The delay isn't establishing anything—it's elaborating on what the filter created
- **Result:** Rhythmic texture built on a solid filtered foundation

**REVERB SECTION:**
- **DRY/WET:** How much reverb vs. clean. Full wet means the filtered signal gets extensively spaced
- **TAIL:** Decay time. Longer tail = more diffusion of the filtered character
- **PRE-DELAY (ROUTING + TAIL):** Separates the filtered original from the reverb wash
- **WHY here:** Reverb takes the delay-processed, filtered foundation and adds spatial dimension. The reverb is working on something already complex (filtered + delayed)
- **Result:** Spatial layering built on filtered + delayed material

**The interconnection insight:** By placing spatial effects in the middle of the chain (after filter, before distortion), they process the filtered foundation but that processing itself becomes the input to the final stage. This teaches how middle-stage processors compound: they take what came before and transform it for what comes after. They're not isolated—they're links in a chain where each output becomes the next input.

### **Stage 3: Distortion (The Final Colorer)**

After filter and spatial effects have established and elaborated the character, distortion applies saturation to the complete result.

**DISTORTION knob:**
- **Full CCW:** No distortion, filtered/delayed/reverbed signal passes through clean
- **12 o'clock:** Moderate saturation, musical coloring
- **Full CW:** Heavy distortion, aggressive saturation
- **The key:** The distortion is processing material that's already been filtered, delayed, and reverbed. It's not coloring clean audio (like Routing 2) and it's not coloring just reverbed material (like Routing 1). It's applying saturation to the complete processed result
- **Result:** Dense, heavy saturation that feels integrated rather than imposed

**GAIN (ROUTING + TONE/GAIN):**
- **Full CCW:** Signal at original level
- **CW:** Boosts signal into distortion, creating more aggressive saturation
- **WHY separate:** Lets you control how much of the processed material enters the distortion stage. This is powerful here because the "material" entering distortion is already complex

**BITRATE REDUCER (ROUTING + DISTORTION knob, FW V3.0):**
- **Full CCW:** 24-bit clean
- **CW:** Reduces bit depth, creating lo-fi character applied to the filtered/delayed/reverbed signal
- **WHY this routing:** Lo-fi effects on extensively processed material create interesting degradation that feels integrated rather than raw

**The interconnection insight:** Distortion in this position is the final integration stage. Everything that came before—filter, delay, reverb—is now colored by saturation. This teaches that *the last processor has the final word on character*. In Routing 1, distortion is mid-chain and colors spatial processing. In Routing 2, distortion is early and gets shaped downstream. Here, distortion is final and its saturation is the ultimate layer, creating maximum integration.

### **Stage 4: Dynamics Control (Compressor + Sidechain)**

After all processing—filtering, spatial effects, distortion—dynamics tools manage the final output.

**COMPRESSOR knob:**
- **Full CCW:** No compression, signal passes through
- **12 o'clock:** Light compression
- **Full CW:** Heavy compression
- **WHY here:** The compressor catches peaks from the complete chain. In this routing, you're managing the dynamics of something that's already been filtered, delayed, reverbed, *and* distorted. The compressor is the final glue

**SIDECHAIN DUCKING:**
- **SIDECHAIN TRIG IN jack:** External trigger source
- **HOW IT WORKS:** When trigger fires, signal volume ducks, then returns over release time
- **Unique to this routing:** Sidechain ducking affects the final, completely-processed signal. In Routing 1, it affects spatial effects. In Routing 2, it affects spatial effects. Here it affects distorted signal, creating heavy dynamics
- **Result:** Complete processing chain ducks as a unit, creating rhythmic density control

**The interconnection insight:** The compressor and sidechain sit outside the main processing chain. They're management tools. In all three routings, they serve this role, but what they're managing is different. Here they're managing the result of complete processing.

### **How This Chain Works Together**

The beauty of VCF → FX → DIST routing:

1. **Filter layer** establishes frequency foundation (defines what gets processed)
2. **Spatial layer** elaborates on that foundation (delay/reverb create density)
3. **Distortion layer** applies final character (saturation to complete result)
4. **Dynamics layer** manages the output (compression, sidechain ducking)

Each stage receives what the previous stage creates and transforms it. By the time you reach distortion, the signal has been through three processing stages. The distortion isn't stark—it's the final layer on an already-rich signal.

### **Common Patch Approaches with This Routing**

**Approach 1: Filtered Evolution**
- Filter shaped at mid-frequencies (establish foundation)
- Delay + Reverb moderate-to-wet (elaborate the foundation)
- Light distortion (add final character)
- Slow LFO on filter (foundation evolves gradually)
- Result: Tones that evolve as the filter moves, with distortion providing final integration

**Approach 2: Maximum Density**
- Filter in comb mode with resonance (create harmonic emphasis)
- Delay high feedback, reverb heavy (maximum elaboration)
- Heavy distortion (final saturation of dense material)
- Sidechain from clock (complete chain reacts to tempo)
- Result: Thick, complex tones that feel integrated rather than layered

**Approach 3: Evolving Aggression**
- Filter moving via LFO (foundation constantly changes)
- Delay/Reverb creating texture on moving foundation
- Distortion adding aggression to the evolution
- Multiple modulation sources creating unpredictable character
- Result: Sounds that transform continually, with distortion making the transformation aggressive

---

### **Common Mistakes with VCF → FX → DIST Routing**

When working with filter-first routing, specific patterns emerge. Filter-first changes how everything else behaves downstream. Understanding why these happen transforms them from frustrations into teachable moments about how processor position affects the entire chain.

#### **Mistake 1: "Everything is too filtered/dark, I can't get brightness"**

**What's happening:** The FREQUENCY knob is set to low-pass (CCW, removing highs). Because the filter comes *first* in this routing, it removes brightness before delay, reverb, or distortion ever touch the signal. Everything downstream processes a dark, warm signal. There's no way to recover brightness later in the chain.

**Why this happens:** In Routing 1 or 2, you could apply the filter later and compensate earlier. In filter-first routing, your filter choice is *the foundation*. An overly warm foundation makes everything downstream warm. No amount of distortion or reverb can undo a foundational frequency choice.

**How to fix it:**
- Move FREQUENCY toward center (12 o'clock) or CW (high-pass mode) to preserve/brighten highs before everything else processes the signal
- Use RESONANCE sparingly—resonance on a warm foundation creates even more darkness before elaboration happens
- Or: Accept the warm character and design the patch around it (use it intentionally as a foundation choice, not accidentally)
- Try delay/reverb with brighter TONE (ROUTING + REPEATS CW) to add some shimmer—but remember, the filter's darkness is still the base

**The principle:** Filter-first routing teaches that *early choices compound*. Your filter doesn't just shape tone—it defines the foundation that every downstream processor elaborates on. Change it early, or accept it throughout. There's no recovering from a foundational choice with later processing.

---

#### **Mistake 2: "The reverb/delay doesn't seem to do much"**

**What's happening:** Delay DRY/WET and Reverb DRY/WET are too low (mostly dry). But because the filter has already defined a specific character, adding subtle spatial effects doesn't feel significant—you're elaborating on a strong foundation, not adding to empty space.

**Why this happens:** In Routing 1, spatial effects are the first thing, so their presence is obvious. In this routing, they come after the filter has established character. Subtle spatial effects feel invisible because they're working on something already defined. You need more wet signal to notice the elaboration.

**How to fix it:**
- Increase Delay DRY/WET to 40-60% (spatial elaboration becomes audible)
- Increase Reverb DRY/WET to 40-50% (adds noticeable space)
- Or: Make dramatic changes to delay TIME or reverb TAIL to feel the difference
- Test: Set one to full dry (0%) and one to full wet (100%), listen to the difference. Then dial back from wet to find the sweet spot

**The principle:** Spatial effects in filter-first routing are *elaboration on foundation*, not generation of space. They need higher wet values to feel present because they're working on material already shaped by the filter. This teaches that *processor position determines how much presence you need*—the same effect amount feels different depending on what it's processing.

---

#### **Mistake 3: "Adding distortion just makes everything muddy"**

**What's happening:** DISTORTION is set to full CW (heavy saturation), but the signal entering distortion has already been filtered, delayed, and reverbed. That's complex, diffuse material. Heavy distortion on complex material doesn't create aggression—it muddies and thickens.

**Why this happens:** In Routing 2, distortion comes early and is stark/clear. Here, distortion is the *final layer* on material that's already been heavily processed. A lot of saturation on already-soft material just makes mud. You need restraint.

**How to fix it:**
- Use *moderate* distortion (12-1 o'clock), not heavy (full CW)
- Think of distortion here as integration, not aggression. Light saturation glues the filter+FX character together
- Or: Reduce spatial effects wet values so distortion has cleaner material to work on
- Or: Use light distortion with high GAIN (ROUTING + TONE/GAIN CW) instead of heavy distortion with low gain—you get character without muddiness

**The principle:** Late-chain distortion on complex material requires finesse. Distortion-first feels aggressive. Distortion-last must integrate. This teaches that *the same processor behaves completely differently depending on what it's processing*. Distortion on clean material is stark. Distortion on filtered+spatial material must be gentle.

---

#### **Mistake 4: "The filter resonance is too extreme/piercing"**

**What's happening:** RESONANCE is at full CW, creating a strong resonant peak in the filter. But because this resonance is *at the start of the chain*, it gets elaborated by delay, reverb, and distortion. The peak compounds through three stages of processing. What feels like a 50% resonance boost becomes extreme after delay repeats it, reverb spaces it, and distortion colors it.

**Why this happens:** Resonance at the start of the chain isn't just a tonal choice—it's a foundational emphasis. Every downstream processor elaborates that emphasized frequency. Three stages of elaboration = resonance that feels piercing instead of present.

**How to fix it:**
- Use *moderate* resonance (12-1 o'clock), not extreme
- Remember: Your resonance gets elaborated by downstream processors. What feels right at the source feels extreme at the output
- Test: Set resonance to extreme, then reduce it by 50% (to about 12 o'clock). Listen how much presence remains even at lower resonance
- Or: Keep high resonance but reduce spatial effect wet values (less elaboration = less exaggerated resonance)

**The principle:** Filter-first routing teaches that *early processing compounds through the chain*. A moderate choice upstream becomes extreme downstream. This is why the manual describes filter-first as creating the "heaviest tones"—not because of heavy processing, but because every moderate choice elaborates into something dense through three downstream stages.

---

#### **Mistake 5: "I can't get punchy tones, everything sounds diffuse"**

**What's happening:** Delay and Reverb are set to high wet values (you wanted elaboration), so every sound through the chain is diffused by spatial processing *before* it reaches distortion. Distortion then adds saturation to already-diffuse material. Result: punchy becomes soft, defined becomes blurry, attack becomes washed out.

**Why this happens:** In Routing 2, you could have distortion create punch. In Routing 3, spatial effects come before distortion. High spatial wet + any distortion = softness, not punch. The spatial processing removes the transient clarity that distortion could have shaped into punch.

**How to fix it:**
- Reduce spatial effect wet values (especially delay/reverb DRY/WET) to 20-40% so transients pass through relatively clean to distortion
- Increase DISTORTION to compensate for softer spatial effects—use distortion to create punch where spatial effects removed it
- Or: Use shorter delay TIME and shorter reverb TAIL (less spatial diffusion, more transient preservation)
- Or: Accept diffuse character and design patches around it (ambient/textural, not punchy/rhythmic)

**The principle:** Spatial effects in the middle of the chain soften transients before later processing. If you want punch in filter-first routing, you must either reduce spatial wet values to preserve transients, or use distortion deliberately to create punch on the diffuse material. This teaches that *processor position determines what character you can achieve*. Some routings naturally punch; some naturally diffuse. You work with the routing's strengths, not against them.

---

### **Pattern Recognition: Routing 3 Root Causes**

These five mistakes cluster around three fundamental issues in filter-first routing:

**1. Filter as Foundation, Not Optional** (Mistakes 1, 4)
- Filter comes first. Its choices compound through everything downstream
- An overly dark filter creates darkness throughout (Mistake 1)
- A resonant filter creates emphasis that elaborates to extremes (Mistake 4)
- Solution: Treat filter as architectural choice, not parameter adjustment. Moderate choices work better because they elaborate well

**2. Spatial Effects as Elaboration, Not Generation** (Mistakes 2, 5)
- Delay and reverb in the middle of the chain elaborate on what the filter created
- Subtle elaboration feels invisible (Mistake 2)
- Heavy elaboration before distortion removes punch (Mistake 5)
- Solution: Match spatial wet values to your goal. Want elaboration? High wet. Want punch? Low wet

**3. Late-Chain Distortion Requires Finesse on Complex Material** (Mistake 3)
- By the time signal reaches distortion, it's been filtered, delayed, reverbed
- That material is already complex and diffuse
- Heavy distortion on complexity creates mud, not aggression (Mistake 3)
- Solution: Use distortion for integration and glue, not aggression. Light saturation works better

**The interconnection teaching:** Filter-first routing reveals that *processor position determines not just what gets processed, but how much processing is possible*. Early processors establish foundations that later processors elaborate. Late processors must work gracefully on material that's already transformed. Understanding this teaches you to think of your entire signal chain as interconnected, where each stage's job depends on what came before and affects what comes after. It's not five independent processors—it's five stages of a single transformation system.

GHOST doesn't exist in isolation. It connects to everything already in your setup. The routing flexibility and modulation control don't just transform GHOST—they reveal possibilities in gear you already own.

### **Principle 1: External Sequencers → Modulation Sources**

Your external sequencer (Elektron device, Torso Studio, Arturia, etc.) isn't just for triggering notes. Its CV outputs become GHOST modulation sources.

**Workflow:**
- Patch sequencer CV OUT → GHOST PRE-VCA CV or CUTOFF CV
- Now your sequencer doesn't just trigger rhythm—it shapes GHOST's character in sync
- Set sequencer to random or algorithmic CV, and GHOST responds with evolving processing
- Result: Audio processing that *grooves* because it's synced to your musical timing, not arbitrary LFO rates

**Why this matters:** Most people think sequencers are for note generation. Modular thinking says sequencers are *timing sources*. Their CV outputs can modulate anything. GHOST's three CV inputs make this obvious—you're not limited to one modulation type.

### **Principle 2: Stomp Box Interface → GHOST Input Control**

If you're processing guitar or bass through a Stomp box (or similar), GHOST becomes a final texture layer.

**Workflow:**
- Guitar/Bass → Stomp FX → GHOST IN
- GHOST output → Amp/PA/Interface
- Stomp controls initial character (distortion, modulation, ambience)
- GHOST then processes that result through your chosen routing chain

**Why this matters:** Each processor adds layers, but they're stacked predictably. GHOST's routing flexibility means you're not locked into "guitar distortion then spatial effects." You can choose whether spatial effects come first (creating atmospheric heavy textures) or last (adding space to already-shaped tone). The same Stomp output becomes completely different through different GHOST routings.

### **Principle 3: External Triggers → Sidechain Ducking Sync**

Any external gate/trigger becomes a dynamic control for GHOST's output.

**Workflow:**
- Drum machine gate output → GHOST SIDECHAIN TRIG IN
- GHOST effect now ducks with your drum machine timing
- Adjust SIDECHAIN DEPTH and release time to control how tight or loose the interaction feels
- Result: GHOST processing that reacts to your drums, not sitting statically on top

**Why this matters:** Sidechain ducking is how professional mixes glue together. Hearing GHOST respond dynamically to external triggers teaches you to think of modular processing as *reactive*, not just *additive*. The effect serves the music because it responds to timing.

### **Principle 4: Modulation Density Through Layered CV Patching**

When you patch multiple CV sources to GHOST simultaneously:
- Sequencer modulating PRE-VCA
- LFO modulating CUTOFF
- Random modulating something else

...GHOST's character evolves unpredictably. That unpredictability forces creative listening.

**Workflow:**
- Use one CV for rhythmic/musical modulation (sequencer)
- Use another for organic/evolving modulation (slow LFO)
- Use sidechain for reactive ducking (trigger)
- Same audio input now becomes completely different depending on CV state combinations

**Why this matters:** This teaches interconnection at scale. GHOST isn't just an effects processor anymore—it becomes a modulation-responsive system where audio + control signals create emergent textures. That principle applies to all modular synthesis.

### **Real Workflow Example: Stomp + Sequencer Integration**

You're processing bass through a Stomp with some distortion and modulation. You want that bass to become textural at certain points, then snap back to clarity.

```
Bass → Stomp (distortion ON, mod ON) → GHOST IN
                                        ├─ SIDECHAIN TRIG IN ← Drum Machine Gate
                                        ├─ PRE-VCA CV ← Sequencer Random CV
                                        └─ CUTOFF CV ← Slow LFO
GHOST OUT → Mixer Channel 1 (50% blend with Stomp dry out for reference)
```

What happens:
1. **Stomp processes bass:** Adds saturation and movement
2. **GHOST receives that:** Three routing choices determine if spatial effects come first (atmospheric) or last (colored)
3. **Sequencer modulates PRE-VCA:** Bass processing intensity evolves musically, synced to your tempo
4. **LFO modulates CUTOFF:** Independent tonal evolution, changing character constantly
5. **Drum gate triggers sidechain:** When drums hit, GHOST ducks, sitting back in the mix
6. **Result:** Bass that transforms throughout the song—heavy and atmospheric during intro, reactive and groovy during beats, spacious on breaks

Without GHOST's routing flexibility and CV inputs, this workflow requires multiple modules and complex patching. GHOST provides it integrated—teaching you the principle while staying practical.

---

[Endorphin.es GHOST Module](https://www.endorphin.es/modules/p/ghost) - Official product page
