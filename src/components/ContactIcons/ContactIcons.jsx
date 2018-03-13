import React, {Component} from "react";

import styles from "./ContactIcons.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";
import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from "react-icons/lib/fa";

class ContactIcons extends Component {
    render() {
        return (
            <ul className={styles.contactLinksContainer}>
                <li><NavigationLink href={`mailto:${this.props.contactData.mail}`}><FaEnvelopeO size={25}/></NavigationLink></li>
                <li><NavigationLink href={this.props.contactData.xingProfile} target="_blank"><FaXing size={25}/></NavigationLink></li>
                <li><NavigationLink href={this.props.contactData.linkedinProfile} target="_blank"><FaLinkedin size={25}/></NavigationLink></li>
                <li><NavigationLink href={this.props.contactData.githubProfile} target="_blank"><FaGithub size={25}/></NavigationLink></li>
            </ul>
        );
    }
}

export default ContactIcons;