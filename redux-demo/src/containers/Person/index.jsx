import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'
import './index.css'


class Person extends Component {
    
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        console.log(this.props.persons);
    }
    render() {
        return (
            <div className='person-component'>
                <h1>我是person</h1>
                <input type="text" placeholder='姓名' ref={c => this.nameNode = c}/>
                <input type="text" placeholder='年龄' ref={c => this.ageNode = c}/>
                <button onClick={this.addPerson}>增加</button>
            </div>
        )
    }
}

export default connect(
    state => ({persons: state}),
    {
        addPerson,
    }
)(Person)
