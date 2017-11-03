import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

// TODO: Make sure a font-family is explicitly set for this component
const Book = ({ title, link, author }) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>
        <a target="_blank" href={link}>
          <span>{title}</span>
        </a>
      </span>
      <span className={styles.by}>by:</span>
      <span className={styles.author}>{author}</span>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Book
