import React, { useEffect, useState } from 'react';
import img from "../img/pexels-james.jpg"
import style from "./form.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../Redux/actions/actions';
import { validateActivityForm } from './validation';


export default function Formu() {
  const [activity, setActivity] = useState({Nombre:"", Dificultad:"", Duracion:"", Temporada:"", countries:[] })
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  
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
    const {name, value} = event.target;

    if(value !== "") {
      setActivity({
        ...activity,
        countries:[
         ...activity.countries, event.target.value],
      })
      const errorCo = validateActivityForm({...activity, [name]: value})
      setErrors((err) => ({
        ...err,
        [name]: errorCo[name]
      }))
    } else {
      setErrors((err) => ({
        ...err,
        [name]:"",
      }))
    }


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

    alert('Tourist activity created successfully!');
     
    setActivity({Nombre:"", Dificultad:"", Duracion:"", Temporada:"", countries:[]})
  };

  

  return (
    <div>
      <img className={style.back} src={img} alt="Imagen de fondo" />
      <h1>FORM PAGE</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name='Nombre' value={activity.Nombre} onChange={handleChange} required />
        {errors.Nombre && <span className={style.error}>{errors.Nombre}</span>}
        <br /><br />

        <label>Difficulty (1-5):</label>
        <input type="number" name='Dificultad' value={activity.Dificultad} onChange={handleChange} min='1' required />
        {errors.Dificultad && <span className={style.error}>{errors.Dificultad}</span>}
        <br /><br />

        <label>Duration (1-12):</label>
        <input type="number" name='Duracion'value={activity.Duracion} onChange={handleChange} min='1' required />
        {errors.Duracion && <span className={style.error}>{errors.Duracion}</span>}
        <br /><br />

        <label>Season:</label>
        <select name='Temporada' value={activity.Temporada} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="verano">Summer</option>
          <option value="otoño">Autumn</option>
          <option value="invierno">Winter</option>
          <option value="primavera">Spring</option>
        </select>
        {errors.Temporada && <span className={style.error}>{errors.Temporada}</span>}
        <br /><br />

        <label>Countries</label>
        <select name='countries' onChange={handlerCountry} required>
          <option value="">Select</option>
          {sortedCountries.map((country) => (
            <option key={country.id} value={country.id}>{country.nombre}</option>
          ))}
        </select>
        {errors.countries && <span className={style.error}>{errors.countries}</span>}
        <br /><br />

        <button  type='submit'>Create Activity</button>
      </form>
      {activity.countries.map((country, index) => {
          return <div key={index} className={style.list}>
            <li className={style.countriesList}>
              {country}
            </li>
          </div>
})
      }
    </div>
  );
};

