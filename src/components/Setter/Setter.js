import React from 'react';
import { Link } from "react-router-dom";
import "./setter.css";

const Setter = () => {
    return (

            <div className="setter">
                <div className="buttons">
                <Link to="/new-medicine">
                    <button className="button">+ New Medicine</button>
                </Link>
                </div>
                <div className="pill-box">
                    <div className="pill">Metformin</div>
                    <div className="pill">Valsartan</div>
                </div>
            </div>

    )
}

export default Setter
