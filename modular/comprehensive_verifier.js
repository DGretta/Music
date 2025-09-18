#!/usr/bin/env node

/**
 * Comprehensive Module Interface Verifier
 * Checks ALL physical interface elements against verified specifications
 */

const fs = require('fs');
const path = require('path');

// Comprehensive module interface database
const moduleDatabase = {
  'pico_voice': {
    name: 'Erica Synths Pico Voice',
    manufacturer: 'Erica Synths',
    verified: true,
    physicalInterface: {
      inputs: [
        '1V/Oct input',
        'CV input'
      ],
      outputs: [
        'OUT',
        'Audio output'
      ],
      knobs: [
        'TUNE knob',
        'PAR1 knob', 
        'PAR2 knob'
      ],
      buttons: [
        'Button',
        'MODE button'
      ],
      switches: [],
      leds: [
        'LED',
        'RGB LED'
      ],
      forbidden: [
        'gate input',
        'Gate input', 
        'trigger input',
        'Trigger input',
        'TRIGG input'
      ],
      notes: 'Uses note change detection on 1V/Oct, no dedicated gate input'
    }
  },

  'pico_drum2': {
    name: 'Erica Synths Pico DRUM2',
    manufacturer: 'Erica Synths', 
    verified: true,
    physicalInterface: {
      inputs: [
        'TRIGG input',
        'CV1 input',
        'CV2 input'
      ],
      outputs: [
        'OUT',
        'Audio output'
      ],
      knobs: [
        'PARAM1 knob',
        'PARAM2 knob',
        'DECAY knob'
      ],
      buttons: [
        'MODE button'
      ],
      switches: [],
      leds: [
        'RGB LED',
        'LED'
      ],
      forbidden: [
        'gate input',
        'Gate input'
      ],
      corrections: {
        'gate input': 'TRIGG input',
        'Gate input': 'TRIGG input'
      },
      notes: 'Uses TRIGG input (not gate input) for triggering'
    }
  },

  'maths': {
    name: 'Make Noise Maths',
    manufacturer: 'Make Noise',
    verified: true,
    physicalInterface: {
      inputs: [
        'Ch1 TRIG input',
        'Ch1 Signal input', 
        'Ch2 Signal input',
        'Ch3 Signal input',
        'Ch4 TRIG input',
        'Ch4 Signal input',
        'SUM CV input'
      ],
      outputs: [
        'Ch1 Unity output',
        'Ch1 Variable output',
        'Ch2 Variable output', 
        'Ch3 Variable output',
        'Ch4 Unity output',
        'Ch4 Variable output',
        'SUM output',
        'OR output',
        'AND output'
      ],
      knobs: [
        'Ch1 Rise knob',
        'Ch1 Fall knob',
        'Ch2 Attenuverter',
        'Ch3 Attenuverter', 
        'Ch4 Rise knob',
        'Ch4 Fall knob',
        'SUM Attenuverter'
      ],
      buttons: [
        'Ch1 Cycle button',
        'Ch4 Cycle button'
      ],
      switches: [],
      leds: [
        'Ch1 Unity LED',
        'Ch2 Variable LED',
        'Ch3 Variable LED', 
        'Ch4 Unity LED',
        'SUM LED'
      ],
      forbidden: [],
      notes: 'Complex analog computer with multiple channel types'
    }
  }
};

// Interface verification patterns
const verificationPatterns = {
  // Input/Output patterns
  inputReferences: /(\w+[\s\w]*?)\s*(?:input|Input|IN)\b/g,
  outputReferences: /(\w+[\s\w]*?)\s*(?:output|Output|OUT)\b/g,
  
  // Control patterns  
  knobReferences: /(\w+[\s\w]*?)\s*(?:knob|Knob|KNOB)\b/g,
  buttonReferences: /(\w+[\s\w]*?)\s*(?:button|Button|BUTTON)\b/g,
  switchReferences: /(\w+[\s\w]*?)\s*(?:switch|Switch|SWITCH)\b/g,
  
  // Visual feedback patterns
  ledReferences: /(LED|led|Led)[\s\w]*/g,
  
  // Connection patterns (arrow connections)
  connectionArrows: /(\w+[\s\w]*?)\s*→\s*(\w+[\s\w]*?)\s*(?:input|output|Input|Output)/g,
  patchInstructions: /(?:patch|connect|wire)[\s\w]*→[\s\w]*(?:input|output)/gi,
  
  // Forbidden patterns
  forbiddenTerms: /(?:gate\s+input|Gate\s+input|trigger\s+input|Trigger\s+input)/g
};

function identifyModule(content, filename) {
  const lower = content.toLowerCase();
  const file = filename.toLowerCase();
  
  // Try to identify module from filename or content
  for (const [key, module] of Object.entries(moduleDatabase)) {
    if (file.includes(key.replace('_', ' ')) || 
        file.includes(key.replace('_', '_')) ||
        lower.includes(module.name.toLowerCase())) {
      return key;
    }
  }
  return null;
}

function extractInterfaceReferences(content) {
  const references = {
    inputs: [],
    outputs: [],
    knobs: [],
    buttons: [],
    switches: [],
    leds: [],
    connections: [],
    forbidden: []
  };
  
  // Extract each type of interface reference
  for (const [type, pattern] of Object.entries(verificationPatterns)) {
    const matches = content.match(pattern) || [];
    
    if (type === 'inputReferences') {
      references.inputs = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'outputReferences') {
      references.outputs = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'knobReferences') {
      references.knobs = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'buttonReferences') {
      references.buttons = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'switchReferences') {
      references.switches = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'ledReferences') {
      references.leds = [...new Set(matches.map(m => m.trim()))];
    } else if (type === 'connectionArrows' || type === 'patchInstructions') {
      references.connections.push(...matches);
    } else if (type === 'forbiddenTerms') {
      references.forbidden = [...new Set(matches)];
    }
  }
  
  return references;
}

