import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from 'components/Bio'
import PostsList from 'components/PostsList'
import ArchiveHeader from 'components/ArchiveHeader'
import HomePageHeaderContainer from 'containers/HomePageHeaderContainer'
import Cover from 'components/Cover'

import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPost.edges').map(
      post => post.node
    )

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Cover bgImage="/assets/header-bg.jpg">
          <HomePageHeaderContainer {...this.props} />
        </Cover>
        <PostsList
          posts={posts}
          params={{}}
          tags={[{ title: 'Tag 1', slug: 'tag-1' }]}
        />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const BlogIndexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
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
          date
          slug
        }
      }
    }
  }
`
