# Beginner Patch 2: "Clock and Sequence" - Introduction to Sequencing

## Concept: **Learn how clock signals drive sequences and create rhythm**

### Required Modules:
- Music Thing Modular Turing Machine V2 (sequencer)
- Music Thing Modular Volts (sequence expander)
- ALM MCO (simple oscillator)
- Doepfer A-124 SE Wasp (filter)
- Doepfer A-130-2 (dual VCA)
- DivKid ochd (LFO/clock source)
- 2hp Mult (signal splitting)

### Patch Connections:

#### **Clock Generation:**
1. **ochd Output 1** → **Mult Input** (slow clock, around 120 BPM)
2. **Mult Output 1** → **Turing Machine Clock Input**
3. **Mult Output 2** → **A-130-2 Gate Input** (rhythm for amplitude)

#### **Sequence to Sound:**
1. **Turing Machine CV Output** → **MCO V/Oct Input** (pitch sequence)
2. **Turing Machine Volts CV Output** → **Wasp CV Input** (filter sequence)
3. **MCO Sawtooth Out** → **Wasp Audio Input**
4. **Wasp Output** → **A-130-2 Audio Input**
5. **A-130-2 Output** → **Listen IO Input L**

#### **Modulation:**
1. **ochd Output 3** → **Turing Machine Length CV** (slowly changes pattern length)
2. **ochd Output 5** → **MCO FM Input** (subtle vibrato)

### Module Settings:
- **ochd**: Output 1 at medium speed for main clock
- **Turing Machine**: Length around 8 steps, some randomness
- **MCO**: Basic sawtooth, tuned to comfortable range
- **Wasp**: Cutoff at 11 o'clock, moderate resonance
- **A-130-2**: Linear mode, gain at 12 o'clock

### What This Teaches:
- **Clock Signals**: How steady pulses drive musical events
- **Sequences vs. Notes**: Same rhythm, changing pitches
- **Randomness Control**: Turing Machine probability creates variation
- **Multiple Outputs**: One clock can drive multiple functions
- **Pattern Evolution**: How sequences can slowly change over time

### Experimentation:
- Adjust **Turing Machine randomness** to hear pattern variations
- Change **ochd Output 1 speed** to speed up/slow down everything
- Try different **ochd outputs** for different clock speeds
- Adjust **Turing Machine length** for shorter/longer patterns

---

## Musical Result:
A self-evolving melodic sequence that demonstrates how modular creates music through interconnected systems rather than preset sounds.

## Modular Insight:
Unlike fixed synthesizers, modular lets you use the same modules for completely different functions - ochd outputs can be clocks, LFOs, or random voltages depending on speed and destination.
