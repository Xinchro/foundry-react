import React, { Component } from 'react'
import css from "./body.css"

class Body extends Component {
  render() {
    return <p className={css.body}>This is a body</p>
  }
}


export { Body }