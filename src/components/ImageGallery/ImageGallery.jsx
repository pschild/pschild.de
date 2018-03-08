import React, {Component} from "react";

import styles from "./ImageGallery.module.scss";
import Lightbox from "../Lightbox/Lightbox";

class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: -1,
            mediaItems: this.props.children.filter(child => child.hasOwnProperty('type'))
        };

        this.handleImageClicked = this.handleImageClicked.bind(this);
        this.handleLightboxNext = this.handleLightboxNext.bind(this);
        this.handleLightboxPrevious = this.handleLightboxPrevious.bind(this);
        this.handleLightboxClosed = this.handleLightboxClosed.bind(this);
    }

    handleImageClicked(index) {
        this.setState({
            selectedIndex: index
        });
    }

    handleLightboxNext() {
        this.setState({
            selectedIndex: this.state.selectedIndex + 1
        });
    }

    handleLightboxPrevious() {
        this.setState({
            selectedIndex: this.state.selectedIndex - 1
        });
    }

    handleLightboxClosed() {
        this.setState({
            selectedIndex: -1
        });
    }

    render() {
        return (
            <div className={styles.imageGallery}>
                <div className={[styles.grid, styles.modern].join(' ')}>
                {
                    this.state.mediaItems
                        .map((item, i) => {
                            return (
                                <div className={styles.gridItemWrapper} key={i}>
                                    <div className={[styles.gridItem, styles.backgroundImageContainer].join(' ')} style={{backgroundImage: `url('${item.props.src}')`}} onClick={() => this.handleImageClicked(i)}></div>
                                    <Lightbox hasNext={i < this.state.mediaItems.length - 1} hasPrevious={i > 0} isOpen={this.state.selectedIndex == i} mediaItem={item} onNext={this.handleLightboxNext} onPrevious={this.handleLightboxPrevious} onClose={this.handleLightboxClosed} />
                                </div>
                            )
                        })
                }
                </div>
            </div>
        );
    }
}

export default ImageGallery;