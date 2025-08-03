import React from 'react';
import { useContext } from 'react';
import {itemContex} from './context'
import './App.css';
const ItemList= () =>{
   const {taskItem , setTaskItem} = useContext(itemContex)
   console.log(taskItem)
    return(
        <>
         <ul className="list-group">

         {taskItem.map(t => {
       return(

 <li className={`list-group-item todo-item d-flex justify-content-between align-items-center mb-3 shadow-sm rounded ${t.done ? "todo-item-success" : ""}` }>
        <span className="fw-semibold fs-6 text-end flex-grow-1 px-3">{t.title}</span>
      <div className="d-flex align-items-center gap-2">
        {t.done ?
         (<button className="btn btn-sm btn-outline-warning rounded-circle">
          <i className="bi bi-x-lg"></i>
        </button>)
         : 
         ( <button className="btn btn-sm btn-outline-success rounded-circle">
          <i className="bi bi-check-lg"></i>
        </button>) }

        <button className="btn btn-sm btn-outline-danger rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
     
    </li>

  )
})}

   
  </ul>
  </>
    )
}

export default ItemList;