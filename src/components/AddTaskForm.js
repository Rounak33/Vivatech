import React, { useState } from 'react';
import './AddTaskForm.css';


function AddTaskForm(props) {
    const [data,setData]=useState({taskName:'',taskDescription:'',taskList:''});
    const handleName=(events)=>{
        setData((prevState)=>{
            return {...prevState,taskName:events.target.value}
        })
    }
    const handleDescription=(events)=>{
        setData((prevState)=>{
            return {...prevState,taskDescription:events.target.value}
        })
    }
    const handleList=(events)=>{
        setData((prevState)=>{
            return {...prevState,taskList:events.target.value}
        })
    }
    const handleSubmit=(events)=>{
        events.preventDefault();
        const Obj={taskName:data.taskName,taskDescription:data.taskDescription,taskList:data.taskList};
        props.addForm(Obj);
        setData({taskName:'',taskDescription:'',taskList:''});// here i am erase data to empty the user inputs
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='name'>
            <label><b>Name:</b></label>
            <input type='text' onChange={handleName} value={data.taskName} required/>
        </div>
        <div className='desc'>
            <label><b>Description:</b></label>
            <input type='text' onChange={handleDescription} value={data.taskDescription} required/>
        </div>
        <div className='list'>
            <select onChange={handleList} value={data.taskList} required>
                <option>List 1</option>
                <option>List 2</option>
                <option>List 3</option>
            </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default AddTaskForm