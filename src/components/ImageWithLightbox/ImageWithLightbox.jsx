import React, {Component} from "react";

import styles from "./ImageWithLightbox.module.scss";
import guid from "../../utils/guid";
import Lightbox from "../Lightbox/Lightbox";

class ImageWithLightbox extends Component {
    constructor(props) {
        super(props);

        let elementChildren = this.props.children.filter(child => child.hasOwnProperty('type'));
        if (elementChildren.length !== 1) {
            throw new Error(`Expected exactly one child, but got ${elementChildren.length}`);
        }

        this.state = {
            uuid: guid(),
            isLightboxOpen: false,
            mediaItem: elementChildren[0]
        };

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleLightboxClosed = this.handleLightboxClosed.bind(this);
    }

    prefixWithUuid(suffix) {
        return `${this.state.uuid}-${suffix}`;
    }

    handleSelectionChange(event) {
        this.setState({
            isLightboxOpen: event.target.checked
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
                    <label htmlFor={this.prefixWithUuid(`image`)}>
                        <img src={this.state.mediaItem.props.src} />
                    </label>
                    <input type="checkbox" id={this.prefixWithUuid(`image`)} value="open" onChange={this.handleSelectionChange} checked={this.state.isLightboxOpen}/>
                    <Lightbox isOpen={this.state.isLightboxOpen} mediaItem={this.state.mediaItem} onClose={this.handleLightboxClosed} />
                </div>
            </div>
        );
    }
}

export default ImageWithLightbox;