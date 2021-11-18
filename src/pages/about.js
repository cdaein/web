import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  // this is a page/not component: I can just use pageQuery instead?
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="About" />
      <main>
        <div className="container post-page">
          <div className="left">
            <p>
              Dae In Chung is a designer, animator and educator. His main
              interests lie in exploring and expressing rhythms and movements
              using a variety of media, including animation, printed forms and
              interactive applications. He studied Experimental Animation at
              California Institute of the Arts. His design and animation work
              has been shown around the world including Centre Pompidou website,
              the New York Times, and many film festivals, etc. He has also
              worked on various commercial projects in graphic design and motion
              graphics. His work has been recognized by Type Directors Club,
              Korean Society of Typography, Graphis Award, IdN, CA Magazine
              Korea, PAGE Magazine, etc.
            </p>

            <h3>Services</h3>
            <ul>
              <li>
                Design tools and systems (generative identity, branding, logo,
                etc.)
              </li>
              <li>
                Expressive typography work (branding, editorial, illustration,
                etc.)
              </li>
              <li>
                Interaction design (website design/development, interactive
                poster, etc.)
              </li>
              <li>Motion graphics (promo video, animation, editorial, etc.)</li>
            </ul>

            <h3>Selected Clients</h3>
            <ul>
              <li>The New York Times, New York</li>
              <li>Pentagram, New York</li>
              <li>Currents New Media, Santa Fe</li>
              <li>yU+co, Los Angeles</li>
            </ul>

            <h3>Technical Skills</h3>
            <ul>
              <li>2D Design (Adobe Photoshop, Illustrator, InDesign)</li>
              <li>Motion Design (Adobe After Effects, Premiere Pro)</li>
              <li>Creative Coding (Processing, p5js)</li>
              <li>Web Design/Development (HTML, CSS, JS)</li>
            </ul>

            <h3>Selected Exhibitions</h3>
            <ul>
              <li>
                La Cinémathèque Temporaire du Collectif Jeune Cinéma, Paris,
                France, 2021
              </li>
              <li>Demo Festival, Amsterdam, The Netherlands, Nov. 2019</li>
              <li>Centre Pompidou Web Screening, France, 2019</li>
              <li>Type Directors Club 62 Exhibition, New York, 2016</li>
              <li>Society of Korean Typography Group Exhibition, 2015</li>
              <li>Outdoor Vision Fest, Santa Fe, 2012</li>
              <li>London International Film Festival, UK, 2009</li>
              <li>Rome Film Festival, Italy, 2008</li>
              <li>Ann Arbor Film Festival, Ann Arbor, 2008</li>
              <li>Animation Block Party, Brooklyn, 2007</li>
              <li>Collectif Jeune Cinéma, Paris, France, 2007</li>
              <li>
                Melbourne Int’l Animation Festival, Australia, 2007 and 2009
              </li>
            </ul>

            <h3>Selected Awards and Publications</h3>
            <ul>
              <li>
                <a href="https://www.nytimes.com/interactive/2021/01/14/multimedia/year-in-illustration.html">
                  The Year In Illustration
                </a>{" "}
                by The New York Times, 2020
              </li>
              <li>AIGA Frontier Reader, USA, 2019</li>
              <li>The T Magazine, Korea, 2017</li>
              <li>LetterSeed 13 Typography Journal, Korea, 2016</li>
              <li>Type Directors Club 62 Communication Design, USA, 2016</li>
              <li>
                Best of the Show Award, Korean Society of Typography, 2015
              </li>
            </ul>

            <h3>Lectures and Presentations</h3>
            <ul>
              <li>
                Faculty at Maryland Institute College of Art, USA, 2016-2021
              </li>
              <li>
                Presenter at AICAD Symposium: Include Me!, Otis College of Art
                and Design, Los Angeles, California, 2019
              </li>
              <li>
                Moderator at Convergence Festival (AI and Creativity), Seoul,
                Korea, 2019
              </li>
              <li>
                Presenter at AIGA Frontier Conference, Bozeman, Montana, 2016
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="right-fixed">
              <div style={{ marginBottom: 12 }}>
                <h3>Contact</h3>
                <p>
                  I am always looking for exciting challenges and opportunities.
                  Please feel free to{" "}
                  <a href={`mailto:${site.siteMetadata.email}`}>contact me</a>{" "}
                  for any inquiries.
                </p>
                <p><a href="https://linktr.ee/dae2nc">Linktree</a></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;
