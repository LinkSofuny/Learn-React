import './index.css'
import React, { Component } from 'react'
export default class Search extends Component {
    render() {
        return (
            <header className="search-box">
                search user by name<br />
                <input type="text"/>
            </header>
        )
    }
}
