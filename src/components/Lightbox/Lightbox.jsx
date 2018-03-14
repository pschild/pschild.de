import React, {Component} from "react";

import styles from "./Lightbox.module.scss";
import {MdClose, MdChevronLeft, MdChevronRight} from "react-icons/lib/md";

class Lightbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen,
            hasNext: this.props.hasNext,
            hasPrevious: this.props.hasPrevious,
            mediaItem: this.props.mediaItem,
            onNext: this.props.onNext,
            onPrevious: this.props.onPrevious,
            onClose: this.props.onClose
        };

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isOpen: nextProps.isOpen
        });
    }

    next() {
        this.state.onNext();
    }

    previous() {
        this.state.onPrevious();
    }

    close(event) {
        this.setState({
            isOpen: false
        });
        this.state.onClose();
    }

    render() {
        let classNames = [styles.lightbox];
        if (this.state.isOpen) {
            classNames.push(styles.open);
        }
        return (
            <div className={classNames.join(' ')}>
                <img src={this.state.mediaItem.props.src}/>
                <div className={styles.mask} onClick={this.close}></div>
                <div className={styles.closeButton} onClick={this.close}>
                    <MdClose size={50} />
                </div>
                {
                    this.props.hasNext &&
                    (
                        <div className={styles.nextButton} onClick={this.next}>
                            <MdChevronRight size={50}/>
                        </div>
                    )
                }
                {
                    this.props.hasPrevious &&
                    (
                        <div className={styles.previousButton} onClick={this.previous}>
                            <MdChevronLeft size={50} />
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Lightbox;