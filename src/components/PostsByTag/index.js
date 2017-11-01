import React, { PropTypes } from "react"

import Pagination from "components/Pagination"
import Posts from "layouts/Posts"
import PostsQuery from "lib/PostsQuery"

const PostsByTag = (props, { collection }) => {
  const { tag, page } = props.params

  const pageNumber = typeof page !== "undefined" ? page : null

  const queryFilterFn = item =>
    Boolean(
      item.layout === "Post" &&
        item.hasOwnProperty("tags") &&
        (item.tags && item.tags.indexOf(tag) > -1)
    )
  const query = new PostsQuery(collection, 2, pageNumber, queryFilterFn)
  const posts = query.posts

  return (
    <div>
      <Posts
        head={{
          title: `Posts tagged with "${tag}"`
        }}
        posts={posts}
        params={props.params}
      />
      <Pagination query={query} baseURL={`/tag/${tag}`} />
    </div>
  )
}

PostsByTag.propTypes = {
  params: PropTypes.object
}

PostsByTag.contextTypes = {
  collection: PropTypes.array.isRequired,
  metadata: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default PostsByTag
