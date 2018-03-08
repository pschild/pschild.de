import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Waypoint from "react-waypoint";

import styles from "./index.module.scss";

class IndexLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDetached: false
        };

        this.handleOnEnter = this.handleOnEnter.bind(this);
        this.handleOnLeave = this.handleOnLeave.bind(this);
    }

    handleOnEnter() {
        this.setState({
            isDetached: false
        });
    }

    handleOnLeave() {
        this.setState({
            isDetached: true
        });
    }

    render () {
        return (
            <div>
                <Header isDetached={this.state.isDetached}/>
                <Waypoint
                    topOffset={60}
                    onEnter={this.handleOnEnter}
                    onLeave={this.handleOnLeave}
                />
                <div className={styles.contentContainer}>
                    {this.props.children()}
                </div>
                <Footer contactData={this.props.data.site.siteMetadata}/>
            </div>
        );
    }
};

export default IndexLayout;

export const query = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        mail
        xingProfile
        linkedinProfile
        githubProfile
      }
    }
  }
`;