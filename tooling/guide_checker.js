#!/usr/bin/env node

/**
 * Modular Guide Error Checker
 * Scans guide files for common I/O errors against reference data
 */

const fs = require('fs');
const path = require('path');

// Module I/O database - expand this as you add modules
const moduleIO = {
  'pico_voice': {
    name: 'Erica Synths Pico Voice',
    inputs: ['1V/Oct input', 'CV input'],
    outputs: ['Audio output', 'Voice output', 'output'],
    forbidden: ['gate input', 'Gate input', 'trigger input', 'Trigger input', 'TRIGG input'],
    aliases: ['pico voice', 'erica synths pico voice']
  },
  'pico_drum2': {
    name: 'Erica Synths Pico DRUM2',
    inputs: ['TRIGG input', 'CV1 input', 'CV2 input'],
    outputs: ['OUT', 'Audio output', 'output'],
    forbidden: ['gate input', 'Gate input'],
    correctTerms: {'gate input': 'TRIGG input', 'Gate input': 'TRIGG input'},
    aliases: ['pico drum2', 'erica synths pico drum2', 'pico drum 2']
  }
  // Add more modules here
};

// Common problematic patterns
const errorPatterns = [
  {
    pattern: /→\s*gate input/gi,
    severity: 'high',
    message: 'References non-existent gate input'
  },
  {
    pattern: /patch.*gate.*→/gi,
    severity: 'medium', 
    message: 'Potential gate input reference'
  }
];

function scanGuideFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const errors = [];
  
  // Check for forbidden I/O references
  Object.entries(moduleIO).forEach(([moduleKey, moduleData]) => {
    moduleData.forbidden?.forEach(forbiddenIO => {
      const regex = new RegExp(forbiddenIO, 'gi');
      const matches = content.match(regex);
      if (matches) {
        errors.push({
          file: filePath,
          module: moduleData.name,
          error: `References forbidden I/O: "${forbiddenIO}"`,
          count: matches.length,
          severity: 'high'
        });
      }
    });
  });
  
  // Check for common error patterns
  errorPatterns.forEach(errorPattern => {
    const matches = content.match(errorPattern.pattern);
    if (matches) {
      errors.push({
        file: filePath,
        error: errorPattern.message,
        pattern: errorPattern.pattern.source,
        count: matches.length,
        severity: errorPattern.severity
      });
    }
  });
  
  return errors;
}

function scanAllGuides(guidesDirectory) {
  const guideFiles = fs.readdirSync(guidesDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => path.join(guidesDirectory, file));
  
  const allErrors = [];
  
  guideFiles.forEach(file => {
    const errors = scanGuideFile(file);
    allErrors.push(...errors);
  });
  
  return allErrors;
}

// Main execution
if (require.main === module) {
  const guidesDir = process.argv[2] || './';
  const errors = scanAllGuides(guidesDir);
  
  if (errors.length === 0) {
    console.log('✅ No I/O errors found in guides!');
  } else {
    console.log(`⚠️  Found ${errors.length} potential I/O errors:\n`);
    
    errors.forEach((error, index) => {
      console.log(`${index + 1}. [${error.severity.toUpperCase()}] ${path.basename(error.file)}`);
      console.log(`   Error: ${error.error}`);
      if (error.module) console.log(`   Module: ${error.module}`);
      if (error.count) console.log(`   Occurrences: ${error.count}`);
      console.log('');
    });
  }
}

module.exports = { scanGuideFile, scanAllGuides };
