import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter, HashRouter} from 'react-router-dom'

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}
ReactDOM.render(
    <BrowserRouter getUserConfirmation={getConfirmation}>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))