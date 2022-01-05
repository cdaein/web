import React from "react";
import PropTypes from "prop-types";
// import kebabCase from "lodash/kebabCase";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Seo title="Tags" />
    <main>
      <div className="container post-page">
        <div className="left">
          <h1 style={{ marginBottom: 15 }}>Tags</h1>
          <ul>
            {group.map((tag) => (
              <li key={tag.fieldValue}>
                {/* <Link to={`/tags/${kebabCase(tag.fieldValue)}`}> */}
                <Link to={`/tags/${tag.fieldValue}`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default TagsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
