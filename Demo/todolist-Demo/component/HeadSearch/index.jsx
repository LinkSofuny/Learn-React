import React, { Component } from 'react'
import './index.css'
export default class HeadSearch extends Component {
  constructor(){
    super()
    this.addEvent = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e, addEvent){
    if(e.keyCode === 13) {
      addEvent(e.target.value)
    }
    
  }
  render(props) {
    return (
      <header className="header-box clearFix">
          <input className="header-input" type="text" onKeyUp={(e) => this.handleKeyUp(e, this.props.addEvent)}/> 
      </header>
    )
  }
}
