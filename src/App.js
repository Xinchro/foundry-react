import React, { Component } from 'react'
import logo from './logo.svg'
import css from './App.css'
import { ItemList, ResourceList } from './components/index.js'
import initialResources from "./data/initialResources.json"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: initialResources
    }

    this.consumeResource = this.consumeResource.bind(this)
    this.consumeResources = this.consumeResources.bind(this)
    this.modifyResource = this.modifyResource.bind(this)
    this.getResources = this.getResources.bind(this)
  }

  getResources() {
    return this.state.resources
  }

  consumeResources(costs) {
    let consumed = true
    let res = this.getResources()

    loop:
    for(let el in costs) {
      if(typeof(costs[el]) == "object") {
        for(let res in costs[el]) {
          let result = this.consumeResource(res, costs[el][res])

          if(!result[0]) {
            break loop
          } else {
            res = result[1]
          }
        }
      } else {
        let result = this.consumeResource(el, costs[el])
        if(!result[0]) {
          break loop
        } else {
          res = result[1]
        }
      }
    }

    consumed ? this.setState({resources:res}) : ""

    return consumed
  }

  consumeResource(resource, amount) {
    let res = this.getResources()
    let consumed = true

    consumed = this.subtract(res[resource], amount)[0]

    res[resource] = this.subtract(res[resource], amount)[1]

    return [consumed, res]
  }

  subtract(bank, amount) {
    if(bank - amount >= 0) {
      bank = bank - amount
      return [true, bank]
    } else {
      return [false, bank]
    }
  }

  modifyResource(resource, amount) {
    let res = this.state.resources

    amount = (typeof(amount) === "string") ? parseInt(amount) : amount

    switch(resource) {
      case "credits":
        res.credits = amount
        break
      case "resource1":
        res.resource1 = amount
        break
      case "resource2":
        res.resource2 = amount
        break
      case "resource3":
        res.resource3 = amount
        break
      case "resource4":
        res.resource4 = amount
        break
      case "resource5":
        res.resource5 = amount
        break
      case "resource6":
        res.resource6 = amount
        break
    }

    this.setState({resources:res})
    console.log(this.state.resources)
  }

  render() {
    return (
      <section className={css['app']}>
        <header className={css['header']}><span className={css['title']}>foundry system</span></header>
        <section className={css['lists']}>
          <ResourceList resources={this.state.resources} modifyResource={this.modifyResource} />
          <ItemList className={css['item-list']} consumeResources={this.consumeResources} />
        </section>
      </section>
    );
  }
}

export default App
