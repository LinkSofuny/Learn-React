import React, { Component } from 'react'

export default class index extends Component {
    state = {value:1}

    add = () => {
        this.setState((state, props) => {
            return {value: ++state.value}
        })
    }
    render() {
        return (
            <div>
                <h1>我是DEMO</h1>
                <div>{this.state.value}</div>
                <button onClick={this.add}>+1</button>
            </div>
        )
    }
}
