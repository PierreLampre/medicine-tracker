import React, { useState, useEffect } from 'react';
import "./clock.css";
import moment from "moment";

const Clock = () => {

    const [time, setTime] = useState(moment()
    .format("LT")
    .toString()
    .toLocaleLowerCase()
    .replace(/\s/g, ""));

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
          };
    });

    function tick() {
        setTime(moment()
        .format("LT")
        .toString()
        .toLocaleLowerCase()
        .replace(/\s/g, ""));
       };

       let ampm = time.slice(4, 6);

    return (
       
        <div className="clock">
            <div className="screen">
                <div className="digits">
                    {time.slice(0, 4)} 
                </div>
                <div className="ampm-toggle">
                    {ampm === "am" 
                    ? 
                    <><div className="ampm">{ampm}</div><div className="muted">pm</div></> 
                    :
                    <><div className="muted">am</div><div className="ampm">{ampm}</div></> 
                    }
                </div>
            </div>
        </div>

    )
}

export default Clock
