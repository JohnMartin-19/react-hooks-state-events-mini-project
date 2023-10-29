import React from "react";
import { TASKS } from "../data";

function TaskList() {
  const taskList = TASKS.map((TASK)=>{
    return<li key={TASK}></li>
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
