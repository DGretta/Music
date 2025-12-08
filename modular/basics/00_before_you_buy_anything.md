# Before You Buy Anything

**Read this first. Seriously.**

You've seen the videos. You've heard the sounds. You want a modular synthesizer. That's great—modular is incredibly rewarding. But it's also expensive, complex, and unforgiving of certain mistakes.

This guide exists because the forum posts are full of people asking "I bought a Maths, now what?" or "Do I really need VCAs?" or "What's the smallest complete system?" These are good questions, but they suggest someone started buying modules before understanding what makes a functional system.

**This is your reality check and prerequisite guide.**

---

## The Reality Check

### What You're Getting Into

**Financial commitment:** If you want to tinker and explore, a minimal functional system costs $800-2000. But if you're serious about making music, **expect to budget $5000 minimum.** At that price point, you have enough voices, modulation, and tools to actually feel expressive instead of constantly hitting limitations. A comprehensive performance/exploration system runs $10000-20000+. Individual modules range from $50 (utilities) to $600+ (complex multifunction modules). This adds up fast.

**Expansion is endless:** You will buy more modules. Everyone does. The system grows as your understanding grows. A $5k system can easily absorb another $10k in modules as you refine your direction. Budget an additional 50% beyond your initial build as a realistic planning number.

**Learning curve:** Modular synthesis is an instrument, not a tool. You don't "learn it in a weekend." Expect months of exploration before you're comfortable, and years before you master it. That's not discouraging—it's realistic. The depth is what makes it rewarding.

**Space and portability:** Even a small system occupies significant desk space. A 104HP row (about 21 inches wide) is considered "small." Cases are heavy. Travel requires careful planning. This isn't a laptop you toss in a bag.

**No presets:** Every sound requires patching from scratch. There's no "save" button in hardware modular. Some modules offer preset recall, but the vast majority don't. You document patches with photos, videos, or drawings. This is feature, not bug—it forces understanding.

**Ongoing expansion:** You will want more. Modular doesn't have a "done"—there's always another filter sound to explore, another oscillator approach to try, another effect to layer in. Budget accordingly, and embrace the expansion as part of the journey.

### Why Do This Anyway?

**Because nothing else sounds like it.** Modular offers sonic territories that fixed-architecture synthesizers can't reach. The tactile, hands-on control creates sounds you wouldn't discover through mouse clicks. The lack of presets forces experimentation. The modular community is welcoming and generous with knowledge.

If you're drawn to it, there's probably a good reason. Just go in with open eyes.

---

## What You're Building: A Voltage System

**Here's the conceptual foundation:** Modular synthesis is the art of moving voltage from one place to another and changing what that voltage does along the way.

**Everything in your system is voltage.** Not metaphorically. Literally. 

- **Sound** is voltage oscillating at audio rate (very fast—20 to 20,000 times per second)
- **Pitch information** is voltage (1V = one octave higher)
- **Timing information** is voltage (5V = "gate is on," 0V = "gate is off")
- **Brightness/darkness of tone** is voltage (applied to filter cutoff)
- **Loudness** is voltage (applied to a VCA)
- **Movement and modulation** are voltage (changing over time)

Every jack you see is a point where voltage flows. Modules **generate** voltage (oscillators create sound-voltage), **process** voltage (filters shape voltage into different timbral characters), or **apply** voltage to control other modules (envelopes generate time-based voltage, sequencers generate pitch voltage).

**Your system is a voltage router.** Your case is the container. The power supply generates the DC voltage rails (+12V, -12V, +5V) that keep everything alive. Patch cables carry voltage between jacks. Modules shape and direct that voltage flow.

**Why this matters conceptually:** Once you stop thinking "oscillator makes sound" and start thinking "oscillator generates voltage that becomes sound," everything becomes flexible. The same voltage can:
- Go to a speaker (becomes sound)
- Go to a filter (gets processed)
- Go to a VCA (gets gated)
- Go to another oscillator's FM input (modulates pitch)
- Go anywhere, depending on where you patch it

