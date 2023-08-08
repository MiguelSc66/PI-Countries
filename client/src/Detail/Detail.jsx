import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { useParams, Link, useLocation } from "react-router-dom";
import imgBack from "../components/img/pexels.jpg"

export default function Detail() {
  const { id } = useParams();
  const [country, setCountries] = useState({});
  const location = useLocation();

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then((response) => {
      if (response.data.nombre) {
        setCountries(response.data);
      } else {
        window.alert("No se encuentra ese pais");
      }
    });
    return () => setCountries({});
  }, [id]);

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
    </div>
  );
}
