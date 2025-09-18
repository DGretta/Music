# 4ms Company Listen IO - Guide

**The Essential Audio Interface for Modular Systems**

---

## Quick Start: Get Your First External Signal Into Modular in 5 Minutes

**What is Listen IO?** A 6HP dual-section audio interface that converts external signals to modular levels (with up to 30x gain) and modular signals to line/headphone levels. Features LED bar graphs for visual monitoring, dual headphone outputs, and professional specifications for studio-quality I/O.

### Your First External Connection
1. **Connect external source** - Patch guitar, keyboard, or line source to top Line In jack
2. **Set gain level** - Adjust Gain knob while watching LED bar graph for proper level
3. **Connect to modular** - Patch top Mod Out to a modular destination (VCA, filter, etc.)
4. **Monitor levels** - LED shows signal strength - avoid red clipping light
5. **Test headphone output** - Connect headphones to bottom Line Out jacks for monitoring

**Important:** Watch the LED bar graphs - they show signal level and clipping for both sections!

---

## Essential Parameters (The Interface Controls)

### **Line to Modular Section (Top Half)**

#### **Line In Jacks - The External Signal Inputs**
- **What they do:** Accept wide range of external signals for conversion to modular levels
- **Signal compatibility:** Guitars, keyboards, effect pedals, synthesizers, phones, tablets, toys
- **Microphone support:** Most dynamic mics work, excluding phantom-powered and electret mics
- **Input configuration:** Mono jacks - use left for mono sources, both for stereo sources
- **Pro tip:** These inputs can handle almost any external audio source safely

#### **Gain Knob - The Signal Boost Controller**
- **What it does:** Controls amplification from negative infinity (muted) to +30dB boost
- **Character:** Shared control for both left and right channels simultaneously
- **Range:** Approximately 30x voltage gain at maximum setting
- **Applications:** Boost weak signals (phones) or moderate strong signals (line sources)
- **Pro tip:** Use LED bar graph to set optimal gain - avoid red clipping light

#### **LED Bar Graph (Left/Right) - The Level Monitors**
- **What they do:** Display signal level after gain is applied, with clipping indication
- **Signal level:** More lights and brightness = higher signal level
- **Clipping warning:** Top light flashes red when signal clips
- **Safe operation:** Adjust Gain knob down when red light appears
- **Creative use:** Clipping can be used intentionally for distortion effects
- **Pro tip:** Aim for strong signal without red clipping for clean results

#### **Mod Out Jacks (Black Jacks) - The Modular Level Outputs**
- **What they do:** Output boosted external signals at modular levels for system use
- **Signal routing:** Left input → left output, right input → right output
- **Output level:** Up to 22V peak-to-peak modular levels
- **Applications:** Feed external signals into VCAs, filters, effects, mixers
- **Pro tip:** These outputs can drive multiple modular destinations simultaneously

