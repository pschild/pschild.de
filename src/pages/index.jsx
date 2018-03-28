import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Timeline from "../components/Timeline/Timeline";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";

export default ({data}) => (
    <div>
        <Helmet>
            <title>{`Über mich`}</title>
        </Helmet>
        <HeaderImage imagePath={config.headers.home}>
            <h1>Hi!</h1>
        </HeaderImage>
        <AboutMe />

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
            singleDay
            category
          }
          html
        }
      }
    }
  }
`;