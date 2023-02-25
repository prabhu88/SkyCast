import React,{useState,useEffect} from 'react'
import {Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {fetchWeather} from '../redux/actions/weatherAction'

const LocationBased = () => {
    const dispatch = useDispatch();    
    const weather = useSelector(state => state.weatherReducer);    
    const [city,setCity] = useState('');
    const reqData = () =>{
        dispatch(fetchWeather(city,'current'))        
    }
    useEffect(() => {      
        dispatch(fetchWeather('Madurai','current'));
    },[])
    return(
        <> 
            <div className="d-flex flex-row mb-5">
                <input type="text" placeholder="CITY / Pincode" value={city} onChange={e=>setCity(e.target.value)} /> 
                <button className="btn btn-xs" style={{fontSize:"inherit",background:'orange'}} onClick={reqData}> Submit</button>
            </div>                       
            {weather.loading && <p>Loading...</p>}
            {weather.data && (
                <div className="rainy">
                <Card style={{width:'300px'}}>                                        
                    <Card.Header >                        
                        <Card.Title>
                            <img src={"http://"+weather.data.current.condition.icon} alt="" /> Temp :  
                            {weather.data.current.temp_c}&#8451; {weather.data.current.condition.text}
                        </Card.Title>
                        <Card.Text>{weather.data.location.name}, {weather.data.location.region}, {weather.data.location.country}</Card.Text>
                    </Card.Header>                    
                    <Card.Body>
                        <Card.Text>Time Zone : {weather.data.location.tz_id}</Card.Text>
                        <Card.Text>Time : {weather.data.location.localtime}</Card.Text>
                    </Card.Body>                    
                </Card>
                <Card style={{width:'300px'}}>                                        
                    <Card.Header flex>                        
                        <Card.Title>
                            <img src={"http://"+weather.data.current.condition.icon} alt="" /> Wind :  
                            {weather.data.current.wind_mph} Miles/Hour
                        </Card.Title>
                        <Card.Text>{weather.data.location.name}, {weather.data.location.region}, {weather.data.location.country}</Card.Text>
                    </Card.Header>                    
                    <Card.Body>
                        <Card.Text>Time Zone : {weather.data.location.tz_id}</Card.Text>
                        <Card.Text>Time : {weather.data.location.localtime}</Card.Text>
                    </Card.Body>                    
                </Card>
                </div>
            )}
            {weather.error && <p>{weather.error}</p>}             
        </>
    )
}
export default LocationBased