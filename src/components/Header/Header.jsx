import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.scss";

class Header extends Component {
    render() {
        return (
            <header className={styles.test}>
                pschild.de
                <Navigation></Navigation>
            </header>
        );
    }
}

export default Header;