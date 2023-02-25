import {combineReducers} from 'redux'
import weatherReducer from './reducer/weatherReducer'
import forecastReducer from './reducer/forecastReducer'
export default combineReducers({weatherReducer,forecastReducer})