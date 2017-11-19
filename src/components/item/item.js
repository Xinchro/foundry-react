import React, { Component } from 'react'
import { Header, Body, Footer } from "./components/index.js"
import css from "./item.css"

class Item extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.build = this.build.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    this.build()
  }

  build() {
    this.props.buildItem(this.props.id, this.props.costs)
  }

  render() {
    return (
      <section 
        className={ css['item'] } 
        onClick={ this.handleClick }
      >
        <Header 
          name={ this.props.name } 
        />
        <Body 
          desc={ this.props.desc } 
          resources={ this.props.costs.resources } 
        />
        <Footer 
          buildTime={ this.props.buildTime } 
          costs={ this.props.costs.credits } 
          buildState={ this.props.buildState } 
        />
      </section>
    )
  }
}

export { Item }
