import React from "react";
import style from "./landingpage.module.css"
import image from "../img/countries.png"
import { Link } from "react-router-dom";

export default function landing() {
    return <div className={style.container}>
        <img className={style.image} src={image} alt="Imagen de fondo"></img>
        <div className={style.title}> 
            <h1 className={style.h1}>World Wander</h1>
        </div>
        <div className={style.descriptionContainer}>
            <div className={style.description}>
                <p>
                Welcome to World Wander! Embark on a journey to explore the
                rich cultural and natural wonders of every country, and craft memorable
                activities for your upcoming travels. Let your wanderlust be ignited by
                our curated content, and effortlessly plan your dream adventures. 
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