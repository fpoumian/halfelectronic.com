import React, { PropTypes, Component } from "react"

import styles from "./index.pcss"
import ReactDisqusThread from "react-disqus-thread"
import { slugify } from "utils/urls"

const scrollToElement =
  typeof window !== "undefined" ? require("scroll-to-element") : null

class CommentsItems extends Component {
  constructor(props, { metadata }) {
    super(props)
    this.props = props
    this.metadata = metadata
  }

  componentDidMount() {
    if (scrollToElement) {
      scrollToElement("#comments-list")
    }
  }

  render() {
    const { open, url, title } = this.props
    const { shortname } = this.metadata.disqus
    return (
      <div
        id="comments-list"
        className={styles.wrapper + " " + styles[open ? "open" : "closed"]}
      >
        {open &&
          <ReactDisqusThread
            shortname={shortname}
            identifier={slugify(title)}
            title={title}
            url={url}
          />}
      </div>
    )
  }
}

CommentsItems.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

CommentsItems.contextTypes = {
  metadata: PropTypes.object.isRequired
}

export default CommentsItems
