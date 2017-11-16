import React, { Component } from "react"
import css from "./resourceList.css"

class ResourceList extends Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    
  }

  render() {
    let arr = []
    for(let res in this.props.resources) {
      arr.push(
        <li className={css.resource} key={res}> 
          <span>{ res }:</span>
          <input
            type="text"
            value={this.props.resources[res]}
            name={res}
            onChange={(e) => {
              this.props.modifyResource(res, e.target.value)
            }}
          />
        </li>
      )
    }

    return (
      <ul className={css['resource-list']}>
        { arr }
      </ul>
    )
  }
}

export { ResourceList }