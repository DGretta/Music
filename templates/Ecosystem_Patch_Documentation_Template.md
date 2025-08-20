# Ecosystem Patch Documentation Template

## **Patch Name: [DESCRIPTIVE NAME]**
*Date Created: [DATE]*  
*Complexity Level: Beginner / Intermediate / Advanced / Expert*  
*Demo Ready: Yes / No*

---

## **🎵 Musical Description**

### **What This Patch Does:**
[Describe the musical character and purpose in plain language]

### **Genre/Style:**
[Ambient / Techno / Experimental / etc.]

### **Key Musical Elements:**
- **Rhythm**: [Timing, groove characteristics]
- **Harmony**: [Chord progressions, tonal center]
- **Texture**: [Dense/sparse, moving/static]
- **Evolution**: [How it changes over time]

### **Emotional Impact:**
[How it makes listeners feel, typical reactions]

---

## **🎛️ Technical Configuration**

### **Essential Devices:**
| Device | Role | Critical? | Alternative |
|--------|------|-----------|-------------|
| [Device 1] | [Primary bass] | Yes | [Backup option] |
| [Device 2] | [Lead voice] | Yes | [Alternative] |
| [Device 3] | [Texture] | No | [Can be omitted] |

### **MIDI Channel Assignments:**
| Channel | Device | Function | Notes |
|---------|--------|----------|-------|
| 1 | Mother32 | Bass sequence | Root notes |
| 2 | Neutron | Lead melody | Octave higher |
| 3 | MatrixBrute | Chord pads | 4-voice polyphony |
| 4 | Hydrasynth | Texture layer | Ambient wash |

### **CV Routing (Critical Connections):**
```
Primary CV Flow:
Hermod+ Track 1 → FH-2 CH1 → MRCC → Mother32 (Bass sequence)
Maths Ch1 (slow) → FH-2 CH3 → MRCC → Multiple devices Filter CC
Marbles Y1 → FH-2 CH5 → MRCC → Random modulation

Essential Eurorack Internal:
Cs-L → Polivoks VCF → YYS Stereo
Plaits → Arbhar → Afterneath → Main mix
```

### **Audio Signal Flow:**
```
Signal Path:
Mother32 → Mackie Channel 1 → [EQ/Comp settings]
Neutron → Mackie Channel 2 → [Processing chain]
Eurorack Mix → Mackie Stereo Return → [Effects]
```

---

## **⚡ Setup Instructions**

### **Power-On Sequence:**
1. **Eurorack cases** (wait for boot)
2. **MRCC** (wait for initialization)
3. **MPC X** (if used as master clock)
4. **Semi-modulars** (in order of MIDI chain)
5. **Audio mixers** and monitoring

### **Patch Cable Setup (Eurorack):**
**Priority 1 - Essential:**
- [ ] Hermod+ CV 1 → FH-2 Input 1
- [ ] Maths Ch1 → FH-2 Input 3
- [ ] Cs-L → Polivoks VCF Input
- [ ] Polivoks Out → YYS Input 1

**Priority 2 - Enhanced:**
- [ ] Marbles Y1 → FH-2 Input 5
- [ ] Plaits → Arbhar Input
- [ ] Arbhar L → Afterneath Input
- [ ] Afterneath Out → YYS Input 2

**Priority 3 - Optional:**
- [ ] Pressure Points 1 → FH-2 Input 7
- [ ] ochd Out 1 → Multiple destinations
- [ ] Wogglebug CV → Available modulation input

### **MIDI Configuration (MRCC):**
1. **Set FH-2 as MIDI Input 1**
2. **Route to channels 1-8** for semi-modulars
3. **Enable clock distribution** to all devices
4. **Test MIDI communication** before proceeding

### **Device-Specific Settings:**

**Mother32:**
- **MIDI Channel**: 1
- **Clock**: External
- **Filter Cutoff**: 12 o'clock start position
- **VCA**: Full open

**Neutron:**
- **MIDI Channel**: 2
- **Oscillator Mix**: Both OSCs balanced
- **Filter**: Low-pass, moderate resonance
- **Envelope**: Medium attack, short decay

**Hermod+:**
- **Track 1**: 1V/Oct sequence for bass
- **Track 2**: Clock divisions for polyrhythm
- **BPM**: 128 (or sync to master)
- **Scale**: [Specific scale if relevant]

---

## **🎚️ Performance Controls**

