import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import Footer from 'components/Footer'
import SidebarContainer from 'containers/SidebarContainer'
import RootContainer from 'components/RootContainer'
import Content from 'components/Content'

import 'styles/index.global.css'
import 'prism-theme-one-dark/prism-onedark.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <RootContainer>
        <Content>
          <SidebarContainer />
          <Header />
          {children()}
          <Footer />
        </Content>
      </RootContainer>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
