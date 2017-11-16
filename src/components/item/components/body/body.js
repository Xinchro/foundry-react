import React, { Component } from 'react'
import css from "./body.css"

class Body extends Component {
  constructor(props) {
    super(props)
    this.getList = this.getList.bind(this)
  }

  getList() {
    let arr = []

    for(let e in this.props.resources) {
      const obj = { 
        "name": e,
        "val": this.props.resources[e]
       }
      arr.push(obj)
    }

    const mapping = arr.map((e) => 
      <li key={ e.name } className={ css.resource }>{ e.name }- { e.val }</li>
    )

    return ( 
      <ul className={css['resource-list']}>
        { mapping }
      </ul>
    )
  }

  render() {
    

    return (
      <section className={css.body}>
        <img src="https://placeimg.com/200/200/any" alt="item icon" />
        <section className={css['data']}>
          <p>{this.props.desc}</p>
          { this.getList() }
        </section>
      </section>
    )
  }
}


export { Body }