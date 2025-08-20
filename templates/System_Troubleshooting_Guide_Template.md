# System Troubleshooting Guide Template

## **Studio Ecosystem Emergency Protocols**
*Version: [VERSION]*  
*Last Updated: [DATE]*  
*Emergency Contact: [YOUR INFO]*

---

## **🚨 Quick Emergency Procedures**

### **When Everything Stops Working:**
1. **DON'T PANIC** - Complex systems have complex failures
2. **Document the issue** - What was happening when it failed?
3. **Power cycle systematically** - Don't restart everything at once
4. **Isolate the problem** - Test individual components
5. **Fall back to known good state** - Use documented working configurations

### **Emergency Simplified Setup:**
**If demo/performance is imminent and system is failing:**
1. **Power off everything** except essential devices
2. **Use Mother32 + DFAM** (always reliable, self-contained)
3. **Add Neutron** if MIDI working
4. **Skip all CV integration** - use only MIDI/audio
5. **Fall back to MPC X standalone** if necessary

---

## **🔌 Power & Connectivity Issues**

### **Eurorack Power Problems:**

**Symptom**: Module not powering on
- **Check**: Power cable connection at module
- **Check**: Power cable connection at power supply
- **Test**: Different power cable if available
- **Test**: Module in different case/position
- **Measure**: Voltages at power connector (±12V, +5V)

**Symptom**: Multiple modules not working
- **Check**: Case power supply indicator lights
- **Check**: Power consumption vs. supply capacity
- **Test**: Remove half the modules, test remaining
- **Solution**: May need additional power supply

**Symptom**: Audio noise/interference
- **Check**: Power cable routing away from audio cables
- **Check**: Proper grounding of cases and audio equipment
- **Test**: Different power outlets/circuits
- **Solution**: Power conditioning/isolation

### **MIDI Connectivity Issues:**

**Symptom**: MRCC not responding
- **Solution**: Power cycle MRCC (hold power 10+ seconds)
- **Check**: USB connection to computer if using editor
- **Test**: Factory reset if configuration corrupted
- **Backup**: Manual MIDI routing without MRCC

**Symptom**: Semi-modular not receiving MIDI
- **Check**: MIDI channel assignments match
- **Check**: MIDI cable connections (DIN connectors)
- **Test**: Send MIDI from MPC X directly to device
- **Test**: Different MIDI cable
- **Check**: Device MIDI settings (channel, clock, etc.)

**Symptom**: Timing/sync issues
- **Check**: Master clock source consistency
- **Test**: Single clock source (disable others)
- **Check**: MIDI clock vs. analog clock conflicts
- **Solution**: Word clock distribution if needed

---

## **🎛️ Audio Signal Path Troubleshooting**

### **No Audio Output:**

**Systematic Audio Tracing:**
1. **Check headphones first** - isolate monitoring from speakers
2. **Test at source** - does device produce audio when directly monitored?
3. **Check mixer channel** - is signal reaching mixer input?
4. **Check mixer output** - is signal leaving mixer?
5. **Check monitoring** - are speakers/amps working?

**Common Audio Issues:**
- **Mixer channel muted/low** - Check fader and mute buttons
- **Incorrect input selection** - Verify line/mic/instrument settings
- **Phantom power issues** - Turn off phantom on line inputs
- **Impedance mismatch** - High-Z vs. low-Z input settings
- **Cable failure** - Audio cables fail frequently, test with known good cables

### **Audio Quality Issues:**

**Symptom**: Distortion/clipping
- **Check**: Input gain staging on mixer channels
- **Check**: Output levels not overdriving next stage
- **Solution**: Reduce levels throughout signal chain

**Symptom**: Noise/hum
- **Check**: Ground loops (lift grounds systematically)
- **Check**: Cable routing away from power supplies
- **Check**: Balanced vs. unbalanced connections
- **Solution**: DI boxes for impedance/grounding issues

**Symptom**: One channel missing (stereo issues)
- **Check**: Mono/stereo switch settings
- **Check**: Pan controls on mixer channels
- **Test**: Swap left/right connections
- **Test**: Different audio cable

---

## **🎵 Integration-Specific Problems**

### **FH-2 CV-to-MIDI Issues:**

**Symptom**: CV input not generating MIDI
- **Check**: CV cable connections to FH-2 inputs
- **Check**: FH-2 configuration via computer software
- **Test**: CV signal voltage with multimeter (should be -10V to +10V)
- **Test**: Different CV source (known working)
- **Check**: MIDI output from FH-2 to MRCC

**Symptom**: Wrong MIDI messages being sent
- **Check**: FH-2 input configuration (note/CC/gate settings)
- **Check**: MIDI channel assignments
- **Check**: Voltage scaling in FH-2 software
- **Solution**: Reconfigure FH-2 inputs for intended function

**Symptom**: Latency/timing issues with CV-to-MIDI
- **Accept**: Some latency is normal vs. direct CV
- **Minimize**: Use for non-rhythmically critical functions
- **Solution**: Use CV-to-MIDI for harmony/texture, direct CV for rhythm

