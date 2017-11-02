import React, { Component } from 'react'

import Comments from 'components/Comments'

class CommentsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const { open } = this.state
    return (
      <Comments
        open={open}
        onToggleClick={this.handleToggleClick}
        {...this.props}
      />
    )
  }
}

export default CommentsContainer
