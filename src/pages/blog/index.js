import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogIndexPage = () => {
  return (
    <Layout>
      {/* <Seo title={this.props.data.site.siteMetadata.tagline} /> */}
      <main>
        <div className="container">
          <h2> BLOG </h2>
        </div>
      </main>
    </Layout>
  );
};

export default BlogIndexPage;
