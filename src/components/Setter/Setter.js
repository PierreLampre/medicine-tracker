import React from 'react';
import { Link } from "react-router-dom";
import "./setter.css";
import Pill from "../Pill/Pill"

const Setter = (props) => {
    return (

            <div className="setter">
                <div className="buttons">
                <Link to="/new-medicine">
                    <button className="button">+ New Medicine</button>
                </Link>
                </div>
                <div className="pill-box">
                    {props.pillBox.length > 0 ? 
                    props.pillBox.map(pill => (
                        <Pill name={pill.name} int={pill.interval} key={pill.name}/>
                    )) : null}
                </div>
            </div>

    )
}

export default Setter
