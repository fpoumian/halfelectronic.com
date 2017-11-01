import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const PageTitle = ({ children }) => {
  return (
    <h1 className={styles.root}>
      {children}
    </h1>
  )
}

PageTitle.propTypes = {
  children: PropTypes.node
}

export default PageTitle
