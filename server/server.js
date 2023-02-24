import appModulePath from 'app-module-path';
import http from 'http';
import express from 'express';
import cors from 'cors';
var bodyParser = require('body-parser')
var async = require('async')
appModulePath.addPath(`${__dirname}`);

const Api = express();



async.waterfall([
    (callback)=>{
        Api.use(cors());
        Api.use(bodyParser.json({ limit: '50mb' }));
        Api.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        Api.get('/test', (req, res) => {            
            res.status(200).send('success!')
        });
        Api.get('/weather/current', (req, res) => {             
            try{                
                let city = req.query['q']
                console.log(city)
                let result = {
                    "location": {
                      "name": city ? city : "Madurai",
                      "region": "Tamil Nadu",
                      "country": "India",
                      "lat": 9.93,
                      "lon": 78.12,
                      "tz_id": "Asia/Kolkata",
                      "localtime_epoch": 1677228718,
                      "localtime": "2023-02-24 14:21"
                    },
                    "current": {
                      "last_updated_epoch": 1677228300,
                      "last_updated": "2023-02-24 14:15",
                      "temp_c": 33,
                      "temp_f": 91.4,
                      "is_day": 1,
                      "condition": {
                        "text": "Partly cloudy",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                        "code": 1003
                      },
                      "wind_mph": 5.6,
                      "wind_kph": 9,
                      "wind_degree": 120,
                      "wind_dir": "ESE",
                      "pressure_mb": 1012,
                      "pressure_in": 29.88,
                      "precip_mm": 0,
                      "precip_in": 0,
                      "humidity": 39,
                      "cloud": 25,
                      "feelslike_c": 32,
                      "feelslike_f": 89.6,
                      "vis_km": 8,
                      "vis_miles": 4,
                      "uv": 9,
                      "gust_mph": 9.2,
                      "gust_kph": 14.8
                    }
                }
                
                //res.status(200).send(JSON.stringify(result))
                res.status(200).send(JSON.stringify(result, null, 3));
                //res.end(JSON.stringify(result, null, 3));
            }
            catch(e){
                console.log(e)
                res.setHeader('Content-Type', 'application/json');
                res.status(500).send('internal server error')
            }
            
        });
        Api.use('*', function (req, res) {
            res.status(404).send('Page Not Found');
            res.end();
        });
        callback(null, true);
    }
],(error,response) => {
    if(error){
        console.log(error)
    }
    else{
        const server = http.Server(Api);
        server.listen(9001, () => {
            console.log('listening on *:9001');
        });
    }
})

