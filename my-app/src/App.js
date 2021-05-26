import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
class App extends Component {
  constructor () {
    super()
    this.upDateAppstate = this.upDateAppstate.bind(this)
  }
  state = {
    items: [],
    isLoading: false,
    isFirst: true,
  }
  upDateAppstate (state) {
    this.setState(state)
  }
  render() {
    return (
      <div className="github-demo">
        <Search upDateAppstate={this.upDateAppstate}/>
        <List {...this.state}/>
      </div>
    )
  }
}

export default App
