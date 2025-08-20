# NiftyCase Patch 2: Rhythmic Percussion Synthesizer

## Patch Name: "Chiptune Percussion with Euclidean Rhythms"

### Module List
- Chipz (Cre8audio) - 12HP
- Cellz (Cre8audio) - 12HP  
- MISO (TipTop Audio) - 10HP
- 2HP Mult - 2HP
- Ruina Versio (Noise Engineering) - 10HP
- Behringer 1033 Dual Envelope Generator - 16HP
- Error Instruments Eraserhead Theremin - 6HP
- Disting mk4 (Expert Sleepers) - 4HP
- Forbidden Planet (TipTop Audio) - 8HP

**Total HP Used**: 80/84HP

### Disting Algorithm
**Set to: "H-2 Euclidean Rhythms"**

## Patch Connections

### Drum Voice 1 (Kick-style)
1. **Disting A Output** → **Behringer 1033 Gate Input** (euclidean trigger)
2. **Behringer 1033 Envelope 1 Out** → **Chipz Chip1 V/Oct** (pitch envelope for kick)
3. **Behringer 1033 Envelope 1 Out** → **Mult Input** (split envelope)
4. **Mult Out 1** → **Forbidden Planet CV Input** (filter envelope)
5. **Chipz Chip1 Out** → **Forbidden Planet LP Input** 
6. **Forbidden Planet Out** → **MISO 1 Input**

### Drum Voice 2 (Snare/Hi-hat style)
1. **Disting B Output** → **Cellz Trigger Input** (secondary euclidean rhythm)
2. **Cellz Gate Out** → **Behringer 1033 Trigger Input** (retrigger envelope 2)
3. **Behringer 1033 Envelope 2 Out** → **Chipz Chip2 Filter CV** (snappy filter mod)
4. **Chipz Chip2 Out** → **Ruina Versio L Input** (direct to distortion)

### Master Mix & Processing
1. **MISO 1 Output** → **Ruina Versio R Input** (kick voice to right channel)
2. **Ruina Versio L Out** → **NiftyCASE Audio In L** (snare/hat voice)
3. **Ruina Versio R Out** → **NiftyCASE Audio In R** (kick voice processed)

### Expression Control
1. **Eraserhead CV Out** → **MISO A Input** (theremin expression)
2. **MISO A Output** → **Ruina Versio Drive CV** (performance distortion control)
3. **Chipz LFO Out 1** → **MISO Crossfader CV** (automatic mixing)
4. **Mult Out 2** → **Ruina Versio 8vize CV** (envelope controls rectification)

## Module Settings

### Disting
- **Algorithm**: H-2 Euclidean Rhythms
- **X Input**: Manual knob control for pattern density
- **Outputs**: A = main kick pattern, B = offset snare/hat pattern

### Chipz
- **Chip1**: Square wave, tuned to kick drum pitch (~60Hz)
- **Chip2**: Noise setting, tuned higher for snare/hat sounds
- **LFO**: Medium speed triangle for mix automation
- **Filters**: Chip1 filter closed, Chip2 filter responding to envelope

### Forbidden Planet  
- **Mode**: Low Pass input (for kick drum processing)
- **Cutoff**: 11 o'clock + envelope modulation
- **Resonance**: 1 o'clock (punchy resonance)

### Ruina Versio
- **Fold**: 10 o'clock (adds harmonic punch)
- **Drive**: Manual + theremin CV control
- **8vize**: Envelope modulated rectification for kick punch
- **Phase**: 12 o'clock (stereo width)
- **Doom**: 9 o'clock (subtle sub-bass)

### Behringer 1033
- **Envelope 1**: Very fast attack, medium decay (kick envelope)
- **Envelope 2**: Fast attack, short decay (snare envelope)  
- **Both triggered by euclidean patterns from Disting**

### MISO
- **Section 1**: Level control for kick voice before final processing
- **Section A**: Scale theremin for expressive drive control
- **Crossfader**: LFO-controlled mixing between voices

### Cellz
- **Mode**: Trigger mode for retriggering envelope 2
- **Performance**: Manual trigger hits for live performance
- **Gate timing**: Short, punchy gates

## Patch Description

This patch transforms your system into a chiptune drum machine:

1. **Disting** generates euclidean rhythm patterns on two outputs
2. **Chipz Chip1** becomes a kick drum (square wave + pitch envelope)
3. **Chipz Chip2** becomes snare/hi-hat (noise + filter envelope)
4. **Forbidden Planet** shapes the kick drum with resonant low-pass filtering
5. **Behringer 1033** provides classic drum envelopes (fast attack, controlled decay)
6. **Ruina Versio** adds stereo processing and punch to both voices
7. **Eraserhead** provides real-time expression over overall drive/aggression
8. **MISO** handles level balancing and crossfading between voices

### Musical Result
- Euclidean rhythm patterns with chiptune drum sounds
- Punchy, resonant kick drums with pitch envelopes
- Crispy, filtered noise for snare/hi-hat sounds
- Real-time expression control via theremin
- Stereo-processed output with harmonic enhancement

### Performance Tips
- **Disting** knob controls pattern density - turn for breakdowns/builds
- **Eraserhead** wave control for dramatic filter/distortion sweeps
- **Cellz** manual triggers for additional percussion hits
- **Behringer 1033** manual triggers for accent hits
- **MISO** crossfader creates automatic drum panning
- **Ruina Versio** Smoosh button for dramatic filter/drive slams
- Adjust **Forbidden Planet** resonance for kick drum character
