import React, { PropTypes } from 'react'
import styles from './index.module.css'

const ContentBody = ({ body }) => (
  <section
    className={styles.wrapper}
    dangerouslySetInnerHTML={{ __html: body }}
  />
)

ContentBody.propTypes = {
  body: PropTypes.string,
  isLoading: PropTypes.bool,
}

export default ContentBody
