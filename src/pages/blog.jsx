import React, { Component } from "react";
import BlogPreview from "../components/BlogPreview/BlogPreview";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";
import SEO from "../components/SEO/SEO";

class BlogPage extends Component {

    getPostList() {
        if (this.props.data.allMarkdownRemark && this.props.data.allMarkdownRemark.totalCount > 0) {
            return (
                <div>
                    <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
                    {
                        this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                            <BlogPreview key={node.id} postNode={node}/>
                        ))
                    }
                </div>
            )
        } else {
            return <h3>Der erste Blogbeitrag wird in Kürze veröffentlicht! 😊</h3>
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{`Blog`}</title>
                </Helmet>
                <SEO />
                <HeaderImage imagePath={config.headers.blog}>
                    <h1>Blog</h1>
                </HeaderImage>
                {this.getPostList()}
            </div>
        )
    }
}

export default BlogPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: "yes" } } }
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