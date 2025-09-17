# Semi-Modular Integration Guide: Eurorack CV Control Strategies

## **Semi-Modular Integration Priority Guide**
*Detailed CV routing and control strategies for your 17 semi-modular synthesizers*

---

## **TIER 1: MAXIMUM IMPACT INTEGRATIONS**

### **Integration 1: Moog Mother32 - The Bass Controller**

#### **Eurorack → Mother32 CV Control:**
1. **Hermod+ Track 1** → **Mother32 VCF CV** (sequenced filter sweeps)
2. **Maths Ch1** → **Mother32 VCA CV** (slow amplitude swells)
3. **Marbles Y1** → **Mother32 Tempo CV** (musical tempo variations)
4. **ochd Output 2** → **Mother32 LFO Rate** (vibrato speed control)

#### **Mother32 → Eurorack Integration:**
1. **Mother32 Assign Out** → **Mult** → **Multiple Eurorack destinations**
2. **Mother32 Gate Out** → **Turing Machine Clock** (bass drives randomness)
3. **Mother32 Tempo Out** → **Euclidian Circles Clock** (bass creates polyrhythms)

#### **Audio Processing Chain:**
1. **Mother32 Audio Out** → **Polivoks VCF** (aggressive bass filtering)
2. **Polivoks Out** → **Ruina Versio** (bass distortion/saturation)
3. **Ruina Versio Out** → **Mixup Channel 1** (processed bass to mix)

#### **Settings:**
- **Mother32**: Bass patch, Cutoff 10 o'clock, Resonance 1 o'clock
- **Hermod+ Track 1**: Slow filter sweeps, 0-5V range
- **Maths Ch1**: 30-second rise/fall cycles
- **Polivoks**: Cutoff 8 o'clock, Resonance 2 o'clock (screaming)

---

### **Integration 2: Behringer Neutron - The Modulation Hub**

#### **Neutron's Extensive CV Inputs (Utilize Maximum Potential):**
1. **Hermod+ Track 2** → **Neutron Osc 1 Pitch** (lead sequences)
2. **Hermod+ Track 3** → **Neutron VCF Cutoff** (filter sequences)
3. **Maths Ch2** → **Neutron Osc 2 Pitch** (slow harmonic evolution)
4. **Marbles Y2** → **Neutron VCF Resonance** (random filter character)
5. **ochd Output 3** → **Neutron LFO 1 Rate** (evolving modulation speed)
6. **Wogglebug CV** → **Neutron Delay Time** (chaotic echo effects)
7. **Function Junction LFO** → **Neutron VCA** (tremolo effects)

#### **Neutron Internal Patching:**
- **Neutron LFO 1** → **Neutron Osc 1 PWM** (internal modulation)
- **Neutron Env 1** → **Neutron VCF + VCA** (classic envelope routing)
- **Neutron S&H** → **Neutron Osc 2 Pitch** (random pitch variations)

#### **Audio Processing:**
1. **Neutron Audio Out** → **Arbhar Audio Input** (granular lead processing)
2. **Arbhar Processed** → **Moon Phase Stereo Filter** (spatial filtering)
3. **Moon Phase Out** → **YYS Matrix Input** (spatial lead mixing)

#### **Performance Control:**
1. **Pressure Points Touch 1** → **Neutron Delay Feedback** (performance delay control)
2. **Pressure Points Touch 2** → **Neutron VCF Resonance** (filter performance)

---

### **Integration 3: Behringer 2600 - The Complex Voice**

#### **2600 Multi-Oscillator Control:**
1. **Hermod+ Track 4** → **2600 VCO 1 Pitch** (main sequence)
2. **Hermod+ Track 5** → **2600 VCO 2 Pitch** (harmony sequence, +5th)
3. **Maths Ch3** → **2600 VCO 3 Pitch** (slow bass drone evolution)
4. **Marbles X1** → **2600 VCF 1 Cutoff** (musical random filtering)
5. **Marbles X2** → **2600 VCF 2 Cutoff** (correlated second filter)

#### **2600 Complex Patch Matrix:**
- **2600 VCO 1** → **2600 VCF 1** → **2600 VCA 1** (voice 1)
- **2600 VCO 2** → **2600 VCF 2** → **2600 VCA 2** (voice 2)
- **2600 VCO 3** → **2600 Ring Mod** → **2600 Fixed Filter** (texture layer)

