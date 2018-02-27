import React from "react";
import "./b16-tomorrow-dark.css";

import rehypeReact from "rehype-react";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import Link from "gatsby-link";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "media-slider": MediaSlider
    },
}).Compiler;

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            {
                renderAst(post.htmlAst)
            }
            <hr/>
            <div>
                Kategorie: <Link to={`/blog/category/${post.frontmatter.category}`}>{post.frontmatter.category}</Link>
            </div>
            <ul>
                {
                    post.frontmatter.tags.map((tag, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/blog/tags/${tag}`}>{tag}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        category
        tags
      }
    }
  }
`;