module.exports = {
  title: 'Business Hustle',
  tagline: 'Let us help you grow your business',
  url: 'https://business-hustle-2022.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Business Hustle ©',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Project Management',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'What We Do',
              to: 'docs/doc1',
            },
            {
              label: 'Who We Are',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/HustlebusinessWorldwide',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/businesshustleworldwide',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/HustleBusiness',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Latest News',
              to: 'blog',
            },
            {
              label: 'Contact Us',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simple eternity holdings (Pty) Ltd. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
