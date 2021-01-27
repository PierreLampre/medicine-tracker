import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./new-medicine.css"

const NewMedicine = (props) => {

    const [newPill, setNewPill] = useState("");
    const [pillInterval, setPillInterval] = useState(0);

    function sendInfoClearInputs() {
        props.passedFunc(newPill, pillInterval);
        document.getElementById("text").value="";
        document.getElementById("number").value="";
    }

    return (
        <div className="new-medicine-container">
            <div className="new-med-box">
                <h2>Add New Medicine</h2>

                <input 
                    type="text"
                    id="text"
                    onChange={(e) => setNewPill(e.target.value)} 
                />
                <p>
                    I take this medicine every
                    <input 
                    type="number" 
                    id="number"
                    onChange={(e) => setPillInterval(e.target.value)} 
                    /> 
                    hours.
                </p>
                <button 
                    className="add-medicine"
                    onClick={() => {
                        sendInfoClearInputs()
                    }}
                    >
                        Add To Pill Box
                        
                    </button>  
                <Link to="/">
                    Go Back To Notepad
                </Link>
            </div>
        </div>
    )
}

export default NewMedicine
