import React, { Component, useState } from 'react'
function A(props) {
    const [person, SetPerson] = useState({
        name:'link',
        age: 18
    })
    return (
        <div>
            <h4>A Component</h4>
            {props.render(person)}
        </div>
    )
}



export default A