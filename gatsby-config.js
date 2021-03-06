/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Paperdove",
    tagline: "Design + Motion + Interaction",
    siteURL: `https://paperdove.com`,
    author: "Dae In Chung",
    email: "cdaein-at-gmail-dot-com",
    versum:
      "https://versum.xyz/user/tz1WXTdGdwD6g24vJp7vpjWVR8LuFpisUcoc/created",
    fxhash: "https://www.fxhash.xyz/u/Daeinc",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/draft`,
        name: `draft`,
        ignore: process.env.NODE_ENV === `production` ? [`**/draft`] : [],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "work",
        path: `${__dirname}/content/work/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/content/blog/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              quality: 60,
              withWebp: true,
              showCaptions: ["title"],
              // markdownCaptions: true, // caption uses MD, not raw text
            },
          },
          {
            resolve: "gatsby-remark-video",
            options: {
              width: 800,
              height: "auto",
              preload: "auto",
              muted: true,
              autoplay: true,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              // ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              // height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-remark-smartypants`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-8129807-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
  ],
};
