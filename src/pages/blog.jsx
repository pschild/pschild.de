import React from "react";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";

export default ({data}) => {
    return (
        <div>
            <Helmet>
                <title>{`Blog`}</title>
            </Helmet>
            <HeaderImage imagePath={config.headers.blog}>
                <h1>Blog</h1>
            </HeaderImage>
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