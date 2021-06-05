import React, { Component } from 'react'
const msData =[
        {id:'01', title: '消息10000'},
        {id:'02', title: '消息20000'},
        {id:'03', title: '消息30000'}
    ]
export default class Detail extends Component {
    
    render() {
        const { id, title } = this.props.match.params
        let content = msData.find( item => {
            return item.id === id
        })
        return (
            <ul>
                <li>content: {content.title}</li>
                <li>id: {id}</li>
                <li>title: {title}</li>
            </ul>
        )
    }
}
