import React, { Component } from 'react'
import axios from 'axios'
export default class ListUsers extends Component {

  state = {
    listUsers: []
  }
  async componentDidMount()
  {

    //đồng bộ, lấy data rồi mới thực hiện hàm them
    // axios.get('https://reqres.in/api/users?page=1')
    // .then(res => {
    //   console.log(res.data.data)
    // })

    let res = await axios.get('https://reqres.in/api/users?page=1')
    console.log(res.data.data)
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : []
     
    })
    
  }
  render() {
    let {listUsers} = this.state
    return (
      <div className='list-user-container'>
        <div className='title'>
            Fetch all list user
        </div>
        <div className='list-user-content'>
          { listUsers && listUsers.length > 0 &&
          listUsers.map((item,index) => {
            return(
              <div className='child' key={item.id}>
                {index+1}-{item.first_name} {item.last_name}
              </div>
            )
          })}
         
        </div>
      </div>
       
    )
  }
}
