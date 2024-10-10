import React from 'react'
import { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(title.trim() === "" || description.trim() === ""){
            alert("Please fill out all fields");
            return;
        }
        addTask({title, description});
        setTitle("");
        setDescription("");
        
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Title: </label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
            <label>Description: </label>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ></textarea>
        </div>
        <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
