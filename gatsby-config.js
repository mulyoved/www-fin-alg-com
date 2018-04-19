module.exports = {
  siteMetadata: {
    title: 'Financial Algorithms',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Condensed`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Final - Financial Algorithms",
        short_name: "Final",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#3367D6",
        display: "standalone",
        icon: "src/assets/logo/half_logo_final.png" // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify'
  ],
}
