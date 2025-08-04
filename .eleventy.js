module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/uploads");
  eleventyConfig.addPassthroughCopy("src/public/scripts");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};