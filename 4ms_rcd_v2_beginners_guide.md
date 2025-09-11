# 4ms Rotating Clock Divider V2 - Beginner's Guide

**The Polyrhythm Generator That Thinks Outside the Box**

---

## Quick Start: Get Your First Sound in 5 Minutes

**What is RCD V2?** A clock divider that creates 8 different slower tempos from one fast clock, but with a twist - the "Rotate" function lets you shift all divisions around in real-time, creating constantly evolving polyrhythms.

### Your First Division Pattern
1. **Patch your sequencer/clock** → RCD V2 **Clock In**
2. **Leave Rotate CV unplugged** (starting position)
3. **Patch Output 1** → kick drum (divide by 1 = same speed)
4. **Patch Output 2** → snare (divide by 2 = half speed)
5. **Patch Output 4** → hi-hat (divide by 4 = quarter speed)
6. **Start your sequence** - you should hear a basic drum pattern

**Add the Magic Rotation:**
1. **Patch slow LFO** → **Rotate CV input**
2. **Watch/listen** as the divisions shift between outputs
3. **Output 1 becomes divide by 2, Output 2 becomes divide by 3**, etc.
4. **Congratulations!** You're now creating evolving polyrhythmic patterns

---

## Essential Parameters (The Big 3)

### **1. Rotate CV Input**
- **What it does:** Shifts the division number at each output jack
- **Musical result:** /1 becomes /2, /2 becomes /3, /4 becomes /5, etc.
- **Range:** 0V to +5V (higher voltage = more rotation)
- **Pro tip:** Use stepped voltage for rhythmic "gear changes"

### **2. Reset Input**
- **What it does:** Syncs all divisions back to beat 1 simultaneously  
- **Musical result:** Keeps complex polyrhythms aligned with song structure
- **Use cases:** Downbeats, measure boundaries, keeping chaos organized
- **Trigger:** 5V to 15V trigger signal

### **3. Internal Jumper Settings** (Advanced)
- **Division Range:** /1 to /8 (default) or /1 to /64 (with jumpers)
- **Spread Mode:** Even distribution vs. clustered around max division
- **Gate/Trigger Mode:** Long gates vs. short trigger pulses
- **Auto-Reset:** Automatic reset every 16/24/32 clocks for "danceable" odd divisions

---

## Understanding Division Outputs

### **Default Configuration (No Rotation):**
- **Output 1:** Divide by 1 (same as input clock)
- **Output 2:** Divide by 2 (half speed)
- **Output 3:** Divide by 3 (⅓ speed - creates 3-against-4 polyrhythm)
- **Output 4:** Divide by 4 (quarter speed)
- **Output 5:** Divide by 5 (⅕ speed - complex polyrhythm)
- **Output 6:** Divide by 6 (⅙ speed) 
- **Output 7:** Divide by 7 (⅐ speed - very complex polyrhythm)
- **Output 8:** Divide by 8 (⅛ speed)

### **With Rotation Applied:**
Each output shifts to the next higher division number:
- **Small rotation:** Output 1 becomes /2, Output 2 becomes /3, etc.
- **Full rotation:** Eventually cycles back to original positions
- **Continuous rotation:** Creates constantly evolving relationships

**Key Concept:** RCD gives you access to "weird" divisions like /3, /5, /7 that create fascinating polyrhythms!

---

## Beginner Patch Ideas

### **Patch 1: Basic Polyrhythmic Drums**
- **Clock source** → RCD Clock In (set to 16th notes)
- **Output 1** → Kick (on the beat)
- **Output 2** → Snare (backbeat)
- **Output 3** → Percussion (3-against-4 polyrhythm)
- **Output 5** → Hi-hat (5-against-4 polyrhythm)
- **Slow LFO** → Rotate CV (slowly evolving patterns)

### **Patch 2: Evolving Arpeggios**
- **Fast clock** → RCD Clock In (32nd notes)
- **Output 2** → Arpeggiator 1 (16th note arps)
- **Output 4** → Arpeggiator 2 (8th note arps) 
- **Output 6** → Bass sequencer (longer intervals)
- **Stepped random** → Rotate CV (sudden pattern changes)
- **Your sequencer downbeat** → Reset (keeps structure)

### **Patch 3: Ambient Texture Generator**
- **Very slow clock** → RCD Clock In (whole notes)
- **Output 3** → Trigger random sample 1 (every 3 beats)
- **Output 5** → Trigger random sample 2 (every 5 beats)  
- **Output 7** → Trigger random sample 3 (every 7 beats)
- **Very slow triangle LFO** → Rotate CV (glacial evolution)
- **Result:** Slowly shifting ambient textures with complex timing

---

## Advanced Features & Jumper Settings

### **Division Range Control:**
- **Default (/1 to /8):** Good for most musical applications
- **Extended (/1 to /64):** Extreme slow divisions for ambient/experimental
- **Custom ranges:** Various combinations possible with jumper settings

