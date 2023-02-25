import React,{useEffect} from 'react'
import {Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {fetchForecast} from '../redux/actions/weatherAction'
import './dashboard.scss'
const ProcessData = ({forecastData}) =>{
    
        return(
            <div className="rainy">
                {
                    forecastData.map((f,i)=>{
                        return(
                            <Card id={i} style={{width:'300px'}}>
                                <Card.Header >
                                    <Card.Title>Forcast - {f.date}</Card.Title> 
                                    <Card.Title>
                                        <img src={"http://"+f.day.condition.icon} alt="" /> Avg Temp :  
                                        {f.day.avgtemp_c}&#8451; {f.day.condition.text}
                                    </Card.Title>
                                    {/* <Card.Text>{f.data.location.name}, {f.data.location.region}, {f.data.location.country}</Card.Text> */}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>Sunrise - {f.astro.sunrise}</Card.Text>
                                    <Card.Text>Sunset - {f.astro.sunset}</Card.Text>
                                    <Card.Text>Moonrise - {f.astro.moonrise}</Card.Text>
                                    <Card.Text>Moonset - {f.astro.moonset}</Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    
                    })
                }
            </div>
        )
    
}
const Dashboard = () => {        
    const dispatch = useDispatch();    
    const weather = useSelector(state => state.forecastReducer);      
    useEffect(() => {             
        dispatch(fetchForecast('Madurai','7'))
    },[])
    
    return(
        <>                         
            {weather && weather.loading && <p>Loading...</p>}
            {weather && weather.data && (
                <>
                    <div className="d-flex flex-row justify-content-around mb-5 DashHeader">
                        <div>
                            <img src={"http://"+weather.data.current.condition.icon} alt="" />
                            Temp :  
                            {weather.data.current.temp_c}&#8451; 
                            {weather.data.current.condition.text}
                        </div>
                        <div className="align-self-center" >                    
                            <p className="">{weather.data.location.name}, {weather.data.location.region}, {weather.data.location.country}</p>
                        </div>
                    </div>
                    <ProcessData forecastData={weather.data.forecast.forecastday} />
                </>
            )}
            {weather && weather.error && <p>{weather.error}</p>}             
        </>
    )
}
export default Dashboard