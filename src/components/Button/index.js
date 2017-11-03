import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './index.module.css'

const Button = ({ children, link }) => (
  <div>
    <Link to={link}>
      <span className={styles.button}>{children}</span>
    </Link>
  </div>
)

Button.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
}

export default Button
