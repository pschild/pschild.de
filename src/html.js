import React from "react";
import favicon from "./favicon.ico";
import appleTouchIconPrecomposed from "./apple-touch-icon-precomposed.png";
import appleTouchIcon from "./apple-touch-icon_114x114.png";

let stylesStr;
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

module.exports = class HTML extends React.Component {
    render() {
        let css;
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{__html: stylesStr}}/>
            )
        }
        return (
            <html {...this.props.htmlAttributes}>
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="theme-color" content="#3498DB"/>
                {this.props.headComponents}
                <link rel="apple-touch-icon" href={appleTouchIcon}/>
                <link rel="apple-touch-icon-precomposed" href={appleTouchIconPrecomposed}/>
                <link rel="shortcut icon" href={favicon}/>
                {css}
            </head>
            <body {...this.props.bodyAttributes}>
            {this.props.preBodyComponents}
            <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{__html: this.props.body}}/>
            {this.props.postBodyComponents}
            </body>
            </html>
        )
    }
};
