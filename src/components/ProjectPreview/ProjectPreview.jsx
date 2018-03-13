import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./ProjectPreview.module.scss";
import moment from "moment/moment";

class BlogPreview extends Component {
    render() {
        return (
            <article className={styles.projectPreviewContainer}>
                <Link to={`projects${this.props.projectNode.fields.slug}`}>
                    <h3>{this.props.projectNode.frontmatter.title}</h3>
                </Link>
                <p>{moment(this.props.projectNode.frontmatter.date).format('LL')}</p>
                <p>{this.props.projectNode.excerpt}</p>
            </article>
        );
    }
}

export default BlogPreview;