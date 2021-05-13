import './index.css'
import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    constructor () {
        super()
        this.searchHandle = this.searchHandle.bind(this)
    }
    searchHandle () {
        console.log(this.keyWordElement.value);
    }
    render() {
        return (
            <header className="search-box">
                search user by name<br />
                <input type="text" placeholder="输入关键字搜" ref={ c => this.keyWordElement = c }/>
                <button onClick={this.searchHandle}>search</button>
            </header>
        )
    }
}
