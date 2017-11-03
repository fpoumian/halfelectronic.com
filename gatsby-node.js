const Promise = require('bluebird')
const path = require('path')

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators

//   return new Promise((resolve, reject) => {
//     const pages = []
//     const blogPost = path.resolve('./src/templates/blog-post.js')
//     resolve(
//       graphql(
//         `
//           {
//             allMarkdownRemark(limit: 1000) {
//               edges {
//                 node {
//                   frontmatter {
//                     path
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         // Create blog posts pages.
//         _.each(result.data.allMarkdownRemark.edges, edge => {
//           createPage({
//             path: edge.node.frontmatter.path,
//             component: blogPost,
//             context: {
//               path: edge.node.frontmatter.path,
//             },
//           })
//         })
//       })
//     )
//   })
// }

// Create Posts from Contentful API
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local Contentful graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // We first query for all items of the content type Post
    // from the Contentful API
    graphql(
      `
        {
          allContentfulPost(limit: 1000) {
            edges {
              node {
                slug
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create Post pages
        const postTemplate = path.resolve('./src/templates/blog-post.js')
        // We want to create a detailed page for each blog post.
        // We'll just use the Contentful slug.
        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            // Each page is required to have a 'path' as well
            // as a template componnet.
            path: `/post/${edge.node.slug}/`,
            component: postTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
      .then(() => {
        // We then query for all the items of type Category in Contentful
        graphql(
          `
            {
              allContentfulCategory(limit: 1000) {
                edges {
                  node {
                    slug
                    id
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create Category pages
          const categoryTemplate = path.resolve('./src/templates/category.js')

          result.data.allContentfulCategory.edges.forEach(edge => {
            createPage({
              // Each page is required to have a 'path' as well
              // as a template componnet.
              path: `/category/${edge.node.slug}/`,
              component: categoryTemplate,
              context: {
                id: edge.node.id,
              },
            })
          })
        })
      })
      .then(() => {
        // We then query for all the items of type Tag in Contentful
        graphql(
          `
            {
              allContentfulTag(limit: 1000) {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }

          // Create Tag pages
          const tagTemplate = path.resolve('./src/templates/tag.js')

          result.data.allContentfulTag.edges.forEach(edge => {
            createPage({
              // Each page is required to have a 'path' as well
              // as a template componnet.
              path: `/tag/${edge.node.slug}/`,
              component: tagTemplate,
              context: {
                id: edge.node.id,
              },
            })
          })
          resolve()
        })
      })
  })
}

// Modify Webpack Config
exports.modifyWebpackConfig = ({ config, stage }) => {
  // add this to have absolute imports
  config.merge(function(current) {
    current.resolve.root = path.resolve('./src')
    return current
  })

  const features = {
    customProperties: {
      variables: {
        mainColor: 'blue',
        maxWidth: '43.5rem',
        accentColor: '#102b40',
        accentColorHover: '#009998',
        darkestGray: '#222326',
        darkGray: '#62646c',
        neutralGray: '#b2b2b2',
        lightGray: '#f6f6f6',
        lightestGray: '#f9f9f9',
        colorPrimary: '#373737',
        colorPrimaryDark: '#373737',
        colorSecondaryDark: '#080808',
        colorSecondary: '#080808',
        colorNeutralDark: '#111',
        colorNeutral: '#8C8D91',
        colorNeutralLight: '#FBFCFC',
        colorText: '#555',
        mainFontFamily: '"Varela Round", Arial, Sans-Serif',
        altFontFamily: '"Montserrat", Arial, Sans-Serif',
        contentFontFamily: '"Noto Serif","Times New Roman",Serif',
        contentFontSize: '1rem',
        contentLineHeight: '2rem',
        titleBaseFontSize: '2rem',
        titleBaseLineHeight: 'normal',
        excerptBaseFontSize: '1.1rem',
      },
    },
    customMedia: {
      extensions: {
        '--mobile-s': '(min-width: 320px)',
        '--mobile-m': '(min-width: 480px)',
        '--tablet': '(min-width: 768px)',
        '--laptop': '(min-width: 992px)',
        '--laptop-l': '(min-width: 1200px)',
        '--4K': '(min-width: 2560px)',
      },
    },
  }

  // custom postcss-next config
  switch (stage) {
    case 'develop':
      config.merge({
        postcss(wp) {
          return [
            require(`postcss-import`)({ addDependencyTo: wp }),
            require(`postcss-cssnext`)({
              browsers: 'last 2 versions',
              features,
            }),
            require(`postcss-browser-reporter`),
            require(`postcss-reporter`),
          ]
        },
      })
      return config

    case 'build-css':
      config.merge({
        postcss: [
          require(`postcss-import`)(),
          require(`postcss-cssnext`)({
            browsers: 'last 2 versions',
            features,
          }),
        ],
      })
      return config
  }
}
