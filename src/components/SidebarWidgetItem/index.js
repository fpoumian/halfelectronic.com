import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const SidebarWidgetItem = ({ children, lastItem }) => {
  return (
    <div
      className={styles.root}
      style={{ borderBottom: lastItem ? 'none' : '' }}
    >
      {cloneElement(children)}
    </div>
  )
}

SidebarWidgetItem.propTypes = {
  children: PropTypes.element.isRequired,
  lastItem: PropTypes.bool,
}
SidebarWidgetItem.defaultProps = {
  lastItem: false,
}

export default SidebarWidgetItem