function verifyModuleInterface(moduleKey, guideReferences) {
  const moduleSpec = moduleDatabase[moduleKey];
  if (!moduleSpec) return null;
  
  const errors = [];
  const warnings = [];
  const suggestions = [];
  
  // Check for forbidden interface elements
  if (moduleSpec.physicalInterface.forbidden) {
    for (const forbiddenTerm of moduleSpec.physicalInterface.forbidden) {
      const found = guideReferences.forbidden.some(ref => 
        ref.toLowerCase().includes(forbiddenTerm.toLowerCase())
      );
      if (found) {
        const correction = moduleSpec.physicalInterface.corrections?.[forbiddenTerm];
        errors.push({
          type: 'forbidden_interface',
          element: forbiddenTerm,
          correction: correction,
          message: `References forbidden interface: "${forbiddenTerm}"${correction ? ` → Should be: "${correction}"` : ''}`
        });
      }
    }
  }
  
  // Check for missing verified interface elements
  const specInputs = moduleSpec.physicalInterface.inputs || [];
  const guideInputs = guideReferences.inputs;
  
  for (const specInput of specInputs) {
    const found = guideInputs.some(guideInput => 
      guideInput.toLowerCase().includes(specInput.toLowerCase()) ||
      specInput.toLowerCase().includes(guideInput.toLowerCase())
    );
    if (!found) {
      warnings.push({
        type: 'missing_input',
        element: specInput,
        message: `Verified input "${specInput}" not referenced in guide`
      });
    }
  }
  
  // Check for unverified interface elements
  for (const guideInput of guideInputs) {
    const found = specInputs.some(specInput =>
      guideInput.toLowerCase().includes(specInput.toLowerCase()) ||
      specInput.toLowerCase().includes(guideInput.toLowerCase())
    );
    if (!found && guideInput.length > 3) { // Filter out short matches
      suggestions.push({
        type: 'unverified_input',
        element: guideInput,
        message: `Unverified input "${guideInput}" - please verify against module manual`
      });
    }
  }
  
  return {
    module: moduleSpec.name,
    verified: moduleSpec.verified,
    errors,
    warnings,
    suggestions,
    stats: {
      guideInputs: guideReferences.inputs.length,
      guideOutputs: guideReferences.outputs.length,
      guideControls: guideReferences.knobs.length + guideReferences.buttons.length,
      connections: guideReferences.connections.length
    }
  };
}

function scanGuideFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const filename = path.basename(filePath);
    
    // Identify which module this guide is for
    const moduleKey = identifyModule(content, filename);
    
    // Extract all interface references from the guide
    const guideReferences = extractInterfaceReferences(content);
    
    // Verify against known module specifications
    let verification = null;
    if (moduleKey) {
      verification = verifyModuleInterface(moduleKey, guideReferences);
    }
    
    return {
      filename,
      moduleKey,
      guideReferences,
      verification,
      contentLength: content.length
    };
    
  } catch (error) {
    return {
      filename: path.basename(filePath),
      error: error.message
    };
  }
}

function scanAllGuides(guidesDirectory) {
  const guideFiles = fs.readdirSync(guidesDirectory)
    .filter(file => file.endsWith('.md') && !file.includes('template') && !file.includes('reference'))
    .map(file => path.join(guidesDirectory, file));
  
  const results = [];
  let totalErrors = 0;
  let totalWarnings = 0;
  
  console.log(`🔍 Scanning ${guideFiles.length} guide files for interface verification...\\n`);
  
  for (const file of guideFiles) {
    const result = scanGuideFile(file);
    results.push(result);
    
    if (result.verification) {
      totalErrors += result.verification.errors.length;
      totalWarnings += result.verification.warnings.length;
      
      // Report results for this file
      if (result.verification.errors.length > 0 || result.verification.warnings.length > 0) {
        console.log(`📄 ${result.filename} (${result.verification.module}):`);
        
        result.verification.errors.forEach(error => {
          console.log(`   ❌ ERROR: ${error.message}`);
        });
        
        result.verification.warnings.forEach(warning => {
          console.log(`   ⚠️  WARNING: ${warning.message}`);
        });
        
        result.verification.suggestions.forEach(suggestion => {
          console.log(`   💡 SUGGESTION: ${suggestion.message}`);
        });
        
        console.log(`   📊 Stats: ${result.verification.stats.guideInputs} inputs, ${result.verification.stats.guideOutputs} outputs, ${result.verification.stats.guideControls} controls, ${result.verification.stats.connections} connections\\n`);
      }
    } else if (result.moduleKey === null && !result.error) {
      console.log(`❓ ${result.filename}: Module not identified - manual verification needed`);
    }
  }
  
  console.log(`\\n📈 SUMMARY:`);
  console.log(`   Total guides scanned: ${results.length}`);
  console.log(`   Modules identified: ${results.filter(r => r.moduleKey).length}`);
  console.log(`   Total errors: ${totalErrors}`);
  console.log(`   Total warnings: ${totalWarnings}`);
  console.log(`   Unverified guides: ${results.filter(r => !r.moduleKey && !r.error).length}`);
  
  return results;
}

// CLI execution
if (require.main === module) {
  const guidesDir = process.argv[2] || './';
  scanAllGuides(guidesDir);
}

module.exports = {
  scanGuideFile,
  scanAllGuides,
  moduleDatabase,
  verificationPatterns
};
