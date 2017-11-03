import React from 'react'
import PropTypes from 'prop-types'
import { joinUri } from 'phenomic'
import Button from 'components/Button'
import Container from 'components/Container'

import styles from './index.module.css'

const Pagination = ({ query, baseURL }) => {
  const next = query.getNextPageNumber() // older posts
  const prev = query.getPreviousPageNumber() // newer posts
  const noPrevStyles = {
    justifyContent: 'flex-end',
  }

  return (
    <Container>
      <div
        className={styles.wrapper}
        style={!prev && prev !== 0 ? noPrevStyles : {}}
      >
        {prev === 0 ? (
          <Button link={baseURL}>Newer Posts</Button>
        ) : prev >= 1 ? (
          <Button
            link={joinUri(baseURL, 'page', query.getPreviousPageNumber())}
          >
            Newer Posts
          </Button>
        ) : null}
        {next && (
          <Button link={joinUri(baseURL, 'page', query.getNextPageNumber())}>
            Older Posts
          </Button>
        )}
      </div>
    </Container>
  )
}

Pagination.propTypes = {
  query: PropTypes.object.isRequired,
  baseURL: PropTypes.string.isRequired,
}

export default Pagination
