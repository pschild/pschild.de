import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "./Navigation.module.scss";

class Navigation extends Component {
    render() {
        return (
            <nav className={styles.navigation}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;