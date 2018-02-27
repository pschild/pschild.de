import React from "react";
import "./b16-tomorrow-dark.css";

import rehypeReact from "rehype-react";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";

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
        </div>
    );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`;