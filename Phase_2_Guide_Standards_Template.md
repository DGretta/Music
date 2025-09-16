# Phase 2 Guide Standards & Template

**The Complete Format for Enhanced Eurorack Module Guides**

---

## ⚠️ **CRITICAL CHANGE: Remove "Beginner's" from Guide Titles**

### **New Naming Convention:**
- **OLD:** `[Module Name] - Beginner's Guide`
- **NEW:** `[Module Name] - Guide`
- **Reason:** Guides serve all skill levels with progressive content from quick start to expert integration

### **Implementation:**
- **New guides:** Use `[Module Name] - Guide` format
- **Existing guides:** Will be updated gradually
- **References:** Update all internal references to match new naming

---

## ⚠️ **CRITICAL ISSUE: Avoid Repetitive Modulation Patterns**

### **Problem Identified:**
**Repetitive "Phase 2 Trinity" Pattern Found Across Multiple Guides:**
- **Confirmed in:** Pico Voice, Punch v3, Moon Phase, Loquelic, Cs-L, Numeric Repetitor, Ruina Versio, Arbhar
- **Pattern:** Every "Expert" patch uses identical **DivKid Ochd + Make Noise Wogglebug + Mutable Marbles + [Target Module]**
- **Results in:** Frustrating repetition, non-combinable patches, expensive barriers to entry
- **User impact:** Can't run multiple guide patches simultaneously, sees same content repeatedly

### **❌ NEVER Use This Template:**
```
Patch 6/7: Expert - Complete Phase 2 [Module] Ecosystem
DivKid Ochd + Make Noise Wogglebug + Mutable Marbles + [Target Module]
```

### **✅ MANDATORY: Create Unique, Module-Appropriate Ecosystems**

Each guide MUST use different modulation sources that:
1. **Complement the target module's character**
2. **Don't overlap with other guides' advanced patches**
3. **Allow patch combination across guides**
4. **Represent realistic HP/cost requirements**
5. **Teach different modulation approaches**

### **✅ MANDATORY: Create Unique, Multi-Function Ecosystems**

Each guide MUST use different modulation sources that:
1. **Leverage multi-function module capabilities** (Hermod+, MetaModule, Disting, Maths, etc.)
2. **Don't overlap with other guides' advanced patches**
3. **Allow patch combination across guides**
4. **Represent realistic modules from the actual collection**
5. **Teach different multi-function modulation approaches**

**Multi-Function Module Understanding:**
- **Hermod+:** Sequencer + quantizer + trigger generator + CV processor + live recording
- **MetaModule:** Any function via plugins (specify actual plugin names: Fundamental VCO, AS ADSR, etc.)
- **Disting mk4:** 80+ algorithms including quantizers, LFOs, S&H, triggers, envelopes, logic
- **Maths:** Function generator + envelope + LFO + logic processor + slew limiter
- **Bloom:** Generative sequencer + trigger generator + CV source + probability engine
- **Function Junction:** CV processor + mixer + modifier + attenuverter

**Examples of Better Multi-Function Approaches:**
- **Pico Voice:** Hermod+ (seq+quant) + MetaModule (Fundamental VCO + AS ADSR) + Pico Voice
- **Loquelic:** Bloom (generative) + Disting (algorithm-specific) + Function Junction (CV processing)
- **Granular processing:** Maths (complex modulation) + Cellz (touch control) + target module
- **Each guide uses different multi-function combinations**

### **Design Requirements:**
- **Multi-function awareness** - Recognize that modules like Hermod+, MetaModule, Disting serve multiple roles
- **Plugin specificity** - When referencing MetaModule, specify actual plugin names (Fundamental VCO, AS ADSR, etc.)
- **Modulation source variety** - No guide should repeat another's advanced modulation sources or multi-function combinations
- **Musical appropriateness** - Partners should enhance the target module's character using multi-function capabilities
- **Realistic collection** - Only use modules actually owned, no assumptions about missing modules
- **Educational diversity** - Each ecosystem teaches different multi-function modulation concepts
- **Combination compatibility** - Users should be able to run multiple guide patches together using different multi-function approaches

