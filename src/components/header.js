import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
// import Headroom from "react-headroom"

// Headroom is weird in Safari. temporarily disabled.

const Header = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          tagline
        }
      }
    }
  `);

  return (
    // <Headroom>
    <header>
      <div className="container">
        <nav className="nav" role="navigation">
          <div className="nav-title-group">
            <h1 className="site-title">
              <Link to="/">{site.siteMetadata.title}</Link>
              <div className="site-author"> ∙ {site.siteMetadata.author}</div>
            </h1>
            <h2 className="site-tagline">{site.siteMetadata.tagline}</h2>
          </div>
          <div className="nav-link-group">
            <Link to="/" className="nav-link">
              Work
            </Link>
            <a
              target="_blank"
              href="https://versum.xyz/user/tz1WXTdGdwD6g24vJp7vpjWVR8LuFpisUcoc"
              rel="noreferrer noopener"
            >
              Shop
            </a>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
    // </Headroom>
  );
};

export default Header;
