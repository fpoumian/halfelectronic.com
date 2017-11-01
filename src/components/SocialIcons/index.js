import React, { PropTypes } from "react"
const reactShare = typeof window !== "undefined" ? require("react-share") : null

import styles from "./index.pcss"

const SocialIcons = ({ url }) => {
  if (!reactShare) return null

  const { ShareButtons, generateShareIcon } = reactShare

  const {
    FacebookShareButton,
    TwitterShareButton,
    GooglePlusShareButton,
    LinkedinShareButton
  } = ShareButtons
  const FacebookIcon = generateShareIcon("facebook")
  const TwitterIcon = generateShareIcon("twitter")
  const GooglePlusIcon = generateShareIcon("google")
  const LinkedinIcon = generateShareIcon("linkedin")

  const iconProps = {
    size: 35,
    round: true
  }

  return (
    <div className={styles.wrapper}>
      <FacebookShareButton url={url} className={styles.icon}>
        <FacebookIcon {...iconProps} />
      </FacebookShareButton>
      <TwitterShareButton url={url} className={styles.icon}>
        <TwitterIcon {...iconProps} />
      </TwitterShareButton>
      <GooglePlusShareButton url={url} className={styles.icon}>
        <GooglePlusIcon {...iconProps} />
      </GooglePlusShareButton>
      <LinkedinShareButton url={url} className={styles.icon}>
        <LinkedinIcon {...iconProps} />
      </LinkedinShareButton>
    </div>
  )
}

SocialIcons.propTypes = {
  url: PropTypes.string
}

export default SocialIcons
