import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import { Route,Link} from 'react-router-dom'
import { FadingRouter } from './components/FadingRouter'
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
            <Link to='/about/click'>
              About
            </Link>
            <Link to="/home">Home</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <FadingRouter path='/about' component={About} />
          <FadingRouter path='/home' component={Home} />
        </div>
      </div>
    )
  }}

export default App
