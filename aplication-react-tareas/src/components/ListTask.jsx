import React from 'react';
import '../stylesheets/ListTask.css'
import FormTask from './FormTask';
import Task from './Task';
import { useState } from 'react';

function ListTask(){

  const[tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task)
    if ( task.text.trim()){
      task.text = task.text.trim();
      const taskUpdate = [task, ...tasks];
      setTasks(taskUpdate);
    }
  }

  const deleteTask = id => {
    const taskUpdate = tasks.filter(task => task.id !== id);
    setTasks(taskUpdate);
  }

  const completedTask = id => {
    const tasksUpdates = tasks.map(task => {
      if (task.id === id){
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdates)
  }

  return(
    <>
      <FormTask onSubmit={addTask}/>
        <div className='container-list-task'>
          {
            tasks.map((task) =>
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              completedTask={completedTask}
              deleteTask={deleteTask}
            />
            )
          }
        </div>
    </>
  );
}

export default ListTask;