import React from "react";
import "./b16-tomorrow-dark.scss";
import styles from "./blog-post.module.scss";

import rehypeReact from "rehype-react";
import MediaSlider from "../components/MediaSlider/MediaSlider";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Link from "gatsby-link";
import kebabCase from "lodash/kebabCase";
import ImageWithLightbox from "../components/ImageWithLightbox/ImageWithLightbox";
import HeaderImage from "../components/HeaderImage/HeaderImage";
import config from "../../data/SiteConfig";
import {Helmet} from "react-helmet";
import SEO from "../components/SEO/SEO";

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        "media-slider": MediaSlider,
        "image-gallery": ImageGallery,
        "image-with-lightbox": ImageWithLightbox
    },
}).Compiler;

export default ({ data }) => {
    const post = data.markdownRemark;
    const slug = post.fields.slug;
    return (
        <div>
            <Helmet>
                <title>{`Blog | ${post.frontmatter.title}`}</title>
            </Helmet>
            <SEO postPath={slug} postNode={post} postSEO />
            <HeaderImage imagePath={`${typeof window !== 'undefined' && window.location.origin}/${config.headers.blog}`}/>
            <h1>{post.frontmatter.title}</h1>
            {
                renderAst(post.htmlAst)
            }
            <hr/>
            <div>
                Kategorie: <Link to={`/blog/category/${kebabCase(post.frontmatter.category)}`}>{post.frontmatter.category}</Link>
            </div>
            <ul className={styles.tagList}>
                {
                    post.frontmatter.tags.map((tag, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/blog/tags/${kebabCase(tag)}`}>
                                    <span>#</span>
                                    {tag}
                                </Link>
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
      fields {
        slug
      }
      frontmatter {
        title
        category
        tags
      }
      excerpt
    }
  }
`;