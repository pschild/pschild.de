import React from "react";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import ProjectList from "../components/ProjectList/ProjectList";

export default ({data}) => {
    return (
        <div>
            <HeaderImage imagePath={data.site.siteMetadata.projectsHeaderImagePath}>
                <h1>Projekte</h1>
            </HeaderImage>
            <ProjectList projectList={data.allMarkdownRemark.edges}/>
        </div>
    )
};

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        projectsHeaderImagePath
      }
    }
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