import React from 'react'
import PropTypes from 'prop-types'

import PagePreview from 'components/PagePreview'
import NoPosts from 'components/NoPosts'

import styles from './index.module.css'

const PostsList = ({ posts, params }) => {
  if (!posts || !posts.hasOwnProperty('length')) {
    return <NoPosts />
  }

  return (
    <div>
      <section id="posts-list">
        {posts.length > 0 ? (
          <ul className={styles.list}>
            {posts.map(post => (
              <li key={post.title.id}>
                <PagePreview
                  {...post}
                  title={post.title.title}
                  excerpt={
                    post.childContentfulPostBodyTextNode.childMarkdownRemark
                      .excerpt
                  }
                  params={params}
                  tags={[...post.tag]}
                  category={post.category}
                />
              </li>
            ))}
          </ul>
        ) : (
          <NoPosts />
        )}
      </section>
    </div>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  params: PropTypes.object,
}

export default PostsList
