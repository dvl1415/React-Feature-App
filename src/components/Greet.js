import React from 'react'

function Greet(props){
    console.log(props)
    const {name, skill} = props
    return <h1>Name is {name} and has skill {skill}</h1>
}

export default Greet