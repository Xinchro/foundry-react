import React, { Component } from 'react'
import css from "./body.css"

class Body extends Component {
  render() {
    let arr = []
    for(let e in this.props.resources) {
      arr.push(<li className={css.resource}> { e }: {this.props.resources[e]},</li>)
    }

    return (
      <section className={css.body}>
        <img src="https://placeimg.com/200/200/any" />
        <section className={css['data']}>
          <p>{this.props.desc}:</p>
          <ul className={css['resource-list']}> { arr } </ul>
        </section>
      </section>
    )
  }
}


export { Body }