import React, {useState} from "react";
import style from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
        console.log("hola", searchTerm)
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
}