import React from "react";
import Age from "../components/Age/Age";
import Timeline from "../components/Timeline/Timeline";

import styles from "./index.module.scss";

export default ({ data }) => (
    <div>
        <h2>Hi!</h2>

        <h3>Ich bin ...</h3>
        <div className={styles.characteristicsContainer}>
            <div className={styles.item}>
                <img src="./ich.png"/>
            </div>
            <div className={styles.item}>
                <div>Philippe Schild</div>
                <div><Age/> Jahre</div>
                <div>Fachinformatiker (Anwendungsentwicklung)</div>
                <div>B.Sc.</div>
                <div>Wirtschaftsinformatik (M.Sc.), Hochschule Niederrhein</div>
            </div>
        </div>

        <h3>Lebenslauf</h3>
        <Timeline items={data.allMarkdownRemark.edges}/>
    </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        mail
        xingProfile
        linkedinProfile
        githubProfile
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "timeline" } } }
      sort: { order: DESC, fields: [frontmatter___dateFrom] }
    ){
      edges {
        node {
          frontmatter {
            dateFrom
            dateTo
          }
          html
        }
      }
    }
  }
`;