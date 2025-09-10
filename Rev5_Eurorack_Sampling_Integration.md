# Rev5 Turntable Integration Guide
*Eurorack Processing & Sampling Workflow*

## Overview
This guide outlines strategies for integrating the Rev5 turntable into your existing Eurorack modular system and MPC sampling workflow. The goal is to transform the Rev5 from a standalone practice tool into a core creative element of your music production process.

## Current State
- **Rev5** connected to mixer for scratching practice
- Using digital song files from computer
- Comfortable with scratching techniques and effects
- **Gap:** Not integrated into original music creation workflow

---

## Audio Integration Strategy

### Primary Signal Path
```
Rev5 Output → Mixer → Listen IO (Eurorack Input) → Modular Processing → Output → MPC Recording
```

### Key Eurorack Modules for Turntable Processing
- **arbhar** - Granular mangling of scratched material
- **Lyra8-FX** - Chaotic processing that complements turntable textures  
- **Ruina Versio** - Distortion/destruction of scratched samples
- **Black Polivoks VCF** - Classic filter sweeps on turntable audio
- **Afterneath** - Reverb/delay for spacey turntable textures

### CV Control Integration
**Modulation Sources:**
- **MATHS** → modulate filter cutoffs during scratching
- **ochd** → subtle LFO modulation of processing parameters
- **Marbles** → random voltage for unpredictable processing variations

---

## Three-Stage Workflow

### Stage 1: Source Preparation
**Content Strategy:**
- Load diverse materials: drum breaks, vocal chops, field recordings
- Include your own unreleased tracks for self-sampling
- Practice specific scratch techniques that create rhythmic patterns or textural sweeps

**Recommended Source Types:**
- **Drum breaks** - for rhythmic scratching into percussion
- **Vocal samples** - for melodic/harmonic manipulation
- **Field recordings** - for ambient texture creation
- **Your own tracks** - for deconstruction and variation

### Stage 2: Eurorack Processing
**Creative Routing Examples:**

#### Rhythmic Processing Chain
```
Rev5 Scratch → Listen IO → Black Polivoks VCF → arbhar → Output
```
*Use for: Filtered scratches with granular rhythm variations*

#### Textural Processing Chain  
```
Rev5 Scratch → Listen IO → Lyra8-FX → Ruina Versio → Afterneath
```
*Use for: Chaotic destruction of turntable audio with spatial processing*

#### Melodic Processing Chain
```
Rev5 Scratch → Listen IO → arbhar → Rings → Output
```
*Use for: Granular scratches through physical modeling resonance*

### Stage 3: Capture & Resample
**Into MPC X/Live II:**
- Record the processed output as new sample material
- Chop and sequence the hybrid turntable/modular textures
- Layer with drum programming from QD and other sources
- Use as texture beds under melodic content from MatrixBrute, etc.

---

## Practical Session Workflow

### Setup Phase
1. **Audio Routing:** Rev5 → Mixer → Listen IO input
2. **Eurorack Patching:** Signal chain patched and ready
3. **Recording Setup:** MPC recording from Eurorack output
4. **Monitor Mix:** Full context monitoring enabled

### Creation Phase
1. **Start with a loop** on Rev5 (4-8 bars recommended)
2. **Scratch in time** with your usual BPM (120-140 suggested)
3. **Process through Eurorack** - start simple, add complexity gradually
4. **Record 4-8 bar phrases** into MPC as you discover interesting combinations
5. **Build sample library** of processed turntable textures

### Production Phase
1. **Chop samples** in MPC for rhythmic use
2. **Layer with electronic drums** (QD, drum modules, etc.)
3. **Sequence alongside** synth parts from MatrixBrute/MiniBrute 2S
4. **Use as texture beds** under melodic content

---

## Specific Techniques to Develop

### Rhythmic Scratching → Eurorack
- **Baby scratches** through filters for rhythmic emphasis
- **Transform patterns** processed by arbhar for glitchy percussion
- **Crossfader cuts** as trigger sources for envelope followers
- **Chirp scratches** into granular processing for textural fills

