const fs = require('fs');
const path = require('path');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Function to copy markdown files from _includes to docs
function copyMarkdownFiles() {
  const sourceDir = 'src/_includes/components';
  const destDir = 'src/docs';
  const componentTypes = ['subatomic', 'atoms', 'molecules', 'organisms', 'templates'];

  componentTypes.forEach(type => {
    const typePath = path.join(sourceDir, type);
    
    // Skip if directory doesn't exist
    if (!fs.existsSync(typePath)) return;
    
    // Get all component directories
    const components = fs.readdirSync(typePath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    components.forEach(component => {
      const componentPath = path.join(typePath, component);
      
      // Find all markdown files
      const markdownFiles = fs.readdirSync(componentPath)
        .filter(file => file.endsWith('.md') || file.endsWith('.markdown'));
      
      markdownFiles.forEach(file => {
        const sourcePath = path.join(componentPath, file);
        const targetPath = path.join(destDir, type, file);
        
        // Create target directory if it doesn't exist
        const targetDir = path.dirname(targetPath);
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        
        // Read the source file
        let content = fs.readFileSync(sourcePath, 'utf8');
        
        // Fix include paths - make sure they point to the correct component type
        content = content.replace(
          /{% include "components\/([^\/]+)\/([^\/]+)\/([^"]+)" %}/g,
          (match, includedType, includedComponent, includedFile) => {
            // Check if the component exists
            const componentPath = path.join(sourceDir, includedType, includedComponent);
            if (fs.existsSync(componentPath)) {
              return `{% include "components/${includedType}/${includedComponent}/${includedFile}" %}`;
            } else {
              // If the component doesn't exist, use the current component type
              return `{% include "components/${type}/${includedComponent}/${includedFile}" %}`;
            }
          }
        );
        
        // Check if the file has front matter
        if (content.trim().startsWith('---')) {
          // Split the content by the front matter delimiters
          const firstSplit = content.indexOf('---');
          const secondSplit = content.indexOf('---', firstSplit + 3);
          
          if (secondSplit !== -1) {
            const frontMatter = content.substring(firstSplit + 3, secondSplit).trim();
            const restOfContent = content.substring(secondSplit + 3).trim();
            
            // Check if eleventyNavigation is already in the front matter
            if (!frontMatter.includes('eleventyNavigation:')) {
              // Add eleventyNavigation to front matter
              const componentName = component.charAt(0).toUpperCase() + component.slice(1);
              const typeName = type.charAt(0).toUpperCase() + type.slice(1);
              
              const updatedFrontMatter = `${frontMatter}
eleventyNavigation:
  key: ${componentName}
  parent: ${typeName}`;
              
              // Reassemble the content
              content = `---
${updatedFrontMatter}
---

${restOfContent}`;
            }
          }
        } else {
          // If no front matter, add it
          const componentName = component.charAt(0).toUpperCase() + component.slice(1);
          const typeName = type.charAt(0).toUpperCase() + type.slice(1);
          
          content = `---
title: ${componentName}
description: ${componentName} component
eleventyNavigation:
  key: ${componentName}
  parent: ${typeName}
---

${content}`;
        }
        
        // Write the modified content to the target file
        fs.writeFileSync(targetPath, content);
        console.log(`Copied ${sourcePath} to ${targetPath}`);
      });
    });
  });
}

