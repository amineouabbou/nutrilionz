/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "مدونة نترلاينز لكمال الأجسام المغرب",
    description:
      "مدونة نترلاينز، موقع مغربي عربي مخصص لرياضة كمال الأجسام، يهتم بكل ما يخص التغذية و التمارين وغيرها من المواضيع المفيدة",
    siteUrl: "https://www.nutrilionz.com", // No trailing slash allowed!
    image: "/images/snap.jpg", // Path to your image you placed in the 'static' folder
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.nutrilionz.com",
        sitemap: "https://www.nutrilionz.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#c9f800`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1028355677567272",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-121622097-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5390203851253081`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cairo`,
          `source sans pro\:700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: `https://www.nutrilionz.ma/wp-local/graphql`,
      },
    },
  ],
}
