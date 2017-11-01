import React, { PropTypes } from "react"
const scrollToElement =
  typeof window !== "undefined" ? require("scroll-to-element") : null

import styles from "./index.module.css"
import Tag from "components/Tag"

const HomepageHeaderButtons = ({ headingTyped }) => {
  const visibility = {
    visibility: headingTyped ? "visible" : "hidden",
    opacity: headingTyped ? "1" : "0"
  }

  const scrollToBlogSection = event => {
    if (!scrollToElement) return event
    event.preventDefault()
    scrollToElement("#posts-list")
  }

  return (
    <div className={styles.wrapper} style={visibility}>
      <Tag bgStyle="dark" label="About" link="/about" />
      <Tag
        bgStyle="light"
        label="Read Blog"
        link="#"
        onClick={scrollToBlogSection}
      />
    </div>
  )
}

HomepageHeaderButtons.propTypes = {
  headingTyped: PropTypes.bool
}

export default HomepageHeaderButtons
