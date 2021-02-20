import React from 'react'
import { Link } from "react-router-dom"
import "./edit-medicine.css"

const EditMedicine = (props) => {

    function handleTakeMedicine() {
        let notification = document.getElementById("hidden-note");
        props.pushToNotepadStrings();
        notification.style.opacity = 1;
        setTimeout(function () { (notification.style.opacity = 0); }, 750);
    }

    return (
        <div className="edit-medicine-container">
            <div className="center">
                {props.pillIndex !== null && props.pillBox.length !== 0 && props.pillBox[props.pillIndex] !== undefined
                    ?
                    <>
                        <h1>{props.pillBox[props.pillIndex].name}</h1>
                        <p>You take {props.pillBox[props.pillIndex].name} every {props.pillBox[props.pillIndex].interval} hours</p>
                        <h3 id="hidden-note" className="post-notification">You took {props.pillBox[props.pillIndex].name}</h3>
                    </>
                    :
                    <>
                        <h1>No Pill Selected</h1>
                        <h3>Please select a pill.</h3>
                    </>
                }
            </div>
            { props.pillIndex !== null
                ?
                <div className="edit-button-box">
                    <button
                        className="edit-button"
                        onClick={() => handleTakeMedicine()}
                    >
                        Take Medicine</button>
                    <button
                        className="edit-button"
                        onClick={() => props.removePillFromPillBox(props.pillIndex)}
                    >
                        Remove Medicine</button>
                </div>
                :
                <div className="edit-button-box">
                    <button
                        className="edit-button disabled"
                    >
                        Take Medicine</button>
                    <button className="edit-button disabled">Remove Medicine</button>
                </div>
            }
            <Link to="/" className="go-back">
                Go Back To Notepad
           </Link>
        </div>
    )
}

export default EditMedicine
