const TITLE = "Covalent UA";
const HOST = "https://covalent.com.ua";

module.exports = {
  siteMetadata: {
    title: TITLE,
    description: "Covalent alchemists website",
    siteUrl: HOST,
    author: "andreitsiv.mykhailo@gmail.com",
    disclaimer: "Not commercial",
    address: "Ukraine, Kyiv",
    publisherEmail: "",
    currentYear: new Date().getFullYear(),
    foundationYear: 2021,
    copyright: "Covalent - UA. All rights reserved",
    twitter: "",
    facebook: "",
    youtube: "",
    supportEmail: "andreitsiv.mykhailo@gmail.com",
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
