import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./ProjectPreview.module.scss";
import moment from "moment/moment";

class ProjectPreview extends Component {
    getTitleImageStyle() {
        if (this.props.projectNode.frontmatter.titleImagePath) {
            return {
                backgroundImage: `url(${this.props.projectNode.frontmatter.titleImagePath.publicURL})`
            };
        }
    }

    renderTagList() {
        return (
            <div className={styles.tagListContainer}>
                <ul className={styles.tagList}>
                    {this.props.projectNode.frontmatter.tags.map((tag, i) => <li key={i}>#{tag}</li>)}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <article className={styles.projectPreviewContainer}>
                <Link to={`projects${this.props.projectNode.fields.slug}`}>
                    <div className={styles.titleImageContainer} style={this.getTitleImageStyle()}/>
                    <div className={styles.detailsContainer}>
                        <h3 className={styles.title}>{this.props.projectNode.frontmatter.title}</h3>
                        <h6>{moment(this.props.projectNode.frontmatter.date).format('LL')}</h6>
                    </div>
                </Link>
                {this.props.projectNode.frontmatter.tags && this.renderTagList()}
            </article>
        );
    }
}

export default ProjectPreview;