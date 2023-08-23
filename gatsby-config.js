/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rural Holidays`,
    siteUrl: "https://ruralholidays.co.nz",
    description: `Home to Rural Holidays`,
    author: `CODOS`,
  },
  plugins: [
    "gatsby-plugin-pnpm",
    {
      resolve: `gatsby-plugin-layout`,
      options:{
        component: require.resolve(`./src/components/layout.js`),
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto Slab"],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/staticFiles`,
      },
      __key: "files",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ],
}
