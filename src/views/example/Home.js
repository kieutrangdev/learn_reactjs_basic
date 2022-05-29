import React, { Component } from 'react'
import { withRouter } from "react-router";

 class Home extends Component {
   componentDidMount()
   {
     setTimeout(()=>{
      this.props.history.push('/todo')
     },2000)
   }
  render() {
    return (
      <h1>Home</h1>
    )
  }
}
export default withRouter(Home)