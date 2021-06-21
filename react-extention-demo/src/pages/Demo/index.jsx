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

    // React.useEffect(() => {
    //     setInterval(() => {
    //        add()
    //     },1000)
    // })
    // React.useEffect(() => {
    //     setInterval(() => {
    //        add()
    //     },1000)
    // },[])
    React.useEffect(() => {
        setInterval(() => {
           add()
        },1000)
    },[count])
    
    function add () {
        setCount( count => count + 1)
    }

    return (
        <div>
            <h1>Demo: {count}</h1>
            <button onClick={add}>click</button>
        </div>
    )
}
