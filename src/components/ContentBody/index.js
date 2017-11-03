import React from 'react'
import PropTypes from 'prop-types'
import componentStyles from './index.module.css'

const ContentBody = ({ body, style }) => (
  <section
    style={style ? { ...style } : {}}
    className={componentStyles.wrapper}
    dangerouslySetInnerHTML={{ __html: body }}
  />
)

ContentBody.propTypes = {
  body: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ContentBody
