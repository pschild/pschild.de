import React, { Component } from "react";
import Link from "gatsby-link";
import {FaCogs, FaPencil} from 'react-icons/lib/fa';
import {MdPerson} from 'react-icons/lib/md';
import styles from "./Navigation.module.scss";
import NavigationLink from "../NavigationLink/NavigationLink";

class Navigation extends Component {
    render() {
        return (
            <nav className={styles.siteNav}>
                <ul>
                    <li>
                        <NavigationLink exact to="/" size={14} className={styles.linkLabel}>Über mich</NavigationLink>
                        <Link exact to="/" className={styles.linkIcon}><MdPerson size={30}/></Link>
                    </li>
                    <li>
                        <NavigationLink to="/projects" size={14} className={styles.linkLabel}>Projekte</NavigationLink>
                        <Link to="/projects" className={styles.linkIcon}><FaCogs size={25}/></Link>
                    </li>
                    <li>
                        <NavigationLink to="/blog" size={14} className={styles.linkLabel}>Blog</NavigationLink>
                        <Link to="/blog" className={styles.linkIcon}><FaPencil size={25}/></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;