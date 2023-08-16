import React, {useState} from "react";
import style from "./SearchBar.module.css"
import { useDispatch } from "react-redux";
import { Search } from "../Redux/actions/actions";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const dispatch = useDispatch();



  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(Search(e.target.value))  
  }
    
    return (
      <div className={style.SearchBar}>
        <nav>
        <input
          type="search"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Buscar un pais..."
        />
        </nav>
      </div>
    );
};
