import React, { Component } from "react";
import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from "react-icons/lib/fa";
import styles from "./Footer.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.siteFooter}>
                <div className={styles.footerWrapper}>
                    <div className={styles.column}>
                        <ul className={styles.contactLinksContainer}>
                            <li><NavigationLink href={`mailto:${this.props.contactData.mail}`}><FaEnvelopeO size={25}/></NavigationLink></li>
                            <li><NavigationLink href={this.props.contactData.xingProfile} target="_blank"><FaXing size={25}/></NavigationLink></li>
                            <li><NavigationLink href={this.props.contactData.linkedinProfile} target="_blank"><FaLinkedin size={25}/></NavigationLink></li>
                            <li><NavigationLink href={this.props.contactData.githubProfile} target="_blank"><FaGithub size={25}/></NavigationLink></li>
                        </ul>
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