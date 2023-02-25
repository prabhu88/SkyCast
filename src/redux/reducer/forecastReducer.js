import {FORECAST_REQUEST,FORECAST_SUCCESS,FORECAST_FAILURE, CLEAR_FORECAST} from '../actionTypes'
const forecastState = JSON.parse(localStorage.getItem("foreCast")) 
const initialState = forecastState ? {
    loading: false,
    data: forecastState,
    error: null
} : {
    loading: false,
    data: null,
    error: null
};
export default function (state = initialState, action) {    
    switch(action.type){
        case FORECAST_REQUEST :
            localStorage.removeItem('foreCast')
            return {
                ...state,
                loading: true,
                error: null
            };   
        case FORECAST_SUCCESS :
            localStorage.setItem('foreCast', JSON.stringify(action.payload));                     
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FORECAST_FAILURE : 
            localStorage.removeItem('foreCast')
            return {
                ...state,
                loading: true,
                error: null
            };
        case CLEAR_FORECAST:
            localStorage.removeItem('foreCast')
            return {
                ...state,
                data: null,
                error: null
            };
        default : 
            return state;
    }
}