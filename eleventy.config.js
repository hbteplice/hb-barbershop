export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  // 1100 -> "1 100"
  eleventyConfig.addFilter("price", (n) => Number(n).toLocaleString("cs-CZ"));
  // "+420 774 324 533" -> "+420774324533"
  eleventyConfig.addFilter("tel", (s) => String(s).replace(/[^\d+]/g, ""));
  // "9:00" -> "09:00" (for schema.org)
  eleventyConfig.addFilter("hhmm", (s) => String(s).padStart(5, "0"));

  return {
    dir: { input: "src", output: "_site" },
  };
}
