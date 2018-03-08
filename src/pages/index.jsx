import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/Timeline/Timeline";
import HeaderImage from "../components/HeaderImage/HeaderImage";

export default ({ data }) => (
    <div>
        <HeaderImage imagePath={`./1920.jpg`}/>
        <h2>Hi!</h2>

        <h3>Ich bin ...</h3>
        <AboutMe/>

        <h3>Lebenslauf</h3>
        <Timeline items={data.allMarkdownRemark.edges}/>
    </div>
);

export const query = graphql`
  query TimelineQuery {
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