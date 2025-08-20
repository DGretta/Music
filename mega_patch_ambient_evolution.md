# MEGA PATCH: "Ambient Evolution Journey"

## Patch Name: **"Chill Out Inspired - Evolving Ambient Soundscape Ecosystem"**
*A continuous ambient journey with granular textures, spatial processing, and gradual evolution*

---

## **Master Control: Squarp Hermod+ Configuration**

### **Track Assignments (Ambient Focus):**
- **Track 1**: Drone Voice 1 Pitch (Cs-L Osc A) - 32-step evolving melody, whole notes
- **Track 2**: Drone Voice 2 Pitch (Castor & Pollux A) - 24-step counter-melody, half notes
- **Track 3**: Granular Position (Arbhar) - 64-step slow position sweeps
- **Track 4**: Bass Pulse (Mob of Emus) - Sparse bass notes, 16-step pattern
- **Track 5**: Filter Evolution (Moon Phase) - 48-step filter parameter sequences
- **Track 6**: Reverb Space Control (Afterneath) - 128-step spatial evolution
- **Track 7**: Texture Density (Arbhar Density) - 32-step granular density waves
- **Track 8**: Global Modulation (Maths trigger) - Whole note triggers for evolution cycles

### **Hermod+ Settings:**
- **Master Tempo**: 75 BPM (chill ambient pace)
- **Track 1**: 1/1 whole notes, C Dorian scale, 3-octave range, legato
- **Track 2**: 1/2 half notes, G Dorian (5th), 2-octave range, some rests
- **Track 3**: 1/4 notes, 0-5V sweeps for granular position
- **Track 4**: 1/4 notes with 70% rests, bass register, sparse pattern
- **Track 5**: 1/2 dotted, filter parameter modulation, smooth curves
- **Track 6**: 1/1 whole notes, reverb parameter evolution, very slow
- **Track 7**: 1/4 triplets, granular density waves, 0-8V range
- **Track 8**: 4/1 every 4 bars, triggers major evolution cycles

---

## **VOICE 1: Primary Drone Complex (Cs-L System)**

### **Dual Oscillator Setup:**
1. **Hermod+ Track 1 CV** → **Cs-L Oscillator A V/Oct** (main drone melody)
2. **Hermod+ Track 1 Gate** → **EG2 Gate Input** (slow envelope trigger)
3. **Cs-L Osc A Sine Out** → **Mult Input 1** (pure drone tone)
4. **Cs-L Osc B Triangle Out** → **Mult Input 2** (harmonic drone)

### **Drone Processing:**
1. **Mult 1 Out 1** → **Moon Phase LP Input L** (main drone filtering)
2. **Mult 1 Out 2** → **YYS Input 1** (drone to matrix mixer)
3. **Mult 2 Out 1** → **Moon Phase LP Input R** (harmonic drone)
4. **EG2 Output** → **Moon Phase LP CV** (very slow filter opening)

### **Cross-Modulation:**
1. **Cs-L Osc A Triangle** → **Cs-L Osc B FM Input** (subtle cross-mod)
2. **Maths Ch1 Output** → **Cs-L Index CV** (internal mod bus control)

### **Settings:**
- **Cs-L**: Both oscillators tuned to perfect 5th, minimal cross-mod
- **EG2**: Attack 2 o'clock, Decay 3 o'clock, Sustain 80%, Release 2 o'clock
- **Moon Phase**: LP Cutoff 1 o'clock, Resonance 11 o'clock

---

## **VOICE 2: Harmonic Pad Layer (Castor & Pollux + Processing)**

### **Pad Voice:**
1. **Hermod+ Track 2 CV** → **Castor & Pollux Osc A V/Oct** (counter-melody)
2. **Hermod+ Track 2 Gate** → **Function Junction ADSR Gate** (pad envelope)
3. **Castor & Pollux Osc A Sine** → **Forbidden Planet LP Input** (warm filtering)
4. **Castor & Pollux Osc B Sine** → **Forbidden Planet BP Input** (detuned layer)

### **Pad Enhancement:**
1. **Function Junction ADSR Out** → **Forbidden Planet CV Input** (filter swell)
2. **Function Junction LFO Triangle** → **Castor & Pollux Osc B Detune** (subtle chorus)
3. **Forbidden Planet Output** → **YYS Input 2** (pad to matrix)

### **Settings:**
- **Castor & Pollux**: Both on sine waves, Osc B detuned +7 cents
- **Function Junction**: Very slow ADSR (3+ second attack)
- **Forbidden Planet**: Cutoff 12 o'clock, minimal resonance

---

## **CENTRAL TEXTURE ENGINE: Arbhar Granular System**

