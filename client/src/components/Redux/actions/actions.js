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
            console.log(err)
        }
    }
}

export const getActivities = () => {
  return async (disp) => {
    try {
      const {data} = await axios(`http://localhost:3001/activities`)
      return disp({
        type:"GET_ACTIVITIES",
        payload: data,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const filterActivity = (activities) => {
    console.log(activities)
    return {
      type: "SET_ACTIVITIES",
      payload: activities,
    };
};
  
export const postActivity = (dato)  => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3001/activities`, dato).then((response) => response.data)
    } catch (err) {
      console.log(err)
    }
  }
}


export const Search = (name) => {
  return async (dispatch) => {
    try {
      const {data} =  await axios(`http://localhost:3001/countries/name?pais=${name}`);
      console.log(data)
      return dispatch({
        type: "SET_SEARCH",
        payload: data,
      })
    } catch (err) {
      console.log(err);
    }
  }
}

export const filterCountries = (filterData) => {
  console.log(filterData)
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