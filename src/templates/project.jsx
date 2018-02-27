import React from "react";
import "./b16-tomorrow-dark.css";

import rehypeReact from "rehype-react";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import moment from "moment";
import "moment/locale/de";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "media-slider": MediaSlider
    },
}).Compiler;

export default ({ data }) => {
    const project = data.markdownRemark;
    return (
        <div>
            <h1>{project.frontmatter.title}</h1>
            <h4>{moment(project.frontmatter.date).format('LL')}</h4>
            {
                renderAst(project.htmlAst)
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
        date
      }
    }
  }
`;