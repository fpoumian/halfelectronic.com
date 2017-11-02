import React, { PropTypes } from "react"
import Link from "gatsby-link"
import { AllHtmlEntities } from 'html-entities'

import Tag from "components/Tag"
import Container from "components/Container"
import styles from "./index.module.css"
import { getMainTag, getTagURL, normalizeTagForLabel } from "utils/tags"

const entities = new AllHtmlEntities()

const PagePreview = ({ slug, title , date, excerpt, tags, params }) => {
  const pageDate = date ? new Date(date) : null
  const mainTag =
    params && typeof params.tag !== "undefined" ? params.tag : getMainTag(tags)
  return (
    <Container>
      <article className={styles.wrapper}>
        <div className={styles.meta}>
          {
            <div className={styles.tag}>
              <Tag
                link={getTagURL(mainTag)}
                bgStyle="dark"
                label={normalizeTagForLabel(mainTag)}
              />
            </div>
          }
          {pageDate &&
            <div className={styles.date}>
              <time key={pageDate.toISOString()}>
                {pageDate.toDateString()}
              </time>
            </div>}
        </div>
        <h2>
          <Link to={`/post/` + slug} className={styles.title}>
            {entities.decode(title)}
          </Link>
        </h2>
        <div className={styles.description}>
          <p>{excerpt}</p>{" "}
        </div>
      </article>
    </Container>
  )
}

PagePreview.propTypes = {
  params: PropTypes.object,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export default PagePreview
