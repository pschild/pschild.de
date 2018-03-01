import React from "react";
import BlogPreview from "../components/BlogPreview/BlogPreview";

export default ({data}) => {
    return (
        <div>
            <h1>Blog</h1>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <BlogPreview key={node.id} postNode={node}/>
            ))}
        </div>
    )
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
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