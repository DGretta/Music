# Beginner Patch 3: "Modulation Magic" - Introduction to CV Modulation

## Concept: **Learn how control voltages create movement and expression in static sounds**

### Required Modules:
- Winterbloom Castor & Pollux II (dual oscillator)
- Tiptop Forbidden Planet (filter)
- Intellijel Mixup (mixer/VCA)
- Make Noise Maths (function generator)
- DivKid ochd (LFO source)
- 2hp Mult (signal distribution)

### Patch Connections:

#### **Basic Voice:**
1. **Castor & Pollux Osc A Out** → **Forbidden Planet LP Input**
2. **Forbidden Planet Out** → **Mixup Channel 1 Input**
3. **Mixup Main Out** → **Listen IO Input L**

#### **Slow Filter Sweep (Maths Channel 1):**
1. **Maths Ch1 Trigger Button** → **Maths Ch1 Trigger Input** (manual trigger)
2. **Maths Ch1 Output** → **Mult Input** (slow rising envelope)
3. **Mult Output 1** → **Forbidden Planet CV Input** (filter sweep)
4. **Mult Output 2** → **Mixup Channel 1 CV** (volume swell)

#### **Fast Vibrato (ochd):**
1. **ochd Output 2** → **Castor & Pollux Osc A FM Input** (subtle vibrato)

#### **Slow Pitch Drift (Maths Channel 4):**
1. **Maths Ch4 Output** → **Castor & Pollux Osc A V/Oct** (very slow pitch changes)

### Module Settings:
- **Castor & Pollux**: Osc A on sawtooth, tuned to middle range
- **Forbidden Planet**: Cutoff at 9 o'clock (closed), resonance at 10 o'clock
- **Maths Ch1**: Rise at 12 o'clock, Fall at 2 o'clock (slow envelope)
- **Maths Ch4**: Both knobs around 3 o'clock (very slow random drift)
- **ochd**: Output 2 at medium-fast speed for vibrato
- **Mixup**: Channel 1 at unity gain

### What This Teaches:
- **CV Modulation**: How voltages change parameters over time
- **Envelope Followers**: Maths creates smooth voltage changes
- **LFO Effects**: ochd creates repeating modulation
- **Multiple Destinations**: One CV source can control several parameters
- **Manual Control**: Triggering Maths manually teaches cause and effect

### Experimentation Steps:
1. **Start static**: Hear the basic oscillator tone
2. **Add filter sweep**: Press Maths Ch1 trigger - hear filter open slowly
3. **Add vibrato**: Patch ochd - hear pitch warble
4. **Add drift**: Turn up Maths Ch4 - hear slow pitch changes
5. **Combine effects**: Multiple modulations create complex movement

### Advanced Exploration:
- **Cross-patch modulation**: Use Maths Ch1 to control ochd speed
- **Patch Maths Ch2 and Ch3** for additional envelope shapes
- **Use Castor & Pollux Osc B** for harmonic intervals
- **Try different Forbidden Planet inputs** (HP, BP, LP)

---

## Musical Result:
A single sustained tone that comes alive through modulation - demonstrates how static sounds become musical through voltage control.

## Modular Philosophy:
This patch teaches that **movement is music** - even a single note becomes interesting when voltages animate its parameters over time.

## Key Takeaway:
Modular synthesis is about **relationships between modules** rather than individual module sounds. The magic happens in the connections!
