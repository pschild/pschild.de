import React from "react";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import ProjectList from "../components/ProjectList/ProjectList";
import {Helmet} from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

export default ({data}) => {
    return (
        <div>
            <Helmet>
                <title>{`${config.siteTitle} | Projekte`}</title>
            </Helmet>
            <SEO />
            <HeaderImage imagePath={config.siteUrl + config.headers.projects}>
                <h1>Projekte</h1>
            </HeaderImage>
            <ProjectList projectList={data.allMarkdownRemark.edges}/>
        </div>
    )
};

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ){
      edges {
        node {
          id
          frontmatter {
            title
            date
            titleImagePath {
              publicURL
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;