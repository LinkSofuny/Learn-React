import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" id="event"/>
        <label htmlFor="" for="event">event1</label>
      </div>
    )
  }
}
