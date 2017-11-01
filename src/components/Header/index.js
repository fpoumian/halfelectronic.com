import React, { PropTypes } from 'react'
import Link from 'gatsby-link'

import Logo from 'components/Logo'
import styles from './index.module.css'

const Header = () => (
  <header className={styles.header + ' ' + styles['dark-bg']}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link className={styles.link} to={'/'}>
          <Logo />
        </Link>
      </div>
    </nav>
  </header>
)

Header.contextTypes = {
  metadata: PropTypes.object,
}

export default Header
