import React, {Component} from "react";

import styles from "./ImageGallery.module.scss";
import guid from "../../utils/guid";
import Lightbox from "../Lightbox/Lightbox";

class ImageGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: guid(),
            selectedIndex: -1,
            mediaItems: this.props.children.filter(child => child.hasOwnProperty('type'))
        };

        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleLightboxNext = this.handleLightboxNext.bind(this);
        this.handleLightboxPrevious = this.handleLightboxPrevious.bind(this);
        this.handleLightboxClosed = this.handleLightboxClosed.bind(this);
    }

    prefixWithUuid(suffix) {
        return `${this.state.uuid}-${suffix}`;
    }

    handleSelectionChange(event) {
        this.setState({
            selectedIndex: +event.target.value
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
                <input id={this.prefixWithUuid('no-selection')} type="radio" name="gallery-radios" value="-1" onChange={this.handleSelectionChange} checked={this.state.selectedIndex == -1} />

                <div className={[styles.grid, styles.modern].join(' ')}>
                {
                    this.state.mediaItems
                        .map((item, i) => {
                            return (
                                <div className={styles.gridItemWrapper} key={i}>
                                    <label htmlFor={this.prefixWithUuid(`image-${i}`)}>
                                        <div className={[styles.gridItem, styles.backgroundImageContainer].join(' ')} style={{backgroundImage: `url('${item.props.src}')`}}></div>
                                    </label>

                                    <input type="radio" name="gallery-radios" id={this.prefixWithUuid(`image-${i}`)} value={i} onChange={this.handleSelectionChange} checked={this.state.selectedIndex == i}/>
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