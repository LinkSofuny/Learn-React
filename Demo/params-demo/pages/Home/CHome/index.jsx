import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class CHome extends Component {
    state = {
        messageArr: [
            {id:'01', title: '消息1'},
            {id:'02', title: '消息2'},
            {id:'03', title: '消息3'}
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <h1>我是CHOME</h1>
                <ul>
                    {
                        messageArr.map( item => {
                            return (
                                <li key={item.id}>
                                    <Link to={`/home/cHome/detail/${item.id}/${item.title}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }   
                </ul>
                <Route  path='/home/cHome/detail/:id/:title' component={Detail} />
            </div>
        )
    }
}
