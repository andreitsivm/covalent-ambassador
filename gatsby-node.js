/**
 * Implement Gatsby's Node APIs in this file.
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, "src/components"),
        Constants: path.resolve(__dirname, "src/constants"),
        Img: path.resolve(__dirname, "src/images"),
        Hooks: path.resolve(__dirname, "src/hooks"),
        Static: path.resolve(__dirname, "static"),
        Utils: path.resolve(__dirname, "src/utils"),
        Templates: path.resolve(__dirname, "src/templates"),
      },
    },
  });
};
