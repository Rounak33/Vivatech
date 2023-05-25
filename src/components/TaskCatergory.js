import React from 'react'

function TaskCatergory({info,handleDelete,Heading}) {
   
  return (
    <div>
        <h2>{Heading}</h2>
        
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
                    <button>Edit</button><br />
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
    </div>
  )
}

export default TaskCatergory