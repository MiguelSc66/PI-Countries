import React, { useState } from 'react';

const ActivityForm = () => {
  const [nombre, setNombre] = useState('');
  const [dificultad, setDificultad] = useState('facil');
  const [duracion, setDuracion] = useState('');
  const [temporada, setTemporada] = useState('');
  const [paises, setPaises] = useState([]);
  
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleDificultadChange = (event) => {
    setDificultad(event.target.value);
  };

  const handleDuracionChange = (event) => {
    setDuracion(event.target.value);
  };

  const handleTemporadaChange = (event) => {
    setTemporada(event.target.value);
  };

  const handlePaisesChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setPaises(selectedOptions);
  };

  const handleSubmit = () => {
    if (nombre.match(/\d/)) {
      alert('El nombre no puede contener números.');
      return;
    }

    if (parseInt(duracion) > 24) {
      alert('La duración no puede exceder las 24 horas.');
      return;
    }

    // Aquí puedes realizar la lógica para crear la actividad turística
    alert('Actividad turística creada exitosamente!');
    // Limpia los campos del formulario
    setNombre('');
    setDificultad('facil');
    setDuracion('');
    setTemporada('');
    setPaises([]);
  };

  return (
    <div>
      <h1>FORM PAGE</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={handleNombreChange} required /><br /><br />

        <label>Dificultad:</label>
        <select value={dificultad} onChange={handleDificultadChange} required>
          <option value="facil">Fácil</option>
          <option value="intermedia">Intermedia</option>
          <option value="avanzada">Avanzada</option>
        </select><br /><br />

        <label>Duración (horas):</label>
        <input type="number" value={duracion} onChange={handleDuracionChange} min="1" required /><br /><br />

        <label>Temporada:</label>
        <input type="text" value={temporada} onChange={handleTemporadaChange} required /><br /><br />

        <label>Países:</label>
        <select multiple value={paises} onChange={handlePaisesChange} required>
          <option value="pais1">País 1</option>
          <option value="pais2">País 2</option>
          <option value="pais3">País 3</option>
          {/* Agrega más opciones de países aquí */}
        </select><br /><br />

        <button type="button" onClick={handleSubmit}>Crear Actividad Turística</button>
      </form>
    </div>
  );
};

export default ActivityForm;