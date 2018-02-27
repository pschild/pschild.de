import React, { Component } from "react";
import Link from "gatsby-link";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <header className={styles.siteHeader}>
                <div className={styles.headerWrapper}>
                    <Link to="/" className="logo">pschild.de</Link>
                    <Navigation></Navigation>
                </div>
            </header>
        );
    }
}

export default Header;