import React, { Component, PureComponent } from 'react'

export default class index extends PureComponent {
    state = {
        name: 'link'
    }
    shouldComponentUpdate(nextProps,nextState) {
        // 如数据未变化， 阻止render
        console.log('改变前', this.state, this.props);
        console.log('改变后', nextState, nextProps);
        return !this.state.name === nextState
    }
    handleClick = () => {
        this.setState({})
    }
    render() {
        console.log('parent-Render');
        return (
            <div>
                <h1 style={{backgroundColor:'red'}}>父组件： {this.state.name}</h1>
                <button onClick={this.handleClick}>click</button>
                <Child />
            </div>
        )
    }
}
class Child extends Component {
    render() {
        console.log('child-Render');
        return (
            <div>
                <h1>子组件</h1>
            </div>
        )
    }
}
