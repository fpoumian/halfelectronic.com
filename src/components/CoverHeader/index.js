import React, { PropTypes } from "react"

import styles from "./index.pcss"

const CoverHeader = ({ children }) => {
  const { wrapper } = styles

  return (
    <header>
      <div className={wrapper}>
        {children}
      </div>
    </header>
  )
}

CoverHeader.propTypes = {
  children: PropTypes.node
}

export default CoverHeader