---

## Overview

Phase 2 guides represent the enhanced format for eurorack module documentation, emphasizing **cross-module integration**, **sophisticated circuit behavior**, and **educational progression**. These guides transform basic module documentation into comprehensive learning systems that show how modules work together as **ecosystems**.

---

## Critical Language Standards

### ❌ **NEVER Use These Terms:**
- **"AI" or "Artificial Intelligence"** - These are analog/digital circuits, not AI systems
- **"Intelligence" or "Intelligent"** - Use "sophisticated", "adaptive", "learning circuits"
- **"Smart" behavior** - Use "responsive", "adaptive", "dynamic"

### ✅ **Always Use Circuit-Based Language:**
- **"Learning circuits"** - for adaptive behavior (e.g., Marbles)
- **"Pattern generators"** - for algorithmic modules
- **"Sophisticated circuits"** - for complex behavior
- **"Chaos generators"** - for random/chaotic sources (e.g., Wogglebug)
- **"Organic sources"** - for natural modulation (e.g., Ochd)
- **"Processing systems"** - for effect modules
- **"Mathematical algorithms"** - for computational modules

### 🚫 **CRITICAL: Avoid Repetitive Descriptive Language**
**The deadliest threat to guide quality is overusing the same descriptive words and metaphors.** Technical terminology required for accuracy is essential, but creative descriptors must vary extensively:

#### **❌ Never Overuse These Patterns:**
- **"Breathing" for every organic modulation** - Reserve for genuine coordinated LFO behavior (like Ochd)
- **"Living" for every dynamic process** - Use sparingly and only when truly appropriate
- **"Consciousness" or "transcendence"** - Avoid anthropomorphizing circuits excessively
- **"Brain" for every processing module** - Vary with "processor," "engine," "core," "hub"
- **"Evolution" for every changing parameter** - Alternate with "development," "progression," "transformation"

#### **✅ Language Variety Strategies:**
- **Technical modules** → "correlated processing," "synchronized operation," "integrated control"
- **Organic modules** → "natural evolution," "organic movement," "flowing variation," "coordinated modulation"
- **Creative modules** → "dynamic processing," "adaptive behavior," "responsive control"
- **Chaos modules** → "controlled variation," "mathematical randomness," "structured unpredictability"
- **Pattern modules** → "adaptive processing," "learning modulation," "evolving patterns"

#### **🎯 Context-Specific Language Matching:**
- **Honor manufacturer philosophy** - Soma = "organismic," Mutable = "laboratory," etc.
- **Match module character** - Experimental modules get creative language, precision modules get technical language
- **Vary within guides** - Each parameter description should use different appropriate terms
- **Cross-guide diversity** - Each guide should feel distinct in tone and vocabulary

#### **📊 Quality Verification:**
- **Read guides aloud** - Repetitive language becomes obvious when spoken
- **Check descriptor frequency** - No single metaphor should dominate a guide
- **Compare across guides** - Ensure each feels unique while maintaining educational standards
- **Technical accuracy first** - Never sacrifice clarity for variety, but vary everything else extensively

---

## Guide Structure Template

### **1. Header Section**
```markdown
# [Module Name] - Guide

**The [Core Function Description]**

---

## Quick Start: Get Your First [Key Sound/Function] in 5 Minutes

**What is [Module]?** [Clear explanation of core function and unique character]

### Your First [Basic Function]
1. **[Step 1]** - [Clear action]
2. **[Step 2]** - [Clear action]
3. **[Step 3]** - [Clear action]
4. **[Step 4]** - [Clear action]
5. **[Step 5]** - [Clear action]

**Congratulations!** You've just [accomplished basic function]!
```