#### **INS Header - The Expansion Interface**
- **What it does:** 3-pin header for connecting adaptor modules (like Listen Up)
- **Configuration:** Left channel (bottom), right channel (top), ground (center)
- **Applications:** Use different connector types (1/4", banana, etc.)
- **Simultaneous use:** Can be used along with Line In jacks (signals are summed)
- **Pro tip:** Allows custom I/O configurations through adaptor modules

### **Modular to Line Section (Bottom Half)**

#### **Mod In Jacks - The Modular Signal Inputs**
- **What they do:** Accept modular-level signals for conversion to line/headphone levels
- **Signal types:** Any modular audio - oscillators, final mix, effects returns
- **Input configuration:** Mono jacks - use left for mono, both for stereo
- **Applications:** Final output stage, headphone monitoring, external recording
- **Pro tip:** Essential for getting modular audio to external equipment or headphones

#### **Level Knob - The Output Attenuator**
- **What it does:** Controls attenuation from negative infinity (muted) to 0dB (unity gain)
- **Character:** Shared control for both left and right channels
- **Range:** Only attenuation - reduces modular levels to safe line levels
- **No clipping:** This section cannot clip - LED bar graph has no red lights
- **Pro tip:** Start low and increase until desired monitoring level is reached

#### **LED Bar Graph (Left/Right) - The Output Level Monitors**
- **What they do:** Display attenuated signal level for monitoring purposes
- **Visual feedback:** More lights and brightness = higher output level
- **No clipping indication:** Bottom section cannot clip, so no red warning lights
- **Monitoring aid:** Visual confirmation of output levels for external equipment
- **Pro tip:** Use to match levels when connecting to external recording equipment

#### **Line/Headphones Out Jacks (Black Jacks) - The Multi-Purpose Outputs**
- **What they do:** Output line-level signals or drive headphones directly
- **Mono operation:** Left jack = left signal, right jack = right signal
- **Stereo headphones:** Left jack = normal stereo, right jack = swapped stereo channels
- **Dual headphones:** Two people can monitor simultaneously with different channel configs
- **Applications:** Recording output, headphone monitoring, external effects sends
- **Pro tip:** Can function as both line outputs and headphone amplifiers simultaneously

#### **OUTS Header - The Line Level Expansion Interface**
- **What it does:** 3-pin header outputting same signals as Line Out jacks
- **Configuration:** Left channel (bottom), right channel (top), ground (center)
- **Limitations:** Cannot drive headphones (unlike the main jacks)
- **Applications:** Connection to adaptor modules for different connector types
- **Simultaneous use:** Can be used along with Line Out jacks
- **Pro tip:** Use for custom output configurations while maintaining headphone capability

---

## Beginner Patch Ideas

### **Patch 1: Basic - External Instrument Integration**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ External        │    │ 4ms Company     │    │ Modular         │    │ Monitoring      │
│ Instruments     │    │ Listen IO       │    │ Processing      │    │                 │
│                 │    │                 │    │                 │    │                 │
│ Electric        │    │ Line to Mod:    │    │ VCA Module      │    │                 │
│ Guitar ○────────┼────┼─ Line In L ◀    │    │                 │    │                 │
│                 │    │                 │    │ Audio In ◀──────┼────┼─ Mod Out L ○    │
│ Keyboard ○──────┼────┼─ Line In R ◀    │    │                 │    │                 │
│ (Stereo out)    │    │                 │    │ CV In ◀─────────┼────┼─ Envelope       │
└─────────────────┘    │ Gain: Adjust    │    │                 │    │                 │
                       │ for proper      │    │ Audio Out ○─────┼────┼─ Mod In L ◀     │
┌─────────────────┐    │ levels using    │    │                 │    │                 │
│ Visual          │    │ LED bar graphs  │    │ Filter Module   │    │ Mod to Line:    │
│ Monitoring      │    │                 │    │                 │    │ Process guitar  │
│                 │    │ LED Feedback:   │    │ Audio In ◀──────┼────┼─ Mod Out R ○    │
│ Top LEDs show   │    │ L/R bars show   │    │ (Keyboard)      │    │ (keyboard)      │
│ input levels    │    │ signal strength │    │                 │    │                 │
│ Bottom LEDs     │    │ Red = clipping  │    │ Audio Out ○─────┼────┼─ Mod In R ◀     │
│ show output     │    │ (adjust gain    │    │                 │    │                 │
│ levels          │    │ to avoid)       │    │                 │    │ Level: Set for  │
└─────────────────┘    │                 │    │                 │    │ comfortable     │
                       │                 │    │                 │    │ headphone level │
                       │                 │    │                 │    │                 │
                       │                 │    │                 │    │ Headphones ◀───┼────┼─ Line Out L ○   │
                       │                 │    │                 │    │                 │
                       │                 │    │                 │    │ Recording ◀─────┼────┼─ Line Out R ○   │
                       │                 │    │                 │    │ Interface       │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘

External Instrument Integration Workflow:
1. Connect external instruments to Line In jacks (mono sources to left, stereo to both)
2. Adjust Gain knob while monitoring LED bar graphs for optimal levels without clipping
3. Route converted signals to modular processing (VCAs, filters, effects)
4. Return processed signals to Mod In jacks for monitoring and output
5. Use Level knob to set comfortable headphone monitoring levels
6. Connect Line Out jacks to external recording interface or amplification
```

**Setup:** Understanding conversion between external and modular signal levels
**Controls:** Gain staging with LED monitoring, level matching for external equipment
**Result:** Successful integration of external instruments into modular workflow
**Technical Focus:** Signal level conversion, visual monitoring, and proper gain staging
**Learning Objective:** Master essential I/O interface operations for external instrument integration

### **Patch 2: Advanced - Dual Recording and Monitoring Setup**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Modular         │    │ 4ms Company     │    │ External        │    │ Multi-User      │
│ Sources         │    │ Listen IO       │    │ Processing      │    │ Monitoring      │
│                 │    │                 │    │                 │    │                 │
│ Final Mix L ○───┼────┼─ Mod In L ◀     │    │ Audio Interface │    │                 │
│                 │    │                 │    │                 │    │ Primary         │
│ Final Mix R ○───┼────┼─ Mod In R ◀     │    │ Input L ◀───────┼────┼─ Line Out L ○   │
│                 │    │                 │    │                 │    │ Headphones     │
│ (From mixer     │    │ Level: Set to   │    │ Input R ◀───────┼────┼─ Line Out R ○   │
│ or final VCA)   │    │ avoid clipping  │    │                 │    │ (Normal stereo) │
└─────────────────┘    │ external input  │    │ Output L ○──────┼────┼─ Line In L ◀    │
                       │                 │    │ (Processed)     │    │                 │
┌─────────────────┐    │ Mod to Line:    │    │ Output R ○──────┼────┼─ Line In R ◀    │
│ External        │    │ Convert modular │    │                 │    │ Secondary       │
│ Effects         │    │ to line level   │    │ External        │    │ Headphones     │
│                 │    │                 │    │ Effects Unit    │    │ (Swapped        │
│ Reverb/Delay ○──┼────┼─ Effects Send   │    │                 │    │ channels)       │
│ Returns         │    │ via OUTS header │    │ Input ◀─────────┼────┼─ OUTS Header    │
│                 │    │                 │    │                 │    │                 │
│ Processed ○─────┼────┼─ Line In via    │    │ Output ○────────┼────┼─ INS Header     │
│ Signal Return   │    │ INS header      │    │                 │    │                 │
└─────────────────┘    │                 │    │                 │    │                 │
                       │ Line to Mod:    │    │                 │    │                 │
                       │ Convert         │    │                 │    │                 │
                       │ processed       │    │                 │    │ Gain: Adjust    │
                       │ effects back    │    │                 │    │ for external    │
                       │ to modular      │    │                 │    │ effects return  │
                       │ levels          │    │                 │    │ levels          │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘

Advanced I/O Configuration:
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Signal Flow Management:                                                              │
│ • Modular signals converted to line level for external recording                    │
│ • Simultaneous sends to external effects via expansion headers                      │
│ • External effects returns converted back to modular levels                        │
│ • Multiple monitoring outputs for collaborative sessions                           │
│                                                                                      │
│ Professional Features:                                                               │
│ • Dual headphone outputs with different channel configurations                     │
│ • Expansion headers enable custom I/O configurations                               │
│ • LED monitoring prevents clipping in both directions                              │
│ • Professional signal levels for studio integration                                │
│                                                                                      │
│ Workflow Benefits:                                                                   │
│ • Single module handles complete I/O requirements                                  │
│ • Visual monitoring aids in maintaining signal integrity                           │
│ • Flexible routing options through headers and jacks                              │
│ • Simultaneous recording and monitoring capabilities                               │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Module Integration:**
| Integration Type | Signal Path | Professional Application | Technical Benefit |
|-----------------|-------------|------------------------|------------------|
| **Recording Interface** | Modular → Line Out → Recording | **Studio-quality capture** | **Professional signal levels** |
| **External Effects** | Line Out → Effects → Line In | **Hardware effects integration** | **Bidirectional conversion** |
| **Monitoring System** | Multiple headphone outputs | **Collaborative sessions** | **Independent monitoring configs** |
| **Custom I/O** | Expansion headers | **Flexible connectivity** | **Adaptor module compatibility** |

**Advanced Techniques:**
- **Dual monitoring:** Two users can monitor with different channel configurations
- **Effects integration:** Send/return loops through external hardware effects
- **Professional I/O:** Studio-quality recording and monitoring capabilities
- **Flexible routing:** Headers and jacks can be used simultaneously for complex routing

**Learning Objectives:**
- **Professional I/O:** Understanding studio-quality signal conversion and monitoring
- **Complex routing:** Using all I/O options simultaneously for advanced configurations
- **Signal integrity:** Maintaining quality through multiple conversion stages
- **System integration:** Listen IO as central hub for modular/external equipment interface

### **Patch 3: Expert - Complete Studio Integration Hub**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Multiple        │    │ 4ms Company     │    │ Studio          │    │ Distribution    │
│ External        │    │ Listen IO       │    │ Equipment       │    │ System          │
│ Sources         │    │                 │    │                 │    │                 │
│                 │    │ Line to Mod:    │    │ Audio Interface │    │                 │
│ Drum Machine ○──┼────┼─ Line In L ◀    │    │                 │    │ Main Monitor ◀──┼────┼─ Line Out L ○   │
│                 │    │                 │    │ Line In 1 ◀─────┼────┼─ OUTS Header L  │    │ Speakers        │
│ Groovebox ○─────┼────┼─ Line In R ◀    │    │                 │    │                 │
│                 │    │                 │    │ Line In 2 ◀─────┼────┼─ OUTS Header R  │    │ Studio Heads ◀──┼────┼─ Line Out R ○   │
│ Microphone ○────┼────┼─ INS Header     │    │                 │    │                 │    │ (Normal)        │
│ (via preamp)    │    │ (Custom input)  │    │ DAW Monitor ○───┼────┼─ Line In L ◀    │    │                 │
└─────────────────┘    │                 │    │ (Playback)      │    │ (Summed with    │    │ Performer ◀─────┼────┼─ Additional     │
                       │ Gain: Optimize  │    │                 │    │ external)       │    │ Headphones      │    │ headphone jack  │
┌─────────────────┐    │ for multiple    │    │ Line Out 1 ○────┼────┼─ External       │    │ (Swapped)       │    │ on case         │
│ Modular         │    │ source levels   │    │                 │    │ Processor       │    │                 │
│ System          │    │                 │    │ Line Out 2 ○────┼────┼─ Mod In L ◀     │    │                 │
│                 │    │ LED Monitoring: │    │                 │    │ (DAW return)    │    │                 │
│ Complex Patch ○─┼────┼─ Mod In R ◀     │    │                 │    │                 │    │                 │
│ Final Output    │    │ Visual feedback │    │ External        │    │ Mod In R ◀──────┼────┼─ Mod Out L ○    │
│                 │    │ for all signal  │    │ Hardware        │    │ (External       │    │ (Multiple       │
│ Send Effects ○──┼────┼─ Mod Out L ○    │    │ Processor       │    │ sources mixed   │    │ external        │
│ (Aux sends to   │    │ (To external    │    │                 │    │ in modular)     │    │ sources to      │
│ external gear)  │    │ processing)     │    │ Input ◀─────────┼────┼─ Line Out L     │    │ modular         │
└─────────────────┘    │                 │    │ (from modular)  │    │ (via header)    │    │ processing)     │
                       │ System Hub:     │    │                 │    │                 │    │                 │
                       │ Central point   │    │ Output ○────────┼────┼─ INS Header     │    │ Mod Out R ○─────┼────┼─ Additional     │
                       │ for all audio   │    │ (processed)     │    │ (External       │    │ processing      │
                       │ I/O in studio   │    │                 │    │ processor       │    │ chain           │
                       │                 │    │                 │    │ return)         │    │                 │
                       └─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘

Professional Studio Integration:
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ Complete I/O Hub Functionality:                                                     │
│ • Listen IO serves as central interface between modular and studio equipment       │
│ • Multiple external sources converted to modular levels for internal processing    │
│ • Modular outputs converted to professional levels for recording and monitoring    │
│ • Bidirectional signal flow enables complex studio routing architectures           │
│                                                                                      │
│ Professional Workflow Benefits:                                                      │
│ • Single module eliminates need for external interface in many applications        │
│ • LED monitoring ensures optimal signal levels throughout entire chain             │
│ • Expansion headers provide custom connectivity for any studio configuration       │
│ • Dual headphone outputs enable collaborative production sessions                  │
│                                                                                      │
│ System Architecture:                                                                 │
│ • Listen IO becomes the bridge between modular synthesis and traditional studio    │
│ • Enables modular to function as high-quality studio instrument and processor      │
│ • Provides professional monitoring and signal distribution capabilities            │
│ • Maintains signal integrity through high-quality conversion circuits              │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

**Expert Integration Techniques:**
| System Function | I/O Configuration | Professional Application | Workflow Benefit |
|----------------|------------------|------------------------|------------------|
| **Studio Hub** | All I/O utilized simultaneously | **Central audio routing** | **Single-module I/O solution** |
| **Signal Conversion** | Bidirectional level conversion | **Professional signal levels** | **Studio-quality integration** |
| **Monitoring System** | Multiple output configurations | **Collaborative sessions** | **Flexible monitoring options** |
| **Custom Connectivity** | Expansion headers active | **Adaptor module integration** | **Unlimited connectivity options** |

**Professional Applications:**
- **Studio integration:** Complete bridge between modular and traditional studio equipment
- **Live performance:** Professional I/O for modular in live sound environments
- **Collaborative production:** Multiple monitoring outputs for team-based sessions
- **Custom installations:** Expansion headers enable any conceivable I/O configuration

**Learning Objectives:**
- **System architecture:** Understanding Listen IO as central studio infrastructure
- **Professional workflow:** Integrating modular synthesis into professional production environments
- **Complex routing:** Simultaneous use of all I/O options for maximum flexibility
- **Signal integrity:** Maintaining quality through complex professional signal chains

---

## Pairs Well With

### **Phase 2 Module Synergies (I/O Coordination):**
- **Erica Synths modules:** Audio sources requiring external integration and professional output
- **Make Noise Maths:** Complex CV generation for processing external instrument signals
- **DivKid Ochd & Expander:** LFO modulation of external instrument processing parameters
- **Links:** Signal routing and mixing of external and modular sources
- **Cross-Phase 2 Integration:** Essential I/O interface enabling professional studio integration

### **Perfect Partners for I/O Applications:**
- **External instruments:** Guitars, keyboards, drum machines, grooveboxes requiring modular integration
- **VCA modules:** Amplitude control of converted external signals within modular system
- **Filter modules:** Timbral processing of external instruments using modular filters
- **Effects modules:** Modular effects processing of external audio sources
- **Mixer modules:** Combining external and modular sources for final output

### **Advanced System Integration:**
- **Audio interfaces:** Professional recording equipment for studio integration
- **External effects:** Hardware processors for modular signal processing
- **Monitoring systems:** Studio monitors and headphones for professional monitoring
- **Adaptor modules:** Listen Up and custom adaptors for flexible connectivity

### **Essential I/O Partnerships:**
- **Multiple modules:** Signal processing for converted external sources
- **Performance controllers:** Expression control of external instrument processing
- **Recording equipment:** Professional capture of modular-processed external sources
- **Live sound systems:** Professional output for performance applications

### **Professional Workflow Integration:**
- **Studio systems:** Complete I/O solution for modular/studio integration
- **Live performance:** Professional I/O for modular in concert environments
- **Educational applications:** Teaching audio interface concepts and professional signal flow
- **Installation work:** Custom I/O solutions through expansion headers and adaptors

---

## Phase 2 Learning Path

### **Recommended Study Progression:**
1. **Start with basic I/O:** Master signal level conversion and LED monitoring
2. **Add external integration:** Connect external instruments and understand gain staging
3. **Include monitoring setup:** Proper headphone monitoring and level management
4. **Add professional applications:** Studio integration and recording workflows
5. **Include expansion options:** Using headers for custom connectivity solutions
6. **Complete expert applications:** Complex studio routing and professional integration

### **Cross-Module Learning Opportunities:**
- **Listen IO + External instruments:** Guitar/keyboard integration with modular processing
- **Listen IO + VCA modules:** Amplitude control of converted external signals
- **Listen IO + Effects modules:** Modular processing of external audio sources
- **Listen IO + Mixer modules:** Professional output mixing and monitoring
- **All Phase 2 + Listen IO:** Essential I/O infrastructure enabling professional modular/studio integration

### **Skill Development Milestones:**
- **Beginner:** Basic I/O operation, gain staging, LED monitoring
- **Intermediate:** External instrument integration, headphone monitoring, basic recording
- **Advanced:** Professional studio integration, complex routing, expansion header usage
- **Expert:** Complete I/O hub operation, professional workflow integration, custom connectivity

### **Advanced I/O Concepts:**
- **Signal Level Theory:** Understanding conversion between instrument, line, and modular levels
- **Gain Staging:** Proper level management throughout signal chain
- **Professional Standards:** Studio-quality signal integrity and monitoring practices
- **System Architecture:** Listen IO as essential infrastructure in professional setups

### **Performance Applications:**
- **External instrument integration:** Real-time processing of guitars, keyboards, drums in modular
- **Professional monitoring:** Studio-quality headphone and line monitoring
- **Recording workflows:** High-quality capture of modular-processed external sources
- **Live performance:** Professional I/O for modular instruments in concert environments

---

**Bottom Line:** Listen IO isn't just an audio interface - it's **essential studio infrastructure** that bridges the gap between modular synthesis and professional audio equipment with studio-quality conversion, comprehensive monitoring, and flexible connectivity options. Every patch teaches something new about professional I/O, from basic level conversion to complex studio integration. As **fundamental I/O infrastructure within Phase 2 ecosystems**, it enables professional studio integration, high-quality monitoring, and seamless external instrument integration while maintaining the signal integrity essential for professional recording and performance applications in the most compact and capable format possible.