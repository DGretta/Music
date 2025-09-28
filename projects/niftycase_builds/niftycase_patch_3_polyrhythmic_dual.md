# NiftyCase Patch 3: Dual Voice Polyrhythmic Sequence

## Patch Name: "Polyrhythmic Dual Voice with Cross-Modulation"

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
**Set to: "A-8 Clockable LFO (with multiply/divide)"**

## Patch Connections

### Voice 1 (Lead Voice)
1. **Cellz CV Out 1** → **Chipz Chip1 V/Oct** (sequence lead voice)
2. **Cellz Gate Out** → **Behringer 1033 Gate Input** (trigger both envelopes)
3. **Behringer 1033 Envelope 1 Out** → **Forbidden Planet CV Input** (filter envelope)
4. **Chipz Chip1 Out** → **Forbidden Planet LP Input**

### Voice 2 (Bass Voice with Cross-Mod)
1. **Cellz CV Out 2** → **MISO 1 Input** (bass sequence processing)
2. **MISO 1 Output** → **Chipz Chip2 V/Oct** (processed bass pitch)
3. **Chipz Chip2 Out** → **Forbidden Planet BP Input** (bass through bandpass)
4. **Chipz Chip1 Out** → **Chipz Chip2 FM Input** (cross-modulation between oscillators)

### Polyrhythmic Modulation
1. **Disting A Output** → **Mult Input** (divided clock from main tempo)
2. **Mult Out 1** → **Cellz Clock Input** (drives main sequencer)
3. **Mult Out 2** → **MISO A Input** (polyrhythmic modulation)
4. **MISO A Output** → **Behringer 1033 Envelope 2 CV** (modulate envelope timing)

### Expression & Final Processing
1. **Eraserhead CV Out** → **MISO Crossfader CV** (theremin controls voice balance)
2. **Behringer 1033 Envelope 2 Out** → **Ruina Versio Fold CV** (envelope waveshaping)
3. **Chipz LFO Out 1** → **Ruina Versio Center CV** (LFO controls multiband saturation)
4. **Forbidden Planet Out** → **Ruina Versio L Input**
5. **Ruina Versio L Out** → **NiftyCASE Audio In L**
6. **Ruina Versio R Out** → **NiftyCASE Audio In R**

## Module Settings

### Disting
- **Algorithm**: A-8 Clockable LFO (with multiply/divide)
- **Function**: Creates polyrhythmic clock divisions
- **Rate**: Set to main tempo, outputs divided/multiplied clocks

### Chipz
- **Chip1**: Sawtooth wave, lead voice range (C3-C5)
- **Chip2**: Square wave, bass range (C1-C3), FM input active
- **Cross-Modulation**: Chip1 frequency-modulates Chip2 for complex bass tones
- **LFO**: Medium rate, controls saturation sweeps

### Forbidden Planet
- **LP Input**: Lead voice (Chip1)
- **BP Input**: Bass voice (Chip2) 
- **Cutoff**: 12 o'clock + envelope modulation
- **Resonance**: 11 o'clock (musical emphasis)
- **Volume**: Unity gain

### MISO
- **Section 1**: Transpose/octave control for bass voice
- **Section A**: Scale polyrhythmic LFO for envelope timing modulation
- **Crossfader**: Theremin-controlled balance between lead/bass
- **Mix Output**: Balanced blend sent to processing

### Ruina Versio
- **Fold**: Envelope-controlled waveshaping (starts at 9 o'clock)
- **Drive**: 10 o'clock (moderate saturation)
- **Center**: LFO-controlled multiband saturation
- **Phase**: 2 o'clock (wide stereo image)
- **Doom**: 9 o'clock (subtle sub-octave reinforcement)

### Behringer 1033
- **Envelope 1**: Classic ADSR for filter (A: fast, D: medium, S: 30%, R: short)
- **Envelope 2**: Modulated timing for polyrhythmic effects
- **Gate Delay**: Envelope 2 has slight delay for offset timing

### Cellz
- **CV Out 1**: Melodic sequence in upper register
- **CV Out 2**: Bass sequence, different pattern/timing
- **Clock Input**: Driven by Disting for tempo sync
- **Performance**: Live trigger overrides for breakdown sections

## Patch Description

This patch creates a complex polyrhythmic sequence with two interdependent voices:

1. **Disting** generates master clock with divisions for polyrhythmic effects
2. **Cellz** sequences both lead and bass voices with different patterns
3. **Chipz** provides two oscillators that cross-modulate each other
4. **Forbidden Planet** separates voices through different filter inputs
5. **MISO** processes CV signals and provides performance mixing control
6. **Behringer 1033** creates envelope shapes with polyrhythmic timing variations
7. **Ruina Versio** adds final stereo processing and harmonic enhancement
8. **Eraserhead** provides real-time balance control between voices

### Musical Result
- Polyrhythmic sequences with lead and bass voices
- Cross-modulation between oscillators creates complex bass tones
- Multi-input filtering for voice separation and character
- Envelope-controlled waveshaping and filter movement
- Real-time balance control via theremin
- Stereo-processed output with harmonic complexity

### Performance Tips
- **Cellz** can override sequences with manual performance
- **Eraserhead** controls the balance between lead and bass voices
- **Disting** rate knob controls overall tempo and polyrhythm complexity
- **MISO** crossfader provides dramatic voice balance shifts
- **Behringer 1033** manual triggers create accent hits and fills
- **Ruina Versio** parameters can be tweaked for different sonic characters
- Experiment with **Chipz** cross-modulation amounts for bass complexity

### Advanced Techniques
- Use **MISO** section A to create polyrhythmic envelope timing
- **Forbidden Planet** resonance can be pushed into self-oscillation for percussive hits
- **Cellz** different touch pressures affect CV values for velocity-style control
- **Eraserhead** position affects both voice balance and modulation intensity
