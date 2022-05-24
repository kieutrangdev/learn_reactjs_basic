import React, { Component } from 'react'
import AddToDo from './AddToDo'
import './ListToDo.scss'

import { toast } from 'react-toastify';
export class ListToDo extends Component {
    state = {
        listToDos: [
            {id: 1,title: 'Doing homework'},
            {id: 2,title: 'Making video'},
        ],
        editToDo : {}
    }
    addNewToDo = (todo) => {
      this.setState({
        listToDos: [...this.state.listToDos,todo]
      })
      toast.success("Add success")
    }
    handleUpdateToDo = (todo) => {
      let {editToDo ,listToDos} = this.state
      let isEmptyObj = Object.keys(editToDo).length ===0  

      //save
      if(isEmptyObj === false && editToDo.id == todo.id) 
      {
        let listToDosCopy = [...listToDos]
        let objIndex = listToDosCopy.findIndex((item => item.id == todo.id));

        

        //Update object's name property.
        listToDosCopy[objIndex].title = editToDo.title
        this.setState({
          listToDos: listToDosCopy,
          editToDo: {}
        })
        toast.success("Update success")
        return
      }
      this.setState ({
        editToDo: todo
      })
     
    }
    handleDeleteToDo = (todo) => {
      let currentToDo= this.state.listToDos
      currentToDo = currentToDo.filter(item => item.id !== todo.id)
      this.setState({
        listToDos : currentToDo
      })
      toast.success("Delete success")
    }

    handleOnChangeEditToDo = (event) => {
     
      let editToDoCopy = {...this.state.editToDo}
      editToDoCopy.title = event.target.value
      // conso
      this.setState( {
        editToDo: editToDoCopy
      
      })
   
    }
  render() {
      //let listToDos = this.state.listToDos
      let {listToDos ,editToDo} = this.state

      let isEmptyObj = Object.keys(editToDo).length ===0 
    return (
      <div className='list-to-do-container'>
          <AddToDo addNewToDo={this.addNewToDo}/>
          <div className='list-todo-content'>
            {
              listToDos && listToDos.length > 0 &&
                listToDos.map((item,index)=>{
                  return(
                    <div className='todo-child' key={item.id}>
                      {isEmptyObj ===true?
                      <span>{item.id } - {item.title} </span>
                        :
                        <>
                          {editToDo.id === item.id ?
                          <span>
                          {item.id } - 
                          <input
                          onChange = {(event)=>this.handleOnChangeEditToDo(event)}
                          value={editToDo.title}
                          /> 
                          </span>
                          :
                          <span>{item.id } - {item.title} </span>

                          }
                        </>
                      }
                      
                      <button className='edit btn' onClick={()=>this.handleUpdateToDo(item)}>
                       {
                         isEmptyObj === false && editToDo.id == item.id ?
                         'Save' : 'Edit'
                       }
                      </button>
                      <button className='btn' onClick={()=>this.handleDeleteToDo(item)} >Delete</button>
                    </div>
                  )
                })
            }
              
              
          </div>
      </div>
    )
  }
}

export default ListToDo