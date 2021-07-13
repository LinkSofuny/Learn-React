import React, { Component } from 'react'
import './index.css'
import store from '../../redux/store'
import { addPerson } from '../../redux/actions/addPersonAction'
export default class ComponentB extends Component {
    addPerson = () => {
        store.dispatch(addPerson({
            name: 'Link',
            age: 20
        }))
    }
    render() {
        const result = store.getState().addPerson
        return (
            <div className='C-B'>
                <h1>ComponentB</h1>
                <button onClick={this.addPerson}>click addPerson</button>
                <ul>
                    {
                        result.map( (item, index)=> {
                            return <li key={index}> {item.name} :{item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
