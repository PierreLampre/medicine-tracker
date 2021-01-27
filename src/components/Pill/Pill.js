import React from 'react'
import "./pill.css"

const Pill = (props) => {
    return (
        <div className="pill" interval={props.int}>
            {props.name}
        </div>
    )
}

export default Pill
