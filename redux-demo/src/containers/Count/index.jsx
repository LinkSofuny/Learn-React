import { connect } from 'react-redux'
import { incrementAction, incrementActionAsync, decrementAction } from "../../redux/actions/count";
import React, { Component } from 'react'


class Count extends Component {


    increament = () => {
        const value = +this.selectNumber.value
        this.props.increment(value)
    }
    decreament = () => {
        const value = +this.selectNumber.value
        this.props.decrement(value)
    }
    addIfOdd = () => {
        const value = +this.selectNumber.value
        const count = this.props.count
        if( count > 1 && count % 2 !== 0) {
            console.log('当前为奇数， 不加');
            return
        }
        this.props.increment(value)
    }
    asyncAdd = () => {
        const value = +this.selectNumber.value
        this.props.incrementAsync(value, 1000)
        
    }
    render() {
        return (
            <div>
                <header>
                    <h1>当前求和为： {this.props.count}, 当前人数: {this.props.length}</h1>
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

export default connect(
    state => ({
        count: state.count,
        length: state.persons.length}),
    {
        increment: incrementAction,
        incrementAsync: incrementActionAsync,
        decrement: decrementAction
    }
)(Count)

