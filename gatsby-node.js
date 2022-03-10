const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // const slug = path.basename(node.fileAbsolutePath, ".md")
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/postTemplate.js");
  const tagTemplate = path.resolve("./src/templates/tagTemplate.js");

  return graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.postsRemark.edges;

    posts.forEach((post) => {
      createPage({
        path: post.node.fields.slug,
        component: postTemplate,
        context: {
          slug: post.node.fields.slug,
        },
      });
    });

    const tags = result.data.tagsGroup.group;

    // console.log(tags);

    tags.forEach((tag) => {
      createPage({
        // path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
        path: `/tags/${tag.fieldValue.toLowerCase()}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  });
};
