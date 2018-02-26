const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators;

    let slug;
    if (node.internal.type === `MarkdownRemark`) {
        // console.log(node.frontmatter.slug, `/${_.kebabCase(node.frontmatter.title)}`);
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
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post.jsx`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug,
                    }
                })
            });
            resolve()
        })
    })
};