**This is modular's core insight:** Voltage is portable, patchable, and modifiable. You're not rearranging hardware connections—you're rerouting voltage flow. That's why the system is infinitely flexible and why it matters to understand voltage as the fundamental concept.

This might sound abstract now. It will become concrete in the guides. For now, hold this: everything you're about to buy is part of a voltage-moving system. The case houses it. The power supply generates the voltages. The patch cables carry them. The modules shape them. You're building an instrument for moving voltage, not pressing buttons.

---

## Infrastructure You Actually Need

Before you buy a single module, you need infrastructure to power, house, and connect everything. These costs are often overlooked.

### Power and Housing

**What you need:** A case with integrated power supply, or a powered rack/enclosure system.

Modules operate on DC voltage provided by the case's power supply. Standard rails are +12V, -12V, and sometimes +5V. Modules connect to these power rails via ribbon cables on the back. Cases provide both physical housing and the power distribution system (called a "bus board" or "flying bus").

**Current and voltage:** Your case provides voltage (+12V, -12V, etc.), but that voltage needs current to flow through modules. Each module draws a certain amount of current (measured in milliamps, mA) from each rail. Your case's power supply has a maximum current capacity. If your modules draw more current than the supply can provide, voltage droops, and your system becomes unstable (tuning drifts, clicks appear, modules reset).

**Budget options:**
- **Doepfer A-100 cases** - reliable, utilitarian German engineering (around $300-600 depending on size)
- **Tiptop Audio Happy Ending Kit** - 84HP powered skiff, compact starter (around $150-200)
- **4ms Pod** series - portable powered cases, well-regarded (starting around $200)

**Mid-range options:**
- **Intellijel Palette/Performance cases** - excellent build quality, integrated utilities (around $400-800)
- **Make Noise CV Bus Case** - 104HP with power, designed for their ecosystem (around $400)

**Higher-end options:**
- **TipTop Mantis** - 208HP, excellent power, great value at its price (around $335)
- **Intellijel 7U Performance Case** - 104HP plus 1U row, professional build (around $700-900)

**DIY option:** Build your own case (wood, metal, or 3D printed) and add a power supply like 4ms Row Power (around $100-150) or Befaco Excalibus (around $140). Requires appropriate fabrication skills and comfort with power distribution.

**Critical specs to check:**
- **HP (horizontal pitch):** Module width measurement. 3HP = about 15mm wide. A "104HP case" holds 104HP worth of modules.
- **Power capacity:** Measured in milliamps (mA) per rail (+12V, -12V, +5V). Check your case can power your planned modules. Running out of current halfway through a build is frustrating and expensive. Track what your modules draw and make sure it doesn't exceed your power supply's capacity.

### Cables

