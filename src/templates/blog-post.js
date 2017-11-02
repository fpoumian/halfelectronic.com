import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import path from 'path'

import Bio from 'components/Bio'
import ContentBody from 'components/ContentBody'
import PostHeader from 'components/PostHeader'
import PostBottom from 'components/PostBottom'
import Container from 'components/Container'
import CommentsContainer from 'containers/CommentsContainer'
import Cover from 'components/Cover'

import { rhythm, scale } from '../utils/typography'
import styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulPost
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const postPermalink = path.join(siteUrl, 'post', post.slug)
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
            tags={['tag1', 'tag2']}
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
          <div className={styles.date}>{`Published on: ${post.date}`}</div>
        </Container>

        <PostBottom tags={['tag1', 'tag2']} url={postPermalink} />

        <CommentsContainer url={'/path'} title={post.title.title} />
      </div>
    )
  }
}

export default BlogPostTemplate

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
      date
      slug
      childContentfulPostBodyTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
