# Simple Eurorack Patch

## Modules Used
- **Chipz (Cre8audio)** - 12HP
- **Cellz (Cre8audio)** - 12HP  
- **Ruina Versio (Noise Engineering)** - 10HP
- **Behringer 1033 Dual Envelope Generator** - 16HP
- **Forbidden Planet (TipTop Audio)** - 8HP

## Core Patch

### Sequencing & Sound Sources
- **Chipz** - Main melodic voice (leads, bass, arps)
- **Cellz** - Rhythmic patterns and secondary melodies
- Sync them: Cellz clock out → Chipz clock in

### Modulation
- **Behringer 1033 Dual Envelope:**
  - ENV1: Chipz VCA (amplitude shaping)
  - ENV2: Forbidden Planet filter cutoff (movement)

### Signal Path
- Chipz audio out → **Forbidden Planet** audio in (filtering)
- Forbidden Planet audio out → **Ruina Versio** input (effects)
- Ruina Versio output → your mixer/interface

## Key Connections

1. Cellz trigger out → 1033 ENV1 trigger (gates your main voice)
2. Cellz different trigger → 1033 ENV2 trigger (rhythmic filter movement)
3. ENV1 out → Chipz VCA CV
4. ENV2 out → Forbidden Planet cutoff CV
5. Optional: Cellz CV out → Chipz pitch CV (for melodic interaction between the two)

## Playing Techniques

- Use Cellz to create rhythmic trigger patterns that drive both the amplitude and filter movement
- Experiment with different envelope shapes on the 1033 for varied attack/decay characteristics
- Try different algorithms on Ruina Versio - the reverbs and delays work great with the filtered chiptune sounds

This setup gives you a classic subtractive synthesis workflow with built-in sequencing and lush effects processing. Very musical and immediate!