### **2. Essential Parameters Section**
```markdown
## Essential Parameters (The [Core Controls])

### **1. [Primary Control] - The [Function Description]**
- **What it does:** [Clear explanation]
- **Character:** [Sound/behavior description]
- **Range descriptions:** [CCW, 12 o'clock, CW descriptions]
- **CV controllable:** [Yes/No and importance]
- **Pro tip:** [Essential insight]

[Repeat for all major controls - typically 6-8 main parameters]
```

### **3. Beginner Patch Ideas Section**
```markdown
## Beginner Patch Ideas

### **Patch 1: [Basic Function]**
```
[Simple ASCII diagram showing signal flow]
```
**Setup:** [Module settings]
**Controls:** [Key parameters to adjust]
**Result:** [What you'll hear/achieve]
**Performance:** [Live control suggestions]

### **Patch 2: [Intermediate Function]**
[Similar format]

### **Patch 3: [Advanced Basic Function]**
[Similar format]

### **Patch 4: [Traditional final patch]**
[Original guide structure]

### **Patch 5: Intermediate - Phase 2 Organic [Module Function] Processing**
[DETAILED ASCII DIAGRAM with proper cable notation]
[COMPREHENSIVE MODULE INTEGRATION TABLE]
[LEARNING OBJECTIVES SECTION]

### **Patch 6: Advanced - Chaos [Module Function] Mathematics**
[DETAILED CHAOS INTEGRATION]
[WOGGLEBUG INTEGRATION PATTERNS]

### **Patch 7: Expert - Complete Phase 2 [Module Function] Ecosystem**
[FOUR-LAYER INTEGRATION: Organic + Chaos + Patterns + Module Function]
[COMPLETE SYSTEM INTEGRATION TABLE]
[PHILOSOPHICAL ACHIEVEMENT SECTION]
```

---

## Phase 2 Integration Patterns

### **Core Integration Philosophy:**
While maintaining consistency in **approach** and **educational progression**, guides should vary their **specific module examples** to showcase the breadth of possibilities and prevent formulaic repetition.

### **Standard Four-Layer Integration Concept:**

1. **🌿 Organic Layer** - Natural, breathing modulation
2. **🌀 Chaos Layer** - Controlled unpredictability  
3. **🧠 Pattern Layer** - Learning/adaptive circuits
4. **🎛️ Module Function Layer** - Core module as processor

### **Primary Phase 2 Module Examples:**
- **Organic:** DivKid Ochd & Expander
- **Chaos:** Make Noise Wogglebug
- **Patterns:** Mutable Marbles
- **Support:** 4ms RCD v2, Cre8audio Function Junction

### **Alternative Module Options (Use for Variety):**

#### **🌿 Alternative Organic Sources:**
- **Befaco Rampage** - Dual function generators with organic curves
- **4ms Pingable Envelope Generator** - Musical timing with organic feel
- **Intellijel Quadrax** - Four-channel organic envelope generation
- **Make Noise Maths** - Mathematical organic relationships
- **Batumi** - Quad LFO with organic phase relationships
- **Joranalogue Orbit 3** - Three-dimensional organic modulation
- **Klavis Twin Waves** - Dual LFO with organic waveform morphing

#### **🌀 Alternative Chaos Sources:**
- **Turing Machine + Expanders** - Binary chaos with various outputs
- **Music Thing Modular Radio Music** - Chaotic sample playback
- **Benjolin variants** - Multiple chaos/rungler circuits
- **Bastl SoftPop** - Chaotic oscillation and modulation
- **Nonlinearcircuits modules** - Various chaos generators
- **Zlob Modular Vnoise** - Chaotic noise sources
- **Random*Source Serge modules** - Chaos through feedback

#### **🧠 Alternative Pattern/Learning Sources:**
- **Intellijel Metropolix** - Learning sequencer with probability
- **ALM Pamela's New Workout** - Algorithmic pattern generation
- **Euclidean Circles** - Mathematical pattern relationships
- **Malekko Varigate series** - Pattern mutation and evolution
- **Shakmat modular Bishop's Miscellany** - Pattern transformation
- **Orthogonal Devices ER-301** - Programmable pattern processing
- **Winter Modular Eloquencer** - Complex pattern sequencing

