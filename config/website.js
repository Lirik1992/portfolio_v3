const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Dmitry Likharev Portfolio", // Navigation and Site Title
  siteTitleAlt: "portfolio", // Alternative Site title for SEO
  siteTitleShort: "portfolio", // short_name for manifest
  siteHeadline: "Creating cool & blazginly fast websites", // Headline for schema.org JSONLD
  siteUrl: "https://lirik1992.github.io/portfolio_web", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logov2.svg", // Used for SEO and manifest
  siteDescription: "Playful & Colorful One-Page website with Parallax effect",
  author: "Dmitry Likharev", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "", // Twitter Username
  ogSiteName: "", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language
  googleAnalyticsID: "",

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
