import React from "react";
import "./b16-tomorrow-dark.scss";

import rehypeReact from "rehype-react";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import moment from "moment";
import "moment/locale/de";
import ImageWithLightbox from "../components/ImageWithLightbox/ImageWithLightbox";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "media-slider": MediaSlider,
        "image-gallery": ImageGallery,
        "image-with-lightbox": ImageWithLightbox
    },
}).Compiler;

export default ({ data }) => {
    const project = data.markdownRemark;
    const slug = project.fields.slug;
    return (
        <div>
            <SEO postPath={slug} postNode={project} postSEO />
            <HeaderImage imagePath={`${typeof window !== 'undefined' && window.location.origin}/${config.headers.projects}`}/>
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
      fields {
        slug
      }
      frontmatter {
        title
        date
        titleImagePath {
          publicURL
        }
      }
      excerpt
    }
  }
`;