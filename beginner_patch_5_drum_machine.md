# Beginner Patch 5: "Drum Machine Basics" - Rhythm and Percussion

## Concept: **Learn how modular creates rhythmic patterns and drum sounds**

### Required Modules:
- vpme.de QD Quad Drum + QEX Expander (drum voices)
- vpme.de Euclidian Circles V2 (rhythm patterns)
- DivKid ochd (clock source)
- Erica Black Quad VCA2 (drum mixing)
- Blue Lantern Simple ADSR (drum envelope)
- 2hp Mult (clock distribution)
- Intellijel Mixup (drum mixer)

### Patch Connections:

#### **Master Clock Distribution:**
1. **ochd Output 1** → **Mult Input** (main clock ~120 BPM)
2. **Mult Output 1** → **Euclidian Circles Clock Input**
3. **Mult Output 2** → **Simple ADSR Gate Input** (for manual accent)

#### **Drum Pattern Generation:**
1. **Euclidian Circles Out 1** → **QD Drum Voice 1 Trigger** (kick pattern)
2. **Euclidian Circles Out 2** → **QD Drum Voice 2 Trigger** (snare pattern)  
3. **Euclidian Circles Out 3** → **QD Drum Voice 3 Trigger** (hi-hat pattern)
4. **Euclidian Circles Out 4** → **QD Drum Voice 4 Trigger** (percussion pattern)

#### **Drum Voice Outputs:**
1. **QD Voice 1 Out** → **Quad VCA2 Input 1** (kick)
2. **QD Voice 2 Out** → **Quad VCA2 Input 2** (snare)
3. **QD Voice 3 Out** → **Quad VCA2 Input 3** (hi-hat)
4. **QD Voice 4 Out** → **Quad VCA2 Input 4** (perc)

#### **Drum Mix:**
1. **Quad VCA2 Mix Out** → **Mixup Channel 1**
2. **Mixup Main Out** → **Listen IO Input L**

#### **Performance Accent:**
1. **Simple ADSR Output** → **Mixup Channel 1 CV** (manual accent control)

### Module Settings:
- **ochd**: Output 1 at moderate speed for main clock
- **Euclidian Circles**: 
  - Channel 1: 4 steps, 4 length (every beat - kick)
  - Channel 2: 8 steps, 2 length (every 4th beat - snare)
  - Channel 3: 16 steps, 6 length (scattered - hi-hat)
  - Channel 4: 16 steps, 3 length (sparse - percussion)
- **QD Quad Drum**: 
  - Voice 1: Kick drum sound
  - Voice 2: Snare drum sound
  - Voice 3: Hi-hat sound
  - Voice 4: Percussion sound
- **Simple ADSR**: Fast attack, medium decay for accent envelope

### What This Teaches:
- **Euclidean Rhythms**: Mathematical approach to creating musical patterns
- **Clock Distribution**: One master clock drives multiple rhythm generators
- **Drum Voice Mixing**: Balancing multiple percussion elements
- **Pattern Relationships**: How different euclidean patterns interact
- **Performance Control**: Manual accents add human expression

### Experimentation:
1. **Start simple**: Single drum voice with basic euclidean pattern
2. **Add voices**: Build up drum kit one voice at a time
3. **Change patterns**: Adjust euclidean parameters for different feels
4. **Vary timing**: Change ochd speed for different tempos
5. **Add accents**: Use Simple ADSR button for dynamic performance

### Pattern Exploration:
- **Kick**: Try 4/4, 3/4, or 7/8 euclidean patterns
- **Snare**: Experiment with off-beat placements
- **Hi-hat**: Use higher step counts for busy patterns
- **Polyrhythms**: Different pattern lengths create shifting relationships

---

## Musical Result:
A complete drum machine with mathematical rhythm patterns that can range from simple four-on-the-floor to complex polyrhythmic sequences.

## Modular Philosophy:
Demonstrates how **algorithmic composition** can create rhythms that feel both logical and surprising - euclidean patterns are found throughout world music traditions.

## Key Insight:
Modular drum machines aren't just about sounds - they're about **rhythm generation systems** that can create patterns impossible to program manually.
