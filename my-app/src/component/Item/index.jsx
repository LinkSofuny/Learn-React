import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  constructor () {
    super()
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  state = {
    isShow: false
  }
  handleMouseEnter () {
    this.setState({
      isShow: true
    })
  }
  handleMouseLeave () {
    this.setState({
      isShow: false
    })
  }
  render() {
    const {done, event} = this.props
    let isShow = this.state.isShow
    return (
      <div className="body-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <input type="checkbox" id="event" defaultChecked={done} />
        <label  className="itme-event" >{event}</label>
        <button className={!isShow ? 'noShow' : 'item-delete'}>删除</button>
      </div>
    )
  }
}
