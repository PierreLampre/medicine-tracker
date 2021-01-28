import React from 'react'
import { Link } from "react-router-dom"
import "./pill.css"

const Pill = (props) => {
    return (
        <Link 
            className="link" 
            to="/edit-medicine"
            onClick={() => props.handlePillIndexSetter(props.showkey)}
        >
            <div 
                className="pill" 
                name={props.name} 
                interval={props.int}
                showkey={props.showkey}
            >
                {props.name}
            </div>
        </Link>
    )
}

export default Pill
