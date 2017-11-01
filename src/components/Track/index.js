import React from "react"
import PropTypes from "prop-types"
import distanceInWordsStrict from "date-fns/distance_in_words_strict"

import SoundBars from "components/SoundBars"
import styles from "./index.module.css"

const getDistanceFromNow = dateToCompare =>
  distanceInWordsStrict(new Date(), dateToCompare)

const Track = ({ name, artist, timestamp, nowPlaying }) => {
  return (
    <section className={styles.root}>
      <div className={styles.info}>
        <div>
          <span className={styles.label}>Track: </span>
          <span className={styles.name}>
            {name}
          </span>
        </div>
        <div>
          <span className={styles.label}>Artist: </span>
          <span className={styles.artist}>
            {artist}
          </span>
        </div>
      </div>
      <div className={styles.status}>
        {nowPlaying
          ? <div className={styles["bars-wrapper"]}>
              <SoundBars />
            </div>
          : <div className={styles["date-wrapper"]}>
              <span>
                {`${getDistanceFromNow(new Date(timestamp * 1000))} ago`}
              </span>
            </div>}
      </div>
    </section>
  )
}

Track.propTypes = {
  name: PropTypes.string,
  artist: PropTypes.string,
  timestamp: PropTypes.number,
  nowPlaying: PropTypes.bool
}
Track.defaultProps = {
  nowPlaying: false
}

export default Track
