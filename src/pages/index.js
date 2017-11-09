import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import PostsList from 'components/PostsList'
import HomePageHeaderContainer from 'containers/HomePageHeaderContainer'
import Cover from 'components/Cover'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPost.edges').map(
      post => post.node
    )

    return (
      <div>
        <Helmet
          title={`Home | ${get(this, 'props.data.site.siteMetadata.title')}`}
        />
        <Cover bgImage="/assets/header-bg.jpg">
          <HomePageHeaderContainer {...this.props} />
        </Cover>
        <PostsList posts={posts} params={{}} />
      </div>
    )
  }
}

BlogIndex.propTypes = {}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          tag {
            title
            slug
          }
          category {
            slug
            title
          }
          childContentfulPostBodyTextNode {
            childMarkdownRemark {
              excerpt
              html
            }
          }
          title {
            id
            title
          }
          date: updatedAt
          slug
        }
      }
    }
  }
`
