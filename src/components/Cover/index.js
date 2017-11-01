import React, { PropTypes } from "react"

import styles from "./index.pcss"

const Cover = ({ children }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(/assets/cover-bg.jpg)`
      }}
    >
      <div className={styles.header}>
        {children}
      </div>
    </section>
  )
}

Cover.propTypes = {
  children: PropTypes.node
}

Cover.defaultProps = {}

export default Cover
