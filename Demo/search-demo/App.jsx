import React, { Component } from 'react'
import About from './pages/About'
import Home from './pages/Home'
import NotMatch from './pages/NotMatch'
import MyNavLink from './components/MyNavLink'
import { Redirect, Route} from 'react-router-dom'
import './App.css'
class App extends Component {

  render() {
    return (
      <div className="">
        <h1>React-Demo</h1>
        <nav className='left'>
            <MyNavLink  to="/about">
              About
            </MyNavLink>
            {/* 默认情况下, 模糊匹配 */}
            <MyNavLink exact={true} to="/home">Home</MyNavLink>
        </nav>
        <div className='right'>
          {/* 路由切換 */}
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />
          <Route path='/notMatch' component={NotMatch} />
          <Redirect to="/notMatch" />
        </div>
      </div>
    )
  }
}

export default App
