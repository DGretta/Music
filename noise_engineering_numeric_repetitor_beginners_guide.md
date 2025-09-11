# Noise Engineering Numeric Repetitor - Beginner's Guide

**The Mathematical Rhythm Generator**

---

## Quick Start: Get Your First Prime Rhythm in 5 Minutes

**What is Numeric Repetitor?** Think of it as a rhythm generator that uses mathematics rather than traditional step sequencing. It creates gate patterns based on binary arithmetic and prime number theory - but don't worry, you don't need to understand the math to use it! It contains 32 carefully curated "prime rhythms" that sound good, and generates variations by multiplying these patterns as binary numbers. It's perfect for creating complex polyrhythms with simple controls.

### Your First Mathematical Beat
1. **Connect your master clock** → **BEAT input**
2. **Connect PRIME output** → **kick drum or main percussion**
3. **Turn PRIME knob** slowly and listen to different rhythmic patterns
4. **Try the X/Y switch** to access the second set of 16 patterns
5. **Connect PRODUCT 1 output** → **second percussion voice**
6. **Turn PRODUCT 1 knob** to create rhythmic variations

**Congratulations!** You've just created polyrhythmic patterns using mathematical principles!

---

## Essential Parameters (The Mathematical Controls)

### **1. PRIME Pattern Selection**
- **PRIME knob:** Selects one of 16 core rhythmic patterns
- **X/Y switch:** Toggles between two sets of 16 patterns (32 total)
- **Prime rhythms:** Mathematically derived patterns that sound good
- **PRIME output:** The core rhythm - your foundational pattern
- **CV controllable:** Sequence through different prime patterns
- **16 per side:** X and Y each contain 16 different prime rhythms

### **2. PRODUCT Outputs - The Variations**
- **Three PRODUCT outputs:** Mathematically generated variations of the prime pattern
- **PRODUCT 1, 2, 3 knobs:** Control "factor offset" - how much variation from prime
- **Binary multiplication:** Prime pattern multiplied by factor creates variations
- **Time offset:** Product knobs control timing offset relative to prime
- **Related rhythms:** All products are mathematically related to the prime
- **CV controllable:** Each product can be modulated independently

### **3. Beat and Timing Controls**
- **BEAT input:** Master clock input - drives the entire system
- **MEASURE input:** Reset to beginning of measure for sync with other modules
- **RST button:** Manual reset and pause - hold to pause, release to reset
- **Clock-driven:** Requires external clock source to function
- **Rising edge:** Advances time on clock rising edge
- **Falling edge:** Returns gates to zero on clock falling edge

### **4. The Mathematical Engine**
- **Binary representation:** Rhythms stored as binary numbers
- **Prime number theory:** 32 patterns chosen using mathematical principles  
- **Heuristic filtering:** "Bad" rhythms removed through listening tests
- **Multiplication algorithm:** Prime × Factor = Product rhythm
- **Time offset calculation:** Mathematical delay creates polyrhythmic effects
- **You don't need to understand:** The math works behind the scenes

### **5. Visual Feedback System**
- **LEDs for each output:** Show when gates are active
- **Real-time visualization:** See the rhythmic relationships
- **Prime LED:** Shows the core pattern timing
- **Product LEDs:** Show variation timings relative to prime
- **Pattern recognition:** Visual aids help understand mathematical relationships

### **6. CV Integration**
- **Prime CV input:** Sequence through different core patterns
- **Product CV inputs:** Modulate the variation amounts/timing
- **7V CV range:** Full voltage range for complete pattern access
- **Real-time control:** Change patterns and variations during performance
- **Modulation friendly:** All parameters respond well to slow CV changes

---

## Beginner Patch Ideas

### **Patch 1: Basic Polyrhythmic Drums**
```
[Master Clock] ──→ [Numeric Repetitor BEAT]
[Prime out] ──→ [Kick Drum]
[Product 1 out] ──→ [Snare Drum]  
[Product 2 out] ──→ [Hi-hat]
```
**Setup:** Choose prime pattern, adjust Product knobs for different variations
**Result:** Three-part drum pattern with mathematical relationships
**Performance:** Change prime pattern for instant rhythm variations
**Tip:** Start with small Product knob movements for subtle variations

### **Patch 2: Sequenced Pattern Changes**
```
[Master Clock] ──→ [Numeric Repetitor BEAT]
[Slow CV sequencer] ──→ [PRIME CV input]
[Prime out] ──→ [Bass drum trigger]
[Product outputs] ──→ [Various percussion]
```
**Setup:** Sequence slowly through different prime patterns
**Result:** Automatic rhythm evolution through mathematical patterns
**Timing:** Use very slow sequencer (1/16 or 1/32 speed) for gradual changes
**Creative:** Try random CV for unpredictable but musical rhythm changes

### **Patch 3: Techno Groove Generator**
```
[Fast Clock] ──→ [Numeric Repetitor BEAT]
[Prime] ──→ [Kick Drum]
[Product 1] ──→ [Closed Hi-hat] (small offset)
[Product 2] ──→ [Open Hi-hat] (medium offset)
[Product 3] ──→ [Snare] (larger offset)
```
**Setup:** Fast 16th note clock, subtle Product adjustments
**Result:** Complex techno-style drum patterns
**Performance:** Adjust Product knobs in real-time for groove variations
**Sync:** Use MEASURE input to stay locked with other sequencers

### **Patch 4: Melodic Trigger Generator**
```
[Numeric Repetitor outputs] ──→ [Sample & Hold triggers]
[Random CV] ──→ [Sample & Hold inputs]
[S&H outputs] ──→ [Quantizer] ──→ [Oscillators]
```
**Setup:** Use rhythmic gates to trigger melodic content
**Result:** Mathematically-timed melodies with rhythmic relationships
**Advanced:** Different Product outputs trigger different S&H for polymelody
**Musical:** Quantizer ensures melodic content stays musical

