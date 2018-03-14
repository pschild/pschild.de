import React from "react";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import ProjectList from "../components/ProjectList/ProjectList";

export default ({data}) => {
    return (
        <div>
            <HeaderImage imagePath={data.site.siteMetadata.projectsHeaderImagePath}>
                <h1>Projekte</h1>
            </HeaderImage>
            <h4>{data.allMarkdownRemark.totalCount} Projekte</h4>
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
      totalCount
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