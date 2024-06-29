const path = require('path');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Helpet App`,
    description: `I servizi Helpet ti aiuteranno ad affrontare ogni imprevisto e ad organizzare al meglio la vita quotidiana del tuo migliore amico`,
    author: `@helpetapp`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '@components': path.join(__dirname, 'src/components'),
        '@hooks': path.join(__dirname, 'src/hooks'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@images': path.join(__dirname, 'src/assets/images'),
        '@lang': path.join(__dirname, 'lang'),
        '@styles': path.join(__dirname, 'src/styles'),
        '@mocks': path.join(__dirname, '__mocks__'),
        '@services': path.join(__dirname, 'src/services'),
        '@helpers': path.join(__dirname, 'src/helpers'),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `helpet-app`,
        short_name: `HelpetApp`,
        start_url: `/`,
        background_color: `#9c2e85`,
        theme_color: `#9c2e85`,
        display: `minimal-ui`,
        icon: `src/assets/images/helpet-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        include: './src/assets/icons',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito\:400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-178351925-1',
        head: false,
      },
    },
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-TDKK397`,
        dataLayerName: `helpet`,
      },
    },
  ],
};
