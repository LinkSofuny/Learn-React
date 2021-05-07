import React, { Component } from 'react'
import './index.css'
export default class BottomFinish extends Component {
  constructor () {
    super()
      this.allFinsh = this.allFinsh.bind(this)
  }
  allFinsh (e) {
    const checked = e.target.checked
    this.props.handleAllFinish(checked)
  }
  render() {
    const { events } = this.props
    let doneNum = 0
    events.forEach( item => {
      if (!item.done) doneNum++
    })
    return (
      <footer className="">
        <input type="checkbox" checked={doneNum === 0  ? true : false} onChange={this.allFinsh}/> 未完成 => {doneNum}/全部 => {events.length}
      </footer>
    )
  }
}
