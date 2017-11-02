import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from 'components/PageTitle'
import CoverHeader from 'components/CoverHeader'

const ArchiveHeader = props => {
  const { title } = props

  return (
    <CoverHeader {...props}>
      <PageTitle>{title}</PageTitle>
    </CoverHeader>
  )
}

ArchiveHeader.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string,
  bgStyle: PropTypes.string,
  tags: PropTypes.array,
}

export default ArchiveHeader
