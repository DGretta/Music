# Disting mk4 Clock Source Setup Guide

## **Setting Up Disting mk4 as Clock Source**

### **Step 1: Select the Clock Algorithm**
1. **Press the S encoder once** to enter the menu
2. **Press S again** to select "Algorithm" (first menu item)
3. **Turn the S encoder** to navigate to algorithm **F.1 - Clock** (this is the main clock algorithm)
4. **Press S** to confirm selection

### **Step 2: Configure the Clock**
- **Z knob/CV**: Controls the clock rate/speed
- **Z button press**: Acts as **tap tempo** - press repeatedly to set the tempo
- **X input**: External clock input (if you want to sync to another clock)
- **Y input**: Run/stop control
- **A & B outputs**: Clock outputs (can be set to different divisions)

### **Step 3: Set Clock Divisions for Outputs A & B**
**Note:** Based on practical use, the F1 algorithm parameter access differs from documentation.

#### **Access Parameters for F1:**
1. **Press the Z knob** to cycle through available parameters (if any)
2. **Turn the S encoder** to adjust the current parameter value
3. **Watch the display** - it will briefly show parameter numbers and values

#### **Alternative Parameter Access:**
- **Hold S encoder and turn** to select which parameter to adjust
- **Release S encoder** and turn to change the parameter value

#### **If F1 Doesn't Support Divisions:**
The F1 algorithm may be designed as a basic clock generator without built-in divisions. For reliable clock divisions, use:

**B-6 (Clockable LFO) - Recommended:**
1. Select algorithm **B-6**
2. **X input**: Clock input
3. **Z knob**: Clock division/multiplication control (displays on screen)
   - **Negative values shown** = divisions (e.g., -2 = divide by 2)
   - **Positive values shown** = multiplications (e.g., 2 = multiply by 2)
4. **A & B outputs**: Divided/multiplied clock outputs

**G-6 (MIDI Clock) - For MIDI Integration:**
- **Requires incoming MIDI clock** from DAW, sequencer, or MIDI clock source
- **Parameter 0**: Clock divisor for Output A
- **Parameter 1**: Clock divisor for Output B  
- **MIDI input must be connected** to Disting's MIDI port
- **Converts MIDI clock to analog clock divisions** on outputs A & B
- **Also converts analog clock input (X) to MIDI clock output**

---

## **B-6 - Clockable LFO Setup (Recommended for Clock Divisions)**

The B-6 Clockable LFO algorithm is excellent for generating clock divisions and multiplications from an input clock source.

### **Step 1: Select B-6 Clockable LFO**
1. **Press S encoder once** to enter menu
2. **Press S again** to select "Algorithm"
3. **Turn S encoder** to navigate to **B-6 - Clockable LFO**
4. **Press S** to confirm selection

### **Step 2: Understand the Inputs/Outputs**
- **X input**: Clock input (1V+ triggers)
- **Y input**: Waveshape control (affects output waveform)
- **Z knob**: Clock division/multiplication control
- **A output**: Shaped LFO output (saw → sine → triangle based on Y input)
- **B output**: Pulse output (adjustable pulse width based on Y input)

### **Step 3: Configure Clock Division/Multiplication**
1. **Connect your master clock** → **X input**
2. **Turn the Z knob** to set division/multiplication:
   - **Display shows negative values** = divisions (e.g., "-2" = divide by 2)
   - **Display shows positive values** = multiplications (e.g., "2" = multiply by 2)
   - **Available range**: Divide by 16 to multiply by 16

### **Step 4: Choose Your Output**
- **Use B output for clock signals** - clean pulse output perfect for clocking other modules
- **Use A output for modulation** - shaped waveform for CV modulation
- **Y input controls pulse width** on B output (0V = narrow pulse, +5V = 50% duty cycle, -5V = wide pulse)

### **Division/Multiplication Chart:**
| Z Knob Display | Function | Musical Use |
|----------------|----------|-------------|
| -16 | ÷16 | Very slow, whole notes |
| -8 | ÷8 | Half notes |
| -4 | ÷4 | Quarter notes |
| -2 | ÷2 | Eighth notes |
| -1 | (same as input) | Same timing |
| 2 | ×2 | Double speed |
| 4 | ×4 | Quadruple speed |
| 8 | ×8 | Very fast subdivision |
| 16 | ×16 | Extremely fast |

### **Tap Tempo Feature:**
- **Press Z knob multiple times** to tap in a tempo
- Especially useful when no external clock is connected
- The timing between Z button presses sets the base tempo

### **Parameter Control:**
**Parameter 0** (access by pressing Z knob to cycle through parameters):
- **Attenuation control** for both outputs
- **Range**: -1 to 31
- **Value -1**: No output
- **Value 31**: Full ±8V output range

### **Common B-6 Clock Setup Examples:**

