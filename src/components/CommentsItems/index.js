import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import ReactDisqusComments from 'react-disqus-comments'

const scrollToElement =
  typeof window !== 'undefined' ? require('scroll-to-element') : null

class CommentsItems extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    if (scrollToElement) {
      scrollToElement('#comments-list')
    }
  }

  render() {
    const { open, url, title, slug } = this.props
    return (
      <div
        id="comments-list"
        className={styles.wrapper + ' ' + styles[open ? 'open' : 'closed']}
      >
        {open && (
          <ReactDisqusComments
            shortname={`halfelectronic-com`}
            identifier={slug}
            title={title}
            url={url}
          />
        )}
      </div>
    )
  }
}

CommentsItems.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default CommentsItems
