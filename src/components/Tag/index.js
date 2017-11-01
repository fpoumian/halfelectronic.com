import React, { PropTypes } from "react"
import Link from "gatsby-link"
import styles from "./index.module.css"

const Tag = ({ link, label, bgStyle, onClick }) => {
  return (
    <div className={styles.wrapper + " " + styles[bgStyle]}>
      <Link to={link} className={styles.tag} onClick={onClick ? onClick : null}>
        {label}
      </Link>
    </div>
  )
}

Tag.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  bgStyle: PropTypes.string,
  onClick: PropTypes.func
}

export default Tag
