import React from "react";
import Link from "gatsby-link";

export default ({data}) => {
    return (
        <div>
            <h1>Blog</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link to={node.fields.slug}>
                        <h3>
                            {node.frontmatter.title}{" "}
                        </h3>
                        <p>{node.excerpt}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
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