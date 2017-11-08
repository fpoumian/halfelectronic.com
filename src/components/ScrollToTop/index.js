import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import ArrowUpIcon from 'react-icons/lib/fa/arrow-circle-o-up'
let scrollToElement

class ScrollToTop extends Component {
  componentDidMount() {
    scrollToElement =
      typeof window !== 'undefined' ? require('scroll-to-element') : null
  }

  render() {
    const inline = {
      opacity: this.props.visible ? 1 : 0,
      visibility: this.props.visible ? 'visible' : 'hidden',
    }
    return (
      <div
        onClick={() => scrollToElement('#___gatsby')}
        className={styles.root}
        style={inline}
      >
        <ArrowUpIcon className={styles.icon} />
      </div>
    )
  }
}

ScrollToTop.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default ScrollToTop
