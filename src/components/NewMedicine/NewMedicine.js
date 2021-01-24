import React from 'react'
import { Link } from "react-router-dom"
import "./new-medicine.css"

const NewMedicine = () => {
    return (
        <div className="new-medicine-container">
            <Link to="/">
                Go Back To Notepad
            </Link>
        </div>
    )
}

export default NewMedicine
