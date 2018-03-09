import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./NavigationLink.module.scss";

class NavigationLink extends Component {
    render() {
        let style = {};
        if (this.props.size) {
            style.fontSize = `${this.props.size}px`;
        }

        if (this.props.to) {
            return (
                <Link {...this.props} activeClassName={styles.active} className={['nav', styles.linkEffect, ...this.props.className].join(' ')} style={style}>
                    {this.props.children}
                </Link>
            )
        } else {
            return (
                <a {...this.props} className={['nav', styles.linkEffect, ...this.props.className].join(' ')} style={style}>
                    {this.props.children}
                </a>
            )
        }
    }
}

export default NavigationLink;