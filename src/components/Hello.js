import React, { Component } from 'react'

 class Hello extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: `Hello Guys, Welcome to ReactJS - ${this.props.name}`
        }
    }
    

    render() {
        return (
            <div>
               <h1>{this.state.message}</h1> 
            </div>
        )
    }
}

export default Hello