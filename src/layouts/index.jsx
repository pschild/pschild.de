import React from "react";
import Header from "../components/Header/Header";

import styles from "./styles.scss";

export default ({ children }) => (
    <div>
        <Header/>
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
            {children()}
        </div>
    </div>
);