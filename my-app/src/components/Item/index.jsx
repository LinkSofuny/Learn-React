import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class Item extends Component {
    state = {
        items: [],
        isLoading: false,
        isFirst: true,
    }
    componentDidMount () {
         PubSub.subscribe('state', (msg, data) => {
            console.log(msg, data);
            this.setState(data)
        })
    }
    componentWillUnmount () {
        // PubSub.unsubscribe(this.token)
    }
    render() {
        return (
            this.state.isFirst ? <h1>enter value to search Users</h1> :
            this.state.isLoading ? <h1>loading...</h1> :
            this.state.items.map( item => {
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
