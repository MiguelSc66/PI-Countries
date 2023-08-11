import React, { useEffect, useState } from 'react';
import img from "../img/pexels-james.jpg"
import style from "./form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../Redux/actions/actions';
import { getCountries } from '../Redux/actions/actions';
import { validateActivityForm } from './validation';
import { Link } from 'react-router-dom';

export default function Formu() {
  const [activity, setActivity] = useState({Nombre:"", Dificultad:"", Duracion:"", Temporada:"", countries:[] })
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const countriesList = useSelector((state) => state.countries);
  const sortedCountries = countriesList.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));


  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch])

  const handleChange = (event) => {
    const {name, value} = event.target;
    const newActivities = {...activity, [name]: value}
    
    setActivity(
      newActivities,
    );
    const ErrorsDetec = validateActivityForm({...activity, [name]: value})
    setErrors((err) => ({
      ...err,
      [name]: ErrorsDetec[name]
    }))
    
  };

  

  const handlerCountry = (event) => {
    
    
    setActivity({
      ...activity,
      countries:[
       ...activity.countries, event.target.value],
    })
  }

  const handleSubmit = () => {
    setErrors({
      Nombre:'',
      Dificultad:'',
      Duracion:'',
      Temporada:'',
      countries:[],
    })
    

    
    dispatch(postActivity(activity))

    alert('Actividad turística creada exitosamente!');
     
    setActivity({Nombre:"", Dificultad:"", Duracion:"", Temporada:"", countries:[]})
    
  };

  

  return (
    <div>
      <img className={style.back} src={img} alt="Imagen de fondo" />
      <h1>FORM PAGE</h1>
      <Link to="/home">
        <button className={style.backButtom}>Back</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name='Nombre' value={activity.Nombre} onChange={handleChange} required />
        {errors.Nombre && <span style={{ color: 'red' }}>{errors.Nombre}</span>}
        <br /><br />

        <label>Dificultad (1-5):</label>
        <input type="number" name='Dificultad' value={activity.Dificultad} onChange={handleChange} min='1' required />
        {errors.Dificultad && <span style={{ color: 'red' }}>{errors.Dificultad}</span>}
        <br /><br />

        <label>Duración (1-12):</label>
        <input type="number" name='Duracion'value={activity.Duracion} onChange={handleChange} min='1' required />
        {errors.Duracion && <span style={{ color: 'red' }}>{errors.Duracion}</span>}
        <br /><br />

        <label>Temporada:</label>
        <select name='Temporada' value={activity.Temporada} onChange={handleChange} required>
          <option value="">Seleccionar</option>
          <option value="verano">Verano</option>
          <option value="otoño">Otoño</option>
          <option value="invierno">Invierno</option>
          <option value="primavera">Primavera</option>
        </select>
        {errors.Temporada && <span style={{ color: 'red' }}>{errors.Temporada}</span>}
        <br /><br />

        <label>Pais/Paises</label>
        <select name='countries' onChange={handlerCountry} required>
          {sortedCountries.map((country) => (
            <option key={country.id} value={country.id}>{country.nombre}</option>
          ))}
        </select>
        <br /><br />

        <button type='submit'>Crear Actividad</button>
      </form>
      {activity.countries.map((country, index) => {
          return <div key={index}>
            <li>
              {country}
            </li>
          </div>
})
      }
    </div>
  );
};

