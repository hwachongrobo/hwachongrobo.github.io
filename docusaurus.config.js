/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hwa Chong Robotics",
  tagline: "Robots are cool",
  organizationName: "hwachongrobotics",
  projectName: "hwachongrobotics.github.io",
  url: "https://hwachongrobotics.github.io",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          editUrl:
            "https://github.com/hwachongrobotics/hwachongrobotics.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/meta.png",
    announcementBar: {
      id: "1", // Increment this each time you make a new announcement
      content:
        'This website only contains documentation. To learn more about Hwa Chong Robotics, click <a href="https://robo.infocommsociety.com/">here</a>.',
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      apiKey: "YOUR_API_KEY", // TODO: Add your own API key
      indexName: "YOUR_INDEX_NAME", // TODO: Add your own index name
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Hwa Chong Robotics Logo",
        src: "img/logo.png",
      },
      title: "Hwa Chong Robotics",
      items: [
        {
          label: "Lego",
          position: "left",
          to: "/lego",
        },
        {
          label: "RCJ",
          position: "left",
          to: "/rcj",
        },
        {
          label: "VEX",
          position: "left",
          to: "/vex",
        },
        {
          label: "Others",
          position: "left",
          to: "/others",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    hideableSidebar: true,
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Lego",
              to: "/lego",
            },
            {
              label: "RCJ",
              to: "/rcj",
            },
            {
              label: "VEX",
              to: "/vex",
            },
            {
              label: "Others",
              to: "/others",
            },
          ],
        },
        {
          title: "Hwa Chong Robotics",
          items: [
            {
              label: "Website",
              href: "https://robo.infocommsociety.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/hwachongrobotics",
            },
            {
              label: "Email",
              href: "mailto:hwachongrobotics@gmail.com",
            },
          ],
        },
        {
          title: "Transcendence (one of our teams)",
          items: [
            {
              label: "Website",
              href: "https://bozo.infocommsociety.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/bozotics",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/bozotics",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hwa Chong Robotics`,
    },
    sitemap: { changefreq: "weekly", priority: 0.5, trailingSlash: false },
  },
};
