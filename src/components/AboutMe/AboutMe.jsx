import React, { Component } from "react";
import styles from "./AboutMe.module.scss";
import Age from "../Age/Age";
import ContactIcons from "../ContactIcons/ContactIcons";

class AboutMe extends Component {
    render() {
        return (
            <div className={styles.characteristicsContainer}>
                <img className={styles.profileImage} src="./ich.png"/>
                <h2>Philippe Schild</h2>
                <ul className={styles.factsContainer}>
                    <li className={styles.fact}>🎈 <Age/> Jahre</li>
                    <li className={styles.fact}>🏡 Goch, NRW</li>
                    <li className={styles.fact}>👨🏻‍🎓 Student</li>
                    <li className={styles.fact}>💡 Bastler</li>
                    <li className={styles.fact}>💻 Programmierer</li>
                </ul>
                <h3>Kontakt</h3>
                <ContactIcons />
            </div>
        );
    }
}

export default AboutMe;