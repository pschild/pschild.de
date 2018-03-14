import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./ProjectPreview.module.scss";
import moment from "moment/moment";

class BlogPreview extends Component {
    getTitleImage() {
        if (this.props.projectNode.frontmatter.titleImagePath) {
            return <div className={styles.titleImageContainer} style={{backgroundImage: `url(${this.props.projectNode.frontmatter.titleImagePath.publicURL})`}}/>;
        }
    }

    render() {
        return (
            <article className={styles.projectPreviewContainer}>
                {this.getTitleImage()}
                <Link to={`projects${this.props.projectNode.fields.slug}`}>
                    <h3>{this.props.projectNode.frontmatter.title}</h3>
                </Link>
                <p>{moment(this.props.projectNode.frontmatter.date).format('LL')}</p>
            </article>
        );
    }
}

export default BlogPreview;