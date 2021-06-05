import React, { Component } from 'react'
import qs from 'querystring'
const msData =[
        {id:'01', title: '消息10000'},
        {id:'02', title: '消息20000'},
        {id:'03', title: '消息30000'}
    ]
export default class Detail extends Component {
    
    render() {
        const {search} = this.props.location
        console.log(search);
        const { id, title } =qs.parse(search.substring(1))
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
