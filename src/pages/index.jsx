import React from "react";

import FaXing from 'react-icons/lib/fa/xing';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';

export default () => (
    <div>
        <h2>Hi!</h2>

        <h3>Ich bin ...</h3>
        <div className="flex-container" style={{display: 'flex', alignItems: 'center'}}>
            <div className="item" style={{flex: 1}}>
                <img src="./ich.png"/>
            </div>
            <div className="item" style={{flex: 2}}>
                <div>Philippe Schild</div>
                <div>28 Jahre</div>
                <div>Fachinformatiker (Anwendungsentwicklung)</div>
                <div>B.Sc.</div>
                <div>Wirtschaftsinformatik (M.Sc.), Hochschule Niederrhein</div>
            </div>
        </div>

        <h3>Kontakt</h3>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1}}>
                <FaEnvelopeO/>
            </div>
            <div style={{flex: 1}}>
                <FaXing/>
            </div>
            <div style={{flex: 1}}>
                <FaLinkedin/>
            </div>
            <div style={{flex: 1}}>
                <FaGithub/>
            </div>
        </div>

        <h3>Lebenslauf</h3>
        <p>Timeline</p>
    </div>
);