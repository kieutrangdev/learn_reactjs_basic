import React, { Component } from 'react'
import { toast } from 'react-toastify'

export default class AddToDo extends Component {
    state = {
        title : ''
    }
    
    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleClick = () => {
        if(!this.state.title) {
            // alert('Missing title')
            toast.error('Missing title')
            return
        }
        let todo = {
            id: Math.floor(Math.random() *1001),
            title: this.state.title
        }
   
        this.props.addNewToDo(todo)
       this.setState({
           title:''
       })
    }
  render() {
      let {title} = this.state
    return (
        <div className='add-todo'>
            <input type='text' value={title}  onChange={(e)=>this.handleOnChangeTitle(e)}/>
            <button className='btn add' onClick={()=>this.handleClick()}>Add</button>
        </div>
    )
  }
}
