import React, { Component } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

import styles from './index.module.css'
import ReactDisqusThread from 'react-disqus-thread'

const scrollToElement =
  typeof window !== 'undefined' ? require('scroll-to-element') : null

class CommentsItems extends Component {
  constructor(props, { metadata }) {
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
          <ReactDisqusThread
            shortname={get(
              this.props,
              'data.site.siteMetadata.disqus.shortname',
              'undefined'
            )}
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

CommentsItems.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default CommentsItems

// export const pageQuery = graphql`
//   query DisqusMetadata {
//     site {
//       siteMetadata {
//         disqus {
//           shortname
//         }
//       }
//     }
//   }
// `
