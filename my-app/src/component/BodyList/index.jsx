import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class BodyList extends Component {
  render() {
    const events = this.props.events
    const isShow = this.props.isShow
    const changeStatus = this.props.changeStatus
    return (
      <main className="body-list">
        {
          events.map( (item, index)=>{
            return <Item {...item} index={index} key={index} className="body-item" isShow={isShow} changeStatus={changeStatus}/>
          })
        }
      </main>
    )
  }
}
