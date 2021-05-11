import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'
class App extends Component {
  render() {
    return (
      <div className="github-demo">
        <Search />
        <List />
      </div>
    )
  }
}

export default App