### **Hermod+ Integration Issues:**

**Symptom**: Hermod+ not receiving MIDI clock
- **Check**: MIDI connections to Hermod+
- **Check**: MIDI clock source priority settings
- **Test**: Internal clock vs. external clock
- **Check**: Clock division/multiplication settings

**Symptom**: CV outputs not working
- **Check**: CV cable connections from Hermod+
- **Test**: CV outputs with multimeter
- **Check**: Track configuration (CV vs. Gate vs. Modulation)
- **Solution**: Re-configure track assignments

**Symptom**: Sequencer patterns not playing
- **Check**: Pattern selection and play status
- **Check**: Track mute/solo settings
- **Check**: Sequence length settings
- **Test**: Manual trigger to verify CV path working

---

## **📱 Device-Specific Troubleshooting**

### **MPC X Issues:**

**Common Problems:**
- **Frozen/unresponsive**: Hold power button 10+ seconds for hard reset
- **MIDI not sending**: Check MIDI settings in menu
- **Samples not loading**: Check SD card/storage health
- **Audio clipping**: Check internal mixer levels

### **Mother32/DFAM/Subharmonicon:**

**Common Problems:**
- **No sequence playing**: Check run/stop switch
- **No audio**: Check VCA setting and patch cables
- **Tempo issues**: Check internal vs. external clock setting
- **CV not working**: Check attenuator/attenuverter settings

### **Behringer Semi-Modulars:**

**Common Problems:**
- **MIDI not responding**: Check MIDI channel, often resets to default
- **Audio output low**: Check output level controls
- **Filter not opening**: Check envelope amount and manual cutoff
- **Oscillator drift**: Normal for analog oscillators, retune as needed

---

## **💾 Backup & Recovery Procedures**

### **Configuration Backup Strategy:**

**What to Back Up:**
- **FH-2 configurations** (save to computer before changes)
- **MRCC scenes/settings** (document routing configurations)
- **Hermod+ patterns/songs** (export to SD card)
- **MPC X projects** (regular exports to external storage)
- **FL Studio templates** (version control system)

**Backup Schedule:**
- **Before major changes**: Always backup current working state
- **Weekly**: Export critical configurations
- **Monthly**: Full system backup including documentation
- **Before updates**: Backup everything before firmware updates

### **System Recovery Procedures:**

**Complete System Recovery:**
1. **Document current issue** completely
2. **Power down everything** in reverse of startup order
3. **Disconnect all patch cables**
4. **Power up minimal system** (1-2 devices)
5. **Test minimal system** thoroughly
6. **Add devices one by one** until issue reappears
7. **Isolate problematic device/connection**

**Known Good State Restoration:**
1. **Load documented working patch**
2. **Use backup configurations** for all devices
3. **Follow setup checklist** exactly
4. **Test each subsystem** before adding complexity

---

## **📞 When to Call for Help**

### **Issues Requiring Professional Service:**
- **Hardware failure** (blown modules, power supply failure)
- **Electrical safety issues** (smoking, burning smell, shock hazard)
- **Firmware corruption** that can't be resolved with factory reset
- **Physical damage** to equipment

### **Issues for Online Communities:**
- **Complex configuration problems** beyond basic troubleshooting
- **Software/firmware compatibility issues**
- **Integration techniques** not covered in manuals
- **Performance optimization** questions

### **Documentation Before Seeking Help:**
1. **Exact sequence** that led to problem
2. **Error messages** or symptoms observed
3. **What troubleshooting** has already been attempted
4. **System configuration** details
5. **Photos/videos** of setup if relevant

---

## **🛡️ Preventive Maintenance**

### **Daily/Session Checklist:**
- [ ] **Visual inspection** of all connections
- [ ] **Power supply indicator lights** all green/normal
- [ ] **Audio level check** before starting session
- [ ] **Quick system communication test**

### **Weekly Maintenance:**
- [ ] **Cable organization** and inspection for damage
- [ ] **Dust removal** from air vents and fan intakes
- [ ] **Backup critical configurations**
- [ ] **Test emergency procedures** briefly

### **Monthly Maintenance:**
- [ ] **Firmware update check** for all devices
- [ ] **Deep clean** of workspace and equipment
- [ ] **Full system backup** and documentation update
- [ ] **Calibration check** for critical analog modules

### **Quarterly Maintenance:**
- [ ] **Professional service** for any issues noted
- [ ] **Power supply health check** (voltage measurements)
- [ ] **Complete cable replacement** program (rotate oldest cables)
- [ ] **System performance assessment** and optimization

---

## **📋 Emergency Contact Information**

### **Manufacturer Support:**
- **Expert Sleepers** (FH-2): [Contact info]
- **Conductive Labs** (MRCC): [Contact info]
- **Squarp** (Hermod+): [Contact info]
- **Akai** (MPC X): [Contact info]

