import React, {Component} from 'react'

class Welcome extends Component{
    
    render(){
        return <h1>Name is {this.props.name} and has skill {this.props.skill}</h1>
    }
}

export default Welcome;