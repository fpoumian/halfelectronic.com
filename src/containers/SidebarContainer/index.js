import React, { Component } from "react"
import { slide as Menu } from "react-burger-menu"

import Logo from "components/Logo/index"
import { darkestGray } from "../../style-vars.json"
import styles from "./index.pcss"
import generateMenuStyles from "./menu-styles"
import SidebarMenu from "components/SidebarMenu/index"
// import SidebarSocialWidget from "components/SidebarSocialWidget"

class SidebarContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      loading: true,
      currentlyReadingBooks: []
    }
    this.handleMenuStateChange = this.handleMenuStateChange.bind(this)
  }

  handleMenuStateChange({ isOpen }) {
    this.setState({
      isOpen
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <aside>
        <Menu
          right
          isOpen={isOpen}
          styles={generateMenuStyles(darkestGray)}
          onStateChange={this.handleMenuStateChange}
        >
          <div className={styles["logo-wrapper"]}>
            <Logo lightBg={true} big={true} />
          </div>
          <SidebarMenu />
          {/*<SidebarSocialWidget />*/}
        </Menu>
      </aside>
    )
  }
}

export default SidebarContainer
