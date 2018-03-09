import React, { Component } from "react";
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
                        <NavigationLink exact to="/" size={16} className={styles.linkLabel}>Über mich</NavigationLink>
                        <NavigationLink exact to="/" className={styles.linkIcon}><MdPerson size={30}/></NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to="/projects" size={16} className={styles.linkLabel}>Projekte</NavigationLink>
                        <NavigationLink to="/projects" className={styles.linkIcon}><FaCogs size={25}/></NavigationLink>
                    </li>
                    <li>
                        <NavigationLink to="/blog" size={16} className={styles.linkLabel}>Blog</NavigationLink>
                        <NavigationLink to="/blog" className={styles.linkIcon}><FaPencil size={25}/></NavigationLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;