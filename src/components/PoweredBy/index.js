import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const PoweredBy = ({ url, logo, name }) => {
  return (
    <div className={styles.root}>
      <span className={styles['powered-by']}>Powered by: </span>
      <a href={url} target="_blank">
        <img src={logo} alt={name} width="100" />
      </a>
    </div>
  )
}

PoweredBy.propTypes = {
  url: PropTypes.string,
  logo: PropTypes.node,
  name: PropTypes.string,
}

export default PoweredBy
