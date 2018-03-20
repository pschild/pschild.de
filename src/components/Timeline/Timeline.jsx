import React, {Component} from "react";
import moment from "moment/moment";
import "moment/locale/de";
import {FaTrophy, FaGraduationCap, FaBriefcase, FaCircleThin} from "react-icons/lib/fa";

import styles from "./Timeline.module.scss";

class Timeline extends Component {
    generateTimespanLabel(frontmatter) {
        let singleDay = frontmatter.singleDay === 'yes';
        let dateFrom = moment(frontmatter.dateFrom).format('MM[/]YYYY');
        let dateTo = moment(frontmatter.dateTo).format('MM[/]YYYY');

        let label;
        if (frontmatter.dateFrom && frontmatter.dateTo) {
            label = `${dateFrom} - ${dateTo}`;
        } else if (frontmatter.dateFrom) {
            if (singleDay) {
                label = dateFrom;
            } else {
                label = `seit ${dateFrom}`;
            }
        }
        return label;
    }

    getMilestoneIcon(category) {
        if (category === `award`) {
            return (<FaTrophy size={20}/>);
        } else if (category === `study`) {
            return (<FaGraduationCap size={20}/>);
        } else if (category === `job`) {
            return (<FaBriefcase size={20}/>);
        } else {
            return (<FaCircleThin size={20}/>);
        }
    }

    render() {
        return (
            <div>
                <h2 className={styles.headline}>Meilensteine</h2>
                <ul className={styles.milestones}>
                    {
                        this.props.items
                            .map((item, i) => {
                                let milestoneIcon = this.getMilestoneIcon(item.node.frontmatter.category);
                                let directionClassName = i % 2 === 0 ? styles['direction-r'] : styles['direction-l'];
                                return (
                                    <li key={i}>
                                        <div className={directionClassName}>
                                            <div className={styles.milestoneIcon}>{milestoneIcon}</div>
                                            <strong>{this.generateTimespanLabel(item.node.frontmatter)}</strong>
                                            <div dangerouslySetInnerHTML={{ __html: item.node.html }}/>
                                        </div>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        );
    }
}

export default Timeline;