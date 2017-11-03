import React, { Component } from 'react'
import PropTypes from 'prop-types'

import lastFMLogo from './lastfm-logo.gif'
import Track from 'components/Track'
import SidebarWidgetItem from 'components/SidebarWidgetItem'
import SidebarWidget from 'components/SidebarWidget'
import styles from './index.module.css'

class CurrentlyListening extends Component {
  renderCurrentlyListeningTracks() {
    const { tracks } = this.props
    return (
      <div>
        {tracks.map(({ name, artist, nowPlaying, timestamp }, index) => (
          <SidebarWidgetItem lastItem={index === tracks.length - 1} key={index}>
            <Track
              name={name}
              artist={artist}
              nowPlaying={nowPlaying}
              timestamp={timestamp}
            />
          </SidebarWidgetItem>
        ))}
      </div>
    )
  }

  render() {
    const { loaded } = this.props
    const poweredBy = {
      name: 'Last.FM',
      url: 'https://www.last.fm/',
      logo: lastFMLogo,
    }
    return (
      <div className={styles.root}>
        {!loaded ? (
          <span className={styles.loading}>{'loading...'}</span>
        ) : (
          <SidebarWidget poweredBy={poweredBy}>
            {this.renderCurrentlyListeningTracks()}
          </SidebarWidget>
        )}
      </div>
    )
  }
}

CurrentlyListening.propTypes = {
  loaded: PropTypes.bool.isRequired,
  tracks: PropTypes.array.isRequired,
}

export default CurrentlyListening
