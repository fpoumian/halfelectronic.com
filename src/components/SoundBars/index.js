import React from 'react'
import times from 'lodash/times'

import styles from './index.module.css'

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
