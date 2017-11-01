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

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Cover bgImage="/assets/header-bg.jpg">
          <HomePageHeaderContainer {...this.props} />
        </Cover>
        <PostsList posts={posts} params={{}} />
      </div>
    )
  }
}

About.propTypes = {
  route: React.PropTypes.object,
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
