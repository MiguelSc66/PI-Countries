const initialState = {
    countries: [],
    activity: [],
    allCountries: [],
    currentPage: 0, 
    countriesPerPage: 10,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            
        return {
            ...state,
            countries: action.payload,
            allCountries: action.payload, 
        }
        case "SET_CURRENT_PAGE":
        return {
            ...state,
            currentPage: action.payload,
        };

      case "SET_COUNTRIES":
        return {
          ...state,
          countries: action.payload,
          
        };
        case "ACTIVITY": 
        return {
            ...state,
            countries:action.payload,
            activity: action.payload
        }
      case "FILTER_COUNTRIES":
        return {
            ...state,
            countries: action.payload === "all"? state.allCountries : state.allCountries.filter((el) => el.continente === action.payload),
          };
      case "SORT_COUNTRIES":
        const sortOption = action.payload;
        const sortedCountries = [...state.countries];
  
        if (sortOption === "nameAsc") {
          sortedCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
        } else if (sortOption === "nameDesc") {
          sortedCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
        } else if (sortOption === "populationAsc") {
          sortedCountries.sort((a, b) => a.poblacion - b.poblacion);
        } else if (sortOption === "populationDesc") {
          sortedCountries.sort((a, b) => b.poblacion - a.poblacion);
        }
  
        return {
          ...state,
          countries: sortedCountries,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;