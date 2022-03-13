const path = require("path");
const _ = require("lodash");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // test for 'blog' posts -> then, don't create slug node as blog posts have slug in frontmatter
  const re = new RegExp("blog");
  const isBlog = re.test(node.fileAbsolutePath);

  if (!isBlog && node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });

    // splitted array includes empty elements, so filter them out. ex. [ '', '2021-xx-xx-nyt-wordlist', '' ]
    const dirs = value.split("/").filter((el) => el !== "");
    const dir = dirs[dirs.length - 1]; // only the post name (exclude any sub-folder names) as string
    const words = dir.split("-"); // split date portions
    const wordsSliced = words.slice(3, words.length); // remove first elements (year, month, day)
    const newv = "/" + wordsSliced.join("-") + "/"; // don't forget slashes for the final path

    createNodeField({
      node,
      name: "slug",
      value: newv,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("./src/templates/postTemplate.js");
  const tagTemplate = path.resolve("./src/templates/tagTemplate.js");
  const blogTemplate = path.resolve("./src/templates/blogTemplate.js");

  /**
   * postsRemark - work posts only (in /work/ directory)
   * tagsGroup - work tags only (for now)
   */
  return graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//work//" }
          frontmatter: { published: { eq: true } }
        }
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

      tagsGroup: allMarkdownRemark(
        limit: 2000
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      blogPostsRemark: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "//blog//" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date
            }
          }
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

    const blogPosts = result.data.blogPostsRemark.edges;
    blogPosts.forEach((post) => {
      const slug = post.node.frontmatter.slug;
      createPage({
        path: slug,
        component: blogTemplate,
        context: {
          slug,
        },
      });
    });
  });
};
