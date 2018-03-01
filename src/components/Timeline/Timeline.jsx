import React, {Component} from "react";
import moment from "moment/moment";
import "moment/locale/de";

import styles from "./Timeline.module.scss";

class Timeline extends Component {
    constructor(props) {
        super(props);
    }

    generateTimespanLabel(frontmatter) {
        let dateFrom = moment(frontmatter.dateFrom).format('MM[/]YYYY');
        let dateTo = moment(frontmatter.dateTo).format('MM[/]YYYY');

        let label;
        if (frontmatter.dateFrom && frontmatter.dateTo) {
            label = `${dateFrom} - ${dateTo}`;
        } else if (frontmatter.dateFrom) {
            label = `seit ${dateFrom}`;
        }
        return label;
    }

    render() {
        return (
            <ul className={styles.milestones}>
                {
                    this.props.items
                        .map((item, i) => {
                            let directionClassName = i % 2 === 0 ? styles["direction-r"] : styles["direction-l"];
                            return (
                                <li key={i}>
                                    <div className={directionClassName}>
                                        <strong>{this.generateTimespanLabel(item.node.frontmatter)}</strong>
                                        <div dangerouslySetInnerHTML={{ __html: item.node.html }}/>
                                    </div>
                                </li>
                            )
                        })
                }
            </ul>
        );
    }
}

export default Timeline;