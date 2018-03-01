import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./BlogPreview.module.scss";

class BlogPreview extends Component {
    render() {
        return (
            <article className={styles.blogPreviewContainer}>
                <h3>{this.props.postNode.frontmatter.title}{" "}</h3>
                <p>{this.props.postNode.excerpt}</p>
                <Link to={`blog${this.props.postNode.fields.slug}`}>mehr lesen</Link>
            </article>
        );
    }
}

export default BlogPreview;