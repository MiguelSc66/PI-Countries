import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card({bandera, nombre, poblacion, continente, id}) {



    return (
        <div className={style.card}>
      <Link to={`/detail/${id}`}>
        <div className={style.front}>
          <img className={style.img} src={bandera} alt={nombre} />
          <div className={style.infoContainer}>
            <h3 className={style.nombre}>{nombre}</h3>
            <div className={style.datosContainer}>
              <div className={style.datos}>
                <span>Population:</span> {poblacion}
              </div>
              <div className={style.datos}>
                <span>Continent:</span> {continente}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
    );
}