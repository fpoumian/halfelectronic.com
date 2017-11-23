require('dotenv').config()

const DEVELOP = process.env['gatsby_executing_command'] === 'develop'

module.exports = {
  siteMetadata: {
    title: 'halfelectronic.com',
    author: 'Fernando Poumian',
    siteUrl: 'https://www.halfelectronic.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: DEVELOP
          ? process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN
          : process.env.CONTENTFUL_DELIVERY_API_ACCESS_TOKEN,
        host: DEVELOP ? 'preview.contentful.com' : null,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          // 'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-external-links',
        ],
      },
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: "gatsby-plugin-typography",
    //   options: {
    //     pathToConfigModule: "src/utils/typography",
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:500,700,800`,
          `Noto Serif:400,700`,
          `Varela Round`,
          `Oxygen`,
        ],
      },
    },
  ],
}
