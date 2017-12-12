import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import PostsList from 'components/PostsList'
import ArchiveHeader from 'components/ArchiveHeader'
import Cover from 'components/Cover'

class CategoryArchive extends React.Component {
  render() {
    const { title, posts } = this.props.data.contentfulCategory
    return (
      <div>
        <Helmet
          title={`${title} | ${get(
            this,
            'props.data.site.siteMetadata.title'
          )}`}
        />
        <Cover>
          <ArchiveHeader title={title} />
        </Cover>
        <PostsList posts={posts} params={{}} />
      </div>
    )
  }
}

CategoryArchive.propTypes = {
  data: PropTypes.object,
}

export default CategoryArchive

export const pageQuery = graphql`
  query CategoryArchiveQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulCategory(id: { eq: $id }) {
      title
      slug
      posts: post {
        category {
          title
          slug
        }
        title {
          title
          id
        }
        date: updatedAt
        slug
        childContentfulPostBodyTextNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
