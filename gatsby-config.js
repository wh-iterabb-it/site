module.exports = {
  siteMetadata: {
    title: `wh.iterabb.it`,
    description: ``,
    author: `@katelibby`,
    siteUrl: "https://wh.iterabb.it"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wh.iterabb.it`,
        short_name: `whiterabbit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sitemap",
    {
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'yeseva one',
					'Amatic SC\:400,400i,700',
					'open sans\:400,400i,700',
				],
				display: 'swap',
			}
		},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
  ],
}
