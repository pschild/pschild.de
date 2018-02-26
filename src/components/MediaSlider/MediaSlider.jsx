import React, {Component} from "react";

import styles from "./MediaSlider.module.scss";
import guid from "../../utils/guid";

import ReactSwipeEvents from "react-swipe-events";

class MediaSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: guid(),
            activeSlideIndex: 0,
            mediaItems: this.props.children.filter(child => child.hasOwnProperty('type'))
        };

        this.handleActiveSliderIndexChanged = this.handleActiveSliderIndexChanged.bind(this);
        this.handleSwipedLeft = this.handleSwipedLeft.bind(this);
        this.handleSwipedRight = this.handleSwipedRight.bind(this);
    }

    generateSlideId(index) {
        return `${this.state.uuid}-slide-${index}`;
    }

    calcSliderWidth() {
        return (this.state.mediaItems.length * 100) + '%';
    }

    calcItemWidth() {
        return (100 / this.state.mediaItems.length) + '%';
    }

    handleActiveSliderIndexChanged(event) {
        this.setState({
            activeSlideIndex: event.target.value
        });
    }

    handleSwipedLeft() {
        if (this.state.activeSlideIndex < this.state.mediaItems.length - 1) {
            this.setState((state) => ({ activeSlideIndex: state.activeSlideIndex + 1}));
        }
    }

    handleSwipedRight() {
        if (this.state.activeSlideIndex > 0) {
            this.setState((state) => ({activeSlideIndex: state.activeSlideIndex - 1}));
        }
    }

    render() {
        return (
            <div className={styles.cssSlider}>
                {
                    this.state.mediaItems
                        .map((item, i) => {
                            return <input key={i} type="radio" name="slider" id={this.generateSlideId(i)} value={i} onChange={this.handleActiveSliderIndexChanged}></input>
                        })
                }
                <ReactSwipeEvents onSwipedLeft={this.handleSwipedLeft} onSwipedRight={this.handleSwipedRight}>
                    <ul className={styles.sliderElements} style={{ width: this.calcSliderWidth(), left: -(this.state.activeSlideIndex * 100) + '%' }}>
                        {
                            this.state.mediaItems
                                .map((item, i) => {
                                    return (
                                        <li key={i} style={{ width: this.calcItemWidth() }}>
                                            <div>
                                                {item}
                                                <div className={styles.caption} style={{ display: item.props['data-caption'] ? 'block' : 'none' }}>{item.props['data-caption']}</div>
                                            </div>
                                        </li>
                                    )
                                })
                        }
                    </ul>
                </ReactSwipeEvents>

                <ul className={styles.sliderControls}>
                    {
                        this.state.mediaItems
                            .map((item, i) => {
                                return (
                                    <li key={i}>
                                        <label htmlFor={this.generateSlideId(i)} className={this.state.activeSlideIndex == i ? styles.active : ''}></label>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        );
    }
}

export default MediaSlider;