import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import { NavLink, Route} from 'react-router-dom'
import './App.css'
class App extends Component {

  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <NavLink className="" to="/about" >About</NavLink>
            <NavLink className="" to="/home" >Home</NavLink>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />
        </div>
      </div>
    )
  }
}

export default App
