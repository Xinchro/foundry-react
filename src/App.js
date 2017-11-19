import React, { Component } from 'react'
import css from './App.css'
import { ItemList, ResourceList } from './components/index.js'
import initialResources from "./data/initialResources.json"
import items from "./data/items.json"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: initialResources,
      items: items,
      inventory: []
    }

    this.consumeResource = this.consumeResource.bind(this)
    this.consumeResources = this.consumeResources.bind(this)
    this.modifyResource = this.modifyResource.bind(this)
    this.getResources = this.getResources.bind(this)
    this.stopBuildTimer = this.stopBuildTimer.bind(this)
    this.buildItem = this.buildItem.bind(this)

    this.buildTimer = setInterval(() => {
      this.ticker()
    }, 1000)
  }

  ticker() {
    const items = this.getItems()
    let tempItems = []

    this.state.items.forEach((e) => {
      if(e.buildState === "building") {
        if(this.checkBuildTimeDone(e.startBuildTime, e.buildTime)) {
          e.buildState = "claim"
        } else {
          e.buildTimeRemaining -= 1
        }
      }
      tempItems.push(e)
    })

    this.setState(items: tempItems)
  }

  buildItem(item, costs) {
    let itemsWithBuild = this.state.items
    itemsWithBuild.find((el) => {
      if(item === el.id) {
        switch(el.buildState) {
          case "build":
            if(this.consumeResources(costs)) {
              el.startBuildTime = new Date()
              el.buildState = "building"
            }
            break
          case "building":
            break
          case "claim":
            this.claimItem(el)
            break
          default:
            console.error("invalid build state")
        }
        return el
      }
    })

    this.setState(items: itemsWithBuild)
  }

  claimItem(el) {
    el.buildTimeRemaining = el.buildTime
    el.buildState = "build"

    this.addToInventory(el)
  }

  stopBuildTimer() {
    console.log("stopping timer")
    clearInterval(this.buildTimer)
  }

  getResources() {
    return this.state.resources
  }

  getItems() {
    return this.state.items
  }

  getInventory() {
    return this.state.inventory
  }

  consumeResources(costs) {
    let consumed = true
    let tempRes = {}

    loop:
    for(let el in costs) {
      if(typeof(costs[el]) === "object") {
        for(let res in costs[el]) {
          let result = this.consumeResource(res, costs[el][res])

          if(!result[0]) {
            consumed = false
            break loop
          } else {
            tempRes = result[1]
          }
        }
      } else {
        let result = this.consumeResource(el, costs[el])
        if(!result[0]) {
          consumed = false
          break
        } else {
          tempRes = result[1]
        }
      }
    }

    if(consumed) this.setState({resources:tempRes})

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

  checkBuildTimeDone(time, dur) {
    const currentDate = new Date(new Date().getTime())

    const buildEnd = new Date(new Date(time).getTime() + (dur * 1000))

    dur = dur ? dur : 0

    return currentDate > buildEnd
  }

  completeItem() {
    this.addToInventory()
  }

  addToInventory(item) {
    let inventory = this.getInventory()

    if(this.existsInInventory(inventory, item)) { 
      inventory.forEach((el) => {
        if (el.id === item.id) {
          el.count += 1
          return
        }
      })
    } else {
      inventory.push({
        id: item.id,
        count: item.count ? item.count += 1 : 1
      })
    }


    this.setState({ inventory: inventory })
  }

  existsInInventory(arr, item) {
    return arr.find((el) => {
      return (el.id === item.id)
    }) ? true : false
  }

  addNewBlueprint(id, name, description, costs, buildTime, startBuildTime, rushCost, buildState) {
    this.setState({items: this.state.items.push({
        "id": id,
        "name": name,
        "description": description,
        "costs": costs,
        "buildTime": buildTime,
        "startBuildTime": startBuildTime,
        "startBuildRemaining": startBuildTime,
        "rushCost": rushCost,
        "buildState": buildState
      })
    })
  }

  modifyResource(resource, amount) {
    let res = this.state.resources

    amount = (typeof(amount) === "string") ? parseInt(amount, 10) : amount

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
      default:
        console.error("invalid resource type")
    }

    this.setState({resources:res})
  }

  renderInv() {
    const mapping = this.state.inventory.map((el) => <li key={ el.id }>{ el.id }: { el.count }</li>)
    return (
      <ul> { mapping } </ul> 
    )
  }

  render() {
    return (
      <section className={ css['app'] }>
        <header 
          className={ css['header'] }
        >
          <span 
            className={ css['title'] }
          >
              foundry system
          </span>
        </header>
        <section 
          className={ css['lists'] }
        >
          <ResourceList 
            resources={ this.state.resources } 
            modifyResource={ this.modifyResource } 
          />
          <ItemList 
            className={ css['item-list'] } 
            consumeResources={ this.consumeResources } 
            items={ this.state.items } 
            buildItem={ this.buildItem }
          />
          <section>
            <span>inventory:</span> 
            <ul>
              { this.renderInv() }
            </ul>
          </section>
        </section>
      </section>
    )
  }
}

export default App
