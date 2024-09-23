import React, { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleInputChange = (e) => {
    setNuevaTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tareas.filter((task) => task.id !== id);
    setTareas(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleInputChange}
          placeholder="Escribe una tarea"
        />
        <button type="submit">Agregar Tarea</button>
      </form>
      <div className="task-list">
        {tareas.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
