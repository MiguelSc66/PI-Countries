import React from "react";
import style from "./landingpage.module.css"
import image from "../img/countries.png"
import { Link } from "react-router-dom";

export default function landing() {
    return <div className={style.container}>
        <img className={style.image} src={image} alt="Imagen de fondo"></img>
        <div className={style.title}> 
            <h1 className={style.h1}>Global Escapades</h1>
        </div>
        <div className={style.descriptionContainer}>
            <div className={style.description}>
                <p>
                    ¡Bienvenido a Global Escapades! Explora la diversidad cultural y
                    natural de cada país y descubre emocionantes actividades turísticas.
                    Inspírate con nuestras imágenes y planifica tu próxima aventura.
                    Únete a nuestra comunidad y comparte tus experiencias de viaje.
                </p>
            </div>
        </div>
        <div className={style.buttonContainer}>
            <Link to="/home" className={style.link}>
                <button className={style.arrowButton}>
                    <span className={style.arrow}></span>
                </button>
            </Link>
        </div>
    </div>
}