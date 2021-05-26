import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    render() {
        const { items,isLoading, isFirst } = this.props
        
        return (
            isFirst ? <h1>enter value to search Users</h1> :
            isLoading ? <h1>loading...</h1> :
            items.map( item => {
                return (
                    <div key={item.id} className="item">
                        <img alt="" className="item-img" src={item.avatar_url}/>
                        <div className="name">{item.login}</div>
                    </div>
                )
            })
        )
    }
}
