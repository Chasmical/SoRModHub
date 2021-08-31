/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Mod Hub",
  url: 'https://Abbysssal.github.com',
  baseUrl: '/SoRModHub/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Abbysssal',
  projectName: 'SoRModHub',
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['clike', 'csharp', 'bash'],
    },
    announcementBar: {
      id: 'star',
      content:
        '<span style="font-size: 1rem;">⭐️ If you like ModHub, give it a star on <a target="_blank" href="https://github.com/Abbysssal/SoRModHub">GitHub</a>! ⭐️</span>',
    },
    navbar: {
      hideOnScroll: true,
      title: "Mod Hub",
      logo: {
        alt: '[[LOGO-ALT-TEXT]]',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          to: 'https://github.com/Abbysssal/SoR-ModHub/edit/main/website/src/mods.tsx',
          label: 'Add',
          position: 'left',
        },
        {
          href: 'https://github.com/Abbysssal/SoRModHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Streets of Rogue Discord',
              href: 'https://discord.com/invite/streetsofrogue',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Abbysssal/SoRModHub',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mod Hub. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Abbysssal/SoRModHub/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Abbysssal/SoRModHub/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
