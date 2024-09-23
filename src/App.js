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
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
