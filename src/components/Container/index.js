import React, { PropTypes } from "react"
import styles from "./index.module.css"

const Container = ({ children, style }) => {
  return (
    <div className={styles.wrapper} style={style || {}}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}
Container.defaultProps = {}

export default Container