### Textural Scratching → Eurorack
- **Slow record manipulation** through granular processing
- **Reverse scratches** into reverb/delay for atmospheric sweeps
- **Pitch bends** processed through oscillator sync for metallic textures
- **Power off scratches** into distortion for impact effects

### Hybrid Sampling Techniques
- **Scratch your own beats**, then resample and layer them back in
- **Process field recordings** via turntable, then through modular
- **Create "impossible" scratches** using Eurorack time-stretching/granular
- **Multi-pass processing** - scratch → Eurorack → resample → scratch again

---

## Quick Start Experiments

### Experiment 1: Basic Filter Chain
**Goal:** Learn basic audio routing and filter interaction

**Setup:**
1. Simple drum break loaded on Rev5
2. Basic scratching → Listen IO → Black Polivoks VCF
3. Manual filter sweeps while scratching
4. Record into MPC, use as percussion layer

**Expected Result:** Filtered scratch patterns suitable for rhythmic layering

### Experiment 2: Granular Destruction
**Goal:** Explore textural possibilities with granular processing

**Setup:**
1. Vocal sample loaded on Rev5  
2. Scratch techniques → arbhar (granular processing)
3. Manipulate arbhar parameters while scratching
4. Sample the chaos, use as texture beds

**Expected Result:** Atmospheric, unrecognizable textures from familiar sources

### Experiment 3: Rhythmic Integration
**Goal:** Blend turntable elements with existing drum programming

**Setup:**
1. Load your own drum patterns onto Rev5
2. Scratch in time with QD (Quad Drum Voice)
3. Process through effects chain
4. Layer the processed scratching with original drums

**Expected Result:** Hybrid rhythm tracks with organic and electronic elements

---

## Advanced Integration Concepts

### Self-Sampling Workflow
1. **Record original tracks** from your current setup
2. **Load onto Rev5** for deconstruction
3. **Scratch and manipulate** your own compositions
4. **Process through Eurorack** for additional transformation
5. **Resample into new compositions** - musical ouroboros

### Live Performance Integration
- **Include Rev5 in jam sessions** with other hardware
- **Develop muscle memory** for incorporating turntable elements naturally
- **Create hybrid compositions** featuring both electronic precision and turntable expression

### Synchronization Strategies
- **Use click tracks** or sync references to keep everything in time
- **Experiment with off-grid scratching** for humanization
- **Develop timing relationships** between scratches and modular sequences

---

## Long-term Creative Goals

### Signature Sound Development
Blend the following contrasts:
- **Precision of modular sequencing** with **organic turntable expression**
- **Digital clarity** with **analog turntable warmth**  
- **Structured composition** with **improvisational scratching**
- **Electronic perfection** with **human timing variations**

### Unique Applications
- **Rhythmic punctuation** using transformer scratches
- **Melodic content** from pitched vocal scratches
- **Atmospheric textures** from processed field recordings
- **Glitch elements** from quick cuts and stutters

### Performance Integration
- **Real-time manipulation** during live sessions
- **Spontaneous creativity** within structured compositions
- **Audience engagement** through visible turntable performance
- **Dynamic arrangements** impossible with purely electronic means

---

## Technical Notes

### Recording Considerations
- **Always record everything** - turntable work is often spontaneous and hard to recreate
- **Use multiple takes** and comp the best elements
- **Monitor levels** carefully - scratching can create sudden volume spikes
- **Leave headroom** for processing and layering

### Sync and Timing
- **Start with steady tempos** (120-130 BPM) for easier integration
- **Use metronome references** when learning integration
- **Embrace organic timing** once comfortable with basics
- **Record longer phrases** to capture natural timing variations

### Equipment Care
- **Quality control records** for consistent scratching response
- **Regular maintenance** of turntable and crossfader
- **Backup source material** in multiple formats
- **Cable management** for complex routing scenarios

---

## Next Steps
1. **Choose one experiment** to start with based on current interests
2. **Document results** and refine techniques
3. **Build sample library** of processed turntable textures
4. **Integrate into existing compositions** gradually
5. **Develop performance skills** for live application

This integration represents a significant creative expansion of your studio capabilities, adding organic expression and unpredictable elements to your highly structured electronic setup. The combination of technical Eurorack skills with expressive turntable techniques could become a distinctive signature element of your musical style.
