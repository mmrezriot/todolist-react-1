import React from 'react';
import { useContext } from 'react';
import {itemContex} from './context'
import './App.css';
const ItemList= () =>{

   const {taskItem , setTaskItem} = useContext(itemContex)

     const eventDoneTask =(id)=>{

      const index = taskItem.findIndex(t=>t.id ===id)
      const newTaskItem =[...taskItem];
      newTaskItem[index].done = !newTaskItem[index].done
      setTaskItem(newTaskItem);
  }

  const deleteTaskItem = (id) =>{
    let newTask = taskItem.filter(t => t.id !== id);
    setTaskItem(newTask)

  }

   if (taskItem.length) {
    
    return(
        <>
         <ul className="list-group">
         {taskItem.map(t => {
       return(
 <li className={`list-group-item todo-item d-flex justify-content-between align-items-center mb-3 shadow-sm rounded ${t.done ? "todo-item-success" : ""}` }>
        <span className="fw-semibold fs-6 text-end flex-grow-1 px-3">{t.title}</span>
      <div className="d-flex align-items-center gap-2">
        {t.done ?
         (<button className="btn btn-sm btn-outline-warning rounded-circle"  onClick={()=>{eventDoneTask(t.id)}}>
          <i className="bi bi-x-lg"></i>
        </button>)
         : 
         ( <button className="btn btn-sm btn-outline-success rounded-circle" onClick={()=>{eventDoneTask(t.id)}}>
          <i className="bi bi-check-lg"></i>
        </button>) }

        <button className="btn btn-sm btn-outline-danger rounded-circle" onClick={()=>{deleteTaskItem(t.id)}}> 
          <i className="bi bi-trash"></i>
        </button>
      </div>
     
    </li>

  )
})}

   
  </ul>
  </>
    )
   } else {

    return <h2 className="text-red"> موردی موجود نیست</h2>
    
   }
 
}

export default ItemList;