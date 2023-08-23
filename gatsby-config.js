/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Rural Holidays`,
    siteUrl: "https://ruralholidays.co.nz",
    description: `Home to Rural Holidays`,
    author: `CODOS`,
    image: `/logo_rural_holidays.webp`,
  },
  plugins: [
    "gatsby-plugin-pnpm",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `avif`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",
      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",
        /* Enable font loading listener to handle FOUT */
        enableListener: true,
        /* Preconnect URL-s. This example is for Google Fonts */
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        /* Web fonts. File link should point to font CSS file. */
        web: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: "Roboto Slab",
            /* URL to the font CSS file with @font-face definition */
            file: "https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
  ],
  partytownProxiedURLs: [
    `https://static.cloudflareinsights.com/beacon.min.js?token=${process.env.GATSBY_WEB_ANALYTICS_TOKEN}`,
  ],
};
