import React, { PropTypes } from "react"

import PagePreview from "components/PagePreview"
import NoPosts from "components/NoPosts"

import styles from "./index.pcss"

const PostsList = ({ posts, params }) => {
  function renderPostPreviews() {
    return posts.map(post =>
      <li key={post.title}>
        <PagePreview {...post} params={params} />
      </li>
    )
  }

  return (
    <section id="posts-list">
      {posts.length > 0
        ? <ul className={styles.list}>
            {renderPostPreviews()}
          </ul>
        : <NoPosts />}
    </section>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  params: PropTypes.object
}

export default PostsList
