import React, { Component } from "react"
import items from "../../data/items.json"
import { Item } from "../item/item.js"
import css from "./itemList.css"

class ItemList extends Component {
  render() {
    return (
      <section className={css['item-list']}>
        {
          items.map((e, i) => {
            return <Item name={e.name} desc={e.description} buildTime={e.buildTimeRemaining} costs={e.costs} state={e.state} consumeResources={this.props.consumeResources} />
          })
        }
      </section>
    )
  }
}

export { ItemList }