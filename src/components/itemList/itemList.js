import React, { Component } from "react"
import { Item } from "../item/item.js"
import css from "./itemList.css"

class ItemList extends Component {
  render() {
    return (
      <section className={css['item-list']}>
        {
          this.props.items.map((e, i) => {
            return <Item 
              id={ e.id } 
              name={ e.name } 
              desc={ e.description } 
              buildTime={ e.buildTimeRemaining } 
              costs={ e.costs } 
              buildState={ e.buildState } 
              consumeResources={ this.props.consumeResources } 
              key={ e.name } 
              buildItem={ this.props.buildItem }/>
          })
        }
      </section>
    )
  }
}

export { ItemList }