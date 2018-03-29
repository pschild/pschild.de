const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    let slug;
    if (node.internal.type === `MarkdownRemark` && node.frontmatter.layout !== `timeline`) {
        // console.log(node.frontmatter.layout, `/${_.kebabCase(node.frontmatter.title)}`);
        if (node.frontmatter.slug) {
            slug = `/${node.frontmatter.slug}/`;
        } else if (node.frontmatter.title) {
            slug = `/${_.kebabCase(node.frontmatter.title)}/`;
        } else {
            slug = createFilePath({ node, getNode, basePath: `pages` });
        }

        // console.log(`slug: ${slug}`);

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    layout
                    draft
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
        ).then(result => {
            // console.log(JSON.stringify(result, null, 4));
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                if (node.frontmatter.layout === 'post' && node.frontmatter.draft !== 'yes') {
                    createPage({
                        path: `blog${node.fields.slug}`,
                        component: path.resolve(`./src/templates/blog-post.jsx`),
                        context: {
                            slug: node.fields.slug,
                        }
                    })

                } else if (node.frontmatter.layout === 'project') {
                    createPage({
                        path: `projects${node.fields.slug}`,
                        component: path.resolve(`./src/templates/project.jsx`),
                        context: {
                            slug: node.fields.slug,
                        }
                    })

                }
            });
            resolve()
        })
    })
};