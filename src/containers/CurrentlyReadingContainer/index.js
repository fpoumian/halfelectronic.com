import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GoodReadsAPI from 'api/GoodReadsAPI'
import CurrentlyReading from 'components/CurrentlyReading/index'
import { mapResponseToBooks } from 'utils/goodreads'
import { parseXMLToJson } from 'utils/data'

class CurrentlyReadingContainer extends Component {
  state = {
    loaded: false,
    books: [],
  }

  constructor(props) {
    super(props)
    this.api = new GoodReadsAPI('65337089')
  }

  componentDidMount() {
    this.api
      .getUserCurrentlyReading()
      .then(response => parseXMLToJson(response.data))
      .then(mapResponseToBooks)
      .then(books => {
        this.setState({ books, loaded: true })
      })
  }

  render() {
    const { loaded, books } = this.state
    return <CurrentlyReading loaded={loaded} books={books} />
  }
}

CurrentlyReadingContainer.propTypes = {
  loaded: PropTypes.bool,
}

export default CurrentlyReadingContainer
