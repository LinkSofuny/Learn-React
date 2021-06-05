import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
                <ul>
                    {
                        messageArr.forEach( item => {
                            <li key={item.id}>
                                <Link to='/home/cHome/detail'>{item.title}</Link>
                            </li>
                        })
                    }   
                </ul>
                <Detail />
            </div>
        )
    }
}
