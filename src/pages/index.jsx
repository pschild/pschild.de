import React from "react";
import Age from "../components/Age/Age";
import Timeline from "../components/Timeline/Timeline";

import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from 'react-icons/lib/fa';

export default ({ data }) => (
    <div>
        <h2>Hi!</h2>

        <h3>Ich bin ...</h3>
        <div className="flex-container" style={{display: 'flex', alignItems: 'center'}}>
            <div className="item" style={{flex: 1}}>
                <img src="./ich.png"/>
            </div>
            <div className="item" style={{flex: 2}}>
                <div>Philippe Schild</div>
                <div><Age/> Jahre</div>
                <div>Fachinformatiker (Anwendungsentwicklung)</div>
                <div>B.Sc.</div>
                <div>Wirtschaftsinformatik (M.Sc.), Hochschule Niederrhein</div>
            </div>
        </div>

        <h3>Kontakt</h3>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, textAlign: 'center'}}>
                <a href={`mailto:${data.site.siteMetadata.mail}`}>
                    <FaEnvelopeO size={40}/>
                    <div>{data.site.siteMetadata.mail}</div>
                </a>
            </div>
            <div style={{flex: 2, textAlign: 'center'}}>
                <a href={data.site.siteMetadata.xingProfile} target="_blank">
                    <FaXing size={40}/>
                    <div>Philippe Schild</div>
                </a>
            </div>
            <div style={{flex: 2, textAlign: 'center'}}>
                <a href={data.site.siteMetadata.linkedinProfile} target="_blank">
                    <FaLinkedin size={40}/>
                    <div>Philippe Schild</div>
                </a>
            </div>
            <div style={{flex: 1, textAlign: 'center'}}>
                <a href={data.site.siteMetadata.githubProfile} target="_blank">
                    <FaGithub size={40}/>
                    <div>pschild</div>
                </a>
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