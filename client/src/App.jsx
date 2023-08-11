import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Landingpage from "./components/landing-page/landingpage"
import Home from "./components/Home/homePage"
import SearchBar from './components/SearchBar/searchbar'
import Detail from './components/Detail/Detail'
import Formu from './components/Form/form'


function App() {
  const location = useLocation();



  return (
    <div>
      {location.pathname !== '/' && !location.pathname.startsWith('/detail/') && !location.pathname.startsWith('/form') && <SearchBar/>}
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home  />} />
        <Route path='/detail/:id' element={<Detail></Detail>}/>
        <Route path='/form' element={<Formu></Formu>}></Route>
      </Routes>
    </div>
  )
}

export default App;
