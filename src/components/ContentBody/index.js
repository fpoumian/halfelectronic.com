import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lozard from 'lozad'
import mediumZoom from 'medium-zoom'
import componentStyles from './index.module.css'

if (typeof windows !== 'undefined' && typeof document !== 'undefined') {
  require('intersection-observer')
}

class ContentBody extends Component {
  componentDidMount() {
    lozard().observe()
    mediumZoom(document.querySelectorAll('.content-body img'))
  }

  render() {
    return (
      <section
        style={this.props.style ? { ...this.props.style } : {}}
        className={componentStyles.wrapper + ' ' + 'content-body'}
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
    )
  }
}

ContentBody.propTypes = {
  body: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ContentBody
