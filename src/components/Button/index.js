import React, { PropTypes } from "react"
import { Link } from "phenomic"
import styles from "./index.module.css"

const Button = ({ children, link }) =>
  <div>
    <Link to={link}>
      <span className={styles.button}>
        {children}
      </span>
    </Link>
  </div>

Button.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string
}

export default Button
