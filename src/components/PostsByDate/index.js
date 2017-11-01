import React, { PropTypes } from "react"

import Pagination from "components/Pagination"
import Posts from "layouts/Posts"
import PostsQuery from "lib/PostsQuery"

const PostsByDate = (props, { collection, metadata }) => {
  const { page } = props.params

  const pageNumber = typeof page !== "undefined" ? page : null

  const queryFilterFn = item => Boolean(item.layout === "Post")
  const query = new PostsQuery(
    collection,
    metadata.numberOfPosts,
    pageNumber,
    queryFilterFn
  )
  const posts = query.posts

  return (
    <div>
      <Posts
        head={{
          title: `Blog`
        }}
        posts={posts}
        params={props.params}
      />
      <Pagination query={query} baseURL={`/blog/`} />
    </div>
  )
}

PostsByDate.propTypes = {
  params: PropTypes.object
}

PostsByDate.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default PostsByDate
