import React, { useState, useEffect} from "react";
import style from "./Card.module.css"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function Card({bandera, nombre, contiente, id}) {



    return (
        // <Link to={`/detail/${id}`}>
            <div className={style.card}>
                <div className={style.front}>
                    <img className={style.img} src={bandera} alt={nombre} />
                    <h3 className={style.nombre}>{nombre}</h3>
                    <h3 className={style.continente}>{contiente}</h3>
                </div>
            </div>
        // </Link>
    );
}