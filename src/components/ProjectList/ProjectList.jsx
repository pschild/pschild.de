import React, { Component } from "react";
import styles from "./ProjectList.module.scss";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
import InputField from "../InputField/InputField";

class ProjectList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedProjectList: this.props.projectList
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        let searchString = event.target.value.toLowerCase();
        this.setState({
            displayedProjectList: this.props.projectList.filter(project => {
                let title = project.node.frontmatter.title.toLowerCase();
                return title.search(searchString) >= 0;
            })
        });
    }

    render() {
        return (
            <div>
                <div className={styles.headBar}>
                    <h4 className={styles.amountLabel}>{this.state.displayedProjectList.length} Projekte</h4>
                    <InputField placeholder="Titel, Tags, ..." onKeyUp={this.handleKeyUp}/>
                </div>
                <div className={styles.projectListContainer}>
                    {this.state.displayedProjectList.map(({ node }) => (
                        <ProjectPreview key={node.id} projectNode={node}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default ProjectList;