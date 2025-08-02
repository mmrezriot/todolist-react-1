import React from 'react';
import './App.css';
const HeaderList= ()=>{

return(
<>
<div className="mb-5 text-center">
    <h2 className="fw-bold mb-3 text-primary">📝 لیست کارها</h2>
    <div className="input-group shadow-sm w-75 mx-auto">
      <input
        type="text"
        className="form-control rounded-start"
        placeholder="چی باید انجام بشه؟"
      />
      <button className="btn btn-primary rounded-end" type="button">
       ایجاد 
      </button>
    </div>
  </div>
</>
)



}


export default HeaderList