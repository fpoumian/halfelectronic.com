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

class TagArchive extends React.Component {
  render() { 
    const { title, slug, post } = this.props.data.contentfulTag
    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Cover bgImage="/assets/header-bg.jpg">
          <HomePageHeaderContainer {...this.props} />
        </Cover>
        <PostsList
          posts={post}
          params={{}}
          tags={[{ title: 'Tag 1', slug: 'tag-1' }]}
        />
      </div>
    )
  }
}

TagArchive.propTypes = {
  route: React.PropTypes.object,
}

export default TagArchive

export const TagArchiveQuery = graphql`
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
        title {
          title
          id
        }
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
