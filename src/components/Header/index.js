import React, { PropTypes } from "react"
import { Link } from "phenomic"

import Logo from "components/Logo"
import styles from "./index.pcss"

const Header = () =>
  <header className={styles.header + " " + styles["dark-bg"]}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link className={styles.link} to={"/"}>
          <Logo />
        </Link>
      </div>
    </nav>
  </header>

Header.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default Header
