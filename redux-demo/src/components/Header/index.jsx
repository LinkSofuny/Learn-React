import React, { Component } from 'react'
import store from '../../redux/store'
export default class Header extends Component {

    componentDidMount () {
        store.subscribe(()=>{
            this.setState({})
        })
    }
    increament = () => {
        store.dispatch({type: 'increment', data: +this.selectNumber.value})
        
    }
    decreament = () => {
        store.dispatch({type: 'decrement', data: +this.selectNumber.value})

    }
    addIfOdd = () => {
        const count = store.getState()
        if( count > 1 && count % 2 !== 0) {
            console.log('当前为奇数， 不加');
            return
        }
        store.dispatch({type: 'increment', data: +this.selectNumber.value})
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
                    <h1>当前求和为： {store.getState()}</h1>
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
