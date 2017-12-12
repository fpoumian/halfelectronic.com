import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { AllHtmlEntities } from 'html-entities'

import Tag from 'components/Tag'
import ContentWrapper from 'components/ContentWrapper'
import styles from './index.module.css'

const entities = new AllHtmlEntities()

const PagePreview = ({
  slug,
  title,
  date,
  excerpt,
  category,
}) => {
  const pageDate = date ? new Date(date) : null

  return (
    <ContentWrapper>
      <article className={styles.wrapper}>
        <div className={styles.meta}>
          {
            <div className={styles.tag}>
              <Tag
                link={`category/${category.slug}`}
                bgStyle="dark"
                label={category.title}
              />
            </div>
          }
          {pageDate && (
            <div className={styles.date}>
              <time key={pageDate.toISOString()}>
                {pageDate.toDateString()}
              </time>
            </div>
          )}
        </div>
        <h2>
          <Link to={`/post/` + slug} className={styles.title}>
            {entities.decode(title)}
          </Link>
        </h2>
        <div className={styles.description}>
          <p>{excerpt}</p>
        </div>
      </article>
    </ContentWrapper>
  )
}

PagePreview.propTypes = {
  params: PropTypes.object,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  category: PropTypes.object,
  tags: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
  ]),
}

export default PagePreview
