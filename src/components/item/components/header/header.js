import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <header>This is a header for "{this.props.name}"</header>
  }
}


export { Header }