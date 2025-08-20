# NiftyCase Patch 1: Ambient Drone with Sample Playback

## Patch Name: "Ambient Drone Textures with Triggered Samples"

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
**Set to: "Sample Player (Triggerable)"**

## Patch Connections

### Audio Signal Chain
1. **Chipz Chip1 Out** → **Forbidden Planet BP Input** (bandpass filtering)
2. **Chipz Chip2 Out** → **Forbidden Planet HP Input** (high-pass filtering)
3. **Disting A Output** → **Forbidden Planet LP Input** (samples through low-pass)
4. **Forbidden Planet Out** → **Ruina Versio L Input**
5. **Ruina Versio L Out** → **NiftyCASE Audio In L**
6. **Ruina Versio R Out** → **NiftyCASE Audio In R**

### CV/Drone Control
1. **Eraserhead CV Out** → **Mult Input** (theremin splits to multiple destinations)
2. **Mult Out 1** → **Chipz Chip1 V/Oct** (theremin controls main drone pitch)
3. **Mult Out 2** → **MISO 1 Input**
4. **MISO 1 Output** → **Chipz Chip2 V/Oct** (processed theremin to second drone)

### Sample Triggering & Modulation
1. **Cellz Gate Out** → **Disting Z Input** (triggers sample playback)
2. **Cellz CV Out 2** → **Disting X Input** (selects different samples)
3. **Chipz LFO Out 1** → **MISO A Input**
4. **MISO A Output** → **Forbidden Planet CV Input** (slow filter sweeps)
5. **Behringer 1033 Envelope 1 Out** → **Ruina Versio Phase CV** (stereo width modulation)
6. **Behringer 1033 Envelope 2 Out** → **Ruina Versio Doom CV** (sub-octave chaos)

## Module Settings

### Disting
- **Algorithm**: Sample Player (Triggerable)
- **Function**: Plays ambient samples/textures triggered by Cellz
- **Sample Selection**: Load atmospheric sounds, field recordings, or synth pads

### MISO
- **Section 1**: Slight offset/scaling for theremin → second drone pitch
- **Section A**: Attenuate and slow down LFO for gentle filter movement
- **Crossfader**: Manual control to blend modulation sources

### Ruina Versio
- **Fold**: 9 o'clock (subtle waveshaping)
- **Drive**: 11 o'clock (gentle saturation)
- **Phase**: Responding to envelope for stereo movement
- **Doom**: Responding to envelope for evolving sub-bass
- **8vize**: 2 o'clock (adds harmonic content)

### Forbidden Planet
- **Resonance**: 2 o'clock (self-oscillation territory)
- **Cutoff**: 10 o'clock + LFO modulation
- **Multi-input mixing**: BP (Chip1), HP (Chip2), LP (samples)

### Behringer 1033
- **Envelope 1**: Very slow attack (3-5 seconds), long decay, for stereo modulation
- **Envelope 2**: Medium attack, very long decay, for doom/sub modulation
- **Manual trigger**: Use buttons for performance expression

### Chipz
- **Chip1**: Sine wave drone, very low pitch (sub-audio to audio rate)
- **Chip2**: Triangle wave, detuned slightly from Chip1
- **LFO**: Very slow triangle wave (30+ second cycles)

### Cellz
- **Mode**: Set to trigger samples sporadically
- **CV Out 2**: Set different values for sample selection
- **Touch Performance**: Occasional sample triggers and ambient swells

## Patch Description

This patch creates evolving ambient soundscapes with the following characteristics:

1. **Chipz** generates two slow-moving drone tones controlled by **Eraserhead theremin**
2. **Forbidden Planet** combines all three audio sources through different filter types
3. **Disting** adds triggered ambient samples for textural variety
4. **Cellz** provides sparse rhythmic sample triggers and sample selection
5. **Behringer 1033** creates very slow envelope shapes for gradual parameter changes
6. **Ruina Versio** adds stereo processing, sub-bass, and harmonic complexity
7. **MISO** provides CV processing for smooth parameter transitions

### Musical Result
- Evolving drone textures with theremin pitch control
- Triggered ambient samples for rhythmic punctuation
- Multi-layered filtering creating complex timbres
- Slow envelope modulation for gradual parameter evolution
- Stereo processing with sub-bass enhancement

### Performance Tips
- Use **Eraserhead** for expressive pitch bending of drone layers
- **Cellz** pads trigger samples - use sparingly for ambient punctuation
- **Behringer 1033** manual triggers create performance swells
- **MISO** crossfader blends between different modulation sources
- **Forbidden Planet** resonance creates self-oscillating tones
- Long patch - let it evolve over 5-10 minutes for full effect
