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

## Progressive Patch Examples

### **Patch 1: First Steps - Basic Polyrhythmic Drums**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Clock Source │───▶│  4ms RCD v2  │───▶│ Percussion  │
│ (16th notes) │    │              │    │ Modules     │
│             │    │ Clock In ◀──┼────┼─             │
│ Clock Out ──┼───▶│              │    │ Kick    ◀───┼─── [From Out 1]
│             │    │ Output 1 ───┼───▶│ (/1 = same) │
│ Slow LFO ───┼───▶│              │    │             │
│             │    │ Rotate CV◀──┼────┼─ Snare   ◀───┼─── [From Out 2]
└─────────────┘    │              │    │ (/2 = half) │
                   │ Output 2 ───┼───▶│             │
                   │              │    │ Percussion ◀┼─── [From Out 3]
                   │ Output 3 ───┼───▶│ (/3 = 1/3)  │
                   │              │    │             │
                   │ Output 5 ───┼───▶│ Hi-hat  ◀──┼─── [From Out 5]
                   │              │    │ (/5 = 1/5)  │
                   └──────────────┘    │             │
                                         │ Audio Outs ─┼─── To Mixer
                                         └─────────────┘
```

| Connection | Cable Type | Purpose | Learning Objective |
|------------|------------|---------|-------------------|
| Clock Source → RCD Clock In | Gate (Yellow) | **Master timing input** | **Understand clock division concept** |
| RCD Output 1 → Kick Trigger | Gate (Yellow) | **Same speed as input** | **Experience /1 division (no change)** |
| RCD Output 2 → Snare Trigger | Gate (Yellow) | **Half speed (backbeat)** | **Learn /2 division (standard)** |
| RCD Output 3 → Percussion | Gate (Yellow) | **Triplet feel** | **Experience /3 polyrhythm** |
| RCD Output 5 → Hi-hat Trigger | Gate (Yellow) | **Complex 5-against-4** | **Learn odd number divisions** |
| Slow LFO → Rotate CV | CV (Blue) | **Pattern evolution** | **Understand rotation concept** |

**Module Settings:**
- **RCD Clock In:** 16th note clock from sequencer (moderate tempo)
- **Rotate CV:** Very slow LFO (30-60 second cycles)
- **Reset:** Leave unpatched for continuous operation
- **Jumpers:** Default settings (/1 to /8 range)

**Learning Objectives:**
- Experience basic polyrhythmic relationships
- Understand how division numbers create different feels
- Learn the power of rotation for pattern evolution
- Discover odd divisions (/3, /5) vs. standard (/2, /4)

**Visual Feedback:**
- **Output LEDs:** Watch different flash rates - faster = lower division numbers
- **Rotation effect:** Listen as kick moves to Output 2 (half speed), then Output 3 (triplets)
- **Polyrhythmic patterns:** /3 and /5 create complex interactions with /1 and /2
- **Result:** Living drum pattern that shifts and evolves organically

### **Patch 2: Intermediate - Evolving Arpeggios with Reset Control**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Fast Clock   │───▶│  4ms RCD v2  │───▶│ Sequencing  │
│ (32nd notes) │    │              │    │ Network     │
│             │    │ Clock In ◀──┼────┼─             │
│ Clock Out ──┼───▶│              │    │ Arpeggiator │
│             │    │ Output 2 ───┼───▶│ 1 (16th)    │
│ Stepped  ───┼───▶│              │    │             │
│ Random      │    │ Rotate CV◀──┼────┼─ Arpeggiator │
│             │    │              │    │ 2 (8th) ◀──┼─── [From Out 4]
│ Main     ───┼───▶│ Output 4 ───┼───▶│             │
│ Sequencer   │    │              │    │ Bass        │
│ Downbeat    │    │ Reset In ◀──┼────┼─ Sequencer ◀─┼─── [From Out 6]
└─────────────┘    │              │    │ (Long int.) │
                   │ Output 6 ───┼───▶│             │
                   └──────────────┘    │ Audio Mix ──┼─── Final Output
                                         └─────────────┘
```

| Connection | Cable Type | Purpose | Advanced Concept |
|------------|------------|---------|------------------|
| Fast Clock → RCD Clock In | Gate (Yellow) | **High-resolution timing** | **32nd notes for detailed arpeggios** |
| RCD Output 2 → Arpeggiator 1 | Gate (Yellow) | **16th note arpeggios** | **Standard arpeggio timing** |
| RCD Output 4 → Arpeggiator 2 | Gate (Yellow) | **8th note arpeggios** | **Slower, more deliberate arps** |
| RCD Output 6 → Bass Sequencer | Gate (Yellow) | **Long intervals** | **Slow bass foundation** |
| Stepped Random → Rotate CV | CV (Blue) | **Sudden pattern shifts** | **Rhythmic "gear changes"** |
| Main Sequencer → Reset | Gate (Yellow) | **Structure maintenance** | **Keep polyrhythms organized** |

