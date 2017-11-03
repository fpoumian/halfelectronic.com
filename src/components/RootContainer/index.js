import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const RootContainer = props => (
  <div className={styles.container}>{props.children}</div>
)

RootContainer.propTypes = {
  children: PropTypes.node,
}

export default RootContainer
