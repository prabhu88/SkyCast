import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE } from '../actionTypes'

// const API_KEY = process.env.WEATHER_API_KEY;
// const API_URL = `http://api.weatherapi.com/v1/`
const API_URL = `http://192.168.1.120:9001/weather/`
export const fetchWeather = (city, type) => {  
  return async (dispatch) => {
    try {
      dispatch({ type: WEATHER_REQUEST });      
      // const response = await fetch(`${API_URL}${type}.json?key=${API_KEY}&q=${city}`);
      const response = await fetch(`${API_URL}${type}?q=${city}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
      })      
      const data = await response.json();       
      console.log(data) 
      dispatch({
        type: WEATHER_SUCCESS,
        payload: data
      });      
    } catch (error) {
      dispatch({
        type: WEATHER_FAILURE,
        payload: error.message
      });
    }
  };
};