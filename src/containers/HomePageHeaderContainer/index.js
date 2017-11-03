import React, { Component } from 'react'
import HomePageHeader from 'components/HomepageHeader'

class HomePageHeaderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      typed: false,
    }
    this.handleHeadingTyped = this.handleHeadingTyped.bind(this)
  }

  handleHeadingTyped() {
    this.setState({
      typed: true,
    })
  }

  render() {
    const { typed } = this.state
    return (
      <HomePageHeader
        {...this.props}
        typed={typed}
        onHeadingTyped={this.handleHeadingTyped}
      />
    )
  }
}

export default HomePageHeaderContainer
