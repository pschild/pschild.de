const config = require('./data/SiteConfig');

module.exports = {
    siteMetadata: {
        siteUrl: config.siteUrl,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-sass`
        },
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`,
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-emoji`,
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                        options: {
                            ignoreFileExtensions: []
                        }
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                        }
                    }
                ]
            }
        },
        /*{
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: config.googleAnalyticsID,
                head: true,
                anonymize: true,
                respectDNT: true
            }
        },*/
        {
            resolve: `gatsby-plugin-sitemap`
        }
    ]
};
