import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class BodyList extends Component {
  render() {
    return (
      <main className="body-list">
        <Item className='body-item'/>
      </main>
    )
  }
}
