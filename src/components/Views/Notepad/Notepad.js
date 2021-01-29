import React from 'react';
import "./notepad.css";

const Notepad = (props) => {



    return (

            <div className="notepad">
               <div className="top-binding"></div>
                <div className="paper">
                    <div className="empty-top-margin">
                        <div className="left-margin"></div>
                        <div className="hole-box">
                            <span className="hole"></span>
                            <span className="hole"></span>
                        </div>
                    </div>
                 {props.rowArray.map(row=>row)}
                   <div className="row">
                        <div className="row1">
                            <div className="left-margin"></div>
                            <div className="entry1"></div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Notepad;
