# Beginner Patch 1: "First Voice" - Basic Subtractive Synthesis

## Concept: **Learn the fundamental VCO → VCF → VCA signal chain**

### Required Modules:
- Mutable Instruments Plaits (oscillator)
- Erica Black Polivoks VCF (filter) 
- Erica Black Quad VCA2 (amplifier)
- Erica Black EG2 (envelope)
- 2hp Mult (signal splitting)

### Patch Connections:

#### **Basic Voice Chain:**
1. **Plaits Main Out** → **Polivoks VCF Audio In**
2. **Polivoks VCF Out** → **Quad VCA2 Input 1**
3. **Quad VCA2 Output 1** → **Listen IO Input L** (to speakers)

#### **Envelope Control:**
1. **EG2 Gate Button** → **EG2 Gate Input** (manual trigger)
2. **EG2 Output** → **Mult Input** (split envelope signal)
3. **Mult Output 1** → **Quad VCA2 CV Input 1** (controls volume)
4. **Mult Output 2** → **Polivoks VCF CV Input** (controls filter cutoff)

### Module Settings:
- **Plaits**: Set to basic oscillator model (sawtooth), tune to middle C
- **Polivoks VCF**: Cutoff at 10 o'clock, Resonance at 9 o'clock
- **Quad VCA2**: Channel 1 gain at 12 o'clock
- **EG2**: Fast attack, medium decay, 50% sustain, medium release

### What This Teaches:
- **Signal Flow**: Sound travels VCO → VCF → VCA
- **Envelope Shaping**: One envelope controls both filter and amplitude
- **Manual Triggering**: Press EG2 button to hear the voice
- **Timbre Control**: Adjust Plaits model and Polivoks settings for different sounds

### Experimentation:
- Try different **Plaits models** (turn MODEL knob)
- Adjust **Polivoks resonance** for more aggressive filtering
- Change **EG2 envelope shape** for different articulations
- **No sequencing** - pure sound design focus

---

## Musical Result:
A classic analog-style synthesizer voice that responds to manual triggers. Perfect for understanding how modular synthesis builds complex sounds from simple building blocks.

## Next Step:
Once comfortable with this patch, try changing Plaits to different synthesis models to hear how the same envelope and filter affect different sound sources.
