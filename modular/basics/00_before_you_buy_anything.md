# Before You Buy Anything

**Read this first. Seriously.**

You've seen the videos. You've heard the sounds. You want a modular synthesizer. That's great—modular is incredibly rewarding. But it's also expensive, complex, and unforgiving of certain mistakes.

This guide exists because the forum posts are full of people asking "I bought a Maths, now what?" or "Do I really need VCAs?" or "What's the smallest complete system?" These are good questions, but they suggest someone started buying modules before understanding what makes a functional system.

**This is your reality check and prerequisite guide.**

---

## The Reality Check

### What You're Getting Into

**Financial commitment:** A minimal functional system costs $800-2000 USD/EUR depending on choices. A serious performance system runs $3000-8000+. Individual modules range from $50 (utilities) to $600+ (complex multifunction modules). This adds up fast.

**Learning curve:** Modular synthesis is a instrument, not a tool. You don't "learn it in a weekend." Expect months of exploration before you're comfortable, and years before you master it. That's not discouraging—it's realistic. The depth is what makes it rewarding.

**Space and portability:** Even a small system occupies significant desk space. A 104HP row (about 21 inches wide) is considered "small." Cases are heavy. Travel requires careful planning. This isn't a laptop you toss in a bag.

**No presets:** Every sound requires patching from scratch. There's no "save" button in hardware modular. Some modules offer preset recall, but the vast majority don't. You document patches with photos, videos, or drawings. This is feature, not bug—it forces understanding.

**Ongoing expansion:** You will buy more modules. Everyone does. The system grows as your understanding grows. Budget accordingly.

### Why Do This Anyway?

**Because nothing else sounds like it.** Modular offers sonic territories that fixed-architecture synthesizers can't reach. The tactile, hands-on control creates sounds you wouldn't discover through mouse clicks. The lack of presets forces experimentation. The modular community is welcoming and generous with knowledge.

If you're drawn to it, there's probably a good reason. Just go in with open eyes.

---

## Infrastructure You Actually Need

Before you buy a single module, you need infrastructure to power, house, and connect everything. These costs are often overlooked.

### Power and Housing

**What you need:** A case with integrated power supply, or a powered rack/enclosure system.

Modules draw DC power (+12V, -12V, and sometimes +5V). They connect to power via ribbon cables on the back. Cases provide both physical housing and the power distribution system (called a "bus board" or "flying bus").

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
- **Power capacity:** Measure in milliamps (mA) per rail (+12V, -12V, +5V). Check your case can power your planned modules. Running out of power halfway through a build is frustrating and expensive.

### Cables

