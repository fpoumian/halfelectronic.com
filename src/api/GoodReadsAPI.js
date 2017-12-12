import axios from 'axios'

class GoodReadsAPI {
  static endpoint = 'https://exkvbtgog7.execute-api.us-east-1.amazonaws.com/prod/goodreads'

  constructor(userId) {
    this._userId = userId
  }

  getUserCurrentlyReading() {
    return axios({
      method: 'get',
      url: `${GoodReadsAPI.endpoint}/user/${
        this._userId
      }/shelves/currently-reading`,
      responseType: 'text',
    })
  }
}

export default GoodReadsAPI
