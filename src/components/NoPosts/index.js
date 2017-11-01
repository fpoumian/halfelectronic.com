import React from "react"

import styles from "./index.module.css"

const NoPosts = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Seems like there are not any other posts available at this time.</h2>
    </div>
  )
}

NoPosts.propTypes = {}

export default NoPosts
