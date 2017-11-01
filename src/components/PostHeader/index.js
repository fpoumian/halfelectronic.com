import React, { PropTypes } from "react"

import Tag from "components/Tag"
import CoverHeader from "components/CoverHeader"
import PageTitle from "components/PageTitle"
import { getMainTag, normalizeTagForLabel, getTagURL } from "utils/tags"

const PostHeader = props => {
  const { title, excerpt, tags } = props
  const mainTag = getMainTag(tags)

  return (
    <CoverHeader {...props}>
      <Tag
        label={normalizeTagForLabel(mainTag)}
        link={getTagURL(mainTag)}
        bgStyle="dark"
      />
      <PageTitle>
        {title}
      </PageTitle>
      <p className="excerpt">
        {excerpt}
      </p>
    </CoverHeader>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  tags: PropTypes.array
}

export default PostHeader