### **Spread Mode:**
- **Spread ON:** Even distribution across full range (/1, /8, /16, /24, /32, /40, /48, /56)
- **Spread OFF:** Clustered around maximum (/5, /6, /7, /8 when max is /8)
- **Musical use:** Spread for varied tempos, clustered for subtle variations

### **Gate vs. Trigger Mode:**
- **Gate Mode:** Output stays high for half the division period
- **Trigger Mode:** Short pulse at the start of each division
- **Use cases:** Gates for VCAs/filters, triggers for percussion/sequencers

### **Down-beat vs. Up-beat:**
- **Down-beat:** Division starts with "high" at first beat
- **Up-beat:** Division starts with "high" at last beat
- **Musical effect:** Changes the feel and accent placement

### **Auto-Reset Options:**
- **16/24/32 clock auto-reset:** Keeps odd divisions "danceable"
- **Manual reset only:** Maximum polyrhythmic complexity
- **Use case:** Auto-reset for dance music, manual for experimental

---

## Common Use Cases

### **Studio Production:**
- **Polyrhythmic Composition:** Layer multiple time signatures effortlessly
- **Drum Programming:** Add mathematical precision to complex rhythms
- **Ambient/Generative:** Very slow divisions for evolving textures

### **Live Performance:**
- **Evolving Patterns:** Rotate CV creates constantly changing arrangements
- **Structured Chaos:** Reset input keeps complexity organized
- **Genre Flexibility:** Simple divisions for dance music, complex for experimental

---

## Pairs Well With

### **Essential Partners:**
- **Drum Modules/Samplers:** Each output triggers different percussion
- **Sequencers:** Use divisions as clock inputs for polyrhythmic sequences
- **Envelope Generators:** Trigger complex multi-stage envelopes
- **Logic Modules:** Combine divisions for even more complex patterns

### **Advanced Combinations:**
- **Probability Gates:** Add randomness to already complex patterns
- **Sample & Hold:** Capture rotation values for repeatable experiments
- **Clock Multipliers (like SCM Plus):** Combine division and multiplication
- **Multiple/Buffered Multiple:** Split one division to multiple destinations

---

## Beginner "Gotchas" & Pro Tips

### **⚠️ Common Mistakes:**

**"My patterns sound random and chaotic!"**
- Odd divisions like /3, /5, /7 only align with 4/4 time at long intervals
- **Solution:** Use Reset input on downbeats, or enable Auto-Reset jumper

**"I can't get certain division numbers!"**
- Default range is /1 to /8, some divisions require rotation
- **Solution:** Use Rotate CV to access /9, /10, /11, etc., or change jumpers for extended range

**"The outputs don't stay in sync!"**
- This is actually the point! RCD creates polyrhythms, not synchronized divisions
- **Solution:** Embrace the polyrhythm, or use a traditional clock divider for sync

### **🎵 Pro Tips:**

**Rotation Sweet Spots:**
- **Slow continuous rotation:** Gradually evolving patterns
- **Stepped voltage:** Sudden rhythmic "gear changes"
- **Manual control:** Use attenuated LFO or offset for precise positioning

**Reset Strategy:**
- **Every measure:** Keeps patterns recognizable and "musical"
- **Every few measures:** Allows complexity while maintaining structure  
- **Rarely:** Maximum polyrhythmic chaos for experimental music

**Musical Division Applications:**
- **/2, /4, /8:** Standard subdivisions for drums and bass
- **/3, /6:** Triplet feels and 6/8 time signatures
- **/5, /7:** Complex polyrhythms that create tension and release
- **/16, /32:** Very slow triggers for ambient textures

**Jumper Configuration Tips:**
- **Start with defaults:** Learn the basic concept first
- **Experiment gradually:** Change one jumper at a time to understand effects
- **Document settings:** Note configurations that work well for different music styles

---

## Why This Module Rocks

### **The Philosophy:**
Most clock dividers give you standard subdivisions (/2, /4, /8). RCD gives you the "weird" ones (/3, /5, /7) that create fascinating polyrhythms, plus the rotation concept that makes static patterns dynamic.

### **The Mathematical Beauty:**
- **Prime number divisions** create patterns that take many measures to repeat
- **Rotation** transforms static mathematical relationships into musical evolution
- **Reset function** brings order to chaos when needed

### **The Practical Benefits:**
- **One input, eight related but independent outputs**
- **Access to divisions impossible with traditional sequencer math**
- **Real-time pattern transformation** without stopping or repatching
- **Scalable complexity** from simple to mind-bendingly complex

### **Perfect For:**
- **Experimental musicians:** Exploring non-standard time relationships
- **Electronic producers:** Adding mathematical interest to rigid sequences  
- **Live performers:** Dynamic pattern evolution without menu diving
- **Rhythm nerds:** Anyone fascinated by polyrhythmic relationships

---

**Bottom Line:** RCD V2 turns clock division into an art form. It's not just about slower tempos - it's about exploring the mathematical relationships that create the most interesting rhythms in music.

---

*Visit [4ms Company](https://4mscompany.com/rcd.php) for complete documentation and jumper configuration details*