import React, { Component } from "react"
import css from "./resourceList.css"
import initialResources from "../../data/initialResources.json"

class ResourceList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resources: initialResources
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let resources = this.state.resources
    resources[event.target.name] = event.target.value
    this.setState({resources})
  }

  render() {
    let arr = []
    for(let e in initialResources) {
      arr.push(
        <li className={css.resource}> 
          <span>{ e }:</span>
          <input
            type="text"
            value={initialResources[e]}
            name={e}
            onChange={this.handleChange}
          />
        </li>
      )
    }

    return (
      <ul className={css['resource-list']}>
        {arr}
      </ul>
    )
  }
}

export { ResourceList }