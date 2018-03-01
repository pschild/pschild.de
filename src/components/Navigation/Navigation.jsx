import React, { Component } from "react";
import Link from "gatsby-link";
import {FaCogs, FaPencil} from 'react-icons/lib/fa';
import {MdPerson} from 'react-icons/lib/md';
import styles from "./Navigation.module.scss";

class Navigation extends Component {
    render() {
        return (
            <nav className={styles.siteNav}>
                <ul>
                    <li>
                        <Link exact to="/" activeClassName={styles.active}>
                            <span className={styles.linkIcon}><MdPerson size={30}/></span>
                            <span className={styles.linkLabel}>Über mich</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" activeClassName={styles.active}>
                            <span className={styles.linkIcon}><FaCogs size={25}/></span>
                            <span className={styles.linkLabel}>Projekte</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="blog" activeClassName={styles.active}>
                            <span className={styles.linkIcon}><FaPencil size={25}/></span>
                            <span className={styles.linkLabel}>Blog</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;