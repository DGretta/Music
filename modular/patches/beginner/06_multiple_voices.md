# Beginner Patch 6: "Multiple Voices" - Polyphonic Thinking

## Concept: **Learn how to create multiple independent musical voices in modular**

### Required Modules:
- Rossum Mob of Emus (six-voice wavetable oscillator)
- Mutable Instruments Marbles (random gates & voltages)
- Patching Panda Moon Phase (stereo filter)
- Erica Black Quad VCA2 (voice amplification)
- dsp.coffee YYS (matrix mixer)
- DivKid ochd (clock/modulation)
- 2hp Mult (signal distribution)

### Patch Connections:

#### **Polyphonic Voice Generation:**
1. **ochd Output 1** → **Marbles Clock Input** (main timing)
2. **Marbles t1** → **Mob of Emus Voice 1 Gate** (voice 1 trigger)
3. **Marbles t2** → **Mob of Emus Voice 2 Gate** (voice 2 trigger)
4. **Marbles t3** → **Mob of Emus Voice 3 Gate** (voice 3 trigger)
5. **Marbles X1** → **Mob of Emus Voice 1 Pitch** (random pitch 1)
6. **Marbles X2** → **Mob of Emus Voice 2 Pitch** (random pitch 2)
7. **Marbles X3** → **Mob of Emus Voice 3 Pitch** (random pitch 3)

#### **Voice Processing:**
1. **Mob of Emus Mix Out L** → **Moon Phase Input L**
2. **Mob of Emus Mix Out R** → **Moon Phase Input R**
3. **Moon Phase LP Out L** → **Quad VCA2 Input 1**
4. **Moon Phase LP Out R** → **Quad VCA2 Input 2**
5. **Quad VCA2 Output 1** → **YYS Input 1** (left channel)
6. **Quad VCA2 Output 2** → **YYS Input 2** (right channel)

#### **Dynamic Control:**
1. **Marbles Y1** → **Mult Input** (random modulation)
2. **Mult Output 1** → **Moon Phase Cutoff CV** (random filter movement)
3. **Mult Output 2** → **Quad VCA2 CV Input 1** (random amplitude)
4. **ochd Output 4** → **Mob of Emus Wavetable CV** (slow timbre changes)

#### **Final Output:**
1. **YYS Output A** → **Listen IO Input L**
2. **YYS Output B** → **Listen IO Input R**

### Module Settings:
- **Marbles**: Spread around 12 o'clock, Bias around 10 o'clock, t Rate medium
- **Mob of Emus**: Wavetable select around 12 o'clock, voices 1-3 active
- **Moon Phase**: Both cutoffs around 11 o'clock, resonance at 10 o'clock
- **YYS**: Matrix knobs at 12 o'clock for unity mixing
- **ochd**: Output 1 for main clock, Output 4 very slow for timbre
- **Quad VCA2**: Channels 1-2 in exponential mode

### What This Teaches:
- **Polyphonic Thinking**: Multiple simultaneous voices vs. single voice
- **Random Harmonies**: How Marbles creates musical relationships
- **Voice Independence**: Each voice has its own trigger timing and pitch
- **Stereo Processing**: Left/right voice distribution and processing
- **Macro Control**: How one module (Marbles) can orchestrate many voices

### Experimentation:
1. **Start with one voice**: Hear single Mob of Emus voice
2. **Add voices gradually**: Build up polyphonic complexity
3. **Adjust Marbles spread**: Control harmonic relationships
4. **Change Marbles bias**: Shift pitch range up/down
5. **Vary clock speed**: ochd controls overall tempo
6. **Filter movement**: Random filter sweeps affect all voices

### Advanced Concepts:
- **Voice Allocation**: Mob of Emus automatically manages polyphony
- **Correleted Randomness**: Marbles creates musically related random values
- **Stereo Field**: Moon Phase and YYS create spatial distribution

---

## Musical Result:
A constantly evolving polyphonic texture where multiple voices enter and exit randomly but maintain musical relationships. Creates ambient, generative compositions.

## Modular Philosophy:
Demonstrates **emergent complexity** - simple random processes create sophisticated musical results through careful module selection and patching.

## Key Insight:
Modular excels at creating **musical systems** that generate compositions rather than just playing predetermined sequences.
