import React, { Component } from "react";
import styles from "./AboutMe.module.scss";
import Age from "../Age/Age";

class AboutMe extends Component {
    render() {
        return (
            <div className={styles.characteristicsContainer}>
                <div className={styles.item}>
                    <img src="./ich.png"/>
                </div>
                <div className={styles.item}>
                    <div>Philippe Schild</div>
                    <div><Age/> Jahre</div>
                    <div>Fachinformatiker (Anwendungsentwicklung)</div>
                    <div>B.Sc.</div>
                    <div>Wirtschaftsinformatik (M.Sc.), Hochschule Niederrhein</div>
                </div>
            </div>
        );
    }
}

export default AboutMe;