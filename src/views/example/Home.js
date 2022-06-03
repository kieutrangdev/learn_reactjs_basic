import React, { Component } from 'react'
import { withRouter } from "react-router";
import Color from '../HOC/Color';
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
export default Color(Home)