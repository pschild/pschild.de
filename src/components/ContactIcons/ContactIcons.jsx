import React, {Component} from "react";

import styles from "./ContactIcons.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";
import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from "react-icons/lib/fa";
import config from "../../../data/SiteConfig";

class ContactIcons extends Component {
    render() {
        return (
            <ul className={styles.contactLinksContainer}>
                <li><NavigationLink href={`mailto:${config.contact.mail}`}><FaEnvelopeO size={25}/></NavigationLink></li>
                <li><NavigationLink href={config.contact.xing} target="_blank"><FaXing size={25}/></NavigationLink></li>
                <li><NavigationLink href={config.contact.linkedin} target="_blank"><FaLinkedin size={25}/></NavigationLink></li>
                <li><NavigationLink href={config.contact.github} target="_blank"><FaGithub size={25}/></NavigationLink></li>
            </ul>
        );
    }
}

export default ContactIcons;