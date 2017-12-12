import React from 'react'
import PropTypes from 'prop-types'

import Tag from 'components/Tag'
import ContentWrapper from 'components/ContentWrapper'
import SocialIcons from 'components/SocialIcons'
import styles from './index.module.css'

const PostBottom = ({ tags, url, category }) => {
  return (
    <ContentWrapper style={{ marginTop: '4vh', marginBottom: '8vh' }}>
      <div className={styles.tags}>
        {tags && (
          <div className={styles['secondary-tags']}>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                label={tag.title}
                link={`/tag/${tag.slug}`}
                bgStyle="light"
              />
            ))}
          </div>
        )}
        <div className={styles['main-tag']}>
          <Tag
            label={category.title}
            link={`/category/${category.slug}`}
            bgStyle="dark"
          />
        </div>
      </div>
      <div className={styles.share}>
        <div className={styles.permalink}>
          <a href={url}>{`Permalink: ${url}`}</a>
        </div>
        <div className={styles['share-icons']}>
          <div>
            <span className={styles['share-label']}>Share:</span>
          </div>
          <SocialIcons url={url} />
        </div>
      </div>
    </ContentWrapper>
  )
}

PostBottom.propTypes = {
  tags: PropTypes.array,
  url: PropTypes.string,
  category: PropTypes.object,
}

export default PostBottom
