import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import CHome from './CHome'
import CAbout from './CAbout'
export default class Home extends Component {
    render() {
        return (
            <div className="child-router">
                <h1>我是HOME</h1>
                <div className="top">
                    <MyNavLink to='/home/cHome'>cHome</MyNavLink>
                    <MyNavLink to='/home/cAbout'>cAbout</MyNavLink>
                </div>
                <div className="footer">
                    <Route path='/home/cHome' component={CHome} />
                    <Route path='/home/cAbout' component={CAbout} />
                </div>
            </div>
        )
    }
}
