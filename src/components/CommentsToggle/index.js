import React, { PropTypes } from "react"
import CommentsIcon from "react-icons/lib/fa/comments-o"

import styles from "./index.pcss"

const CommentsToggle = ({ onClick, open }) => {
  const label = open ? "Comments" : "View Comments"

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles["label-wrapper"]}>
        <CommentsIcon className={styles["comments-icon"]} />
        <span className={styles.label}>
          {label}
        </span>
      </div>
    </div>
  )
}

CommentsToggle.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool
}

CommentsToggle.defaultProps = {}

export default CommentsToggle
