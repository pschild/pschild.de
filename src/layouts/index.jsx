import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import styles from "./index.module.scss";

export default ({ data, children }) => (
    <div>
        <Header/>
        <div className={styles.contentContainer}>
            {children()}
        </div>
        <Footer contactData={data.site.siteMetadata}/>
    </div>
);

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