import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/Timeline/Timeline";
import HeaderImage from "../components/HeaderImage/HeaderImage";

export default ({ data }) => (
    <div>
        <HeaderImage imagePath={data.site.siteMetadata.homeHeaderImagePath}>
            <h1>Über mich</h1>
        </HeaderImage>
        <h2>Hi!</h2>

        <h3>Ich bin ...</h3>
        <AboutMe/>

        <h3>Lebenslauf</h3>
        <Timeline items={data.allMarkdownRemark.edges}/>
    </div>
);

export const query = graphql`
  query TimelineQuery {
    site {
      siteMetadata {
        homeHeaderImagePath
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "timeline" } } }
      sort: { order: DESC, fields: [frontmatter___dateFrom] }
    ){
      edges {
        node {
          frontmatter {
            dateFrom
            dateTo
          }
          html
        }
      }
    }
  }
`;