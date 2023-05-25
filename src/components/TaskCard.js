import React, { useState } from 'react';
import {CSVLink} from 'react-csv';
import './TaskCard.css';


function TaskCard({info,handleDelete,handleEdit}) {
    const [isedit,setIsedit]=useState(false);
    const [isdata,setIsdata]=useState({username:'',userDescription:''})
   const setUpdate=()=>{
    setIsedit(true);
   }
   const handleSave=(index)=>{
    setIsedit(false);
    handleEdit(index,isdata);
    console.log(isdata);
   }
  return (
    
  <>
  {
    info.map((data,index)=>{
        return (
            
            <div key={index}>
                <div>
                    
                    {data.taskName}
                </div>
                <div>
                    {data.taskDescription}
                </div>
                <div>
                  {
                    isedit ? (
                        <div>
                            <input
                             type='text'
                             placeholder='Enter task Name'
                             onChange={(e)=>setIsdata((prevstate)=>{
                                return {...prevstate,username:e.target.value}
                             })}
                             />
                             <input 
                             type='text'
                             placeholder='Enter task Description'
                             onChange={(e)=>setIsdata((prevstate)=>{
                                return {...prevstate,userDescription:e.target.value}
                             })}
                             />
                             <br/>
                             <button
                             onClick={()=>handleSave(index)}
                             >Save</button>
                        </div>
                    ) : (
                        <button
                        onClick={setIsedit}
                        >Edit</button>
                    )
                  }
                    <button onClick={()=>handleDelete(index)}>
                        Delete
                    </button>
                    <div>
                        <select>
                            <option>List 1</option>
                            <option>List 2</option>
                            <option>List 3</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    })
  }
  <button><CSVLink data={info} filename='Vivatech-frontend'>Send data to excel file</CSVLink></button>
  </>
  )
}

export default TaskCard