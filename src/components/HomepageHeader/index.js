import React, { PropTypes } from "react"
import Typist from "react-typist"

import CoverHeader from "components/CoverHeader"
import HomePageHeaderButtons from "components/HomepageHeaderButtons"
import PageTitle from "components/PageTitle"
import styles from "./index.pcss"

const HomepageHeader = props => {
  const { wrapper } = styles
  const { onHeadingTyped, typed } = props

  return (
    <CoverHeader {...props}>
      <section className={wrapper}>
        <PageTitle>
          <Typist onTypingDone={onHeadingTyped}>Welcome to my blog!</Typist>
        </PageTitle>
        <HomePageHeaderButtons headingTyped={typed} />
      </section>
    </CoverHeader>
  )
}

HomepageHeader.propTypes = {
  head: PropTypes.object.isRequired,
  onHeadingTyped: PropTypes.func,
  typed: PropTypes.bool
}

export default HomepageHeader