### **Local Resources:**
- **Electronics Repair**: [Local shop info]
- **Music Store Tech Support**: [Contact info]
- **Local Synthesizer Community**: [Online groups/forums]
- **Emergency Equipment Loan**: [Backup gear sources]

---

## **🧰 Essential Tools for Troubleshooting**

### **Basic Tool Kit:**
- [ ] **Digital multimeter** (for voltage/continuity testing)
- [ ] **Patch cable tester** (or known good test cables)
- [ ] **USB cables** (various lengths, known good)
- [ ] **MIDI cables** (spares, known good)
- [ ] **Audio cables** (various types, known good)
- [ ] **Small screwdrivers** (for module removal/installation)
- [ ] **Flashlight/headlamp** (for checking connections in dark spaces)

### **Advanced Diagnostic Tools:**
- [ ] **Oscilloscope** (for CV signal analysis)
- [ ] **Audio interface with meters** (for signal tracing)
- [ ] **MIDI monitor software** (for protocol analysis)
- [ ] **Spare modules** (known working, for substitution testing)
- [ ] **Power supply tester** (for Eurorack power verification)

---

## **📚 Reference Quick Cards**

### **Voltage Reference:**
- **Eurorack CV**: ±10V (typical), ±12V (maximum)
- **Gate/Trigger**: 0V (low) to +5V or +10V (high)
- **Audio**: ±5V to ±10V (Eurorack line level)

### **MIDI Reference:**
- **Standard MIDI Channels**: 1-16
- **Common CC Numbers**: 
  - CC 1: Modulation Wheel
  - CC 7: Volume
  - CC 10: Pan
  - CC 11: Expression
  - CC 74: Filter Cutoff (standard)

### **Common Connector Types:**
- **Eurorack**: 3.5mm TS (mono) patch cables
- **MIDI**: 5-pin DIN connectors
- **Audio**: 1/4" TS/TRS, XLR, RCA
- **Power**: Keyed ribbon cables (Eurorack)

---

## **🔄 System Reset Procedures**

### **Complete System Reset (Nuclear Option):**
**When to Use:** Multiple systems failing, configuration corruption suspected

**Procedure:**
1. **Document current state** (photos, notes)
2. **Power down all equipment** in reverse startup order
3. **Disconnect all patch cables**
4. **Factory reset critical devices** (MRCC, FH-2, Hermod+)
5. **Power up minimal system** (1-2 devices only)
6. **Test minimal system** thoroughly
7. **Add complexity slowly** using documented procedures
8. **Rebuild configuration** from backup documentation

### **Graceful Restart Procedure:**
**When to Use:** Minor issues, general instability

**Procedure:**
1. **Save current work** to storage devices
2. **Document active patch** quickly
3. **Power down in order**: Audio gear → MIDI gear → Eurorack
4. **Wait 30 seconds** for capacitors to discharge
5. **Power up in order**: Eurorack → MIDI gear → Audio gear
6. **Test basic connectivity** before loading complex patches

---

## **📖 Learning from Failures**

### **Failure Analysis Template:**
**Date**: [DATE]  
**Symptom**: [What was observed]  
**Context**: [What was being attempted]  
**Cause**: [Root cause identified]  
**Solution**: [How it was resolved]  
**Prevention**: [How to avoid in future]  
**Documentation Update**: [What needs to be updated]

### **Common Failure Patterns:**
**Pattern**: Power supply overload
- **Symptoms**: Multiple modules not working, power supply overheating
- **Prevention**: Regular power consumption audit
- **Solution**: Redistribute modules or add power supply

**Pattern**: MIDI configuration drift
- **Symptoms**: Devices not responding to expected channels
- **Prevention**: Document all MIDI channel assignments
- **Solution**: Systematic MIDI channel verification

**Pattern**: Cable degradation
- **Symptoms**: Intermittent audio/CV, noise, connection issues
- **Prevention**: Regular cable inspection and rotation
- **Solution**: Maintain spare cable inventory

---

## **🎯 Troubleshooting Mindset**

### **Effective Troubleshooting Principles:**
1. **Systematic approach** - Don't change multiple things at once
2. **Document everything** - Note what was tried and results
3. **Isolate variables** - Test one component at a time
4. **Use known good** - Have working cables, modules, configurations for testing
5. **Think simple first** - Check power, connections, basic settings
6. **When stuck, step back** - Sometimes a break provides perspective

### **What NOT to Do:**
- **Don't change multiple things simultaneously**
- **Don't force connections** that don't fit properly
- **Don't ignore intermittent problems** - they usually get worse
- **Don't skip documentation** of problems and solutions
- **Don't work on equipment when frustrated** - take breaks

---

*Template Version: 1.0*  
*Last Updated: [DATE]*

**Usage Notes:** 
- Customize for your specific equipment and setup
- Update with new issues and solutions as discovered
- Keep physical copy accessible during emergencies
- Review and practice procedures regularly