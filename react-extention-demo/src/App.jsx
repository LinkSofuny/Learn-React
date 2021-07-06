import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import MyNavLink from './components/MyNavLink'
import { Route,Link} from 'react-router-dom'
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
            <Link to="/about" innerRef={this.refCallback}>
              About
            </Link>
            <Link to="/home">Home</Link>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />
        </div>
      </div>
    )
  }}

export default App
