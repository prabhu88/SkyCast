import { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_FAILURE, CLEAR_WEATHER } from '../actionTypes'
const weatherState = JSON.parse(localStorage.getItem("weatherState")) 
const initialState = weatherState ? {
    loading: false,
    data: weatherState,
    error: null
} : {
    loading: false,
    data: null,
    error: null
};
export default function (state = initialState, action) {
    switch (action.type) {
        case WEATHER_REQUEST:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                loading: true,
                error: null
            };
        case WEATHER_SUCCESS:
            localStorage.setItem('weatherState', JSON.stringify(action.payload));            
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case WEATHER_FAILURE:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            };
        case CLEAR_WEATHER:
            localStorage.removeItem('weatherState')
            return {
                ...state,
                data: null,
                error: null
            };
        default:
            return state;
    }
};



