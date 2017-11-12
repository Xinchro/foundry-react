import React, { Component } from 'react'
import { Header, Body, Footer } from "./components/index.js"
import "./item.css"

class Item extends Component {
  render() {
    return (
      <section className="item">
        <Header name={this.props.name} />
        <Body />
        <Footer />
      </section>
    )
  }
}

export { Item }
