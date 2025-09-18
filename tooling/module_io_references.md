# Module I/O Reference Sheet

## Purpose
This document serves as the definitive reference for actual inputs and outputs on modules to prevent guide errors.

## Erica Synths Pico Voice
**Actual Inputs:**
- 1V/Oct input (pitch control)
- CV input (assignable to Tune, PAR1, or PAR2)

**Actual Outputs:**
- Audio output

**NO GATE INPUT** - algorithms respond to note changes on 1V/Oct input

**Control Interface:**
- Button (algorithm selection + config mode)
- PAR1 knob
- PAR2 knob
- Tune knob

**Common Misconceptions:**
- Has gate input (it doesn't - uses note change detection)

## Erica Synths Pico DRUM2
**Actual Inputs:**
- TRIGG input (trigger input - accepts +5V, 1ms minimum)
- CV1 input (assignable - default PARAM2, can be DECAY or algorithm selection)
- CV2 input (assigned to PARAM1, also tracks 1V/Oct)

**Actual Outputs:**
- OUT (audio output)

**Control Interface:**
- MODE button (algorithm selection + config mode)
- PARAM1 knob
- PARAM2 knob
- DECAY knob
- RGB LED (algorithm indication + trigger feedback)

**Common Misconceptions:**
- Gate input (it's called TRIGG input specifically)

## Template for Additional Modules
Copy this format when adding new modules:

## [Module Name]
**Actual Inputs:**
- [List exact input names as printed on module]

**Actual Outputs:**
- [List exact output names as printed on module]

**Control Interface:**
- [Knobs, buttons, switches with exact names]

**Common Misconceptions:**
- [Note any inputs/outputs commonly assumed but not present]
