import React from "react"

import { FaGithub, FaTwitterSquare, FaQuestionCircle } from "react-icons/lib/fa"
import styles from "./index.pcss"

const SidebarSocialWidget = () => {
  return (
    <div className={styles.root}>
      <hr className={styles.divider} />
      <div className={styles.icons}>
        <a href="#">
          <FaGithub className={styles.icon} />
        </a>
        <a href="#">
          <FaTwitterSquare className={styles.icon} />
        </a>
        <a href="#">
          <FaQuestionCircle className={styles.icon} />
        </a>
      </div>
    </div>
  )
}

SidebarSocialWidget.propTypes = {}

export default SidebarSocialWidget
