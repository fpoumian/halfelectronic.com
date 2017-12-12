import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SidebarContainer from 'containers/SidebarContainer'
import ScrollToTopContainer from 'containers/ScrollToTopContainer'
import Content from 'components/Content'

import 'styles/index.global.css'
import 'prism-theme-one-dark/prism-onedark.css'
import styles from './index.module.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className={styles.wrapper}>
        <Content>
          <SidebarContainer />
          <Header />
          {children()}
          <Footer />
          <ScrollToTopContainer />
        </Content>
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template
