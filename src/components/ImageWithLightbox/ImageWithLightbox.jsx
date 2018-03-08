import React, {Component} from "react";

import styles from "./ImageWithLightbox.module.scss";
import Lightbox from "../Lightbox/Lightbox";

class ImageWithLightbox extends Component {
    constructor(props) {
        super(props);

        let elementChildren = this.props.children.filter(child => child.hasOwnProperty('type'));
        if (elementChildren.length !== 1) {
            throw new Error(`Expected exactly one child, but got ${elementChildren.length}`);
        }

        this.state = {
            isLightboxOpen: false,
            mediaItem: elementChildren[0]
        };

        this.handleImageClicked = this.handleImageClicked.bind(this);
        this.handleLightboxClosed = this.handleLightboxClosed.bind(this);
    }

    handleImageClicked() {
        this.setState({
            isLightboxOpen: !this.state.isLightboxOpen
        });
    }

    handleLightboxClosed() {
        this.setState({
            isLightboxOpen: false
        });
    }

    render() {
        return (
            <div className={styles.imageWithLightbox}>
                <div className={styles.imageContainer}>
                    <img src={this.state.mediaItem.props.src} onClick={this.handleImageClicked} />
                    <Lightbox isOpen={this.state.isLightboxOpen} mediaItem={this.state.mediaItem} onClose={this.handleLightboxClosed} />
                </div>
            </div>
        );
    }
}

export default ImageWithLightbox;