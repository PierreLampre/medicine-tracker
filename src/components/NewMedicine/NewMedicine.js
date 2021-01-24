import React from 'react'
import { Link } from "react-router-dom"
import "./new-medicine.css"

const NewMedicine = () => {
    return (
        <div className="new-medicine-container">
            <div className="new-med-box">

                <label>New Medicine</label>
                <input type="text" />
                <p>I take this medicine every <input type="number" /> hours.</p>
                <button className="add-medicine">Add New Medicine</button>  
                <Link to="/">
                    Go Back To Notepad
                </Link>
            </div>
        </div>
    )
}

export default NewMedicine
