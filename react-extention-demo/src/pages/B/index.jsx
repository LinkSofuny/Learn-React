import React, { Component } from 'react';

class B extends Component {
    render() {
        const {name, age} = this.props
        return (
        <div>
            <h4>B Component</h4>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
        );
    }
}

export default B;