/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Hwa Chong Robotics",
  tagline: "Robots are cool",
  organizationName: "hwachongrobo",
  projectName: "hwachongrobo.github.io",
  url: "https://hwachongrobo.github.io",
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
          editUrl:
            "https://github.com/hwachongrobo/hwachongrobo.github.io/edit/main/",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
      id: "docs-only-notice",
      content:
        'This website only contains documentation. To go to the main website, click <a href="https://robo.infocommsociety.com/">here</a>.',
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    algolia: {
      apiKey: "YOUR_API_KEY", // TODO: Add your own API key
      indexName: "YOUR_INDEX_NAME", // TODO: Add your own index name
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
          label: "Docs",
          position: "left",
          items: [
            {
              label: "Lego",
              to: "/lego/introduction",
            },
            {
              label: "RCJ Soccer Lightweight",
              to: "/soccer-lightweight/introduction",
            },
            {
              label: "RCJ Soccer Open",
              to: "/soccer-open/introduction",
            },
            {
              label: "RCJ Rescue Line",
              to: "/rescue-line/introduction",
            },
          ],
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Lego",
              to: "/lego/introduction",
            },
            {
              label: "Soccer",
              to: "/soccer/introduction",
            },
            {
              label: "RCJ Soccer Lightweight",
              to: "/soccer-lightweight/introduction",
            },
            {
              label: "RCJ Soccer Open",
              to: "/soccer-open/introduction",
            },
            {
              label: "RCJ Rescue Line",
              to: "/rescue-line/introduction",
            },
            {
              label: "Others",
              to: "/Others/introduction",
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
              href: "https://github.com/hwachongrobo",
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
  },
};
