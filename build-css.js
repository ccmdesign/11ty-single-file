const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Building CSS...');

// Ensure _site directory exists
if (!fs.existsSync(path.join(__dirname, '_site'))) {
  fs.mkdirSync(path.join(__dirname, '_site'));
}

// Ensure _site/css directory exists
if (!fs.existsSync(path.join(__dirname, '_site/css'))) {
  fs.mkdirSync(path.join(__dirname, '_site/css'));
}

try {
  // Run PostCSS to build the main CSS file
  execSync('npx postcss src/_css/main.css -o _site/css/main.css', { stdio: 'inherit' });
  
  // Note: styleguide.css is now handled by Eleventy's passthrough copy
  
  console.log('CSS built successfully!');
} catch (error) {
  console.error('Error building CSS:', error);
  process.exit(1);
} 