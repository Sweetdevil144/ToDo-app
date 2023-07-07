import React from "react";

function TaskItem({ task, onRemove }) {
  return (
    <li className="item">
      <input type="checkbox" />
      <p>{task}</p>
      <button 
        className="btn btn-remove" 
        onClick={onRemove}
      >
        -
      </button>
    </li>
  );
}

export default TaskItem;
