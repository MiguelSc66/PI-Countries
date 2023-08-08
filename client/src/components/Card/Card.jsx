import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom";


export default function Card({bandera, nombre, continente, id}) {



    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`}>
                <div className={style.front}>
                    <img className={style.img} src={bandera} alt={nombre} />
                    <h3 className={style.nombre}>{nombre}</h3>
                    <h3 className={style.continente}>{continente}</h3>
                </div>
            </Link>
        </div>
    );
}