module.exports = function(eleventyConfig) {
  // Copy markdown files before build
  copyMarkdownFiles();
  
  // Add the navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/_includes/**/*.css");
  eleventyConfig.addWatchTarget("src/_includes/**/*.js");
  eleventyConfig.addWatchTarget("src/_css/**/*.css");
  eleventyConfig.addWatchTarget("src/_includes/**/*.md");
  eleventyConfig.addWatchTarget("src/_includes/**/*.markdown");
  
  // Add a before event handler to copy markdown files when they change
  eleventyConfig.on('beforeWatch', (changedFiles) => {
    // Check if any of the changed files are markdown files in the _includes directory
    const markdownChanged = changedFiles.some(file => 
      (file.endsWith('.md') || file.endsWith('.markdown')) && 
      file.includes('_includes/components')
    );
    
    // If markdown files changed, copy them
    if (markdownChanged) {
      console.log('Markdown files changed, copying to docs directory...');
      copyMarkdownFiles();
    }
  });
  
  // Process JS files from _includes structure, but not CSS files
  eleventyConfig.addPassthroughCopy({
    "src/_includes/**/*.js": "js"
  });
  
  // Add a custom handler for CSS files
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    // This will be called for any CSS file in the src directory
    compile: function(inputContent, inputPath) {
      // Skip processing all CSS files - we'll handle them with PostCSS
      // This prevents individual CSS files from being copied to the output
      return;
    }
  });
  
  // Add a filter to filter out index files from collections
  eleventyConfig.addFilter("filterOutIndex", function(collection) {
    if (!collection || !collection.length) return [];
    
    return collection.filter(item => {
      // Check if the file is an index file by looking at the inputPath
      const isIndexFile = item.inputPath && (
        item.inputPath.includes('/index.') || 
        item.inputPath.includes('\\index.')
      );
      
      return !isIndexFile;
    });
  });
  
  // Create collections for components
  eleventyConfig.addCollection("components", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/components/**/*.njk");
  });
  
  // Custom collection for components by type
  ["subatomic", "atoms", "molecules", "organisms", "templates"].forEach(type => {
    eleventyConfig.addCollection(type, function(collectionApi) {
      return collectionApi.getFilteredByGlob(`src/_includes/components/${type}/**/*.njk`);
    });
    
    // Add documentation collections
    eleventyConfig.addCollection(`docs_${type}`, function(collectionApi) {
      return [
        ...collectionApi.getFilteredByGlob(`src/docs/${type}/**/*.njk`),
        ...collectionApi.getFilteredByGlob(`src/docs/${type}/**/*.md`),
        ...collectionApi.getFilteredByGlob(`src/docs/${type}/**/*.markdown`)
      ];
    });
  });
  
  // Passthrough copy for styleguide.css
  eleventyConfig.addPassthroughCopy({
    "src/_css/styleguide.css": "css/styleguide.css"
  });
  
  // Add a shortcode to include component CSS
  eleventyConfig.addShortcode("componentCSS", function(componentPath) {
    // Special case for styleguide - we don't want to include it in main.css
    if (componentPath === "styleguide" || componentPath.includes("styleguide/")) {
      return `<!-- Styleguide CSS is loaded separately -->`;
    }
    
    const cssPath = path.join(__dirname, "src", "_includes", componentPath + ".css");
    if (fs.existsSync(cssPath)) {
      // Instead of linking to individual CSS files, we'll just note that they exist
      // All component CSS should be imported into main.css
      return `<!-- Component CSS for ${componentPath} is included in main.css -->`;
    }
    return "";
  });
  
  // Add a shortcode to include component JS
  eleventyConfig.addShortcode("componentJS", function(componentPath) {
    const jsPath = path.join(__dirname, "src", "_includes", componentPath + ".js");
    if (fs.existsSync(jsPath)) {
      return `<script src="/js/${componentPath}.js"></script>`;
    }
    return "";
  });
  
  // Add a shortcode to render a component
  eleventyConfig.addShortcode("renderComponent", function(componentPath, props = {}) {
    const componentFile = path.join(__dirname, "src", "_includes", componentPath + ".njk");
    if (fs.existsSync(componentFile)) {
      const componentContent = fs.readFileSync(componentFile, 'utf8');
      // This is a simplified approach - in a real project you'd use a proper template engine
      let renderedContent = componentContent;
      
      // Replace props in the template
      Object.keys(props).forEach(key => {
        const regex = new RegExp(`{{ ${key} }}`, 'g');
        renderedContent = renderedContent.replace(regex, props[key]);
      });
      
      return renderedContent;
    }
    return `Component ${componentPath} not found`;
  });
  
  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
}; 