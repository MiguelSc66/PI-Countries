import React from "react";
import style from "./home.module.css";
import Cards from "../Cards/Cards";
import imgBack from "../img/pexels-james.jpg"

export default function Home({ countries, nextButtom, prevButtom }) {
  return (
    <div className={style.container}>
      <img className={style.back} src={imgBack} alt="Imagen de fondo"></img>
      <div className={style.title}>
        <h1 className={style.text}>Countries</h1>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={prevButtom}>
          Back
        </button>
        <button className={style.button} onClick={nextButtom}>
          Next
        </button>
      </div>
      <div className={style.containerCountries}>
        <div className={style.countries}>
          <Cards countries={countries} />
        </div>
      </div>
    </div>
  );
}