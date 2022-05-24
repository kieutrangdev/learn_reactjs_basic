import React, { Component } from "react";
import AddComponent from "./AddComponent";
import Child from "./Child";



export default class component extends Component {
  state = {
    
    arrJobs : [
      {id: 'job1',title:'Developer',salary:'500'},
      {id: 'job2',title:'Tester',salary:'400'},
      {id: 'job3',title:'Tester',salary:'400'},
    ]
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs , job]
    })
  }

  deleteJob = (job) => {
    let currentJob = this.state.arrJobs
    currentJob = currentJob.filter(item => item.id !== job.id)
    this.setState({
      arrJobs : currentJob
    })
  }
  render() {
   

    return (
      <div>
      
        <Child  arrJobs={this.state.arrJobs} deleteJob={this.deleteJob}/>
        <AddComponent addNewJob={this.addNewJob } />
      
      
        
      </div>
    );
  }
}
