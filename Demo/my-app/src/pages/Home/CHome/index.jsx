import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'
export default class CHome extends Component {
    constructor () {
        super()
        this.goTo = this.goTo.bind(this)
        this.goBack = this.goBack.bind(this)
    }
    state = {
        messageArr: [
            {id:'01', title: '消息1'},
            {id:'02', title: '消息2'},
            {id:'03', title: '消息3'}
        ]
    }
    push (title, id) {
        this.props.history.push(`/home/cHome/detail`,{title, id})
    }
    replace (title, id) {
        this.props.history.replace(`/home/cHome/detail`,{title, id})

    }
    goTo () {
        this.props.history.goForward()

    }
    goBack () {
        this.props.history.goBack()
    }
    render() {
        console.log(this.props);
        const { messageArr } = this.state
        return (
            <div>
                <h1>我是CHOME</h1>
                <ul>
                    {
                        messageArr.map( item => {
                            return (
                                <li key={item.id}>
                                    <Link to={ {pathname: `/home/cHome/detail`, state: {title:item.title, id: item.id}} }>{item.title}</Link>
                                    <button onClick={() => this.push(item.title, item.id)}>push</button>
                                    <button onClick={() => this.replace(item.title, item.id)}>replace</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <Route  path='/home/cHome/detail' component={Detail} />
                <button onClick={this.goTo}>go</button>
                <button onClick={this.goBack}>back</button>
            </div>
        )
    }
}