**Module Settings:**
- **RCD Clock In:** Fast 32nd note clock for detailed timing
- **Rotate CV:** Stepped random voltage for sudden pattern changes
- **Reset:** Triggered on main sequencer downbeats (every 4 or 8 bars)
- **Jumpers:** Default settings, consider Gate mode for sustained triggers

**Learning Objectives:**
- Master reset function for maintaining musical structure
- Understand fast clock inputs for detailed rhythmic resolution
- Experience stepped random rotation vs. smooth LFO rotation
- Learn how reset keeps complex polyrhythms musically organized

**Advanced Techniques:**
- **Reset timing strategy:** Every measure vs. every few measures for balance
- **Stepped rotation:** Creates sudden "gear changes" in pattern evolution
- **Fast clock benefits:** Allows for detailed 32nd note resolution in arpeggios
- **Multiple sequence layers:** Different divisions create harmonic relationships

**Visual Feedback:**
- **Fast LED activity:** All outputs flash rapidly due to 32nd note input
- **Reset synchronization:** Watch all LEDs restart simultaneously on reset
- **Stepped rotation jumps:** Sudden changes when stepped random voltage shifts
- **Result:** Evolving arpeggiated patterns with structured chaos

### **Patch 3: Advanced - Phase 2 Polyrhythmic Network**
```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│ Mutable     │───▶│  4ms RCD v2  │───▶│ Make Noise  │
│ Marbles     │    │              │    │ Wogglebug   │
│             │    │ Clock In ◀──┼────┼─ t1 Output   │
│ t1 Out  ────┼───▶│              │    │             │
│             │    │ Output 2 ───┼───▶│ Disturb ◀──┼─── [Chaos timing]
│ X2 Out  ────┼───▶│              │    │             │
│             │    │ Rotate CV◀──┼────┼─ Clock In ◀──┼─── [From Out 3]
│ t2 Out  ────┼───▶│              │    │             │
│             │    │ Output 3 ───┼───▶│ Stepped ───┼───▶ ┌─────────────┐
│ Y Out   ────┼───▶│ Reset In     │    │             │     │ Cre8audio   │
└─────────────┘    │              │    │ Smooth  ───┼───▶ │ Function    │
        ▲          │ Output 5 ───┼───▶│             │     │ Junction    │
        │          │              │    │ Ring-Mod───┼───▶ │             │
        │          │ Output 7 ───┼───▶│             │     │ F MOD CV◀──┼─── [From Smooth]
        │          └──────────────┘    └─────────────┘     │             │
        │                           │                   │ ADSR Gate◀─┼─── [From Out 5]
        │                           ▼                   │             │
        │                    ┌─────────────┐     │ MIX Out ───┼─── Complex
        │                    │   DivKid    │     └─────────────┘   Modulation
        │                    │    Ochd     │              Network
        │                    │             │
        │                    │ Rate CV ◀──┼────────────── [System feedback]
        │                    │             │
        │                    │ LFO 1-8 ───┼────────────── Organic
        │                    └─────────────┘           Modulation
        │                                          Sources
        └────────────────────────────────────────────────┘
          Marbles Learning Feedback
```

| Module Chain | Signal Flow | Purpose | Phase 2 Integration |
|-------------|-------------|---------|-----------|
| **Marbles t1 → RCD Clock** | Intelligent timing | **AI-driven polyrhythms** | **Musical timing becomes mathematical** |
| **RCD Out 2 → Wogglebug Disturb** | Mathematical chaos | **Rhythm triggers chaos** | **Structure becomes uncertainty** |
| **RCD Out 3 → Wogglebug Clock** | Polyrhythmic clocking | **Complex timing relationships** | **Multiple time signatures** |
| **Marbles X2 → RCD Rotate** | AI parameter control | **Intelligent pattern evolution** | **Learning drives rhythm changes** |
| **Wogglebug Smooth → Function Junction** | Chaos processing | **Musical envelope shaping** | **Uncertainty becomes musicality** |
| **RCD Outputs → Function Junction** | Rhythmic triggers | **Polyrhythmic envelopes** | **Mathematical timing shapes sound** |

