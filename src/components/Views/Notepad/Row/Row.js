import React from 'react'
import moment from "moment"

const Row = (props) => {

    let timeStamp = moment()
    .format("LT")
    .toString()
    .toLocaleLowerCase()
    .replace(/\s/g, "");

    let addedTimeStamp = moment().add(props.int, "h")
    .format("LT")
    .toString()
    .toLocaleLowerCase()
    .replace(/\s/g, "");

    return (
    <div className="row">
        <div className="row1">
            <div className="left-margin"></div>
            <div className="entry1">You took {props.name} at {timeStamp}</div>
        </div>
        <div className="row2">
            <div className="left-margin"></div>
            <div className="entry2">You take {props.name} again at {addedTimeStamp}</div>
        </div>
    </div>
    )
}

export default Row
