import React, { Component } from 'react'
export default class Header extends Component {
    increament = () => {
        this.setState({
            count: +this.selectNumber.value + +this.state.count
        })
    }
    decreament = () => {
        this.setState({
            count: +this.selectNumber.value - +this.state.count
        })
    }
    addIfOdd = () => {
        const count = this.state.count
        if( count > 1 && count % 2 !== 0) {
            console.log('当前为奇数， 不加');
            return
        }
        this.setState({
            count: +this.selectNumber.value + +this.state.count
        })
    }
    asyncAdd = () => {
        
    }
    state = {
        count: 0
    }
    render() {
        return (
            <div>
                <header>
                    <h1>当前求和为： {this.state.count}</h1>
                </header>
                <nav>
                    <select ref={c => this.selectNumber = c}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increament}>+</button>&nbsp;&nbsp;
                    <button onClick={this.decreament}>-</button>&nbsp;&nbsp;
                    <button onClick={this.addIfOdd}>如果为基数就加</button>&nbsp;&nbsp;
                    <button onClick={this.asyncAdd}>asyncAdd</button>
                </nav>
            </div>
        )
    }
}
