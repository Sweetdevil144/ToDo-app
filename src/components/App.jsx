import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import "../styles.css"
function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  function removeTask(indexToRemove) {
    setTasks((prevTasks) => {
      return prevTasks.filter((task, index) => index !== indexToRemove);
    });
  }

  return (
    <div className="box" id="heading">
      <TaskInput onSubmit={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem 
            key={index} 
            task={task} 
            onRemove={() => removeTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
