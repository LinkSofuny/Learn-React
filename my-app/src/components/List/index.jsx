import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render(props) {
        console.log(this.props.items);
        return (
            <div className="list">
                <Item />
            </div>
        )
    }
}
