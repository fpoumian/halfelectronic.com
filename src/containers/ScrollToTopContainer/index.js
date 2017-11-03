import React, { Component } from 'react'

import ScrollToTop from 'components/ScrollToTop'

class ScrollToTopContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: 0,
    }

    this.setScrollY = this.setScrollY.bind(this)
  }

  shouldBeVisible() {
    return this.state.scrollY > 500
  }

  setScrollY() {
    if (typeof window === 'undefined') return
    this.setState({
      scrollY: window.scrollY,
    })
  }

  componentDidMount() {
    if (typeof window === 'undefined') return
    window.addEventListener('scroll', this.setScrollY)
  }

  componentWillUnmount() {
    if (typeof window === 'undefined') return
    window.removeEventListener('scroll', this.setScrollY)
  }

  render() {
    return <ScrollToTop visible={this.shouldBeVisible()} {...this.props} />
  }
}

ScrollToTopContainer.propTypes = {}

export default ScrollToTopContainer