### **Sample Source & Control:**
1. **Plaits Main Out** → **Arbhar Audio Input** (rich harmonic source)
2. **Hermod+ Track 3 CV** → **Arbhar Position CV** (sequenced grain position)
3. **Hermod+ Track 7 CV** → **Arbhar Density CV** (evolving grain density)
4. **Marbles t1** → **Arbhar Trigger Input** (random grain activation)

### **Granular Modulation:**
1. **Maths Ch2 Output** → **Arbhar Size CV** (slow grain size evolution)
2. **ochd Output 5** → **Arbhar Pitch CV** (subtle pitch drift)
3. **Marbles Y2** → **Arbhar Stretch CV** (random time stretching)

### **Granular Output Processing:**
1. **Arbhar L Out** → **Afterneath Input** (granular to reverb)
2. **Arbhar R Out** → **Pico DSP Input** (granular to stereo effects)
3. **Afterneath Output** → **YYS Input 3** (processed granular)
4. **Pico DSP Output** → **YYS Input 4** (stereo granular)

### **Settings:**
- **Plaits**: Wavetable or String model for rich harmonics
- **Arbhar**: Medium grain size, moderate density, Freeze occasionally
- **Afterneath**: Reflect 2 o'clock, Drag 2 o'clock, Damage 9 o'clock
- **Pico DSP**: Stereo delay algorithm, long decay times

### **Recommended Arbhar Samples:**
- **Orchestral pads** (strings, brass sustains)
- **Vocal textures** (choirs, solo voices)
- **Ambient recordings** (room tones, nature sounds)
- **Synth pads** (analog warmth for granular processing)

---

## **ATMOSPHERIC LAYER: Rings Physical Modeling**

### **Resonator Excitation:**
1. **Turing Machine Gate Out** → **Rings Strum Input** (sparse random strikes)
2. **Turing Machine CV Out** → **Disting X Input** (random pitches)
3. **Disting A Output** → **Rings Frequency CV** (quantized resonator pitches)
4. **Marbles Y1** → **Rings Damping CV** (evolving resonance decay)

### **Resonator Processing:**
1. **Rings Odd Output** → **Mult Input 3** (metallic resonances)
2. **Mult 3 Out 1** → **A-130-2 Input 1** (resonance level control)
3. **Mult 3 Out 2** → **Stomp Send** (resonance through pedal effects)
4. **Stomp Return** → **Mixup Channel 1** (processed resonances)

### **Settings:**
- **Rings**: Resonator mode, Structure 1 o'clock (metallic)
- **Turing Machine**: Low randomness, long 16-step patterns
- **Disting**: Minor pentatonic scale quantizer
- **A-130-2**: Slow response for gentle resonance swells

---

## **BASS FOUNDATION: Sparse Sub-Bass (Mob of Emus)**

### **Bass Voice:**
1. **Hermod+ Track 4 CV** → **Mob of Emus Voice 1 Pitch** (sparse bass notes)
2. **Hermod+ Track 4 Gate** → **Simple ADSR Gate** (bass envelope)
3. **Mob of Emus Voice 1 Out** → **Wasp Filter Input** (bass filtering)
4. **Simple ADSR Output** → **Wasp Filter CV** (envelope-controlled filtering)

### **Bass Enhancement:**
1. **Wasp Filter Output** → **Ruina Versio L Input** (subtle bass saturation)
2. **ochd Output 1** → **Mob of Emus Voice 1 Wavetable CV** (slow timbre evolution)

### **Settings:**
- **Mob of Emus**: Sub-bass wavetable, Voice 1 only, -2 octaves
- **Simple ADSR**: Slow attack, long decay for ambient bass
- **Wasp**: Cutoff 10 o'clock, low resonance
- **Ruina Versio**: Minimal settings, just gentle saturation

---

## **MODULATION ECOSYSTEM: Slow Evolution**

### **Primary Evolution Sources:**
1. **Hermod+ Track 8 Gate** → **Maths All Triggers** (major evolution cycles)
2. **Maths Ch1 Output** → **YYS Crossfader CV** (slow mix changes)
3. **Maths Ch3 Output** → **Mult Input 4** (medium-slow modulation)
4. **Maths Ch4 Output** → **MISO Section 1 Input** (evolution processing)

### **Distributed Modulation:**
1. **Mult 4 Out 1** → **Plaits TIMBRE CV** (source material evolution)
2. **Mult 4 Out 2** → **Moon Phase Resonance CV** (filter character drift)
3. **MISO Section 1 Out** → **Euclidian Circles Prob CV** (rhythm probability drift)
4. **MISO Section A Out** → **Wogglebug Rate CV** (controlled chaos evolution)

### **Atmospheric Modulation:**
1. **Marbles Y3** → **Afterneath Drag CV** (reverb space evolution)
2. **ochd Output 7** → **Moon Phase Stereo CV** (gentle stereo movement)
3. **ochd Output 8** → **Castor & Pollux Osc B Detune** (slow chorus effect)

