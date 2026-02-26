import React, { useState } from 'react';
import './App.css';

function App() {
  // State 1: Input එකේ ලියන text එක තියාගන්න
  const [task, setTask] = useState("");
  // State 2: Task සේරම list එකක් විදිහට තියාගන්න
  const [todoList, setTodoList] = useState([]);

  // Task එකක් add කරන function එක
  const addTask = () => {
    if (task !== "") {
      setTodoList([...todoList, task]); // පරණ list එකට අලුත් task එක එකතු කරනවා
      setTask(""); // Input එක ආයෙත් හිස් කරනවා
    }
  };

  // Task එකක් අයින් කරන function එක
  const deleteTask = (index) => {
    const newList = todoList.filter((_, i) => i !== index);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Add a new task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} 
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;