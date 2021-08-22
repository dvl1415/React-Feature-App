import React from 'react'

function FunctionBinding() {

    function clickHandler() {
        console.log('This is working') 
    }

    return (
        <div>
           <button className="btn btn-primary" onClick={clickHandler}>Click Me</button> 
        </div>
    )
}

export default FunctionBinding