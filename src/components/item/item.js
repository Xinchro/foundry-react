import React, { Component } from 'react'
import { Header, Body, Footer } from "./components/index.js"
import css from "./item.css"

class Item extends Component {
  render() {
    return (
      <section className={css['item']}>
        <Header name={this.props.name} />
        <Body desc={this.props.desc} resources={this.props.costs.resources} />
        <Footer buildTime={this.props.buildTime} costs={this.props.costs.credits} state={this.props.state}/>
      </section>
    )
  }
}

export { Item }