#### **Basic Clock Divider:**
```
[Master Clock] → [B-6 X Input] → [B-6 B Output] → [Sequencer Clock In]
                                  Z knob = -4 (÷4)
```
**Result**: Quarter note pulses from any input clock

#### **Multiple Division Outputs:**
```
[Master Clock] → [B-6 #1 X Input] → [B-6 #1 B Output] → [Kick Drum Trigger]
                  Z knob = -4 (÷4)
                  
[Master Clock] → [B-6 #2 X Input] → [B-6 #2 B Output] → [Hi-Hat Trigger]  
                  Z knob = -2 (÷2)
```
**Result**: Different drum elements triggered at different divisions

#### **Clock + Modulation:**
```
[Master Clock] → [B-6 X Input] → [B-6 A Output] → [Filter Cutoff CV]
                                 [B-6 B Output] → [Envelope Trigger]
                 Z knob = -8, Y input = slow LFO
```
**Result**: Slow filter modulation synced to clock + trigger pulses

### **Pro Tips for B-6:**
- **B output is perfect for clock signals** - clean, consistent pulse width
- **A output great for modulation** - musical waveforms synced to your tempo
- **Y input adds expression** - connect an LFO to Y for evolving pulse widths
- **Combine multiple B-6 units** for complex polyrhythmic setups
- **Use tap tempo** when performing without external clock reference

### **B-6 vs Other Clock Algorithms:**
- **B-6**: Best for clock divisions with modulation capabilities
- **F-1**: Basic clock generation, limited division control
- **G-6**: MIDI-focused, best for MIDI clock conversion
- **C-3**: Complex Euclidean patterns, not simple divisions

### **Alternative Clock Algorithms:**
- **F.2 - Clock Divider/Multiplier**: If you have an external clock and want divisions
- **B.5 - LFO**: Can also work as a slow clock source
- **C.3 - Euclidean Patterns**: For more complex rhythmic patterns (see detailed setup below)

## **C.3 - Euclidean Patterns Setup**

The C.3 Euclidean Patterns algorithm generates complex rhythmic patterns based on mathematical distribution of beats. This is excellent for creating polyrhythmic sequences and interesting drum patterns.

### **Step 1: Select C.3 Euclidean Patterns**
1. **Press S encoder once** to enter menu
2. **Press S again** to select "Algorithm"
3. **Turn S encoder** to navigate to **C.3 - Euclidean Patterns**
4. **Press S** to confirm

### **Step 2: Understand the Inputs/Outputs**
- **X input**: Clock input (advances pattern by one step when > 1V)
- **Y input**: Reset input (resets pattern to step 1)
- **Z knob**: Controls number of pulses for pattern 2
- **A output**: Pattern 1 output
- **B output**: Pattern 2 output

### **Step 3: Configure Parameters**
Press and hold S, then turn to access parameters:

**Parameter 0**: Total steps for pattern 1 (1-32 steps)
**Parameter 1**: Number of pulses for pattern 1 (how many beats in the pattern)
**Parameter 2**: Rotation for pattern 1 (shifts where the pattern starts)
**Parameter 3**: Pulse length (0 = 10ms fixed, 1-31 = fraction of clock time)

### **Step 4: Set Up Patterns**
1. **Set total steps** (Parameter 0) - e.g., 16 for a 16-step pattern
2. **Set number of pulses** (Parameter 1) - e.g., 5 for 5 beats distributed across 16 steps
3. **Adjust rotation** (Parameter 2) if you want to shift the downbeat
4. **Set pulse length** (Parameter 3) based on your needs
5. **Use Z knob** to set pulses for the second pattern (output B)

### **Example Euclidean Patterns:**
- **5 pulses in 8 steps**: Creates a classic Cuban tresillo rhythm
- **3 pulses in 8 steps**: Creates interesting syncopated patterns
- **7 pulses in 12 steps**: Complex polyrhythmic pattern
- **4 pulses in 16 steps**: Standard kick drum pattern

### **Usage Tips:**
- **Connect a master clock** to X input for tempo sync
- **Use A and B outputs** to trigger different drum sounds or envelope generators
- **Experiment with different step/pulse combinations** for varied rhythmic complexity
- **Use Y input** to reset patterns at specific intervals for structure
- **Try different rotations** to create variations of the same basic pattern

### **Basic Usage:**
1. **Patch output A or B** to your sequencer's clock input, envelope triggers, or other modules that need timing
2. **Adjust Z knob** to set desired tempo
3. **Press Z button** multiple times to tap in a tempo
4. **Use Y input** to start/stop the clock if needed

### **Notes:**
- The Disting will remember the last algorithm and settings when powered off
- Once set up as a clock source, it will return to that function when you power up the system
- The F.1 Clock algorithm is specifically designed for generating master clock signals
- You can use tap tempo to quickly sync to external music or set precise BPMs

---
*Based on Expert Sleepers Disting mk4 manual and firmware documentation*