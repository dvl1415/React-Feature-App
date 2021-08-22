import React, { Component } from 'react'

class Student extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             Id: '',
             name: '',
             email: '',
             city: '',
             students: [],
             student: {}
        }
    }
    
    componentDidMount(){
        this.getStudents()
    }

    getStudents(){
        fetch(`http://localhost:1234/api/student`)
        .then(response => response.json())
        .then(data => this.setState({students : data}))
    }

    getStudentById(id){

    }

    addStudent(){
        const requestOptions = {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }

        fetch(`http://localhost:1234/api/student`, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.clearFields()
            this.getStudents()
        })
    }

    clearFields(){
        this.setState({
            name: '',
            email: '',
            city: ''
        })
    }

    updateStudent(){
        const requestOptions = {
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                city: this.state.city
            })
        }
        let id = this.state.Id

        fetch(`http://localhost:1234/api/student/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.clearFields()
            this.getStudents()
        })
    }

    deleteStudent(id){
        const requestOptions = {
            method: 'DELETE',
            headers: {'content-type': 'application/json'}
        }

        fetch(`http://localhost:1234/api/student/${id}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            this.clearFields()
            this.getStudents()
        })
    }

    editStudent(id){
        fetch(`http://localhost:1234/api/student/${id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                Id: data[0].Id,
                name: data[0].name,
                email: data[0].email,
                city: data[0].city,
            })  
        })
    }

    render() {
        return (
            <div>
               <h2>Student List</h2> 
               <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                                <th>
                                    <input type="text" 
                                           value={this.state.name} 
                                           onChange={(event)=>{this.setState({name: event.target.value})}} />
                                </th>
                                <th>
                                    <input type="text" 
                                           value={this.state.email} 
                                           onChange={(event)=>{this.setState({email: event.target.value})}} />
                                </th>
                                <th>
                                    <input type="text" 
                                           value={this.state.city} 
                                           onChange={(event)=>{this.setState({city: event.target.value})}} />
                                </th>
                                <th>
                                    <button className="btn btn-primary" onClick={() => this.addStudent()}>Add</button> &nbsp;&nbsp;
                                    <button className="btn btn-warning" onClick={() => this.updateStudent()}>Update</button>
                                </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student =>(
                            <tr key={student.Id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.city}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => this.editStudent(student.Id)}>Edit</button> &nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={() => this.deleteStudent(student.Id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
               </table>
            </div>
        )
    }
}

export default Student