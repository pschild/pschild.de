import React from "react";
import Age from "../components/Age/Age";

import {FaXing, FaLinkedin, FaGithub, FaEnvelopeO} from 'react-icons/lib/fa';

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
                <div><Age/> Jahre</div>
                <div>Fachinformatiker (Anwendungsentwicklung)</div>
                <div>B.Sc.</div>
                <div>Wirtschaftsinformatik (M.Sc.), Hochschule Niederrhein</div>
            </div>
        </div>

        <h3>Kontakt</h3>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, textAlign: 'center'}}>
                <a href="mailto:philippe@pschild.de">
                    <FaEnvelopeO size={40}/>
                    <div>philippe@pschild.de</div>
                </a>
            </div>
            <div style={{flex: 2, textAlign: 'center'}}>
                <a href="https://www.xing.com/profile/Philippe_Schild" target="_blank">
                    <FaXing size={40}/>
                    <div>Philippe Schild</div>
                </a>
            </div>
            <div style={{flex: 2, textAlign: 'center'}}>
                <a href="https://de.linkedin.com/pub/philippe-schild/108/393/754" target="_blank">
                    <FaLinkedin size={40}/>
                    <div>Philippe Schild</div>
                </a>
            </div>
            <div style={{flex: 1, textAlign: 'center'}}>
                <a href="https://github.com/pschild" target="_blank">
                    <FaGithub size={40}/>
                    <div>pschild</div>
                </a>
            </div>
        </div>

        <h3>Lebenslauf</h3>
        <p>Timeline</p>
    </div>
);