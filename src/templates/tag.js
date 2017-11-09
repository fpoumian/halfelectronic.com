import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import PostsList from 'components/PostsList'
import ArchiveHeader from 'components/ArchiveHeader'
import Cover from 'components/Cover'

class TagArchive extends React.Component {
  render() {
    const { title, post } = this.props.data.contentfulTag
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
        <PostsList posts={post} params={{}} />
      </div>
    )
  }
}

TagArchive.propTypes = {
  data: PropTypes.object,
}

export default TagArchive

export const pageQuery = graphql`
  query TagArchiveQuery($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulTag(id: { eq: $id }) {
      title
      slug
      post {
        tag {
          title
          slug
        }
        category {
          slug
          title
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
