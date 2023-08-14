import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import Cards from "../Cards/Cards";
import imgBack from "../img/pexels-james.jpg";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, sortCountries, getCountries, filterActivity  } from "../Redux/actions/actions";


export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const filteredAndSortedCountries = useSelector(
    (state) => state.countries
  );
  const totalPage = Math.ceil(filteredAndSortedCountries.length / 10)

  function ContryForPage() {
    const startIndex = currentPage*10;
    const endIndex = startIndex+10;
    return filteredAndSortedCountries.slice(startIndex, endIndex);
  }

  const Cont = ContryForPage();
  
  useEffect( 
    () => {
      dispatch(getCountries())
    }, [dispatch]
  )
  const handleFilterChange = (event) => {
    const filterValue = event.target.value;
    dispatch(filterCountries(filterValue));
  };
  
  const handleSortChange = (event) => {
    const sortOption = event.target.value;
    dispatch(sortCountries(sortOption)); 
  };

  const handlerActivities = (event) => {
    const activityFilt = event.target.value;
    dispatch(filterActivity(activityFilt));
  }

  function NextHandler() {
    setCurrentPage(page => Math.min(page + 1, totalPage-1))
  }

  function prevHandler() {
    setCurrentPage(page => Math.max(page-1, 0))
  }
  
  return (
    <div className={style.container}>
      <img className={style.back} src={imgBack} alt="Background Image"></img>
      <div className={style.title}>
        <h1 className={style.text}>Countries</h1>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button} onClick={prevHandler}>
          Back
        </button>
        <button className={style.button} onClick={NextHandler}>
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
        <select className={style.filterSelect} onChange={handlerActivities}>
          <option value="">Select</option>
          <option value="Activities">Activities</option>

        </select>
      </div>
      <div className={style.containerCountries}>
        <div className={style.countries}>
          <Cards countries={Cont} /> 
        </div>
      </div>
    </div>
  );
}






