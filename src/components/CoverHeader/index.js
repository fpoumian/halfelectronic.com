import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const CoverHeader = ({ children }) => {
  const { wrapper } = styles

  return (
    <header>
      <div className={wrapper}>{children}</div>
    </header>
  )
}

CoverHeader.propTypes = {
  children: PropTypes.node,
}

export default CoverHeader
