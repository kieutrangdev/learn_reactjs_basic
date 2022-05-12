import React, { Component } from "react";

export default class component extends Component {
  state = {
    firstName : '',
    lastName : '',
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert('check');
  }

  render() {
    return (
      <div>
        {/* <h1>Hello {this.state.name}</h1>
        <input type='text' value={this.state.name} onChange={(event)=>this.handleOnChangeName(event)}/>
        my name is {this.state.name}
        this is {this.state.channel} */}
      <form>
            <label for="fname">First name:</label><br/>
            <input type="text" value={this.state.firstName}
            onChange = {(event)=>this.handleChangeFirstName(event)}
            /><br/>
            <label for="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname"
            value={this.state.lastName}
             onChange = {(event)=>this.handleChangeLastName(event)}
            />
            <br/>
            <input type="submit" name="" onClick={(event)=>this.handleSubmit(event)}/>
      </form>
        
      </div>
    );
  }
}
