import React from 'react'
import ReactDom from 'react-dom'
// class Demo extends React.Component {
//     render() {
//         return (
//             <div>
//                 Demo
//             </div>
//         )
//     }
// }
export default function Demo () {

    const [count, setCount] = React.useState(0)

    
    React.useEffect(() => {
        console.log(1);
        let timer =setInterval(() => {
           add()
        },1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    function unmout () {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    function add () {
        setCount( count => count + 1)
    }

    return (
        <div>
            <h1>Demo: {count}</h1>
            <button onClick={add}>click</button>
            <button onClick={unmout}>unmout</button>
        </div>
    )
}
