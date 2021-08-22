import React, { Component } from 'react'

export class ClassBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Welcome to brand new React App'
        }
        // 3rd Approach
        //this.clickHandler = this.clickHandler.bind(this)
    }
    

    //  clickHandler(event) {
    //     this.setState({
    //         message: 'Thank you for Visiting'
    //     })
    // }

    clickHandler = () =>{
        this.setState({
            message: 'Thank you for Visiting'
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button className="btn btn-primary" onClick={this.clickHandler}>Submit Data</button>  */}
                 {/* 1st Approach */}
                {/* <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Submit Data</button>  */}
                 {/* 2nd Approach */}
                {/* <button className="btn btn-primary" onClick={(event)=>this.clickHandler(event)}>Submit Data</button>  */}
                <button className="btn btn-primary" onClick={this.clickHandler}>Submit Data</button> 
            </div>
        )
    }
}

export default ClassBinding