import React, { Component } from "react"

import LastFMAPI from "api/LastFMAPI"
import CurrentlyListening from "components/CurrentlyListening"
import { mapResponseToTracks } from "utils/lastfm"

class CurrentlyListeningContainer extends Component {
  state = {
    loaded: false,
    tracks: []
  }

  constructor(props) {
    super(props)
    this.api = new LastFMAPI("MidnightMelodic")
  }

  componentDidMount() {
    this.api
      .getUserRecentTracks()
      .then(response => mapResponseToTracks.call(null, response.data))
      .then(tracks => {
        this.setState({ tracks, loaded: true })
      })
  }

  render() {
    const { tracks, loaded } = this.state
    return <CurrentlyListening loaded={loaded} tracks={tracks} />
  }
}

export default CurrentlyListeningContainer
