import React,{ useState } from "react";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function Task({TASKS}) {
  const[filter, setFilter] = useState['All']
  function handleDel(e){
    e.preventDefault()
    setFilter(e.target.value)
  }


  const taskFiltered = TASKS.filter((task)=>{
    if(filter === 'All'){
      return true
    }else{
      return task.id === filter
    }
  })


  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete" onClick={handleDel}>X</button>
    </div>
  );
}


export default Task;
