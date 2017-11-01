import React from "react"
import { times } from "lodash"

import styles from "./index.pcss"

const SoundBars = () => {
  return (
    <div>
      <div className={styles.bars}>
        {times(10, () => <div className={styles.bar} />)}
      </div>
    </div>
  )
}

export default SoundBars
