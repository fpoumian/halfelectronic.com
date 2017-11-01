import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SidebarContainer from 'containers/SidebarContainer'
import RootContainer from 'components/RootContainer'
import Content from 'components/Content'

import { rhythm, scale } from '../utils/typography'

import 'styles/index.global.css'

import styles from './index.module.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

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
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
