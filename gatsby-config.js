const TITLE = "Covalent ambassador help";
const HOST = "https://covalent-ambassador.vercel.app/";

module.exports = {
  siteMetadata: {
    title: TITLE,
    description:
      "Covalent alchemists website whicj help became covalent ambassador, and explain typical procedures",
    siteUrl: HOST,
    author: "Mykhailo Andreitsiv <andreitsivdev@gmail.com>",
    disclaimer: "Covalent",
    address: "#602 -- 151, W. Hastings St.Vancouver, BC V6B 1H4, Canada",
    publisherEmail: "",
    currentYear: new Date().getFullYear(),
    foundationYear: 2021,
    copyright: "Covalent. All rights reserved",
    twitter: "",
    facebook: "",
    youtube: "",
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        limit: 0,
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-helmet-canonical-urls",
      options: {
        siteUrl: HOST,
        noHash: true,
        noQueryString: true,
      },
    },
    /**
     * @NOTE set path to square favicon and site's identity colors
     */
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: TITLE,
        short_name: TITLE,
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        display: "minimal-ui",
        icon: "src/images/logo.svg",
      },
    },

    /**
     * @NOTE provide fonts from design
     */
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Titillium Web"],
        },
      },
    },
  ],
};
