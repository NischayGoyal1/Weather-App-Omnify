import React from "react";
import { Image } from "react-bootstrap";


export default function HourlyForecast({icon, min, max, date}) {
    return (
        <>
            <div className="hourly-wrp">
                <p>{date.slice(0, -17)}</p>
                <Image
                    src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                    alt="forecast icon"
                    style={{width: " 50px"}}
                />
                <p><span className="min">{min}°</span> {max}°</p>
            </div>
        </>
    );
}