### **Real-Time Manipulation:**
**Macro Control 1** (Pressure Points Touch 1):
- **Effect**: Opens all filter cutoffs simultaneously
- **Range**: Closed (dark) → Wide open (bright)
- **Musical Impact**: Dramatic timbral transformation

**Macro Control 2** (Moog EP-3 Expression):
- **Effect**: Controls reverb/delay sends
- **Range**: Dry (intimate) → Wet (spacious)
- **Musical Impact**: Spatial morphing

**Macro Control 3** (Available knob/fader):
- **Effect**: [Specific function]
- **Range**: [Parameter range]
- **Musical Impact**: [Musical result]

### **Pattern Variations:**
**Variation A** (Base Pattern):
- [Description of starting state]

**Variation B** (Build-Up):
- [How to add complexity]

**Variation C** (Peak):
- [Full complexity version]

**Variation D** (Breakdown):
- [Stripped down version]

---

## **🔧 Troubleshooting**

### **Common Issues:**
**Problem**: No MIDI response from semi-modulars
- **Check**: MRCC routing and MIDI channels
- **Solution**: Verify device MIDI channel settings
- **Test**: Send simple note from MPC X

**Problem**: CV not reaching FH-2 properly
- **Check**: Patch cable connections
- **Solution**: Test CV signals with multimeter
- **Alternative**: Try different CV source

**Problem**: Audio signal path issues
- **Check**: Mixer channel assignments
- **Solution**: Trace signal from source to speakers
- **Backup**: Use headphone monitoring to isolate

### **Emergency Simplification:**
If complex patch fails, minimal working version:
1. **Remove all CV modulation**
2. **Use only 2-3 devices**
3. **Simplify to basic sequence + filter**
4. **Add complexity back gradually**

---

## **📊 Performance Notes**

### **Timing Considerations:**
- **Setup Time**: ____ minutes (from power-on to playing)
- **Stability**: [How reliable this patch is]
- **CPU/Power Usage**: [Any limitations noted]

### **Visitor Demonstration Value:**
- **Wow Factor** (1-10): ____
- **Easy to Explain** (1-10): ____
- **Showcases Integration** (1-10): ____

### **Best Demonstration Sequence:**
1. **Start with**: [Simple element to begin]
2. **Add**: [Next layer for building impact]
3. **Demonstrate**: [Key integration feature]
4. **Climax with**: [Most impressive element]

---

## **🎨 Creative Evolution**

### **Variations to Explore:**
- **Rhythmic**: [Different timing relationships]
- **Harmonic**: [Alternative chord progressions]
- **Textural**: [Different sound sources]
- **Structural**: [Alternative arrangement ideas]

### **Expansion Possibilities:**
- **Add devices**: [Which additional units would enhance]
- **Add modulation**: [Unused CV sources to explore]
- **Add effects**: [Pedal board integration opportunities]

### **Genre Adaptations:**
- **For Ambient**: [How to make more atmospheric]
- **For Techno**: [How to make more driving]
- **For Experimental**: [How to make more abstract]

---

## **📝 Session Notes**

### **Creation Story:**
[How this patch came about, inspiration, accidents that worked]

### **What I Learned:**
[Technical insights, musical discoveries, integration lessons]

### **Future Development:**
[Ideas for evolving this patch further]

---

## **🔗 Related Patches**
- **[Related Patch 1]**: [How it connects]
- **[Related Patch 2]**: [Shared elements]
- **[Related Patch 3]**: [Evolution pathway]

---

## **📋 Quick Setup Checklist**
*For experienced users who know the patch:*

**Power & Boot:**
- [ ] All cases powered, modules booted
- [ ] MRCC initialized and ready
- [ ] Master clock source active

**Essential Connections:**
- [ ] [Critical connection 1]
- [ ] [Critical connection 2]
- [ ] [Critical connection 3]

**Key Settings:**
- [ ] [Device 1 setting]
- [ ] [Device 2 setting]
- [ ] [Device 3 setting]

**Audio Check:**
- [ ] All channels receiving signal
- [ ] Monitor levels appropriate
- [ ] Effects returns working

**Performance Ready:**
- [ ] Macro controls tested
- [ ] Pattern variations loaded
- [ ] Emergency simplification known

---

*Template Version: 1.0*  
*Last Updated: [DATE]*

**Usage Notes:** 
- Fill out completely for your best/most impressive patches
- Focus on reproducibility - someone else should be able to recreate this
- Include failure modes and recovery strategies
- Update as you discover improvements or variations