import React from 'react'
import PropTypes from 'prop-types'
import CommentsIcon from 'react-icons/lib/fa/comments-o'

import styles from './index.module.css'

const CommentsToggle = ({ onClick, open }) => {
  const label = open ? 'Comments' : 'View Comments'

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div className={styles['label-wrapper']}>
        <CommentsIcon className={styles['comments-icon']} />
        <span className={styles.label}>{label}</span>
      </div>
    </div>
  )
}

CommentsToggle.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
}

CommentsToggle.defaultProps = {}

export default CommentsToggle
