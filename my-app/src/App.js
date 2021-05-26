import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
class App extends Component {
  constructor () {
    super()
    this.handleItems = this.handleItems.bind(this)
  }
  items: {}
  handleItems (items) {
    this.setState({
      items,
    })
  }
  render() {
    return (
      <div className="github-demo">
        <Search handleItems={this.handleItems}/>
        <List items={this.items}/>
      </div>
    )
  }
}

export default App
