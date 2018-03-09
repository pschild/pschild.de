import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";

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
                    <NavigationLink exact to="/" size={16}>pschild.de</NavigationLink>
                    <Navigation></Navigation>
                </div>
            </header>
        );
    }
}

export default Header;