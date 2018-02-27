import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="/">Über mich</Link></li>
                    <li><Link to="/projects">Projekte</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/imprint">Impressum</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;