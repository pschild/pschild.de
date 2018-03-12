import React, { Component } from "react";
import styles from "./HeaderImage.module.scss";

class HeaderImage extends Component {
    render() {
        let backgroundStyle = {
            backgroundImage: `url(${this.props.imagePath})`
        };
        return (
            <div id="header-image" className={styles.headerImageWrapper} style={backgroundStyle}>
                {this.props.children}
            </div>
        );
    }
}

export default HeaderImage;