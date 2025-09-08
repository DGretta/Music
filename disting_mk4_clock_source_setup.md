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

### **Step 3: Set Clock Divisions (if needed)**
- The clock algorithm allows you to set different divisions for outputs A and B
- **Turn the Z knob** while the algorithm is running to adjust parameters
- The display will show the current division settings

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