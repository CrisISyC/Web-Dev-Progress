import React from "react";
import { useState } from 'react';
import '../stylesheets/FormTask.css';
import { v4 as uuidv4 } from 'uuid';


function FormTask(props){

  const [ input , setInput ] = useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  } 

  const handleShipment = e => {
    //Prevenir que la pagina se recargue cada que generamos una tarea
    e.preventDefault();

    const newTask ={
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
  }

    return(
      <form
        className="task-form"
        onSubmit={handleShipment}>
        <input
            className="input-task"
            type="text"
            placeholder="Add a task"
            name="text"
            onChange={handleChange}
        />
        <button className="button-task">
          Add Task
        </button>
      </form>
    )
}

export default FormTask;