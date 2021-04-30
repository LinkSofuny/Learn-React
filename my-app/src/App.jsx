import React, { Component } from 'react'
import HeadSearch from './component/HeadSearch'
import BodyList from './component/BodyList'
import FooterFinish from './component/FooterFinish'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.addEvent = this.addEvent.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
    this.handleAllFinish = this.handleAllFinish.bind(this)
  }
  state = {
    isShow: false,
    events: [],
    allFinshNum: false
  }
  index = 0
  addEvent(val){
    let obj = {
      id: this.index++,
      done: false,
      event: val,
    }
    let events = [obj, ...this.state.events]

    this.setState({
      events,
    })
  }
  changeStatus(curIndex) {
    let newEvents = this.state.events.map( (item, index) => {
      let done = item.done
      item.done = curIndex === index ? !done : done
      return item
    })
    this.setState({
      events: newEvents
    })
    return newEvents[curIndex].done
  }
  handleAllFinish (checked) {
    let newEvents = this.state.events
    newEvents.forEach(item => {
      item.done = checked
    })
    
    this.setState({
      events: newEvents,
    })
  }
  render() {
    return (
      <div className="todo-body">
        <HeadSearch addEvent={this.addEvent}/>
        <BodyList events={this.state.events} isShow={this.state.isShow} changeStatus={this.changeStatus}/>
        <FooterFinish events={this.state.events} handleAllFinish={this.handleAllFinish}/>
      </div>
    )
  }
}
