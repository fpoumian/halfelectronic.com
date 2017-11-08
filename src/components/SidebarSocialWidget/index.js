import React from 'react'

import FaGithub from 'react-icons/lib/fa/github.js'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square.js'
import styles from './index.module.css'

const SidebarSocialWidget = () => {
  return (
    <div className={styles.root}>
      <hr className={styles.divider} />
      <span>Find me on:</span>
      <div className={styles.icons}>
        <a href="https://github.com/fpoumian" target="__blank">
          <FaGithub className={styles.icon} />
        </a>
        <a href="https://twitter.com/fernandopoumian" target="__blank">
          <FaTwitterSquare className={styles.icon} />
        </a>
      </div>
    </div>
  )
}

SidebarSocialWidget.propTypes = {}

export default SidebarSocialWidget
