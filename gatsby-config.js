module.exports = {
    siteMetadata: {
        title: 'pschild.de',
        mail: 'philippe@pschild.de',
        mobile: '0176 328 171 08',
        xingProfile: 'https://www.xing.com/profile/Philippe_Schild',
        linkedinProfile: 'https://de.linkedin.com/pub/philippe-schild/108/393/754',
        githubProfile: 'https://github.com/pschild',

        homeHeaderImagePath: './home.jpg',
        projectsHeaderImagePath: './projects.jpg',
        blogHeaderImagePath: './blog.jpg',
        imprintHeaderImagePath: './imprint.jpg',
    },
    plugins: [
        `gatsby-plugin-sass`,
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
                            classPrefix: "language-",
                        }
                    }
                ]
            }
        }
    ]
};
