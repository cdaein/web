import React from "react";
import { graphql, Link } from "gatsby";
import { MdArrowBack } from "react-icons/md";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import "../styles/debug.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
        featuredImage {
          publicURL
        }
      }
      html
      excerpt
    }
  }
`;

const PostTemplate = (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title}, ${new Date(
          post.frontmatter.date
        ).getFullYear()}`}
        description={post.excerpt}
        image={post.frontmatter.featuredImage.publicURL}
      />
      <main>
        <div className="container post-page">
          <div className="left">
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            <div className="back-button">
              <Link to="/" style={{ border: "none" }}>
                <MdArrowBack />
                Back to Index
              </Link>
            </div>
          </div>
          <div className="right">
            <div className="right-fixed">
              <div className="back-button">
                <Link to="/" style={{ border: "none" }}>
                  <MdArrowBack />
                  Back to Index
                </Link>
              </div>
              <h2>
                {post.frontmatter.title}
                <br />
                {new Date(post.frontmatter.date).getFullYear()}
              </h2>
              <h3>Tags</h3>
              <ul>
                {post.frontmatter.tags.map((tag) => {
                  return (
                    <li
                      key={tag}
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      <Link to={`/tags/${tag}`} style={{ border: "none" }}>
                        {tag}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default PostTemplate;
