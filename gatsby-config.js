/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Amreican recipes site",
    author: "@johnsonBhengra",
    person: {
      name: "Johnson",
      age: 27,
    },
    simpleData: ["item1", "item2", "item3"],
    complexData: [
      {
        name: "Johnson",
        age: 27,
      },
      {
        name: "Susan",
        age: 25,
      },
      {
        name: "Mary",
        age: 22,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
