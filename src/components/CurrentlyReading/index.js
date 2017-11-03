import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from 'components/Book'
import SidebarWidgetItem from 'components/SidebarWidgetItem'
import SidebarWidget from 'components/SidebarWidget'
import styles from './index.module.css'
import goodReadsLogo from './goodreads.png'

class CurrentlyReading extends Component {
  renderCurrentlyReadingBooks() {
    const { books } = this.props
    return (
      <div>
        {books.map(({ title, link, authors }, index) => (
          <SidebarWidgetItem lastItem={index === books.length - 1} key={index}>
            <Book
              title={title[0]}
              link={link[0]}
              author={authors[0].author[0].name[0]}
            />
          </SidebarWidgetItem>
        ))}
      </div>
    )
  }

  render() {
    const { loaded } = this.props
    const poweredBy = {
      name: 'GoodReads.com',
      url: 'https://www.goodreads.com/',
      logo: goodReadsLogo,
    }
    return (
      <div className={styles.root}>
        {!loaded ? (
          <span className={styles.loading}>{'loading...'}</span>
        ) : (
          <SidebarWidget poweredBy={poweredBy}>
            {this.renderCurrentlyReadingBooks()}
          </SidebarWidget>
        )}
      </div>
    )
  }
}

CurrentlyReading.propTypes = {
  loaded: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
}

export default CurrentlyReading
