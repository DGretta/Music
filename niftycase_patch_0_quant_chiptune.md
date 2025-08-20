# NiftyCase Patch 0: Quantized Chiptune Sequence

## Patch Name: "Quantized Chiptune Sequence with Stereo Processing"

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
**Set to: "J-6 Quantizer (major scale)"**

## Patch Connections

### Audio Signal Chain
1. **Chipz Chip1 Out** → **Forbidden Planet LP Input**
2. **Forbidden Planet Out** → **Ruina Versio L Input** 
3. **Ruina Versio L Out** → **NiftyCASE Audio In L**
4. **Ruina Versio R Out** → **NiftyCASE Audio In R**

### CV/Sequencing Chain
1. **Cellz CV Out 1** → **Disting X Input** (raw CV sequence)
2. **Disting A Output** → **Chipz Chip1 V/Oct Input** (quantized pitch)
3. **Cellz Gate Out** → **Behringer 1033 Gate Input** (trigger envelopes)
4. **Behringer 1033 Envelope 1 Out** → **Forbidden Planet CV Input** (filter modulation)
5. **Behringer 1033 Envelope 2 Out** → **Chipz Chip1 Filter CV** (oscillator filter mod)

### Modulation/Utilities
1. **Chipz LFO Out 1** → **Mult Input** (split modulation)
2. **Mult Out 1** → **MISO 1 Input** 
3. **Mult Out 2** → **Ruina Versio Fold CV**
4. **MISO 1 Output** → **Chipz Chip2 V/Oct** (modulated second oscillator)
5. **Eraserhead CV Out** → **MISO A Input** (theremin expression control)
6. **MISO A Output** → **Ruina Versio Drive CV** (theremin controls distortion)

## Module Settings

### Disting
- **Algorithm**: J-6 Quantizer, major scale
- **Function**: Quantizes Cellz CV sequences to musical pitches

### MISO
- **Section 1**: Attenuator for Chipz LFO → Chip2 pitch modulation
- **Section A**: Scaling/offset for Eraserhead theremin → distortion control

### Ruina Versio
- **Blend**: 12 o'clock (balanced wet/dry)
- **Fold**: Responding to LFO CV via mult
- **Drive**: Responding to theremin CV via MISO
- **Other parameters**: Adjust to taste

### Forbidden Planet
- **Resonance**: 10 o'clock (subtle emphasis)
- **Cutoff**: Manual setting + envelope modulation from 1033
- **Mode**: Low Pass input used

### Behringer 1033
- **Envelope 1**: Medium attack, short decay, controlling filter
- **Envelope 2**: Slower attack, longer decay, controlling oscillator filter
- **Trigger**: Both envelopes triggered by Cellz gate

### Chipz
- **Chip1**: Main voice, square/saw wave, filter cutoff modulated by envelope
- **Chip2**: Secondary voice, modulated by LFO for pitch movement
- **LFO**: Slow rate, triangle/sine wave for subtle modulation

## Patch Description

This patch creates a complete musical voice with the following signal flow:

1. **Cellz** generates CV sequences and gate triggers
2. **Disting** quantizes the CV to musical scales  
3. **Chipz Chip1** plays the quantized melody through the **Forbidden Planet** filter
4. **Behringer 1033** envelopes shape both filter cutoff and oscillator timbre
5. **Chipz LFO** (via **Mult**) adds pitch movement to Chip2 and waveshaping to **Ruina Versio**
6. **Eraserhead theremin** provides real-time expression control over distortion intensity
7. **Ruina Versio** adds stereo processing and harmonic complexity
8. **MISO** handles CV scaling and routing for modulation sources

### Musical Result
- Quantized chiptune melodies with analog filter warmth
- Envelope-shaped filter sweeps
- LFO-driven pitch movement on secondary oscillator
- Real-time theremin control over distortion character
- Stereo width and harmonic richness from Ruina Versio

### Performance Tips
- Use **Cellz** touch pads to sequence melodies
- Wave your hand over **Eraserhead** for expressive distortion control
- Adjust **Forbidden Planet** cutoff for tonal character
- Experiment with **Ruina Versio** parameters for different distortion flavors
- **MISO** crossfader can blend between different modulation sources
