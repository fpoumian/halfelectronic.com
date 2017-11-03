import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './index.module.css'

const Logo = ({ lightBg, big, animated }) => {
  // expressed in REM units
  const lettersBaseFontSize = 1.6
  const lettersFontSize = big ? lettersBaseFontSize * 2 : lettersBaseFontSize
  const dotFontSize = lettersFontSize + 0.9

  const lettersClassName = {
    [styles.letters]: true,
    [styles['light-bg']]: lightBg,
  }

  const hiddenLettersClassName = {
    [styles['animated-letters']]: animated,
    [styles['hidden-letters']]: !animated,
  }

  return (
    <div className={styles.root}>
      <span
        className={cx({ ...lettersClassName })}
        style={{ fontSize: `${lettersFontSize}rem` }}
      >
        <span>&frac12;e</span>
        <span className={cx({ ...hiddenLettersClassName })}>lectronic</span>
      </span>
      <span className={styles.dot} style={{ fontSize: `${dotFontSize}rem` }}>
        .
      </span>
    </div>
  )
}

Logo.propTypes = {
  lightBg: PropTypes.bool,
  big: PropTypes.bool,
  animated: PropTypes.bool,
}

Logo.defaultProps = {
  lightBg: false,
  big: false,
}

export default Logo
