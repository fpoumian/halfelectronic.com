import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

import Logo from 'components/Logo/index'
import styles from './index.module.css'
import generateMenuStyles from './menu-styles'
import SidebarMenu from 'components/SidebarMenu/index'

class SidebarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loading: true,
      currentlyReadingBooks: [],
    }
    this.handleMenuStateChange = this.handleMenuStateChange.bind(this)
  }

  handleMenuStateChange({ isOpen }) {
    this.setState({
      isOpen,
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <aside>
        <Menu
          right
          isOpen={isOpen}
          styles={generateMenuStyles('#222326')}
          onStateChange={this.handleMenuStateChange}
        >
          <div className={styles['logo-wrapper']}>
            <Logo lightBg={true} big={true} />
          </div>
          <SidebarMenu />
          {/* <SidebarSocialWidget /> */}
        </Menu>
      </aside>
    )
  }
}

export default SidebarContainer