**Learning Objectives:**
- **Phase 2 ecosystem design:** Multiple modules working as unified system
- **Signal transformation:** Intelligence → Mathematics → Chaos → Music
- **Feedback loops:** Modules teaching and learning from each other
- **Complex timing relationships:** Multiple simultaneous time signatures

**Advanced Phase 2 Concepts:**
- **Marbles as conductor:** AI provides musical timing that RCD multiplies mathematically
- **RCD as rhythmic processor:** Takes single intelligent pulse, creates multiple related rhythms
- **Wogglebug as chaos engine:** Adds uncertainty to mathematical precision
- **Function Junction as musical translator:** Converts complex timing into envelope shapes
- **Ochd as foundation:** Organic timing underlies entire system

**Expert System Integration:**
- **Bidirectional learning:** Marbles learns from system output, influences RCD behavior
- **Hierarchical processing:** Each layer adds musical intelligence to previous layer
- **Emergent polyrhythms:** Complex time signatures emerge from simple AI decisions
- **Adaptive complexity:** System becomes more interesting the longer it runs

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

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **Mutable Marbles:** Marbles t outputs → RCD Clock for intelligent polyrhythmic generation
- **Make Noise Wogglebug:** RCD outputs → Wogglebug Clock/Disturb for chaos-driven timing
- **DivKid Ochd & Expander:** Ochd triggers → RCD Clock/Rotate for organic polyrhythmic evolution
- **Cre8audio Function Junction:** RCD outputs → Junction ADSR/Function triggers for polyrhythmic envelopes
- **Cross-Phase 2 Integration:** All Phase 2 modules create unified polyrhythmic ecosystem

### **Phase 1 Module Integration (Core Synthesis):**
- **Make Noise Maths:** RCD outputs perfect for triggering complex Maths envelope cascades
- **Mutable Plaits:** RCD divisions ideal for polyrhythmic trigger sequences and model changes
- **Mob of Emus:** RCD outputs → harmonic frequency control for mathematical rhythm-pitch relationships
- **Disting mk4:** Use as probability gate for RCD outputs, or clock multiplier for input

### **Essential Rhythmic Partners:**
- **Drum Modules/Samplers:** Each RCD output triggers different percussion for polyrhythmic patterns
- **Sequencers:** Use RCD divisions as clock inputs for multiple simultaneous sequence layers
- **Envelope Generators:** Trigger complex multi-stage envelopes with different division relationships
- **Logic Modules:** Combine RCD divisions for even more complex rhythmic patterns

### **Advanced Combinations:**
- **Probability Gates:** Add randomness to polyrhythmic patterns for organic variation
- **Sample & Hold:** Capture rotation values for repeatable pattern experiments
- **Clock Multipliers (like SCM Plus):** Combine division and multiplication for extreme complexity
- **Multiple/Buffered Multiple:** Split one division to multiple destinations for system-wide timing

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
- **Phase 2 Integration:** Use Marbles X outputs for intelligent rotation control

**Reset Strategy:**
- **Every measure:** Keeps patterns recognizable and "musical"
- **Every few measures:** Allows complexity while maintaining structure  
- **Rarely:** Maximum polyrhythmic chaos for experimental music
- **Phase 2 Timing:** Use Marbles t outputs for musically intelligent reset timing

**Musical Division Applications:**
- **/2, /4, /8:** Standard subdivisions for drums and bass
- **/3, /6:** Triplet feels and 6/8 time signatures
- **/5, /7:** Complex polyrhythms that create tension and release
- **/16, /32:** Very slow triggers for ambient textures

**Phase 2 Polyrhythmic Matrix:**
- **Marbles intelligence:** Provides musical timing foundation for RCD processing
- **RCD multiplication:** Takes single intelligent pulse, creates 8 related rhythms
- **Wogglebug chaos:** Adds uncertainty to mathematical precision
- **Function Junction shaping:** Converts polyrhythmic triggers into musical envelopes
- **Ochd foundation:** Organic timing can drive entire polyrhythmic network

**Advanced Phase 2 Workflows:**
- **Start with Marbles:** Intelligent timing as foundation for polyrhythmic expansion
- **Add RCD processing:** Mathematical multiplication of AI-generated patterns
- **Include Wogglebug:** Chaos processing of polyrhythmic outputs
- **Apply Function Junction:** Envelope shaping for musical polyrhythmic modulation
- **Integrate Ochd:** Organic timing for rotation control and system-wide modulation

