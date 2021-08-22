
import React from 'react'

const Sample =() =>{
    // return (
    //     <div>
    //         <h1>Hello Dhaval</h1>
    //     </div>
    // )

    return React.createElement(
            'div', 
            {id: 'divMessage', className: 'some-div'}, 
            React.createElement(
                'h1',
                {id: 'header', className: 'some-header'}, 
                 'Hello Dhaval'
            ))
}

export default Sample