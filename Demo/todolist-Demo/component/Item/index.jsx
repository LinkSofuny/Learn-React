import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
  constructor () {
    super()
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
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
  handleChecked(e) {
    let done = this.props.changeStatus(this.props.index)
    e.target.checked = done
  }
  deleteItem () {
    this.props.deleteItem(this.props.index)
  }
  render() {
    const {done, event} = this.props
    let isShow = this.state.isShow
    return (
      <div className="body-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <input type="checkbox" id="event" checked={done}  onChange={this.handleChecked}/>
        <label  className="itme-event" >{event}</label>
        <button className={!isShow ? 'noShow' : 'item-delete'} onClick={this.deleteItem}>删除</button>
      </div>
    )
  }
}
