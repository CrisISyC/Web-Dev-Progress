import React from "react";
import "../stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";


function Task({ id, text , completed , completedTask , deleteTask }){
  return(
      <div className={completed ? "container-task completed" : "container-task"}>
          <div 
            className="text-task"
            onClick={() => completedTask(id)}>
            {text}
          </div>
          <div 
            className="container-icon-task"
            onClick={() => deleteTask(id)}>
            <AiOutlineCloseCircle className="icon-task"/>
          </div>
      </div>
  );
}

export default Task;