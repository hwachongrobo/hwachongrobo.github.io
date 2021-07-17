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
    prism: {
      theme: require("prism-react-renderer/themes/vsLight"),
      darkTheme: require("prism-react-renderer/themes/vsDark"),
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
          type: "doc",
          docId: "content",
          position: "left",
          label: "Docs",
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
          title: "Hwa Chong Robotics",
          items: [
            {
              label: "Website",
              href: "https://robo.infocommsociety.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/hwachongroboticss",
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
