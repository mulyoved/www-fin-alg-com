module.exports = {
  siteMetadata: {
    title: 'Financial Algorithms',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // Set the name option to the same
              // name you set for gatsby-source-filesystem
              name: 'articles', // default
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer"
            }
          }
        ],
      },
    },


    'gatsby-transformer-sharp',
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',

    `gatsby-plugin-catch-links`,

    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Final - Financial Algorithms',
        short_name: 'Final',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#3367D6',
        display: 'standalone',
        icon: 'src/assets/logo/half_logo_final.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    `gatsby-plugin-netlify-cms`,
  ],
}
