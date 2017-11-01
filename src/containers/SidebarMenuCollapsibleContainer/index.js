import React, { Component, cloneElement } from "react"
import PropTypes from "prop-types"

import SidebarMenuCollapsible from "components/SidebarMenuCollapsible"

class SidebarMenuCollapsibleContainer extends Component {
  state = {
    open: false,
    loaded: false
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open,
      loaded: true
    })
  }

  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element,
    label: PropTypes.string
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { children, label } = this.props
    const { open, loaded } = this.state
    return (
      <SidebarMenuCollapsible
        isOpen={open}
        label={label}
        onClick={this.handleClick}
        loaded={loaded}
      >
        {loaded && cloneElement(children)}
      </SidebarMenuCollapsible>
    )
  }
}

export default SidebarMenuCollapsibleContainer
