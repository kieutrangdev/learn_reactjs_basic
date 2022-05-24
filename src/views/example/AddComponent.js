import React, { Component } from 'react'

export default class AddComponent extends Component {
    state = {
        titleJob: '',
        salary:''
    }

    handleChangetitleJob = (event) => {
        this.setState({
          titleJob: event.target.value
        })
      }
      handleChangeSalary = (event) => {
        this.setState({
          salary: event.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.titleJob || !this.state.salary)
        {
          alert('Missing required params');
          return;
        }
        console.log(this.state);
        this.props.addNewJob({
          id: Math.floor(Math.random() *1001),
          title : this.state.titleJob,
          salary : this.state.salary
      })
        
      }
    
  render() {
    return (
      <>
        <label>Job:</label>
        <br/>
       <input type="text"
        onChange = {(event)=>this.handleChangetitleJob(event)}
        /><br/>
        <label for="lname">salary:</label><br/>
        <input type="text" id="lname" name="lname"
        
        onChange = {(event)=>this.handleChangeSalary(event)}
        />
        <br/>
        <input type="submit" name="" onClick={(event)=>this.handleSubmit(event)}/> 
      </>
    )
  }
}
