import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'
import coverBg from './cover-bg.jpg'

const Cover = ({ children }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${coverBg})`,
      }}
    >
      <div className={styles.header}>{children}</div>
    </section>
  )
}

Cover.propTypes = {
  children: PropTypes.node,
}

export default Cover