**Patch cables:** You need 3.5mm (TS) mono cables, often called "eurorack patch cables." Start with 20-30 cables in varying lengths (6", 12", 24"). Budget $20-50 for a starter pack. You'll accumulate hundreds eventually.

**Power cables:** Come with modules (ribbon cables, sometimes called "eurorack power cables"). Keep spares. They fail occasionally.

**Avoid:** Using audio cables (TRS) for CV/gate won't damage anything, but can create ground loops. Stick with TS mono cables.

### Audio Output

**You need something to hear your modular.** Eurorack operates at "modular level" (roughly -5V to +10V), which is significantly hotter than "line level" audio equipment expects. Plugging modular directly into consumer gear can damage speakers or sound terrible.

**Options:**

**Direct to mixer/interface with attenuation:**
- Use an attenuating output module like **Intellijel Outs** (around $80), **ALM Busy Circuits S.B.G.** (around $50), or **Erica Synths Black Output** (around $100)
- These bring modular signals down to line level safely

**Dedicated modular output module:**
- Many modern audio interfaces handle modular levels fine—check specs
- Expert Sleepers ES-8/ES-9 provide computer I/O plus DC-coupled outputs for CV
- Some mixers (like Bastl Instruments Ciao! or WMD Performance Mixer) include proper output sections

**Minimum setup:** One output module or attenuator cable, plus whatever audio interface/mixer you already own.

**Better setup:** Dedicated small mixer for modular (Erica Synths Pico Mix, Intellijel Mixup), then feed that to your main interface. Gives you more control over levels and mixing within the modular before it hits your recorder.

### Optional But Extremely Helpful

**Multimeter:** A basic digital multimeter ($20-40) helps troubleshoot power issues, check cable continuity, and verify CV voltages. Not mandatory day one, but you'll want one eventually.

**CV/Signal visualization:** Modules like **Mordax Data** (around $300) or **Joranalogue Select 2** (around $300) let you see waveforms and voltages. This accelerates learning dramatically—seeing what modulation is doing helps understanding click much faster. Not essential for beginners, but transformative if budget allows.

**Notebook and camera:** Document patches. Take photos of interesting patches before tearing them down. Keep a notebook of ideas, problems solved, things to try. Low-tech but invaluable.

---

## What "Eurorack" Actually Means

Eurorack is a **modular synthesizer format standard** developed by Doepfer in the mid-1990s. Understanding the standards helps you make informed choices.

### Physical Standards

**3U height:** Modules are 3 rack units tall (about 5.25 inches / 133.4mm). Some manufacturers make 1U rows (Intellijel, Pulp Logic) for utilities, but 3U is the dominant standard.

**HP width:** Modules are measured in "horizontal pitch" units. 1HP = 0.2 inches / 5.08mm. An 8HP module is about 1.6 inches wide. Cases are commonly 84HP, 104HP, 140HP, and 168HP for single rows, or 208HP and 280HP configured as dual rows.

**Depth:** No standard—check your case depth against module depth specs. Some modules are shallow (25mm), others deep (65mm+). Ribbon cables on the back add depth. Doepfer cases are typically 150mm internal depth, which fits almost everything.

### Electrical Standards

**CV (Control Voltage):** 1 volt per octave is the musical pitch standard. 0V = C0, 1V = C1, 2V = C2, etc. Most modules follow this, but verify—especially with vintage or DIY gear.

**Gate signals:** Usually 0V (off) to +5V or +10V (on). Triggers are brief pulses; gates are sustained. These tell envelopes when to fire, VCAs when to open, sequencers when to advance.

**Audio signals:** Typically -5V to +5V for standard modules, but some modules (especially oscillators and filters) can output hotter signals approaching +10V. This is normal—just watch your levels going to external gear.

**Power:** +12V, -12V rails are standard. Some modules also use +5V (digital modules, often). Current draw matters—know your case's available power and your modules' requirements.

### Why Standards Matter

They ensure modules from different manufacturers work together. You can mix a Make Noise oscillator, a Mutable Instruments filter, an Intellijel VCA, and a Doepfer envelope without compatibility issues. That's the beauty of the format.

---

## Understanding Signal Flow Categories

Before buying specific modules, understand what **functions** a musical system requires. Every synthesizer—hardware, software, modular, or otherwise—needs these categories working together.

### Sound Sources (Oscillators, Noise, Samples)

**What they do:** Generate the raw audio signal. Voltage-controlled oscillators (VCOs) produce waveforms—sine, triangle, sawtooth, square, etc. Noise generators create white/pink noise. Sample players trigger audio files.

**Examples:**
- Budget: **Doepfer A-110-1 Basic VCO** (around $120)
- Mid: **Mutable Instruments Plaits** (around $230) - 16 synthesis methods in one module
- Fancy: **Make Noise DPO** (around $650) - complex analog dual oscillator

**You need at least one source** to make sound. Most systems have 2-4 oscillators for variety and polyphony.

### Sound Modifiers (Filters, Waveshapers, Effects)

**What they do:** Change the timbre of sources. Voltage-controlled filters (VCFs) remove frequencies—lowpass, highpass, bandpass, etc. Waveshapers add harmonics. Effects modules add reverb, delay, distortion.

**Examples:**
- Budget: **Doepfer A-120 Moog Ladder Filter** (around $130)
- Mid: **Erica Synths Black Polivoks VCF** (around $240) - aggressive Russian filter design
- Fancy: **Rossum Electro-Music Evolution** (around $500) - stereo programmable filter

**Optional but highly recommended.** Filters shape character. Raw oscillators sound thin without them.

### Amplitude Control (VCAs, Mixers)

**What they do:** Control volume and routing. Voltage-controlled amplifiers (VCAs) turn signals up or down based on CV input. Mixers combine multiple signals into one output.

**Examples:**
- Budget: **Doepfer A-130-2 Dual Linear VCA** (around $75)
- Mid: **Erica Synths Black Quad VCA2** (around $280) - four VCAs with mixing
- Fancy: **Mutable Instruments Veils** (around $200) - quad VCA with multiple topologies

**Absolutely essential.** Without VCAs, everything is at full volume all the time. Unmusical. VCAs let envelopes shape amplitude over time—that's how you get rhythmic note articulation.

### Modulators (Envelopes, LFOs, Random Sources)

**What they do:** Generate control voltages to animate parameters. Envelope generators (EGs) create time-based contours—attack, decay, sustain, release. Low-frequency oscillators (LFOs) produce repeating modulation. Random sources add unpredictability.

**Examples:**
- Budget: **Doepfer A-140 ADSR** (around $90)
- Mid: **Maths by Make Noise** (around $280) - dual function generator, extremely flexible
- Fancy: **Xaoc Devices Zadar** (around $310) - quad envelope with extensive features

**Critical for expression.** Modulation is what makes modular interesting. A static sound is boring. Envelopes make notes start and stop musically. LFOs add movement. Random sources create evolving textures.

### Sequencers and Controllers

**What they do:** Generate note patterns, trigger events, provide hands-on control. Sequencers create melodies or rhythmic triggers. Keyboard/grid controllers let you play pitch CV. Utility controllers (knobs, faders) give manual CV adjustment.

**Examples:**
- Budget: **2hp TM** (around $120) - Turing Machine, generative sequences
- Mid: **Squarp Hermod+** (around $600) - powerful multitrack sequencer
- Fancy: **Make Noise Rene 2** (around $600) - Cartesian sequencer, deep programming

**Not day-one essential** if you're using external MIDI gear or just exploring sounds manually. But sequencers unlock compositional possibilities modular excels at.

### Utilities (Multiples, Attenuators, Logic, Switches)

**What they do:** Routing, signal processing, logic operations. Multiples split one signal to many destinations. Attenuators reduce CV amount. Logic modules create conditional triggers. Switches route signals.

**Examples:**
- Budget: **Doepfer A-138 Mixer** (around $60), **Intellijel Mult** (around $30)
- Mid: **Happy Nerding 3xMIA** (around $130) - three-channel mixer/attenuator/inverter
- Fancy: **Mutable Instruments Kinks** (around $100, discontinued) - multi-function utility

**Often overlooked by beginners.** You'll need utilities sooner than you think. A simple passive multiple costs $20-30 and saves endless repatching frustration.

### How These Connect

A minimal musical signal flow:
1. **Oscillator** generates audio
2. **Envelope** shapes amplitude contour (ADSR)
3. **VCA** applies that envelope to the oscillator's output
4. **Output module** attenuates signal for your mixer

A more complex flow adds:
- **Filter** between oscillator and VCA (shaped by second envelope or LFO)
- **LFO** modulating filter cutoff frequency
- **Sequencer** sending pitch CV to oscillator and gate to envelopes
- **Effects** after VCA for space and texture

**Everything connects.** Understanding these categories helps you identify gaps in your system and make informed purchasing decisions.

---

## Common Pitfalls

People make predictable mistakes when starting modular. Here's what to avoid.

### Buying the Sexy Module First

**The trap:** You see a beautiful complex module in a video—some programmable effects processor or intricate sequencer—and buy it first because it's impressive.

**The problem:** Complex modules assume you have a functional system already. That gorgeous reverb needs audio to process. That intricate sequencer needs oscillators to control.

**The fix:** Build the boring foundation first. Get oscillators, envelopes, VCAs working together. Add the sexy stuff once you have sound sources to route through it.

### Skipping VCAs

**The trap:** "Do I really need VCAs? The oscillator makes sound without them."

**The problem:** Yes, it does—at full blast, constantly. Without VCAs controlled by envelopes, you can't create rhythmic note articulation or dynamic expression. Everything is a drone.

**The fix:** Budget for at least 2-4 VCA channels in your initial system. You need one VCA per voice minimum, and more for modulation routing.

### Insufficient Modulation Sources

**The trap:** Buying one envelope generator thinking "that's enough."

**The problem:** You need at least two envelopes per voice—one for amplitude (through VCA), another for filter or oscillator modulation. Add LFOs for ongoing movement. One envelope is rarely sufficient.

**The fix:** Plan for 2-3 envelopes minimum. Modules like Maths provide two function generators. Budget accordingly.

### Ignoring HP and Power

**The trap:** Buying modules you love without checking if they fit your case or if your power supply can handle them.

**The problem:** You run out of space, or worse, you exceed your power supply's capacity and cause voltage droop (which creates tuning instability, crashes, or damage).

**The fix:** Track HP carefully. Use ModularGrid.com to plan your case virtually—it calculates HP and power automatically. Know your case's limits before buying.

### No Plan for Utilities

**The trap:** Filling your case with exciting oscillators, filters, and effects, leaving no room for multiples, mixers, or attenuators.

**The problem:** You can't route signals efficiently. You need to split one LFO to three destinations, but you have no multiple. You want to reduce a modulation amount, but you have no attenuator.

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

You've got the prerequisites covered. You understand the costs, infrastructure needs, and common mistakes. You know what function categories exist and how they connect.

**Next guide:** 01_making_sound.md - Building your first minimal functional patch (oscillator + envelope + VCA). The absolute smallest system that makes musical sound, not just noise.

These guides build progressively. Each adds capability. Start with the foundation, grow thoughtfully.

**Remember:** Modular rewards patience and curiosity. The learning curve is steep, but the summit offers sonic territory nothing else reaches. Welcome to the journey.

---

*This guide is part of a progressive series helping beginners build foundational modular understanding. For questions about specific modules or troubleshooting, see the instrument-specific guides in the parent directory.*