**Patch cables:** You need 3.5mm (TS) mono cables, often called "eurorack patch cables." Start with 20-30 cables in varying lengths (6", 12", 24"). Budget $20-50 for a starter pack. You'll accumulate hundreds eventually.

**Power cables (ribbon cables):** Come with modules. These are flat ribbon cables that connect from the module's power header to the case's bus board (power distribution). Sometimes called "eurorack power cables" or just "power ribbons." Keep spares—they fail occasionally. Different modules use different ribbon cable styles (16-pin, 10-pin, etc.), so you may need adapters or different cables as your system grows.

**Avoid:** Using audio cables (TRS—the ones with three rings) for CV/gate won't damage anything, but can create ground loops. Stick with TS mono cables (two rings) for patch cables.

### Audio Output

**You need something to hear your modular.** Eurorack operates at "modular level" (roughly -5V to +10V), which is significantly hotter than "line level" audio equipment expects. Plugging modular directly into consumer gear can damage speakers or sound terrible.

**Options:**

**Direct to mixer/interface with attenuation:**
- Use an attenuating output module like **Intellijel Outs** (around $80), **ALM Busy Circuits S.B.G.** (around $50), or **Erica Synths Black Output** (around $100)
- These bring modular signal voltage down to line level safely

**Dedicated modular output module:**
- Many modern audio interfaces handle modular levels fine—check specs
- Expert Sleepers ES-8/ES-9 provide computer I/O plus DC-coupled outputs for CV
- Some mixers (like Bastl Instruments Ciao! or WMD Performance Mixer) include proper output sections

**Minimum setup:** One output module (like Intellijel Outs or ALM S.B.G.) to bring modular voltage down to line level, plus whatever audio interface/mixer you already own.

**Better setup:** Dedicated small mixer for modular (Erica Synths Pico Mix, Intellijel Mixup), then feed that to your main interface. Gives you more control over levels and voltage mixing within the modular before it hits your recorder.

### Optional But Extremely Helpful

**Multimeter:** A basic digital multimeter ($20-40) helps troubleshoot power issues, check cable continuity, and verify voltage levels at jacks. Not mandatory day one, but you'll want one eventually.

**CV/Signal visualization:** Modules like **Mordax Data** (around $300) or **Joranalogue Select 2** (around $300) let you see waveforms and voltage behavior. This accelerates learning dramatically—seeing what voltage is doing helps understanding happen much faster. Not essential for beginners, but transformative if budget allows.

**Notebook and camera:** Document patches. Take photos of interesting patches before tearing them down. Keep a notebook of ideas, problems solved, things to try. Low-tech but invaluable.

---

## What "Eurorack" Actually Means

Eurorack is a **modular synthesizer format standard** developed by Doepfer in the mid-1990s. Understanding the standards helps you make informed choices.

### Physical Standards

**3U height:** Modules are 3 rack units tall (about 5.25 inches / 133.4mm). Some manufacturers make 1U rows (Intellijel, Pulp Logic) for utilities, but 3U is the dominant standard.

**HP width:** Modules are measured in "horizontal pitch" units. 1HP = 0.2 inches / 5.08mm. An 8HP module is about 1.6 inches wide. Cases are commonly 84HP, 104HP, 140HP, and 168HP for single rows, or 208HP and 280HP configured as dual rows.

**Depth:** No standard—check your case depth against module depth specs. Some modules are shallow (25mm), others deep (65mm+). Ribbon cables on the back add depth. Doepfer cases are typically 150mm internal depth, which fits almost everything.

### Electrical Standards

**CV (Control Voltage):** The standard voltage language for modular pitch control is 1 volt per octave. 0V = C0, 1V = C1, 2V = C2, etc. Most modules follow this standard, but verify—especially with vintage or DIY gear. This voltage type is unipolar (positive-going) and carries pitch information.

**Gate signals:** Usually 0V (off) to +5V or +10V (on). Triggers are brief pulses; gates are sustained. These tell envelopes when to fire, VCAs when to open, sequencers when to advance. This voltage type is unipolar and carries timing information.

**Audio signals:** Typically -5V to +5V for standard modules, but some modules (especially oscillators and filters) can output hotter signals approaching +10V. This voltage type is bipolar (swinging between positive and negative) and carries the actual sound information. Just watch your levels going to external gear.

**Power rails:** +12V, -12V rails are standard. Some modules also use +5V (digital modules, often). Each rail has a maximum current capacity (measured in milliamps). Know your case's available power per rail and your modules' current draw per rail.

### Why Standards Matter

They ensure modules from different manufacturers work together. You can mix a Make Noise oscillator, a Mutable Instruments filter, an Intellijel VCA, and a Doepfer envelope without compatibility issues. That's the beauty of the format. It's all using the same voltage standards.

### Voltage Standards vs. Module Language (A Critical Distinction)

**Here's where beginners often get confused:** The voltage standards are consistent. But how manufacturers label their jacks and describe their inputs varies wildly.

**Example: Pitch CV on oscillators**

All oscillators respond to the same 1V/octave pitch voltage standard. But you'll see the pitch input labeled differently on different modules:
- **V/O** (Make Noise, some others)
- **1V/O** (Doepfer, Intellijel)
- **V/Oct** (Mutable, some Erica modules)
- **1V/Oct** (other modules)
- **Pitch** (some simpler modules)
- **Hz/V** (older analog modules—this one is actually different, so check!)

**They all accept the same voltage information.** 1V = one octave higher. But the manufacturer chose different names. This is frustrating but standard in the industry.

**Other examples of naming variance:**

- **Gate vs. Trigger:** Some modules say "Gate In," others say "Trigger In." Technically triggers are brief pulses while gates sustain, but many manufacturers use the terms interchangeably.
- **CV In vs. Mod In:** Control voltage input might be labeled "CV In," "Mod In," "Control," or "Modulation." Same thing, different name.
- **Cutoff vs. Frequency:** Filter frequency/brightness control might be called "Cutoff," "Freq," "F," "Frequency," or "Drive." 

**Why this matters:** When you're reading a module's manual or looking at a patch diagram, the specific label doesn't matter as much as understanding what voltage type it expects. If it says "1V/Oct" or "V/Oct" or "Pitch," it wants standard pitch CV. If it says "Gate" or "Trigger," it wants a timing signal. Once you learn the underlying voltage concepts, the labeling differences become minor obstacles, not roadblocks.

**Pro tip for beginners:** When buying used gear or new modules, always check what type of voltage each jack expects. Some modules (especially vintage gear) might use different standards than the modern eurorack 1V/Oct norm. Check the manual or ask the seller before patching.

---

## Understanding Signal Flow Categories

Before buying specific modules, understand what **functions** a musical system requires. Every synthesizer—hardware, software, modular, or otherwise—needs these categories working together.

**In voltage terms:** Everything in your system is a processor of voltage. Sound sources generate voltage. Modifiers process it. Controllers apply it to control other modules. The magic is routing—deciding where voltage comes from and where it goes.

### Sound Sources (Oscillators, Noise, Samples)

**What they do:** Generate voltage (especially audio-rate voltage that becomes sound). Voltage-controlled oscillators (VCOs) produce waveforms—sine, triangle, sawtooth, square, etc. Noise generators create white/pink noise. Sample players trigger audio files.

**Examples:**
- Budget: **Doepfer A-110-1 Basic VCO** (around $120)
- Mid: **Mutable Instruments Plaits** (around $230) - 16 synthesis methods in one module
- Fancy: **Make Noise DPO** (around $650) - complex analog dual oscillator

**You need at least one source** to generate voltage. Most systems have 2-4 oscillators for variety and polyphony.

### Sound Modifiers (Filters, Waveshapers, Effects)

**What they do:** Process voltage (especially audio voltage) to change its character. Voltage-controlled filters (VCFs) remove frequencies based on incoming control voltage. Waveshapers add harmonics. Effects modules process audio voltage (reverb, delay, distortion, etc.).

**Examples:**
- Budget: **Doepfer A-120 Moog Ladder Filter** (around $130)
- Mid: **Erica Synths Black Polivoks VCF** (around $240) - aggressive Russian filter design
- Fancy: **Rossum Electro-Music Evolution** (around $500) - stereo programmable filter

**Filters are highly recommended.** Raw oscillator voltage sounds thin without processing. Filters shape voltage into richer tones.

### Amplitude Control (VCAs, Mixers)

**What they do:** Gate audio voltage and control mixing. Voltage-controlled amplifiers (VCAs) turn signals up or down based on CV input. Mixers combine multiple voltage sources into one output.

**Examples:**
- Budget: **Doepfer A-130-2 Dual Linear VCA** (around $75)
- Mid: **Erica Synths Black Quad VCA2** (around $280) - four VCAs with mixing
- Fancy: **Mutable Instruments Veils** (around $200) - quad VCA with multiple topologies

**Absolutely essential.** Without VCAs, everything is at full volume all the time. VCAs let you apply control voltage to gate audio voltage—that's how you create rhythmic articulation and dynamic expression.

### Modulators (Envelopes, LFOs, Random Sources)

**What they do:** Generate control-rate voltage to animate parameters. Envelope generators create time-based voltage contours. LFOs produce repeating oscillating voltage. Random sources generate unpredictable voltage.

**Examples:**
- Budget: **Doepfer A-140 ADSR** (around $90)
- Mid: **Maths by Make Noise** (around $280) - dual function generator, extremely flexible
- Fancy: **Xaoc Devices Zadar** (around $310) - quad envelope with extensive features

**Critical for expression.** Modulation (sending control voltage to shape other modules) is what makes modular interesting. A static voltage creates static sound. Envelopes create time-based voltage changes. LFOs create repeating voltage changes. Random sources create evolving voltage changes.

### Sequencers and Controllers

**What they do:** Generate control voltage and gates to drive other modules. Sequencers create voltage patterns (pitch and rhythm). Keyboard/grid controllers let you play pitch CV. Utility controllers generate custom control voltage.

**Examples:**
- Budget: **2hp TM** (around $120) - Turing Machine, generative sequences
- Mid: **Squarp Hermod+** (around $600) - powerful multitrack sequencer
- Fancy: **Make Noise Rene 2** (around $600) - Cartesian sequencer, deep programming

**Not day-one essential** if you're using external MIDI gear. But sequencers unlock compositional possibilities modular excels at.

### Utilities (Multiples, Attenuators, Logic, Switches)

**What they do:** Route and process control voltage. Multiples split voltage to multiple destinations. Attenuators reduce voltage amplitude. Logic modules create conditional triggers. Switches route voltage selectively.

**Examples:**
- Budget: **Doepfer A-138 Mixer** (around $60), **Intellijel Mult** (around $30)
- Mid: **Happy Nerding 3xMIA** (around $130) - three-channel mixer/attenuator/inverter
- Fancy: **Mutable Instruments Kinks** (around $100, discontinued) - multi-function utility

**Often overlooked by beginners.** You'll need utilities sooner than you think. A simple passive multiple costs $20-30 and saves endless repatching frustration.

### How These Connect (The Voltage Journey)

A minimal musical signal flow:
1. **Oscillator** generates audio voltage
2. **Envelope** generates control voltage shaped over time
3. **VCA** gates audio voltage based on control voltage
4. **Output module** brings voltage to speaker level

A more complex flow adds:
- **Filter** receives audio voltage, processes based on control voltage (from envelope or LFO)
- **LFO** generates modulating control voltage, shapes filter or oscillator
- **Sequencer** sends pitch control voltage to oscillator and gate voltage to envelopes
- **Effects** receive audio voltage, process it, return it

**Everything connects.** Understanding these categories and how voltage flows between them helps you identify gaps in your system and make informed purchasing decisions.

---

## Common Pitfalls

People make predictable mistakes when starting modular. Here's what to avoid.

### Buying the Sexy Module First

**The trap:** You see a beautiful complex module in a video—some programmable effects processor or intricate sequencer—and buy it first because it's impressive.

**The problem:** Complex modules assume you have a functional system already. That gorgeous reverb needs audio voltage to process. That intricate sequencer needs oscillators to control.

**The fix:** Build the boring foundation first. Get oscillators, envelopes, VCAs working together. Add the sexy stuff once you have voltage sources to route through it.

### Skipping VCAs

**The trap:** "Do I really need VCAs? The oscillator makes sound without them."

**The problem:** Yes, it does—at full blast, constantly. Without VCAs controlled by envelopes, you can't create rhythmic note articulation or dynamic expression. Everything is a drone. The control voltage from your envelope has nowhere to apply itself.

**The fix:** Budget for at least 2-4 VCA channels in your initial system. You need one VCA per voice minimum, and more for modulation routing.

### Insufficient Modulation Sources

**The trap:** Buying one envelope generator thinking "that's enough."

**The problem:** You need at least two envelopes per voice—one for amplitude (applied via VCA), another for filter or oscillator modulation. Add LFOs for ongoing movement. One control voltage source is rarely sufficient.

**The fix:** Plan for 2-3 envelopes minimum. Modules like Maths provide two function generators. Budget accordingly.

### Ignoring HP and Power

**The trap:** Buying modules you love without checking if they fit your case or if your power supply can handle them.

**The problem:** You run out of space, or worse, you exceed your power supply's current capacity and voltage droops (which creates tuning instability, clicks, crashes, or damage).

**The fix:** Track HP carefully. Use ModularGrid.com to plan your case virtually—it calculates HP and current draw automatically. Know your case's limits before buying.

### No Plan for Utilities

**The trap:** Filling your case with exciting oscillators, filters, and effects, leaving no room for multiples, mixers, or attenuators.

**The problem:** You can't route voltage efficiently. You need to split one LFO's control voltage to three destinations, but you have no multiple. You want to reduce a modulation voltage's amount, but you have no attenuator.

**The fix:** Reserve 15-20% of your HP for utilities from the start. They're small, cheap, and essential. Don't overlook them.

### Buying for Resale Value

**The trap:** Purchasing modules because they hold value or are "collectible" rather than because they fit your musical needs.

**The problem:** You end up with a dysfunctional system that looks good on paper but doesn't inspire you musically. Resale value means nothing if you never use it.

**The fix:** Buy for your workflow and sound. Modular is expensive—make every HP count toward what you actually want to create.

### Analysis Paralysis

**The trap:** Spending months researching every option, reading every forum post, watching every comparison video, never pulling the trigger.

**The problem:** You never start. Perfect is the enemy of good. Nearly any beginner system teaches valuable lessons, even if you'd make different choices six months later.

**The fix:** Make informed decisions, then commit. You'll expand and modify your system as you learn. No first system is perfect, and that's fine.

---

## Buying Used: What to Look For

The used market offers significant savings—30-50% off retail is common. But buying secondhand requires care.

### Where to Buy Used

**Reputable platforms:**
- **Reverb.com** - buyer protection, seller ratings, good search tools
- **ModularGrid marketplace** - modular-specific, community-driven
- **Muffwiggler/ModWiggler forum** - long-standing community, knowledgeable sellers

**Local options:**
- Craigslist/Facebook Marketplace - no buyer protection, but you can inspect in person
- Local synth shops with used sections

**Avoid:** Random eBay auctions without detailed photos, sellers with no feedback history, listings with vague descriptions like "worked when I last used it."

### What to Check

**Complete module:** Verify it includes power cable, mounting screws, and any essential accessories (faceplates, expanders). Some modules need specific power cables—missing them is expensive.

**Physical condition:** Scratches on faceplates are cosmetic. Bent jacks, loose potentiometers, or cracked panels indicate rough handling. Avoid modules with obvious signs of liquid damage or corrosion.

**Functionality claims:** Ask if all jacks and knobs work. Request a video of the module powered and demonstrating core functions if buying remotely. Sellers willing to show functionality are usually trustworthy.

**Firmware version:** Digital modules have firmware. Ask what version is installed. Some older firmware versions have bugs or lack features. Check the manufacturer's site to see if updates are available and if updating requires special hardware.

**Discontinued modules:** Some classics (Mutable Instruments Rings, Clouds, etc.) command high used prices because they're discontinued. Verify you're not paying above original retail for hype. Sometimes clones or successors offer better value.

**DIY modules:** Many people build DIY kits. Quality varies wildly. Ask about builder experience, calibration, and whether they used the official PCBs or community designs. DIY can offer great value, but you assume some risk.

### Red Flags

- "I don't have a case to test it" - Pass. Untested modules are gambles.
- "Sold as-is, no returns" without detailed photos/videos - Risky.
- Price too good to be true - Probably is. Scams exist.
- Poor communication from seller - If they're vague or slow to respond, walk away.

### Reasonable Expectations

Used modules should work perfectly. Minor cosmetic wear is acceptable at reduced prices. Expect 25-40% off retail for good condition used gear, more if it's older or heavily used.

Always use payment methods with buyer protection (PayPal Goods & Services, credit cards). Never wire transfer or send cash to strangers.

---

## What Comes Next

You've got the prerequisites covered. You understand the costs, infrastructure needs, common mistakes, and voltage fundamentals. You know what function categories exist and how they move and control voltage.

**Next guide:** 01_making_sound.md - Building your first minimal functional patch (oscillator → envelope → VCA). The absolute smallest system that generates and controls voltage musically, not just noise.

These guides build progressively. Each adds capability. Start with the foundation, grow thoughtfully.

**Remember:** Modular rewards patience and curiosity. The learning curve is steep, but the summit offers sonic territory nothing else reaches. Welcome to the journey.

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For questions about specific modules or troubleshooting, see the instrument-specific guides in the parent directory.*