#### **⏰ Alternative Rhythm/Timing Sources:**
- **Tempi** - Advanced clock manipulation
- **Pamela's Pro Workout** - Comprehensive clock generation
- **Euclidean Circles** - Mathematical rhythm relationships
- **Malekko Varigate 8+** - Pattern-based rhythm generation
- **Shakmat Time Wizard** - Advanced clock processing
- **ALM Busy Circuits Pamela's** - Algorithmic rhythm generation

#### **🎛️ Alternative Processing/Function Modules:**
- **Effect Processing:** Other Versio modules, FX Aid Pro, Erica Synths effects
- **Filter Processing:** Various filter manufacturers and architectures
- **Oscillation:** Different synthesis methods and manufacturers
- **Envelope Processing:** Various envelope generators and processors
- **Logic Processing:** Boolean operations, sequential switches

### **Guide Variety Strategy:**

### **Guide Variety Strategy:**

#### **Primary Examples Approach:**
- **Use YOUR collection modules** for main patch examples (tested and verified)
- **Include "Also try..."** suggestions for readily available alternatives
- **Focus on function over specific brand** - emphasize what the module does
- **Practical alternatives** that readers can actually find and afford

#### **Main Example Standards:**
- **Organic:** DivKid Ochd (your collection) → *"Also try Batumi, Quadrax, or Maths for different organic character"*
- **Chaos:** Make Noise Wogglebug (your collection) → *"Also try Turing Machine + Expanders or Radio Music for different chaos types"*
- **Patterns:** Mutable Marbles (your collection) → *"Also try Metropolix or Pamela's New Workout for different pattern approaches"*
- **Support:** Your actual modules → *"Also try [accessible alternatives] for similar functions"*

#### **"Also Try" Integration Format:**
```markdown
**Alternative Organic Sources:**
- **Batumi:** Quad LFO with different phase relationships - creates more geometric organic movement
- **Intellijel Quadrax:** Four independent envelopes - more discrete organic changes vs Ochd's continuous breathing
- **Make Noise Maths:** Mathematical organic relationships - more complex but highly versatile organic processing
- **Befaco Rampage:** Dual function generators - organic curves with different character than Ochd
```

