import React from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css"

export default function Cards({countries}) {
    return <div className={style.conteiner}>
        {countries.map((obj) => {
            return <Card
            key={obj.id} 
            id={obj.id} 
            bandera={obj.bandera}
            nombre={obj.nombre}
            continente={obj.continente}
            poblacion={obj.poblacion}
            >
            </Card>
        })}
    </div>
}