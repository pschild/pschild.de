import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./index.module.scss";

export default ({ children }) => (
    <div>
        <Header/>
        <div className={styles.contentContainer}>
            {children()}
        </div>
        <Footer/>
    </div>
);