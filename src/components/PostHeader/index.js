import React from 'react'
import PropTypes from 'prop-types'

import Tag from 'components/Tag'
import CoverHeader from 'components/CoverHeader'
import PageTitle from 'components/PageTitle'

const PostHeader = props => {
  const { title, excerpt } = props

  return (
    <CoverHeader {...props}>
      <Tag
        label={props.category.title}
        link={`/category/${props.category.slug}`}
        bgStyle="dark"
      />
      <PageTitle>{title}</PageTitle>
      <p className="excerpt">{excerpt}</p>
    </CoverHeader>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  category: PropTypes.object,
}

export default PostHeader
