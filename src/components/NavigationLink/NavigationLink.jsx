import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./NavigationLink.module.scss";

class NavigationLink extends Component {
    render() {
        let style = {};
        if (this.props.size) {
            style.fontSize = `${this.props.size}px`;
        }

        return (
            <Link {...this.props} activeClassName={styles.active} className={[styles.myLink, ...this.props.className].join(' ')} style={style}>
                <span data-hover={this.props.children}>{this.props.children}</span>
            </Link>
        );
    }
}

export default NavigationLink;