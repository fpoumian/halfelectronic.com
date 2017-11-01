const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)
const browserslist = require('browserslist')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      })
    )
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.merge({
        postcss(wp) {
          return [
            require(`postcss-import`)({ addDependencyTo: wp }),
            require(`postcss-cssnext`)({
              browsers: 'last 2 versions',
              features: {
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
                    contentFontSize: '1.1rem',
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
              },
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
            features: {
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
                  contentFontSize: '1.1rem',
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
            },
          }),
        ],
      })
      return config
  }
}
