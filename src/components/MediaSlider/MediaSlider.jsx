import React, {Component} from "react";

import styles from "./MediaSlider.module.scss";
import guid from "../../utils/guid";

import ReactSwipeEvents from "react-swipe-events";
import {FaChevronLeft, FaChevronRight} from "react-icons/lib/fa";

class MediaSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            uuid: guid(),
            activeSlideIndex: 0,
            mediaItems: this.props.children.filter(child => child.hasOwnProperty('type'))
        };

        this.handleActiveSliderIndexChanged = this.handleActiveSliderIndexChanged.bind(this);
        this.showNextSlide = this.showNextSlide.bind(this);
        this.showPreviousSlide = this.showPreviousSlide.bind(this);
        this.getLeftDisabledClassName = this.getLeftDisabledClassName.bind(this);
        this.getRightDisabledClassName = this.getRightDisabledClassName.bind(this);
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
            activeSlideIndex: +event.target.value
        });
    }

    showNextSlide() {
        if (this.state.activeSlideIndex < this.state.mediaItems.length - 1) {
            this.setState((state) => ({ activeSlideIndex: state.activeSlideIndex + 1}));
        }
    }

    showPreviousSlide() {
        if (this.state.activeSlideIndex > 0) {
            this.setState((state) => ({activeSlideIndex: state.activeSlideIndex - 1}));
        }
    }

    getLeftDisabledClassName() {
        return this.state.activeSlideIndex == 0 ? styles.disabled : '';
    }

    getRightDisabledClassName() {
        return this.state.activeSlideIndex == this.state.mediaItems.length - 1 ? styles.disabled : '';
    }

    render() {
        return (
            <div className={styles.cssSlider}>
                <div className={[styles.navArea, styles.left, this.getLeftDisabledClassName()].join(' ')} onClick={this.showPreviousSlide}>
                    <span><FaChevronLeft/></span>
                </div>
                <div className={[styles.navArea, styles.right, this.getRightDisabledClassName()].join(' ')} onClick={this.showNextSlide}>
                    <span><FaChevronRight/></span>
                </div>
                {
                    this.state.mediaItems
                        .map((item, i) => {
                            return <input key={i} type="radio" name="slider" id={this.generateSlideId(i)} value={i} onChange={this.handleActiveSliderIndexChanged} checked={this.state.activeSlideIndex == i}></input>
                        })
                }
                <ReactSwipeEvents onSwipedLeft={this.showNextSlide} onSwipedRight={this.showPreviousSlide} className={styles.stageContainer}>
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