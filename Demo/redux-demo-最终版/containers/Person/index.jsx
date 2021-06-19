import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import './index.css'


class Person extends Component {
    
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        this.props.addPerson({name, age})
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() {
        return (
            <div className='person-component'>
                <h1>我是person, {this.props.count}</h1>
                <input type="text" placeholder='姓名' ref={c => this.nameNode = c}/>
                <input type="text" placeholder='年龄' ref={c => this.ageNode = c}/>
                <button onClick={this.addPerson}>增加</button>
                <ul>
                    {
                        this.props.persons.map( (item, index) => {
                          return <li key={index}> {item.name}: {item.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        persons: state.persons,
        count: state.count
    }),
    {
        addPerson,
    }
)(Person)
