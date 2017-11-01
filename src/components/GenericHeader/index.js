import React, { PropTypes } from "react"
import Typist from "react-typist"

import CoverHeader from "components/CoverHeader"
import styles from "./index.pcss"

const GenericHeader = props => {
  const { wrapper, heading } = styles
  const { title } = props

  return (
    <CoverHeader {...props}>
      <section className={wrapper}>
        <h1 className={heading}>
          <Typist>
            {title}
          </Typist>
        </h1>
      </section>
    </CoverHeader>
  )
}

GenericHeader.propTypes = {
  title: PropTypes.string
}

export default GenericHeader
