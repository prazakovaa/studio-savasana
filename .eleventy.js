module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/uploads");

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_includes",
      includes: "_includes"
    }
  };
};