**Jumper Configuration Tips:**
- **Start with defaults:** Learn the basic concept first
- **Experiment gradually:** Change one jumper at a time to understand effects
- **Document settings:** Note configurations that work well for different music styles
- **Phase 2 considerations:** Extended ranges (/1 to /64) work well with very slow Marbles timing

---

## Why This Module Rocks

### **The Philosophy:**
Most clock dividers give you standard subdivisions (/2, /4, /8). RCD gives you the "weird" ones (/3, /5, /7) that create fascinating polyrhythms, plus the rotation concept that makes static patterns dynamic. In **Phase 2 integration**, RCD becomes the **mathematical processor** that transforms intelligent AI timing into complex polyrhythmic ecosystems.

### **The Mathematical Beauty:**
- **Prime number divisions** create patterns that take many measures to repeat
- **Rotation** transforms static mathematical relationships into musical evolution
- **Reset function** brings order to chaos when needed
- **Phase 2 synergy:** AI intelligence + mathematical processing = musical polyrhythms

### **The Practical Benefits:**
- **One input, eight related but independent outputs**
- **Access to divisions impossible with traditional sequencer math**
- **Real-time pattern transformation** without stopping or repatching
- **Scalable complexity** from simple to mind-bendingly complex
- **Phase 2 integration:** Central hub for polyrhythmic ecosystem design

### **Perfect For:**
- **Experimental musicians:** Exploring non-standard time relationships
- **Electronic producers:** Adding mathematical interest to rigid sequences  
- **Live performers:** Dynamic pattern evolution without menu diving
- **Rhythm nerds:** Anyone fascinated by polyrhythmic relationships
- **System builders:** Core component of intelligent polyrhythmic networks
- **AI music explorers:** Perfect processor for Marbles-generated intelligent timing

### **The Phase 2 Advantage:**
When combined with other Phase 2 modules, RCD transforms from a simple clock divider into **the mathematical heart of an intelligent polyrhythmic system**. It takes single intelligent pulses from Marbles and creates complex rhythmic ecosystems, processes organic timing from Ochd into mathematical relationships, and feeds chaos engines like Wogglebug with structured complexity.

---

**Bottom Line:** RCD V2 turns clock division into an art form. It's not just about slower tempos - it's about exploring the mathematical relationships that create the most interesting rhythms in music. As the **polyrhythmic processor in Phase 2 networks**, it enables the creation of intelligent musical systems that think in multiple time signatures simultaneously.

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with basics:** Master RCD polyrhythmic concepts and rotation
2. **Add AI foundation:** Integrate Mutable Marbles for intelligent timing (see Marbles guide)
3. **Include organic timing:** Use DivKid Ochd for rotation control (see Ochd guide)
4. **Add chaos processing:** Apply Make Noise Wogglebug to RCD outputs (see Wogglebug guide)
5. **Shape the results:** Use Cre8audio Function Junction for envelope processing (see Function Junction guide)
6. **Integrate Phase 1:** Connect to synthesis modules for complete polyrhythmic systems

### **Cross-Module Learning Opportunities:**
- **Marbles → RCD:** Learn AI timing to mathematical rhythm conversion
- **RCD → Wogglebug:** Understand mathematical structure to chaos processing
- **Ochd → RCD:** Explore organic timing control of mathematical systems
- **RCD → Function Junction:** Master polyrhythmic envelope generation
- **All Phase 2 together:** Build intelligent polyrhythmic ecosystems

### **Skill Development Milestones:**
- **Beginner:** Use basic divisions for simple polyrhythmic patterns
- **Intermediate:** Master rotation and reset for structured complexity
- **Advanced:** Create Phase 2 integration with AI timing and chaos processing
- **Expert:** Design adaptive polyrhythmic systems that evolve over time

### **Advanced Integration Concepts:**
- **Polyrhythmic Hierarchies:** RCD creates multiple time layers from single intelligent source
- **Mathematical Music:** Explore prime number divisions and their musical relationships
- **Adaptive Systems:** Use AI control of rotation for self-evolving polyrhythms
- **Chaos Integration:** Mathematical precision meets musical uncertainty

### **Performance Applications:**
- **Live Polyrhythms:** Real-time control of complex rhythmic relationships
- **Generative Music:** Foundation for self-evolving polyrhythmic compositions
- **Hybrid Timing:** Bridge between human, AI, and mathematical timing concepts
- **Educational Tool:** Learn polyrhythmic theory through hands-on experimentation

---

*Visit [4ms Company](https://4mscompany.com/rcd.php) for complete documentation and jumper configuration details*