import React from 'react'
import PropTypes from 'prop-types'
import CommentsToggle from 'components/CommentsToggle'
import CommentsItems from 'components/CommentsItems'

const Comments = ({ open, onToggleClick, url, slug, title }) => {
  return (
    <section>
      <CommentsToggle onClick={onToggleClick} open={open} />
      {open && (
        <CommentsItems open={open} url={url} title={title} slug={slug} />
      )}
    </section>
  )
}

Comments.propTypes = {
  open: PropTypes.bool,
  onToggleClick: PropTypes.func,
  url: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
}

export default Comments
