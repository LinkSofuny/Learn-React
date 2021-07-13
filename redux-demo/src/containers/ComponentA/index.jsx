import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
import { addAction, addActionAsync } from '../../redux/actions/addAction'
export default class ComponentA extends Component {
    addCount = () => {
        store.dispatch(addAction(1))
    }
    addCountAsync = () => {
        store.dispatch(addActionAsync(1, 1000))
    }
    render() {
        const result = store.getState().add
        return (
            <div className='C-A'>
                <h1>ComponentA</h1>
                <p>count: {result}</p>
                <button onClick={this.addCount} >click add</button>
                <button onClick={this.addCountAsync} >click asyncAdd</button>
            </div>
        )
    }
}
