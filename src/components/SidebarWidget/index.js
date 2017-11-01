import React, { cloneElement } from "react"
import PropTypes from "prop-types"

import PoweredBy from "components/PoweredBy"
import styles from "./index.pcss"

const SidebarWidget = ({ children, poweredBy }) => {
  return (
    <div className={styles.root}>
      {cloneElement(children)}
      {poweredBy &&
        <PoweredBy
          name={poweredBy.name}
          logo={poweredBy.logo}
          url={poweredBy.url}
        />}
    </div>
  )
}

SidebarWidget.propTypes = {
  children: PropTypes.element.isRequired,
  poweredBy: PropTypes.shape({
    logo: PropTypes.node,
    url: PropTypes.string,
    name: PropTypes.string
  })
}
SidebarWidget.defaultProps = {}

export default SidebarWidget
