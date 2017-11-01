import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"
import styles from "./index.pcss"

const ContentBody = ({ body }) =>
  <section className={styles.wrapper}>
    <BodyContainer>
      {body}
    </BodyContainer>
  </section>

ContentBody.propTypes = {
  body: PropTypes.string,
  isLoading: PropTypes.bool
}

export default ContentBody
