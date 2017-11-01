import React, { PropTypes } from "react"

import styles from "./index.pcss"

const RootContainer = props =>
  <div className={styles.container}>
    {props.children}
  </div>

RootContainer.propTypes = {
  children: PropTypes.node
}

export default RootContainer
