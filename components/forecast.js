import { useState } from "react";
import React from "react";

const Forecast = ({ location, forecast }) => {


    return (
        <div>
            <h2 className="text-center text-white  ">Forecast of {location.name},{location.region},{location.country}</h2>

            {forecast.forecastday.map((data, index) => {
                return (
                    <div className="  accordion mt-3" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="collapseOne">
                                    <div className="d-flex flex-row ">
                                        <div className="p-2 mt-2">{data.date}</div>
                                        <div className="p-2 " ><img src={data.day.condition.icon} /></div>

                                        <div className="p-2 mt-2"><h6>{data.day.condition.text}</h6></div>{ }

                                        <div className="p-2 mt-2 "><h5>max temp{data.day.maxtemp_c}</h5></div>
                                    </div>
                                </button>
                            </h2>
                            <div id={`${index}`} className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {data.hour.map((data) => {
                                        return (
                                            <>
                                                <div className="container text-center"> <h5>{data.time}    { }  max temp:{data.temp_c}</h5></div>
                                                <div className="progress mt-2" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: `${data.temp_c}%` }}>{data.temp_c}c</div>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}





        </div>
    )


}
export default Forecast;
