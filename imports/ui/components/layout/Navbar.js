import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import AccountsUI from '../../auth/AccountsUI';

export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size="huge" color="blue darken-2" pointing >
        <Menu.Item>
          <img src='http://www.freelogovectors.net/svg03/ubc-logo.svg' />
        </Menu.Item>

        <Menu.Item position="left"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item position="left">
        <AccountsUI/>
        </Menu.Item>
      </Menu>
    )
  }
}