import React, { Component } from "react";
import Link from "gatsby-link";
import {MdKeyboardArrowUp} from "react-icons/lib/md";
import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from "react-icons/lib/fa";
import styles from "./Footer.module.scss";

class Footer extends Component {
    render() {
        return (
            <footer className={styles.siteFooter}>
                <div className={styles.footerWrapper}>
                    <div className={styles.column}>
                        <Link to="#top"><MdKeyboardArrowUp size={15}/> nach oben</Link>
                    </div>
                    <div className={styles.column}>
                        <ul className={styles.contactLinksContainer}>
                            <li><a href={`mailto:${this.props.contactData.mail}`}><FaEnvelopeO size={25}/></a></li>
                            <li><a href={this.props.contactData.xingProfile} target="_blank"><FaXing size={25}/></a></li>
                            <li><a href={this.props.contactData.linkedinProfile} target="_blank"><FaLinkedin size={25}/></a></li>
                            <li><a href={this.props.contactData.githubProfile} target="_blank"><FaGithub size={25}/></a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
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