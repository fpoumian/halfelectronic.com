import React from "react"
import PropTypes from "prop-types"
import FaAngleDown from "react-icons/lib/fa/angle-down"
import FaAngleUp from "react-icons/lib/fa/angle-up"

import styles from "./index.module.css"

const SidebarMenuCollapsible = ({ isOpen, children, label, onClick }) => {
  return (
    <div className={styles.root}>
      <div className={styles["label-wrapper"]} onClick={onClick}>
        <span className={styles.label}>
          {label}
        </span>
        <span className={styles.arrow}>
          {isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      <div
        className={styles["collapsed-content"]}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  )
}

SidebarMenuCollapsible.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  label: PropTypes.string,
  onClick: PropTypes.func,
  loaded: PropTypes.bool
}
export default SidebarMenuCollapsible
