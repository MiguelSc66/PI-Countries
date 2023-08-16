import React from "react";
import axios from "axios";
import style from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteActivity, getActivities } from "../Redux/actions/actions";
import imgBack from "../img/pexels.jpg"

export default function Detail() {
  const { id } = useParams();
  const [country, setCountries] = useState({});
  const [activity, setActivity] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then((response) => {
      if (response.data.nombre) {
        setCountries(response.data);
        setActivity(response.data.Activities)
      } else {
        window.alert("No se encuentra ese pais");
      }
    });
    return () => setCountries({});
  }, [id]);


  const handlerDelete = (activityId) => {
    dispatch(deleteActivity(activityId));
    setActivity(activity.filter((act) => act.id !== activityId));
  }


  return (
    <div className={style.container}>
        <img className={style.back} src={imgBack}></img>
        {location.pathname === `/detail/${id}` && (
        <Link to="/home">
          <button>Back</button>
        </Link>
        )}
      <img
        className={style.flag}
        src={country.bandera}
        alt={`Flag of ${country.name}`}
      />
      <div className={style.data}>
        <span className={style.label}>ID:</span>
        <span className={style.value}>{country.id}</span>
      </div>
      <div className={style.data}>
        <span className={style.label}>Name:</span>
        <span className={style.value}>{country.nombre}</span>
      </div>
      <div className={style.data}>
        <span className={style.label}>Continent:</span>
        <span className={style.value}>{country.continente}</span>
      </div>
      {country.capital && (
        <div className={style.data}>
          <span className={style.label}>Capital:</span>
          <span className={style.value}>{country.capital}</span>
        </div>
      )}
      {country.subregion && (
        <div className={style.data}>
          <span className={style.label}>Subregion:</span>
          <span className={style.value}>{country.subregion}</span>
        </div>
      )}
      <div className={style.data}>
        <span className={style.label}>Population:</span>
        <span className={style.value}>{country.poblacion}</span>
      </div>
      {activity.length >= 1 && <h3 className={style.activities}>Activities</h3>}
      <div className={style.activitiesContainer}>
        <div className={style.activites}>
          {activity.map((activites) => ( 
            <div key={activites.id} className={style.activity}>
              <div className={style.data}>
                <span className={style.label}>Name:</span>
                <span className={style.value}>{activites.Nombre}</span>
              </div>
              <div className={style.data}>
                <span className={style.label}>Dificulty:</span>
                <span className={style.value}>{activites.Dificultad}</span>
              </div>
              <div className={style.data}>
                <span className={style.label}>Duration:</span>
                <span className={style.value}>{activites.Duracion}</span>
              </div>
              <div className={style.data}>
                <span className={style.label}>Season:</span>
                <span className={style.value}>{activites.Temporada}</span>
              </div>
              <button className={style.deleted} onClick={() => handlerDelete(activites.id)}>Deleted</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
