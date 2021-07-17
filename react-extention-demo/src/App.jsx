import React, { Component } from 'react'
import A from './pages/A'
import B from './pages/B'
import './App.css'
class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>React-Demo</h1>
        <A render={ obj => <B {...obj} /> }/>
      </div>
    )
  }
}


export default App
