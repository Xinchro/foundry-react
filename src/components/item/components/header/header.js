import React, { Component } from 'react'
import headerCSS from "./header.css"

class Header extends Component {
  render() {
    return <header className={headerCSS.header}>This is a header for "{this.props.name}"</header>
  }
}


export { Header }