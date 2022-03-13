import React from "react";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import moment from "moment";
import { MdArrowBack } from "react-icons/md";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import "../styles/debug.css"

// this overrides global styling of markdown (ie. work)
const StyledMarkdown = styled.div`
  --side-padding-double: 50px;

  h2 {
    border-bottom: 2px solid black;
    display: inline-block;
  }
  h3 {
    border: none;
    display: block;
    font-style: italic;
  }

  em {
    font-style: italic;
  }

  figure figcaption {
    margin-top: 10px;
    font-size: 1rem;
  }
`;

const blogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const date = post.frontmatter.date; // string

  return (
    <Layout>
      <Seo
        title={`${post.frontmatter.title}, ${new Date(
          post.frontmatter.date
        ).getFullYear()}`}
        description={post.excerpt}
        image={post.frontmatter.featuredImage.publicURL}
      />
      <main>
        <div className="container post-page">
          <div className="left">
            <StyledMarkdown
              dangerouslySetInnerHTML={{ __html: post.html }}
            ></StyledMarkdown>
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
                {moment(new Date(date)).format("MMM Do, YYYY")}
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
                      {/* <Link
                        to={`/tags/${tag.toLowerCase()}`}
                        style={{ border: "none" }}
                      > */}
                      {tag}
                      {/* </Link> */}
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

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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

export default blogPostTemplate;
