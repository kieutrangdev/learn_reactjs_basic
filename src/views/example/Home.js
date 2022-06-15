import React, { Component } from 'react'
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/logo.jpg';
import {connect} from 'react-redux';
 class Home extends Component {
   componentDidMount()
   {
     setTimeout(()=>{
      this.props.history.push('/todo')
     },2000)
   }
   handleDeleteUser = (user) => {
      // console.log(user)
      this.props.deleteUserRedux(user);
   }

   handleCreateUser = () => {
      this.props.addUserRedux();
   }
  render() {
    console.log(this.props.dataRedux)
    let listUsers = this.props.dataRedux
    return (
      <>
         <h1>Home</h1>
         {/* <img src={logo}></img> */}
         <div>
            {listUsers && listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                <div key={item.id}>
                    {index + 1} - {item.name}
                   &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
                )
              })
              
           }

         <button onClick={() => this.handleCreateUser() }>Add new</button>
         </div>

      </>
   
    )
  }
}

//kết nối state react vs redux
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users
  }
}

//kết nối action react redux
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', padload: userDelete}),
    addUserRedux: () => dispatch({type: 'CREATE_USER'}),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Color(Home)) 