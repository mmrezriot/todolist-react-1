import React, { useContext, useState } from 'react';
import { itemContex } from './context';
import './App.css';
const HeaderList= ()=>{

  const {taskItem , setTaskItem} = useContext(itemContex)

  const [task , setTask]= useState([""])

  const handleSetTask = (e)=>{
    setTask(e.target.value)
  } 

  const addTask = (e)=>{
    if(!task.trim()) {
      alert("لطفا یک عنوان برای کار وارد کنید");
      e.preventDefault();
      return;
    } else{
    e.preventDefault();
    setTaskItem([...taskItem , {id: crypto.randomUUID() , title : task , done :false}])
    setTask("")
  }
  }


return(
<>
<div className="mb-5 text-center">
  <h2 className="fw-bold mb-3 text-primary">📝 لیست کارها</h2>
  <form
    className="input-group shadow-sm w-75 mx-auto" onSubmit={addTask} >
    <input
      type="text"
      className="form-control rounded-end"
      placeholder="چی باید انجام بشه؟"
      onChange={handleSetTask}
      value={task}
    />
    <button className="btn btn-primary rounded-start" type="submit">
      ایجاد
    </button>
  </form>
</div>

</>
)



}


export default HeaderList