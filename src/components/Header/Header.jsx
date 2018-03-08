import React, { Component } from "react";
import Link from "gatsby-link";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let headerClassNames = [styles.siteHeader];
        if (this.props.isDetached) {
            headerClassNames.push(styles.detached);
        }
        return (
            <header className={headerClassNames.join(' ')}>
                <div className={styles.headerWrapper}>
                    <Link to="/" className="logo">pschild.de</Link>
                    <Navigation></Navigation>
                </div>
            </header>
        );
    }
}

export default Header;