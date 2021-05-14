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

/**
 * @param {Object} data
 * @param {Object} data.page
 * @param {string} data.page.componentPath
 * @param {Object} actions
 * @returns {Promise<unknown>}
 */
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";
    createPage(page);
  }
};

// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage, deletePage } = actions;

//   return new Promise((resolve) => {
//     if (page.path === "/index/") {
//       deletePage(page);
//       createPage({
//         ...page,
//         path: "/",
//         matchPath: "/",
//       });
//     }

//     resolve();
//   });
// };
