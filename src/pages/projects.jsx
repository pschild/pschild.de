import React from "react";
import Link from "gatsby-link";
import moment from "moment/moment";
import "moment/locale/de";
import HeaderImage from "../components/HeaderImage/HeaderImage";

export default ({data}) => {
    return (
        <div>
            <HeaderImage imagePath={data.site.siteMetadata.projectsHeaderImagePath}/>
            <h1>Projekte</h1>
            <h4>{data.allMarkdownRemark.totalCount} Projekte</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={`projects${node.fields.slug}`}>
                        <h3>{node.frontmatter.title}</h3>
                        <h4>{moment(node.frontmatter.date).format('LL')}</h4>
                        <p>{node.excerpt}</p>
                    </Link>
                    <hr/>
                </div>
            ))}
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