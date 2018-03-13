import React, { Component } from "react";
import styles from "./Footer.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";
import ContactIcons from "../ContactIcons/ContactIcons";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.siteFooter}>
                <div className={styles.footerWrapper}>
                    <div className={styles.column}>
                        <ContactIcons contactData={this.props.contactData}/>
                    </div>
                    <div className={styles.column}>
                        <NavigationLink to="/imprint" size={14}>Impressum</NavigationLink>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;