import './index.css'
import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    constructor () {
        super()
        this.searchHandle = this.searchHandle.bind(this)
    }
    searchHandle (e) {
    const { keyWordElement: {value: keyWord} } = this
       let items = []
       this.props.upDateAppstate({isLoading:true, isFirst: false})
       axios.get(`https://api.github.com/search/users?q=${keyWord}`).then( res => {
        items = res.data.items
        this.props.upDateAppstate({isLoading:false, items,})
       })
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
