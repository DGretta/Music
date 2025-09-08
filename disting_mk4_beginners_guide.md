# Disting mk4 Beginner's Guide & FAQ
*The Swiss Army Knife of Eurorack*

## What is the Disting mk4?

The Disting mk4 is a **multi-algorithm utility module** that can function as dozens of different modules in one tiny 4HP package. Think of it as having 80+ different modules that you can switch between instantly. It's like the ultimate "gap filler" that can be whatever your patch needs.

## Basic Controls & Interface

### Physical Layout
- **Algorithm Knob**: Selects which function the module performs (A.1, A.2, B.1, etc.)
- **Z Knob**: Main parameter control (what it does depends on the algorithm)
- **X & Y Inputs**: CV inputs (function varies by algorithm)
- **Main Outputs**: Audio or CV outputs (A & B)
- **S & T Outputs**: Additional outputs on some algorithms

### The Display
- **Top Line**: Shows current algorithm (e.g., "A.1 Precision Adder")
- **Bottom Line**: Shows parameter values or algorithm status
- **Brightness**: Indicates signal activity

## Getting Started: Essential Algorithms

### For Beginners - Start With These:

**A.1 - Precision Adder**
- **What it does**: Adds two CV signals together
- **Use case**: Combine LFO + envelope, or transpose sequences
- **Patch**: LFO → X input, sequence → Y input, sum → oscillator pitch

**A.8 - Dual Quantizer**
- **What it does**: Forces incoming CV to musical notes/scales
- **Use case**: Make random CV or smooth LFO into musical melodies
- **Patch**: Random CV → X input, quantized notes → oscillator

**B.1 - Sample & Hold**
- **What it does**: Captures and holds CV values when triggered
- **Use case**: Create stepped random sequences
- **Patch**: Noise → X input, clock → Y input, stepped CV → out

**B.5 - LFO**
- **What it does**: Low Frequency Oscillator for modulation
- **Use case**: When you need an extra LFO
- **Z knob**: Controls speed

**J.1 - Audio Playback**
- **What it does**: Plays back audio samples from SD card
- **Use case**: Drum samples, vocal snippets, sound effects
- **Requires**: SD card with samples

## Common Use Cases in Your Rack

### As a Clock Divider
- **Algorithm**: F.1 - Clock Divider/Multiplier
- **Setup**: Master clock → X input
- **Output**: Divided clock signals for polyrhythms

### As a Quantizer
- **Algorithm**: A.8 - Dual Quantizer
- **Setup**: Cellz CV → X input, quantized CV → Chipz pitch
- **Result**: Touch controller plays in key

### As an Extra LFO
- **Algorithm**: B.5 - LFO
- **Setup**: LFO out → filter cutoff or VCA
- **Z knob**: Speed control

### As a Delay Effect
- **Algorithm**: I.1 - Clockable Delay
- **Setup**: Audio → X input, delayed audio → output
- **Z knob**: Delay time

### As a Tuner
- **Algorithm**: M.4 - Tuner
- **Setup**: Oscillator → X input
- **Display**: Shows pitch and cents

## Algorithm Categories Explained

### A Series - CV Utilities
- **A.1-A.8**: CV processors (adders, attenuators, quantizers)
- **Best for**: CV manipulation and control

### B Series - Modulation Sources  
- **B.1-B.8**: LFOs, S&H, random sources, envelopes
- **Best for**: When you need more modulation

### C Series - Triggers & Gates
- **C.1-C.8**: Clock processing, trigger utilities
- **Best for**: Rhythmic and timing functions

### F Series - Clocking
- **F.1-F.8**: Clock dividers, multipliers, swing
- **Best for**: Complex timing relationships

### G Series - Filters
- **G.1-G.8**: Various filter types and processors
- **Best for**: When you need specific filter types

### H Series - Distortion & Dynamics
- **H.1-H.8**: Distortion, compression, limiting
- **Best for**: Sound shaping and dynamics

### I Series - Delays & Reverbs
- **I.1-I.8**: Various delay and reverb algorithms
- **Best for**: Time-based effects

### J Series - Audio Playback
- **J.1-J.8**: Sample playback, wavetable oscillators
- **Best for**: Playing back samples or wavetables

## Frequently Asked Questions

### Q: How do I know what the Z knob does?
**A**: It varies by algorithm! Check the manual or experiment. Generally:
- **Speed** for LFOs and clocks
- **Amount** for processors and effects
- **Selection** for multi-option algorithms

### Q: Can I save settings?
**A**: The mk4 remembers the last algorithm and Z knob position when powered off, but doesn't save per-algorithm settings.

### Q: What's the difference between outputs A/B and S/T?
**A**: 
- **A & B**: Main outputs (most algorithms use these)
- **S & T**: Secondary outputs (some algorithms provide additional signals here)

### Q: Do I need an SD card?
**A**: Only for sample playback (J series) and wavetable algorithms. Most functions work without one.

### Q: How do I update the firmware?
**A**: Download firmware from Expert Sleepers website, put on SD card, power up while holding Z knob.

### Q: Why is my display dim/bright?
**A**: Display brightness indicates signal activity - brighter means more signal present.

### Q: Can it work as an oscillator?
**A**: Yes! Several algorithms generate audio-rate signals (wavetable oscillators, sine waves, etc.)

## Pro Tips for Your Setup

### With Your Cellz Controller
- Use **A.8 Quantizer** to make touch controller musical
- Use **A.1 Precision Adder** to offset/transpose Cellz CV

### With Your Chipz Oscillators
- Use **G series filters** for additional filtering options
- Use **B.5 LFO** for extra modulation sources

### With Your Pico Trigger
- Use **F.1 Clock Divider** to create complex polyrhythms
- Use **C series** for trigger processing

### With Your MISO
- Use **A series** CV utilities for even more CV processing
- Use **B series** modulation when MISO isn't enough

### Quick Patching Ideas
1. **Cellz → Disting (A.8) → Chipz**: Musical touch control
2. **Pico Trigger → Disting (F.1) → Dual EG**: Polyrhythmic envelopes  
3. **Chipz → Disting (I.1) → Forbidden Planet**: Delayed/filtered audio
4. **Random CV → Disting (B.1) → Multiple destinations**: Controlled chaos

## Troubleshooting

### "Display shows nothing"
- Check power connections
- Ensure ribbon cable is correctly oriented

### "No sound output"
- Check algorithm - some are CV only
- Verify input connections
- Try different Z knob settings

### "CV not working as expected"
- Check voltage ranges (some algorithms expect specific ranges)
- Try attenuating input signals
- Verify algorithm selection

### "Algorithms seem limited"
- Update firmware for latest algorithms
- Check Expert Sleepers website for updates

## Advanced Features

### Preset Loading (J.8)
- Load custom wavetables and samples
- Requires properly formatted SD card

### Calibration
- Hold Z knob while powering up to access calibration
- Follow on-screen prompts for accurate CV

### Algorithm Chaining
- Some algorithms can be "chained" by using both inputs creatively
- Experiment with feedback loops (carefully!)

## Remember
The Disting mk4 is incredibly deep - don't try to learn everything at once! Start with a few basic algorithms that solve immediate needs in your patches, then gradually explore more functions as you become comfortable. It's perfectly normal to use it for just 2-3 favorite algorithms most of the time.

The key is experimentation - the Z knob is your friend, and most settings are non-destructive, so twist away and see what happens!

---
*For complete algorithm documentation, always refer to the official Expert Sleepers manual at: https://www.expert-sleepers.co.uk/disting.html*