// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "gasps docs",
  tagline: "Documentation for all gasps related projects",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.gasps.lol",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gasps", // Usually your GitHub org/user name.
  projectName: "gasps-Docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          id: "default",
          path: "docs/rayfield",
          routeBasePath: "/rayfield",
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sense",
        path: "docs/sense",
        routeBasePath: "/sense",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // You can configure additional HTML metadata (and override existing ones).
      metadata: [
        { name: "theme-color", content: "#2B2D31" },
        {
          name: "description",
          content: "documentation for all gasps related projects",
        },
        { property: "og:title", content: "gasps Docs" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://docs.gasps.lol" },
        { property: "og:locale", content: "en" },
        { property: "og:image:alt", content: "gasps Docs" },
        {
          name: "description",
          property: "og:description",
          content: "documentation for all gasps related projects",
        },
        { property: "og:site_name", content: "gasps Docs" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@gaspsMenu" },
        { name: "twitter:title", content: "gasps Docs" },
        {
          name: "twitter:description",
          content: "documentation for all gasps related projects",
        },
        { name: "twitter:image:alt", content: "gasps Docs" },
      ],
      // Replace with your project's social card
      image: "img/Docs.png",
      navbar: {
        title: "gasps docs",
        logo: {
          alt: "test",
          src: "img/logo.svg",
        },
        style: "dark",
        items: [
          {
            to: "/rayfield",
            label: "gasps UI",
            position: "left",
          },
          {
            to: "/sense",
            label: "sense",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["lua"],
        defaultLanguage: "lua",
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
