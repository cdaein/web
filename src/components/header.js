import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
// import Headroom from "react-headroom"

// Headroom is weird in Safari. temporarily disabled.

const StyledHeader = styled.header`
  --global-bg-color: #f3f3f3;
  --header-height: 50px;
  --side-padding: 25px;
  --side-padding-half: 15px;

  background-color: var(--global-bg-color);
  letter-spacing: 0.2px;
  // position: fixed;
  // top: 0;
  width: 100%;
  z-index: 1;

  nav {
    align-items: center;
    display: flex;
    height: var(--header-height);
  }

  nav .nav-title-group {
    display: flex;
    flex: 1;
  }
  nav .nav-link-group {
    display: flex;
    justify-content: flex-end;
    width: 20%;
  }
  .nav-title-group .site-title {
    // font-weight: 700;
    padding: 0 var(--side-padding);
  }
  .nav-title-group .site-author {
    display: none;
  }
  .nav-title-group .site-tagline {
    color: #666;
    display: none;
    padding: 0;
  }
  .nav-link-group .nav-link {
    padding: 0 var(--side-padding-half);
  }
  .nav-link-group .nav-link:last-child {
    padding-right: var(--side-padding);
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    .nav-title-group .site-author {
      display: inline;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .nav-title-group .site-tagline {
      display: block;
    }

    nav .nav-link-group {
      width: 25%;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    nav .nav-link-group {
      width: 20%;
    }
  }
`;

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
    <StyledHeader>
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
            {/* <Link to="/blog" className="nav-link">
              Blog
            </Link> */}
            <Link to="/about" className="nav-link">
              About
            </Link>
          </div>
        </nav>
      </div>
    </StyledHeader>
    // </Headroom>
  );
};

export default Header;
