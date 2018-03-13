import React, { Component } from "react";
import styles from "./ProjectList.module.scss";
import ProjectPreview from "../ProjectPreview/ProjectPreview";

class Navigation extends Component {
    render() {
        return (
            <div className={styles.projectListContainer}>
                {this.props.projectList.map(({ node }) => (
                    <ProjectPreview key={node.id} projectNode={node}/>
                ))}
            </div>
        );
    }
}

export default Navigation;