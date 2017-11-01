import React from "react"
import PropTypes from "prop-types"

import styles from "./index.module.css"

const SidebarMenuItem = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

SidebarMenuItem.propTypes = {
  children: PropTypes.element
}

export default SidebarMenuItem
