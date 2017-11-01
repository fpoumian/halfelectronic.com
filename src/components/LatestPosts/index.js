import React, { PropTypes } from "react"
import PostsQuery from "lib/PostsQuery"

import PostsList from "components/PostsList"

const LatestPosts = (props, { collection }) => {
  const queryFilterFn = item => item.layout === "Post"
  const query = new PostsQuery(collection, 3, null, queryFilterFn)
  const latestPosts = query.posts

  return (
    <div>
      <PostsList posts={latestPosts} />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired
}

export default LatestPosts