### **Settings:**
- **Maths**: Ch1=45s cycle, Ch2=60s, Ch3=30s, Ch4=90s (different evolution rates)
- **MISO**: Gentle scaling and offset for smooth parameter changes
- **ochd**: Outputs 7-8 at very slow speeds (LFO range)
- **Marbles**: Spread 10 o'clock for gentle musical variations

---

## **SPATIAL PROCESSING: Wide Stereo Field**

### **Stereo Matrix (YYS):**
1. **YYS Output A** → **Mult Input 5** (left-weighted mix)
2. **YYS Output B** → **Mult Input 6** (right-weighted mix)
3. **Mult 5 Out 1** → **Mixup Channel 1 L** (left spatial)
4. **Mult 6 Out 1** → **Mixup Channel 1 R** (right spatial)

### **Additional Spatial Layers:**
1. **Moon Phase HP Out L** → **Mixup Channel 2 L** (filtered drone left)
2. **Moon Phase HP Out R** → **Mixup Channel 2 R** (filtered drone right)
3. **Ruina Versio L Out** → **Mixup Channel 3 L** (bass foundation)
4. **Ruina Versio R Out** → **Mixup Channel 3 R** (bass foundation)

### **Final Ambient Processing:**
1. **Mixup Main L** → **Listen IO Input L**
2. **Mixup Main R** → **Listen IO Input R**

---

## **SUBTLE RHYTHM ELEMENTS (Optional Percussion)**

### **Ambient Percussion:**
1. **Euclidian Circles Out 1** → **Rings Strum** (very sparse bell strikes)
2. **Euclidian Circles Out 5** → **Drums2 Trigger** (subtle texture hits)
3. **Drums2 Output** → **A-130-2 Input 2** (percussion processing)
4. **ochd Output 2** → **A-130-2 CV 2** (breathing percussion level)

### **Settings:**
- **Euclidian Circles**: Ch1 32/3 (very sparse), Ch5 64/5 (ultra-sparse)
- **Drums2**: Soft percussion algorithms, low volume
- **A-130-2**: Very gentle VCA response

---

## **PERFORMANCE CONTROL (Minimal but Expressive)**

### **Subtle Expression:**
1. **Pressure Points Touch 1** → **YYS Crossfader Override** (manual spatial control)
2. **Pressure Points Touch 2** → **Arbhar Freeze Gate** (texture holds)
3. **Pressure Points Touch 3** → **Afterneath Damage CV** (space character)
4. **Eraserhead CV Out** → **MISO Crossfader CV** (gentle expression)

### **Global Evolution Triggers:**
1. **Cellz Touch Random** → **Marbles External Clock** (evolution acceleration)
2. **Function Junction Manual Gate** → **Wogglebug Reset** (chaos restart)

---

## **RECOMMENDED SAMPLE LIBRARY FOR ARBHAR:**

### **Primary Textures (Load these into Arbhar SD card):**
- **Orchestral Pads**: String sections, brass sustains, woodwind textures
- **Vocal Layers**: Choir sustains, solo vocal notes, breath textures
- **Ambient Recordings**: Room tones, distant traffic, water sounds
- **Synth Pads**: Analog synthesizer sustains, vintage string machines
- **Natural Resonances**: Singing bowls, gongs, metal resonances

### **Granular Processing Approach:**
- **Position sweeps** create evolving timbral content
- **Density modulation** makes textures breathe
- **Stretch/pitch** keeps recognition while transforming
- **Freeze moments** create sustained ambient clouds

---

## **DETAILED MODULE SETTINGS:**

### **Hermod+ Global:**
- **Master Clock**: 75 BPM
- **Swing**: 5% (barely perceptible)
- **Track 1**: 32 steps, whole note timing, smooth legato curves
- **Track 2**: 24 steps, half note timing, 30% rest probability
- **Track 3**: 64 steps, quarter note timing, position sweeps 0-5V
- **Track 4**: 16 steps, quarter note timing, 70% rest probability
- **Track 5**: 48 steps, half note timing, filter parameter curves
- **Track 6**: 128 steps, whole note timing, spatial evolution
- **Track 7**: 32 steps, quarter note triplets, density waves
- **Track 8**: 16 steps, whole note timing, evolution triggers

### **Primary Oscillators:**
- **Cs-L Osc A**: Sine wave, Coarse +0, Fine +2 cents
- **Cs-L Osc B**: Triangle wave, Coarse +7 semitones (perfect 5th)
- **Castor & Pollux A**: Sine wave, Coarse -12 semitones (octave down)
- **Castor & Pollux B**: Triangle, Coarse -5 semitones (perfect 4th down)
- **Mob of Emus**: Voice 1 only, sub-bass wavetable, -2 octaves

