import React from 'react';
import './App.css';
const ItemList= () =>{
    return(
        <>
         <ul className="list-group">
    <li className="list-group-item todo-item d-flex justify-content-between align-items-center mb-3 shadow-sm rounded">
      <div className="d-flex align-items-center gap-2">
        <button className="btn btn-sm btn-outline-success rounded-circle">
          <i className="bi bi-check-lg"></i>
        </button>
        <button className="btn btn-sm btn-outline-warning rounded-circle">
          <i className="bi bi-x-lg"></i>
        </button>
        <button className="btn btn-sm btn-outline-danger rounded-circle">
          <i className="bi bi-trash"></i>
        </button>
      </div>
      <span className="fw-semibold fs-6 text-end flex-grow-1 px-3">🧪 آیتم تستی اول</span>
    </li>
  </ul>
  </>
    )
}

export default ItemList;