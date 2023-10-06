import React from "react";

function TaskInput({ onSubmit }) {
  function submitForm(event) {
    event.preventDefault();
    const { value } = event.target.newItem;
    const trimmedValue = value.trim();
    if(trimmedValue){
      onSubmit(trimmedValue);
      event.target.newItem.value = ""; 
    }
  }

  return (
    <form className="search-box item" onSubmit={submitForm}>
      <input
        type="text"
        name="newItem"
        placeholder="New task"
        autoComplete="off"
      />
      <button name="button" className="btn btn-add" type="submit">
        +
      </button>
    </form>
  );
}

export default TaskInput;
