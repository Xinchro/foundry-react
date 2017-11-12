import React, { Component } from 'react'
import css from "./header.css"

class Header extends Component {
  render() {
    return <header className={css.header}>This is a header for "{this.props.name}"</header>
  }
}


export { Header }