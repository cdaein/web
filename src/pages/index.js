import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Masonry from "react-masonry-component"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.handleLayoutReady = this.handleLayoutReady.bind(this)

    this.state = {
      layoutReady: false,
    }
  }

  handleLayoutReady() {
    if (!this.state.layoutReady) {
      this.setState({
        layoutReady: true,
      })
    }

    console.log(this.state.layoutReady)
  }

  render() {
    const edges = this.props.data.allMarkdownRemark.edges

    const masonryOptions = {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
      transitionDuration: "0s",
      // initLayout: false,
    }

    return (
      <Layout>
        <Seo title={this.props.data.site.siteMetadata.tagline} />
        <main>
          <div className="container">
            <Masonry
              className="grid"
              options={masonryOptions}
              onLayoutComplete={laidoutItems =>
                this.handleLayoutReady(laidoutItems)
              }
              style={{
                opacity: this.state.layoutReady ? "1" : "0",
                transition: "opacity .4s",
              }}
            >
              <div className="grid-sizer"></div>
              {edges.map(edge => {
                const post = edge.node

                let cls = "grid-item"
                if (post.frontmatter.featured) {
                  cls += " double"
                }

                const aspectRatio =
                  post.frontmatter.featuredImage.childImageSharp.fluid
                    .aspectRatio
                const paddingTop = `${(1 / aspectRatio) * 100}%`

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
                              post.frontmatter.featuredImage.childImageSharp
                                .fluid
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
                )
              })}
            </Masonry>
          </div>
        </main>
      </Layout>
    )
  }
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        tagline
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date], order: DESC}, 
      filter: {frontmatter: {published: {eq: true}}}) 
    {
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
                fluid(
                  maxWidth: 800
                  toFormat: WEBP  
                ) {
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
`

export default IndexPage
