import React, { useEffect } from "react";
import style from "./home.module.css";
import Cards from "../Cards/Cards";
import imgBack from "../img/pexels-james.jpg";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, sortCountries, getCountries, setCurrentPage  } from "../Redux/actions/actions";

export default function Home({ nextButtom, prevButtom }) {
  const dispatch = useDispatch();
  const filteredAndSortedCountries = useSelector(
    (state) => state.countries
  );
  const currentPage = useSelector((state) => state.currentPage); // Obtén la página actual desde Redux
  const countriesPerPage = useSelector((state) => state.countriesPerPage); // Obtén la cantidad de países por página desde Redux
    console.log(filteredAndSortedCountries);
  useEffect( 
    () => {
      dispatch(getCountries())
    }, [dispatch]
  )
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(filterCountries(filterValue));
    dispatch(setCurrentPage(0)); 
  };
  
  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    dispatch(sortCountries(sortOption)); 
    dispatch(setCurrentPage(0))
  };
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredAndSortedCountries.slice(indexOfFirstCountry, indexOfLastCountry);
  
  return (
    <div className={style.container}>
      <img className={style.back} src={imgBack} alt="Background Image"></img>
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
      <div className={style.filters}>
        <select className={style.filterSelect} onChange={handleFilterChange}>
          <option value="all">All Continents</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
        </select>
        <select className={style.filterSelect} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="nameAsc">Name A-Z</option>
          <option value="nameDesc">Name Z-A</option>
          <option value="populationAsc">Population Ascending</option>
          <option value="populationDesc">Population Descending</option>
        </select>
      </div>
      <div className={style.containerCountries}>
        <div className={style.countries}>
          <Cards countries={filteredAndSortedCountries} /> 
        </div>
      </div>
    </div>
  );
}






