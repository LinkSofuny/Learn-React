import React, { Component } from 'react'
import HeadSearch from './component/HeadSearch'
import BodyList from './component/BodyList'
import FooterFinish from './component/FooterFinish'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className="todo-body">
        <HeadSearch />
        <BodyList />
        <FooterFinish />
      </div>
    )
  }
}