#### **Audio Processing Chain:**
1. **2600 Mix Out** → **Forbidden Planet Filter** (additional filtering)
2. **Forbidden Planet** → **Afterneath Reverb** (spatial processing)
3. **Afterneath** → **Mixup Channel 2** (complex voice to mix)

---

### **Integration 4: Make Noise 0-Coast - West Meets East**

#### **0-Coast CV Integration (West Coast Approach):**
1. **Hermod+ Track 6** → **0-Coast Pitch** (sequences for West Coast voice)
2. **Maths Ch4** → **0-Coast Dynamics** (complex envelope/VCA control)
3. **Wogglebug Smooth** → **0-Coast Overtone** (chaotic harmonic content)
4. **Marbles Y3** → **0-Coast Slope** (random envelope shapes)
5. **ochd Output 5** → **0-Coast Balance** (oscillator balance modulation)

#### **0-Coast Feedback Integration:**
1. **0-Coast Dynamic Out** → **Rings Strum Input** (West Coast triggers East Coast)
2. **0-Coast Audio** → **Cs-L FM Input** (0-Coast modulates complex oscillator)

#### **Audio Chain:**
1. **0-Coast Audio** → **Wasp Filter** (aggressive West Coast filtering)
2. **Wasp Out** → **Pico DSP** (stereo West Coast effects)

---

## **TIER 2: SPECIALIZED INTEGRATIONS**

### **Integration 5: Moog DFAM - Percussion Powerhouse**

#### **DFAM Polyrhythmic Control:**
1. **Euclidian Circles Out 1** → **DFAM Trigger 1** (euclidean kick patterns)
2. **Euclidian Circles Out 2** → **DFAM Trigger 2** (euclidean snare patterns)
3. **Hermod+ Track 7** → **DFAM VCO Pitch** (pitched percussion sequences)
4. **Numeric Repetitor Out** → **DFAM External Clock** (dynamic rhythm changes)

#### **DFAM CV Modulation:**
1. **Turing Machine CV** → **DFAM VCF Cutoff** (random filter percussion)
2. **Maths Ch1** → **DFAM VCA Decay** (evolving percussion envelope)
3. **Mother32 Assign** → **DFAM Noise Level** (bass-following noise)

#### **Audio Processing:**
1. **DFAM Audio** → **QD Quad Drum Input** (layer analog with digital)
2. **DFAM + QD Mix** → **Lyra8-FX** (experimental percussion processing)

---

### **Integration 6: Moog Subharmonicon - Harmonic Generator**

#### **Subharmonicon Harmonic Control:**
1. **Hermod+ Track 8** → **Subharmonicon Root Pitch** (harmonic root sequences)
2. **Marbles Spread** → **Subharmonicon Polyrhythm** (musical rhythm variations)
3. **Maths Ch2** → **Subharmonicon VCF** (slow harmonic filtering)
4. **Mother32 CV** → **Subharmonicon Quantize** (bass-following harmonics)

#### **Subharmonicon Feedback:**
1. **Subharmonicon Sub 1** → **Rings Frequency** (harmonic resonator excitation)
2. **Subharmonicon Poly Out** → **Arbhar Clock** (polyrhythm drives granular)

#### **Audio Chain:**
1. **Subharmonicon Audio** → **Moon Phase BP Filter** (harmonic filtering)
2. **Moon Phase** → **YYS Matrix** (harmonic spatial processing)

---

## **MASTER CV ROUTING MATRIX**

### **Hermod+ Track Assignments (Semi-Modular Focus):**
- **Track 1**: Mother32 Filter CV (bass filtering)
- **Track 2**: Neutron Lead Sequences (main lead voice)
- **Track 3**: Neutron Filter Sequences (lead filtering)
- **Track 4**: 2600 VCO 1 Sequences (complex voice 1)
- **Track 5**: 2600 VCO 2 Sequences (complex voice 2, harmony)
- **Track 6**: 0-Coast Pitch Sequences (West Coast voice)
- **Track 7**: DFAM Pitch Sequences (pitched percussion)
- **Track 8**: Subharmonicon Root (harmonic sequences)

### **Expected Musical Outcomes:**
- **Massive polyphonic compositions** with 10+ simultaneous voices
- **Eurorack CV orchestrating** multiple semi-modular synths
- **Complex evolution** as CV sources modify all parameters simultaneously
- **Hybrid analog/digital textures** impossible with individual instruments

---

*This integration strategy transforms your 17 semi-modular synthesizers from individual instruments into a unified **Semi-Modular Orchestra** controlled and enhanced by your Eurorack system.*
