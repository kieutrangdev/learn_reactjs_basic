import React, { Component } from 'react'

export default class Child extends Component {
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
        console.log(this.state);
      }
      state = {
        showJobs : false
      }
      handleShowHide = () => {
        this.setState({
          showJobs: !this.state.showJobs
        })
      }
      handleOnClick= (job) => {
        console.log(job)
        this.props.deleteJob(job)
      }
    render() {
        let {name,age,arrJobs} = this.props
        let {showJobs} = this.state
        
    return (
      <>
        {showJobs === false ? 
        <div>
            <button onClick={()=>this.handleShowHide()}>Show</button>
          </div> 
          :
          <>
          <div className='jobs'>
          {
            arrJobs.map((item,index) => {
              
              return (
                
                // <div>i</div>
                <div key={item.id}>
                {item.title} - {item.salary} $ <></> <span onClick={()=>this.handleOnClick(item)}>x</span> </div>
              
              )
              
            })
          }
          </div>
          
            <div><button onClick={()=>this.handleShowHide()}>Hide</button></div>
          </>
        }
      </>
    )
  }
}
