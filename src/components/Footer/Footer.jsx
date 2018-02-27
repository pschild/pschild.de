import React, { Component } from "react";
import Link from "gatsby-link";
import Navigation from "../Navigation/Navigation";
import styles from "./Footer.module.scss";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.siteFooter}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerNavigation}>
                        <Link exact to="/imprint" activeClassName={styles.active}>
                            Impressum
                        </Link>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;