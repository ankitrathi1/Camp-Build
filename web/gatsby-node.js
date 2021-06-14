const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { format } = require("date-fns");

async function createCampaignPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityCampaign(
        filter: { slug: { current: { ne: null } }, _createdAt: { ne: null } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) throw result.errors;
console.log(result);
  const postEdges = (result.data.allSanityCampaign || {}).edges || [];

  postEdges
    .forEach((edge) => {
      const { id, slug = {} } = edge.node;
      const path = `/campaign/${slug.current}/`;

      createPage({
        path,
        component: require.resolve("./src/templates/campaign.js"),
        context: { id },
      });
    });
}

exports.createPages = async ({ graphql, actions }) => {
  await createCampaignPages(graphql, actions);
};
