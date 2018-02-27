import React from "react";
import Link from "gatsby-link";

export default ({data}) => {
    return (
        <div>
            <h1>Projekte</h1>
            <h4>{data.allMarkdownRemark.totalCount} Projekte</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={`projects${node.fields.slug}`}>
                        <h3>
                            {node.frontmatter.title}{" "}
                        </h3>
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
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "project" } } }
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
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