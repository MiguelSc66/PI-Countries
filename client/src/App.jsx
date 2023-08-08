import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Landingpage from "./components/landing-page/landingpage"
import Home from "./components/Home/homePage"
import axios from "axios"
import SearchBar from './components/SearchBar/searchbar'
import Detail from './Detail/Detail'

const Page = 10;

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  const [paginado, setPaginado] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  useEffect(
    () => {
      async function allContries() {
        try {
          const {data} = await axios.get('http://localhost:3001/countries');
          setCountries(data);
          setPaginado(data.slice(0, Page))
        } catch (err) {
          console.log(err)
        }
      };
      allContries();
    }, []
  )

  async function onSearch(dato) {
    try {
      if(!dato.length) {
        setSearch([])
        setPaginado(countries.slice(0, Page))
        return;
      }
      const {data} = await axios.get(`http://localhost:3001/countries/name?pais=${dato}`);
      setSearch(data);

      setPaginado(data.slice(0, Page));
      setCurrentPage(0)
    } catch (err) {
      console.log(err)
    }
  }

  function nextButtom() {
    const totalCountry = search.length > 0 ? search.length : countries.length; 
    const nextPage = currentPage + 1;
    const firstIndex = nextPage*Page;
    const lastIndex = firstIndex + Page;

    if(firstIndex >= totalCountry) return;
    const dataPaginada = search.length > 0 ? search : countries;
    
    setPaginado(dataPaginada.slice(firstIndex, lastIndex))
    setCurrentPage(nextPage)
  }

  function prevButtom() {
    const prevPage = currentPage - 1;
    
    if(prevPage < 0) return;
    const firstIndex = prevPage*Page; 
    const dataPaginada = search.length > 0 ? search : countries;

    setPaginado(dataPaginada.slice(firstIndex, Page + firstIndex));
    setCurrentPage(prevPage);
  }

  return (
    <div>
      {location.pathname !== '/' && !location.pathname.startsWith('/detail/') && <SearchBar onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home countries={paginado} onSearch={onSearch} nextButtom={nextButtom} prevButtom={prevButtom} />} />
        <Route path='/detail/:id' element={<Detail></Detail>}/>
      </Routes>
    </div>
  )
}

export default App;
