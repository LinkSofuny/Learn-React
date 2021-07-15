import React, { Component } from 'react'
import UseState from './pages/UseState'
import UseEffect from './pages/UseEffect'
class App extends Component {
  state = {
    totalData: {
      title: '从入口文件过来的数据',
      age : 20
    }
  }
  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        {/* <UseState /> */}
        <UseEffect />
      </div>
    )
  }
}


export default App
