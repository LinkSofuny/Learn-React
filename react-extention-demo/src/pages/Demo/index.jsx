import React from 'react'

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

    function add () {
        setCount( count => ++count)
    }

    return (
        <div>
            <h1>Demo: {count}</h1>
            <button onClick={add}>click</button>
        </div>
    )
}
