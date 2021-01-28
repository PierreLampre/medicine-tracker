import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./setter.css";
import Pill from "../Pill/Pill"

const Setter = (props) => {

    const [pillIndex, setPillIndex] = useState(null);

    function handlePillIndexSetter(index) {
        setPillIndex(index)
    }

    useEffect(() => {
        props.handlePillIndexViews(pillIndex);
    }, [props, pillIndex]);

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
                        <Pill 
                            name={pill.name} 
                            int={pill.interval} 
                            key={props.pillBox.indexOf(pill)} 
                            showkey={props.pillBox.indexOf(pill)}
                            handlePillIndexSetter={handlePillIndexSetter}
                        />
                    )) : null}
                </div>
            </div>

    )
}

export default Setter
