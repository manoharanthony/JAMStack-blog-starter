module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin");

  return {
    dir: {
      input: "src",
      output: "public", // defaults to "_site" if not specified
    },
  };
};