### **Granular Engine (Arbhar):**
- **Input Source**: Plaits on String model or Wavetable
- **Grain Size**: 12 o'clock (medium grains)
- **Position**: Controlled by Hermod+ Track 3
- **Density**: Controlled by Hermod+ Track 7
- **Pitch**: +0 with subtle ochd modulation
- **Stretch**: 2 o'clock for time stretching
- **Freeze**: Triggered by Pressure Points for sustains

### **Spatial Processing:**
- **Moon Phase**: LP 1 o'clock, HP 10 o'clock, Resonance 11 o'clock
- **Afterneath**: Reflect 3 o'clock, Drag 2 o'clock, Damage 8 o'clock
- **YYS Matrix**: Creating wide stereo field from mono sources
- **Mixup**: Individual channel panning for spatial distribution

### **Evolution Modulation:**
- **Maths Ch1**: 45-second cycles (slow filter evolution)
- **Maths Ch2**: 60-second cycles (granular parameter drift)
- **Maths Ch3**: 30-second cycles (medium-speed changes)
- **Maths Ch4**: 90-second cycles (macro evolution)

---

## **SIGNAL FLOW DIAGRAM:**

### **Audio Paths:**
```
Cs-L Drones → Moon Phase LP → YYS Matrix ↘
Castor & Pollux Pads → Forbidden Planet → YYS ↗    → Spatial Mix → Reverb → Output
Plaits → Arbhar Granular → Afterneath ↗              
Mob of Emus Bass → Wasp → Gentle Saturation ↗       
Rings Resonances → Stomp Pedal → Ambience ↗         
```

### **CV Evolution Paths:**
```
Hermod+ 8 Tracks → Multiple Destinations
Maths 4 Channels → YYS Matrix → MISO Processing → Distributed Modulation
Marbles → Musical Randomness → Gentle Parameter Drift
ochd → Slow LFOs → Subtle Movement (chorus, drift, breathing)
```

---

## **PATCH EVOLUTION TIMELINE:**

### **Minutes 0-3: Establishment**
- Cs-L drones establish harmonic foundation
- Arbhar begins gentle granular processing
- Subtle bass notes provide foundation
- Minimal reverb, intimate space

### **Minutes 3-6: Development**
- Castor & Pollux pads enter
- Granular density increases
- Reverb space begins expanding
- Filter evolution becomes apparent

### **Minutes 6-9: Expansion**
- All voices active and evolving
- Rings adds occasional resonant strikes
- Spatial field reaches maximum width
- Modulation cycles create parameter drift

### **Minutes 9-12: Transformation**
- Maths cycles complete, creating new relationships
- Granular processing becomes more prominent
- Bass voice evolves timbrally
- Reverb spaces shift character

### **Minutes 12+: Continuous Evolution**
- System reaches mature state but continues evolving
- All modulation sources create ongoing change
- Suitable for extended listening/meditation

---

## **PERFORMANCE ELEMENTS:**

### **Gentle Real-Time Control:**
- **Pressure Points Touch 1**: Manual spatial control (overrides automatic)
- **Pressure Points Touch 2**: Granular freeze for sustained textures
- **Pressure Points Touch 3**: Reverb character shift
- **Eraserhead**: Gentle expression over mix balance
- **Function Junction Manual**: Trigger evolution cycles manually

### **System Reset Options:**
- **Cellz Random Touch**: Accelerate Marbles evolution
- **Wogglebug Manual**: Reset chaos patterns
- **Hermod+ Mute/Solo**: Remove/isolate layers for performance

---

## **EXPECTED SONIC CHARACTER:**

### **Overall Atmosphere:**
- **Wide, immersive stereo field** with evolving spatial characteristics
- **Rich harmonic content** from multiple oscillator layers
- **Granular textures** providing constant subtle movement
- **Gentle evolution** that rewards extended listening
- **Occasional percussive elements** for rhythmic anchor
- **Deep reverb spaces** creating sense of vast environments

### **Textural Elements:**
- **Drone foundation** (Cs-L complex)
- **Harmonic pads** (Castor & Pollux)
- **Granular clouds** (Arbhar processing)
- **Resonant strikes** (Rings physical modeling)
- **Sub-bass foundation** (Mob of Emus)
- **Spatial reverb** (Afterneath + processing)

---

## **BUILD COMPLEXITY:**
- **Modules Used**: 20+ modules across multiple cases
- **Patch Cables**: 70+ connections
- **Build Time**: 3-5 hours for complete setup
- **Samples Required**: 10-20 ambient/orchestral samples for Arbhar
- **Performance Time**: Infinite evolution - designed for extended listening

---

*This patch creates a "Chill Out" inspired ambient journey that evolves continuously while maintaining the dreamy, spatial character of classic ambient house. The granular processing engine ensures constant textural interest while the polyrhythmic elements add subtle forward motion.*

## **Philosophy**: An electronic ecosystem that breathes, evolves, and creates its own ambient narrative over time.
