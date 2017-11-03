import axios from 'axios'

class LastFMAPI {
  static endpoint = 'https://exkvbtgog7.execute-api.us-east-1.amazonaws.com/prod/lastfm'

  constructor(username) {
    this._username = username
  }

  getUserRecentTracks() {
    return axios({
      method: 'get',
      url: `${LastFMAPI.endpoint}/user/${this._username}/recent-tracks`,
      params: {
        limit: 1,
      },
    })
  }
}

export default LastFMAPI
