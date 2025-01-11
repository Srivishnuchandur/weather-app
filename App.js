import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Current from "./components/Current";
import Forecast from "./components/forecast";
import '../node_modules/bootstrap/dist/js/bootstrap';
import sun from '../src/images/sun.png';
import pinksky from '../src/images/pinksky.png'




const Application = () => {
  const [city, setCity] = useState('');
  const [citySuggest, setCitySuggest] = useState([]);

  const [currentWeather, setCurrentWeather] = useState('');
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState('');



  const fetchCityURL = "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  const weatherURL = (selectedCity) => ` https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${selectedCity}&days=7&aqi=no&alerts=no`

  useEffect(() => {

    if (city && city.length > 3) {
      fetchCityApi();
    }

  }, [city]);

  const fetchCityApi = async () => {
    try {
      const response = await axios.get(fetchCityURL + city);
      const respdata = await response.data;
      console.log("api called", respdata);

      const cityData = respdata.map((data) => {
        return `${data.name},${data.region},${data.country}`

      });
      setCitySuggest(cityData);
    }
    catch (e) {
      console.log(e)
    }

  }



  const handleinput = (e) => {
    setCity(e.target.value)
    if (e.target.value === "") {
      setCurrentWeather();
      setLocation();
      setForecast();
      setCity();
      setCitySuggest();

    }
   
  }
 
  const handleSelectedcity = (selectedCity) => {
    console.log("clicked city", selectedCity);
    setCity(selectedCity)


    fetchWheatherApi(selectedCity);
    setCitySuggest();


  };
  const fetchWheatherApi = async (selectedCity) => {
    const weatherResp = await axios.get(weatherURL(selectedCity))
    const getresp = await weatherResp.data;
    setCurrentWeather(getresp.current);
    setLocation(getresp.location);
    setForecast(getresp.forecast);
    console.log(currentWeather);
    console.log(location);
    console.log(forecast);



  }
  return (
    <>

      {/* <div className=" " style={{
        width: '100hv',
        height: '1000px',
        backgroundImage: `url(${pinksky})`,
        backgroundSize: "cover",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}> */}
<div>
        <div className=" container p-3   bg-primary  mt-5 ">

          <p className='text-center text-color red p-3'> <img src={sun} style={{ maxWidth: "60px", maxHeight: "60px" }} /><h3 className="mt-2"><i>To Fetch Weather</i></h3></p>
          <input type="Text" value={city} className="form-control" placeholder='Enter City' id="exampleInputPassword1" onChange={handleinput} />
         
         


          {citySuggest && citySuggest.map((data) => {
            return <div className="text-center bg-info rounded mt-1 p-1 bg-opacity-10% border border" onClick={() => handleSelectedcity(data)}>{data}


            </div>

          })}

          {currentWeather && <Current currentWeather={currentWeather} location={location} />}
          {forecast && <Forecast currentWeather={currentWeather} location={location} forecast={forecast} />}


        </div>

      </div>


    </>
  );
}
export default Application;
