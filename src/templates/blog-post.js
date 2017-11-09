import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import urlJoin from 'url-join'

import ContentBody from 'components/ContentBody'
import PostHeader from 'components/PostHeader'
import PostBottom from 'components/PostBottom'
import Container from 'components/Container'
import CommentsContainer from 'containers/CommentsContainer'
import Cover from 'components/Cover'

import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const postPermalink = urlJoin(siteUrl, 'post', post.slug)
    const head = {
      featured: false,
      title: 'This is the title',
    }

    return (
      <div>
        <Helmet title={`${post.title.title} | ${siteTitle}`} />
        <Cover
          bgImage={''}
          bgStyle={'dark'}
          title={post.title.title}
          excerpt={'excerpt'}
        >
          <PostHeader
            title={post.title.title}
            excerpt={''}
            bgStyle={'dark'}
            category={post.category}
          />
        </Cover>
        <Container style={{ marginTop: '8vh', marginBottom: '4vh' }}>
          {head.featured && (
            <div className={styles['featured-img']}>
              <img
                src={head.featured}
                width="696"
                alt={head.title}
                title={'encodedTitle'}
              />
            </div>
          )}
          <ContentBody
            body={post.childContentfulPostBodyTextNode.childMarkdownRemark.html}
            isLoading={false}
          />
          <div className={styles.date}>{`Published on: ${new Date(
            post.date
          ).toDateString()}`}</div>
        </Container>

        <PostBottom
          tags={[...post.tag]}
          url={postPermalink}
          category={post.category}
        />

        <CommentsContainer
          url={postPermalink}
          title={post.title.title}
          slug={post.slug}
        />
      </div>
    )
  }
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
}

// Use GraphQL to query specific post using the slug
// we passed in the context object in gatsby-node.js
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title {
        title
      }
      category {
        title
        slug
      }
      tag {
        title
        slug
      }
      date: updatedAt
      slug
      childContentfulPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
