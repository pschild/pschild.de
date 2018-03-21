import React, { Component } from "react";
import styles from "./InputField.module.scss";

class InputField extends Component {
    render() {
        return (
            <div className={styles.inputFieldContainer}>
                <input type="text" {...this.props}/>
                <span className={styles.focusBorder}/>
            </div>
        )
    }
}

export default InputField;