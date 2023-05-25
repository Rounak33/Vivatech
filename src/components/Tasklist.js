import React, { useState } from 'react'
import AddTaskForm from './AddTaskForm'
import TaskCard from './TaskCard'

function Tasklist() {
    const [task,setTask]=useState([]);
    const handleFormAdd=(data)=>{
        setTask((oldValue)=>{
            return(
              [...oldValue,data]
            )
        })
    }
    const handleDelete=(id)=>{
        setTask((data)=>{
            return(
              data.filter((data2,index)=>{
                return(
                  index!=id
                )
              })
            )
        })
    }
    const handleEdit=(id,Obj)=>{
      setTask(
        task.map((data,index)=>{
          if(index===id){
            data.taskName=Obj.username;
            data.taskDescription=Obj.userDescription;
          }
          return data;
        })
      )
    }
  return (
    <div>
        <AddTaskForm addForm={handleFormAdd}/>
        {
            task.length>0 ? <TaskCard info={task}  handleDelete={handleDelete} handleEdit={handleEdit}/> :(
                <h2>Please Create some tasks to see the results </h2>
            ) 
        }
    </div>
  )
}

export default Tasklist