---

## Common Use Cases

**🥁 **Drum Programming:** Multiple related percussion patterns from one source**
**🎵 **Polyrhythmic Sequences:** Complex timing relationships made simple**
**⚡ **Techno Production:** Algorithmic rhythm generation for electronic music**
**🎭 **Live Performance:** Real-time rhythm manipulation with mathematical precision**
**🔄 **Pattern Variation:** Instant access to 32 different rhythmic foundations**
**🎛️ **Trigger Source:** Drive sample & hold, envelopes, or other modules**
**🧮 **Educational Tool:** Learn polyrhythms through mathematical relationships**
**⏰ **Clock Processing:** Transform simple clocks into complex rhythmic patterns**

---

## Beginner "Gotchas"

### **It's Not a Traditional Step Sequencer**
- **No step programming:** You can't manually program beats like TR-808
- **Mathematical generation:** Patterns come from algorithms, not step entry
- **32 preset patterns:** You choose from pre-calculated prime rhythms
- **Variation through math:** Product outputs use multiplication, not manual editing
- **Different mindset:** Think "pattern selection" not "beat programming"

### **Requires External Clock**
- **No internal clock:** Must have external beat source to function
- **Clock dependent:** No clock input = no output
- **Clock division/multiplication:** Works with any reasonable clock speed
- **Sync important:** Use MEASURE input to stay locked with other modules
- **Rising edge sensitive:** Timing comes from clock transitions

### **Product Knobs Are Time Offsets, Not Pattern Editors**
- **Common confusion:** Product knobs don't select different patterns
- **Time offset control:** They shift the mathematical variation in time
- **Related to Prime:** All Products are variations of the selected Prime
- **Subtle changes:** Small knob movements often more musical than large ones
- **Interactive:** Product patterns change when you change Prime pattern

### **CV Input Behavior**
- **7V range:** Full CV range needed to access all 16 patterns
- **Stepping:** CV changes create jumps between patterns, not smooth transitions
- **Quantized input:** CV gets converted to pattern numbers (no in-between)
- **Modulation speed:** Slow CV changes more musical than fast ones
- **Pattern jumping:** Fast CV can create rhythmic chaos (sometimes desired!)

### **X/Y Switch Doubles Your Patterns**
- **Two complete sets:** X and Y each have 16 different prime rhythms
- **Different characters:** X and Y sets have different rhythmic feels
- **Easy to forget:** Check which set you're using when pattern doesn't sound right
- **No CV control:** Switch position must be changed manually
- **Performance limitation:** Can't sequence between X and Y sets

---

## Next Steps

1. **Explore all 32 prime patterns** - spend time with each X and Y pattern
2. **Practice Product knob control** - learn subtle vs dramatic offset effects
3. **Experiment with different clock speeds** - same patterns, different feels
4. **Try CV modulation** - sequence through patterns for evolving rhythms
5. **Study the mathematical relationships** - notice how Products relate to Prime
6. **Integrate with other modules** - use as trigger source for complex patches

**Remember:** You don't need to understand the math - just listen and explore the relationships!

---

## Pairs Well With

### **Perfect Partners for Beginners:**
- **Clock sources (Horologic Solum, Pamela's):** Essential foundation for any rhythm work
- **Drum modules (BIA, sample players):** Natural targets for the gate outputs
- **Sample & Hold modules:** Use rhythmic gates to trigger melodic content
- **Logic modules (Boolean Gates):** Combine and process the mathematical patterns

### **Next-Level Combinations:**
- **Multiple Numeric Repetitors:** Layer different mathematical patterns
- **Euclidean sequencers:** Combine mathematical and geometric rhythm approaches
- **Probability gates (Branches):** Add random elements to mathematical patterns
- **CV sequencers (Mimetic Digitalis):** Sequence through Prime patterns systematically

### **Advanced Integration:**
- **Gamut Repetitor:** Combine algorithmic rhythm with algorithmic melody
- **Complex clock generators:** Feed sophisticated timing into the mathematical engine
- **Modulation sources (Lapsus Os):** Real-time control of multiple parameters
- **MIDI-CV converters:** Use DAW clocks and sequences with mathematical rhythm

### **Genre Applications:**
- **Techno/Electronic:** Perfect for algorithmic beat generation
- **Experimental music:** Mathematical relationships create unique polyrhythms
- **Ambient/Drone:** Sparse patterns with long MEASURE cycles
- **Academic/Educational:** Teaching polyrhythms through mathematical concepts

### **Pro Tips:**
- **Start with one Product output:** Add complexity gradually
- **Use MEASURE input religiously:** Keeps everything in sync with your system
- **Small Product adjustments:** Often more musical than extreme settings
- **Document your settings:** Mathematical patterns can be hard to recreate
- **Combine with traditional sequencing:** Mathematical + manual = powerful hybrid

### **Creative Experiments:**
- **Audio-rate clocking:** Mathematical patterns become complex timbres
- **Feedback patches:** Use Product outputs to modulate Prime selection
- **Cross-modulation:** Multiple Numeric Repetitors modulating each other
- **Pattern morphing:** Slowly sequence through Prime patterns for evolution

### **Educational Value:**
- **Polyrhythm comprehension:** Hear mathematical relationships
- **Binary arithmetic:** Understand how digital patterns work
- **Prime number theory:** Musical applications of mathematical concepts
- **Algorithmic composition:** Learn non-traditional approaches to rhythm

---

*Numeric Repetitor makes complex polyrhythms accessible through mathematical elegance - trust your ears over your understanding of the math!*