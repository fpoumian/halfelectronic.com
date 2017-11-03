import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const SidebarMenuLink = props => {
  const { to, children } = props
  return <Link to={to}>{children}</Link>
}

SidebarMenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default SidebarMenuLink
