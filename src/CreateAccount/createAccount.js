import React from 'react';


class createAccount extends Component {
     
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            middleInitial: '',
            lastName: '',            
            dob: '',
            hireDate: '',
            username: ''
        }
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                    
                    <label>Middle Initial:</label>
                    <input type='text' value={this.state.middleInitial} onChange={this.handleMiddleInitialChange}></input>
                   
                    <label>Last Name:</label>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange}></input>

                    <label>Date of Birth:</label>
                    <input type='text' value={this.state.dob} onChange={this.handleBirthdayChange}></input>

                    <label>Date of Hire:</label>
                    <input type='text' value={this.state.hireDate} onChange={this.handleHireDateChange}></input>

                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>

               </div>
               <button type='submit'>Create New Account!</button>
            </form>
        )
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleMiddleInitialChange = (event) => {
        this.setState({
            middleInitial: event.target.value
        })
    }
 
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleBirthdayChange = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    handleHireDateChange = (event) => {
        this.setState({
            hireDate: event.target.value
        })
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`
        ${this.state.firstName} 
        ${this.state.lastName} 
        ${this.state.middleInitial} 
        ${this.state.dob} 
        ${this.state.hireDate} 
        ${this.state.username}`)
        event.preventDefault() //prevents page refreash second look
        
        }
}



export default createAccount;