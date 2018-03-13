import React, { Component } from "react";
import styles from "./AboutMe.module.scss";
import Age from "../Age/Age";
import ContactIcons from "../ContactIcons/ContactIcons";

class AboutMe extends Component {
    render() {
        return (
            <div className={styles.characteristicsContainer}>
                <h2>Hi!</h2>
                <img className={styles.profileImage} src="./ich.png"/>
                <h3>Philippe Schild</h3>
                <ul className={styles.factsContainer}>
                    <li className={styles.fact}>🎈 <Age/> Jahre</li>
                    <li className={styles.fact}>🏡 Goch, NRW</li>
                    <li className={styles.fact}>👨🏻‍🎓 Student</li>
                    <li className={styles.fact}>💡 Bastler</li>
                    <li className={styles.fact}>💻 Programmierer</li>
                </ul>
                <ContactIcons contactData={this.props.contactData}/>
            </div>
        );
    }
}

export default AboutMe;