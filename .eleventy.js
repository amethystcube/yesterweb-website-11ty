module.exports = function (eleventyConfig) {
    // Directories
    eleventyConfig.addPassthroughCopy("./src/fonts");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");

    eleventyConfig.addPairedShortcode("button", function(alt, src, link, target = "_self") {
        let buttonMarkup = `<img src="${src}" alt="${alt}"/>`;
        if (link) { buttonMarkup = `<a href="${link}" target="${target}">${buttonMarkup}</a>`; }

        return buttonMarkup;
    });

    // Social Media
    // eleventyConfig.addPassthroughCopy("./src/apple-touch-icon.png");
    // eleventyConfig.addPassthroughCopy("./src/favicon.svg");
    // eleventyConfig.addPassthroughCopy("./src/logo.svg");
    // eleventyConfig.addPassthroughCopy("./src/logo-100x100.png");
    // eleventyConfig.addPassthroughCopy("./src/logo-192x192.png");
    // eleventyConfig.addPassthroughCopy("./src/logo-192x192.png");
    // eleventyConfig.addPassthroughCopy("./src/logo-512x512.png");
    // eleventyConfig.addPassthroughCopy("./src/safari-pinned-tab.svg");
    // eleventyConfig.addPassthroughCopy("./src/favicon.ico");

    return {
		templateFormats: ["md", "njk", "html"],

		// If your site lives in a different subdirectory, change this.
		// Leading or trailing slashes are all normalized away, so don’t worry about it.
		// If you don’t have a subdirectory, use "" or "/" (they do the same thing)
		// This is only used for URLs (it does not affect your file structure)
		pathPrefix: "/",

		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		passthroughFileCopy: true,
		dir: {
			input: "./src",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
	};
};