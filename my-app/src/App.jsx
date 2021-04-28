import React, { Component } from 'react'
import HeadSearch from './component/HeadSearch'
import BodyList from './component/BodyList'
import FooterFinish from './component/FooterFinish'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.addEvent = this.addEvent.bind(this)
  }
  state = {
    isShow: false,
    events: []
  }
  addEvent(val){
    let obj = {
      done: false,
      event: val,
    }
    let events = [obj, ...this.state.events]
    this.setState({
      events,
    })
  }
  render() {
    return (
      <div className="todo-body">
        <HeadSearch addEvent={this.addEvent}/>
        <BodyList events={this.state.events} isShow={this.state.isShow}/>
        <FooterFinish />
      </div>
    )
  }
}
