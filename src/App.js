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

  const deleteTareas = (id) => {
    const updatedTasks = tareas.filter((task) => task.id !== id);
    setTareas(updatedTasks);
  };

  const editTask = (id, newText) => {
    setTareas(
      tareas.map((task) =>
        task.id === id ? { ...task, text: newText, isEditing: false } : task
      )
    );
  };

  const toggleEditing = (id) => {
    setTareas(
      tareas.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
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
            <button
              className="delete-btn"
              onClick={() => deleteTareas(task.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      <div className="task-list">
        {tareas.map((task) => (
          <div key={task.id} className="task-item">
            {task.isEditing ? (
              <input
                type="text"
                value={task.text}
                onChange={(e) => editTask(task.id, e.target.value)}
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button onClick={() => toggleEditing(task.id)}>
              {task.isEditing ? "Guardar" : "✏️"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
