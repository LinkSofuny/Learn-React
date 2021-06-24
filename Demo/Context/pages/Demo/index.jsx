import React, { Component } from 'react'
import './index.css'
// import C from '../C'
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
export default class index extends Component {
    state = {
        name: 'Link',
        age: 18
    }
    render() {
        const {name, age} = this.state
        return (
            <div className='grand'>
                <h1>我是祖组件</h1>
                <Provider value={{name,age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div className='father'>
                <h1>我是父组件</h1>
                <C />
            </div>
        )
    }
}
//  class C extends Component {
//     static contextType = MyContext
//     render() {
//         const {name, age} = this.context
//         return (
//             <div className='son'>
//                 <h1>我是孙组件</h1>
//                 <p>我是:{name}, 今年: {age}</p>
//             </div>
//         )
//     }
// }


function C() {
    return (
        <div className='son'>
            <h1>我是孙组件</h1>
            <Consumer>
                {
                    value => <p>我是:{value.name}, 今年: {value.age}</p>
                }
            </Consumer>
        </div>
    )
}