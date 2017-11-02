import React, { PropTypes } from 'react'

import PagePreview from 'components/PagePreview'
import NoPosts from 'components/NoPosts'

import styles from './index.module.css'

const PostsList = ({ posts, params, tags }) => {
  function renderPostPreviews() {
    return posts.map(post => (
      <li key={post.title.id}>
        <PagePreview
          {...post}
          title={post.title.title}
          excerpt={
            post.childContentfulPostBodyTextNode.childMarkdownRemark.excerpt
          }
          params={params}
          tags={tags}
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