#### **Accessibility Priority:**
1. **Your collection** (main examples - tested and verified)
2. **Popular/Available modules** (Batumi, Maths, Pamela's, Metropolix)
3. **Budget alternatives** (2HP modules, Doepfer basics)
4. **DIY options** (Music Thing Modular, AI Synthesis)
5. **Discontinued but common** (modules that appear used frequently)

#### **Function-Based Alternatives:**
Organize suggestions by **function** rather than brand:
- **"For organic modulation, also try..."** 
- **"For controlled chaos, also try..."**
- **"For pattern generation, also try..."**
- **"For rhythm processing, also try..."**

#### **Module-Specific Alternatives:**
Choose alternatives that **best complement** the featured module's character:
- **Rhythmic modules** → Show with Euclidean Circles, Tempi, Varigate
- **Filter modules** → Show with mathematical modulation sources
- **Effect modules** → Show with chaotic and pattern-based sources
- **Oscillator modules** → Show with complex modulation ecosystems

### **Practical Implementation in Guides:**

#### **Main Patch Example (Your Collection):**
```markdown
### **Patch 5: Intermediate - Phase 2 Organic [Function] Processing**
[Full ASCII diagram with YOUR modules: Ochd + Wogglebug + Featured Module]

**Module Settings:**
- **Ochd Rate:** 12 o'clock for musical organic breathing
- **[Featured Module]:** [Specific settings you've tested]
- **Result:** [What you actually hear in your system]
```

#### **Alternative Suggestions (Immediately After):**
```markdown
**Alternative Modulation Sources:**
- **Instead of Ochd:** Try **Batumi** for more geometric organic movement, or **Maths** for mathematical organic relationships
- **Instead of Wogglebug:** Try **Turing Machine + Expanders** for binary chaos, or **Radio Music** for chaotic sample-based modulation
- **Budget alternatives:** **2HP LFO + 2HP Rnd** provides similar organic + chaos functionality in 4HP
- **Different character:** **Quadrax** gives more discrete organic steps vs Ochd's continuous breathing

**Why these alternatives work:**
- **Same signal types:** All provide CV outputs suitable for [Featured Module] inputs
- **Similar complexity:** Comparable learning curve and integration possibilities  
- **Different flavors:** Each creates distinct musical character while maintaining the integration concept
```

#### **Learning Integration:**
```markdown
**Learning Objectives:**
- **Core concept:** Organic modulation transforms [function] into living, breathing systems
- **Module flexibility:** This approach works with ANY organic modulation source
- **Adaptation skills:** Learn to identify organic modulation in your own collection
- **System thinking:** Focus on function and signal flow rather than specific brands
```

#### **Cross-Reference Strategy:**
```markdown
**See Also:**
- **Ochd Guide:** Complete Ochd integration techniques and advanced organic concepts
- **Batumi Guide:** Alternative organic approaches using phase-locked LFOs
- **Maths Guide:** Mathematical organic processing and complex organic relationships
- **Function Junction Guide:** How to add organic processing to any modulation source
```

### **Integration Naming Convention:**
- **Organic + [Function]:** "Living [function] processing"
- **Chaos + [Function]:** "Mathematical [function] chaos"
- **Patterns + [Function]:** "Adaptive [function] relationships"
- **Complete Ecosystem:** "Advanced [function] consciousness"

### **Cross-Reference Strategy:**
- **Within guide:** "(see [Module] guide)" for detailed integration
- **Between guides:** Reference different combinations used elsewhere
- **Alternative suggestions:** "Also try [Alternative Module] for [Different Character]"

### **Avoiding Formulaic Repetition:**

#### **What to Vary:**
- **Specific modules** used in integration examples
- **Signal routing** approaches and connection methods
- **Patch complexity** and number of modules involved
- **Musical context** and application examples
- **Performance techniques** and real-time control methods

#### **What to Keep Consistent:**
- **Four-layer integration concept** (Organic + Chaos + Patterns + Function)
- **Educational progression** (Basic → Intermediate → Advanced → Expert)
- **ASCII diagram standards** and visual representation
- **Learning objectives** and skill development milestones
- **Language standards** and circuit-based descriptions

---

## ASCII Diagram Standards

### **Cable Color Coding:**
- **Audio (Red):** `──` or `Audio (Red)`
- **CV (Blue):** `║` or `CV (Blue)`
- **Gate (Yellow):** `═` or `Gate (Yellow)`

### **Module Representation:**
```
┌─────────────────────┐
│   Module Name       │
│    (Phase 2)        │
│                     │
│ Output ○────────────┼─── Signal Type
│       ║             │
│ Input  ◀────────────┼─── Signal Type
└─────────────────────┘
```

### **Connection Symbols:**
- **○** = Output jack
- **◀** = Input jack  
- **┼** = Connection point
- **▼** = Signal flow direction

---

## Required Sections

### **"Pairs Well With" Section Format:**
```markdown
## Pairs Well With

### **Phase 2 Module Synergies (Modulation & CV Sources):**
- **DivKid Ochd & Expander:** [Specific integration description]
- **Make Noise Wogglebug:** [Chaos integration description]
- **Mutable Marbles:** [Pattern integration description]
- **4ms RCD v2:** [Rhythm integration description]
- **Cre8audio Function Junction:** [Complete ecosystem description]
- **Cross-Phase 2 Integration:** [System-wide integration summary]

### **Perfect Partners for Beginners:**
[4-6 essential complementary modules]

### **Advanced [Function] Integration:**
[Complex integration scenarios]

### **Essential [Function] Partners:**
[Specialized integration modules]

### **Advanced System Integration:**
[Cross-system integration with Phase 1 and other systems]
```

### **Phase 2 Learning Path Section:**
```markdown
## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with [Module] fundamentals:** [Core concepts]
2. **Add organic breathing:** [Ochd integration reference]
3. **Include controlled chaos:** [Wogglebug integration reference]
4. **Add pattern learning:** [Marbles integration reference]
5. **Include [other integration]:** [Additional module reference]
6. **Complete the ecosystem:** [Function Junction reference]

### **Cross-Module Learning Opportunities:**
- **[Module] + Ochd:** [Specific learning outcome]
- **[Module] + Wogglebug:** [Specific learning outcome]
- **[Module] + Marbles:** [Specific learning outcome]
- **[Module] + RCD:** [Specific learning outcome]
- **All Phase 2 + [Module]:** [Complete ecosystem learning]

### **Skill Development Milestones:**
- **Beginner:** [Basic function mastery]
- **Intermediate:** [Advanced parameter control]
- **Advanced:** [Phase 2 integration patches]
- **Expert:** [Complete ecosystem design]

### **Advanced [Function] Concepts:**
- **[Concept 1]:** [Technical explanation]
- **[Concept 2]:** [Advanced technique]
- **[Concept 3]:** [System integration]
- **[Concept 4]:** [Performance application]

### **Performance Applications:**
- **Live [Function] Control:** [Real-time techniques]
- **Generative [Function] Systems:** [Self-evolving concepts]
- **Hybrid [Function]:** [Cross-system integration]
- **Educational Tool:** [Learning applications]
```

### **Bottom Line Section:**
```markdown
**Bottom Line:** [Module] isn't just a [basic function] - it's a **[sophisticated function] processor** that transforms [simple input] into [complex output] through [key algorithms]. Every patch teaches you something new about how [core concept] really works. As the **[function] brain of Phase 2 ecosystems**, it transforms organic breathing, controlled chaos, and pattern learning into unified [function] evolution.
```

---

## Integration Table Standards

### **Module Integration Table Format:**
```markdown
| Module Integration | Signal Flow | Purpose | Phase 2 Synergy |
|-------------------|-------------|---------|------------------|
| **[Source] → [Destination]** | [Signal description] | **[Primary function]** | **[Sophisticated outcome]** |
```

### **Complete System Table Format:**
```markdown
| Layer | Function | [Module] Role | Musical Result |
|-------|----------|---------------|----------------|
| **Organic ([Module])** | Natural breathing | **[Organic function]** | **[Living outcome]** |
| **Chaos ([Module])** | Controlled uncertainty | **[Chaos function]** | **[Unpredictable outcome]** |
| **Patterns ([Module])** | Learning circuits | **[Pattern function]** | **[Adaptive outcome]** |
| **[Function] ([Module])** | [Core processing] | **[System brain]** | **[Advanced outcome]** |
```

---

## Writing Style Guidelines

### **Tone & Approach:**
- **Educational but not condescending**
- **Technical but accessible**
- **Enthusiastic but realistic**
- **Progressive complexity**

### **Section Progression:**
1. **Quick Start** - Immediate gratification
2. **Essential Parameters** - Deep understanding
3. **Basic Patches** - Practical application
4. **Phase 2 Integration** - Advanced concepts
5. **Learning Path** - Structured progression

### **Language Patterns:**
- **Start simple, build complexity**
- **Use active voice**
- **Include specific settings**
- **Provide real musical context**
- **Emphasize learning outcomes**

---

## Quality Checklist

### **Before Publishing, Verify:**

#### **Language Standards:**
- [ ] No "AI" or "intelligence" references
- [ ] Circuit-based descriptions throughout
- [ ] Sophisticated but not anthropomorphized language

#### **Structure Completeness:**
- [ ] Quick Start section (5 minutes to success)
- [ ] Essential Parameters (6-8 main controls)
- [ ] 4 Basic + 3 Phase 2 integration patches
- [ ] Complete ASCII diagrams with proper cable notation
- [ ] Phase 2 Module Synergies in "Pairs Well With"
- [ ] Complete Phase 2 Learning Path section
- [ ] Bottom Line summary

#### **Technical Accuracy:**
- [ ] All patch instructions tested/verified
- [ ] Correct parameter ranges and behaviors
- [ ] Proper signal flow descriptions
- [ ] Accurate module integration descriptions

#### **Educational Value:**
- [ ] Clear progression from beginner to expert
- [ ] Specific learning objectives for each patch
- [ ] Cross-module learning opportunities explained
- [ ] Performance applications included

---

## Phase 2 Module Reference

### **Core Phase 2 Modules (Most Common Examples):**
- **DivKid Ochd & Expander** - Organic LFO system
- **Make Noise Wogglebug** - Controlled chaos generator
- **Mutable Marbles** - Learning pattern generator
- **4ms RCD v2** - Polyrhythmic clock divider
- **Cre8audio Function Junction** - Comprehensive modulation processor

### **Extended Phase 2 Ecosystem:**

#### **Organic/Natural Modulation:**
- **Befaco Rampage** - Organic function generation
- **Intellijel Quadrax** - Multi-channel organic envelopes
- **Make Noise Maths** - Mathematical organic relationships
- **Batumi** - Quad LFO with natural phase relationships
- **Joranalogue Orbit 3** - Three-dimensional modulation

#### **Chaos/Random Sources:**
- **Turing Machine ecosystem** - Binary chaos expansion
- **Music Thing Radio Music** - Chaotic sample manipulation
- **Various Benjolin circuits** - Rungler-based chaos
- **Nonlinearcircuits modules** - Diverse chaos generators

#### **Pattern/Learning Systems:**
- **Intellijel Metropolix** - Probability-based sequencing
- **ALM Pamela's series** - Algorithmic pattern generation
- **Euclidean Circles** - Mathematical pattern relationships
- **Malekko Varigate series** - Pattern evolution
- **Winter Modular Eloquencer** - Complex pattern sequencing

#### **Advanced Timing/Rhythm:**
- **Make Noise Tempi** - Clock manipulation
- **Shakmat Time Wizard** - Advanced timing processing
- **Various Euclidean sequencers** - Mathematical rhythm generation

### **Selection Strategy for Guides:**
- **Featured module character** should influence modulation source selection
- **Rotate between different combinations** to showcase variety
- **Cross-reference other guides** that use different combinations
- **Suggest alternatives** for readers with different module collections

### **Phase 1 Integration:**
- **Make Noise Maths** - Mathematical processing foundation
- **Mutable Plaits** - Core synthesis engine integration
- **Other Phase 1 modules** - Fundamental synthesis building blocks
- **Cross-phase integration** - Bridge sophisticated modulation with core synthesis

### **Function-Specific Integration Philosophy:**
Each guide should show how the featured module serves as the "brain" for its specific function (rhythm, destruction, filtering, etc.) within diverse Phase 2 ecosystems, demonstrating that the **integration approach** is more important than the **specific modules** used.

---

## Future Applications

This template should be used for:
- **All new eurorack module guides**
- **Updates to existing guides**
- **Semi-modular instrument guides**
- **Effect pedal integration guides**
- **DAW template documentation**
- **Studio workflow guides**

The Phase 2 approach transforms individual module documentation into **ecosystem learning systems** that teach sophisticated modular synthesis concepts through practical, musical applications.

---

**Remember:** These guides are educational tools that should inspire experimentation while teaching fundamental concepts. Every guide should leave the reader with both practical skills and deeper understanding of modular synthesis principles.