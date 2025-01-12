import React from "react";
import { useState } from "react";
import "../CSS/current.css"


const Current = ({ currentWeather, location }) => {

    const [message, setMessage] = useState('');
    const [alert, setAlert] = useState(false);





    return (
        <div className="container  m-5" >

            <h3 className="text-center text-white  ">Current weather of {location.name},{location.region},{location.country} </h3>

            <div className="row" m-5>

                {/* col 1 */}
                <div className=" col-md-3 p-2  ">

                    <div className="card" >
                        <div className="d-flex justify-content-center align-items-center mt-3">
                            <img src={currentWeather.condition.icon} style={{ maxWidth: "60px", maxHeight: "60px" }} className="card-img-top  " alt="..." />

                        </div>       <div class="card-body">
                            <h5 class="card-title text-center">{currentWeather.condition.text}</h5>

                        </div>

                    </div>

                </div>


                {/* col 2 */}
                <div className="col-sd-12 col-md-2 mt-5 ">

                    <div className="card" >


                        <div class="card-body">
                            <h5 class="card-title text-center">Temp in c: "{currentWeather.temp_c}"</h5>

                        </div>

                    </div>

                </div>


                {/* col 3 */}
                <div className="col-sd-12 col-md-2  mt-5 ">

                    <div className="card" >

                        <div class="card-body">
                            <h5 class="card-title text-center">Temp in f: "{currentWeather.temp_f}"</h5>

                        </div>

                    </div>

                </div>

                <div className="feelslike ">
                    <div className="row">
                        {/* col 4 */}
                        <div className="col-sd-12 col-md-4  mt-5 ">

                            <div className="card" >

                                <div class="card-body">
                                    <h5 class="card-title text-center">Feelslike_c: "{currentWeather.feelslike_c}"</h5>

                                </div>

                            </div>

                        </div>

                        {/* col 5 */}
                        <div className="col-sd-12 col-md-4  mt-5 ">

                            <div className="card" >

                                <div class="card-body">
                                    <h5 class="card-title text-center">Feelslike_f: "{currentWeather.feelslike_f}"</h5>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>





            </div>
        </div>

    )
}
export default Current;