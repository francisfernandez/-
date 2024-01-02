module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/Mulish-VariableFont.ttf");
  eleventyConfig.addPassthroughCopy("./src/normalize.css");
  eleventyConfig.addPassthroughCopy("./src/styles.css");
  eleventyConfig.addPassthroughCopy("./src/main.js");

  eleventyConfig.addPassthroughCopy("./src/assets/*");

  return {
    dir: {
      input: "src",
      ouput: "public"
    }
  }
};