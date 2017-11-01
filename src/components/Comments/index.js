import React, { PropTypes } from "react"

import CommentsToggle from "components/CommentsToggle"
import CommentsItems from "components/CommentsItems"

const Comments = ({ open, onToggleClick, url, title }) => {
  return (
    <section>
      <CommentsToggle onClick={onToggleClick} open={open} />
      {open && <CommentsItems open={open} url={url} title={title} />}
    </section>
  )
}

Comments.propTypes = {
  open: PropTypes.bool,
  onToggleClick: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string
}

export default Comments
