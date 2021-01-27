import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./edit-medicine.css"

const EditMedicine = (props) => {

    return (
        <div className="edit-medicine-container">
           <div className="center">
                {JSON.stringify(props)}
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
