import React, { useState } from 'react'

function ToDo() {
  const [inputValue, setInputValue] = useState("")
  const [todo, setTodo] = useState([])

  function handleInputChange(e) {
    setInputValue(e.target.value)
  }

  function addTodo() {
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    setTodo((prev) => [...prev, newTodo])
    setInputValue("")
  }

  function deleteToDo(id) {
    setTodo((prev) => prev.filter((t) => t.id !== id))
  }

  function toggleComplete(id) {
    setTodo((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  return (
    <div>
      <h1>Todo List ✅</h1>

      <div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todo.map((item) => (
        <div key={item.id} style={{ marginTop: "10px" }}>
          
          
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => toggleComplete(item.id)}
          />

         
          <span
            style={{
              marginLeft: "10px",
              textDecoration: item.completed ? "line-through" : "none"
            }}
          >
            {item.text}
          </span>

          
          <button
            onClick={() => deleteToDo(item.id)}
            style={{ marginLeft: "10px" }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  )
}

export default ToDo