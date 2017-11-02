import React, { PropTypes } from 'react'

import PagePreview from 'components/PagePreview'
import NoPosts from 'components/NoPosts'

import styles from './index.module.css'

const PostsList = ({ posts, params }) => {
  function renderPostPreviews() {
    return posts.map(post => (
      <li key={post.node.title.id}>
        <PagePreview
          {...post.node}
          title={post.node.title.title}
          excerpt={post.node.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt}
          params={params}
          tags={['tag1', 'tag2']}
        />
      </li>
    ))
  }

  return (
    <section id="posts-list">
      {posts.length > 0 ? (
        <ul className={styles.list}>{renderPostPreviews()}</ul>
      ) : (
        <NoPosts />
      )}
    </section>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  params: PropTypes.object,
}

export default PostsList
