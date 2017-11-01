import React, { PropTypes } from "react"
import { joinUri } from "phenomic"

import Tag from "components/Tag"
import Container from "components/Container"
import SocialIcons from "components/SocialIcons"
import { getTagURL, normalizeTagForLabel } from "utils/tags"
import styles from "./index.pcss"

const PostBottom = ({ tags, url }) => {
  const secondaryTags = tags.length > 1 ? tags.slice(1) : null
  const mainTag = tags[0]
  const permalink = joinUri(process.env.PHENOMIC_USER_URL, url)

  function generateSecondaryTagsComponents() {
    return secondaryTags.map((tag, index) =>
      <Tag
        key={index}
        label={normalizeTagForLabel(tag)}
        link={getTagURL(tag)}
        bgStyle="light"
      />
    )
  }

  return (
    <Container style={{ marginTop: "4vh", marginBottom: "8vh" }}>
      <div className={styles.tags}>
        {secondaryTags &&
          <div className={styles["secondary-tags"]}>
            {generateSecondaryTagsComponents()}
          </div>}
        <div className={styles["main-tag"]}>
          <Tag
            label={normalizeTagForLabel(mainTag)}
            link={getTagURL(mainTag)}
            bgStyle="dark"
          />
        </div>
      </div>
      <div className={styles.share}>
        <div className={styles.permalink}>
          <a href={url}>{`Permalink: ${permalink}`}</a>
        </div>
        <div className={styles["share-icons"]}>
          <div>
            <span className={styles["share-label"]}>Share:</span>
          </div>
          <SocialIcons url={permalink} />
        </div>
      </div>
    </Container>
  )
}

PostBottom.propTypes = {
  tags: PropTypes.array,
  url: PropTypes.string
}

export default PostBottom
