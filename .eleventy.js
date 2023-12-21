module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/Mulish-VariableFont.ttf");
  eleventyConfig.addPassthroughCopy("./src/normalize.css");
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/main.js");

  eleventyConfig.addPassthroughCopy("./src/assets/FrancisFernandez_Resume.pdf");
  eleventyConfig.addPassthroughCopy("./src/assets/*.jpg");

  return {
    dir: {
      input: "src",
      ouput: "public"
    }
  }
};