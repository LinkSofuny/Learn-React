import React from 'react'
import ReactDom from 'react-dom'
// export default class Demo extends React.Component {
//     myRef = React.createRef()
//     showInfo = () => {
//         console.log(this.myRef);
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} onChange={this.showInfo}/>
//             </div>
//         )
//     }
// }
export default function Demo () {

    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    
    // React.useEffect(() => {
    //     console.log(1);
    //     let timer =setInterval(() => {
    //        add()
    //     },1000)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // },[])
    function unmout () {
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }
    function add () {
        setCount( count => count + 1)
    }
    function showInfo() {
        console.log(myRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={myRef} onChange={showInfo}/>
            <h1>Demo: {count}</h1>
            <button onClick={add}>click</button>
            <button onClick={unmout}>unmout</button>
        </div>
    )
}
