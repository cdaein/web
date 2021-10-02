import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import { MdArrowBack } from "react-icons/md";
import Layout from "../components/layout";
import Seo from "../components/seo";

// reference:
// https://www.gatsbyjs.com/docs/adding-tags-and-categories-to-blog-posts/
const TagTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with ${tag}`;

  const masonryOptions = {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    transitionDuration: "0s",
    // initLayout: false,
  };

  return (
    <Layout>
      <Seo title={tagHeader} />
      <main>
        <div className="container tag-page">
          
          <div style={{ padding: 25 }}>
            <h1>{tagHeader}</h1>
            <div className="back-button">
              <Link to="/" style={{ border: "none" }}>
                <MdArrowBack />
                Back to Index
              </Link>
            </div>
          </div>

          <Masonry
            className="grid"
            options={masonryOptions}
            // onLayoutComplete={(laidoutItems) =>
            //   this.handleLayoutReady(laidoutItems)
            // }
            style={{
              // opacity: this.state.layoutReady ? "1" : "0",
              opacity: "1",
              transition: "opacity .4s",
            }}
          >
            <div className="grid-sizer"></div>

            {edges.map((edge) => {
              const post = edge.node;

              let cls = "grid-item";
              if (post.frontmatter.featured) {
                cls += " double";
              }

              const aspectRatio =
                post.frontmatter.featuredImage.childImageSharp.fluid
                  .aspectRatio;
              const paddingTop = `${(1 / aspectRatio) * 100}%`;

              return (
                <div className={`grid-item thumbnail ${cls}`} key={post.id}>
                  <Link to={post.fields.slug}>
                    <div
                      style={{ position: "relative", paddingTop, height: 0 }}
                      className="img-wrapper-outer"
                    >
                      <div className="img-wrapper">
                        {/* <img
                            src={post.frontmatter.featuredImage.publicURL}
                            alt=""
                          /> */}
                        <Img
                          fluid={
                            post.frontmatter.featuredImage.childImageSharp.fluid
                          }
                        />
                      </div>
                    </div>
                    <div className="text-wrapper">
                      <h3 className="post-title">
                        {post.frontmatter.title},{" "}
                        {new Date(post.frontmatter.date).getFullYear()}
                      </h3>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Masonry>
        </div>
      </main>
    </Layout>
  );
};

TagTemplate.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default TagTemplate;

// note the use of $tag coming from pageContext
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            featured
            featuredImage {
              publicURL
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                  aspectRatio
                }
              }
            }
          }
        }
      }
    }
  }
`;
