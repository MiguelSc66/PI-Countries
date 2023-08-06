import React, { useState } from "react";
import style from "./home.module.css"
import Cards from "../Cards/Cards";


export default function Home({ countries, nextButtom, prevButtom,  }) {
    return (
      <div className={style.container}>
        <div className={style.title}>
          <h1 className={style.text}>Countries</h1>
        </div>
        <button onClick={nextButtom}>Next</button>
        <button onClick={prevButtom}>Back</button>
        <div className={style.containerCountries}>
          <div className={style.countries}>
            <Cards countries={countries} />
          </div>
        </div>
      </div>
    );
  }