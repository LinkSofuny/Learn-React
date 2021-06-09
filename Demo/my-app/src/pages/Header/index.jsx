import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    goTo = () => {
        this.props.history.goForward()

    }
    goBack = () => {
        this.props.history.goBack()
    }
    render() {
        return (
            <div>
                <h1>Router-Demo</h1>
                <button onClick={this.goTo}>go</button>
                <button onClick={this.goBack}>back</button>
            </div>
        )
    }
}
export default withRouter(Header)