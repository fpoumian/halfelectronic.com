import React, { PropTypes } from "react"
import styles from "./index.pcss"
import ArrowUpIcon from "react-icons/lib/fa/arrow-circle-o-up"
const scrollToElement =
  typeof window !== "undefined" ? require("scroll-to-element") : null

const ScrollToTop = ({ visible }) => {
  const inline = {
    opacity: visible ? 1 : 0,
    visibility: visible ? "visible" : "hidden"
  }

  return (
    <div
      onClick={() => scrollToElement("#phenomic")}
      className={styles.root}
      style={inline}
    >
      <ArrowUpIcon className={styles.icon} />
    </div>
  )
}

ScrollToTop.propTypes = {
  visible: PropTypes.bool.isRequired
}

export default ScrollToTop
