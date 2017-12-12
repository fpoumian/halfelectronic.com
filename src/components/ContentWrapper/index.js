import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'

const ContentWrapper = ({ children, style }) => {
  return (
    <div className={styles.wrapper} style={style || {}}>
      {children}
    </div>
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
}
ContentWrapper.defaultProps = {}

export default ContentWrapper
