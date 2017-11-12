import React, { Component } from 'react';
import { Header, Body, Footer } from "./components/index.js"

class Item extends Component {
  render() {
    return (
      <section>
        <Header name={this.props.name} />
        <Body />
        <Footer />
      </section>
    )
  }
}

export { Item }
