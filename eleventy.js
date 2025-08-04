module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addPassthroughCopy("src/uploads");