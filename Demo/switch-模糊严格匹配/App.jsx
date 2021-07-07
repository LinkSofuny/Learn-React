import React, { Component } from 'react'
import About from './pages/About'
import Nav from './pages/Nav'
import Home from './pages/Home'
import { Route,Link, Switch} from 'react-router-dom'
import './App.css'
class App extends Component {

  refCallback = node => {
    console.log(node)
  }
  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <Link to='/about'>
              About
            </Link>
            <Link to="/home/a">Home</Link>
            <Link to="/Nav">Nav</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/about' component={About} />
          <Route path='/nav' component={Nav} />
          <Route path='/home' component={Home} exact  />
          <Route path='/home/a' component={Home} />
        
        </div>
      </div>
    )
  }}

export default App
