import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
export default class ComponentB extends Component {
    render() {
        return (
            <div className='C-B'>
                <h1>ComponentB</h1>
                {store.getState()}
            </div>
        )
    }
}
