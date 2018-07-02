const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
      {
        allWordpressPost(
            limit: 1000
        ) {
          edges {
            node {
              slug
            }
          }
        }
      }
      `).then(result => {
        result.data.allWordpressPost.edges.forEach(({ node }) => {
            createPage({
              path: node.slug,
              component: path.resolve(`./src/templates/post.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.slug,
              },
            })
          })
        resolve()
      })
    })
  };