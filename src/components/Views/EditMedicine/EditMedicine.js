import React from 'react'
import { Link } from "react-router-dom"
import "./edit-medicine.css"

const EditMedicine = (props) => {

    return (
        <div className="edit-medicine-container">
           <div className="center">
            {props.pillIndex !== null 
            ?
            <>
            <h1>{props.pillBox[props.pillIndex].name}</h1>
            <p>You take {props.pillBox[props.pillIndex].name} every {props.pillBox[props.pillIndex].interval} hours</p>
            </>
            :
            <h1>No Pill Selected</h1> }
           </div>
           <div className="edit-button-box">
               <button className="edit-button">Take Medicine</button>
               <button className="edit-button">Remove Medicine</button>
           </div>
           <Link to="/" className="go-back">
            Go Back To Notepad 
           </Link>
        </div>
    )
}

export default EditMedicine
