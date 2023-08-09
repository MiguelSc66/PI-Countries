import axios from "axios";


export const getCountries = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`http://localhost:3001/countries`)
            return dispatch({
                type: "GET_COUNTRIES",
                payload: data
            })
        } catch (err) {
            console.log
        }
    }
}
export const setCurrentPage = (page) => {
    return {
      type: "SET_CURRENT_PAGE",
      payload: page,
    };
};
  

export const setCountries = (countries) => {
  return {
    type: "SET_COUNTRIES",
    payload: countries,
  };
};

export const filterCountries = (filterData) => {
  return {
    type: "FILTER_COUNTRIES",
    payload: filterData,
  };
};

export const sortCountries = (sortOption) => {
  return {
    type: "SORT_COUNTRIES",
    payload: sortOption,
  };
};