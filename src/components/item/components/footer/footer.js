import React, { Component } from 'react'
import css from "./footer.css"

class Footer extends Component {
  calcBuildTime(seconds) {
    let d, h, m, s = 0

    // calc days, hours, minutes, seconds
    d = Math.floor(seconds/(60*60*12))
    seconds = seconds%(60*60*12)
    h = Math.floor(seconds/(60*60))
    seconds = seconds%(60*60)
    m = Math.floor(seconds/(60))
    seconds = seconds%(60)
    s = seconds

    let text = ""
    text += d ? `${d}d` : ""
    text += h ? `${h}h` : ""
    text += m ? `${m}m` : ""
    text += s ? `${s}s` : ""

    return text
  }

  render() {
    return (
      <footer className={css['footer']}>
        <span className={css['command']}>
        { this.props.state }
        </span>
        <span className={css['credit-cost']}>
        {this.props.costs}c
        </span>
        <span className={css['build-time']}>{this.calcBuildTime(this.props.buildTime)}</span>
      </footer>
    )
  }
}


export { Footer }