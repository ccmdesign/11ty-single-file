const fs = require('fs');
const path = require('path');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // Add the navigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("src/_includes/**/*.css");
  eleventyConfig.addWatchTarget("src/_includes/**/*.js");
  eleventyConfig.addWatchTarget("src/_css/**/*.css");
  
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
    return collection.filter(item => !item.fileSlug.includes('index'));
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
      return collectionApi.getFilteredByGlob(`src/docs/${type}/**/*.njk`);
    });
  });
  
  // Add a shortcode to include component CSS
  eleventyConfig.addShortcode("componentCSS", function(componentPath) {
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